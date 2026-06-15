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
exports.ApiKeyGuard = void 0;
var common_1 = require("@nestjs/common");
var rate_limit_config_1 = require("../../config/rate-limit.config");
var require_scopes_decorator_1 = require("../decorators/require-scopes.decorator");
var ApiKeyGuard = function () {
    var _classDecorators = [(0, common_1.Injectable)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var ApiKeyGuard = _classThis = /** @class */ (function () {
        function ApiKeyGuard_1(apiKeysService, reflector) {
            this.apiKeysService = apiKeysService;
            this.reflector = reflector;
        }
        ApiKeyGuard_1.prototype.canActivate = function (context) {
            return __awaiter(this, void 0, void 0, function () {
                var request, rawKey, result, record, hasScope, headerOrg, requiredScopes, _i, requiredScopes_1, scope;
                var _a, _b, _c;
                return __generator(this, function (_d) {
                    switch (_d.label) {
                        case 0:
                            request = context.switchToHttp().getRequest();
                            rawKey = request.headers["x-api-key"];
                            if (!rawKey)
                                return [2 /*return*/, true]; // public access allowed
                            return [4 /*yield*/, this.apiKeysService.validateKey(rawKey)];
                        case 1:
                            result = _d.sent();
                            if (!result) {
                                throw new common_1.UnauthorizedException({
                                    error: "INVALID_API_KEY",
                                    message: "API key is invalid",
                                });
                            }
                            record = result.record, hasScope = result.hasScope;
                            headerOrg = (_a = request.organizationContext) === null || _a === void 0 ? void 0 : _a.organizationId;
                            if (headerOrg && record.organization_id && headerOrg !== record.organization_id) {
                                throw new common_1.ForbiddenException({
                                    error: "ORGANIZATION_MISMATCH",
                                    message: "API key is not scoped to the requested organization",
                                });
                            }
                            if (this.apiKeysService.isOverQuota(record)) {
                                throw new common_1.ForbiddenException({
                                    error: "QUOTA_EXCEEDED",
                                    message: "Monthly request quota exceeded",
                                });
                            }
                            requiredScopes = (_b = this.reflector.getAllAndOverride(require_scopes_decorator_1.REQUIRED_SCOPES_KEY, [
                                context.getHandler(),
                                context.getClass(),
                            ])) !== null && _b !== void 0 ? _b : [];
                            for (_i = 0, requiredScopes_1 = requiredScopes; _i < requiredScopes_1.length; _i++) {
                                scope = requiredScopes_1[_i];
                                if (!hasScope(scope)) {
                                    throw new common_1.ForbiddenException({
                                        error: "INSUFFICIENT_SCOPE",
                                        message: "API key missing required scope: ".concat(scope),
                                    });
                                }
                            }
                            request.apiKey = {
                                id: record.id,
                                name: record.name,
                                scopes: record.scopes,
                                rateLimit: rate_limit_config_1.throttlerConfig.groups.authenticated.sustained.limit,
                                organization_id: record.organization_id,
                            };
                            request.organizationContext = {
                                organizationId: (_c = headerOrg !== null && headerOrg !== void 0 ? headerOrg : record.organization_id) !== null && _c !== void 0 ? _c : undefined,
                                role: record.scopes.includes("admin") ? "admin" : "member",
                            };
                            return [2 /*return*/, true];
                    }
                });
            });
        };
        return ApiKeyGuard_1;
    }());
    __setFunctionName(_classThis, "ApiKeyGuard");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        ApiKeyGuard = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return ApiKeyGuard = _classThis;
}();
exports.ApiKeyGuard = ApiKeyGuard;
