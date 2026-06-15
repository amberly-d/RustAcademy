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
exports.ContractViewsController = void 0;
var common_1 = require("@nestjs/common");
var swagger_1 = require("@nestjs/swagger");
var api_key_guard_1 = require("../../auth/guards/api-key.guard");
var rate_limit_group_decorator_1 = require("../../auth/decorators/rate-limit-group.decorator");
var ContractViewsController = function () {
    var _classDecorators = [(0, swagger_1.ApiTags)('contracts'), (0, swagger_1.ApiHeader)({
            name: 'X-API-Key',
            description: 'Optional API key for higher rate limits.',
            required: false,
        }), (0, rate_limit_group_decorator_1.RateLimitGroupTag)('public'), (0, common_1.UseGuards)(api_key_guard_1.ApiKeyGuard), (0, common_1.Controller)('v1/contracts/views')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _instanceExtraInitializers = [];
    var _getFeeConfig_decorators;
    var _getPauseState_decorators;
    var _getMetadata_decorators;
    var _getEscrow_decorators;
    var _getLink_decorators;
    var ContractViewsController = _classThis = /** @class */ (function () {
        function ContractViewsController_1(views) {
            this.views = (__runInitializers(this, _instanceExtraInitializers), views);
        }
        ContractViewsController_1.prototype.getFeeConfig = function () {
            return this.views.getFeeConfig();
        };
        ContractViewsController_1.prototype.getPauseState = function () {
            return this.views.getPauseState();
        };
        ContractViewsController_1.prototype.getMetadata = function () {
            return this.views.getContractMetadata();
        };
        ContractViewsController_1.prototype.getEscrow = function (id) {
            return this.views.getEscrowSummary(id);
        };
        ContractViewsController_1.prototype.getLink = function (identifier) {
            return this.views.getLinkSummary(identifier);
        };
        return ContractViewsController_1;
    }());
    __setFunctionName(_classThis, "ContractViewsController");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _getFeeConfig_decorators = [(0, common_1.Get)('fee-config'), (0, swagger_1.ApiOperation)({
                summary: 'Current fee configuration',
                description: 'Returns the fee basis points, fee recipient address, and minimum fee ' +
                    'currently set on the contract.  Results are cached for 15 s.',
            }), (0, swagger_1.ApiResponse)({ status: 200, description: 'Fee configuration.' })];
        _getPauseState_decorators = [(0, common_1.Get)('pause-state'), (0, swagger_1.ApiOperation)({
                summary: 'Contract pause state',
                description: 'Returns whether the contract is currently paused and, if so, the ledger ' +
                    'at which it was paused.  Results are cached for 15 s.',
            }), (0, swagger_1.ApiResponse)({ status: 200, description: 'Pause state.' })];
        _getMetadata_decorators = [(0, common_1.Get)('metadata'), (0, swagger_1.ApiOperation)({
                summary: 'Contract metadata',
                description: 'Returns the contract name, version, network, and deploy ledger.  Safe to ' +
                    'call on page load for a sanity-check against expected contract config.',
            }), (0, swagger_1.ApiResponse)({ status: 200, description: 'Contract metadata.' })];
        _getEscrow_decorators = [(0, common_1.Get)('escrow/:id'), (0, swagger_1.ApiOperation)({
                summary: 'Escrow summary by ID',
                description: 'Fetches the current on-chain state of a single escrow record.  Includes ' +
                    'expiry status so the UI can render "expired" without a separate ledger lookup.',
            }), (0, swagger_1.ApiParam)({ name: 'id', description: 'On-chain escrow identifier' }), (0, swagger_1.ApiResponse)({ status: 200, description: 'Escrow summary.' }), (0, swagger_1.ApiResponse)({ status: 404, description: 'Escrow not found or TTL expired.' })];
        _getLink_decorators = [(0, common_1.Get)('link/:identifier'), (0, swagger_1.ApiOperation)({
                summary: 'Payment link summary by slug or ID',
                description: 'Returns the on-chain summary for a payment link so the UI can render ' +
                    'amount, asset, and active state without hitting the indexer.',
            }), (0, swagger_1.ApiParam)({ name: 'identifier', description: 'Link slug or on-chain ID' }), (0, swagger_1.ApiResponse)({ status: 200, description: 'Link summary.' }), (0, swagger_1.ApiResponse)({ status: 404, description: 'Link not found or TTL expired.' })];
        __esDecorate(_classThis, null, _getFeeConfig_decorators, { kind: "method", name: "getFeeConfig", static: false, private: false, access: { has: function (obj) { return "getFeeConfig" in obj; }, get: function (obj) { return obj.getFeeConfig; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _getPauseState_decorators, { kind: "method", name: "getPauseState", static: false, private: false, access: { has: function (obj) { return "getPauseState" in obj; }, get: function (obj) { return obj.getPauseState; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _getMetadata_decorators, { kind: "method", name: "getMetadata", static: false, private: false, access: { has: function (obj) { return "getMetadata" in obj; }, get: function (obj) { return obj.getMetadata; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _getEscrow_decorators, { kind: "method", name: "getEscrow", static: false, private: false, access: { has: function (obj) { return "getEscrow" in obj; }, get: function (obj) { return obj.getEscrow; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _getLink_decorators, { kind: "method", name: "getLink", static: false, private: false, access: { has: function (obj) { return "getLink" in obj; }, get: function (obj) { return obj.getLink; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        ContractViewsController = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return ContractViewsController = _classThis;
}();
exports.ContractViewsController = ContractViewsController;
