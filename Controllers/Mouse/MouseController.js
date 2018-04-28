/**
 * Created by vaclavlangr on 14.02.2018.
 */

const MouseUp = require('./MouseUp').MouseUp;
const MouseDown = require('./MouseDown').MouseDown;
const MouseLeft = require('./MouseLeft').MouseLeft;
const MouseRight = require('./MouseRight').MouseRight;

const AbstractController = require('./../AbstractController').AbstractController;

function MouseController() {
}

MouseController.simpleClick = function () {
    let robotjs = require('robotjs');
    robotjs.mouseClick();
};

MouseController.doubleClick = function () {
    let robotjs = require('robotjs');
    robotjs.mouseClick("left", true);
};

MouseController.rightClick = function () {
    let robotjs = require('robotjs');
    robotjs.mouseClick("right");
};

MouseController.prototype = new AbstractController();

MouseController.prototype.returnCommand = "Myš";

MouseController.prototype.possibleCommands = {
    "Klikni": MouseController.simpleClick,
    "Dvojklik": MouseController.doubleClick,
    "Pravý klik": MouseController.rightClick,
    "Doleva 50": MouseLeft.moveMouse.bind({unit: 50}),
    "Doleva 100": MouseLeft.moveMouse.bind({unit: 100}),
    "Doleva 500": MouseLeft.moveMouse.bind({unit: 500}),
    "Doprava 50": MouseRight.moveMouse.bind({unit: 50}),
    "Doprava 100": MouseRight.moveMouse.bind({unit: 100}),
    "Doprava 500": MouseRight.moveMouse.bind({unit: 500}),
    "Dolů 50": MouseDown.moveMouse.bind({unit: 50}),
    "Dolů 100": MouseDown.moveMouse.bind({unit: 100}),
    "Dolů 500": MouseDown.moveMouse.bind({unit: 500}),
    "Nahoru 50": MouseUp.moveMouse.bind({unit: 50}),
    "Nahoru 100": MouseUp.moveMouse.bind({unit: 100}),
    "Nahoru 500": MouseUp.moveMouse.bind({unit: 500})
};

MouseController.prototype.possibleGroups = {};

module.exports = {
    MouseController: MouseController
};
