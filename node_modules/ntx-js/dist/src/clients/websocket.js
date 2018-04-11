"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const engine_1 = require("../generated/engine");
const Subject_1 = require("rxjs/Subject");
const WebSocket = require("ws");
var engine = engine_1.ntx.v2t.engine;
// pull and end message are always the same
const pullMsg = new engine.EngineStream({ pull: new engine.EventsPull() });
const endMsg = new engine.EngineStream({ end: new engine.EngineContextEnd() });
// thread-safe
class WSClient {
    constructor(endpoint, ntxToken, start) {
        this.start = start;
        this.url = `${endpoint}?ntx-token=${ntxToken}`;
    }
    v2t(read) {
        const socket = new WebSocket(this.url);
        const results = new Subject_1.Subject();
        const startMsg = new engine.EngineStream({ start: this.start });
        socket.on("open", () => {
            // send start message when connection established
            socket.send(JSON.stringify(startMsg));
        });
        socket.on("error", (msg) => {
            results.error(msg.message);
        });
        socket.on("message", (msg) => __awaiter(this, void 0, void 0, function* () {
            const es = engine.EngineStream.create(JSON.parse(msg));
            if (es.start) {
                // start by pulling results
                socket.send(JSON.stringify(pullMsg));
            }
            else if (es.pull) {
                // requested more data
                read().then(function (ev) {
                    if (!ev) {
                        // all data processed, send end message
                        socket.send(JSON.stringify(endMsg));
                    }
                    else {
                        // push events
                        socket.send(JSON.stringify(new engine.EngineStream({ push: new engine.EventsPush({ events: ev }) })));
                    }
                }, results.error);
            }
            else if (es.push && es.push.events) {
                // output events
                results.next(es.push.events);
                // pull next results
                socket.send(JSON.stringify(pullMsg));
            }
            else if (es.end) {
                // end is last received message, we are done
                if (es.end.error) {
                    results.error(es.end.error);
                }
                else {
                    results.complete();
                }
            }
            else {
                results.error(`Unexpected msg ${es}`);
            }
        }));
        // also subscribe to output stream to close socket when  done or error signal is received
        results.subscribe(() => {
        }, () => {
            socket.close();
        }, () => {
            socket.close();
        });
        return results;
    }
}
exports.WSClient = WSClient;
//# sourceMappingURL=websocket.js.map