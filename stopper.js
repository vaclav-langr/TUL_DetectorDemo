let stopperStates = {
    sS: 0
};

let endState;
let currentState = stopperStates.sS;

function getKey(value) {
    return Object.keys(stopperStates).find(key => stopperStates[key] == value);
}

const reset = function () {
    currentState = stopperStates.sS;
};

const switchState = function (input) {
    let result = false;
    switch (currentState) {
        case stopperStates.sS:
            if (input) {
                currentState = stopperStates.sS;
            } else {
                currentState = stopperStates[getKey(currentState + 1)];
            }
            break;
        default:
            if (input) {
                if (currentState != endState) {
                    currentState = stopperStates.sS;
                }
            } else {
                if (currentState == endState) {
                    currentState = currentState;
                    result = true;
                } else {
                    currentState = stopperStates[getKey(currentState + 1)];
                }
            }
            break;
    }
    return result;
};

const setLength = function (length) {
    for (let i = 0; i < length; i++) {
        stopperStates['sF' + (i + 1)] = (i + 1);
        endState = i + 1;
    }
};

module.exports = {
    switchState: switchState,
    setLength: setLength,
    reset: reset
};