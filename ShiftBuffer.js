var config = require('./config').config;

class ShiftBuffer{
    constructor(processFunction) {
        this.processFunction = processFunction;
        this.buffer = new Array(config.windowSize).fill(0);
        this.extraData = 0;
    }

    rotateBuffer(instance, rotateBy) {
        for(var i = 0; i < instance.buffer.length; i++) {
            instance.buffer[i] = instance.buffer[i + rotateBy];
        }
    }

    addData(instance, data) {
        var diff = config.overlap - instance.extraData;
        if(data.length >= diff) {
            instance.extraData = 0;
            instance.rotateBuffer(instance, diff);
            var partData = data.splice(0, diff);
            for(var i = 0; i < diff; i++) {
                instance.buffer[config.windowSize - diff + i] = partData[i];
            }
            var tempBuffer = instance.buffer.slice();
            instance.processFunction(tempBuffer);
            while(data.length >= config.overlap) {
                instance.rotateBuffer(instance, config.overlap);
                partData = data.splice(0, config.overlap);
                for(i = 0; i < config.overlap; i++) {
                    instance.buffer[config.windowSize - config.overlap + i] = partData[i];
                }
                tempBuffer = instance.buffer.slice();
                instance.processFunction(tempBuffer);
            }
        }
        instance.extraData = data.length;
        instance.rotateBuffer(instance, instance.extraData);
        for(var i = 0; i < instance.extraData; i++) {
            instance.buffer[config.windowSize - instance.extraData + i] = data[i];
        }
    }
}

module.exports = {
    ShiftBuffer
};