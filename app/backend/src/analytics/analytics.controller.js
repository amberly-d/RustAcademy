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
exports.AnalyticsController = void 0;
var common_1 = require("@nestjs/common");
var swagger_1 = require("@nestjs/swagger");
var api_key_guard_1 = require("../auth/guards/api-key.guard");
var analytics_query_dto_1 = require("./dto/analytics-query.dto");
var AnalyticsController = function () {
    var _classDecorators = [(0, swagger_1.ApiTags)("analytics"), (0, common_1.UseGuards)(api_key_guard_1.ApiKeyGuard), (0, common_1.Controller)("analytics")];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _instanceExtraInitializers = [];
    var _getReport_decorators;
    var _getTimeSeries_decorators;
    var _getAssetDistribution_decorators;
    var _exportReport_decorators;
    var AnalyticsController = _classThis = /** @class */ (function () {
        function AnalyticsController_1(analyticsService) {
            this.analyticsService = (__runInitializers(this, _instanceExtraInitializers), analyticsService);
        }
        AnalyticsController_1.prototype.getReport = function (req, query) {
            return __awaiter(this, void 0, void 0, function () {
                var _a;
                return __generator(this, function (_b) {
                    return [2 /*return*/, this.analyticsService.getAnalyticsReport(query.publicKey, query.startDate, query.endDate, query.interval, (_a = req.organizationContext) === null || _a === void 0 ? void 0 : _a.organizationId)];
                });
            });
        };
        AnalyticsController_1.prototype.getTimeSeries = function (req, query) {
            return __awaiter(this, void 0, void 0, function () {
                var report;
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, this.analyticsService.getAnalyticsReport(query.publicKey, query.startDate, query.endDate, query.interval, (_a = req.organizationContext) === null || _a === void 0 ? void 0 : _a.organizationId)];
                        case 1:
                            report = _b.sent();
                            return [2 /*return*/, {
                                    interval: query.interval,
                                    window: report.window,
                                    series: report.timeSeries,
                                }];
                    }
                });
            });
        };
        AnalyticsController_1.prototype.getAssetDistribution = function (req, query) {
            return __awaiter(this, void 0, void 0, function () {
                var report;
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, this.analyticsService.getAnalyticsReport(query.publicKey, query.startDate, query.endDate, undefined, (_a = req.organizationContext) === null || _a === void 0 ? void 0 : _a.organizationId)];
                        case 1:
                            report = _b.sent();
                            return [2 /*return*/, {
                                    window: report.window,
                                    distribution: report.assetDistribution,
                                }];
                    }
                });
            });
        };
        AnalyticsController_1.prototype.exportReport = function (query, req, res) {
            return __awaiter(this, void 0, void 0, function () {
                var _a, report, payments, pdf, filename_1, csv, filename;
                var _b;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0: return [4 /*yield*/, this.analyticsService.exportReport(query.publicKey, query.startDate, query.endDate, query.reportType, query.interval, query.maxRows, (_b = req.organizationContext) === null || _b === void 0 ? void 0 : _b.organizationId)];
                        case 1:
                            _a = _c.sent(), report = _a.report, payments = _a.payments;
                            if (query.format === analytics_query_dto_1.ReportFormat.PDF) {
                                pdf = this.analyticsService.buildPdfReport(report, payments, query.reportType);
                                filename_1 = " RustAcademy-".concat(query.reportType, "-report.pdf");
                                res.header("Content-Type", "application/pdf");
                                res.attachment(filename_1);
                                return [2 /*return*/, res.send(pdf)];
                            }
                            csv = this.analyticsService.buildCsvReport(report, payments, query.reportType);
                            filename = " RustAcademy-".concat(query.reportType, "-report.csv");
                            res.header("Content-Type", "text/csv");
                            res.attachment(filename);
                            return [2 /*return*/, res.send(csv)];
                    }
                });
            });
        };
        return AnalyticsController_1;
    }());
    __setFunctionName(_classThis, "AnalyticsController");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _getReport_decorators = [(0, common_1.Get)("report"), (0, swagger_1.ApiOperation)({
                summary: "Fetch dashboard analytics report (summary, asset distribution, and time-series)",
            }), (0, swagger_1.ApiResponse)({ status: 200, description: "Analytics report generated" })];
        _getTimeSeries_decorators = [(0, common_1.Get)("time-series"), (0, swagger_1.ApiOperation)({
                summary: "Fetch only time-series analytics for chart rendering (daily/weekly/monthly)",
            }), (0, swagger_1.ApiResponse)({ status: 200, description: "Time-series analytics generated" })];
        _getAssetDistribution_decorators = [(0, common_1.Get)("assets"), (0, swagger_1.ApiOperation)({
                summary: "Fetch asset distribution for payment history",
            }), (0, swagger_1.ApiResponse)({ status: 200, description: "Asset distribution generated" })];
        _exportReport_decorators = [(0, common_1.Get)("export"), (0, swagger_1.ApiOperation)({
                summary: "Export analytics report in CSV or PDF for tax/accounting",
            }), (0, swagger_1.ApiResponse)({ status: 200, description: "Report export generated" })];
        __esDecorate(_classThis, null, _getReport_decorators, { kind: "method", name: "getReport", static: false, private: false, access: { has: function (obj) { return "getReport" in obj; }, get: function (obj) { return obj.getReport; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _getTimeSeries_decorators, { kind: "method", name: "getTimeSeries", static: false, private: false, access: { has: function (obj) { return "getTimeSeries" in obj; }, get: function (obj) { return obj.getTimeSeries; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _getAssetDistribution_decorators, { kind: "method", name: "getAssetDistribution", static: false, private: false, access: { has: function (obj) { return "getAssetDistribution" in obj; }, get: function (obj) { return obj.getAssetDistribution; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _exportReport_decorators, { kind: "method", name: "exportReport", static: false, private: false, access: { has: function (obj) { return "exportReport" in obj; }, get: function (obj) { return obj.exportReport; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        AnalyticsController = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return AnalyticsController = _classThis;
}();
exports.AnalyticsController = AnalyticsController;
