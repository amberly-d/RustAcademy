"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VERIFIED_STELLAR_ASSETS = void 0;
exports.findVerifiedAsset = findVerifiedAsset;
exports.VERIFIED_STELLAR_ASSETS = [
    {
        code: 'XLM',
        type: 'native',
        issuer: null,
        verified: true,
        decimals: 7,
        branding: {
            name: 'Stellar Lumens',
            description: 'The native currency of the Stellar network',
            icon: 'https://assets.stellar.org/images/logos/xlm-icon.svg',
            logo: 'https://assets.stellar.org/images/logos/xlm-logo.svg',
        },
    },
    {
        code: 'USDC',
        type: 'credit_alphanum4',
        issuer: 'GA5ZSEJYB37JRC5AVCIA5MOP4RHTM335X2KGX3IHOJAPP5RE34K4KZVN',
        verified: true,
        decimals: 7,
        branding: {
            name: 'USD Coin',
            description: 'USDC is a fully collateralized US dollar stablecoin powered by Circle',
            icon: 'https://www.circle.com/usdc-icon',
            logo: 'https://www.circle.com/usdc-logo',
        },
    },
    {
        code: 'AQUA',
        type: 'credit_alphanum4',
        issuer: 'GBNZILSTVQZ4R7IKQDGHYGY2QXL5QOFJYQMXPKWRRM5PAV7Y4M67AQUA',
        verified: true,
        decimals: 7,
        branding: {
            name: 'Aqua',
            description: 'Aqua is a decentralized rewards token for the Stellar ecosystem',
        },
    },
    {
        code: 'yXLM',
        type: 'credit_alphanum4',
        issuer: 'GARDNV3Q7YGT4AKSDF25LT32YSCCW4EV22Y2TV3I2PU2MMXJTEDL5T55',
        verified: true,
        decimals: 7,
        branding: {
            name: 'yXLM',
            description: 'Yield-generating XLM by Ultra Stellar',
        },
    },
];
function findVerifiedAsset(code) {
    var t = code.trim().toLowerCase();
    return exports.VERIFIED_STELLAR_ASSETS.find(function (a) { return a.code.toLowerCase() === t; });
}
