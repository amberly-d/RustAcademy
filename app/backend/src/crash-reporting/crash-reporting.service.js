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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CrashReportingService = void 0;
var common_1 = require("@nestjs/common");
/**
 * Service for capturing crash reports and logs with strict redaction.
 * All captured data is redacted to remove secrets, keys, and PII.
 * Feature is opt-in and disabled by default.
 */
var CrashReportingService = function () {
    var _classDecorators = [(0, common_1.Injectable)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var CrashReportingService = _classThis = /** @class */ (function () {
        function CrashReportingService_1(redactionService, repository) {
            this.redactionService = redactionService;
            this.repository = repository;
            this.logger = new common_1.Logger(CrashReportingService.name);
            this.maxLogLines = 100; // Last N log lines to capture
            this.logBuffer = [];
        }
        /**
         * Capture a log line to the in-memory buffer
         * @param logLine - The log line to capture
         */
        CrashReportingService_1.prototype.captureLogLine = function (logLine) {
            // Keep only the last N lines
            if (this.logBuffer.length >= this.maxLogLines) {
                this.logBuffer.shift();
            }
            this.logBuffer.push(logLine);
        };
        /**
         * Capture a crash report with redacted logs
         * @param userId - The user ID (optional)
         * @param error - The error that caused the crash
         * @param context - Additional context about the crash
         * @returns The created crash report ID
         */
        CrashReportingService_1.prototype.captureCrash = function (userId, error, context) {
            return __awaiter(this, void 0, void 0, function () {
                var settings, redactedError, redactedContext, redactedLogs, crashReport, reportId, err_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 4, , 5]);
                            if (!userId) return [3 /*break*/, 2];
                            return [4 /*yield*/, this.repository.getUserSettings(userId)];
                        case 1:
                            settings = _a.sent();
                            if (!(settings === null || settings === void 0 ? void 0 : settings.crashReportingEnabled)) {
                                this.logger.debug("Crash reporting disabled for user ".concat(userId));
                                return [2 /*return*/, null];
                            }
                            _a.label = 2;
                        case 2:
                            redactedError = this.redactionService.redactError(error);
                            redactedContext = context
                                ? this.redactionService.redactObject(context)
                                : undefined;
                            redactedLogs = this.redactionService.redactLogLines(__spreadArray([], this.logBuffer, true));
                            crashReport = {
                                userId: userId,
                                error: redactedError,
                                context: redactedContext,
                                logLines: redactedLogs,
                                timestamp: new Date(),
                            };
                            return [4 /*yield*/, this.repository.createCrashReport(crashReport)];
                        case 3:
                            reportId = _a.sent();
                            this.logger.log("Crash report captured: ".concat(reportId));
                            return [2 /*return*/, reportId];
                        case 4:
                            err_1 = _a.sent();
                            // Don't let crash reporting itself crash the application
                            this.logger.error('Failed to capture crash report', err_1);
                            return [2 /*return*/, null];
                        case 5: return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * Get user's crash reporting settings
         * @param userId - The user ID
         * @returns The user's settings
         */
        CrashReportingService_1.prototype.getUserSettings = function (userId) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.repository.getUserSettings(userId)];
                });
            });
        };
        /**
         * Update user's crash reporting settings
         * @param userId - The user ID
         * @param enabled - Whether crash reporting is enabled
         */
        CrashReportingService_1.prototype.updateUserSettings = function (userId, enabled) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.repository.updateUserSettings(userId, enabled)];
                        case 1:
                            _a.sent();
                            this.logger.log("Crash reporting ".concat(enabled ? 'enabled' : 'disabled', " for user ").concat(userId));
                            return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * Export logs for support (only if user has opted in)
         * @param userId - The user ID
         * @returns The log export data
         */
        CrashReportingService_1.prototype.exportLogs = function (userId) {
            return __awaiter(this, void 0, void 0, function () {
                var settings, crashReports, redactedLogs, logExport, err_2;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 3, , 4]);
                            return [4 /*yield*/, this.repository.getUserSettings(userId)];
                        case 1:
                            settings = _a.sent();
                            if (!(settings === null || settings === void 0 ? void 0 : settings.crashReportingEnabled)) {
                                this.logger.warn("User ".concat(userId, " attempted to export logs but has not opted in"));
                                return [2 /*return*/, null];
                            }
                            return [4 /*yield*/, this.repository.getCrashReportsByUser(userId, 10)];
                        case 2:
                            crashReports = _a.sent();
                            redactedLogs = this.redactionService.redactLogLines(__spreadArray([], this.logBuffer, true));
                            logExport = {
                                userId: userId,
                                exportedAt: new Date(),
                                currentLogs: redactedLogs,
                                crashReports: crashReports.map(function (report) { return ({
                                    id: report.id,
                                    timestamp: report.timestamp,
                                    error: report.error,
                                    context: report.context,
                                    logLines: report.logLines,
                                }); }),
                            };
                            this.logger.log("Logs exported for user ".concat(userId));
                            return [2 /*return*/, logExport];
                        case 3:
                            err_2 = _a.sent();
                            this.logger.error("Failed to export logs for user ".concat(userId), err_2);
                            return [2 /*return*/, null];
                        case 4: return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * Get crash reports for a user
         * @param userId - The user ID
         * @param limit - Maximum number of reports to return
         * @returns Array of crash reports
         */
        CrashReportingService_1.prototype.getCrashReports = function (userId_1) {
            return __awaiter(this, arguments, void 0, function (userId, limit) {
                var settings;
                if (limit === void 0) { limit = 10; }
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.repository.getUserSettings(userId)];
                        case 1:
                            settings = _a.sent();
                            if (!(settings === null || settings === void 0 ? void 0 : settings.crashReportingEnabled)) {
                                return [2 /*return*/, []];
                            }
                            return [2 /*return*/, this.repository.getCrashReportsByUser(userId, limit)];
                    }
                });
            });
        };
        /**
         * Clear the log buffer (useful for testing)
         */
        CrashReportingService_1.prototype.clearLogBuffer = function () {
            this.logBuffer = [];
        };
        /**
         * Get the current log buffer size
         */
        CrashReportingService_1.prototype.getLogBufferSize = function () {
            return this.logBuffer.length;
        };
        return CrashReportingService_1;
    }());
    __setFunctionName(_classThis, "CrashReportingService");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        CrashReportingService = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return CrashReportingService = _classThis;
}();
exports.CrashReportingService = CrashReportingService;
