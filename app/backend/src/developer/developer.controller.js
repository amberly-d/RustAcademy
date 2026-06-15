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
exports.DeveloperController = void 0;
var common_1 = require("@nestjs/common");
var swagger_1 = require("@nestjs/swagger");
var developer_dto_1 = require("./dto/developer.dto");
var require_scopes_decorator_1 = require("../auth/decorators/require-scopes.decorator");
var rate_limit_group_decorator_1 = require("../auth/decorators/rate-limit-group.decorator");
var DeveloperController = function () {
    var _classDecorators = [(0, swagger_1.ApiTags)('developer'), (0, rate_limit_group_decorator_1.RateLimitGroupTag)('authenticated'), (0, common_1.Controller)('developer')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _instanceExtraInitializers = [];
    var _ping_decorators;
    var _testWebhook_decorators;
    var _bulkRevoke_decorators;
    var _emergencyRotate_decorators;
    var _integrationHealth_decorators;
    var DeveloperController = _classThis = /** @class */ (function () {
        function DeveloperController_1(developerService) {
            this.developerService = (__runInitializers(this, _instanceExtraInitializers), developerService);
        }
        DeveloperController_1.prototype.ping = function () {
            return this.developerService.ping();
        };
        DeveloperController_1.prototype.testWebhook = function (webhookId) {
            return this.developerService.testWebhook(webhookId);
        };
        DeveloperController_1.prototype.bulkRevoke = function (dto) {
            return this.developerService.bulkRevoke(dto);
        };
        DeveloperController_1.prototype.emergencyRotate = function (id) {
            return this.developerService.emergencyRotate(id);
        };
        DeveloperController_1.prototype.integrationHealth = function (ownerId) {
            if (!ownerId)
                throw new common_1.BadRequestException('owner_id query parameter is required');
            return this.developerService.getIntegrationHealth(ownerId);
        };
        return DeveloperController_1;
    }());
    __setFunctionName(_classThis, "DeveloperController");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _ping_decorators = [(0, common_1.Get)('ping'), (0, swagger_1.ApiOperation)({ summary: 'Connectivity check', description: 'Returns ok when the API is reachable. No authentication required.' }), (0, swagger_1.ApiResponse)({ status: 200, type: developer_dto_1.PingResponseDto })];
        _testWebhook_decorators = [(0, common_1.Post)('webhooks/:webhookId/test'), (0, common_1.HttpCode)(common_1.HttpStatus.OK), (0, require_scopes_decorator_1.RequireScopes)('admin'), (0, swagger_1.ApiOperation)({
                summary: 'Send a test event to a webhook receiver',
                description: 'Posts a synthetic payment.received event to the webhook URL so you can verify your receiver is reachable and correctly handling events.',
            }), (0, swagger_1.ApiParam)({ name: 'webhookId', description: 'Webhook UUID' }), (0, swagger_1.ApiResponse)({ status: 200, type: developer_dto_1.WebhookTestResultDto }), (0, swagger_1.ApiResponse)({ status: 404, description: 'Webhook not found' })];
        _bulkRevoke_decorators = [(0, common_1.Post)('keys/bulk-revoke'), (0, common_1.HttpCode)(common_1.HttpStatus.OK), (0, require_scopes_decorator_1.RequireScopes)('admin'), (0, swagger_1.ApiOperation)({
                summary: 'Bulk revoke API keys',
                description: 'Revokes up to 100 API keys in a single request. Partial failures are reported per-key.',
            }), (0, swagger_1.ApiResponse)({ status: 200, type: developer_dto_1.BulkRevokeResultDto })];
        _emergencyRotate_decorators = [(0, common_1.Post)('keys/:id/emergency-rotate'), (0, common_1.HttpCode)(common_1.HttpStatus.OK), (0, require_scopes_decorator_1.RequireScopes)('admin'), (0, swagger_1.ApiOperation)({
                summary: 'Emergency key rotation',
                description: 'Rotates an API key and immediately invalidates the old key (no 24-hour grace period).',
            }), (0, swagger_1.ApiParam)({ name: 'id', description: 'API key UUID' }), (0, swagger_1.ApiResponse)({ status: 200, description: 'New key issued; store the raw key — it will not be shown again.' }), (0, swagger_1.ApiResponse)({ status: 404, description: 'API key not found' })];
        _integrationHealth_decorators = [(0, common_1.Get)('health'), (0, swagger_1.ApiOperation)({
                summary: 'Integration health score',
                description: 'Returns a 0–100 score and letter grade based on webhook failure rate and API quota utilisation for a given organisation.',
            }), (0, swagger_1.ApiQuery)({ name: 'owner_id', required: true, description: 'Organisation / owner identifier (Stellar public key or user ID)' }), (0, swagger_1.ApiResponse)({ status: 200, type: developer_dto_1.IntegrationHealthDto }), (0, swagger_1.ApiResponse)({ status: 400, description: 'owner_id is required' })];
        __esDecorate(_classThis, null, _ping_decorators, { kind: "method", name: "ping", static: false, private: false, access: { has: function (obj) { return "ping" in obj; }, get: function (obj) { return obj.ping; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _testWebhook_decorators, { kind: "method", name: "testWebhook", static: false, private: false, access: { has: function (obj) { return "testWebhook" in obj; }, get: function (obj) { return obj.testWebhook; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _bulkRevoke_decorators, { kind: "method", name: "bulkRevoke", static: false, private: false, access: { has: function (obj) { return "bulkRevoke" in obj; }, get: function (obj) { return obj.bulkRevoke; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _emergencyRotate_decorators, { kind: "method", name: "emergencyRotate", static: false, private: false, access: { has: function (obj) { return "emergencyRotate" in obj; }, get: function (obj) { return obj.emergencyRotate; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _integrationHealth_decorators, { kind: "method", name: "integrationHealth", static: false, private: false, access: { has: function (obj) { return "integrationHealth" in obj; }, get: function (obj) { return obj.integrationHealth; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        DeveloperController = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return DeveloperController = _classThis;
}();
exports.DeveloperController = DeveloperController;
