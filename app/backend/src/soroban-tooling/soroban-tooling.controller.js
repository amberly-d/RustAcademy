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
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SorobanToolingController = void 0;
var common_1 = require("@nestjs/common");
var swagger_1 = require("@nestjs/swagger");
var require_scopes_decorator_1 = require("../auth/decorators/require-scopes.decorator");
var api_key_guard_1 = require("../auth/guards/api-key.guard");
var SorobanToolingController = function () {
    var _classDecorators = [(0, swagger_1.ApiTags)('developer'), (0, swagger_1.ApiHeader)({
            name: 'X-API-Key',
            description: 'Optional API key. Deployment planning requires an admin-scoped key.',
            required: false,
        }), (0, common_1.UseGuards)(api_key_guard_1.ApiKeyGuard), (0, common_1.Controller)('developer/testnet')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _instanceExtraInitializers = [];
    var _preflightFunding_decorators;
    var _planDeployment_decorators;
    var SorobanToolingController = _classThis = /** @class */ (function () {
        function SorobanToolingController_1(fundingHelperService, deploymentService) {
            this.fundingHelperService = (__runInitializers(this, _instanceExtraInitializers), fundingHelperService);
            this.deploymentService = deploymentService;
        }
        SorobanToolingController_1.prototype.preflightFunding = function (body) {
            return this.fundingHelperService.checkFunding(body);
        };
        SorobanToolingController_1.prototype.planDeployment = function (body) {
            return this.deploymentService.planDeployment(body);
        };
        return SorobanToolingController_1;
    }());
    __setFunctionName(_classThis, "SorobanToolingController");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _preflightFunding_decorators = [(0, common_1.Post)('funding/preflight'), (0, common_1.HttpCode)(common_1.HttpStatus.OK), (0, swagger_1.ApiOperation)({ summary: 'Check whether a Stellar account is funded enough for deploy flows' })];
        _planDeployment_decorators = [(0, common_1.Post)('deployments/plan'), (0, common_1.HttpCode)(common_1.HttpStatus.OK), (0, require_scopes_decorator_1.RequireScopes)('admin'), (0, swagger_1.ApiOperation)({ summary: 'Plan a deterministic Soroban deployment run without submitting transactions' })];
        __esDecorate(_classThis, null, _preflightFunding_decorators, { kind: "method", name: "preflightFunding", static: false, private: false, access: { has: function (obj) { return "preflightFunding" in obj; }, get: function (obj) { return obj.preflightFunding; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _planDeployment_decorators, { kind: "method", name: "planDeployment", static: false, private: false, access: { has: function (obj) { return "planDeployment" in obj; }, get: function (obj) { return obj.planDeployment; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        SorobanToolingController = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return SorobanToolingController = _classThis;
}();
exports.SorobanToolingController = SorobanToolingController;
