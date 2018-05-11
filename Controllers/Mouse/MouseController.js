/**
 * Created by vaclavlangr on 14.02.2018.
 */

const AbstractController = require('./../AbstractController').AbstractController;

function MouseController() {
    this.prototype = new AbstractController();
    this.prototype.returnCommand = "Myš";
    this.prototype.pronunc = "miš";

    this.simpleClick = function () {
        this.prototype.robot.mouseClick();
    };

    this.doubleClick = function () {
        this.prototype.robot.mouseClick("left", true);
    };

    this.rightClick = function () {
        this.prototype.robot.mouseClick("right");
    };

    this.moveMouseDown = function () {
        let unit = arguments[0];
        let mouse = this.prototype.robot.getMousePos();
        let screenSize = this.prototype.robot.getScreenSize();
        if ((mouse.y + unit) < screenSize.height) {
            this.prototype.robot.moveMouse(mouse.x, mouse.y + unit);
        } else {
            this.prototype.robot.moveMouse(mouse.x, screenSize.height);
        }
    };

    this.moveMouseLeft = function () {
        let unit = arguments[0];
        let mouse = this.prototype.robot.getMousePos();
        if ((mouse.x - unit) >= 0) {
            this.prototype.robot.moveMouse(mouse.x - unit, mouse.y);
        } else {
            this.prototype.robot.moveMouse(0, mouse.y);
        }
    };

    this.moveMouseRight = function () {
        let unit = arguments[0];
        let mouse = this.prototype.robot.getMousePos();
        let screenSize = this.prototype.robot.getScreenSize();
        if ((mouse.x + unit) < screenSize.width) {
            this.prototype.robot.moveMouse(mouse.x + unit, mouse.y);
        } else {
            this.prototype.robot.moveMouse(screenSize.width, mouse.y);
        }
    };

    this.moveMouseUp = function () {
        let unit = arguments[0];
        let mouse = this.prototype.robot.getMousePos();
        if (mouse.y - unit >= 0) {
            this.prototype.robot.moveMouse(mouse.x, mouse.y - unit);
        } else {
            this.prototype.robot.moveMouse(mouse.x, 0);
        }
    };

    this.prototype.possibleGroups = [];
    this.prototype.possibleCommands = [
        {word: "Klikni", operation: this.simpleClick.bind(this), pronunc: "klikňi"},
        {word: "Dvojklik", operation: this.doubleClick.bind(this), pronunc: "dvojklik"},
        {word: "Pravý klik", operation: this.rightClick.bind(this), pronunc: "pravíklik"},
        {word: "Doleva 50", operation: this.moveMouseLeft.bind(this, 50), pronunc: "dolevapadesát"},
        {word: "Doleva 100", operation: this.moveMouseLeft.bind(this, 100), pronunc: "dolevasto"},
        {word: "Doleva 500", operation: this.moveMouseLeft.bind(this, 500), pronunc: "dolevapjetset"},
        {word: "Doprava 50", operation: this.moveMouseRight.bind(this, 50), pronunc: "dopravapadesát"},
        {word: "Doprava 100", operation: this.moveMouseRight.bind(this, 100), pronunc: "dopravasto"},
        {word: "Doprava 500", operation: this.moveMouseRight.bind(this, 500), pronunc: "dopravapjetset"},
        {word: "Dolů 50", operation: this.moveMouseDown.bind(this, 50), pronunc: "dolúpadesát"},
        {word: "Dolů 100", operation: this.moveMouseDown.bind(this, 100), pronunc: "dolústo"},
        {word: "Dolů 500", operation: this.moveMouseDown.bind(this, 500), pronunc: "dolúpjetset"},
        {word: "Nahoru 50", operation: this.moveMouseUp.bind(this, 50), pronunc: "nahorupadesát"},
        {word: "Nahoru 100", operation: this.moveMouseUp.bind(this, 100), pronunc: "nahorusto"},
        {word: "Nahoru 500", operation: this.moveMouseUp.bind(this, 500), pronunc: "nahorupjetset"}
    ];
}


module.exports = {
    MouseController: MouseController
};
