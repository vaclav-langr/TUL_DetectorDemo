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
    var networkResult = network.computeNetworkOutput(data);
    var fsm = FSM.switchState(networkResult[0], networkResult[1]);

    console.log(fsm);
}

function splitStreamLikeData(data) {
    var toPad = 170 - (data.length % 170);
    toPad += (config.normalizer.position.get * config.segmenter.overlap.get);
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
}

function extractFeaturesFile(data) {
    var empty = new Array(config.segmenter.windowSize.get).fill(0);
    var normalized, mfbankFeatures, transformed;

    var scaled = library.scaleSignal(data);
    var preProcessed = library.preProcess(scaled);

    var framedSignal = extractor.framer(preProcessed, config.segmenter.windowSize.get, config.segmenter.overlapPercent);
    for(var i = 0; i < config.normalizer.position.get; i++) {
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