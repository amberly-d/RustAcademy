"use strict";
/**
 * Job Queue System - Core Type Definitions
 *
 * This module defines the core interfaces and enums for the unified job queue system.
 * All background processing jobs (webhooks, payments, exports, etc.) use these types.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.JobStatus = exports.JobType = void 0;
/**
 * Job type enum - defines all supported background job types
 */
var JobType;
(function (JobType) {
    JobType["WEBHOOK_DELIVERY"] = "webhook_delivery";
    JobType["RECURRING_PAYMENT"] = "recurring_payment";
    JobType["EXPORT_GENERATION"] = "export_generation";
    JobType["RECONCILIATION"] = "reconciliation";
    JobType["STELLAR_RECONNECT"] = "stellar_reconnect";
})(JobType || (exports.JobType = JobType = {}));
/**
 * Job status enum - defines all possible job states
 */
var JobStatus;
(function (JobStatus) {
    JobStatus["PENDING"] = "pending";
    JobStatus["RUNNING"] = "running";
    JobStatus["COMPLETED"] = "completed";
    JobStatus["FAILED"] = "failed";
    JobStatus["CANCELLED"] = "cancelled";
})(JobStatus || (exports.JobStatus = JobStatus = {}));
