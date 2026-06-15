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
exports.IndexerLagService = void 0;
var common_1 = require("@nestjs/common");
var schedule_1 = require("@nestjs/schedule");
var stellar_config_1 = require("../config/stellar.config");
var IndexerLagService = function () {
    var _classDecorators = [(0, common_1.Injectable)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _instanceExtraInitializers = [];
    var _pollHorizon_decorators;
    var IndexerLagService = _classThis = /** @class */ (function () {
        function IndexerLagService_1(config, checkpointRepo, metrics) {
            this.config = (__runInitializers(this, _instanceExtraInitializers), config);
            this.checkpointRepo = checkpointRepo;
            this.metrics = metrics;
            this.logger = new common_1.Logger(IndexerLagService.name);
            this.currentNetworkLedger = null;
            this.lastIndexedLedger = null;
            this.horizonUrl = stellar_config_1.HORIZON_BASE_URLS[this.config.network];
        }
        IndexerLagService_1.prototype.onModuleInit = function () {
            this.pollHorizon();
        };
        IndexerLagService_1.prototype.pollHorizon = function () {
            return __awaiter(this, void 0, void 0, function () {
                var res, body, ledger, error_1, lastIndexed, error_2;
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _b.trys.push([0, 3, , 4]);
                            return [4 /*yield*/, fetch("".concat(this.horizonUrl), {
                                    headers: { Accept: "application/json" },
                                })];
                        case 1:
                            res = _b.sent();
                            if (!res.ok)
                                throw new Error("Horizon returned ".concat(res.status));
                            return [4 /*yield*/, res.json()];
                        case 2:
                            body = (_b.sent());
                            ledger = (_a = body.core_latest_ledger) !== null && _a !== void 0 ? _a : body.history_latest_ledger;
                            if (ledger !== undefined) {
                                this.currentNetworkLedger = ledger;
                            }
                            return [3 /*break*/, 4];
                        case 3:
                            error_1 = _b.sent();
                            this.logger.error("Failed to fetch current network ledger", error_1);
                            return [3 /*break*/, 4];
                        case 4:
                            if (!this.config.RustAcademyContractId) return [3 /*break*/, 8];
                            _b.label = 5;
                        case 5:
                            _b.trys.push([5, 7, , 8]);
                            return [4 /*yield*/, this.checkpointRepo.getLastLedger(this.config.RustAcademyContractId)];
                        case 6:
                            lastIndexed = _b.sent();
                            if (lastIndexed !== null) {
                                this.lastIndexedLedger = lastIndexed;
                            }
                            return [3 /*break*/, 8];
                        case 7:
                            error_2 = _b.sent();
                            this.logger.error("Failed to fetch last indexed ledger", error_2);
                            return [3 /*break*/, 8];
                        case 8:
                            this.updateMetrics();
                            return [2 /*return*/];
                    }
                });
            });
        };
        IndexerLagService_1.prototype.getStatus = function () {
            var lagLedgers = null;
            if (this.currentNetworkLedger !== null && this.lastIndexedLedger !== null) {
                lagLedgers = Math.max(0, this.currentNetworkLedger - this.lastIndexedLedger);
            }
            return {
                currentNetworkLedger: this.currentNetworkLedger,
                lastIndexedLedger: this.lastIndexedLedger,
                lagLedgers: lagLedgers,
                isLagging: lagLedgers !== null &&
                    lagLedgers > this.config.indexerLagThresholdLedgers,
                isEnabled: this.config.indexerLagGuardEnabled,
                isOverridden: this.config.indexerLagGuardOverride,
                thresholdLedgers: this.config.indexerLagThresholdLedgers,
            };
        };
        IndexerLagService_1.prototype.isBlocked = function () {
            var status = this.getStatus();
            if (!status.isEnabled)
                return false;
            if (status.isOverridden)
                return false;
            return status.isLagging;
        };
        IndexerLagService_1.prototype.updateMetrics = function () {
            var status = this.getStatus();
            if (status.lagLedgers !== null) {
                this.metrics.recordIndexerLag(status.lagLedgers);
            }
            if (!status.isEnabled) {
                this.metrics.setIndexerLagGuardStatus(0);
            }
            else if (status.isOverridden) {
                this.metrics.setIndexerLagGuardStatus(2);
            }
            else if (status.isLagging) {
                this.metrics.setIndexerLagGuardStatus(3);
            }
            else {
                this.metrics.setIndexerLagGuardStatus(1);
            }
        };
        return IndexerLagService_1;
    }());
    __setFunctionName(_classThis, "IndexerLagService");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _pollHorizon_decorators = [(0, schedule_1.Cron)(schedule_1.CronExpression.EVERY_MINUTE)];
        __esDecorate(_classThis, null, _pollHorizon_decorators, { kind: "method", name: "pollHorizon", static: false, private: false, access: { has: function (obj) { return "pollHorizon" in obj; }, get: function (obj) { return obj.pollHorizon; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        IndexerLagService = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return IndexerLagService = _classThis;
}();
exports.IndexerLagService = IndexerLagService;
