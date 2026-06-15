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
exports.CrashReportingRepository = void 0;
var common_1 = require("@nestjs/common");
/**
 * Repository for crash reporting data persistence
 */
var CrashReportingRepository = function () {
    var _classDecorators = [(0, common_1.Injectable)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var CrashReportingRepository = _classThis = /** @class */ (function () {
        function CrashReportingRepository_1(supabase) {
            this.supabase = supabase;
            this.logger = new common_1.Logger(CrashReportingRepository.name);
        }
        /**
         * Create a new crash report
         * @param report - The crash report data (without id and createdAt)
         * @returns The created crash report ID
         */
        CrashReportingRepository_1.prototype.createCrashReport = function (report) {
            return __awaiter(this, void 0, void 0, function () {
                var _a, data, error;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, this.supabase.getClient()
                                .from('crash_reports')
                                .insert({
                                user_id: report.userId,
                                error: report.error,
                                context: report.context,
                                log_lines: report.logLines,
                                timestamp: report.timestamp.toISOString(),
                            })
                                .select('id')
                                .single()];
                        case 1:
                            _a = _b.sent(), data = _a.data, error = _a.error;
                            if (error) {
                                this.logger.error('Failed to create crash report', error);
                                throw new Error("Failed to create crash report: ".concat(error.message));
                            }
                            return [2 /*return*/, data.id];
                    }
                });
            });
        };
        /**
         * Get crash reports for a specific user
         * @param userId - The user ID
         * @param limit - Maximum number of reports to return
         * @returns Array of crash reports
         */
        CrashReportingRepository_1.prototype.getCrashReportsByUser = function (userId_1) {
            return __awaiter(this, arguments, void 0, function (userId, limit) {
                var _a, data, error;
                if (limit === void 0) { limit = 10; }
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, this.supabase.getClient()
                                .from('crash_reports')
                                .select('*')
                                .eq('user_id', userId)
                                .order('timestamp', { ascending: false })
                                .limit(limit)];
                        case 1:
                            _a = _b.sent(), data = _a.data, error = _a.error;
                            if (error) {
                                this.logger.error("Failed to get crash reports for user ".concat(userId), error);
                                throw new Error("Failed to get crash reports: ".concat(error.message));
                            }
                            return [2 /*return*/, (data || []).map(function (row) { return ({
                                    id: row.id,
                                    userId: row.user_id,
                                    error: row.error,
                                    context: row.context,
                                    logLines: row.log_lines,
                                    timestamp: new Date(row.timestamp),
                                    createdAt: new Date(row.created_at),
                                }); })];
                    }
                });
            });
        };
        /**
         * Get user's crash reporting settings
         * @param userId - The user ID
         * @returns The user's settings or null if not found
         */
        CrashReportingRepository_1.prototype.getUserSettings = function (userId) {
            return __awaiter(this, void 0, void 0, function () {
                var _a, data, error;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, this.supabase.getClient()
                                .from('crash_reporting_settings')
                                .select('*')
                                .eq('user_id', userId)
                                .single()];
                        case 1:
                            _a = _b.sent(), data = _a.data, error = _a.error;
                            if (error) {
                                // Not found is expected for users who haven't set preferences
                                if (error.code === 'PGRST116') {
                                    return [2 /*return*/, null];
                                }
                                this.logger.error("Failed to get settings for user ".concat(userId), error);
                                throw new Error("Failed to get user settings: ".concat(error.message));
                            }
                            return [2 /*return*/, {
                                    userId: data.user_id,
                                    crashReportingEnabled: data.crash_reporting_enabled,
                                    updatedAt: new Date(data.updated_at),
                                }];
                    }
                });
            });
        };
        /**
         * Update user's crash reporting settings
         * @param userId - The user ID
         * @param enabled - Whether crash reporting is enabled
         */
        CrashReportingRepository_1.prototype.updateUserSettings = function (userId, enabled) {
            return __awaiter(this, void 0, void 0, function () {
                var error;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.supabase.getClient()
                                .from('crash_reporting_settings')
                                .upsert({
                                user_id: userId,
                                crash_reporting_enabled: enabled,
                                updated_at: new Date().toISOString(),
                            })];
                        case 1:
                            error = (_a.sent()).error;
                            if (error) {
                                this.logger.error("Failed to update settings for user ".concat(userId), error);
                                throw new Error("Failed to update user settings: ".concat(error.message));
                            }
                            return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * Delete old crash reports (for cleanup/maintenance)
         * @param olderThanDays - Delete reports older than this many days
         * @returns Number of deleted reports
         */
        CrashReportingRepository_1.prototype.deleteOldReports = function (olderThanDays) {
            return __awaiter(this, void 0, void 0, function () {
                var cutoffDate, _a, data, error;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            cutoffDate = new Date();
                            cutoffDate.setDate(cutoffDate.getDate() - olderThanDays);
                            return [4 /*yield*/, this.supabase.getClient()
                                    .from('crash_reports')
                                    .delete()
                                    .lt('timestamp', cutoffDate.toISOString())
                                    .select('id')];
                        case 1:
                            _a = _b.sent(), data = _a.data, error = _a.error;
                            if (error) {
                                this.logger.error('Failed to delete old crash reports', error);
                                throw new Error("Failed to delete old reports: ".concat(error.message));
                            }
                            return [2 /*return*/, (data === null || data === void 0 ? void 0 : data.length) || 0];
                    }
                });
            });
        };
        return CrashReportingRepository_1;
    }());
    __setFunctionName(_classThis, "CrashReportingRepository");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        CrashReportingRepository = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return CrashReportingRepository = _classThis;
}();
exports.CrashReportingRepository = CrashReportingRepository;
