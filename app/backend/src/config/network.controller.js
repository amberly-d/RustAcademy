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
exports.NetworkController = void 0;
var common_1 = require("@nestjs/common");
var swagger_1 = require("@nestjs/swagger");
var NetworkController = function () {
    var _classDecorators = [(0, swagger_1.ApiTags)('network'), (0, common_1.Controller)('v1/network')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _instanceExtraInitializers = [];
    var _getNetworkConfig_decorators;
    var NetworkController = _classThis = /** @class */ (function () {
        function NetworkController_1(configService) {
            this.configService = (__runInitializers(this, _instanceExtraInitializers), configService);
        }
        NetworkController_1.prototype.getNetworkConfig = function () {
            var stellarConfig = this.configService.get('stellar');
            return {
                network: stellarConfig === null || stellarConfig === void 0 ? void 0 : stellarConfig.network,
                passphrase: stellarConfig === null || stellarConfig === void 0 ? void 0 : stellarConfig.networkPassphrase,
                horizonUrl: stellarConfig === null || stellarConfig === void 0 ? void 0 : stellarConfig.horizonBaseUrl,
                sorobanRpcUrl: stellarConfig === null || stellarConfig === void 0 ? void 0 : stellarConfig.sorobanRpcUrl,
                explorerUrl: stellarConfig === null || stellarConfig === void 0 ? void 0 : stellarConfig.explorerUrl,
            };
        };
        return NetworkController_1;
    }());
    __setFunctionName(_classThis, "NetworkController");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _getNetworkConfig_decorators = [(0, common_1.Get)(), (0, swagger_1.ApiOperation)({
                summary: 'Read-only network runtime configuration',
                description: 'Returns active Stellar network and public endpoints for client sanity checks.',
            })];
        __esDecorate(_classThis, null, _getNetworkConfig_decorators, { kind: "method", name: "getNetworkConfig", static: false, private: false, access: { has: function (obj) { return "getNetworkConfig" in obj; }, get: function (obj) { return obj.getNetworkConfig; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        NetworkController = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return NetworkController = _classThis;
}();
exports.NetworkController = NetworkController;
