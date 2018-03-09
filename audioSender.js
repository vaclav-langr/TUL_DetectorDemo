const config = require('./config').config;
const ntx = require('../ntx-js/dist/src/clients/websocket').WSClient;
const engine_1 = require('../ntx-js/dist/src/generated/engine');
const os = require('os');
const jwt = require('jsonwebtoken');
const MainController = require('./Controllers/MainController').MainController;
const audioLogger = require('./audioLogger');

const engine = engine_1.ntx.v2t.engine;
var AudioChannel = engine.EngineContext.AudioChannel;
var ChannelLayout = engine.AudioFormat.ChannelLayout;
var AudioFormat = engine.AudioFormat.SampleFormat;
var SampleRate = engine.AudioFormat.SampleRate;
var _context = null;
var controller = new MainController();

class AudioSender{
    constructor(buffer){
        this._buffer = buffer;
        this._client = null;
        this._isOpened = false;
        this._singleCommand = false;
        this.setClient();
    }

    setClient() {
        const tkn = jwt.decode(config.nanogrid.ntx_token);
        const iss = tkn.iss;
        var result;
        for(const a of tkn.aud) {
            if(!a.startsWith(iss)) {
                result = a.replace(/\/$/, "");
            }
        }
        result = result + "/ws/v1/v2t";
        this._client = new ntx(result, config.nanogrid.ntx_token, _context);
    }

    setFormat(format) {
        audioLogger.setSampleRate(format.sampleRate);

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
                                    "pron" : "doleva",
                                    "sym" : "Doleva"
                                }
                            },
                            {
                                "user" : {
                                    "pron" : "doprava",
                                    "sym" : "Doprava"
                                }
                            },
                            {
                                "user" : {
                                    "pron" : "nahoru",
                                    "sym" : "Nahoru"
                                }
                            },
                            {
                                "user" : {
                                    "pron" : "nahóru",
                                    "sym" : "Nahoru"
                                }
                            },
                            {
                                "user" : {
                                    "pron" : "dolu",
                                    "sym" : "Dolu"
                                }
                            },
                            {
                                "user" : {
                                    "pron" : "klik",
                                    "sym" : "Klik"
                                }
                            },
                            {
                                "user" : {
                                    "pron" : "dvojtíklik",
                                    "sym" : "Dvojtý klik"
                                }
                            },
                            {
                                "user" : {
                                    "pron" : "pravíklik",
                                    "sym" : "Pravý klik"
                                }
                            },
                            {
                                "user" : {
                                    "pron" : "padesát",
                                    "sym" : "50"
                                }
                            },
                            {
                                "user" : {
                                    "pron" : "sto",
                                    "sym" : "100"
                                }
                            },
                            {
                                "user" : {
                                    "pron" : "pjetset",
                                    "sym" : "500"
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
                                    "pron" : "hlavňískupina",
                                    "sym" : "Hlavní skupina"
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
            this._result.subscribe((e) => {
                if(e.hasOwnProperty('label')) {
                    if(e.label.hasOwnProperty('item')) {
                        if(this._singleCommand == false) {
                            console.log(e.label)
                            this._singleCommand = true;
                            controller.doOperation(e.label.item)
                        }
                    }
                }
            }, (err) => {console.error("FAILED", err); this._singleCommand = false;}, () => {console.log("DONE"); this._singleCommand = false;});
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
    AudioSender
};