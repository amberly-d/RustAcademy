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
exports.ShadowTrafficMiddleware = void 0;
var common_1 = require("@nestjs/common");
/**
 * ShadowTrafficMiddleware duplicates read-only requests to production
 * for testing and validation purposes without affecting the staging response.
 *
 * This middleware:
 * - Only operates when SHADOW_TRAFFIC_ENABLED is true
 * - Only shadows GET requests (read-only)
 * - Samples requests based on SHADOW_TRAFFIC_SAMPLE_RATE
 * - Only shadows endpoints listed in SHADOW_TRAFFIC_ENDPOINTS
 * - Never blocks or modifies the original request/response
 * - Logs all shadow attempts for monitoring
 *
 * CRITICAL: This middleware NEVER performs writes and is clearly gated behind
 * environment variables.
 */
var ShadowTrafficMiddleware = function () {
    var _classDecorators = [(0, common_1.Injectable)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var ShadowTrafficMiddleware = _classThis = /** @class */ (function () {
        function ShadowTrafficMiddleware_1(config, metricsService) {
            this.config = config;
            this.metricsService = metricsService;
            this.logger = new common_1.Logger(ShadowTrafficMiddleware.name);
            // Parse shadow endpoints from comma-separated string
            var endpointsStr = this.config.shadowTrafficEndpoints;
            this.shadowEndpoints = new Set(endpointsStr
                .split(",")
                .map(function (e) { return e.trim(); })
                .filter(function (e) { return e.length > 0; }));
        }
        ShadowTrafficMiddleware_1.prototype.use = function (req, res, next) {
            // Skip if shadow traffic is not enabled
            if (!this.config.shadowTrafficEnabled) {
                return next();
            }
            // Only shadow GET requests (read-only)
            if (req.method !== "GET") {
                return next();
            }
            // Check if this endpoint should be shadowed
            var shouldShadow = this.shouldShadowEndpoint(req.path);
            if (!shouldShadow) {
                return next();
            }
            // Apply sampling rate
            if (!this.shouldSample()) {
                this.metricsService.recordShadowTrafficRequest(req.method, req.path, res.statusCode, "skipped");
                return next();
            }
            // Fire and forget - shadow the request
            this.shadowRequest(req);
            // Continue with original request without waiting
            next();
        };
        /**
         * Check if the endpoint should be shadowed
         */
        ShadowTrafficMiddleware_1.prototype.shouldShadowEndpoint = function (path) {
            for (var _i = 0, _a = this.shadowEndpoints; _i < _a.length; _i++) {
                var endpoint = _a[_i];
                if (path.startsWith(endpoint)) {
                    return true;
                }
            }
            return false;
        };
        /**
         * Determine if this request should be sampled based on sample rate
         */
        ShadowTrafficMiddleware_1.prototype.shouldSample = function () {
            var sampleRate = this.config.shadowTrafficSampleRate;
            return Math.random() < sampleRate;
        };
        /**
         * Shadow the request to production
         * This is fire-and-forget and never affects the original response
         */
        ShadowTrafficMiddleware_1.prototype.shadowRequest = function (req) {
            var _this = this;
            var productionUrl = this.config.productionBaseUrl;
            if (!productionUrl) {
                this.logger.warn("Shadow traffic enabled but PRODUCTION_BASE_URL not configured");
                return;
            }
            // Build the shadow URL
            var shadowUrl = "".concat(productionUrl).concat(req.originalUrl);
            // Log shadow attempt
            this.logger.debug("Shadowing request: ".concat(req.method, " ").concat(req.path, " -> ").concat(shadowUrl));
            // Fire and forget - use fetch with timeout
            var controller = new AbortController();
            var timeoutId = setTimeout(function () { return controller.abort(); }, 5000); // 5 second timeout
            fetch(shadowUrl, {
                method: req.method,
                headers: this.sanitiseHeaders(req.headers),
                signal: controller.signal,
            })
                .then(function (response) {
                clearTimeout(timeoutId);
                _this.metricsService.recordShadowTrafficRequest(req.method, req.path, response.status, "success");
                _this.logger.debug("Shadow request successful: ".concat(req.method, " ").concat(req.path, " -> ").concat(response.status));
            })
                .catch(function (error) {
                clearTimeout(timeoutId);
                _this.metricsService.recordShadowTrafficRequest(req.method, req.path, 0, "error");
                // Log errors but don't fail the original request
                if (error.name === "AbortError") {
                    _this.logger.warn("Shadow request timeout: ".concat(req.method, " ").concat(req.path));
                }
                else {
                    _this.logger.warn("Shadow request failed: ".concat(req.method, " ").concat(req.path, " - ").concat(error.message));
                }
            });
        };
        /**
         * Sanitize headers to remove sensitive information
         * Never forward authentication tokens or API keys to production
         */
        ShadowTrafficMiddleware_1.prototype.sanitiseHeaders = function (headers) {
            var sensitiveHeaders = new Set([
                "authorization",
                "x-api-key",
                "cookie",
                "set-cookie",
                "x-auth-token",
                "access-token",
            ]);
            var sanitized = {};
            for (var _i = 0, _a = Object.entries(headers); _i < _a.length; _i++) {
                var _b = _a[_i], key = _b[0], value = _b[1];
                if (sensitiveHeaders.has(key.toLowerCase())) {
                    continue; // Skip sensitive headers
                }
                if (typeof value === "string") {
                    sanitized[key] = value;
                }
                else if (Array.isArray(value)) {
                    sanitized[key] = value.join(",");
                }
            }
            // Add shadow marker header for production to identify shadow traffic
            sanitized["X-Shadow-Traffic"] = "true";
            return sanitized;
        };
        return ShadowTrafficMiddleware_1;
    }());
    __setFunctionName(_classThis, "ShadowTrafficMiddleware");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        ShadowTrafficMiddleware = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return ShadowTrafficMiddleware = _classThis;
}();
exports.ShadowTrafficMiddleware = ShadowTrafficMiddleware;
