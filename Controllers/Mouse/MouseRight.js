/**
 * Created by vaclavlangr on 14.02.2018.
 */

var AbstractController = require('./../AbstractController').AbstractController;

function MouseRight() {
}

MouseRight.moveMouse = function (unit) {
    this.robotjs = require('robotjs');
    var mouse = this.robotjs.getMousePos();
    var screenSize = this.robotjs.getScreenSize();
    if((mouse.x + unit) < screenSize.width) {
        this.robotjs.moveMouseSmooth(mouse.x + unit, mouse.y);
    } else {
        this.robotjs.moveMouseSmooth(screenSize.width, mouse.y);
    }
};

MouseRight.prototype = new AbstractController();

MouseRight.move50 = function () {
    MouseRight.moveMouse(50)
};

MouseRight.move100 = function () {
    MouseRight.moveMouse(100)
};

MouseRight.move500 = function () {
    MouseRight.moveMouse(500)
};

MouseRight.prototype = new AbstractController();

MouseRight.prototype.possibleCommands = {
    "50": MouseRight.move50,
    "100": MouseRight.move100,
    "500": MouseRight.move500
}

module.exports = {MouseRight:MouseRight};
