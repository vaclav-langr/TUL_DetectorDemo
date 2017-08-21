var getUserMedia = require('get-user-media-promise');
var MicrophoneStream = require('microphone-stream');

resampler = require('audio-resampler');
var library = require('./library');
var sampleRate;
var micStream;
var isRecording = false;

const startRecording = function(onComplete) {
    if(isRecording) {
        return;
    }
    isRecording = true;
    getUserMedia({ video: false, audio: true })
        .then(function(stream) {
            var options = {
                objectMode: false,
                bufferSize: 512 //Can I throw away 10 samples from each frame? (cca 0.000625 second)
                                // 512 samples with 48 kHz sample rate is 170 samples with 16 kHz sample rate
                                // Need only 160 (windows shift)
            };
            micStream = new MicrophoneStream(stream, options);
            micStream.on('data', function(chunk) {
                var raw = MicrophoneStream.toRaw(chunk);
                //library.resample(raw, sampleRate, console.log);
                onComplete(raw);
            });
            micStream.on('format', function(format) {
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

module.exports = {
    startRecording,
    stopRecording
}