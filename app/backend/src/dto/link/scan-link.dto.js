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
exports.ScanLinkDto = void 0;
var swagger_1 = require("@nestjs/swagger");
var class_validator_1 = require("class-validator");
var class_transformer_1 = require("class-transformer");
var validators_1 = require("../validators");
/**
 * DTO for scanning a payment link for scam indicators
 *
 * @example
 * ```json
 * {
 *   "assetCode": "USDC",
 *   "amount": 100.5,
 *   "memo": "Invoice-12345",
 *   "recipientAddress": "GABC123..."
 * }
 * ```
 */
var ScanLinkDto = function () {
    var _a;
    var _assetCode_decorators;
    var _assetCode_initializers = [];
    var _assetCode_extraInitializers = [];
    var _amount_decorators;
    var _amount_initializers = [];
    var _amount_extraInitializers = [];
    var _memo_decorators;
    var _memo_initializers = [];
    var _memo_extraInitializers = [];
    var _recipientAddress_decorators;
    var _recipientAddress_initializers = [];
    var _recipientAddress_extraInitializers = [];
    return _a = /** @class */ (function () {
            function ScanLinkDto() {
                this.assetCode = __runInitializers(this, _assetCode_initializers, void 0);
                this.amount = (__runInitializers(this, _assetCode_extraInitializers), __runInitializers(this, _amount_initializers, void 0));
                this.memo = (__runInitializers(this, _amount_extraInitializers), __runInitializers(this, _memo_initializers, void 0));
                this.recipientAddress = (__runInitializers(this, _memo_extraInitializers), __runInitializers(this, _recipientAddress_initializers, void 0));
                __runInitializers(this, _recipientAddress_extraInitializers);
            }
            return ScanLinkDto;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _assetCode_decorators = [(0, swagger_1.ApiProperty)({
                    description: 'Asset code to be transferred',
                    example: 'USDC',
                }), (0, class_validator_1.IsString)(), (0, validators_1.IsStellarAsset)({
                    message: 'Asset code must be one of: XLM, USDC, AQUA, yXLM',
                })];
            _amount_decorators = [(0, swagger_1.ApiProperty)({
                    description: 'Amount to be transferred',
                    example: 100.5,
                }), (0, class_validator_1.IsNumber)(), (0, validators_1.IsStellarAmount)({
                    message: 'Amount must be a valid Stellar amount',
                }), (0, class_transformer_1.Type)(function () { return Number; })];
            _memo_decorators = [(0, swagger_1.ApiPropertyOptional)({
                    description: 'Optional memo/reference for the payment',
                    example: 'Invoice-12345',
                }), (0, class_validator_1.IsString)(), (0, class_validator_1.IsOptional)(), (0, validators_1.IsStellarMemo)({
                    message: 'Memo must be at most 28 characters',
                })];
            _recipientAddress_decorators = [(0, swagger_1.ApiPropertyOptional)({
                    description: 'Optional recipient address for additional verification',
                    example: 'GABC123...',
                }), (0, class_validator_1.IsString)(), (0, class_validator_1.IsOptional)(), (0, validators_1.IsStellarPublicKey)({
                    message: 'Recipient address must be a valid Stellar public key',
                })];
            __esDecorate(null, null, _assetCode_decorators, { kind: "field", name: "assetCode", static: false, private: false, access: { has: function (obj) { return "assetCode" in obj; }, get: function (obj) { return obj.assetCode; }, set: function (obj, value) { obj.assetCode = value; } }, metadata: _metadata }, _assetCode_initializers, _assetCode_extraInitializers);
            __esDecorate(null, null, _amount_decorators, { kind: "field", name: "amount", static: false, private: false, access: { has: function (obj) { return "amount" in obj; }, get: function (obj) { return obj.amount; }, set: function (obj, value) { obj.amount = value; } }, metadata: _metadata }, _amount_initializers, _amount_extraInitializers);
            __esDecorate(null, null, _memo_decorators, { kind: "field", name: "memo", static: false, private: false, access: { has: function (obj) { return "memo" in obj; }, get: function (obj) { return obj.memo; }, set: function (obj, value) { obj.memo = value; } }, metadata: _metadata }, _memo_initializers, _memo_extraInitializers);
            __esDecorate(null, null, _recipientAddress_decorators, { kind: "field", name: "recipientAddress", static: false, private: false, access: { has: function (obj) { return "recipientAddress" in obj; }, get: function (obj) { return obj.recipientAddress; }, set: function (obj, value) { obj.recipientAddress = value; } }, metadata: _metadata }, _recipientAddress_initializers, _recipientAddress_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.ScanLinkDto = ScanLinkDto;
