"use strict";
/**
 * Job Queue System - Cancellation Token Implementation
 *
 * Provides a mechanism for long-running job handlers to check for cancellation requests
 * and terminate gracefully. Cancellation state is stored in memory.
 *
 * Requirements: 6.3, 6.4, 6.5
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CancellationStore = exports.CancellationTokenImpl = exports.JobCancelledError = void 0;
/**
 * Error thrown when a job is cancelled
 */
var JobCancelledError = /** @class */ (function (_super) {
    __extends(JobCancelledError, _super);
    function JobCancelledError(jobId) {
        var _this = _super.call(this, "Job ".concat(jobId, " was cancelled")) || this;
        _this.name = 'JobCancelledError';
        return _this;
    }
    return JobCancelledError;
}(Error));
exports.JobCancelledError = JobCancelledError;
/**
 * Implementation of CancellationToken that checks in-memory cancellation state
 */
var CancellationTokenImpl = /** @class */ (function () {
    function CancellationTokenImpl(jobId, cancellationStore) {
        this.jobId = jobId;
        this.cancellationStore = cancellationStore;
    }
    /**
     * Check if cancellation has been requested for this job
     * @returns true if cancellation was requested, false otherwise
     */
    CancellationTokenImpl.prototype.isCancelled = function () {
        return this.cancellationStore.isCancelled(this.jobId);
    };
    /**
     * Throw JobCancelledError if cancellation has been requested
     * @throws JobCancelledError if job is cancelled
     */
    CancellationTokenImpl.prototype.throwIfCancelled = function () {
        if (this.isCancelled()) {
            throw new JobCancelledError(this.jobId);
        }
    };
    return CancellationTokenImpl;
}());
exports.CancellationTokenImpl = CancellationTokenImpl;
/**
 * In-memory store for job cancellation state
 * Manages cancellation flags for all jobs
 */
var CancellationStore = /** @class */ (function () {
    function CancellationStore() {
        this.cancellations = new Map();
    }
    /**
     * Request cancellation for a job
     * @param jobId - The job ID to cancel
     */
    CancellationStore.prototype.requestCancellation = function (jobId) {
        this.cancellations.set(jobId, true);
    };
    /**
     * Check if cancellation has been requested for a job
     * @param jobId - The job ID to check
     * @returns true if cancellation was requested, false otherwise
     */
    CancellationStore.prototype.isCancelled = function (jobId) {
        return this.cancellations.get(jobId) === true;
    };
    /**
     * Clear cancellation state for a job (cleanup after completion)
     * @param jobId - The job ID to clear
     */
    CancellationStore.prototype.clearCancellation = function (jobId) {
        this.cancellations.delete(jobId);
    };
    /**
     * Create a cancellation token for a job
     * @param jobId - The job ID
     * @returns A new CancellationToken instance
     */
    CancellationStore.prototype.createToken = function (jobId) {
        return new CancellationTokenImpl(jobId, this);
    };
    /**
     * Get the number of active cancellation requests (for testing/monitoring)
     * @returns The count of jobs with cancellation requested
     */
    CancellationStore.prototype.getActiveCount = function () {
        return this.cancellations.size;
    };
    return CancellationStore;
}());
exports.CancellationStore = CancellationStore;
