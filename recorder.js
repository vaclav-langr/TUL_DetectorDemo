var getUserMedia = require('get-user-media-promise');
var MicrophoneStream = require('microphone-stream');
resampler = require('audio-resampler');
const audioSender_1 = require('./audioSender');
const config = require('./config').config;
var audioSender = null;

var sampleRate;
var micStream;
var isRecording = false;
var buffer = new Array();
var formatVar;
var isSpeech = false;

const startRecording = function(onComplete, afterResample) {
    if(isRecording) {
        return;
    }
    isRecording = true;
    getUserMedia({ video: false, audio: true })
        .then(function(stream) {
            var options = {
                objectMode: false,
                bufferSize: 512
            };
            micStream = new MicrophoneStream(stream, options);
            micStream.on('data', function(chunk) {
                var raw = MicrophoneStream.toRaw(chunk);

                if(buffer.length == (config.sequencer.size * 3)) {
                    buffer.shift()
                }
                buffer.push(raw)
                if(audioSender != null) {
                    if (audioSender.isOpened() && isSpeech) {
                        audioSender.addChunk(raw);
                    }
                }

                onComplete(raw, sampleRate, afterResample);
            });
            micStream.on('format', function(format) {
                formatVar = format;
                sampleRate = format.sampleRate;
                console.log(format);
            });
        }).catch(function(error) {
        console.log(error);
    });
};

const stopRecording = function() {
    if(!isRecording) {
        return;
    }
    isRecording = false;
    micStream.stop();
};

const setSpeech = function(speech) {
    isSpeech = speech;
    if(speech) {
        if (audioSender == null || !audioSender.isOpened()) {
            audioSender = new audioSender_1.AudioSender(buffer);
            audioSender.setFormat(formatVar);
            audioSender.startSpeech();
        }
    }

};

module.exports = {
    startRecording,
    stopRecording,
    setSpeech
};