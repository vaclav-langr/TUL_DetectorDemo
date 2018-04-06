var States = {
    sS : 0,
    sN : 1,
    sF1 : 2,
    sF2 : 3,
    sF3 : 4
};

var currentState = States.sF1;
var buffer = new Array(11).fill(1);

function getProbability() {
    var sum = buffer.reduce(function(a,b){return a+b});
    sum /= buffer.length;
    return sum;
}

function addProbability(label, prob) {
    buffer.shift();
    if(label == 0) {
        buffer.push(prob)
    } else {
        buffer.push(0.0)
    }
}

function updateGUI(state) {
    var detector = document.getElementById("detector");
    if(state == 0) {
        detector.setAttribute("fill", "#ff4d4d")
    } else {
        detector.setAttribute("fill", "#660000")
    }
}

const switchState = function(label, prob) {
    var sum;
    addProbability(label, prob);
    var thresh = document.getElementById("threshold").value;
    switch(currentState) {
        case States.sF1:
            currentState = States.sF2;
            return 1;
            break;
        case States.sF2:
            currentState = States.sF3;
            return 1;
            break;
        case States.sF3:
            currentState = States.sN;
            break;
        case States.sN:
            sum = getProbability();
            if(sum > thresh) {
                currentState = States.sS;
            }
            break;
        case States.sS:
            sum = getProbability();
            if(sum < thresh) {
                currentState = States.sN;
            }
            break;
    }
    updateGUI(currentState);
    return currentState;
};

module.exports = {
    switchState:switchState
};