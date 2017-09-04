var config = require('./config').config;
var instance;

class ShiftBuffer{
    constructor(processFunction) {
        this.processFunction = processFunction;
        this.buffer = new Array(config.windowSize).fill(0);
        this.extraData = 0;

        instance = this;
    }

    rotateBuffer(rotateBy) {
        for(var i = 0; i < instance.buffer.length; i++) {
            instance.buffer[i] = instance.buffer[i + rotateBy];
        }
    }

    addData(data) {
        var diff = config.overlap - instance.extraData;
        instance.rotateBuffer(diff);
        for(var i = 0; i < diff; i++) {
            instance.buffer[config.windowSize - diff + i] = data[i];
        }
        var tempBuffer = instance.buffer.slice();
        instance.processFunction(tempBuffer);

        instance.rotateBuffer(data.length - diff);
        instance.extraData = (data.length - diff);
        for(var i = 0; i < data.length - diff; i++) {
            instance.buffer[config.windowSize - instance.extraData + i] = data[diff + i];
        }
        if(instance.extraData == 160) {
            var tempBuffer = this.buffer.slice();
            instance.processFunction(tempBuffer);
            instance.extraData = 0;
        }
    }
}

module.exports = {
    ShiftBuffer
};