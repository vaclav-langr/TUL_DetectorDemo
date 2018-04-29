import {ntx} from "../generated/engine";
import {Observable} from "rxjs/Observable";
import {Subject} from "rxjs/Subject";
import WebSocket = require("ws");
import engine = ntx.v2t.engine;

export type EventReadFn = () => Promise<engine.Events | null>;

// pull and end message are always the same
const pullMsg = new engine.EngineStream({pull: new engine.EventsPull()});
const endMsg = new engine.EngineStream({end: new engine.EngineContextEnd()});

// thread-safe
export class WSClient {

    private url: string;

    constructor(endpoint: string, ntxToken: string, private start: engine.EngineContextStart) {
        this.url = `${endpoint}?ntx-token=${ntxToken}`;
    }

    v2t(read: EventReadFn): Observable<engine.IEvents> {
        const socket = new WebSocket(this.url);

        const results = new Subject<engine.IEvents>();
        const startMsg = new engine.EngineStream({start: this.start});

        socket.on("open", () => {
            // send start message when connection established
            socket.send(JSON.stringify(startMsg));
        });

        socket.on("error", (msg) => {
            results.error(msg.message);
        });

        socket.on("message", async (msg: WebSocket.Data) => {
            const es = engine.EngineStream.create(JSON.parse(msg as string));
            if (es.start) {
                // start by pulling results
                socket.send(JSON.stringify(pullMsg));
            } else if (es.pull) {
                // requested more data
                read().then(function (ev: engine.Events | null) {
                    if (!ev) {
                        // all data processed, send end message
                        socket.send(JSON.stringify(endMsg));
                    } else {
                        // push events
                        socket.send(JSON.stringify(new engine.EngineStream({push: new engine.EventsPush({events: ev})})));
                    }
                }, results.error);
            } else if (es.push && es.push.events) {
                // output events
                results.next(es.push.events);
                // pull next results
                socket.send(JSON.stringify(pullMsg));
            } else if (es.end) {
                // end is last received message, we are done
                if (es.end.error) {
                    results.error(es.end.error);
                } else {
                    results.complete();
                }
            } else {
                results.error(`Unexpected msg ${es}`);
            }
        });

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


