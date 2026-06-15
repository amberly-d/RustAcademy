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
exports.PlaceBidDto = void 0;
var swagger_1 = require("@nestjs/swagger");
var class_validator_1 = require("class-validator");
var validators_1 = require("../../dto/validators");
var PlaceBidDto = function () {
    var _a;
    var _bidderPublicKey_decorators;
    var _bidderPublicKey_initializers = [];
    var _bidderPublicKey_extraInitializers = [];
    var _bidAmount_decorators;
    var _bidAmount_initializers = [];
    var _bidAmount_extraInitializers = [];
    return _a = /** @class */ (function () {
            function PlaceBidDto() {
                this.bidderPublicKey = __runInitializers(this, _bidderPublicKey_initializers, void 0);
                this.bidAmount = (__runInitializers(this, _bidderPublicKey_extraInitializers), __runInitializers(this, _bidAmount_initializers, void 0));
                __runInitializers(this, _bidAmount_extraInitializers);
            }
            return PlaceBidDto;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _bidderPublicKey_decorators = [(0, swagger_1.ApiProperty)({ example: 'GBXGQ55JMQ4L2B6E7S8Y9Z0A1B2C3D4E5F6G7H8I7YWR' }), (0, class_validator_1.IsString)(), (0, class_validator_1.IsNotEmpty)(), (0, validators_1.IsStellarPublicKey)({ message: 'Public key must be a valid Stellar public key' })];
            _bidAmount_decorators = [(0, swagger_1.ApiProperty)({ description: 'Bid amount in XLM', example: 90.0 }), (0, class_validator_1.IsNumber)(), (0, class_validator_1.Min)(0.0000001)];
            __esDecorate(null, null, _bidderPublicKey_decorators, { kind: "field", name: "bidderPublicKey", static: false, private: false, access: { has: function (obj) { return "bidderPublicKey" in obj; }, get: function (obj) { return obj.bidderPublicKey; }, set: function (obj, value) { obj.bidderPublicKey = value; } }, metadata: _metadata }, _bidderPublicKey_initializers, _bidderPublicKey_extraInitializers);
            __esDecorate(null, null, _bidAmount_decorators, { kind: "field", name: "bidAmount", static: false, private: false, access: { has: function (obj) { return "bidAmount" in obj; }, get: function (obj) { return obj.bidAmount; }, set: function (obj, value) { obj.bidAmount = value; } }, metadata: _metadata }, _bidAmount_initializers, _bidAmount_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.PlaceBidDto = PlaceBidDto;
