"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
// Sentry instrumentation MUST be imported before everything else
require("./sentry/instrument");
require("reflect-metadata");
// eslint-disable-next-line @typescript-eslint/no-unused-vars
var common_1 = require("@nestjs/common");
var core_1 = require("@nestjs/core"); //installed
var swagger_1 = require("@nestjs/swagger");
var helmet_1 = require("helmet");
var nest_winston_1 = require("nest-winston");
var winston_config_1 = require("./common/logging/winston.config");
var logging_interceptor_1 = require("./common/interceptors/logging.interceptor");
// ----------------------------------------
var cors_config_1 = require("./config/cors.config");
var config_1 = require("./config");
var app_module_1 = require("./app.module");
var network_config_1 = require("./config/network.config");
var global_http_exception_filter_1 = require("./common/filters/global-http-exception.filter");
var validation_error_mapper_1 = require("./common/utils/validation-error.mapper");
var sentry_1 = require("./sentry");
var metrics_service_1 = require("./metrics/metrics.service");
var redaction_util_1 = require("./common/utils/redaction.util");
/**
 * Validates critical configuration at startup.
 * Fails fast if required settings are missing.
 */
function validateCriticalConfig(config, logger) {
    var errors = [];
    // Database is required
    if (!config.supabaseUrl) {
        errors.push("SUPABASE_URL is required");
    }
    if (!config.supabaseAnonKey) {
        errors.push("SUPABASE_ANON_KEY is required");
    }
    // Network is required
    if (!config.network) {
        errors.push('NETWORK is required (must be "testnet" or "mainnet")');
    }
    try {
        (0, network_config_1.resolveNetworkSnapshot)();
    }
    catch (error) {
        errors.push("Network config invalid: ".concat(error.message));
    }
    // If there are critical errors, fail fast
    if (errors.length > 0) {
        var errorMessage = "Critical configuration errors:\n".concat(errors.map(function (e) { return "  - ".concat(e); }).join("\n"));
        logger.error(errorMessage);
        throw new Error((0, redaction_util_1.sanitizeErrorMessage)(errorMessage));
    }
    // Log warnings for optional but important configurations
    if (!config.isPaymentSigningConfigured) {
        logger.warn("STELLAR_SECRET_KEY not configured - payment signing disabled (read-only mode)");
    }
    logger.log("Critical configuration validated successfully");
}
function bootstrap() {
    return __awaiter(this, void 0, void 0, function () {
        var logger, app, configService, envSummary, networkSnapshot, sentryService, metricsService, swaggerConfig, document, port;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    logger = new common_1.Logger("Bootstrap");
                    return [4 /*yield*/, core_1.NestFactory.create(app_module_1.AppModule, {
                            logger: nest_winston_1.WinstonModule.createLogger(winston_config_1.winstonConfig),
                        })];
                case 1:
                    app = _a.sent();
                    configService = app.get(config_1.AppConfigService);
                    // Validate critical configuration at startup
                    validateCriticalConfig(configService, logger);
                    envSummary = (0, redaction_util_1.createConfigSummary)({
                        SUPABASE_URL: configService.supabaseUrl,
                        SUPABASE_ANON_KEY: configService.supabaseAnonKey,
                        NETWORK: configService.network,
                        HORIZON_URL: configService.horizonUrl,
                        SOROBAN_RPC_URL: configService.sorobanRpcUrl,
                        STELLAR_EXPLORER_URL: configService.stellarExplorerUrl,
                        STELLAR_SECRET_KEY: configService.stellarSecretKey,
                        STELLAR_PUBLIC_KEY: configService.stellarPublicKey,
                    });
                    logger.log(envSummary);
                    networkSnapshot = (0, network_config_1.resolveNetworkSnapshot)();
                    logger.log("Active network: ".concat(networkSnapshot.network, " (").concat(networkSnapshot.passphrase, "); horizon=").concat(networkSnapshot.horizonUrl, "; soroban=").concat(networkSnapshot.sorobanRpcUrl, "; explorer=").concat(networkSnapshot.explorerUrl));
                    // Use Helmet for security headers
                    app.use((0, helmet_1.default)());
                    app.enableCors((0, cors_config_1.buildCorsOptions)({
                        nodeEnv: configService.nodeEnv,
                        allowedOrigins: configService.corsAllowedOrigins,
                        vercelProject: configService.corsVercelProject,
                    }));
                    // Global validation pipe
                    app.useGlobalPipes(new common_1.ValidationPipe({
                        whitelist: true,
                        forbidNonWhitelisted: true,
                        transform: true,
                        exceptionFactory: function (errors) {
                            var mapped = (0, validation_error_mapper_1.mapValidationErrors)(errors);
                            return new common_1.BadRequestException({
                                code: "VALIDATION_ERROR",
                                message: mapped.message,
                                fields: mapped.fields,
                            });
                        },
                    }));
                    app.useGlobalInterceptors(new logging_interceptor_1.LoggingInterceptor());
                    sentryService = app.get(sentry_1.SentryService);
                    metricsService = app.get(metrics_service_1.MetricsService);
                    app.useGlobalFilters(new sentry_1.SentryExceptionFilter(sentryService, configService), new global_http_exception_filter_1.GlobalHttpExceptionFilter(configService, metricsService));
                    swaggerConfig = new swagger_1.DocumentBuilder()
                        .setTitle(" RustAcademy Backend")
                        .setDescription(" RustAcademy API documentation - A Stellar-based exchange platform. " +
                        "Currently connected to: ".concat(configService.network))
                        .setVersion("v1")
                        .addTag("health", "Health check endpoints")
                        .addTag("usernames", "Username management endpoints")
                        .addTag("links", "Payment link validation and metadata endpoints")
                        .addTag("transactions", "Stellar transaction and payment history")
                        .addTag("scam-alerts", "Fraud detection and link scanning")
                        .addTag("analytics", "Dashboard analytics, time-series insights, and report exports")
                        .addTag("metrics", "Application performance and health metrics")
                        .addTag("stellar", "Verified assets, path preview, Soroban preflight")
                        .addTag("contracts", "Contract registry publication and discovery")
                        .addTag("developer", "Developer self-service: ping, webhook testing, key management, health score")
                        .build();
                    document = swagger_1.SwaggerModule.createDocument(app, swaggerConfig);
                    swagger_1.SwaggerModule.setup("docs", app, document, {
                        swaggerOptions: {
                            persistAuthorization: true,
                        },
                    });
                    port = configService.port;
                    // Bind to 0.0.0.0 so devices on your LAN can access the dev server.
                    return [4 /*yield*/, app.listen(port, "0.0.0.0")];
                case 2:
                    // Bind to 0.0.0.0 so devices on your LAN can access the dev server.
                    _a.sent();
                    logger.log("Backend listening on http://0.0.0.0:".concat(port));
                    logger.log("Swagger docs available at http://localhost:".concat(port, "/docs"));
                    return [2 /*return*/];
            }
        });
    });
}
void bootstrap();
