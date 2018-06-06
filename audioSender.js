const engine_1 = require('ntx-js/dist/src/generated/engine');
const ntx = require('ntx-js/dist/src/clients/websocket.js').WSClient;
const engine = engine_1.ntx.v2t.engine;
const AudioChannel = engine.EngineContext.AudioChannel;
const SampleRate = engine.AudioFormat.SampleRate;
const ChannelLayout = engine.AudioFormat.ChannelLayout;
const AudioFormat = engine.AudioFormat.SampleFormat;
const jwt = require('jsonwebtoken');
const os = require('os');

const config_1 = require('./config');
const config = config_1.config;
const audioLogger = require('./audioLogger');
const commandLogger = require('./commandLogger');
const MainController = require('./Controllers/MainController').MainController;
let controller = new MainController();

let lastTime = "";

class AudioSender {
    constructor(buffer) {
        this._buffer = buffer;
        this._client = null;
        this._isOpened = false;
        this.setClient();
        this._shouldSend = true;

        let filename = (+new Date).toString();
        if (config_1.isDev()) {
            audioLogger.setFilename(filename);
            commandLogger.setFilename(filename);
        }
        controller.updateGUI([false, "???"])
    }

    setSend(send) {
        this._shouldSend = send;
    }

    setClient(context) {
        const tkn = jwt.decode(config.nanogrid.ntx_token.get());
        const iss = tkn.iss;
        let result;
        for (const a of tkn.aud) {
            if (!a.startsWith(iss)) {
                result = a.replace(/\/$/, "");
                break;
            }
        }
        result = result + "/ws/v1/v2t";
        this._client = new ntx(result, config.nanogrid.ntx_token.get(), context);
    }

    setFormat(format) {
        if (config_1.isDev()) {
            audioLogger.setSampleRate(format.sampleRate);
        }
        let _context = new engine.EngineContextStart({
            context: new engine.EngineContext({
                audioFormat: new engine.AudioFormat({
                    pcm: {
                        sampleFormat: AudioFormat.AUDIO_SAMPLE_FORMAT_U8,
                        sampleRate: SampleRate.AUDIO_SAMPLE_RATE_48000,
                        channelLayout: ChannelLayout.AUDIO_CHANNEL_LAYOUT_MONO
                    }
                }),
                v2t: new engine.EngineContext.V2TConfig({
                    withVAD: new engine.EngineContext.VADConfig(),
                    withLexicon: new engine.Lexicon({
                        "alpha": engine.Lexicon.Alphabet.LEXICON_ALPHABET_NONE,
                        "items": controller.getLexicon()["items"]
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
                if (format.float) {
                    switch (format.bitDepth) {
                        case 32:
                            _context.context.audioFormat.pcm.sampleFormat = AudioFormat.AUDIO_SAMPLE_FORMAT_F32BE;
                            break;
                        case 64:
                            _context.context.audioFormat.pcm.sampleFormat = AudioFormat.AUDIO_SAMPLE_FORMAT_F64BE;
                            break;
                    }
                } else {
                    if (format.signed) {
                        switch (format.bitDepth) {
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
                        switch (format.bitDepth) {
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
                if (format.float) {
                    switch (format.bitDepth) {
                        case 32:
                            _context.context.audioFormat.pcm.sampleFormat = AudioFormat.AUDIO_SAMPLE_FORMAT_F32LE;
                            break;
                        case 64:
                            _context.context.audioFormat.pcm.sampleFormat = AudioFormat.AUDIO_SAMPLE_FORMAT_F64LE;
                            break;
                    }
                } else {
                    if (format.signed) {
                        switch (format.bitDepth) {
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
                        switch (format.bitDepth) {
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
        this.setClient(_context);
    }

    addChunk(chunk) {
        this._buffer.push(chunk)
    }

    isOpened() {
        return this._isOpened;
    }

    startSpeech() {
        if (!this._isOpened) {
            this._isOpened = true;
            this._result = this._client.v2t(this.sendAudio());
            this._result.subscribe(e => {
                //console.log(e);
                if (!e.lookahead) {
                    e.events.forEach(function (element) {
                        if (element.hasOwnProperty("label")) {
                            if (element.label.hasOwnProperty("noise") && config_1.isDev()) {
                                commandLogger.saveItem(element.label.noise);
                            }
                            if (element.label.hasOwnProperty("item")) {
                                if (config_1.isDev()) {
                                    commandLogger.saveItem(element.label.item);
                                }
                                controller.doOperationPromise(element.label.item).then(console.info, console.warn);
                            }
                        }
                        if (element.hasOwnProperty("timestamp") && element.timestamp.hasOwnProperty("timestamp")) {
                            lastTime = element.timestamp.timestamp;
                        }
                    });
                }
            }, err => function (err) {
                if (config_1.isDev()) {
                    commandLogger.saveItem(lastTime);
                }
                console.error("FAILED", err);
            }(err), () => function () {
                if (config_1.isDev()) {
                    commandLogger.saveItem(lastTime);
                }
                console.info("DONE");
            }());
        }
    }

    sendAudio() {
        let fn = function () {
            let chunk = this._buffer.shift();
            if (typeof chunk === 'undefined' && !this._shouldSend) {
                this._isOpened = false;
                if (config_1.isDev()) {
                    audioLogger.saveToWav();
                }
                return Promise.resolve(null);
            }
            if (typeof chunk === 'undefined' && this._shouldSend) {
                let t1 = [];
                let t2 = new Float32Array(t1);
                let t3 = new Uint8Array(t2.buffer);
                const events = new engine.Events({
                    events: [new engine.Event({
                        audio: new engine.Event.Audio({
                            body: Array.from(t3),
                        })
                    })]
                });
                return Promise.resolve(events);
            }
            if (config_1.isDev()) {
                audioLogger.addToBuffer(chunk);
            }
            const events = new engine.Events({
                events: [new engine.Event({
                    audio: new engine.Event.Audio({
                        body: Array.from(new Uint8Array(chunk.buffer)),
                    })
                })]
            });
            return Promise.resolve(events);
        };
        let instance = this;
        return fn.bind(instance);
    }
}

module.exports = {
    AudioSender: AudioSender
};