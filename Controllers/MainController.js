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
    return result;
};

MainController.prototype.updateGUI = function (result) {
    var element = document.getElementById("commands");
    element.innerText = "";

    var commands = this.getPossibilities();
    for (var i = 0; i < commands.length; i++) {
        var text = document.createElement("h5");
        text.style = "line-height: 0px;text-align: center; margin:0;padding:0;";
        text.appendChild(document.createTextNode(commands[i]));
        element.appendChild(text);

        //text.onclick = function (e) {
        //    this.doOperation(e.target.innerText.replace(" ", ""));
        //};
        //text.onclick = text.onclick.bind(this);

        var space = document.createElement("br");
        element.appendChild(space);
    }

    var commandElement = document.getElementById("lastCommand");
    commandElement.innerText = result[1];

    var groupElement = document.getElementById("group");
    groupElement.innerText = this.getCurrentGroup();
};

MainController.prototype.doOperationPromise = function (label) {
    return new Promise((reject, recall) => {
        var result = this.doOperation(label);
        if (result[0]) {
            reject("Succesful recognition of: " + result[1]);
        } else {
            recall("Unable to do command: " + result[1]);
        }
    });
};

module.exports = {
    MainController: MainController
};
