"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clone = void 0;
/**
 * Clones the given data.
 */
function clone(data, defaultValue) {
    if (typeof data === 'undefined') {
        return defaultValue;
    }
    return JSON.parse(JSON.stringify(data));
}
exports.clone = clone;
//# sourceMappingURL=utils.js.map