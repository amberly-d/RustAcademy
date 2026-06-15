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
exports.ContractRegistryController = void 0;
var common_1 = require("@nestjs/common");
var swagger_1 = require("@nestjs/swagger");
var api_key_guard_1 = require("../auth/guards/api-key.guard");
var require_scopes_decorator_1 = require("../auth/decorators/require-scopes.decorator");
var rate_limit_group_decorator_1 = require("../auth/decorators/rate-limit-group.decorator");
var contract_registry_dto_1 = require("./dto/contract-registry.dto");
var ContractRegistryController = function () {
    var _classDecorators = [(0, swagger_1.ApiTags)('contracts'), (0, swagger_1.ApiHeader)({
            name: 'X-API-Key',
            description: 'Optional API key. Publishing requires an admin-scoped key.',
            required: false,
        }), (0, rate_limit_group_decorator_1.RateLimitGroupTag)('public'), (0, common_1.UseGuards)(api_key_guard_1.ApiKeyGuard), (0, common_1.Controller)('contracts')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _instanceExtraInitializers = [];
    var _getRegistry_decorators;
    var _publish_decorators;
    var _rollback_decorators;
    var ContractRegistryController = _classThis = /** @class */ (function () {
        function ContractRegistryController_1(contractRegistryService) {
            this.contractRegistryService = (__runInitializers(this, _instanceExtraInitializers), contractRegistryService);
        }
        ContractRegistryController_1.prototype.getRegistry = function (req, res) {
            return __awaiter(this, void 0, void 0, function () {
                var registry, clientEtag;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.contractRegistryService.getRegistry()];
                        case 1:
                            registry = _a.sent();
                            res.setHeader('ETag', registry.etag);
                            res.setHeader('Cache-Control', 'public, max-age=0, must-revalidate');
                            clientEtag = req.headers['if-none-match'];
                            if (clientEtag && clientEtag === registry.etag) {
                                res.status(common_1.HttpStatus.NOT_MODIFIED);
                                return [2 /*return*/];
                            }
                            return [2 /*return*/, registry];
                    }
                });
            });
        };
        ContractRegistryController_1.prototype.publish = function (body) {
            return this.contractRegistryService.publish(body, 'api');
        };
        ContractRegistryController_1.prototype.rollback = function (body) {
            return this.contractRegistryService.rollback(body, 'api');
        };
        return ContractRegistryController_1;
    }());
    __setFunctionName(_classThis, "ContractRegistryController");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _getRegistry_decorators = [(0, common_1.Get)('registry'), (0, swagger_1.ApiOperation)({
                summary: 'Fetch the authoritative contract registry for the active network',
                description: 'Returns the contract registry with an ETag header for change detection. Send If-None-Match with a prior ETag to get a 304 Not Modified response.',
            }), (0, swagger_1.ApiResponse)({ status: 200, type: contract_registry_dto_1.ContractRegistryResponseDto }), (0, swagger_1.ApiResponse)({ status: 304, description: 'Registry unchanged since last poll' })];
        _publish_decorators = [(0, common_1.Post)('registry/publish'), (0, common_1.HttpCode)(common_1.HttpStatus.OK), (0, require_scopes_decorator_1.RequireScopes)('admin'), (0, rate_limit_group_decorator_1.RateLimitGroupTag)('authenticated'), (0, swagger_1.ApiOperation)({
                summary: 'Publish deployment artifacts into the contract registry',
            })];
        _rollback_decorators = [(0, common_1.Post)('registry/rollback'), (0, common_1.HttpCode)(common_1.HttpStatus.OK), (0, require_scopes_decorator_1.RequireScopes)('admin'), (0, rate_limit_group_decorator_1.RateLimitGroupTag)('authenticated'), (0, swagger_1.ApiOperation)({
                summary: 'Rollback the active registry entry for a contract to a previous version',
            })];
        __esDecorate(_classThis, null, _getRegistry_decorators, { kind: "method", name: "getRegistry", static: false, private: false, access: { has: function (obj) { return "getRegistry" in obj; }, get: function (obj) { return obj.getRegistry; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _publish_decorators, { kind: "method", name: "publish", static: false, private: false, access: { has: function (obj) { return "publish" in obj; }, get: function (obj) { return obj.publish; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _rollback_decorators, { kind: "method", name: "rollback", static: false, private: false, access: { has: function (obj) { return "rollback" in obj; }, get: function (obj) { return obj.rollback; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        ContractRegistryController = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return ContractRegistryController = _classThis;
}();
exports.ContractRegistryController = ContractRegistryController;
