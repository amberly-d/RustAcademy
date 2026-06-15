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
exports.TransactionsModule = void 0;
var common_1 = require("@nestjs/common");
var transactions_controller_1 = require("./transactions.controller");
var horizon_service_1 = require("./horizon.service");
var config_1 = require("../config");
var transaction_service_1 = require("./transaction.service");
var soroban_rpc_service_1 = require("./soroban-rpc.service");
var api_keys_module_1 = require("../api-keys/api-keys.module");
var api_key_guard_1 = require("../auth/guards/api-key.guard");
var metrics_module_1 = require("../metrics/metrics.module");
var feature_flags_module_1 = require("../feature-flags/feature-flags.module");
var TransactionsModule = function () {
    var _classDecorators = [(0, common_1.Module)({
            imports: [config_1.AppConfigModule, api_keys_module_1.ApiKeysModule, metrics_module_1.MetricsModule, feature_flags_module_1.FeatureFlagsModule],
            controllers: [transactions_controller_1.TransactionsController],
            providers: [
                horizon_service_1.HorizonService,
                transaction_service_1.TransactionsService,
                soroban_rpc_service_1.SorobanRpcService,
                api_key_guard_1.ApiKeyGuard,
            ],
            exports: [horizon_service_1.HorizonService, transaction_service_1.TransactionsService, soroban_rpc_service_1.SorobanRpcService],
        })];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var TransactionsModule = _classThis = /** @class */ (function () {
        function TransactionsModule_1() {
        }
        return TransactionsModule_1;
    }());
    __setFunctionName(_classThis, "TransactionsModule");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        TransactionsModule = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return TransactionsModule = _classThis;
}();
exports.TransactionsModule = TransactionsModule;
