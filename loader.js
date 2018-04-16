const fs = require('fs');
const Parser = require('binary-parser').Parser;
const config = require('./config').config;

const nnet = new Parser()
    .uint32le('nnet')
    .uint32le('zero')
    .uint32le('isize')
    .uint32le('numlayers')
    .array('noNeurons', {
        type: 'uint32le',
        length: 'numlayers'
    })
    .array('bias', {
        type: 'floatle',
        length: function () {
            var sum = 0;
            for (var i = 0; i < this.numlayers; i++) {
                sum += this.noNeurons[i];
            }
            return sum;
        }
    })
    .array('weight', {
        type: 'floatle',
        length: function () {
            var sum = 0;
            sum += (this.isize * this.noNeurons[0]);
            for (var i = 0; i < this.numlayers - 1; i++) {
                sum += (this.noNeurons[i] * this.noNeurons[i + 1])
            }
            return sum;
        }
    });

const loadWeights = function () {
    var buffer = fs.readFileSync(config.neurotizer.nnetPath.get);
    var parsedResult = nnet.parse(buffer);
    var result = {};
    result['numlayers'] = parsedResult['numlayers'];
    result['noNeurons'] = parsedResult['noNeurons'];
    result['noNeurons'].unshift(parsedResult['isize']);
    result['bias'] = [];
    result['weight'] = [];
    for (var i = 1; i < result['noNeurons'].length; i++) {
        result['bias'][i - 1] = parsedResult['bias'].splice(0, parsedResult['noNeurons'][i]);
    }
    var tempArray;
    for (var i = 1; i < result['noNeurons'].length; i++) {
        tempArray = new Array(parsedResult['noNeurons'][i]);
        for (var j = 0; j < parsedResult['noNeurons'][i]; j++) {
            tempArray[j] = parsedResult['weight'].splice(0, parsedResult['noNeurons'][i - 1]);
        }
        result['weight'][i - 1] = tempArray;
    }
    return result;
};

module.exports = {
    loadWeights: loadWeights
};