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
exports.FeatureFlagsService = void 0;
var common_1 = require("@nestjs/common");
var crypto_1 = require("crypto");
var DEFAULT_FLAGS = [
    // ── Network safety gates (BE-31) ──────────────────────────────────────────
    // Safe default: disabled. Must be explicitly enabled by an admin on mainnet.
    {
        key: 'mainnet.refunds',
        name: 'Mainnet Refunds',
        description: 'Allows refund initiation on mainnet.',
        enabled: false,
        killSwitch: false,
        rolloutPercentage: 0,
        allowedUsers: [],
        environments: ['production'],
        metadata: { highRisk: true, flow: 'refunds' },
        updatedAt: new Date(0).toISOString(),
        updatedBy: 'bootstrap',
    },
    {
        key: 'mainnet.dispute_actions',
        name: 'Mainnet Dispute Actions',
        description: 'Allows escrow dispute actions on mainnet.',
        enabled: false,
        killSwitch: false,
        rolloutPercentage: 0,
        allowedUsers: [],
        environments: ['production'],
        metadata: { highRisk: true, flow: 'dispute_actions' },
        updatedAt: new Date(0).toISOString(),
        updatedBy: 'bootstrap',
    },
    {
        key: 'mainnet.contract_writes',
        name: 'Mainnet Contract Writes',
        description: 'Allows Soroban contract write operations on mainnet.',
        enabled: false,
        killSwitch: false,
        rolloutPercentage: 0,
        allowedUsers: [],
        environments: ['production'],
        metadata: { highRisk: true, flow: 'contract_writes' },
        updatedAt: new Date(0).toISOString(),
        updatedBy: 'bootstrap',
    },
    // ── Existing flags ────────────────────────────────────────────────────────
    {
        key: 'testnet.contract_writes',
        name: 'Testnet Contract Writes',
        description: 'Allows Soroban contract write operations on testnet.',
        enabled: true,
        killSwitch: false,
        rolloutPercentage: 100,
        allowedUsers: [],
        environments: ['development', 'test', 'production'],
        metadata: { highRisk: true, flow: 'contract_writes', network: 'testnet' },
        updatedAt: new Date(0).toISOString(),
        updatedBy: 'bootstrap',
    },
    {
        key: 'bulk_invoicing_v2',
        name: 'Bulk Invoicing v2',
        description: 'Enables templates, saved customers, and preview flow in bulk invoicing.',
        enabled: true,
        killSwitch: false,
        rolloutPercentage: 100,
        allowedUsers: [],
        environments: ['development', 'test', 'production'],
        metadata: { surface: 'generator' },
        updatedAt: new Date(0).toISOString(),
        updatedBy: 'bootstrap',
    },
    {
        key: 'bulk_link_generation',
        name: 'Bulk Link Generation',
        description: 'Controls new bulk payment-link creation requests.',
        enabled: true,
        killSwitch: false,
        rolloutPercentage: 100,
        allowedUsers: [],
        environments: ['development', 'test', 'production'],
        metadata: { surface: 'links/bulk', riskyAction: true },
        updatedAt: new Date(0).toISOString(),
        updatedBy: 'bootstrap',
    },
];
var FeatureFlagsService = function () {
    var _classDecorators = [(0, common_1.Injectable)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var FeatureFlagsService = _classThis = /** @class */ (function () {
        function FeatureFlagsService_1(supabaseService, configService, auditService) {
            this.supabaseService = supabaseService;
            this.configService = configService;
            this.auditService = auditService;
            this.logger = new common_1.Logger(FeatureFlagsService.name);
            this.cache = null;
        }
        FeatureFlagsService_1.prototype.listFlags = function () {
            return __awaiter(this, void 0, void 0, function () {
                var snapshot;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.loadFlags()];
                        case 1:
                            snapshot = _a.sent();
                            return [2 /*return*/, {
                                    flags: snapshot.flags,
                                    source: snapshot.source,
                                    storeAvailable: snapshot.storeAvailable,
                                }];
                    }
                });
            });
        };
        FeatureFlagsService_1.prototype.getFlagOrThrow = function (key) {
            return __awaiter(this, void 0, void 0, function () {
                var flags, flag;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.loadFlags()];
                        case 1:
                            flags = (_a.sent()).flags;
                            flag = flags.find(function (entry) { return entry.key === key; });
                            if (!flag) {
                                throw new common_1.NotFoundException("Feature flag \"".concat(key, "\" not found"));
                            }
                            return [2 /*return*/, flag];
                    }
                });
            });
        };
        FeatureFlagsService_1.prototype.evaluateFlag = function (key_1) {
            return __awaiter(this, arguments, void 0, function (key, context) {
                var snapshot;
                if (context === void 0) { context = {}; }
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.loadFlags()];
                        case 1:
                            snapshot = _a.sent();
                            return [2 /*return*/, this.evaluateFlagFromSnapshot(key, context, snapshot)];
                    }
                });
            });
        };
        FeatureFlagsService_1.prototype.evaluateFlagFresh = function (key_1) {
            return __awaiter(this, arguments, void 0, function (key, context) {
                var snapshot;
                if (context === void 0) { context = {}; }
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.loadFlags(true)];
                        case 1:
                            snapshot = _a.sent();
                            return [2 /*return*/, this.evaluateFlagFromSnapshot(key, context, snapshot)];
                    }
                });
            });
        };
        FeatureFlagsService_1.prototype.evaluateFlagFromSnapshot = function (key, context, snapshot) {
            var _a, _b;
            var flag = snapshot.flags.find(function (entry) { return entry.key === key; });
            if (!flag) {
                return {
                    key: key,
                    enabled: false,
                    reason: 'missing-flag',
                    source: snapshot.source,
                };
            }
            var environment = ((_a = context.environment) !== null && _a !== void 0 ? _a : this.configService.nodeEnv).toLowerCase();
            var allowedEnvironments = flag.environments.map(function (value) { return value.toLowerCase(); });
            if (flag.killSwitch) {
                return { key: key, enabled: false, reason: 'kill-switch', source: snapshot.source };
            }
            if (!flag.enabled) {
                return { key: key, enabled: false, reason: 'disabled', source: snapshot.source };
            }
            if (allowedEnvironments.length > 0 && !allowedEnvironments.includes(environment)) {
                return {
                    key: key,
                    enabled: false,
                    reason: 'environment-mismatch',
                    source: snapshot.source,
                };
            }
            var normalizedUserId = (_b = context.userId) === null || _b === void 0 ? void 0 : _b.trim();
            if (normalizedUserId && flag.allowedUsers.includes(normalizedUserId)) {
                return {
                    key: key,
                    enabled: true,
                    reason: 'allowlist-match',
                    source: snapshot.source,
                };
            }
            if (flag.rolloutPercentage >= 100) {
                return { key: key, enabled: true, reason: 'enabled', source: snapshot.source };
            }
            if (flag.rolloutPercentage <= 0) {
                return { key: key, enabled: false, reason: 'rollout-miss', source: snapshot.source };
            }
            if (!normalizedUserId) {
                return {
                    key: key,
                    enabled: false,
                    reason: 'missing-user-context',
                    source: snapshot.source,
                };
            }
            var bucket = this.computeRolloutBucket(key, normalizedUserId);
            var enabled = bucket < flag.rolloutPercentage;
            return {
                key: key,
                enabled: enabled,
                reason: enabled ? 'rollout-match' : 'rollout-miss',
                source: snapshot.source,
            };
        };
        FeatureFlagsService_1.prototype.assertActionEnabled = function (key_1) {
            return __awaiter(this, arguments, void 0, function (key, context) {
                var evaluation;
                if (context === void 0) { context = {}; }
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.evaluateFlag(key, context)];
                        case 1:
                            evaluation = _a.sent();
                            if (!evaluation.enabled) {
                                throw new common_1.ServiceUnavailableException({
                                    error: 'FEATURE_DISABLED',
                                    flag: key,
                                    reason: evaluation.reason,
                                    message: "Feature flag \"".concat(key, "\" is currently blocking this write action."),
                                });
                            }
                            return [2 /*return*/];
                    }
                });
            });
        };
        FeatureFlagsService_1.prototype.updateFlag = function (key, patch, actor) {
            return __awaiter(this, void 0, void 0, function () {
                var current, next, client, _a, data, error, persisted, _b, _c, error_1;
                var _d;
                var _e, _f, _g, _h, _j;
                return __generator(this, function (_k) {
                    switch (_k.label) {
                        case 0: return [4 /*yield*/, this.getFlagOrThrow(key)];
                        case 1:
                            current = _k.sent();
                            next = __assign(__assign(__assign({}, current), patch), { allowedUsers: (_f = (_e = patch.allowedUsers) === null || _e === void 0 ? void 0 : _e.map(function (value) { return value.trim(); }).filter(Boolean)) !== null && _f !== void 0 ? _f : current.allowedUsers, environments: (_h = (_g = patch.environments) === null || _g === void 0 ? void 0 : _g.map(function (value) { return value.trim(); }).filter(Boolean)) !== null && _h !== void 0 ? _h : current.environments, metadata: (_j = patch.metadata) !== null && _j !== void 0 ? _j : current.metadata, updatedAt: new Date().toISOString(), updatedBy: actor });
                            _k.label = 2;
                        case 2:
                            _k.trys.push([2, 6, , 7]);
                            client = this.supabaseService.getClient();
                            return [4 /*yield*/, client
                                    .from('feature_flags')
                                    .upsert({
                                    key: next.key,
                                    name: next.name,
                                    description: next.description,
                                    enabled: next.enabled,
                                    kill_switch: next.killSwitch,
                                    rollout_percentage: next.rolloutPercentage,
                                    allowed_users: next.allowedUsers,
                                    environments: next.environments,
                                    metadata: next.metadata,
                                    updated_at: next.updatedAt,
                                    updated_by: next.updatedBy,
                                })
                                    .select()
                                    .single()];
                        case 3:
                            _a = _k.sent(), data = _a.data, error = _a.error;
                            if (error) {
                                throw error;
                            }
                            persisted = this.mapRowToFlag(data);
                            _b = this;
                            _d = {};
                            _c = this.upsertFlagInCollection;
                            return [4 /*yield*/, this.loadFlags()];
                        case 4:
                            _b.cache = (_d.flags = _c.apply(this, [(_k.sent()).flags, persisted]),
                                _d.source = 'store',
                                _d.storeAvailable = true,
                                _d.expiresAt = Date.now() + this.configService.featureFlagsCacheTtlMs,
                                _d);
                            return [4 /*yield*/, this.auditService.log(actor, 'feature_flag.updated', key, {
                                    before: current,
                                    after: persisted,
                                })];
                        case 5:
                            _k.sent();
                            return [2 /*return*/, persisted];
                        case 6:
                            error_1 = _k.sent();
                            this.logger.warn("Feature flag store unavailable during update for ".concat(key, ": ").concat(error_1.message));
                            throw new common_1.ServiceUnavailableException({
                                error: 'FEATURE_FLAG_STORE_UNAVAILABLE',
                                message: 'Feature flag store is unavailable; safe defaults remain active.',
                            });
                        case 7: return [2 /*return*/];
                    }
                });
            });
        };
        FeatureFlagsService_1.prototype.getOperationalState = function () {
            return __awaiter(this, void 0, void 0, function () {
                var snapshot;
                var _a, _b;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0: return [4 /*yield*/, this.loadFlags()];
                        case 1:
                            snapshot = _c.sent();
                            return [2 /*return*/, {
                                    source: snapshot.source,
                                    storeAvailable: snapshot.storeAvailable,
                                    cacheExpiresAt: (_b = (_a = this.cache) === null || _a === void 0 ? void 0 : _a.expiresAt) !== null && _b !== void 0 ? _b : null,
                                }];
                    }
                });
            });
        };
        FeatureFlagsService_1.prototype.loadFlags = function () {
            return __awaiter(this, arguments, void 0, function (forceRefresh) {
                var bootstrapFlags, client, _a, data, error, storedFlags, mergedFlags, error_2;
                var _this = this;
                if (forceRefresh === void 0) { forceRefresh = false; }
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            if (!forceRefresh && this.cache && this.cache.expiresAt > Date.now()) {
                                return [2 /*return*/, __assign(__assign({}, this.cache), { source: this.cache.source === 'store' ? 'cache' : this.cache.source })];
                            }
                            bootstrapFlags = this.getBootstrapFlags();
                            _b.label = 1;
                        case 1:
                            _b.trys.push([1, 3, , 4]);
                            client = this.supabaseService.getClient();
                            return [4 /*yield*/, client.from('feature_flags').select('*').order('key')];
                        case 2:
                            _a = _b.sent(), data = _a.data, error = _a.error;
                            if (error) {
                                throw error;
                            }
                            storedFlags = (data !== null && data !== void 0 ? data : []).map(function (row) { return _this.mapRowToFlag(row); });
                            mergedFlags = this.mergeFlags(bootstrapFlags, storedFlags);
                            this.cache = {
                                flags: mergedFlags,
                                source: 'store',
                                storeAvailable: true,
                                expiresAt: Date.now() + this.configService.featureFlagsCacheTtlMs,
                            };
                            return [2 /*return*/, this.cache];
                        case 3:
                            error_2 = _b.sent();
                            this.logger.warn("Falling back to bootstrap feature flags: ".concat(error_2.message));
                            this.cache = {
                                flags: bootstrapFlags,
                                source: 'bootstrap',
                                storeAvailable: false,
                                expiresAt: Date.now() + this.configService.featureFlagsCacheTtlMs,
                            };
                            return [2 /*return*/, this.cache];
                        case 4: return [2 /*return*/];
                    }
                });
            });
        };
        FeatureFlagsService_1.prototype.getBootstrapFlags = function () {
            var _this = this;
            var raw = this.configService.featureFlagsBootstrapJson;
            if (!raw) {
                return DEFAULT_FLAGS.map(function (flag) { return (__assign({}, flag)); });
            }
            try {
                var parsed = JSON.parse(raw);
                return this.mergeFlags(DEFAULT_FLAGS, parsed.map(function (entry) {
                    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
                    return ({
                        key: entry.key,
                        name: (_a = entry.name) !== null && _a !== void 0 ? _a : entry.key,
                        description: (_b = entry.description) !== null && _b !== void 0 ? _b : '',
                        enabled: (_c = entry.enabled) !== null && _c !== void 0 ? _c : false,
                        killSwitch: (_d = entry.killSwitch) !== null && _d !== void 0 ? _d : false,
                        rolloutPercentage: _this.normalizeRollout(entry.rolloutPercentage),
                        allowedUsers: (_e = entry.allowedUsers) !== null && _e !== void 0 ? _e : [],
                        environments: (_f = entry.environments) !== null && _f !== void 0 ? _f : [],
                        metadata: (_g = entry.metadata) !== null && _g !== void 0 ? _g : {},
                        updatedAt: (_h = entry.updatedAt) !== null && _h !== void 0 ? _h : new Date(0).toISOString(),
                        updatedBy: (_j = entry.updatedBy) !== null && _j !== void 0 ? _j : 'bootstrap',
                    });
                }));
            }
            catch (error) {
                this.logger.warn("Invalid FEATURE_FLAGS_BOOTSTRAP_JSON; using defaults: ".concat(error.message));
                return DEFAULT_FLAGS.map(function (flag) { return (__assign({}, flag)); });
            }
        };
        FeatureFlagsService_1.prototype.mergeFlags = function (bootstrapFlags, storedFlags) {
            var index = new Map();
            for (var _i = 0, bootstrapFlags_1 = bootstrapFlags; _i < bootstrapFlags_1.length; _i++) {
                var flag = bootstrapFlags_1[_i];
                index.set(flag.key, __assign({}, flag));
            }
            for (var _a = 0, storedFlags_1 = storedFlags; _a < storedFlags_1.length; _a++) {
                var flag = storedFlags_1[_a];
                index.set(flag.key, __assign({}, flag));
            }
            return Array.from(index.values()).sort(function (left, right) { return left.key.localeCompare(right.key); });
        };
        FeatureFlagsService_1.prototype.mapRowToFlag = function (row) {
            var _a, _b, _c, _d;
            return {
                key: String(row.key),
                name: String((_a = row.name) !== null && _a !== void 0 ? _a : row.key),
                description: String((_b = row.description) !== null && _b !== void 0 ? _b : ''),
                enabled: Boolean(row.enabled),
                killSwitch: Boolean(row.kill_switch),
                rolloutPercentage: this.normalizeRollout(row.rollout_percentage),
                allowedUsers: Array.isArray(row.allowed_users)
                    ? row.allowed_users.map(function (value) { return String(value); })
                    : [],
                environments: Array.isArray(row.environments)
                    ? row.environments.map(function (value) { return String(value); })
                    : [],
                metadata: row.metadata && typeof row.metadata === 'object'
                    ? row.metadata
                    : {},
                updatedAt: String((_c = row.updated_at) !== null && _c !== void 0 ? _c : new Date(0).toISOString()),
                updatedBy: String((_d = row.updated_by) !== null && _d !== void 0 ? _d : 'system'),
            };
        };
        FeatureFlagsService_1.prototype.upsertFlagInCollection = function (flags, next) {
            var remaining = flags.filter(function (flag) { return flag.key !== next.key; });
            remaining.push(next);
            return remaining.sort(function (left, right) { return left.key.localeCompare(right.key); });
        };
        FeatureFlagsService_1.prototype.computeRolloutBucket = function (key, userId) {
            var hash = (0, crypto_1.createHash)('sha256').update("".concat(key, ":").concat(userId)).digest('hex');
            return parseInt(hash.slice(0, 8), 16) % 100;
        };
        FeatureFlagsService_1.prototype.normalizeRollout = function (value) {
            var numeric = Number(value);
            if (Number.isNaN(numeric)) {
                return 0;
            }
            return Math.max(0, Math.min(100, numeric));
        };
        return FeatureFlagsService_1;
    }());
    __setFunctionName(_classThis, "FeatureFlagsService");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        FeatureFlagsService = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return FeatureFlagsService = _classThis;
}();
exports.FeatureFlagsService = FeatureFlagsService;
