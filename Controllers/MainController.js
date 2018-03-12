/**
 * Created by vaclavlangr on 14.02.2018.
 */

var AbstractController = require('./AbstractController').AbstractController;
var MouseController = require('./Mouse/MouseController').MouseController;

function MainController() {
}

MainController.prototype = new AbstractController();

MainController.prototype.returnCommand = "Základní skupina";

MainController.prototype.possibleGroups = {
    "Myš": new MouseController()
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
        var text = document.createElement("h4");
        text.style = "line-height: 5px;text-align: center;";
        text.appendChild(document.createTextNode(commands[i]));
        element.appendChild(text)

        //text.onclick = function (e) {
        //    this.doOperation(e.target.innerText.replace(" ", ""));
        //};
        //text.onclick = text.onclick.bind(this);

        element.appendChild(document.createElement("br"))
    }

    var commandElement = document.getElementById("lastCommand");
    commandElement.innerText = "";
    try {
        commandElement.appendChild(document.createTextNode(result[1]));
    } catch (e) {
        commandElement.appendChild(document.createTextNode("???"));
    }
};

module.exports = {MainController:MainController};
