StreamDevil HLS SDK for JavaScript
==============================

StreamDevil provides an intelligent peer-assisted streaming infrastructure on top of your existing CDN. It radically reduces your CDN bandwidth and allows you to serve the highest video quality at lower cost.

## Basic Integration Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>P2P - Native HTML5 Player</title>
    <script src="../streamdevil-hls-sdk.js"></script>
</head>
<body>
<video muted autoplay controls width="600" id="video"></video>
<script>
    var videoSrcUrl = 'https://wowza.peer5.com/live/smil:bbb_abr.smil/playlist.m3u8'
    var streamDevil = new StreamDevil({
        apiKey: 'stream-devil-demo-api-key'
    });

    function init() {
        var videoElment = document.getElementById('video');
        if (!streamDevil.isSupported()){
            // fallback to simple player
            console.log('StreamDevil not supported...');
            return;
        }
        var hls = streamDevil.getNewHlsInstance();
        hls.loadSource(videoSrcUrl);
        hls.attachMedia(videoElment);
    }

    init()
</script>
</body>
</html>
```

## Integration Examples

- [Native HTML5 player](https://streamdevil.github.io/streamdevil-hls-sdk/examples/native-html5-player-simple.html) ([source](https://github.com/streamdevil/streamdevil-hls-sdk/blob/master/examples/native-html5-player-simple.html))
- [Native HTML5 player - with resolution dropdown](https://streamdevil.github.io/streamdevil-hls-sdk/examples/native-html5-player-with-res-select.html) ([source](https://github.com/streamdevil/streamdevil-hls-sdk/blob/master/examples/native-html5-player-with-res-select.html))
- [Native HTML5 player - with debug info](https://streamdevil.github.io/streamdevil-hls-sdk/examples/native-html5-player-debug.html) ([source](https://github.com/streamdevil/streamdevil-hls-sdk/blob/master/examples/native-html5-player-debug.html))

## StreamDevil Dashboard

Coming soon.