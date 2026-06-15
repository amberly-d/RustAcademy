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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebhooksController = void 0;
var common_1 = require("@nestjs/common");
var swagger_1 = require("@nestjs/swagger");
var webhook_dto_1 = require("./dto/webhook.dto");
var rate_limit_group_decorator_1 = require("../auth/decorators/rate-limit-group.decorator");
var WebhooksController = function () {
    var _classDecorators = [(0, swagger_1.ApiTags)("Webhooks"), (0, rate_limit_group_decorator_1.RateLimitGroupTag)("webhooks"), (0, common_1.Controller)("webhooks")];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _instanceExtraInitializers = [];
    var _createWebhook_decorators;
    var _listWebhooks_decorators;
    var _getWebhook_decorators;
    var _updateWebhook_decorators;
    var _deleteWebhook_decorators;
    var _regenerateSecret_decorators;
    var _getDeliveryLogs_decorators;
    var _getStats_decorators;
    var _redeliverEvent_decorators;
    var WebhooksController = _classThis = /** @class */ (function () {
        function WebhooksController_1(webhookService) {
            this.webhookService = (__runInitializers(this, _instanceExtraInitializers), webhookService);
            this.logger = new common_1.Logger(WebhooksController.name);
        }
        WebhooksController_1.prototype.createWebhook = function (publicKey, dto) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    this.logger.log("Creating webhook for ".concat(publicKey.slice(0, 8), "... -> ").concat(dto.webhookUrl));
                    return [2 /*return*/, this.webhookService.createWebhook(publicKey, dto)];
                });
            });
        };
        WebhooksController_1.prototype.listWebhooks = function (publicKey, cursor, limit) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.webhookService.listWebhooks(publicKey, cursor, Number(limit || 20))];
                });
            });
        };
        WebhooksController_1.prototype.getWebhook = function (publicKey, id) {
            return __awaiter(this, void 0, void 0, function () {
                var webhook;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.webhookService.getWebhook(id)];
                        case 1:
                            webhook = _a.sent();
                            if (!webhook) {
                                throw new common_1.NotFoundException("Webhook not found");
                            }
                            if (webhook.publicKey !== publicKey) {
                                throw new common_1.ForbiddenException("Webhook does not belong to this public key");
                            }
                            return [2 /*return*/, webhook];
                    }
                });
            });
        };
        /**
         * PUT /webhooks/:publicKey/:id
         * Update a webhook.
         */
        WebhooksController_1.prototype.updateWebhook = function (publicKey, id, dto) {
            return __awaiter(this, void 0, void 0, function () {
                var webhook;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.webhookService.updateWebhook(id, publicKey, dto)];
                        case 1:
                            webhook = _a.sent();
                            if (!webhook) {
                                throw new common_1.NotFoundException("Webhook not found");
                            }
                            return [2 /*return*/, webhook];
                    }
                });
            });
        };
        WebhooksController_1.prototype.deleteWebhook = function (publicKey, id) {
            return __awaiter(this, void 0, void 0, function () {
                var deleted;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.webhookService.deleteWebhook(id, publicKey)];
                        case 1:
                            deleted = _a.sent();
                            if (!deleted) {
                                throw new common_1.NotFoundException("Webhook not found");
                            }
                            this.logger.log("Deleted webhook ".concat(id, " for ").concat(publicKey.slice(0, 8), "..."));
                            return [2 /*return*/];
                    }
                });
            });
        };
        WebhooksController_1.prototype.regenerateSecret = function (publicKey, id) {
            return __awaiter(this, void 0, void 0, function () {
                var result;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.webhookService.regenerateSecret(id, publicKey)];
                        case 1:
                            result = _a.sent();
                            if (!result) {
                                throw new common_1.NotFoundException("Webhook not found");
                            }
                            this.logger.log("Regenerated secret for webhook ".concat(id, " (").concat(publicKey.slice(0, 8), "...)"));
                            return [2 /*return*/, result];
                    }
                });
            });
        };
        WebhooksController_1.prototype.getDeliveryLogs = function (publicKey, id, limit, cursor) {
            return __awaiter(this, void 0, void 0, function () {
                var webhook;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.webhookService.getWebhook(id)];
                        case 1:
                            webhook = _a.sent();
                            if (!webhook || webhook.publicKey !== publicKey) {
                                throw new common_1.NotFoundException("Webhook not found");
                            }
                            return [2 /*return*/, this.webhookService.getDeliveryLogs(publicKey, limit ? Number(limit) : undefined, cursor)];
                    }
                });
            });
        };
        WebhooksController_1.prototype.getStats = function (publicKey, id) {
            return __awaiter(this, void 0, void 0, function () {
                var webhook;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.webhookService.getWebhook(id)];
                        case 1:
                            webhook = _a.sent();
                            if (!webhook || webhook.publicKey !== publicKey) {
                                throw new common_1.NotFoundException("Webhook not found");
                            }
                            return [2 /*return*/, this.webhookService.getStats(publicKey)];
                    }
                });
            });
        };
        WebhooksController_1.prototype.redeliverEvent = function (publicKey, id, dto) {
            return __awaiter(this, void 0, void 0, function () {
                var webhook, queued;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.webhookService.getWebhook(id)];
                        case 1:
                            webhook = _a.sent();
                            if (!webhook || webhook.publicKey !== publicKey) {
                                throw new common_1.NotFoundException("Webhook not found");
                            }
                            return [4 /*yield*/, this.webhookService.redeliverEvent(publicKey, dto.eventId, dto.eventType)];
                        case 2:
                            queued = _a.sent();
                            this.logger.log("Redeliver requested: ".concat(dto.eventType, "/").concat(dto.eventId, " for ").concat(publicKey.slice(0, 8), "... -> ").concat(queued ? "queued" : "failed"));
                            return [2 /*return*/, {
                                    queued: queued,
                                    message: queued
                                        ? "Event redelivery triggered successfully"
                                        : "Redelivery failed — check delivery logs for details",
                                }];
                    }
                });
            });
        };
        return WebhooksController_1;
    }());
    __setFunctionName(_classThis, "WebhooksController");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _createWebhook_decorators = [(0, common_1.Post)(":publicKey"), (0, swagger_1.ApiOperation)({ summary: "Register a new webhook for payment events" }), (0, swagger_1.ApiParam)({
                name: "publicKey",
                description: "Stellar public key (G...)",
                example: "GAAZI4TCR3TY5OJHCTJC2A4QSY6CJWJH5IAJTGKIN2ER7LBNVKOCCWN",
            }), (0, swagger_1.ApiResponse)({
                status: 201,
                description: "Webhook created successfully",
                type: webhook_dto_1.WebhookResponseDto,
            }), (0, swagger_1.ApiResponse)({
                status: 400,
                description: "Invalid webhook URL or parameters",
            })];
        _listWebhooks_decorators = [(0, common_1.Get)(":publicKey"), (0, swagger_1.ApiOperation)({ summary: "List all webhooks for a public key" }), (0, swagger_1.ApiParam)({
                name: "publicKey",
                description: "Stellar public key (G...)",
            }), (0, swagger_1.ApiQuery)({ name: 'cursor', required: false, description: 'Opaque pagination cursor' }), (0, swagger_1.ApiQuery)({ name: 'limit', required: false, type: Number, description: 'Items per page (1-100)' }), (0, swagger_1.ApiResponse)({
                status: 200,
                description: "List of webhooks",
                type: [webhook_dto_1.WebhookResponseDto],
            })];
        _getWebhook_decorators = [(0, common_1.Get)(":publicKey/:id"), (0, swagger_1.ApiOperation)({ summary: "Get webhook details by ID" }), (0, swagger_1.ApiParam)({ name: "publicKey", description: "Stellar public key (G...)" }), (0, swagger_1.ApiParam)({ name: "id", description: "Webhook ID (UUID)" }), (0, swagger_1.ApiResponse)({
                status: 200,
                description: "Webhook details",
                type: webhook_dto_1.WebhookResponseDto,
            }), (0, swagger_1.ApiResponse)({ status: 404, description: "Webhook not found" })];
        _updateWebhook_decorators = [(0, common_1.Put)(":publicKey/:id"), (0, common_1.HttpCode)(common_1.HttpStatus.OK), (0, swagger_1.ApiOperation)({ summary: "Update webhook configuration" }), (0, swagger_1.ApiParam)({ name: "publicKey", description: "Stellar public key (G...)" }), (0, swagger_1.ApiParam)({ name: "id", description: "Webhook ID (UUID)" }), (0, swagger_1.ApiResponse)({
                status: 200,
                description: "Webhook updated",
                type: webhook_dto_1.WebhookResponseDto,
            }), (0, swagger_1.ApiResponse)({ status: 404, description: "Webhook not found" })];
        _deleteWebhook_decorators = [(0, common_1.Delete)(":publicKey/:id"), (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT), (0, swagger_1.ApiOperation)({ summary: "Delete a webhook" }), (0, swagger_1.ApiParam)({ name: "publicKey", description: "Stellar public key (G...)" }), (0, swagger_1.ApiParam)({ name: "id", description: "Webhook ID (UUID)" }), (0, swagger_1.ApiResponse)({ status: 204, description: "Webhook deleted" }), (0, swagger_1.ApiResponse)({ status: 404, description: "Webhook not found" })];
        _regenerateSecret_decorators = [(0, common_1.Post)(":publicKey/:id/regenerate-secret"), (0, common_1.HttpCode)(common_1.HttpStatus.OK), (0, swagger_1.ApiOperation)({
                summary: "Regenerate webhook secret",
                description: "Generate a new secret for signing webhook payloads. The old secret will immediately stop working.",
            }), (0, swagger_1.ApiParam)({ name: "publicKey", description: "Stellar public key (G...)" }), (0, swagger_1.ApiParam)({ name: "id", description: "Webhook ID (UUID)" }), (0, swagger_1.ApiResponse)({
                status: 200,
                description: "New secret generated",
                schema: {
                    type: "object",
                    properties: {
                        secret: { type: "string", example: "whsec_xxxxxxxxxxxxxxxx" },
                    },
                },
            }), (0, swagger_1.ApiResponse)({ status: 404, description: "Webhook not found" })];
        _getDeliveryLogs_decorators = [(0, common_1.Get)(":publicKey/:id/logs"), (0, swagger_1.ApiOperation)({ summary: "Get webhook delivery logs" }), (0, swagger_1.ApiParam)({ name: "publicKey", description: "Stellar public key (G...)" }), (0, swagger_1.ApiParam)({ name: "id", description: "Webhook ID (UUID)" }), (0, swagger_1.ApiQuery)({
                name: "limit",
                required: false,
                description: "Maximum number of logs to return",
                example: 50,
            }), (0, swagger_1.ApiQuery)({ name: 'cursor', required: false, description: 'Opaque pagination cursor' }), (0, swagger_1.ApiResponse)({
                status: 200,
                description: "Delivery logs",
                type: [webhook_dto_1.WebhookDeliveryLogDto],
            })];
        _getStats_decorators = [(0, common_1.Get)(":publicKey/:id/stats"), (0, swagger_1.ApiOperation)({ summary: "Get webhook delivery statistics" }), (0, swagger_1.ApiParam)({ name: "publicKey", description: "Stellar public key (G...)" }), (0, swagger_1.ApiParam)({ name: "id", description: "Webhook ID (UUID)" }), (0, swagger_1.ApiResponse)({
                status: 200,
                description: "Webhook statistics",
                type: webhook_dto_1.WebhookStatsDto,
            })];
        _redeliverEvent_decorators = [(0, common_1.Post)(":publicKey/:id/redeliver"), (0, common_1.HttpCode)(common_1.HttpStatus.OK), (0, swagger_1.ApiOperation)({
                summary: "Redeliver a specific event",
                description: "Trigger immediate redelivery of a previously failed or specific event. Useful for consumers to replay events without waiting for the retry scheduler.",
            }), (0, swagger_1.ApiParam)({ name: "publicKey", description: "Stellar public key (G...)" }), (0, swagger_1.ApiParam)({ name: "id", description: "Webhook ID (UUID)" }), (0, swagger_1.ApiResponse)({
                status: 200,
                description: "Redelivery triggered",
                schema: {
                    type: "object",
                    properties: {
                        queued: { type: "boolean" },
                        message: { type: "string" },
                    },
                },
            }), (0, swagger_1.ApiResponse)({ status: 404, description: "Webhook not found" })];
        __esDecorate(_classThis, null, _createWebhook_decorators, { kind: "method", name: "createWebhook", static: false, private: false, access: { has: function (obj) { return "createWebhook" in obj; }, get: function (obj) { return obj.createWebhook; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _listWebhooks_decorators, { kind: "method", name: "listWebhooks", static: false, private: false, access: { has: function (obj) { return "listWebhooks" in obj; }, get: function (obj) { return obj.listWebhooks; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _getWebhook_decorators, { kind: "method", name: "getWebhook", static: false, private: false, access: { has: function (obj) { return "getWebhook" in obj; }, get: function (obj) { return obj.getWebhook; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _updateWebhook_decorators, { kind: "method", name: "updateWebhook", static: false, private: false, access: { has: function (obj) { return "updateWebhook" in obj; }, get: function (obj) { return obj.updateWebhook; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _deleteWebhook_decorators, { kind: "method", name: "deleteWebhook", static: false, private: false, access: { has: function (obj) { return "deleteWebhook" in obj; }, get: function (obj) { return obj.deleteWebhook; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _regenerateSecret_decorators, { kind: "method", name: "regenerateSecret", static: false, private: false, access: { has: function (obj) { return "regenerateSecret" in obj; }, get: function (obj) { return obj.regenerateSecret; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _getDeliveryLogs_decorators, { kind: "method", name: "getDeliveryLogs", static: false, private: false, access: { has: function (obj) { return "getDeliveryLogs" in obj; }, get: function (obj) { return obj.getDeliveryLogs; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _getStats_decorators, { kind: "method", name: "getStats", static: false, private: false, access: { has: function (obj) { return "getStats" in obj; }, get: function (obj) { return obj.getStats; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _redeliverEvent_decorators, { kind: "method", name: "redeliverEvent", static: false, private: false, access: { has: function (obj) { return "redeliverEvent" in obj; }, get: function (obj) { return obj.redeliverEvent; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        WebhooksController = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return WebhooksController = _classThis;
}();
exports.WebhooksController = WebhooksController;
