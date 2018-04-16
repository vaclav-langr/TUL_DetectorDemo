const Recorder = require('./recorder');
const library = require('./library');
const config = require('./config').config;
const network = require('./nnet');
const ShiftBuffer = require('./ShiftBuffer').ShiftBuffer;
var signalBuffer = new ShiftBuffer(config.segmenter.windowSize.get, config.segmenter.overlap.get, extractFeatures);
var sequenceBuffer = new ShiftBuffer(config.melfbank.channels.get * config.sequencer.size.get, config.melfbank.channels.get, forwardNetwork);
const FSM = require('./fsm');
const transformator = require('./transformator');
const stopper = require('./stopper');
stopper.setLength(40);

var lastSample = 0;
var empty = new Array(config.segmenter.overlap.get).fill(0);

function updateGUI(status) {
    var detector = document.getElementById("detector");
    if (status) {
        detector.setAttribute("fill", "#ff4d4d")
    } else {
        detector.setAttribute("fill", "#660000")
    }
}

function forwardNetwork(data) {
    var networkOutput = network.computeNetworkOutput(data);
    var fsm = FSM.switchState(networkOutput[0], networkOutput[1]);
    var stop = stopper.switchState(fsm);

    if (Recorder.getIsSpeech()) {
        if (stop && !fsm) {
            Recorder.setSpeech(false);
            updateGUI(false);
        }
    } else {
        if (fsm) {
            Recorder.setSpeech(true);
            stopper.reset();
            updateGUI(true);
        }
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

const stopRecording = function () {
    Recorder.stopRecording();
    for (var i = 0; i < config.normalizer.position.get; i++) {
        prepareData(empty);
    }
};

const startRecording = function () {
    library.clearBuffer();
    Recorder.startRecording(prepareData);
};

module.exports = {
    stopRecording: stopRecording,
    startRecording: startRecording
};