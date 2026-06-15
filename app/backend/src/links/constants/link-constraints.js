"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkConstraints = void 0;
exports.LinkConstraints = {
    AMOUNT: {
        MIN: 0.0000001,
        MAX: 1000000,
        DECIMALS: 7,
    },
    MEMO: {
        MAX_LENGTH: 28,
        ALLOWED_TYPES: ['text', 'id', 'hash', 'return'],
        DEFAULT_TYPE: 'text',
    },
    ASSET: {
        WHITELIST: [
            'XLM',
            'USDC',
            'AQUA',
            'yXLM',
        ],
        DEFAULT: 'XLM',
    },
    LINK: {
        DEFAULT_EXPIRATION_DAYS: 30,
        MAX_EXPIRATION_DAYS: 365,
    },
};
