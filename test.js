var library = require('./library');
var config = require('./config').config;
var extractor = require('sound-parameters-extractor');

function divideIntoFrames(signal) {
    frames = extractor.framer(signal, config.windowSize, config.overlapPercent);
    frames = frames.slice(0,-3);
    return frames;
}

function extractFeatures(data) {
    var empty = new Array(config.mfccCount).fill(0);
    var framedSignal = divideIntoFrames(Array.from(data));

    for(var i = 0; i < framedSignal.length; i++) {
        preProcessedSignal = library.preProcess(framedSignal[i],
            (i > 0) ? framedSignal[i-1][framedSignal[i-1].length - 1] : 0,
            config.noiseCoefs);
        mfccFeatures = library.computeMfcc(preProcessedSignal);
        var normalized = library.normalize(mfccFeatures);
        if(typeof normalized !== 'undefined') {
            console.log(normalized);
        }
    }
    for(var i = 0; i < config.right; i++) {
        var normalized = library.normalize(empty);
        console.log(normalized);
    }
}

function onChange() {
    var fr = new FileReader();
    fr.onload = function () {
        var wav = require('node-wav');
        var result = wav.decode(this.result);
        library.resample(result.channelData[0], result.sampleRate, extractFeatures);
    };
    fr.readAsArrayBuffer(this.files[0]);
}

document.getElementById("the-file-input").addEventListener("change", onChange);