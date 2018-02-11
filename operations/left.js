/**
 * Created by vaclavlangr on 14.01.2018.
 */
var AbstractOperation = require('./AbstractOperation').AbstractOperation;

function leftOperation(){

}

leftOperation.prototype = new AbstractOperation();

leftOperation.prototype.doOperation = function () {
    console.log("Left operarion");
    var mouse = this.robotjs.getMousePos();
    this.robotjs.moveMouseSmooth(mouse.x - 100, mouse.y);
};

leftOperation.prototype.isStopable = function () {
    return false;
};


module.exports = {leftOperation:leftOperation};