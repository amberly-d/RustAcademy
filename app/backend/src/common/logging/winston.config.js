"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.winstonConfig = void 0;
var winston = require("winston");
/**
 * Structured logging format for Winston.
 *
 * All log entries include:
 *   - timestamp (ISO 8601)
 *   - level (error, warn, info, debug)
 *   - message
 *   - service name
 *   - any additional metadata
 *
 * File transports use JSON format for machine parsing.
 * Console transport uses colourised simple format for dev readability.
 */
var structuredFormat = winston.format.combine(winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss.SSS' }), winston.format.errors({ stack: true }), winston.format.json());
var consoleFormat = winston.format.combine(winston.format.timestamp({ format: 'HH:mm:ss.SSS' }), winston.format.colorize(), winston.format.printf(function (_a) {
    var timestamp = _a.timestamp, level = _a.level, message = _a.message, context = _a.context, meta = __rest(_a, ["timestamp", "level", "message", "context"]);
    var ctx = context ? "[".concat(context, "]") : '';
    var extra = Object.keys(meta).length
        ? " ".concat(JSON.stringify(meta))
        : '';
    return "".concat(timestamp, " ").concat(level, " ").concat(ctx, " ").concat(message).concat(extra);
}));
exports.winstonConfig = {
    transports: [
        // Console: human-friendly for development
        new winston.transports.Console({
            format: consoleFormat,
        }),
        // Error log: only errors, structured JSON
        new winston.transports.File({
            filename: 'logs/error.log',
            level: 'error',
            format: structuredFormat,
            maxsize: 10 * 1024 * 1024, // 10 MB
            maxFiles: 5,
        }),
        // Combined log: all levels, structured JSON
        new winston.transports.File({
            filename: 'logs/combined.log',
            format: structuredFormat,
            maxsize: 10 * 1024 * 1024, // 10 MB
            maxFiles: 5,
        }),
    ],
};
