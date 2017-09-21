var library = require('./library');
var config = require('./config').config;
var extractor = require('sound-parameters-extractor');
var ShiftBuffer = require('./ShiftBuffer').ShiftBuffer;
var sbuffer = new ShiftBuffer(extractFeaturesStream);

function splitStreamLikeData(data) {
    var toPad = 170 - (data.length % 170);
    data = Array.from(data).concat(new Array(toPad).fill(0));
    var lastSample = 0;

    var frame, preProcessed, scaled;
    for(var i = 0; i < data.length / 170; i++) {
        frame = data.slice(i*170, (i+1)*170);
        scaled = library.scaleSignal(frame);
        preProcessed = library.preProcess(scaled, lastSample);
        lastSample = scaled[scaled.length - 1];
        sbuffer.addData(sbuffer, preProcessed);
    }
    var empty = new Array(config.channels).fill(0);
    for(var i = 0; i < config.right; i++) {
        console.log(library.normalize(empty)); // Detection
    }
}

function extractFeaturesStream(data) {
    var windowedSignal = library.applyHammingWindow(data);
    var mfbankFeatures = library.computeMfbank(windowedSignal);
    console.log(library.normalize(mfbankFeatures)); // Detection
    document.getElementById("stream-input").value = "";
}

function extractFeaturesFile(data) {
    var empty = new Array(config.channels).fill(0);
    var normalized, mfbankFeatures;

    var scaled = library.scaleSignal(data);
    var preProcessed = library.preProcess(scaled);

    var framedSignal = extractor.framer(preProcessed, config.windowSize, config.overlapPercent);
    var windowedFrame;
    var result = new Array(framedSignal.length + config.right);

    for(var i = 0; i < framedSignal.length; i++) {
        windowedFrame = library.applyHammingWindow(framedSignal[i]);
        mfbankFeatures = library.computeMfbank(windowedFrame);
        normalized = library.normalize(mfbankFeatures);
        result[i] = normalized; // Detection
    }
    for(i = 0; i < config.right; i++) {
        result[framedSignal.length + i] = library.normalize(empty); // Detection
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