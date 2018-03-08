var store_1 = require('electron-store');
var store = new store_1();

const config = {
    sampleRate : store.get("sampleRate", 16000),
    bitDepth: store.get("bitDepth", 16),
    segmenter : {
        windowSize : store.get("segmenter.windowSize", 400),
        overlap : store.get("segmenter.overlap", 160),
        windowsSizePower : 0,
        overlapPercent : 0
    },
    melfbank : {
        noiseCoefs : [store.get('melfbank.noiseCoefsLower', -1), store.get('melfbank.noiseCoefsHigher', 1)],
        useRange: store.get('melfbank.useRange', true),
        preemCoef : store.get('melfbank.preemCoef', 0.97),
        lowFrequency : store.get('melfbank.lowFrequency', 0),
        highFrequency : store.get('melfbank.highFrequency', 8000),
        channels : store.get('melfbank.channels', 39),
        minValue: store.get('melfbank.minValue', 1.0),
        returnValue: store.get('melfbank.returnValue', 0.0)
    },
    normalizer : {
        size : store.get('normalizer.size', 51),
        position : store.get('normalizer.position', 25)
    },
    sequencer : {
        size : store.get('sequencer.size', 51),
        position : store.get('sequencer.position', 25)
    },
    neurotizer : {
        nnetPath: store.get("neurotizer.nnetPath"),
        activations: store.get("neurotizer.activations")
    },
    transformator : {
        mean : {
            path:  store.get("transformator.mean.path"),
            operation: 'sub'
        },
        std : {
            path: store.get("transformator.std.path"),
            operation: 'div'
        }
    },
    nanogrid: {
        ntx_token: store.get("nanogrid.ntx_token")
    },
    fsm: {
        threshold: store.get("fsm.threshold", 0)
    }
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
