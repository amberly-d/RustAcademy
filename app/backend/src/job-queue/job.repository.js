"use strict";
/**
 * Job Queue System - Job Repository
 *
 * Data access layer for persisting and querying job records in Supabase.
 * Handles all database operations for the unified job queue system.
 *
 * **Validates: Requirements 12.1, 12.2, 12.3, 12.5**
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
exports.JobRepository = void 0;
var common_1 = require("@nestjs/common");
var job_types_1 = require("./types/job.types");
/**
 * Repository for job database operations
 *
 * Provides methods for creating, updating, and querying jobs in the database.
 * All methods use the Supabase client for database access.
 */
var JobRepository = function () {
    var _classDecorators = [(0, common_1.Injectable)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var JobRepository = _classThis = /** @class */ (function () {
        function JobRepository_1(supabase) {
            this.supabase = supabase;
            this.logger = new common_1.Logger(JobRepository.name);
        }
        Object.defineProperty(JobRepository_1.prototype, "client", {
            /**
             * Get the Supabase client for database operations
             */
            get: function () {
                return this.supabase.getClient();
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Create a new job in the database
         *
         * @param type - Job type
         * @param payload - Job-specific payload data
         * @param maxAttempts - Maximum retry attempts
         * @param scheduledAt - When the job should execute (defaults to now)
         * @returns The created job
         *
         * **Validates: Requirement 12.1** - Job persistence to database
         */
        JobRepository_1.prototype.createJob = function (type_1, payload_1, maxAttempts_1) {
            return __awaiter(this, arguments, void 0, function (type, payload, maxAttempts, scheduledAt) {
                var _a, data, error;
                if (scheduledAt === void 0) { scheduledAt = new Date(); }
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, this.client
                                .from('jobs')
                                .insert({
                                type: type,
                                payload: payload,
                                status: job_types_1.JobStatus.PENDING,
                                attempts: 0,
                                max_attempts: maxAttempts,
                                scheduled_at: scheduledAt.toISOString(),
                            })
                                .select()
                                .single()];
                        case 1:
                            _a = _b.sent(), data = _a.data, error = _a.error;
                            if (error) {
                                this.logger.error("Failed to create job: ".concat(error.message), error);
                                throw error;
                            }
                            this.logger.debug("Job created: ".concat(data.id, " (type: ").concat(type, ")"));
                            return [2 /*return*/, this.mapRowToJob(data)];
                    }
                });
            });
        };
        /**
         * Update the status of a job
         *
         * @param jobId - Job ID
         * @param status - New status
         * @param updates - Additional fields to update
         *
         * **Validates: Requirement 12.1** - Job state persistence
         */
        JobRepository_1.prototype.updateJobStatus = function (jobId_1, status_1) {
            return __awaiter(this, arguments, void 0, function (jobId, status, updates) {
                var updateData, error;
                if (updates === void 0) { updates = {}; }
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            updateData = {
                                status: status,
                            };
                            if (updates.attempts !== undefined) {
                                updateData.attempts = updates.attempts;
                            }
                            if (updates.startedAt !== undefined) {
                                updateData.started_at = updates.startedAt.toISOString();
                            }
                            if (updates.completedAt !== undefined) {
                                updateData.completed_at = updates.completedAt.toISOString();
                            }
                            if (updates.failureReason !== undefined) {
                                updateData.failure_reason = updates.failureReason;
                            }
                            if (updates.visibilityTimeout !== undefined) {
                                updateData.visibility_timeout = updates.visibilityTimeout.toISOString();
                            }
                            if (updates.scheduledAt !== undefined) {
                                updateData.scheduled_at = updates.scheduledAt.toISOString();
                            }
                            return [4 /*yield*/, this.client
                                    .from('jobs')
                                    .update(updateData)
                                    .eq('id', jobId)];
                        case 1:
                            error = (_a.sent()).error;
                            if (error) {
                                this.logger.error("Failed to update job ".concat(jobId, ": ").concat(error.message), error);
                                throw error;
                            }
                            this.logger.debug("Job ".concat(jobId, " updated to status: ").concat(status));
                            return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * Find jobs that are due for execution
         *
         * Returns jobs where:
         * - status is 'pending'
         * - scheduled_at is in the past
         * - visibility_timeout is null or expired
         *
         * @param limit - Maximum number of jobs to return
         * @returns Array of due jobs
         *
         * **Validates: Requirements 12.3, 12.5** - Efficient querying with indexes
         */
        JobRepository_1.prototype.findDueJobs = function () {
            return __awaiter(this, arguments, void 0, function (limit) {
                var now, _a, data, error;
                var _this = this;
                if (limit === void 0) { limit = 100; }
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            now = new Date().toISOString();
                            return [4 /*yield*/, this.client
                                    .from('jobs')
                                    .select('*')
                                    .eq('status', job_types_1.JobStatus.PENDING)
                                    .lte('scheduled_at', now)
                                    .or("visibility_timeout.is.null,visibility_timeout.lt.".concat(now))
                                    .order('scheduled_at', { ascending: true })
                                    .limit(limit)];
                        case 1:
                            _a = _b.sent(), data = _a.data, error = _a.error;
                            if (error) {
                                this.logger.error("Failed to find due jobs: ".concat(error.message), error);
                                throw error;
                            }
                            return [2 /*return*/, data.map(function (row) { return _this.mapRowToJob(row); })];
                    }
                });
            });
        };
        /**
         * Find a job by ID
         *
         * @param jobId - Job ID
         * @returns The job, or null if not found
         */
        JobRepository_1.prototype.findById = function (jobId) {
            return __awaiter(this, void 0, void 0, function () {
                var _a, data, error;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, this.client
                                .from('jobs')
                                .select('*')
                                .eq('id', jobId)
                                .maybeSingle()];
                        case 1:
                            _a = _b.sent(), data = _a.data, error = _a.error;
                            // PGRST116 = "no rows returned" — treat as not found, not an error
                            if ((error === null || error === void 0 ? void 0 : error.code) === 'PGRST116') {
                                return [2 /*return*/, null];
                            }
                            if (error) {
                                this.logger.error("Failed to find job ".concat(jobId, ": ").concat(error.message), error);
                                throw error;
                            }
                            if (!data) {
                                return [2 /*return*/, null];
                            }
                            return [2 /*return*/, this.mapRowToJob(data)];
                    }
                });
            });
        };
        /**
         * List jobs with optional filters
         *
         * @param filters - Query filters
         * @returns Paginated job results
         *
         * **Validates: Requirement 12.5** - Efficient querying with indexes
         */
        JobRepository_1.prototype.listJobs = function () {
            return __awaiter(this, arguments, void 0, function (filters) {
                var limit, offset, query, _a, data, error, count;
                var _this = this;
                var _b, _c;
                if (filters === void 0) { filters = {}; }
                return __generator(this, function (_d) {
                    switch (_d.label) {
                        case 0:
                            limit = (_b = filters.limit) !== null && _b !== void 0 ? _b : 50;
                            offset = (_c = filters.offset) !== null && _c !== void 0 ? _c : 0;
                            query = this.client
                                .from('jobs')
                                .select('*', { count: 'exact' });
                            // Apply filters
                            if (filters.type) {
                                query = query.eq('type', filters.type);
                            }
                            if (filters.status) {
                                query = query.eq('status', filters.status);
                            }
                            if (filters.createdAfter) {
                                query = query.gte('created_at', filters.createdAfter.toISOString());
                            }
                            if (filters.createdBefore) {
                                query = query.lte('created_at', filters.createdBefore.toISOString());
                            }
                            // Apply pagination and ordering
                            query = query
                                .order('created_at', { ascending: false })
                                .range(offset, offset + limit - 1);
                            return [4 /*yield*/, query];
                        case 1:
                            _a = _d.sent(), data = _a.data, error = _a.error, count = _a.count;
                            if (error) {
                                this.logger.error("Failed to list jobs: ".concat(error.message), error);
                                throw error;
                            }
                            return [2 /*return*/, {
                                    jobs: data.map(function (row) { return _this.mapRowToJob(row); }),
                                    total: count !== null && count !== void 0 ? count : 0,
                                    limit: limit,
                                    offset: offset,
                                }];
                    }
                });
            });
        };
        /**
         * Reset stale jobs on application startup
         *
         * Resets all jobs with status 'running' to 'pending' to handle
         * application crashes or restarts.
         *
         * @returns Number of jobs reset
         *
         * **Validates: Requirements 12.2, 12.3** - Application startup recovery
         */
        JobRepository_1.prototype.resetStaleJobs = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _a, data, error, count;
                var _b;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0: return [4 /*yield*/, this.client
                                .from('jobs')
                                .update({
                                status: job_types_1.JobStatus.PENDING,
                                visibility_timeout: null,
                            })
                                .eq('status', job_types_1.JobStatus.RUNNING)
                                .select('id')];
                        case 1:
                            _a = _c.sent(), data = _a.data, error = _a.error;
                            if (error) {
                                this.logger.error("Failed to reset stale jobs: ".concat(error.message), error);
                                throw error;
                            }
                            count = (_b = data === null || data === void 0 ? void 0 : data.length) !== null && _b !== void 0 ? _b : 0;
                            if (count > 0) {
                                this.logger.warn("Reset ".concat(count, " stale jobs on startup"));
                            }
                            return [2 /*return*/, count];
                    }
                });
            });
        };
        /**
         * Map a database row to a Job object
         *
         * @param row - Database row
         * @returns Job object
         */
        JobRepository_1.prototype.mapRowToJob = function (row) {
            return {
                id: row.id,
                type: row.type,
                payload: row.payload,
                status: row.status,
                attempts: row.attempts,
                maxAttempts: row.max_attempts,
                createdAt: new Date(row.created_at),
                scheduledAt: new Date(row.scheduled_at),
                startedAt: row.started_at ? new Date(row.started_at) : null,
                completedAt: row.completed_at ? new Date(row.completed_at) : null,
                failureReason: row.failure_reason,
                visibilityTimeout: row.visibility_timeout ? new Date(row.visibility_timeout) : null,
            };
        };
        return JobRepository_1;
    }());
    __setFunctionName(_classThis, "JobRepository");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        JobRepository = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return JobRepository = _classThis;
}();
exports.JobRepository = JobRepository;
