var library = require('./library');
var config = require('./config').config;
var extractor = require('sound-parameters-extractor');
var ShiftBuffer = require('./ShiftBuffer').ShiftBuffer;
var sbuffer = new ShiftBuffer(extractFeaturesStream);
const fft = require('fft-js');

function splitStreamLikeData(data) {
    var toPad = 170 - (data.length % 170);
    data = Array.from(data).concat(new Array(toPad).fill(0));

    var frame;
    for(var i = 0; i < data.length / 170; i++) {
        frame = data.slice(i*170, (i+1)*170);
        frame = library.preProcess(frame, config.noiseCoefs);
        sbuffer.addData(sbuffer, frame);
    }
}

function extractFeaturesStream(data) {
    var windowedSignal = library.applyHammingWindow(data);
    var mfbankFeatures = library.computeMfbank(windowedSignal);
    console.log(library.normalize(mfbankFeatures));
    document.getElementById("stream-input").value = "";
}

function extractFeaturesFile(data) {
    var empty = new Array(config.channels).fill(0);
    var normalized, mfbankFeatures;

    var preProcessed = library.preProcess(data, config.noiseCoefs);

    var framedSignal = extractor.framer(preProcessed, config.windowSize, config.overlapPercent);
    var windowedFrame;
    var result = new Array(framedSignal.length);

    for(var i = 0; i < framedSignal.length; i++) {
        windowedFrame = library.applyHammingWindow(framedSignal[i]);
        mfbankFeatures = library.computeMfbank(windowedFrame);
        result[i] = mfbankFeatures;
    }

    for(var i = 0; i < result.length; i++) {
        //console.log(library.normalize(result[i]));
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