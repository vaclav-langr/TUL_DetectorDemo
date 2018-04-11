# NTX node.js library + examples 

## Install

* `git clone https://gitlab.com/nanotrix/ntx-js`
* `cd ntx-js`
* `npm install`
* `npm run build`

## Requirements

* Node.js 6

##  Run examples

* Set `NTX_TASK_TOKEN` env variable (see [NanoTrix docs](https://gitlab.com/nanotrix/docs) - section security/authentication for how to obtain the token)    
* Run file example `node dist/examples/file.js files/test.wav`
* Run websocket example `node dist/examples/websocket.js files/test.wav`


## Testing without this library

File API can be used directly without this library
```
curl --header "ntx-token: $NTX_TASK_TOKEN" -F file=@basetext.mp3 -F lexicon=@userlex.json -F channel=right https://mycluster.nanogrid.cloud/api/v1/file/v2t
```

Required arguments

* `file`

Optional arguments

* `lexicon`
* `channel` one of `downmix (default), right, left`


Response is one json object per line (EngineStream structure from proto/engine.proto) 

## FAQ

* Is multi-channel audio supported?
    
    ```Yes, the audio is always down-mixed to one channel before recognition```

* Is it possible to select audio channel in multi-channel audio?    
    
    ```Yes, you can select left, right channel from stereo audio or downmix it to mono```

* [How to split multi-channel audio](https://superuser.com/questions/685910/ffmpeg-stereo-channels-into-two-mono-channels) 

    * ffmpeg `-map_channel`
    
    ```ffmpeg -i stereo.wav -map_channel 0.0.0 left.wav -map_channel 0.0.1 right.wav```
    
    * fmpeg `pan` audio filter
    
    ```
       ffmpeg -i stereo.wav -filter_complex 
       "[0:0]pan=1|c0=c0[left];
        [0:0]pan=1|c0=c1[right]" \
       -map "[left]" left.wav -map "[right]" right.wav```
