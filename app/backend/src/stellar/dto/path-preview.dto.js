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
exports.StrictSendPathPreviewRequestDto = exports.PathPreviewRequestDto = exports.PathAssetRefDto = void 0;
var class_transformer_1 = require("class-transformer");
var class_validator_1 = require("class-validator");
var swagger_1 = require("@nestjs/swagger");
var PathAssetRefDto = function () {
    var _a;
    var _code_decorators;
    var _code_initializers = [];
    var _code_extraInitializers = [];
    var _issuer_decorators;
    var _issuer_initializers = [];
    var _issuer_extraInitializers = [];
    return _a = /** @class */ (function () {
            function PathAssetRefDto() {
                this.code = __runInitializers(this, _code_initializers, void 0);
                this.issuer = (__runInitializers(this, _code_extraInitializers), __runInitializers(this, _issuer_initializers, void 0));
                __runInitializers(this, _issuer_extraInitializers);
            }
            return PathAssetRefDto;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _code_decorators = [(0, swagger_1.ApiProperty)({ example: "USDC" }), (0, class_validator_1.IsString)(), (0, class_validator_1.IsNotEmpty)()];
            _issuer_decorators = [(0, swagger_1.ApiPropertyOptional)({
                    description: "Required for issued assets; omit for XLM",
                    example: "GA5ZSEJYB37JRC5AVCIA5MOP4RHTM335X2KGX3IHOJAPP5RE34K4KZVN",
                }), (0, class_validator_1.IsOptional)(), (0, class_validator_1.IsString)()];
            __esDecorate(null, null, _code_decorators, { kind: "field", name: "code", static: false, private: false, access: { has: function (obj) { return "code" in obj; }, get: function (obj) { return obj.code; }, set: function (obj, value) { obj.code = value; } }, metadata: _metadata }, _code_initializers, _code_extraInitializers);
            __esDecorate(null, null, _issuer_decorators, { kind: "field", name: "issuer", static: false, private: false, access: { has: function (obj) { return "issuer" in obj; }, get: function (obj) { return obj.issuer; }, set: function (obj, value) { obj.issuer = value; } }, metadata: _metadata }, _issuer_initializers, _issuer_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.PathAssetRefDto = PathAssetRefDto;
var PathPreviewRequestDto = function () {
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
    return _a = /** @class */ (function () {
            function PathPreviewRequestDto() {
                this.destinationAmount = __runInitializers(this, _destinationAmount_initializers, void 0);
                this.destinationAsset = (__runInitializers(this, _destinationAmount_extraInitializers), __runInitializers(this, _destinationAsset_initializers, void 0));
                this.sourceAssets = (__runInitializers(this, _destinationAsset_extraInitializers), __runInitializers(this, _sourceAssets_initializers, void 0));
                __runInitializers(this, _sourceAssets_extraInitializers);
            }
            return PathPreviewRequestDto;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _destinationAmount_decorators = [(0, swagger_1.ApiProperty)({
                    description: "Human-readable amount the recipient should receive",
                    example: "10.5",
                }), (0, class_validator_1.IsString)(), (0, class_validator_1.IsNotEmpty)(), (0, class_validator_1.Matches)(/^\d+(\.\d{1,14})?$/, {
                    message: "destinationAmount must be a positive decimal number",
                })];
            _destinationAsset_decorators = [(0, swagger_1.ApiProperty)({ type: PathAssetRefDto }), (0, class_validator_1.ValidateNested)(), (0, class_transformer_1.Type)(function () { return PathAssetRefDto; })];
            _sourceAssets_decorators = [(0, swagger_1.ApiProperty)({
                    type: [PathAssetRefDto],
                    description: "Assets payers may use (strict-receive path search)",
                }), (0, class_validator_1.IsArray)(), (0, class_validator_1.ArrayMinSize)(1), (0, class_validator_1.ValidateNested)({ each: true }), (0, class_transformer_1.Type)(function () { return PathAssetRefDto; })];
            __esDecorate(null, null, _destinationAmount_decorators, { kind: "field", name: "destinationAmount", static: false, private: false, access: { has: function (obj) { return "destinationAmount" in obj; }, get: function (obj) { return obj.destinationAmount; }, set: function (obj, value) { obj.destinationAmount = value; } }, metadata: _metadata }, _destinationAmount_initializers, _destinationAmount_extraInitializers);
            __esDecorate(null, null, _destinationAsset_decorators, { kind: "field", name: "destinationAsset", static: false, private: false, access: { has: function (obj) { return "destinationAsset" in obj; }, get: function (obj) { return obj.destinationAsset; }, set: function (obj, value) { obj.destinationAsset = value; } }, metadata: _metadata }, _destinationAsset_initializers, _destinationAsset_extraInitializers);
            __esDecorate(null, null, _sourceAssets_decorators, { kind: "field", name: "sourceAssets", static: false, private: false, access: { has: function (obj) { return "sourceAssets" in obj; }, get: function (obj) { return obj.sourceAssets; }, set: function (obj, value) { obj.sourceAssets = value; } }, metadata: _metadata }, _sourceAssets_initializers, _sourceAssets_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.PathPreviewRequestDto = PathPreviewRequestDto;
var StrictSendPathPreviewRequestDto = function () {
    var _a;
    var _sourceAmount_decorators;
    var _sourceAmount_initializers = [];
    var _sourceAmount_extraInitializers = [];
    var _sourceAsset_decorators;
    var _sourceAsset_initializers = [];
    var _sourceAsset_extraInitializers = [];
    var _destinationAssets_decorators;
    var _destinationAssets_initializers = [];
    var _destinationAssets_extraInitializers = [];
    return _a = /** @class */ (function () {
            function StrictSendPathPreviewRequestDto() {
                this.sourceAmount = __runInitializers(this, _sourceAmount_initializers, void 0);
                this.sourceAsset = (__runInitializers(this, _sourceAmount_extraInitializers), __runInitializers(this, _sourceAsset_initializers, void 0));
                this.destinationAssets = (__runInitializers(this, _sourceAsset_extraInitializers), __runInitializers(this, _destinationAssets_initializers, void 0));
                __runInitializers(this, _destinationAssets_extraInitializers);
            }
            return StrictSendPathPreviewRequestDto;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _sourceAmount_decorators = [(0, swagger_1.ApiProperty)({
                    description: "Human-readable amount the sender will send exactly",
                    example: "10.5",
                }), (0, class_validator_1.IsString)(), (0, class_validator_1.IsNotEmpty)(), (0, class_validator_1.Matches)(/^\d+(\.\d{1,14})?$/, {
                    message: "sourceAmount must be a positive decimal number",
                })];
            _sourceAsset_decorators = [(0, swagger_1.ApiProperty)({ type: PathAssetRefDto }), (0, class_validator_1.ValidateNested)(), (0, class_transformer_1.Type)(function () { return PathAssetRefDto; })];
            _destinationAssets_decorators = [(0, swagger_1.ApiProperty)({
                    type: [PathAssetRefDto],
                    description: "Assets the recipient could receive (strict-send path search)",
                }), (0, class_validator_1.IsArray)(), (0, class_validator_1.ArrayMinSize)(1), (0, class_validator_1.ValidateNested)({ each: true }), (0, class_transformer_1.Type)(function () { return PathAssetRefDto; })];
            __esDecorate(null, null, _sourceAmount_decorators, { kind: "field", name: "sourceAmount", static: false, private: false, access: { has: function (obj) { return "sourceAmount" in obj; }, get: function (obj) { return obj.sourceAmount; }, set: function (obj, value) { obj.sourceAmount = value; } }, metadata: _metadata }, _sourceAmount_initializers, _sourceAmount_extraInitializers);
            __esDecorate(null, null, _sourceAsset_decorators, { kind: "field", name: "sourceAsset", static: false, private: false, access: { has: function (obj) { return "sourceAsset" in obj; }, get: function (obj) { return obj.sourceAsset; }, set: function (obj, value) { obj.sourceAsset = value; } }, metadata: _metadata }, _sourceAsset_initializers, _sourceAsset_extraInitializers);
            __esDecorate(null, null, _destinationAssets_decorators, { kind: "field", name: "destinationAssets", static: false, private: false, access: { has: function (obj) { return "destinationAssets" in obj; }, get: function (obj) { return obj.destinationAssets; }, set: function (obj, value) { obj.destinationAssets = value; } }, metadata: _metadata }, _destinationAssets_initializers, _destinationAssets_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.StrictSendPathPreviewRequestDto = StrictSendPathPreviewRequestDto;
