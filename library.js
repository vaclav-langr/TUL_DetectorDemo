var extractor = require('sound-parameters-extractor');
fft = require('fft-js');
resampler = require('audio-resampler');

var config = require('./config').config;

var buffer;
var index = 0;

var audioCtx = new AudioContext(); //Limited number of AudioContexts

function generateRandom() {
    return (Math.random()*2 - 1);
}

function generateRandomFromCoefs() {
    return this.coefs[Math.floor(Math.random() * this.coefs.length)];
}

const preProcess = function(data, previousLastSample, noiseCoefs) {
    var generator;
    if (typeof noiseCoefs === 'undefined') {
        generator = generateRandom;
    } else {
        generator = generateRandomFromCoefs.bind({coefs:noiseCoefs});
    }

    var filtered = new Array(data.length);
    filtered[0] = data[0] - config.preemCoef*previousLastSample;
    for(var i = 1; i < filtered.length; i++) {
        filtered[i] = data[i] - config.preemCoef*data[i-1];
    }

    var signal = filtered.map((val, index) => val + generator());
    return signal;
}

const computeMfcc = function(frame) {
    var mfccConfig = {
        fftSize : config.windowsSizePower / 2,
        bankCount : config.mfccCount,
        lowFrequency : config.lowFrequency,
        highFrequency : config.highFrequency,
        sampleRate : config.sampleRate
    };
    var mfccMatrix = extractor.mfcc.construct(mfccConfig, mfccConfig.bankCount);
    var padding = Array(config.windowsSizePower - config.windowSize).fill(0);
    var paddedFrame = frame;
    paddedFrame = paddedFrame.concat(padding); //Fill to get power of two length to use FFT
    var phasors = fft.fft(paddedFrame);
    return mfccMatrix(fft.util.fftMag(phasors));
}

const resample = function (data, sampleRate, onCompleteFunction) {
    if(sampleRate != config.sampleRate) {
        var buffer = audioCtx.createBuffer(1, data.length, sampleRate);
        buffer.copyToChannel(data,0,0);
        resampler(buffer, config.sampleRate, function (event) {
            onCompleteFunction(event.getAudioBuffer().getChannelData(0));
        });
    } else {
        onCompleteFunction(data);
    }
}

const normalize = function (data) {
    if(typeof buffer === 'undefined') {
        buffer = new Array(config.left + 1 + config.right);
        for(var i = 0; i < buffer.length; i++) {
            buffer[i] = new Array(data.length).fill(0);
        }
    }
    index = index + 1;
    for(var i = 0; i < buffer.length - 1; i++) {
        buffer[i] = buffer[i + 1];
    }
    buffer[buffer.length - 1] = data;
    if(index > config.right) {
        var normalized = new Array(data.length);
        var sum, mean;
        for(var i = 0; i < data.length; i++) {
            sum = 0;
            for(var j = 0; j < buffer.length; j++) {
                sum = sum + buffer[j][i];
            }
            mean = sum / buffer.length;
            normalized[i] = buffer[config.left][i] / mean;
        }
        return normalized;
    }
};

module.exports = {
    preProcess,
    computeMfcc,
    resample,
    normalize
};