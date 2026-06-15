"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
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
exports.SentryExceptionFilter = void 0;
var common_1 = require("@nestjs/common");
/**
 * SentryExceptionFilter catches all unhandled exceptions,
 * reports them to Sentry with full request context (sanitised),
 * and then re-throws so the existing GlobalHttpExceptionFilter
 * can handle the HTTP response.
 *
 * This filter should be registered BEFORE GlobalHttpExceptionFilter
 * in the global filter chain so it sees exceptions first.
 */
var SentryExceptionFilter = function () {
    var _classDecorators = [(0, common_1.Catch)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var SentryExceptionFilter = _classThis = /** @class */ (function () {
        function SentryExceptionFilter_1(sentryService, config) {
            this.sentryService = sentryService;
            this.config = config;
            this.logger = new common_1.Logger(SentryExceptionFilter.name);
        }
        SentryExceptionFilter_1.prototype.catch = function (exception, host) {
            var ctx = host.switchToHttp();
            var request = ctx.getRequest();
            // Determine HTTP status for categorisation
            var status = exception instanceof common_1.HttpException
                ? exception.getStatus()
                : common_1.HttpStatus.INTERNAL_SERVER_ERROR;
            // Only report server errors (5xx) and unexpected exceptions to Sentry.
            // 4xx errors are client mistakes and would generate too much noise.
            if (status >= 500 || !(exception instanceof common_1.HttpException)) {
                var requestContext = this.buildRequestContext(request);
                this.sentryService.captureException(exception, __assign(__assign({}, requestContext), { httpStatus: status }));
                this.logger.error("[Sentry] Reported ".concat(status, " error on ").concat(request.method, " ").concat(request.url), exception instanceof Error ? exception.stack : undefined);
            }
            // Re-throw so GlobalHttpExceptionFilter handles the response
            throw exception;
        };
        /**
         * Build a sanitised request context object suitable for Sentry extras.
         * Strips all sensitive fields (authorization, keys, passwords, etc.).
         */
        SentryExceptionFilter_1.prototype.buildRequestContext = function (request) {
            var context = {
                method: request.method,
                url: request.url,
                correlationId: request['correlationId'],
                userAgent: request.headers['user-agent'],
                ip: request.ip,
            };
            // Sanitise query parameters
            if (request.query && Object.keys(request.query).length > 0) {
                context.query = this.sanitise(request.query);
            }
            // Sanitise request body
            if (request.body && Object.keys(request.body).length > 0) {
                context.body = this.sanitise(request.body);
            }
            // Add safe headers (exclude sensitive ones)
            var safeHeaders = {};
            var sensitiveHeaders = new Set([
                'authorization',
                'x-api-key',
                'cookie',
                'set-cookie',
            ]);
            for (var _i = 0, _a = Object.entries(request.headers); _i < _a.length; _i++) {
                var _b = _a[_i], key = _b[0], value = _b[1];
                if (!sensitiveHeaders.has(key.toLowerCase())) {
                    safeHeaders[key] = value;
                }
            }
            context.headers = safeHeaders;
            return context;
        };
        /**
         * Deep-sanitise an object by redacting known sensitive field names.
         */
        SentryExceptionFilter_1.prototype.sanitise = function (obj) {
            var sensitiveFields = new Set([
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
            var sanitised = {};
            for (var _i = 0, _a = Object.entries(obj); _i < _a.length; _i++) {
                var _b = _a[_i], key = _b[0], value = _b[1];
                if (sensitiveFields.has(key.toLowerCase()) || sensitiveFields.has(key)) {
                    sanitised[key] = '[REDACTED]';
                }
                else if (value &&
                    typeof value === 'object' &&
                    !Array.isArray(value)) {
                    sanitised[key] = this.sanitise(value);
                }
                else {
                    sanitised[key] = value;
                }
            }
            return sanitised;
        };
        return SentryExceptionFilter_1;
    }());
    __setFunctionName(_classThis, "SentryExceptionFilter");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        SentryExceptionFilter = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return SentryExceptionFilter = _classThis;
}();
exports.SentryExceptionFilter = SentryExceptionFilter;
