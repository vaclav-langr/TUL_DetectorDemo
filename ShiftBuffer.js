class ShiftBuffer{
    constructor(bufferSize, rotation, processFunction) {
        this.bufferSize = bufferSize;
        this.rotation = rotation;
        this.processFunction = processFunction;
        this.buffer = new Array(bufferSize).fill(0);
        this.extraData = 0;
    }

    rotateBuffer(rotateBy) {
        for(var i = 0; i < this.buffer.length; i++) {
            this.buffer[i] = this.buffer[i + rotateBy];
        }
    }

    addData(data) {
        var diff = this.rotation - this.extraData;
        if(data.length >= diff) {
            this.extraData = 0;
            this.rotateBuffer(diff);
            var partData = data.splice(0, diff);
            for(var i = 0; i < diff; i++) {
                this.buffer[this.bufferSize - diff + i] = partData[i];
            }
            var tempBuffer = this.buffer.slice();
            this.processFunction(tempBuffer);
            while(data.length >= this.rotation) {
                this.rotateBuffer(this.rotation);
                partData = data.splice(0, this.rotation);
                for(i = 0; i < this.rotation; i++) {
                    this.buffer[this.bufferSize - this.rotation + i] = partData[i];
                }
                tempBuffer = this.buffer.slice();
                this.processFunction(tempBuffer);
            }
        }
        this.extraData += data.length;
        this.rotateBuffer(data.length);
        for(var i = 0; i < data.length; i++) {
            this.buffer[this.bufferSize - data.length + i] = data[i];
        }
    }

    clearBuffer() {
        this.buffer = new Array(this.bufferSize).fill(0);
        this.extraData = 0;
    }
}

module.exports = {
    ShiftBuffer
};