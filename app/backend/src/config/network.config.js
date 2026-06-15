"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolveNetworkSnapshot = resolveNetworkSnapshot;
var StellarSdk = require("@stellar/stellar-sdk");
var NETWORK_ALIASES = ['NETWORK', 'STELLAR_NETWORK'];
var DEFAULT_NETWORK = 'testnet';
var DEFAULT_ENDPOINTS = {
    testnet: {
        passphrase: StellarSdk.Networks.TESTNET,
        horizonUrl: 'https://horizon-testnet.stellar.org',
        sorobanRpcUrl: 'https://soroban-testnet.stellar.org',
        sorobanRpcUrls: ['https://soroban-testnet.stellar.org'],
        explorerUrl: 'https://stellar.expert/explorer/testnet',
    },
    mainnet: {
        passphrase: StellarSdk.Networks.PUBLIC,
        horizonUrl: 'https://horizon.stellar.org',
        sorobanRpcUrl: 'https://soroban-rpc.mainnet.stellar.gateway.fm',
        sorobanRpcUrls: ['https://soroban-rpc.mainnet.stellar.gateway.fm'],
        explorerUrl: 'https://stellar.expert/explorer/public',
    },
};
function normalizeNetworkValue(value) {
    if (!value)
        return undefined;
    var normalized = value.trim().toLowerCase();
    if (normalized === 'testnet' || normalized === 'mainnet')
        return normalized;
    throw new Error("Invalid network value \"".concat(value, "\". Use \"testnet\" or \"mainnet\"."));
}
function isValidHttpUrl(value) {
    try {
        var parsed = new URL(value);
        return parsed.protocol === 'http:' || parsed.protocol === 'https:';
    }
    catch (_a) {
        return false;
    }
}
function resolveNetworkSnapshot(env) {
    var _a, _b, _c, _d, _e, _f;
    if (env === void 0) { env = process.env; }
    var aliasValues = NETWORK_ALIASES.map(function (key) { return ({
        key: key,
        value: normalizeNetworkValue(env[key]),
    }); }).filter(function (entry) { return entry.value !== undefined; });
    var unique = new Set(aliasValues.map(function (entry) { return entry.value; }));
    if (unique.size > 1) {
        throw new Error('NETWORK and STELLAR_NETWORK are both set but conflict. Use a single network value.');
    }
    var network = (_b = (_a = aliasValues[0]) === null || _a === void 0 ? void 0 : _a.value) !== null && _b !== void 0 ? _b : DEFAULT_NETWORK;
    var defaults = DEFAULT_ENDPOINTS[network];
    var horizonUrl = ((_c = env.HORIZON_URL) === null || _c === void 0 ? void 0 : _c.trim()) || defaults.horizonUrl;
    var sorobanRpcUrl = ((_d = env.SOROBAN_RPC_URL) === null || _d === void 0 ? void 0 : _d.trim()) || defaults.sorobanRpcUrl;
    var sorobanRpcUrls = __spreadArray([
        sorobanRpcUrl
    ], ((_e = env.SOROBAN_RPC_URLS) !== null && _e !== void 0 ? _e : '')
        .split(',')
        .map(function (value) { return value.trim(); })
        .filter(Boolean), true);
    var explorerUrl = ((_f = env.STELLAR_EXPLORER_URL) === null || _f === void 0 ? void 0 : _f.trim()) || defaults.explorerUrl;
    if (!isValidHttpUrl(horizonUrl)) {
        throw new Error("Invalid HORIZON_URL \"".concat(horizonUrl, "\". Expected http/https URL."));
    }
    if (!isValidHttpUrl(sorobanRpcUrl)) {
        throw new Error("Invalid SOROBAN_RPC_URL \"".concat(sorobanRpcUrl, "\". Expected http/https URL."));
    }
    if (!isValidHttpUrl(explorerUrl)) {
        throw new Error("Invalid STELLAR_EXPLORER_URL \"".concat(explorerUrl, "\". Expected http/https URL."));
    }
    return {
        network: network,
        passphrase: defaults.passphrase,
        horizonUrl: horizonUrl,
        sorobanRpcUrl: sorobanRpcUrl,
        sorobanRpcUrls: Array.from(new Set(sorobanRpcUrls)),
        explorerUrl: explorerUrl,
    };
}
