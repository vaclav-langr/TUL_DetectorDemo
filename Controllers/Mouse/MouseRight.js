/**
 * Created by vaclavlangr on 14.02.2018.
 */

function MouseRight() {}

MouseRight.moveMouse = function () {
    this.robotjs = require('robotjs');
    var mouse = this.robotjs.getMousePos();
    var screenSize = this.robotjs.getScreenSize();
    if((mouse.x + this.unit) < screenSize.width) {
        this.robotjs.moveMouseSmooth(mouse.x + this.unit, mouse.y);
    } else {
        this.robotjs.moveMouseSmooth(screenSize.width, mouse.y);
    }
};

module.exports = {MouseRight:MouseRight};
