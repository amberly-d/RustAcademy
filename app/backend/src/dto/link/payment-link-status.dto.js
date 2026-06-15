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
exports.PaymentLinkStatusDto = void 0;
var swagger_1 = require("@nestjs/swagger");
var PaymentLinkStatusDto = function () {
    var _a;
    var _state_decorators;
    var _state_initializers = [];
    var _state_extraInitializers = [];
    var _username_decorators;
    var _username_initializers = [];
    var _username_extraInitializers = [];
    var _amount_decorators;
    var _amount_initializers = [];
    var _amount_extraInitializers = [];
    var _asset_decorators;
    var _asset_initializers = [];
    var _asset_extraInitializers = [];
    var _memo_decorators;
    var _memo_initializers = [];
    var _memo_extraInitializers = [];
    var _destinationPublicKey_decorators;
    var _destinationPublicKey_initializers = [];
    var _destinationPublicKey_extraInitializers = [];
    var _expiresAt_decorators;
    var _expiresAt_initializers = [];
    var _expiresAt_extraInitializers = [];
    var _transactionHash_decorators;
    var _transactionHash_initializers = [];
    var _transactionHash_extraInitializers = [];
    var _paidAt_decorators;
    var _paidAt_initializers = [];
    var _paidAt_extraInitializers = [];
    var _swapOptions_decorators;
    var _swapOptions_initializers = [];
    var _swapOptions_extraInitializers = [];
    var _acceptsMultipleAssets_decorators;
    var _acceptsMultipleAssets_initializers = [];
    var _acceptsMultipleAssets_extraInitializers = [];
    var _acceptedAssets_decorators;
    var _acceptedAssets_initializers = [];
    var _acceptedAssets_extraInitializers = [];
    var _userMessage_decorators;
    var _userMessage_initializers = [];
    var _userMessage_extraInitializers = [];
    var _availableActions_decorators;
    var _availableActions_initializers = [];
    var _availableActions_extraInitializers = [];
    return _a = /** @class */ (function () {
            function PaymentLinkStatusDto() {
                this.state = __runInitializers(this, _state_initializers, void 0);
                this.username = (__runInitializers(this, _state_extraInitializers), __runInitializers(this, _username_initializers, void 0));
                this.amount = (__runInitializers(this, _username_extraInitializers), __runInitializers(this, _amount_initializers, void 0));
                this.asset = (__runInitializers(this, _amount_extraInitializers), __runInitializers(this, _asset_initializers, void 0));
                this.memo = (__runInitializers(this, _asset_extraInitializers), __runInitializers(this, _memo_initializers, void 0));
                this.destinationPublicKey = (__runInitializers(this, _memo_extraInitializers), __runInitializers(this, _destinationPublicKey_initializers, void 0));
                this.expiresAt = (__runInitializers(this, _destinationPublicKey_extraInitializers), __runInitializers(this, _expiresAt_initializers, void 0));
                this.transactionHash = (__runInitializers(this, _expiresAt_extraInitializers), __runInitializers(this, _transactionHash_initializers, void 0));
                this.paidAt = (__runInitializers(this, _transactionHash_extraInitializers), __runInitializers(this, _paidAt_initializers, void 0));
                this.swapOptions = (__runInitializers(this, _paidAt_extraInitializers), __runInitializers(this, _swapOptions_initializers, void 0));
                this.acceptsMultipleAssets = (__runInitializers(this, _swapOptions_extraInitializers), __runInitializers(this, _acceptsMultipleAssets_initializers, void 0));
                this.acceptedAssets = (__runInitializers(this, _acceptsMultipleAssets_extraInitializers), __runInitializers(this, _acceptedAssets_initializers, void 0));
                this.userMessage = (__runInitializers(this, _acceptedAssets_extraInitializers), __runInitializers(this, _userMessage_initializers, void 0));
                this.availableActions = (__runInitializers(this, _userMessage_extraInitializers), __runInitializers(this, _availableActions_initializers, void 0));
                __runInitializers(this, _availableActions_extraInitializers);
            }
            return PaymentLinkStatusDto;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _state_decorators = [(0, swagger_1.ApiProperty)({
                    description: "Current state of the payment link",
                    enum: ["DRAFT", "ACTIVE", "EXPIRED", "PAID", "REFUNDED"],
                    example: "ACTIVE",
                })];
            _username_decorators = [(0, swagger_1.ApiProperty)({
                    description: "Username associated with the payment link",
                    example: "john_doe",
                })];
            _amount_decorators = [(0, swagger_1.ApiProperty)({
                    description: "Payment amount",
                    example: "100.0000000",
                })];
            _asset_decorators = [(0, swagger_1.ApiProperty)({
                    description: "Asset code",
                    example: "XLM",
                })];
            _memo_decorators = [(0, swagger_1.ApiProperty)({
                    description: "Optional memo text",
                    example: "Payment for services",
                    nullable: true,
                })];
            _destinationPublicKey_decorators = [(0, swagger_1.ApiProperty)({
                    description: "Destination Stellar public key",
                    example: "GABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890",
                })];
            _expiresAt_decorators = [(0, swagger_1.ApiProperty)({
                    description: "Payment link expiration date",
                    example: "2026-05-27T12:00:00.000Z",
                    nullable: true,
                })];
            _transactionHash_decorators = [(0, swagger_1.ApiProperty)({
                    description: "Transaction hash if payment is complete",
                    example: "abc123...",
                    nullable: true,
                })];
            _paidAt_decorators = [(0, swagger_1.ApiProperty)({
                    description: "Date when payment was completed",
                    example: "2026-04-27T10:30:00.000Z",
                    nullable: true,
                })];
            _swapOptions_decorators = [(0, swagger_1.ApiProperty)({
                    description: "Swap options available for this payment link",
                    type: "array",
                    nullable: true,
                })];
            _acceptsMultipleAssets_decorators = [(0, swagger_1.ApiProperty)({
                    description: "Whether the link can accept multiple assets",
                    example: false,
                })];
            _acceptedAssets_decorators = [(0, swagger_1.ApiProperty)({
                    description: "List of accepted asset codes",
                    type: [String],
                    nullable: true,
                })];
            _userMessage_decorators = [(0, swagger_1.ApiPropertyOptional)({
                    description: "User-friendly message explaining the current state",
                    example: "This payment link is active and ready to receive payment",
                })];
            _availableActions_decorators = [(0, swagger_1.ApiPropertyOptional)({
                    description: "Actions available to the user in the current state",
                    example: ["pay", "share"],
                })];
            __esDecorate(null, null, _state_decorators, { kind: "field", name: "state", static: false, private: false, access: { has: function (obj) { return "state" in obj; }, get: function (obj) { return obj.state; }, set: function (obj, value) { obj.state = value; } }, metadata: _metadata }, _state_initializers, _state_extraInitializers);
            __esDecorate(null, null, _username_decorators, { kind: "field", name: "username", static: false, private: false, access: { has: function (obj) { return "username" in obj; }, get: function (obj) { return obj.username; }, set: function (obj, value) { obj.username = value; } }, metadata: _metadata }, _username_initializers, _username_extraInitializers);
            __esDecorate(null, null, _amount_decorators, { kind: "field", name: "amount", static: false, private: false, access: { has: function (obj) { return "amount" in obj; }, get: function (obj) { return obj.amount; }, set: function (obj, value) { obj.amount = value; } }, metadata: _metadata }, _amount_initializers, _amount_extraInitializers);
            __esDecorate(null, null, _asset_decorators, { kind: "field", name: "asset", static: false, private: false, access: { has: function (obj) { return "asset" in obj; }, get: function (obj) { return obj.asset; }, set: function (obj, value) { obj.asset = value; } }, metadata: _metadata }, _asset_initializers, _asset_extraInitializers);
            __esDecorate(null, null, _memo_decorators, { kind: "field", name: "memo", static: false, private: false, access: { has: function (obj) { return "memo" in obj; }, get: function (obj) { return obj.memo; }, set: function (obj, value) { obj.memo = value; } }, metadata: _metadata }, _memo_initializers, _memo_extraInitializers);
            __esDecorate(null, null, _destinationPublicKey_decorators, { kind: "field", name: "destinationPublicKey", static: false, private: false, access: { has: function (obj) { return "destinationPublicKey" in obj; }, get: function (obj) { return obj.destinationPublicKey; }, set: function (obj, value) { obj.destinationPublicKey = value; } }, metadata: _metadata }, _destinationPublicKey_initializers, _destinationPublicKey_extraInitializers);
            __esDecorate(null, null, _expiresAt_decorators, { kind: "field", name: "expiresAt", static: false, private: false, access: { has: function (obj) { return "expiresAt" in obj; }, get: function (obj) { return obj.expiresAt; }, set: function (obj, value) { obj.expiresAt = value; } }, metadata: _metadata }, _expiresAt_initializers, _expiresAt_extraInitializers);
            __esDecorate(null, null, _transactionHash_decorators, { kind: "field", name: "transactionHash", static: false, private: false, access: { has: function (obj) { return "transactionHash" in obj; }, get: function (obj) { return obj.transactionHash; }, set: function (obj, value) { obj.transactionHash = value; } }, metadata: _metadata }, _transactionHash_initializers, _transactionHash_extraInitializers);
            __esDecorate(null, null, _paidAt_decorators, { kind: "field", name: "paidAt", static: false, private: false, access: { has: function (obj) { return "paidAt" in obj; }, get: function (obj) { return obj.paidAt; }, set: function (obj, value) { obj.paidAt = value; } }, metadata: _metadata }, _paidAt_initializers, _paidAt_extraInitializers);
            __esDecorate(null, null, _swapOptions_decorators, { kind: "field", name: "swapOptions", static: false, private: false, access: { has: function (obj) { return "swapOptions" in obj; }, get: function (obj) { return obj.swapOptions; }, set: function (obj, value) { obj.swapOptions = value; } }, metadata: _metadata }, _swapOptions_initializers, _swapOptions_extraInitializers);
            __esDecorate(null, null, _acceptsMultipleAssets_decorators, { kind: "field", name: "acceptsMultipleAssets", static: false, private: false, access: { has: function (obj) { return "acceptsMultipleAssets" in obj; }, get: function (obj) { return obj.acceptsMultipleAssets; }, set: function (obj, value) { obj.acceptsMultipleAssets = value; } }, metadata: _metadata }, _acceptsMultipleAssets_initializers, _acceptsMultipleAssets_extraInitializers);
            __esDecorate(null, null, _acceptedAssets_decorators, { kind: "field", name: "acceptedAssets", static: false, private: false, access: { has: function (obj) { return "acceptedAssets" in obj; }, get: function (obj) { return obj.acceptedAssets; }, set: function (obj, value) { obj.acceptedAssets = value; } }, metadata: _metadata }, _acceptedAssets_initializers, _acceptedAssets_extraInitializers);
            __esDecorate(null, null, _userMessage_decorators, { kind: "field", name: "userMessage", static: false, private: false, access: { has: function (obj) { return "userMessage" in obj; }, get: function (obj) { return obj.userMessage; }, set: function (obj, value) { obj.userMessage = value; } }, metadata: _metadata }, _userMessage_initializers, _userMessage_extraInitializers);
            __esDecorate(null, null, _availableActions_decorators, { kind: "field", name: "availableActions", static: false, private: false, access: { has: function (obj) { return "availableActions" in obj; }, get: function (obj) { return obj.availableActions; }, set: function (obj, value) { obj.availableActions = value; } }, metadata: _metadata }, _availableActions_initializers, _availableActions_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.PaymentLinkStatusDto = PaymentLinkStatusDto;
