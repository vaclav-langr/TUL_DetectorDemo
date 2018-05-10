/**
 * Created by vaclavlangr on 09.05.2018.
 */
const AbstractController = require('./../AbstractController').AbstractController;

function WindowController() {
}

WindowController.doShortcut = function() {
    let robot = require('robotjs');
    for(let i = 0; i < this.keys.length; i++) {
        robot.keyToggle(this.keys[i], "down");
    }
    for(let i = this.keys.length-1; i >= 0; i--) {
        robot.keyToggle(this.keys[i], "up");
    }
};

WindowController.prototype = new AbstractController();

WindowController.prototype.returnCommand = "Okno";

WindowController.prototype.possibleCommands = {
    "Přepni na další": WindowController.doShortcut.bind({keys: ["alt", "escape"]}),
    "Zavři okno": WindowController.doShortcut.bind({keys: ["alt", "f4"]}),
    "Minimalizuj": WindowController.doShortcut.bind({keys: ["command", "down"]}),
    "Maximalizuj": WindowController.doShortcut.bind({keys: ["command", "up"]})
};

WindowController.prototype.possibleGroups = {};

module.exports = {
    WindowController: WindowController
};