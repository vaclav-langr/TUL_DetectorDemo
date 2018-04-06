/**
 * Created by vaclavlangr on 14.02.2018.
 */

function MouseUp() {}

MouseUp.moveMouse = function () {
    this.robotjs = require('robotjs');
    var mouse = this.robotjs.getMousePos();
    if(mouse.y - this.unit >= 0) {
        this.robotjs.moveMouseSmooth(mouse.x, mouse.y - this.unit);
    } else {
        this.robotjs.moveMouseSmooth(mouse.x, 0);
    }
};

module.exports = {MouseUp:MouseUp};
