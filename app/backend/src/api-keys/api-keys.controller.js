"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
exports.ApiKeysController = void 0;
var common_1 = require("@nestjs/common");
var swagger_1 = require("@nestjs/swagger");
var require_org_role_decorator_1 = require("../auth/decorators/require-org-role.decorator");
var ApiKeysController = function () {
    var _classDecorators = [(0, swagger_1.ApiTags)('api-keys'), (0, common_1.Controller)('api-keys')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _instanceExtraInitializers = [];
    var _create_decorators;
    var _list_decorators;
    var _usage_decorators;
    var _revoke_decorators;
    var _rotate_decorators;
    var ApiKeysController = _classThis = /** @class */ (function () {
        function ApiKeysController_1(service) {
            this.service = (__runInitializers(this, _instanceExtraInitializers), service);
        }
        /**
         * POST /api-keys
         * Creates a new API key. The raw key is returned ONCE in the response.
         */
        ApiKeysController_1.prototype.create = function (dto, req) {
            var _a, _b;
            return this.service.create(__assign(__assign({}, dto), { organization_id: (_a = dto.organization_id) !== null && _a !== void 0 ? _a : (_b = req.organizationContext) === null || _b === void 0 ? void 0 : _b.organizationId }));
        };
        /**
         * GET /api-keys
         * Lists all active keys (masked) with cursor-based pagination. Optionally filter by owner_id.
         */
        ApiKeysController_1.prototype.list = function (req, ownerId, pagination) {
            var _a;
            return this.service.listPaginated(ownerId, (_a = req.organizationContext) === null || _a === void 0 ? void 0 : _a.organizationId, pagination === null || pagination === void 0 ? void 0 : pagination.cursor, pagination === null || pagination === void 0 ? void 0 : pagination.limit);
        };
        /**
         * GET /api-keys/usage
         * Returns aggregated usage/quota stats.
         */
        ApiKeysController_1.prototype.usage = function (req, ownerId) {
            var _a;
            return this.service.getUsage(ownerId, (_a = req.organizationContext) === null || _a === void 0 ? void 0 : _a.organizationId);
        };
        /**
         * DELETE /api-keys/:id
         * Revokes (soft-deletes) a key.
         */
        ApiKeysController_1.prototype.revoke = function (id) {
            return this.service.revoke(id);
        };
        /**
         * POST /api-keys/:id/rotate
         * Invalidates the current key and issues a new one.
         */
        ApiKeysController_1.prototype.rotate = function (id) {
            return this.service.rotate(id);
        };
        return ApiKeysController_1;
    }());
    __setFunctionName(_classThis, "ApiKeysController");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _create_decorators = [(0, common_1.Post)(), (0, require_org_role_decorator_1.RequireOrgRole)('admin')];
        _list_decorators = [(0, common_1.Get)(), (0, swagger_1.ApiOperation)({ summary: 'List API keys with cursor-based pagination' }), (0, swagger_1.ApiQuery)({ name: 'owner_id', required: false }), (0, swagger_1.ApiQuery)({ name: 'cursor', required: false, description: 'Opaque pagination cursor' }), (0, swagger_1.ApiQuery)({ name: 'limit', required: false, type: Number, description: 'Items per page (1-100)' }), (0, swagger_1.ApiResponse)({ status: 200, description: 'Paginated list of API keys' })];
        _usage_decorators = [(0, common_1.Get)('usage')];
        _revoke_decorators = [(0, common_1.Delete)(':id'), (0, require_org_role_decorator_1.RequireOrgRole)('admin')];
        _rotate_decorators = [(0, common_1.Post)(':id/rotate'), (0, require_org_role_decorator_1.RequireOrgRole)('admin')];
        __esDecorate(_classThis, null, _create_decorators, { kind: "method", name: "create", static: false, private: false, access: { has: function (obj) { return "create" in obj; }, get: function (obj) { return obj.create; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _list_decorators, { kind: "method", name: "list", static: false, private: false, access: { has: function (obj) { return "list" in obj; }, get: function (obj) { return obj.list; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _usage_decorators, { kind: "method", name: "usage", static: false, private: false, access: { has: function (obj) { return "usage" in obj; }, get: function (obj) { return obj.usage; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _revoke_decorators, { kind: "method", name: "revoke", static: false, private: false, access: { has: function (obj) { return "revoke" in obj; }, get: function (obj) { return obj.revoke; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _rotate_decorators, { kind: "method", name: "rotate", static: false, private: false, access: { has: function (obj) { return "rotate" in obj; }, get: function (obj) { return obj.rotate; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        ApiKeysController = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return ApiKeysController = _classThis;
}();
exports.ApiKeysController = ApiKeysController;
