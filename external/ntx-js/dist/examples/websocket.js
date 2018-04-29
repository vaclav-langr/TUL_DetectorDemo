"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const engine_1 = require("../src/generated/engine");
const websocket_1 = require("../src/clients/websocket");
const util_1 = require("./util");
require("rxjs/add/operator/map");
require("rxjs/add/operator/filter");
const rx_1 = require("../src/clients/rx");
var engine = engine_1.ntx.v2t.engine;
var AudioChannel = engine_1.ntx.v2t.engine.EngineContext.AudioChannel;
let endpoint = process.env.NTX_WS_V2T_ENDPOINT;
const ntxToken = process.env.NTX_TASK_TOKEN;
if (!ntxToken) {
    console.log("set NTX_TASK_TOKEN env variable");
    process.exit(1);
}
if (!endpoint) {
    endpoint = util_1.wsV2tAPIEndpointFromNtxToken(ntxToken);
}
if (process.argv.length < 3) {
    console.log("missing [file] argument");
    process.exit(1);
}
const file = process.argv[2];
// setup context - automatically detect audio format, use vad+v2t+ppc
const start = new engine.EngineContextStart({
    context: new engine.EngineContext({
        audioFormat: new engine.AudioFormat({
            auto: new engine.AudioFormat.AutoDetect()
        }),
        v2t: new engine.EngineContext.V2TConfig({
            //withVAD: new engine.EngineContext.VADConfig(),
            //withPPC: new engine.EngineContext.PPCConfig()
        }),
        audioChannel: AudioChannel.AUDIO_CHANNEL_DOWNMIX,
    })
});
const ws = new websocket_1.WSClient(endpoint, ntxToken, start);
const results = ws.v2t(util_1.inMemoryFileReader(file));
results.subscribe(e => {
    //console.log(e);
    if (!e.lookahead) {
        for (const ce of e.events) {
            if (ce.label) {
                if (ce.label.item) {
                    console.log(ce.label.item);
                } else if (ce.label.plus) {
                    console.log(ce.label.plus);
                }
            }
        }
    }
}, err => console.error("FAILED", err), () => console.log("DONE"));
//# sourceMappingURL=websocket.js.map