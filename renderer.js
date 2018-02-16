var Recorder = require('./recorder');
var library = require('./library');
var config = require('./config').config;
var network = require('./nnet');
var ShiftBuffer = require('./ShiftBuffer').ShiftBuffer;
var signalBuffer = new ShiftBuffer(config.segmenter.windowSize, config.segmenter.overlap, extractFeatures);
var sequenceBuffer = new ShiftBuffer(config.melfbank.channels * config.sequencer.size, config.melfbank.channels, forwardNetwork);
var FSM = require('./fsm');
var transformator = require('./transformator');

var lastSample = 0;
var empty = new Array(config.segmenter.overlap).fill(0);

function forwardNetwork(data) {
    var networkOutput = network.computeNetworkOutput(data);
    var fsm = FSM.switchState(networkOutput[0], networkOutput[1]);
    if(fsm == 0) {
        Recorder.setSpeech(true);
    } else {
        Recorder.setSpeech(false);
    }
}

function prepareData(data) {
    var scaled = library.scaleSignal(data);
    var preProcessed = library.preProcess(scaled, lastSample);
    lastSample = scaled[scaled.length - 1];
    signalBuffer.addData(preProcessed);
}

function extractFeatures(data) {
    var windowed = library.applyHammingWindow(data);
    var mfbankFeatures = library.computeMfbank(windowed);
    var normalized = library.normalize(mfbankFeatures);
    var transformed = transformator.transform(normalized);
    sequenceBuffer.addData(transformed);
}

document.getElementById('stop-button').addEventListener('click', function () {
    Recorder.stopRecording();
    for(var i = 0; i < config.normalizer.right; i++) {
        prepareData(empty);
    }
});
document.getElementById('start-button').addEventListener('click', function () {
    library.clearBuffer();
    Recorder.startRecording(library.resample, prepareData);
});