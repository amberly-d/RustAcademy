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
exports.AssetMetadataCache = void 0;
var common_1 = require("@nestjs/common");
var lru_cache_1 = require("lru-cache");
var AssetMetadataCache = function () {
    var _classDecorators = [(0, common_1.Injectable)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var AssetMetadataCache = _classThis = /** @class */ (function () {
        function AssetMetadataCache_1() {
            this.logger = new common_1.Logger(AssetMetadataCache.name);
            this.DEFAULT_TTL_MS = 1000 * 60 * 60 * 24; // 24 hours
            this.cache = new lru_cache_1.LRUCache({
                max: 500, // Maximum 500 assets cached
                ttl: this.DEFAULT_TTL_MS,
                updateAgeOnGet: true,
                updateAgeOnHas: true,
            });
            this.logger.log('Asset metadata cache initialized');
        }
        /**
         * Get cached asset metadata by asset code
         */
        AssetMetadataCache_1.prototype.get = function (code) {
            var key = this.getCacheKey(code);
            var cached = this.cache.get(key);
            if (cached) {
                this.logger.debug("Cache hit for asset: ".concat(code));
            }
            return cached;
        };
        /**
         * Set asset metadata in cache
         */
        AssetMetadataCache_1.prototype.set = function (code, metadata) {
            var key = this.getCacheKey(code);
            this.cache.set(key, metadata);
            this.logger.debug("Cached metadata for asset: ".concat(code));
        };
        /**
         * Check if asset metadata is cached and not expired
         */
        AssetMetadataCache_1.prototype.has = function (code) {
            var key = this.getCacheKey(code);
            return this.cache.has(key);
        };
        /**
         * Delete cached asset metadata
         */
        AssetMetadataCache_1.prototype.delete = function (code) {
            var key = this.getCacheKey(code);
            return this.cache.delete(key);
        };
        /**
         * Clear all cached metadata
         */
        AssetMetadataCache_1.prototype.clear = function () {
            this.cache.clear();
            this.logger.log('Asset metadata cache cleared');
        };
        /**
         * Get cache statistics
         */
        AssetMetadataCache_1.prototype.getStats = function () {
            return {
                size: this.cache.size,
                maxSize: this.cache.max,
                ttl: this.DEFAULT_TTL_MS,
            };
        };
        AssetMetadataCache_1.prototype.getCacheKey = function (code) {
            return "asset:".concat(code.toUpperCase());
        };
        return AssetMetadataCache_1;
    }());
    __setFunctionName(_classThis, "AssetMetadataCache");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        AssetMetadataCache = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return AssetMetadataCache = _classThis;
}();
exports.AssetMetadataCache = AssetMetadataCache;
