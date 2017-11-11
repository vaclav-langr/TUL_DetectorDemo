var States = {
    sS : 0,
    sN : 1
};

var currentState = States.sN;
var buffer = new Array(11).fill(1);
var sum;

const switchState = function(label, prob) {
    buffer.shift();
    buffer.push(label);
    sum = buffer.reduce(function(a,b){return a+b});
    switch(currentState) {
        case States.sN:
            if(sum < 7) {
                currentState = States.sS;
            }
            break;
        case States.sS:
            if(sum > 6) {
                currentState = States.sN;
            }
            break;
    }

    return currentState;
};

module.exports = {
    switchState
}