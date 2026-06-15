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
exports.ReconciliationController = void 0;
var common_1 = require("@nestjs/common");
var swagger_1 = require("@nestjs/swagger");
var network_safety_guard_1 = require("../feature-flags/network-safety.guard");
var requires_flag_decorator_1 = require("../feature-flags/requires-flag.decorator");
/**
 * Admin endpoints for the reconciliation worker and auto-match engine.
 * These should be protected by an API-key guard in production.
 */
var ReconciliationController = function () {
    var _classDecorators = [(0, swagger_1.ApiTags)("reconciliation"), (0, common_1.Controller)("reconciliation")];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _instanceExtraInitializers = [];
    var _getStatus_decorators;
    var _trigger_decorators;
    var _startBackfill_decorators;
    var _getBackfillStatus_decorators;
    var _getAutoMatchStatus_decorators;
    var _triggerAutoMatch_decorators;
    var _processTransaction_decorators;
    var _listUnmatched_decorators;
    var _getUnmatched_decorators;
    var _resolveUnmatched_decorators;
    var _dismissUnmatched_decorators;
    var ReconciliationController = _classThis = /** @class */ (function () {
        function ReconciliationController_1(worker, backfill, autoMatch, unmatchedQueue) {
            this.worker = (__runInitializers(this, _instanceExtraInitializers), worker);
            this.backfill = backfill;
            this.autoMatch = autoMatch;
            this.unmatchedQueue = unmatchedQueue;
        }
        // ─── Existing reconciliation endpoints ──────────────────────────────────────
        ReconciliationController_1.prototype.getStatus = function () {
            return {
                running: this.worker.running,
                lastReport: this.worker.getLastReport(),
            };
        };
        ReconciliationController_1.prototype.trigger = function () {
            return __awaiter(this, void 0, void 0, function () {
                var err_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, this.worker.triggerManually()];
                        case 1: return [2 /*return*/, _a.sent()];
                        case 2:
                            err_1 = _a.sent();
                            if (err_1.message === "Reconciliation is already running") {
                                throw new common_1.ConflictException("A reconciliation run is already in progress");
                            }
                            throw err_1;
                        case 3: return [2 /*return*/];
                    }
                });
            });
        };
        ReconciliationController_1.prototype.startBackfill = function (config) {
            return __awaiter(this, void 0, void 0, function () {
                var err_2;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, this.backfill.startBackfill(config)];
                        case 1: return [2 /*return*/, _a.sent()];
                        case 2:
                            err_2 = _a.sent();
                            if (err_2.message === "A backfill job is already running") {
                                throw new common_1.ConflictException("A backfill job is already running");
                            }
                            throw err_2;
                        case 3: return [2 /*return*/];
                    }
                });
            });
        };
        ReconciliationController_1.prototype.getBackfillStatus = function () {
            return this.backfill.getBackfillProgress();
        };
        // ─── Auto-match endpoints ────────────────────────────────────────────────────
        ReconciliationController_1.prototype.getAutoMatchStatus = function () {
            return { running: this.autoMatch.running };
        };
        ReconciliationController_1.prototype.triggerAutoMatch = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    if (this.autoMatch.running) {
                        throw new common_1.ConflictException("An auto-match cycle is already in progress");
                    }
                    return [2 /*return*/, this.autoMatch.runAutoMatchCycle()];
                });
            });
        };
        /**
         * Process a single transaction through the matching algorithm on demand.
         * Useful for replaying a specific transaction or testing the scoring logic.
         */
        ReconciliationController_1.prototype.processTransaction = function (tx) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.autoMatch.processTransaction(tx)];
                });
            });
        };
        // ─── Unmatched transactions queue ────────────────────────────────────────────
        ReconciliationController_1.prototype.listUnmatched = function (limit, offset) {
            return __awaiter(this, void 0, void 0, function () {
                var parsedLimit, parsedOffset;
                return __generator(this, function (_a) {
                    parsedLimit = Math.min(100, Math.max(1, parseInt(limit !== null && limit !== void 0 ? limit : "20", 10) || 20));
                    parsedOffset = Math.max(0, parseInt(offset !== null && offset !== void 0 ? offset : "0", 10) || 0);
                    return [2 /*return*/, this.unmatchedQueue.listPending(parsedLimit, parsedOffset)];
                });
            });
        };
        ReconciliationController_1.prototype.getUnmatched = function (id) {
            return __awaiter(this, void 0, void 0, function () {
                var record;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.unmatchedQueue.findById(id)];
                        case 1:
                            record = _a.sent();
                            if (!record) {
                                throw new common_1.NotFoundException("Unmatched transaction ".concat(id, " not found"));
                            }
                            return [2 /*return*/, record];
                    }
                });
            });
        };
        /**
         * Resolve an unmatched transaction after manual operator review.
         * The body should include the `resolvedBy` public key and an optional note.
         */
        ReconciliationController_1.prototype.resolveUnmatched = function (id, body) {
            return __awaiter(this, void 0, void 0, function () {
                var record;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.unmatchedQueue.findById(id)];
                        case 1:
                            record = _a.sent();
                            if (!record) {
                                throw new common_1.NotFoundException("Unmatched transaction ".concat(id, " not found"));
                            }
                            return [4 /*yield*/, this.unmatchedQueue.resolve(id, body.resolvedBy, body.note)];
                        case 2:
                            _a.sent();
                            return [2 /*return*/, { id: id, status: "resolved" }];
                    }
                });
            });
        };
        /**
         * Dismiss an unmatched transaction — the operator has determined it is not
         * related to any  RustAcademy payment link and requires no further action.
         */
        ReconciliationController_1.prototype.dismissUnmatched = function (id, body) {
            return __awaiter(this, void 0, void 0, function () {
                var record;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.unmatchedQueue.findById(id)];
                        case 1:
                            record = _a.sent();
                            if (!record) {
                                throw new common_1.NotFoundException("Unmatched transaction ".concat(id, " not found"));
                            }
                            return [4 /*yield*/, this.unmatchedQueue.dismiss(id, body.resolvedBy, body.note)];
                        case 2:
                            _a.sent();
                            return [2 /*return*/, { id: id, status: "dismissed" }];
                    }
                });
            });
        };
        return ReconciliationController_1;
    }());
    __setFunctionName(_classThis, "ReconciliationController");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _getStatus_decorators = [(0, common_1.Get)("status"), (0, swagger_1.ApiOperation)({
                summary: "Return the status and last report of the reconciliation worker",
            }), (0, swagger_1.ApiResponse)({ status: 200, description: "Current worker status" })];
        _trigger_decorators = [(0, common_1.Post)("trigger"), (0, common_1.HttpCode)(common_1.HttpStatus.OK), (0, swagger_1.ApiOperation)({
                summary: "Manually trigger a reconciliation run (admin only)",
            }), (0, swagger_1.ApiResponse)({ status: 200, description: "Reconciliation run completed" }), (0, swagger_1.ApiResponse)({ status: 409, description: "A run is already in progress" })];
        _startBackfill_decorators = [(0, common_1.Post)("backfill"), (0, common_1.HttpCode)(common_1.HttpStatus.OK), (0, common_1.UseGuards)(network_safety_guard_1.NetworkSafetyGuard), (0, requires_flag_decorator_1.RequiresFlag)("mainnet.contract_writes"), (0, swagger_1.ApiOperation)({
                summary: "Trigger a backfill job for a ledger range (admin only)",
            }), (0, swagger_1.ApiResponse)({ status: 200, description: "Backfill job completed" }), (0, swagger_1.ApiResponse)({
                status: 409,
                description: "A backfill job is already running",
            }), (0, swagger_1.ApiResponse)({ status: 503, description: "Blocked by mainnet safety gate" })];
        _getBackfillStatus_decorators = [(0, common_1.Get)("backfill/status"), (0, swagger_1.ApiOperation)({ summary: "Get the current backfill job progress" }), (0, swagger_1.ApiResponse)({ status: 200, description: "Backfill progress" })];
        _getAutoMatchStatus_decorators = [(0, common_1.Get)("auto-match/status"), (0, swagger_1.ApiOperation)({
                summary: "Return the current status of the auto-match engine",
            }), (0, swagger_1.ApiResponse)({ status: 200, description: "Auto-match engine status" })];
        _triggerAutoMatch_decorators = [(0, common_1.Post)("auto-match/trigger"), (0, common_1.HttpCode)(common_1.HttpStatus.OK), (0, swagger_1.ApiOperation)({
                summary: "Manually trigger an auto-match cycle (admin only)",
            }), (0, swagger_1.ApiResponse)({ status: 200, description: "Cycle summary counters" }), (0, swagger_1.ApiResponse)({ status: 409, description: "A cycle is already running" })];
        _processTransaction_decorators = [(0, common_1.Post)("auto-match/process"), (0, common_1.HttpCode)(common_1.HttpStatus.OK), (0, swagger_1.ApiOperation)({
                summary: "Score and process a single transaction on demand (admin only)",
            }), (0, swagger_1.ApiResponse)({
                status: 200,
                description: "Match result for the supplied transaction",
            })];
        _listUnmatched_decorators = [(0, common_1.Get)("unmatched"), (0, swagger_1.ApiOperation)({
                summary: "List pending unmatched transactions awaiting manual review",
            }), (0, swagger_1.ApiQuery)({
                name: "limit",
                required: false,
                type: Number,
                description: "Max rows (1–100, default 20)",
            }), (0, swagger_1.ApiQuery)({
                name: "offset",
                required: false,
                type: Number,
                description: "Zero-based row offset (default 0)",
            }), (0, swagger_1.ApiResponse)({
                status: 200,
                description: "Paginated list of unmatched transactions",
            })];
        _getUnmatched_decorators = [(0, common_1.Get)("unmatched/:id"), (0, swagger_1.ApiOperation)({ summary: "Get a single unmatched transaction by ID" }), (0, swagger_1.ApiResponse)({ status: 200, description: "Unmatched transaction details" }), (0, swagger_1.ApiResponse)({ status: 404, description: "Not found" })];
        _resolveUnmatched_decorators = [(0, common_1.Post)("unmatched/:id/resolve"), (0, common_1.HttpCode)(common_1.HttpStatus.OK), (0, swagger_1.ApiOperation)({
                summary: "Manually resolve an unmatched transaction (operator only)",
            }), (0, swagger_1.ApiResponse)({ status: 200, description: "Transaction marked as resolved" }), (0, swagger_1.ApiResponse)({ status: 404, description: "Not found" })];
        _dismissUnmatched_decorators = [(0, common_1.Delete)("unmatched/:id"), (0, common_1.HttpCode)(common_1.HttpStatus.OK), (0, swagger_1.ApiOperation)({ summary: "Dismiss an unmatched transaction (operator only)" }), (0, swagger_1.ApiResponse)({ status: 200, description: "Transaction dismissed" }), (0, swagger_1.ApiResponse)({ status: 404, description: "Not found" })];
        __esDecorate(_classThis, null, _getStatus_decorators, { kind: "method", name: "getStatus", static: false, private: false, access: { has: function (obj) { return "getStatus" in obj; }, get: function (obj) { return obj.getStatus; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _trigger_decorators, { kind: "method", name: "trigger", static: false, private: false, access: { has: function (obj) { return "trigger" in obj; }, get: function (obj) { return obj.trigger; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _startBackfill_decorators, { kind: "method", name: "startBackfill", static: false, private: false, access: { has: function (obj) { return "startBackfill" in obj; }, get: function (obj) { return obj.startBackfill; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _getBackfillStatus_decorators, { kind: "method", name: "getBackfillStatus", static: false, private: false, access: { has: function (obj) { return "getBackfillStatus" in obj; }, get: function (obj) { return obj.getBackfillStatus; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _getAutoMatchStatus_decorators, { kind: "method", name: "getAutoMatchStatus", static: false, private: false, access: { has: function (obj) { return "getAutoMatchStatus" in obj; }, get: function (obj) { return obj.getAutoMatchStatus; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _triggerAutoMatch_decorators, { kind: "method", name: "triggerAutoMatch", static: false, private: false, access: { has: function (obj) { return "triggerAutoMatch" in obj; }, get: function (obj) { return obj.triggerAutoMatch; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _processTransaction_decorators, { kind: "method", name: "processTransaction", static: false, private: false, access: { has: function (obj) { return "processTransaction" in obj; }, get: function (obj) { return obj.processTransaction; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _listUnmatched_decorators, { kind: "method", name: "listUnmatched", static: false, private: false, access: { has: function (obj) { return "listUnmatched" in obj; }, get: function (obj) { return obj.listUnmatched; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _getUnmatched_decorators, { kind: "method", name: "getUnmatched", static: false, private: false, access: { has: function (obj) { return "getUnmatched" in obj; }, get: function (obj) { return obj.getUnmatched; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _resolveUnmatched_decorators, { kind: "method", name: "resolveUnmatched", static: false, private: false, access: { has: function (obj) { return "resolveUnmatched" in obj; }, get: function (obj) { return obj.resolveUnmatched; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _dismissUnmatched_decorators, { kind: "method", name: "dismissUnmatched", static: false, private: false, access: { has: function (obj) { return "dismissUnmatched" in obj; }, get: function (obj) { return obj.dismissUnmatched; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        ReconciliationController = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return ReconciliationController = _classThis;
}();
exports.ReconciliationController = ReconciliationController;
