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
exports.GlobalHttpExceptionFilter = void 0;
var common_1 = require("@nestjs/common");
var throttler_1 = require("@nestjs/throttler");
var GlobalHttpExceptionFilter = function () {
    var _classDecorators = [(0, common_1.Catch)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var GlobalHttpExceptionFilter = _classThis = /** @class */ (function () {
        function GlobalHttpExceptionFilter_1(config, metricsService) {
            this.config = config;
            this.metricsService = metricsService;
            this.logger = new common_1.Logger(GlobalHttpExceptionFilter.name);
        }
        GlobalHttpExceptionFilter_1.prototype.catch = function (exception, host) {
            var _a, _b, _c, _d, _e, _f, _g, _h;
            var ctx = host.switchToHttp();
            var response = ctx.getResponse();
            var request = ctx.getRequest();
            var isProduction = this.config.isProduction;
            // Extract correlation ID for traceability
            var correlationId = request["correlationId"];
            var status = common_1.HttpStatus.INTERNAL_SERVER_ERROR;
            var code = "INTERNAL_SERVER_ERROR";
            var message = "An unexpected error occurred";
            var details = undefined;
            if (exception instanceof throttler_1.ThrottlerException) {
                status = common_1.HttpStatus.TOO_MANY_REQUESTS;
                code = "RATE_LIMIT_EXCEEDED";
                var retryAfterSeconds = this.getRetryAfterSeconds(response);
                message =
                    retryAfterSeconds > 0
                        ? "Too many requests. Retry after ".concat(retryAfterSeconds, " seconds.")
                        : "Too many requests. Please try again later.";
                details = {
                    retryAfterSeconds: retryAfterSeconds,
                };
                var reqRecord = request;
                var rateLimitContext = (_a = reqRecord["rateLimitContext"]) !== null && _a !== void 0 ? _a : {};
                var route = this.resolveRoute(request);
                (_b = this.metricsService) === null || _b === void 0 ? void 0 : _b.recordRateLimitedRequest(request.method, route, (_c = rateLimitContext.group) !== null && _c !== void 0 ? _c : "public", (_d = rateLimitContext.keyType) !== null && _d !== void 0 ? _d : "ip");
            }
            else if (exception instanceof common_1.HttpException) {
                status = exception.getStatus();
                var res = exception.getResponse();
                if (typeof res === "string") {
                    message = res;
                }
                else if (typeof res === "object" && res !== null) {
                    // ✅ VALIDATION ERRORS
                    if ("fields" in res) {
                        var validation = res;
                        return response.status(status).json({
                            success: false,
                            error: __assign({ code: "VALIDATION_ERROR", message: (_e = validation.message) !== null && _e !== void 0 ? _e : "Validation failed", fields: (_f = validation.fields) !== null && _f !== void 0 ? _f : [] }, (correlationId ? { request_id: correlationId, correlationId: correlationId } : {})),
                        });
                    }
                    // ✅ BUSINESS ERRORS
                    var business = res;
                    code = (_g = business.code) !== null && _g !== void 0 ? _g : exception.name;
                    message = (_h = business.message) !== null && _h !== void 0 ? _h : exception.message;
                    if (business.field) {
                        details = { field: business.field };
                    }
                }
            }
            else if (exception instanceof Error) {
                message = isProduction ? "Internal server error" : exception.message;
                // Log the full stack for server errors
                this.logger.error("Unhandled exception: ".concat(exception.message), exception.stack);
            }
            var body = {
                success: false,
                error: __assign(__assign({ code: code, message: message }, (correlationId ? { request_id: correlationId, correlationId: correlationId } : {})), (details && !isProduction ? { details: details } : {})),
            };
            response.status(status).json(body);
        };
        GlobalHttpExceptionFilter_1.prototype.getRetryAfterSeconds = function (response) {
            var retryAfter = response.getHeader("Retry-After");
            if (typeof retryAfter === "string") {
                var parsed = Number(retryAfter);
                if (!Number.isNaN(parsed) && parsed >= 0)
                    return parsed;
            }
            return 0;
        };
        GlobalHttpExceptionFilter_1.prototype.resolveRoute = function (request) {
            var _a, _b, _c;
            var routePath = (_a = request.route) === null || _a === void 0 ? void 0 : _a.path;
            var baseUrl = (_b = request.baseUrl) !== null && _b !== void 0 ? _b : "";
            if (typeof routePath === "string" && routePath.length > 0) {
                return "".concat(baseUrl).concat(routePath);
            }
            return (_c = request.path) !== null && _c !== void 0 ? _c : request.url;
        };
        return GlobalHttpExceptionFilter_1;
    }());
    __setFunctionName(_classThis, "GlobalHttpExceptionFilter");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        GlobalHttpExceptionFilter = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return GlobalHttpExceptionFilter = _classThis;
}();
exports.GlobalHttpExceptionFilter = GlobalHttpExceptionFilter;
