import Hls from "hls.js";
import { HlsJsP2PEngine } from "p2p-media-loader-hlsjs";


class StreamDevilHlsSdk {
    isHLSSupported = false;
    events = {
        PieceBytesDownloaded: "onChunkDownloaded",
        PieceBytesUploaded: "onChunkUploaded",
        PeerConnect: "onPeerConnect",
        PeerClose: "onPeerClose",
    };

    engine = {
        on: (event, callback) => {
            this.addListener(event, callback);
        },
        off: (event, callback) => {
            console.log('there is no off method - anyway');
        },
    };

    onBytesDownloaded = () => {};
    onBytesUploaded = () => {};
    onPeerConnect = () => {};
    onPeerClose = () => {};

    addListener(event, callback) {
        //console.log(event, callback);
        switch (event) {
            case this.events.PieceBytesDownloaded:
                this.onBytesDownloaded = callback;
                break;
            case this.events.PieceBytesUploaded:
                this.onBytesUploaded = callback;
                break;
            case this.events.PeerConnect:
                this.onPeerConnect = callback;
                break;
            case this.events.PeerClose:
                this.onPeerClose = callback;
                break;
            default:
                console.log("Event not supported: ", event);
        }
    }

    constructor(config) {
        this.config = config || {};
        this.isHLSSupported = Hls.isSupported();
    }


    isSupported() {
        return this.isHLSSupported;
    }

    getNewHlsInstance(config) {
        const cnf = {
            p2p: {
                core: {
                    //swarmId: "Optional custom swarm ID for stream",
                    announceTrackers: [
                        "wss://ts1.srv2.nomo.hu"
                    ],
                },
                onHlsJsCreated(hls) {
                    // console.log('Hls.js instance created', hls);
                },
            },
            ...config
        };
        const HlsWithP2P = HlsJsP2PEngine.injectMixin(Hls);
        const hls = new HlsWithP2P(cnf);
        hls.p2pEngine.addEventListener("onPeerConnect", (peer) => {this.onPeerConnect({id: peer.peerId, ...peer})});
        hls.p2pEngine.addEventListener("onChunkDownloaded", (size, method) => {this.onBytesDownloaded(method, size)});
        hls.p2pEngine.addEventListener("onChunkUploaded", (size) =>  {this.onBytesUploaded("p2p", size)});
        return hls;
    }


}

export {
    StreamDevilHlsSdk
}
