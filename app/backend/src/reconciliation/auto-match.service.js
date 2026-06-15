"use strict";
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
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
exports.AutoMatchService = void 0;
var common_1 = require("@nestjs/common");
var schedule_1 = require("@nestjs/schedule");
var stellar_sdk_1 = require("@stellar/stellar-sdk");
var stellar_config_1 = require("../config/stellar.config");
var auto_match_types_1 = require("./types/auto-match.types");
/**
 * Minimum confidence (0–100) required to auto-apply a match.
 *
 * In practice only a unique-memo + exact-amount match reaches this score,
 * satisfying the acceptance criterion: "Transactions with unique memos are
 * matched with 100% accuracy."
 */
var AUTO_MATCH_THRESHOLD = 95;
/**
 * Minimum confidence to queue a transaction for manual review instead of
 * discarding it as completely unmatched.
 */
var REVIEW_THRESHOLD = 55;
/**
 * Relative tolerance used for near-exact amount comparisons.
 * A delta of ≤ 0.1% is treated as "within tolerance" (partial credit).
 */
var AMOUNT_TOLERANCE_PCT = 0.001;
/**
 * AutoMatchService
 *
 * Background service that automatically reconciles incoming Stellar payment
 * transactions with open  RustAcademy payment links.
 *
 * ## Confidence scoring (0–100 points)
 *
 * | Signal                               | Points |
 * |--------------------------------------|--------|
 * | Exact memo match, memo is unique     | 60     |
 * | Exact memo match, memo is non-unique | 25     |
 * | Exact amount match                   | 40     |
 * | Amount within AMOUNT_TOLERANCE_PCT   | 20     |
 *
 * A memo that is present on one side but absent or different on the other is a
 * hard mismatch — that candidate is scored zero and excluded immediately.
 * Assets must also match exactly; cross-asset candidates are excluded.
 *
 * ## Decision thresholds
 * - ≥ 95  → AutoMatch   (link marked "paid", webhook fired)
 * - 55–94 → ReviewRequired (queued in unmatched_transactions)
 * - < 55  → Unmatched   (stored with no best-candidate reference)
 *
 * ## Processing cadence
 * The cron fires every minute.  Each cycle fetches all open payment links,
 * groups them by destination address, and for each destination queries Horizon
 * for recent payment operations (with per-destination cursor tracking to avoid
 * re-processing).
 */
var AutoMatchService = function () {
    var _classDecorators = [(0, common_1.Injectable)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _instanceExtraInitializers = [];
    var _handleCron_decorators;
    var AutoMatchService = _classThis = /** @class */ (function () {
        function AutoMatchService_1(config, supabase, unmatchedQueue, metrics, eventEmitter) {
            this.config = (__runInitializers(this, _instanceExtraInitializers), config);
            this.supabase = supabase;
            this.unmatchedQueue = unmatchedQueue;
            this.metrics = metrics;
            this.eventEmitter = eventEmitter;
            this.logger = new common_1.Logger(AutoMatchService.name);
            /**
             * Per-destination Horizon paging_token cursors.  Kept in memory so each
             * cycle only processes new transactions.  A process restart causes at most a
             * short window of re-evaluation — safe because all operations are idempotent.
             */
            this.destinationCursors = new Map();
            this.isRunning = false;
            var horizonUrl = stellar_config_1.HORIZON_BASE_URLS[config.network];
            this.server = new stellar_sdk_1.Horizon.Server(horizonUrl);
            this.logger.log("AutoMatchService initialised (".concat(config.network, " \u2192 ").concat(horizonUrl, ")"));
        }
        // ─── Cron ──────────────────────────────────────────────────────────────────
        /**
         * Runs every minute.  Self-serialising: if the previous cycle is still in
         * progress when the next tick fires, the tick is skipped.
         */
        AutoMatchService_1.prototype.handleCron = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (this.isRunning) {
                                this.logger.warn("Auto-match tick skipped — previous cycle still in progress");
                                return [2 /*return*/];
                            }
                            return [4 /*yield*/, this.runAutoMatchCycle()];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        // ─── Public API ────────────────────────────────────────────────────────────
        /**
         * Execute a complete auto-match cycle.
         *
         * Fetches all open payment links, polls Horizon for recent incoming payments
         * to each destination address, and processes every new transaction through
         * the scoring algorithm.
         *
         * Safe to call externally (e.g. from an admin endpoint for on-demand runs).
         *
         * @returns Summary counters for the cycle.
         */
        AutoMatchService_1.prototype.runAutoMatchCycle = function () {
            return __awaiter(this, void 0, void 0, function () {
                var startMs, processed, matched, queued, unmatched, openLinks, byDestination, _i, _a, _b, destination, links, cursor, transactions, _c, transactions_1, tx, result, durationMs, err_1;
                return __generator(this, function (_d) {
                    switch (_d.label) {
                        case 0:
                            this.isRunning = true;
                            startMs = Date.now();
                            processed = 0;
                            matched = 0;
                            queued = 0;
                            unmatched = 0;
                            _d.label = 1;
                        case 1:
                            _d.trys.push([1, 10, 11, 12]);
                            return [4 /*yield*/, this.fetchOpenPaymentLinks()];
                        case 2:
                            openLinks = _d.sent();
                            if (openLinks.length === 0) {
                                this.logger.debug("Auto-match cycle: no open payment links found");
                                return [2 /*return*/, { processed: processed, matched: matched, queued: queued, unmatched: unmatched }];
                            }
                            byDestination = this.groupByDestination(openLinks);
                            _i = 0, _a = byDestination.entries();
                            _d.label = 3;
                        case 3:
                            if (!(_i < _a.length)) return [3 /*break*/, 9];
                            _b = _a[_i], destination = _b[0], links = _b[1];
                            cursor = this.destinationCursors.get(destination);
                            return [4 /*yield*/, this.fetchRecentPayments(destination, cursor)];
                        case 4:
                            transactions = _d.sent();
                            _c = 0, transactions_1 = transactions;
                            _d.label = 5;
                        case 5:
                            if (!(_c < transactions_1.length)) return [3 /*break*/, 8];
                            tx = transactions_1[_c];
                            processed++;
                            return [4 /*yield*/, this.processTransaction(tx, links)];
                        case 6:
                            result = _d.sent();
                            switch (result.decision) {
                                case auto_match_types_1.MatchDecision.AutoMatch:
                                    matched++;
                                    break;
                                case auto_match_types_1.MatchDecision.ReviewRequired:
                                    queued++;
                                    break;
                                default:
                                    unmatched++;
                            }
                            // Advance the cursor so this transaction is not re-evaluated next tick.
                            this.destinationCursors.set(destination, tx.txHash);
                            _d.label = 7;
                        case 7:
                            _c++;
                            return [3 /*break*/, 5];
                        case 8:
                            _i++;
                            return [3 /*break*/, 3];
                        case 9:
                            durationMs = Date.now() - startMs;
                            this.logger.log("Auto-match cycle complete in ".concat(durationMs, "ms \u2014 ") +
                                "processed:".concat(processed, " matched:").concat(matched, " queued:").concat(queued, " unmatched:").concat(unmatched));
                            return [3 /*break*/, 12];
                        case 10:
                            err_1 = _d.sent();
                            this.logger.error("Auto-match cycle failed: ".concat(err_1.message), err_1.stack);
                            return [3 /*break*/, 12];
                        case 11:
                            this.isRunning = false;
                            return [7 /*endfinally*/];
                        case 12: return [2 /*return*/, { processed: processed, matched: matched, queued: queued, unmatched: unmatched }];
                    }
                });
            });
        };
        /**
         * Score and dispatch a single incoming transaction against a set of candidate
         * payment links.
         *
         * Exposed as a public method so callers (e.g. an admin endpoint or the
         * ingestion pipeline) can trigger on-demand matching for a specific
         * transaction without waiting for the next cron tick.
         *
         * @param tx               - The incoming Stellar payment to process.
         * @param candidateLinks   - Pre-fetched open links to score against.
         *                           If omitted, the service queries Supabase for all
         *                           open links matching the transaction destination.
         */
        AutoMatchService_1.prototype.processTransaction = function (tx, candidateLinks) {
            return __awaiter(this, void 0, void 0, function () {
                var links, _a, candidates, best, decision, processedAt, result;
                var _b, _c, _d, _e;
                return __generator(this, function (_f) {
                    switch (_f.label) {
                        case 0:
                            if (!(candidateLinks !== null && candidateLinks !== void 0)) return [3 /*break*/, 1];
                            _a = candidateLinks;
                            return [3 /*break*/, 3];
                        case 1: return [4 /*yield*/, this.fetchOpenLinksForDestination(tx.destinationAccount)];
                        case 2:
                            _a = (_f.sent());
                            _f.label = 3;
                        case 3:
                            links = _a;
                            candidates = this.scoreCandidates(tx, links);
                            best = (_b = candidates[0]) !== null && _b !== void 0 ? _b : null;
                            decision = this.resolveDecision((_c = best === null || best === void 0 ? void 0 : best.score.confidence) !== null && _c !== void 0 ? _c : 0);
                            processedAt = new Date().toISOString();
                            result = {
                                transaction: tx,
                                decision: decision,
                                bestLink: (_d = best === null || best === void 0 ? void 0 : best.link) !== null && _d !== void 0 ? _d : null,
                                bestScore: (_e = best === null || best === void 0 ? void 0 : best.score) !== null && _e !== void 0 ? _e : null,
                                candidates: candidates,
                                processedAt: processedAt,
                            };
                            return [4 /*yield*/, this.applyDecision(result)];
                        case 4:
                            _f.sent();
                            return [2 /*return*/, result];
                    }
                });
            });
        };
        // ─── Scoring ───────────────────────────────────────────────────────────────
        /**
         * Score a transaction against all candidate links and return candidates with
         * a confidence > 0, sorted by confidence descending.
         *
         * @param tx    - The incoming transaction.
         * @param links - Open payment links to evaluate as candidates.
         */
        AutoMatchService_1.prototype.scoreCandidates = function (tx, links) {
            var _this = this;
            // Count how many open links carry each memo so we can detect uniqueness.
            var memoCounts = this.countMemoOccurrences(links);
            return links
                .map(function (link) { return ({ link: link, score: _this.scoreOne(tx, link, memoCounts) }); })
                .filter(function (c) { return c.score.confidence > 0; })
                .sort(function (a, b) { return b.score.confidence - a.score.confidence; });
        };
        /**
         * Score a single (transaction, link) pair.
         *
         * ## Scoring matrix (max 100 points)
         *
         * **Memo component (0–60 pts)**
         * - Exact match, memo unique across open links: 60 pts
         * - Exact match, memo non-unique:               25 pts
         * - Memo present on one side but not the other:  0 pts (hard exclusion)
         * - Memo mismatch:                               0 pts (hard exclusion)
         *
         * **Amount component (0–40 pts)**
         * - Exact match (< 1e-7 delta):                 40 pts
         * - Within AMOUNT_TOLERANCE_PCT:                20 pts
         * - Outside tolerance:                           0 pts
         *
         * Asset code + issuer must match exactly; mismatching assets return score 0.
         */
        AutoMatchService_1.prototype.scoreOne = function (tx, link, memoCounts) {
            var _a, _b, _c;
            var assetMatches = tx.assetCode === link.asset_code &&
                ((_a = tx.assetIssuer) !== null && _a !== void 0 ? _a : null) === ((_b = link.asset_issuer) !== null && _b !== void 0 ? _b : null);
            if (!assetMatches) {
                return this.zeroScore(false);
            }
            var breakdown = {
                memoPresent: !!(tx.memo && link.memo),
                memoMatches: false,
                memoIsUnique: false,
                amountExact: false,
                amountWithinTolerance: false,
                assetMatches: true,
            };
            // ── Memo scoring ─────────────────────────────────────────────────────────
            var memoPoints = 0;
            if (tx.memo && link.memo) {
                if (tx.memo !== link.memo) {
                    // Both sides have a memo but they disagree — definitive mismatch.
                    return this.zeroScore(true);
                }
                breakdown.memoMatches = true;
                var occurrences = (_c = memoCounts.get(link.memo)) !== null && _c !== void 0 ? _c : 1;
                breakdown.memoIsUnique = occurrences === 1;
                memoPoints = breakdown.memoIsUnique ? 60 : 25;
            }
            else if (tx.memo && !link.memo) {
                // Transaction carries a memo but the link does not expect one.
                // This is a weak mismatch — proceed with amount scoring only.
            }
            else if (!tx.memo && link.memo) {
                // The link requires a specific memo but the transaction has none.
                // Exclude this candidate entirely to avoid false positives.
                return this.zeroScore(true);
            }
            // If neither side has a memo: neutral — fall through to amount scoring.
            // ── Amount scoring ────────────────────────────────────────────────────────
            var amountPoints = 0;
            var txAmount = parseFloat(tx.amount);
            var linkAmount = parseFloat(link.amount);
            if (!isNaN(txAmount) && !isNaN(linkAmount) && linkAmount > 0) {
                var delta = Math.abs(txAmount - linkAmount);
                if (delta < 1e-7) {
                    breakdown.amountExact = true;
                    breakdown.amountWithinTolerance = true;
                    amountPoints = 40;
                }
                else if (delta / linkAmount <= AMOUNT_TOLERANCE_PCT) {
                    breakdown.amountWithinTolerance = true;
                    amountPoints = 20;
                }
            }
            return { confidence: memoPoints + amountPoints, breakdown: breakdown };
        };
        Object.defineProperty(AutoMatchService_1.prototype, "running", {
            /** Whether the auto-match cycle is currently running. */
            get: function () {
                return this.isRunning;
            },
            enumerable: false,
            configurable: true
        });
        // ─── Decision ──────────────────────────────────────────────────────────────
        AutoMatchService_1.prototype.resolveDecision = function (confidence) {
            if (confidence >= AUTO_MATCH_THRESHOLD)
                return auto_match_types_1.MatchDecision.AutoMatch;
            if (confidence >= REVIEW_THRESHOLD)
                return auto_match_types_1.MatchDecision.ReviewRequired;
            return auto_match_types_1.MatchDecision.Unmatched;
        };
        AutoMatchService_1.prototype.applyDecision = function (result) {
            return __awaiter(this, void 0, void 0, function () {
                var tx, decision, bestLink, bestScore, _a;
                var _b, _c, _d, _e;
                return __generator(this, function (_f) {
                    switch (_f.label) {
                        case 0:
                            tx = result.transaction, decision = result.decision, bestLink = result.bestLink, bestScore = result.bestScore;
                            _a = decision;
                            switch (_a) {
                                case auto_match_types_1.MatchDecision.AutoMatch: return [3 /*break*/, 1];
                                case auto_match_types_1.MatchDecision.ReviewRequired: return [3 /*break*/, 3];
                            }
                            return [3 /*break*/, 5];
                        case 1: return [4 /*yield*/, this.applyAutoMatch(tx, bestLink, bestScore.confidence)];
                        case 2:
                            _f.sent();
                            return [3 /*break*/, 7];
                        case 3: return [4 /*yield*/, this.unmatchedQueue.enqueue(tx, (_b = bestLink === null || bestLink === void 0 ? void 0 : bestLink.id) !== null && _b !== void 0 ? _b : null, (_c = bestScore === null || bestScore === void 0 ? void 0 : bestScore.confidence) !== null && _c !== void 0 ? _c : null)];
                        case 4:
                            _f.sent();
                            this.logger.log("Transaction ".concat(tx.txHash, " queued for review ") +
                                "(confidence=".concat((_d = bestScore === null || bestScore === void 0 ? void 0 : bestScore.confidence) !== null && _d !== void 0 ? _d : 0, ", candidate=").concat((_e = bestLink === null || bestLink === void 0 ? void 0 : bestLink.id) !== null && _e !== void 0 ? _e : "none", ")"));
                            return [3 /*break*/, 7];
                        case 5: return [4 /*yield*/, this.unmatchedQueue.enqueue(tx, null, null)];
                        case 6:
                            _f.sent();
                            this.logger.log("Transaction ".concat(tx.txHash, " stored as unmatched (no candidates above threshold)"));
                            _f.label = 7;
                        case 7: return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * Apply a high-confidence auto-match: update the payment link status to
         * "paid" and emit an event for downstream webhook delivery.
         */
        AutoMatchService_1.prototype.applyAutoMatch = function (tx, link, confidence) {
            return __awaiter(this, void 0, void 0, function () {
                var matchedAt, error, err_2;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            matchedAt = new Date().toISOString();
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 3, , 4]);
                            return [4 /*yield*/, this.supabase
                                    .getClient()
                                    .from("payment_links")
                                    .update({
                                    status: auto_match_types_1.PaymentLinkStatus.Paid,
                                    matched_tx_hash: tx.txHash,
                                    matched_at: matchedAt,
                                    match_confidence: confidence,
                                    updated_at: matchedAt,
                                })
                                    .eq("id", link.id)
                                    // Guard: only update if the link is still open.  Prevents race conditions
                                    // where two concurrent cycles attempt to apply the same match.
                                    .eq("status", auto_match_types_1.PaymentLinkStatus.Open)];
                        case 2:
                            error = (_a.sent()).error;
                            if (error) {
                                this.logger.error("Failed to mark link ".concat(link.id, " as paid: ").concat(error.message));
                                return [2 /*return*/];
                            }
                            this.logger.log("Auto-match applied: link ".concat(link.id, " \u2192 PAID ") +
                                "(tx=".concat(tx.txHash, ", confidence=").concat(confidence, ")"));
                            this.fireReconciliationEvent(link, tx, confidence, matchedAt);
                            return [3 /*break*/, 4];
                        case 3:
                            err_2 = _a.sent();
                            this.logger.error("Unexpected error applying auto-match for link ".concat(link.id, ": ").concat(err_2.message), err_2.stack);
                            return [3 /*break*/, 4];
                        case 4: return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * Emit the `auto_reconciliation.succeeded` event.
         * The NotificationService listens for this and dispatches webhook deliveries.
         */
        AutoMatchService_1.prototype.fireReconciliationEvent = function (link, tx, confidence, matchedAt) {
            var eventPayload = {
                linkId: link.id,
                ownerPublicKey: link.owner_public_key,
                txHash: tx.txHash,
                amount: tx.amount,
                assetCode: tx.assetCode,
                confidence: confidence,
                matchedAt: matchedAt,
            };
            this.eventEmitter.emit("auto_reconciliation.succeeded", eventPayload);
            this.logger.debug("Emitted auto_reconciliation.succeeded for link ".concat(link.id, " (tx=").concat(tx.txHash, ")"));
        };
        // ─── Horizon queries ───────────────────────────────────────────────────────
        /**
         * Fetch recent payment operations destined for a given Stellar account.
         *
         * Uses the Horizon `/payments?for_account=&order=desc` endpoint.  Results
         * are filtered to outgoing→incoming payment ops only (type === 'payment').
         * A cursor is supplied when available to avoid re-processing old operations.
         *
         * @param destination - The Stellar account to query.
         * @param afterCursor - Optional Horizon paging_token to resume from.
         * @returns Array of normalised transactions (may be empty on error or 404).
         */
        AutoMatchService_1.prototype.fetchRecentPayments = function (destination, afterCursor) {
            return __awaiter(this, void 0, void 0, function () {
                var callStart, builder, response, duration, records, err_3, duration, horizonErr;
                var _this = this;
                var _a, _b;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            callStart = Date.now();
                            _c.label = 1;
                        case 1:
                            _c.trys.push([1, 3, , 4]);
                            builder = this.server
                                .payments()
                                .forAccount(destination)
                                .order("desc")
                                .limit(50);
                            if (afterCursor) {
                                builder = builder.cursor(afterCursor);
                            }
                            return [4 /*yield*/, builder.call()];
                        case 2:
                            response = _c.sent();
                            duration = (Date.now() - callStart) / 1000;
                            this.metrics.recordExternalCall("horizon", "payments_for_account", duration);
                            records = (_a = response === null || response === void 0 ? void 0 : response.records) !== null && _a !== void 0 ? _a : [];
                            return [2 /*return*/, records
                                    .filter(function (op) { return op.type === "payment" && op.to === destination; })
                                    .map(function (op) { return _this.normalizePaymentOp(op); })];
                        case 3:
                            err_3 = _c.sent();
                            duration = (Date.now() - callStart) / 1000;
                            this.metrics.recordExternalCall("horizon", "payments_for_account", duration);
                            horizonErr = err_3;
                            if (((_b = horizonErr === null || horizonErr === void 0 ? void 0 : horizonErr.response) === null || _b === void 0 ? void 0 : _b.status) === 404) {
                                return [2 /*return*/, []];
                            }
                            this.logger.warn("Horizon payment fetch failed for ".concat(destination, ": ").concat(err_3.message));
                            return [2 /*return*/, []];
                        case 4: return [2 /*return*/];
                    }
                });
            });
        };
        /** Normalise a raw Horizon payment record into a typed IncomingTransaction. */
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        AutoMatchService_1.prototype.normalizePaymentOp = function (op) {
            var _a, _b, _c, _d, _e, _f, _g;
            var isNative = op.asset_type === "native";
            return {
                txHash: op.transaction_hash,
                ledger: (_b = (_a = op.transaction) === null || _a === void 0 ? void 0 : _a.ledger_attr) !== null && _b !== void 0 ? _b : 0,
                sourceAccount: op.from,
                destinationAccount: op.to,
                amount: op.amount,
                assetCode: isNative ? "XLM" : op.asset_code,
                assetIssuer: isNative
                    ? null
                    : ((_c = op.asset_issuer) !== null && _c !== void 0 ? _c : null),
                memo: (_e = (_d = op.transaction) === null || _d === void 0 ? void 0 : _d.memo) !== null && _e !== void 0 ? _e : null,
                memoType: (_g = (_f = op.transaction) === null || _f === void 0 ? void 0 : _f.memo_type) !== null && _g !== void 0 ? _g : null,
                occurredAt: op.created_at,
            };
        };
        // ─── Supabase queries ──────────────────────────────────────────────────────
        /** Fetch every open, non-expired payment link. */
        AutoMatchService_1.prototype.fetchOpenPaymentLinks = function () {
            return __awaiter(this, void 0, void 0, function () {
                var now, _a, data, error;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            now = new Date().toISOString();
                            return [4 /*yield*/, this.supabase
                                    .getClient()
                                    .from("payment_links")
                                    .select("*")
                                    .eq("status", auto_match_types_1.PaymentLinkStatus.Open)
                                    .or("expires_at.is.null,expires_at.gt.".concat(now))];
                        case 1:
                            _a = _b.sent(), data = _a.data, error = _a.error;
                            if (error) {
                                this.logger.error("Failed to fetch open payment links: ".concat(error.message));
                                return [2 /*return*/, []];
                            }
                            return [2 /*return*/, (data !== null && data !== void 0 ? data : [])];
                    }
                });
            });
        };
        /** Fetch open payment links for a specific destination address. */
        AutoMatchService_1.prototype.fetchOpenLinksForDestination = function (destination) {
            return __awaiter(this, void 0, void 0, function () {
                var now, _a, data, error;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            now = new Date().toISOString();
                            return [4 /*yield*/, this.supabase
                                    .getClient()
                                    .from("payment_links")
                                    .select("*")
                                    .eq("status", auto_match_types_1.PaymentLinkStatus.Open)
                                    .eq("destination_public_key", destination)
                                    .or("expires_at.is.null,expires_at.gt.".concat(now))];
                        case 1:
                            _a = _b.sent(), data = _a.data, error = _a.error;
                            if (error) {
                                this.logger.error("Failed to fetch open links for destination ".concat(destination, ": ").concat(error.message));
                                return [2 /*return*/, []];
                            }
                            return [2 /*return*/, (data !== null && data !== void 0 ? data : [])];
                    }
                });
            });
        };
        // ─── Utilities ─────────────────────────────────────────────────────────────
        AutoMatchService_1.prototype.groupByDestination = function (links) {
            var _a;
            var map = new Map();
            for (var _i = 0, links_1 = links; _i < links_1.length; _i++) {
                var link = links_1[_i];
                var group = (_a = map.get(link.destination_public_key)) !== null && _a !== void 0 ? _a : [];
                group.push(link);
                map.set(link.destination_public_key, group);
            }
            return map;
        };
        /**
         * Count how many open payment links in the candidate set share each memo
         * value.  Used by {@link scoreOne} to determine memo uniqueness.
         */
        AutoMatchService_1.prototype.countMemoOccurrences = function (links) {
            var _a;
            var counts = new Map();
            for (var _i = 0, links_2 = links; _i < links_2.length; _i++) {
                var link = links_2[_i];
                if (link.memo) {
                    counts.set(link.memo, ((_a = counts.get(link.memo)) !== null && _a !== void 0 ? _a : 0) + 1);
                }
            }
            return counts;
        };
        AutoMatchService_1.prototype.zeroScore = function (assetMatches) {
            return {
                confidence: 0,
                breakdown: {
                    memoPresent: false,
                    memoMatches: false,
                    memoIsUnique: false,
                    amountExact: false,
                    amountWithinTolerance: false,
                    assetMatches: assetMatches,
                },
            };
        };
        return AutoMatchService_1;
    }());
    __setFunctionName(_classThis, "AutoMatchService");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _handleCron_decorators = [(0, schedule_1.Cron)(schedule_1.CronExpression.EVERY_MINUTE, {
                name: "auto-match-cycle",
                timeZone: "UTC",
            })];
        __esDecorate(_classThis, null, _handleCron_decorators, { kind: "method", name: "handleCron", static: false, private: false, access: { has: function (obj) { return "handleCron" in obj; }, get: function (obj) { return obj.handleCron; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        AutoMatchService = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return AutoMatchService = _classThis;
}();
exports.AutoMatchService = AutoMatchService;
