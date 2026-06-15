"use strict";
/**
 * Job Queue System - Metrics Service
 *
 * Provides Prometheus metrics for job lifecycle events.
 *
 * **Validates: Requirements 13.1, 13.2, 13.3**
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
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JobQueueMetricsService = void 0;
var common_1 = require("@nestjs/common");
var client = require("prom-client");
/**
 * Job Queue Metrics Service
 *
 * Provides Prometheus metrics for:
 * - Counter metrics: jobs_enqueued_total, jobs_completed_total, jobs_failed_total, jobs_cancelled_total
 * - Gauge metrics: jobs_pending_count, jobs_running_count, jobs_dlq_count
 * - Histogram metric: job_execution_duration_seconds
 *
 * All metrics are labeled by job type for granular monitoring.
 */
var JobQueueMetricsService = function () {
    var _classDecorators = [(0, common_1.Injectable)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var JobQueueMetricsService = _classThis = /** @class */ (function () {
        function JobQueueMetricsService_1(metricsService) {
            this.metricsService = metricsService;
            this.initialized = false;
        }
        /**
         * Initialize all metrics on module startup
         *
         * Registers metrics with the Prometheus registry from MetricsService.
         */
        JobQueueMetricsService_1.prototype.onModuleInit = function () {
            try {
                var register = this.metricsService.getRegistry();
                // Counter: jobs_enqueued_total
                this.jobsEnqueuedTotal = new client.Counter({
                    name: 'jobs_enqueued_total',
                    help: 'Total number of jobs enqueued',
                    labelNames: ['type'],
                    registers: [register],
                });
                // Counter: jobs_completed_total
                this.jobsCompletedTotal = new client.Counter({
                    name: 'jobs_completed_total',
                    help: 'Total number of jobs completed successfully',
                    labelNames: ['type'],
                    registers: [register],
                });
                // Counter: jobs_failed_total
                this.jobsFailedTotal = new client.Counter({
                    name: 'jobs_failed_total',
                    help: 'Total number of jobs that failed permanently (moved to DLQ)',
                    labelNames: ['type'],
                    registers: [register],
                });
                // Counter: jobs_cancelled_total
                this.jobsCancelledTotal = new client.Counter({
                    name: 'jobs_cancelled_total',
                    help: 'Total number of jobs cancelled',
                    labelNames: ['type'],
                    registers: [register],
                });
                // Gauge: jobs_pending_count
                this.jobsPendingCount = new client.Gauge({
                    name: 'jobs_pending_count',
                    help: 'Current number of pending jobs',
                    labelNames: ['type'],
                    registers: [register],
                });
                // Gauge: jobs_running_count
                this.jobsRunningCount = new client.Gauge({
                    name: 'jobs_running_count',
                    help: 'Current number of running jobs',
                    labelNames: ['type'],
                    registers: [register],
                });
                // Gauge: jobs_dlq_count
                this.jobsDlqCount = new client.Gauge({
                    name: 'jobs_dlq_count',
                    help: 'Current number of jobs in dead letter queue',
                    labelNames: ['type'],
                    registers: [register],
                });
                // Histogram: job_execution_duration_seconds
                this.jobExecutionDuration = new client.Histogram({
                    name: 'job_execution_duration_seconds',
                    help: 'Duration of job execution in seconds',
                    labelNames: ['type'],
                    buckets: [0.1, 0.5, 1, 2, 5, 10, 30, 60, 120, 300, 600], // Up to 10 minutes
                    registers: [register],
                });
                this.initialized = true;
            }
            catch (error) {
                console.error('Failed to initialize job queue metrics:', error);
                this.initialized = false;
            }
        };
        /**
         * Increment jobs_enqueued_total counter
         *
         * Called when a job is enqueued.
         *
         * @param type - Job type
         */
        JobQueueMetricsService_1.prototype.incrementJobsEnqueued = function (type) {
            if (!this.initialized || !this.jobsEnqueuedTotal) {
                return;
            }
            try {
                this.jobsEnqueuedTotal.labels(type).inc();
            }
            catch (error) {
                // Silently fail to avoid breaking job enqueue
            }
        };
        /**
         * Increment jobs_completed_total counter
         *
         * Called when a job completes successfully.
         *
         * @param type - Job type
         */
        JobQueueMetricsService_1.prototype.incrementJobsCompleted = function (type) {
            if (!this.initialized || !this.jobsCompletedTotal) {
                return;
            }
            try {
                this.jobsCompletedTotal.labels(type).inc();
            }
            catch (error) {
                // Silently fail
            }
        };
        /**
         * Increment jobs_failed_total counter
         *
         * Called when a job fails permanently (moved to DLQ).
         *
         * @param type - Job type
         */
        JobQueueMetricsService_1.prototype.incrementJobsFailed = function (type) {
            if (!this.initialized || !this.jobsFailedTotal) {
                return;
            }
            try {
                this.jobsFailedTotal.labels(type).inc();
            }
            catch (error) {
                // Silently fail
            }
        };
        /**
         * Increment jobs_cancelled_total counter
         *
         * Called when a job is cancelled.
         *
         * @param type - Job type
         */
        JobQueueMetricsService_1.prototype.incrementJobsCancelled = function (type) {
            if (!this.initialized || !this.jobsCancelledTotal) {
                return;
            }
            try {
                this.jobsCancelledTotal.labels(type).inc();
            }
            catch (error) {
                // Silently fail
            }
        };
        /**
         * Update jobs_pending_count gauge
         *
         * Called when a job transitions to/from pending status.
         *
         * @param type - Job type
         * @param delta - Change in count (+1 or -1)
         */
        JobQueueMetricsService_1.prototype.updateJobsPendingCount = function (type, delta) {
            if (!this.initialized || !this.jobsPendingCount) {
                return;
            }
            try {
                if (delta > 0) {
                    this.jobsPendingCount.labels(type).inc(delta);
                }
                else if (delta < 0) {
                    this.jobsPendingCount.labels(type).dec(Math.abs(delta));
                }
            }
            catch (error) {
                // Silently fail
            }
        };
        /**
         * Update jobs_running_count gauge
         *
         * Called when a job transitions to/from running status.
         *
         * @param type - Job type
         * @param delta - Change in count (+1 or -1)
         */
        JobQueueMetricsService_1.prototype.updateJobsRunningCount = function (type, delta) {
            if (!this.initialized || !this.jobsRunningCount) {
                return;
            }
            try {
                if (delta > 0) {
                    this.jobsRunningCount.labels(type).inc(delta);
                }
                else if (delta < 0) {
                    this.jobsRunningCount.labels(type).dec(Math.abs(delta));
                }
            }
            catch (error) {
                // Silently fail
            }
        };
        /**
         * Update jobs_dlq_count gauge
         *
         * Called when a job is moved to/from the dead letter queue.
         *
         * @param type - Job type
         * @param delta - Change in count (+1 or -1)
         */
        JobQueueMetricsService_1.prototype.updateJobsDlqCount = function (type, delta) {
            if (!this.initialized || !this.jobsDlqCount) {
                return;
            }
            try {
                if (delta > 0) {
                    this.jobsDlqCount.labels(type).inc(delta);
                }
                else if (delta < 0) {
                    this.jobsDlqCount.labels(type).dec(Math.abs(delta));
                }
            }
            catch (error) {
                // Silently fail
            }
        };
        /**
         * Record job execution duration
         *
         * Called when a job completes (successfully or with failure).
         *
         * @param type - Job type
         * @param durationSeconds - Duration in seconds
         */
        JobQueueMetricsService_1.prototype.recordJobExecutionDuration = function (type, durationSeconds) {
            if (!this.initialized || !this.jobExecutionDuration) {
                return;
            }
            try {
                this.jobExecutionDuration.labels(type).observe(durationSeconds);
            }
            catch (error) {
                // Silently fail
            }
        };
        return JobQueueMetricsService_1;
    }());
    __setFunctionName(_classThis, "JobQueueMetricsService");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        JobQueueMetricsService = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return JobQueueMetricsService = _classThis;
}();
exports.JobQueueMetricsService = JobQueueMetricsService;
