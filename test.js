var library = require('./library');
var config = require('./config').config;
var extractor = require('sound-parameters-extractor');
var network = require('./nnet');
var ShiftBuffer = require('./ShiftBuffer').ShiftBuffer;
var signalBuffer = new ShiftBuffer(
    config.segmenter.windowSize,
    config.segmenter.overlap,
    extractFeaturesStream);
var sequenceBuffer = new ShiftBuffer(
    config.melfbank.channels * config.sequencer.size,
    config.melfbank.channels,
    forwardNetwork
);
var transformator = require('./transformator');
var FSM = require('./fsm');

function forwardNetwork(data) {
    var networkResult = network.computeNetworkOutput(data);
    var fsm = FSM.switchState(networkResult[0], networkResult[1]);

    console.log(fsm);
}

function splitStreamLikeData(data) {
    var toPad = 170 - (data.length % 170);
    toPad += (config.normalizer.right * config.segmenter.overlap);
    data = Array.from(data).concat(new Array(toPad).fill(0));
    var lastSample = 0;

    var frame, preProcessed, scaled;
    for(var i = 0; i < data.length / 170; i++) {
        frame = data.slice(i*170, (i+1)*170);
        scaled = library.scaleSignal(frame);
        preProcessed = library.preProcess(scaled, lastSample);
        lastSample = scaled[scaled.length - 1];
        signalBuffer.addData(preProcessed);
    }
}

function extractFeaturesStream(data) {
    var windowedSignal = library.applyHammingWindow(data);
    var mfbankFeatures = library.computeMfbank(windowedSignal);
    var normalized = library.normalize(mfbankFeatures);
    var transformed = transformator.transform(normalized);
    sequenceBuffer.addData(transformed);
    document.getElementById("stream-input").value = "";
}

function extractFeaturesFile(data) {
    var empty = new Array(config.segmenter.windowSize).fill(0);
    var normalized, mfbankFeatures, transformed;

    var scaled = library.scaleSignal(data);
    var preProcessed = library.preProcess(scaled);

    var framedSignal = extractor.framer(preProcessed, config.segmenter.windowSize, config.segmenter.overlapPercent);
    for(var i = 0; i < config.normalizer.right; i++) {
        framedSignal.push(empty);
    }

    var windowedFrame;

    for(var i = 0; i < framedSignal.length; i++) {
        windowedFrame = library.applyHammingWindow(framedSignal[i]);
        mfbankFeatures = library.computeMfbank(windowedFrame);
        normalized = library.normalize(mfbankFeatures);
        transformed = transformator.transform(normalized);
        sequenceBuffer.addData(transformed); //Detection
    }
    document.getElementById("file-input").value = "";
}

function onChange(file, onComplete) {
    library.clearBuffer();
    sequenceBuffer.clearBuffer();
    var fr = new FileReader();
    fr.onload = function () {
        var wav = require('node-wav');
        var result = wav.decode(this.result);
        library.resample(result.channelData[0], result.sampleRate, onComplete);
    };
    fr.readAsArrayBuffer(file);
}

document.getElementById("stream-input").addEventListener("change", function () {
    onChange(document.getElementById("stream-input").files[0], splitStreamLikeData);
});

document.getElementById("file-input").addEventListener("change", function () {
    onChange(document.getElementById("file-input").files[0], extractFeaturesFile);
});

document.getElementById("whole-file-input").addEventListener("change", function () {
    const fs = require('fs');
    const jwt = require('jsonwebtoken');
    const config = require('./config').config;
    const fileApi = require('../ntx-js/dist/src/clients/file').FileAPI;
    const fileBlob = require('../ntx-js/dist/src/clients/file').FileBlob;
    const websocket = require('../ntx-js/dist/src/clients/websocket');
    const util = require('../ntx-js/dist/examples/util');
    const engine_1 = require("../ntx-js/dist/src/generated/engine");
    var engine = engine_1.ntx.v2t.engine;
    var AudioChannel = engine_1.ntx.v2t.engine.EngineContext.AudioChannel;

    const tkn = jwt.decode(config.nanogrid.ntx_token);
    const iss = tkn.iss;
    var endpoint;
    for(const a of tkn.aud) {
        if(!a.startsWith(iss)) {
            endpoint = a.replace(/\/$/, "");
        }
    }
    endpoint = endpoint + "/ws/v1/v2t";

    const file = document.getElementById("whole-file-input").files[0];
    document.getElementById("whole-file-input").value = "";
/*
    const bytes = fs.readFileSync(file.path);
    document.getElementById("whole-file-input").value = "";
    const api = new fileApi(endpoint, config.nanogrid.ntx_token);
    const results = api.v2t(new fileBlob(bytes));
    results.subscribe((e) => {
        console.log(e)
    }, (err) => console.error("FAILED", err), () => console.log("DONE"))*/

    const start = new engine.EngineContextStart({
        context: new engine.EngineContext({
            audioFormat: new engine.AudioFormat({
                auto: new engine.AudioFormat.AutoDetect()
            }),
            v2t: new engine.EngineContext.V2TConfig({}),
            audioChannel: AudioChannel.AUDIO_CHANNEL_DOWNMIX,
        })
    });
    const ws = new websocket.WSClient(endpoint, config.nanogrid.ntx_token, start);
    const results = ws.v2t(util.inMemoryFileReader(file.path));
    results.subscribe((e) => {
        if(e.hasOwnProperty('label')) {console.log(e.label)}
    }, (err) => console.error("FAILED", err), () => console.log("DONE"));
});
