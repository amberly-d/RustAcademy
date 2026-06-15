"use strict";
/**
 * Job Queue System - Module Definition
 *
 * Provides the unified job queue system for background processing.
 * Exports services for use by other modules.
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
exports.JobQueueModule = void 0;
var common_1 = require("@nestjs/common");
var job_queue_service_1 = require("./job-queue.service");
var job_repository_1 = require("./job.repository");
var job_registry_service_1 = require("./job-registry.service");
var job_executor_service_1 = require("./job-executor.service");
var cancellation_token_1 = require("./cancellation-token");
var job_queue_initializer_service_1 = require("./job-queue-initializer.service");
var job_admin_controller_1 = require("./job-admin.controller");
var job_queue_metrics_service_1 = require("./job-queue-metrics.service");
var supabase_module_1 = require("../supabase/supabase.module");
var notifications_module_1 = require("../notifications/notifications.module");
var links_module_1 = require("../links/links.module");
var reconciliation_module_1 = require("../reconciliation/reconciliation.module");
var ingestion_module_1 = require("../ingestion/ingestion.module");
var auth_module_1 = require("../auth/auth.module");
var metrics_module_1 = require("../metrics/metrics.module");
var api_keys_module_1 = require("../api-keys/api-keys.module");
var handlers_1 = require("./handlers");
/**
 * Job Queue Module
 *
 * Provides:
 * - JobQueueService: Public API for enqueuing and managing jobs
 * - JobExecutor: Background polling service for job execution
 * - JobRegistry: Registry for job handlers and retry policies
 * - JobRepository: Database access layer
 * - CancellationStore: Cancellation token management
 * - JobQueueInitializer: Registers all job handlers at startup
 * - JobQueueMetricsService: Prometheus metrics for job lifecycle events
 * - JobAdminController: Admin API endpoints for job monitoring and management
 * - WebhookDeliveryHandler: Handler for webhook delivery jobs
 * - RecurringPaymentHandler: Handler for recurring payment jobs
 * - ExportGenerationHandler: Handler for export generation jobs
 * - ReconciliationHandler: Handler for reconciliation jobs
 * - StellarReconnectHandler: Handler for Stellar SSE reconnection jobs
 */
var JobQueueModule = function () {
    var _classDecorators = [(0, common_1.Module)({
            imports: [
                supabase_module_1.SupabaseModule,
                auth_module_1.AuthModule,
                metrics_module_1.MetricsModule,
                api_keys_module_1.ApiKeysModule,
                (0, common_1.forwardRef)(function () { return notifications_module_1.NotificationsModule; }),
                (0, common_1.forwardRef)(function () { return links_module_1.LinksModule; }),
                (0, common_1.forwardRef)(function () { return reconciliation_module_1.ReconciliationModule; }),
                (0, common_1.forwardRef)(function () { return ingestion_module_1.IngestionModule; }),
            ],
            controllers: [job_admin_controller_1.JobAdminController],
            providers: [
                job_queue_service_1.JobQueueService,
                job_repository_1.JobRepository,
                job_registry_service_1.JobRegistry,
                job_executor_service_1.JobExecutor,
                cancellation_token_1.CancellationStore,
                job_queue_initializer_service_1.JobQueueInitializer,
                job_queue_metrics_service_1.JobQueueMetricsService,
                handlers_1.WebhookDeliveryHandler,
                handlers_1.RecurringPaymentHandler,
                handlers_1.ExportGenerationHandler,
                handlers_1.ReconciliationHandler,
                handlers_1.StellarReconnectHandler,
            ],
            exports: [
                job_queue_service_1.JobQueueService,
                job_registry_service_1.JobRegistry,
                job_repository_1.JobRepository,
                job_queue_metrics_service_1.JobQueueMetricsService,
                handlers_1.WebhookDeliveryHandler,
                handlers_1.RecurringPaymentHandler,
                handlers_1.ExportGenerationHandler,
                handlers_1.ReconciliationHandler,
                handlers_1.StellarReconnectHandler,
            ],
        })];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var JobQueueModule = _classThis = /** @class */ (function () {
        function JobQueueModule_1() {
        }
        return JobQueueModule_1;
    }());
    __setFunctionName(_classThis, "JobQueueModule");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        JobQueueModule = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return JobQueueModule = _classThis;
}();
exports.JobQueueModule = JobQueueModule;
