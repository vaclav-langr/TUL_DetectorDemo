const fs = require("fs");
const WavEncoder = require("wav-encoder");

var _buffer = [];
var _sampleRate;
var _filename;

const setSampleRate = function (sampleRate) {
    _sampleRate = sampleRate;
};

const addToBuffer = function (buffer) {
    _buffer = _buffer.concat(Array.prototype.slice.call(buffer));
};

const setFilename = function (filename) {
    _filename = "./log/" + filename + ".wav";

    if(!fs.existsSync("./log")) {
        fs.mkdir("./log")
    }
};

const saveToWav = function () {
    const audio = {
        sampleRate: _sampleRate,
        channelData: [
            new Float32Array(_buffer)
        ]
    };
    WavEncoder.encode(audio).then((buffer) => {
        fs.writeFileSync(_filename, new Buffer(buffer))
    });
    _buffer = [];
};

module.exports = {
    setSampleRate:setSampleRate,
    addToBuffer:addToBuffer,
    saveToWav:saveToWav,
    setFilename:setFilename
};