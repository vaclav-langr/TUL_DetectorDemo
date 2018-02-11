/**
 * Created by vaclavlangr on 14.01.2018.
 */
var AbstractOperation = require('./AbstractOperation').AbstractOperation;

function downOperation(){

}

downOperation.prototype = new AbstractOperation();

downOperation.prototype.doOperation = function () {
    console.log("Down operarion");
    var mouse = this.robotjs.getMousePos();
    this.robotjs.moveMouseSmooth(mouse.x, mouse.y + 100);
};

downOperation.prototype.isStopable = function () {
    return false;
};


module.exports = {downOperation:downOperation};