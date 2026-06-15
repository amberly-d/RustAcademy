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
exports.EnvironmentParityService = void 0;
var common_1 = require("@nestjs/common");
/**
 * EnvironmentParityService validates that staging environment configuration
 * matches production expectations to catch deployment issues early.
 *
 * This service performs checks on:
 * - Configuration parity (endpoints, versions, feature flags)
 * - Network connectivity
 * - Service dependencies
 *
 * All checks are non-blocking and logged for monitoring.
 */
var EnvironmentParityService = function () {
    var _classDecorators = [(0, common_1.Injectable)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var EnvironmentParityService = _classThis = /** @class */ (function () {
        function EnvironmentParityService_1(config, metricsService) {
            this.config = config;
            this.metricsService = metricsService;
            this.logger = new common_1.Logger(EnvironmentParityService.name);
            this.parityResults = [];
        }
        EnvironmentParityService_1.prototype.onModuleInit = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!this.config.envParityCheckEnabled) return [3 /*break*/, 2];
                            return [4 /*yield*/, this.runParityChecks()];
                        case 1:
                            _a.sent();
                            _a.label = 2;
                        case 2: return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * Run all environment parity checks
         */
        EnvironmentParityService_1.prototype.runParityChecks = function () {
            return __awaiter(this, void 0, void 0, function () {
                var passed, failed, warnings;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this.logger.log("Running environment parity checks...");
                            this.parityResults = [];
                            // Run checks in parallel where possible
                            return [4 /*yield*/, Promise.allSettled([
                                    this.checkEnvironmentName(),
                                    this.checkNetworkConfiguration(),
                                    this.checkProductionBaseUrl(),
                                    this.checkStellarConfiguration(),
                                    this.checkSupabaseConfiguration(),
                                    this.checkFeatureFlags(),
                                    this.checkVersionCompatibility(),
                                ])];
                        case 1:
                            // Run checks in parallel where possible
                            _a.sent();
                            passed = this.parityResults.filter(function (r) { return r.status === "pass"; }).length;
                            failed = this.parityResults.filter(function (r) { return r.status === "fail"; }).length;
                            warnings = this.parityResults.filter(function (r) { return r.status === "warning"; }).length;
                            this.logger.log("Environment parity checks complete: ".concat(passed, " passed, ").concat(failed, " failed, ").concat(warnings, " warnings"));
                            // Log failures and warnings
                            this.parityResults
                                .filter(function (r) { return r.status !== "pass"; })
                                .forEach(function (result) {
                                _this.logger.warn("[".concat(result.status.toUpperCase(), "] ").concat(result.check, ": ").concat(result.details));
                            });
                            // Record metrics
                            this.metricsService.recordParityCheckResult("total", passed, failed, warnings);
                            return [2 /*return*/, this.parityResults];
                    }
                });
            });
        };
        /**
         * Get current parity check results
         */
        EnvironmentParityService_1.prototype.getResults = function () {
            return this.parityResults;
        };
        /**
         * Check that environment name is properly set
         */
        EnvironmentParityService_1.prototype.checkEnvironmentName = function () {
            return __awaiter(this, void 0, void 0, function () {
                var envName;
                return __generator(this, function (_a) {
                    envName = this.config.environmentName;
                    if (!envName) {
                        this.parityResults.push({
                            check: "environment_name",
                            status: "warning",
                            details: "ENVIRONMENT_NAME not set - using NODE_ENV fallback",
                        });
                    }
                    else if (envName === "production" && this.config.isStaging) {
                        this.parityResults.push({
                            check: "environment_name",
                            status: "fail",
                            details: 'ENVIRONMENT_NAME is "production" but running in staging context',
                        });
                    }
                    else {
                        this.parityResults.push({
                            check: "environment_name",
                            status: "pass",
                            details: "Environment: ".concat(envName),
                        });
                    }
                    return [2 /*return*/];
                });
            });
        };
        /**
         * Check network configuration parity
         */
        EnvironmentParityService_1.prototype.checkNetworkConfiguration = function () {
            return __awaiter(this, void 0, void 0, function () {
                var network, stellarNetwork;
                return __generator(this, function (_a) {
                    network = this.config.network;
                    stellarNetwork = this.config.isProduction ? "mainnet" : "testnet";
                    if (network !== stellarNetwork) {
                        this.parityResults.push({
                            check: "network_configuration",
                            status: "fail",
                            details: "NETWORK (".concat(network, ") does not match expected for ").concat(this.config.environmentName || this.config.nodeEnv),
                        });
                    }
                    else {
                        this.parityResults.push({
                            check: "network_configuration",
                            status: "pass",
                            details: "Network: ".concat(network),
                        });
                    }
                    return [2 /*return*/];
                });
            });
        };
        /**
         * Check production base URL is configured for parity checks
         */
        EnvironmentParityService_1.prototype.checkProductionBaseUrl = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    if (!this.config.productionBaseUrl && this.config.isStaging) {
                        this.parityResults.push({
                            check: "production_base_url",
                            status: "warning",
                            details: "PRODUCTION_BASE_URL not set - cannot perform remote parity checks",
                        });
                    }
                    else if (this.config.productionBaseUrl) {
                        this.parityResults.push({
                            check: "production_base_url",
                            status: "pass",
                            details: "Production URL configured: ".concat(this.config.productionBaseUrl),
                        });
                    }
                    else {
                        this.parityResults.push({
                            check: "production_base_url",
                            status: "pass",
                            details: "Not required for this environment",
                        });
                    }
                    return [2 /*return*/];
                });
            });
        };
        /**
         * Check Stellar configuration
         */
        EnvironmentParityService_1.prototype.checkStellarConfiguration = function () {
            return __awaiter(this, void 0, void 0, function () {
                var checks, hasIssue;
                return __generator(this, function (_a) {
                    checks = [];
                    hasIssue = false;
                    if (!this.config.network) {
                        checks.push("NETWORK missing");
                        hasIssue = true;
                    }
                    if (this.config.isProduction && !this.config.stellarSecretKey) {
                        checks.push("STELLAR_SECRET_KEY missing in production");
                        hasIssue = true;
                    }
                    if (hasIssue) {
                        this.parityResults.push({
                            check: "stellar_configuration",
                            status: "fail",
                            details: checks.join(", "),
                        });
                    }
                    else {
                        this.parityResults.push({
                            check: "stellar_configuration",
                            status: "pass",
                            details: "Stellar configuration valid",
                        });
                    }
                    return [2 /*return*/];
                });
            });
        };
        /**
         * Check Supabase configuration
         */
        EnvironmentParityService_1.prototype.checkSupabaseConfiguration = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    if (!this.config.supabaseUrl || !this.config.supabaseAnonKey) {
                        this.parityResults.push({
                            check: "supabase_configuration",
                            status: "fail",
                            details: "Supabase configuration incomplete",
                        });
                    }
                    else {
                        this.parityResults.push({
                            check: "supabase_configuration",
                            status: "pass",
                            details: "Supabase configuration valid",
                        });
                    }
                    return [2 /*return*/];
                });
            });
        };
        /**
         * Check feature flags parity
         */
        EnvironmentParityService_1.prototype.checkFeatureFlags = function () {
            return __awaiter(this, void 0, void 0, function () {
                var bootstrapFlags;
                return __generator(this, function (_a) {
                    bootstrapFlags = this.config.featureFlagsBootstrapJson;
                    if (this.config.isStaging && !bootstrapFlags) {
                        this.parityResults.push({
                            check: "feature_flags",
                            status: "warning",
                            details: "No bootstrap feature flags configured for staging",
                        });
                    }
                    else {
                        this.parityResults.push({
                            check: "feature_flags",
                            status: "pass",
                            details: "Feature flags configured",
                        });
                    }
                    return [2 /*return*/];
                });
            });
        };
        /**
         * Check version compatibility
         */
        EnvironmentParityService_1.prototype.checkVersionCompatibility = function () {
            return __awaiter(this, void 0, void 0, function () {
                var packageVersion;
                return __generator(this, function (_a) {
                    packageVersion = process.env.npm_package_version || "unknown";
                    this.parityResults.push({
                        check: "version_compatibility",
                        status: "pass",
                        details: "Backend version: ".concat(packageVersion),
                    });
                    return [2 /*return*/];
                });
            });
        };
        return EnvironmentParityService_1;
    }());
    __setFunctionName(_classThis, "EnvironmentParityService");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        EnvironmentParityService = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return EnvironmentParityService = _classThis;
}();
exports.EnvironmentParityService = EnvironmentParityService;
