const config = require('./config').config;
const network = require('./loader').loadWeights();

const computeNetworkOutput = function (input) {
    let output = input.slice();
    let activation;
    for (let i = 0; i < network['numlayers']; i++) {
        output = computeOutput(output, i);
        activation = getActivation(config.neurotizer.activations.get[i]);
        output = activation(output);
    }
    let outputIndex = output.indexOf(Math.max(...output));
    return [outputIndex, output[outputIndex]];
};

function computeOutput(input, layer) {
    let result = new Array(network['noNeurons'][layer + 1]).fill(0);
    for (let i = 0; i < network['noNeurons'][layer + 1]; i++) {
        for (let j = 0; j < network['noNeurons'][layer]; j++) {
            result[i] += (input[j] * network['weight'][layer][i][j]);
        }
    }
    for (let i = 0; i < result.length; i++) {
        result[i] += network['bias'][layer][i];
    }
    return result;
}

function HardTanh(input) {
    let result = new Array(input.length);
    for (let i = 0; i < result.length; i++) {
        result[i] = input[i];
        if (result[i] < -1) {
            result[i] = -1;
        } else if (result[i] > 1) {
            result[i] = 1;
        }
    }
    return result;
}

function Softmax(input) {
    let result = new Array(input.length);
    let shift = Number.NEGATIVE_INFINITY;
    for (let i = 0; i < input.length; i++) {
        if (shift < input[i]) {
            shift = input[i];
        }
    }
    let denom = 0;
    for (let i = 0; i < result.length; i++) {
        result[i] = Math.exp(input[i] - shift);
        denom += result[i];
    }
    for (let i = 0; i < result.length; i++) {
        result[i] *= (1 / denom);
    }
    return result;
}

function Tanh(input) {
    let result = new Array(input.length);
    let positive, negative;
    for (let i = 0; i < input.length; i++) {
        positive = Math.exp(input[i]);
        negative = Math.exp(-input[i]);
        result[i] = (positive - negative) / (positive + negative);
    }
    return result;
}

function getActivation(type) {
    switch (type.toLowerCase()) {
        case 'hardtanh':
            return HardTanh;
        case 'softmax':
            return Softmax;
        case 'tanh':
            return Tanh;
    }
}

module.exports = {
    computeNetworkOutput: computeNetworkOutput
};

