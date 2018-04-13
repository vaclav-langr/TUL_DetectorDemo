var store_1 = require('electron-store');
var store = new store_1();

function compute() {
    config.segmenter.overlapPercent = (100 * config.segmenter.overlap.get / config.segmenter.windowSize.get) + '%';

    var powerOfTwo = 1;
    while (powerOfTwo < config.segmenter.windowSize.get) {
        powerOfTwo = powerOfTwo * 2;
    }
    config.segmenter.windowsSizePower = powerOfTwo;
}

function getNtx() {
    const got = require("got");
    var domain = config.nanogrid.domain.get();
    var token = config.nanogrid.access_token.get();
    (async() => {
        try {
            const response = await got.post(domain + "store/ntx-token", {
                json: true,
                headers: {"Authorization" : "Bearer " + token},
                body: {
                    "id":"devel/ntx.v2t.engine.EngineService/cz/myvoice/v2t",
                    "label":"vad+v2t"
                }
            });
            config.nanogrid.ntx_token.set(response.body.ntxToken);
        } catch (error) {
            //display error to user
            console.log(error);
        }
    })();
}

const login = function() {
    var domain = config.nanogrid.domain.get();
    var username = config.nanogrid.username.get();
    var password = config.nanogrid.password.get();
    if(domain != "" && username != "" && password != "") {
        const got = require("got");

        (async() => {
            try {
                const response = await got.post(domain + "login/access-token", {
                    json: true,
                    body: {
                        "username":username,
                        "password":password
                    }
                });
                config.nanogrid.access_token.set(response.body.accessToken);
                getNtx();
            } catch (error) {
                //display error
                console.log(error);
            }
        })();
    }
};

const config = {
    sampleRate : {
        get: store.get("sampleRate", 16000),
        set: function(value) {
            store.set("sampleRate", value);
        }
    },
    bitDepth: {
        get: store.get("bitDepth", 16),
        set: function(value) {
            store.set("bitDepth", value);
        }
    },
    segmenter : {
        windowSize : {
            get: store.get("segmenter.windowSize", 400),
            set: function(value) {
                store.set("segmenter.windowSize", value);
            }
        },
        overlap : {
            get: store.get("segmenter.overlap", 160),
            set: function(value) {
                store.set("segmenter.overlap", value);
            }
        },
        windowsSizePower : 0,
        overlapPercent : 0
    },
    melfbank : {
        noiseCoefs : {
            get: [store.get('melfbank.noiseCoefsLower', -1), store.get('melfbank.noiseCoefsHigher', 1)],
            set: function(value) {
                store.set('melfbank.noiseCoefsLower', value[0]);
                store.set('melfbank.noiseCoefsHigher', value[1]);
            }
        },
        useRange: {
            get: store.get('melfbank.useRange', true),
            set: function(value) {
                store.set('melfbank.useRange', value)
            }
        },
        preemCoef : {
            get: store.get('melfbank.preemCoef', 0.97),
            set: function(value) {
                store.set('melfbank.preemCoef', value)
            }
        },
        lowFrequency : {
            get: store.get('melfbank.lowFrequency', 0),
            set: function(value) {
                store.set('melfbank.lowFrequency', value)
            }
        },
        highFrequency : {
            get: store.get('melfbank.highFrequency', 8000),
            set: function(value) {
                store.set('melfbank.highFrequency', value)
            }
        },
        channels : {
            get: store.get('melfbank.channels', 39),
            set: function(value) {
                store.set('melfbank.channels', value)
            }
        },
        minValue: {
            get: store.get('melfbank.minValue', 1.0),
            set: function(value) {
                store.set('melfbank.minValue', value)
            }
        },
        returnValue: {
            get: store.get('melfbank.returnValue', 0.0),
            set: function(value) {
                store.set('melfbank.returnValue', value)
            }
        }
    },
    normalizer : {
        size : {
            get: store.get('normalizer.size', 51),
            set: function(value) {
                store.set('normalizer.size', value)
            }
        },
        position : {
            get: store.get('normalizer.position', 25),
            set: function(value) {
                store.set('normalizer.position', value)
            }
        }
    },
    sequencer : {
        size : {
            get: store.get('sequencer.size', 51),
            set: function(value) {
                store.set('sequencer.size', value)
            }
        },
        position : {
            get: store.get('sequencer.position', 25),
            set: function(value) {
                store.set('sequencer.position', value)
            }
        }
    },
    neurotizer : {
        nnetPath: {
            get: store.get("neurotizer.nnetPath"),
            set: function(value) {
                store.set("neurotizer.nnetPath", value)
            }
        },
        activations: {
            get: store.get("neurotizer.activations"),
            set: function(value) {
                store.set("neurotizer.activations", value)
            }
        }
    },
    transformator : {
        mean : {
            path:  {
                get: store.get("transformator.mean.path"),
                set: function(value) {
                    store.set("transformator.mean.path", value)
                }
            },
            operation: 'sub'
        },
        std : {
            path: {
                get: store.get("transformator.std.path"),
                set: function(value) {
                    store.set("transformator.std.path", value)
                }
            },
            operation: 'div'
        }
    },
    nanogrid: {
        ntx_token: {
            get: function() {
                return store.get("nanogrid.ntx_token");
            },
            set: function(value) {
                store.set("nanogrid.ntx_token", value)
            }
        },
        domain : {
            get: function() {
                return store.get("nanogrid.domain");
            },
            set: function(value) {
                store.set("nanogrid.domain", value);
            }
        },
        username : {
            get: function() {
                return store.get("nanogrid.username");
            },
            set: function(value) {
                store.set("nanogrid.username", value)
            }
        },
        password : {
            get: function() {
                return store.get("nanogrid.password");
            },
            set: function(value) {
                store.set("nanogrid.password", value)
            }
        },
        access_token : {
            get: function() {
                return store.get("nanogrid.access_token");
            },
            set: function(value) {
                store.set("nanogrid.access_token", value)
            }
        }
    },
    fsm: {
        threshold: {
            get: store.get("fsm.threshold", 0),
            set: function(value) {
                store.set("fsm.threshold", value)
            }
        }
    }
};

compute();

module.exports = {
    config:config,
    login:login
};
