var getUserMedia = require('get-user-media-promise');
var MicrophoneStream = require('microphone-stream');
resampler = require('audio-resampler');
var audioSender = new (require('./audioSender').AudioSender)();

var sampleRate;
var micStream;
var isRecording = false;
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
                bufferSize: 512 // Circular buffer. Copy to another buffer.
                                // On callback copy to another array
            };
            micStream = new MicrophoneStream(stream, options);
            micStream.on('data', function(chunk) {
                var raw = MicrophoneStream.toRaw(chunk);
                if(isSpeech) {
                    audioSender.addChunk(chunk);
                }
                onComplete(raw, sampleRate, afterResample);
            });
            micStream.on('format', function(format) {
                audioSender.setFormat(format);
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
    this.isSpeech = speech;
    audioSender.startSpeech();
}

module.exports = {
    startRecording,
    stopRecording,
    setSpeech
}