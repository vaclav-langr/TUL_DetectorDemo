resampler = require('audio-resampler');
var extractor = require('sound-parameters-extractor');

function preProcess(data) {
    var noiseCoefs = [-1, 1];

    var filtered = Array.from(data);
    var backup1 = filtered[0];
    var backup2;
    for(var i = 1; i < filtered.length; i++) {
        backup2 = filtered[i];
        filtered[i] = filtered[i] - 0.97*backup1;
        backup1 = backup2;
    }

    var signal = Array.from(data).map((val, index) =>
        val + noiseCoefs[Math.floor(Math.random() * noiseCoefs.length)]);

    return signal;
}

function divideIntoFrames(signal) {
    const windowSize = 400;
    const overlap = '40%';
    return extractor.framer(signal, windowSize, overlap);
}

function computeMfcc(frames) {

}

function extractFeatures(data) {
    var preProcessedSignal = preProcess(data);
    var framedSignal = divideIntoFrames(preProcessedSignal);
    var mfccFeatures = computeMfcc(framedSignal);
}

function onChange() {
    var fr = new FileReader();
    fr.onload = function () {
        var wav = require('node-wav');
        var result = wav.decode(this.result);

        var data = result.channelData[0];
        if(result.sampleRate != 16000) {
            //resample to 16kHz
        }
        extractFeatures(data);
    };
    fr.readAsArrayBuffer(this.files[0]);
}

document.getElementById("the-file-input").addEventListener("change", onChange);