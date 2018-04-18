/**
 * Created by vaclavlangr on 14.02.2018.
 */

function MouseDown() {
}

MouseDown.moveMouse = function () {
    this.robotjs = require('robotjs');
    var mouse = this.robotjs.getMousePos();
    var screenSize = this.robotjs.getScreenSize();
    if ((mouse.y + this.unit) < screenSize.height) {
        this.robotjs.moveMouse(mouse.x, mouse.y + this.unit);
    } else {
        this.robotjs.moveMouse(mouse.x, screenSize.height);
    }
};

module.exports = {MouseDown: MouseDown};
