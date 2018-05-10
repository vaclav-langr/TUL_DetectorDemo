/**
 * Created by vaclavlangr on 09.05.2018.
 */
const AbstractController = require('./../AbstractController').AbstractController;

let modifiers = {
    shift: false,
    ctrl: false,
    alt: false
};

function KeyboardController() {
}

KeyboardController.pressKey = function() {
    let robot = require('robotjs');
    robot.keyTap(this.key);
};

KeyboardController.toggleKey = function () {
    if(!this.hasOwnProperty("val")) {
        modifiers[this.mod] = !modifiers[this.mod];
    } else {
        modifiers[this.mod] = this.val;
    }
};

KeyboardController.writeText = function () {
    let robot = require('robotjs');
    modifiers.shift ? robot.typeString(this.text.toUpperCase()) : robot.typeString(this.text);
};

KeyboardController.prototype = new AbstractController();

KeyboardController.prototype.returnCommand = "Klávesnice";

KeyboardController.prototype.possibleCommands = {
    "Adam": KeyboardController.pressKey.bind({key: "a"}),
    "Božena": KeyboardController.pressKey.bind({key: "b"}),
    "Cyril": KeyboardController.pressKey.bind({key: "c"}),
    "David": KeyboardController.pressKey.bind({key: "d"}),
    "Emil": KeyboardController.pressKey.bind({key: "e"}),
    "František": KeyboardController.pressKey.bind({key: "f"}),
    "Gustav": KeyboardController.pressKey.bind({key: "g"}),
    "Helena": KeyboardController.pressKey.bind({key: "h"}),
    "Ivan": KeyboardController.pressKey.bind({key: "i"}),
    "Josef": KeyboardController.pressKey.bind({key: "j"}),
    "Karel": KeyboardController.pressKey.bind({key: "k"}),
    "Ludvík": KeyboardController.pressKey.bind({key: "l"}),
    "Marie": KeyboardController.pressKey.bind({key: "m"}),
    "Norbert": KeyboardController.pressKey.bind({key: "n"}),
    "Oto": KeyboardController.pressKey.bind({key: "o"}),
    "Petr": KeyboardController.pressKey.bind({key: "p"}),
    "Quido": KeyboardController.pressKey.bind({key: "q"}),
    "Rudolf": KeyboardController.pressKey.bind({key: "r"}),
    "Svatopluk": KeyboardController.pressKey.bind({key: "s"}),
    "Tomáš": KeyboardController.pressKey.bind({key: "t"}),
    "Urban": KeyboardController.pressKey.bind({key: "u"}),
    "Václav": KeyboardController.pressKey.bind({key: "v"}),
    "Dvojité W": KeyboardController.pressKey.bind({key: "w"}),
    "Xaver": KeyboardController.pressKey.bind({key: "x"}),
    "Ypsilon": KeyboardController.pressKey.bind({key: "y"}),
    "Zuzana": KeyboardController.pressKey.bind({key: "z"}),
    "Mezera": KeyboardController.pressKey.bind({key: "space"}),
    "Escape": KeyboardController.pressKey.bind({key: "escape"}),
    "Zruš": KeyboardController.pressKey.bind({key: "escape"}),
    "Backspace": KeyboardController.pressKey.bind({key: "backspace"}),
    "Zpátky": KeyboardController.pressKey.bind({key: "backspace"}),
    "Tabulátor": KeyboardController.pressKey.bind({key: "tab"}),
    "Nahoru": KeyboardController.pressKey.bind({key: "up"}),
    "Dolů": KeyboardController.pressKey.bind({key: "down"}),
    "Doprava": KeyboardController.pressKey.bind({key: "right"}),
    "Doleva": KeyboardController.pressKey.bind({key: "left"}),
    "Vymaž": KeyboardController.pressKey.bind({key: "delete"}),
    "Delete": KeyboardController.pressKey.bind({key: "delete"}),
    "Vezmi": KeyboardController.pressKey.bind({key: "enter"}),
    "Enter": KeyboardController.pressKey.bind({key: "enter"}),
    "Nový řádek": KeyboardController.pressKey.bind({key: "enter"}),
    "Funkce 1": KeyboardController.pressKey.bind({key: "f1"}),
    "Funkce 2": KeyboardController.pressKey.bind({key: "f2"}),
    "Funkce 3": KeyboardController.pressKey.bind({key: "f3"}),
    "Funkce 4": KeyboardController.pressKey.bind({key: "f4"}),
    "Funkce 5": KeyboardController.pressKey.bind({key: "f5"}),
    "Funkce 6": KeyboardController.pressKey.bind({key: "f6"}),
    "Funkce 7": KeyboardController.pressKey.bind({key: "f7"}),
    "Funkce 8": KeyboardController.pressKey.bind({key: "f8"}),
    "Funkce 9": KeyboardController.pressKey.bind({key: "f9"}),
    "Funkce 10": KeyboardController.pressKey.bind({key: "f10"}),
    "Funkce 11": KeyboardController.pressKey.bind({key: "f11"}),
    "Funkce 12": KeyboardController.pressKey.bind({key: "f12"}),
    "Mínus": KeyboardController.pressKey.bind({key: "-"}),
    "Nula": KeyboardController.pressKey.bind({key: "0"}),
    "Jedna": KeyboardController.pressKey.bind({key: "1"}),
    "Jednotka": KeyboardController.pressKey.bind({key: "1"}),
    "Jednička": KeyboardController.pressKey.bind({key: "1"}),
    "Dva": KeyboardController.pressKey.bind({key: "2"}),
    "Dvojka": KeyboardController.pressKey.bind({key: "2"}),
    "Tři": KeyboardController.pressKey.bind({key: "3"}),
    "Trojka": KeyboardController.pressKey.bind({key: "3"}),
    "Čtyři": KeyboardController.pressKey.bind({key: "4"}),
    "Čtyřka": KeyboardController.pressKey.bind({key: "4"}),
    "Pět": KeyboardController.pressKey.bind({key: "5"}),
    "Pětka": KeyboardController.pressKey.bind({key: "5"}),
    "Šest": KeyboardController.pressKey.bind({key: "6"}),
    "Šestka": KeyboardController.pressKey.bind({key: "6"}),
    "Sedm": KeyboardController.pressKey.bind({key: "7"}),
    "Sedma": KeyboardController.pressKey.bind({key: "7"}),
    "Sedmička": KeyboardController.pressKey.bind({key: "7"}),
    "Osm": KeyboardController.pressKey.bind({key: "8"}),
    "Osma": KeyboardController.pressKey.bind({key: "8"}),
    "Osmička": KeyboardController.pressKey.bind({key: "8"}),
    "Devět": KeyboardController.pressKey.bind({key: "9"}),
    "Devítka": KeyboardController.pressKey.bind({key: "9"}),
    "Caps Lock": KeyboardController.toggleKey.bind({mod:"shift"}),
    "Lomítko": KeyboardController.writeText.bind({text: "/"}),
    "Lomeno": KeyboardController.writeText.bind({text: "/"}),
    "Hvězdička": KeyboardController.writeText.bind({text: "*"}),
    "Krát": KeyboardController.writeText.bind({text: "*"}),
    "Plus": KeyboardController.pressKey.bind({key: "+"}),
    "Mínus": KeyboardController.pressKey.bind({key: "-"}),
};

KeyboardController.prototype.possibleGroups = {};

module.exports = {
    KeyboardController: KeyboardController
};