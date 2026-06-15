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
exports.ContractRegistryResponseDto = exports.RollbackContractRegistryDto = exports.PublishContractRegistryDto = exports.ContractRegistryEntryDto = void 0;
var swagger_1 = require("@nestjs/swagger");
var class_validator_1 = require("class-validator");
var class_transformer_1 = require("class-transformer");
var ContractRegistryEntryDto = function () {
    var _a;
    var _name_decorators;
    var _name_initializers = [];
    var _name_extraInitializers = [];
    var _contractId_decorators;
    var _contractId_initializers = [];
    var _contractId_extraInitializers = [];
    var _previousContractId_decorators;
    var _previousContractId_initializers = [];
    var _previousContractId_extraInitializers = [];
    var _effectiveLedger_decorators;
    var _effectiveLedger_initializers = [];
    var _effectiveLedger_extraInitializers = [];
    var _effectiveTime_decorators;
    var _effectiveTime_initializers = [];
    var _effectiveTime_extraInitializers = [];
    var _wasmHash_decorators;
    var _wasmHash_initializers = [];
    var _wasmHash_extraInitializers = [];
    var _contractVersion_decorators;
    var _contractVersion_initializers = [];
    var _contractVersion_extraInitializers = [];
    var _metadata_decorators;
    var _metadata_initializers = [];
    var _metadata_extraInitializers = [];
    return _a = /** @class */ (function () {
            function ContractRegistryEntryDto() {
                this.name = __runInitializers(this, _name_initializers, void 0);
                this.contractId = (__runInitializers(this, _name_extraInitializers), __runInitializers(this, _contractId_initializers, void 0));
                this.previousContractId = (__runInitializers(this, _contractId_extraInitializers), __runInitializers(this, _previousContractId_initializers, void 0));
                this.effectiveLedger = (__runInitializers(this, _previousContractId_extraInitializers), __runInitializers(this, _effectiveLedger_initializers, void 0));
                this.effectiveTime = (__runInitializers(this, _effectiveLedger_extraInitializers), __runInitializers(this, _effectiveTime_initializers, void 0));
                this.wasmHash = (__runInitializers(this, _effectiveTime_extraInitializers), __runInitializers(this, _wasmHash_initializers, void 0));
                this.contractVersion = (__runInitializers(this, _wasmHash_extraInitializers), __runInitializers(this, _contractVersion_initializers, void 0));
                this.metadata = (__runInitializers(this, _contractVersion_extraInitializers), __runInitializers(this, _metadata_initializers, void 0));
                __runInitializers(this, _metadata_extraInitializers);
            }
            return ContractRegistryEntryDto;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _name_decorators = [(0, swagger_1.ApiProperty)({ example: " RustAcademy" }), (0, class_validator_1.IsString)(), (0, class_validator_1.IsNotEmpty)(), (0, class_validator_1.Matches)(/^[a-z0-9_-]+$/i)];
            _contractId_decorators = [(0, swagger_1.ApiProperty)({ example: "CD2J6K7T3YJ77QXZP3EXAMPLE" }), (0, class_validator_1.IsString)(), (0, class_validator_1.IsNotEmpty)()];
            _previousContractId_decorators = [(0, swagger_1.ApiPropertyOptional)({
                    example: "CD2J6K7T3YJ77QXZP3OLDEXAMPLE",
                    description: "Previous contract ID for dual-read during transition window",
                }), (0, class_validator_1.IsOptional)(), (0, class_validator_1.IsString)()];
            _effectiveLedger_decorators = [(0, swagger_1.ApiPropertyOptional)({
                    example: 47000000,
                    description: "Ledger number after which to stop reading from previous contract ID",
                }), (0, class_validator_1.IsOptional)(), (0, class_validator_1.IsInt)(), (0, class_validator_1.Min)(1)];
            _effectiveTime_decorators = [(0, swagger_1.ApiPropertyOptional)({
                    example: "2026-06-02T12:00:00Z",
                    description: "ISO 8601 timestamp after which to stop reading from previous contract ID",
                }), (0, class_validator_1.IsOptional)(), (0, class_validator_1.IsISO8601)()];
            _wasmHash_decorators = [(0, swagger_1.ApiProperty)({ example: "abcdef1234567890" }), (0, class_validator_1.IsString)(), (0, class_validator_1.IsNotEmpty)()];
            _contractVersion_decorators = [(0, swagger_1.ApiPropertyOptional)({ example: 1, default: 1 }), (0, class_validator_1.IsOptional)(), (0, class_validator_1.IsInt)(), (0, class_validator_1.Min)(1), (0, class_validator_1.Max)(100000)];
            _metadata_decorators = [(0, swagger_1.ApiPropertyOptional)({ example: { source: "testnet-deploy" } }), (0, class_validator_1.IsOptional)(), (0, class_validator_1.IsObject)()];
            __esDecorate(null, null, _name_decorators, { kind: "field", name: "name", static: false, private: false, access: { has: function (obj) { return "name" in obj; }, get: function (obj) { return obj.name; }, set: function (obj, value) { obj.name = value; } }, metadata: _metadata }, _name_initializers, _name_extraInitializers);
            __esDecorate(null, null, _contractId_decorators, { kind: "field", name: "contractId", static: false, private: false, access: { has: function (obj) { return "contractId" in obj; }, get: function (obj) { return obj.contractId; }, set: function (obj, value) { obj.contractId = value; } }, metadata: _metadata }, _contractId_initializers, _contractId_extraInitializers);
            __esDecorate(null, null, _previousContractId_decorators, { kind: "field", name: "previousContractId", static: false, private: false, access: { has: function (obj) { return "previousContractId" in obj; }, get: function (obj) { return obj.previousContractId; }, set: function (obj, value) { obj.previousContractId = value; } }, metadata: _metadata }, _previousContractId_initializers, _previousContractId_extraInitializers);
            __esDecorate(null, null, _effectiveLedger_decorators, { kind: "field", name: "effectiveLedger", static: false, private: false, access: { has: function (obj) { return "effectiveLedger" in obj; }, get: function (obj) { return obj.effectiveLedger; }, set: function (obj, value) { obj.effectiveLedger = value; } }, metadata: _metadata }, _effectiveLedger_initializers, _effectiveLedger_extraInitializers);
            __esDecorate(null, null, _effectiveTime_decorators, { kind: "field", name: "effectiveTime", static: false, private: false, access: { has: function (obj) { return "effectiveTime" in obj; }, get: function (obj) { return obj.effectiveTime; }, set: function (obj, value) { obj.effectiveTime = value; } }, metadata: _metadata }, _effectiveTime_initializers, _effectiveTime_extraInitializers);
            __esDecorate(null, null, _wasmHash_decorators, { kind: "field", name: "wasmHash", static: false, private: false, access: { has: function (obj) { return "wasmHash" in obj; }, get: function (obj) { return obj.wasmHash; }, set: function (obj, value) { obj.wasmHash = value; } }, metadata: _metadata }, _wasmHash_initializers, _wasmHash_extraInitializers);
            __esDecorate(null, null, _contractVersion_decorators, { kind: "field", name: "contractVersion", static: false, private: false, access: { has: function (obj) { return "contractVersion" in obj; }, get: function (obj) { return obj.contractVersion; }, set: function (obj, value) { obj.contractVersion = value; } }, metadata: _metadata }, _contractVersion_initializers, _contractVersion_extraInitializers);
            __esDecorate(null, null, _metadata_decorators, { kind: "field", name: "metadata", static: false, private: false, access: { has: function (obj) { return "metadata" in obj; }, get: function (obj) { return obj.metadata; }, set: function (obj, value) { obj.metadata = value; } }, metadata: _metadata }, _metadata_initializers, _metadata_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.ContractRegistryEntryDto = ContractRegistryEntryDto;
var PublishContractRegistryDto = function () {
    var _a;
    var _networkPassphrase_decorators;
    var _networkPassphrase_initializers = [];
    var _networkPassphrase_extraInitializers = [];
    var _deploymentId_decorators;
    var _deploymentId_initializers = [];
    var _deploymentId_extraInitializers = [];
    var _contracts_decorators;
    var _contracts_initializers = [];
    var _contracts_extraInitializers = [];
    return _a = /** @class */ (function () {
            function PublishContractRegistryDto() {
                this.networkPassphrase = __runInitializers(this, _networkPassphrase_initializers, void 0);
                this.deploymentId = (__runInitializers(this, _networkPassphrase_extraInitializers), __runInitializers(this, _deploymentId_initializers, void 0));
                this.contracts = (__runInitializers(this, _deploymentId_extraInitializers), __runInitializers(this, _contracts_initializers, void 0));
                __runInitializers(this, _contracts_extraInitializers);
            }
            return PublishContractRegistryDto;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _networkPassphrase_decorators = [(0, swagger_1.ApiProperty)({ example: "Test SDF Network ; September 2015" }), (0, class_validator_1.IsString)(), (0, class_validator_1.IsNotEmpty)()];
            _deploymentId_decorators = [(0, swagger_1.ApiPropertyOptional)({ example: "deploy-2026-05-30T18:00:00Z" }), (0, class_validator_1.IsOptional)(), (0, class_validator_1.IsString)()];
            _contracts_decorators = [(0, swagger_1.ApiProperty)({ type: [ContractRegistryEntryDto] }), (0, class_validator_1.IsArray)(), (0, class_validator_1.ArrayMinSize)(1), (0, class_validator_1.ArrayMaxSize)(10), (0, class_validator_1.ValidateNested)({ each: true }), (0, class_transformer_1.Type)(function () { return ContractRegistryEntryDto; })];
            __esDecorate(null, null, _networkPassphrase_decorators, { kind: "field", name: "networkPassphrase", static: false, private: false, access: { has: function (obj) { return "networkPassphrase" in obj; }, get: function (obj) { return obj.networkPassphrase; }, set: function (obj, value) { obj.networkPassphrase = value; } }, metadata: _metadata }, _networkPassphrase_initializers, _networkPassphrase_extraInitializers);
            __esDecorate(null, null, _deploymentId_decorators, { kind: "field", name: "deploymentId", static: false, private: false, access: { has: function (obj) { return "deploymentId" in obj; }, get: function (obj) { return obj.deploymentId; }, set: function (obj, value) { obj.deploymentId = value; } }, metadata: _metadata }, _deploymentId_initializers, _deploymentId_extraInitializers);
            __esDecorate(null, null, _contracts_decorators, { kind: "field", name: "contracts", static: false, private: false, access: { has: function (obj) { return "contracts" in obj; }, get: function (obj) { return obj.contracts; }, set: function (obj, value) { obj.contracts = value; } }, metadata: _metadata }, _contracts_initializers, _contracts_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.PublishContractRegistryDto = PublishContractRegistryDto;
var RollbackContractRegistryDto = function () {
    var _a;
    var _name_decorators;
    var _name_initializers = [];
    var _name_extraInitializers = [];
    var _version_decorators;
    var _version_initializers = [];
    var _version_extraInitializers = [];
    return _a = /** @class */ (function () {
            function RollbackContractRegistryDto() {
                this.name = __runInitializers(this, _name_initializers, void 0);
                this.version = (__runInitializers(this, _name_extraInitializers), __runInitializers(this, _version_initializers, void 0));
                __runInitializers(this, _version_extraInitializers);
            }
            return RollbackContractRegistryDto;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _name_decorators = [(0, swagger_1.ApiProperty)({ example: " RustAcademy" }), (0, class_validator_1.IsString)(), (0, class_validator_1.IsNotEmpty)()];
            _version_decorators = [(0, swagger_1.ApiProperty)({ example: 1 }), (0, class_validator_1.IsInt)(), (0, class_validator_1.Min)(1)];
            __esDecorate(null, null, _name_decorators, { kind: "field", name: "name", static: false, private: false, access: { has: function (obj) { return "name" in obj; }, get: function (obj) { return obj.name; }, set: function (obj, value) { obj.name = value; } }, metadata: _metadata }, _name_initializers, _name_extraInitializers);
            __esDecorate(null, null, _version_decorators, { kind: "field", name: "version", static: false, private: false, access: { has: function (obj) { return "version" in obj; }, get: function (obj) { return obj.version; }, set: function (obj, value) { obj.version = value; } }, metadata: _metadata }, _version_initializers, _version_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.RollbackContractRegistryDto = RollbackContractRegistryDto;
var ContractRegistryResponseDto = function () {
    var _a;
    var _network_decorators;
    var _network_initializers = [];
    var _network_extraInitializers = [];
    var _etag_decorators;
    var _etag_initializers = [];
    var _etag_extraInitializers = [];
    var _version_decorators;
    var _version_initializers = [];
    var _version_extraInitializers = [];
    var _authoritative_decorators;
    var _authoritative_initializers = [];
    var _authoritative_extraInitializers = [];
    var _data_decorators;
    var _data_initializers = [];
    var _data_extraInitializers = [];
    return _a = /** @class */ (function () {
            function ContractRegistryResponseDto() {
                this.network = __runInitializers(this, _network_initializers, void 0);
                this.etag = (__runInitializers(this, _network_extraInitializers), __runInitializers(this, _etag_initializers, void 0));
                this.version = (__runInitializers(this, _etag_extraInitializers), __runInitializers(this, _version_initializers, void 0));
                this.authoritative = (__runInitializers(this, _version_extraInitializers), __runInitializers(this, _authoritative_initializers, void 0));
                this.data = (__runInitializers(this, _authoritative_extraInitializers), __runInitializers(this, _data_initializers, void 0));
                __runInitializers(this, _data_extraInitializers);
            }
            return ContractRegistryResponseDto;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _network_decorators = [(0, swagger_1.ApiProperty)({ example: "testnet" })];
            _etag_decorators = [(0, swagger_1.ApiProperty)({ example: 'W/"contract-registry-testnet-2"' })];
            _version_decorators = [(0, swagger_1.ApiProperty)({ example: 2 })];
            _authoritative_decorators = [(0, swagger_1.ApiProperty)({ example: true }), (0, class_validator_1.IsBoolean)()];
            _data_decorators = [(0, swagger_1.ApiProperty)({
                    example: {
                        RustAcademy: {
                            id: "CD2J6K7T3YJ77QXZP3EXAMPLE",
                            wasmHash: "abcdef1234567890",
                            version: 1,
                        },
                    },
                })];
            __esDecorate(null, null, _network_decorators, { kind: "field", name: "network", static: false, private: false, access: { has: function (obj) { return "network" in obj; }, get: function (obj) { return obj.network; }, set: function (obj, value) { obj.network = value; } }, metadata: _metadata }, _network_initializers, _network_extraInitializers);
            __esDecorate(null, null, _etag_decorators, { kind: "field", name: "etag", static: false, private: false, access: { has: function (obj) { return "etag" in obj; }, get: function (obj) { return obj.etag; }, set: function (obj, value) { obj.etag = value; } }, metadata: _metadata }, _etag_initializers, _etag_extraInitializers);
            __esDecorate(null, null, _version_decorators, { kind: "field", name: "version", static: false, private: false, access: { has: function (obj) { return "version" in obj; }, get: function (obj) { return obj.version; }, set: function (obj, value) { obj.version = value; } }, metadata: _metadata }, _version_initializers, _version_extraInitializers);
            __esDecorate(null, null, _authoritative_decorators, { kind: "field", name: "authoritative", static: false, private: false, access: { has: function (obj) { return "authoritative" in obj; }, get: function (obj) { return obj.authoritative; }, set: function (obj, value) { obj.authoritative = value; } }, metadata: _metadata }, _authoritative_initializers, _authoritative_extraInitializers);
            __esDecorate(null, null, _data_decorators, { kind: "field", name: "data", static: false, private: false, access: { has: function (obj) { return "data" in obj; }, get: function (obj) { return obj.data; }, set: function (obj, value) { obj.data = value; } }, metadata: _metadata }, _data_initializers, _data_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.ContractRegistryResponseDto = ContractRegistryResponseDto;
