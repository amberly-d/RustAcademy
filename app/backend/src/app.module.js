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
exports.AppModule = void 0;
var common_1 = require("@nestjs/common");
var event_emitter_1 = require("@nestjs/event-emitter");
var throttler_1 = require("@nestjs/throttler");
var schedule_1 = require("@nestjs/schedule");
var core_1 = require("@nestjs/core");
var config_1 = require("./config");
var asset_metadata_module_1 = require("./asset-metadata/asset-metadata.module");
var health_module_1 = require("./health/health.module");
var stellar_module_1 = require("./stellar/stellar.module");
var supabase_module_1 = require("./supabase/supabase.module");
var usernames_module_1 = require("./usernames/usernames.module");
var metrics_module_1 = require("./metrics/metrics.module");
var analytics_module_1 = require("./analytics/analytics.module");
var links_module_1 = require("./links/links.module");
var scam_alerts_module_1 = require("./scam-alerts/scam-alerts.module");
var transactions_module_1 = require("./transactions/transactions.module");
var payments_module_1 = require("./payments/payments.module");
var reconciliation_module_1 = require("./reconciliation/reconciliation.module");
var metrics_middleware_1 = require("./metrics/metrics.middleware");
var metrics_interceptor_1 = require("./metrics/metrics.interceptor");
var correlation_id_middleware_1 = require("./common/middleware/correlation-id.middleware");
var organization_context_middleware_1 = require("./common/middleware/organization-context.middleware");
var shadow_traffic_middleware_1 = require("./environment-parity/shadow-traffic.middleware");
var notifications_module_1 = require("./notifications/notifications.module");
var ingestion_module_1 = require("./ingestion/ingestion.module");
var api_keys_module_1 = require("./api-keys/api-keys.module");
var marketplace_module_1 = require("./marketplace/marketplace.module");
var sentry_1 = require("./sentry");
var fiat_ramps_module_1 = require("./fiat-ramps/fiat-ramps.module");
var refunds_module_1 = require("./refunds/refunds.module");
var exports_module_1 = require("./exports/exports.module");
var job_queue_module_1 = require("./job-queue/job-queue.module");
var audit_module_1 = require("./audit/audit.module");
var feature_flags_module_1 = require("./feature-flags/feature-flags.module");
var developer_module_1 = require("./developer/developer.module");
var privacy_module_1 = require("./privacy/privacy.module");
var contracts_module_1 = require("./contracts/contracts.module");
var soroban_tooling_module_1 = require("./soroban-tooling/soroban-tooling.module");
var custom_throttler_guard_1 = require("./auth/guards/custom-throttler.guard");
var organization_role_guard_1 = require("./auth/guards/organization-role.guard");
var rate_limit_config_1 = require("./config/rate-limit.config");
var environment_parity_module_1 = require("./environment-parity/environment-parity.module");
var indexer_lag_1 = require("./indexer-lag");
var support_bundle_module_1 = require("./support-bundle/support-bundle.module");
var AppModule = function () {
    var _classDecorators = [(0, common_1.Module)({
            imports: (function () {
                var _a;
                var baseImports = [
                    sentry_1.SentryModule,
                    config_1.AppConfigModule,
                    // ScheduleModule registered once here — shared by NotificationsModule and ReconciliationModule
                    schedule_1.ScheduleModule.forRoot(),
                    event_emitter_1.EventEmitterModule.forRoot({
                        wildcard: true,
                        delimiter: ".",
                    }),
                    throttler_1.ThrottlerModule.forRoot(rate_limit_config_1.throttlerModuleProfiles),
                    supabase_module_1.SupabaseModule,
                    health_module_1.HealthModule,
                    asset_metadata_module_1.AssetMetadataModule,
                    stellar_module_1.StellarModule,
                    usernames_module_1.UsernamesModule,
                    metrics_module_1.MetricsModule,
                    analytics_module_1.AnalyticsModule,
                    links_module_1.LinksModule,
                    scam_alerts_module_1.ScamAlertsModule,
                    transactions_module_1.TransactionsModule,
                    payments_module_1.PaymentsModule,
                    ingestion_module_1.IngestionModule,
                    api_keys_module_1.ApiKeysModule,
                    marketplace_module_1.MarketplaceModule,
                    fiat_ramps_module_1.FiatRampsModule,
                    refunds_module_1.RefundsModule,
                    exports_module_1.ExportsModule,
                    job_queue_module_1.JobQueueModule,
                    audit_module_1.AuditModule,
                    contracts_module_1.ContractsModule,
                    feature_flags_module_1.FeatureFlagsModule,
                    privacy_module_1.PrivacyModule,
                    soroban_tooling_module_1.SorobanToolingModule,
                    environment_parity_module_1.EnvironmentParityModule,
                    indexer_lag_1.IndexerLagModule,
                    support_bundle_module_1.SupportBundleModule,
                ];
                // In development, if SUPABASE_URL points to a localhost placeholder (i.e. you don't
                // have a running Supabase instance), skip loading the Reconciliation module which
                // interacts with Supabase and runs scheduled jobs. This avoids noisy network errors
                // during local development and recording sessions.
                try {
                    var supabaseUrl = (_a = process.env.SUPABASE_URL) !== null && _a !== void 0 ? _a : "";
                    var isLocalSupabase = supabaseUrl.includes("localhost") || supabaseUrl.includes("127.0.0.1");
                    // Only load Reconciliation & Notifications modules when Supabase is real/reachable.
                    if (!isLocalSupabase) {
                        baseImports.push(reconciliation_module_1.ReconciliationModule);
                        baseImports.push(notifications_module_1.NotificationsModule);
                        baseImports.push(developer_module_1.DeveloperModule);
                    }
                    else {
                        // eslint-disable-next-line no-console
                        console.log("Skipping Reconciliation & Notifications modules in dev (local Supabase)");
                    }
                }
                catch (e) {
                    // If anything goes wrong, default to including the modules.
                    baseImports.push(reconciliation_module_1.ReconciliationModule);
                    baseImports.push(notifications_module_1.NotificationsModule);
                    baseImports.push(developer_module_1.DeveloperModule);
                }
                return baseImports;
            })(),
            providers: [
                {
                    provide: core_1.APP_GUARD,
                    useClass: custom_throttler_guard_1.CustomThrottlerGuard,
                },
                {
                    provide: core_1.APP_INTERCEPTOR,
                    useClass: metrics_interceptor_1.MetricsInterceptor,
                },
                {
                    provide: core_1.APP_GUARD,
                    useClass: organization_role_guard_1.OrganizationRoleGuard,
                },
            ],
        })];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var AppModule = _classThis = /** @class */ (function () {
        function AppModule_1() {
        }
        AppModule_1.prototype.configure = function (consumer) {
            consumer
                .apply(metrics_middleware_1.MetricsMiddleware, correlation_id_middleware_1.CorrelationIdMiddleware, organization_context_middleware_1.OrganizationContextMiddleware, shadow_traffic_middleware_1.ShadowTrafficMiddleware)
                .forRoutes("*");
        };
        return AppModule_1;
    }());
    __setFunctionName(_classThis, "AppModule");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        AppModule = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return AppModule = _classThis;
}();
exports.AppModule = AppModule;
