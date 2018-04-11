var States = {
    sS : 0,
    sN : 1,
    sF : 2
};

var currentState = States.sF;
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
    addProbability(label, prob);
    var sum = getProbability();
    var thresh = document.getElementById("threshold").value;
    switch(currentState) {
        case States.sF:
            if(sum > thresh) {
                currentState = States.sF;
            } else {
                currentState = States.sN;
            }
            return 1;
            break;
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
    updateGUI(currentState);
    return currentState;
};

module.exports = {
    switchState:switchState
};