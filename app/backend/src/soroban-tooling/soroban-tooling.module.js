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
exports.SorobanToolingModule = void 0;
var common_1 = require("@nestjs/common");
var api_keys_module_1 = require("../api-keys/api-keys.module");
var api_key_guard_1 = require("../auth/guards/api-key.guard");
var contracts_module_1 = require("../contracts/contracts.module");
var stellar_module_1 = require("../stellar/stellar.module");
var deployment_service_1 = require("./deployment.service");
var funding_helper_service_1 = require("./funding-helper.service");
var soroban_tooling_controller_1 = require("./soroban-tooling.controller");
var SorobanToolingModule = function () {
    var _classDecorators = [(0, common_1.Module)({
            imports: [api_keys_module_1.ApiKeysModule, stellar_module_1.StellarModule, contracts_module_1.ContractsModule],
            controllers: [soroban_tooling_controller_1.SorobanToolingController],
            providers: [funding_helper_service_1.FundingHelperService, deployment_service_1.DeploymentService, api_key_guard_1.ApiKeyGuard],
            exports: [funding_helper_service_1.FundingHelperService, deployment_service_1.DeploymentService],
        })];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var SorobanToolingModule = _classThis = /** @class */ (function () {
        function SorobanToolingModule_1() {
        }
        return SorobanToolingModule_1;
    }());
    __setFunctionName(_classThis, "SorobanToolingModule");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        SorobanToolingModule = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return SorobanToolingModule = _classThis;
}();
exports.SorobanToolingModule = SorobanToolingModule;
