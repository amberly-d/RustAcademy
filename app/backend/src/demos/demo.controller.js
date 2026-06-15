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
exports.DemoController = void 0;
var common_1 = require("@nestjs/common");
var swagger_1 = require("@nestjs/swagger");
var api_key_guard_1 = require("../auth/guards/api-key.guard");
var require_scopes_decorator_1 = require("../auth/decorators/require-scopes.decorator");
var rate_limit_group_decorator_1 = require("../auth/decorators/rate-limit-group.decorator");
var DemoController = function () {
    var _classDecorators = [(0, swagger_1.ApiTags)('demo'), (0, swagger_1.ApiHeader)({
            name: 'X-API-Key',
            description: 'Admin-scoped API key (required for all demo endpoints).',
            required: true,
        }), (0, rate_limit_group_decorator_1.RateLimitGroupTag)('authenticated'), (0, common_1.UseGuards)(api_key_guard_1.ApiKeyGuard), (0, common_1.Controller)('v1/demo')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _instanceExtraInitializers = [];
    var _seed_decorators;
    var _clear_decorators;
    var _status_decorators;
    var DemoController = _classThis = /** @class */ (function () {
        function DemoController_1(demoService) {
            this.demoService = (__runInitializers(this, _instanceExtraInitializers), demoService);
        }
        DemoController_1.prototype.seed = function () {
            return this.demoService.seed();
        };
        DemoController_1.prototype.clear = function () {
            return this.demoService.clear();
        };
        DemoController_1.prototype.status = function () {
            return this.demoService.status();
        };
        return DemoController_1;
    }());
    __setFunctionName(_classThis, "DemoController");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _seed_decorators = [(0, common_1.Post)('seed'), (0, common_1.HttpCode)(common_1.HttpStatus.OK), (0, require_scopes_decorator_1.RequireScopes)('admin'), (0, swagger_1.ApiOperation)({
                summary: 'Seed deterministic demo data (admin, testnet only)',
                description: 'Upserts demo payment links and sample transactions into the database. ' +
                    'Idempotent — safe to call repeatedly. Returns 403 when NETWORK is not "testnet".',
            }), (0, swagger_1.ApiResponse)({ status: 200, description: 'Fixtures seeded successfully.' }), (0, swagger_1.ApiResponse)({ status: 403, description: 'Not on testnet, or insufficient scope.' })];
        _clear_decorators = [(0, common_1.Delete)(), (0, common_1.HttpCode)(common_1.HttpStatus.OK), (0, require_scopes_decorator_1.RequireScopes)('admin'), (0, swagger_1.ApiOperation)({
                summary: 'Clear all demo data (admin, testnet only)',
                description: 'Deletes only rows whose IDs match known demo fixtures. ' +
                    'Returns 403 when NETWORK is not "testnet".',
            }), (0, swagger_1.ApiResponse)({ status: 200, description: 'Demo data cleared.' }), (0, swagger_1.ApiResponse)({ status: 403, description: 'Not on testnet, or insufficient scope.' })];
        _status_decorators = [(0, common_1.Get)('status'), (0, require_scopes_decorator_1.RequireScopes)('admin'), (0, swagger_1.ApiOperation)({
                summary: 'Demo seed status (admin, testnet only)',
                description: 'Reports which demo fixture IDs are currently present in the database.',
            }), (0, swagger_1.ApiResponse)({ status: 200, description: 'Current demo seed state.' }), (0, swagger_1.ApiResponse)({ status: 403, description: 'Not on testnet, or insufficient scope.' })];
        __esDecorate(_classThis, null, _seed_decorators, { kind: "method", name: "seed", static: false, private: false, access: { has: function (obj) { return "seed" in obj; }, get: function (obj) { return obj.seed; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _clear_decorators, { kind: "method", name: "clear", static: false, private: false, access: { has: function (obj) { return "clear" in obj; }, get: function (obj) { return obj.clear; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _status_decorators, { kind: "method", name: "status", static: false, private: false, access: { has: function (obj) { return "status" in obj; }, get: function (obj) { return obj.status; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        DemoController = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return DemoController = _classThis;
}();
exports.DemoController = DemoController;
