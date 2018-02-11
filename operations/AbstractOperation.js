/**
 * Created by vaclavlangr on 14.01.2018.
 */

function AbstractOperation(){
    this.completed = false;
    this.robotjs = require('robotjs');
}

AbstractOperation.prototype.doOperation = function(){
    throw 'AbstractMethodNotImplementedError';
};

AbstractOperation.prototype.isCompleted = function(){
    this.completed;
};

AbstractOperation.prototype.isStopable = function(){
    throw 'AbstractMethodNotImplementedError';
};

module.exports = {AbstractOperation:AbstractOperation};