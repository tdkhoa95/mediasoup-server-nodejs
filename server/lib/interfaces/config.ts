
export interface HttpsConfig {
    listenIp: string;
    listenPort: number;
    tls: {
        cert: string;
        key: string;
    };
}

export interface WorkerSettings {
    dtlsCertificateFile: string;
    dtlsPrivateKeyFile: string;
    logLevel: string;
    logTags: string[];
    rtcMinPort: number;
    rtcMaxPort: number;
}

export interface MediaCodec {
    kind: string;
    mimeType: string;
    clockRate: number;
    channels?: number;
    parameters?: { [key: string]: any };
}

export interface RouterOptions {
    mediaCodecs: MediaCodec[];
}

export interface ListenInfo {
    protocol: string;
    ip: string;
    announcedIp: string | undefined;
    port: number;
}

export interface WebRtcServerOptions {
    listenInfos: ListenInfo[];
}

export interface WebRtcTransportOptions {
    listenIps: ListenInfo[];
    initialAvailableOutgoingBitrate: number;
    minimumAvailableOutgoingBitrate: number;
    maxSctpMessageSize: number;
    maxIncomingBitrate: number;
}

export interface PlainTransportOptions {
    listenIp: ListenInfo;
    maxSctpMessageSize: number;
}