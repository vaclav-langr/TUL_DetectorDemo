/**
 * Created by vaclavlangr on 14.02.2018.
 */

function AbstractController(){
    this.controller = null;
    this.possibleGroups = {};
    this.possibleCommands = {};
    this.returnCommand = null;
}

AbstractController.prototype.doOperation = function(operation){
    if(this.controller != null) {
        if(this.controller.doOperation(operation)) {
            return true;
        }
    } else {
        for (var key in this.possibleGroups) {
            if (key == operation) {
                if (this.controller == null) {
                    this.controller = this.possibleGroups[key];
                    return true;
                }
            }
        }
        for (var key in this.possibleCommands) {
            if (key == operation) {
                this.possibleCommands[key]();
                return true;
            }
        }
    }
    if(operation == this.returnCommand) {
        this.clearController();
        return true;
    }
    return false;
};

AbstractController.prototype.getPossibilities = function () {
    var poss = [];
    if(this.controller == null) {
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
    if(this.controller != null) {
        this.controller.clearController();
    }
    this.controller = null;
};

AbstractController.prototype.updateGUI = function () {
    throw new Error("Abstract method!");
};

module.exports = {AbstractController:AbstractController};