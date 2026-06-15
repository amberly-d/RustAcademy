"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExportReportQueryDto = exports.TimeSeriesQueryDto = exports.AnalyticsQueryDto = exports.ReportType = exports.ReportFormat = exports.AnalyticsInterval = void 0;
var swagger_1 = require("@nestjs/swagger");
var class_transformer_1 = require("class-transformer");
var class_validator_1 = require("class-validator");
var AnalyticsInterval;
(function (AnalyticsInterval) {
    AnalyticsInterval["DAILY"] = "daily";
    AnalyticsInterval["WEEKLY"] = "weekly";
    AnalyticsInterval["MONTHLY"] = "monthly";
})(AnalyticsInterval || (exports.AnalyticsInterval = AnalyticsInterval = {}));
var ReportFormat;
(function (ReportFormat) {
    ReportFormat["CSV"] = "csv";
    ReportFormat["PDF"] = "pdf";
})(ReportFormat || (exports.ReportFormat = ReportFormat = {}));
var ReportType;
(function (ReportType) {
    ReportType["TAX"] = "tax";
    ReportType["ACCOUNTING"] = "accounting";
})(ReportType || (exports.ReportType = ReportType = {}));
var AnalyticsQueryDto = function () {
    var _a;
    var _publicKey_decorators;
    var _publicKey_initializers = [];
    var _publicKey_extraInitializers = [];
    var _startDate_decorators;
    var _startDate_initializers = [];
    var _startDate_extraInitializers = [];
    var _endDate_decorators;
    var _endDate_initializers = [];
    var _endDate_extraInitializers = [];
    return _a = /** @class */ (function () {
            function AnalyticsQueryDto() {
                this.publicKey = __runInitializers(this, _publicKey_initializers, void 0);
                this.startDate = (__runInitializers(this, _publicKey_extraInitializers), __runInitializers(this, _startDate_initializers, void 0));
                this.endDate = (__runInitializers(this, _startDate_extraInitializers), __runInitializers(this, _endDate_initializers, void 0));
                __runInitializers(this, _endDate_extraInitializers);
            }
            return AnalyticsQueryDto;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _publicKey_decorators = [(0, swagger_1.ApiProperty)({
                    description: 'Stellar public key for the user whose payment analytics should be returned',
                    example: 'GBXGQ55JMQ4L2B6E7S8Y9Z0A1B2C3D4E5F6G7H8I7YWR',
                }), (0, class_validator_1.IsNotEmpty)(), (0, class_validator_1.IsString)(), (0, class_validator_1.Matches)(/^G[A-Z2-7]{55}$/, { message: 'Invalid Stellar public key format' })];
            _startDate_decorators = [(0, swagger_1.ApiPropertyOptional)({
                    description: 'Start date (inclusive) in ISO-8601 format',
                    example: '2026-01-01T00:00:00.000Z',
                }), (0, class_validator_1.IsOptional)(), (0, class_validator_1.IsISO8601)()];
            _endDate_decorators = [(0, swagger_1.ApiPropertyOptional)({
                    description: 'End date (inclusive) in ISO-8601 format',
                    example: '2026-04-29T23:59:59.999Z',
                }), (0, class_validator_1.IsOptional)(), (0, class_validator_1.IsISO8601)()];
            __esDecorate(null, null, _publicKey_decorators, { kind: "field", name: "publicKey", static: false, private: false, access: { has: function (obj) { return "publicKey" in obj; }, get: function (obj) { return obj.publicKey; }, set: function (obj, value) { obj.publicKey = value; } }, metadata: _metadata }, _publicKey_initializers, _publicKey_extraInitializers);
            __esDecorate(null, null, _startDate_decorators, { kind: "field", name: "startDate", static: false, private: false, access: { has: function (obj) { return "startDate" in obj; }, get: function (obj) { return obj.startDate; }, set: function (obj, value) { obj.startDate = value; } }, metadata: _metadata }, _startDate_initializers, _startDate_extraInitializers);
            __esDecorate(null, null, _endDate_decorators, { kind: "field", name: "endDate", static: false, private: false, access: { has: function (obj) { return "endDate" in obj; }, get: function (obj) { return obj.endDate; }, set: function (obj, value) { obj.endDate = value; } }, metadata: _metadata }, _endDate_initializers, _endDate_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.AnalyticsQueryDto = AnalyticsQueryDto;
var TimeSeriesQueryDto = function () {
    var _a;
    var _classSuper = AnalyticsQueryDto;
    var _interval_decorators;
    var _interval_initializers = [];
    var _interval_extraInitializers = [];
    return _a = /** @class */ (function (_super) {
            __extends(TimeSeriesQueryDto, _super);
            function TimeSeriesQueryDto() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.interval = __runInitializers(_this, _interval_initializers, AnalyticsInterval.DAILY);
                __runInitializers(_this, _interval_extraInitializers);
                return _this;
            }
            return TimeSeriesQueryDto;
        }(_classSuper)),
        (function () {
            var _b;
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_b = _classSuper[Symbol.metadata]) !== null && _b !== void 0 ? _b : null) : void 0;
            _interval_decorators = [(0, swagger_1.ApiPropertyOptional)({
                    description: 'Time bucket for chart rendering',
                    enum: AnalyticsInterval,
                    default: AnalyticsInterval.DAILY,
                }), (0, class_validator_1.IsOptional)(), (0, class_validator_1.IsEnum)(AnalyticsInterval)];
            __esDecorate(null, null, _interval_decorators, { kind: "field", name: "interval", static: false, private: false, access: { has: function (obj) { return "interval" in obj; }, get: function (obj) { return obj.interval; }, set: function (obj, value) { obj.interval = value; } }, metadata: _metadata }, _interval_initializers, _interval_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.TimeSeriesQueryDto = TimeSeriesQueryDto;
var ExportReportQueryDto = function () {
    var _a;
    var _classSuper = AnalyticsQueryDto;
    var _format_decorators;
    var _format_initializers = [];
    var _format_extraInitializers = [];
    var _reportType_decorators;
    var _reportType_initializers = [];
    var _reportType_extraInitializers = [];
    var _interval_decorators;
    var _interval_initializers = [];
    var _interval_extraInitializers = [];
    var _maxRows_decorators;
    var _maxRows_initializers = [];
    var _maxRows_extraInitializers = [];
    return _a = /** @class */ (function (_super) {
            __extends(ExportReportQueryDto, _super);
            function ExportReportQueryDto() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.format = __runInitializers(_this, _format_initializers, ReportFormat.CSV);
                _this.reportType = (__runInitializers(_this, _format_extraInitializers), __runInitializers(_this, _reportType_initializers, ReportType.ACCOUNTING));
                _this.interval = (__runInitializers(_this, _reportType_extraInitializers), __runInitializers(_this, _interval_initializers, AnalyticsInterval.MONTHLY));
                _this.maxRows = (__runInitializers(_this, _interval_extraInitializers), __runInitializers(_this, _maxRows_initializers, 500));
                __runInitializers(_this, _maxRows_extraInitializers);
                return _this;
            }
            return ExportReportQueryDto;
        }(_classSuper)),
        (function () {
            var _b;
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_b = _classSuper[Symbol.metadata]) !== null && _b !== void 0 ? _b : null) : void 0;
            _format_decorators = [(0, swagger_1.ApiPropertyOptional)({
                    description: 'Export format',
                    enum: ReportFormat,
                    default: ReportFormat.CSV,
                }), (0, class_validator_1.IsOptional)(), (0, class_validator_1.IsEnum)(ReportFormat)];
            _reportType_decorators = [(0, swagger_1.ApiPropertyOptional)({
                    description: 'Report type preset',
                    enum: ReportType,
                    default: ReportType.ACCOUNTING,
                }), (0, class_validator_1.IsOptional)(), (0, class_validator_1.IsEnum)(ReportType)];
            _interval_decorators = [(0, swagger_1.ApiPropertyOptional)({
                    description: 'Time bucket used in the exported trend section',
                    enum: AnalyticsInterval,
                    default: AnalyticsInterval.MONTHLY,
                }), (0, class_validator_1.IsOptional)(), (0, class_validator_1.IsEnum)(AnalyticsInterval)];
            _maxRows_decorators = [(0, swagger_1.ApiPropertyOptional)({
                    description: 'Maximum transaction rows to include in the export',
                    example: 500,
                    default: 500,
                }), (0, class_validator_1.IsOptional)(), (0, class_transformer_1.Type)(function () { return Number; })];
            __esDecorate(null, null, _format_decorators, { kind: "field", name: "format", static: false, private: false, access: { has: function (obj) { return "format" in obj; }, get: function (obj) { return obj.format; }, set: function (obj, value) { obj.format = value; } }, metadata: _metadata }, _format_initializers, _format_extraInitializers);
            __esDecorate(null, null, _reportType_decorators, { kind: "field", name: "reportType", static: false, private: false, access: { has: function (obj) { return "reportType" in obj; }, get: function (obj) { return obj.reportType; }, set: function (obj, value) { obj.reportType = value; } }, metadata: _metadata }, _reportType_initializers, _reportType_extraInitializers);
            __esDecorate(null, null, _interval_decorators, { kind: "field", name: "interval", static: false, private: false, access: { has: function (obj) { return "interval" in obj; }, get: function (obj) { return obj.interval; }, set: function (obj, value) { obj.interval = value; } }, metadata: _metadata }, _interval_initializers, _interval_extraInitializers);
            __esDecorate(null, null, _maxRows_decorators, { kind: "field", name: "maxRows", static: false, private: false, access: { has: function (obj) { return "maxRows" in obj; }, get: function (obj) { return obj.maxRows; }, set: function (obj, value) { obj.maxRows = value; } }, metadata: _metadata }, _maxRows_initializers, _maxRows_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.ExportReportQueryDto = ExportReportQueryDto;
