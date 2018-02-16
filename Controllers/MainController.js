/**
 * Created by vaclavlangr on 14.02.2018.
 */

var AbstractController = require('./AbstractController').AbstractController;
var MouseController = require('./Mouse/MouseController').MouseController;

function MainController() {
}

MainController.prototype = new AbstractController();

MainController.prototype.returnCommand = "MainGroup";

MainController.prototype.possibleGroups = {
    "Mouse": new MouseController()
};

MainController.prototype.doOperation = function (operation) {
    var result = AbstractController.prototype.doOperation.call(this, operation);
    this.updateGUI(result, operation);
}

MainController.prototype.updateGUI = function (result, operation) {
    var element = document.getElementById("commands");
    element.innerText = "";

    var commands = this.getPossibilities();
    for(var i = 0; i < commands.length; i++) {
        var btn = document.createElement("button");
        btn.appendChild(document.createTextNode(commands[i]));
        element.appendChild(btn)
        btn.onclick = function (e) {
            this.doOperation(e.target.innerText);
        };
        btn.onclick = btn.onclick.bind(this);

        element.appendChild(document.createElement("br"))
    }

    var commandElement = document.getElementById("lastCommand");
    commandElement.innerText = "";
    if(result) {
        commandElement.appendChild(document.createTextNode(operation));
    } else {
        commandElement.appendChild(document.createTextNode("???"));
    }
};

module.exports = {MainController:MainController};
