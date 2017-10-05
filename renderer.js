var Recorder = require('./recorder');
var library = require('./library');
var config = require('./config').config;
var ShiftBuffer = require('./ShiftBuffer').ShiftBuffer;
var sbuffer = new ShiftBuffer(config.segmenter.windowSize, config.segmenter.overlap, extractFeatures);

var lastSample = 0;
var empty = new Array(config.melfbank.channels).fill(0);

function prepareData(data) {
    var scaled = library.scaleSignal(data);
    var preProcessed = library.preProcess(scaled, lastSample);
    lastSample = scaled[scaled.length - 1];
    sbuffer.addData(sbuffer, preProcessed);
}

function extractFeatures(data) {
    var windowed = library.applyHammingWindow(data);
    var mfbankFeatures = library.computeMfbank(windowed);
    var normalized = library.normalize(mfbankFeatures);
    console.log(normalized); // Detection
}

document.getElementById('stop-button').addEventListener('click', function () {
    Recorder.stopRecording();
    var normalized;
    for(var i = 0; i < config.normalizer.right; i++) {
        normalized = library.normalize(empty);
        console.log(normalized); // Detection
    }
});
document.getElementById('start-button').addEventListener('click', function () {
    library.clearBuffer();
    Recorder.startRecording(library.resample, prepareData);
});