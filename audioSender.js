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

class AudioSender{
    constructor(){
        this._buffer = [];
        this._client = null;
        this._context = null;
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
        this._client = new ntx(result, config.nanogrid.ntx_token, this._context);
    }

    setFormat(format) {
        this._context = new engine.EngineContextStart({
            context: new engine.EngineContext({
                audioFormat: new engine.AudioFormat({
                        pcm: {
                            sampleFormat: AudioFormat.AUDIO_SAMPLE_FORMAT_F32LE,
                            sampleRate: SampleRate.AUDIO_SAMPLE_RATE_48000,
                            channelLayout: ChannelLayout.AUDIO_CHANNEL_LAYOUT_MONO
                        }
                })
            }),
            v2t: new engine.EngineContext.V2TConfig(),
            audioChannel: AudioChannel.AUDIO_CHANNEL_DOWNMIX,
        });

        switch (format.sampleRate) {
            case 8000:
                this._context.context.audioFormat.pcm.sampleRate = SampleRate.AUDIO_SAMPLE_RATE_8000;
                break;
            case 16000:
                this._context.context.audioFormat.pcm.sampleRate = SampleRate.AUDIO_SAMPLE_RATE_16000;
                break;
            case 32000:
                this._context.context.audioFormat.pcm.sampleRate = SampleRate.AUDIO_SAMPLE_RATE_32000;
                break;
            case 48000:
                this._context.context.audioFormat.pcm.sampleRate = SampleRate.AUDIO_SAMPLE_RATE_48000;
                break;
            case 96000:
                this._context.context.audioFormat.pcm.sampleRate = SampleRate.AUDIO_SAMPLE_RATE_96000;
                break;
            case 11025:
                this._context.context.audioFormat.pcm.sampleRate = SampleRate.AUDIO_SAMPLE_RATE_11025;
                break;
            case 22050:
                this._context.context.audioFormat.pcm.sampleRate = SampleRate.AUDIO_SAMPLE_RATE_22050;
                break;
            case 44100:
                this._context.context.audioFormat.pcm.sampleRate = SampleRate.AUDIO_SAMPLE_RATE_44100;
                break;
            default:
                this._context.context.audioFormat.pcm.sampleRate = SampleRate.AUDIO_SAMPLE_RATE_NONE;
                break;
        }

        switch (format.channels) {
            case 1:
                this._context.context.audioFormat.pcm.channelLayout = ChannelLayout.AUDIO_CHANNEL_LAYOUT_MONO;
                break;
            case 2:
                this._context.context.audioFormat.pcm.channelLayout = ChannelLayout.AUDIO_CHANNEL_LAYOUT_STEREO;
                break;
            default:
                this._context.context.audioFormat.pcm.channelLayout = ChannelLayout.AUDIO_CHANNEL_LAYOUT_NONE;
                break;
        }

        switch (os.endianness()) {
            case 'BE':
                if(format.float) {
                    switch(format.bitDepth) {
                        case 32:
                            this._context.context.audioFormat.pcm.sampleFormat = AudioFormat.AUDIO_SAMPLE_FORMAT_F32BE;
                            break;
                        case 64:
                            this._context.context.audioFormat.pcm.sampleFormat = AudioFormat.AUDIO_SAMPLE_FORMAT_F64BE;
                            break;
                    }
                } else {
                    if(format.signed) {
                        switch(format.bitDepth) {
                            case 8:
                                this._context.context.audioFormat.pcm.sampleFormat = AudioFormat.AUDIO_SAMPLE_FORMAT_S8;
                                break;
                            case 16:
                                this._context.context.audioFormat.pcm.sampleFormat = AudioFormat.AUDIO_SAMPLE_FORMAT_S16BE;
                                break;
                            case 24:
                                this._context.context.audioFormat.pcm.sampleFormat = AudioFormat.AUDIO_SAMPLE_FORMAT_S24BE;
                                break;
                            case 32:
                                this._context.context.audioFormat.pcm.sampleFormat = AudioFormat.AUDIO_SAMPLE_FORMAT_S32BE;
                                break;
                        }
                    } else {
                        switch(format.bitDepth) {
                            case 8:
                                this._context.context.audioFormat.pcm.sampleFormat = AudioFormat.AUDIO_SAMPLE_FORMAT_U8;
                                break;
                            case 16:
                                this._context.context.audioFormat.pcm.sampleFormat = AudioFormat.AUDIO_SAMPLE_FORMAT_U16BE;
                                break;
                            case 24:
                                this._context.context.audioFormat.pcm.sampleFormat = AudioFormat.AUDIO_SAMPLE_FORMAT_U24BE;
                                break;
                            case 32:
                                this._context.context.audioFormat.pcm.sampleFormat = AudioFormat.AUDIO_SAMPLE_FORMAT_U32BE;
                                break;
                        }
                    }
                }
                break;
            case 'LE':
                if(format.float) {
                    switch(format.bitDepth) {
                        case 32:
                            this._context.context.audioFormat.pcm.sampleFormat = AudioFormat.AUDIO_SAMPLE_FORMAT_F32LE;
                            break;
                        case 64:
                            this._context.context.audioFormat.pcm.sampleFormat = AudioFormat.AUDIO_SAMPLE_FORMAT_F64LE;
                            break;
                    }
                } else {
                    if(format.signed) {
                        switch(format.bitDepth) {
                            case 8:
                                this._context.context.audioFormat.pcm.sampleFormat = AudioFormat.AUDIO_SAMPLE_FORMAT_S8;
                                break;
                            case 16:
                                this._context.context.audioFormat.pcm.sampleFormat = AudioFormat.AUDIO_SAMPLE_FORMAT_S16LE;
                                break;
                            case 24:
                                this._context.context.audioFormat.pcm.sampleFormat = AudioFormat.AUDIO_SAMPLE_FORMAT_S24LE;
                                break;
                            case 32:
                                this._context.context.audioFormat.pcm.sampleFormat = AudioFormat.AUDIO_SAMPLE_FORMAT_S32LE;
                                break;
                        }
                    } else {
                        switch(format.bitDepth) {
                            case 8:
                                this._context.context.audioFormat.pcm.sampleFormat = AudioFormat.AUDIO_SAMPLE_FORMAT_U8;
                                break;
                            case 16:
                                this._context.context.audioFormat.pcm.sampleFormat = AudioFormat.AUDIO_SAMPLE_FORMAT_U16LE;
                                break;
                            case 24:
                                this._context.context.audioFormat.pcm.sampleFormat = AudioFormat.AUDIO_SAMPLE_FORMAT_U24LE;
                                break;
                            case 32:
                                this._context.context.audioFormat.pcm.sampleFormat = AudioFormat.AUDIO_SAMPLE_FORMAT_U32LE;
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
        if(this._result == null) {
            this._result = this._client.v2t(this.sendAudio());
            this._result.subscribe((e) => {
                console.log(e);
            }, (err) => console.error("FAILED", err), () => console.log("DONE"));
        }
    }

    sendAudio() {
        return function () {
            var chunk = this._buffer.shift();
            const events = new engine.Events({
                events: [new engine.Event({
                    audio: new engine.Event.Audio({
                        body: chunk,
                    })
                })]
            });
            return Promise.resolve(events);
        }
    }
}

module.exports = {
    AudioSender
};