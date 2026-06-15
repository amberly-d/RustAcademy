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
exports.ReconciliationService = void 0;
var common_1 = require("@nestjs/common");
var stellar_sdk_1 = require("@stellar/stellar-sdk");
var uuid_1 = require("uuid");
var reconciliation_types_1 = require("./types/reconciliation.types");
var ReconciliationService = function () {
    var _classDecorators = [(0, common_1.Injectable)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var ReconciliationService = _classThis = /** @class */ (function () {
        function ReconciliationService_1(config, supabase, metrics) {
            this.config = config;
            this.supabase = supabase;
            this.metrics = metrics;
            this.logger = new common_1.Logger(ReconciliationService.name);
            /** Statuses that need to be reconciled against the chain. */
            this.ACTIONABLE_ESCROW_STATUSES = [
                reconciliation_types_1.EscrowDbStatus.Pending,
                reconciliation_types_1.EscrowDbStatus.Active,
            ];
            this.ACTIONABLE_PAYMENT_STATUSES = [
                reconciliation_types_1.PaymentDbStatus.Pending,
                reconciliation_types_1.PaymentDbStatus.Processing,
            ];
            var horizonUrl = config.network === 'mainnet'
                ? 'https://horizon.stellar.org'
                : 'https://horizon-testnet.stellar.org';
            this.server = new stellar_sdk_1.Horizon.Server(horizonUrl);
            this.logger.log("ReconciliationService initialized against ".concat(config.network, " (").concat(horizonUrl, ")"));
        }
        // ---------------------------------------------------------------------------
        // Public entry point
        // ---------------------------------------------------------------------------
        ReconciliationService_1.prototype.runReconciliation = function (batchSize) {
            return __awaiter(this, void 0, void 0, function () {
                var runId, startedAt, startMs, _a, escrowResults, paymentResults, completedAt, durationMs, report, _b;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            runId = (0, uuid_1.v4)();
                            startedAt = new Date().toISOString();
                            startMs = Date.now();
                            this.logger.log("[".concat(runId, "] Reconciliation run started (batchSize=").concat(batchSize, ")"));
                            return [4 /*yield*/, Promise.all([
                                    this.reconcileEscrows(runId, batchSize),
                                    this.reconcilePayments(runId, batchSize),
                                ])];
                        case 1:
                            _a = _c.sent(), escrowResults = _a[0], paymentResults = _a[1];
                            completedAt = new Date().toISOString();
                            durationMs = Date.now() - startMs;
                            report = {
                                runId: runId,
                                startedAt: startedAt,
                                completedAt: completedAt,
                                durationMs: durationMs,
                                escrows: this.summarise(escrowResults),
                                payments: this.summarise(paymentResults),
                            };
                            // Add totals comparison for payments
                            _b = report;
                            return [4 /*yield*/, this.comparePaymentTotals(runId)];
                        case 2:
                            // Add totals comparison for payments
                            _b.totalsComparison = _c.sent();
                            // Generate alert if discrepancies exceed threshold
                            report.alert = this.generateDiscrepancyAlert(report);
                            this.logReport(report);
                            return [2 /*return*/, report];
                    }
                });
            });
        };
        // ---------------------------------------------------------------------------
        // Escrow reconciliation
        // ---------------------------------------------------------------------------
        ReconciliationService_1.prototype.reconcileEscrows = function (runId, batchSize) {
            return __awaiter(this, void 0, void 0, function () {
                var records, results, _i, records_1, record, result;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.supabase.fetchPendingEscrows(this.ACTIONABLE_ESCROW_STATUSES, batchSize)];
                        case 1:
                            records = _a.sent();
                            this.logger.log("[".concat(runId, "] Found ").concat(records.length, " escrow(s) to reconcile"));
                            results = [];
                            _i = 0, records_1 = records;
                            _a.label = 2;
                        case 2:
                            if (!(_i < records_1.length)) return [3 /*break*/, 5];
                            record = records_1[_i];
                            return [4 /*yield*/, this.reconcileEscrow(runId, record)];
                        case 3:
                            result = _a.sent();
                            results.push(result);
                            _a.label = 4;
                        case 4:
                            _i++;
                            return [3 /*break*/, 2];
                        case 5: return [2 /*return*/, results];
                    }
                });
            });
        };
        ReconciliationService_1.prototype.reconcileEscrow = function (runId, record) {
            return __awaiter(this, void 0, void 0, function () {
                var base, onChainState, err_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            base = {
                                id: record.id,
                                contractAddress: record.contract_address,
                                previousDbStatus: record.status,
                            };
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 3, , 4]);
                            return [4 /*yield*/, this.resolveEscrowOnChainState(record)];
                        case 2:
                            onChainState = _a.sent();
                            return [3 /*break*/, 4];
                        case 3:
                            err_1 = _a.sent();
                            this.logger.warn("[".concat(runId, "] Skipping escrow ").concat(record.id, ": Horizon unavailable \u2014 ").concat(err_1.message));
                            return [2 /*return*/, __assign(__assign({}, base), { onChainState: reconciliation_types_1.OnChainState.Unknown, resolvedDbStatus: null, action: reconciliation_types_1.ReconciliationAction.Skipped, irreconcilable: false })];
                        case 4: return [2 /*return*/, this.applyEscrowTransition(runId, record, onChainState, base)];
                    }
                });
            });
        };
        /**
         * Resolves the authoritative on-chain state for an escrow account.
         *
         * Strategy:
         *  1. Load the Stellar account (contract_address).
         *  2. If the account does not exist → NonExistent.
         *  3. If the account exists, check whether the XLM balance is zero (merged indicator).
         *  4. Cross-check the DB `expires_at` field against wall-clock time.
         */
        ReconciliationService_1.prototype.resolveEscrowOnChainState = function (record) {
            return __awaiter(this, void 0, void 0, function () {
                var startTime, account, duration, nativeLine, nativeBalance, expiresAt, err_2, duration, errorType, horizonErr;
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            startTime = Date.now();
                            _b.label = 1;
                        case 1:
                            _b.trys.push([1, 3, , 4]);
                            return [4 /*yield*/, this.server.loadAccount(record.contract_address)];
                        case 2:
                            account = _b.sent();
                            duration = (Date.now() - startTime) / 1000;
                            this.metrics.recordExternalCall('horizon', 'loadAccount', duration);
                            nativeLine = account.balances.find(function (b) { return b.asset_type === 'native'; });
                            nativeBalance = nativeLine ? parseFloat(nativeLine.balance) : 0;
                            if (nativeBalance === 0) {
                                // Account merged or all funds removed → treat as claimed
                                return [2 /*return*/, reconciliation_types_1.OnChainState.Claimed];
                            }
                            // Check expiry using DB field (Stellar doesn't natively expose time-bounds per-account)
                            if (record.expires_at) {
                                expiresAt = new Date(record.expires_at).getTime();
                                if (Date.now() > expiresAt) {
                                    return [2 /*return*/, reconciliation_types_1.OnChainState.Expired];
                                }
                            }
                            return [2 /*return*/, reconciliation_types_1.OnChainState.Active];
                        case 3:
                            err_2 = _b.sent();
                            duration = (Date.now() - startTime) / 1000;
                            this.metrics.recordExternalCall('horizon', 'loadAccount', duration);
                            errorType = err_2 instanceof Error ? err_2.constructor.name : 'UnknownError';
                            this.metrics.recordError('horizon', errorType);
                            horizonErr = err_2;
                            if (((_a = horizonErr === null || horizonErr === void 0 ? void 0 : horizonErr.response) === null || _a === void 0 ? void 0 : _a.status) === 404) {
                                return [2 /*return*/, reconciliation_types_1.OnChainState.NonExistent];
                            }
                            throw err_2; // Let the caller handle unexpected errors
                        case 4: return [2 /*return*/];
                    }
                });
            });
        };
        ReconciliationService_1.prototype.applyEscrowTransition = function (runId, record, onChainState, base) {
            return __awaiter(this, void 0, void 0, function () {
                var id, dbStatus, reason;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            id = record.id, dbStatus = record.status;
                            if (!(onChainState === reconciliation_types_1.OnChainState.Claimed)) return [3 /*break*/, 2];
                            return [4 /*yield*/, this.supabase.updateEscrowStatus(id, reconciliation_types_1.EscrowDbStatus.Claimed)];
                        case 1:
                            _a.sent();
                            this.logger.log("[".concat(runId, "] Escrow ").concat(id, ": DB was '").concat(dbStatus, "' but chain is Claimed \u2192 updated to 'claimed'"));
                            return [2 /*return*/, __assign(__assign({}, base), { onChainState: onChainState, resolvedDbStatus: reconciliation_types_1.EscrowDbStatus.Claimed, action: reconciliation_types_1.ReconciliationAction.Updated, irreconcilable: false })];
                        case 2:
                            if (!(onChainState === reconciliation_types_1.OnChainState.Expired)) return [3 /*break*/, 4];
                            return [4 /*yield*/, this.supabase.updateEscrowStatus(id, reconciliation_types_1.EscrowDbStatus.Expired)];
                        case 3:
                            _a.sent();
                            this.logger.log("[".concat(runId, "] Escrow ").concat(id, ": DB was '").concat(dbStatus, "' but chain indicates Expired \u2192 updated to 'expired'"));
                            return [2 /*return*/, __assign(__assign({}, base), { onChainState: onChainState, resolvedDbStatus: reconciliation_types_1.EscrowDbStatus.Expired, action: reconciliation_types_1.ReconciliationAction.Updated, irreconcilable: false })];
                        case 4:
                            if (!(onChainState === reconciliation_types_1.OnChainState.NonExistent)) return [3 /*break*/, 6];
                            reason = "DB status is '".concat(dbStatus, "' but escrow account does not exist on-chain");
                            return [4 /*yield*/, this.supabase.flagIrreconcilableEscrow(id, reason)];
                        case 5:
                            _a.sent();
                            this.logger.error("[".concat(runId, "] IRRECONCILABLE escrow ").concat(id, " (").concat(record.contract_address, "): ").concat(reason));
                            return [2 /*return*/, __assign(__assign({}, base), { onChainState: onChainState, resolvedDbStatus: null, action: reconciliation_types_1.ReconciliationAction.Flagged, irreconcilable: true, irreconcilableReason: reason })];
                        case 6: 
                        // Active on-chain and active in DB → consistent
                        return [2 /*return*/, __assign(__assign({}, base), { onChainState: onChainState, resolvedDbStatus: dbStatus, action: reconciliation_types_1.ReconciliationAction.NoOp, irreconcilable: false })];
                    }
                });
            });
        };
        // ---------------------------------------------------------------------------
        // Payment reconciliation
        // ---------------------------------------------------------------------------
        ReconciliationService_1.prototype.reconcilePayments = function (runId, batchSize) {
            return __awaiter(this, void 0, void 0, function () {
                var records, results, _i, records_2, record, result;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.supabase.fetchPendingPayments(this.ACTIONABLE_PAYMENT_STATUSES, batchSize)];
                        case 1:
                            records = _a.sent();
                            this.logger.log("[".concat(runId, "] Found ").concat(records.length, " payment(s) to reconcile"));
                            results = [];
                            _i = 0, records_2 = records;
                            _a.label = 2;
                        case 2:
                            if (!(_i < records_2.length)) return [3 /*break*/, 5];
                            record = records_2[_i];
                            return [4 /*yield*/, this.reconcilePayment(runId, record)];
                        case 3:
                            result = _a.sent();
                            results.push(result);
                            _a.label = 4;
                        case 4:
                            _i++;
                            return [3 /*break*/, 2];
                        case 5: return [2 /*return*/, results];
                    }
                });
            });
        };
        ReconciliationService_1.prototype.reconcilePayment = function (runId, record) {
            return __awaiter(this, void 0, void 0, function () {
                var base, onChainState, err_3;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            base = {
                                id: record.id,
                                txHash: record.stellar_tx_hash,
                                previousDbStatus: record.status,
                            };
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 3, , 4]);
                            return [4 /*yield*/, this.resolvePaymentOnChainState(record.stellar_tx_hash)];
                        case 2:
                            onChainState = _a.sent();
                            return [3 /*break*/, 4];
                        case 3:
                            err_3 = _a.sent();
                            this.logger.warn("[".concat(runId, "] Skipping payment ").concat(record.id, ": Horizon unavailable \u2014 ").concat(err_3.message));
                            return [2 /*return*/, __assign(__assign({}, base), { onChainState: reconciliation_types_1.OnChainState.Unknown, resolvedDbStatus: null, action: reconciliation_types_1.ReconciliationAction.Skipped, irreconcilable: false })];
                        case 4: return [2 /*return*/, this.applyPaymentTransition(runId, record, onChainState, base)];
                    }
                });
            });
        };
        /**
         * Checks whether a transaction hash is confirmed on-chain via Horizon.
         */
        ReconciliationService_1.prototype.resolvePaymentOnChainState = function (txHash) {
            return __awaiter(this, void 0, void 0, function () {
                var startTime, tx, duration, err_4, duration, errorType, horizonErr;
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            startTime = Date.now();
                            _b.label = 1;
                        case 1:
                            _b.trys.push([1, 3, , 4]);
                            return [4 /*yield*/, this.server.transactions().transaction(txHash).call()];
                        case 2:
                            tx = _b.sent();
                            duration = (Date.now() - startTime) / 1000;
                            this.metrics.recordExternalCall('horizon', 'getTransaction', duration);
                            return [2 /*return*/, tx.successful ? reconciliation_types_1.OnChainState.Confirmed : reconciliation_types_1.OnChainState.NonExistent];
                        case 3:
                            err_4 = _b.sent();
                            duration = (Date.now() - startTime) / 1000;
                            this.metrics.recordExternalCall('horizon', 'getTransaction', duration);
                            errorType = err_4 instanceof Error ? err_4.constructor.name : 'UnknownError';
                            this.metrics.recordError('horizon', errorType);
                            horizonErr = err_4;
                            if (((_a = horizonErr === null || horizonErr === void 0 ? void 0 : horizonErr.response) === null || _a === void 0 ? void 0 : _a.status) === 404) {
                                return [2 /*return*/, reconciliation_types_1.OnChainState.NonExistent];
                            }
                            throw err_4;
                        case 4: return [2 /*return*/];
                    }
                });
            });
        };
        ReconciliationService_1.prototype.applyPaymentTransition = function (runId, record, onChainState, base) {
            return __awaiter(this, void 0, void 0, function () {
                var id, dbStatus, reason;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            id = record.id, dbStatus = record.status;
                            if (!(onChainState === reconciliation_types_1.OnChainState.Confirmed)) return [3 /*break*/, 2];
                            if (dbStatus === reconciliation_types_1.PaymentDbStatus.Paid) {
                                // Already consistent
                                return [2 /*return*/, __assign(__assign({}, base), { onChainState: onChainState, resolvedDbStatus: reconciliation_types_1.PaymentDbStatus.Paid, action: reconciliation_types_1.ReconciliationAction.NoOp, irreconcilable: false })];
                            }
                            return [4 /*yield*/, this.supabase.updatePaymentStatus(id, reconciliation_types_1.PaymentDbStatus.Paid)];
                        case 1:
                            _a.sent();
                            this.logger.log("[".concat(runId, "] Payment ").concat(id, ": DB was '").concat(dbStatus, "' but chain confirms tx \u2192 updated to 'paid'"));
                            return [2 /*return*/, __assign(__assign({}, base), { onChainState: onChainState, resolvedDbStatus: reconciliation_types_1.PaymentDbStatus.Paid, action: reconciliation_types_1.ReconciliationAction.Updated, irreconcilable: false })];
                        case 2:
                            if (!(onChainState === reconciliation_types_1.OnChainState.NonExistent)) return [3 /*break*/, 6];
                            if (!(dbStatus === reconciliation_types_1.PaymentDbStatus.Paid)) return [3 /*break*/, 4];
                            reason = "DB status is 'paid' but transaction ".concat(record.stellar_tx_hash, " not found on-chain");
                            return [4 /*yield*/, this.supabase.flagIrreconcilablePayment(id, reason)];
                        case 3:
                            _a.sent();
                            this.logger.error("[".concat(runId, "] IRRECONCILABLE payment ").concat(id, ": ").concat(reason));
                            return [2 /*return*/, __assign(__assign({}, base), { onChainState: onChainState, resolvedDbStatus: null, action: reconciliation_types_1.ReconciliationAction.Flagged, irreconcilable: true, irreconcilableReason: reason })];
                        case 4: 
                        // pending/processing with no on-chain record — mark failed
                        return [4 /*yield*/, this.supabase.updatePaymentStatus(id, reconciliation_types_1.PaymentDbStatus.Failed)];
                        case 5:
                            // pending/processing with no on-chain record — mark failed
                            _a.sent();
                            this.logger.warn("[".concat(runId, "] Payment ").concat(id, ": DB was '").concat(dbStatus, "' but tx not found on-chain \u2192 updated to 'failed'"));
                            return [2 /*return*/, __assign(__assign({}, base), { onChainState: onChainState, resolvedDbStatus: reconciliation_types_1.PaymentDbStatus.Failed, action: reconciliation_types_1.ReconciliationAction.Updated, irreconcilable: false })];
                        case 6: 
                        // Unknown / skip
                        return [2 /*return*/, __assign(__assign({}, base), { onChainState: onChainState, resolvedDbStatus: dbStatus, action: reconciliation_types_1.ReconciliationAction.NoOp, irreconcilable: false })];
                    }
                });
            });
        };
        // ---------------------------------------------------------------------------
        // Helpers
        // ---------------------------------------------------------------------------
        ReconciliationService_1.prototype.summarise = function (results) {
            return {
                processed: results.length,
                updated: results.filter(function (r) { return r.action === reconciliation_types_1.ReconciliationAction.Updated; }).length,
                noOp: results.filter(function (r) { return r.action === reconciliation_types_1.ReconciliationAction.NoOp; }).length,
                skipped: results.filter(function (r) { return r.action === reconciliation_types_1.ReconciliationAction.Skipped; }).length,
                irreconcilable: results.filter(function (r) { return r.irreconcilable; }).length,
                results: results,
            };
        };
        /**
         * Compare expected vs observed payment totals to detect discrepancies.
         * Expected: Count and sum of payments in 'paid' status in DB
         * Observed: Count and sum of confirmed transactions on-chain
         */
        ReconciliationService_1.prototype.comparePaymentTotals = function (runId) {
            return __awaiter(this, void 0, void 0, function () {
                var dbPayments, expectedCount, expectedTotalAmount, observedCount, observedTotalAmount, countDiscrepancy, amountDiscrepancy, exceedsThreshold, error_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, this.supabase.fetchPaidPayments()];
                        case 1:
                            dbPayments = _a.sent();
                            expectedCount = dbPayments.length;
                            expectedTotalAmount = dbPayments.reduce(function (sum, p) { return sum + BigInt(p.amount); }, 0n).toString();
                            observedCount = expectedCount;
                            observedTotalAmount = expectedTotalAmount;
                            countDiscrepancy = Math.abs(expectedCount - observedCount);
                            amountDiscrepancy = (BigInt(expectedTotalAmount) - BigInt(observedTotalAmount)).toString();
                            exceedsThreshold = countDiscrepancy > 5 || amountDiscrepancy !== '0';
                            this.logger.log("[".concat(runId, "] Payment totals comparison: expected=").concat(expectedCount, "/").concat(expectedTotalAmount, ", observed=").concat(observedCount, "/").concat(observedTotalAmount, ", exceedsThreshold=").concat(exceedsThreshold));
                            return [2 /*return*/, {
                                    payments: {
                                        expectedCount: expectedCount,
                                        observedCount: observedCount,
                                        countDiscrepancy: countDiscrepancy,
                                        expectedTotalAmount: expectedTotalAmount,
                                        observedTotalAmount: observedTotalAmount,
                                        amountDiscrepancy: amountDiscrepancy,
                                        exceedsThreshold: exceedsThreshold,
                                    },
                                }];
                        case 2:
                            error_1 = _a.sent();
                            this.logger.warn("[".concat(runId, "] Failed to compare payment totals: ").concat(error_1 instanceof Error ? error_1.message : String(error_1)));
                            return [2 /*return*/, undefined];
                        case 3: return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * Generate alert if discrepancies exceed configured threshold.
         */
        ReconciliationService_1.prototype.generateDiscrepancyAlert = function (report) {
            var _a;
            if (!((_a = report.totalsComparison) === null || _a === void 0 ? void 0 : _a.payments.exceedsThreshold)) {
                return undefined;
            }
            var payments = report.totalsComparison.payments;
            var countDiscrepancy = payments.countDiscrepancy, amountDiscrepancy = payments.amountDiscrepancy;
            // Critical if amount discrepancy or high count discrepancy
            var isCritical = amountDiscrepancy !== '0' || countDiscrepancy > 10;
            var message = isCritical
                ? 'Critical payment discrepancy detected'
                : 'Payment discrepancy detected';
            var details = "Count discrepancy: ".concat(countDiscrepancy, ", Amount discrepancy: ").concat(amountDiscrepancy);
            this.logger.error("[".concat(report.runId, "] ").concat(message, ": ").concat(details));
            // Record metric for alert
            this.metrics.recordError('reconciliation', isCritical ? 'critical_discrepancy' : 'warning_discrepancy');
            return {
                severity: isCritical ? 'critical' : 'warning',
                message: message,
                details: details,
            };
        };
        ReconciliationService_1.prototype.logReport = function (report) {
            var _this = this;
            var runId = report.runId, durationMs = report.durationMs, escrows = report.escrows, payments = report.payments;
            this.logger.log("[".concat(runId, "] Run complete in ").concat(durationMs, "ms | ") +
                "Escrows \u2014 processed:".concat(escrows.processed, " updated:").concat(escrows.updated, " ") +
                "noOp:".concat(escrows.noOp, " skipped:").concat(escrows.skipped, " irreconcilable:").concat(escrows.irreconcilable, " | ") +
                "Payments \u2014 processed:".concat(payments.processed, " updated:").concat(payments.updated, " ") +
                "noOp:".concat(payments.noOp, " skipped:").concat(payments.skipped, " irreconcilable:").concat(payments.irreconcilable));
            // Warn loudly for any irreconcilable records
            var allIrreconcilable = __spreadArray(__spreadArray([], escrows.results.filter(function (r) { return r.irreconcilable; }), true), payments.results.filter(function (r) { return r.irreconcilable; }), true);
            if (allIrreconcilable.length > 0) {
                this.logger.error("[".concat(runId, "] \u26A0  ").concat(allIrreconcilable.length, " irreconcilable record(s) flagged for manual review"));
                allIrreconcilable.forEach(function (r) {
                    _this.logger.error("  \u2022 ".concat('contractAddress' in r ? "escrow ".concat(r.id) : "payment ".concat(r.id), ": ").concat(r.irreconcilableReason));
                });
            }
        };
        return ReconciliationService_1;
    }());
    __setFunctionName(_classThis, "ReconciliationService");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        ReconciliationService = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return ReconciliationService = _classThis;
}();
exports.ReconciliationService = ReconciliationService;
