"use strict";
/**
 * Job Queue System - Admin Controller
 *
 * REST API endpoints for operators to monitor and manage jobs.
 * All endpoints require authentication and admin scope.
 *
 * **Validates: Requirements 5.1, 5.2, 5.3, 5.4, 5.5, 6.1, 6.2, 6.3, 14.1, 14.2, 14.3, 14.4, 14.5**
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
exports.JobAdminController = exports.BulkRetryRequestDto = void 0;
var common_1 = require("@nestjs/common");
var swagger_1 = require("@nestjs/swagger");
var types_1 = require("./types");
var api_key_guard_1 = require("../auth/guards/api-key.guard");
var require_scopes_decorator_1 = require("../auth/decorators/require-scopes.decorator");
/**
 * DTO for bulk retry request
 */
var BulkRetryRequestDto = /** @class */ (function () {
    function BulkRetryRequestDto() {
    }
    return BulkRetryRequestDto;
}());
exports.BulkRetryRequestDto = BulkRetryRequestDto;
/**
 * Admin controller for job queue management
 *
 * Provides endpoints for:
 * - Listing and filtering jobs
 * - Viewing job details
 * - Cancelling jobs
 * - Retrying failed jobs (single and bulk)
 * - Viewing metrics and DLQ
 *
 * All endpoints require authentication with admin scope.
 */
var JobAdminController = function () {
    var _classDecorators = [(0, swagger_1.ApiTags)('Admin - Job Queue'), (0, common_1.Controller)('admin/jobs'), (0, common_1.UseGuards)(api_key_guard_1.ApiKeyGuard), (0, swagger_1.ApiBearerAuth)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _instanceExtraInitializers = [];
    var _listJobs_decorators;
    var _getJob_decorators;
    var _cancelJob_decorators;
    var _retryJob_decorators;
    var _bulkRetry_decorators;
    var _getMetrics_decorators;
    var _getDeadLetterQueue_decorators;
    var JobAdminController = _classThis = /** @class */ (function () {
        function JobAdminController_1(jobQueueService, jobRepository) {
            this.jobQueueService = (__runInitializers(this, _instanceExtraInitializers), jobQueueService);
            this.jobRepository = jobRepository;
        }
        /**
         * List jobs with optional filters
         *
         * Supports filtering by:
         * - Job type
         * - Job status
         * - Date range (createdAfter, createdBefore)
         * - Pagination (limit, offset)
         *
         * **Validates: Requirements 5.1, 5.5**
         */
        JobAdminController_1.prototype.listJobs = function (type, status, createdAfter, createdBefore, limit, offset) {
            return __awaiter(this, void 0, void 0, function () {
                var filters;
                return __generator(this, function (_a) {
                    filters = {
                        type: type,
                        status: status,
                        createdAfter: createdAfter ? new Date(createdAfter) : undefined,
                        createdBefore: createdBefore ? new Date(createdBefore) : undefined,
                        limit: limit,
                        offset: offset,
                    };
                    return [2 /*return*/, this.jobQueueService.listJobs(filters)];
                });
            });
        };
        /**
         * Get detailed information for a specific job
         *
         * Returns full job details including payload and failure reason.
         *
         * **Validates: Requirement 5.2**
         */
        JobAdminController_1.prototype.getJob = function (id) {
            return __awaiter(this, void 0, void 0, function () {
                var job;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.jobQueueService.getJob(id)];
                        case 1:
                            job = _a.sent();
                            if (!job) {
                                throw new common_1.NotFoundException("Job not found: ".concat(id));
                            }
                            return [2 /*return*/, job];
                    }
                });
            });
        };
        /**
         * Cancel a job by ID
         *
         * For pending jobs: Updates status to 'cancelled' immediately
         * For running jobs: Sets a cancellation token that the handler can check
         * For completed/failed/cancelled jobs: No-op (already terminal state)
         *
         * **Validates: Requirements 6.1, 6.2, 6.3**
         */
        JobAdminController_1.prototype.cancelJob = function (id) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.jobQueueService.cancel(id)];
                        case 1:
                            _a.sent();
                            return [2 /*return*/, { message: "Job ".concat(id, " cancellation requested") }];
                    }
                });
            });
        };
        /**
         * Manually retry a failed job
         *
         * Resets job status to pending, clears failureReason, and sets scheduledAt to now.
         * Rejects retry for completed or cancelled jobs.
         * Preserves original attempts count.
         *
         * **Validates: Requirements 14.1, 14.2, 14.3, 14.4**
         */
        JobAdminController_1.prototype.retryJob = function (id) {
            return __awaiter(this, void 0, void 0, function () {
                var job;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.jobQueueService.getJob(id)];
                        case 1:
                            job = _a.sent();
                            if (!job) {
                                throw new common_1.NotFoundException("Job not found: ".concat(id));
                            }
                            // Requirement 14.3: Reject retry for completed or cancelled jobs
                            if (job.status === types_1.JobStatus.COMPLETED || job.status === types_1.JobStatus.CANCELLED) {
                                throw new common_1.BadRequestException("Cannot retry job in ".concat(job.status, " status. Only failed or pending jobs can be retried."));
                            }
                            // Requirement 14.2: Reset status to pending, clear failureReason, set scheduledAt to now
                            // Requirement 14.4: Preserve original attempts count
                            return [4 /*yield*/, this.jobRepository.updateJobStatus(id, types_1.JobStatus.PENDING, {
                                    failureReason: null,
                                    scheduledAt: new Date(),
                                    // Note: attempts count is preserved (not reset)
                                })];
                        case 2:
                            // Requirement 14.2: Reset status to pending, clear failureReason, set scheduledAt to now
                            // Requirement 14.4: Preserve original attempts count
                            _a.sent();
                            return [2 /*return*/, { message: "Job ".concat(id, " scheduled for retry") }];
                    }
                });
            });
        };
        /**
         * Bulk retry jobs by type and status
         *
         * Supports bulk retry for all jobs of a specific type in DLQ (failed status).
         *
         * **Validates: Requirement 14.5**
         */
        JobAdminController_1.prototype.bulkRetry = function (request) {
            return __awaiter(this, void 0, void 0, function () {
                var filters, jobs, retriedJobIds, _i, jobs_1, job;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            filters = {
                                type: request.type,
                                status: request.status || types_1.JobStatus.FAILED,
                                limit: 1000, // Limit bulk operations to prevent timeouts
                            };
                            return [4 /*yield*/, this.jobQueueService.listJobs(filters)];
                        case 1:
                            jobs = (_a.sent()).jobs;
                            retriedJobIds = [];
                            _i = 0, jobs_1 = jobs;
                            _a.label = 2;
                        case 2:
                            if (!(_i < jobs_1.length)) return [3 /*break*/, 5];
                            job = jobs_1[_i];
                            if (!(job.status === types_1.JobStatus.FAILED)) return [3 /*break*/, 4];
                            return [4 /*yield*/, this.jobRepository.updateJobStatus(job.id, types_1.JobStatus.PENDING, {
                                    failureReason: null,
                                    scheduledAt: new Date(),
                                })];
                        case 3:
                            _a.sent();
                            retriedJobIds.push(job.id);
                            _a.label = 4;
                        case 4:
                            _i++;
                            return [3 /*break*/, 2];
                        case 5: return [2 /*return*/, {
                                retriedCount: retriedJobIds.length,
                                jobIds: retriedJobIds,
                            }];
                    }
                });
            });
        };
        /**
         * Get job metrics summary
         *
         * Returns counts by job type and status:
         * - Pending, running, completed, failed, cancelled counts per type
         * - Total DLQ count
         *
         * **Validates: Requirement 5.3**
         */
        JobAdminController_1.prototype.getMetrics = function () {
            return __awaiter(this, void 0, void 0, function () {
                var byType, _i, _a, type, _b, _c, type, _d, _e, status_1, total, allFailedJobs, dlqCount;
                return __generator(this, function (_f) {
                    switch (_f.label) {
                        case 0:
                            byType = {};
                            // Initialize all job types
                            for (_i = 0, _a = Object.values(types_1.JobType); _i < _a.length; _i++) {
                                type = _a[_i];
                                byType[type] = {
                                    pending: 0,
                                    running: 0,
                                    completed: 0,
                                    failed: 0,
                                    cancelled: 0,
                                };
                            }
                            _b = 0, _c = Object.values(types_1.JobType);
                            _f.label = 1;
                        case 1:
                            if (!(_b < _c.length)) return [3 /*break*/, 6];
                            type = _c[_b];
                            _d = 0, _e = Object.values(types_1.JobStatus);
                            _f.label = 2;
                        case 2:
                            if (!(_d < _e.length)) return [3 /*break*/, 5];
                            status_1 = _e[_d];
                            return [4 /*yield*/, this.jobQueueService.listJobs({
                                    type: type,
                                    status: status_1,
                                    limit: 0, // Only get count, not actual jobs
                                })];
                        case 3:
                            total = (_f.sent()).total;
                            byType[type][status_1] = total;
                            _f.label = 4;
                        case 4:
                            _d++;
                            return [3 /*break*/, 2];
                        case 5:
                            _b++;
                            return [3 /*break*/, 1];
                        case 6: return [4 /*yield*/, this.jobQueueService.listJobs({
                                status: types_1.JobStatus.FAILED,
                                limit: 10000, // Large limit to get all failed jobs
                            })];
                        case 7:
                            allFailedJobs = _f.sent();
                            dlqCount = allFailedJobs.jobs.filter(function (job) { return job.attempts >= job.maxAttempts; }).length;
                            return [2 /*return*/, {
                                    byType: byType,
                                    dlqCount: dlqCount,
                                }];
                    }
                });
            });
        };
        /**
         * Get dead letter queue (DLQ) jobs
         *
         * Returns jobs where status=failed AND attempts >= maxAttempts.
         * Supports pagination and filters.
         *
         * **Validates: Requirement 5.4**
         */
        JobAdminController_1.prototype.getDeadLetterQueue = function (type, limit, offset) {
            return __awaiter(this, void 0, void 0, function () {
                var filters, result, dlqJobs;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            filters = {
                                type: type,
                                status: types_1.JobStatus.FAILED,
                                limit: limit,
                                offset: offset,
                            };
                            return [4 /*yield*/, this.jobQueueService.listJobs(filters)];
                        case 1:
                            result = _a.sent();
                            dlqJobs = result.jobs.filter(function (job) { return job.attempts >= job.maxAttempts; });
                            return [2 /*return*/, {
                                    jobs: dlqJobs,
                                    total: dlqJobs.length,
                                    limit: result.limit,
                                    offset: result.offset,
                                }];
                    }
                });
            });
        };
        return JobAdminController_1;
    }());
    __setFunctionName(_classThis, "JobAdminController");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _listJobs_decorators = [(0, common_1.Get)(), (0, require_scopes_decorator_1.RequireScopes)('admin'), (0, swagger_1.ApiOperation)({ summary: 'List jobs with filters' }), (0, swagger_1.ApiResponse)({ status: 200, description: 'Paginated job list' })];
        _getJob_decorators = [(0, common_1.Get)(':id'), (0, require_scopes_decorator_1.RequireScopes)('admin'), (0, swagger_1.ApiOperation)({ summary: 'Get job details by ID' }), (0, swagger_1.ApiResponse)({ status: 200, description: 'Job details' }), (0, swagger_1.ApiResponse)({ status: 404, description: 'Job not found' })];
        _cancelJob_decorators = [(0, common_1.Post)(':id/cancel'), (0, require_scopes_decorator_1.RequireScopes)('admin'), (0, common_1.HttpCode)(common_1.HttpStatus.OK), (0, swagger_1.ApiOperation)({ summary: 'Cancel a job' }), (0, swagger_1.ApiResponse)({ status: 200, description: 'Job cancelled successfully' }), (0, swagger_1.ApiResponse)({ status: 404, description: 'Job not found' })];
        _retryJob_decorators = [(0, common_1.Post)(':id/retry'), (0, require_scopes_decorator_1.RequireScopes)('admin'), (0, common_1.HttpCode)(common_1.HttpStatus.OK), (0, swagger_1.ApiOperation)({ summary: 'Manually retry a failed job' }), (0, swagger_1.ApiResponse)({ status: 200, description: 'Job retry scheduled' }), (0, swagger_1.ApiResponse)({ status: 400, description: 'Job cannot be retried' }), (0, swagger_1.ApiResponse)({ status: 404, description: 'Job not found' })];
        _bulkRetry_decorators = [(0, common_1.Post)('bulk-retry'), (0, require_scopes_decorator_1.RequireScopes)('admin'), (0, common_1.HttpCode)(common_1.HttpStatus.OK), (0, swagger_1.ApiOperation)({ summary: 'Bulk retry jobs by type' }), (0, swagger_1.ApiResponse)({ status: 200, description: 'Bulk retry completed' })];
        _getMetrics_decorators = [(0, common_1.Get)('metrics/summary'), (0, require_scopes_decorator_1.RequireScopes)('admin'), (0, swagger_1.ApiOperation)({ summary: 'Get job metrics summary' }), (0, swagger_1.ApiResponse)({ status: 200, description: 'Job metrics' })];
        _getDeadLetterQueue_decorators = [(0, common_1.Get)('dlq'), (0, require_scopes_decorator_1.RequireScopes)('admin'), (0, swagger_1.ApiOperation)({ summary: 'Get dead letter queue jobs' }), (0, swagger_1.ApiResponse)({ status: 200, description: 'DLQ jobs' })];
        __esDecorate(_classThis, null, _listJobs_decorators, { kind: "method", name: "listJobs", static: false, private: false, access: { has: function (obj) { return "listJobs" in obj; }, get: function (obj) { return obj.listJobs; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _getJob_decorators, { kind: "method", name: "getJob", static: false, private: false, access: { has: function (obj) { return "getJob" in obj; }, get: function (obj) { return obj.getJob; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _cancelJob_decorators, { kind: "method", name: "cancelJob", static: false, private: false, access: { has: function (obj) { return "cancelJob" in obj; }, get: function (obj) { return obj.cancelJob; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _retryJob_decorators, { kind: "method", name: "retryJob", static: false, private: false, access: { has: function (obj) { return "retryJob" in obj; }, get: function (obj) { return obj.retryJob; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _bulkRetry_decorators, { kind: "method", name: "bulkRetry", static: false, private: false, access: { has: function (obj) { return "bulkRetry" in obj; }, get: function (obj) { return obj.bulkRetry; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _getMetrics_decorators, { kind: "method", name: "getMetrics", static: false, private: false, access: { has: function (obj) { return "getMetrics" in obj; }, get: function (obj) { return obj.getMetrics; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _getDeadLetterQueue_decorators, { kind: "method", name: "getDeadLetterQueue", static: false, private: false, access: { has: function (obj) { return "getDeadLetterQueue" in obj; }, get: function (obj) { return obj.getDeadLetterQueue; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        JobAdminController = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return JobAdminController = _classThis;
}();
exports.JobAdminController = JobAdminController;
