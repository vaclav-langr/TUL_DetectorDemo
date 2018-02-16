/**
 * Created by vaclavlangr on 14.02.2018.
 */

var AbstractController = require('./../AbstractController').AbstractController;

function MouseDown() {
}

MouseDown.moveMouse = function (unit) {
    this.robotjs = require('robotjs');
    var mouse = this.robotjs.getMousePos();
    var screenSize = this.robotjs.getScreenSize();
    if((mouse.y + unit) < screenSize.height) {
        this.robotjs.moveMouseSmooth(mouse.x, mouse.y + unit);
    } else {
        this.robotjs.moveMouseSmooth(mouse.x, screenSize.height);
    }
};

MouseDown.move50 = function () {
    MouseDown.moveMouse(50)
};

MouseDown.move100 = function () {
    MouseDown.moveMouse(100)
};

MouseDown.move500 = function () {
    MouseDown.moveMouse(500)
};

MouseDown.prototype = new AbstractController();

MouseDown.prototype.possibleCommands = {
    "50": MouseDown.move50,
    "100": MouseDown.move100,
    "500": MouseDown.move500
}

module.exports = {MouseDown:MouseDown};
