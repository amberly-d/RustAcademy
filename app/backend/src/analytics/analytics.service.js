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
exports.AnalyticsService = void 0;
var common_1 = require("@nestjs/common");
var analytics_query_dto_1 = require("./dto/analytics-query.dto");
var AnalyticsService = function () {
    var _classDecorators = [(0, common_1.Injectable)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var AnalyticsService = _classThis = /** @class */ (function () {
        function AnalyticsService_1(supabase) {
            this.supabase = supabase;
        }
        AnalyticsService_1.prototype.getAnalyticsReport = function (publicKey_1, startDate_1, endDate_1) {
            return __awaiter(this, arguments, void 0, function (publicKey, startDate, endDate, interval, organizationId) {
                var _a, startIso, endIso, rpcReport, rows, payments;
                if (interval === void 0) { interval = analytics_query_dto_1.AnalyticsInterval.DAILY; }
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _a = this.resolveDateWindow(startDate, endDate), startIso = _a.startIso, endIso = _a.endIso;
                            return [4 /*yield*/, this.fetchAggregatedReportViaRpc(publicKey, startIso, endIso, interval, organizationId)];
                        case 1:
                            rpcReport = _b.sent();
                            if (rpcReport) {
                                return [2 /*return*/, rpcReport];
                            }
                            return [4 /*yield*/, this.fetchPaymentRows(publicKey, startIso, endIso, organizationId)];
                        case 2:
                            rows = _b.sent();
                            payments = this.normalizeAndFilterRows(rows, publicKey);
                            return [2 /*return*/, {
                                    summary: this.buildSummary(payments),
                                    assetDistribution: this.buildAssetDistribution(payments),
                                    timeSeries: this.buildTimeSeries(payments, interval),
                                    window: {
                                        startDate: startIso,
                                        endDate: endIso,
                                    },
                                }];
                    }
                });
            });
        };
        AnalyticsService_1.prototype.exportReport = function (publicKey, startDate, endDate, reportType, interval, maxRows, organizationId) {
            return __awaiter(this, void 0, void 0, function () {
                var _a, startIso, endIso, rows, payments, rpcReport, report;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _a = this.resolveDateWindow(startDate, endDate), startIso = _a.startIso, endIso = _a.endIso;
                            return [4 /*yield*/, this.fetchPaymentRows(publicKey, startIso, endIso, organizationId)];
                        case 1:
                            rows = _b.sent();
                            payments = this.normalizeAndFilterRows(rows, publicKey).slice(0, Math.max(1, Math.min(maxRows || 500, 5000)));
                            return [4 /*yield*/, this.fetchAggregatedReportViaRpc(publicKey, startIso, endIso, interval, organizationId)];
                        case 2:
                            rpcReport = _b.sent();
                            report = rpcReport !== null && rpcReport !== void 0 ? rpcReport : {
                                summary: this.buildSummary(payments),
                                assetDistribution: this.buildAssetDistribution(payments),
                                timeSeries: this.buildTimeSeries(payments, interval),
                                window: {
                                    startDate: startIso,
                                    endDate: endIso,
                                },
                            };
                            if (reportType === analytics_query_dto_1.ReportType.TAX) {
                                report.summary.averageTransactionUsd = this.round2(report.summary.totalVolumeUsd /
                                    Math.max(report.summary.successfulTransactions, 1));
                            }
                            return [2 /*return*/, { report: report, payments: payments }];
                    }
                });
            });
        };
        AnalyticsService_1.prototype.buildCsvReport = function (report, payments, reportType) {
            var _this = this;
            var lines = [];
            lines.push(" RustAcademy_analytics_report_type,".concat(reportType));
            lines.push("start_date,".concat(report.window.startDate));
            lines.push("end_date,".concat(report.window.endDate));
            lines.push("");
            lines.push("summary_metric,value");
            lines.push("total_transactions,".concat(report.summary.totalTransactions));
            lines.push("successful_transactions,".concat(report.summary.successfulTransactions));
            lines.push("failed_transactions,".concat(report.summary.failedTransactions));
            lines.push("conversion_rate_percent,".concat(report.summary.conversionRate));
            lines.push("total_volume_usd,".concat(report.summary.totalVolumeUsd));
            lines.push("average_transaction_usd,".concat(report.summary.averageTransactionUsd));
            lines.push("");
            lines.push("asset,volume_usd,percentage,transaction_count");
            report.assetDistribution.forEach(function (item) {
                lines.push([
                    _this.escapeCsv(item.asset),
                    item.volumeUsd.toFixed(2),
                    item.percentage.toFixed(2),
                    item.transactionCount.toString(),
                ].join(","));
            });
            lines.push("");
            lines.push("period,transaction_count,successful_transactions,volume_usd");
            report.timeSeries.forEach(function (item) {
                lines.push([
                    _this.escapeCsv(item.period),
                    item.transactionCount.toString(),
                    item.successfulTransactions.toString(),
                    item.volumeUsd.toFixed(2),
                ].join(","));
            });
            lines.push("");
            lines.push("created_at,asset,amount,amount_usd,status");
            payments.forEach(function (payment) {
                lines.push([
                    _this.escapeCsv(payment.createdAt),
                    _this.escapeCsv(payment.asset),
                    payment.amount.toFixed(7),
                    payment.amountUsd.toFixed(2),
                    _this.escapeCsv(payment.status),
                ].join(","));
            });
            return lines.join("\n");
        };
        AnalyticsService_1.prototype.buildPdfReport = function (report, payments, reportType) {
            var lines = __spreadArray(__spreadArray(__spreadArray([
                " RustAcademy ".concat(reportType.toUpperCase(), " Report"),
                "Date window: ".concat(report.window.startDate, " to ").concat(report.window.endDate),
                "Total USD volume: ".concat(report.summary.totalVolumeUsd.toFixed(2)),
                "Transactions: ".concat(report.summary.totalTransactions),
                "Conversion rate: ".concat(report.summary.conversionRate.toFixed(2), "%"),
                "",
                "Top assets by USD volume:"
            ], report.assetDistribution
                .slice(0, 5)
                .map(function (asset) {
                return "".concat(asset.asset, ": $").concat(asset.volumeUsd.toFixed(2), " (").concat(asset.percentage.toFixed(2), "%)");
            }), true), [
                "",
                "Recent transactions:"
            ], false), payments
                .slice(-10)
                .map(function (row) {
                return "".concat(row.createdAt.slice(0, 19), " | ").concat(row.asset, " | $").concat(row.amountUsd.toFixed(2), " | ").concat(row.status);
            }), true);
            return this.createSimplePdf(lines);
        };
        AnalyticsService_1.prototype.fetchPaymentRows = function (publicKey, startIso, endIso, organizationId) {
            return __awaiter(this, void 0, void 0, function () {
                var client, query, _a, data, error;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            client = this.supabase.getClient();
                            query = client
                                .from("payment_records")
                                .select("*")
                                .or("sender_public_key.eq.".concat(publicKey, ",receiver_public_key.eq.").concat(publicKey))
                                .gte("created_at", startIso)
                                .lte("created_at", endIso)
                                .order("created_at", { ascending: true });
                            if (organizationId) {
                                query = query.eq("organization_id", organizationId);
                            }
                            return [4 /*yield*/, query];
                        case 1:
                            _a = _b.sent(), data = _a.data, error = _a.error;
                            if (error) {
                                throw new common_1.BadRequestException({
                                    code: "ANALYTICS_QUERY_FAILED",
                                    message: "Failed to fetch payment records: ".concat(error.message),
                                });
                            }
                            return [2 /*return*/, (data !== null && data !== void 0 ? data : [])];
                    }
                });
            });
        };
        AnalyticsService_1.prototype.fetchAggregatedReportViaRpc = function (publicKey, startIso, endIso, interval, organizationId) {
            return __awaiter(this, void 0, void 0, function () {
                var client, _a, summaryResult, assetsResult, timeSeriesResult, summaryRow, assetRows, timeSeriesRows;
                var _this = this;
                var _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
                return __generator(this, function (_m) {
                    switch (_m.label) {
                        case 0:
                            client = this.supabase.getClient();
                            return [4 /*yield*/, Promise.all([
                                    client.rpc(" RustAcademy_analytics_summary", {
                                        p_public_key: publicKey,
                                        p_start_date: startIso,
                                        p_end_date: endIso,
                                        p_organization_id: organizationId !== null && organizationId !== void 0 ? organizationId : null,
                                    }),
                                    client.rpc(" RustAcademy_analytics_asset_distribution", {
                                        p_public_key: publicKey,
                                        p_start_date: startIso,
                                        p_end_date: endIso,
                                        p_organization_id: organizationId !== null && organizationId !== void 0 ? organizationId : null,
                                    }),
                                    client.rpc(" RustAcademy_analytics_time_series", {
                                        p_public_key: publicKey,
                                        p_start_date: startIso,
                                        p_end_date: endIso,
                                        p_interval: interval,
                                        p_organization_id: organizationId !== null && organizationId !== void 0 ? organizationId : null,
                                    }),
                                ])];
                        case 1:
                            _a = _m.sent(), summaryResult = _a[0], assetsResult = _a[1], timeSeriesResult = _a[2];
                            if (summaryResult.error || assetsResult.error || timeSeriesResult.error) {
                                return [2 /*return*/, null];
                            }
                            summaryRow = ((_c = (_b = summaryResult.data) === null || _b === void 0 ? void 0 : _b[0]) !== null && _c !== void 0 ? _c : null);
                            if (!summaryRow) {
                                return [2 /*return*/, null];
                            }
                            assetRows = ((_d = assetsResult.data) !== null && _d !== void 0 ? _d : []);
                            timeSeriesRows = ((_e = timeSeriesResult.data) !== null && _e !== void 0 ? _e : []);
                            return [2 /*return*/, {
                                    summary: {
                                        totalTransactions: Number((_f = summaryRow.total_transactions) !== null && _f !== void 0 ? _f : 0),
                                        successfulTransactions: Number((_g = summaryRow.successful_transactions) !== null && _g !== void 0 ? _g : 0),
                                        failedTransactions: Number((_h = summaryRow.failed_transactions) !== null && _h !== void 0 ? _h : 0),
                                        conversionRate: this.round2(Number((_j = summaryRow.conversion_rate) !== null && _j !== void 0 ? _j : 0)),
                                        totalVolumeUsd: this.round2(Number((_k = summaryRow.total_volume_usd) !== null && _k !== void 0 ? _k : 0)),
                                        averageTransactionUsd: this.round2(Number((_l = summaryRow.average_transaction_usd) !== null && _l !== void 0 ? _l : 0)),
                                    },
                                    assetDistribution: assetRows
                                        .map(function (item) {
                                        var _a, _b, _c, _d;
                                        return ({
                                            asset: ((_a = item.asset) !== null && _a !== void 0 ? _a : "XLM").toUpperCase(),
                                            volumeUsd: _this.round2(Number((_b = item.volume_usd) !== null && _b !== void 0 ? _b : 0)),
                                            percentage: _this.round2(Number((_c = item.percentage) !== null && _c !== void 0 ? _c : 0)),
                                            transactionCount: Number((_d = item.transaction_count) !== null && _d !== void 0 ? _d : 0),
                                        });
                                    })
                                        .sort(function (a, b) { return b.volumeUsd - a.volumeUsd; }),
                                    timeSeries: timeSeriesRows
                                        .map(function (item) {
                                        var _a, _b, _c, _d, _e, _f;
                                        var assetVolumes = (_a = item.asset_volumes) !== null && _a !== void 0 ? _a : {
                                            USDC: Number((_b = item.volume_usdc) !== null && _b !== void 0 ? _b : 0),
                                            XLM: Number((_c = item.volume_xlm) !== null && _c !== void 0 ? _c : 0),
                                        };
                                        return {
                                            period: item.period,
                                            transactionCount: Number((_d = item.transaction_count) !== null && _d !== void 0 ? _d : 0),
                                            successfulTransactions: Number((_e = item.successful_transactions) !== null && _e !== void 0 ? _e : 0),
                                            volumeUsd: _this.round2(Number((_f = item.volume_usd) !== null && _f !== void 0 ? _f : 0)),
                                            assetVolumes: Object.fromEntries(Object.entries(assetVolumes).map(function (_a) {
                                                var asset = _a[0], volume = _a[1];
                                                return [
                                                    asset.toUpperCase(),
                                                    _this.round2(Number(volume !== null && volume !== void 0 ? volume : 0)),
                                                ];
                                            })),
                                        };
                                    })
                                        .sort(function (a, b) { return a.period.localeCompare(b.period); }),
                                    window: {
                                        startDate: startIso,
                                        endDate: endIso,
                                    },
                                }];
                    }
                });
            });
        };
        AnalyticsService_1.prototype.normalizeAndFilterRows = function (rows, publicKey) {
            var _this = this;
            return rows
                .map(function (row) { return _this.normalizeRow(row); })
                .filter(function (row) { return row !== null; })
                .filter(function (row) { return row.publicKeys.includes(publicKey); });
        };
        AnalyticsService_1.prototype.normalizeRow = function (row) {
            var _a, _b;
            var createdAt = this.readString(row, ["created_at", "createdAt"]);
            if (!createdAt) {
                return null;
            }
            var amount = this.readNumber(row, ["amount"]);
            var amountUsdRaw = this.readNumber(row, ["amount_usd", "amountUsd"]);
            var amountUsd = amountUsdRaw > 0 ? amountUsdRaw : amount;
            var asset = ((_a = this.readString(row, ["asset", "asset_code", "assetCode"])) !== null && _a !== void 0 ? _a : "XLM").toUpperCase();
            var status = ((_b = this.readString(row, ["status"])) !== null && _b !== void 0 ? _b : "unknown").toLowerCase();
            var publicKeys = [
                this.readString(row, ["sender_public_key", "from_address", "from"]),
                this.readString(row, ["receiver_public_key", "to_address", "to"]),
                this.readString(row, ["public_key", "publicKey"]),
            ].filter(function (item) { return Boolean(item); });
            if (publicKeys.length === 0) {
                return null;
            }
            return {
                createdAt: createdAt,
                publicKeys: publicKeys,
                asset: asset,
                amount: amount,
                amountUsd: amountUsd,
                status: status,
            };
        };
        AnalyticsService_1.prototype.buildSummary = function (payments) {
            var _this = this;
            var totalTransactions = payments.length;
            var successfulTransactions = payments.filter(function (item) {
                return _this.isSuccessfulStatus(item.status);
            }).length;
            var failedTransactions = payments.filter(function (item) {
                return _this.isFailedStatus(item.status);
            }).length;
            var totalVolumeUsd = this.round2(payments.reduce(function (sum, item) { return sum + item.amountUsd; }, 0));
            var conversionRate = totalTransactions
                ? this.round2((successfulTransactions / totalTransactions) * 100)
                : 0;
            return {
                totalTransactions: totalTransactions,
                successfulTransactions: successfulTransactions,
                failedTransactions: failedTransactions,
                conversionRate: conversionRate,
                totalVolumeUsd: totalVolumeUsd,
                averageTransactionUsd: this.round2(totalVolumeUsd / Math.max(totalTransactions, 1)),
            };
        };
        AnalyticsService_1.prototype.buildAssetDistribution = function (payments) {
            var _this = this;
            var map = new Map();
            var totalVolume = payments.reduce(function (sum, item) { return sum + item.amountUsd; }, 0);
            payments.forEach(function (item) {
                var _a;
                var current = (_a = map.get(item.asset)) !== null && _a !== void 0 ? _a : { volume: 0, count: 0 };
                current.volume += item.amountUsd;
                current.count += 1;
                map.set(item.asset, current);
            });
            return Array.from(map.entries())
                .map(function (_a) {
                var asset = _a[0], value = _a[1];
                return ({
                    asset: asset,
                    volumeUsd: _this.round2(value.volume),
                    percentage: totalVolume > 0 ? _this.round2((value.volume / totalVolume) * 100) : 0,
                    transactionCount: value.count,
                });
            })
                .sort(function (a, b) { return b.volumeUsd - a.volumeUsd; });
        };
        AnalyticsService_1.prototype.buildTimeSeries = function (payments, interval) {
            var _this = this;
            var buckets = new Map();
            payments.forEach(function (item) {
                var _a, _b;
                var key = _this.getBucketKey(item.createdAt, interval);
                var current = (_a = buckets.get(key)) !== null && _a !== void 0 ? _a : {
                    count: 0,
                    successful: 0,
                    volume: 0,
                    assets: {},
                };
                current.count += 1;
                current.volume += item.amountUsd;
                current.assets[item.asset] =
                    ((_b = current.assets[item.asset]) !== null && _b !== void 0 ? _b : 0) + item.amountUsd;
                if (_this.isSuccessfulStatus(item.status)) {
                    current.successful += 1;
                }
                buckets.set(key, current);
            });
            return Array.from(buckets.entries())
                .map(function (_a) {
                var period = _a[0], value = _a[1];
                return ({
                    period: period,
                    transactionCount: value.count,
                    successfulTransactions: value.successful,
                    volumeUsd: _this.round2(value.volume),
                    assetVolumes: Object.fromEntries(Object.entries(value.assets).map(function (_a) {
                        var asset = _a[0], volume = _a[1];
                        return [
                            asset,
                            _this.round2(volume),
                        ];
                    })),
                });
            })
                .sort(function (a, b) { return a.period.localeCompare(b.period); });
        };
        AnalyticsService_1.prototype.getBucketKey = function (createdAt, interval) {
            var date = new Date(createdAt);
            if (Number.isNaN(date.getTime())) {
                return createdAt;
            }
            if (interval === analytics_query_dto_1.AnalyticsInterval.MONTHLY) {
                return "".concat(date.getUTCFullYear(), "-").concat(String(date.getUTCMonth() + 1).padStart(2, "0"));
            }
            if (interval === analytics_query_dto_1.AnalyticsInterval.WEEKLY) {
                var weekStart = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate()));
                var day = weekStart.getUTCDay();
                var mondayShift = day === 0 ? -6 : 1 - day;
                weekStart.setUTCDate(weekStart.getUTCDate() + mondayShift);
                return "".concat(weekStart.getUTCFullYear(), "-W").concat(String(this.getIsoWeek(weekStart)).padStart(2, "0"));
            }
            return "".concat(date.getUTCFullYear(), "-").concat(String(date.getUTCMonth() + 1).padStart(2, "0"), "-").concat(String(date.getUTCDate()).padStart(2, "0"));
        };
        AnalyticsService_1.prototype.getIsoWeek = function (date) {
            var utcDate = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate()));
            var dayNum = utcDate.getUTCDay() || 7;
            utcDate.setUTCDate(utcDate.getUTCDate() + 4 - dayNum);
            var yearStart = new Date(Date.UTC(utcDate.getUTCFullYear(), 0, 1));
            return Math.ceil(((utcDate.getTime() - yearStart.getTime()) / 86400000 + 1) / 7);
        };
        AnalyticsService_1.prototype.isSuccessfulStatus = function (status) {
            return ["completed", "paid", "success", "settled", "confirmed"].includes(status);
        };
        AnalyticsService_1.prototype.isFailedStatus = function (status) {
            return ["failed", "error", "cancelled", "rejected"].includes(status);
        };
        AnalyticsService_1.prototype.readString = function (row, keys) {
            for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
                var key = keys_1[_i];
                var value = row[key];
                if (typeof value === "string" && value.trim().length > 0) {
                    return value.trim();
                }
            }
            return null;
        };
        AnalyticsService_1.prototype.readNumber = function (row, keys) {
            for (var _i = 0, keys_2 = keys; _i < keys_2.length; _i++) {
                var key = keys_2[_i];
                var value = row[key];
                if (typeof value === "number" && Number.isFinite(value)) {
                    return value;
                }
                if (typeof value === "string" && value.trim() !== "") {
                    var parsed = Number(value);
                    if (Number.isFinite(parsed)) {
                        return parsed;
                    }
                }
            }
            return 0;
        };
        AnalyticsService_1.prototype.resolveDateWindow = function (startDate, endDate) {
            var end = endDate ? new Date(endDate) : new Date();
            var start = startDate
                ? new Date(startDate)
                : new Date(end.getTime() - 90 * 24 * 60 * 60 * 1000);
            if (Number.isNaN(start.getTime()) || Number.isNaN(end.getTime())) {
                throw new common_1.BadRequestException({
                    code: "INVALID_DATE_RANGE",
                    message: "startDate and endDate must be valid ISO-8601 strings",
                });
            }
            if (start > end) {
                throw new common_1.BadRequestException({
                    code: "INVALID_DATE_RANGE",
                    message: "startDate must be earlier than or equal to endDate",
                });
            }
            return {
                startIso: start.toISOString(),
                endIso: end.toISOString(),
            };
        };
        AnalyticsService_1.prototype.escapeCsv = function (value) {
            if (value.includes(",") || value.includes('"') || value.includes("\n")) {
                return "\"".concat(value.replace(/"/g, '""'), "\"");
            }
            return value;
        };
        AnalyticsService_1.prototype.createSimplePdf = function (lines) {
            var _this = this;
            var safeLines = lines.map(function (line) { return _this.escapePdfText(line); });
            var content = "BT\n/F1 11 Tf\n50 760 Td\n";
            safeLines.forEach(function (line, index) {
                if (index > 0) {
                    content += "0 -16 Td\n";
                }
                content += "(".concat(line, ") Tj\n");
            });
            content += "ET";
            var objects = [
                "<< /Type /Catalog /Pages 2 0 R >>",
                "<< /Type /Pages /Kids [3 0 R] /Count 1 >>",
                "<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Resources << /Font << /F1 4 0 R >> >> /Contents 5 0 R >>",
                "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>",
                "<< /Length ".concat(Buffer.byteLength(content, "utf8"), " >>\nstream\n").concat(content, "\nendstream"),
            ];
            var pdf = "%PDF-1.4\n";
            var offsets = [0];
            objects.forEach(function (obj, index) {
                offsets[index + 1] = Buffer.byteLength(pdf, "utf8");
                pdf += "".concat(index + 1, " 0 obj\n").concat(obj, "\nendobj\n");
            });
            var xrefOffset = Buffer.byteLength(pdf, "utf8");
            pdf += "xref\n0 ".concat(objects.length + 1, "\n");
            pdf += "0000000000 65535 f \n";
            for (var i = 1; i <= objects.length; i += 1) {
                pdf += "".concat(String(offsets[i]).padStart(10, "0"), " 00000 n \n");
            }
            pdf += "trailer\n<< /Size ".concat(objects.length + 1, " /Root 1 0 R >>\nstartxref\n").concat(xrefOffset, "\n%%EOF");
            return Buffer.from(pdf, "utf8");
        };
        AnalyticsService_1.prototype.escapePdfText = function (value) {
            return value
                .replace(/\\/g, "\\\\")
                .replace(/\(/g, "\\(")
                .replace(/\)/g, "\\)");
        };
        AnalyticsService_1.prototype.round2 = function (value) {
            return Math.round(value * 100) / 100;
        };
        return AnalyticsService_1;
    }());
    __setFunctionName(_classThis, "AnalyticsService");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        AnalyticsService = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return AnalyticsService = _classThis;
}();
exports.AnalyticsService = AnalyticsService;
