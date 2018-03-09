/**
 * Created by vaclavlangr on 08.03.2018.
 */

const fs = require("fs");
const WavEncoder = require("wav-encoder");

var _buffer = [];
var _sampleRate;

const setSampleRate = function (sampleRate) {
    _sampleRate = sampleRate;
};

const addToBuffer = function (buffer) {
    _buffer = _buffer.concat(Array.prototype.slice.call(buffer));
};

const saveToWav = function () {
    if(!fs.existsSync("./log")) {
        fs.mkdir("./log")
    }

    const audio = {
        sampleRate: _sampleRate,
        channelData: [
            new Float32Array(_buffer)
        ]
    };
    WavEncoder.encode(audio).then((buffer) => {
        fs.writeFileSync("./log/" + (+new Date).toString() + ".wav", new Buffer(buffer))
    });
    _buffer = [];
};

module.exports = {
    setSampleRate:setSampleRate,
    addToBuffer:addToBuffer,
    saveToWav:saveToWav
};