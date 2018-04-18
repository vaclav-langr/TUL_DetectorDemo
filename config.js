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

const isDev = function() {
    return process.mainModule.filename.indexOf('app.asar') === -1;
};

const getNtxPromise = function (token) {
    return new Promise((recall, reject) => {
        const got = require("got");
        var domain = config.nanogrid.domain.get();
        (async() => {
            try {
                const response = await got.post(domain + "store/ntx-token", {
                    json: true,
                    headers: {"Authorization": "Bearer " + token},
                    body: {
                        "id": "devel/ntx.v2t.engine.EngineService/cz/myvoice/v2t",
                        "label": "vad+v2t"
                    }
                });
                config.nanogrid.ntx_token.set(response.body.ntxToken);
                recall("Logged in succesfully to Nanogrid.");
            } catch (error) {
                //display error to user
                reject("Unable to get token.\n" + error);
                //return error;
            }
        })();
    });
};

const loginPromise = function () {
    return new Promise((recall, reject) => {
        var domain = config.nanogrid.domain.get();
        var username = config.nanogrid.username.get();
        var password = config.nanogrid.password.get();
        if (domain != "" && username != "" && password != "") {
            const got = require("got");

            (async() => {
                try {
                    const response = await got.post(domain + "login/access-token", {
                        json: true,
                        body: {
                            "username": username,
                            "password": password
                        }
                    });
                    var token = response.body.accessToken;
                    config.nanogrid.access_token.set(token);
                    recall(token);
                } catch (error) {
                    //display error
                    reject("Unable to login.\n" + error);
                }
            })();
        }
    });
};

const login = function (onError) {
    loginPromise().then(getNtxPromise, onError).then(console.info, onError);
};

function setPath() {
    if(isDev()) {
        config.neurotizer.nnetPath.get = './Library/10.nnet';
        config.transformator.mean.path.get = "./Library/mean.list";
        config.transformator.std.path.get = "./Library/std.list";
    } else {
        switch (process.platform) {
            case "win32":
                config.neurotizer.nnetPath.get = './resources/app.asar/Library/10.nnet';
                config.transformator.mean.path.get = './resources/app.asar/Library/mean.list';
                config.transformator.std.path.get = './resources/app.asar/Library/std.list';
                break;
            case "darwin":
                config.neurotizer.nnetPath.get = './Contents/Resources/app.asar/Library/10.nnet';
                config.transformator.mean.path.get = './Contents/Resources/app.asar/Library/mean.list';
                config.transformator.std.path.get = './Contents/Resources/app.asar/Library/std.list';
                break;
            case "linux":
                break;
        }
    }
}

const config = {
    sampleRate: {
        get: store.get("sampleRate", 16000),
        set: function (value) {
            store.set("sampleRate", value);
        }
    },
    bitDepth: {
        get: store.get("bitDepth", 16),
        set: function (value) {
            store.set("bitDepth", value);
        }
    },
    segmenter: {
        windowSize: {
            get: store.get("segmenter.windowSize", 400),
            set: function (value) {
                store.set("segmenter.windowSize", value);
            }
        },
        overlap: {
            get: store.get("segmenter.overlap", 160),
            set: function (value) {
                store.set("segmenter.overlap", value);
            }
        },
        windowsSizePower: 0,
        overlapPercent: 0
    },
    melfbank: {
        noiseCoefs: {
            get: [store.get('melfbank.noiseCoefsLower', -1), store.get('melfbank.noiseCoefsHigher', 1)],
            set: function (value) {
                store.set('melfbank.noiseCoefsLower', value[0]);
                store.set('melfbank.noiseCoefsHigher', value[1]);
            }
        },
        useRange: {
            get: store.get('melfbank.useRange', true),
            set: function (value) {
                store.set('melfbank.useRange', value)
            }
        },
        preemCoef: {
            get: store.get('melfbank.preemCoef', 0.97),
            set: function (value) {
                store.set('melfbank.preemCoef', value)
            }
        },
        lowFrequency: {
            get: store.get('melfbank.lowFrequency', 0),
            set: function (value) {
                store.set('melfbank.lowFrequency', value)
            }
        },
        highFrequency: {
            get: store.get('melfbank.highFrequency', 8000),
            set: function (value) {
                store.set('melfbank.highFrequency', value)
            }
        },
        channels: {
            get: store.get('melfbank.channels', 39),
            set: function (value) {
                store.set('melfbank.channels', value)
            }
        },
        minValue: {
            get: store.get('melfbank.minValue', 1.0),
            set: function (value) {
                store.set('melfbank.minValue', value)
            }
        },
        returnValue: {
            get: store.get('melfbank.returnValue', 0.0),
            set: function (value) {
                store.set('melfbank.returnValue', value)
            }
        }
    },
    normalizer: {
        size: {
            get: store.get('normalizer.size', 51),
            set: function (value) {
                store.set('normalizer.size', value)
            }
        },
        position: {
            get: store.get('normalizer.position', 25),
            set: function (value) {
                store.set('normalizer.position', value)
            }
        }
    },
    sequencer: {
        size: {
            get: store.get('sequencer.size', 51),
            set: function (value) {
                store.set('sequencer.size', value)
            }
        },
        position: {
            get: store.get('sequencer.position', 25),
            set: function (value) {
                store.set('sequencer.position', value)
            }
        }
    },
    neurotizer: {
        nnetPath: {
            get: isDev() ? './Library/10.nnet' : './resources/app.asar/Library/10.nnet',
        },
        activations: {
            get: store.get("neurotizer.activations"),
            set: function (value) {
                store.set("neurotizer.activations", value)
            }
        }
    },
    transformator: {
        mean: {
            path: {
                get: isDev() ? "./Library/mean.list" : "./resources/app.asar/Library/mean.list",
            },
            operation: 'sub'
        },
        std: {
            path: {
                get: isDev() ? "./Library/std.list" : "./resources/app.asar/Library/std.list",
            },
            operation: 'div'
        }
    },
    nanogrid: {
        ntx_token: {
            get: function () {
                return store.get("nanogrid.ntx_token");
            },
            set: function (value) {
                store.set("nanogrid.ntx_token", value)
            }
        },
        domain: {
            get: function () {
                return store.get("nanogrid.domain");
            },
            set: function (value) {
                store.set("nanogrid.domain", value);
            }
        },
        username: {
            get: function () {
                return store.get("nanogrid.username");
            },
            set: function (value) {
                store.set("nanogrid.username", value)
            }
        },
        password: {
            get: function () {
                return store.get("nanogrid.password");
            },
            set: function (value) {
                store.set("nanogrid.password", value)
            }
        },
        access_token: {
            get: function () {
                return store.get("nanogrid.access_token");
            },
            set: function (value) {
                store.set("nanogrid.access_token", value)
            }
        }
    },
    fsm: {
        threshold: {
            get: store.get("fsm.threshold", 0),
            set: function (value) {
                store.set("fsm.threshold", value)
            }
        }
    }
};

compute();
setPath();

module.exports = {
    config: config,
    login: login,
    isDev: isDev
};
