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
exports.EnvironmentParityController = void 0;
var common_1 = require("@nestjs/common");
var swagger_1 = require("@nestjs/swagger");
var EnvironmentParityController = function () {
    var _classDecorators = [(0, swagger_1.ApiTags)("Environment Parity"), (0, common_1.Controller)("api/environment-parity")];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _instanceExtraInitializers = [];
    var _getParityStatus_decorators;
    var _getHealth_decorators;
    var EnvironmentParityController = _classThis = /** @class */ (function () {
        function EnvironmentParityController_1(parityService) {
            this.parityService = (__runInitializers(this, _instanceExtraInitializers), parityService);
            this.logger = new common_1.Logger(EnvironmentParityController.name);
        }
        EnvironmentParityController_1.prototype.getParityStatus = function () {
            var results = this.parityService.getResults();
            return {
                success: true,
                data: {
                    checks: results,
                    summary: {
                        total: results.length,
                        passed: results.filter(function (r) { return r.status === "pass"; }).length,
                        failed: results.filter(function (r) { return r.status === "fail"; }).length,
                        warnings: results.filter(function (r) { return r.status === "warning"; }).length,
                    },
                },
            };
        };
        EnvironmentParityController_1.prototype.getHealth = function () {
            var results = this.parityService.getResults();
            var failed = results.filter(function (r) { return r.status === "fail"; }).length;
            return {
                success: true,
                data: {
                    healthy: failed === 0,
                    failedChecks: failed,
                    totalChecks: results.length,
                },
            };
        };
        return EnvironmentParityController_1;
    }());
    __setFunctionName(_classThis, "EnvironmentParityController");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _getParityStatus_decorators = [(0, common_1.Get)("status"), (0, swagger_1.ApiOperation)({ summary: "Get environment parity check status" }), (0, swagger_1.ApiResponse)({ status: 200, description: "Returns parity check results" })];
        _getHealth_decorators = [(0, common_1.Get)("health"), (0, swagger_1.ApiOperation)({ summary: "Quick health check for environment parity" }), (0, swagger_1.ApiResponse)({ status: 200, description: "Returns health status" })];
        __esDecorate(_classThis, null, _getParityStatus_decorators, { kind: "method", name: "getParityStatus", static: false, private: false, access: { has: function (obj) { return "getParityStatus" in obj; }, get: function (obj) { return obj.getParityStatus; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _getHealth_decorators, { kind: "method", name: "getHealth", static: false, private: false, access: { has: function (obj) { return "getHealth" in obj; }, get: function (obj) { return obj.getHealth; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        EnvironmentParityController = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return EnvironmentParityController = _classThis;
}();
exports.EnvironmentParityController = EnvironmentParityController;
