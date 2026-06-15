"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RATE_LIMITS = void 0;
exports.RATE_LIMITS = {
    PUBLIC: {
        ttl: 60,
        limit: 20,
    },
    API_KEY: {
        ttl: 60,
        limit: 120,
    },
};
