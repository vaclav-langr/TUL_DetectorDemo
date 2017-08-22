var library = require('./library');
var config = require('./config').config;

function extractFeatures(data) {
    var empty = new Array(config.mfccCount).fill(0);
    var padding = new Array(config.overlap - (data.length % config.overlap)).fill(0);
    var paddedSignal = Array.from(data).concat(padding);
    var buffer = new Array(config.windowSize).fill(0);
    var lastSample = 0;
    var frame, normalized, preProcessedSignal, mfccFeatures;

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
            //console.log(normalized);
        }
    }
    for(var i = 0; i < config.right; i++) {
        normalized = library.normalize(empty);
        //console.log(normalized);
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