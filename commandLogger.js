/**
 * Created by vaclavlangr on 12.03.2018.
 */

const fs = require("fs");

let _filename;

const setFilename = function (filename) {
    _filename = './log/' + filename + ".txt";
    fs.writeFileSync(_filename, '')
};

const saveItem = function (item) {
    fs.appendFileSync(_filename, item + "\r\n")
};

module.exports = {
    setFilename: setFilename,
    saveItem: saveItem
};

