var Recorder = require('./recorder');

document.getElementById('stop-button').addEventListener('click', Recorder.stopRecording);
document.getElementById('start-button').addEventListener('click', function () {
    Recorder.startRecording(console.log);
});