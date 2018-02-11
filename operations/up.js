/**
 * Created by vaclavlangr on 14.01.2018.
 */
var AbstractOperation = require('./AbstractOperation').AbstractOperation;

function upOperation(){

}

upOperation.prototype = new AbstractOperation();

upOperation.prototype.doOperation = function () {
    console.log("Up operarion");
    var mouse = this.robotjs.getMousePos();
    this.robotjs.moveMouseSmooth(mouse.x, mouse.y - 100);
};

upOperation.prototype.isStopable = function () {
    return false;
};


module.exports = {upOperation:upOperation};