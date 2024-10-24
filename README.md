StreamDevilHlsSdk HLS SDK for JavaScript
==================================

StreamDevilHlsSdk provides an intelligent peer-assisted streaming infrastructure on top of your existing CDN. It radically reduces your CDN bandwidth and allows you to serve the highest video quality at lower cost.

## Use with npm

### Install

```bash
npm install --save github:streamdevil/streamdevil-hls-sdk#2.5.2
```

### Usage in code

```javascript
import {StreamDevilHlsSdk} from 'streamdevil-hls-sdk';

const videoSrcUrl = 'https://fcc3ddae59ed.us-west-2.playback.live-video.net/api/video/v1/us-west-2.893648527354.channel.DmumNckWFTqz.m3u8';
const videoElement = document.getElementById('video');

const streamDevil = new StreamDevilHlsSdk();
const hls = streamDevil.getNewHlsInstance();
hls.loadSource(videoSrcUrl);
hls.attachMedia(videoElement);
``` 

## Integration Examples

- [Native HTML5 player](https://streamdevil.github.io/streamdevil-hls-sdk/examples/native-html5-player-simple.html) ([source](https://github.com/streamdevil/streamdevil-hls-sdk/blob/master/examples/native-html5-player-simple.html))
- [Native HTML5 player - with resolution dropdown](https://streamdevil.github.io/streamdevil-hls-sdk/examples/native-html5-player-with-res-select.html) ([source](https://github.com/streamdevil/streamdevil-hls-sdk/blob/master/examples/native-html5-player-with-res-select.html))
- [Native HTML5 player - with debug info](https://streamdevil.github.io/streamdevil-hls-sdk/examples/native-html5-player-debug.html) ([source](https://github.com/streamdevil/streamdevil-hls-sdk/blob/master/examples/native-html5-player-debug.html))

## StreamDevilHlsSdk Dashboard

Coming soon.
