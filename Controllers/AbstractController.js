/**
 * Created by vaclavlangr on 14.02.2018.
 */

function AbstractController() {
    this.controller = null;
    this.possibleGroups = {};
    this.possibleCommands = {};
    this.returnCommand = null;
}

AbstractController.prototype.getCurrentGroup = function () {
    if (this.controller != null) {
        return this.controller.getCurrentGroup();
    } else {
        return this.returnCommand;
    }
};

AbstractController.prototype.doOperation = function (operation) {
    if (this.controller != null) {
        let temp = this.controller.doOperation(operation);
        if (temp[0]) {
            return temp;
        }
    } else {
        for (let key in this.possibleGroups) {
            if (key.replace(" ", "") == operation) {
                if (this.controller == null) {
                    this.controller = this.possibleGroups[key];
                    return [true, key];
                }
            }
        }
        for (let key in this.possibleCommands) {
            if (key.replace(" ", "") == operation) {
                this.possibleCommands[key]();
                return [true, key];
            }
        }
    }
    if (this.returnCommand != null && this.controller != null) {
        if (operation == this.returnCommand.replace(" ", "")) {
            this.clearController();
            return [true, this.returnCommand];
        }
    }
    return [false, "???"];
};

AbstractController.prototype.getPossibilities = function () {
    let poss = [];
    if (this.controller == null) {
        poss = poss.concat(Object.getOwnPropertyNames(this.possibleCommands));
        poss = poss.concat(Object.getOwnPropertyNames(this.possibleGroups));
        return poss
    } else {
        poss = this.controller.getPossibilities();
        poss = poss.concat(this.returnCommand);
        return poss;
    }
};

AbstractController.prototype.clearController = function () {
    if (this.controller != null) {
        this.controller.clearController();
    }
    this.controller = null;
};

AbstractController.prototype.updateGUI = function () {
    throw new Error("Abstract method!");
};

module.exports = {AbstractController: AbstractController};