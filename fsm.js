var States = {
    sS : 0,
    sN : 1
};

var currentState = States.sN;
var buffer = new Array(11).fill(1);
var sum;

const switchState = function(label, prob) {
    buffer.shift();
    if(label == 0) {
        buffer.push(prob);
    } else {
        buffer.push(0.0);
    }
    sum = buffer.reduce(function(a,b){return a+b});
    sum /= buffer.length;

    var thresh = document.getElementById("threshold").value;
    switch(currentState) {
        case States.sN:
            if(sum > thresh) {
                currentState = States.sS;
            }
            break;
        case States.sS:
            if(sum < thresh) {
                currentState = States.sN;
            }
            break;
    }

    return currentState;
};

module.exports = {
    switchState
}