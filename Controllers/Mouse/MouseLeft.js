/**
 * Created by vaclavlangr on 14.02.2018.
 */

function MouseLeft() {
}

MouseLeft.moveMouse = function () {
    this.robotjs = require('robotjs');
    var mouse = this.robotjs.getMousePos();
    if ((mouse.x - this.unit) >= 0) {
        this.robotjs.moveMouse(mouse.x - this.unit, mouse.y);
    } else {
        this.robotjs.moveMouse(0, mouse.y);
    }
};

module.exports = {MouseLeft: MouseLeft};
