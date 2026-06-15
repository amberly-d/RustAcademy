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
exports.StellarIngestionService = void 0;
var common_1 = require("@nestjs/common");
var stellar_sdk_1 = require("@stellar/stellar-sdk");
var stellar_config_1 = require("../config/stellar.config");
var types_1 = require("../job-queue/types");
/** Milliseconds between reconnect attempts (doubles each retry, capped at MAX_BACKOFF_MS). */
var INITIAL_BACKOFF_MS = 1000;
var MAX_BACKOFF_MS = 60000;
var BACKOFF_MULTIPLIER = 2;
/**
 * Listens to Horizon SSE streams for a  RustAcademy Soroban contract.
 *
 * Responsibilities:
 *  - Open a streaming subscription starting from the last known cursor.
 *  - Parse each raw Soroban event into a typed domain event.
 *  - Persist escrow events idempotently to Supabase.
 *  - Update the cursor after each successful persist.
 *  - Auto-reconnect with exponential back-off when the stream drops.
 */
var StellarIngestionService = function () {
    var _classDecorators = [(0, common_1.Injectable)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var StellarIngestionService = _classThis = /** @class */ (function () {
        function StellarIngestionService_1(config, cursorRepo, escrowRepo, parser, eventEmitter, jobQueueService) {
            this.config = config;
            this.cursorRepo = cursorRepo;
            this.escrowRepo = escrowRepo;
            this.parser = parser;
            this.eventEmitter = eventEmitter;
            this.jobQueueService = jobQueueService;
            this.logger = new common_1.Logger(StellarIngestionService.name);
            this.stopStream = null;
            this.stopPreviousStream = null;
            this.destroyed = false;
            this.reconnectTimer = null;
            this.currentBackoffMs = INITIAL_BACKOFF_MS;
            this.currentContractId = null;
            this.previousContractId = null;
        }
        StellarIngestionService_1.prototype.onModuleInit = function () {
            var network = this.config.network;
            var horizonUrl = stellar_config_1.HORIZON_BASE_URLS[network];
            this.server = new stellar_sdk_1.Horizon.Server(horizonUrl);
            this.logger.log("Stellar ingestion initialised (".concat(network, " \u2192 ").concat(horizonUrl, ")"));
        };
        StellarIngestionService_1.prototype.onModuleDestroy = function () {
            this.destroyed = true;
            this.stopCurrentStream();
            this.stopPreviousStreamFn();
            if (this.reconnectTimer) {
                clearTimeout(this.reconnectTimer);
                this.reconnectTimer = null;
            }
            this.logger.log("Stellar ingestion service stopped.");
        };
        /**
         * Start streaming contract events for the given contract ID.
         * Safe to call multiple times; previous stream is closed first.
         */
        StellarIngestionService_1.prototype.startStreaming = function (contractId) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this.currentContractId = contractId;
                            this.stopCurrentStream();
                            this.stopPreviousStreamFn();
                            return [4 /*yield*/, this.openStream(contractId)];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * Start streaming contract events with dual-read support for transition windows.
         * Streams from both current and previous contract IDs until effective ledger is reached.
         */
        StellarIngestionService_1.prototype.startStreamingWithDualRead = function (config) {
            return __awaiter(this, void 0, void 0, function () {
                var _a;
                var _b;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            this.currentContractId = config.contractId;
                            this.previousContractId = (_b = config.previousContractId) !== null && _b !== void 0 ? _b : null;
                            this.stopCurrentStream();
                            this.stopPreviousStreamFn();
                            if (!(config.previousContractId && config.effectiveLedger)) return [3 /*break*/, 2];
                            this.logger.log("Starting dual-read streams: previous=".concat(config.previousContractId, ", current=").concat(config.contractId, ", effective ledger=").concat(config.effectiveLedger));
                            _a = this;
                            return [4 /*yield*/, this.openStreamAsync(config.previousContractId)];
                        case 1:
                            _a.stopPreviousStream = _c.sent();
                            _c.label = 2;
                        case 2: 
                        // Always open current stream
                        return [4 /*yield*/, this.openStream(config.contractId)];
                        case 3:
                            // Always open current stream
                            _c.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        // ---------------------------------------------------------------------------
        // Private stream management
        // ---------------------------------------------------------------------------
        StellarIngestionService_1.prototype.openStream = function (contractId) {
            return __awaiter(this, void 0, void 0, function () {
                var streamId, cursor, eventsBuilder, cursoredBuilder, stop;
                var _this = this;
                var _a, _b;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            streamId = "contract:".concat(contractId);
                            return [4 /*yield*/, this.cursorRepo.getCursor(streamId)];
                        case 1:
                            cursor = _c.sent();
                            this.logger.log(cursor
                                ? "Resuming stream ".concat(streamId, " from cursor ").concat(cursor)
                                : "Starting stream ".concat(streamId, " from \"now\""));
                            eventsBuilder = (_b = (_a = this.server).contractEvents) === null || _b === void 0 ? void 0 : _b.call(_a, contractId);
                            if (!eventsBuilder) {
                                // Fallback: use Horizon's raw SSE endpoint via fetch + EventSource
                                this.logger.warn("server.contractEvents() not available on this SDK version; using raw SSE fallback.");
                                this.stopStream = this.openRawSseStream(contractId, streamId, cursor);
                                return [2 /*return*/];
                            }
                            cursoredBuilder = cursor
                                ? eventsBuilder.cursor(cursor)
                                : eventsBuilder.cursor("now");
                            stop = cursoredBuilder.stream({
                                onmessage: function (record) {
                                    void _this.handleRecord(record, streamId);
                                },
                                onerror: function (err) {
                                    _this.logger.error("Stream error for ".concat(streamId, ": ").concat(String(err)));
                                    _this.stopCurrentStream();
                                    _this.scheduleReconnect(contractId);
                                },
                            });
                            this.stopStream = stop;
                            this.currentBackoffMs = INITIAL_BACKOFF_MS; // reset on successful open
                            return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * Fallback SSE stream using the Horizon REST API directly via stellar-sdk's
         * CallBuilder streaming, watching the /contract_events endpoint.
         */
        StellarIngestionService_1.prototype.openRawSseStream = function (contractId, streamId, cursor) {
            var _this = this;
            var horizonUrl = stellar_config_1.HORIZON_BASE_URLS[this.config.network];
            var url = new URL("".concat(horizonUrl, "/contract_events"));
            url.searchParams.set("contract_id", contractId);
            url.searchParams.set("cursor", cursor !== null && cursor !== void 0 ? cursor : "now");
            url.searchParams.set("limit", "200");
            this.logger.debug("Opening SSE at ".concat(url.toString()));
            var es = new EventSource(url.toString());
            es.onmessage = function (msg) {
                try {
                    var record = JSON.parse(msg.data);
                    void _this.handleRecord(record, streamId);
                }
                catch (err) {
                    _this.logger.warn("Failed to parse SSE message: ".concat(String(err)));
                }
            };
            es.onerror = function (err) {
                _this.logger.error("SSE error for ".concat(streamId, ": ").concat(String(err)));
                es.close();
                _this.scheduleReconnect(contractId);
            };
            return function () { return es.close(); };
        };
        StellarIngestionService_1.prototype.stopCurrentStream = function () {
            if (this.stopStream) {
                try {
                    this.stopStream();
                }
                catch (_a) {
                    // ignore
                }
                this.stopStream = null;
            }
        };
        StellarIngestionService_1.prototype.stopPreviousStreamFn = function () {
            if (this.stopPreviousStream) {
                try {
                    this.stopPreviousStream();
                }
                catch (_a) {
                    // ignore
                }
                this.stopPreviousStream = null;
            }
        };
        StellarIngestionService_1.prototype.openStreamAsync = function (contractId) {
            return __awaiter(this, void 0, void 0, function () {
                var streamId, cursor, eventsBuilder, cursoredBuilder, stop;
                var _this = this;
                var _a, _b;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            streamId = "contract:".concat(contractId);
                            return [4 /*yield*/, this.cursorRepo.getCursor(streamId)];
                        case 1:
                            cursor = _c.sent();
                            this.logger.log(cursor
                                ? "Resuming stream ".concat(streamId, " from cursor ").concat(cursor)
                                : "Starting stream ".concat(streamId, " from \"now\""));
                            eventsBuilder = (_b = (_a = this.server).contractEvents) === null || _b === void 0 ? void 0 : _b.call(_a, contractId);
                            if (!eventsBuilder) {
                                return [2 /*return*/, this.openRawSseStream(contractId, streamId, cursor)];
                            }
                            cursoredBuilder = cursor
                                ? eventsBuilder.cursor(cursor)
                                : eventsBuilder.cursor("now");
                            stop = cursoredBuilder.stream({
                                onmessage: function (record) {
                                    void _this.handleRecord(record, streamId);
                                },
                                onerror: function (err) {
                                    _this.logger.error("Stream error for ".concat(streamId, ": ").concat(String(err)));
                                    _this.stopCurrentStream();
                                    _this.scheduleReconnect(contractId);
                                },
                            });
                            this.currentBackoffMs = INITIAL_BACKOFF_MS;
                            return [2 /*return*/, stop];
                    }
                });
            });
        };
        StellarIngestionService_1.prototype.scheduleReconnect = function (contractId) {
            return __awaiter(this, void 0, void 0, function () {
                var streamId, lastCursor, payload, jobId, err_1;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (this.destroyed)
                                return [2 /*return*/];
                            streamId = "contract:".concat(contractId);
                            return [4 /*yield*/, this.cursorRepo.getCursor(streamId)];
                        case 1:
                            lastCursor = _a.sent();
                            if (!lastCursor) {
                                this.logger.warn("No cursor found for contract ".concat(contractId, " - cannot enqueue reconnect job"));
                                // Fall back to in-process reconnection
                                this.logger.warn("Reconnecting stream for contract ".concat(contractId, " in ").concat(this.currentBackoffMs, "ms (in-process fallback)"));
                                this.reconnectTimer = setTimeout(function () {
                                    if (!_this.destroyed) {
                                        void _this.openStream(contractId);
                                    }
                                }, this.currentBackoffMs);
                                // Exponential back-off with cap
                                this.currentBackoffMs = Math.min(this.currentBackoffMs * BACKOFF_MULTIPLIER, MAX_BACKOFF_MS);
                                return [2 /*return*/];
                            }
                            _a.label = 2;
                        case 2:
                            _a.trys.push([2, 4, , 5]);
                            payload = {
                                contractId: contractId,
                                lastCursor: lastCursor,
                            };
                            return [4 /*yield*/, this.jobQueueService.enqueue(types_1.JobType.STELLAR_RECONNECT, payload)];
                        case 3:
                            jobId = _a.sent();
                            this.logger.log("SSE stream disconnected - reconnect job enqueued: ".concat(jobId, " ") +
                                "(contractId: ".concat(contractId, ", lastCursor: ").concat(lastCursor, ")"));
                            // Reset backoff since we successfully enqueued the job
                            this.currentBackoffMs = INITIAL_BACKOFF_MS;
                            return [3 /*break*/, 5];
                        case 4:
                            err_1 = _a.sent();
                            this.logger.error("Failed to enqueue reconnect job for contract ".concat(contractId, ": ").concat(err_1.message), err_1.stack);
                            // Fall back to in-process reconnection
                            this.logger.warn("Reconnecting stream for contract ".concat(contractId, " in ").concat(this.currentBackoffMs, "ms (in-process fallback)"));
                            this.reconnectTimer = setTimeout(function () {
                                if (!_this.destroyed) {
                                    void _this.openStream(contractId);
                                }
                            }, this.currentBackoffMs);
                            // Exponential back-off with cap
                            this.currentBackoffMs = Math.min(this.currentBackoffMs * BACKOFF_MULTIPLIER, MAX_BACKOFF_MS);
                            return [3 /*break*/, 5];
                        case 5: return [2 /*return*/];
                    }
                });
            });
        };
        // ---------------------------------------------------------------------------
        // Event processing
        // ---------------------------------------------------------------------------
        StellarIngestionService_1.prototype.handleRecord = function (raw, streamId) {
            return __awaiter(this, void 0, void 0, function () {
                var event;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            event = this.parser.parse(raw);
                            if (!!event) return [3 /*break*/, 2];
                            // Unrecognised or non- RustAcademy event; still advance cursor.
                            return [4 /*yield*/, this.safeUpdateCursor(streamId, raw.paging_token, raw.ledger)];
                        case 1:
                            // Unrecognised or non- RustAcademy event; still advance cursor.
                            _a.sent();
                            return [2 /*return*/];
                        case 2:
                            this.logger.debug("Processing ".concat(event.eventType, " paging_token=").concat(event.pagingToken));
                            return [4 /*yield*/, this.persistEvent(event)];
                        case 3:
                            _a.sent();
                            return [4 /*yield*/, this.safeUpdateCursor(streamId, raw.paging_token, raw.ledger)];
                        case 4:
                            _a.sent();
                            // Emit for other services / notification layer
                            this.eventEmitter.emit("stellar.".concat(event.eventType), event);
                            return [2 /*return*/];
                    }
                });
            });
        };
        StellarIngestionService_1.prototype.persistEvent = function (event) {
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
                            // Other events are emitted but not stored in the DB yet.
                            this.logger.debug("Event ".concat(event.eventType, " emitted but not persisted."));
                            _b.label = 4;
                        case 4: return [2 /*return*/];
                    }
                });
            });
        };
        StellarIngestionService_1.prototype.safeUpdateCursor = function (streamId, pagingToken, ledger) {
            return __awaiter(this, void 0, void 0, function () {
                var err_2;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, this.cursorRepo.saveCursor(streamId, pagingToken, ledger)];
                        case 1:
                            _a.sent();
                            return [3 /*break*/, 3];
                        case 2:
                            err_2 = _a.sent();
                            // Cursor update failure is non-fatal; we log and continue.
                            // The worst case is re-processing a handful of events on the next restart
                            // (handled by idempotency constraints).
                            this.logger.error("Failed to update cursor: ".concat(String(err_2)));
                            return [3 /*break*/, 3];
                        case 3: return [2 /*return*/];
                    }
                });
            });
        };
        return StellarIngestionService_1;
    }());
    __setFunctionName(_classThis, "StellarIngestionService");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        StellarIngestionService = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return StellarIngestionService = _classThis;
}();
exports.StellarIngestionService = StellarIngestionService;
