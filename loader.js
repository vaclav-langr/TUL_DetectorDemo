var fs = require('fs');
var Parser = require('binary-parser').Parser;
var config = require('./config').config;

var nnet = new Parser()
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
            for(var i = 0; i < this.numlayers; i++) {
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
            for(var i = 0; i < this.numlayers - 1; i++) {
                sum += (this.noNeurons[i] * this.noNeurons[i+1])
            }
            return sum;
        }
    });

function loadWeights() {
    fs.readFile(config.nnetPath, function(err, buffer) {
        var parsedResult = nnet.parse(buffer);
        var result = [];
        result['isize'] = parsedResult['isize'];
        result['noNeurons'] = parsedResult['noNeurons'];
        result['bias'] = [];
        result['weight'] = [];
        for(var i = 0; i < result['noNeurons'].length; i++) {
            result['bias'][i] = parsedResult['bias'].splice(0, parsedResult['noNeurons'][i]);
        }
        result['weight'][0] = parsedResult['weight'].splice(0, parsedResult['isize'] * parsedResult['noNeurons'][0]);
        for(var i = 1; i < result['noNeurons'].length; i++) {
            result['weight'][i] = parsedResult['weight'].splice(0, parsedResult['noNeurons'][i-1]*parsedResult['noNeurons'][i]);
        }
        console.log(result)
    })
}

loadWeights()