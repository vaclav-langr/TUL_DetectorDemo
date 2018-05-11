/**
 * Created by vaclavlangr on 14.02.2018.
 */

function AbstractController() {
    this.controller = null;
    this.possibleGroups = [];
    this.possibleCommands = [];
    this.returnCommand = null;
    this.pronunc = "";
    this.robot = require('robotjs');
}

AbstractController.prototype.getCurrentGroup = function () {
    if (this.controller != null) {
        return this.controller.prototype.getCurrentGroup();
    } else {
        return this.returnCommand;
    }
};

AbstractController.prototype.doOperation = function (operation) {
    if (this.controller != null) {
        let temp = this.controller.prototype.doOperation(operation);
        if (temp[0]) {
            return temp;
        }
    } else {
        for (let i = 0; i < this.possibleGroups.length; i++) {
            if (this.possibleGroups[i]["word"].split(" ").join("") == operation) {
                if (this.controller == null) {
                    this.controller = this.possibleGroups[i]["operation"];
                    return [true, this.possibleGroups[i]["word"]];
                }
            }
        }
        for (let i = 0; i < this.possibleCommands.length; i++) {
            if(this.possibleCommands[i]["word"].split(" ").join("") == operation) {
                this.possibleCommands[i]["operation"]();
                return [true, this.possibleCommands[i]["word"]];
            }
        }
    }
    if (this.returnCommand != null && this.controller != null) {
        if (operation == this.returnCommand.split(" ").join("")) {
            this.clearController();
            return [true, this.returnCommand];
        }
    }
    return [false, "???"];
};

AbstractController.prototype.getPossibilities = function () {
    let poss = [];
    if (this.controller == null) {
        //poss = poss.concat(this.possibleCommands);
        for(let i = 0; i < this.possibleCommands.length; i++) {
            poss.push(this.possibleCommands[i])
        }
        for(let i = 0; i < this.possibleGroups.length; i++) {
            let temp = this.possibleGroups[i];
            temp["pronunc"] = temp["operation"].prototype.pronunc;
            poss.push(temp);
        }
        return poss
    } else {
        poss = this.controller.prototype.getPossibilities();
        poss.push({"word":this.returnCommand, "pronunc":this.pronunc});
        return poss;
    }
};

AbstractController.prototype.getLexicon = function () {
    let poss = this.getPossibilities();
    let result = {"items":[]};
    for(let i = 0; i < poss.length; i++) {
        result["items"].push({
            "user": {
                "pron": poss[i]["pronunc"],
                "sym": poss[i]["word"].split(" ").join("")
            }
        });
    }
    return result;
};

AbstractController.prototype.clearController = function () {
    if (this.controller != null) {
        this.controller.prototype.clearController();
    }
    this.controller = null;
};

AbstractController.prototype.updateGUI = function () {
    throw new Error("Abstract method!");
};

module.exports = {AbstractController: AbstractController};