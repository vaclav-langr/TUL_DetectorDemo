/**
 * Created by vaclavlangr on 14.01.2018.
 */
var AbstractOperation = require('./AbstractOperation').AbstractOperation;

function rightclickOperation(){

}

rightclickOperation.prototype = new AbstractOperation();

rightclickOperation.prototype.doOperation = function () {
    console.log("Rightclick operarion");
    this.robotjs.mouseClick("right");
};

rightclickOperation.prototype.isStopable = function () {
    return false;
};


module.exports = {rightclickOperation:rightclickOperation};