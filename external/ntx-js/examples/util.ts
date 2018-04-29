import {ntx} from "../src/generated/engine";
import engine = ntx.v2t.engine;
import * as fs from "fs";
import * as jwt from "jsonwebtoken";


export type EventReadFn = () => Promise<engine.Events | null>;

export function inMemoryFileReader(path: string, maxChunkSize: number = 65536): EventReadFn {
    const fileBytes = fs.readFileSync(path);
    const fileLength = fileBytes.length;
    let offset = 0;

    return function (): Promise<engine.Events | null> {
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

export function fileV2tAPIEndpointFromNtxToken(token: string): string {
    return normalizedAudienceFromNtxToken(token) + "/api/v1/file/v2t";
}

export function wsV2tAPIEndpointFromNtxToken(token: string): string {
    return normalizedAudienceFromNtxToken(token) + "/ws/v1/v2t";
}

function normalizedAudienceFromNtxToken(token: string): string {
    const tkn = jwt.decode(token) as { iss: string, aud: string[] };
    const iss = tkn.iss as string;

    for (const a of tkn.aud) {
        // filter all issuer specific audiences
        if (!a.startsWith(iss)) {
            // remove trailing slash
            return a.replace(/\/$/, "");
        }
    }

    throw new Error(`Expected to find cluster audience in '${tkn}'`);
}