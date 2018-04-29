"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const engine_1 = require("../src/generated/engine");
var engine = engine_1.ntx.v2t.engine;
const fs = require("fs");
const jwt = require("jsonwebtoken");
function inMemoryFileReader(path, maxChunkSize = 65536) {
    const fileBytes = fs.readFileSync(path);
    const fileLength = fileBytes.length;
    let offset = 0;
    return function () {
        if (offset >= fileLength) {
            // null == end of stream
            return Promise.resolve(null);
        }
        // send at most maxChunkSize bytes in one message
        let bytesToRead = fileLength - offset;
        if (bytesToRead > maxChunkSize) {
            bytesToRead = maxChunkSize;
        }
        // to byte array
        const chunk = new Uint8Array(fileBytes.buffer, offset, bytesToRead);
        offset += bytesToRead;
        // send as audio event
        const events = new engine.Events({
            events: [new engine.Event({
                    audio: new engine.Event.Audio({
                        body: chunk,
                    })
                })]
        });
        return Promise.resolve(events);
    };
}
exports.inMemoryFileReader = inMemoryFileReader;
function fileV2tAPIEndpointFromNtxToken(token) {
    return normalizedAudienceFromNtxToken(token) + "/api/v1/file/v2t";
}
exports.fileV2tAPIEndpointFromNtxToken = fileV2tAPIEndpointFromNtxToken;
function wsV2tAPIEndpointFromNtxToken(token) {
    return normalizedAudienceFromNtxToken(token) + "/ws/v1/v2t";
}
exports.wsV2tAPIEndpointFromNtxToken = wsV2tAPIEndpointFromNtxToken;
function normalizedAudienceFromNtxToken(token) {
    const tkn = jwt.decode(token);
    const iss = tkn.iss;
    for (const a of tkn.aud) {
        // filter all issuer specific audiences
        if (!a.startsWith(iss)) {
            // remove trailing slash
            return a.replace(/\/$/, "");
        }
    }
    throw new Error(`Expected to find cluster audience in '${tkn}'`);
}
//# sourceMappingURL=util.js.map