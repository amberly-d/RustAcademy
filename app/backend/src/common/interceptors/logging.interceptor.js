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
exports.LoggingInterceptor = void 0;
var common_1 = require("@nestjs/common");
var operators_1 = require("rxjs/operators");
/**
 * LoggingInterceptor logs every HTTP request with full request context
 * while stripping sensitive fields from the body.
 *
 * Logged context includes:
 *   - HTTP method and URL
 *   - Correlation ID (from CorrelationIdMiddleware)
 *   - Response time in milliseconds
 *   - Sanitised request body (passwords, tokens, secrets removed)
 *   - Error message and status code on failure
 */
var LoggingInterceptor = function () {
    var _classDecorators = [(0, common_1.Injectable)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var LoggingInterceptor = _classThis = /** @class */ (function () {
        function LoggingInterceptor_1() {
            this.logger = new common_1.Logger(LoggingInterceptor.name);
        }
        LoggingInterceptor_1.prototype.intercept = function (context, next) {
            var _this = this;
            var request = context.switchToHttp().getRequest();
            var method = request.method, url = request.url, body = request.body, route = request.route;
            var correlationId = request['correlationId'] || 'N/A';
            var userId = this.extractUserId(request);
            var routePath = (route === null || route === void 0 ? void 0 : route.path) || url;
            var now = Date.now();
            var sanitizedBody = this.sanitise(body);
            return next.handle().pipe((0, operators_1.tap)({
                next: function () {
                    var duration = Date.now() - now;
                    _this.logger.log(JSON.stringify({
                        correlationId: correlationId,
                        userId: userId,
                        route: routePath,
                        method: method,
                        url: url,
                        duration: "".concat(duration, "ms"),
                        body: sanitizedBody,
                        status: 'success',
                    }));
                },
                error: function (error) {
                    var duration = Date.now() - now;
                    var statusCode = error instanceof common_1.HttpException ? error.getStatus() : 500;
                    _this.logger.error(JSON.stringify({
                        correlationId: correlationId,
                        userId: userId,
                        route: routePath,
                        method: method,
                        url: url,
                        duration: "".concat(duration, "ms"),
                        status: 'error',
                        statusCode: statusCode,
                        errorMessage: error.message,
                    }));
                },
            }));
        };
        /**
         * Extract user_id from request if available (from auth context, API key, etc.)
         */
        LoggingInterceptor_1.prototype.extractUserId = function (request) {
            // Try to get from user object (if authenticated)
            var user = request.user;
            if (user === null || user === void 0 ? void 0 : user.id) {
                return user.id;
            }
            // Try to get from API key context
            var apiKey = request.apiKey;
            if (apiKey === null || apiKey === void 0 ? void 0 : apiKey.userId) {
                return apiKey.userId;
            }
            // Try to get from public key (Stellar wallet)
            var publicKey = request.publicKey;
            if (publicKey) {
                return publicKey;
            }
            return undefined;
        };
        /**
         * Deep-sanitise a body object by redacting sensitive fields.
         */
        LoggingInterceptor_1.prototype.sanitise = function (obj) {
            if (!obj || typeof obj !== 'object')
                return obj;
            var result = {};
            for (var _i = 0, _a = Object.entries(obj); _i < _a.length; _i++) {
                var _b = _a[_i], key = _b[0], value = _b[1];
                if (LoggingInterceptor.SENSITIVE_FIELDS.has(key.toLowerCase()) ||
                    LoggingInterceptor.SENSITIVE_FIELDS.has(key)) {
                    result[key] = '[REDACTED]';
                }
                else if (value && typeof value === 'object' && !Array.isArray(value)) {
                    result[key] = this.sanitise(value);
                }
                else {
                    result[key] = value;
                }
            }
            return result;
        };
        return LoggingInterceptor_1;
    }());
    __setFunctionName(_classThis, "LoggingInterceptor");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        LoggingInterceptor = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
    })();
    /** Fields that must never appear in logs */
    _classThis.SENSITIVE_FIELDS = new Set([
        'password',
        'token',
        'secret',
        'secretKey',
        'secret_key',
        'apiKey',
        'api_key',
        'authorization',
        'mnemonic',
        'seed',
        'private_key',
        'privateKey',
        'stellar_secret_key',
    ]);
    (function () {
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return LoggingInterceptor = _classThis;
}();
exports.LoggingInterceptor = LoggingInterceptor;
