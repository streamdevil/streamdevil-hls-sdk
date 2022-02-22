StreamDevil SDK for JavaScript
==============================

StreamDevil provides an intelligent peer-assisted streaming infrastructure on top of your existing CDN. It radically reduces your CDN bandwidth and allows you to serve the highest video quality at lower cost.
You can find a demo [here](https://streamdevil.io/vod-demo/).

## Basic Integration Example

```html
<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>StreamDevil Basic Integration</title>

    <!-- StreamDevil SDK include -->
    <script type="text/javascript" src="https://cdn.jsdelivr.net/gh/streamdevil/streamdevil-sdk-js@1.3.5/streamdevil-sdk.js"></script>
</head>
<body>
    <video id="player" width="600" height="300" class="video-js vjs-default-skin" controls muted></video>
    
    <script type="application/javascript">
        // StreamDevil SDK initialization
        var streamDevil = new StreamDevilSDK({
            apiKey: 'streamdevil-demo-key', // required
            debug: true // for development purposes only
        });
    
    
        var player = document.getElementById('player');
        var videoURL = 'https://streamdevil.github.io/examples/file_example_MP4_640_3MG.mp4';
    
        // StreamDevil set video source
        streamDevil.setSrc({
            target: player,
            src: videoURL
        }, function (error) {
            if (error) {
                // fallback to plain source
                console.log(error);
                player.src = videoURL;
                player.play();
                return;
            }
            player.play();
        });
    </script>
</body>
</html>
```

## Integration Examples

- [VideoJs plugin](https://streamdevil.github.io/streamdevil-sdk-js/examples/videojs-player.html) ([source](https://github.com/streamdevil/streamdevil-sdk-js/blob/master/examples/videojs-player.html))
- [Native HTML5 player](https://streamdevil.github.io/streamdevil-sdk-js/examples/html5-player.html) ([source](https://github.com/streamdevil/streamdevil-sdk-js/blob/master/examples/html5-player.html))

## StreamDevil Dashboard

Coming soon.