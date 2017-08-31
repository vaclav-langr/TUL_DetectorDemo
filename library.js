var extractor = require('sound-parameters-extractor');
const fft = require('fft-js');
resampler = require('audio-resampler');

var config = require('./config').config;

var bufferNorm;
var index = 0;

var mfccConfig = {
    fftSize : config.windowsSizePower / 2,
    bankCount : 24,
    lowFrequency : config.lowFrequency,
    highFrequency : config.highFrequency,
    sampleRate : config.sampleRate
};

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
    filtered[0] = data[0]*32768 - config.preemCoef*previousLastSample;
    for(var i = 1; i < filtered.length; i++) {
        filtered[i] = data[i]*32768 - config.preemCoef*data[i-1]*32768 + generator();
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
    var padding = Array(config.windowsSizePower - config.windowSize).fill(0);
    var paddedFrame = frame;
    paddedFrame = paddedFrame.concat(padding); //Fill to get power of two length to use FFT

    var phasors = fft.fft(paddedFrame);
    var mags = fft.util.fftMag(phasors);
    var pows = new Array(mags.length);
    for(var i = 0; i < pows.length; i++) {
        pows[i] = (mags[i] * mags[i]) / config.windowsSizePower;
    }

    var low_mel = (2595 * Math.LOG10E * Math.log(1 + config.lowFrequency / 700));
    var high_mel = (2595 * Math.LOG10E * Math.log(1 + config.highFrequency / 700));
    var shift = (high_mel - low_mel)/(24 + 1);
    var bins = new Array(24 + 2);
    var mel_point, hz_point;
    for(var i = 0; i < bins.length; i++) {
        mel_point = low_mel + i*shift;
        hz_point = 700*(Math.pow(10, mel_point/2595) - 1);
        bins[i] = Math.floor((config.windowsSizePower + 1)*hz_point/config.sampleRate)
    }

    var fbank = new Array(24);
    for(var i = 0; i < fbank.length; i++) {
        fbank[i] = new Array(Math.floor(512/2)).fill(0);
    }
    for(var i = 1; i < 24 + 1; i++) {
        var f_i_minus = bins[i - 1];
        var f_i = bins[i];
        var f_i_plus = bins[i];

        for(var j = f_i_minus; j < f_i; j++) {
            fbank[i - 1][j] = (j - bins[i - 1]) / (bins[i] - bins[i - 1]);
        }
        for(var j = f_i; j < f_i_plus; j++) {
            fbank[i - 1][j] = (bins[i + 1] - j) / (bins[i + 1] - bins[i]);
        }
    }
    var filter_bank = new Array(24);
    for(var i = 0; i < filter_bank.length; i++) {
        filter_bank[i] = 0.0;
        for(var j = 0; j < pows.length; j++) {
            filter_bank[i] += (pows[j] * fbank[i][j]);
        }
        if(filter_bank[i] == 0.0) {
            filter_bank[i] = Number.MIN_VALUE;
        }
        filter_bank[i] = 20 * Math.LOG10E * Math.log(filter_bank[i]);
    }

    var dftCoefs = new Array(filter_bank.length);
    for(var i = 0; i < dftCoefs.length; i++) {
        dftCoefs[i] = 0.0;
        for(var j = 0; j < filter_bank.length; j++) {
            dftCoefs[i] += (filter_bank[j]*Math.cos(Math.PI*i*(2*j+1)/(2*filter_bank.length)));
        }
        dftCoefs[i] *= 2.0;
    }
    dftCoefs[0] *= Math.sqrt(1/(4*filter_bank.length));
    for(var i = 1; i < dftCoefs.length; i++) {
        dftCoefs[i] *= Math.sqrt(1/(2*filter_bank.length));
    }
    var mfccCoefs = dftCoefs.slice(0,13);
    for(var i = 0; i < mfccCoefs.length; i++) {
        mfccCoefs[i] *= (1 + (22 / 2) * Math.sin(Math.PI * i / 22));
    }
    return mfccCoefs;
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