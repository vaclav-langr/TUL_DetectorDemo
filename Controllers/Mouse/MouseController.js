/**
 * Created by vaclavlangr on 14.02.2018.
 */

const AbstractController = require('./../AbstractController').AbstractController;

function MouseController() {
    this.prototype = new AbstractController();

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

    this.prototype.returnCommand = "Myš";
    this.prototype.possibleGroups = {};
    this.prototype.possibleCommands = {
        "Klikni": this.simpleClick.bind(this),
        "Dvojklik": this.doubleClick.bind(this),
        "Pravý klik": this.rightClick.bind(this),
        "Doleva 50": this.moveMouseLeft.bind(this,50),
        "Doleva 100": this.moveMouseLeft.bind(this,100),
        "Doleva 500": this.moveMouseLeft.bind(this,500),
        "Doprava 50": this.moveMouseRight.bind(this,50),
        "Doprava 100": this.moveMouseRight.bind(this,100),
        "Doprava 500": this.moveMouseRight.bind(this,500),
        "Dolů 50": this.moveMouseDown.bind(this,50),
        "Dolů 100": this.moveMouseDown.bind(this,100),
        "Dolů 500": this.moveMouseDown.bind(this,500),
        "Nahoru 50": this.moveMouseUp.bind(this,50),
        "Nahoru 100": this.moveMouseUp.bind(this,100),
        "Nahoru 500": this.moveMouseUp.bind(this,500)
    };
}


module.exports = {
    MouseController: MouseController
};
