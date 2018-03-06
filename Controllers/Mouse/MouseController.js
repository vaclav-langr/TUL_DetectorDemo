/**
 * Created by vaclavlangr on 14.02.2018.
 */

var AbstractController = require('./../AbstractController').AbstractController;

var MouseUp = require('./MouseUp').MouseUp;
var MouseDown = require('./MouseDown').MouseDown;
var MouseLeft = require('./MouseLeft').MouseLeft;
var MouseRight = require('./MouseRight').MouseRight;

function MouseController() {
}

MouseController.simpleClick = function () {
    var robotjs = require('robotjs');
    robotjs.mouseClick();
};

MouseController.doubleClick = function () {
    var robotjs = require('robotjs');
    robotjs.mouseClick("left", true);
};

MouseController.rightClick = function () {
    var robotjs = require('robotjs');
    robotjs.mouseClick("right");
};

MouseController.prototype = new AbstractController();

MouseController.prototype.returnCommand = "Myš";

MouseController.prototype.possibleCommands = {
    "Klik": MouseController.simpleClick,
    "Dvojitý klik": MouseController.doubleClick,
    "Pravý klik": MouseController.rightClick
}

MouseController.prototype.possibleGroups = {
    "Nahoru": new MouseUp(),
    "Dolu": new MouseDown(),
    "Doleva": new MouseLeft(),
    "Doprava": new MouseRight()
};

module.exports = {MouseController:MouseController};
