"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationRateLimiter = void 0;
/**
 * Simple in-memory sliding-window rate limiter.
 *
 * Limits notification dispatches to `maxPerWindow` per `windowMs`
 * per `(publicKey, channel)` key.  This runs in-process; for a
 * multi-instance deployment, swap the Map for a Redis ZSET.
 */
var NotificationRateLimiter = /** @class */ (function () {
    function NotificationRateLimiter(
    /** Maximum notifications allowed within the window. */
    maxPerWindow, 
    /** Window duration in milliseconds (default 1 hour). */
    windowMs) {
        if (maxPerWindow === void 0) { maxPerWindow = 10; }
        if (windowMs === void 0) { windowMs = 60 * 60 * 1000; }
        this.maxPerWindow = maxPerWindow;
        this.windowMs = windowMs;
        this.windows = new Map();
    }
    /**
     * Returns true if the notification should be allowed, false if rate-limited.
     * Calling this method is a side-effect: it records the attempt if allowed.
     */
    NotificationRateLimiter.prototype.allow = function (publicKey, channel) {
        var _a;
        var key = "".concat(publicKey, ":").concat(channel);
        var now = Date.now();
        var cutoff = now - this.windowMs;
        var timestamps = ((_a = this.windows.get(key)) !== null && _a !== void 0 ? _a : []).filter(function (t) { return t > cutoff; });
        if (timestamps.length >= this.maxPerWindow) {
            return false;
        }
        timestamps.push(now);
        this.windows.set(key, timestamps);
        return true;
    };
    /** For testing: clear all state. */
    NotificationRateLimiter.prototype.reset = function () {
        this.windows.clear();
    };
    return NotificationRateLimiter;
}());
exports.NotificationRateLimiter = NotificationRateLimiter;
