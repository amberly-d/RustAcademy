"use strict";
/**
 * Job Queue System - Job Executor Service
 *
 * Responsible for polling the database for due jobs and dispatching them to their handlers.
 * Uses @nestjs/schedule for cron-based polling at 10-second intervals.
 *
 * **Validates: Requirements 4.6, 12.4**
 */
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
exports.JobExecutor = void 0;
var common_1 = require("@nestjs/common");
var schedule_1 = require("@nestjs/schedule");
var types_1 = require("./types");
/**
 * Job Executor Service
 *
 * This service is responsible for:
 * - Polling the database every 10 seconds for due jobs
 * - Querying jobs where status=pending AND scheduled_at <= NOW AND visibility_timeout expired
 * - Processing up to 100 jobs per poll
 *
 * Future tasks (3.2-3.5) will implement:
 * - Job locking with visibility timeout
 * - Job execution flow (handler invocation)
 * - Retry scheduling
 * - Stale job recovery on startup
 */
var JobExecutor = function () {
    var _classDecorators = [(0, common_1.Injectable)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _instanceExtraInitializers = [];
    var _processDueJobs_decorators;
    var JobExecutor = _classThis = /** @class */ (function () {
        function JobExecutor_1(repository, registry, cancellationStore, metrics) {
            this.repository = (__runInitializers(this, _instanceExtraInitializers), repository);
            this.registry = registry;
            this.cancellationStore = cancellationStore;
            this.metrics = metrics;
            this.logger = new common_1.Logger(JobExecutor.name);
            this.isProcessing = false;
        }
        /**
         * Initialize the executor on module startup
         *
         * Calls resetStaleJobs() to recover from application crashes or restarts.
         * This resets all jobs with status 'running' to 'pending' so they can be retried.
         *
         * **Validates: Requirements 12.2, 12.3**
         */
        JobExecutor_1.prototype.onModuleInit = function () {
            return __awaiter(this, void 0, void 0, function () {
                var resetCount, error_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this.logger.log('JobExecutor initialized');
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 3, , 4]);
                            return [4 /*yield*/, this.repository.resetStaleJobs()];
                        case 2:
                            resetCount = _a.sent();
                            if (resetCount > 0) {
                                this.logger.warn("Reset ".concat(resetCount, " stale jobs on startup"));
                            }
                            else {
                                this.logger.log('No stale jobs found on startup');
                            }
                            return [3 /*break*/, 4];
                        case 3:
                            error_1 = _a.sent();
                            this.logger.error("Failed to reset stale jobs on startup: ".concat(error_1.message), error_1.stack);
                            return [3 /*break*/, 4];
                        case 4: return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * Process due jobs on a 10-second cron schedule
         *
         * Queries for jobs where:
         * - status = 'pending'
         * - scheduled_at <= NOW
         * - visibility_timeout is null or expired
         *
         * Processes up to 100 jobs per poll to prevent overwhelming the system.
         *
         * **Validates: Requirements 4.6, 12.4**
         */
        JobExecutor_1.prototype.processDueJobs = function () {
            return __awaiter(this, void 0, void 0, function () {
                var jobs, _i, jobs_1, job, error_2, error_3;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            // Prevent concurrent execution of the same cron job
                            if (this.isProcessing) {
                                this.logger.debug('Skipping poll - previous execution still in progress');
                                return [2 /*return*/];
                            }
                            this.isProcessing = true;
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 9, 10, 11]);
                            return [4 /*yield*/, this.repository.findDueJobs(100)];
                        case 2:
                            jobs = _a.sent();
                            if (jobs.length === 0) {
                                this.logger.debug('No due jobs found');
                                return [2 /*return*/];
                            }
                            this.logger.log("Found ".concat(jobs.length, " due jobs to process"));
                            _i = 0, jobs_1 = jobs;
                            _a.label = 3;
                        case 3:
                            if (!(_i < jobs_1.length)) return [3 /*break*/, 8];
                            job = jobs_1[_i];
                            _a.label = 4;
                        case 4:
                            _a.trys.push([4, 6, , 7]);
                            return [4 /*yield*/, this.executeJob(job)];
                        case 5:
                            _a.sent();
                            return [3 /*break*/, 7];
                        case 6:
                            error_2 = _a.sent();
                            this.logger.error("Error executing job ".concat(job.id, ": ").concat(error_2.message), error_2.stack);
                            return [3 /*break*/, 7];
                        case 7:
                            _i++;
                            return [3 /*break*/, 3];
                        case 8: return [3 /*break*/, 11];
                        case 9:
                            error_3 = _a.sent();
                            this.logger.error("Error processing due jobs: ".concat(error_3.message), error_3.stack);
                            return [3 /*break*/, 11];
                        case 10:
                            this.isProcessing = false;
                            return [7 /*endfinally*/];
                        case 11: return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * Execute a single job
         *
         * This method implements the complete job execution flow:
         * 1. Check if job has expired visibility timeout (treat as failure)
         * 2. Lock the job by updating status to 'running' and setting visibility_timeout
         * 3. Record the startedAt timestamp
         * 4. Retrieve handler from JobRegistry
         * 5. Create CancellationToken for the job
         * 6. Invoke handler.execute() with job and cancellation token
         * 7. Handle success: update status to completed, set completedAt
         * 8. Handle failure: increment attempts, set failureReason, calculate retry delay
         * 9. Move to DLQ when attempts >= maxAttempts
         *
         * @param job - The job to execute
         *
         * **Validates: Requirements 3.5, 4.1, 4.2, 4.3, 4.4, 4.5, 3.4**
         */
        JobExecutor_1.prototype.executeJob = function (job) {
            return __awaiter(this, void 0, void 0, function () {
                var policy, timeoutError, visibilityTimeout, startedAt, handler, cancellationToken, completedAt, durationMs, durationSeconds, error_4;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 6, , 8]);
                            // Get the retry policy for this job type to determine visibility timeout
                            policy = this.registry.getPolicy(job.type);
                            if (!(job.visibilityTimeout && job.visibilityTimeout < new Date())) return [3 /*break*/, 2];
                            this.logger.warn("Job ".concat(job.id, " has expired visibility timeout (type: ").concat(job.type, ", timeout: ").concat(job.visibilityTimeout.toISOString(), "). Treating as timeout failure."));
                            timeoutError = new Error("Visibility timeout expired at ".concat(job.visibilityTimeout.toISOString()));
                            return [4 /*yield*/, this.handleJobFailure(job, timeoutError, policy)];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                        case 2:
                            visibilityTimeout = new Date(Date.now() + policy.visibilityTimeoutMs);
                            startedAt = new Date();
                            // Lock the job by updating status to 'running' and setting visibility timeout
                            // This prevents other executor instances from picking up the same job
                            return [4 /*yield*/, this.repository.updateJobStatus(job.id, types_1.JobStatus.RUNNING, {
                                    startedAt: startedAt,
                                    visibilityTimeout: visibilityTimeout,
                                })];
                        case 3:
                            // Lock the job by updating status to 'running' and setting visibility timeout
                            // This prevents other executor instances from picking up the same job
                            _a.sent();
                            // Update gauge metrics: pending -> running
                            this.metrics.updateJobsPendingCount(job.type, -1);
                            this.metrics.updateJobsRunningCount(job.type, 1);
                            // Structured logging: job started at INFO level
                            this.logger.log({
                                message: 'Job started',
                                jobId: job.id,
                                type: job.type,
                                attempts: job.attempts + 1,
                            });
                            handler = this.registry.getHandler(job.type);
                            cancellationToken = this.cancellationStore.createToken(job.id);
                            // Invoke handler.execute() with job and cancellation token
                            return [4 /*yield*/, handler.execute(job, cancellationToken)];
                        case 4:
                            // Invoke handler.execute() with job and cancellation token
                            _a.sent();
                            completedAt = new Date();
                            return [4 /*yield*/, this.repository.updateJobStatus(job.id, types_1.JobStatus.COMPLETED, {
                                    completedAt: completedAt,
                                })];
                        case 5:
                            _a.sent();
                            durationMs = completedAt.getTime() - startedAt.getTime();
                            durationSeconds = durationMs / 1000;
                            // Update metrics
                            this.metrics.incrementJobsCompleted(job.type);
                            this.metrics.updateJobsRunningCount(job.type, -1);
                            this.metrics.recordJobExecutionDuration(job.type, durationSeconds);
                            // Structured logging: job completed at INFO level
                            this.logger.log({
                                message: 'Job completed',
                                jobId: job.id,
                                type: job.type,
                                duration: durationMs,
                            });
                            // Clean up cancellation token
                            this.cancellationStore.clearCancellation(job.id);
                            return [3 /*break*/, 8];
                        case 6:
                            error_4 = _a.sent();
                            // Handle failure: increment attempts, set failureReason, calculate retry delay
                            return [4 /*yield*/, this.handleJobFailure(job, error_4, policy)];
                        case 7:
                            // Handle failure: increment attempts, set failureReason, calculate retry delay
                            _a.sent();
                            return [3 /*break*/, 8];
                        case 8: return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * Handle job failure by incrementing attempts and scheduling retry or moving to DLQ
         *
         * Handles all types of failures including:
         * - Handler execution errors
         * - Visibility timeout expiration (job took too long or executor crashed)
         *
         * @param job - The failed job
         * @param error - The error that caused the failure
         * @param policy - The retry policy for this job type
         *
         * **Validates: Requirements 4.4, 4.5, 3.4**
         */
        JobExecutor_1.prototype.handleJobFailure = function (job, error, policy) {
            return __awaiter(this, void 0, void 0, function () {
                var newAttempts, failureReason, handler, hookError_1, retryDelayMs, scheduledAt;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            newAttempts = job.attempts + 1;
                            failureReason = error.message || 'Unknown error';
                            // Structured logging: job failed at ERROR level with stack trace
                            this.logger.error({
                                message: 'Job failed',
                                jobId: job.id,
                                type: job.type,
                                attempts: newAttempts,
                                failureReason: failureReason,
                                stack: error.stack,
                            });
                            if (!(newAttempts >= policy.maxAttempts && policy.maxAttempts > 0)) return [3 /*break*/, 6];
                            // Move to DLQ: mark as failed permanently
                            return [4 /*yield*/, this.repository.updateJobStatus(job.id, types_1.JobStatus.FAILED, {
                                    attempts: newAttempts,
                                    failureReason: failureReason,
                                    completedAt: new Date(),
                                })];
                        case 1:
                            // Move to DLQ: mark as failed permanently
                            _a.sent();
                            // Update metrics
                            this.metrics.incrementJobsFailed(job.type);
                            this.metrics.updateJobsRunningCount(job.type, -1);
                            this.metrics.updateJobsDlqCount(job.type, 1);
                            this.logger.warn("Job ".concat(job.id, " moved to DLQ after ").concat(newAttempts, " attempts (type: ").concat(job.type, ")"));
                            _a.label = 2;
                        case 2:
                            _a.trys.push([2, 4, , 5]);
                            handler = this.registry.getHandler(job.type);
                            return [4 /*yield*/, handler.onFailure(job, error)];
                        case 3:
                            _a.sent();
                            return [3 /*break*/, 5];
                        case 4:
                            hookError_1 = _a.sent();
                            this.logger.error({
                                message: "Failed to execute onFailure hook for job ".concat(job.id),
                                jobId: job.id,
                                error: hookError_1.message,
                                stack: hookError_1.stack,
                            });
                            return [3 /*break*/, 5];
                        case 5:
                            // Clean up cancellation token
                            this.cancellationStore.clearCancellation(job.id);
                            return [3 /*break*/, 8];
                        case 6:
                            retryDelayMs = this.calculateRetryDelay(policy, newAttempts);
                            scheduledAt = new Date(Date.now() + retryDelayMs);
                            return [4 /*yield*/, this.repository.updateJobStatus(job.id, types_1.JobStatus.PENDING, {
                                    attempts: newAttempts,
                                    failureReason: failureReason,
                                    scheduledAt: scheduledAt,
                                    visibilityTimeout: null, // Clear visibility timeout for retry
                                })];
                        case 7:
                            _a.sent();
                            // Update gauge metrics: running -> pending
                            this.metrics.updateJobsRunningCount(job.type, -1);
                            this.metrics.updateJobsPendingCount(job.type, 1);
                            this.logger.log("Job ".concat(job.id, " scheduled for retry in ").concat(retryDelayMs, "ms (type: ").concat(job.type, ", attempt: ").concat(newAttempts, "/").concat(policy.maxAttempts, ")"));
                            // Clean up cancellation token
                            this.cancellationStore.clearCancellation(job.id);
                            _a.label = 8;
                        case 8: return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * Calculate retry delay based on retry policy and attempt count
         *
         * @param policy - The retry policy
         * @param attempts - The current attempt count
         * @returns The delay in milliseconds before the next retry
         */
        JobExecutor_1.prototype.calculateRetryDelay = function (policy, attempts) {
            var delay;
            switch (policy.backoffStrategy) {
                case 'fixed':
                    delay = policy.initialDelayMs;
                    break;
                case 'linear':
                    delay = policy.initialDelayMs * attempts;
                    break;
                case 'exponential':
                    delay = policy.initialDelayMs * Math.pow(2, attempts - 1);
                    break;
                default:
                    throw new Error("Unknown backoff strategy: ".concat(policy.backoffStrategy));
            }
            return Math.min(delay, policy.maxDelayMs);
        };
        return JobExecutor_1;
    }());
    __setFunctionName(_classThis, "JobExecutor");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _processDueJobs_decorators = [(0, schedule_1.Cron)(schedule_1.CronExpression.EVERY_10_SECONDS)];
        __esDecorate(_classThis, null, _processDueJobs_decorators, { kind: "method", name: "processDueJobs", static: false, private: false, access: { has: function (obj) { return "processDueJobs" in obj; }, get: function (obj) { return obj.processDueJobs; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        JobExecutor = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return JobExecutor = _classThis;
}();
exports.JobExecutor = JobExecutor;
