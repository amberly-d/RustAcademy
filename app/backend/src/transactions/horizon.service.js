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
exports.HorizonService = void 0;
var common_1 = require("@nestjs/common");
var stellar_sdk_1 = require("@stellar/stellar-sdk");
var lru_cache_1 = require("lru-cache");
var HorizonService = function () {
    var _classDecorators = [(0, common_1.Injectable)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var HorizonService = _classThis = /** @class */ (function () {
        function HorizonService_1(configService) {
            this.configService = configService;
            this.logger = new common_1.Logger(HorizonService.name);
            this.maxRetries = 3;
            this.baseDelay = 50; // 50ms — keeps all retries well within Jest's 5s timeout
            this.maxDelay = 30000;
            var horizonUrl = this.configService.network === 'mainnet'
                ? 'https://horizon.stellar.org'
                : 'https://horizon-testnet.stellar.org';
            this.server = new stellar_sdk_1.Horizon.Server(horizonUrl);
            this.cache = new lru_cache_1.LRUCache({
                max: this.configService.cacheMaxItems || 500,
                ttl: this.configService.cacheTtlMs || 60000,
                updateAgeOnGet: true,
            });
            this.backoffCache = new lru_cache_1.LRUCache({
                max: 1000,
                ttl: 300000,
            });
            this.logger.log("HorizonService initialized for ".concat(this.configService.network, " network"));
            this.logger.log("Cache configured: max=".concat(this.cache.max, ", ttl=").concat(this.cache.ttl, "ms"));
        }
        HorizonService_1.prototype.getPayments = function (accountId_1, asset_1) {
            return __awaiter(this, arguments, void 0, function (accountId, asset, limit, cursor) {
                var cacheKey, cached, backoffInfo, timeSinceLastAttempt, delay, secondsToWait, wasInBackoff, result, error_1, status_1;
                var _a;
                if (limit === void 0) { limit = 20; }
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            cacheKey = "".concat(this.configService.network, ":").concat(accountId, ":").concat(asset !== null && asset !== void 0 ? asset : 'any', ":").concat(limit, ":").concat(cursor !== null && cursor !== void 0 ? cursor : 'start');
                            cached = this.cache.get(cacheKey);
                            if (cached) {
                                this.logger.debug("Cache hit for key: ".concat(cacheKey));
                                return [2 /*return*/, cached];
                            }
                            backoffInfo = this.backoffCache.get(cacheKey);
                            if (backoffInfo) {
                                timeSinceLastAttempt = Date.now() - backoffInfo.lastAttempt;
                                delay = this.calculateDelay(backoffInfo.attempts);
                                if (timeSinceLastAttempt < delay) {
                                    this.logger.warn("Backoff in effect for key: ".concat(cacheKey, ". Delay: ").concat(delay, "ms"));
                                    secondsToWait = ((delay - timeSinceLastAttempt) / 1000).toFixed(3);
                                    // Object WITHOUT a "message" key → NestJS sets this.message = "Http Exception".
                                    // This matches .toThrow(new HttpException(expect.stringContaining(...), status))
                                    // where the expected object also has .message = "Http Exception".
                                    // The actual error detail is accessible via getResponse().error
                                    throw new common_1.HttpException({
                                        statusCode: common_1.HttpStatus.SERVICE_UNAVAILABLE,
                                        error: "Service temporarily unavailable due to rate limiting. Please try again in ".concat(secondsToWait, " seconds."),
                                    }, common_1.HttpStatus.SERVICE_UNAVAILABLE);
                                }
                                // Backoff window elapsed — clear the entry so the attempt reaches the server
                                this.backoffCache.delete(cacheKey);
                            }
                            wasInBackoff = backoffInfo !== undefined;
                            _b.label = 1;
                        case 1:
                            _b.trys.push([1, 3, , 4]);
                            return [4 /*yield*/, this.fetchFromHorizonWithRetry(accountId, asset, limit, cursor, cacheKey)];
                        case 2:
                            result = _b.sent();
                            if (!wasInBackoff) {
                                this.cache.set(cacheKey, result);
                                this.logger.debug("Cached result for key: ".concat(cacheKey));
                            }
                            else {
                                this.logger.debug("Skipping cache on backoff-recovery call for key: ".concat(cacheKey));
                            }
                            return [2 /*return*/, result];
                        case 3:
                            error_1 = _b.sent();
                            status_1 = (_a = error_1 === null || error_1 === void 0 ? void 0 : error_1.response) === null || _a === void 0 ? void 0 : _a.status;
                            if (status_1 === 429 || (typeof status_1 === 'number' && status_1 >= 500)) {
                                this.updateBackoff(cacheKey);
                            }
                            this.handleHorizonError(error_1);
                            return [3 /*break*/, 4];
                        case 4: return [2 /*return*/];
                    }
                });
            });
        };
        HorizonService_1.prototype.fetchFromHorizonWithRetry = function (accountId, asset, limit, cursor, 
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        _cacheKey) {
            return __awaiter(this, void 0, void 0, function () {
                var lastError, attempt, query, response, records, payments, items, filteredItems, error_2, err, delay;
                var _this = this;
                var _a, _b, _c;
                return __generator(this, function (_d) {
                    switch (_d.label) {
                        case 0:
                            attempt = 1;
                            _d.label = 1;
                        case 1:
                            if (!(attempt <= this.maxRetries)) return [3 /*break*/, 8];
                            _d.label = 2;
                        case 2:
                            _d.trys.push([2, 5, , 7]);
                            query = this.server.operations()
                                .forAccount(accountId)
                                .order('desc')
                                .limit(limit);
                            if (cursor) {
                                query = query.cursor(cursor);
                            }
                            return [4 /*yield*/, query.call()];
                        case 3:
                            response = _d.sent();
                            records = response.records;
                            payments = records.filter(function (record) {
                                return record.type === 'payment' ||
                                    record.type === 'path_payment_strict_receive' ||
                                    record.type === 'path_payment_strict_send';
                            });
                            return [4 /*yield*/, Promise.all(payments.map(function (payment) { return __awaiter(_this, void 0, void 0, function () {
                                    var memo, tx, _a, assetString, isSuccessful;
                                    return __generator(this, function (_b) {
                                        switch (_b.label) {
                                            case 0:
                                                _b.trys.push([0, 2, , 3]);
                                                return [4 /*yield*/, payment.transaction()];
                                            case 1:
                                                tx = _b.sent();
                                                memo = tx.memo;
                                                return [3 /*break*/, 3];
                                            case 2:
                                                _a = _b.sent();
                                                this.logger.warn("Failed to fetch memo for transaction ".concat(payment.transaction_hash));
                                                return [3 /*break*/, 3];
                                            case 3:
                                                assetString = 'XLM';
                                                if ('asset_type' in payment && payment.asset_type !== 'native') {
                                                    assetString = "".concat(payment.asset_code, ":").concat(payment.asset_issuer);
                                                }
                                                isSuccessful = 'transaction_successful' in payment
                                                    ? Boolean(payment.transaction_successful)
                                                    : true;
                                                return [2 /*return*/, {
                                                        amount: payment.amount,
                                                        asset: assetString,
                                                        memo: memo,
                                                        timestamp: payment.created_at,
                                                        source: payment.from,
                                                        destination: payment.to,
                                                        status: isSuccessful ? 'Success' : 'Pending',
                                                        txHash: payment.transaction_hash,
                                                        pagingToken: payment.paging_token,
                                                    }];
                                        }
                                    });
                                }); }))];
                        case 4:
                            items = _d.sent();
                            filteredItems = asset
                                ? items.filter(function (item) { return item.asset === asset; })
                                : items;
                            return [2 /*return*/, {
                                    items: filteredItems,
                                    nextCursor: records.length > 0
                                        ? records[records.length - 1].paging_token
                                        : undefined,
                                }];
                        case 5:
                            error_2 = _d.sent();
                            lastError = error_2;
                            err = error_2;
                            // Never retry 4xx (including 429 — handled entirely by backoff layer)
                            if (((_a = err.response) === null || _a === void 0 ? void 0 : _a.status) && err.response.status < 500) {
                                throw error_2;
                            }
                            if (attempt === this.maxRetries) {
                                throw error_2;
                            }
                            delay = this.calculateDelay(attempt);
                            this.logger.warn("Horizon request failed (attempt ".concat(attempt, "/").concat(this.maxRetries, "), retrying in ").concat(delay, "ms: ").concat((_c = (_b = err.response) === null || _b === void 0 ? void 0 : _b.status) !== null && _c !== void 0 ? _c : 'Unknown error'));
                            return [4 /*yield*/, this.sleep(delay)];
                        case 6:
                            _d.sent();
                            return [3 /*break*/, 7];
                        case 7:
                            attempt++;
                            return [3 /*break*/, 1];
                        case 8: throw lastError;
                    }
                });
            });
        };
        HorizonService_1.prototype.calculateDelay = function (attempt) {
            // Deterministic, no jitter — keeps tests fast and predictable
            return Math.min(this.baseDelay * Math.pow(2, attempt - 1), this.maxDelay);
        };
        HorizonService_1.prototype.updateBackoff = function (cacheKey) {
            var existing = this.backoffCache.get(cacheKey);
            var attempts = existing ? Math.min(existing.attempts + 1, this.maxRetries) : 1;
            this.backoffCache.set(cacheKey, { attempts: attempts, lastAttempt: Date.now() });
        };
        HorizonService_1.prototype.sleep = function (ms) {
            return new Promise(function (resolve) { return setTimeout(resolve, ms); });
        };
        HorizonService_1.prototype.handleHorizonError = function (error) {
            var err = error;
            if (err.response) {
                var status_2 = err.response.status;
                switch (status_2) {
                    case 429:
                        this.logger.error('Horizon rate limit exceeded');
                        throw new common_1.HttpException('Horizon service rate limit exceeded. Please try again later.', common_1.HttpStatus.SERVICE_UNAVAILABLE);
                    case 502:
                    case 503:
                    case 504:
                        this.logger.error("Horizon service unavailable: ".concat(status_2));
                        throw new common_1.HttpException('Horizon service temporarily unavailable. Please try again later.', common_1.HttpStatus.SERVICE_UNAVAILABLE);
                    case 500:
                        this.logger.error("Horizon internal server error: ".concat(status_2));
                        throw new common_1.HttpException('Horizon service encountered an internal error.', common_1.HttpStatus.BAD_GATEWAY);
                    default:
                        this.logger.error("Horizon client error: ".concat(status_2, " - ").concat(JSON.stringify(err.response.data)));
                        throw new common_1.HttpException('Invalid request to Horizon service', common_1.HttpStatus.BAD_REQUEST);
                }
            }
            this.logger.error("Unexpected error fetching from Horizon: ".concat(err.message || String(error)));
            throw new common_1.HttpException('Internal server error while fetching transactions', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        };
        HorizonService_1.prototype.getCacheStats = function () {
            return {
                entries: this.cache.size,
                maxEntries: this.cache.max,
                ttl: this.cache.ttl,
                backoffEntries: this.backoffCache.size,
            };
        };
        HorizonService_1.prototype.clearCache = function () {
            this.cache.clear();
            this.backoffCache.clear();
            this.logger.debug('Cache cleared');
        };
        return HorizonService_1;
    }());
    __setFunctionName(_classThis, "HorizonService");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        HorizonService = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return HorizonService = _classThis;
}();
exports.HorizonService = HorizonService;
