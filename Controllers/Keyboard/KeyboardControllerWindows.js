/**
 * Created by vaclavlangr on 09.05.2018.
 */
const AbstractController = require('./../AbstractController').AbstractController;


function KeyboardController() {
    this.prototype = new AbstractController();
    this.prototype.returnCommand = "Klávesnice";
    this.prototype.possibleGroups = {};
    
    this.modifiers = {
        shift: false,
        control: false,
        alt: false,
        command: false
    };

    this.getModifiers = function() {
        let result = [];
        for(let prop in this.modifiers) {
            if(this.modifiers[prop]) {
                result.push(prop)
            }
        }
        return result;
    };
    
    this.pressKey = function() {
        let key = arguments[0];
        let mods = this.getModifiers();
        this.prototype.robot.keyTap(key, mods);
    };
    
    this.toggleKey = function () {
        let mod = arguments[0];
        if(arguments.length > 1) {
            this.modifiers[mod] = arguments[1];
        } else {
            this.modifiers[mod] = !this.modifiers[mod];
        }
    };
    
    this.writeText = function () {
        let text = arguments[0];
        this.modifiers.shift ? this.prototype.robot.typeString(text.toUpperCase()) : this.prototype.robot.typeString(text);
    };
    
    this.prototype.possibleCommands = {
        "Adam": this.pressKey.bind(this, "a"),
        "Božena": this.pressKey.bind(this, "b"),
        "Cyril": this.pressKey.bind(this, "c"),
        "David": this.pressKey.bind(this, "d"),
        "Emil": this.pressKey.bind(this, "e"),
        "František": this.pressKey.bind(this, "f"),
        "Gustav": this.pressKey.bind(this, "g"),
        "Helena": this.pressKey.bind(this, "h"),
        "Ivan": this.pressKey.bind(this, "i"),
        "Josef": this.pressKey.bind(this, "j"),
        "Karel": this.pressKey.bind(this, "k"),
        "Ludvík": this.pressKey.bind(this, "l"),
        "Marie": this.pressKey.bind(this, "m"),
        "Norbert": this.pressKey.bind(this, "n"),
        "Oto": this.pressKey.bind(this, "o"),
        "Petr": this.pressKey.bind(this, "p"),
        "Quido": this.pressKey.bind(this, "q"),
        "Rudolf": this.pressKey.bind(this, "r"),
        "Svatopluk": this.pressKey.bind(this, "s"),
        "Tomáš": this.pressKey.bind(this, "t"),
        "Urban": this.pressKey.bind(this, "u"),
        "Václav": this.pressKey.bind(this, "v"),
        "Dvojité W": this.pressKey.bind(this, "w"),
        "Xaver": this.pressKey.bind(this, "x"),
        "Ypsilon": this.pressKey.bind(this, "y"),
        "Zuzana": this.pressKey.bind(this, "z"),
        "Mezera": this.pressKey.bind(this, "space"),
        "Escape": this.pressKey.bind(this, "escape"),
        "Zruš": this.pressKey.bind(this, "escape"),
        "Backspace": this.pressKey.bind(this, "backspace"),
        "Zpátky": this.pressKey.bind(this, "backspace"),
        "Tabulátor": this.pressKey.bind(this, "tab"),
        "Nahoru": this.pressKey.bind(this, "up"),
        "Dolů": this.pressKey.bind(this, "down"),
        "Doprava": this.pressKey.bind(this, "right"),
        "Doleva": this.pressKey.bind(this, "left"),
        "Vymaž": this.pressKey.bind(this, "delete"),
        "Delete": this.pressKey.bind(this, "delete"),
        "Vezmi": this.pressKey.bind(this, "enter"),
        "Enter": this.pressKey.bind(this, "enter"),
        "Nový řádek": this.pressKey.bind(this, "enter"),
        "Funkce 1": this.pressKey.bind(this, "f1"),
        "Funkce 2": this.pressKey.bind(this, "f2"),
        "Funkce 3": this.pressKey.bind(this, "f3"),
        "Funkce 4": this.pressKey.bind(this, "f4"),
        "Funkce 5": this.pressKey.bind(this, "f5"),
        "Funkce 6": this.pressKey.bind(this, "f6"),
        "Funkce 7": this.pressKey.bind(this, "f7"),
        "Funkce 8": this.pressKey.bind(this, "f8"),
        "Funkce 9": this.pressKey.bind(this, "f9"),
        "Funkce 10": this.pressKey.bind(this, "f10"),
        "Funkce 11": this.pressKey.bind(this, "f11"),
        "Funkce 12": this.pressKey.bind(this, "f12"),
        "Mínus": this.pressKey.bind(this, "-"),
        "Nula": this.pressKey.bind(this, "0"),
        "Jedna": this.pressKey.bind(this, "1"),
        "Jednotka": this.pressKey.bind(this, "1"),
        "Jednička": this.pressKey.bind(this, "1"),
        "Dva": this.pressKey.bind(this, "2"),
        "Dvojka": this.pressKey.bind(this, "2"),
        "Tři": this.pressKey.bind(this, "3"),
        "Trojka": this.pressKey.bind(this, "3"),
        "Čtyři": this.pressKey.bind(this, "4"),
        "Čtyřka": this.pressKey.bind(this, "4"),
        "Pět": this.pressKey.bind(this, "5"),
        "Pětka": this.pressKey.bind(this, "5"),
        "Šest": this.pressKey.bind(this, "6"),
        "Šestka": this.pressKey.bind(this, "6"),
        "Sedm": this.pressKey.bind(this, "7"),
        "Sedma": this.pressKey.bind(this, "7"),
        "Sedmička": this.pressKey.bind(this, "7"),
        "Osm": this.pressKey.bind(this, "8"),
        "Osma": this.pressKey.bind(this, "8"),
        "Osmička": this.pressKey.bind(this, "8"),
        "Devět": this.pressKey.bind(this, "9"),
        "Devítka": this.pressKey.bind(this, "9"),
        "Caps Lock": this.toggleKey.bind(this, "shift"),
        "Lomítko": this.writeText.bind(this, "/"),
        "Lomeno": this.writeText.bind(this, "/"),
        "Hvězdička": this.writeText.bind(this, "*"),
        "Krát": this.writeText.bind(this, "*"),
        "Plus": this.pressKey.bind(this, "+"),
        "Mínus": this.pressKey.bind(this, "-"),
    };
}

module.exports = {
    KeyboardController: KeyboardController
};