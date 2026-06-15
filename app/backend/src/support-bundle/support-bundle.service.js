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
Object.defineProperty(exports, "__esModule", { value: true });
exports.SupportBundleService = void 0;
var common_1 = require("@nestjs/common");
var redaction_util_1 = require("../common/utils/redaction.util");
var SupportBundleService = function () {
    var _classDecorators = [(0, common_1.Injectable)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var SupportBundleService = _classThis = /** @class */ (function () {
        function SupportBundleService_1(config, registry, indexerLag, checkpointRepo, auditService) {
            this.config = config;
            this.registry = registry;
            this.indexerLag = indexerLag;
            this.checkpointRepo = checkpointRepo;
            this.auditService = auditService;
            this.logger = new common_1.Logger(SupportBundleService.name);
        }
        SupportBundleService_1.prototype.generateBundle = function () {
            return __awaiter(this, arguments, void 0, function (includeRequestIds) {
                var startTime, _a, networkConfig, registrySnapshot, indexerStatus, checkpoints, recentErrors, bundleJson, bundleSize, generatedAt, metadata, bundle, duration, error_1;
                if (includeRequestIds === void 0) { includeRequestIds = false; }
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            startTime = Date.now();
                            _b.label = 1;
                        case 1:
                            _b.trys.push([1, 3, , 4]);
                            return [4 /*yield*/, Promise.all([
                                    this.getNetworkConfig(),
                                    this.getContractRegistrySnapshot(),
                                    this.getIndexerStatus(),
                                    this.getCheckpoints(),
                                    this.getRecentErrors(includeRequestIds),
                                ])];
                        case 2:
                            _a = _b.sent(), networkConfig = _a[0], registrySnapshot = _a[1], indexerStatus = _a[2], checkpoints = _a[3], recentErrors = _a[4];
                            bundleJson = JSON.stringify({
                                metadata: {},
                                network_config: networkConfig,
                                contract_registry: registrySnapshot,
                                indexer_status: indexerStatus,
                                checkpoints: checkpoints,
                                recent_errors: recentErrors,
                            });
                            bundleSize = Buffer.byteLength(bundleJson, 'utf8');
                            generatedAt = new Date().toISOString();
                            metadata = {
                                version: '1.0',
                                generated_at: generatedAt,
                                network: this.config.network,
                                bundle_size_bytes: bundleSize,
                            };
                            bundle = {
                                metadata: metadata,
                                network_config: networkConfig,
                                contract_registry: registrySnapshot,
                                indexer_status: indexerStatus,
                                checkpoints: checkpoints,
                                recent_errors: recentErrors,
                            };
                            duration = Date.now() - startTime;
                            this.logger.log("Generated support bundle in ".concat(duration, "ms (").concat(bundleSize, " bytes, ").concat(recentErrors.length, " errors, ").concat(checkpoints.length, " checkpoints)"));
                            return [2 /*return*/, bundle];
                        case 3:
                            error_1 = _b.sent();
                            this.logger.error("Failed to generate support bundle: ".concat(error_1.message), error_1.stack);
                            throw error_1;
                        case 4: return [2 /*return*/];
                    }
                });
            });
        };
        SupportBundleService_1.prototype.getNetworkConfig = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, {
                            network: this.config.network,
                            network_passphrase: this.config.network === 'mainnet'
                                ? 'Public Global Stellar Network ; September 2015'
                                : 'Test SDF Network ; September 2015',
                        }];
                });
            });
        };
        SupportBundleService_1.prototype.getContractRegistrySnapshot = function () {
            return __awaiter(this, void 0, void 0, function () {
                var registry, activeContracts, error_2;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, this.registry.getRegistry()];
                        case 1:
                            registry = _a.sent();
                            activeContracts = Object.entries(registry.data).map(function (_a) {
                                var name = _a[0], data = _a[1];
                                var entry = data;
                                return {
                                    name: name,
                                    contract_id: entry.id || '[REDACTED]',
                                    version: entry.version || 0,
                                    wasm_hash: (entry.wasmHash || '').substring(0, 16) + '...',
                                    updated_at: entry.updatedAt || new Date().toISOString(),
                                };
                            });
                            return [2 /*return*/, { active_contracts: activeContracts }];
                        case 2:
                            error_2 = _a.sent();
                            this.logger.warn("Could not retrieve contract registry: ".concat(error_2.message));
                            return [2 /*return*/, { active_contracts: [] }];
                        case 3: return [2 /*return*/];
                    }
                });
            });
        };
        SupportBundleService_1.prototype.getIndexerStatus = function () {
            return __awaiter(this, void 0, void 0, function () {
                var lagStatus, status_1;
                return __generator(this, function (_a) {
                    try {
                        lagStatus = this.indexerLag.getStatus();
                        status_1 = 'UNKNOWN';
                        if (!lagStatus.isEnabled) {
                            status_1 = 'DISABLED';
                        }
                        else if (lagStatus.isLagging) {
                            status_1 = 'LAGGING';
                        }
                        else {
                            status_1 = 'HEALTHY';
                        }
                        return [2 /*return*/, {
                                current_network_ledger: lagStatus.currentNetworkLedger || 0,
                                last_indexed_ledger: lagStatus.lastIndexedLedger || 0,
                                lag_ledgers: lagStatus.lagLedgers || 0,
                                is_lagging: lagStatus.isLagging || false,
                                status: status_1,
                            }];
                    }
                    catch (error) {
                        this.logger.warn("Could not retrieve indexer status: ".concat(error.message));
                        return [2 /*return*/, {
                                current_network_ledger: 0,
                                last_indexed_ledger: 0,
                                lag_ledgers: 0,
                                is_lagging: false,
                                status: 'UNKNOWN',
                            }];
                    }
                    return [2 /*return*/];
                });
            });
        };
        SupportBundleService_1.prototype.getCheckpoints = function () {
            return __awaiter(this, void 0, void 0, function () {
                var registry, contracts, checkpoints, _i, contracts_1, contract, registryEntry, contractId, lastLedger, _a, error_3;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _b.trys.push([0, 8, , 9]);
                            return [4 /*yield*/, this.registry.getRegistry()];
                        case 1:
                            registry = _b.sent();
                            contracts = Object.keys(registry.data);
                            checkpoints = [];
                            _i = 0, contracts_1 = contracts;
                            _b.label = 2;
                        case 2:
                            if (!(_i < contracts_1.length)) return [3 /*break*/, 7];
                            contract = contracts_1[_i];
                            registryEntry = registry.data[contract];
                            contractId = registryEntry === null || registryEntry === void 0 ? void 0 : registryEntry.id;
                            if (!contractId)
                                return [3 /*break*/, 6];
                            _b.label = 3;
                        case 3:
                            _b.trys.push([3, 5, , 6]);
                            return [4 /*yield*/, this.checkpointRepo.getLastLedger(contractId)];
                        case 4:
                            lastLedger = _b.sent();
                            if (lastLedger !== null) {
                                checkpoints.push({
                                    contract_id: contractId,
                                    last_ledger: lastLedger,
                                    updated_at: new Date().toISOString(),
                                });
                            }
                            return [3 /*break*/, 6];
                        case 5:
                            _a = _b.sent();
                            return [3 /*break*/, 6];
                        case 6:
                            _i++;
                            return [3 /*break*/, 2];
                        case 7: return [2 /*return*/, checkpoints];
                        case 8:
                            error_3 = _b.sent();
                            this.logger.warn("Could not retrieve checkpoints: ".concat(error_3.message));
                            return [2 /*return*/, []];
                        case 9: return [2 /*return*/];
                    }
                });
            });
        };
        SupportBundleService_1.prototype.getRecentErrors = function (includeRequestIds) {
            return __awaiter(this, void 0, void 0, function () {
                var result, error_4;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, this.auditService.query({
                                    limit: 50,
                                    page: 1,
                                })];
                        case 1:
                            result = _a.sent();
                            return [2 /*return*/, result.data
                                    .map(function (log) { return (__assign({ timestamp: log.createdAt instanceof Date ? log.createdAt.toISOString() : String(log.createdAt), action: log.action || 'unknown', actor: _this.redactActor(log.actor), error_summary: _this.extractErrorSummary(log.metadata) }, (includeRequestIds && log.requestId && { request_id: log.requestId }))); })
                                    .filter(function (entry) { return entry.error_summary !== null; })
                                    .slice(0, 50)];
                        case 2:
                            error_4 = _a.sent();
                            this.logger.warn("Could not retrieve recent errors: ".concat(error_4.message));
                            return [2 /*return*/, []];
                        case 3: return [2 /*return*/];
                    }
                });
            });
        };
        SupportBundleService_1.prototype.redactActor = function (actor) {
            if (!actor)
                return '[UNKNOWN]';
            // Check if it looks like an email
            if (actor.includes('@')) {
                return '[REDACTED]';
            }
            // If it's a UUID or service name, it's safe
            return actor;
        };
        SupportBundleService_1.prototype.extractErrorSummary = function (metadata) {
            if (!metadata)
                return null;
            // Check for error field
            if (typeof metadata.error === 'string') {
                return (0, redaction_util_1.sanitizeErrorMessage)(metadata.error);
            }
            // Check for message field
            if (typeof metadata.message === 'string') {
                return (0, redaction_util_1.sanitizeErrorMessage)(metadata.message);
            }
            // Check for code field
            if (typeof metadata.code === 'string') {
                return metadata.code;
            }
            return null;
        };
        return SupportBundleService_1;
    }());
    __setFunctionName(_classThis, "SupportBundleService");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        SupportBundleService = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return SupportBundleService = _classThis;
}();
exports.SupportBundleService = SupportBundleService;
