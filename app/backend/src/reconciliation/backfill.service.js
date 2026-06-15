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
exports.BackfillService = void 0;
var common_1 = require("@nestjs/common");
var stellar_sdk_1 = require("@stellar/stellar-sdk");
var uuid_1 = require("uuid");
/**
 * BackfillService processes historical ledger ranges to fill gaps in event ingestion.
 *
 * Features:
 * - Idempotent: Can be run repeatedly without duplicating data
 * - Batch processing: Processes ledgers in configurable batch sizes
 * - Progress tracking: Provides real-time progress updates
 * - Error handling: Continues processing on individual ledger failures
 * - Metrics: Records backfill performance metrics
 */
var BackfillService = function () {
    var _classDecorators = [(0, common_1.Injectable)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var BackfillService = _classThis = /** @class */ (function () {
        function BackfillService_1(config, supabase, metrics, parser, escrowRepo, cursorRepo) {
            this.config = config;
            this.supabase = supabase;
            this.metrics = metrics;
            this.parser = parser;
            this.escrowRepo = escrowRepo;
            this.cursorRepo = cursorRepo;
            this.logger = new common_1.Logger(BackfillService.name);
            this.activeBackfill = null;
            var horizonUrl = config.network === "mainnet"
                ? "https://horizon.stellar.org"
                : "https://horizon-testnet.stellar.org";
            this.server = new stellar_sdk_1.Horizon.Server(horizonUrl);
            this.logger.log("BackfillService initialized against ".concat(config.network, " (").concat(horizonUrl, ")"));
        }
        /**
         * Start a backfill job for the specified ledger range.
         * Only one backfill can run at a time.
         */
        BackfillService_1.prototype.startBackfill = function (config) {
            return __awaiter(this, void 0, void 0, function () {
                var runId, startTime, batchSize, durationMs, result, error_1, durationMs, errorMessage, result;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (this.activeBackfill) {
                                throw new Error("A backfill job is already running");
                            }
                            runId = (0, uuid_1.v4)();
                            startTime = Date.now();
                            batchSize = config.batchSize || 200;
                            this.activeBackfill = {
                                runId: runId,
                                status: "running",
                                startLedger: config.startLedger,
                                endLedger: config.endLedger,
                                currentLedger: config.startLedger,
                                processedCount: 0,
                                errorCount: 0,
                                startedAt: new Date().toISOString(),
                            };
                            this.logger.log("[".concat(runId, "] Starting backfill: ledger ").concat(config.startLedger, " to ").concat(config.endLedger));
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 3, , 4]);
                            return [4 /*yield*/, this.processLedgerRange(config.contractId, config.startLedger, config.endLedger, batchSize, runId)];
                        case 2:
                            _a.sent();
                            durationMs = Date.now() - startTime;
                            result = {
                                runId: runId,
                                startLedger: config.startLedger,
                                endLedger: config.endLedger,
                                processedCount: this.activeBackfill.processedCount,
                                errorCount: this.activeBackfill.errorCount,
                                durationMs: durationMs,
                                success: true,
                            };
                            this.activeBackfill.status = "completed";
                            this.activeBackfill.completedAt = new Date().toISOString();
                            this.logger.log("[".concat(runId, "] Backfill completed: ").concat(this.activeBackfill.processedCount, " processed, ").concat(this.activeBackfill.errorCount, " errors in ").concat(durationMs, "ms"));
                            this.activeBackfill = null;
                            return [2 /*return*/, result];
                        case 3:
                            error_1 = _a.sent();
                            durationMs = Date.now() - startTime;
                            errorMessage = error_1 instanceof Error ? error_1.message : String(error_1);
                            this.activeBackfill.status = "failed";
                            this.activeBackfill.completedAt = new Date().toISOString();
                            this.activeBackfill.errorMessage = errorMessage;
                            this.logger.error("[".concat(runId, "] Backfill failed after ").concat(durationMs, "ms: ").concat(errorMessage));
                            this.metrics.recordError("backfill", "processing_error");
                            result = {
                                runId: runId,
                                startLedger: config.startLedger,
                                endLedger: config.endLedger,
                                processedCount: this.activeBackfill.processedCount,
                                errorCount: this.activeBackfill.errorCount,
                                durationMs: durationMs,
                                success: false,
                            };
                            this.activeBackfill = null;
                            return [2 /*return*/, result];
                        case 4: return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * Get the current backfill progress if one is running.
         */
        BackfillService_1.prototype.getBackfillProgress = function () {
            return this.activeBackfill;
        };
        /**
         * Process a range of ledgers in batches.
         */
        BackfillService_1.prototype.processLedgerRange = function (contractId, startLedger, endLedger, batchSize, runId) {
            return __awaiter(this, void 0, void 0, function () {
                var currentLedger, batchEnd, error_2;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            currentLedger = startLedger;
                            _a.label = 1;
                        case 1:
                            if (!(currentLedger <= endLedger)) return [3 /*break*/, 6];
                            batchEnd = Math.min(currentLedger + batchSize - 1, endLedger);
                            this.logger.debug("[".concat(runId, "] Processing batch: ledger ").concat(currentLedger, " to ").concat(batchEnd));
                            _a.label = 2;
                        case 2:
                            _a.trys.push([2, 4, , 5]);
                            return [4 /*yield*/, this.processBatch(contractId, currentLedger, batchEnd, runId)];
                        case 3:
                            _a.sent();
                            this.activeBackfill.currentLedger = batchEnd;
                            return [3 /*break*/, 5];
                        case 4:
                            error_2 = _a.sent();
                            this.activeBackfill.errorCount++;
                            this.logger.error("[".concat(runId, "] Batch failed (ledger ").concat(currentLedger, "-").concat(batchEnd, "): ").concat(error_2 instanceof Error ? error_2.message : String(error_2)));
                            return [3 /*break*/, 5];
                        case 5:
                            currentLedger = batchEnd + 1;
                            return [3 /*break*/, 1];
                        case 6: return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * Process a single batch of ledgers.
         */
        BackfillService_1.prototype.processBatch = function (contractId, startLedger, endLedger, runId) {
            return __awaiter(this, void 0, void 0, function () {
                var startTime, events, duration, _i, events_1, rawEvent, error_3, error_4, duration, errorType;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            startTime = Date.now();
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 9, , 10]);
                            return [4 /*yield*/, this.fetchContractEvents(contractId, startLedger, endLedger)];
                        case 2:
                            events = _a.sent();
                            duration = (Date.now() - startTime) / 1000;
                            this.metrics.recordExternalCall("horizon", "fetchContractEvents", duration);
                            _i = 0, events_1 = events;
                            _a.label = 3;
                        case 3:
                            if (!(_i < events_1.length)) return [3 /*break*/, 8];
                            rawEvent = events_1[_i];
                            _a.label = 4;
                        case 4:
                            _a.trys.push([4, 6, , 7]);
                            return [4 /*yield*/, this.processEvent(rawEvent, contractId, runId)];
                        case 5:
                            _a.sent();
                            this.activeBackfill.processedCount++;
                            return [3 /*break*/, 7];
                        case 6:
                            error_3 = _a.sent();
                            this.activeBackfill.errorCount++;
                            this.logger.warn("[".concat(runId, "] Event processing failed: ").concat(error_3 instanceof Error ? error_3.message : String(error_3)));
                            return [3 /*break*/, 7];
                        case 7:
                            _i++;
                            return [3 /*break*/, 3];
                        case 8:
                            this.logger.debug("[".concat(runId, "] Batch complete: ").concat(events.length, " events processed"));
                            return [3 /*break*/, 10];
                        case 9:
                            error_4 = _a.sent();
                            duration = (Date.now() - startTime) / 1000;
                            this.metrics.recordExternalCall("horizon", "fetchContractEvents", duration);
                            errorType = error_4 instanceof Error ? error_4.constructor.name : "UnknownError";
                            this.metrics.recordError("horizon", errorType);
                            throw error_4;
                        case 10: return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * Fetch contract events from Horizon for a ledger range.
         */
        BackfillService_1.prototype.fetchContractEvents = function (contractId, startLedger, endLedger) {
            return __awaiter(this, void 0, void 0, function () {
                var url, response, data;
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            url = new URL("".concat(this.server.serverURL, "/contract_events"));
                            url.searchParams.set("contract_id", contractId);
                            url.searchParams.set("min_ledger", startLedger.toString());
                            url.searchParams.set("max_ledger", endLedger.toString());
                            url.searchParams.set("limit", "200");
                            return [4 /*yield*/, fetch(url.toString())];
                        case 1:
                            response = _b.sent();
                            if (!response.ok) {
                                throw new Error("Horizon API error: ".concat(response.status, " ").concat(response.statusText));
                            }
                            return [4 /*yield*/, response.json()];
                        case 2:
                            data = (_b.sent());
                            return [2 /*return*/, ((_a = data._embedded) === null || _a === void 0 ? void 0 : _a.records) || []];
                    }
                });
            });
        };
        /**
         * Process a single contract event.
         */
        BackfillService_1.prototype.processEvent = function (rawEvent, contractId, runId) {
            return __awaiter(this, void 0, void 0, function () {
                var event, streamId;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            event = this.parser.parse(rawEvent);
                            if (!event) {
                                // Unrecognised event, skip
                                return [2 /*return*/];
                            }
                            this.logger.debug("[".concat(runId, "] Processing event ").concat(event.eventType, " at ledger ").concat(rawEvent.ledger));
                            // Persist event idempotently
                            return [4 /*yield*/, this.persistEvent(event)];
                        case 1:
                            // Persist event idempotently
                            _a.sent();
                            streamId = "contract:".concat(contractId);
                            return [4 /*yield*/, this.cursorRepo.saveCursor(streamId, rawEvent.paging_token, rawEvent.ledger)];
                        case 2:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * Persist an event to the database.
         */
        BackfillService_1.prototype.persistEvent = function (event) {
            return __awaiter(this, void 0, void 0, function () {
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _a = event.eventType;
                            switch (_a) {
                                case "EscrowDeposited": return [3 /*break*/, 1];
                                case "EscrowWithdrawn": return [3 /*break*/, 1];
                                case "EscrowRefunded": return [3 /*break*/, 1];
                            }
                            return [3 /*break*/, 3];
                        case 1: return [4 /*yield*/, this.escrowRepo.upsertEvent(event)];
                        case 2:
                            _b.sent();
                            return [3 /*break*/, 4];
                        case 3: 
                        // Other events are not persisted
                        return [3 /*break*/, 4];
                        case 4: return [2 /*return*/];
                    }
                });
            });
        };
        return BackfillService_1;
    }());
    __setFunctionName(_classThis, "BackfillService");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        BackfillService = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return BackfillService = _classThis;
}();
exports.BackfillService = BackfillService;
