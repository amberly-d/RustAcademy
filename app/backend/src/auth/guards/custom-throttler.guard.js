"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
exports.CustomThrottlerGuard = void 0;
var common_1 = require("@nestjs/common");
var core_1 = require("@nestjs/core");
var throttler_1 = require("@nestjs/throttler");
var rate_limit_config_1 = require("../../config/rate-limit.config");
var metrics_service_1 = require("../../metrics/metrics.service");
var CustomThrottlerGuard = function () {
    var _classDecorators = [(0, common_1.Injectable)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _classSuper = throttler_1.ThrottlerGuard;
    var _metricsService_decorators;
    var _metricsService_initializers = [];
    var _metricsService_extraInitializers = [];
    var CustomThrottlerGuard = _classThis = /** @class */ (function (_super) {
        __extends(CustomThrottlerGuard_1, _super);
        function CustomThrottlerGuard_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.metricsService = __runInitializers(_this, _metricsService_initializers, void 0);
            _this.reflector = (__runInitializers(_this, _metricsService_extraInitializers), new core_1.Reflector());
            return _this;
        }
        CustomThrottlerGuard_1.prototype.handleRequest = function (requestProps) {
            return __awaiter(this, void 0, void 0, function () {
                var context, throttler, req, group, window, windowConfig, error_1, retryAfterSeconds, response, method, routePath;
                var _a, _b, _c, _d, _e;
                return __generator(this, function (_f) {
                    switch (_f.label) {
                        case 0:
                            context = requestProps.context, throttler = requestProps.throttler;
                            req = context
                                .switchToHttp()
                                .getRequest();
                            group = this.resolveGroup(context, req);
                            window = throttler.name === rate_limit_config_1.THROTTLER_BURST_NAME ? "burst" : "sustained";
                            windowConfig = rate_limit_config_1.throttlerConfig.groups[group][window];
                            req.rateLimitContext = {
                                group: group,
                                keyType: this.resolveIdentity(req).keyType,
                            };
                            _f.label = 1;
                        case 1:
                            _f.trys.push([1, 3, , 4]);
                            return [4 /*yield*/, _super.prototype.handleRequest.call(this, __assign(__assign({}, requestProps), { limit: windowConfig.limit, ttl: windowConfig.ttlMs, throttler: __assign(__assign({}, throttler), { limit: windowConfig.limit, ttl: windowConfig.ttlMs }) }))];
                        case 2: return [2 /*return*/, _f.sent()];
                        case 3:
                            error_1 = _f.sent();
                            if (error_1 instanceof throttler_1.ThrottlerException) {
                                retryAfterSeconds = Math.ceil(windowConfig.ttlMs / 1000);
                                response = context
                                    .switchToHttp()
                                    .getResponse();
                                if (typeof (response === null || response === void 0 ? void 0 : response.setHeader) === "function") {
                                    response.setHeader("Retry-After", retryAfterSeconds.toString());
                                }
                                method = (_a = req.method) !== null && _a !== void 0 ? _a : "unknown";
                                routePath = (_e = (_d = (_c = (_b = req.route) === null || _b === void 0 ? void 0 : _b.path) !== null && _c !== void 0 ? _c : req.path) !== null && _d !== void 0 ? _d : req.originalUrl) !== null && _e !== void 0 ? _e : "unknown";
                                this.metricsService.recordRateLimitedRequest(method, routePath, group, req.rateLimitContext.keyType);
                            }
                            throw error_1;
                        case 4: return [2 /*return*/];
                    }
                });
            });
        };
        CustomThrottlerGuard_1.prototype.getTracker = function (req) {
            return __awaiter(this, void 0, void 0, function () {
                var identity;
                return __generator(this, function (_a) {
                    identity = this.resolveIdentity(req);
                    return [2 /*return*/, "".concat(identity.keyType, ":").concat(identity.value)];
                });
            });
        };
        CustomThrottlerGuard_1.prototype.resolveGroup = function (context, req) {
            var _a, _b, _c, _d, _e;
            var metadataGroup = this.reflector.getAllAndOverride(rate_limit_config_1.RATE_LIMIT_GROUP_METADATA_KEY, [context.getHandler(), context.getClass()]);
            if (metadataGroup) {
                return metadataGroup;
            }
            var path = "".concat((_a = req.baseUrl) !== null && _a !== void 0 ? _a : "").concat((_e = (_d = (_c = (_b = req.route) === null || _b === void 0 ? void 0 : _b.path) !== null && _c !== void 0 ? _c : req.path) !== null && _d !== void 0 ? _d : req.originalUrl) !== null && _e !== void 0 ? _e : "").toLowerCase();
            if (path.startsWith("/webhooks") || path.includes("/webhooks/")) {
                return "webhooks";
            }
            if (this.getUserId(req) || this.getApiKeyValue(req)) {
                return "authenticated";
            }
            return "public";
        };
        CustomThrottlerGuard_1.prototype.resolveIdentity = function (req) {
            var ip = this.getIp(req);
            for (var _i = 0, _a = rate_limit_config_1.throttlerConfig.keyOrder; _i < _a.length; _i++) {
                var keyType = _a[_i];
                if (keyType === "user_id") {
                    var userId = this.getUserId(req);
                    if (userId)
                        return { keyType: keyType, value: userId };
                }
                if (keyType === "api_key") {
                    var apiKey = this.getApiKeyValue(req);
                    if (apiKey)
                        return { keyType: keyType, value: apiKey };
                }
                if (keyType === "ip" && ip) {
                    return { keyType: keyType, value: ip };
                }
            }
            return { keyType: "ip", value: ip || "unknown" };
        };
        CustomThrottlerGuard_1.prototype.getUserId = function (req) {
            var _a;
            var user = req.user;
            if ((user === null || user === void 0 ? void 0 : user.id) && typeof user.id === "string")
                return user.id;
            var userId = req["userId"];
            if (typeof userId === "string" && userId.length > 0)
                return userId;
            var header = (_a = req.headers) === null || _a === void 0 ? void 0 : _a["x-user-id"];
            if (typeof header === "string" && header.length > 0)
                return header;
            return undefined;
        };
        CustomThrottlerGuard_1.prototype.getApiKeyValue = function (req) {
            var _a, _b;
            var apiKeyId = (_a = req.apiKey) === null || _a === void 0 ? void 0 : _a.id;
            if (apiKeyId && typeof apiKeyId === "string")
                return apiKeyId;
            var header = (_b = req.headers) === null || _b === void 0 ? void 0 : _b["x-api-key"];
            if (typeof header === "string" && header.length > 0)
                return header;
            return undefined;
        };
        CustomThrottlerGuard_1.prototype.getIp = function (req) {
            var _a, _b;
            var forwardedFor = (_a = req.headers) === null || _a === void 0 ? void 0 : _a["x-forwarded-for"];
            if (typeof forwardedFor === "string" && forwardedFor.length > 0) {
                return forwardedFor.split(",")[0].trim();
            }
            return (_b = req.ip) !== null && _b !== void 0 ? _b : "unknown";
        };
        return CustomThrottlerGuard_1;
    }(_classSuper));
    __setFunctionName(_classThis, "CustomThrottlerGuard");
    (function () {
        var _a;
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        _metricsService_decorators = [(0, common_1.Inject)(metrics_service_1.MetricsService)];
        __esDecorate(null, null, _metricsService_decorators, { kind: "field", name: "metricsService", static: false, private: false, access: { has: function (obj) { return "metricsService" in obj; }, get: function (obj) { return obj.metricsService; }, set: function (obj, value) { obj.metricsService = value; } }, metadata: _metadata }, _metricsService_initializers, _metricsService_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        CustomThrottlerGuard = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return CustomThrottlerGuard = _classThis;
}();
exports.CustomThrottlerGuard = CustomThrottlerGuard;
