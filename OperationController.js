/**
 * Created by vaclavlangr on 14.01.2018.
 */

var abstract = require('./operations/AbstractOperation');
var click = require('./operations/click');
var doubleclick = require('./operations/doubleclick');
var down = require('./operations/down');
var left = require('./operations/left');
var right = require('./operations/right');
var rightclick = require('./operations/rightclick');
var up = require('./operations/up');

class OperationController{
    constructor() {
        this.lastOperationName = null;
        this.lastOperation = null;
    }

    doOperation(operation) {
        if(this.lastOperationName != operation) {
            this.lastOperationName = operation;
            this.lastOperation = this.operationFactory(operation);
            this.lastOperation.doOperation();
        } else {
            if(!this.lastOperation.isCompleted()) {
                this.lastOperation.doOperation();
            }
        }
    }

    operationFactory(operation) {
        switch (operation) {
            case "click":
                return new click.clickOperation();
                break;
            case "doubleclick":
                return new doubleclick.doubleclickOperation();
                break;
            case "down":
                return new down.downOperation();
                break;
            case "left":
                return new left.leftOperation();
                break;
            case "right":
                return new right.rightOperation();
                break;
            case "rightclick":
                return new rightclick.rightclickOperation();
                break;
            case "up":
                return new up.upOperation();
                break;
        }
    }
}

module.exports = {OperationController}