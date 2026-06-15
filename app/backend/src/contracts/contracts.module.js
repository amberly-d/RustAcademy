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
exports.ContractsModule = void 0;
var common_1 = require("@nestjs/common");
var api_keys_module_1 = require("../api-keys/api-keys.module");
var audit_module_1 = require("../audit/audit.module");
var api_key_guard_1 = require("../auth/guards/api-key.guard");
var supabase_module_1 = require("../supabase/supabase.module");
var contract_registry_controller_1 = require("./contract-registry.controller");
var contract_change_webhooks_controller_1 = require("./contract-change-webhooks.controller");
var contract_registry_service_1 = require("./contract-registry.service");
var contract_change_webhook_service_1 = require("./contract-change-webhook.service");
var contract_views_controller_1 = require("./views/contract-views.controller");
var contract_views_service_1 = require("./views/contract-views.service");
var ContractsModule = function () {
    var _classDecorators = [(0, common_1.Module)({
            imports: [api_keys_module_1.ApiKeysModule, audit_module_1.AuditModule, supabase_module_1.SupabaseModule],
            controllers: [contract_registry_controller_1.ContractRegistryController, contract_change_webhooks_controller_1.ContractChangeWebhooksController, contract_views_controller_1.ContractViewsController],
            providers: [
                contract_registry_service_1.ContractRegistryService,
                contract_change_webhook_service_1.ContractChangeWebhookService,
                api_key_guard_1.ApiKeyGuard,
                contract_views_service_1.ContractViewsService
            ],
            exports: [contract_registry_service_1.ContractRegistryService, contract_views_service_1.ContractViewsService],
        })];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var ContractsModule = _classThis = /** @class */ (function () {
        function ContractsModule_1() {
        }
        return ContractsModule_1;
    }());
    __setFunctionName(_classThis, "ContractsModule");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        ContractsModule = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return ContractsModule = _classThis;
}();
exports.ContractsModule = ContractsModule;
