const fft = require('fft-js');
resampler = require('audio-resampler');
var linspace = require('linspace');
var audioCtx = new AudioContext(); //Limited number of AudioContexts
var config = require('./config').config;
var index = 0;
var filters, dct, lifter, bufferNorm;

function mel2hz(mel) {
    return 700 * (Math.exp(mel / 1127) - 1);
}

function hz2mel(hz) {
    return 1127 * Math.log(1 + (hz / 700));
}

function createFilters() {
    filters = new Array(Math.floor(config.windowsSizePower / 2));
    for(var i = 0; i < filters.length; i++) {
        filters[i] = new Array(config.channels).fill(0);
    }

    var lowMel = hz2mel(config.lowFrequency);
    var highMel = hz2mel(config.highFrequency);

    var freqCoefs = linspace(lowMel, highMel, config.channels + 2);
    for(var i = 0; i < freqCoefs.length; i++) {
        freqCoefs[i] = Math.floor(mel2hz(freqCoefs[i]) / config.sampleRate * config.windowsSizePower);
    }
    var p1, p2, linVar, index;
    for(var i = 0; i < config.channels; i++) {
        p1 = freqCoefs[i+1] - freqCoefs[i];
        p2 = freqCoefs[i+2] - freqCoefs[i+1];

        linVar = linspace(0, 1, p1 + 1);
        index = 0;
        for (var j = freqCoefs[i]; j < freqCoefs[i+1]+1; j++) {
            filters[j][i] = linVar[index++];
        }

        linVar = linspace(1, 0, p2 + 1);
        index = 0;
        for (var j = freqCoefs[i+1]; j < freqCoefs[i+2]+1; j++) {
            filters[j][i] = linVar[index++];
        }
    }
}

function createDct() {
    dct = new Array(config.channels);
    for(var i = 0; i < dct.length; i++) {
        dct[i] = new Array(config.mfccCount);
    }
    for(var i = 0; i < config.mfccCount; i++) {
        for(var j = 0; j < config.channels; j++) {
            dct[j][i] = Math.cos((i + 1) * Math.PI / config.channels * (j + 0.5));
        }
    }
}

function createLifter() {
    lifter = new Array(config.mfccCount);
    for(var i = 0; i < lifter.length; i++) {
        lifter[i] = 1 + (config.lifter / 2) * Math.sin(Math.PI * (1 + i) / config.lifter);
    }
}

function generateRandom() {
    return (Math.random()*2 - 1);
}

function generateRandomFromCoefs() {
    return this.coefs[Math.floor(Math.random() * this.coefs.length)];
}

const preProcess = function(data, noiseCoefs) {
    var generator;
    if (typeof noiseCoefs === 'undefined') {
        generator = generateRandom;
    } else {
        generator = generateRandomFromCoefs.bind({coefs:noiseCoefs});
    }

    var filtered = new Array(data.length);
    filtered[0] = Math.floor(data[0]*32768) - config.preemCoef*Math.floor(data[0]*32768);
    for(var i = 1; i < filtered.length; i++) {
        filtered[i] = Math.floor(data[i]*32768) - config.preemCoef*Math.floor(data[i-1]*32768);
    }

    //var signal = filtered.map((val, index) => val + generator());
    return filtered;
}

const applyHammingWindow = function (data) {
    var result = new Array(data.length);
    var windowSample;
    for(var i = 0; i < result.length; i++) {
        windowSample = 0.54 - 0.46 * Math.cos(2 * Math.PI * i / (result.length - 1));
        result[i] = data[i] * windowSample;
    }
    return result;
}

const computeMfcc = function(frame) {
    if(typeof filters === 'undefined') {
        createFilters();
    }
    if(typeof dct === 'undefined') {
        createDct();
    }
    if(typeof lifter === 'undefined') {
        createLifter();
    }
    var padding = Array(config.windowsSizePower - config.windowSize).fill(0);
    var paddedFrame = frame.slice();
    paddedFrame = paddedFrame.concat(padding); //Fill to get power of two length to use FFT

    var phasors = fft.fft(paddedFrame);
    var mags = fft.util.fftMag(phasors);

    var melspec = new Array(config.channels);
    for(var i = 0; i < melspec.length; i++) {
        melspec[i] = 0;
        for(var j = 0; j < mags.length; j++) {
            melspec[i] += (mags[j] * filters[j][i]);
        }
        if(melspec[i] < 0.001) {
            melspec[i] = 0.001;
        }
        melspec[i] = Math.log(melspec[i]);
    }

    var mfccVar = new Array(config.mfccCount); //First part of result
    for(var i = 0; i < mfccVar.length; i++) {
        mfccVar[i] = 0;
        for(var j = 0; j < melspec.length; j++) {
            mfccVar[i] += (melspec[j] * dct[j][i]);
        }
        mfccVar[i] *= Math.sqrt(2 / config.channels);
        mfccVar[i] *= lifter[i];
        if(isNaN(mfccVar[i])) {
            mfccVar[i] = 0;
        }
        if(mfccVar[i] == Number.POSITIVE_INFINITY || mfccVar[i] == Number.NEGATIVE_INFINITY) {
            mfccVar[i] = 0;
        }
    }

    var energy = 0;
    for(var i = 0; i < melspec.length; i++) {
        energy += melspec[i];
    }
    energy *= Math.sqrt(2 / config.channels);
    if(isNaN(energy)) {
        energy = 0;
    }
    if(energy == Number.POSITIVE_INFINITY || energy == Number.NEGATIVE_INFINITY) {
        energy = 0;
    }
    mfccVar = mfccVar.concat(energy);
    return mfccVar;
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
    index = index + 1;
    for(var i = 0; i < bufferNorm.length - 1; i++) {
        bufferNorm[i] = bufferNorm[i + 1];
    }
    bufferNorm[bufferNorm.length - 1] = data;
    if(index > config.right) {
        var normalized = new Array(data.length);
        var sum, mean;
        for(var i = 0; i < data.length; i++) {
            sum = 0;
            for(var j = 0; j < bufferNorm.length; j++) {
                sum = sum + bufferNorm[j][i];
            }
            mean = sum / bufferNorm.length;
            normalized[i] = bufferNorm[config.left][i] / mean;
        }
        return normalized;
    }
};

const clearBuffer = function () {
    index = 0;
    bufferNorm = new Array(config.left + 1 + config.right);
    for(var i = 0; i < bufferNorm.length; i++) {
        bufferNorm[i] = new Array(config.mfccCount * 3).fill(0);
    }
};

module.exports = {
    preProcess,
    computeMfcc,
    resample,
    normalize,
    clearBuffer,
    applyHammingWindow
};