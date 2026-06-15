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
exports.AppConfigService = void 0;
var common_1 = require("@nestjs/common");
/**
 * Typed configuration service with centralized accessors for environment variables.
 * All environment variables are validated at startup via Joi schema.
 */
var AppConfigService = function () {
    var _classDecorators = [(0, common_1.Injectable)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var AppConfigService = _classThis = /** @class */ (function () {
        function AppConfigService_1(configService) {
            this.configService = configService;
        }
        Object.defineProperty(AppConfigService_1.prototype, "port", {
            /**
             * Get the server port
             */
            get: function () {
                return this.configService.get("PORT", { infer: true });
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AppConfigService_1.prototype, "network", {
            /**
             * Get the Stellar network (testnet or mainnet)
             */
            get: function () {
                return this.configService.get("NETWORK", { infer: true });
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AppConfigService_1.prototype, "supabaseUrl", {
            /**
             * Get the Supabase URL
             */
            get: function () {
                return this.configService.get("SUPABASE_URL", { infer: true });
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AppConfigService_1.prototype, "supabaseAnonKey", {
            /**
             * Get the Supabase anonymous key
             */
            get: function () {
                return this.configService.get("SUPABASE_ANON_KEY", { infer: true });
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AppConfigService_1.prototype, "nodeEnv", {
            /**
             * Get the Node environment
             */
            get: function () {
                return this.configService.get("NODE_ENV", { infer: true });
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AppConfigService_1.prototype, "isDevelopment", {
            /**
             * Check if running in development mode
             */
            get: function () {
                return this.nodeEnv === "development";
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AppConfigService_1.prototype, "isProduction", {
            /**
             * Check if running in production mode
             */
            get: function () {
                return this.nodeEnv === "production";
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AppConfigService_1.prototype, "environmentName", {
            /**
             * Get the explicit environment name
             */
            get: function () {
                return this.configService.get("ENVIRONMENT_NAME", { infer: true });
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AppConfigService_1.prototype, "isStaging", {
            /**
             * Check if running in staging environment
             */
            get: function () {
                return this.environmentName === "staging";
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AppConfigService_1.prototype, "envParityCheckEnabled", {
            /**
             * Environment parity check configuration
             */
            get: function () {
                return this.configService.get("ENV_PARITY_CHECK_ENABLED", { infer: true });
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AppConfigService_1.prototype, "productionBaseUrl", {
            /**
             * Production base URL for parity comparison
             */
            get: function () {
                return this.configService.get("PRODUCTION_BASE_URL", { infer: true });
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AppConfigService_1.prototype, "shadowTrafficEnabled", {
            /**
             * Shadow traffic configuration
             */
            get: function () {
                return this.configService.get("SHADOW_TRAFFIC_ENABLED", { infer: true });
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AppConfigService_1.prototype, "shadowTrafficSampleRate", {
            /**
             * Shadow traffic sample rate (0.0 to 1.0)
             */
            get: function () {
                return this.configService.get("SHADOW_TRAFFIC_SAMPLE_RATE", {
                    infer: true,
                });
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AppConfigService_1.prototype, "shadowTrafficEndpoints", {
            /**
             * Comma-separated list of endpoints to shadow
             */
            get: function () {
                return this.configService.get("SHADOW_TRAFFIC_ENDPOINTS", { infer: true });
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AppConfigService_1.prototype, "stagingSeedDataEnabled", {
            /**
             * Check if staging data seeding is enabled
             */
            get: function () {
                return this.configService.get("STAGING_SEED_DATA_ENABLED", { infer: true });
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AppConfigService_1.prototype, "corsAllowedOrigins", {
            /**
             * Parsed list of explicitly allowed CORS origins.
             * Sourced from the CORS_ALLOWED_ORIGINS env var (comma-separated).
             */
            get: function () {
                var raw = this.configService.get("CORS_ALLOWED_ORIGINS", { infer: true });
                return raw
                    ? raw
                        .split(",")
                        .map(function (o) { return o.trim(); })
                        .filter(Boolean)
                    : [];
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AppConfigService_1.prototype, "corsVercelProject", {
            /**
             * Vercel project slug used to allow preview deployment URLs.
             * When set, https://<slug>-*.vercel.app origins are permitted.
             */
            get: function () {
                return this.configService.get("CORS_VERCEL_PROJECT", { infer: true });
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AppConfigService_1.prototype, "isTestnet", {
            /**
             * Check if running on testnet
             */
            get: function () {
                return this.network === "testnet";
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AppConfigService_1.prototype, "isMainnet", {
            /**
             * Check if running on mainnet
             */
            get: function () {
                return this.network === "mainnet";
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AppConfigService_1.prototype, "maxUsernamesPerWallet", {
            /**
             * Max usernames per wallet (optional). When not set, returns undefined (no limit).
             */
            get: function () {
                return this.configService.get("MAX_USERNAMES_PER_WALLET", { infer: true });
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AppConfigService_1.prototype, "cacheMaxItems", {
            /**
             * Maximum number of items to cache for transactions
             */
            get: function () {
                return this.configService.get("CACHE_MAX_ITEMS", { infer: true });
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AppConfigService_1.prototype, "cacheTtlMs", {
            /**
             * Cache TTL in milliseconds for transaction responses
             */
            get: function () {
                return this.configService.get("CACHE_TTL_MS", { infer: true });
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AppConfigService_1.prototype, "featureFlagsCacheTtlMs", {
            get: function () {
                return this.configService.get("FEATURE_FLAGS_CACHE_TTL_MS", {
                    infer: true,
                });
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AppConfigService_1.prototype, "featureFlagsBootstrapJson", {
            get: function () {
                return this.configService.get("FEATURE_FLAGS_BOOTSTRAP_JSON", {
                    infer: true,
                });
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AppConfigService_1.prototype, "reconciliationBatchSize", {
            /**
             * Max records processed per entity type per reconciliation run
             */
            get: function () {
                return this.configService.get("RECONCILIATION_BATCH_SIZE", { infer: true });
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AppConfigService_1.prototype, "RustAcademyContractId", {
            /**
             *  RustAcademy Soroban contract id (optional). Used for ingestion and soroban preflight.
             */
            get: function () {
                return this.configService.get(" RustAcademy_CONTRACT_ID", { infer: true });
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AppConfigService_1.prototype, "sentryDsn", {
            /**
             * Sentry DSN for error reporting. Undefined means Sentry is disabled.
             */
            get: function () {
                return this.configService.get("SENTRY_DSN", { infer: true });
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AppConfigService_1.prototype, "supabaseServiceRoleKey", {
            /**
             * Supabase service role key (optional). Used for admin database operations.
             */
            get: function () {
                return this.configService.get("SUPABASE_SERVICE_ROLE_KEY", { infer: true });
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AppConfigService_1.prototype, "horizonUrl", {
            /**
             * Custom Horizon URL (optional). Overrides network default if provided.
             */
            get: function () {
                return this.configService.get("HORIZON_URL", { infer: true });
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AppConfigService_1.prototype, "sorobanRpcUrl", {
            get: function () {
                return this.configService.get("SOROBAN_RPC_URL", { infer: true });
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AppConfigService_1.prototype, "stellarExplorerUrl", {
            get: function () {
                return this.configService.get("STELLAR_EXPLORER_URL", { infer: true });
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AppConfigService_1.prototype, "stellarSecretKey", {
            /**
             * Stellar secret key (optional). Required for signing transactions.
             */
            get: function () {
                return this.configService.get("STELLAR_SECRET_KEY", { infer: true });
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AppConfigService_1.prototype, "stellarPublicKey", {
            /**
             * Stellar public key (optional). The public key corresponding to the secret key.
             */
            get: function () {
                return this.configService.get("STELLAR_PUBLIC_KEY", { infer: true });
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AppConfigService_1.prototype, "isPaymentSigningConfigured", {
            /**
             * Check if payment signing is configured (has secret key)
             */
            get: function () {
                return !!this.stellarSecretKey;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AppConfigService_1.prototype, "indexerLagThresholdLedgers", {
            /**
             * Indexer lag threshold in ledgers
             */
            get: function () {
                return this.configService.get("INDEXER_LAG_THRESHOLD_LEDGERS", {
                    infer: true,
                });
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AppConfigService_1.prototype, "indexerLagGuardEnabled", {
            /**
             * Whether the indexer lag guard is enabled
             */
            get: function () {
                return this.configService.get("INDEXER_LAG_GUARD_ENABLED", { infer: true });
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AppConfigService_1.prototype, "indexerLagGuardOverride", {
            /**
             * Admin override to disable lag guard temporarily
             */
            get: function () {
                return this.configService.get("INDEXER_LAG_GUARD_OVERRIDE", {
                    infer: true,
                });
            },
            enumerable: false,
            configurable: true
        });
        return AppConfigService_1;
    }());
    __setFunctionName(_classThis, "AppConfigService");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        AppConfigService = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return AppConfigService = _classThis;
}();
exports.AppConfigService = AppConfigService;
