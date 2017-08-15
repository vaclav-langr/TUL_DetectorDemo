resampler = require('audio-resampler');

function getParams() {
    var Meyda = require('meyda');
}

function extractFeatures(data) {
    console.log(data.getChannelData(0));
}

function onChange() {
    resampler(this.files[0], 16000, function(event){
        extractFeatures(event.getAudioBuffer());
    });
}

document.getElementById("the-file-input").addEventListener("change", onChange);
getParams();