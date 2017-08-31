var config = require('./config').config;

function ShiftBuffer(processFunction) {
    this.processFunction = processFunction;
    this.buffer = new Array(config.windowSize).fill(0);
    this.extraData = 0;
}

ShiftBuffer.prototype.rotateBuffer = function (rotateBy) {
    for(var i = 0; i < this.buffer.length - rotateBy; i++) {
        this.buffer[i] = this.buffer[i + rotateBy];
    }
};

ShiftBuffer.prototype.addData = function(data) {
    var diff = config.overlap - this.extraData;
    this.rotateBuffer(diff);
    for(var i = 0; i < diff; i++) {
        this.buffer[config.windowSize - diff + i] = data[i];
    }
    var tempBuffer = this.buffer.slice();
    this.processFunction(tempBuffer);

    this.rotateBuffer(data.length - diff);
    this.extraData = (data.length - diff);
    for(var i = 0; i < data.length - diff; i++) {
        this.buffer[config.windowSize - this.extraData + i] = data[diff + i];
    }
    if(this.extraData == 160) {
        var tempBuffer = this.buffer.slice();
        this.processFunction(tempBuffer);
        this.extraData = 0;
    }
};

module.exports = {
    ShiftBuffer
}