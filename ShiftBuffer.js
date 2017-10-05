class ShiftBuffer{
    constructor(bufferSize, rotation, processFunction) {
        this.bufferSize = bufferSize;
        this.rotation = rotation;
        this.processFunction = processFunction;
        this.buffer = new Array(bufferSize).fill(0);
        this.extraData = 0;
    }

    rotateBuffer(instance, rotateBy) {
        for(var i = 0; i < instance.buffer.length; i++) {
            instance.buffer[i] = instance.buffer[i + rotateBy];
        }
    }

    addData(instance, data) {
        var diff = instance.rotation - instance.extraData;
        if(data.length >= diff) {
            instance.extraData = 0;
            instance.rotateBuffer(instance, diff);
            var partData = data.splice(0, diff);
            for(var i = 0; i < diff; i++) {
                instance.buffer[instance.bufferSize - diff + i] = partData[i];
            }
            var tempBuffer = instance.buffer.slice();
            instance.processFunction(tempBuffer);
            while(data.length >= instance.rotation) {
                instance.rotateBuffer(instance, instance.rotation);
                partData = data.splice(0, instance.rotation);
                for(i = 0; i < instance.rotation; i++) {
                    instance.buffer[instance.bufferSize - instance.rotation + i] = partData[i];
                }
                tempBuffer = instance.buffer.slice();
                instance.processFunction(tempBuffer);
            }
        }
        instance.extraData += data.length;
        instance.rotateBuffer(instance, data.length);
        for(var i = 0; i < data.length; i++) {
            instance.buffer[instance.bufferSize - data.length + i] = data[i];
        }
    }

    clearBuffer(instance) {
        instance.buffer = new Array(instance.bufferSize).fill(0);
        instance.extraData = 0;
    }
}

module.exports = {
    ShiftBuffer
};