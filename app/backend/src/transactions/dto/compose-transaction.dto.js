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
exports.ComposeTransactionDto = exports.ContractParamDto = void 0;
var class_validator_1 = require("class-validator");
var class_transformer_1 = require("class-transformer");
var ContractParamDto = function () {
    var _a;
    var _type_decorators;
    var _type_initializers = [];
    var _type_extraInitializers = [];
    return _a = /** @class */ (function () {
            function ContractParamDto() {
                this.type = __runInitializers(this, _type_initializers, void 0);
                this.value = __runInitializers(this, _type_extraInitializers);
            }
            return ContractParamDto;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _type_decorators = [(0, class_validator_1.IsString)(), (0, class_validator_1.IsNotEmpty)()];
            __esDecorate(null, null, _type_decorators, { kind: "field", name: "type", static: false, private: false, access: { has: function (obj) { return "type" in obj; }, get: function (obj) { return obj.type; }, set: function (obj, value) { obj.type = value; } }, metadata: _metadata }, _type_initializers, _type_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.ContractParamDto = ContractParamDto;
var ComposeTransactionDto = function () {
    var _a;
    var _contractId_decorators;
    var _contractId_initializers = [];
    var _contractId_extraInitializers = [];
    var _method_decorators;
    var _method_initializers = [];
    var _method_extraInitializers = [];
    var _params_decorators;
    var _params_initializers = [];
    var _params_extraInitializers = [];
    var _sourceAccount_decorators;
    var _sourceAccount_initializers = [];
    var _sourceAccount_extraInitializers = [];
    var _networkPassphrase_decorators;
    var _networkPassphrase_initializers = [];
    var _networkPassphrase_extraInitializers = [];
    var _idempotencyKey_decorators;
    var _idempotencyKey_initializers = [];
    var _idempotencyKey_extraInitializers = [];
    return _a = /** @class */ (function () {
            function ComposeTransactionDto() {
                this.contractId = __runInitializers(this, _contractId_initializers, void 0); // C... Strkey contract address
                this.method = (__runInitializers(this, _contractId_extraInitializers), __runInitializers(this, _method_initializers, void 0)); // Contract function name
                this.params = (__runInitializers(this, _method_extraInitializers), __runInitializers(this, _params_initializers, void 0));
                this.sourceAccount = (__runInitializers(this, _params_extraInitializers), __runInitializers(this, _sourceAccount_initializers, void 0)); // G... Strkey public key (no private key)
                this.networkPassphrase = (__runInitializers(this, _sourceAccount_extraInitializers), __runInitializers(this, _networkPassphrase_initializers, void 0)); // Defaults to testnet
                this.idempotencyKey = (__runInitializers(this, _networkPassphrase_extraInitializers), __runInitializers(this, _idempotencyKey_initializers, void 0));
                __runInitializers(this, _idempotencyKey_extraInitializers);
            }
            return ComposeTransactionDto;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _contractId_decorators = [(0, class_validator_1.IsString)(), (0, class_validator_1.IsNotEmpty)(), (0, class_validator_1.MaxLength)(128)];
            _method_decorators = [(0, class_validator_1.IsString)(), (0, class_validator_1.IsNotEmpty)(), (0, class_validator_1.MaxLength)(64)];
            _params_decorators = [(0, class_validator_1.IsArray)(), (0, class_validator_1.ValidateNested)({ each: true }), (0, class_transformer_1.Type)(function () { return ContractParamDto; })];
            _sourceAccount_decorators = [(0, class_validator_1.IsString)(), (0, class_validator_1.IsNotEmpty)()];
            _networkPassphrase_decorators = [(0, class_validator_1.IsString)(), (0, class_validator_1.IsOptional)()];
            _idempotencyKey_decorators = [(0, class_validator_1.IsString)(), (0, class_validator_1.IsOptional)(), (0, class_validator_1.MaxLength)(128)];
            __esDecorate(null, null, _contractId_decorators, { kind: "field", name: "contractId", static: false, private: false, access: { has: function (obj) { return "contractId" in obj; }, get: function (obj) { return obj.contractId; }, set: function (obj, value) { obj.contractId = value; } }, metadata: _metadata }, _contractId_initializers, _contractId_extraInitializers);
            __esDecorate(null, null, _method_decorators, { kind: "field", name: "method", static: false, private: false, access: { has: function (obj) { return "method" in obj; }, get: function (obj) { return obj.method; }, set: function (obj, value) { obj.method = value; } }, metadata: _metadata }, _method_initializers, _method_extraInitializers);
            __esDecorate(null, null, _params_decorators, { kind: "field", name: "params", static: false, private: false, access: { has: function (obj) { return "params" in obj; }, get: function (obj) { return obj.params; }, set: function (obj, value) { obj.params = value; } }, metadata: _metadata }, _params_initializers, _params_extraInitializers);
            __esDecorate(null, null, _sourceAccount_decorators, { kind: "field", name: "sourceAccount", static: false, private: false, access: { has: function (obj) { return "sourceAccount" in obj; }, get: function (obj) { return obj.sourceAccount; }, set: function (obj, value) { obj.sourceAccount = value; } }, metadata: _metadata }, _sourceAccount_initializers, _sourceAccount_extraInitializers);
            __esDecorate(null, null, _networkPassphrase_decorators, { kind: "field", name: "networkPassphrase", static: false, private: false, access: { has: function (obj) { return "networkPassphrase" in obj; }, get: function (obj) { return obj.networkPassphrase; }, set: function (obj, value) { obj.networkPassphrase = value; } }, metadata: _metadata }, _networkPassphrase_initializers, _networkPassphrase_extraInitializers);
            __esDecorate(null, null, _idempotencyKey_decorators, { kind: "field", name: "idempotencyKey", static: false, private: false, access: { has: function (obj) { return "idempotencyKey" in obj; }, get: function (obj) { return obj.idempotencyKey; }, set: function (obj, value) { obj.idempotencyKey = value; } }, metadata: _metadata }, _idempotencyKey_initializers, _idempotencyKey_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.ComposeTransactionDto = ComposeTransactionDto;
