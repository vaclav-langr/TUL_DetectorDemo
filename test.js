var library = require('./library');
var config = require('./config').config;
var extractor = require('sound-parameters-extractor');
var ShiftBuffer = require('./ShiftBuffer').ShiftBuffer;
var sbuffer = new ShiftBuffer(extractFeaturesStream);

function splitStreamLikeData(data) {
    var toPad = 170 - (data.length % 170);
    data = Array.from(data).concat(new Array(toPad).fill(0));

    var frame;
    for(var i = 0; i < data.length / 170; i++) {
        frame = data.slice(i*170, (i+1)*170);
        frame = library.preProcess(frame, config.noiseCoefs);
        sbuffer.addData(frame);
    }
}

function extractFeaturesStream(data) {
    var windowedSignal = library.applyHammingWindow(data);
    var mfccFeatures = library.computeMfcc(windowedSignal);
    var normalized = library.normalize(mfccFeatures);
    console.log(normalized);
    document.getElementById("stream-input").value = "";
}

function extractFeaturesFile(data) {
    var empty = new Array((config.mfccCount + 1) * 3).fill(0);
    var normalized, mfccFeatures;

    var preProcessed = library.preProcess(data, config.noiseCoefs);

    var framedSignal = extractor.framer(preProcessed, config.windowSize, config.overlapPercent);
    var windowedFrame;
    var result = new Array(framedSignal.length);

    for(var i = 0; i < framedSignal.length; i++) {
        windowedFrame = library.applyHammingWindow(framedSignal[i]);
        mfccFeatures = library.computeMfcc(windowedFrame);
        result[i] = mfccFeatures;
    }

    //should be before or after normalization?
    var delta = library.computeDelta(result);
    var deltaDelta = library.computeDelta(delta);
    for(var i = 0; i < result.length; i++) {
        result[i] = result[i].concat(delta[i]);
        result[i] = result[i].concat(deltaDelta[i]);
    }

    //normalization, only used while training/testing with a whole file

    var mean;
    for(var i = 0; i < config.mfccCount + 1; i++) {
        mean = 0;
        for(var j = 0; j < result.length; j++) {
            mean += result[j][i];
        }
        mean /= result.length;
        for(var j = 0; j < result.length; j++) {
            result[j][i] -= mean;
        }
    }
    console.log(result);
    document.getElementById("file-input").value = "";
}

function onChange(file, onComplete) {
    library.clearBuffer();
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