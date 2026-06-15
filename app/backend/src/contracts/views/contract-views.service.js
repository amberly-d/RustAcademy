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
exports.ContractViewsService = void 0;
var common_1 = require("@nestjs/common");
var StellarSdk = require("@stellar/stellar-sdk");
var TtlCache = /** @class */ (function () {
    function TtlCache() {
        this.store = new Map();
    }
    TtlCache.prototype.get = function (key) {
        var entry = this.store.get(key);
        if (!entry)
            return undefined;
        if (Date.now() > entry.expiresAt) {
            this.store.delete(key);
            return undefined;
        }
        return entry.value;
    };
    TtlCache.prototype.set = function (key, value, ttlMs) {
        this.store.set(key, { value: value, expiresAt: Date.now() + ttlMs });
    };
    TtlCache.prototype.invalidate = function (key) {
        this.store.delete(key);
    };
    return TtlCache;
}());
// ---------------------------------------------------------------------------
// Service
// ---------------------------------------------------------------------------
var CACHE_TTL_MS = 15000; // 15 s — short enough to reflect recent state
var ContractViewsService = function () {
    var _classDecorators = [(0, common_1.Injectable)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var ContractViewsService = _classThis = /** @class */ (function () {
        function ContractViewsService_1(configService) {
            this.configService = configService;
            this.logger = new common_1.Logger(ContractViewsService.name);
            this.cache = new TtlCache();
            /** Soroban RPC server instance, lazily initialised */
            this.rpc = null;
        }
        // ---------------------------------------------------------------------------
        // Public views
        // ---------------------------------------------------------------------------
        /** Fee configuration currently set on the contract. */
        ContractViewsService_1.prototype.getFeeConfig = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _this = this;
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.cached("fee_config", function () { return _this.fetchFeeConfig(); })];
                });
            });
        };
        /** Contract pause state and last-paused ledger. */
        ContractViewsService_1.prototype.getPauseState = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _this = this;
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.cached("pause_state", function () { return _this.fetchPauseState(); })];
                });
            });
        };
        /** Static contract metadata (name, version, deploy ledger). */
        ContractViewsService_1.prototype.getContractMetadata = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _this = this;
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.cached("contract_metadata", function () { return _this.fetchContractMetadata(); })];
                });
            });
        };
        /**
         * Summary for a single escrow by its on-chain identifier.
         * Throws {@link NotFoundException} when the escrow does not exist or its
         * storage TTL has lapsed.
         */
        ContractViewsService_1.prototype.getEscrowSummary = function (escrowId) {
            return __awaiter(this, void 0, void 0, function () {
                var _this = this;
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.cached("escrow:".concat(escrowId), function () {
                            return _this.fetchEscrowSummary(escrowId);
                        })];
                });
            });
        };
        /**
         * Summary for a payment link by its slug or on-chain ID.
         * Throws {@link NotFoundException} when the link does not exist.
         */
        ContractViewsService_1.prototype.getLinkSummary = function (identifier) {
            return __awaiter(this, void 0, void 0, function () {
                var _this = this;
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.cached("link:".concat(identifier), function () {
                            return _this.fetchLinkSummary(identifier);
                        })];
                });
            });
        };
        // ---------------------------------------------------------------------------
        // Fetch implementations
        // ---------------------------------------------------------------------------
        ContractViewsService_1.prototype.fetchFeeConfig = function () {
            return __awaiter(this, void 0, void 0, function () {
                var contractId, result, err_1;
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            contractId = (_a = this.configService.get(" RustAcademy_CONTRACT_ID")) !== null && _a !== void 0 ? _a : process.env[" RustAcademy_CONTRACT_ID"];
                            if (!contractId) {
                                this.logger.warn(" RustAcademy_CONTRACT_ID not set — returning default fee config");
                                return [2 /*return*/, { feeBps: 50, feeRecipient: "", minFeeStroops: "100" }];
                            }
                            _b.label = 1;
                        case 1:
                            _b.trys.push([1, 3, , 4]);
                            return [4 /*yield*/, this.simulateContractView(contractId, "get_fee_config", [])];
                        case 2:
                            result = _b.sent();
                            return [2 /*return*/, this.parseFeeConfig(result)];
                        case 3:
                            err_1 = _b.sent();
                            this.logger.warn("get_fee_config simulation failed: ".concat(err_1.message));
                            return [2 /*return*/, { feeBps: 50, feeRecipient: "", minFeeStroops: "100" }];
                        case 4: return [2 /*return*/];
                    }
                });
            });
        };
        ContractViewsService_1.prototype.fetchPauseState = function () {
            return __awaiter(this, void 0, void 0, function () {
                var contractId, result, err_2;
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            contractId = (_a = this.configService.get(" RustAcademy_CONTRACT_ID")) !== null && _a !== void 0 ? _a : process.env[" RustAcademy_CONTRACT_ID"];
                            if (!contractId) {
                                return [2 /*return*/, { paused: false, pausedAtLedger: null }];
                            }
                            _b.label = 1;
                        case 1:
                            _b.trys.push([1, 3, , 4]);
                            return [4 /*yield*/, this.simulateContractView(contractId, "is_paused", [])];
                        case 2:
                            result = _b.sent();
                            return [2 /*return*/, this.parsePauseState(result)];
                        case 3:
                            err_2 = _b.sent();
                            this.logger.warn("is_paused simulation failed: ".concat(err_2.message));
                            return [2 /*return*/, { paused: false, pausedAtLedger: null }];
                        case 4: return [2 /*return*/];
                    }
                });
            });
        };
        ContractViewsService_1.prototype.fetchContractMetadata = function () {
            return __awaiter(this, void 0, void 0, function () {
                var stellarCfg, contractId, base, result, err_3;
                var _a, _b, _c;
                return __generator(this, function (_d) {
                    switch (_d.label) {
                        case 0:
                            stellarCfg = this.configService.get("stellar");
                            contractId = (_b = (_a = this.configService.get(" RustAcademy_CONTRACT_ID")) !== null && _a !== void 0 ? _a : process.env[" RustAcademy_CONTRACT_ID"]) !== null && _b !== void 0 ? _b : "";
                            base = {
                                name: " RustAcademy Payment Contract",
                                version: "0.1.0",
                                contractId: contractId,
                                network: (_c = stellarCfg === null || stellarCfg === void 0 ? void 0 : stellarCfg.network) !== null && _c !== void 0 ? _c : "testnet",
                                deployedAtLedger: 0,
                            };
                            if (!contractId)
                                return [2 /*return*/, base];
                            _d.label = 1;
                        case 1:
                            _d.trys.push([1, 3, , 4]);
                            return [4 /*yield*/, this.simulateContractView(contractId, "get_metadata", [])];
                        case 2:
                            result = _d.sent();
                            return [2 /*return*/, __assign(__assign({}, base), this.parseContractMetadata(result))];
                        case 3:
                            err_3 = _d.sent();
                            this.logger.warn("get_metadata simulation failed: ".concat(err_3.message));
                            return [2 /*return*/, base];
                        case 4: return [2 /*return*/];
                    }
                });
            });
        };
        ContractViewsService_1.prototype.fetchEscrowSummary = function (escrowId) {
            return __awaiter(this, void 0, void 0, function () {
                var contractId, args, result;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            contractId = this.requireContractId();
                            args = [StellarSdk.nativeToScVal(escrowId, { type: "string" })];
                            return [4 /*yield*/, this.simulateContractView(contractId, "get_escrow", args)];
                        case 1:
                            result = _a.sent();
                            if (!result) {
                                throw new common_1.NotFoundException({
                                    error: "ESCROW_NOT_FOUND",
                                    message: "Escrow \"".concat(escrowId, "\" not found or expired."),
                                });
                            }
                            return [2 /*return*/, this.parseEscrowSummary(result, escrowId)];
                    }
                });
            });
        };
        ContractViewsService_1.prototype.fetchLinkSummary = function (identifier) {
            return __awaiter(this, void 0, void 0, function () {
                var contractId, args, result;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            contractId = this.requireContractId();
                            args = [StellarSdk.nativeToScVal(identifier, { type: "string" })];
                            return [4 /*yield*/, this.simulateContractView(contractId, "get_link", args)];
                        case 1:
                            result = _a.sent();
                            if (!result) {
                                throw new common_1.NotFoundException({
                                    error: "LINK_NOT_FOUND",
                                    message: "Link \"".concat(identifier, "\" not found or expired."),
                                });
                            }
                            return [2 /*return*/, this.parseLinkSummary(result, identifier)];
                    }
                });
            });
        };
        // ---------------------------------------------------------------------------
        // RPC simulation helper
        // ---------------------------------------------------------------------------
        ContractViewsService_1.prototype.simulateContractView = function (contractId, method, args) {
            return __awaiter(this, void 0, void 0, function () {
                var server, stellarCfg, passphrase, dummyKeypair, account, contract, tx, sim, returnVal;
                var _a, _b;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            server = this.getRpcServer();
                            stellarCfg = this.configService.get("stellar");
                            passphrase = (_a = stellarCfg === null || stellarCfg === void 0 ? void 0 : stellarCfg.networkPassphrase) !== null && _a !== void 0 ? _a : StellarSdk.Networks.TESTNET;
                            dummyKeypair = StellarSdk.Keypair.random();
                            account = new StellarSdk.Account(dummyKeypair.publicKey(), "0");
                            contract = new StellarSdk.Contract(contractId);
                            tx = new StellarSdk.TransactionBuilder(account, {
                                fee: "100",
                                networkPassphrase: passphrase,
                            })
                                .addOperation(contract.call.apply(contract, __spreadArray([method], args, false)))
                                .setTimeout(30)
                                .build();
                            return [4 /*yield*/, server.simulateTransaction(tx)];
                        case 1:
                            sim = _c.sent();
                            if (StellarSdk.rpc.Api.isSimulationError(sim)) {
                                throw new Error("Contract simulation error: ".concat(sim.error));
                            }
                            if (StellarSdk.rpc.Api.isSimulationRestore(sim)) {
                                // TTL restore needed — the entry is in a "can be restored" state, which
                                // means the data is still accessible but storage is expiring.
                                this.logger.warn("Simulation requires TTL restore for ".concat(method));
                            }
                            returnVal = (_b = sim.result) === null || _b === void 0 ? void 0 : _b.retval;
                            return [2 /*return*/, returnVal !== null && returnVal !== void 0 ? returnVal : null];
                    }
                });
            });
        };
        // ---------------------------------------------------------------------------
        // ScVal parsers — map contract return values to typed response shapes
        // ---------------------------------------------------------------------------
        ContractViewsService_1.prototype.parseFeeConfig = function (val) {
            if (!val)
                return { feeBps: 50, feeRecipient: "", minFeeStroops: "100" };
            try {
                var map = this.scValToMap(val);
                var bps = this.getMapField(map, "fee_bps");
                var recip = this.getMapField(map, "fee_recipient");
                var min = this.getMapField(map, "min_fee_stroops");
                return {
                    feeBps: bps ? Number(StellarSdk.scValToNative(bps)) : 50,
                    feeRecipient: recip ? String(StellarSdk.scValToNative(recip)) : "",
                    minFeeStroops: min ? String(StellarSdk.scValToNative(min)) : "100",
                };
            }
            catch (_a) {
                return { feeBps: 50, feeRecipient: "", minFeeStroops: "100" };
            }
        };
        ContractViewsService_1.prototype.parsePauseState = function (val) {
            if (!val)
                return { paused: false, pausedAtLedger: null };
            try {
                var map = this.scValToMap(val);
                var paused = this.getMapField(map, "paused");
                var ledger = this.getMapField(map, "paused_at_ledger");
                return {
                    paused: paused ? Boolean(StellarSdk.scValToNative(paused)) : false,
                    pausedAtLedger: ledger
                        ? Number(StellarSdk.scValToNative(ledger))
                        : null,
                };
            }
            catch (_a) {
                return { paused: false, pausedAtLedger: null };
            }
        };
        ContractViewsService_1.prototype.parseContractMetadata = function (val) {
            if (!val)
                return {};
            try {
                var map = this.scValToMap(val);
                var name_1 = this.getMapField(map, "name");
                var version = this.getMapField(map, "version");
                var ledger = this.getMapField(map, "deployed_at_ledger");
                return {
                    name: name_1 ? String(StellarSdk.scValToNative(name_1)) : undefined,
                    version: version
                        ? String(StellarSdk.scValToNative(version))
                        : undefined,
                    deployedAtLedger: ledger
                        ? Number(StellarSdk.scValToNative(ledger))
                        : undefined,
                };
            }
            catch (_a) {
                return {};
            }
        };
        ContractViewsService_1.prototype.parseEscrowSummary = function (val, escrowId) {
            var map = this.scValToMap(val);
            var expiryLedger = Number(StellarSdk.scValToNative(this.requireMapField(map, "expiry_ledger")));
            var currentLedger = 0; // Would be fetched from horizon in a full impl; safe default
            return {
                id: escrowId,
                depositor: String(StellarSdk.scValToNative(this.requireMapField(map, "depositor"))),
                beneficiary: String(StellarSdk.scValToNative(this.requireMapField(map, "beneficiary"))),
                amount: String(StellarSdk.scValToNative(this.requireMapField(map, "amount"))),
                assetCode: String(StellarSdk.scValToNative(this.requireMapField(map, "asset_code"))),
                released: Boolean(StellarSdk.scValToNative(this.requireMapField(map, "released"))),
                refunded: Boolean(StellarSdk.scValToNative(this.requireMapField(map, "refunded"))),
                expiryLedger: expiryLedger,
                expired: currentLedger > 0 && currentLedger > expiryLedger,
            };
        };
        ContractViewsService_1.prototype.parseLinkSummary = function (val, identifier) {
            var map = this.scValToMap(val);
            var ttlField = this.getMapField(map, "expires_at_ledger");
            return {
                id: String(StellarSdk.scValToNative(this.requireMapField(map, "id"))),
                slug: identifier,
                recipientAddress: String(StellarSdk.scValToNative(this.requireMapField(map, "recipient_address"))),
                assetCode: String(StellarSdk.scValToNative(this.requireMapField(map, "asset_code"))),
                amount: String(StellarSdk.scValToNative(this.requireMapField(map, "amount"))),
                active: Boolean(StellarSdk.scValToNative(this.requireMapField(map, "active"))),
                expiresAtLedger: ttlField
                    ? Number(StellarSdk.scValToNative(ttlField))
                    : null,
            };
        };
        // ---------------------------------------------------------------------------
        // ScVal map helpers
        // ---------------------------------------------------------------------------
        ContractViewsService_1.prototype.scValToMap = function (val) {
            var _a;
            if (val.switch() !== StellarSdk.xdr.ScValType.scvMap()) {
                throw new Error("Expected ScvMap, got ".concat(val.switch().name));
            }
            var result = new Map();
            for (var _i = 0, _b = (_a = val.map()) !== null && _a !== void 0 ? _a : []; _i < _b.length; _i++) {
                var entry = _b[_i];
                var keyNative = StellarSdk.scValToNative(entry.key());
                result.set(String(keyNative), entry.val());
            }
            return result;
        };
        ContractViewsService_1.prototype.getMapField = function (map, key) {
            return map.get(key);
        };
        ContractViewsService_1.prototype.requireMapField = function (map, key) {
            var val = map.get(key);
            if (!val)
                throw new Error("Missing required field \"".concat(key, "\" in contract response"));
            return val;
        };
        // ---------------------------------------------------------------------------
        // Cache wrapper
        // ---------------------------------------------------------------------------
        ContractViewsService_1.prototype.cached = function (key, fetch) {
            return __awaiter(this, void 0, void 0, function () {
                var hit, value;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            hit = this.cache.get(key);
                            if (hit !== undefined)
                                return [2 /*return*/, hit];
                            return [4 /*yield*/, fetch()];
                        case 1:
                            value = _a.sent();
                            this.cache.set(key, value, CACHE_TTL_MS);
                            return [2 /*return*/, value];
                    }
                });
            });
        };
        // ---------------------------------------------------------------------------
        // Config helpers
        // ---------------------------------------------------------------------------
        ContractViewsService_1.prototype.getRpcServer = function () {
            var _a, _b;
            if (this.rpc)
                return this.rpc;
            var stellarCfg = this.configService.get("stellar");
            var rpcUrl = (_b = (_a = stellarCfg === null || stellarCfg === void 0 ? void 0 : stellarCfg.sorobanRpcUrl) !== null && _a !== void 0 ? _a : process.env["SOROBAN_RPC_URL"]) !== null && _b !== void 0 ? _b : "https://soroban-testnet.stellar.org";
            this.rpc = new StellarSdk.rpc.Server(rpcUrl, { allowHttp: false });
            return this.rpc;
        };
        ContractViewsService_1.prototype.requireContractId = function () {
            var _a;
            var id = (_a = this.configService.get(" RustAcademy_CONTRACT_ID")) !== null && _a !== void 0 ? _a : process.env[" RustAcademy_CONTRACT_ID"];
            if (!id) {
                throw new common_1.NotFoundException({
                    error: "CONTRACT_NOT_CONFIGURED",
                    message: " RustAcademy_CONTRACT_ID is not configured.",
                });
            }
            return id;
        };
        return ContractViewsService_1;
    }());
    __setFunctionName(_classThis, "ContractViewsService");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        ContractViewsService = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return ContractViewsService = _classThis;
}();
exports.ContractViewsService = ContractViewsService;
