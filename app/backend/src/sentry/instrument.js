"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Sentry instrumentation file.
 * This file MUST be imported before any other modules in main.ts
 * to ensure Sentry can properly hook into Node.js internals.
 *
 * @see https://docs.sentry.io/platforms/javascript/guides/nestjs/
 */
var Sentry = require("@sentry/nestjs");
var profiling_node_1 = require("@sentry/profiling-node");
var SENTRY_DSN = process.env.SENTRY_DSN;
var SENTRY_ENVIRONMENT = process.env.SENTRY_ENVIRONMENT || process.env.NODE_ENV || "development";
var SENTRY_RELEASE = process.env.SENTRY_RELEASE || " RustAcademy-backend@0.1.0";
var SENTRY_TRACES_SAMPLE_RATE = parseFloat(process.env.SENTRY_TRACES_SAMPLE_RATE || "1.0");
var SENTRY_PROFILES_SAMPLE_RATE = parseFloat(process.env.SENTRY_PROFILES_SAMPLE_RATE || "1.0");
if (SENTRY_DSN) {
    Sentry.init({
        dsn: SENTRY_DSN,
        environment: SENTRY_ENVIRONMENT,
        release: SENTRY_RELEASE,
        integrations: [(0, profiling_node_1.nodeProfilingIntegration)()],
        // Performance monitoring: capture a percentage of transactions
        tracesSampleRate: SENTRY_TRACES_SAMPLE_RATE,
        // Profiling: capture performance profiles
        profilesSampleRate: SENTRY_PROFILES_SAMPLE_RATE,
        // Filter out sensitive data before sending to Sentry
        beforeSend: function (event) {
            var _a, _b;
            // Strip sensitive headers
            if ((_a = event.request) === null || _a === void 0 ? void 0 : _a.headers) {
                delete event.request.headers["authorization"];
                delete event.request.headers["x-api-key"];
                delete event.request.headers["cookie"];
            }
            // Strip sensitive data from request body
            if ((_b = event.request) === null || _b === void 0 ? void 0 : _b.data) {
                var data = typeof event.request.data === "string"
                    ? tryParseJson(event.request.data)
                    : event.request.data;
                if (data && typeof data === "object") {
                    var sanitized = __assign({}, data);
                    var sensitiveFields = [
                        "password",
                        "token",
                        "secret",
                        "secretKey",
                        "apiKey",
                        "api_key",
                        "stellar_secret_key",
                        "private_key",
                        "mnemonic",
                        "seed",
                    ];
                    for (var _i = 0, sensitiveFields_1 = sensitiveFields; _i < sensitiveFields_1.length; _i++) {
                        var field = sensitiveFields_1[_i];
                        if (field in sanitized) {
                            sanitized[field] = "[REDACTED]";
                        }
                    }
                    event.request.data = sanitized;
                }
            }
            return event;
        },
        // Filter breadcrumbs to avoid leaking sensitive info
        beforeBreadcrumb: function (breadcrumb) {
            var _a;
            // Remove sensitive query params from URL breadcrumbs
            if (breadcrumb.category === "http" && ((_a = breadcrumb.data) === null || _a === void 0 ? void 0 : _a.url)) {
                try {
                    var url = new URL(breadcrumb.data.url);
                    var sensitiveParams = ["token", "key", "secret", "password"];
                    for (var _i = 0, sensitiveParams_1 = sensitiveParams; _i < sensitiveParams_1.length; _i++) {
                        var param = sensitiveParams_1[_i];
                        if (url.searchParams.has(param)) {
                            url.searchParams.set(param, "[REDACTED]");
                        }
                    }
                    breadcrumb.data.url = url.toString();
                }
                catch (_b) {
                    // URL parsing failed — leave breadcrumb as-is
                }
            }
            return breadcrumb;
        },
        // Ignore common non-actionable errors
        ignoreErrors: [
            // Network errors from clients disconnecting
            "ECONNRESET",
            "EPIPE",
            "ECONNABORTED",
            // Rate limiting (expected behaviour)
            "ThrottlerException",
        ],
    });
}
else {
    // eslint-disable-next-line no-console
    console.warn("[Sentry] SENTRY_DSN not set — error monitoring is disabled. " +
        "Set SENTRY_DSN in your environment to enable Sentry.");
}
function tryParseJson(str) {
    try {
        return JSON.parse(str);
    }
    catch (_a) {
        return null;
    }
}
