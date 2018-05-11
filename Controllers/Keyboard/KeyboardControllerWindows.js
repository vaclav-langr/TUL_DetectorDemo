/**
 * Created by vaclavlangr on 09.05.2018.
 */
const AbstractController = require('./../AbstractController').AbstractController;


function KeyboardController() {
    this.prototype = new AbstractController();
    this.prototype.returnCommand = "Klávesnice";
    this.prototype.pronunc = "klávesňice";
    this.prototype.possibleGroups = [];

    this.modifiers = {
        shift: false,
        control: false,
        alt: false,
        command: false
    };

    this.getModifiers = function () {
        let result = [];
        for (let prop in this.modifiers) {
            if (this.modifiers[prop]) {
                result.push(prop)
            }
        }
        return result;
    };

    this.pressKey = function () {
        let key = arguments[0];
        let mods = this.getModifiers();
        this.prototype.robot.keyTap(key, mods);
    };

    this.toggleKey = function () {
        let mod = arguments[0];
        if (arguments.length > 1) {
            this.modifiers[mod] = arguments[1];
        } else {
            this.modifiers[mod] = !this.modifiers[mod];
        }
    };

    this.pressShortcut = function () {
        for(let i = 0; i < arguments.length; i++) {
            this.prototype.robot.keyToggle(arguments[i], "down");
        }
        for(let i = arguments.length - 1; i >= 0; i--) {
            this.prototype.robot.keyToggle(arguments[i], "up");
        }
    };

    this.writeText = function () {
        let text = arguments[0];
        this.modifiers.shift ? this.prototype.robot.typeString(text.toUpperCase()) : this.prototype.robot.typeString(text);
    };

    this.prototype.possibleCommands = [
        {word: "Adam", operation: this.pressKey.bind(this, "a"), pronunc: "adam"},
        {word: "Božena", operation: this.pressKey.bind(this, "b"), pronunc: "božena"},
        {word: "Cyril", operation: this.pressKey.bind(this, "c"), pronunc: "ciril"},
        {word: "David", operation: this.pressKey.bind(this, "d"), pronunc: "davit"},
        {word: "Emil", operation: this.pressKey.bind(this, "e"), pronunc: "emil"},
        {word: "František", operation: this.pressKey.bind(this, "f"), pronunc: "fraňťišek"},
        {word: "Gustav", operation: this.pressKey.bind(this, "g"), pronunc: "gustaf"},
        {word: "Helena", operation: this.pressKey.bind(this, "h"), pronunc: "helena"},
        {word: "Ivan", operation: this.pressKey.bind(this, "i"), pronunc: "ivan"},
        {word: "Josef", operation: this.pressKey.bind(this, "j"), pronunc: "jozef"},
        {word: "Karel", operation: this.pressKey.bind(this, "k"), pronunc: "karel"},
        {word: "Ludvík", operation: this.pressKey.bind(this, "l"), pronunc: "ludvík"},
        {word: "Marie", operation: this.pressKey.bind(this, "m"), pronunc: "marije"},
        {word: "Norbert", operation: this.pressKey.bind(this, "n"), pronunc: "norbert"},
        {word: "Oto", operation: this.pressKey.bind(this, "o"), pronunc: "oto"},
        {word: "Petr", operation: this.pressKey.bind(this, "p"), pronunc: "petr"},
        {word: "Quido", operation: this.pressKey.bind(this, "q"), pronunc: "kvido"},
        {word: "Rudolf", operation: this.pressKey.bind(this, "r"), pronunc: "rudolf"},
        {word: "Svatopluk", operation: this.pressKey.bind(this, "s"), pronunc: "svatopluk"},
        {word: "Tomáš", operation: this.pressKey.bind(this, "t"), pronunc: "tomáš"},
        {word: "Urban", operation: this.pressKey.bind(this, "u"), pronunc: "urban"},
        {word: "Václav", operation: this.pressKey.bind(this, "v"), pronunc: "václaf"},
        {word: "Xaver", operation: this.pressKey.bind(this, "x"), pronunc: "ksaver"},
        {word: "Ypsilon", operation: this.pressKey.bind(this, "y"), pronunc: "ipsilon"},
        {word: "Zuzana", operation: this.pressKey.bind(this, "z"), pronunc: "zuzana"},
        {word: "Vezmi", operation: this.pressKey.bind(this, "enter"), pronunc: "vezmi"},
        {word: "a", operation: this.pressKey.bind(this, "a"), pronunc: "a"},
        {word: "a", operation: this.pressKey.bind(this, "a"), pronunc: "á"},
        {word: "b", operation: this.pressKey.bind(this, "b"), pronunc: "bE"},
        {word: "bé", operation: this.pressKey.bind(this, "b"), pronunc: "bé"},
        {word: "c", operation: this.pressKey.bind(this, "c"), pronunc: "cE"},
        {word: "cé", operation: this.pressKey.bind(this, "c"), pronunc: "cé"},
        {word: "d", operation: this.pressKey.bind(this, "d"), pronunc: "dE"},
        {word: "dé", operation: this.pressKey.bind(this, "d"), pronunc: "dé"},
        {word: "e", operation: this.pressKey.bind(this, "e"), pronunc: "e"},
        {word: "e", operation: this.pressKey.bind(this, "e"), pronunc: "é"},
        {word: "f", operation: this.pressKey.bind(this, "f"), pronunc: "f"},
        {word: "ef", operation: this.pressKey.bind(this, "f"), pronunc: "ef"},
        {word: "g", operation: this.pressKey.bind(this, "g"), pronunc: "gE"},
        {word: "gé", operation: this.pressKey.bind(this, "g"), pronunc: "gé"},
        {word: "h", operation: this.pressKey.bind(this, "h"), pronunc: "hE"},
        {word: "há", operation: this.pressKey.bind(this, "h"), pronunc: "há"},
        {word: "i", operation: this.pressKey.bind(this, "i"), pronunc: "i"},
        {word: "i", operation: this.pressKey.bind(this, "i"), pronunc: "í"},
        {word: "j", operation: this.pressKey.bind(this, "j"), pronunc: "jE"},
        {word: "jé", operation: this.pressKey.bind(this, "j"), pronunc: "jé"},
        {word: "k", operation: this.pressKey.bind(this, "k"), pronunc: "kE"},
        {word: "ká", operation: this.pressKey.bind(this, "k"), pronunc: "ká"},
        {word: "l", operation: this.pressKey.bind(this, "l"), pronunc: "lE"},
        {word: "el", operation: this.pressKey.bind(this, "l"), pronunc: "el"},
        {word: "m", operation: this.pressKey.bind(this, "m"), pronunc: "mE"},
        {word: "em", operation: this.pressKey.bind(this, "m"), pronunc: "em"},
        {word: "n", operation: this.pressKey.bind(this, "n"), pronunc: "nE"},
        {word: "en", operation: this.pressKey.bind(this, "n"), pronunc: "en"},
        {word: "o", operation: this.pressKey.bind(this, "o"), pronunc: "o"},
        {word: "o", operation: this.pressKey.bind(this, "o"), pronunc: "ó"},
        {word: "p", operation: this.pressKey.bind(this, "p"), pronunc: "pE"},
        {word: "pé", operation: this.pressKey.bind(this, "p"), pronunc: "pé"},
        {word: "q", operation: this.pressKey.bind(this, "q"), pronunc: "kvE"},
        {word: "kvé", operation: this.pressKey.bind(this, "q"), pronunc: "kvé"},
        {word: "r", operation: this.pressKey.bind(this, "r"), pronunc: "rE"},
        {word: "er", operation: this.pressKey.bind(this, "r"), pronunc: "er"},
        {word: "s", operation: this.pressKey.bind(this, "s"), pronunc: "sE"},
        {word: "es", operation: this.pressKey.bind(this, "s"), pronunc: "es"},
        {word: "t", operation: this.pressKey.bind(this, "t"), pronunc: "tE"},
        {word: "té", operation: this.pressKey.bind(this, "t"), pronunc: "té"},
        {word: "u", operation: this.pressKey.bind(this, "u"), pronunc: "u"},
        {word: "u", operation: this.pressKey.bind(this, "u"), pronunc: "ú"},
        {word: "v", operation: this.pressKey.bind(this, "v"), pronunc: "vE"},
        {word: "vé", operation: this.pressKey.bind(this, "v"), pronunc: "vé"},
        {word: "w", operation: this.pressKey.bind(this, "w"), pronunc: "dvojitévé"},
        {word: "iks", operation: this.pressKey.bind(this, "x"), pronunc: "iks"},
        {word: "z", operation: this.pressKey.bind(this, "z"), pronunc: "zE"},
        {word: "zet", operation: this.pressKey.bind(this, "z"), pronunc: "zet"},
        {word: "mezera", operation: this.pressKey.bind(this, "space"), pronunc: "mezera"},
        {word: "Escape", operation: this.pressKey.bind(this, "escape"), pronunc: "eskejp"},
        {word: "Zruš", operation: this.pressKey.bind(this, "escape"), pronunc: "zruš"},
        {word: "Backspace", operation: this.pressKey.bind(this, "backspace"), pronunc: "bekspejs"},
        {word: "Zpátky", operation: this.pressKey.bind(this, "backspace"), pronunc: "spátki"},
        {word: "Tabulátor", operation: this.pressKey.bind(this, "tab"), pronunc: "tabulátor"},
        {word: "Zpětný tabulátor", operation: this.pressShortcut.bind(this, "shift", "tab"), pronunc: "spjetnítabulátor"},
        {word: "Nahoru", operation: this.pressKey.bind(this, "up"), pronunc: "nahoru"},
        {word: "Dolů", operation: this.pressKey.bind(this, "down"), pronunc: "dolú"},
        {word: "Doprava", operation: this.pressKey.bind(this, "right"), pronunc: "doprava"},
        {word: "Doleva", operation: this.pressKey.bind(this, "left"), pronunc: "doleva"},
        {word: "Mínus", operation: this.pressKey.bind(this, "-"), pronunc: "mínus"},
        {word: "Nula", operation: this.pressKey.bind(this, "0"), pronunc: "nula"},
        {word: "Jedna", operation: this.pressKey.bind(this, "1"), pronunc: "jedna"},
        {word: "Jednotka", operation: this.pressKey.bind(this, "1"), pronunc: "jednotka"},
        {word: "Jednička", operation: this.pressKey.bind(this, "1"), pronunc: "jeďňička"},
        {word: "Dva", operation: this.pressKey.bind(this, "2"), pronunc: "dva"},
        {word: "Dvojka", operation: this.pressKey.bind(this, "2"), pronunc: "dvojka"},
        {word: "Tři", operation: this.pressKey.bind(this, "3"), pronunc: "tŘi"},
        {word: "Trojka", operation: this.pressKey.bind(this, "3"), pronunc: "trojka"},
        {word: "Čtyři", operation: this.pressKey.bind(this, "4"), pronunc: "čtiři"},
        {word: "Čtyřka", operation: this.pressKey.bind(this, "4"), pronunc: "čtiŘka"},
        {word: "Pět", operation: this.pressKey.bind(this, "5"), pronunc: "pjet"},
        {word: "Pětka", operation: this.pressKey.bind(this, "5"), pronunc: "pjetka"},
        {word: "Šest", operation: this.pressKey.bind(this, "6"), pronunc: "šest"},
        {word: "Šestka", operation: this.pressKey.bind(this, "6"), pronunc: "šestka"},
        {word: "Sedm", operation: this.pressKey.bind(this, "7"), pronunc: "sedum"},
        {word: "Sedma", operation: this.pressKey.bind(this, "7"), pronunc: "sedma"},
        {word: "Sedmička", operation: this.pressKey.bind(this, "7"), pronunc: "sedmička"},
        {word: "Osm", operation: this.pressKey.bind(this, "8"), pronunc: "osum"},
        {word: "Osma", operation: this.pressKey.bind(this, "8"), pronunc: "osma"},
        {word: "Osmička", operation: this.pressKey.bind(this, "8"), pronunc: "osmička"},
        {word: "Devět", operation: this.pressKey.bind(this, "9"), pronunc: "devjet"},
        {word: "Devítka", operation: this.pressKey.bind(this, "9"), pronunc: "devítka"},
        //{word: "Caps Lock", operation: this.toggleKey.bind(this, "caps"), pronunc: "kapslok"}, //robotjs neobsahuje klavesu caps lock
        {word: "Funkce 1", operation: this.pressKey.bind(this, "f1"), pronunc: "fuNkcejedna"},
        {word: "Funkce 2", operation: this.pressKey.bind(this, "f2"), pronunc: "fuNkcedva"},
        {word: "Funkce 3", operation: this.pressKey.bind(this, "f3"), pronunc: "fuNkcetŘi"},
        {word: "Funkce 4", operation: this.pressKey.bind(this, "f4"), pronunc: "fuNkcečtiři"},
        {word: "Funkce 5", operation: this.pressKey.bind(this, "f5"), pronunc: "fuNkcepjet"},
        {word: "Funkce 6", operation: this.pressKey.bind(this, "f6"), pronunc: "fuNkcešest"},
        {word: "Funkce 7", operation: this.pressKey.bind(this, "f7"), pronunc: "fuNkcesedum"},
        {word: "Funkce 8", operation: this.pressKey.bind(this, "f8"), pronunc: "fuNkceosum"},
        {word: "Funkce 9", operation: this.pressKey.bind(this, "f9"), pronunc: "fuNkcedevjet"},
        {word: "Funkce 10", operation: this.pressKey.bind(this, "f10"), pronunc: "fuNkcedeset"},
        {word: "Funkce 11", operation: this.pressKey.bind(this, "f11"), pronunc: "fuNkcejedenáct"},
        {word: "Funkce 12", operation: this.pressKey.bind(this, "f12"), pronunc: "fuNkcedvanáct"},
        {word: "Lomítko", operation: this.pressKey.bind(this, "/"), pronunc: "lomítko"},
        {word: "Lomeno", operation: this.pressKey.bind(this, "/"), pronunc: "lomeno"},
        {word: "Hvězdička", operation: this.pressKey.bind(this, "*"), pronunc: "hvjezďička"},
        {word: "Krát", operation: this.pressKey.bind(this, "*"), pronunc: "krát"},
        {word: "Plus", operation: this.pressKey.bind(this, "+"), pronunc: "plus"},
        {word: "Mínus", operation: this.pressKey.bind(this, "-"), pronunc: "mínus"},
        {word: "Pomlčka", operation: this.writeText.bind(this, "–"), pronunc: "pomlčka"},
        {word: "Tečka", operation: this.writeText.bind(this, "."), pronunc: "tečka"},
        {word: "Čárka", operation: this.writeText.bind(this, ","), pronunc: "čárka"},
        {word: "Dvojtečka", operation: this.writeText.bind(this, ":"), pronunc: "dvojtečka"},
        {word: "Středník", operation: this.writeText.bind(this, ";"), pronunc: "stŘeďňík"},
        {word: "Vykřičník", operation: this.writeText.bind(this, "!"), pronunc: "vikŘičňík"},
        {word: "Otazník", operation: this.writeText.bind(this, "?"), pronunc: "otazňík"},
        {word: "Podtržítko", operation: this.writeText.bind(this, "_"), pronunc: "potržítko"},
        {word: "Uvozovky", operation: this.writeText.bind(this, "\""), pronunc: "uvozofki"},
        {word: "Zavináč", operation: this.writeText.bind(this, "@"), pronunc: "zavináč"},
        {word: "Procento", operation: this.writeText.bind(this, "%"), pronunc: "procento"},
        {word: "Levá závorka", operation: this.writeText.bind(this, "("), pronunc: "levázávorka"},
        {word: "Pravá závorka", operation: this.writeText.bind(this, ")"), pronunc: "pravázávorka"},
        {word: "Rovná se", operation: this.writeText.bind(this, "="), pronunc: "rovnáse"},
        {word: "Vymaž", operation: this.pressKey.bind(this, "delete"), pronunc: "vimaš"},
        {word: "Delete", operation: this.pressKey.bind(this, "delete"), pronunc: "dilít"},
        {word: "Insert", operation: this.pressKey.bind(this, "insert"), pronunc: "inzert"},
        {word: "Na začátek", operation: this.pressKey.bind(this, "home"), pronunc: "nazačátek"},
        {word: "Na konec", operation: this.pressKey.bind(this, "end"), pronunc: "nakonec"},
        {word: "Stránka dolů", operation: this.pressKey.bind(this, "pagedown"), pronunc: "stráNkadolú"},
        {word: "Stránka nahoru", operation: this.pressKey.bind(this, "pageup"), pronunc: "stráNkanahoru"},
        {word: "Nový řádek", operation: this.pressKey.bind(this, "enter"), pronunc: "novířádek"},
        {word: "Přepni klávesnici", operation: this.pressShortcut.bind(this, "alt", "shift"), pronunc: "pŘepňiklávesňici"},
        {word: "Podrž Alt", operation: this.toggleKey.bind(this, "alt", true), pronunc: "podršalt"},
        {word: "Uvolni Alt", operation: this.toggleKey.bind(this, "alt", false), pronunc: "uvolňialt"},
        {word: "Podrž shift", operation: this.toggleKey.bind(this, "shift", true), pronunc: "podršift"},
        {word: "Uvolni shift", operation: this.toggleKey.bind(this, "shift", false), pronunc: "uvolňišift"},
        {word: "Podrž Control", operation: this.toggleKey.bind(this, "control", true), pronunc: "podržkontrol"},
        {word: "Uvolni Control", operation: this.toggleKey.bind(this, "control", false), pronunc: "uvolňikontrol"},
        {word: "Enter", operation: this.pressKey.bind(this, "enter"), pronunc: "entr"},
        {word: "Print Screen", operation: this.pressKey.bind(this, "printscreen"), pronunc: "princkrín"},
        //{word: "Scroll Lock", operation: "", pronunc: "skrollok"}, //robotjs neobsahuje klavesu scroll lock
        //{word: "Pause", operation: "", pronunc: "pauze"}, //robotjs neobsahuje klavesu pause
        {word: "Page Up", operation: this.pressKey.bind(this, "pageup"), pronunc: "pejčap"},
        {word: "Page Down", operation: this.pressKey.bind(this, "pagedown"), pronunc: "pejČdaun"},
        {word: "Home", operation: this.pressKey.bind(this, "home"), pronunc: "houm"},
        {word: "End", operation: this.pressKey.bind(this, "end"), pronunc: "ent"}
    ]
}

module.exports = {
    KeyboardController: KeyboardController
};