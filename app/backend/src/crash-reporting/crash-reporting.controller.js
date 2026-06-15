"use strict";
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
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
exports.CrashReportingController = void 0;
var common_1 = require("@nestjs/common");
var swagger_1 = require("@nestjs/swagger");
var crash_report_dto_1 = require("./dto/crash-report.dto");
var log_export_dto_1 = require("./dto/log-export.dto");
var settings_dto_1 = require("./dto/settings.dto");
/**
 * Controller for crash reporting and log export endpoints
 */
var CrashReportingController = function () {
    var _classDecorators = [(0, swagger_1.ApiTags)('crash-reporting'), (0, common_1.Controller)('crash-reporting')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _instanceExtraInitializers = [];
    var _getSettings_decorators;
    var _updateSettings_decorators;
    var _exportLogs_decorators;
    var _getCrashReports_decorators;
    var CrashReportingController = _classThis = /** @class */ (function () {
        function CrashReportingController_1(crashReportingService) {
            this.crashReportingService = (__runInitializers(this, _instanceExtraInitializers), crashReportingService);
        }
        /**
         * Get user's crash reporting settings
         */
        CrashReportingController_1.prototype.getSettings = function (userId) {
            return __awaiter(this, void 0, void 0, function () {
                var settings;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.crashReportingService.getUserSettings(userId)];
                        case 1:
                            settings = _a.sent();
                            if (!settings) {
                                // Return default settings if not found
                                return [2 /*return*/, {
                                        userId: userId,
                                        crashReportingEnabled: false,
                                        updatedAt: new Date(),
                                    }];
                            }
                            return [2 /*return*/, {
                                    userId: settings.userId,
                                    crashReportingEnabled: settings.crashReportingEnabled,
                                    updatedAt: settings.updatedAt,
                                }];
                    }
                });
            });
        };
        /**
         * Update user's crash reporting settings
         */
        CrashReportingController_1.prototype.updateSettings = function (userId, dto) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.crashReportingService.updateUserSettings(userId, dto.enabled)];
                        case 1:
                            _a.sent();
                            return [2 /*return*/, {
                                    message: "Crash reporting ".concat(dto.enabled ? 'enabled' : 'disabled', " successfully"),
                                }];
                    }
                });
            });
        };
        /**
         * Export logs for support (requires opt-in)
         */
        CrashReportingController_1.prototype.exportLogs = function (userId) {
            return __awaiter(this, void 0, void 0, function () {
                var logExport;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.crashReportingService.exportLogs(userId)];
                        case 1:
                            logExport = _a.sent();
                            if (!logExport) {
                                throw new common_1.NotFoundException('User has not opted in to crash reporting or logs are not available');
                            }
                            return [2 /*return*/, {
                                    userId: logExport.userId,
                                    exportedAt: logExport.exportedAt,
                                    currentLogs: logExport.currentLogs,
                                    crashReports: logExport.crashReports,
                                }];
                    }
                });
            });
        };
        /**
         * Get crash reports for a user
         */
        CrashReportingController_1.prototype.getCrashReports = function (userId) {
            return __awaiter(this, void 0, void 0, function () {
                var reports;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.crashReportingService.getCrashReports(userId)];
                        case 1:
                            reports = _a.sent();
                            return [2 /*return*/, reports.map(function (report) { return ({
                                    id: report.id,
                                    userId: report.userId,
                                    error: report.error,
                                    context: report.context,
                                    logLines: report.logLines,
                                    timestamp: report.timestamp,
                                    createdAt: report.createdAt,
                                }); })];
                    }
                });
            });
        };
        return CrashReportingController_1;
    }());
    __setFunctionName(_classThis, "CrashReportingController");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _getSettings_decorators = [(0, common_1.Get)('settings/:userId'), (0, swagger_1.ApiOperation)({ summary: 'Get crash reporting settings for a user' }), (0, swagger_1.ApiResponse)({
                status: 200,
                description: 'Settings retrieved successfully',
                type: settings_dto_1.SettingsDto,
            }), (0, swagger_1.ApiResponse)({ status: 404, description: 'Settings not found' })];
        _updateSettings_decorators = [(0, common_1.Put)('settings/:userId'), (0, common_1.HttpCode)(common_1.HttpStatus.OK), (0, swagger_1.ApiOperation)({ summary: 'Update crash reporting settings for a user' }), (0, swagger_1.ApiResponse)({ status: 200, description: 'Settings updated successfully' })];
        _exportLogs_decorators = [(0, common_1.Get)('export/:userId'), (0, swagger_1.ApiOperation)({ summary: 'Export logs for support' }), (0, swagger_1.ApiResponse)({
                status: 200,
                description: 'Logs exported successfully',
                type: log_export_dto_1.LogExportDto,
            }), (0, swagger_1.ApiResponse)({
                status: 404,
                description: 'User has not opted in to crash reporting',
            })];
        _getCrashReports_decorators = [(0, common_1.Get)('reports/:userId'), (0, swagger_1.ApiOperation)({ summary: 'Get crash reports for a user' }), (0, swagger_1.ApiResponse)({
                status: 200,
                description: 'Crash reports retrieved successfully',
                type: [crash_report_dto_1.CrashReportDto],
            })];
        __esDecorate(_classThis, null, _getSettings_decorators, { kind: "method", name: "getSettings", static: false, private: false, access: { has: function (obj) { return "getSettings" in obj; }, get: function (obj) { return obj.getSettings; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _updateSettings_decorators, { kind: "method", name: "updateSettings", static: false, private: false, access: { has: function (obj) { return "updateSettings" in obj; }, get: function (obj) { return obj.updateSettings; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _exportLogs_decorators, { kind: "method", name: "exportLogs", static: false, private: false, access: { has: function (obj) { return "exportLogs" in obj; }, get: function (obj) { return obj.exportLogs; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _getCrashReports_decorators, { kind: "method", name: "getCrashReports", static: false, private: false, access: { has: function (obj) { return "getCrashReports" in obj; }, get: function (obj) { return obj.getCrashReports; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        CrashReportingController = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return CrashReportingController = _classThis;
}();
exports.CrashReportingController = CrashReportingController;
