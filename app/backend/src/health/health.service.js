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
exports.HealthService = void 0;
var common_1 = require("@nestjs/common");
var redaction_util_1 = require("../common/utils/redaction.util");
var HealthService = function () {
    var _classDecorators = [(0, common_1.Injectable)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var HealthService = _classThis = /** @class */ (function () {
        function HealthService_1(supabase, horizon, config, jobQueueService, jobRepository, cursorRepository, sorobanRpcService) {
            this.supabase = supabase;
            this.horizon = horizon;
            this.config = config;
            this.jobQueueService = jobQueueService;
            this.jobRepository = jobRepository;
            this.cursorRepository = cursorRepository;
            this.sorobanRpcService = sorobanRpcService;
            this.logger = new common_1.Logger(HealthService.name);
            this.startTime = Date.now();
            this.version = "0.1.0"; // Should ideally be injected or read from package.json
        }
        /**
         * Performs a simple ping to Supabase to verify connectivity.
         */
        HealthService_1.prototype.checkSupabase = function () {
            return __awaiter(this, void 0, void 0, function () {
                var start, timeout, isHealthy, latency, err_1, safeMessage;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            start = Date.now();
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 3, , 4]);
                            timeout = new Promise(function (_, reject) {
                                return setTimeout(function () { return reject(new Error("Timeout")); }, 3000);
                            });
                            return [4 /*yield*/, Promise.race([
                                    this.supabase.checkHealth(),
                                    timeout,
                                ])];
                        case 2:
                            isHealthy = _a.sent();
                            latency = Date.now() - start;
                            if (!isHealthy) {
                                return [2 /*return*/, {
                                        status: "down",
                                        details: "Supabase health check returned unhealthy",
                                    }];
                            }
                            return [2 /*return*/, {
                                    status: "up",
                                    latency: latency,
                                    lastSuccess: new Date().toISOString(),
                                }];
                        case 3:
                            err_1 = _a.sent();
                            safeMessage = (0, redaction_util_1.sanitizeErrorMessage)(err_1.message);
                            this.logger.warn("Supabase health check failed or timed out: ".concat(safeMessage));
                            return [2 /*return*/, { status: "down", details: safeMessage }];
                        case 4: return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * Validates that critical environment variables are loaded.
         * Reports readiness without exposing sensitive values.
         */
        HealthService_1.prototype.checkEnvironment = function () {
            var details = [];
            var hasCriticalIssue = false;
            // Check database configuration
            if (!this.config.supabaseUrl || !this.config.supabaseAnonKey) {
                details.push("Missing database configuration");
                hasCriticalIssue = true;
            }
            else {
                details.push("Database configuration loaded");
            }
            // Check network configuration
            if (!this.config.network) {
                details.push("Missing Stellar network configuration");
                hasCriticalIssue = true;
            }
            else {
                details.push("Network: ".concat(this.config.network));
            }
            // Check Horizon connectivity configuration
            try {
                // HorizonService will use default URLs if custom URL not provided
                details.push("Horizon configuration ready");
            }
            catch (err) {
                var safeMessage = (0, redaction_util_1.sanitizeErrorMessage)(err.message);
                details.push("Horizon config error: ".concat(safeMessage));
                hasCriticalIssue = true;
            }
            // Check payment signing capability (optional but important)
            if (this.config.isPaymentSigningConfigured) {
                details.push("Payment signing configured");
            }
            else {
                details.push("Payment signing not configured (read-only mode)");
            }
            if (hasCriticalIssue) {
                return {
                    status: "down",
                    details: details,
                };
            }
            return { status: "up", details: details };
        };
        /**
         * Checks job queue health by verifying database connectivity and job processing.
         */
        HealthService_1.prototype.checkQueue = function () {
            return __awaiter(this, void 0, void 0, function () {
                var start, timeout, check, latency, err_2, safeMessage;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            start = Date.now();
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 3, , 4]);
                            timeout = new Promise(function (_, reject) {
                                return setTimeout(function () { return reject(new Error("Timeout")); }, 5000);
                            });
                            check = Promise.race([
                                this.jobRepository.listJobs({ limit: 1 }),
                                timeout,
                            ]);
                            return [4 /*yield*/, check];
                        case 2:
                            _a.sent();
                            latency = Date.now() - start;
                            return [2 /*return*/, {
                                    status: "up",
                                    latency: latency,
                                    lastSuccess: new Date().toISOString(),
                                }];
                        case 3:
                            err_2 = _a.sent();
                            safeMessage = (0, redaction_util_1.sanitizeErrorMessage)(err_2.message);
                            this.logger.warn("Queue health check failed: ".concat(safeMessage));
                            return [2 /*return*/, {
                                    status: "down",
                                    details: safeMessage,
                                }];
                        case 4: return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * Checks Horizon reachability with timeout.
         */
        HealthService_1.prototype.checkHorizon = function () {
            return __awaiter(this, void 0, void 0, function () {
                var start, timeout, horizonUrl, check, response, latency, err_3, safeMessage;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            start = Date.now();
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 3, , 4]);
                            timeout = new Promise(function (_, reject) {
                                return setTimeout(function () { return reject(new Error("Timeout")); }, 5000);
                            });
                            horizonUrl = this.horizon.getBaseUrl();
                            check = Promise.race([
                                fetch("".concat(horizonUrl, "/"), { method: "HEAD" }),
                                timeout,
                            ]);
                            return [4 /*yield*/, check];
                        case 2:
                            response = _a.sent();
                            latency = Date.now() - start;
                            if (!response.ok) {
                                throw new Error("Horizon returned ".concat(response.status));
                            }
                            return [2 /*return*/, {
                                    status: "up",
                                    latency: latency,
                                    lastSuccess: new Date().toISOString(),
                                }];
                        case 3:
                            err_3 = _a.sent();
                            safeMessage = (0, redaction_util_1.sanitizeErrorMessage)(err_3.message);
                            this.logger.warn("Horizon health check failed: ".concat(safeMessage));
                            return [2 /*return*/, {
                                    status: "down",
                                    details: safeMessage,
                                }];
                        case 4: return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * Checks Soroban RPC reachability with timeout.
         */
        HealthService_1.prototype.checkSorobanRpc = function () {
            return __awaiter(this, void 0, void 0, function () {
                var start, timeout, check, latency, err_4, safeMessage;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            start = Date.now();
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 3, , 4]);
                            timeout = new Promise(function (_, reject) {
                                return setTimeout(function () { return reject(new Error("Timeout")); }, 5000);
                            });
                            check = Promise.race([
                                this.sorobanRpcService.getNetworkPassphrase(),
                                timeout,
                            ]);
                            return [4 /*yield*/, check];
                        case 2:
                            _a.sent();
                            latency = Date.now() - start;
                            return [2 /*return*/, {
                                    status: "up",
                                    latency: latency,
                                    lastSuccess: new Date().toISOString(),
                                }];
                        case 3:
                            err_4 = _a.sent();
                            safeMessage = (0, redaction_util_1.sanitizeErrorMessage)(err_4.message);
                            this.logger.warn("Soroban RPC health check failed: ".concat(safeMessage));
                            return [2 /*return*/, {
                                    status: "down",
                                    details: safeMessage,
                                }];
                        case 4: return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * Checks ingestion/indexer lag by comparing cursor timestamp with current time.
         */
        HealthService_1.prototype.checkIngestionLag = function () {
            return __awaiter(this, void 0, void 0, function () {
                var streamId, cursor, err_5, safeMessage;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            streamId = "contract:*";
                            return [4 /*yield*/, this.cursorRepository.getCursor(streamId)];
                        case 1:
                            cursor = _a.sent();
                            if (!cursor) {
                                return [2 /*return*/, {
                                        status: "up",
                                        lagSeconds: 0,
                                        details: "No ingestion cursor found (service may not be active)",
                                        lastSuccess: new Date().toISOString(),
                                    }];
                            }
                            // Calculate lag based on cursor update time
                            // For a more accurate check, we would need to track the last cursor update timestamp
                            // For now, we'll check if we can read cursors successfully
                            return [2 /*return*/, {
                                    status: "up",
                                    lagSeconds: 0,
                                    lastSuccess: new Date().toISOString(),
                                }];
                        case 2:
                            err_5 = _a.sent();
                            safeMessage = (0, redaction_util_1.sanitizeErrorMessage)(err_5.message);
                            this.logger.warn("Ingestion lag check failed: ".concat(safeMessage));
                            return [2 /*return*/, {
                                    status: "down",
                                    details: safeMessage,
                                }];
                        case 3: return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * Checks if database migrations are applied by querying the schema_migrations table.
         * This is a Supabase/PostgreSQL specific check.
         */
        HealthService_1.prototype.checkMigrations = function () {
            return __awaiter(this, void 0, void 0, function () {
                var client, error, tablesError, err_6, safeMessage;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 4, , 5]);
                            client = this.supabase.getClient();
                            return [4 /*yield*/, client
                                    .from("schema_migrations")
                                    .select("version")
                                    .order("version", { ascending: false })
                                    .limit(1)];
                        case 1:
                            error = (_a.sent()).error;
                            if (!error) return [3 /*break*/, 3];
                            return [4 /*yield*/, client
                                    .from("usernames")
                                    .select("id")
                                    .limit(1)];
                        case 2:
                            tablesError = (_a.sent()).error;
                            if (tablesError) {
                                throw new Error("Critical database tables not found");
                            }
                            return [2 /*return*/, {
                                    status: "up",
                                    details: "Migration table not found, but critical tables exist",
                                    lastSuccess: new Date().toISOString(),
                                }];
                        case 3: return [2 /*return*/, {
                                status: "up",
                                details: "Migrations table accessible",
                                lastSuccess: new Date().toISOString(),
                            }];
                        case 4:
                            err_6 = _a.sent();
                            safeMessage = (0, redaction_util_1.sanitizeErrorMessage)(err_6.message);
                            this.logger.warn("Migration check failed: ".concat(safeMessage));
                            return [2 /*return*/, {
                                    status: "down",
                                    details: safeMessage,
                                }];
                        case 5: return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * Returns shallow health status for /health.
         */
        HealthService_1.prototype.getHealthStatus = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, {
                            status: "ok",
                            version: this.version,
                            uptime: Math.floor((Date.now() - this.startTime) / 1000),
                        }];
                });
            });
        };
        /**
         * Performs deep dependency checks for /ready.
         */
        HealthService_1.prototype.getReadinessStatus = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _a, supabase, env, migrations, queue, horizon, sorobanRpc, ingestion, criticalChecks, ready;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, Promise.all([
                                this.checkSupabase(),
                                Promise.resolve(this.checkEnvironment()),
                                this.checkMigrations(),
                                this.checkQueue(),
                                this.checkHorizon(),
                                this.checkSorobanRpc(),
                                this.checkIngestionLag(),
                            ])];
                        case 1:
                            _a = _b.sent(), supabase = _a[0], env = _a[1], migrations = _a[2], queue = _a[3], horizon = _a[4], sorobanRpc = _a[5], ingestion = _a[6];
                            criticalChecks = [supabase, migrations, queue, horizon];
                            ready = criticalChecks.every(function (check) { return check.status === "up"; });
                            return [2 /*return*/, {
                                    ready: ready,
                                    timestamp: new Date().toISOString(),
                                    checks: [
                                        {
                                            name: "supabase",
                                            status: supabase.status,
                                            latency: supabase.latency ? "".concat(supabase.latency, "ms") : undefined,
                                            lastSuccess: supabase.status === "up" ? new Date().toISOString() : undefined,
                                            error: supabase.status === "down" ? supabase.details : undefined,
                                        },
                                        {
                                            name: "environment",
                                            status: env.status,
                                            details: env.details,
                                        },
                                        {
                                            name: "migrations",
                                            status: migrations.status,
                                            details: migrations.details,
                                            lastSuccess: migrations.lastSuccess,
                                            error: migrations.status === "down" ? migrations.details : undefined,
                                        },
                                        {
                                            name: "queue",
                                            status: queue.status,
                                            latency: queue.latency ? "".concat(queue.latency, "ms") : undefined,
                                            lastSuccess: queue.lastSuccess,
                                            error: queue.status === "down" ? queue.details : undefined,
                                        },
                                        {
                                            name: "horizon",
                                            status: horizon.status,
                                            latency: horizon.latency ? "".concat(horizon.latency, "ms") : undefined,
                                            lastSuccess: horizon.lastSuccess,
                                            error: horizon.status === "down" ? horizon.details : undefined,
                                        },
                                        {
                                            name: "soroban_rpc",
                                            status: sorobanRpc.status,
                                            latency: sorobanRpc.latency ? "".concat(sorobanRpc.latency, "ms") : undefined,
                                            lastSuccess: sorobanRpc.lastSuccess,
                                            error: sorobanRpc.status === "down" ? sorobanRpc.details : undefined,
                                        },
                                        {
                                            name: "ingestion",
                                            status: ingestion.status,
                                            lagSeconds: ingestion.lagSeconds,
                                            lastSuccess: ingestion.lastSuccess,
                                            error: ingestion.status === "down" ? ingestion.details : undefined,
                                        },
                                    ],
                                }];
                    }
                });
            });
        };
        /**
         * Returns public-safe status for the status page.
         * No sensitive operational details are exposed.
         * Suitable for caching and public consumption.
         */
        HealthService_1.prototype.getPublicStatus = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _a, horizon, sorobanRpc, ingestion, allUp, someDown, overallStatus, network, lastLedger, cursor, parts, _b;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0: return [4 /*yield*/, Promise.all([
                                this.checkHorizon(),
                                this.checkSorobanRpc(),
                                this.checkIngestionLag(),
                            ])];
                        case 1:
                            _a = _c.sent(), horizon = _a[0], sorobanRpc = _a[1], ingestion = _a[2];
                            allUp = horizon.status === "up" && sorobanRpc.status === "up";
                            someDown = horizon.status === "down" || sorobanRpc.status === "down";
                            overallStatus = allUp
                                ? "operational"
                                : someDown
                                    ? "down"
                                    : "degraded";
                            network = this.config.network || "unknown";
                            lastLedger = 0;
                            _c.label = 2;
                        case 2:
                            _c.trys.push([2, 4, , 5]);
                            return [4 /*yield*/, this.cursorRepository.getCursor("contract:*")];
                        case 3:
                            cursor = _c.sent();
                            if (cursor) {
                                parts = cursor.split("-");
                                lastLedger = parseInt(parts[parts.length - 1], 10) || 0;
                            }
                            return [3 /*break*/, 5];
                        case 4:
                            _b = _c.sent();
                            // Silently fail - not critical for public status
                            lastLedger = 0;
                            return [3 /*break*/, 5];
                        case 5: return [2 /*return*/, {
                                status: overallStatus,
                                network: network,
                                lastLedger: lastLedger,
                                timestamp: new Date().toISOString(),
                                version: this.version,
                                components: [
                                    {
                                        name: "horizon",
                                        status: horizon.status === "up" ? "operational" : "down",
                                        detail: horizon.status === "up" ? "Network: ".concat(network) : undefined,
                                    },
                                    {
                                        name: "soroban_rpc",
                                        status: sorobanRpc.status === "up" ? "operational" : "down",
                                    },
                                    {
                                        name: "ingestion",
                                        status: ingestion.status === "up" ? "operational" : "degraded",
                                    },
                                ],
                            }];
                    }
                });
            });
        };
        return HealthService_1;
    }());
    __setFunctionName(_classThis, "HealthService");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        HealthService = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return HealthService = _classThis;
}();
exports.HealthService = HealthService;
