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
exports.BulkPaymentLinkResponseDto = exports.BulkPaymentLinkResponseItemDto = exports.BulkPaymentLinkRequestDto = exports.BulkPaymentLinkItemDto = void 0;
var swagger_1 = require("@nestjs/swagger");
var class_validator_1 = require("class-validator");
var class_transformer_1 = require("class-transformer");
/**
 * DTO for a single payment link in a bulk generation request
 */
var BulkPaymentLinkItemDto = function () {
    var _a;
    var _amount_decorators;
    var _amount_initializers = [];
    var _amount_extraInitializers = [];
    var _asset_decorators;
    var _asset_initializers = [];
    var _asset_extraInitializers = [];
    var _memo_decorators;
    var _memo_initializers = [];
    var _memo_extraInitializers = [];
    var _memoType_decorators;
    var _memoType_initializers = [];
    var _memoType_extraInitializers = [];
    var _username_decorators;
    var _username_initializers = [];
    var _username_extraInitializers = [];
    var _destination_decorators;
    var _destination_initializers = [];
    var _destination_extraInitializers = [];
    var _referenceId_decorators;
    var _referenceId_initializers = [];
    var _referenceId_extraInitializers = [];
    var _privacy_decorators;
    var _privacy_initializers = [];
    var _privacy_extraInitializers = [];
    var _expirationDays_decorators;
    var _expirationDays_initializers = [];
    var _expirationDays_extraInitializers = [];
    var _acceptedAssets_decorators;
    var _acceptedAssets_initializers = [];
    var _acceptedAssets_extraInitializers = [];
    return _a = /** @class */ (function () {
            function BulkPaymentLinkItemDto() {
                this.amount = __runInitializers(this, _amount_initializers, void 0);
                this.asset = (__runInitializers(this, _amount_extraInitializers), __runInitializers(this, _asset_initializers, void 0));
                this.memo = (__runInitializers(this, _asset_extraInitializers), __runInitializers(this, _memo_initializers, void 0));
                this.memoType = (__runInitializers(this, _memo_extraInitializers), __runInitializers(this, _memoType_initializers, void 0));
                this.username = (__runInitializers(this, _memoType_extraInitializers), __runInitializers(this, _username_initializers, void 0));
                this.destination = (__runInitializers(this, _username_extraInitializers), __runInitializers(this, _destination_initializers, void 0));
                this.referenceId = (__runInitializers(this, _destination_extraInitializers), __runInitializers(this, _referenceId_initializers, void 0));
                this.privacy = (__runInitializers(this, _referenceId_extraInitializers), __runInitializers(this, _privacy_initializers, void 0));
                this.expirationDays = (__runInitializers(this, _privacy_extraInitializers), __runInitializers(this, _expirationDays_initializers, void 0));
                this.acceptedAssets = (__runInitializers(this, _expirationDays_extraInitializers), __runInitializers(this, _acceptedAssets_initializers, void 0));
                __runInitializers(this, _acceptedAssets_extraInitializers);
            }
            return BulkPaymentLinkItemDto;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _amount_decorators = [(0, swagger_1.ApiProperty)({
                    description: "Payment amount",
                    example: 100.5,
                }), (0, class_validator_1.IsNumber)(), (0, class_validator_1.Min)(0.0000001), (0, class_validator_1.Max)(1000000000)];
            _asset_decorators = [(0, swagger_1.ApiProperty)({
                    description: "Asset code (e.g., XLM, USDC)",
                    example: "XLM",
                    required: false,
                }), (0, class_validator_1.IsString)(), (0, class_validator_1.IsOptional)()];
            _memo_decorators = [(0, swagger_1.ApiProperty)({
                    description: "Payment memo (optional)",
                    example: "Invoice #123",
                    required: false,
                }), (0, class_validator_1.IsString)(), (0, class_validator_1.IsOptional)(), (0, class_validator_1.Length)(0, 28)];
            _memoType_decorators = [(0, swagger_1.ApiProperty)({
                    description: "Memo type (text, id, hash, return)",
                    example: "text",
                    required: false,
                }), (0, class_validator_1.IsString)(), (0, class_validator_1.IsOptional)(), (0, class_validator_1.Matches)(/^(text|id|hash|return)$/, {
                    message: "Memo type must be one of: text, id, hash, return",
                })];
            _username_decorators = [(0, swagger_1.ApiProperty)({
                    description: "Recipient username (optional)",
                    example: "john_doe",
                    required: false,
                }), (0, class_validator_1.IsString)(), (0, class_validator_1.IsOptional)(), (0, class_validator_1.Length)(3, 32)];
            _destination_decorators = [(0, swagger_1.ApiProperty)({
                    description: "Recipient Stellar public key (optional)",
                    example: "GA5ZSEJYB37JRC5AVCIA5MOP4RHTM335X2KGX3IHOJAPP5RE34K4KZVN",
                    required: false,
                }), (0, class_validator_1.IsString)(), (0, class_validator_1.IsOptional)(), (0, class_validator_1.Matches)(/^G[ABCDEFGHIJKLMNOPQRSTUVWXYZ234567]{55}$/, {
                    message: "Destination must be a valid Stellar public key",
                })];
            _referenceId_decorators = [(0, swagger_1.ApiProperty)({
                    description: "Reference ID for tracking (optional)",
                    example: "INV-2025-001",
                    required: false,
                }), (0, class_validator_1.IsString)(), (0, class_validator_1.IsOptional)(), (0, class_validator_1.Length)(0, 64), (0, class_validator_1.Matches)(/^[a-zA-Z0-9_-]*$/, {
                    message: "Reference ID must be alphanumeric, hyphens, or underscores",
                })];
            _privacy_decorators = [(0, swagger_1.ApiProperty)({
                    description: "Enable privacy mode (X-Ray)",
                    example: false,
                    required: false,
                }), (0, class_validator_1.IsBoolean)(), (0, class_validator_1.IsOptional)()];
            _expirationDays_decorators = [(0, swagger_1.ApiProperty)({
                    description: "Link expiration in days",
                    example: 30,
                    required: false,
                }), (0, class_validator_1.IsNumber)(), (0, class_validator_1.IsOptional)(), (0, class_validator_1.Min)(1), (0, class_validator_1.Max)(365)];
            _acceptedAssets_decorators = [(0, swagger_1.ApiProperty)({
                    description: "Accepted assets for payment (optional)",
                    example: ["XLM", "USDC"],
                    required: false,
                }), (0, class_validator_1.IsArray)(), (0, class_validator_1.IsString)({ each: true }), (0, class_validator_1.IsOptional)()];
            __esDecorate(null, null, _amount_decorators, { kind: "field", name: "amount", static: false, private: false, access: { has: function (obj) { return "amount" in obj; }, get: function (obj) { return obj.amount; }, set: function (obj, value) { obj.amount = value; } }, metadata: _metadata }, _amount_initializers, _amount_extraInitializers);
            __esDecorate(null, null, _asset_decorators, { kind: "field", name: "asset", static: false, private: false, access: { has: function (obj) { return "asset" in obj; }, get: function (obj) { return obj.asset; }, set: function (obj, value) { obj.asset = value; } }, metadata: _metadata }, _asset_initializers, _asset_extraInitializers);
            __esDecorate(null, null, _memo_decorators, { kind: "field", name: "memo", static: false, private: false, access: { has: function (obj) { return "memo" in obj; }, get: function (obj) { return obj.memo; }, set: function (obj, value) { obj.memo = value; } }, metadata: _metadata }, _memo_initializers, _memo_extraInitializers);
            __esDecorate(null, null, _memoType_decorators, { kind: "field", name: "memoType", static: false, private: false, access: { has: function (obj) { return "memoType" in obj; }, get: function (obj) { return obj.memoType; }, set: function (obj, value) { obj.memoType = value; } }, metadata: _metadata }, _memoType_initializers, _memoType_extraInitializers);
            __esDecorate(null, null, _username_decorators, { kind: "field", name: "username", static: false, private: false, access: { has: function (obj) { return "username" in obj; }, get: function (obj) { return obj.username; }, set: function (obj, value) { obj.username = value; } }, metadata: _metadata }, _username_initializers, _username_extraInitializers);
            __esDecorate(null, null, _destination_decorators, { kind: "field", name: "destination", static: false, private: false, access: { has: function (obj) { return "destination" in obj; }, get: function (obj) { return obj.destination; }, set: function (obj, value) { obj.destination = value; } }, metadata: _metadata }, _destination_initializers, _destination_extraInitializers);
            __esDecorate(null, null, _referenceId_decorators, { kind: "field", name: "referenceId", static: false, private: false, access: { has: function (obj) { return "referenceId" in obj; }, get: function (obj) { return obj.referenceId; }, set: function (obj, value) { obj.referenceId = value; } }, metadata: _metadata }, _referenceId_initializers, _referenceId_extraInitializers);
            __esDecorate(null, null, _privacy_decorators, { kind: "field", name: "privacy", static: false, private: false, access: { has: function (obj) { return "privacy" in obj; }, get: function (obj) { return obj.privacy; }, set: function (obj, value) { obj.privacy = value; } }, metadata: _metadata }, _privacy_initializers, _privacy_extraInitializers);
            __esDecorate(null, null, _expirationDays_decorators, { kind: "field", name: "expirationDays", static: false, private: false, access: { has: function (obj) { return "expirationDays" in obj; }, get: function (obj) { return obj.expirationDays; }, set: function (obj, value) { obj.expirationDays = value; } }, metadata: _metadata }, _expirationDays_initializers, _expirationDays_extraInitializers);
            __esDecorate(null, null, _acceptedAssets_decorators, { kind: "field", name: "acceptedAssets", static: false, private: false, access: { has: function (obj) { return "acceptedAssets" in obj; }, get: function (obj) { return obj.acceptedAssets; }, set: function (obj, value) { obj.acceptedAssets = value; } }, metadata: _metadata }, _acceptedAssets_initializers, _acceptedAssets_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.BulkPaymentLinkItemDto = BulkPaymentLinkItemDto;
/**
 * DTO for bulk payment link generation request (JSON)
 */
var BulkPaymentLinkRequestDto = function () {
    var _a;
    var _links_decorators;
    var _links_initializers = [];
    var _links_extraInitializers = [];
    return _a = /** @class */ (function () {
            function BulkPaymentLinkRequestDto() {
                this.links = __runInitializers(this, _links_initializers, void 0);
                __runInitializers(this, _links_extraInitializers);
            }
            return BulkPaymentLinkRequestDto;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _links_decorators = [(0, swagger_1.ApiProperty)({
                    description: "Array of payment link items to generate",
                    type: [BulkPaymentLinkItemDto],
                }), (0, class_validator_1.IsArray)(), (0, class_validator_1.ValidateNested)({ each: true }), (0, class_transformer_1.Type)(function () { return BulkPaymentLinkItemDto; })];
            __esDecorate(null, null, _links_decorators, { kind: "field", name: "links", static: false, private: false, access: { has: function (obj) { return "links" in obj; }, get: function (obj) { return obj.links; }, set: function (obj, value) { obj.links = value; } }, metadata: _metadata }, _links_initializers, _links_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.BulkPaymentLinkRequestDto = BulkPaymentLinkRequestDto;
/**
 * DTO for a single generated payment link response
 */
var BulkPaymentLinkResponseItemDto = function () {
    var _a;
    var _id_decorators;
    var _id_initializers = [];
    var _id_extraInitializers = [];
    var _canonical_decorators;
    var _canonical_initializers = [];
    var _canonical_extraInitializers = [];
    var _url_decorators;
    var _url_initializers = [];
    var _url_extraInitializers = [];
    var _amount_decorators;
    var _amount_initializers = [];
    var _amount_extraInitializers = [];
    var _asset_decorators;
    var _asset_initializers = [];
    var _asset_extraInitializers = [];
    var _username_decorators;
    var _username_initializers = [];
    var _username_extraInitializers = [];
    var _destination_decorators;
    var _destination_initializers = [];
    var _destination_extraInitializers = [];
    var _referenceId_decorators;
    var _referenceId_initializers = [];
    var _referenceId_extraInitializers = [];
    var _index_decorators;
    var _index_initializers = [];
    var _index_extraInitializers = [];
    return _a = /** @class */ (function () {
            function BulkPaymentLinkResponseItemDto() {
                this.id = __runInitializers(this, _id_initializers, void 0);
                this.canonical = (__runInitializers(this, _id_extraInitializers), __runInitializers(this, _canonical_initializers, void 0));
                this.url = (__runInitializers(this, _canonical_extraInitializers), __runInitializers(this, _url_initializers, void 0));
                this.amount = (__runInitializers(this, _url_extraInitializers), __runInitializers(this, _amount_initializers, void 0));
                this.asset = (__runInitializers(this, _amount_extraInitializers), __runInitializers(this, _asset_initializers, void 0));
                this.username = (__runInitializers(this, _asset_extraInitializers), __runInitializers(this, _username_initializers, void 0));
                this.destination = (__runInitializers(this, _username_extraInitializers), __runInitializers(this, _destination_initializers, void 0));
                this.referenceId = (__runInitializers(this, _destination_extraInitializers), __runInitializers(this, _referenceId_initializers, void 0));
                this.index = (__runInitializers(this, _referenceId_extraInitializers), __runInitializers(this, _index_initializers, void 0));
                __runInitializers(this, _index_extraInitializers);
            }
            return BulkPaymentLinkResponseItemDto;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _id_decorators = [(0, swagger_1.ApiProperty)({
                    description: "Unique link identifier",
                    example: "link_abc123",
                })];
            _canonical_decorators = [(0, swagger_1.ApiProperty)({
                    description: "Canonical payment link format",
                    example: "amount=100.5000000&asset=XLM&memo=Invoice%20%23123&username=john_doe",
                })];
            _url_decorators = [(0, swagger_1.ApiProperty)({
                    description: "Shareable payment link URL",
                    example: "https://app. RustAcademy.example.com/pay?amount=100.5000000&asset=XLM",
                })];
            _amount_decorators = [(0, swagger_1.ApiProperty)({
                    description: "Payment amount",
                    example: "100.5000000",
                })];
            _asset_decorators = [(0, swagger_1.ApiProperty)({
                    description: "Asset code",
                    example: "XLM",
                })];
            _username_decorators = [(0, swagger_1.ApiProperty)({
                    description: "Recipient username (if provided)",
                    example: "john_doe",
                    required: false,
                })];
            _destination_decorators = [(0, swagger_1.ApiProperty)({
                    description: "Recipient destination (if provided)",
                    example: "GA5ZSEJYB37JRC5AVCIA5MOP4RHTM335X2KGX3IHOJAPP5RE34K4KZVN",
                    required: false,
                })];
            _referenceId_decorators = [(0, swagger_1.ApiProperty)({
                    description: "Reference ID (if provided)",
                    example: "INV-2025-001",
                    required: false,
                })];
            _index_decorators = [(0, swagger_1.ApiProperty)({
                    description: "Index in the original request",
                    example: 0,
                })];
            __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: function (obj) { return "id" in obj; }, get: function (obj) { return obj.id; }, set: function (obj, value) { obj.id = value; } }, metadata: _metadata }, _id_initializers, _id_extraInitializers);
            __esDecorate(null, null, _canonical_decorators, { kind: "field", name: "canonical", static: false, private: false, access: { has: function (obj) { return "canonical" in obj; }, get: function (obj) { return obj.canonical; }, set: function (obj, value) { obj.canonical = value; } }, metadata: _metadata }, _canonical_initializers, _canonical_extraInitializers);
            __esDecorate(null, null, _url_decorators, { kind: "field", name: "url", static: false, private: false, access: { has: function (obj) { return "url" in obj; }, get: function (obj) { return obj.url; }, set: function (obj, value) { obj.url = value; } }, metadata: _metadata }, _url_initializers, _url_extraInitializers);
            __esDecorate(null, null, _amount_decorators, { kind: "field", name: "amount", static: false, private: false, access: { has: function (obj) { return "amount" in obj; }, get: function (obj) { return obj.amount; }, set: function (obj, value) { obj.amount = value; } }, metadata: _metadata }, _amount_initializers, _amount_extraInitializers);
            __esDecorate(null, null, _asset_decorators, { kind: "field", name: "asset", static: false, private: false, access: { has: function (obj) { return "asset" in obj; }, get: function (obj) { return obj.asset; }, set: function (obj, value) { obj.asset = value; } }, metadata: _metadata }, _asset_initializers, _asset_extraInitializers);
            __esDecorate(null, null, _username_decorators, { kind: "field", name: "username", static: false, private: false, access: { has: function (obj) { return "username" in obj; }, get: function (obj) { return obj.username; }, set: function (obj, value) { obj.username = value; } }, metadata: _metadata }, _username_initializers, _username_extraInitializers);
            __esDecorate(null, null, _destination_decorators, { kind: "field", name: "destination", static: false, private: false, access: { has: function (obj) { return "destination" in obj; }, get: function (obj) { return obj.destination; }, set: function (obj, value) { obj.destination = value; } }, metadata: _metadata }, _destination_initializers, _destination_extraInitializers);
            __esDecorate(null, null, _referenceId_decorators, { kind: "field", name: "referenceId", static: false, private: false, access: { has: function (obj) { return "referenceId" in obj; }, get: function (obj) { return obj.referenceId; }, set: function (obj, value) { obj.referenceId = value; } }, metadata: _metadata }, _referenceId_initializers, _referenceId_extraInitializers);
            __esDecorate(null, null, _index_decorators, { kind: "field", name: "index", static: false, private: false, access: { has: function (obj) { return "index" in obj; }, get: function (obj) { return obj.index; }, set: function (obj, value) { obj.index = value; } }, metadata: _metadata }, _index_initializers, _index_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.BulkPaymentLinkResponseItemDto = BulkPaymentLinkResponseItemDto;
/**
 * DTO for bulk payment link generation response
 */
var BulkPaymentLinkResponseDto = function () {
    var _a;
    var _success_decorators;
    var _success_initializers = [];
    var _success_extraInitializers = [];
    var _total_decorators;
    var _total_initializers = [];
    var _total_extraInitializers = [];
    var _links_decorators;
    var _links_initializers = [];
    var _links_extraInitializers = [];
    var _processingTimeMs_decorators;
    var _processingTimeMs_initializers = [];
    var _processingTimeMs_extraInitializers = [];
    return _a = /** @class */ (function () {
            function BulkPaymentLinkResponseDto() {
                this.success = __runInitializers(this, _success_initializers, void 0);
                this.total = (__runInitializers(this, _success_extraInitializers), __runInitializers(this, _total_initializers, void 0));
                this.links = (__runInitializers(this, _total_extraInitializers), __runInitializers(this, _links_initializers, void 0));
                this.processingTimeMs = (__runInitializers(this, _links_extraInitializers), __runInitializers(this, _processingTimeMs_initializers, void 0));
                __runInitializers(this, _processingTimeMs_extraInitializers);
            }
            return BulkPaymentLinkResponseDto;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _success_decorators = [(0, swagger_1.ApiProperty)({
                    description: "Success status",
                    example: true,
                })];
            _total_decorators = [(0, swagger_1.ApiProperty)({
                    description: "Total number of links generated",
                    example: 100,
                })];
            _links_decorators = [(0, swagger_1.ApiProperty)({
                    description: "Generated payment links",
                    type: [BulkPaymentLinkResponseItemDto],
                })];
            _processingTimeMs_decorators = [(0, swagger_1.ApiProperty)({
                    description: "Processing time in milliseconds",
                    example: 245,
                })];
            __esDecorate(null, null, _success_decorators, { kind: "field", name: "success", static: false, private: false, access: { has: function (obj) { return "success" in obj; }, get: function (obj) { return obj.success; }, set: function (obj, value) { obj.success = value; } }, metadata: _metadata }, _success_initializers, _success_extraInitializers);
            __esDecorate(null, null, _total_decorators, { kind: "field", name: "total", static: false, private: false, access: { has: function (obj) { return "total" in obj; }, get: function (obj) { return obj.total; }, set: function (obj, value) { obj.total = value; } }, metadata: _metadata }, _total_initializers, _total_extraInitializers);
            __esDecorate(null, null, _links_decorators, { kind: "field", name: "links", static: false, private: false, access: { has: function (obj) { return "links" in obj; }, get: function (obj) { return obj.links; }, set: function (obj, value) { obj.links = value; } }, metadata: _metadata }, _links_initializers, _links_extraInitializers);
            __esDecorate(null, null, _processingTimeMs_decorators, { kind: "field", name: "processingTimeMs", static: false, private: false, access: { has: function (obj) { return "processingTimeMs" in obj; }, get: function (obj) { return obj.processingTimeMs; }, set: function (obj, value) { obj.processingTimeMs = value; } }, metadata: _metadata }, _processingTimeMs_initializers, _processingTimeMs_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.BulkPaymentLinkResponseDto = BulkPaymentLinkResponseDto;
