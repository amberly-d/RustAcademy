"use strict";
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkMetadataRequestDto = void 0;
var class_validator_1 = require("class-validator");
var class_transformer_1 = require("class-transformer");
var swagger_1 = require("@nestjs/swagger");
var validators_1 = require("../validators");
/**
 * DTO for link metadata request
 *
 * Validates payment link parameters according to Stellar network constraints.
 *
 * @example
 * ```json
 * {
 *   "amount": 50.5,
 *   "memo": "Payment for service",
 *   "memoType": "text",
 *   "asset": "XLM",
 *   "privacy": false,
 *   "expirationDays": 30
 * }
 * ```
 */
var LinkMetadataRequestDto = function () {
    var _a;
    var _amount_decorators;
    var _amount_initializers = [];
    var _amount_extraInitializers = [];
    var _memo_decorators;
    var _memo_initializers = [];
    var _memo_extraInitializers = [];
    var _memoType_decorators;
    var _memoType_initializers = [];
    var _memoType_extraInitializers = [];
    var _asset_decorators;
    var _asset_initializers = [];
    var _asset_extraInitializers = [];
    var _privacy_decorators;
    var _privacy_initializers = [];
    var _privacy_extraInitializers = [];
    var _expirationDays_decorators;
    var _expirationDays_initializers = [];
    var _expirationDays_extraInitializers = [];
    var _username_decorators;
    var _username_initializers = [];
    var _username_extraInitializers = [];
    var _destination_decorators;
    var _destination_initializers = [];
    var _destination_extraInitializers = [];
    var _referenceId_decorators;
    var _referenceId_initializers = [];
    var _referenceId_extraInitializers = [];
    var _acceptedAssets_decorators;
    var _acceptedAssets_initializers = [];
    var _acceptedAssets_extraInitializers = [];
    var _recipientViewPublicKeyPem_decorators;
    var _recipientViewPublicKeyPem_initializers = [];
    var _recipientViewPublicKeyPem_extraInitializers = [];
    return _a = /** @class */ (function () {
            function LinkMetadataRequestDto() {
                this.amount = __runInitializers(this, _amount_initializers, void 0);
                this.memo = (__runInitializers(this, _amount_extraInitializers), __runInitializers(this, _memo_initializers, void 0));
                this.memoType = (__runInitializers(this, _memo_extraInitializers), __runInitializers(this, _memoType_initializers, void 0));
                this.asset = (__runInitializers(this, _memoType_extraInitializers), __runInitializers(this, _asset_initializers, void 0));
                this.privacy = (__runInitializers(this, _asset_extraInitializers), __runInitializers(this, _privacy_initializers, void 0));
                this.expirationDays = (__runInitializers(this, _privacy_extraInitializers), __runInitializers(this, _expirationDays_initializers, void 0));
                this.username = (__runInitializers(this, _expirationDays_extraInitializers), __runInitializers(this, _username_initializers, void 0));
                this.destination = (__runInitializers(this, _username_extraInitializers), __runInitializers(this, _destination_initializers, void 0));
                this.referenceId = (__runInitializers(this, _destination_extraInitializers), __runInitializers(this, _referenceId_initializers, void 0));
                this.acceptedAssets = (__runInitializers(this, _referenceId_extraInitializers), __runInitializers(this, _acceptedAssets_initializers, void 0));
                this.recipientViewPublicKeyPem = (__runInitializers(this, _acceptedAssets_extraInitializers), __runInitializers(this, _recipientViewPublicKeyPem_initializers, void 0));
                __runInitializers(this, _recipientViewPublicKeyPem_extraInitializers);
            }
            return LinkMetadataRequestDto;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _amount_decorators = [(0, swagger_1.ApiProperty)({
                    description: 'Payment amount in specified asset',
                    example: 50.5,
                    minimum: validators_1.STELLAR_AMOUNT.MIN,
                    maximum: validators_1.STELLAR_AMOUNT.MAX,
                }), (0, class_validator_1.IsNumber)(), (0, validators_1.IsStellarAmount)({
                    message: "Amount must be between ".concat(validators_1.STELLAR_AMOUNT.MIN, " and ").concat(validators_1.STELLAR_AMOUNT.MAX),
                }), (0, class_transformer_1.Type)(function () { return Number; })];
            _memo_decorators = [(0, swagger_1.ApiPropertyOptional)({
                    description: 'Optional memo text (max 28 characters after sanitization)',
                    example: 'Payment for service',
                    maxLength: validators_1.STELLAR_MEMO.MAX_LENGTH,
                }), (0, class_validator_1.IsOptional)(), (0, class_validator_1.IsString)()];
            _memoType_decorators = [(0, swagger_1.ApiPropertyOptional)({
                    description: 'Memo type',
                    example: 'text',
                    enum: validators_1.STELLAR_MEMO.ALLOWED_TYPES,
                }), (0, class_validator_1.IsOptional)(), (0, class_validator_1.IsString)()];
            _asset_decorators = [(0, swagger_1.ApiPropertyOptional)({
                    description: 'Asset code (must be whitelisted: XLM, USDC, AQUA, yXLM)',
                    example: 'XLM',
                    enum: ['XLM', 'USDC', 'AQUA', 'yXLM'],
                }), (0, class_validator_1.IsOptional)(), (0, class_validator_1.IsString)(), (0, class_validator_1.Validate)(validators_1.IsStellarAsset, {
                    message: "Asset must be one of: ".concat(validators_1.STELLAR_ASSETS.join(', ')),
                })];
            _privacy_decorators = [(0, swagger_1.ApiPropertyOptional)({
                    description: 'Privacy flag',
                    example: false,
                }), (0, class_validator_1.IsOptional)(), (0, class_validator_1.IsBoolean)(), (0, class_transformer_1.Type)(function () { return Boolean; })];
            _expirationDays_decorators = [(0, swagger_1.ApiPropertyOptional)({
                    description: 'Expiration in days (1-365)',
                    example: 30,
                    minimum: 1,
                    maximum: 365,
                }), (0, class_validator_1.IsOptional)(), (0, class_validator_1.IsNumber)(), (0, class_validator_1.Min)(1), (0, class_validator_1.Max)(365), (0, class_transformer_1.Type)(function () { return Number; })];
            _username_decorators = [(0, swagger_1.ApiPropertyOptional)({
                    description: 'Username for the payment link (must follow username pattern)',
                    example: 'john_doe123',
                    pattern: '^[a-z0-9][a-z0-9_-]{2,30}[a-z0-9]$|^[a-z0-9]{1,32}$',
                }), (0, class_validator_1.IsOptional)(), (0, class_validator_1.IsString)(), (0, class_validator_1.Matches)(/^[a-z0-9][a-z0-9_-]{2,30}[a-z0-9]$|^[a-z0-9]{1,32}$/, {
                    message: 'Username must be 1-32 lowercase alphanumeric characters, may include hyphens and underscores, but cannot start or end with special characters',
                })];
            _destination_decorators = [(0, swagger_1.ApiPropertyOptional)({
                    description: 'Destination Stellar account public key',
                    example: 'GABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890',
                }), (0, class_validator_1.IsOptional)(), (0, class_validator_1.IsString)(), (0, class_validator_1.ValidateIf)(function (object) { return object.destination !== undefined; }), (0, class_validator_1.Matches)(/^G[ABCDEFGHIJKLMNOPQRSTUVWXYZ234567]{55}$/, {
                    message: 'Destination must be a valid Stellar public key (starts with G, 56 characters)',
                })];
            _referenceId_decorators = [(0, swagger_1.ApiPropertyOptional)({
                    description: 'Custom reference ID for tracking',
                    example: 'INV-12345',
                    maxLength: 64,
                }), (0, class_validator_1.IsOptional)(), (0, class_validator_1.IsString)(), (0, class_validator_1.Matches)(/^[a-zA-Z0-9_-]{1,64}$/, {
                    message: 'Reference ID must be 1-64 alphanumeric characters, hyphens, or underscores',
                })];
            _acceptedAssets_decorators = [(0, swagger_1.ApiPropertyOptional)({
                    description: 'Asset codes this link accepts for payment (enables multi-asset swap suggestions). Each must be a whitelisted asset.',
                    example: ['XLM', 'USDC'],
                    type: [String],
                    enum: ['XLM', 'USDC', 'AQUA', 'yXLM'],
                }), (0, class_validator_1.IsOptional)(), (0, class_validator_1.IsArray)(), (0, class_validator_1.ArrayMinSize)(1), (0, class_validator_1.IsString)({ each: true }), (0, class_validator_1.Validate)(validators_1.IsStellarAsset, { each: true })];
            _recipientViewPublicKeyPem_decorators = [(0, swagger_1.ApiPropertyOptional)({
                    description: 'Recipient view public key (PEM) used to encrypt recipient metadata for stealth privacy flows.',
                    example: '-----BEGIN PUBLIC KEY-----\\n...\\n-----END PUBLIC KEY-----',
                }), (0, class_validator_1.IsOptional)(), (0, class_validator_1.IsString)()];
            __esDecorate(null, null, _amount_decorators, { kind: "field", name: "amount", static: false, private: false, access: { has: function (obj) { return "amount" in obj; }, get: function (obj) { return obj.amount; }, set: function (obj, value) { obj.amount = value; } }, metadata: _metadata }, _amount_initializers, _amount_extraInitializers);
            __esDecorate(null, null, _memo_decorators, { kind: "field", name: "memo", static: false, private: false, access: { has: function (obj) { return "memo" in obj; }, get: function (obj) { return obj.memo; }, set: function (obj, value) { obj.memo = value; } }, metadata: _metadata }, _memo_initializers, _memo_extraInitializers);
            __esDecorate(null, null, _memoType_decorators, { kind: "field", name: "memoType", static: false, private: false, access: { has: function (obj) { return "memoType" in obj; }, get: function (obj) { return obj.memoType; }, set: function (obj, value) { obj.memoType = value; } }, metadata: _metadata }, _memoType_initializers, _memoType_extraInitializers);
            __esDecorate(null, null, _asset_decorators, { kind: "field", name: "asset", static: false, private: false, access: { has: function (obj) { return "asset" in obj; }, get: function (obj) { return obj.asset; }, set: function (obj, value) { obj.asset = value; } }, metadata: _metadata }, _asset_initializers, _asset_extraInitializers);
            __esDecorate(null, null, _privacy_decorators, { kind: "field", name: "privacy", static: false, private: false, access: { has: function (obj) { return "privacy" in obj; }, get: function (obj) { return obj.privacy; }, set: function (obj, value) { obj.privacy = value; } }, metadata: _metadata }, _privacy_initializers, _privacy_extraInitializers);
            __esDecorate(null, null, _expirationDays_decorators, { kind: "field", name: "expirationDays", static: false, private: false, access: { has: function (obj) { return "expirationDays" in obj; }, get: function (obj) { return obj.expirationDays; }, set: function (obj, value) { obj.expirationDays = value; } }, metadata: _metadata }, _expirationDays_initializers, _expirationDays_extraInitializers);
            __esDecorate(null, null, _username_decorators, { kind: "field", name: "username", static: false, private: false, access: { has: function (obj) { return "username" in obj; }, get: function (obj) { return obj.username; }, set: function (obj, value) { obj.username = value; } }, metadata: _metadata }, _username_initializers, _username_extraInitializers);
            __esDecorate(null, null, _destination_decorators, { kind: "field", name: "destination", static: false, private: false, access: { has: function (obj) { return "destination" in obj; }, get: function (obj) { return obj.destination; }, set: function (obj, value) { obj.destination = value; } }, metadata: _metadata }, _destination_initializers, _destination_extraInitializers);
            __esDecorate(null, null, _referenceId_decorators, { kind: "field", name: "referenceId", static: false, private: false, access: { has: function (obj) { return "referenceId" in obj; }, get: function (obj) { return obj.referenceId; }, set: function (obj, value) { obj.referenceId = value; } }, metadata: _metadata }, _referenceId_initializers, _referenceId_extraInitializers);
            __esDecorate(null, null, _acceptedAssets_decorators, { kind: "field", name: "acceptedAssets", static: false, private: false, access: { has: function (obj) { return "acceptedAssets" in obj; }, get: function (obj) { return obj.acceptedAssets; }, set: function (obj, value) { obj.acceptedAssets = value; } }, metadata: _metadata }, _acceptedAssets_initializers, _acceptedAssets_extraInitializers);
            __esDecorate(null, null, _recipientViewPublicKeyPem_decorators, { kind: "field", name: "recipientViewPublicKeyPem", static: false, private: false, access: { has: function (obj) { return "recipientViewPublicKeyPem" in obj; }, get: function (obj) { return obj.recipientViewPublicKeyPem; }, set: function (obj, value) { obj.recipientViewPublicKeyPem = value; } }, metadata: _metadata }, _recipientViewPublicKeyPem_initializers, _recipientViewPublicKeyPem_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.LinkMetadataRequestDto = LinkMetadataRequestDto;
