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
exports.QuoteResponseDto = exports.QuotePathDto = exports.CreateQuoteDto = exports.FeeBreakdownDto = void 0;
var class_transformer_1 = require("class-transformer");
var class_validator_1 = require("class-validator");
var swagger_1 = require("@nestjs/swagger");
var FeeBreakdownDto = function () {
    var _a;
    var _networkFee_decorators;
    var _networkFee_initializers = [];
    var _networkFee_extraInitializers = [];
    var _platformFee_decorators;
    var _platformFee_initializers = [];
    var _platformFee_extraInitializers = [];
    var _totalFee_decorators;
    var _totalFee_initializers = [];
    var _totalFee_extraInitializers = [];
    return _a = /** @class */ (function () {
            function FeeBreakdownDto() {
                this.networkFee = __runInitializers(this, _networkFee_initializers, void 0);
                this.platformFee = (__runInitializers(this, _networkFee_extraInitializers), __runInitializers(this, _platformFee_initializers, void 0));
                this.totalFee = (__runInitializers(this, _platformFee_extraInitializers), __runInitializers(this, _totalFee_initializers, void 0));
                __runInitializers(this, _totalFee_extraInitializers);
            }
            return FeeBreakdownDto;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _networkFee_decorators = [(0, swagger_1.ApiProperty)({ description: "Network fee estimate in XLM", example: "0.0000100" })];
            _platformFee_decorators = [(0, swagger_1.ApiProperty)({ description: "Platform fee estimate in destination asset", example: "0.1000000" })];
            _totalFee_decorators = [(0, swagger_1.ApiProperty)({ description: "Total effective fee (network + platform converted to a unified representation if needed, or just platform fee)", example: "0.1000000" })];
            __esDecorate(null, null, _networkFee_decorators, { kind: "field", name: "networkFee", static: false, private: false, access: { has: function (obj) { return "networkFee" in obj; }, get: function (obj) { return obj.networkFee; }, set: function (obj, value) { obj.networkFee = value; } }, metadata: _metadata }, _networkFee_initializers, _networkFee_extraInitializers);
            __esDecorate(null, null, _platformFee_decorators, { kind: "field", name: "platformFee", static: false, private: false, access: { has: function (obj) { return "platformFee" in obj; }, get: function (obj) { return obj.platformFee; }, set: function (obj, value) { obj.platformFee = value; } }, metadata: _metadata }, _platformFee_initializers, _platformFee_extraInitializers);
            __esDecorate(null, null, _totalFee_decorators, { kind: "field", name: "totalFee", static: false, private: false, access: { has: function (obj) { return "totalFee" in obj; }, get: function (obj) { return obj.totalFee; }, set: function (obj, value) { obj.totalFee = value; } }, metadata: _metadata }, _totalFee_initializers, _totalFee_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.FeeBreakdownDto = FeeBreakdownDto;
var path_preview_dto_1 = require("./path-preview.dto");
var CreateQuoteDto = function () {
    var _a;
    var _destinationAmount_decorators;
    var _destinationAmount_initializers = [];
    var _destinationAmount_extraInitializers = [];
    var _destinationAsset_decorators;
    var _destinationAsset_initializers = [];
    var _destinationAsset_extraInitializers = [];
    var _sourceAssets_decorators;
    var _sourceAssets_initializers = [];
    var _sourceAssets_extraInitializers = [];
    var _maxSlippageBps_decorators;
    var _maxSlippageBps_initializers = [];
    var _maxSlippageBps_extraInitializers = [];
    var _ttlSeconds_decorators;
    var _ttlSeconds_initializers = [];
    var _ttlSeconds_extraInitializers = [];
    var _preflight_decorators;
    var _preflight_initializers = [];
    var _preflight_extraInitializers = [];
    return _a = /** @class */ (function () {
            function CreateQuoteDto() {
                this.destinationAmount = __runInitializers(this, _destinationAmount_initializers, void 0);
                this.destinationAsset = (__runInitializers(this, _destinationAmount_extraInitializers), __runInitializers(this, _destinationAsset_initializers, void 0));
                this.sourceAssets = (__runInitializers(this, _destinationAsset_extraInitializers), __runInitializers(this, _sourceAssets_initializers, void 0));
                this.maxSlippageBps = (__runInitializers(this, _sourceAssets_extraInitializers), __runInitializers(this, _maxSlippageBps_initializers, void 0));
                this.ttlSeconds = (__runInitializers(this, _maxSlippageBps_extraInitializers), __runInitializers(this, _ttlSeconds_initializers, void 0));
                this.preflight = (__runInitializers(this, _ttlSeconds_extraInitializers), __runInitializers(this, _preflight_initializers, void 0));
                __runInitializers(this, _preflight_extraInitializers);
            }
            return CreateQuoteDto;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _destinationAmount_decorators = [(0, swagger_1.ApiProperty)({ example: "10.5", description: "Amount the recipient receives" }), (0, class_validator_1.IsString)(), (0, class_validator_1.IsNotEmpty)(), (0, class_validator_1.Matches)(/^\d+(\.\d{1,14})?$/, {
                    message: "destinationAmount must be a positive decimal number",
                })];
            _destinationAsset_decorators = [(0, swagger_1.ApiProperty)({ type: path_preview_dto_1.PathAssetRefDto }), (0, class_validator_1.ValidateNested)(), (0, class_transformer_1.Type)(function () { return path_preview_dto_1.PathAssetRefDto; })];
            _sourceAssets_decorators = [(0, swagger_1.ApiProperty)({ type: [path_preview_dto_1.PathAssetRefDto], description: "Assets the sender may use" }), (0, class_validator_1.IsArray)(), (0, class_validator_1.ArrayMinSize)(1), (0, class_validator_1.ValidateNested)({ each: true }), (0, class_transformer_1.Type)(function () { return path_preview_dto_1.PathAssetRefDto; })];
            _maxSlippageBps_decorators = [(0, swagger_1.ApiPropertyOptional)({
                    description: "Maximum slippage in basis points (1 bps = 0.01%). Default: 50 (0.5%)",
                    example: 50,
                    minimum: 0,
                    maximum: 10000,
                }), (0, class_validator_1.IsOptional)(), (0, class_validator_1.IsInt)(), (0, class_validator_1.Min)(0), (0, class_validator_1.Max)(10000)];
            _ttlSeconds_decorators = [(0, swagger_1.ApiPropertyOptional)({
                    description: "Quote TTL in seconds. Default: 30",
                    example: 30,
                    minimum: 5,
                    maximum: 300,
                }), (0, class_validator_1.IsOptional)(), (0, class_validator_1.IsInt)(), (0, class_validator_1.Min)(5), (0, class_validator_1.Max)(300)];
            _preflight_decorators = [(0, swagger_1.ApiPropertyOptional)({
                    description: "Run Soroban preflight simulation to verify transaction feasibility",
                    example: false,
                }), (0, class_validator_1.IsOptional)(), (0, class_validator_1.IsBoolean)()];
            __esDecorate(null, null, _destinationAmount_decorators, { kind: "field", name: "destinationAmount", static: false, private: false, access: { has: function (obj) { return "destinationAmount" in obj; }, get: function (obj) { return obj.destinationAmount; }, set: function (obj, value) { obj.destinationAmount = value; } }, metadata: _metadata }, _destinationAmount_initializers, _destinationAmount_extraInitializers);
            __esDecorate(null, null, _destinationAsset_decorators, { kind: "field", name: "destinationAsset", static: false, private: false, access: { has: function (obj) { return "destinationAsset" in obj; }, get: function (obj) { return obj.destinationAsset; }, set: function (obj, value) { obj.destinationAsset = value; } }, metadata: _metadata }, _destinationAsset_initializers, _destinationAsset_extraInitializers);
            __esDecorate(null, null, _sourceAssets_decorators, { kind: "field", name: "sourceAssets", static: false, private: false, access: { has: function (obj) { return "sourceAssets" in obj; }, get: function (obj) { return obj.sourceAssets; }, set: function (obj, value) { obj.sourceAssets = value; } }, metadata: _metadata }, _sourceAssets_initializers, _sourceAssets_extraInitializers);
            __esDecorate(null, null, _maxSlippageBps_decorators, { kind: "field", name: "maxSlippageBps", static: false, private: false, access: { has: function (obj) { return "maxSlippageBps" in obj; }, get: function (obj) { return obj.maxSlippageBps; }, set: function (obj, value) { obj.maxSlippageBps = value; } }, metadata: _metadata }, _maxSlippageBps_initializers, _maxSlippageBps_extraInitializers);
            __esDecorate(null, null, _ttlSeconds_decorators, { kind: "field", name: "ttlSeconds", static: false, private: false, access: { has: function (obj) { return "ttlSeconds" in obj; }, get: function (obj) { return obj.ttlSeconds; }, set: function (obj, value) { obj.ttlSeconds = value; } }, metadata: _metadata }, _ttlSeconds_initializers, _ttlSeconds_extraInitializers);
            __esDecorate(null, null, _preflight_decorators, { kind: "field", name: "preflight", static: false, private: false, access: { has: function (obj) { return "preflight" in obj; }, get: function (obj) { return obj.preflight; }, set: function (obj, value) { obj.preflight = value; } }, metadata: _metadata }, _preflight_initializers, _preflight_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.CreateQuoteDto = CreateQuoteDto;
var QuotePathDto = function () {
    var _a;
    var _sourceAsset_decorators;
    var _sourceAsset_initializers = [];
    var _sourceAsset_extraInitializers = [];
    var _sourceAmount_decorators;
    var _sourceAmount_initializers = [];
    var _sourceAmount_extraInitializers = [];
    var _sourceAmountWithSlippage_decorators;
    var _sourceAmountWithSlippage_initializers = [];
    var _sourceAmountWithSlippage_extraInitializers = [];
    var _destinationAsset_decorators;
    var _destinationAsset_initializers = [];
    var _destinationAsset_extraInitializers = [];
    var _destinationAmount_decorators;
    var _destinationAmount_initializers = [];
    var _destinationAmount_extraInitializers = [];
    var _pathHops_decorators;
    var _pathHops_initializers = [];
    var _pathHops_extraInitializers = [];
    var _rateDescription_decorators;
    var _rateDescription_initializers = [];
    var _rateDescription_extraInitializers = [];
    var _feeBreakdown_decorators;
    var _feeBreakdown_initializers = [];
    var _feeBreakdown_extraInitializers = [];
    return _a = /** @class */ (function () {
            function QuotePathDto() {
                this.sourceAsset = __runInitializers(this, _sourceAsset_initializers, void 0);
                this.sourceAmount = (__runInitializers(this, _sourceAsset_extraInitializers), __runInitializers(this, _sourceAmount_initializers, void 0));
                this.sourceAmountWithSlippage = (__runInitializers(this, _sourceAmount_extraInitializers), __runInitializers(this, _sourceAmountWithSlippage_initializers, void 0));
                this.destinationAsset = (__runInitializers(this, _sourceAmountWithSlippage_extraInitializers), __runInitializers(this, _destinationAsset_initializers, void 0));
                this.destinationAmount = (__runInitializers(this, _destinationAsset_extraInitializers), __runInitializers(this, _destinationAmount_initializers, void 0));
                this.pathHops = (__runInitializers(this, _destinationAmount_extraInitializers), __runInitializers(this, _pathHops_initializers, void 0));
                this.rateDescription = (__runInitializers(this, _pathHops_extraInitializers), __runInitializers(this, _rateDescription_initializers, void 0));
                this.feeBreakdown = (__runInitializers(this, _rateDescription_extraInitializers), __runInitializers(this, _feeBreakdown_initializers, void 0));
                __runInitializers(this, _feeBreakdown_extraInitializers);
            }
            return QuotePathDto;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _sourceAsset_decorators = [(0, swagger_1.ApiProperty)()];
            _sourceAmount_decorators = [(0, swagger_1.ApiProperty)()];
            _sourceAmountWithSlippage_decorators = [(0, swagger_1.ApiProperty)()];
            _destinationAsset_decorators = [(0, swagger_1.ApiProperty)()];
            _destinationAmount_decorators = [(0, swagger_1.ApiProperty)()];
            _pathHops_decorators = [(0, swagger_1.ApiProperty)({ type: [String] })];
            _rateDescription_decorators = [(0, swagger_1.ApiProperty)()];
            _feeBreakdown_decorators = [(0, swagger_1.ApiProperty)({ type: FeeBreakdownDto })];
            __esDecorate(null, null, _sourceAsset_decorators, { kind: "field", name: "sourceAsset", static: false, private: false, access: { has: function (obj) { return "sourceAsset" in obj; }, get: function (obj) { return obj.sourceAsset; }, set: function (obj, value) { obj.sourceAsset = value; } }, metadata: _metadata }, _sourceAsset_initializers, _sourceAsset_extraInitializers);
            __esDecorate(null, null, _sourceAmount_decorators, { kind: "field", name: "sourceAmount", static: false, private: false, access: { has: function (obj) { return "sourceAmount" in obj; }, get: function (obj) { return obj.sourceAmount; }, set: function (obj, value) { obj.sourceAmount = value; } }, metadata: _metadata }, _sourceAmount_initializers, _sourceAmount_extraInitializers);
            __esDecorate(null, null, _sourceAmountWithSlippage_decorators, { kind: "field", name: "sourceAmountWithSlippage", static: false, private: false, access: { has: function (obj) { return "sourceAmountWithSlippage" in obj; }, get: function (obj) { return obj.sourceAmountWithSlippage; }, set: function (obj, value) { obj.sourceAmountWithSlippage = value; } }, metadata: _metadata }, _sourceAmountWithSlippage_initializers, _sourceAmountWithSlippage_extraInitializers);
            __esDecorate(null, null, _destinationAsset_decorators, { kind: "field", name: "destinationAsset", static: false, private: false, access: { has: function (obj) { return "destinationAsset" in obj; }, get: function (obj) { return obj.destinationAsset; }, set: function (obj, value) { obj.destinationAsset = value; } }, metadata: _metadata }, _destinationAsset_initializers, _destinationAsset_extraInitializers);
            __esDecorate(null, null, _destinationAmount_decorators, { kind: "field", name: "destinationAmount", static: false, private: false, access: { has: function (obj) { return "destinationAmount" in obj; }, get: function (obj) { return obj.destinationAmount; }, set: function (obj, value) { obj.destinationAmount = value; } }, metadata: _metadata }, _destinationAmount_initializers, _destinationAmount_extraInitializers);
            __esDecorate(null, null, _pathHops_decorators, { kind: "field", name: "pathHops", static: false, private: false, access: { has: function (obj) { return "pathHops" in obj; }, get: function (obj) { return obj.pathHops; }, set: function (obj, value) { obj.pathHops = value; } }, metadata: _metadata }, _pathHops_initializers, _pathHops_extraInitializers);
            __esDecorate(null, null, _rateDescription_decorators, { kind: "field", name: "rateDescription", static: false, private: false, access: { has: function (obj) { return "rateDescription" in obj; }, get: function (obj) { return obj.rateDescription; }, set: function (obj, value) { obj.rateDescription = value; } }, metadata: _metadata }, _rateDescription_initializers, _rateDescription_extraInitializers);
            __esDecorate(null, null, _feeBreakdown_decorators, { kind: "field", name: "feeBreakdown", static: false, private: false, access: { has: function (obj) { return "feeBreakdown" in obj; }, get: function (obj) { return obj.feeBreakdown; }, set: function (obj, value) { obj.feeBreakdown = value; } }, metadata: _metadata }, _feeBreakdown_initializers, _feeBreakdown_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.QuotePathDto = QuotePathDto;
var QuoteResponseDto = function () {
    var _a;
    var _quoteId_decorators;
    var _quoteId_initializers = [];
    var _quoteId_extraInitializers = [];
    var _paths_decorators;
    var _paths_initializers = [];
    var _paths_extraInitializers = [];
    var _expiresAt_decorators;
    var _expiresAt_initializers = [];
    var _expiresAt_extraInitializers = [];
    var _maxSlippageBps_decorators;
    var _maxSlippageBps_initializers = [];
    var _maxSlippageBps_extraInitializers = [];
    var _horizonUrl_decorators;
    var _horizonUrl_initializers = [];
    var _horizonUrl_extraInitializers = [];
    var _preflight_decorators;
    var _preflight_initializers = [];
    var _preflight_extraInitializers = [];
    return _a = /** @class */ (function () {
            function QuoteResponseDto() {
                this.quoteId = __runInitializers(this, _quoteId_initializers, void 0);
                this.paths = (__runInitializers(this, _quoteId_extraInitializers), __runInitializers(this, _paths_initializers, void 0));
                this.expiresAt = (__runInitializers(this, _paths_extraInitializers), __runInitializers(this, _expiresAt_initializers, void 0));
                this.maxSlippageBps = (__runInitializers(this, _expiresAt_extraInitializers), __runInitializers(this, _maxSlippageBps_initializers, void 0));
                this.horizonUrl = (__runInitializers(this, _maxSlippageBps_extraInitializers), __runInitializers(this, _horizonUrl_initializers, void 0));
                this.preflight = (__runInitializers(this, _horizonUrl_extraInitializers), __runInitializers(this, _preflight_initializers, void 0));
                __runInitializers(this, _preflight_extraInitializers);
            }
            return QuoteResponseDto;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _quoteId_decorators = [(0, swagger_1.ApiProperty)({ description: "Unique quote ID" })];
            _paths_decorators = [(0, swagger_1.ApiProperty)({ type: [QuotePathDto] })];
            _expiresAt_decorators = [(0, swagger_1.ApiProperty)({ description: "ISO timestamp when this quote expires" })];
            _maxSlippageBps_decorators = [(0, swagger_1.ApiProperty)({ description: "Slippage tolerance in basis points" })];
            _horizonUrl_decorators = [(0, swagger_1.ApiProperty)({ description: "Horizon URL used for path search" })];
            _preflight_decorators = [(0, swagger_1.ApiPropertyOptional)({ description: "Preflight simulation result, if requested" })];
            __esDecorate(null, null, _quoteId_decorators, { kind: "field", name: "quoteId", static: false, private: false, access: { has: function (obj) { return "quoteId" in obj; }, get: function (obj) { return obj.quoteId; }, set: function (obj, value) { obj.quoteId = value; } }, metadata: _metadata }, _quoteId_initializers, _quoteId_extraInitializers);
            __esDecorate(null, null, _paths_decorators, { kind: "field", name: "paths", static: false, private: false, access: { has: function (obj) { return "paths" in obj; }, get: function (obj) { return obj.paths; }, set: function (obj, value) { obj.paths = value; } }, metadata: _metadata }, _paths_initializers, _paths_extraInitializers);
            __esDecorate(null, null, _expiresAt_decorators, { kind: "field", name: "expiresAt", static: false, private: false, access: { has: function (obj) { return "expiresAt" in obj; }, get: function (obj) { return obj.expiresAt; }, set: function (obj, value) { obj.expiresAt = value; } }, metadata: _metadata }, _expiresAt_initializers, _expiresAt_extraInitializers);
            __esDecorate(null, null, _maxSlippageBps_decorators, { kind: "field", name: "maxSlippageBps", static: false, private: false, access: { has: function (obj) { return "maxSlippageBps" in obj; }, get: function (obj) { return obj.maxSlippageBps; }, set: function (obj, value) { obj.maxSlippageBps = value; } }, metadata: _metadata }, _maxSlippageBps_initializers, _maxSlippageBps_extraInitializers);
            __esDecorate(null, null, _horizonUrl_decorators, { kind: "field", name: "horizonUrl", static: false, private: false, access: { has: function (obj) { return "horizonUrl" in obj; }, get: function (obj) { return obj.horizonUrl; }, set: function (obj, value) { obj.horizonUrl = value; } }, metadata: _metadata }, _horizonUrl_initializers, _horizonUrl_extraInitializers);
            __esDecorate(null, null, _preflight_decorators, { kind: "field", name: "preflight", static: false, private: false, access: { has: function (obj) { return "preflight" in obj; }, get: function (obj) { return obj.preflight; }, set: function (obj, value) { obj.preflight = value; } }, metadata: _metadata }, _preflight_initializers, _preflight_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.QuoteResponseDto = QuoteResponseDto;
