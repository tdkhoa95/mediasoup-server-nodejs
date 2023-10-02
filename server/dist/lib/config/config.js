"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const os_1 = __importDefault(require("os"));
exports.default = {
    domain: process.env.DOMAIN || 'localhost',
    https: {
        listenIp: '0.0.0.0',
        listenPort: process.env.PROTOO_LISTEN_PORT || 4443,
        tls: {
            cert: process.env.HTTPS_CERT_FULLCHAIN || `dist/certs/fullchain.pem`,
            key: process.env.HTTPS_CERT_PRIVKEY || `dist/certs/privkey.pem`,
        },
    },
    mediasoup: {
        numWorkers: Object.keys(os_1.default.cpus()).length,
        workerSettings: {
            dtlsCertificateFile: process.env.WORKER_CERT_FULLCHAIN,
            dtlsPrivateKeyFile: process.env.WORKER_CERT_PRIVKEY,
            logLevel: 'warn',
            logTags: [
                'info',
                'ice',
                'dtls',
                'rtp',
                'srtp',
                'rtcp',
                'rtx',
                'bwe',
                'score',
                'simulcast',
                'svc',
                'sctp',
            ],
            rtcMinPort: process.env.MEDIASOUP_MIN_PORT || 40000,
            rtcMaxPort: process.env.MEDIASOUP_MAX_PORT || 49999,
        },
        routerOptions: {
            mediaCodecs: [
                {
                    kind: 'audio',
                    mimeType: 'audio/opus',
                    clockRate: 48000,
                    channels: 2,
                },
                {
                    kind: 'video',
                    mimeType: 'video/VP8',
                    clockRate: 90000,
                    parameters: {
                        'x-google-start-bitrate': 1000,
                    },
                },
                {
                    kind: 'video',
                    mimeType: 'video/VP9',
                    clockRate: 90000,
                    parameters: {
                        'profile-id': 2,
                        'x-google-start-bitrate': 1000,
                    },
                },
                {
                    kind: 'video',
                    mimeType: 'video/h264',
                    clockRate: 90000,
                    parameters: {
                        'packetization-mode': 1,
                        'profile-level-id': '4d0032',
                        'level-asymmetry-allowed': 1,
                        'x-google-start-bitrate': 1000,
                    },
                },
                {
                    kind: 'video',
                    mimeType: 'video/h264',
                    clockRate: 90000,
                    parameters: {
                        'packetization-mode': 1,
                        'profile-level-id': '42e01f',
                        'level-asymmetry-allowed': 1,
                        'x-google-start-bitrate': 1000,
                    },
                },
            ],
        },
        webRtcServerOptions: {
            listenInfos: [
                {
                    protocol: 'udp',
                    ip: process.env.MEDIASOUP_LISTEN_IP || '127.0.0.1',
                    announcedIp: process.env.MEDIASOUP_ANNOUNCED_IP,
                    port: 44444,
                },
                {
                    protocol: 'tcp',
                    ip: process.env.MEDIASOUP_LISTEN_IP || '127.0.0.1',
                    announcedIp: process.env.MEDIASOUP_ANNOUNCED_IP,
                    port: 44444,
                },
            ],
        },
        webRtcTransportOptions: {
            listenIps: [
                {
                    ip: process.env.MEDIASOUP_LISTEN_IP || '127.0.0.1',
                    announcedIp: process.env.MEDIASOUP_ANNOUNCED_IP,
                },
            ],
            initialAvailableOutgoingBitrate: 1000000,
            minimumAvailableOutgoingBitrate: 600000,
            maxSctpMessageSize: 262144,
            maxIncomingBitrate: 1500000,
        },
        plainTransportOptions: {
            listenIp: {
                ip: process.env.MEDIASOUP_LISTEN_IP || '127.0.0.1',
                announcedIp: process.env.MEDIASOUP_ANNOUNCED_IP,
            },
            maxSctpMessageSize: 262144,
        },
    },
};
//# sourceMappingURL=config.js.map