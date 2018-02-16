/**
 * Created by vaclavlangr on 14.02.2018.
 */

var AbstractController = require('./../AbstractController').AbstractController;

function MouseLeft() {
}

MouseLeft.moveMouse = function (unit) {
    this.robotjs = require('robotjs');
    var mouse = this.robotjs.getMousePos();
    if((mouse.x - unit) >= 0) {
        this.robotjs.moveMouseSmooth(mouse.x - unit, mouse.y);
    } else {
        this.robotjs.moveMouseSmooth(0, mouse.y);
    }
};

MouseLeft.prototype = new AbstractController();

MouseLeft.move50 = function () {
    MouseLeft.moveMouse(50)
};

MouseLeft.move100 = function () {
    MouseLeft.moveMouse(100)
};

MouseLeft.move500 = function () {
    MouseLeft.moveMouse(500)
};

MouseLeft.prototype = new AbstractController();

MouseLeft.prototype.possibleCommands = {
    "50": MouseLeft.move50,
    "100": MouseLeft.move100,
    "500": MouseLeft.move500
}

module.exports = {MouseLeft:MouseLeft};
