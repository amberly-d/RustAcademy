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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComparisonResponseDto = exports.AggregatedStatsResponseDto = exports.PeriodComparisonDto = exports.PeriodMetricDto = exports.AssetMetricDto = void 0;
var swagger_1 = require("@nestjs/swagger");
/**
 * Asset-specific metric breakdown
 */
var AssetMetricDto = function () {
    var _a;
    var _asset_decorators;
    var _asset_initializers = [];
    var _asset_extraInitializers = [];
    var _volume_decorators;
    var _volume_initializers = [];
    var _volume_extraInitializers = [];
    var _fees_decorators;
    var _fees_initializers = [];
    var _fees_extraInitializers = [];
    var _successRate_decorators;
    var _successRate_initializers = [];
    var _successRate_extraInitializers = [];
    var _activeLinks_decorators;
    var _activeLinks_initializers = [];
    var _activeLinks_extraInitializers = [];
    var _paidLinks_decorators;
    var _paidLinks_initializers = [];
    var _paidLinks_extraInitializers = [];
    var _averageTransaction_decorators;
    var _averageTransaction_initializers = [];
    var _averageTransaction_extraInitializers = [];
    var _transactionCount_decorators;
    var _transactionCount_initializers = [];
    var _transactionCount_extraInitializers = [];
    return _a = /** @class */ (function () {
            function AssetMetricDto() {
                this.asset = __runInitializers(this, _asset_initializers, void 0);
                this.volume = (__runInitializers(this, _asset_extraInitializers), __runInitializers(this, _volume_initializers, void 0));
                this.fees = (__runInitializers(this, _volume_extraInitializers), __runInitializers(this, _fees_initializers, void 0));
                this.successRate = (__runInitializers(this, _fees_extraInitializers), __runInitializers(this, _successRate_initializers, void 0));
                this.activeLinks = (__runInitializers(this, _successRate_extraInitializers), __runInitializers(this, _activeLinks_initializers, void 0));
                this.paidLinks = (__runInitializers(this, _activeLinks_extraInitializers), __runInitializers(this, _paidLinks_initializers, void 0));
                this.averageTransaction = (__runInitializers(this, _paidLinks_extraInitializers), __runInitializers(this, _averageTransaction_initializers, void 0));
                this.transactionCount = (__runInitializers(this, _averageTransaction_extraInitializers), __runInitializers(this, _transactionCount_initializers, void 0));
                __runInitializers(this, _transactionCount_extraInitializers);
            }
            return AssetMetricDto;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _asset_decorators = [(0, swagger_1.ApiProperty)({
                    description: 'Asset code (e.g., XLM, USDC)',
                    example: 'XLM',
                })];
            _volume_decorators = [(0, swagger_1.ApiProperty)({
                    description: 'Total volume in asset units',
                    example: '1000.50',
                })];
            _fees_decorators = [(0, swagger_1.ApiProperty)({
                    description: 'Total fees in XLM',
                    example: '0.0001',
                })];
            _successRate_decorators = [(0, swagger_1.ApiProperty)({
                    description: 'Success rate as percentage (0-100)',
                    example: 95.5,
                })];
            _activeLinks_decorators = [(0, swagger_1.ApiProperty)({
                    description: 'Number of unique payment links used',
                    example: 42,
                })];
            _paidLinks_decorators = [(0, swagger_1.ApiProperty)({
                    description: 'Number of links that received at least one payment',
                    example: 38,
                })];
            _averageTransaction_decorators = [(0, swagger_1.ApiProperty)({
                    description: 'Average transaction amount',
                    example: '50.25',
                })];
            _transactionCount_decorators = [(0, swagger_1.ApiProperty)({
                    description: 'Total number of transactions',
                    example: 156,
                })];
            __esDecorate(null, null, _asset_decorators, { kind: "field", name: "asset", static: false, private: false, access: { has: function (obj) { return "asset" in obj; }, get: function (obj) { return obj.asset; }, set: function (obj, value) { obj.asset = value; } }, metadata: _metadata }, _asset_initializers, _asset_extraInitializers);
            __esDecorate(null, null, _volume_decorators, { kind: "field", name: "volume", static: false, private: false, access: { has: function (obj) { return "volume" in obj; }, get: function (obj) { return obj.volume; }, set: function (obj, value) { obj.volume = value; } }, metadata: _metadata }, _volume_initializers, _volume_extraInitializers);
            __esDecorate(null, null, _fees_decorators, { kind: "field", name: "fees", static: false, private: false, access: { has: function (obj) { return "fees" in obj; }, get: function (obj) { return obj.fees; }, set: function (obj, value) { obj.fees = value; } }, metadata: _metadata }, _fees_initializers, _fees_extraInitializers);
            __esDecorate(null, null, _successRate_decorators, { kind: "field", name: "successRate", static: false, private: false, access: { has: function (obj) { return "successRate" in obj; }, get: function (obj) { return obj.successRate; }, set: function (obj, value) { obj.successRate = value; } }, metadata: _metadata }, _successRate_initializers, _successRate_extraInitializers);
            __esDecorate(null, null, _activeLinks_decorators, { kind: "field", name: "activeLinks", static: false, private: false, access: { has: function (obj) { return "activeLinks" in obj; }, get: function (obj) { return obj.activeLinks; }, set: function (obj, value) { obj.activeLinks = value; } }, metadata: _metadata }, _activeLinks_initializers, _activeLinks_extraInitializers);
            __esDecorate(null, null, _paidLinks_decorators, { kind: "field", name: "paidLinks", static: false, private: false, access: { has: function (obj) { return "paidLinks" in obj; }, get: function (obj) { return obj.paidLinks; }, set: function (obj, value) { obj.paidLinks = value; } }, metadata: _metadata }, _paidLinks_initializers, _paidLinks_extraInitializers);
            __esDecorate(null, null, _averageTransaction_decorators, { kind: "field", name: "averageTransaction", static: false, private: false, access: { has: function (obj) { return "averageTransaction" in obj; }, get: function (obj) { return obj.averageTransaction; }, set: function (obj, value) { obj.averageTransaction = value; } }, metadata: _metadata }, _averageTransaction_initializers, _averageTransaction_extraInitializers);
            __esDecorate(null, null, _transactionCount_decorators, { kind: "field", name: "transactionCount", static: false, private: false, access: { has: function (obj) { return "transactionCount" in obj; }, get: function (obj) { return obj.transactionCount; }, set: function (obj, value) { obj.transactionCount = value; } }, metadata: _metadata }, _transactionCount_initializers, _transactionCount_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.AssetMetricDto = AssetMetricDto;
/**
 * Period-specific aggregated metrics
 */
var PeriodMetricDto = function () {
    var _a;
    var _period_decorators;
    var _period_initializers = [];
    var _period_extraInitializers = [];
    var _totalVolume_decorators;
    var _totalVolume_initializers = [];
    var _totalVolume_extraInitializers = [];
    var _totalFees_decorators;
    var _totalFees_initializers = [];
    var _totalFees_extraInitializers = [];
    var _successRate_decorators;
    var _successRate_initializers = [];
    var _successRate_extraInitializers = [];
    var _totalActiveLinks_decorators;
    var _totalActiveLinks_initializers = [];
    var _totalActiveLinks_extraInitializers = [];
    var _totalPaidLinks_decorators;
    var _totalPaidLinks_initializers = [];
    var _totalPaidLinks_extraInitializers = [];
    var _averageTransaction_decorators;
    var _averageTransaction_initializers = [];
    var _averageTransaction_extraInitializers = [];
    var _transactionCount_decorators;
    var _transactionCount_initializers = [];
    var _transactionCount_extraInitializers = [];
    var _assetBreakdown_decorators;
    var _assetBreakdown_initializers = [];
    var _assetBreakdown_extraInitializers = [];
    var _comparison_decorators;
    var _comparison_initializers = [];
    var _comparison_extraInitializers = [];
    return _a = /** @class */ (function () {
            function PeriodMetricDto() {
                this.period = __runInitializers(this, _period_initializers, void 0);
                this.totalVolume = (__runInitializers(this, _period_extraInitializers), __runInitializers(this, _totalVolume_initializers, void 0));
                this.totalFees = (__runInitializers(this, _totalVolume_extraInitializers), __runInitializers(this, _totalFees_initializers, void 0));
                this.successRate = (__runInitializers(this, _totalFees_extraInitializers), __runInitializers(this, _successRate_initializers, void 0));
                this.totalActiveLinks = (__runInitializers(this, _successRate_extraInitializers), __runInitializers(this, _totalActiveLinks_initializers, void 0));
                this.totalPaidLinks = (__runInitializers(this, _totalActiveLinks_extraInitializers), __runInitializers(this, _totalPaidLinks_initializers, void 0));
                this.averageTransaction = (__runInitializers(this, _totalPaidLinks_extraInitializers), __runInitializers(this, _averageTransaction_initializers, void 0));
                this.transactionCount = (__runInitializers(this, _averageTransaction_extraInitializers), __runInitializers(this, _transactionCount_initializers, void 0));
                this.assetBreakdown = (__runInitializers(this, _transactionCount_extraInitializers), __runInitializers(this, _assetBreakdown_initializers, void 0));
                this.comparison = (__runInitializers(this, _assetBreakdown_extraInitializers), __runInitializers(this, _comparison_initializers, void 0));
                __runInitializers(this, _comparison_extraInitializers);
            }
            return PeriodMetricDto;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _period_decorators = [(0, swagger_1.ApiProperty)({
                    description: 'Period start date (ISO 8601)',
                    example: '2026-04-01T00:00:00Z',
                })];
            _totalVolume_decorators = [(0, swagger_1.ApiProperty)({
                    description: 'Total volume across all assets',
                    example: '5000.75',
                })];
            _totalFees_decorators = [(0, swagger_1.ApiProperty)({
                    description: 'Total fees in XLM',
                    example: '0.0005',
                })];
            _successRate_decorators = [(0, swagger_1.ApiProperty)({
                    description: 'Overall success rate as percentage (0-100)',
                    example: 92.3,
                })];
            _totalActiveLinks_decorators = [(0, swagger_1.ApiProperty)({
                    description: 'Total unique payment links used',
                    example: 120,
                })];
            _totalPaidLinks_decorators = [(0, swagger_1.ApiProperty)({
                    description: 'Total links that received at least one payment',
                    example: 108,
                })];
            _averageTransaction_decorators = [(0, swagger_1.ApiProperty)({
                    description: 'Average transaction amount across all assets',
                    example: '42.31',
                })];
            _transactionCount_decorators = [(0, swagger_1.ApiProperty)({
                    description: 'Total number of transactions in period',
                    example: 118,
                })];
            _assetBreakdown_decorators = [(0, swagger_1.ApiPropertyOptional)({
                    description: 'Per-asset breakdown if requested',
                    type: [AssetMetricDto],
                })];
            _comparison_decorators = [(0, swagger_1.ApiPropertyOptional)({
                    description: 'Comparison with previous period if requested',
                })];
            __esDecorate(null, null, _period_decorators, { kind: "field", name: "period", static: false, private: false, access: { has: function (obj) { return "period" in obj; }, get: function (obj) { return obj.period; }, set: function (obj, value) { obj.period = value; } }, metadata: _metadata }, _period_initializers, _period_extraInitializers);
            __esDecorate(null, null, _totalVolume_decorators, { kind: "field", name: "totalVolume", static: false, private: false, access: { has: function (obj) { return "totalVolume" in obj; }, get: function (obj) { return obj.totalVolume; }, set: function (obj, value) { obj.totalVolume = value; } }, metadata: _metadata }, _totalVolume_initializers, _totalVolume_extraInitializers);
            __esDecorate(null, null, _totalFees_decorators, { kind: "field", name: "totalFees", static: false, private: false, access: { has: function (obj) { return "totalFees" in obj; }, get: function (obj) { return obj.totalFees; }, set: function (obj, value) { obj.totalFees = value; } }, metadata: _metadata }, _totalFees_initializers, _totalFees_extraInitializers);
            __esDecorate(null, null, _successRate_decorators, { kind: "field", name: "successRate", static: false, private: false, access: { has: function (obj) { return "successRate" in obj; }, get: function (obj) { return obj.successRate; }, set: function (obj, value) { obj.successRate = value; } }, metadata: _metadata }, _successRate_initializers, _successRate_extraInitializers);
            __esDecorate(null, null, _totalActiveLinks_decorators, { kind: "field", name: "totalActiveLinks", static: false, private: false, access: { has: function (obj) { return "totalActiveLinks" in obj; }, get: function (obj) { return obj.totalActiveLinks; }, set: function (obj, value) { obj.totalActiveLinks = value; } }, metadata: _metadata }, _totalActiveLinks_initializers, _totalActiveLinks_extraInitializers);
            __esDecorate(null, null, _totalPaidLinks_decorators, { kind: "field", name: "totalPaidLinks", static: false, private: false, access: { has: function (obj) { return "totalPaidLinks" in obj; }, get: function (obj) { return obj.totalPaidLinks; }, set: function (obj, value) { obj.totalPaidLinks = value; } }, metadata: _metadata }, _totalPaidLinks_initializers, _totalPaidLinks_extraInitializers);
            __esDecorate(null, null, _averageTransaction_decorators, { kind: "field", name: "averageTransaction", static: false, private: false, access: { has: function (obj) { return "averageTransaction" in obj; }, get: function (obj) { return obj.averageTransaction; }, set: function (obj, value) { obj.averageTransaction = value; } }, metadata: _metadata }, _averageTransaction_initializers, _averageTransaction_extraInitializers);
            __esDecorate(null, null, _transactionCount_decorators, { kind: "field", name: "transactionCount", static: false, private: false, access: { has: function (obj) { return "transactionCount" in obj; }, get: function (obj) { return obj.transactionCount; }, set: function (obj, value) { obj.transactionCount = value; } }, metadata: _metadata }, _transactionCount_initializers, _transactionCount_extraInitializers);
            __esDecorate(null, null, _assetBreakdown_decorators, { kind: "field", name: "assetBreakdown", static: false, private: false, access: { has: function (obj) { return "assetBreakdown" in obj; }, get: function (obj) { return obj.assetBreakdown; }, set: function (obj, value) { obj.assetBreakdown = value; } }, metadata: _metadata }, _assetBreakdown_initializers, _assetBreakdown_extraInitializers);
            __esDecorate(null, null, _comparison_decorators, { kind: "field", name: "comparison", static: false, private: false, access: { has: function (obj) { return "comparison" in obj; }, get: function (obj) { return obj.comparison; }, set: function (obj, value) { obj.comparison = value; } }, metadata: _metadata }, _comparison_initializers, _comparison_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.PeriodMetricDto = PeriodMetricDto;
/**
 * Comparison between current and previous periods
 */
var PeriodComparisonDto = function () {
    var _a;
    var _previousPeriod_decorators;
    var _previousPeriod_initializers = [];
    var _previousPeriod_extraInitializers = [];
    var _volumeChangePercent_decorators;
    var _volumeChangePercent_initializers = [];
    var _volumeChangePercent_extraInitializers = [];
    var _successRateChangePercent_decorators;
    var _successRateChangePercent_initializers = [];
    var _successRateChangePercent_extraInitializers = [];
    var _activeLinksChangePercent_decorators;
    var _activeLinksChangePercent_initializers = [];
    var _activeLinksChangePercent_extraInitializers = [];
    var _paidLinksChangePercent_decorators;
    var _paidLinksChangePercent_initializers = [];
    var _paidLinksChangePercent_extraInitializers = [];
    var _averageTransactionChangePercent_decorators;
    var _averageTransactionChangePercent_initializers = [];
    var _averageTransactionChangePercent_extraInitializers = [];
    var _transactionCountChange_decorators;
    var _transactionCountChange_initializers = [];
    var _transactionCountChange_extraInitializers = [];
    return _a = /** @class */ (function () {
            function PeriodComparisonDto() {
                this.previousPeriod = __runInitializers(this, _previousPeriod_initializers, void 0);
                this.volumeChangePercent = (__runInitializers(this, _previousPeriod_extraInitializers), __runInitializers(this, _volumeChangePercent_initializers, void 0));
                this.successRateChangePercent = (__runInitializers(this, _volumeChangePercent_extraInitializers), __runInitializers(this, _successRateChangePercent_initializers, void 0));
                this.activeLinksChangePercent = (__runInitializers(this, _successRateChangePercent_extraInitializers), __runInitializers(this, _activeLinksChangePercent_initializers, void 0));
                this.paidLinksChangePercent = (__runInitializers(this, _activeLinksChangePercent_extraInitializers), __runInitializers(this, _paidLinksChangePercent_initializers, void 0));
                this.averageTransactionChangePercent = (__runInitializers(this, _paidLinksChangePercent_extraInitializers), __runInitializers(this, _averageTransactionChangePercent_initializers, void 0));
                this.transactionCountChange = (__runInitializers(this, _averageTransactionChangePercent_extraInitializers), __runInitializers(this, _transactionCountChange_initializers, void 0));
                __runInitializers(this, _transactionCountChange_extraInitializers);
            }
            return PeriodComparisonDto;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _previousPeriod_decorators = [(0, swagger_1.ApiProperty)({
                    description: 'Previous period start date (ISO 8601)',
                    example: '2026-03-25T00:00:00Z',
                })];
            _volumeChangePercent_decorators = [(0, swagger_1.ApiProperty)({
                    description: 'Volume change percentage',
                    example: 15.2,
                })];
            _successRateChangePercent_decorators = [(0, swagger_1.ApiProperty)({
                    description: 'Success rate change in percentage points',
                    example: 2.5,
                })];
            _activeLinksChangePercent_decorators = [(0, swagger_1.ApiProperty)({
                    description: 'Active links change percentage',
                    example: 8.3,
                })];
            _paidLinksChangePercent_decorators = [(0, swagger_1.ApiProperty)({
                    description: 'Paid links change percentage',
                    example: 12.1,
                })];
            _averageTransactionChangePercent_decorators = [(0, swagger_1.ApiProperty)({
                    description: 'Average transaction change percentage',
                    example: -5.5,
                })];
            _transactionCountChange_decorators = [(0, swagger_1.ApiProperty)({
                    description: 'Transaction count change (absolute)',
                    example: 35,
                })];
            __esDecorate(null, null, _previousPeriod_decorators, { kind: "field", name: "previousPeriod", static: false, private: false, access: { has: function (obj) { return "previousPeriod" in obj; }, get: function (obj) { return obj.previousPeriod; }, set: function (obj, value) { obj.previousPeriod = value; } }, metadata: _metadata }, _previousPeriod_initializers, _previousPeriod_extraInitializers);
            __esDecorate(null, null, _volumeChangePercent_decorators, { kind: "field", name: "volumeChangePercent", static: false, private: false, access: { has: function (obj) { return "volumeChangePercent" in obj; }, get: function (obj) { return obj.volumeChangePercent; }, set: function (obj, value) { obj.volumeChangePercent = value; } }, metadata: _metadata }, _volumeChangePercent_initializers, _volumeChangePercent_extraInitializers);
            __esDecorate(null, null, _successRateChangePercent_decorators, { kind: "field", name: "successRateChangePercent", static: false, private: false, access: { has: function (obj) { return "successRateChangePercent" in obj; }, get: function (obj) { return obj.successRateChangePercent; }, set: function (obj, value) { obj.successRateChangePercent = value; } }, metadata: _metadata }, _successRateChangePercent_initializers, _successRateChangePercent_extraInitializers);
            __esDecorate(null, null, _activeLinksChangePercent_decorators, { kind: "field", name: "activeLinksChangePercent", static: false, private: false, access: { has: function (obj) { return "activeLinksChangePercent" in obj; }, get: function (obj) { return obj.activeLinksChangePercent; }, set: function (obj, value) { obj.activeLinksChangePercent = value; } }, metadata: _metadata }, _activeLinksChangePercent_initializers, _activeLinksChangePercent_extraInitializers);
            __esDecorate(null, null, _paidLinksChangePercent_decorators, { kind: "field", name: "paidLinksChangePercent", static: false, private: false, access: { has: function (obj) { return "paidLinksChangePercent" in obj; }, get: function (obj) { return obj.paidLinksChangePercent; }, set: function (obj, value) { obj.paidLinksChangePercent = value; } }, metadata: _metadata }, _paidLinksChangePercent_initializers, _paidLinksChangePercent_extraInitializers);
            __esDecorate(null, null, _averageTransactionChangePercent_decorators, { kind: "field", name: "averageTransactionChangePercent", static: false, private: false, access: { has: function (obj) { return "averageTransactionChangePercent" in obj; }, get: function (obj) { return obj.averageTransactionChangePercent; }, set: function (obj, value) { obj.averageTransactionChangePercent = value; } }, metadata: _metadata }, _averageTransactionChangePercent_initializers, _averageTransactionChangePercent_extraInitializers);
            __esDecorate(null, null, _transactionCountChange_decorators, { kind: "field", name: "transactionCountChange", static: false, private: false, access: { has: function (obj) { return "transactionCountChange" in obj; }, get: function (obj) { return obj.transactionCountChange; }, set: function (obj, value) { obj.transactionCountChange = value; } }, metadata: _metadata }, _transactionCountChange_initializers, _transactionCountChange_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.PeriodComparisonDto = PeriodComparisonDto;
/**
 * Response DTO for aggregated stats endpoint
 */
var AggregatedStatsResponseDto = function () {
    var _a;
    var _summary_decorators;
    var _summary_initializers = [];
    var _summary_extraInitializers = [];
    var _timeSeries_decorators;
    var _timeSeries_initializers = [];
    var _timeSeries_extraInitializers = [];
    var _metadata_decorators;
    var _metadata_initializers = [];
    var _metadata_extraInitializers = [];
    return _a = /** @class */ (function () {
            function AggregatedStatsResponseDto() {
                this.summary = __runInitializers(this, _summary_initializers, void 0);
                this.timeSeries = (__runInitializers(this, _summary_extraInitializers), __runInitializers(this, _timeSeries_initializers, void 0));
                this.metadata = (__runInitializers(this, _timeSeries_extraInitializers), __runInitializers(this, _metadata_initializers, void 0));
                __runInitializers(this, _metadata_extraInitializers);
            }
            return AggregatedStatsResponseDto;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _summary_decorators = [(0, swagger_1.ApiProperty)({
                    description: 'Summary statistics for the requested period',
                })];
            _timeSeries_decorators = [(0, swagger_1.ApiProperty)({
                    description: 'Time-series data points',
                    type: [PeriodMetricDto],
                })];
            _metadata_decorators = [(0, swagger_1.ApiPropertyOptional)({
                    description: 'Metadata about the query',
                })];
            __esDecorate(null, null, _summary_decorators, { kind: "field", name: "summary", static: false, private: false, access: { has: function (obj) { return "summary" in obj; }, get: function (obj) { return obj.summary; }, set: function (obj, value) { obj.summary = value; } }, metadata: _metadata }, _summary_initializers, _summary_extraInitializers);
            __esDecorate(null, null, _timeSeries_decorators, { kind: "field", name: "timeSeries", static: false, private: false, access: { has: function (obj) { return "timeSeries" in obj; }, get: function (obj) { return obj.timeSeries; }, set: function (obj, value) { obj.timeSeries = value; } }, metadata: _metadata }, _timeSeries_initializers, _timeSeries_extraInitializers);
            __esDecorate(null, null, _metadata_decorators, { kind: "field", name: "metadata", static: false, private: false, access: { has: function (obj) { return "metadata" in obj; }, get: function (obj) { return obj.metadata; }, set: function (obj, value) { obj.metadata = value; } }, metadata: _metadata }, _metadata_initializers, _metadata_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.AggregatedStatsResponseDto = AggregatedStatsResponseDto;
/**
 * Response DTO for comparison endpoint
 */
var ComparisonResponseDto = function () {
    var _a;
    var _current_decorators;
    var _current_initializers = [];
    var _current_extraInitializers = [];
    var _previous_decorators;
    var _previous_initializers = [];
    var _previous_extraInitializers = [];
    var _comparison_decorators;
    var _comparison_initializers = [];
    var _comparison_extraInitializers = [];
    var _metadata_decorators;
    var _metadata_initializers = [];
    var _metadata_extraInitializers = [];
    return _a = /** @class */ (function () {
            function ComparisonResponseDto() {
                this.current = __runInitializers(this, _current_initializers, void 0);
                this.previous = (__runInitializers(this, _current_extraInitializers), __runInitializers(this, _previous_initializers, void 0));
                this.comparison = (__runInitializers(this, _previous_extraInitializers), __runInitializers(this, _comparison_initializers, void 0));
                this.metadata = (__runInitializers(this, _comparison_extraInitializers), __runInitializers(this, _metadata_initializers, void 0));
                __runInitializers(this, _metadata_extraInitializers);
            }
            return ComparisonResponseDto;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _current_decorators = [(0, swagger_1.ApiProperty)({
                    description: 'Current period metrics',
                })];
            _previous_decorators = [(0, swagger_1.ApiProperty)({
                    description: 'Previous period metrics for comparison',
                })];
            _comparison_decorators = [(0, swagger_1.ApiProperty)({
                    description: 'Comparison analysis',
                })];
            _metadata_decorators = [(0, swagger_1.ApiPropertyOptional)({
                    description: 'Metadata about the query',
                })];
            __esDecorate(null, null, _current_decorators, { kind: "field", name: "current", static: false, private: false, access: { has: function (obj) { return "current" in obj; }, get: function (obj) { return obj.current; }, set: function (obj, value) { obj.current = value; } }, metadata: _metadata }, _current_initializers, _current_extraInitializers);
            __esDecorate(null, null, _previous_decorators, { kind: "field", name: "previous", static: false, private: false, access: { has: function (obj) { return "previous" in obj; }, get: function (obj) { return obj.previous; }, set: function (obj, value) { obj.previous = value; } }, metadata: _metadata }, _previous_initializers, _previous_extraInitializers);
            __esDecorate(null, null, _comparison_decorators, { kind: "field", name: "comparison", static: false, private: false, access: { has: function (obj) { return "comparison" in obj; }, get: function (obj) { return obj.comparison; }, set: function (obj, value) { obj.comparison = value; } }, metadata: _metadata }, _comparison_initializers, _comparison_extraInitializers);
            __esDecorate(null, null, _metadata_decorators, { kind: "field", name: "metadata", static: false, private: false, access: { has: function (obj) { return "metadata" in obj; }, get: function (obj) { return obj.metadata; }, set: function (obj, value) { obj.metadata = value; } }, metadata: _metadata }, _metadata_initializers, _metadata_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.ComparisonResponseDto = ComparisonResponseDto;
