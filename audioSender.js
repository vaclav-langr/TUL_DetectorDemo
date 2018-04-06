const engine_1 = require('../ntx-js/dist/src/generated/engine');
const ntx = require('../ntx-js/dist/src/clients/websocket').WSClient;
const engine = engine_1.ntx.v2t.engine;
var AudioChannel = engine.EngineContext.AudioChannel;
const jwt = require('jsonwebtoken');

const config = require('./config').config;
const os = require('os');
const MainController = require('./Controllers/MainController').MainController;
const audioLogger = require('./audioLogger');
const commandLogger = require('./commandLogger');
var SampleRate = engine.AudioFormat.SampleRate;
var ChannelLayout = engine.AudioFormat.ChannelLayout;
var AudioFormat = engine.AudioFormat.SampleFormat;
var controller = new MainController();
var _context = null;

class AudioSender{
    constructor(buffer){
        this._buffer = buffer;
        this._client = null;
        this._isOpened = false;
        this.setClient();
    }

    addBuffer(buffer) {
        for(var i = 0; i < buffer.length; i++) {
            this._buffer.push(buffer[i]);
        }
    }

    setClient() {
        const tkn = jwt.decode(config.nanogrid.ntx_token.get());
        const iss = tkn.iss;
        var result;
        for(const a of tkn.aud) {
            if(!a.startsWith(iss)) {
                result = a.replace(/\/$/, "");
            }
        }
        result = result + "/ws/v1/v2t";
        this._client = new ntx(result, config.nanogrid.ntx_token.get(), _context);
    }

    setFormat(format) {
        var filename = (+new Date).toString()
        audioLogger.setSampleRate(format.sampleRate);
        audioLogger.setFilename(filename);
        commandLogger.setFilename(filename);

        _context = new engine.EngineContextStart({
            context: new engine.EngineContext({
                audioFormat: new engine.AudioFormat({
                    pcm: {
                        sampleFormat: AudioFormat.AUDIO_SAMPLE_FORMAT_U8,
                        sampleRate: SampleRate.AUDIO_SAMPLE_RATE_48000,
                        channelLayout: ChannelLayout.AUDIO_CHANNEL_LAYOUT_MONO
                    }
                }),
                v2t: new engine.EngineContext.V2TConfig({
                    withLexicon: new engine.Lexicon({
                        "alpha" : engine.Lexicon.Alphabet.LEXICON_ALPHABET_NONE,
                        "items" : [
                            {
                                "user" : {
                                    "pron" : "klikňi",
                                    "sym" : "Klikni"
                                }
                            },
                            {
                                "user" : {
                                    "pron" : "dvojklik",
                                    "sym" : "Dvojklik"
                                }
                            },
                            {
                                "user" : {
                                    "pron" : "pravíklik",
                                    "sym" : "Pravýklik"
                                }
                            },
                            {
                                "user" : {
                                    "pron" : "miš",
                                    "sym" : "Myš"
                                }
                            }
                            ,
                            {
                                "user" : {
                                    "pron" : "záklaďňískupina",
                                    "sym" : "Základnískupina"
                                }
                            }
                            ,
                            {
                                "user" : {
                                    "pron" : "dolevapadesát",
                                    "sym" : "Doleva50"
                                }
                            }
                            ,
                            {
                                "user" : {
                                    "pron" : "dolevasto",
                                    "sym" : "Doleva100"
                                }
                            }
                            ,
                            {
                                "user" : {
                                    "pron" : "dolevapjetset",
                                    "sym" : "Doleva500"
                                }
                            }
                            ,
                            {
                                "user" : {
                                    "pron" : "dopravapadesát",
                                    "sym" : "Doprava50"
                                }
                            }
                            ,
                            {
                                "user" : {
                                    "pron" : "dopravasto",
                                    "sym" : "Doprava100"
                                }
                            }
                            ,
                            {
                                "user" : {
                                    "pron" : "dopravapjetset",
                                    "sym" : "Doprava500"
                                }
                            }
                            ,
                            {
                                "user" : {
                                    "pron" : "dolupadesát",
                                    "sym" : "Dolu50"
                                }
                            }
                            ,
                            {
                                "user" : {
                                    "pron" : "dolusto",
                                    "sym" : "Dolu100"
                                }
                            }
                            ,
                            {
                                "user" : {
                                    "pron" : "dolupjetset",
                                    "sym" : "Dolu500"
                                }
                            },
                            {
                                "user" : {
                                    "pron" : "nahorupadesát",
                                    "sym" : "Nahoru50"
                                }
                            }
                            ,
                            {
                                "user" : {
                                    "pron" : "nahorusto",
                                    "sym" : "Nahoru100"
                                }
                            }
                            ,
                            {
                                "user" : {
                                    "pron" : "nahorupjetset",
                                    "sym" : "Nahoru500"
                                }
                            }
                        ]
                    })
                }),
                audioChannel: AudioChannel.AUDIO_CHANNEL_LEFT,
            })
        });

        switch (format.sampleRate) {
            case 8000:
                _context.context.audioFormat.pcm.sampleRate = SampleRate.AUDIO_SAMPLE_RATE_8000;
                break;
            case 16000:
                _context.context.audioFormat.pcm.sampleRate = SampleRate.AUDIO_SAMPLE_RATE_16000;
                break;
            case 32000:
                _context.context.audioFormat.pcm.sampleRate = SampleRate.AUDIO_SAMPLE_RATE_32000;
                break;
            case 48000:
                _context.context.audioFormat.pcm.sampleRate = SampleRate.AUDIO_SAMPLE_RATE_48000;
                break;
            case 96000:
                _context.context.audioFormat.pcm.sampleRate = SampleRate.AUDIO_SAMPLE_RATE_96000;
                break;
            case 11025:
                _context.context.audioFormat.pcm.sampleRate = SampleRate.AUDIO_SAMPLE_RATE_11025;
                break;
            case 22050:
                _context.context.audioFormat.pcm.sampleRate = SampleRate.AUDIO_SAMPLE_RATE_22050;
                break;
            case 44100:
                _context.context.audioFormat.pcm.sampleRate = SampleRate.AUDIO_SAMPLE_RATE_44100;
                break;
            default:
                _context.context.audioFormat.pcm.sampleRate = SampleRate.AUDIO_SAMPLE_RATE_NONE;
                break;
        }

        switch (format.channels) {
            case 1:
                _context.context.audioFormat.pcm.channelLayout = ChannelLayout.AUDIO_CHANNEL_LAYOUT_MONO;
                break;
            case 2:
                _context.context.audioFormat.pcm.channelLayout = ChannelLayout.AUDIO_CHANNEL_LAYOUT_STEREO;
                break;
            default:
                _context.context.audioFormat.pcm.channelLayout = ChannelLayout.AUDIO_CHANNEL_LAYOUT_NONE;
                break;
        }

        switch (os.endianness()) {
            case 'BE':
                if(format.float) {
                    switch(format.bitDepth) {
                        case 32:
                            _context.context.audioFormat.pcm.sampleFormat = AudioFormat.AUDIO_SAMPLE_FORMAT_F32BE;
                            break;
                        case 64:
                            _context.context.audioFormat.pcm.sampleFormat = AudioFormat.AUDIO_SAMPLE_FORMAT_F64BE;
                            break;
                    }
                } else {
                    if(format.signed) {
                        switch(format.bitDepth) {
                            case 8:
                                _context.context.audioFormat.pcm.sampleFormat = AudioFormat.AUDIO_SAMPLE_FORMAT_S8;
                                break;
                            case 16:
                                _context.context.audioFormat.pcm.sampleFormat = AudioFormat.AUDIO_SAMPLE_FORMAT_S16BE;
                                break;
                            case 24:
                                _context.context.audioFormat.pcm.sampleFormat = AudioFormat.AUDIO_SAMPLE_FORMAT_S24BE;
                                break;
                            case 32:
                                _context.context.audioFormat.pcm.sampleFormat = AudioFormat.AUDIO_SAMPLE_FORMAT_S32BE;
                                break;
                        }
                    } else {
                        switch(format.bitDepth) {
                            case 8:
                                _context.context.audioFormat.pcm.sampleFormat = AudioFormat.AUDIO_SAMPLE_FORMAT_U8;
                                break;
                            case 16:
                                _context.context.audioFormat.pcm.sampleFormat = AudioFormat.AUDIO_SAMPLE_FORMAT_U16BE;
                                break;
                            case 24:
                                _context.context.audioFormat.pcm.sampleFormat = AudioFormat.AUDIO_SAMPLE_FORMAT_U24BE;
                                break;
                            case 32:
                                _context.context.audioFormat.pcm.sampleFormat = AudioFormat.AUDIO_SAMPLE_FORMAT_U32BE;
                                break;
                        }
                    }
                }
                break;
            case 'LE':
                if(format.float) {
                    switch(format.bitDepth) {
                        case 32:
                            _context.context.audioFormat.pcm.sampleFormat = AudioFormat.AUDIO_SAMPLE_FORMAT_F32LE;
                            break;
                        case 64:
                            _context.context.audioFormat.pcm.sampleFormat = AudioFormat.AUDIO_SAMPLE_FORMAT_F64LE;
                            break;
                    }
                } else {
                    if(format.signed) {
                        switch(format.bitDepth) {
                            case 8:
                                _context.context.audioFormat.pcm.sampleFormat = AudioFormat.AUDIO_SAMPLE_FORMAT_S8;
                                break;
                            case 16:
                                _context.context.audioFormat.pcm.sampleFormat = AudioFormat.AUDIO_SAMPLE_FORMAT_S16LE;
                                break;
                            case 24:
                                _context.context.audioFormat.pcm.sampleFormat = AudioFormat.AUDIO_SAMPLE_FORMAT_S24LE;
                                break;
                            case 32:
                                _context.context.audioFormat.pcm.sampleFormat = AudioFormat.AUDIO_SAMPLE_FORMAT_S32LE;
                                break;
                        }
                    } else {
                        switch(format.bitDepth) {
                            case 8:
                                _context.context.audioFormat.pcm.sampleFormat = AudioFormat.AUDIO_SAMPLE_FORMAT_U8;
                                break;
                            case 16:
                                _context.context.audioFormat.pcm.sampleFormat = AudioFormat.AUDIO_SAMPLE_FORMAT_U16LE;
                                break;
                            case 24:
                                _context.context.audioFormat.pcm.sampleFormat = AudioFormat.AUDIO_SAMPLE_FORMAT_U24LE;
                                break;
                            case 32:
                                _context.context.audioFormat.pcm.sampleFormat = AudioFormat.AUDIO_SAMPLE_FORMAT_U32LE;
                                break;
                        }
                    }
                }
                break;
        }

        this.setClient();
    }

    addChunk(chunk) {
        this._buffer.push(chunk)
    }

    isOpened() {
        if(this._isOpened) {
            return true;
        } else {
            return false;
        }
    }

    startSpeech() {
        if(!this._isOpened) {
            this._isOpened = true;
            this._result = this._client.v2t(this.sendAudio());
            this._result.subscribe(e => {
                if(!e.lookahead) {
                    e.events.forEach(function (element) {
                        if(element.hasOwnProperty("label")) {
                            if(element.label.hasOwnProperty("noise")) {
                                commandLogger.saveItem(element.label.noise);
                            }
                            if(element.label.hasOwnProperty("item")) {
                                commandLogger.saveItem(element.label.item);
                                controller.doOperation(element.label.item);
                            }
                        }
                    });
                }
            }, err => console.error("FAILED", err), () => console.log("DONE"));
        }
    }

    sendAudio() {
        var fn = function () {
            var chunk = this._buffer.shift();
            if(typeof chunk === 'undefined') {
                this._isOpened = false;
                audioLogger.saveToWav();
                return Promise.resolve(null);
            }
            audioLogger.addToBuffer(chunk);
            const events = new engine.Events({
                events: [new engine.Event({
                    audio: new engine.Event.Audio({
                        body: Array.from(new Uint8Array(chunk.buffer)),
                    })
                })]
            });
            return Promise.resolve(events);
        };
        var instance = this;
        return fn.bind(instance);
    }
}

module.exports = {
    AudioSender:AudioSender
};