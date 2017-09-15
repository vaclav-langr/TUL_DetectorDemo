const fft = require('fft-js');
resampler = require('audio-resampler');
var linspace = require('linspace');
var audioCtx = new AudioContext(); //Limited number of AudioContexts
var config = require('./config').config;
var index = 0;
var filters, bufferNorm;

function mel2hz(mel) {
    return 700 * (Math.exp(mel / 1127) - 1);
}

function hz2mel(hz) {
    return 1127 * Math.log(1 + (hz / 700));
}

function createFilters() {
    var low_freq_mel = hz2mel(config.lowFrequency);
    var high_freq_mel = hz2mel(config.highFrequency);
    var mels = linspace(low_freq_mel, high_freq_mel, config.channels + 2);
    var hzs = mels.slice();
    for(var i = 0; i < hzs.length; i++) {
        hzs[i] = mel2hz(hzs[i]);
    }
    var bins = hzs.slice();
    for(var i = 0; i < bins.length; i++) {
        bins[i] = Math.floor((config.windowsSizePower + 1) * hzs[i] / config.sampleRate);
    }

    filters = new Array(config.channels);
    for(var i = 0; i < filters.length; i++) {
        filters[i] = new Array(Math.floor(config.windowsSizePower / 2 + 1)).fill(0);
    }

    for(var i = 1; i < config.channels + 1; i++) {
        for(var j = bins[i - 1]; j < bins[i]; j++) {
            filters[i - 1][j] = (j - bins[i - 1]) / (bins[i] - bins[i - 1]);
        }
        for(var j = bins[i]; j < bins[i + 1]; j++) {
            filters[i - 1][j] = (bins[i + 1] - j) / (bins[i + 1] - bins[i]);
        }
    }
}

function generateRandomFromRange() {
    return (Math.random()*(this.coefs[1] - this.coefs[0]) + this.coefs[0]);
}

function generateRandomFromCoefs() {
    return this.coefs[Math.floor(Math.random() * this.coefs.length)];
}

const preProcess = function(data) {
    var generator;
    if (config.useRange) {
        generator = generateRandomFromRange.bind({coefs:config.noiseCoefs});
    } else {
        generator = generateRandomFromCoefs.bind({coefs:config.noiseCoefs});
    }

    var fullSize = new Array(data.length);
    for(var i = 0; i < fullSize.length; i++) {
        fullSize[i] = data[i] * 32768;
        if(fullSize[i] < -32768) {
            fullSize[i] = -32768;
        }
        if(fullSize[i] > 32768) {
            fullSize[i] = 32768;
        }
        fullSize[i] += generator()
    }

    var filtered = new Array(fullSize.length);
    filtered[0] = fullSize[0] - config.preemCoef*fullSize[0];
    for(var i = 1; i < filtered.length; i++) {
        filtered[i] = fullSize[i] - config.preemCoef*fullSize[i-1];
    }

    return filtered;
};

const applyHammingWindow = function (data) {
    var result = new Array(data.length);
    var windowSample;
    for(var i = 0; i < result.length; i++) {
        windowSample = 0.54 - 0.46 * Math.cos(2 * Math.PI * i / (result.length - 1));
        result[i] = data[i] * windowSample;
    }
    return result;
};

const computeMfbank = function(frame) {
    if(typeof filters === 'undefined') {
        createFilters();
    }
    var padding = Array(config.windowsSizePower - config.windowSize).fill(0);
    var paddedFrame = frame.slice();
    paddedFrame = paddedFrame.concat(padding); //Fill to get power of two length to use FFT

    var phasors = fft.fft(paddedFrame);
    var mags = new Array(Math.floor(config.windowsSizePower / 2 + 1));
    var real, imag;
    for(var i = 0; i < mags.length; i++) {
        real = Math.abs(phasors[i][0]);
        imag = Math.abs(phasors[i][1]);
        mags[i] = Math.sqrt(real*real + imag*imag);
    }

    var melspec = new Array(config.channels).fill(0);
    for(var i = 0; i < melspec.length; i++) {
        for(var j = 0; j < mags.length; j++) {
            melspec[i] += (mags[j] * filters[i][j]);
        }
        if(melspec[i] < config.minValue) {
            melspec[i] = config.returnValue;
        } else {
            melspec[i] = Math.log(melspec[i]);
        }
    }
    return melspec;
};

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
};

const normalize = function (data) {
    var normalized = new Array(data.length).fill(0);
    index = index + 1;
    for(var i = 0; i < bufferNorm.length - 1; i++) {
        bufferNorm[i] = bufferNorm[i + 1].slice();
    }
    bufferNorm[bufferNorm.length - 1] = data.slice();
    if(index > config.right) {
        var mean;
        for(var i = 0; i < data.length; i++) {
            mean = 0;
            for(var j = 0; j < bufferNorm.length; j++) {
                mean = mean + bufferNorm[j][i];
            }
            if(index < 100) {
                mean /= index;
            } else {
                mean /= bufferNorm.length;
            }
            normalized[i] = bufferNorm[config.left][i] - mean;
        }
    }
    return normalized;
};

const clearBuffer = function () {
    index = 0;
    bufferNorm = new Array(config.left + 1 + config.right);
    for(var i = 0; i < bufferNorm.length; i++) {
        bufferNorm[i] = new Array(config.channels).fill(0);
    }
};

module.exports = {
    preProcess,
    computeMfbank,
    resample,
    normalize,
    clearBuffer,
    applyHammingWindow
};