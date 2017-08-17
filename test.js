var extractor = require('sound-parameters-extractor');

function generateRandom() {
    return (Math.random()*2 - 1);
}

function generateRandomFromCoefs() {
    return this.coefs[Math.floor(Math.random() * this.coefs.length)];
}

function preProcess(data, noiseCoefs) {
    var generator;
    if (typeof noiseCoefs === 'undefined') {
        generator = generateRandom;
    } else {
        generator = generateRandomFromCoefs.bind({coefs:noiseCoefs});
    }

    var filtered = new Array(data.length);
    filtered[0] = data[0];
    for(var i = 1; i < filtered.length; i++) {
        filtered[i] = data[i] - 0.97*data[i-1];
    }

    var signal = filtered.map((val, index) => val + generator());
    return signal;
}

function divideIntoFrames(signal) {
    const windowSize = 400;
    const overlap = '40%';
    frames = extractor.framer(signal, windowSize, overlap);
    frames = frames.slice(0,-3);
    return frames;
}

function computeMfcc(frames) {
    fft = require('fft-js');
    var config = {
        fftSize : 512,
        bankCount : 39,
        lowFrequency : 1,
        highFrequency : 8000,
        sampleRate : 16000
    };
    var mfccSize = 39;
    var mfccMatrix = extractor.mfcc.construct(config, mfccSize);
    var mfccSignal = [];
    var padding = Array(112).fill(0);
    for(var i = 0; i < frames.length; i++) {
        var paddedFrame = frames[i];
        paddedFrame = paddedFrame.concat(padding); //Fill to get length(512) to use FFT
        var phasors = fft.fft(paddedFrame);
        phasors = phasors.concat(phasors);
        mfccSignal.push(mfccMatrix(fft.util.fftMag(phasors)));
    }
    return mfccSignal;
}

function normalize(mfccFeatures, left, right) {
    var normalized = new Array(mfccFeatures.length);
    for(var col = 0; col < mfccFeatures.length; col++) {
        normalized[col] = new Array(mfccFeatures[0].length);
    }
    var numFeatures = mfccFeatures[0].length;
    for(var i = 0; i < numFeatures; i++) {
        for(var j = 0; j < mfccFeatures.length; j++) {
            var sum = 0;
            var numElements = 0;
            //Based on XML. Are indexes 0-49 left untouched? Same for last 50 indexes.
            for(var k = j - left; k < j + right + 1; k++) {
                if(k >= 0 && k < mfccFeatures.length) {
                    sum += mfccFeatures[k][i];
                    numElements += 1;
                }
            }
            var mean = sum / numElements;
            normalized[j][i] = mfccFeatures[j][i] / mean;
        }
    }
    return normalized;
}

function extractFeatures(data) {
    var preProcessedSignal = preProcess(data, [-1, 1]);
    var framedSignal = divideIntoFrames(preProcessedSignal);
    var mfccFeatures = computeMfcc(framedSignal);
    var normalizedFrames = normalize(mfccFeatures, 50, 50);
    //How to detect in this step? Via DNN or a condition? If via DNN how to label frames?
}

function onChange() {
    var fr = new FileReader();
    fr.onload = function () {
        var wav = require('node-wav');
        var result = wav.decode(this.result);
        
        if(result.sampleRate != 16000) {
            //Gets different values compared to MATLAB resample
            resampler = require('audio-resampler');
            var audioCtx = new AudioContext();
            var buffer = audioCtx.createBuffer(1, result.channelData[0].length, result.sampleRate);
            buffer.copyToChannel(result.channelData[0],0,0);
            resampler(buffer, 16000, function (event) {
                extractFeatures(event.getAudioBuffer().getChannelData(0));
            });
        } else {
            extractFeatures(result.channelData[0]);
        }
    };
    fr.readAsArrayBuffer(this.files[0]);
}

document.getElementById("the-file-input").addEventListener("change", onChange);