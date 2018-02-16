/**
 * Created by vaclavlangr on 14.02.2018.
 */

var AbstractController = require('./../AbstractController').AbstractController;

function MouseUp() {
}

MouseUp.moveMouse = function (unit) {
    this.robotjs = require('robotjs');
    var mouse = this.robotjs.getMousePos();
    if(mouse.y - unit >= 0) {
        this.robotjs.moveMouseSmooth(mouse.x, mouse.y - unit);
    } else {
        this.robotjs.moveMouseSmooth(mouse.x, 0);
    }
};

MouseUp.prototype = new AbstractController();

MouseUp.move50 = function () {
    MouseUp.moveMouse(50)
};

MouseUp.move100 = function () {
    MouseUp.moveMouse(100)
};

MouseUp.move500 = function () {
    MouseUp.moveMouse(500)
};

MouseUp.prototype = new AbstractController();

MouseUp.prototype.possibleCommands = {
    "50": MouseUp.move50,
    "100": MouseUp.move100,
    "500": MouseUp.move500
}

module.exports = {MouseUp:MouseUp};
