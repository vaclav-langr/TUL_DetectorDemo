var Recorder = require('./recorder');
var library = require('./library');
var config = require('./config').config;

var lastSample = 0;
var buffer = new Array(config.windowSize).fill(0);
var empty = new Array(config.mfccCount).fill(0);

function extractFeatures(data) {
    var normalized, preProcessedSignal, mfccFeatures;

    preProcessedSignal = library.preProcess(data, lastSample, [-1,1]);
    lastSample = data[data.length - 1];

    for(var j = 0; j < config.overlap; j++) {
        buffer[j] = buffer[j + config.overlap];
    }
    for(var j = 0; j < config.overlap; j++) {
        buffer[j + config.windowSize - config.overlap] = preProcessedSignal[j];
    }

    mfccFeatures = library.computeMfcc(buffer);

    normalized = library.normalize(mfccFeatures);
    if(typeof normalized !== 'undefined') {
        console.log(normalized); // Detection
    }
}

document.getElementById('stop-button').addEventListener('click', function () {
    var normalized;
    for(var i = 0; i < config.right; i++) {
        normalized = library.normalize(empty);
        console.log(normalized); // Detection
    }
    Recorder.stopRecording();
});
document.getElementById('start-button').addEventListener('click', function () {
    library.clearBuffer();
    Recorder.startRecording(library.resample, extractFeatures);
});