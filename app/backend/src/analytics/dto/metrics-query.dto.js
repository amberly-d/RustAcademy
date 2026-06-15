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
exports.StatsQueryDto = exports.MetricsQueryDto = exports.MetricType = exports.TimeGrouping = void 0;
var swagger_1 = require("@nestjs/swagger");
var class_validator_1 = require("class-validator");
var TimeGrouping;
(function (TimeGrouping) {
    TimeGrouping["DAILY"] = "daily";
    TimeGrouping["WEEKLY"] = "weekly";
    TimeGrouping["MONTHLY"] = "monthly";
})(TimeGrouping || (exports.TimeGrouping = TimeGrouping = {}));
var MetricType;
(function (MetricType) {
    MetricType["VOLUME"] = "volume";
    MetricType["FEES"] = "fees";
    MetricType["SUCCESS_RATE"] = "success_rate";
    MetricType["ACTIVE_LINKS"] = "active_links";
    MetricType["PAID_LINKS"] = "paid_links";
    MetricType["AVERAGE_TRANSACTION"] = "average_transaction";
})(MetricType || (exports.MetricType = MetricType = {}));
/**
 * Base query parameters for metrics endpoints
 */
var MetricsQueryDto = function () {
    var _a;
    var _startDate_decorators;
    var _startDate_initializers = [];
    var _startDate_extraInitializers = [];
    var _endDate_decorators;
    var _endDate_initializers = [];
    var _endDate_extraInitializers = [];
    var _grouping_decorators;
    var _grouping_initializers = [];
    var _grouping_extraInitializers = [];
    var _assets_decorators;
    var _assets_initializers = [];
    var _assets_extraInitializers = [];
    var _includeZeros_decorators;
    var _includeZeros_initializers = [];
    var _includeZeros_extraInitializers = [];
    return _a = /** @class */ (function () {
            function MetricsQueryDto() {
                this.startDate = __runInitializers(this, _startDate_initializers, void 0);
                this.endDate = (__runInitializers(this, _startDate_extraInitializers), __runInitializers(this, _endDate_initializers, void 0));
                this.grouping = (__runInitializers(this, _endDate_extraInitializers), __runInitializers(this, _grouping_initializers, TimeGrouping.DAILY));
                this.assets = (__runInitializers(this, _grouping_extraInitializers), __runInitializers(this, _assets_initializers, void 0));
                this.includeZeros = (__runInitializers(this, _assets_extraInitializers), __runInitializers(this, _includeZeros_initializers, false));
                __runInitializers(this, _includeZeros_extraInitializers);
            }
            return MetricsQueryDto;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _startDate_decorators = [(0, swagger_1.ApiProperty)({
                    description: 'Start date (ISO 8601 format)',
                    example: '2026-04-01T00:00:00Z',
                }), (0, class_validator_1.IsDateString)()];
            _endDate_decorators = [(0, swagger_1.ApiProperty)({
                    description: 'End date (ISO 8601 format)',
                    example: '2026-04-28T23:59:59Z',
                }), (0, class_validator_1.IsDateString)()];
            _grouping_decorators = [(0, swagger_1.ApiProperty)({
                    description: 'Time grouping granularity',
                    enum: TimeGrouping,
                    example: TimeGrouping.DAILY,
                    default: TimeGrouping.DAILY,
                }), (0, class_validator_1.IsEnum)(TimeGrouping), (0, class_validator_1.IsOptional)()];
            _assets_decorators = [(0, swagger_1.ApiPropertyOptional)({
                    description: 'Filter by specific asset codes (comma-separated)',
                    example: 'XLM,USDC',
                }), (0, class_validator_1.IsOptional)(), (0, class_validator_1.IsString)()];
            _includeZeros_decorators = [(0, swagger_1.ApiPropertyOptional)({
                    description: 'Include zero-value data points',
                    example: false,
                    default: false,
                }), (0, class_validator_1.IsOptional)()];
            __esDecorate(null, null, _startDate_decorators, { kind: "field", name: "startDate", static: false, private: false, access: { has: function (obj) { return "startDate" in obj; }, get: function (obj) { return obj.startDate; }, set: function (obj, value) { obj.startDate = value; } }, metadata: _metadata }, _startDate_initializers, _startDate_extraInitializers);
            __esDecorate(null, null, _endDate_decorators, { kind: "field", name: "endDate", static: false, private: false, access: { has: function (obj) { return "endDate" in obj; }, get: function (obj) { return obj.endDate; }, set: function (obj, value) { obj.endDate = value; } }, metadata: _metadata }, _endDate_initializers, _endDate_extraInitializers);
            __esDecorate(null, null, _grouping_decorators, { kind: "field", name: "grouping", static: false, private: false, access: { has: function (obj) { return "grouping" in obj; }, get: function (obj) { return obj.grouping; }, set: function (obj, value) { obj.grouping = value; } }, metadata: _metadata }, _grouping_initializers, _grouping_extraInitializers);
            __esDecorate(null, null, _assets_decorators, { kind: "field", name: "assets", static: false, private: false, access: { has: function (obj) { return "assets" in obj; }, get: function (obj) { return obj.assets; }, set: function (obj, value) { obj.assets = value; } }, metadata: _metadata }, _assets_initializers, _assets_extraInitializers);
            __esDecorate(null, null, _includeZeros_decorators, { kind: "field", name: "includeZeros", static: false, private: false, access: { has: function (obj) { return "includeZeros" in obj; }, get: function (obj) { return obj.includeZeros; }, set: function (obj, value) { obj.includeZeros = value; } }, metadata: _metadata }, _includeZeros_initializers, _includeZeros_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.MetricsQueryDto = MetricsQueryDto;
/**
 * Query for daily/weekly/monthly aggregated stats
 */
var StatsQueryDto = function () {
    var _a;
    var _classSuper = MetricsQueryDto;
    var _breakdownByAsset_decorators;
    var _breakdownByAsset_initializers = [];
    var _breakdownByAsset_extraInitializers = [];
    var _includeComparison_decorators;
    var _includeComparison_initializers = [];
    var _includeComparison_extraInitializers = [];
    return _a = /** @class */ (function (_super) {
            __extends(StatsQueryDto, _super);
            function StatsQueryDto() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.breakdownByAsset = __runInitializers(_this, _breakdownByAsset_initializers, false);
                _this.includeComparison = (__runInitializers(_this, _breakdownByAsset_extraInitializers), __runInitializers(_this, _includeComparison_initializers, false));
                __runInitializers(_this, _includeComparison_extraInitializers);
                return _this;
            }
            return StatsQueryDto;
        }(_classSuper)),
        (function () {
            var _b;
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_b = _classSuper[Symbol.metadata]) !== null && _b !== void 0 ? _b : null) : void 0;
            _breakdownByAsset_decorators = [(0, swagger_1.ApiPropertyOptional)({
                    description: 'Include breakdown by asset',
                    example: true,
                    default: false,
                }), (0, class_validator_1.IsOptional)()];
            _includeComparison_decorators = [(0, swagger_1.ApiPropertyOptional)({
                    description: 'Include comparison with previous period',
                    example: true,
                    default: false,
                }), (0, class_validator_1.IsOptional)()];
            __esDecorate(null, null, _breakdownByAsset_decorators, { kind: "field", name: "breakdownByAsset", static: false, private: false, access: { has: function (obj) { return "breakdownByAsset" in obj; }, get: function (obj) { return obj.breakdownByAsset; }, set: function (obj, value) { obj.breakdownByAsset = value; } }, metadata: _metadata }, _breakdownByAsset_initializers, _breakdownByAsset_extraInitializers);
            __esDecorate(null, null, _includeComparison_decorators, { kind: "field", name: "includeComparison", static: false, private: false, access: { has: function (obj) { return "includeComparison" in obj; }, get: function (obj) { return obj.includeComparison; }, set: function (obj, value) { obj.includeComparison = value; } }, metadata: _metadata }, _includeComparison_initializers, _includeComparison_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.StatsQueryDto = StatsQueryDto;
