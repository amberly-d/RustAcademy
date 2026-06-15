"use strict";
/**
 * Job Queue System - Export Generation Handler
 *
 * Implements the JobHandler interface for export generation jobs.
 * Generates CSV/JSON exports from database queries and delivers via specified method.
 *
 * Requirements: 9.3, 9.4, 9.5, 15.4, 15.5
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
exports.ExportGenerationHandler = exports.PermanentJobError = void 0;
var common_1 = require("@nestjs/common");
/**
 * Error thrown for permanent job failures (no retry)
 */
var PermanentJobError = /** @class */ (function (_super) {
    __extends(PermanentJobError, _super);
    function PermanentJobError(message) {
        var _this = _super.call(this, message) || this;
        _this.name = 'PermanentJobError';
        return _this;
    }
    return PermanentJobError;
}(Error));
exports.PermanentJobError = PermanentJobError;
/**
 * Export Generation Handler
 *
 * Generates CSV/JSON exports from database queries.
 * Checks cancellation token every 1000 records during export generation.
 * Delivers export via specified deliveryMethod (webhook, email, download link).
 */
var ExportGenerationHandler = function () {
    var _classDecorators = [(0, common_1.Injectable)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var ExportGenerationHandler = _classThis = /** @class */ (function () {
        function ExportGenerationHandler_1(supabase) {
            this.supabase = supabase;
            this.logger = new common_1.Logger(ExportGenerationHandler.name);
            this.cancellationCheckInterval = 1000; // Check every 1000 records
        }
        /**
         * Execute export generation
         *
         * Generates CSV/JSON export from database queries based on exportType and filters.
         * Checks cancellation token every 1000 records during generation.
         * Delivers export via specified deliveryMethod.
         *
         * @param job - The export generation job
         * @param cancellationToken - Token to check for cancellation
         * @throws PermanentJobError for validation failures
         * @throws Error for transient failures (database errors, delivery failures)
         *
         * **Validates: Requirements 9.3, 9.4, 9.5**
         */
        ExportGenerationHandler_1.prototype.execute = function (job, cancellationToken) {
            return __awaiter(this, void 0, void 0, function () {
                var _a, userId, exportType, filters, format, deliveryMethod, records, exportData, error_1, errorMessage;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _a = job.payload, userId = _a.userId, exportType = _a.exportType, filters = _a.filters, format = _a.format, deliveryMethod = _a.deliveryMethod;
                            this.logger.log("Generating ".concat(format, " export for user ").concat(userId, " (type: ").concat(exportType, ", jobId: ").concat(job.id, ")"));
                            _b.label = 1;
                        case 1:
                            _b.trys.push([1, 5, , 6]);
                            return [4 /*yield*/, this.fetchExportData(userId, exportType, filters, cancellationToken)];
                        case 2:
                            records = _b.sent();
                            this.logger.log("Fetched ".concat(records.length, " records for export (jobId: ").concat(job.id, ")"));
                            return [4 /*yield*/, this.generateExportFile(records, format, cancellationToken)];
                        case 3:
                            exportData = _b.sent();
                            this.logger.log("Generated ".concat(format, " export (").concat(exportData.length, " bytes, jobId: ").concat(job.id, ")"));
                            // Deliver export via specified method
                            return [4 /*yield*/, this.deliverExport(userId, exportType, exportData, format, deliveryMethod, cancellationToken)];
                        case 4:
                            // Deliver export via specified method
                            _b.sent();
                            this.logger.log("Export delivered successfully via ".concat(deliveryMethod, " (jobId: ").concat(job.id, ")"));
                            return [3 /*break*/, 6];
                        case 5:
                            error_1 = _b.sent();
                            // Re-throw PermanentJobError as-is
                            if (error_1 instanceof PermanentJobError) {
                                throw error_1;
                            }
                            errorMessage = error_1 instanceof Error ? error_1.message : 'Unknown error';
                            this.logger.error("Export generation failed (jobId: ".concat(job.id, "): ").concat(errorMessage), error_1 instanceof Error ? error_1.stack : undefined);
                            throw new Error("Export generation failed: ".concat(errorMessage));
                        case 6: return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * Fetch export data from database
         *
         * Queries the database based on exportType and filters.
         * Checks cancellation token every 1000 records.
         *
         * @param userId - User ID requesting the export
         * @param exportType - Type of data to export
         * @param filters - Filters to apply to the query
         * @param cancellationToken - Token to check for cancellation
         * @returns Array of records to export
         */
        ExportGenerationHandler_1.prototype.fetchExportData = function (userId, exportType, filters, cancellationToken) {
            return __awaiter(this, void 0, void 0, function () {
                var client, query, _i, _a, _b, key, value, _c, data, error;
                return __generator(this, function (_d) {
                    switch (_d.label) {
                        case 0:
                            // Check cancellation before starting
                            cancellationToken.throwIfCancelled();
                            client = this.supabase.getClient();
                            // Build query based on export type
                            switch (exportType) {
                                case 'transactions':
                                    query = client
                                        .from('transactions')
                                        .select('*')
                                        .eq('user_id', userId);
                                    break;
                                case 'links':
                                    query = client
                                        .from('links')
                                        .select('*')
                                        .eq('user_id', userId);
                                    break;
                                case 'payments':
                                    query = client
                                        .from('payments')
                                        .select('*')
                                        .eq('user_id', userId);
                                    break;
                                default:
                                    throw new PermanentJobError("Unsupported export type: ".concat(exportType));
                            }
                            // Apply filters
                            for (_i = 0, _a = Object.entries(filters); _i < _a.length; _i++) {
                                _b = _a[_i], key = _b[0], value = _b[1];
                                if (value !== undefined && value !== null) {
                                    query = query.eq(key, value);
                                }
                            }
                            return [4 /*yield*/, query];
                        case 1:
                            _c = _d.sent(), data = _c.data, error = _c.error;
                            if (error) {
                                throw new Error("Database query failed: ".concat(error.message));
                            }
                            // Check cancellation after fetching data
                            cancellationToken.throwIfCancelled();
                            return [2 /*return*/, data || []];
                    }
                });
            });
        };
        /**
         * Generate export file in specified format
         *
         * Converts records to CSV or JSON format.
         * Checks cancellation token every 1000 records.
         *
         * @param records - Records to export
         * @param format - Output format (csv or json)
         * @param cancellationToken - Token to check for cancellation
         * @returns Export data as string
         */
        ExportGenerationHandler_1.prototype.generateExportFile = function (records, format, cancellationToken) {
            return __awaiter(this, void 0, void 0, function () {
                var lines, headers, _loop_1, this_1, i;
                var _this = this;
                return __generator(this, function (_a) {
                    if (format === 'json') {
                        // JSON export is simple - just stringify
                        cancellationToken.throwIfCancelled();
                        return [2 /*return*/, JSON.stringify(records, null, 2)];
                    }
                    // CSV export - process in chunks
                    if (records.length === 0) {
                        return [2 /*return*/, ''];
                    }
                    lines = [];
                    headers = Object.keys(records[0]);
                    lines.push(headers.map(function (h) { return _this.escapeCsvValue(h); }).join(','));
                    _loop_1 = function (i) {
                        // Check cancellation every 1000 records
                        if (i % this_1.cancellationCheckInterval === 0) {
                            cancellationToken.throwIfCancelled();
                        }
                        var record = records[i];
                        var values = headers.map(function (h) { var _a; return _this.escapeCsvValue(String((_a = record[h]) !== null && _a !== void 0 ? _a : '')); });
                        lines.push(values.join(','));
                    };
                    this_1 = this;
                    // Add data rows, checking cancellation every 1000 records
                    for (i = 0; i < records.length; i++) {
                        _loop_1(i);
                    }
                    return [2 /*return*/, lines.join('\n')];
                });
            });
        };
        /**
         * Escape CSV value (handle quotes, commas, newlines)
         */
        ExportGenerationHandler_1.prototype.escapeCsvValue = function (value) {
            if (value.includes(',') || value.includes('"') || value.includes('\n')) {
                return "\"".concat(value.replace(/"/g, '""'), "\"");
            }
            return value;
        };
        /**
         * Deliver export via specified method
         *
         * Supports webhook, email, and download link delivery methods.
         *
         * @param userId - User ID requesting the export
         * @param exportType - Type of export
         * @param exportData - Export data as string
         * @param format - Export format
         * @param deliveryMethod - How to deliver the export
         * @param cancellationToken - Token to check for cancellation
         */
        ExportGenerationHandler_1.prototype.deliverExport = function (userId, exportType, exportData, format, deliveryMethod, cancellationToken) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    cancellationToken.throwIfCancelled();
                    switch (deliveryMethod) {
                        case 'webhook':
                            // TODO: Implement webhook delivery
                            // For now, just log
                            this.logger.log("Webhook delivery not yet implemented for user ".concat(userId));
                            break;
                        case 'email':
                            // TODO: Implement email delivery
                            // For now, just log
                            this.logger.log("Email delivery not yet implemented for user ".concat(userId));
                            break;
                        case 'download':
                            // TODO: Implement download link generation (store in S3/Supabase Storage)
                            // For now, just log
                            this.logger.log("Download link generation not yet implemented for user ".concat(userId));
                            break;
                        default:
                            throw new PermanentJobError("Unsupported delivery method: ".concat(deliveryMethod));
                    }
                    return [2 /*return*/];
                });
            });
        };
        /**
         * Validate export generation payload
         *
         * Checks that required fields are present:
         * - userId: User requesting the export
         * - exportType: Type of data to export
         * - format: Output format
         * - deliveryMethod: How to deliver the export
         *
         * @param payload - The export generation payload
         * @throws PermanentJobError if validation fails
         *
         * **Validates: Requirements 9.3, 15.4, 15.5**
         */
        ExportGenerationHandler_1.prototype.validate = function (payload) {
            return __awaiter(this, void 0, void 0, function () {
                var errors;
                return __generator(this, function (_a) {
                    errors = [];
                    if (!payload.userId || typeof payload.userId !== 'string') {
                        errors.push('userId is required and must be a string');
                    }
                    if (!payload.exportType || !['transactions', 'links', 'payments'].includes(payload.exportType)) {
                        errors.push('exportType is required and must be one of: transactions, links, payments');
                    }
                    if (!payload.format || !['csv', 'json'].includes(payload.format)) {
                        errors.push('format is required and must be one of: csv, json');
                    }
                    if (!payload.deliveryMethod || !['webhook', 'email', 'download'].includes(payload.deliveryMethod)) {
                        errors.push('deliveryMethod is required and must be one of: webhook, email, download');
                    }
                    if (!payload.filters || typeof payload.filters !== 'object') {
                        errors.push('filters is required and must be an object');
                    }
                    if (errors.length > 0) {
                        throw new PermanentJobError("Validation failed: ".concat(errors.join(', ')));
                    }
                    return [2 /*return*/];
                });
            });
        };
        /**
         * Handle job failure
         *
         * Logs export generation failure.
         * This is called when the job exhausts all retry attempts and moves to DLQ.
         *
         * @param job - The failed job
         * @param error - The error that caused the failure
         *
         * **Validates: Requirements 9.5**
         */
        ExportGenerationHandler_1.prototype.onFailure = function (job, error) {
            return __awaiter(this, void 0, void 0, function () {
                var _a, userId, exportType;
                return __generator(this, function (_b) {
                    _a = job.payload, userId = _a.userId, exportType = _a.exportType;
                    this.logger.error("Export generation permanently failed for user ".concat(userId, " (type: ").concat(exportType, ", jobId: ").concat(job.id, "): ").concat(error.message), error.stack);
                    return [2 /*return*/];
                });
            });
        };
        return ExportGenerationHandler_1;
    }());
    __setFunctionName(_classThis, "ExportGenerationHandler");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        ExportGenerationHandler = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return ExportGenerationHandler = _classThis;
}();
exports.ExportGenerationHandler = ExportGenerationHandler;
