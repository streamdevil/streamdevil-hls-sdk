StreamDevilHlsSdk HLS SDK for JavaScript
==================================

StreamDevilHlsSdk provides an intelligent peer-assisted streaming infrastructure on top of your existing CDN. It radically reduces your CDN bandwidth and allows you to serve the highest video quality at lower cost.

## Basic Integration Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>P2P - Native HTML5 Player</title>
    <script type="importmap">
        {
          "imports": {
            "hls.js": "https://cdn.jsdelivr.net/npm/hls.js@1.5.17/dist/hls.mjs",
            "p2p-media-loader-core": "https://cdn.jsdelivr.net/npm/p2p-media-loader-core@2.0.1/dist/p2p-media-loader-core.es.min.js",
            "p2p-media-loader-hlsjs": "https://cdn.jsdelivr.net/npm/p2p-media-loader-hlsjs@2.0.1/dist/p2p-media-loader-hlsjs.es.min.js",
            "streamdevil-hls-sdk": "../stream-devil-hls-sdk.js"
          }
        }
    </script>
    <script type="module">
        import {StreamDevilHlsSdk} from "stream-devil-hls-sdk";

        const videoSrcUrl = 'https://fcc3ddae59ed.us-west-2.playback.live-video.net/api/video/v1/us-west-2.893648527354.channel.DmumNckWFTqz.m3u8';
        const videoElement = document.getElementById('video');
        const streamDevil = new StreamDevilHlsSdk({
            apiKey: 'stream-devil-demo-api-key'
        });

        function init() {
            if (!streamDevil.isSupported()) {
                // fallback to simple player
                console.log('StreamDevilHlsSdk not supported...');
                return;
            }
            const hls = streamDevil.getNewHlsInstance();
            hls.loadSource(videoSrcUrl);
            hls.attachMedia(videoElement);
        }

        init()
    </script>
</head>
<body>
<video muted autoplay controls width="600" id="video"></video>
</body>
</html>
```

## Integration Examples

- [Native HTML5 player](https://streamdevil.github.io/streamdevil-hls-sdk/examples/native-html5-player-simple.html) ([source](https://github.com/streamdevil/streamdevil-hls-sdk/blob/master/examples/native-html5-player-simple.html))
- [Native HTML5 player - with resolution dropdown](https://streamdevil.github.io/streamdevil-hls-sdk/examples/native-html5-player-with-res-select.html) ([source](https://github.com/streamdevil/streamdevil-hls-sdk/blob/master/examples/native-html5-player-with-res-select.html))
- [Native HTML5 player - with debug info](https://streamdevil.github.io/streamdevil-hls-sdk/examples/native-html5-player-debug.html) ([source](https://github.com/streamdevil/streamdevil-hls-sdk/blob/master/examples/native-html5-player-debug.html))

## StreamDevilHlsSdk Dashboard

Coming soon.
