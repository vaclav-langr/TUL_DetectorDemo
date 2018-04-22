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
    if (buffer.length >= Math.floor(config.sequencer.size.get * 0.5)) {
        buffer.shift();
    }
    buffer.push(raw)
}

const readBlobAsync = function (input) {
    return new Promise((resolve, reject) => {
        fr.onerror = () => {
            reject("Unable to parse file");
        };
        fr.onload = () => {
            let data = wav.decode(fr.result).channelData[0];
            if (audioSender != null && audioSender.isOpened() && isSpeech) {
                audioSender.addChunk(data);
            } else {
                addToBuffer(data);
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
    setSpeech(false);
};

function updateGUI(status) {
    let detector = document.getElementById("detector");
    if (status) {
        detector.setAttribute("fill", "#ff4d4d")
    } else {
        detector.setAttribute("fill", "#660000")
    }
}

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
        audioSender.setSend(speech);
    }
    updateGUI(isSpeech);
};

const getIsSpeech = function () {
    return isSpeech;
};

updateGUI(false);

module.exports = {
    startRecording: startRecording,
    stopRecording: stopRecording,
    setSpeech: setSpeech,
    getIsSpeech: getIsSpeech
};