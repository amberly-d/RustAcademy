"use strict";
/**
 * Job Queue System - Reconciliation Handler
 *
 * Implements the JobHandler interface for reconciliation jobs.
 * Compares internal state with Horizon API and persists reconciliation reports.
 *
 * Requirements: 10.3, 10.5, 15.4, 15.5
 */
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
exports.ReconciliationHandler = void 0;
var common_1 = require("@nestjs/common");
var webhook_delivery_handler_1 = require("./webhook-delivery.handler");
/**
 * Reconciliation Handler
 *
 * Executes reconciliation runs to compare internal database state with
 * the Stellar blockchain via Horizon API. Persists reconciliation reports
 * with any discrepancies found.
 *
 * This handler is designed to run with maxAttempts=1 (no retries) since
 * reconciliation is idempotent and will be retried on the next cron tick.
 */
var ReconciliationHandler = function () {
    var _classDecorators = [(0, common_1.Injectable)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var ReconciliationHandler = _classThis = /** @class */ (function () {
        function ReconciliationHandler_1(reconciliationService) {
            this.reconciliationService = reconciliationService;
            this.logger = new common_1.Logger(ReconciliationHandler.name);
        }
        /**
         * Execute reconciliation run
         *
         * Delegates to ReconciliationService to perform the actual reconciliation
         * logic. The service compares internal state with Horizon API and returns
         * a detailed report with any discrepancies.
         *
         * @param job - The reconciliation job
         * @param cancellationToken - Token to check for cancellation (not used for reconciliation)
         * @throws Error on transient failures (Horizon unavailable, network errors)
         * @throws PermanentJobError on validation failures
         *
         * **Validates: Requirements 10.3, 10.5**
         */
        ReconciliationHandler_1.prototype.execute = function (job, 
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        _cancellationToken) {
            return __awaiter(this, void 0, void 0, function () {
                var _a, batchSize, startLedger, endLedger, report, totalIrreconcilable, error_1;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _a = job.payload, batchSize = _a.batchSize, startLedger = _a.startLedger, endLedger = _a.endLedger;
                            this.logger.log("Starting reconciliation run (jobId: ".concat(job.id, ", batchSize: ").concat(batchSize, ", ") +
                                "startLedger: ".concat(startLedger !== null && startLedger !== void 0 ? startLedger : 'none', ", endLedger: ").concat(endLedger !== null && endLedger !== void 0 ? endLedger : 'none', ")"));
                            _b.label = 1;
                        case 1:
                            _b.trys.push([1, 3, , 4]);
                            return [4 /*yield*/, this.reconciliationService.runReconciliation(batchSize)];
                        case 2:
                            report = _b.sent();
                            // Log summary of reconciliation results
                            this.logger.log("Reconciliation completed (jobId: ".concat(job.id, ", runId: ").concat(report.runId, ", ") +
                                "duration: ".concat(report.durationMs, "ms, ") +
                                "escrows: ".concat(report.escrows.processed, " processed, ").concat(report.escrows.irreconcilable, " irreconcilable, ") +
                                "payments: ".concat(report.payments.processed, " processed, ").concat(report.payments.irreconcilable, " irreconcilable)"));
                            totalIrreconcilable = report.escrows.irreconcilable + report.payments.irreconcilable;
                            if (totalIrreconcilable > 0) {
                                this.logger.warn("Reconciliation found ".concat(totalIrreconcilable, " irreconcilable record(s) - ") +
                                    "manual review required (jobId: ".concat(job.id, ", runId: ").concat(report.runId, ")"));
                            }
                            return [3 /*break*/, 4];
                        case 3:
                            error_1 = _b.sent();
                            // Log error with context
                            this.logger.error("Reconciliation failed (jobId: ".concat(job.id, "): ").concat(error_1.message), error_1.stack);
                            // Re-throw to trigger job failure handling
                            // Most reconciliation errors are transient (Horizon unavailable, network issues)
                            throw error_1;
                        case 4: return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * Validate reconciliation payload
         *
         * Checks that required fields are present:
         * - batchSize: Number of records to process per batch (must be positive)
         *
         * Optional fields:
         * - startLedger: Starting ledger sequence (if provided, must be positive)
         * - endLedger: Ending ledger sequence (if provided, must be >= startLedger)
         *
         * @param payload - The reconciliation payload
         * @throws PermanentJobError if validation fails
         *
         * **Validates: Requirements 10.3, 15.4, 15.5**
         */
        ReconciliationHandler_1.prototype.validate = function (payload) {
            return __awaiter(this, void 0, void 0, function () {
                var errors;
                return __generator(this, function (_a) {
                    errors = [];
                    // Validate batchSize
                    if (typeof payload.batchSize !== 'number') {
                        errors.push('batchSize is required and must be a number');
                    }
                    else if (payload.batchSize <= 0) {
                        errors.push('batchSize must be greater than 0');
                    }
                    else if (!Number.isInteger(payload.batchSize)) {
                        errors.push('batchSize must be an integer');
                    }
                    // Validate startLedger (optional)
                    if (payload.startLedger !== undefined) {
                        if (typeof payload.startLedger !== 'number') {
                            errors.push('startLedger must be a number');
                        }
                        else if (payload.startLedger <= 0) {
                            errors.push('startLedger must be greater than 0');
                        }
                        else if (!Number.isInteger(payload.startLedger)) {
                            errors.push('startLedger must be an integer');
                        }
                    }
                    // Validate endLedger (optional)
                    if (payload.endLedger !== undefined) {
                        if (typeof payload.endLedger !== 'number') {
                            errors.push('endLedger must be a number');
                        }
                        else if (payload.endLedger <= 0) {
                            errors.push('endLedger must be greater than 0');
                        }
                        else if (!Number.isInteger(payload.endLedger)) {
                            errors.push('endLedger must be an integer');
                        }
                    }
                    // Validate ledger range consistency
                    if (payload.startLedger !== undefined &&
                        payload.endLedger !== undefined &&
                        payload.endLedger < payload.startLedger) {
                        errors.push('endLedger must be greater than or equal to startLedger');
                    }
                    if (errors.length > 0) {
                        throw new webhook_delivery_handler_1.PermanentJobError("Validation failed: ".concat(errors.join(', ')));
                    }
                    return [2 /*return*/];
                });
            });
        };
        /**
         * Handle reconciliation failure
         *
         * Logs reconciliation failure for monitoring and alerting.
         * Since reconciliation runs on a cron schedule, failures will be retried
         * on the next tick. No additional cleanup is needed.
         *
         * @param job - The failed job
         * @param error - The error that caused the failure
         *
         * **Validates: Requirements 10.5**
         */
        ReconciliationHandler_1.prototype.onFailure = function (job, error) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    this.logger.error("Reconciliation permanently failed (jobId: ".concat(job.id, ", ") +
                        "batchSize: ".concat(job.payload.batchSize, "): ").concat(error.message), error.stack);
                    return [2 /*return*/];
                });
            });
        };
        return ReconciliationHandler_1;
    }());
    __setFunctionName(_classThis, "ReconciliationHandler");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        ReconciliationHandler = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return ReconciliationHandler = _classThis;
}();
exports.ReconciliationHandler = ReconciliationHandler;
