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
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiscoveryCacheService = void 0;
var common_1 = require("@nestjs/common");
var lru_cache_1 = require("lru-cache");
var DiscoveryCacheService = function () {
    var _classDecorators = [(0, common_1.Injectable)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var DiscoveryCacheService = _classThis = /** @class */ (function () {
        function DiscoveryCacheService_1() {
            this.logger = new common_1.Logger(DiscoveryCacheService.name);
            this.SEARCH_TTL_MS = 1000 * 60 * 15; // 15 minutes
            this.TRENDING_TTL_MS = 1000 * 60 * 30; // 30 minutes
            this.RECENTLY_ACTIVE_TTL_MS = 1000 * 60 * 10; // 10 minutes
            this.searchCache = new lru_cache_1.LRUCache({
                max: 1000, // Maximum 1000 search queries cached
                ttl: this.SEARCH_TTL_MS,
                updateAgeOnGet: true,
            });
            this.trendingCache = new lru_cache_1.LRUCache({
                max: 100, // Maximum 100 different trending queries cached
                ttl: this.TRENDING_TTL_MS,
                updateAgeOnGet: true,
            });
            this.recentlyActiveCache = new lru_cache_1.LRUCache({
                max: 100, // Maximum 100 different recently active queries cached
                ttl: this.RECENTLY_ACTIVE_TTL_MS,
                updateAgeOnGet: true,
            });
            this.logger.log('Discovery cache service initialized');
        }
        // Search cache methods
        DiscoveryCacheService_1.prototype.getSearchResults = function (query, limit) {
            var key = this.getSearchCacheKey(query, limit);
            var cached = this.searchCache.get(key);
            if (cached) {
                this.logger.debug("Search cache hit for query: ".concat(query));
                return cached.results;
            }
            return undefined;
        };
        DiscoveryCacheService_1.prototype.setSearchResults = function (query, limit, results) {
            var key = this.getSearchCacheKey(query, limit);
            this.searchCache.set(key, {
                results: results,
                timestamp: Date.now(),
            });
            this.logger.debug("Cached search results for query: ".concat(query));
        };
        // Trending cache methods
        DiscoveryCacheService_1.prototype.getTrendingResults = function (timeWindowHours, limit) {
            var key = this.getTrendingCacheKey(timeWindowHours, limit);
            var cached = this.trendingCache.get(key);
            if (cached) {
                this.logger.debug("Trending cache hit for window: ".concat(timeWindowHours, "h"));
                return cached.results;
            }
            return undefined;
        };
        DiscoveryCacheService_1.prototype.setTrendingResults = function (timeWindowHours, limit, results) {
            var key = this.getTrendingCacheKey(timeWindowHours, limit);
            this.trendingCache.set(key, {
                results: results,
                timestamp: Date.now(),
            });
            this.logger.debug("Cached trending results for window: ".concat(timeWindowHours, "h"));
        };
        // Recently active cache methods
        DiscoveryCacheService_1.prototype.getRecentlyActiveResults = function (timeWindowHours, limit) {
            var key = this.getRecentlyActiveCacheKey(timeWindowHours, limit);
            var cached = this.recentlyActiveCache.get(key);
            if (cached) {
                this.logger.debug("Recently active cache hit for window: ".concat(timeWindowHours, "h"));
                return cached.results;
            }
            return undefined;
        };
        DiscoveryCacheService_1.prototype.setRecentlyActiveResults = function (timeWindowHours, limit, results) {
            var key = this.getRecentlyActiveCacheKey(timeWindowHours, limit);
            this.recentlyActiveCache.set(key, {
                results: results,
                timestamp: Date.now(),
            });
            this.logger.debug("Cached recently active results for window: ".concat(timeWindowHours, "h"));
        };
        // Cache invalidation methods
        DiscoveryCacheService_1.prototype.invalidateSearchCache = function (query) {
            var _this = this;
            if (query) {
                var keysToDelete = [];
                for (var _i = 0, _a = this.searchCache.keys(); _i < _a.length; _i++) {
                    var key = _a[_i];
                    if (key.includes(query.toLowerCase())) {
                        keysToDelete.push(key);
                    }
                }
                keysToDelete.forEach(function (key) { return _this.searchCache.delete(key); });
                this.logger.debug("Invalidated search cache for query: ".concat(query));
            }
            else {
                this.searchCache.clear();
                this.logger.log('Cleared all search cache');
            }
        };
        DiscoveryCacheService_1.prototype.invalidateTrendingCache = function () {
            this.trendingCache.clear();
            this.logger.log('Cleared trending cache');
        };
        DiscoveryCacheService_1.prototype.invalidateRecentlyActiveCache = function () {
            this.recentlyActiveCache.clear();
            this.logger.log('Cleared recently active cache');
        };
        // Cache statistics
        DiscoveryCacheService_1.prototype.getStats = function () {
            return {
                search: {
                    size: this.searchCache.size,
                    maxSize: this.searchCache.max,
                    ttl: this.SEARCH_TTL_MS,
                },
                trending: {
                    size: this.trendingCache.size,
                    maxSize: this.trendingCache.max,
                    ttl: this.TRENDING_TTL_MS,
                },
                recentlyActive: {
                    size: this.recentlyActiveCache.size,
                    maxSize: this.recentlyActiveCache.max,
                    ttl: this.RECENTLY_ACTIVE_TTL_MS,
                },
            };
        };
        // Private cache key generation methods
        DiscoveryCacheService_1.prototype.getSearchCacheKey = function (query, limit) {
            return "search:".concat(query.toLowerCase(), ":").concat(limit);
        };
        DiscoveryCacheService_1.prototype.getTrendingCacheKey = function (timeWindowHours, limit) {
            return "trending:".concat(timeWindowHours, ":").concat(limit);
        };
        DiscoveryCacheService_1.prototype.getRecentlyActiveCacheKey = function (timeWindowHours, limit) {
            return "recent:".concat(timeWindowHours, ":").concat(limit);
        };
        return DiscoveryCacheService_1;
    }());
    __setFunctionName(_classThis, "DiscoveryCacheService");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        DiscoveryCacheService = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return DiscoveryCacheService = _classThis;
}();
exports.DiscoveryCacheService = DiscoveryCacheService;
