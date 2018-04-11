import {Subject} from "rxjs/Subject";
import {ntx} from "../generated/engine";
import * as http from "http";
import * as https from "https";
import * as Form from "form-data";
import * as url from "url";
import engine = ntx.v2t.engine;
import Lexicon = ntx.v2t.engine.Lexicon;
import AudioChannel = ntx.v2t.engine.EngineContext.AudioChannel;

export class FileBlob {
    constructor(public body: Buffer, public name: string = "file", public contentType: string = "application/octet-stream") {
    }
}

function audioChannelToString(ch: AudioChannel): string {
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
export class FileAPI {

    private url: url.Url;

    constructor(endpoint: string, private token: string) {
        this.url = url.parse(endpoint);
    }

    v2t(file: FileBlob, lexicon?: Lexicon, channel?: AudioChannel): Subject<engine.IEvents> {
        const results = new Subject<engine.IEvents>();

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

            const writeLines = (last: boolean) => {
                const lines = tempParseBuffer.split("\n");

                let linesToProcess: string[] = [];

                if (last) {
                    // all results should be complete
                    linesToProcess = lines;
                } else {
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

            response.on("data", function (d: Buffer) {
                if (response.statusCode !== 200) {
                    results.error(`unexpected status code ${response.statusCode}, error '${d.toString("utf-8")}'`);
                } else {
                    tempParseBuffer += d.toString("utf-8");
                    writeLines(false);
                }
            });

            response.on("end", function () {
                writeLines(true);
                results.complete();
            });

            response.on("error", function (err: Error) {
                results.error(err);
            });
        });

        req.on("error", (err: Error) => {
            results.error(`request err: ${err}`);
        });

        form.pipe(req);

        return results;
    }

}