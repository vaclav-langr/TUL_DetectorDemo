/**
 * Created by vaclavlangr on 14.02.2018.
 */

const AbstractController = require('./AbstractController').AbstractController;
const MouseController = require('./Mouse/MouseController').MouseController;
const KeyboardController = require('./Keyboard/KeyboardControllerWindows').KeyboardController;
const WindowController = require('./Window/WindowControllerWindows').WindowController;

function MainController() {
    this.updateGUI([false, "???"])
}

MainController.prototype = new AbstractController();

MainController.prototype.returnCommand = "Základní skupina";
MainController.prototype.pronunc = "základňískupina";

MainController.prototype.possibleGroups = [
    {word:"Myš",operation: new MouseController()},
    {word:"Klávesnice",operation: new KeyboardController()},
    {word:"Okno",operation: new WindowController()}
];

MainController.prototype.doOperation = function (operation) {
    let result = AbstractController.prototype.doOperation.call(this, operation);
    this.updateGUI(result, operation);
    return result;
};

MainController.prototype.updateGUI = function (result) {
    let element = document.getElementById("commands");
    element.innerText = "";

    let commands = this.getPossibilities();
    for (let i = 0; i < commands.length; i++) {
        let text = document.createElement("h5");
        text.style = "line-height: 0px;text-align: center; margin:0;padding:0;";
        text.appendChild(document.createTextNode(commands[i]["word"]));
        element.appendChild(text);

        text.onclick = function (e) {
            this.doOperation(e.target.innerText.replace(" ", ""));
        };
        text.onclick = text.onclick.bind(this);

        let space = document.createElement("br");
        element.appendChild(space);
    }

    let commandElement = document.getElementById("lastCommand");
    commandElement.innerHTML = '';
    let lastCommand = document.createElement("div");
    lastCommand.innerText = result[1];
    if(result[0]) {
        lastCommand.className = "blink_me";
    }
    commandElement.appendChild(lastCommand);

    let groupElement = document.getElementById("group");
    groupElement.innerText = this.getCurrentGroup();
};

MainController.prototype.doOperationPromise = function (label) {
    return new Promise((reject, recall) => {
        let result = this.doOperation(label);
        if (result[0]) {
            reject("Succesful recognition of: " + result[1]);
        } else {
            recall("Unable to do command: " + label + "\nProbably it is an active group or command from different group.");
        }
        //console.log(this.getLexicon())
    });
};

module.exports = {
    MainController: MainController
};
