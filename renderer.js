const Recorder = require('./recorder');
const library = require('./library');
const config = require('./config').config;
const network = require('./nnet');
const ShiftBuffer = require('./ShiftBuffer').ShiftBuffer;
const signalBuffer = new ShiftBuffer(config.segmenter.windowSize.get, config.segmenter.overlap.get, extractFeatures);
const sequenceBuffer = new ShiftBuffer(config.melfbank.channels.get * config.sequencer.size.get, config.melfbank.channels.get, forwardNetwork);
const FSM = require('./fsm');
const transformator = require('./transformator');
const stopper = require('./stopper');
stopper.setLength(60);

var lastSample = 0;
var empty = new Array(config.segmenter.overlap.get).fill(0);
var isStop;

function forwardNetwork(data) {
    let networkOutput = network.computeNetworkOutput(data);
    let fsm = FSM.switchState(networkOutput[0], networkOutput[1]);
    let stop = stopper.switchState(fsm);

    if (Recorder.getIsSpeech()) {
        if (stop && !fsm) {
            Recorder.setSpeech(false);
        }
    } else {
        if (fsm) {
            Recorder.setSpeech(true && !isStop);
            stopper.reset();
        }
    }
}

function prepareData(data) {
    let scaled = library.scaleSignal(data);
    let preProcessed = library.preProcess(scaled, lastSample);
    lastSample = scaled[scaled.length - 1];
    signalBuffer.addData(preProcessed);
}

function extractFeatures(data) {
    let windowed = library.applyHammingWindow(data);
    let mfbankFeatures = library.computeMfbank(windowed);
    let normalized = library.normalize(mfbankFeatures);
    let transformed = transformator.transform(normalized);
    sequenceBuffer.addData(transformed);
}

const stopRecording = function () {
    Recorder.stopRecording();
    isStop = true;
    for (let i = 0; i < config.normalizer.position.get; i++) {
        prepareData(empty);
    }
};

const startRecording = function () {
    library.clearBuffer();
    Recorder.startRecording(prepareData);
    isStop = false;
};

module.exports = {
    stopRecording: stopRecording,
    startRecording: startRecording
};