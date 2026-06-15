"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContractRegistryService = void 0;
var common_1 = require("@nestjs/common");
var contract_registry_events_1 = require("../events/contract-registry.events");
var ContractRegistryService = function () {
    var _classDecorators = [(0, common_1.Injectable)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var ContractRegistryService = _classThis = /** @class */ (function () {
        function ContractRegistryService_1(supabaseService, auditService, configService, eventEmitter, contractChangeWebhookService, webhookDispatcher) {
            var _a;
            this.supabaseService = supabaseService;
            this.auditService = auditService;
            this.configService = configService;
            this.eventEmitter = eventEmitter;
            this.contractChangeWebhookService = contractChangeWebhookService;
            this.webhookDispatcher = webhookDispatcher;
            this.logger = new common_1.Logger(ContractRegistryService.name);
            this.fallbackStore = new Map();
            this.fallbackVersion = 0;
            this.expectedContracts = ((_a = process.env.CONTRACT_REGISTRY_EXPECTED_SET) !== null && _a !== void 0 ? _a : " RustAcademy")
                .split(",")
                .map(function (value) { return value.trim().toLowerCase(); })
                .filter(Boolean);
        }
        ContractRegistryService_1.prototype.getRegistry = function () {
            return __awaiter(this, void 0, void 0, function () {
                var records, active, data, version;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.readRecords()];
                        case 1:
                            records = _a.sent();
                            active = records.filter(function (record) { return record.active; });
                            data = Object.fromEntries(active.map(function (record) {
                                var _a;
                                return [
                                    record.name,
                                    {
                                        id: record.contractId,
                                        wasmHash: record.wasmHash,
                                        version: record.contractVersion,
                                        deploymentId: record.deploymentId,
                                        updatedAt: record.updatedAt,
                                        metadata: (_a = record.metadata) !== null && _a !== void 0 ? _a : {},
                                    },
                                ];
                            }));
                            version = active.reduce(function (max, record) { return Math.max(max, record.version); }, this.fallbackVersion);
                            return [2 /*return*/, {
                                    network: this.configService.network,
                                    authoritative: true,
                                    version: version,
                                    etag: this.buildEtag(version),
                                    data: data,
                                }];
                    }
                });
            });
        };
        ContractRegistryService_1.prototype.publish = function (dto_1) {
            return __awaiter(this, arguments, void 0, function (dto, actor) {
                var current, nextVersion, now, names, retained, published, merged, enabledWebhooks;
                var _this = this;
                if (actor === void 0) { actor = "deployment_automation"; }
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this.validatePassphrase(dto.networkPassphrase);
                            this.validateContractSet(dto.contracts);
                            return [4 /*yield*/, this.readRecords()];
                        case 1:
                            current = _a.sent();
                            nextVersion = current.reduce(function (max, record) { return Math.max(max, record.version); }, this.fallbackVersion);
                            now = new Date().toISOString();
                            names = new Set(dto.contracts.map(function (contract) { return contract.name.toLowerCase(); }));
                            retained = current.map(function (record) {
                                return names.has(record.name)
                                    ? __assign(__assign({}, record), { active: false, updatedAt: now }) : record;
                            });
                            published = dto.contracts.map(function (contract) {
                                nextVersion += 1;
                                return _this.toRecord(contract, dto, actor, nextVersion, now);
                            });
                            merged = __spreadArray(__spreadArray([], retained, true), published, true);
                            this.fallbackVersion = nextVersion;
                            this.writeFallback(merged);
                            return [4 /*yield*/, this.persistSnapshot(merged)];
                        case 2:
                            _a.sent();
                            return [4 /*yield*/, this.auditService.log("contract_registry", "registry.publish", dto.deploymentId, {
                                    actor: actor,
                                    version: nextVersion,
                                    contracts: published.map(function (record) { return ({
                                        name: record.name,
                                        contractId: record.contractId,
                                        wasmHash: record.wasmHash,
                                        contractVersion: record.contractVersion,
                                    }); }),
                                })];
                        case 3:
                            _a.sent();
                            this.logger.log("Published ".concat(published.length, " contract registry entr").concat(published.length === 1 ? "y" : "ies", " at version ").concat(nextVersion));
                            return [4 /*yield*/, this.eventEmitter.emit(contract_registry_events_1.ContractRegistryPublishedEvent, new contract_registry_events_1.ContractRegistryPublishedEventPayload(nextVersion, published.map(function (record) { return ({
                                    name: record.name,
                                    contractId: record.contractId,
                                    wasmHash: record.wasmHash,
                                    contractVersion: record.contractVersion,
                                    deploymentId: record.deploymentId,
                                }); }), actor))];
                        case 4:
                            _a.sent();
                            return [4 /*yield*/, this.contractChangeWebhookService.getEnabledWebhooks()];
                        case 5:
                            enabledWebhooks = _a.sent();
                            if (enabledWebhooks.length > 0) {
                                this.webhookDispatcher.dispatch(enabledWebhooks, {
                                    version: nextVersion,
                                    event: "contract_registry.published",
                                    actor: actor,
                                    deploymentId: dto.deploymentId,
                                    contracts: published.map(function (record) { return ({
                                        name: record.name,
                                        contractId: record.contractId,
                                        wasmHash: record.wasmHash,
                                        contractVersion: record.contractVersion,
                                        deploymentId: record.deploymentId,
                                    }); }),
                                });
                            }
                            return [2 /*return*/, this.getRegistry()];
                    }
                });
            });
        };
        ContractRegistryService_1.prototype.finalizeDualRead = function (contractName_1) {
            return __awaiter(this, arguments, void 0, function (contractName, actor) {
                var records, targetName, candidate, now, updated;
                if (actor === void 0) { actor = "deployment_automation"; }
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.readRecords()];
                        case 1:
                            records = _a.sent();
                            targetName = contractName.toLowerCase();
                            candidate = records.find(function (record) { return record.name === targetName && record.active; });
                            if (!candidate) {
                                throw new common_1.NotFoundException("No active registry entry found for ".concat(contractName));
                            }
                            if (!candidate.previousContractId) {
                                throw new common_1.BadRequestException("Registry entry for ".concat(contractName, " is not in a dual-read transition window"));
                            }
                            now = new Date().toISOString();
                            updated = records.map(function (record) {
                                if (record.name !== targetName)
                                    return record;
                                return __assign(__assign({}, record), { previousContractId: undefined, effectiveLedger: record.effectiveLedger, effectiveTime: now, updatedAt: now });
                            });
                            this.writeFallback(updated);
                            return [4 /*yield*/, this.persistSnapshot(updated)];
                        case 2:
                            _a.sent();
                            return [4 /*yield*/, this.auditService.log("contract_registry", "registry.finalize_dual_read", contractName, {
                                    actor: actor,
                                    finalizedAt: now,
                                })];
                        case 3:
                            _a.sent();
                            this.logger.log("Finalized dual-read for contract ".concat(contractName, " at timestamp ").concat(now));
                            return [2 /*return*/, this.getRegistry()];
                    }
                });
            });
        };
        ContractRegistryService_1.prototype.rollback = function (dto_1) {
            return __awaiter(this, arguments, void 0, function (dto, actor) {
                var records, targetName, candidate, now, nextVersion, updated, enabledWebhooks;
                if (actor === void 0) { actor = "deployment_automation"; }
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.readRecords()];
                        case 1:
                            records = _a.sent();
                            targetName = dto.name.toLowerCase();
                            candidate = records.find(function (record) {
                                return record.name === targetName && record.contractVersion === dto.version;
                            });
                            if (!candidate) {
                                throw new common_1.NotFoundException("No registry entry found for ".concat(dto.name, " at version ").concat(dto.version));
                            }
                            now = new Date().toISOString();
                            nextVersion = records.reduce(function (max, record) { return Math.max(max, record.version); }, this.fallbackVersion) + 1;
                            updated = records.map(function (record) {
                                if (record.name !== targetName)
                                    return record;
                                return __assign(__assign({}, record), { active: record.contractVersion === dto.version, updatedAt: now, version: record.contractVersion === dto.version ? nextVersion : record.version });
                            });
                            this.fallbackVersion = Math.max(this.fallbackVersion, nextVersion);
                            this.writeFallback(updated);
                            return [4 /*yield*/, this.persistSnapshot(updated)];
                        case 2:
                            _a.sent();
                            return [4 /*yield*/, this.auditService.log("contract_registry", "registry.rollback", dto.name, { actor: actor, requestedVersion: dto.version, registryVersion: nextVersion })];
                        case 3:
                            _a.sent();
                            return [4 /*yield*/, this.eventEmitter.emit(contract_registry_events_1.ContractRegistryRolledBackEvent, new contract_registry_events_1.ContractRegistryRolledBackEventPayload(targetName, nextVersion, candidate.contractId, candidate.wasmHash, candidate.contractVersion, actor))];
                        case 4:
                            _a.sent();
                            return [4 /*yield*/, this.contractChangeWebhookService.getEnabledWebhooks()];
                        case 5:
                            enabledWebhooks = _a.sent();
                            if (enabledWebhooks.length > 0) {
                                this.webhookDispatcher.dispatch(enabledWebhooks, {
                                    version: nextVersion,
                                    event: "contract_registry.rolled_back",
                                    contractName: targetName,
                                    contractId: candidate.contractId,
                                    wasmHash: candidate.wasmHash,
                                    contractVersion: candidate.contractVersion,
                                    actor: actor,
                                });
                            }
                            return [2 /*return*/, this.getRegistry()];
                    }
                });
            });
        };
        ContractRegistryService_1.prototype.validatePassphrase = function (passphrase) {
            var expected = this.configService.network === "mainnet"
                ? "Public Global Stellar Network ; September 2015"
                : "Test SDF Network ; September 2015";
            if (passphrase !== expected) {
                throw new common_1.BadRequestException("networkPassphrase does not match the active ".concat(this.configService.network, " network"));
            }
        };
        ContractRegistryService_1.prototype.validateContractSet = function (contracts) {
            var normalized = contracts
                .map(function (contract) { return contract.name.toLowerCase(); })
                .sort();
            var expected = __spreadArray([], this.expectedContracts, true).sort();
            if (normalized.length !== expected.length) {
                throw new common_1.BadRequestException("Expected ".concat(expected.length, " contract entries (").concat(expected.join(", "), ") but received ").concat(normalized.length));
            }
            for (var index = 0; index < expected.length; index += 1) {
                if (normalized[index] !== expected[index]) {
                    throw new common_1.BadRequestException("Unexpected contract set. Expected ".concat(expected.join(", ")));
                }
            }
        };
        ContractRegistryService_1.prototype.toRecord = function (contract, dto, actor, version, timestamp) {
            var _a;
            return {
                name: contract.name.toLowerCase(),
                network: this.configService.network,
                contractId: contract.contractId,
                wasmHash: contract.wasmHash,
                contractVersion: (_a = contract.contractVersion) !== null && _a !== void 0 ? _a : 1,
                deploymentId: dto.deploymentId,
                metadata: contract.metadata,
                publishedBy: actor,
                version: version,
                createdAt: timestamp,
                updatedAt: timestamp,
                networkPassphrase: dto.networkPassphrase,
                active: true,
            };
        };
        ContractRegistryService_1.prototype.buildEtag = function (version) {
            return "W/\"contract-registry-".concat(this.configService.network, "-").concat(version, "\"");
        };
        ContractRegistryService_1.prototype.fallbackKey = function () {
            return "contract-registry:".concat(this.configService.network);
        };
        ContractRegistryService_1.prototype.writeFallback = function (records) {
            this.fallbackStore.set(this.fallbackKey(), records);
        };
        ContractRegistryService_1.prototype.readRecords = function () {
            return __awaiter(this, void 0, void 0, function () {
                var fallback, client, _a, data, error, error_1;
                var _b;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            fallback = (_b = this.fallbackStore.get(this.fallbackKey())) !== null && _b !== void 0 ? _b : [];
                            _c.label = 1;
                        case 1:
                            _c.trys.push([1, 3, , 4]);
                            client = this.supabaseService.getClient();
                            return [4 /*yield*/, client
                                    .from("contract_registry_entries")
                                    .select("*")
                                    .eq("network", this.configService.network)
                                    .order("version", { ascending: true })];
                        case 2:
                            _a = _c.sent(), data = _a.data, error = _a.error;
                            if (error)
                                throw error;
                            if (!data || data.length === 0)
                                return [2 /*return*/, fallback];
                            return [2 /*return*/, data.map(function (row) {
                                    var _a;
                                    return ({
                                        name: String(row.contract_name),
                                        network: String(row.network),
                                        contractId: String(row.contract_id),
                                        previousContractId: row.previous_contract_id
                                            ? String(row.previous_contract_id)
                                            : undefined,
                                        effectiveLedger: row.effective_ledger
                                            ? Number(row.effective_ledger)
                                            : undefined,
                                        effectiveTime: row.effective_time
                                            ? String(row.effective_time)
                                            : undefined,
                                        wasmHash: String(row.wasm_hash),
                                        contractVersion: Number(row.contract_version),
                                        deploymentId: row.deployment_id ? String(row.deployment_id) : undefined,
                                        metadata: row.metadata && typeof row.metadata === "object"
                                            ? row.metadata
                                            : undefined,
                                        publishedBy: String((_a = row.published_by) !== null && _a !== void 0 ? _a : "unknown"),
                                        version: Number(row.version),
                                        createdAt: String(row.created_at),
                                        updatedAt: String(row.updated_at),
                                        networkPassphrase: String(row.network_passphrase),
                                        active: Boolean(row.is_active),
                                    });
                                })];
                        case 3:
                            error_1 = _c.sent();
                            this.logger.warn("Falling back to in-memory contract registry: ".concat(error_1.message));
                            return [2 /*return*/, fallback];
                        case 4: return [2 /*return*/];
                    }
                });
            });
        };
        ContractRegistryService_1.prototype.persistSnapshot = function (records) {
            return __awaiter(this, void 0, void 0, function () {
                var client, error, error_2;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 3, , 4]);
                            client = this.supabaseService.getClient();
                            return [4 /*yield*/, client
                                    .from("contract_registry_entries")
                                    .delete()
                                    .eq("network", this.configService.network)];
                        case 1:
                            _a.sent();
                            return [4 /*yield*/, client.from("contract_registry_entries").insert(records.map(function (record) {
                                    var _a, _b, _c, _d, _e;
                                    return ({
                                        contract_name: record.name,
                                        network: record.network,
                                        contract_id: record.contractId,
                                        previous_contract_id: (_a = record.previousContractId) !== null && _a !== void 0 ? _a : null,
                                        effective_ledger: (_b = record.effectiveLedger) !== null && _b !== void 0 ? _b : null,
                                        effective_time: (_c = record.effectiveTime) !== null && _c !== void 0 ? _c : null,
                                        wasm_hash: record.wasmHash,
                                        contract_version: record.contractVersion,
                                        deployment_id: (_d = record.deploymentId) !== null && _d !== void 0 ? _d : null,
                                        metadata: (_e = record.metadata) !== null && _e !== void 0 ? _e : {},
                                        published_by: record.publishedBy,
                                        version: record.version,
                                        created_at: record.createdAt,
                                        updated_at: record.updatedAt,
                                        network_passphrase: record.networkPassphrase,
                                        is_active: record.active,
                                    });
                                }))];
                        case 2:
                            error = (_a.sent()).error;
                            if (error)
                                throw error;
                            return [3 /*break*/, 4];
                        case 3:
                            error_2 = _a.sent();
                            this.logger.warn("Unable to persist contract registry snapshot: ".concat(error_2.message));
                            return [3 /*break*/, 4];
                        case 4: return [2 /*return*/];
                    }
                });
            });
        };
        return ContractRegistryService_1;
    }());
    __setFunctionName(_classThis, "ContractRegistryService");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        ContractRegistryService = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return ContractRegistryService = _classThis;
}();
exports.ContractRegistryService = ContractRegistryService;
