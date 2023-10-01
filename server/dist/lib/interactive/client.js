"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const net = __importStar(require("net"));
const os = __importStar(require("os"));
const path = __importStar(require("path"));
const SOCKET_PATH_UNIX = '/tmp/mediasoup-demo.sock';
const SOCKET_PATH_WIN = path.join('\\\\?\\pipe', process.cwd(), 'mediasoup-demo');
const SOCKET_PATH = os.platform() === 'win32' ? SOCKET_PATH_WIN : SOCKET_PATH_UNIX;
async function default_1() {
    const socket = net.connect(SOCKET_PATH);
    process.stdin.pipe(socket);
    socket.pipe(process.stdout);
    socket.on('connect', () => process.stdin.setRawMode(true));
    socket.on('close', () => process.exit(0));
    socket.on('exit', () => socket.end());
}
exports.default = default_1;
//# sourceMappingURL=client.js.map