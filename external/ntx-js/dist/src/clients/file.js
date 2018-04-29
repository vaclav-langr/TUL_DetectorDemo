"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Subject_1 = require("rxjs/Subject");
const engine_1 = require("../generated/engine");
const http = require("http");
const https = require("https");
const Form = require("form-data");
const url = require("url");
var engine = engine_1.ntx.v2t.engine;
var AudioChannel = engine_1.ntx.v2t.engine.EngineContext.AudioChannel;
class FileBlob {
    constructor(body, name = "file", contentType = "application/octet-stream") {
        this.body = body;
        this.name = name;
        this.contentType = contentType;
    }
}
exports.FileBlob = FileBlob;
function audioChannelToString(ch) {
    switch (ch) {
        case AudioChannel.AUDIO_CHANNEL_DOWNMIX:
            return "downmix";
        case AudioChannel.AUDIO_CHANNEL_LEFT:
            return "left";
        case AudioChannel.AUDIO_CHANNEL_RIGHT:
            return "right";
        default:
            throw new Error(`unknown AudioChannel enum value ${ch}`);
    }
}
// thread-safe, should be used for buffers up to few MBs
class FileAPI {
    constructor(endpoint, token) {
        this.token = token;
        this.url = url.parse(endpoint);
    }
    v2t(file, lexicon, channel) {
        const results = new Subject_1.Subject();
        const form = new Form();
        form.append("file", file.body, {
            filename: file.name,
            contentType: file.contentType,
        });
        if (lexicon) {
            form.append("lexicon", JSON.stringify(lexicon));
        }
        if (channel) {
            form.append("channel", audioChannelToString(channel));
        }
        const headers = form.getHeaders();
        headers["ntx-token"] = this.token;
        let reqFn = http.request;
        if (this.url.protocol.startsWith("https")) {
            reqFn = https.request;
        }
        const req = reqFn({
            protocol: this.url.protocol,
            method: "POST",
            hostname: this.url.hostname,
            port: parseInt(this.url.port, 10),
            path: this.url.pathname,
            headers: headers,
        }, (response) => {
            let tempParseBuffer = "";
            const writeLines = (last) => {
                const lines = tempParseBuffer.split("\n");
                let linesToProcess = [];
                if (last) {
                    // all results should be complete
                    linesToProcess = lines;
                }
                else {
                    // last line might be incomplete
                    if (lines.length > 1) {
                        // return last line back to buffer
                        tempParseBuffer = lines[lines.length - 1];
                        // process rest
                        linesToProcess = lines.slice(0, lines.length - 1);
                    }
                }
                for (const line of linesToProcess) {
                    // skip empty lines
                    if (!line) {
                        continue;
                    }
                    const es = engine.EngineStream.create(JSON.parse(line));
                    if (es.push && es.push.events) {
                        results.next(es.push.events);
                    }
                    if (es.end && es.end.error) {
                        results.error(es.end.error);
                        return;
                    }
                }
            };
            response.on("data", function (d) {
                if (response.statusCode !== 200) {
                    results.error(`unexpected status code ${response.statusCode}, error '${d.toString("utf-8")}'`);
                }
                else {
                    tempParseBuffer += d.toString("utf-8");
                    writeLines(false);
                }
            });
            response.on("end", function () {
                writeLines(true);
                results.complete();
            });
            response.on("error", function (err) {
                results.error(err);
            });
        });
        req.on("error", (err) => {
            results.error(`request err: ${err}`);
        });
        form.pipe(req);
        return results;
    }
}
exports.FileAPI = FileAPI;
//# sourceMappingURL=file.js.map