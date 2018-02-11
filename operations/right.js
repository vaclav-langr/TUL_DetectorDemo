/**
 * Created by vaclavlangr on 14.01.2018.
 */
var AbstractOperation = require('./AbstractOperation').AbstractOperation;

function rightOperation(){

}

rightOperation.prototype = new AbstractOperation();

rightOperation.prototype.doOperation = function () {
    console.log("Right operarion");
    var mouse = this.robotjs.getMousePos();
    this.robotjs.moveMouseSmooth(mouse.x + 100, mouse.y);
};

rightOperation.prototype.isStopable = function () {
    return false;
};


module.exports = {rightOperation:rightOperation};