/**
 * Created by vaclavlangr on 09.05.2018.
 */
const AbstractController = require('./../AbstractController').AbstractController;

function WindowController() {
    this.doShortcut = function () {
        let keys = arguments[0];
        for(let i = 0; i < keys.length; i++) {
            this.prototype.robot.keyToggle(keys[i], "down");
        }
        for(let i = keys.length-1; i >= 0; i--) {
            this.prototype.robot.keyToggle(keys[i], "up");
        }
    };

    this.prototype = new AbstractController();

    this.prototype.returnCommand = "Okno";
    this.prototype.possibleCommands = {
        "Přepni na další": this.doShortcut.bind(this,["alt", "escape"]),
        "Zavři okno": this.doShortcut.bind(this,["alt", "f4"]),
        "Minimalizuj": this.doShortcut.bind(this,["command", "down"]),
        "Maximalizuj": this.doShortcut.bind(this,["command", "up"])
    };
    this.prototype.possibleGroups = {};
}

module.exports = {
    WindowController: WindowController
};