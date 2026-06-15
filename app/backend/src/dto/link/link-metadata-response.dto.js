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
exports.LinkMetadataResponseDto = void 0;
var swagger_1 = require("@nestjs/swagger");
/**
 * Response DTO for link metadata
 *
 * @example
 * ```json
 * {
 *   "amount": "50.5000000",
 *   "memo": "Payment for service",
 *   "memoType": "text",
 *   "asset": "XLM",
 *   "privacy": false,
 *   "expiresAt": "2026-02-24T12:00:00.000Z",
 *   "canonical": "amount=50.5000000&asset=XLM&memo=Payment%20for%20service",
 *   "metadata": {
 *     "normalized": false
 *   }
 * }
 * ```
 */
var LinkMetadataResponseDto = function () {
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
    var _expiresAt_decorators;
    var _expiresAt_initializers = [];
    var _expiresAt_extraInitializers = [];
    var _canonical_decorators;
    var _canonical_initializers = [];
    var _canonical_extraInitializers = [];
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
    var _swapOptions_decorators;
    var _swapOptions_initializers = [];
    var _swapOptions_extraInitializers = [];
    var _metadata_decorators;
    var _metadata_initializers = [];
    var _metadata_extraInitializers = [];
    return _a = /** @class */ (function () {
            function LinkMetadataResponseDto() {
                this.amount = __runInitializers(this, _amount_initializers, void 0);
                this.memo = (__runInitializers(this, _amount_extraInitializers), __runInitializers(this, _memo_initializers, void 0));
                this.memoType = (__runInitializers(this, _memo_extraInitializers), __runInitializers(this, _memoType_initializers, void 0));
                this.asset = (__runInitializers(this, _memoType_extraInitializers), __runInitializers(this, _asset_initializers, void 0));
                this.privacy = (__runInitializers(this, _asset_extraInitializers), __runInitializers(this, _privacy_initializers, void 0));
                this.expiresAt = (__runInitializers(this, _privacy_extraInitializers), __runInitializers(this, _expiresAt_initializers, void 0));
                this.canonical = (__runInitializers(this, _expiresAt_extraInitializers), __runInitializers(this, _canonical_initializers, void 0));
                this.username = (__runInitializers(this, _canonical_extraInitializers), __runInitializers(this, _username_initializers, void 0));
                this.destination = (__runInitializers(this, _username_extraInitializers), __runInitializers(this, _destination_initializers, void 0));
                this.referenceId = (__runInitializers(this, _destination_extraInitializers), __runInitializers(this, _referenceId_initializers, void 0));
                this.acceptedAssets = (__runInitializers(this, _referenceId_extraInitializers), __runInitializers(this, _acceptedAssets_initializers, void 0));
                this.swapOptions = (__runInitializers(this, _acceptedAssets_extraInitializers), __runInitializers(this, _swapOptions_initializers, void 0));
                this.metadata = (__runInitializers(this, _swapOptions_extraInitializers), __runInitializers(this, _metadata_initializers, void 0));
                __runInitializers(this, _metadata_extraInitializers);
            }
            return LinkMetadataResponseDto;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _amount_decorators = [(0, swagger_1.ApiProperty)({
                    description: 'Normalized amount with 7 decimal places',
                    example: '50.5000000',
                })];
            _memo_decorators = [(0, swagger_1.ApiProperty)({
                    description: 'Sanitized memo text',
                    example: 'Payment for service',
                    nullable: true,
                })];
            _memoType_decorators = [(0, swagger_1.ApiProperty)({
                    description: 'Memo type',
                    example: 'text',
                })];
            _asset_decorators = [(0, swagger_1.ApiProperty)({
                    description: 'Asset code',
                    example: 'XLM',
                })];
            _privacy_decorators = [(0, swagger_1.ApiProperty)({
                    description: 'Privacy flag',
                    example: false,
                })];
            _expiresAt_decorators = [(0, swagger_1.ApiProperty)({
                    description: 'Expiration date',
                    example: '2026-02-24T12:00:00.000Z',
                    nullable: true,
                })];
            _canonical_decorators = [(0, swagger_1.ApiProperty)({
                    description: 'Canonical link format',
                    example: 'amount=50.5000000&asset=XLM&memo=Payment%20for%20service',
                })];
            _username_decorators = [(0, swagger_1.ApiPropertyOptional)({
                    description: 'Username associated with the payment link',
                    example: 'john_doe123',
                    nullable: true,
                })];
            _destination_decorators = [(0, swagger_1.ApiPropertyOptional)({
                    description: 'Destination Stellar account public key',
                    example: 'GABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890',
                    nullable: true,
                })];
            _referenceId_decorators = [(0, swagger_1.ApiPropertyOptional)({
                    description: 'Custom reference ID for tracking',
                    example: 'INV-12345',
                    nullable: true,
                })];
            _acceptedAssets_decorators = [(0, swagger_1.ApiPropertyOptional)({
                    description: 'Asset codes this link accepts for payment (multi-asset support)',
                    example: ['XLM', 'USDC'],
                    type: [String],
                    nullable: true,
                })];
            _swapOptions_decorators = [(0, swagger_1.ApiPropertyOptional)({
                    description: 'Swap path options for each accepted asset that differs from the destination asset. ' +
                        'Only present when acceptedAssets is provided in the request.',
                    type: 'array',
                    nullable: true,
                })];
            _metadata_decorators = [(0, swagger_1.ApiProperty)({
                    description: 'Metadata information',
                    example: {
                        normalized: false,
                        assetType: 'native',
                        linkType: 'standard',
                        securityLevel: 'medium',
                    },
                })];
            __esDecorate(null, null, _amount_decorators, { kind: "field", name: "amount", static: false, private: false, access: { has: function (obj) { return "amount" in obj; }, get: function (obj) { return obj.amount; }, set: function (obj, value) { obj.amount = value; } }, metadata: _metadata }, _amount_initializers, _amount_extraInitializers);
            __esDecorate(null, null, _memo_decorators, { kind: "field", name: "memo", static: false, private: false, access: { has: function (obj) { return "memo" in obj; }, get: function (obj) { return obj.memo; }, set: function (obj, value) { obj.memo = value; } }, metadata: _metadata }, _memo_initializers, _memo_extraInitializers);
            __esDecorate(null, null, _memoType_decorators, { kind: "field", name: "memoType", static: false, private: false, access: { has: function (obj) { return "memoType" in obj; }, get: function (obj) { return obj.memoType; }, set: function (obj, value) { obj.memoType = value; } }, metadata: _metadata }, _memoType_initializers, _memoType_extraInitializers);
            __esDecorate(null, null, _asset_decorators, { kind: "field", name: "asset", static: false, private: false, access: { has: function (obj) { return "asset" in obj; }, get: function (obj) { return obj.asset; }, set: function (obj, value) { obj.asset = value; } }, metadata: _metadata }, _asset_initializers, _asset_extraInitializers);
            __esDecorate(null, null, _privacy_decorators, { kind: "field", name: "privacy", static: false, private: false, access: { has: function (obj) { return "privacy" in obj; }, get: function (obj) { return obj.privacy; }, set: function (obj, value) { obj.privacy = value; } }, metadata: _metadata }, _privacy_initializers, _privacy_extraInitializers);
            __esDecorate(null, null, _expiresAt_decorators, { kind: "field", name: "expiresAt", static: false, private: false, access: { has: function (obj) { return "expiresAt" in obj; }, get: function (obj) { return obj.expiresAt; }, set: function (obj, value) { obj.expiresAt = value; } }, metadata: _metadata }, _expiresAt_initializers, _expiresAt_extraInitializers);
            __esDecorate(null, null, _canonical_decorators, { kind: "field", name: "canonical", static: false, private: false, access: { has: function (obj) { return "canonical" in obj; }, get: function (obj) { return obj.canonical; }, set: function (obj, value) { obj.canonical = value; } }, metadata: _metadata }, _canonical_initializers, _canonical_extraInitializers);
            __esDecorate(null, null, _username_decorators, { kind: "field", name: "username", static: false, private: false, access: { has: function (obj) { return "username" in obj; }, get: function (obj) { return obj.username; }, set: function (obj, value) { obj.username = value; } }, metadata: _metadata }, _username_initializers, _username_extraInitializers);
            __esDecorate(null, null, _destination_decorators, { kind: "field", name: "destination", static: false, private: false, access: { has: function (obj) { return "destination" in obj; }, get: function (obj) { return obj.destination; }, set: function (obj, value) { obj.destination = value; } }, metadata: _metadata }, _destination_initializers, _destination_extraInitializers);
            __esDecorate(null, null, _referenceId_decorators, { kind: "field", name: "referenceId", static: false, private: false, access: { has: function (obj) { return "referenceId" in obj; }, get: function (obj) { return obj.referenceId; }, set: function (obj, value) { obj.referenceId = value; } }, metadata: _metadata }, _referenceId_initializers, _referenceId_extraInitializers);
            __esDecorate(null, null, _acceptedAssets_decorators, { kind: "field", name: "acceptedAssets", static: false, private: false, access: { has: function (obj) { return "acceptedAssets" in obj; }, get: function (obj) { return obj.acceptedAssets; }, set: function (obj, value) { obj.acceptedAssets = value; } }, metadata: _metadata }, _acceptedAssets_initializers, _acceptedAssets_extraInitializers);
            __esDecorate(null, null, _swapOptions_decorators, { kind: "field", name: "swapOptions", static: false, private: false, access: { has: function (obj) { return "swapOptions" in obj; }, get: function (obj) { return obj.swapOptions; }, set: function (obj, value) { obj.swapOptions = value; } }, metadata: _metadata }, _swapOptions_initializers, _swapOptions_extraInitializers);
            __esDecorate(null, null, _metadata_decorators, { kind: "field", name: "metadata", static: false, private: false, access: { has: function (obj) { return "metadata" in obj; }, get: function (obj) { return obj.metadata; }, set: function (obj, value) { obj.metadata = value; } }, metadata: _metadata }, _metadata_initializers, _metadata_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.LinkMetadataResponseDto = LinkMetadataResponseDto;
