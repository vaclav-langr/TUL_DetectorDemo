const recordRTC = require('recordrtc');
const wav = require('node-wav');

const audioSender_1 = require('./audioSender');
var audioSender = null;
const config = require('./config').config;

var fr = new FileReader();
var buffer = new Array();
var isRecording = false;
var isSpeech = false;
var url = (window.URL || window.webkitURL);
var recorder;

function addToBuffer(raw) {
    if (buffer.length == (config.sequencer.size.get * 1)) {
        buffer.shift();
    }
    buffer.push(raw)
}

function removeLast() {
    if (buffer.length > 0) {
        buffer.pop();
    }
}

function readBlob(input, callback) {
    fr.onload = () => {
        var data = wav.decode(fr.result).channelData[0];
        addToBuffer(data);
        if (audioSender != null && audioSender.isOpened() && isSpeech) {
            audioSender.addChunk(data);
            removeLast();
        }
        callback(data);
    };
    fr.readAsArrayBuffer(input);
}

const readBlobAsync = function (input) {
    return new Promise((resolve, reject) => {
        fr.onerror = () => {
            reject("Unable to parse file");
        };
        fr.onload = () => {
            var data = wav.decode(fr.result).channelData[0];
            addToBuffer(data);
            if (audioSender != null && audioSender.isOpened() && isSpeech) {
                audioSender.addChunk(data);
                removeLast();
            }
            resolve(data);
        };
        fr.readAsArrayBuffer(input);
    });
};

const startRecording = function (onComplete) {
    if (isRecording) {
        return;
    }
    isRecording = true;
    navigator.mediaDevices.getUserMedia({audio: true, video: false}).then(function (microphone) {
        recorder = new recordRTC(microphone, {
            recorderType: recordRTC.StereoAudioRecorder,
            numberOfAudioChannels: 1,
            mimeType: 'audio/wav',
            desiredSampRate: config.sampleRate.get,
            audioBitsPerSecond: config.bitDepth.get,
            timeSlice: 10,
            disableLogs: true,
            ondataavailable: function (blob) {
                //readBlob(blob, onComplete);
                readBlobAsync(blob).then(onComplete, console.error);
                url.revokeObjectURL(url.createObjectURL(blob));
            }
        });
        recorder.microphone = microphone;
        recorder.startRecording();
    }).catch(function (error) {
        console.error(error);
    });
};

const stopRecording = function () {
    if (!isRecording) {
        return;
    }
    isRecording = false;
    recorder.stopRecording();
    recorder.microphone.stop();
};

const setSpeech = function (speech) {
    isSpeech = speech;
    if (speech) {
        if (audioSender == null || !audioSender.isOpened()) {
            audioSender = new audioSender_1.AudioSender(buffer);
            audioSender.setFormat({
                sampleRate: config.sampleRate.get,
                channels: 1,
                float: true,
                bitDepth: 32
            });
            audioSender.startSpeech();

            buffer = new Array();
        }
    } else {
        audioSender = null;
    }
};

const getIsSpeech = function () {
    return isSpeech;
};

module.exports = {
    startRecording: startRecording,
    stopRecording: stopRecording,
    setSpeech: setSpeech,
    getIsSpeech: getIsSpeech
};