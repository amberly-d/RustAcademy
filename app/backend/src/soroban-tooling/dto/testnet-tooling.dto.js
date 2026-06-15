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
exports.DeploymentPlanDto = exports.DeployContractSpecDto = exports.FundingPreflightDto = void 0;
var swagger_1 = require("@nestjs/swagger");
var class_transformer_1 = require("class-transformer");
var class_validator_1 = require("class-validator");
var FundingPreflightDto = function () {
    var _a;
    var _accountId_decorators;
    var _accountId_initializers = [];
    var _accountId_extraInitializers = [];
    var _minBalanceXlm_decorators;
    var _minBalanceXlm_initializers = [];
    var _minBalanceXlm_extraInitializers = [];
    return _a = /** @class */ (function () {
            function FundingPreflightDto() {
                this.accountId = __runInitializers(this, _accountId_initializers, void 0);
                this.minBalanceXlm = (__runInitializers(this, _accountId_extraInitializers), __runInitializers(this, _minBalanceXlm_initializers, void 0));
                __runInitializers(this, _minBalanceXlm_extraInitializers);
            }
            return FundingPreflightDto;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _accountId_decorators = [(0, swagger_1.ApiProperty)({ example: "GABCD1234EXAMPLE" }), (0, class_validator_1.IsString)(), (0, class_validator_1.IsNotEmpty)()];
            _minBalanceXlm_decorators = [(0, swagger_1.ApiPropertyOptional)({ example: 5, default: 5 }), (0, class_validator_1.IsOptional)(), (0, class_transformer_1.Type)(function () { return Number; }), (0, class_validator_1.IsInt)(), (0, class_validator_1.Min)(1)];
            __esDecorate(null, null, _accountId_decorators, { kind: "field", name: "accountId", static: false, private: false, access: { has: function (obj) { return "accountId" in obj; }, get: function (obj) { return obj.accountId; }, set: function (obj, value) { obj.accountId = value; } }, metadata: _metadata }, _accountId_initializers, _accountId_extraInitializers);
            __esDecorate(null, null, _minBalanceXlm_decorators, { kind: "field", name: "minBalanceXlm", static: false, private: false, access: { has: function (obj) { return "minBalanceXlm" in obj; }, get: function (obj) { return obj.minBalanceXlm; }, set: function (obj, value) { obj.minBalanceXlm = value; } }, metadata: _metadata }, _minBalanceXlm_initializers, _minBalanceXlm_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.FundingPreflightDto = FundingPreflightDto;
var DeployContractSpecDto = function () {
    var _a;
    var _name_decorators;
    var _name_initializers = [];
    var _name_extraInitializers = [];
    var _wasmPath_decorators;
    var _wasmPath_initializers = [];
    var _wasmPath_extraInitializers = [];
    var _initMethod_decorators;
    var _initMethod_initializers = [];
    var _initMethod_extraInitializers = [];
    var _initArgs_decorators;
    var _initArgs_initializers = [];
    var _initArgs_extraInitializers = [];
    return _a = /** @class */ (function () {
            function DeployContractSpecDto() {
                this.name = __runInitializers(this, _name_initializers, void 0);
                this.wasmPath = (__runInitializers(this, _name_extraInitializers), __runInitializers(this, _wasmPath_initializers, void 0));
                this.initMethod = (__runInitializers(this, _wasmPath_extraInitializers), __runInitializers(this, _initMethod_initializers, void 0));
                this.initArgs = (__runInitializers(this, _initMethod_extraInitializers), __runInitializers(this, _initArgs_initializers, void 0));
                __runInitializers(this, _initArgs_extraInitializers);
            }
            return DeployContractSpecDto;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _name_decorators = [(0, swagger_1.ApiProperty)({ example: " RustAcademy" }), (0, class_validator_1.IsString)(), (0, class_validator_1.IsNotEmpty)()];
            _wasmPath_decorators = [(0, swagger_1.ApiProperty)({
                    example: "app/contract/target/wasm32-unknown-unknown/release/ RustAcademy.wasm",
                }), (0, class_validator_1.IsString)(), (0, class_validator_1.IsNotEmpty)()];
            _initMethod_decorators = [(0, swagger_1.ApiPropertyOptional)({ example: "initialize" }), (0, class_validator_1.IsOptional)(), (0, class_validator_1.IsString)()];
            _initArgs_decorators = [(0, swagger_1.ApiPropertyOptional)({ example: ["GADMINEXAMPLE..."] }), (0, class_validator_1.IsOptional)(), (0, class_validator_1.IsArray)(), (0, class_validator_1.IsString)({ each: true })];
            __esDecorate(null, null, _name_decorators, { kind: "field", name: "name", static: false, private: false, access: { has: function (obj) { return "name" in obj; }, get: function (obj) { return obj.name; }, set: function (obj, value) { obj.name = value; } }, metadata: _metadata }, _name_initializers, _name_extraInitializers);
            __esDecorate(null, null, _wasmPath_decorators, { kind: "field", name: "wasmPath", static: false, private: false, access: { has: function (obj) { return "wasmPath" in obj; }, get: function (obj) { return obj.wasmPath; }, set: function (obj, value) { obj.wasmPath = value; } }, metadata: _metadata }, _wasmPath_initializers, _wasmPath_extraInitializers);
            __esDecorate(null, null, _initMethod_decorators, { kind: "field", name: "initMethod", static: false, private: false, access: { has: function (obj) { return "initMethod" in obj; }, get: function (obj) { return obj.initMethod; }, set: function (obj, value) { obj.initMethod = value; } }, metadata: _metadata }, _initMethod_initializers, _initMethod_extraInitializers);
            __esDecorate(null, null, _initArgs_decorators, { kind: "field", name: "initArgs", static: false, private: false, access: { has: function (obj) { return "initArgs" in obj; }, get: function (obj) { return obj.initArgs; }, set: function (obj, value) { obj.initArgs = value; } }, metadata: _metadata }, _initArgs_initializers, _initArgs_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.DeployContractSpecDto = DeployContractSpecDto;
var DeploymentPlanDto = function () {
    var _a;
    var _network_decorators;
    var _network_initializers = [];
    var _network_extraInitializers = [];
    var _source_decorators;
    var _source_initializers = [];
    var _source_extraInitializers = [];
    var _dryRun_decorators;
    var _dryRun_initializers = [];
    var _dryRun_extraInitializers = [];
    var _publishRegistry_decorators;
    var _publishRegistry_initializers = [];
    var _publishRegistry_extraInitializers = [];
    var _adminPublicKey_decorators;
    var _adminPublicKey_initializers = [];
    var _adminPublicKey_extraInitializers = [];
    var _contracts_decorators;
    var _contracts_initializers = [];
    var _contracts_extraInitializers = [];
    return _a = /** @class */ (function () {
            function DeploymentPlanDto() {
                this.network = __runInitializers(this, _network_initializers, void 0);
                this.source = (__runInitializers(this, _network_extraInitializers), __runInitializers(this, _source_initializers, void 0));
                this.dryRun = (__runInitializers(this, _source_extraInitializers), __runInitializers(this, _dryRun_initializers, void 0));
                this.publishRegistry = (__runInitializers(this, _dryRun_extraInitializers), __runInitializers(this, _publishRegistry_initializers, void 0));
                this.adminPublicKey = (__runInitializers(this, _publishRegistry_extraInitializers), __runInitializers(this, _adminPublicKey_initializers, void 0));
                this.contracts = (__runInitializers(this, _adminPublicKey_extraInitializers), __runInitializers(this, _contracts_initializers, void 0));
                __runInitializers(this, _contracts_extraInitializers);
            }
            return DeploymentPlanDto;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _network_decorators = [(0, swagger_1.ApiProperty)({ example: "testnet" }), (0, class_validator_1.IsString)(), (0, class_validator_1.Matches)(/^(testnet|mainnet)$/)];
            _source_decorators = [(0, swagger_1.ApiProperty)({ example: "test" }), (0, class_validator_1.IsString)(), (0, class_validator_1.IsNotEmpty)()];
            _dryRun_decorators = [(0, swagger_1.ApiPropertyOptional)({ example: true, default: true }), (0, class_validator_1.IsOptional)(), (0, class_validator_1.IsBoolean)()];
            _publishRegistry_decorators = [(0, swagger_1.ApiPropertyOptional)({ example: true, default: true }), (0, class_validator_1.IsOptional)(), (0, class_validator_1.IsBoolean)()];
            _adminPublicKey_decorators = [(0, swagger_1.ApiPropertyOptional)({ example: "GADMINEXAMPLE..." }), (0, class_validator_1.IsOptional)(), (0, class_validator_1.IsString)()];
            _contracts_decorators = [(0, swagger_1.ApiProperty)({ type: [DeployContractSpecDto] }), (0, class_validator_1.IsArray)(), (0, class_validator_1.ValidateNested)({ each: true }), (0, class_transformer_1.Type)(function () { return DeployContractSpecDto; })];
            __esDecorate(null, null, _network_decorators, { kind: "field", name: "network", static: false, private: false, access: { has: function (obj) { return "network" in obj; }, get: function (obj) { return obj.network; }, set: function (obj, value) { obj.network = value; } }, metadata: _metadata }, _network_initializers, _network_extraInitializers);
            __esDecorate(null, null, _source_decorators, { kind: "field", name: "source", static: false, private: false, access: { has: function (obj) { return "source" in obj; }, get: function (obj) { return obj.source; }, set: function (obj, value) { obj.source = value; } }, metadata: _metadata }, _source_initializers, _source_extraInitializers);
            __esDecorate(null, null, _dryRun_decorators, { kind: "field", name: "dryRun", static: false, private: false, access: { has: function (obj) { return "dryRun" in obj; }, get: function (obj) { return obj.dryRun; }, set: function (obj, value) { obj.dryRun = value; } }, metadata: _metadata }, _dryRun_initializers, _dryRun_extraInitializers);
            __esDecorate(null, null, _publishRegistry_decorators, { kind: "field", name: "publishRegistry", static: false, private: false, access: { has: function (obj) { return "publishRegistry" in obj; }, get: function (obj) { return obj.publishRegistry; }, set: function (obj, value) { obj.publishRegistry = value; } }, metadata: _metadata }, _publishRegistry_initializers, _publishRegistry_extraInitializers);
            __esDecorate(null, null, _adminPublicKey_decorators, { kind: "field", name: "adminPublicKey", static: false, private: false, access: { has: function (obj) { return "adminPublicKey" in obj; }, get: function (obj) { return obj.adminPublicKey; }, set: function (obj, value) { obj.adminPublicKey = value; } }, metadata: _metadata }, _adminPublicKey_initializers, _adminPublicKey_extraInitializers);
            __esDecorate(null, null, _contracts_decorators, { kind: "field", name: "contracts", static: false, private: false, access: { has: function (obj) { return "contracts" in obj; }, get: function (obj) { return obj.contracts; }, set: function (obj, value) { obj.contracts = value; } }, metadata: _metadata }, _contracts_initializers, _contracts_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.DeploymentPlanDto = DeploymentPlanDto;
