class ShiftBuffer{
    constructor(bufferSize, rotation, processFunction) {
        this._bufferSize = bufferSize;
        this._rotation = rotation;
        this._processFunction = processFunction;
        this._buffer = new Array(bufferSize).fill(0);
        this._extraData = 0;
    }

    rotateBuffer(rotateBy) {
        for(var i = 0; i < this._buffer.length; i++) {
            this._buffer[i] = this._buffer[i + rotateBy];
        }
    }

    addData(data) {
        var diff = this._rotation - this._extraData;
        if(data.length >= diff) {
            this._extraData = 0;
            this.rotateBuffer(diff);
            var partData = data.splice(0, diff);
            for(var i = 0; i < diff; i++) {
                this._buffer[this._bufferSize - diff + i] = partData[i];
            }
            this._processFunction(this._buffer);
            while(data.length >= this._rotation) {
                this.rotateBuffer(this._rotation);
                partData = data.splice(0, this._rotation);
                for(i = 0; i < this._rotation; i++) {
                    this._buffer[this._bufferSize - this._rotation + i] = partData[i];
                }
                this._processFunction(this._buffer);
            }
        }
        this._extraData += data.length;
        this.rotateBuffer(data.length);
        for(var i = 0; i < data.length; i++) {
            this._buffer[this._bufferSize - data.length + i] = data[i];
        }
    }

    clearBuffer() {
        this._buffer = new Array(this._bufferSize).fill(0);
        this._extraData = 0;
    }
}

module.exports = {
    ShiftBuffer:ShiftBuffer
};