import {ntx} from "../src/generated/engine";
import {WSClient} from "../src/clients/websocket";
import {inMemoryFileReader, wsV2tAPIEndpointFromNtxToken} from "./util";
import "rxjs/add/operator/map";
import "rxjs/add/operator/filter";
import {eventsToText} from "../src/clients/rx";
import engine = ntx.v2t.engine;
import AudioChannel = ntx.v2t.engine.EngineContext.AudioChannel;

let endpoint = process.env.NTX_WS_V2T_ENDPOINT;
const ntxToken = process.env.NTX_TASK_TOKEN;

if (!ntxToken) {
    console.log("set NTX_TASK_TOKEN env variable");
    process.exit(1);
}

if (!endpoint) {
    endpoint = wsV2tAPIEndpointFromNtxToken(ntxToken);
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
            withVAD: new engine.EngineContext.VADConfig(),
            withPPC: new engine.EngineContext.PPCConfig()
        }),
        audioChannel: AudioChannel.AUDIO_CHANNEL_DOWNMIX,
    })
});


const ws = new WSClient(endpoint, ntxToken, start);
const results = ws.v2t(inMemoryFileReader(file));

results.map(eventsToText).filter(s => s.length > 0).subscribe(e => {
    console.log(e);
}, err => console.error("FAILED", err), () => console.log("DONE"));