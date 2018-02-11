/**
 * Created by vaclavlangr on 14.01.2018.
 */
var AbstractOperation = require('./AbstractOperation').AbstractOperation;

function doubleclickOperation(){

}

doubleclickOperation.prototype = new AbstractOperation();

doubleclickOperation.prototype.doOperation = function () {
    console.log("Doubleclick operarion");
    this.robotjs.mouseClick("left", true);
};

doubleclickOperation.prototype.isStopable = function () {
    return false;
};


module.exports = {doubleclickOperation:doubleclickOperation};