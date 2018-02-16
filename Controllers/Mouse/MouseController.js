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

MouseController.prototype.returnCommand = "Mouse";

MouseController.prototype.possibleCommands = {
    "Click": MouseController.simpleClick,
    "DoubleClick": MouseController.doubleClick,
    "RightClick": MouseController.rightClick
}

MouseController.prototype.possibleGroups = {
    "MouseUp": new MouseUp(),
    "MouseDown": new MouseDown(),
    "MouseLeft": new MouseLeft(),
    "MouseRight": new MouseRight()
};

module.exports = {MouseController:MouseController};
