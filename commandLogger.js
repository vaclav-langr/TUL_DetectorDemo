/**
 * Created by vaclavlangr on 12.03.2018.
 */

const fs = require("fs");

var _filename;

const setFilename = function (filename) {
    _filename = './log/' + filename + ".txt";
    fs.writeFileSync(_filename, '')
};

const saveItem = function (item) {
    fs.appendFileSync(_filename, item + "\n")
};

module.exports = {
    setFilename: setFilename,
    saveItem: saveItem
};

