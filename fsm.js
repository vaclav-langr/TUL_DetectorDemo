var States = {
    s0 : 0,
    s1 : 1,
    s2 : 2,
    s3 : 3,
    s4 : 4,
    s5 : 5,
    s6 : 6
};

var currentState = States.s0;

const switchState = function(label, prob) {
    switch(currentState) {
        case States.s0:
            switch(label) {
                case 0:
                    currentState = States.s1;
                    break;
                case 1:
                    currentState = States.s2;
                    break;
            }
            break;
        case States.s1:
            switch(label) {
                case 0:
                    currentState = States.s1;
                    break;
                case 4:
                    currentState = States.s3;
                    break;
            }
            break;
        case States.s2:
            switch(label) {
                case 1:
                    currentState = States.s2;
                    break;
                case 5:
                    currentState = States.s5;
                    break;
            }
            break;
        case States.s3:
            switch(label) {
                case 4:
                    currentState = States.s3;
                    break;
                case 3:
                    if(prob >= 0.69315) {
                        currentState = States.s4;
                    }
                    break;
            }
            break;
        case States.s4:
            switch(label) {
                case 1:
                    currentState = States.s2;
                    break;
                case 3:
                    currentState = States.s4;
                    break;
            }
            break;
        case States.s5:
            switch (label) {
                case 5:
                    currentState = States.s5;
                    break;
                case 2:
                    if(prob >= 0.69315) {
                        currentState = States.s6;
                    }
                    break;
            }
            break;
        case States.s6:
            switch (label) {
                case 2:
                    currentState = States.s6;
                    break;
                case 0:
                    currentState = States.s1;
                    break;
            }
            break;
    }

    if(currentState == States.s2) {
        return 1;
    } else if(currentState == States.s1) {
        return 0;
    } else {
        return -1;
    }
};

module.exports = {
    switchState
}