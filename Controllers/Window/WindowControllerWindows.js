/**
 * Created by vaclavlangr on 09.05.2018.
 */
const AbstractController = require('./../AbstractController').AbstractController;

function WindowController() {
    this.prototype = new AbstractController();
    this.prototype.returnCommand = "Okno";
    this.prototype.pronunc = "okno";

    this.doShortcut = function () {
        let keys = arguments[0];
        for(let i = 0; i < keys.length; i++) {
            this.prototype.robot.keyToggle(keys[i], "down");
        }
        for(let i = keys.length-1; i >= 0; i--) {
            this.prototype.robot.keyToggle(keys[i], "up");
        }
    };

    this.prototype.possibleCommands = [
        {   word:"Přepni na další",
            operation: this.doShortcut.bind(this,["alt", "escape"]),
            pronunc: "pŘepňinadalší"
        },
        {   word: "Zavři okno",
            operation: this.doShortcut.bind(this,["alt", "f4"]),
            pronunc: "zavřiokno"
        },
        {   word:"Minimalizuj",
            operation: this.doShortcut.bind(this,["command", "down"]),
            pronunc: "minimalizuj"
        },
        {   word:"Maximalizuj",
            operation: this.doShortcut.bind(this,["command", "up"]),
            pronunc: "maksimalizuj"
        }
    ];
    this.prototype.possibleGroups = [];
}

module.exports = {
    WindowController: WindowController
};