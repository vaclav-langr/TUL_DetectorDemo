const fs = require('fs');
const config = require('./config').config;

var mean, std;

function loadFiles() {
    var meanCharArray = fs.readFileSync(config.transformator.mean.path.get);
    var meanString = String.fromCharCode.apply(null, meanCharArray).split("\n");
    meanString.splice(meanString.indexOf(""), 1);
    mean = meanString.map(function (item) {
        return parseFloat(item);
    });

    var stdCharArray = fs.readFileSync(config.transformator.std.path.get);
    var stdString = String.fromCharCode.apply(null, stdCharArray).split("\n");
    stdString.splice(stdString.indexOf(""), 1);
    std = stdString.map(function (item) {
        return parseFloat(item);
    });
}

function subFunction(minuend, subtrahend) {
    if (minuend.length != subtrahend.length) {
        throw new RangeError("Lengths must match");
    }
    var result = new Array(minuend.length);
    for (var i = 0; i < minuend.length; i++) {
        result[i] = minuend[i] - subtrahend[i];
    }
    return result;
}

function divFunction(dividend, divisor) {
    if (dividend.length != divisor.length) {
        throw new RangeError("Lengths must match");
    }
    var result = new Array(dividend.length);
    for (var i = 0; i < dividend.length; i++) {
        result[i] = dividend[i] / divisor[i];
    }
    return result;
}

function getOperation(type) {
    switch (type) {
        case 'sub':
            return subFunction;
        case 'div':
            return divFunction;
    }
}

const transform = function (input) {
    if (mean == null || std == null) {
        loadFiles();
    }
    var result = new Array(input.length);
    for (var i = 0; i < input.length; i++) {
        result[i] = input[i];
    }

    var values = [
        mean,
        std
    ];
    var operationType = [
        config.transformator.mean.operation,
        config.transformator.std.operation
    ];
    var operation;
    for (var i = 0; i < operationType.length; i++) {
        operation = getOperation(operationType[i]);
        result = operation(result, values[i]);
    }
    return result;
};

module.exports = {
    transform: transform
};