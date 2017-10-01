const config = {
    left : 50,
    right : 50,
    noiseCoefs : [-1, 1],
    windowSize : 400,
    overlap : 160,
    windowsSizePower : 0,
    overlapPercent : 0,
    preemCoef : 0.97,
    sampleRate : 16000,
    lowFrequency : 0,
    highFrequency : 8000,
    channels : 39,
    useRange: true,
    minValue: 1.0,
    returnValue: 0.0,
    bitDepth: 16,
    nnetPath: ''
};
config.overlapPercent = (100 * config.overlap / config.windowSize) + '%';

var powerOfTwo = 1;
while (powerOfTwo < config.windowSize) {
    powerOfTwo = powerOfTwo * 2;
}
config.windowsSizePower = powerOfTwo;


module.exports = {
    config
};
