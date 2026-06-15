"use strict";
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
Object.defineProperty(exports, "__esModule", { value: true });
exports.throttlerModuleProfiles = exports.throttlerConfig = exports.THROTTLER_SUSTAINED_NAME = exports.THROTTLER_BURST_NAME = exports.RATE_LIMIT_GROUP_METADATA_KEY = void 0;
exports.RATE_LIMIT_GROUP_METADATA_KEY = "rate_limit_group";
exports.THROTTLER_BURST_NAME = "burst";
exports.THROTTLER_SUSTAINED_NAME = "sustained";
var DEFAULT_KEY_ORDER = ["user_id", "api_key", "ip"];
function parseKeyOrder(raw) {
    if (!raw)
        return DEFAULT_KEY_ORDER;
    var tokens = raw
        .split(",")
        .map(function (t) { return t.trim().toLowerCase(); })
        .filter(Boolean);
    var ordered = tokens.filter(function (value) {
        return value === "user_id" || value === "api_key" || value === "ip";
    });
    return ordered.length > 0 ? ordered : DEFAULT_KEY_ORDER;
}
exports.throttlerConfig = {
    groups: {
        public: {
            burst: {
                limit: Number((_a = process.env["RATE_LIMIT_PUBLIC_BURST_LIMIT"]) !== null && _a !== void 0 ? _a : 10),
                ttlMs: Number((_b = process.env["RATE_LIMIT_PUBLIC_BURST_TTL_MS"]) !== null && _b !== void 0 ? _b : 10000),
            },
            sustained: {
                limit: Number((_c = process.env["RATE_LIMIT_PUBLIC_SUSTAINED_LIMIT"]) !== null && _c !== void 0 ? _c : 20),
                ttlMs: Number((_d = process.env["RATE_LIMIT_PUBLIC_SUSTAINED_TTL_MS"]) !== null && _d !== void 0 ? _d : 60000),
            },
        },
        authenticated: {
            burst: {
                limit: Number((_e = process.env["RATE_LIMIT_AUTHENTICATED_BURST_LIMIT"]) !== null && _e !== void 0 ? _e : 40),
                ttlMs: Number((_f = process.env["RATE_LIMIT_AUTHENTICATED_BURST_TTL_MS"]) !== null && _f !== void 0 ? _f : 10000),
            },
            sustained: {
                limit: Number((_g = process.env["RATE_LIMIT_AUTHENTICATED_SUSTAINED_LIMIT"]) !== null && _g !== void 0 ? _g : 120),
                ttlMs: Number((_h = process.env["RATE_LIMIT_AUTHENTICATED_SUSTAINED_TTL_MS"]) !== null && _h !== void 0 ? _h : 60000),
            },
        },
        webhooks: {
            burst: {
                limit: Number((_j = process.env["RATE_LIMIT_WEBHOOKS_BURST_LIMIT"]) !== null && _j !== void 0 ? _j : 20),
                ttlMs: Number((_k = process.env["RATE_LIMIT_WEBHOOKS_BURST_TTL_MS"]) !== null && _k !== void 0 ? _k : 10000),
            },
            sustained: {
                limit: Number((_l = process.env["RATE_LIMIT_WEBHOOKS_SUSTAINED_LIMIT"]) !== null && _l !== void 0 ? _l : 60),
                ttlMs: Number((_m = process.env["RATE_LIMIT_WEBHOOKS_SUSTAINED_TTL_MS"]) !== null && _m !== void 0 ? _m : 60000),
            },
        },
    },
    keyOrder: parseKeyOrder(process.env["RATE_LIMIT_KEY_ORDER"]),
};
exports.throttlerModuleProfiles = [
    {
        name: exports.THROTTLER_BURST_NAME,
        ttl: exports.throttlerConfig.groups.public.burst.ttlMs,
        limit: exports.throttlerConfig.groups.public.burst.limit,
    },
    {
        name: exports.THROTTLER_SUSTAINED_NAME,
        ttl: exports.throttlerConfig.groups.public.sustained.ttlMs,
        limit: exports.throttlerConfig.groups.public.sustained.limit,
    },
];
