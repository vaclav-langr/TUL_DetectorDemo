var config = require('./config').config;

const FFT = require('fft.js');
resampler = require('audio-resampler');
var linspace = require('linspace');

const f = new FFT(config.segmenter.windowsSizePower);
const phasors = f.createComplexArray();
var audioCtx = new AudioContext(); //Limited number of AudioContexts
var index = 0;
var filters, bufferNorm;

function mel2hz(mel) {
    return 700 * (Math.exp(mel / 1127) - 1);
}

function hz2mel(hz) {
    return 1127 * Math.log(1 + (hz / 700));
}

function createFilters() {
    var low_freq_mel = hz2mel(config.melfbank.lowFrequency.get);
    var high_freq_mel = hz2mel(config.melfbank.highFrequency.get);
    var mels = linspace(low_freq_mel, high_freq_mel, config.melfbank.channels.get + 2);
    var hzs = mels.slice();
    for(var i = 0; i < hzs.length; i++) {
        hzs[i] = mel2hz(hzs[i]);
    }
    var bins = hzs.slice();
    for(var i = 0; i < bins.length; i++) {
        bins[i] = Math.floor((config.segmenter.windowsSizePower + 1) * hzs[i] / config.sampleRate.get);
    }
    filters = new Array(config.melfbank.channels.get);
    for(var i = 0; i < filters.length; i++) {
        filters[i] = new Array(Math.floor(config.segmenter.windowsSizePower / 2 + 1)).fill(0);
    }

    for(var i = 1; i < config.melfbank.channels.get + 1; i++) {
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

const scaleSignal = function (data) {
    var fullSize = new Array(data.length);
    var scaleFactor = Math.pow(2, config.bitDepth.get - 1);
    for(var i = 0; i < fullSize.length; i++) {
        fullSize[i] = Math.round(data[i] * scaleFactor); //Scale to bit depth
        if(fullSize[i] < -scaleFactor) {
            fullSize[i] = -scaleFactor; //If smaller than bit depth, fix
        }
        if(fullSize[i] > scaleFactor) {
            fullSize[i] = scaleFactor; //If greater than bit depth, fix
        }
    }
    return fullSize;
}

const preProcess = function(data, lastSample) {
    var generator;
    var dataCopy = data.slice();
    var filtered = new Array(dataCopy.length);

    //Determine which generator to use
    if (config.melfbank.useRange.get) {
        generator = generateRandomFromRange.bind({coefs:config.melfbank.noiseCoefs.get});
    } else {
        generator = generateRandomFromCoefs.bind({coefs:config.melfbank.noiseCoefs.get});
    }

    //Check if exists lastSample (is used in live stream)
    //If does not exist equals first sample of data
    if(typeof lastSample == 'undefined') {
        lastSample = dataCopy[0];
    }

    //Add random noise
    for(var i = 0; i < dataCopy.length; i++) {
        dataCopy[i] += generator()
    }

    //Apply filter
    filtered[0] = dataCopy[0] - config.melfbank.preemCoef.get * lastSample;
    for(var i = 1; i < filtered.length; i++) {
        filtered[i] = dataCopy[i] - config.melfbank.preemCoef.get*dataCopy[i-1];
    }

    return filtered;
};

const applyHammingWindow = function (data) {
    var result = new Array(data.length);
    var windowSample;
    for(var i = 0; i < result.length; i++) {
        windowSample = 0.54 - 0.46 * Math.cos(2 * Math.PI * i / (result.length - 1)); //Generate window sample on index i
        result[i] = data[i] * windowSample; // Apply generated window sample
    }
    return result;
};

const computeMfbank = function(frame) {
    if(typeof filters === 'undefined') {
        createFilters();
    }
    var padding = Array(config.segmenter.windowsSizePower - config.segmenter.windowSize.get).fill(0);
    var paddedFrame = frame.slice();
    paddedFrame = paddedFrame.concat(padding); //Pad to get power of two length to use FFT

    f.realTransform(phasors, paddedFrame);
    f.completeSpectrum(phasors);
    var mags = new Array(Math.floor(config.segmenter.windowsSizePower / 2 + 1));
    var real, imag;
    for(var i = 0; i < mags.length; i++) {
        real = Math.abs(phasors[i*2]);
        imag = Math.abs(phasors[i*2+1]);
        mags[i] = Math.sqrt(real*real + imag*imag);
    }

    var melspec = new Array(config.melfbank.channels.get).fill(0);
    for(var i = 0; i < melspec.length; i++) {
        for(var j = 0; j < mags.length; j++) {
            melspec[i] += (mags[j] * filters[i][j]);
        }
        if(melspec[i] < config.melfbank.minValue.get) {
            melspec[i] = config.melfbank.returnValue.get;
        } else {
            melspec[i] = Math.log(melspec[i]);
        }
    }
    return melspec;
};

var buffer;
const resample = function (data, sampleRate, onCompleteFunction) {
    if (buffer == null) {
        buffer = audioCtx.createBuffer(1, data.length, sampleRate);
    }
    if (sampleRate != config.sampleRate.get) {
        buffer.copyToChannel(data,0,0);
         resampler(buffer, config.sampleRate.get, function (event) {
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
    if(index > config.normalizer.position.get) {
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
            normalized[i] = bufferNorm[config.normalizer.position.get][i] - mean;
        }
    }
    return normalized;
};

const clearBuffer = function () {
    index = 0;
    bufferNorm = new Array(config.normalizer.size.get);
    for(var i = 0; i < bufferNorm.length; i++) {
        bufferNorm[i] = new Array(config.melfbank.channels.get).fill(0);
    }
};

module.exports = {
    preProcess:preProcess,
    computeMfbank:computeMfbank,
    resample:resample,
    normalize:normalize,
    clearBuffer:clearBuffer,
    applyHammingWindow:applyHammingWindow,
    scaleSignal:scaleSignal
};