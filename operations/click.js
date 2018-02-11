/**
 * Created by vaclavlangr on 14.01.2018.
 */
var AbstractOperation = require('./AbstractOperation').AbstractOperation;

function clickOperation(){

}

clickOperation.prototype = new AbstractOperation();

clickOperation.prototype.doOperation = function () {
    console.log("Click operarion");
    this.robotjs.mouseClick();
};

clickOperation.prototype.isStopable = function () {
    return false;
};


module.exports = {clickOperation:clickOperation};