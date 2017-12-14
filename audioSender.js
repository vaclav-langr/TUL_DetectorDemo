const config = require('./config').config;
const ntx = require('../ntx-js/dist/src/clients/websocket').WSClient;
const engine_1 = require('../ntx-js/dist/src/generated/engine');
const os = require('os');
const jwt = require('jsonwebtoken');

const engine = engine_1.ntx.v2t.engine;
var AudioChannel = engine.EngineContext.AudioChannel;
var ChannelLayout = engine.AudioFormat.ChannelLayout;
var AudioFormat = engine.AudioFormat.SampleFormat;
var SampleRate = engine.AudioFormat.SampleRate;
var _context = null;

class AudioSender{
    constructor(){
        this._buffer = new Array(50).fill(new Array(2048).fill(0.0));
        this._client = null;
        this._isSending = false;
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
        _context = new engine.EngineContextStart({
            context: new engine.EngineContext({
                audioFormat: new engine.AudioFormat({
                    pcm: {
                        sampleFormat: AudioFormat.AUDIO_SAMPLE_FORMAT_F32LE,
                        sampleRate: SampleRate.AUDIO_SAMPLE_RATE_48000,
                        channelLayout: ChannelLayout.AUDIO_CHANNEL_LAYOUT_MONO
                    }
                }),
                v2t: new engine.EngineContext.V2TConfig({}),
                audioChannel: AudioChannel.AUDIO_CHANNEL_DOWNMIX,
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

    startSpeech() {
        if(!this._isSending) {
            this._isSending = true;
            this._result = this._client.v2t(this.sendAudio());
            this._result.subscribe((e) => {
                console.log(e);
            }, (err) => console.error("FAILED", err), () => console.log("DONE"));
        }
    }

    stopSpeech() {
        this._isSending = false;
    }

    sendAudio() {
        var fn = function () {
            var chunk = this._buffer.shift();
            if(typeof chunk === 'undefined') {
                return Promise.resolve(null);
            }
            const events = new engine.Events({
                events: [new engine.Event({
                    audio: new engine.Event.Audio({
                        body: chunk,
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