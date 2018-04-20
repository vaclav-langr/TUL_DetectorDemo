const library = require('./library');
const config = require('./config').config;
const extractor = require('sound-parameters-extractor');
const network = require('./nnet');
const ShiftBuffer = require('./ShiftBuffer').ShiftBuffer;
var signalBuffer = new ShiftBuffer(
    config.segmenter.windowSize.get,
    config.segmenter.overlap.get,
    extractFeaturesStream);
var sequenceBuffer = new ShiftBuffer(
    config.melfbank.channels.get * config.sequencer.size.get,
    config.melfbank.channels.get,
    forwardNetwork
);
const transformator = require('./transformator');
const FSM = require('./fsm');

function forwardNetwork(data) {
    let networkResult = network.computeNetworkOutput(data);
    let fsm = FSM.switchState(networkResult[0], networkResult[1]);

    console.log(fsm);
}

function splitStreamLikeData(data) {
    let toPad = 170 - (data.length % 170);
    toPad += (config.normalizer.position.get * config.segmenter.overlap.get);
    data = Array.from(data).concat(new Array(toPad).fill(0));
    let lastSample = 0;

    let frame, preProcessed, scaled;
    for(let i = 0; i < data.length / 170; i++) {
        frame = data.slice(i*170, (i+1)*170);
        scaled = library.scaleSignal(frame);
        preProcessed = library.preProcess(scaled, lastSample);
        lastSample = scaled[scaled.length - 1];
        signalBuffer.addData(preProcessed);
    }
}

function extractFeaturesStream(data) {
    let windowedSignal = library.applyHammingWindow(data);
    let mfbankFeatures = library.computeMfbank(windowedSignal);
    let normalized = library.normalize(mfbankFeatures);
    let transformed = transformator.transform(normalized);
    sequenceBuffer.addData(transformed);
}

function extractFeaturesFile(data) {
    let empty = new Array(config.segmenter.windowSize.get).fill(0);
    let normalized, mfbankFeatures, transformed, windowedFrame;

    let scaled = library.scaleSignal(data);
    let preProcessed = library.preProcess(scaled);

    let framedSignal = extractor.framer(preProcessed, config.segmenter.windowSize.get, config.segmenter.overlapPercent);
    for(let i = 0; i < config.normalizer.position.get; i++) {
        framedSignal.push(empty);
    }

    for(let i = 0; i < framedSignal.length; i++) {
        windowedFrame = library.applyHammingWindow(framedSignal[i]);
        mfbankFeatures = library.computeMfbank(windowedFrame);
        normalized = library.normalize(mfbankFeatures);
        transformed = transformator.transform(normalized);
        sequenceBuffer.addData(transformed); //Detection
    }
}

function onChange(file, onComplete) {
    library.clearBuffer();
    sequenceBuffer.clearBuffer();
    let fr = new FileReader();
    fr.onload = function () {
        let wav = require('node-wav');
        let result = wav.decode(this.result);
        library.resample(result.channelData[0], result.sampleRate, onComplete);
    };
    fr.readAsArrayBuffer(file);
}

const streamInput = function (file) {
    onChange(file, splitStreamLikeData);
};

const fileInput = function (file) {
    onChange(file, extractFeaturesFile);
};

module.exports = {
    streamInput:streamInput,
    fileInput:fileInput
};