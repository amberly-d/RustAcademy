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
exports.UnmatchedQueueRepository = void 0;
var common_1 = require("@nestjs/common");
var auto_match_types_1 = require("./types/auto-match.types");
/**
 * UnmatchedQueueRepository
 *
 * Data-access layer for the `unmatched_transactions` table.
 * Transactions land here when the auto-match engine cannot find a payment link
 * with sufficient confidence.  Operators review, resolve, or dismiss entries
 * via the admin endpoints on ReconciliationController.
 */
var UnmatchedQueueRepository = function () {
    var _classDecorators = [(0, common_1.Injectable)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var UnmatchedQueueRepository = _classThis = /** @class */ (function () {
        function UnmatchedQueueRepository_1(supabase) {
            this.supabase = supabase;
            this.logger = new common_1.Logger(UnmatchedQueueRepository.name);
        }
        /**
         * Persist an incoming transaction in the review queue.
         *
         * Idempotent — a duplicate `tx_hash` is silently ignored (the existing row
         * is returned as-is).  This ensures the cron-based engine can safely retry
         * without creating duplicates.
         */
        UnmatchedQueueRepository_1.prototype.enqueue = function (tx, bestCandidateLinkId, bestConfidence) {
            return __awaiter(this, void 0, void 0, function () {
                var _a, data, error;
                var _b, _c, _d;
                return __generator(this, function (_e) {
                    switch (_e.label) {
                        case 0: return [4 /*yield*/, this.supabase
                                .getClient()
                                .from("unmatched_transactions")
                                .upsert({
                                tx_hash: tx.txHash,
                                ledger: tx.ledger,
                                source_account: tx.sourceAccount,
                                destination_account: tx.destinationAccount,
                                amount: tx.amount,
                                asset_code: tx.assetCode,
                                asset_issuer: (_b = tx.assetIssuer) !== null && _b !== void 0 ? _b : null,
                                memo: (_c = tx.memo) !== null && _c !== void 0 ? _c : null,
                                memo_type: (_d = tx.memoType) !== null && _d !== void 0 ? _d : null,
                                occurred_at: tx.occurredAt,
                                best_candidate_link_id: bestCandidateLinkId,
                                best_confidence: bestConfidence,
                            }, { onConflict: "tx_hash", ignoreDuplicates: true })
                                .select()
                                .maybeSingle()];
                        case 1:
                            _a = _e.sent(), data = _a.data, error = _a.error;
                            if (error) {
                                this.logger.error("Failed to enqueue unmatched transaction ".concat(tx.txHash, ": ").concat(error.message));
                                return [2 /*return*/, null];
                            }
                            return [2 /*return*/, data];
                    }
                });
            });
        };
        /**
         * Return a page of pending (unreviewed) transactions, newest first.
         *
         * @param limit  - Max rows to return (capped at 100).
         * @param offset - Zero-based row offset for pagination.
         */
        UnmatchedQueueRepository_1.prototype.listPending = function (limit, offset) {
            return __awaiter(this, void 0, void 0, function () {
                var effectiveLimit, _a, data, error, count, total;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            effectiveLimit = Math.min(100, Math.max(1, limit));
                            return [4 /*yield*/, this.supabase
                                    .getClient()
                                    .from("unmatched_transactions")
                                    .select("*", { count: "exact" })
                                    .eq("status", auto_match_types_1.UnmatchedStatus.Pending)
                                    .order("ingested_at", { ascending: false })
                                    .range(offset, offset + effectiveLimit - 1)];
                        case 1:
                            _a = _b.sent(), data = _a.data, error = _a.error, count = _a.count;
                            if (error) {
                                this.logger.error("Failed to list unmatched transactions: ".concat(error.message));
                                return [2 /*return*/, { items: [], total: 0, hasMore: false }];
                            }
                            total = count !== null && count !== void 0 ? count : 0;
                            return [2 /*return*/, {
                                    items: (data !== null && data !== void 0 ? data : []),
                                    total: total,
                                    hasMore: offset + effectiveLimit < total,
                                }];
                    }
                });
            });
        };
        /** Look up a single row by its UUID primary key. */
        UnmatchedQueueRepository_1.prototype.findById = function (id) {
            return __awaiter(this, void 0, void 0, function () {
                var _a, data, error;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, this.supabase
                                .getClient()
                                .from("unmatched_transactions")
                                .select("*")
                                .eq("id", id)
                                .maybeSingle()];
                        case 1:
                            _a = _b.sent(), data = _a.data, error = _a.error;
                            if (error) {
                                this.logger.error("Failed to find unmatched transaction ".concat(id, ": ").concat(error.message));
                                return [2 /*return*/, null];
                            }
                            return [2 /*return*/, data];
                    }
                });
            });
        };
        /** Look up a single row by Stellar transaction hash. */
        UnmatchedQueueRepository_1.prototype.findByTxHash = function (txHash) {
            return __awaiter(this, void 0, void 0, function () {
                var _a, data, error;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, this.supabase
                                .getClient()
                                .from("unmatched_transactions")
                                .select("*")
                                .eq("tx_hash", txHash)
                                .maybeSingle()];
                        case 1:
                            _a = _b.sent(), data = _a.data, error = _a.error;
                            if (error) {
                                this.logger.error("Failed to find unmatched tx by hash ".concat(txHash, ": ").concat(error.message));
                                return [2 /*return*/, null];
                            }
                            return [2 /*return*/, data];
                    }
                });
            });
        };
        /**
         * Mark an entry as resolved after an operator manually confirms which
         * payment link this transaction belongs to.
         *
         * Only rows with `status = 'pending'` are updated; this guards against
         * accidentally re-resolving an already-handled entry.
         *
         * @throws Error if the database update fails.
         */
        UnmatchedQueueRepository_1.prototype.resolve = function (id, resolvedBy, note) {
            return __awaiter(this, void 0, void 0, function () {
                var error;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.supabase
                                .getClient()
                                .from("unmatched_transactions")
                                .update({
                                status: auto_match_types_1.UnmatchedStatus.Resolved,
                                resolved_by: resolvedBy,
                                resolved_at: new Date().toISOString(),
                                resolution_note: note !== null && note !== void 0 ? note : null,
                            })
                                .eq("id", id)
                                .eq("status", auto_match_types_1.UnmatchedStatus.Pending)];
                        case 1:
                            error = (_a.sent()).error;
                            if (error) {
                                this.logger.error("Failed to resolve unmatched transaction ".concat(id, ": ").concat(error.message));
                                throw new Error("Could not resolve unmatched transaction ".concat(id, ": ").concat(error.message));
                            }
                            return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * Dismiss an entry — the operator has determined this transaction does not
         * correspond to any  RustAcademy payment link and requires no further action.
         *
         * @throws Error if the database update fails.
         */
        UnmatchedQueueRepository_1.prototype.dismiss = function (id, resolvedBy, note) {
            return __awaiter(this, void 0, void 0, function () {
                var error;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.supabase
                                .getClient()
                                .from("unmatched_transactions")
                                .update({
                                status: auto_match_types_1.UnmatchedStatus.Dismissed,
                                resolved_by: resolvedBy,
                                resolved_at: new Date().toISOString(),
                                resolution_note: note !== null && note !== void 0 ? note : null,
                            })
                                .eq("id", id)
                                .eq("status", auto_match_types_1.UnmatchedStatus.Pending)];
                        case 1:
                            error = (_a.sent()).error;
                            if (error) {
                                this.logger.error("Failed to dismiss unmatched transaction ".concat(id, ": ").concat(error.message));
                                throw new Error("Could not dismiss unmatched transaction ".concat(id, ": ").concat(error.message));
                            }
                            return [2 /*return*/];
                    }
                });
            });
        };
        return UnmatchedQueueRepository_1;
    }());
    __setFunctionName(_classThis, "UnmatchedQueueRepository");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        UnmatchedQueueRepository = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return UnmatchedQueueRepository = _classThis;
}();
exports.UnmatchedQueueRepository = UnmatchedQueueRepository;
