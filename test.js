var library = require('./library');
var config = require('./config').config;
var extractor = require('sound-parameters-extractor');

function extractFeaturesStream(data) {
    var empty = new Array(config.mfccCount).fill(0);
    var padding = new Array(config.overlap - (data.length % config.overlap)).fill(0);
    var paddedSignal = Array.from(data).concat(padding);
    var buffer = new Array(config.windowSize).fill(0);
    var lastSample = 0;
    var frame, normalized, preProcessedSignal, mfccFeatures;
    var result = [];

    for(var i = 0; i < paddedSignal.length / config.overlap; i++) {
        frame = paddedSignal.slice(i*config.overlap, (i+1)*config.overlap);

        preProcessedSignal = library.preProcess(frame, lastSample, config.noiseCoefs);
        lastSample = frame[frame.length - 1];

        for(var j = 0; j < config.overlap; j++) {
            buffer[j] = buffer[j + config.overlap];
        }
        for(var j = 0; j < config.overlap; j++) {
            buffer[j + config.windowSize - config.overlap] = preProcessedSignal[j];
        }

        mfccFeatures = library.computeMfcc(buffer);

        normalized = library.normalize(mfccFeatures);
        if(typeof normalized !== 'undefined') {
            result.push(normalized);
        }
    }
    for(var i = 0; i < config.right; i++) {
        normalized = library.normalize(empty);
        result.push(normalized);
    }
    console.log(result);
    document.getElementById("stream-input").value = "";
}

function extractFeaturesFile(data) {
    var empty = new Array(config.mfccCount * 3).fill(0);
    var normalized, mfccFeatures;

    var preProcessed = library.preProcess(data, [-1, 1]);

    var framedSignal = extractor.framer(preProcessed, config.windowSize, config.overlapPercent);
    framedSignal = framedSignal.slice(0, -3);
    var windowedFrame;
    var result = [];

    for(var i = 0; i < framedSignal.length; i++) {
        windowedFrame = library.applyHammingWindow(framedSignal[i]);
        mfccFeatures = library.computeMfcc(windowedFrame);
        result.push(mfccFeatures);
    }
    var mean;
    for(var i = 0; i < result[0].length; i++) {
        mean = 0;
        for(var j = 0; j < result.length; j++) {
            mean += result[j][i];
        }
        mean /= result.length;
        for(var j = 0; j < result.length; j++) {
            result[j][i] -= mean;
        }
    }
    var delta = extractor.parameters.deltaCustomAllSignal(result);
    var deltaDelta = extractor.parameters.deltaCustomAllSignal(delta);
    for(var i = 0; i < result.length; i++) {
        result[i] = result[i].concat(delta[i]);
        result[i] = result[i].concat(deltaDelta[i]);
    }
    console.log(result)
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
    onChange(document.getElementById("stream-input").files[0], extractFeaturesStream);
});

document.getElementById("file-input").addEventListener("change", function () {
    onChange(document.getElementById("file-input").files[0], extractFeaturesFile);
});