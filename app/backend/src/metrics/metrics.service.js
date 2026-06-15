"use strict";
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
exports.MetricsService = void 0;
var common_1 = require("@nestjs/common");
var client = require("prom-client");
var MetricsService = function () {
    var _classDecorators = [(0, common_1.Injectable)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var MetricsService = _classThis = /** @class */ (function () {
        function MetricsService_1() {
            this.initialized = false;
        }
        MetricsService_1.prototype.onModuleInit = function () {
            try {
                this.register = new client.Registry();
                client.collectDefaultMetrics({ register: this.register });
                this.httpRequestDuration = new client.Histogram({
                    name: "http_request_duration_seconds",
                    help: "Duration of HTTP requests in seconds",
                    labelNames: ["method", "route", "status_code"],
                    buckets: [0.1, 0.5, 1, 2, 5, 10],
                });
                this.httpRequestTotal = new client.Counter({
                    name: "http_requests_total",
                    help: "Total number of HTTP requests",
                    labelNames: ["method", "route", "status_code"],
                });
                this.rateLimitedRequestsTotal = new client.Counter({
                    name: "http_rate_limited_requests_total",
                    help: "Total number of requests blocked by rate limiting",
                    labelNames: ["method", "route", "group", "key_type"],
                });
                this.activeConnections = new client.Gauge({
                    name: "http_active_connections",
                    help: "Number of active connections",
                });
                this.ingestionLagSeconds = new client.Gauge({
                    name: "ingestion_lag_seconds",
                    help: "Lag between current ledger and last ingested ledger in seconds",
                    labelNames: ["contract_id"],
                });
                this.webhookRetryTotal = new client.Counter({
                    name: "webhook_retry_total",
                    help: "Total number of webhook retry attempts",
                    labelNames: ["event_type", "status"],
                });
                this.webhookDeliveryDuration = new client.Histogram({
                    name: "webhook_delivery_duration_seconds",
                    help: "Duration of webhook delivery attempts in seconds",
                    labelNames: ["event_type", "status"],
                    buckets: [0.1, 0.5, 1, 2, 5, 10],
                });
                this.externalCallDuration = new client.Histogram({
                    name: "external_call_duration_seconds",
                    help: "Duration of external API calls in seconds",
                    labelNames: ["service", "operation"],
                    buckets: [0.1, 0.5, 1, 2, 5, 10, 30],
                });
                this.errorRate = new client.Counter({
                    name: "error_total",
                    help: "Total number of errors",
                    labelNames: ["service", "error_type"],
                });
                this.sorobanRpcFailoverTotal = new client.Counter({
                    name: "soroban_rpc_failover_total",
                    help: "Total number of Soroban RPC failover events",
                    labelNames: ["from_endpoint", "to_endpoint", "reason"],
                });
                this.sorobanRpcActiveEndpoint = new client.Gauge({
                    name: "soroban_rpc_active_endpoint",
                    help: "Currently active Soroban RPC endpoint (1=active, 0=inactive)",
                    labelNames: ["endpoint"],
                });
                this.sorobanIndexerUnknownSchemaVersion = new client.Counter({
                    name: "soroban_indexer_unknown_schema_version_total",
                    help: "Events skipped because their schema_version exceeds the indexer maximum",
                    labelNames: ["event_name", "schema_version"],
                });
                this.parityCheckResults = new client.Gauge({
                    name: "environment_parity_check_results",
                    help: "Environment parity check results by status",
                    labelNames: ["status"],
                });
                this.shadowTrafficRequests = new client.Counter({
                    name: "shadow_traffic_requests_total",
                    help: "Total number of shadow traffic requests",
                    labelNames: ["method", "route", "status_code", "shadow_status"],
                });
                this.indexerLagLedgers = new client.Gauge({
                    name: "indexer_lag_ledgers",
                    help: "Current indexer lag in ledgers",
                });
                this.indexerLagGuardBlockedRequests = new client.Counter({
                    name: "indexer_lag_guard_blocked_requests_total",
                    help: "Total number of requests blocked by indexer lag guard",
                    labelNames: ["method", "route"],
                });
                this.indexerLagGuardStatus = new client.Gauge({
                    name: "indexer_lag_guard_status",
                    help: "Indexer lag guard status (0=disabled, 1=enabled, 2=overridden, 3=lagging)",
                });
                this.register.registerMetric(this.httpRequestDuration);
                this.register.registerMetric(this.httpRequestTotal);
                this.register.registerMetric(this.rateLimitedRequestsTotal);
                this.register.registerMetric(this.activeConnections);
                this.register.registerMetric(this.ingestionLagSeconds);
                this.register.registerMetric(this.webhookRetryTotal);
                this.register.registerMetric(this.webhookDeliveryDuration);
                this.register.registerMetric(this.externalCallDuration);
                this.register.registerMetric(this.errorRate);
                this.register.registerMetric(this.sorobanRpcFailoverTotal);
                this.register.registerMetric(this.sorobanRpcActiveEndpoint);
                this.register.registerMetric(this.sorobanIndexerUnknownSchemaVersion);
                this.register.registerMetric(this.parityCheckResults);
                this.register.registerMetric(this.shadowTrafficRequests);
                this.register.registerMetric(this.indexerLagLedgers);
                this.register.registerMetric(this.indexerLagGuardBlockedRequests);
                this.register.registerMetric(this.indexerLagGuardStatus);
                this.initialized = true;
            }
            catch (error) {
                console.error("Failed to initialize metrics:", error);
                this.initialized = false;
            }
        };
        MetricsService_1.prototype.getRegistry = function () {
            return this.register;
        };
        MetricsService_1.prototype.recordRequestDuration = function (method, route, statusCode, duration) {
            if (!this.initialized ||
                !this.httpRequestDuration ||
                !this.httpRequestTotal) {
                return;
            }
            try {
                this.httpRequestDuration
                    .labels(method, route, statusCode.toString())
                    .observe(duration);
                this.httpRequestTotal.labels(method, route, statusCode.toString()).inc();
            }
            catch (error) { }
        };
        MetricsService_1.prototype.incrementActiveConnections = function () {
            if (!this.initialized || !this.activeConnections) {
                return;
            }
            try {
                this.activeConnections.inc();
            }
            catch (error) { }
        };
        MetricsService_1.prototype.decrementActiveConnections = function () {
            if (!this.initialized || !this.activeConnections) {
                return;
            }
            try {
                this.activeConnections.dec();
            }
            catch (error) { }
        };
        MetricsService_1.prototype.recordRateLimitedRequest = function (method, route, group, keyType) {
            if (!this.initialized || !this.rateLimitedRequestsTotal) {
                return;
            }
            try {
                this.rateLimitedRequestsTotal.labels(method, route, group, keyType).inc();
            }
            catch (error) { }
        };
        MetricsService_1.prototype.recordIngestionLag = function (contractId, lagSeconds) {
            if (!this.initialized || !this.ingestionLagSeconds) {
                return;
            }
            try {
                this.ingestionLagSeconds.labels(contractId).set(lagSeconds);
            }
            catch (error) { }
        };
        MetricsService_1.prototype.recordWebhookRetry = function (eventType, status) {
            if (!this.initialized || !this.webhookRetryTotal) {
                return;
            }
            try {
                this.webhookRetryTotal.labels(eventType, status).inc();
            }
            catch (error) { }
        };
        MetricsService_1.prototype.recordWebhookDeliveryDuration = function (eventType, status, duration) {
            if (!this.initialized || !this.webhookDeliveryDuration) {
                return;
            }
            try {
                this.webhookDeliveryDuration.labels(eventType, status).observe(duration);
            }
            catch (error) { }
        };
        MetricsService_1.prototype.recordExternalCall = function (service, operation, duration) {
            if (!this.initialized || !this.externalCallDuration) {
                return;
            }
            try {
                this.externalCallDuration.labels(service, operation).observe(duration);
            }
            catch (error) { }
        };
        MetricsService_1.prototype.recordError = function (service, errorType) {
            if (!this.initialized || !this.errorRate) {
                return;
            }
            try {
                this.errorRate.labels(service, errorType).inc();
            }
            catch (error) { }
        };
        MetricsService_1.prototype.recordSorobanRpcFailover = function (fromEndpoint, toEndpoint, reason) {
            if (!this.initialized || !this.sorobanRpcFailoverTotal) {
                return;
            }
            try {
                this.sorobanRpcFailoverTotal
                    .labels(fromEndpoint, toEndpoint, reason)
                    .inc();
            }
            catch (error) { }
        };
        MetricsService_1.prototype.setSorobanRpcActiveEndpoint = function (endpoint, allEndpoints) {
            if (!this.initialized || !this.sorobanRpcActiveEndpoint) {
                return;
            }
            try {
                for (var _i = 0, allEndpoints_1 = allEndpoints; _i < allEndpoints_1.length; _i++) {
                    var url = allEndpoints_1[_i];
                    this.sorobanRpcActiveEndpoint.labels(url).set(url === endpoint ? 1 : 0);
                }
            }
            catch (error) { }
        };
        MetricsService_1.prototype.recordUnknownSchemaVersion = function (eventName, schemaVersion) {
            if (!this.initialized || !this.sorobanIndexerUnknownSchemaVersion)
                return;
            try {
                this.sorobanIndexerUnknownSchemaVersion
                    .labels(eventName, String(schemaVersion))
                    .inc();
            }
            catch (error) { }
        };
        MetricsService_1.prototype.recordParityCheckResult = function (checkType, passed, failed, warnings) {
            if (!this.initialized || !this.parityCheckResults)
                return;
            try {
                this.parityCheckResults.labels("pass").set(passed);
                this.parityCheckResults.labels("fail").set(failed);
                this.parityCheckResults.labels("warning").set(warnings);
            }
            catch (error) { }
        };
        MetricsService_1.prototype.recordShadowTrafficRequest = function (method, route, statusCode, shadowStatus) {
            if (!this.initialized || !this.shadowTrafficRequests)
                return;
            try {
                this.shadowTrafficRequests
                    .labels(method, route, statusCode.toString(), shadowStatus)
                    .inc();
            }
            catch (error) { }
        };
        MetricsService_1.prototype.recordIndexerLag = function (lagLedgers) {
            if (!this.initialized || !this.indexerLagLedgers)
                return;
            try {
                this.indexerLagLedgers.set(lagLedgers);
            }
            catch (error) { }
        };
        MetricsService_1.prototype.recordIndexerLagGuardBlockedRequest = function (method, route) {
            if (!this.initialized || !this.indexerLagGuardBlockedRequests)
                return;
            try {
                this.indexerLagGuardBlockedRequests.labels(method, route).inc();
            }
            catch (error) { }
        };
        MetricsService_1.prototype.setIndexerLagGuardStatus = function (status) {
            if (!this.initialized || !this.indexerLagGuardStatus)
                return;
            try {
                this.indexerLagGuardStatus.set(status);
            }
            catch (error) { }
        };
        return MetricsService_1;
    }());
    __setFunctionName(_classThis, "MetricsService");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        MetricsService = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return MetricsService = _classThis;
}();
exports.MetricsService = MetricsService;
