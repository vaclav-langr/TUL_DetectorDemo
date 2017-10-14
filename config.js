const config = {
    sampleRate : 16000,
    bitDepth: 16,
    segmenter : {
        windowSize : 400,
        overlap : 160,
        windowsSizePower : 0,
        overlapPercent : 0
    },
    melfbank : {
        noiseCoefs : [-1, 1],
        useRange: true,
        preemCoef : 0.97,
        lowFrequency : 0,
        highFrequency : 8000,
        channels : 39,
        minValue: 1.0,
        returnValue: 0.0
    },
    normalizer : {
        left : 25,
        right : 25
    },
    sequencer : {
        size : 51,
        position : 25
    },
    neurotizer : {
        nnetPath: './Data/torch/10.nnet',
        activations: [
            'HardTanh',
            'HardTanh',
            'HardTanh',
            'HardTanh',
            'HardTanh',
            'HardTanh',
            'Softmax'],
    },
};
config.segmenter.overlapPercent = (100 * config.segmenter.overlap / config.segmenter.windowSize) + '%';

var powerOfTwo = 1;
while (powerOfTwo < config.segmenter.windowSize) {
    powerOfTwo = powerOfTwo * 2;
}
config.segmenter.windowsSizePower = powerOfTwo;


module.exports = {
    config
};
