"use strict";
/**
 * Job Queue System - Job Queue Service
 *
 * Main public API for the unified job queue system.
 * Provides methods for enqueuing, cancelling, and querying jobs.
 *
 * **Validates: Requirements 1.5, 2.1, 2.2, 2.3, 2.4, 2.5, 2.6, 6.1, 6.2, 15.2, 15.3**
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
exports.JobQueueService = exports.PayloadValidationError = exports.UnregisteredJobTypeError = void 0;
var common_1 = require("@nestjs/common");
var types_1 = require("./types");
/**
 * Error thrown when attempting to enqueue a job with an unregistered type
 */
var UnregisteredJobTypeError = /** @class */ (function (_super) {
    __extends(UnregisteredJobTypeError, _super);
    function UnregisteredJobTypeError(type) {
        var _this = _super.call(this, "Job type '".concat(type, "' is not registered")) || this;
        _this.name = 'UnregisteredJobTypeError';
        return _this;
    }
    return UnregisteredJobTypeError;
}(Error));
exports.UnregisteredJobTypeError = UnregisteredJobTypeError;
/**
 * Error thrown when payload validation fails
 */
var PayloadValidationError = /** @class */ (function (_super) {
    __extends(PayloadValidationError, _super);
    function PayloadValidationError(message) {
        var _this = _super.call(this, "Payload validation failed: ".concat(message)) || this;
        _this.name = 'PayloadValidationError';
        return _this;
    }
    return PayloadValidationError;
}(Error));
exports.PayloadValidationError = PayloadValidationError;
/**
 * Main service for job queue operations
 *
 * This service provides the public API for:
 * - Enqueuing jobs (immediate or delayed)
 * - Cancelling jobs
 * - Querying job status and history
 *
 * It uses:
 * - JobRepository for persistence
 * - JobRegistry for validation and handler lookup
 * - CancellationStore for cancellation management
 */
var JobQueueService = function () {
    var _classDecorators = [(0, common_1.Injectable)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var JobQueueService = _classThis = /** @class */ (function () {
        function JobQueueService_1(repository, registry, cancellationStore, metrics) {
            this.repository = repository;
            this.registry = registry;
            this.cancellationStore = cancellationStore;
            this.metrics = metrics;
            this.logger = new common_1.Logger(JobQueueService.name);
        }
        /**
         * Enqueue a job for immediate execution
         *
         * Creates a new job with the current timestamp as scheduledAt.
         * The job will be picked up by the JobExecutor on the next poll.
         *
         * @param type - Job type (must be registered)
         * @param payload - Job-specific payload data
         * @returns The created job ID
         * @throws UnregisteredJobTypeError if job type is not registered
         * @throws PayloadValidationError if payload validation fails
         *
         * **Validates: Requirements 2.1, 2.3, 2.4, 1.5, 15.2, 15.3**
         */
        JobQueueService_1.prototype.enqueue = function (type, payload) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.enqueueDelayed(type, payload, new Date())];
                });
            });
        };
        /**
         * Enqueue a job for delayed execution
         *
         * Creates a new job with a future scheduledAt timestamp.
         * The job will be picked up by the JobExecutor when scheduledAt is reached.
         *
         * @param type - Job type (must be registered)
         * @param payload - Job-specific payload data
         * @param scheduledAt - When the job should execute
         * @returns The created job ID
         * @throws UnregisteredJobTypeError if job type is not registered
         * @throws PayloadValidationError if payload validation fails
         *
         * **Validates: Requirements 2.2, 2.3, 2.4, 2.5, 2.6, 1.5, 15.2, 15.3**
         */
        JobQueueService_1.prototype.enqueueDelayed = function (type, payload, scheduledAt) {
            return __awaiter(this, void 0, void 0, function () {
                var handler, error_1, policy, job;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            // Requirement 1.5: Reject enqueue for unregistered job types
                            if (!this.registry.isRegistered(type)) {
                                this.logger.error("Attempted to enqueue unregistered job type: ".concat(type));
                                throw new UnregisteredJobTypeError(type);
                            }
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 3, , 4]);
                            handler = this.registry.getHandler(type);
                            return [4 /*yield*/, handler.validate(payload)];
                        case 2:
                            _a.sent();
                            return [3 /*break*/, 4];
                        case 3:
                            error_1 = _a.sent();
                            this.logger.error("Payload validation failed for job type ".concat(type, ": ").concat(error_1.message), error_1.stack);
                            throw new PayloadValidationError(error_1.message);
                        case 4:
                            policy = this.registry.getPolicy(type);
                            return [4 /*yield*/, this.repository.createJob(type, payload, policy.maxAttempts, scheduledAt)];
                        case 5:
                            job = _a.sent();
                            // Increment jobs_enqueued_total metric
                            this.metrics.incrementJobsEnqueued(type);
                            // Update jobs_pending_count gauge
                            this.metrics.updateJobsPendingCount(type, 1);
                            // Structured logging: job enqueued at INFO level
                            this.logger.log({
                                message: 'Job enqueued',
                                jobId: job.id,
                                type: type,
                                scheduledAt: scheduledAt.toISOString(),
                            });
                            // Requirement 2.5: Return unique job identifier
                            return [2 /*return*/, job.id];
                    }
                });
            });
        };
        /**
         * Request cancellation of a job
         *
         * For pending jobs: Updates status to 'cancelled' immediately
         * For running jobs: Sets a cancellation token that the handler can check
         * For completed/failed/cancelled jobs: No-op (already terminal state)
         *
         * @param jobId - The job ID to cancel
         * @throws Error if job not found
         *
         * **Validates: Requirements 6.1, 6.2, 6.3**
         */
        JobQueueService_1.prototype.cancel = function (jobId) {
            return __awaiter(this, void 0, void 0, function () {
                var job;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.repository.findById(jobId)];
                        case 1:
                            job = _a.sent();
                            if (!job) {
                                throw new Error("Job not found: ".concat(jobId));
                            }
                            if (!(job.status === types_1.JobStatus.PENDING)) return [3 /*break*/, 3];
                            return [4 /*yield*/, this.repository.updateJobStatus(jobId, types_1.JobStatus.CANCELLED, {
                                    completedAt: new Date(),
                                })];
                        case 2:
                            _a.sent();
                            // Increment jobs_cancelled_total metric
                            this.metrics.incrementJobsCancelled(job.type);
                            // Update gauge metrics
                            this.metrics.updateJobsPendingCount(job.type, -1);
                            // Structured logging: job cancelled at INFO level
                            this.logger.log({
                                message: 'Job cancelled',
                                jobId: jobId,
                                type: job.type,
                            });
                            return [2 /*return*/];
                        case 3:
                            // Requirement 6.3: Set cancellation token for running jobs
                            if (job.status === types_1.JobStatus.RUNNING) {
                                this.cancellationStore.requestCancellation(jobId);
                                this.logger.log("Cancellation requested for running job: ".concat(jobId));
                                return [2 /*return*/];
                            }
                            // Job is already in a terminal state (completed, failed, cancelled)
                            this.logger.debug("Cannot cancel job ".concat(jobId, " - already in terminal state: ").concat(job.status));
                            return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * Get detailed information for a specific job
         *
         * @param jobId - The job ID
         * @returns The job, or null if not found
         *
         * **Validates: Requirement 5.2** (via admin controller)
         */
        JobQueueService_1.prototype.getJob = function (jobId) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.repository.findById(jobId)];
                });
            });
        };
        /**
         * List jobs with optional filters
         *
         * Supports filtering by:
         * - Job type
         * - Job status
         * - Date range (createdAfter, createdBefore)
         * - Pagination (limit, offset)
         *
         * @param filters - Query filters
         * @returns Paginated job results
         *
         * **Validates: Requirements 5.1, 5.5** (via admin controller)
         */
        JobQueueService_1.prototype.listJobs = function () {
            return __awaiter(this, arguments, void 0, function (filters) {
                if (filters === void 0) { filters = {}; }
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.repository.listJobs(filters)];
                });
            });
        };
        return JobQueueService_1;
    }());
    __setFunctionName(_classThis, "JobQueueService");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        JobQueueService = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return JobQueueService = _classThis;
}();
exports.JobQueueService = JobQueueService;
