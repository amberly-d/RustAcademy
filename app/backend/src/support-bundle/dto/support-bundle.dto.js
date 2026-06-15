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
exports.SupportBundleDto = exports.SupportBundleMetadataDto = exports.RecentErrorDto = exports.IndexerStatusDto = exports.CheckpointDto = exports.ContractRegistrySnapshotDto = exports.ContractRegistryEntryDto = exports.NetworkConfigDto = void 0;
var swagger_1 = require("@nestjs/swagger");
var NetworkConfigDto = function () {
    var _a;
    var _network_decorators;
    var _network_initializers = [];
    var _network_extraInitializers = [];
    var _network_passphrase_decorators;
    var _network_passphrase_initializers = [];
    var _network_passphrase_extraInitializers = [];
    return _a = /** @class */ (function () {
            function NetworkConfigDto() {
                this.network = __runInitializers(this, _network_initializers, void 0);
                this.network_passphrase = (__runInitializers(this, _network_extraInitializers), __runInitializers(this, _network_passphrase_initializers, void 0));
                __runInitializers(this, _network_passphrase_extraInitializers);
            }
            return NetworkConfigDto;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _network_decorators = [(0, swagger_1.ApiProperty)({ example: "testnet" })];
            _network_passphrase_decorators = [(0, swagger_1.ApiProperty)({ example: "Test SDF Network ; September 2015" })];
            __esDecorate(null, null, _network_decorators, { kind: "field", name: "network", static: false, private: false, access: { has: function (obj) { return "network" in obj; }, get: function (obj) { return obj.network; }, set: function (obj, value) { obj.network = value; } }, metadata: _metadata }, _network_initializers, _network_extraInitializers);
            __esDecorate(null, null, _network_passphrase_decorators, { kind: "field", name: "network_passphrase", static: false, private: false, access: { has: function (obj) { return "network_passphrase" in obj; }, get: function (obj) { return obj.network_passphrase; }, set: function (obj, value) { obj.network_passphrase = value; } }, metadata: _metadata }, _network_passphrase_initializers, _network_passphrase_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.NetworkConfigDto = NetworkConfigDto;
var ContractRegistryEntryDto = function () {
    var _a;
    var _name_decorators;
    var _name_initializers = [];
    var _name_extraInitializers = [];
    var _contract_id_decorators;
    var _contract_id_initializers = [];
    var _contract_id_extraInitializers = [];
    var _version_decorators;
    var _version_initializers = [];
    var _version_extraInitializers = [];
    var _wasm_hash_decorators;
    var _wasm_hash_initializers = [];
    var _wasm_hash_extraInitializers = [];
    var _updated_at_decorators;
    var _updated_at_initializers = [];
    var _updated_at_extraInitializers = [];
    return _a = /** @class */ (function () {
            function ContractRegistryEntryDto() {
                this.name = __runInitializers(this, _name_initializers, void 0);
                this.contract_id = (__runInitializers(this, _name_extraInitializers), __runInitializers(this, _contract_id_initializers, void 0));
                this.version = (__runInitializers(this, _contract_id_extraInitializers), __runInitializers(this, _version_initializers, void 0));
                this.wasm_hash = (__runInitializers(this, _version_extraInitializers), __runInitializers(this, _wasm_hash_initializers, void 0));
                this.updated_at = (__runInitializers(this, _wasm_hash_extraInitializers), __runInitializers(this, _updated_at_initializers, void 0));
                __runInitializers(this, _updated_at_extraInitializers);
            }
            return ContractRegistryEntryDto;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _name_decorators = [(0, swagger_1.ApiProperty)({ example: " RustAcademy" })];
            _contract_id_decorators = [(0, swagger_1.ApiProperty)({ example: "CD2J6K7T3YJ77QXZP3EXAMPLE" })];
            _version_decorators = [(0, swagger_1.ApiProperty)({ example: 3 })];
            _wasm_hash_decorators = [(0, swagger_1.ApiProperty)({ example: "abcdef1234567890..." })];
            _updated_at_decorators = [(0, swagger_1.ApiProperty)({ example: "2026-06-01T10:00:00Z" })];
            __esDecorate(null, null, _name_decorators, { kind: "field", name: "name", static: false, private: false, access: { has: function (obj) { return "name" in obj; }, get: function (obj) { return obj.name; }, set: function (obj, value) { obj.name = value; } }, metadata: _metadata }, _name_initializers, _name_extraInitializers);
            __esDecorate(null, null, _contract_id_decorators, { kind: "field", name: "contract_id", static: false, private: false, access: { has: function (obj) { return "contract_id" in obj; }, get: function (obj) { return obj.contract_id; }, set: function (obj, value) { obj.contract_id = value; } }, metadata: _metadata }, _contract_id_initializers, _contract_id_extraInitializers);
            __esDecorate(null, null, _version_decorators, { kind: "field", name: "version", static: false, private: false, access: { has: function (obj) { return "version" in obj; }, get: function (obj) { return obj.version; }, set: function (obj, value) { obj.version = value; } }, metadata: _metadata }, _version_initializers, _version_extraInitializers);
            __esDecorate(null, null, _wasm_hash_decorators, { kind: "field", name: "wasm_hash", static: false, private: false, access: { has: function (obj) { return "wasm_hash" in obj; }, get: function (obj) { return obj.wasm_hash; }, set: function (obj, value) { obj.wasm_hash = value; } }, metadata: _metadata }, _wasm_hash_initializers, _wasm_hash_extraInitializers);
            __esDecorate(null, null, _updated_at_decorators, { kind: "field", name: "updated_at", static: false, private: false, access: { has: function (obj) { return "updated_at" in obj; }, get: function (obj) { return obj.updated_at; }, set: function (obj, value) { obj.updated_at = value; } }, metadata: _metadata }, _updated_at_initializers, _updated_at_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.ContractRegistryEntryDto = ContractRegistryEntryDto;
var ContractRegistrySnapshotDto = function () {
    var _a;
    var _active_contracts_decorators;
    var _active_contracts_initializers = [];
    var _active_contracts_extraInitializers = [];
    return _a = /** @class */ (function () {
            function ContractRegistrySnapshotDto() {
                this.active_contracts = __runInitializers(this, _active_contracts_initializers, void 0);
                __runInitializers(this, _active_contracts_extraInitializers);
            }
            return ContractRegistrySnapshotDto;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _active_contracts_decorators = [(0, swagger_1.ApiProperty)({ type: [ContractRegistryEntryDto] })];
            __esDecorate(null, null, _active_contracts_decorators, { kind: "field", name: "active_contracts", static: false, private: false, access: { has: function (obj) { return "active_contracts" in obj; }, get: function (obj) { return obj.active_contracts; }, set: function (obj, value) { obj.active_contracts = value; } }, metadata: _metadata }, _active_contracts_initializers, _active_contracts_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.ContractRegistrySnapshotDto = ContractRegistrySnapshotDto;
var CheckpointDto = function () {
    var _a;
    var _contract_id_decorators;
    var _contract_id_initializers = [];
    var _contract_id_extraInitializers = [];
    var _last_ledger_decorators;
    var _last_ledger_initializers = [];
    var _last_ledger_extraInitializers = [];
    var _updated_at_decorators;
    var _updated_at_initializers = [];
    var _updated_at_extraInitializers = [];
    return _a = /** @class */ (function () {
            function CheckpointDto() {
                this.contract_id = __runInitializers(this, _contract_id_initializers, void 0);
                this.last_ledger = (__runInitializers(this, _contract_id_extraInitializers), __runInitializers(this, _last_ledger_initializers, void 0));
                this.updated_at = (__runInitializers(this, _last_ledger_extraInitializers), __runInitializers(this, _updated_at_initializers, void 0));
                __runInitializers(this, _updated_at_extraInitializers);
            }
            return CheckpointDto;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _contract_id_decorators = [(0, swagger_1.ApiProperty)({ example: "CD2J6K7T3YJ77QXZP3EXAMPLE" })];
            _last_ledger_decorators = [(0, swagger_1.ApiProperty)({ example: 49999500 })];
            _updated_at_decorators = [(0, swagger_1.ApiProperty)({ example: "2026-06-02T12:30:00Z" })];
            __esDecorate(null, null, _contract_id_decorators, { kind: "field", name: "contract_id", static: false, private: false, access: { has: function (obj) { return "contract_id" in obj; }, get: function (obj) { return obj.contract_id; }, set: function (obj, value) { obj.contract_id = value; } }, metadata: _metadata }, _contract_id_initializers, _contract_id_extraInitializers);
            __esDecorate(null, null, _last_ledger_decorators, { kind: "field", name: "last_ledger", static: false, private: false, access: { has: function (obj) { return "last_ledger" in obj; }, get: function (obj) { return obj.last_ledger; }, set: function (obj, value) { obj.last_ledger = value; } }, metadata: _metadata }, _last_ledger_initializers, _last_ledger_extraInitializers);
            __esDecorate(null, null, _updated_at_decorators, { kind: "field", name: "updated_at", static: false, private: false, access: { has: function (obj) { return "updated_at" in obj; }, get: function (obj) { return obj.updated_at; }, set: function (obj, value) { obj.updated_at = value; } }, metadata: _metadata }, _updated_at_initializers, _updated_at_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.CheckpointDto = CheckpointDto;
var IndexerStatusDto = function () {
    var _a;
    var _current_network_ledger_decorators;
    var _current_network_ledger_initializers = [];
    var _current_network_ledger_extraInitializers = [];
    var _last_indexed_ledger_decorators;
    var _last_indexed_ledger_initializers = [];
    var _last_indexed_ledger_extraInitializers = [];
    var _lag_ledgers_decorators;
    var _lag_ledgers_initializers = [];
    var _lag_ledgers_extraInitializers = [];
    var _is_lagging_decorators;
    var _is_lagging_initializers = [];
    var _is_lagging_extraInitializers = [];
    var _status_decorators;
    var _status_initializers = [];
    var _status_extraInitializers = [];
    return _a = /** @class */ (function () {
            function IndexerStatusDto() {
                this.current_network_ledger = __runInitializers(this, _current_network_ledger_initializers, void 0);
                this.last_indexed_ledger = (__runInitializers(this, _current_network_ledger_extraInitializers), __runInitializers(this, _last_indexed_ledger_initializers, void 0));
                this.lag_ledgers = (__runInitializers(this, _last_indexed_ledger_extraInitializers), __runInitializers(this, _lag_ledgers_initializers, void 0));
                this.is_lagging = (__runInitializers(this, _lag_ledgers_extraInitializers), __runInitializers(this, _is_lagging_initializers, void 0));
                this.status = (__runInitializers(this, _is_lagging_extraInitializers), __runInitializers(this, _status_initializers, void 0));
                __runInitializers(this, _status_extraInitializers);
            }
            return IndexerStatusDto;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _current_network_ledger_decorators = [(0, swagger_1.ApiProperty)({ example: 50000000 })];
            _last_indexed_ledger_decorators = [(0, swagger_1.ApiProperty)({ example: 49999500 })];
            _lag_ledgers_decorators = [(0, swagger_1.ApiProperty)({ example: 500 })];
            _is_lagging_decorators = [(0, swagger_1.ApiProperty)({ example: false })];
            _status_decorators = [(0, swagger_1.ApiProperty)({
                    example: "HEALTHY",
                    enum: ["HEALTHY", "LAGGING", "DISABLED", "UNKNOWN"],
                })];
            __esDecorate(null, null, _current_network_ledger_decorators, { kind: "field", name: "current_network_ledger", static: false, private: false, access: { has: function (obj) { return "current_network_ledger" in obj; }, get: function (obj) { return obj.current_network_ledger; }, set: function (obj, value) { obj.current_network_ledger = value; } }, metadata: _metadata }, _current_network_ledger_initializers, _current_network_ledger_extraInitializers);
            __esDecorate(null, null, _last_indexed_ledger_decorators, { kind: "field", name: "last_indexed_ledger", static: false, private: false, access: { has: function (obj) { return "last_indexed_ledger" in obj; }, get: function (obj) { return obj.last_indexed_ledger; }, set: function (obj, value) { obj.last_indexed_ledger = value; } }, metadata: _metadata }, _last_indexed_ledger_initializers, _last_indexed_ledger_extraInitializers);
            __esDecorate(null, null, _lag_ledgers_decorators, { kind: "field", name: "lag_ledgers", static: false, private: false, access: { has: function (obj) { return "lag_ledgers" in obj; }, get: function (obj) { return obj.lag_ledgers; }, set: function (obj, value) { obj.lag_ledgers = value; } }, metadata: _metadata }, _lag_ledgers_initializers, _lag_ledgers_extraInitializers);
            __esDecorate(null, null, _is_lagging_decorators, { kind: "field", name: "is_lagging", static: false, private: false, access: { has: function (obj) { return "is_lagging" in obj; }, get: function (obj) { return obj.is_lagging; }, set: function (obj, value) { obj.is_lagging = value; } }, metadata: _metadata }, _is_lagging_initializers, _is_lagging_extraInitializers);
            __esDecorate(null, null, _status_decorators, { kind: "field", name: "status", static: false, private: false, access: { has: function (obj) { return "status" in obj; }, get: function (obj) { return obj.status; }, set: function (obj, value) { obj.status = value; } }, metadata: _metadata }, _status_initializers, _status_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.IndexerStatusDto = IndexerStatusDto;
var RecentErrorDto = function () {
    var _a;
    var _timestamp_decorators;
    var _timestamp_initializers = [];
    var _timestamp_extraInitializers = [];
    var _action_decorators;
    var _action_initializers = [];
    var _action_extraInitializers = [];
    var _actor_decorators;
    var _actor_initializers = [];
    var _actor_extraInitializers = [];
    var _error_summary_decorators;
    var _error_summary_initializers = [];
    var _error_summary_extraInitializers = [];
    var _request_id_decorators;
    var _request_id_initializers = [];
    var _request_id_extraInitializers = [];
    return _a = /** @class */ (function () {
            function RecentErrorDto() {
                this.timestamp = __runInitializers(this, _timestamp_initializers, void 0);
                this.action = (__runInitializers(this, _timestamp_extraInitializers), __runInitializers(this, _action_initializers, void 0));
                this.actor = (__runInitializers(this, _action_extraInitializers), __runInitializers(this, _actor_initializers, void 0));
                this.error_summary = (__runInitializers(this, _actor_extraInitializers), __runInitializers(this, _error_summary_initializers, void 0));
                this.request_id = (__runInitializers(this, _error_summary_extraInitializers), __runInitializers(this, _request_id_initializers, void 0));
                __runInitializers(this, _request_id_extraInitializers);
            }
            return RecentErrorDto;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _timestamp_decorators = [(0, swagger_1.ApiProperty)({ example: "2026-06-02T12:20:00Z" })];
            _action_decorators = [(0, swagger_1.ApiProperty)({ example: "escrow.deposit" })];
            _actor_decorators = [(0, swagger_1.ApiProperty)({ example: "[REDACTED]" })];
            _error_summary_decorators = [(0, swagger_1.ApiProperty)({ example: "Insufficient balance" })];
            _request_id_decorators = [(0, swagger_1.ApiPropertyOptional)({ example: "req-12345" })];
            __esDecorate(null, null, _timestamp_decorators, { kind: "field", name: "timestamp", static: false, private: false, access: { has: function (obj) { return "timestamp" in obj; }, get: function (obj) { return obj.timestamp; }, set: function (obj, value) { obj.timestamp = value; } }, metadata: _metadata }, _timestamp_initializers, _timestamp_extraInitializers);
            __esDecorate(null, null, _action_decorators, { kind: "field", name: "action", static: false, private: false, access: { has: function (obj) { return "action" in obj; }, get: function (obj) { return obj.action; }, set: function (obj, value) { obj.action = value; } }, metadata: _metadata }, _action_initializers, _action_extraInitializers);
            __esDecorate(null, null, _actor_decorators, { kind: "field", name: "actor", static: false, private: false, access: { has: function (obj) { return "actor" in obj; }, get: function (obj) { return obj.actor; }, set: function (obj, value) { obj.actor = value; } }, metadata: _metadata }, _actor_initializers, _actor_extraInitializers);
            __esDecorate(null, null, _error_summary_decorators, { kind: "field", name: "error_summary", static: false, private: false, access: { has: function (obj) { return "error_summary" in obj; }, get: function (obj) { return obj.error_summary; }, set: function (obj, value) { obj.error_summary = value; } }, metadata: _metadata }, _error_summary_initializers, _error_summary_extraInitializers);
            __esDecorate(null, null, _request_id_decorators, { kind: "field", name: "request_id", static: false, private: false, access: { has: function (obj) { return "request_id" in obj; }, get: function (obj) { return obj.request_id; }, set: function (obj, value) { obj.request_id = value; } }, metadata: _metadata }, _request_id_initializers, _request_id_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.RecentErrorDto = RecentErrorDto;
var SupportBundleMetadataDto = function () {
    var _a;
    var _version_decorators;
    var _version_initializers = [];
    var _version_extraInitializers = [];
    var _generated_at_decorators;
    var _generated_at_initializers = [];
    var _generated_at_extraInitializers = [];
    var _network_decorators;
    var _network_initializers = [];
    var _network_extraInitializers = [];
    var _bundle_size_bytes_decorators;
    var _bundle_size_bytes_initializers = [];
    var _bundle_size_bytes_extraInitializers = [];
    return _a = /** @class */ (function () {
            function SupportBundleMetadataDto() {
                this.version = __runInitializers(this, _version_initializers, void 0);
                this.generated_at = (__runInitializers(this, _version_extraInitializers), __runInitializers(this, _generated_at_initializers, void 0));
                this.network = (__runInitializers(this, _generated_at_extraInitializers), __runInitializers(this, _network_initializers, void 0));
                this.bundle_size_bytes = (__runInitializers(this, _network_extraInitializers), __runInitializers(this, _bundle_size_bytes_initializers, void 0));
                __runInitializers(this, _bundle_size_bytes_extraInitializers);
            }
            return SupportBundleMetadataDto;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _version_decorators = [(0, swagger_1.ApiProperty)({ example: "1.0" })];
            _generated_at_decorators = [(0, swagger_1.ApiProperty)({ example: "2026-06-02T12:34:56Z" })];
            _network_decorators = [(0, swagger_1.ApiProperty)({ example: "testnet" })];
            _bundle_size_bytes_decorators = [(0, swagger_1.ApiProperty)({ example: 12345 })];
            __esDecorate(null, null, _version_decorators, { kind: "field", name: "version", static: false, private: false, access: { has: function (obj) { return "version" in obj; }, get: function (obj) { return obj.version; }, set: function (obj, value) { obj.version = value; } }, metadata: _metadata }, _version_initializers, _version_extraInitializers);
            __esDecorate(null, null, _generated_at_decorators, { kind: "field", name: "generated_at", static: false, private: false, access: { has: function (obj) { return "generated_at" in obj; }, get: function (obj) { return obj.generated_at; }, set: function (obj, value) { obj.generated_at = value; } }, metadata: _metadata }, _generated_at_initializers, _generated_at_extraInitializers);
            __esDecorate(null, null, _network_decorators, { kind: "field", name: "network", static: false, private: false, access: { has: function (obj) { return "network" in obj; }, get: function (obj) { return obj.network; }, set: function (obj, value) { obj.network = value; } }, metadata: _metadata }, _network_initializers, _network_extraInitializers);
            __esDecorate(null, null, _bundle_size_bytes_decorators, { kind: "field", name: "bundle_size_bytes", static: false, private: false, access: { has: function (obj) { return "bundle_size_bytes" in obj; }, get: function (obj) { return obj.bundle_size_bytes; }, set: function (obj, value) { obj.bundle_size_bytes = value; } }, metadata: _metadata }, _bundle_size_bytes_initializers, _bundle_size_bytes_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.SupportBundleMetadataDto = SupportBundleMetadataDto;
var SupportBundleDto = function () {
    var _a;
    var _metadata_decorators;
    var _metadata_initializers = [];
    var _metadata_extraInitializers = [];
    var _network_config_decorators;
    var _network_config_initializers = [];
    var _network_config_extraInitializers = [];
    var _contract_registry_decorators;
    var _contract_registry_initializers = [];
    var _contract_registry_extraInitializers = [];
    var _indexer_status_decorators;
    var _indexer_status_initializers = [];
    var _indexer_status_extraInitializers = [];
    var _checkpoints_decorators;
    var _checkpoints_initializers = [];
    var _checkpoints_extraInitializers = [];
    var _recent_errors_decorators;
    var _recent_errors_initializers = [];
    var _recent_errors_extraInitializers = [];
    return _a = /** @class */ (function () {
            function SupportBundleDto() {
                this.metadata = __runInitializers(this, _metadata_initializers, void 0);
                this.network_config = (__runInitializers(this, _metadata_extraInitializers), __runInitializers(this, _network_config_initializers, void 0));
                this.contract_registry = (__runInitializers(this, _network_config_extraInitializers), __runInitializers(this, _contract_registry_initializers, void 0));
                this.indexer_status = (__runInitializers(this, _contract_registry_extraInitializers), __runInitializers(this, _indexer_status_initializers, void 0));
                this.checkpoints = (__runInitializers(this, _indexer_status_extraInitializers), __runInitializers(this, _checkpoints_initializers, void 0));
                this.recent_errors = (__runInitializers(this, _checkpoints_extraInitializers), __runInitializers(this, _recent_errors_initializers, void 0));
                __runInitializers(this, _recent_errors_extraInitializers);
            }
            return SupportBundleDto;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _metadata_decorators = [(0, swagger_1.ApiProperty)()];
            _network_config_decorators = [(0, swagger_1.ApiProperty)()];
            _contract_registry_decorators = [(0, swagger_1.ApiProperty)()];
            _indexer_status_decorators = [(0, swagger_1.ApiProperty)()];
            _checkpoints_decorators = [(0, swagger_1.ApiProperty)({ type: [CheckpointDto] })];
            _recent_errors_decorators = [(0, swagger_1.ApiProperty)({ type: [RecentErrorDto] })];
            __esDecorate(null, null, _metadata_decorators, { kind: "field", name: "metadata", static: false, private: false, access: { has: function (obj) { return "metadata" in obj; }, get: function (obj) { return obj.metadata; }, set: function (obj, value) { obj.metadata = value; } }, metadata: _metadata }, _metadata_initializers, _metadata_extraInitializers);
            __esDecorate(null, null, _network_config_decorators, { kind: "field", name: "network_config", static: false, private: false, access: { has: function (obj) { return "network_config" in obj; }, get: function (obj) { return obj.network_config; }, set: function (obj, value) { obj.network_config = value; } }, metadata: _metadata }, _network_config_initializers, _network_config_extraInitializers);
            __esDecorate(null, null, _contract_registry_decorators, { kind: "field", name: "contract_registry", static: false, private: false, access: { has: function (obj) { return "contract_registry" in obj; }, get: function (obj) { return obj.contract_registry; }, set: function (obj, value) { obj.contract_registry = value; } }, metadata: _metadata }, _contract_registry_initializers, _contract_registry_extraInitializers);
            __esDecorate(null, null, _indexer_status_decorators, { kind: "field", name: "indexer_status", static: false, private: false, access: { has: function (obj) { return "indexer_status" in obj; }, get: function (obj) { return obj.indexer_status; }, set: function (obj, value) { obj.indexer_status = value; } }, metadata: _metadata }, _indexer_status_initializers, _indexer_status_extraInitializers);
            __esDecorate(null, null, _checkpoints_decorators, { kind: "field", name: "checkpoints", static: false, private: false, access: { has: function (obj) { return "checkpoints" in obj; }, get: function (obj) { return obj.checkpoints; }, set: function (obj, value) { obj.checkpoints = value; } }, metadata: _metadata }, _checkpoints_initializers, _checkpoints_extraInitializers);
            __esDecorate(null, null, _recent_errors_decorators, { kind: "field", name: "recent_errors", static: false, private: false, access: { has: function (obj) { return "recent_errors" in obj; }, get: function (obj) { return obj.recent_errors; }, set: function (obj, value) { obj.recent_errors = value; } }, metadata: _metadata }, _recent_errors_initializers, _recent_errors_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.SupportBundleDto = SupportBundleDto;
