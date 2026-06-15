"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.stellarConfig = exports.HORIZON_BASE_URL = exports.NETWORK = exports.UnsupportedAssetError = exports.InvalidNetworkError = exports.HORIZON_BASE_URLS = exports.SUPPORTED_ASSETS = exports.USDC_ISSUER = exports.DEFAULT_NETWORK = exports.NETWORK_ENV_KEY = void 0;
exports.normalizeAssetCode = normalizeAssetCode;
exports.normalizeAsset = normalizeAsset;
exports.isSupportedAsset = isSupportedAsset;
exports.assertSupportedAsset = assertSupportedAsset;
exports.resolveNetwork = resolveNetwork;
exports.syncNetworkFromEnv = syncNetworkFromEnv;
var config_1 = require("@nestjs/config");
var network_config_1 = require("./network.config");
exports.NETWORK_ENV_KEY = 'STELLAR_NETWORK';
exports.DEFAULT_NETWORK = 'testnet';
exports.USDC_ISSUER = 'GA5ZSEJYB37JRC5AVCIA5MOP4RHTM335X2K34P4D5NXJ6Z4GJ5B7G';
exports.SUPPORTED_ASSETS = [
    {
        type: 'native',
        code: 'XLM',
    },
    {
        type: 'credit_alphanum4',
        code: 'USDC',
        issuer: exports.USDC_ISSUER,
    },
];
exports.HORIZON_BASE_URLS = {
    testnet: 'https://horizon-testnet.stellar.org',
    mainnet: 'https://horizon.stellar.org',
};
var InvalidNetworkError = /** @class */ (function (_super) {
    __extends(InvalidNetworkError, _super);
    function InvalidNetworkError(value) {
        var _this = _super.call(this, "Invalid ".concat(exports.NETWORK_ENV_KEY, " value \"").concat(value, "\". Use \"testnet\" or \"mainnet\".")) || this;
        _this.name = 'InvalidNetworkError';
        _this.value = value;
        return _this;
    }
    return InvalidNetworkError;
}(Error));
exports.InvalidNetworkError = InvalidNetworkError;
var UnsupportedAssetError = /** @class */ (function (_super) {
    __extends(UnsupportedAssetError, _super);
    function UnsupportedAssetError(asset) {
        var _this = this;
        var issuerSuffix = asset.issuer ? ":".concat(asset.issuer) : '';
        _this = _super.call(this, "Unsupported asset \"".concat(asset.code).concat(issuerSuffix, "\".")) || this;
        _this.name = 'UnsupportedAssetError';
        _this.asset = asset;
        return _this;
    }
    return UnsupportedAssetError;
}(Error));
exports.UnsupportedAssetError = UnsupportedAssetError;
function normalizeAssetCode(code) {
    return code.trim().toUpperCase();
}
function normalizeAsset(input) {
    var code = normalizeAssetCode(typeof input.code === 'string' ? input.code : '');
    var isNative = code === 'XLM' || input.type === 'native';
    var type = isNative
        ? 'native'
        : code.length <= 4
            ? 'credit_alphanum4'
            : 'credit_alphanum12';
    var issuer = type === 'native' || typeof input.issuer !== 'string'
        ? undefined
        : input.issuer;
    return {
        type: type,
        code: code,
        issuer: issuer,
    };
}
function isSupportedAsset(input) {
    var normalized = normalizeAsset(input);
    if (!normalized.code) {
        return false;
    }
    if (normalized.type !== 'native' && !normalized.issuer) {
        return false;
    }
    return exports.SUPPORTED_ASSETS.some(function (asset) {
        if (asset.type === 'native') {
            return normalized.type === 'native' && asset.code === normalized.code;
        }
        return (normalized.type !== 'native' &&
            asset.type === normalized.type &&
            asset.code === normalized.code &&
            asset.issuer === normalized.issuer);
    });
}
function assertSupportedAsset(input) {
    var normalized = normalizeAsset(input);
    if (!isSupportedAsset(normalized)) {
        throw new UnsupportedAssetError(normalized);
    }
    return normalized;
}
function resolveNetwork(value) {
    if (value === void 0) { value = process.env[exports.NETWORK_ENV_KEY]; }
    if (!value) {
        return exports.DEFAULT_NETWORK;
    }
    var normalized = value.trim().toLowerCase();
    if (normalized === 'testnet' || normalized === 'mainnet') {
        return normalized;
    }
    throw new InvalidNetworkError(value);
}
exports.NETWORK = exports.DEFAULT_NETWORK;
exports.HORIZON_BASE_URL = exports.HORIZON_BASE_URLS[exports.DEFAULT_NETWORK];
function syncNetworkFromEnv(value) {
    if (value === void 0) { value = process.env[exports.NETWORK_ENV_KEY]; }
    var network = resolveNetwork(value);
    exports.NETWORK = network;
    exports.HORIZON_BASE_URL = exports.HORIZON_BASE_URLS[network];
    return network;
}
exports.stellarConfig = (0, config_1.registerAs)('stellar', function () {
    var snapshot = (0, network_config_1.resolveNetworkSnapshot)();
    var network = syncNetworkFromEnv(snapshot.network);
    return {
        network: network,
        horizonBaseUrl: snapshot.horizonUrl,
        sorobanRpcUrl: snapshot.sorobanRpcUrl,
        sorobanRpcUrls: snapshot.sorobanRpcUrls,
        explorerUrl: snapshot.explorerUrl,
        networkPassphrase: snapshot.passphrase,
        supportedAssets: exports.SUPPORTED_ASSETS,
    };
});
