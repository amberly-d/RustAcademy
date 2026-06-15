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
Object.defineProperty(exports, "__esModule", { value: true });
exports.RedeliverWebhookDto = exports.WebhookStatsDto = exports.WebhookDeliveryLogDto = exports.WebhookResponseDto = exports.UpdateWebhookDto = exports.CreateWebhookDto = void 0;
var class_validator_1 = require("class-validator");
var swagger_1 = require("@nestjs/swagger");
var WEBHOOK_EVENTS = [
    "EscrowDeposited",
    "EscrowWithdrawn",
    "EscrowRefunded",
    "payment.received",
    "username.claimed",
    "recurring.payment.due",
    "recurring.payment.executed",
    "recurring.payment.failed",
    "recurring.payment.cancelled",
    "recurring.link.created",
    "recurring.link.updated",
    "recurring.link.paused",
    "recurring.link.resumed",
    "recurring.link.completed",
];
var CreateWebhookDto = function () {
    var _a;
    var _webhookUrl_decorators;
    var _webhookUrl_initializers = [];
    var _webhookUrl_extraInitializers = [];
    var _label_decorators;
    var _label_initializers = [];
    var _label_extraInitializers = [];
    var _events_decorators;
    var _events_initializers = [];
    var _events_extraInitializers = [];
    var _minAmountStroops_decorators;
    var _minAmountStroops_initializers = [];
    var _minAmountStroops_extraInitializers = [];
    var _secret_decorators;
    var _secret_initializers = [];
    var _secret_extraInitializers = [];
    return _a = /** @class */ (function () {
            function CreateWebhookDto() {
                this.webhookUrl = __runInitializers(this, _webhookUrl_initializers, void 0);
                this.label = (__runInitializers(this, _webhookUrl_extraInitializers), __runInitializers(this, _label_initializers, void 0));
                this.events = (__runInitializers(this, _label_extraInitializers), __runInitializers(this, _events_initializers, void 0));
                this.minAmountStroops = (__runInitializers(this, _events_extraInitializers), __runInitializers(this, _minAmountStroops_initializers, void 0));
                this.secret = (__runInitializers(this, _minAmountStroops_extraInitializers), __runInitializers(this, _secret_initializers, void 0));
                __runInitializers(this, _secret_extraInitializers);
            }
            return CreateWebhookDto;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _webhookUrl_decorators = [(0, swagger_1.ApiProperty)({
                    example: "https://example.com/webhooks/ RustAcademy",
                    description: "URL to receive webhook POST requests",
                }), (0, class_validator_1.IsUrl)({
                    protocols: ["http", "https"],
                    require_protocol: true,
                    require_tld: false, // Allow localhost for development
                }, { message: "webhookUrl must be a valid URL" })];
            _label_decorators = [(0, swagger_1.ApiPropertyOptional)({
                    example: "my-webhook-1",
                    maxLength: 100,
                    description: "Optional label for this webhook",
                }), (0, class_validator_1.IsOptional)(), (0, class_validator_1.IsString)(), (0, class_validator_1.MaxLength)(100)];
            _events_decorators = [(0, swagger_1.ApiPropertyOptional)({
                    type: [String],
                    enum: WEBHOOK_EVENTS,
                    nullable: true,
                    description: "Event types to subscribe to. null = all events. Default: all payment events",
                    example: ["payment.received", "EscrowDeposited"],
                }), (0, class_validator_1.IsOptional)(), (0, class_validator_1.IsArray)(), (0, class_validator_1.IsIn)(WEBHOOK_EVENTS, { each: true })];
            _minAmountStroops_decorators = [(0, swagger_1.ApiPropertyOptional)({
                    description: "Minimum amount in stroops to trigger webhook (0 = no threshold)",
                    example: 100000000, // 1 XLM
                }), (0, class_validator_1.IsOptional)(), (0, class_validator_1.IsNumber)(), (0, class_validator_1.Min)(0)];
            _secret_decorators = [(0, swagger_1.ApiPropertyOptional)({
                    example: "whsec_mysecretkey123",
                    description: "Custom secret for signing payloads. If not provided, a secure secret will be generated.",
                }), (0, class_validator_1.IsOptional)(), (0, class_validator_1.IsString)(), (0, class_validator_1.MaxLength)(128)];
            __esDecorate(null, null, _webhookUrl_decorators, { kind: "field", name: "webhookUrl", static: false, private: false, access: { has: function (obj) { return "webhookUrl" in obj; }, get: function (obj) { return obj.webhookUrl; }, set: function (obj, value) { obj.webhookUrl = value; } }, metadata: _metadata }, _webhookUrl_initializers, _webhookUrl_extraInitializers);
            __esDecorate(null, null, _label_decorators, { kind: "field", name: "label", static: false, private: false, access: { has: function (obj) { return "label" in obj; }, get: function (obj) { return obj.label; }, set: function (obj, value) { obj.label = value; } }, metadata: _metadata }, _label_initializers, _label_extraInitializers);
            __esDecorate(null, null, _events_decorators, { kind: "field", name: "events", static: false, private: false, access: { has: function (obj) { return "events" in obj; }, get: function (obj) { return obj.events; }, set: function (obj, value) { obj.events = value; } }, metadata: _metadata }, _events_initializers, _events_extraInitializers);
            __esDecorate(null, null, _minAmountStroops_decorators, { kind: "field", name: "minAmountStroops", static: false, private: false, access: { has: function (obj) { return "minAmountStroops" in obj; }, get: function (obj) { return obj.minAmountStroops; }, set: function (obj, value) { obj.minAmountStroops = value; } }, metadata: _metadata }, _minAmountStroops_initializers, _minAmountStroops_extraInitializers);
            __esDecorate(null, null, _secret_decorators, { kind: "field", name: "secret", static: false, private: false, access: { has: function (obj) { return "secret" in obj; }, get: function (obj) { return obj.secret; }, set: function (obj, value) { obj.secret = value; } }, metadata: _metadata }, _secret_initializers, _secret_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.CreateWebhookDto = CreateWebhookDto;
var UpdateWebhookDto = function () {
    var _a;
    var _webhookUrl_decorators;
    var _webhookUrl_initializers = [];
    var _webhookUrl_extraInitializers = [];
    var _label_decorators;
    var _label_initializers = [];
    var _label_extraInitializers = [];
    var _events_decorators;
    var _events_initializers = [];
    var _events_extraInitializers = [];
    var _minAmountStroops_decorators;
    var _minAmountStroops_initializers = [];
    var _minAmountStroops_extraInitializers = [];
    var _enabled_decorators;
    var _enabled_initializers = [];
    var _enabled_extraInitializers = [];
    return _a = /** @class */ (function () {
            function UpdateWebhookDto() {
                this.webhookUrl = __runInitializers(this, _webhookUrl_initializers, void 0);
                this.label = (__runInitializers(this, _webhookUrl_extraInitializers), __runInitializers(this, _label_initializers, void 0));
                this.events = (__runInitializers(this, _label_extraInitializers), __runInitializers(this, _events_initializers, void 0));
                this.minAmountStroops = (__runInitializers(this, _events_extraInitializers), __runInitializers(this, _minAmountStroops_initializers, void 0));
                this.enabled = (__runInitializers(this, _minAmountStroops_extraInitializers), __runInitializers(this, _enabled_initializers, void 0));
                __runInitializers(this, _enabled_extraInitializers);
            }
            return UpdateWebhookDto;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _webhookUrl_decorators = [(0, swagger_1.ApiPropertyOptional)({
                    example: "https://example.com/webhooks/ RustAcademy",
                    description: "URL to receive webhook POST requests",
                }), (0, class_validator_1.IsOptional)(), (0, class_validator_1.IsUrl)({
                    protocols: ["http", "https"],
                    require_protocol: true,
                    require_tld: false,
                }, { message: "webhookUrl must be a valid URL" })];
            _label_decorators = [(0, swagger_1.ApiPropertyOptional)({
                    example: "my-webhook-1",
                    maxLength: 100,
                    description: "Optional label for this webhook",
                }), (0, class_validator_1.IsOptional)(), (0, class_validator_1.IsString)(), (0, class_validator_1.MaxLength)(100)];
            _events_decorators = [(0, swagger_1.ApiPropertyOptional)({
                    type: [String],
                    enum: WEBHOOK_EVENTS,
                    nullable: true,
                    description: "Event types to subscribe to. null = all events.",
                }), (0, class_validator_1.IsOptional)(), (0, class_validator_1.IsArray)(), (0, class_validator_1.IsIn)(WEBHOOK_EVENTS, { each: true })];
            _minAmountStroops_decorators = [(0, swagger_1.ApiPropertyOptional)({
                    description: "Minimum amount in stroops to trigger webhook",
                }), (0, class_validator_1.IsOptional)(), (0, class_validator_1.IsNumber)(), (0, class_validator_1.Min)(0)];
            _enabled_decorators = [(0, swagger_1.ApiPropertyOptional)({
                    description: "Enable or disable this webhook",
                }), (0, class_validator_1.IsOptional)()];
            __esDecorate(null, null, _webhookUrl_decorators, { kind: "field", name: "webhookUrl", static: false, private: false, access: { has: function (obj) { return "webhookUrl" in obj; }, get: function (obj) { return obj.webhookUrl; }, set: function (obj, value) { obj.webhookUrl = value; } }, metadata: _metadata }, _webhookUrl_initializers, _webhookUrl_extraInitializers);
            __esDecorate(null, null, _label_decorators, { kind: "field", name: "label", static: false, private: false, access: { has: function (obj) { return "label" in obj; }, get: function (obj) { return obj.label; }, set: function (obj, value) { obj.label = value; } }, metadata: _metadata }, _label_initializers, _label_extraInitializers);
            __esDecorate(null, null, _events_decorators, { kind: "field", name: "events", static: false, private: false, access: { has: function (obj) { return "events" in obj; }, get: function (obj) { return obj.events; }, set: function (obj, value) { obj.events = value; } }, metadata: _metadata }, _events_initializers, _events_extraInitializers);
            __esDecorate(null, null, _minAmountStroops_decorators, { kind: "field", name: "minAmountStroops", static: false, private: false, access: { has: function (obj) { return "minAmountStroops" in obj; }, get: function (obj) { return obj.minAmountStroops; }, set: function (obj, value) { obj.minAmountStroops = value; } }, metadata: _metadata }, _minAmountStroops_initializers, _minAmountStroops_extraInitializers);
            __esDecorate(null, null, _enabled_decorators, { kind: "field", name: "enabled", static: false, private: false, access: { has: function (obj) { return "enabled" in obj; }, get: function (obj) { return obj.enabled; }, set: function (obj, value) { obj.enabled = value; } }, metadata: _metadata }, _enabled_initializers, _enabled_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.UpdateWebhookDto = UpdateWebhookDto;
var WebhookResponseDto = function () {
    var _a;
    var _id_decorators;
    var _id_initializers = [];
    var _id_extraInitializers = [];
    var _publicKey_decorators;
    var _publicKey_initializers = [];
    var _publicKey_extraInitializers = [];
    var _webhookUrl_decorators;
    var _webhookUrl_initializers = [];
    var _webhookUrl_extraInitializers = [];
    var _label_decorators;
    var _label_initializers = [];
    var _label_extraInitializers = [];
    var _secret_decorators;
    var _secret_initializers = [];
    var _secret_extraInitializers = [];
    var _events_decorators;
    var _events_initializers = [];
    var _events_extraInitializers = [];
    var _minAmountStroops_decorators;
    var _minAmountStroops_initializers = [];
    var _minAmountStroops_extraInitializers = [];
    var _enabled_decorators;
    var _enabled_initializers = [];
    var _enabled_extraInitializers = [];
    var _createdAt_decorators;
    var _createdAt_initializers = [];
    var _createdAt_extraInitializers = [];
    var _updatedAt_decorators;
    var _updatedAt_initializers = [];
    var _updatedAt_extraInitializers = [];
    return _a = /** @class */ (function () {
            function WebhookResponseDto() {
                this.id = __runInitializers(this, _id_initializers, void 0);
                this.publicKey = (__runInitializers(this, _id_extraInitializers), __runInitializers(this, _publicKey_initializers, void 0));
                this.webhookUrl = (__runInitializers(this, _publicKey_extraInitializers), __runInitializers(this, _webhookUrl_initializers, void 0));
                this.label = (__runInitializers(this, _webhookUrl_extraInitializers), __runInitializers(this, _label_initializers, void 0));
                this.secret = (__runInitializers(this, _label_extraInitializers), __runInitializers(this, _secret_initializers, void 0));
                this.events = (__runInitializers(this, _secret_extraInitializers), __runInitializers(this, _events_initializers, void 0));
                this.minAmountStroops = (__runInitializers(this, _events_extraInitializers), __runInitializers(this, _minAmountStroops_initializers, void 0));
                this.enabled = (__runInitializers(this, _minAmountStroops_extraInitializers), __runInitializers(this, _enabled_initializers, void 0));
                this.createdAt = (__runInitializers(this, _enabled_extraInitializers), __runInitializers(this, _createdAt_initializers, void 0));
                this.updatedAt = (__runInitializers(this, _createdAt_extraInitializers), __runInitializers(this, _updatedAt_initializers, void 0));
                __runInitializers(this, _updatedAt_extraInitializers);
            }
            return WebhookResponseDto;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _id_decorators = [(0, swagger_1.ApiProperty)()];
            _publicKey_decorators = [(0, swagger_1.ApiProperty)()];
            _webhookUrl_decorators = [(0, swagger_1.ApiProperty)()];
            _label_decorators = [(0, swagger_1.ApiPropertyOptional)()];
            _secret_decorators = [(0, swagger_1.ApiProperty)({
                    description: "Secret key for verifying webhook signatures",
                    example: "whsec_xxxxxxxxxxxxxxxx",
                })];
            _events_decorators = [(0, swagger_1.ApiPropertyOptional)({ type: [String], nullable: true })];
            _minAmountStroops_decorators = [(0, swagger_1.ApiProperty)()];
            _enabled_decorators = [(0, swagger_1.ApiProperty)()];
            _createdAt_decorators = [(0, swagger_1.ApiProperty)()];
            _updatedAt_decorators = [(0, swagger_1.ApiProperty)()];
            __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: function (obj) { return "id" in obj; }, get: function (obj) { return obj.id; }, set: function (obj, value) { obj.id = value; } }, metadata: _metadata }, _id_initializers, _id_extraInitializers);
            __esDecorate(null, null, _publicKey_decorators, { kind: "field", name: "publicKey", static: false, private: false, access: { has: function (obj) { return "publicKey" in obj; }, get: function (obj) { return obj.publicKey; }, set: function (obj, value) { obj.publicKey = value; } }, metadata: _metadata }, _publicKey_initializers, _publicKey_extraInitializers);
            __esDecorate(null, null, _webhookUrl_decorators, { kind: "field", name: "webhookUrl", static: false, private: false, access: { has: function (obj) { return "webhookUrl" in obj; }, get: function (obj) { return obj.webhookUrl; }, set: function (obj, value) { obj.webhookUrl = value; } }, metadata: _metadata }, _webhookUrl_initializers, _webhookUrl_extraInitializers);
            __esDecorate(null, null, _label_decorators, { kind: "field", name: "label", static: false, private: false, access: { has: function (obj) { return "label" in obj; }, get: function (obj) { return obj.label; }, set: function (obj, value) { obj.label = value; } }, metadata: _metadata }, _label_initializers, _label_extraInitializers);
            __esDecorate(null, null, _secret_decorators, { kind: "field", name: "secret", static: false, private: false, access: { has: function (obj) { return "secret" in obj; }, get: function (obj) { return obj.secret; }, set: function (obj, value) { obj.secret = value; } }, metadata: _metadata }, _secret_initializers, _secret_extraInitializers);
            __esDecorate(null, null, _events_decorators, { kind: "field", name: "events", static: false, private: false, access: { has: function (obj) { return "events" in obj; }, get: function (obj) { return obj.events; }, set: function (obj, value) { obj.events = value; } }, metadata: _metadata }, _events_initializers, _events_extraInitializers);
            __esDecorate(null, null, _minAmountStroops_decorators, { kind: "field", name: "minAmountStroops", static: false, private: false, access: { has: function (obj) { return "minAmountStroops" in obj; }, get: function (obj) { return obj.minAmountStroops; }, set: function (obj, value) { obj.minAmountStroops = value; } }, metadata: _metadata }, _minAmountStroops_initializers, _minAmountStroops_extraInitializers);
            __esDecorate(null, null, _enabled_decorators, { kind: "field", name: "enabled", static: false, private: false, access: { has: function (obj) { return "enabled" in obj; }, get: function (obj) { return obj.enabled; }, set: function (obj, value) { obj.enabled = value; } }, metadata: _metadata }, _enabled_initializers, _enabled_extraInitializers);
            __esDecorate(null, null, _createdAt_decorators, { kind: "field", name: "createdAt", static: false, private: false, access: { has: function (obj) { return "createdAt" in obj; }, get: function (obj) { return obj.createdAt; }, set: function (obj, value) { obj.createdAt = value; } }, metadata: _metadata }, _createdAt_initializers, _createdAt_extraInitializers);
            __esDecorate(null, null, _updatedAt_decorators, { kind: "field", name: "updatedAt", static: false, private: false, access: { has: function (obj) { return "updatedAt" in obj; }, get: function (obj) { return obj.updatedAt; }, set: function (obj, value) { obj.updatedAt = value; } }, metadata: _metadata }, _updatedAt_initializers, _updatedAt_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.WebhookResponseDto = WebhookResponseDto;
var WebhookDeliveryLogDto = function () {
    var _a;
    var _id_decorators;
    var _id_initializers = [];
    var _id_extraInitializers = [];
    var _eventType_decorators;
    var _eventType_initializers = [];
    var _eventType_extraInitializers = [];
    var _eventId_decorators;
    var _eventId_initializers = [];
    var _eventId_extraInitializers = [];
    var _status_decorators;
    var _status_initializers = [];
    var _status_extraInitializers = [];
    var _attempts_decorators;
    var _attempts_initializers = [];
    var _attempts_extraInitializers = [];
    var _lastError_decorators;
    var _lastError_initializers = [];
    var _lastError_extraInitializers = [];
    var _httpStatus_decorators;
    var _httpStatus_initializers = [];
    var _httpStatus_extraInitializers = [];
    var _responseBody_decorators;
    var _responseBody_initializers = [];
    var _responseBody_extraInitializers = [];
    var _createdAt_decorators;
    var _createdAt_initializers = [];
    var _createdAt_extraInitializers = [];
    var _deliveredAt_decorators;
    var _deliveredAt_initializers = [];
    var _deliveredAt_extraInitializers = [];
    return _a = /** @class */ (function () {
            function WebhookDeliveryLogDto() {
                this.id = __runInitializers(this, _id_initializers, void 0);
                this.eventType = (__runInitializers(this, _id_extraInitializers), __runInitializers(this, _eventType_initializers, void 0));
                this.eventId = (__runInitializers(this, _eventType_extraInitializers), __runInitializers(this, _eventId_initializers, void 0));
                this.status = (__runInitializers(this, _eventId_extraInitializers), __runInitializers(this, _status_initializers, void 0));
                this.attempts = (__runInitializers(this, _status_extraInitializers), __runInitializers(this, _attempts_initializers, void 0));
                this.lastError = (__runInitializers(this, _attempts_extraInitializers), __runInitializers(this, _lastError_initializers, void 0));
                this.httpStatus = (__runInitializers(this, _lastError_extraInitializers), __runInitializers(this, _httpStatus_initializers, void 0));
                this.responseBody = (__runInitializers(this, _httpStatus_extraInitializers), __runInitializers(this, _responseBody_initializers, void 0));
                this.createdAt = (__runInitializers(this, _responseBody_extraInitializers), __runInitializers(this, _createdAt_initializers, void 0));
                this.deliveredAt = (__runInitializers(this, _createdAt_extraInitializers), __runInitializers(this, _deliveredAt_initializers, void 0));
                __runInitializers(this, _deliveredAt_extraInitializers);
            }
            return WebhookDeliveryLogDto;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _id_decorators = [(0, swagger_1.ApiProperty)()];
            _eventType_decorators = [(0, swagger_1.ApiProperty)()];
            _eventId_decorators = [(0, swagger_1.ApiProperty)()];
            _status_decorators = [(0, swagger_1.ApiProperty)()];
            _attempts_decorators = [(0, swagger_1.ApiProperty)()];
            _lastError_decorators = [(0, swagger_1.ApiPropertyOptional)()];
            _httpStatus_decorators = [(0, swagger_1.ApiPropertyOptional)()];
            _responseBody_decorators = [(0, swagger_1.ApiPropertyOptional)()];
            _createdAt_decorators = [(0, swagger_1.ApiProperty)()];
            _deliveredAt_decorators = [(0, swagger_1.ApiPropertyOptional)()];
            __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: function (obj) { return "id" in obj; }, get: function (obj) { return obj.id; }, set: function (obj, value) { obj.id = value; } }, metadata: _metadata }, _id_initializers, _id_extraInitializers);
            __esDecorate(null, null, _eventType_decorators, { kind: "field", name: "eventType", static: false, private: false, access: { has: function (obj) { return "eventType" in obj; }, get: function (obj) { return obj.eventType; }, set: function (obj, value) { obj.eventType = value; } }, metadata: _metadata }, _eventType_initializers, _eventType_extraInitializers);
            __esDecorate(null, null, _eventId_decorators, { kind: "field", name: "eventId", static: false, private: false, access: { has: function (obj) { return "eventId" in obj; }, get: function (obj) { return obj.eventId; }, set: function (obj, value) { obj.eventId = value; } }, metadata: _metadata }, _eventId_initializers, _eventId_extraInitializers);
            __esDecorate(null, null, _status_decorators, { kind: "field", name: "status", static: false, private: false, access: { has: function (obj) { return "status" in obj; }, get: function (obj) { return obj.status; }, set: function (obj, value) { obj.status = value; } }, metadata: _metadata }, _status_initializers, _status_extraInitializers);
            __esDecorate(null, null, _attempts_decorators, { kind: "field", name: "attempts", static: false, private: false, access: { has: function (obj) { return "attempts" in obj; }, get: function (obj) { return obj.attempts; }, set: function (obj, value) { obj.attempts = value; } }, metadata: _metadata }, _attempts_initializers, _attempts_extraInitializers);
            __esDecorate(null, null, _lastError_decorators, { kind: "field", name: "lastError", static: false, private: false, access: { has: function (obj) { return "lastError" in obj; }, get: function (obj) { return obj.lastError; }, set: function (obj, value) { obj.lastError = value; } }, metadata: _metadata }, _lastError_initializers, _lastError_extraInitializers);
            __esDecorate(null, null, _httpStatus_decorators, { kind: "field", name: "httpStatus", static: false, private: false, access: { has: function (obj) { return "httpStatus" in obj; }, get: function (obj) { return obj.httpStatus; }, set: function (obj, value) { obj.httpStatus = value; } }, metadata: _metadata }, _httpStatus_initializers, _httpStatus_extraInitializers);
            __esDecorate(null, null, _responseBody_decorators, { kind: "field", name: "responseBody", static: false, private: false, access: { has: function (obj) { return "responseBody" in obj; }, get: function (obj) { return obj.responseBody; }, set: function (obj, value) { obj.responseBody = value; } }, metadata: _metadata }, _responseBody_initializers, _responseBody_extraInitializers);
            __esDecorate(null, null, _createdAt_decorators, { kind: "field", name: "createdAt", static: false, private: false, access: { has: function (obj) { return "createdAt" in obj; }, get: function (obj) { return obj.createdAt; }, set: function (obj, value) { obj.createdAt = value; } }, metadata: _metadata }, _createdAt_initializers, _createdAt_extraInitializers);
            __esDecorate(null, null, _deliveredAt_decorators, { kind: "field", name: "deliveredAt", static: false, private: false, access: { has: function (obj) { return "deliveredAt" in obj; }, get: function (obj) { return obj.deliveredAt; }, set: function (obj, value) { obj.deliveredAt = value; } }, metadata: _metadata }, _deliveredAt_initializers, _deliveredAt_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.WebhookDeliveryLogDto = WebhookDeliveryLogDto;
var WebhookStatsDto = function () {
    var _a;
    var _totalSent_decorators;
    var _totalSent_initializers = [];
    var _totalSent_extraInitializers = [];
    var _totalFailed_decorators;
    var _totalFailed_initializers = [];
    var _totalFailed_extraInitializers = [];
    var _pendingRetries_decorators;
    var _pendingRetries_initializers = [];
    var _pendingRetries_extraInitializers = [];
    var _lastDeliveryAt_decorators;
    var _lastDeliveryAt_initializers = [];
    var _lastDeliveryAt_extraInitializers = [];
    var _lastError_decorators;
    var _lastError_initializers = [];
    var _lastError_extraInitializers = [];
    return _a = /** @class */ (function () {
            function WebhookStatsDto() {
                this.totalSent = __runInitializers(this, _totalSent_initializers, void 0);
                this.totalFailed = (__runInitializers(this, _totalSent_extraInitializers), __runInitializers(this, _totalFailed_initializers, void 0));
                this.pendingRetries = (__runInitializers(this, _totalFailed_extraInitializers), __runInitializers(this, _pendingRetries_initializers, void 0));
                this.lastDeliveryAt = (__runInitializers(this, _pendingRetries_extraInitializers), __runInitializers(this, _lastDeliveryAt_initializers, void 0));
                this.lastError = (__runInitializers(this, _lastDeliveryAt_extraInitializers), __runInitializers(this, _lastError_initializers, void 0));
                __runInitializers(this, _lastError_extraInitializers);
            }
            return WebhookStatsDto;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _totalSent_decorators = [(0, swagger_1.ApiProperty)()];
            _totalFailed_decorators = [(0, swagger_1.ApiProperty)()];
            _pendingRetries_decorators = [(0, swagger_1.ApiProperty)()];
            _lastDeliveryAt_decorators = [(0, swagger_1.ApiPropertyOptional)()];
            _lastError_decorators = [(0, swagger_1.ApiPropertyOptional)()];
            __esDecorate(null, null, _totalSent_decorators, { kind: "field", name: "totalSent", static: false, private: false, access: { has: function (obj) { return "totalSent" in obj; }, get: function (obj) { return obj.totalSent; }, set: function (obj, value) { obj.totalSent = value; } }, metadata: _metadata }, _totalSent_initializers, _totalSent_extraInitializers);
            __esDecorate(null, null, _totalFailed_decorators, { kind: "field", name: "totalFailed", static: false, private: false, access: { has: function (obj) { return "totalFailed" in obj; }, get: function (obj) { return obj.totalFailed; }, set: function (obj, value) { obj.totalFailed = value; } }, metadata: _metadata }, _totalFailed_initializers, _totalFailed_extraInitializers);
            __esDecorate(null, null, _pendingRetries_decorators, { kind: "field", name: "pendingRetries", static: false, private: false, access: { has: function (obj) { return "pendingRetries" in obj; }, get: function (obj) { return obj.pendingRetries; }, set: function (obj, value) { obj.pendingRetries = value; } }, metadata: _metadata }, _pendingRetries_initializers, _pendingRetries_extraInitializers);
            __esDecorate(null, null, _lastDeliveryAt_decorators, { kind: "field", name: "lastDeliveryAt", static: false, private: false, access: { has: function (obj) { return "lastDeliveryAt" in obj; }, get: function (obj) { return obj.lastDeliveryAt; }, set: function (obj, value) { obj.lastDeliveryAt = value; } }, metadata: _metadata }, _lastDeliveryAt_initializers, _lastDeliveryAt_extraInitializers);
            __esDecorate(null, null, _lastError_decorators, { kind: "field", name: "lastError", static: false, private: false, access: { has: function (obj) { return "lastError" in obj; }, get: function (obj) { return obj.lastError; }, set: function (obj, value) { obj.lastError = value; } }, metadata: _metadata }, _lastError_initializers, _lastError_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.WebhookStatsDto = WebhookStatsDto;
var RedeliverWebhookDto = function () {
    var _a;
    var _eventId_decorators;
    var _eventId_initializers = [];
    var _eventId_extraInitializers = [];
    var _eventType_decorators;
    var _eventType_initializers = [];
    var _eventType_extraInitializers = [];
    return _a = /** @class */ (function () {
            function RedeliverWebhookDto() {
                this.eventId = __runInitializers(this, _eventId_initializers, void 0);
                this.eventType = (__runInitializers(this, _eventId_extraInitializers), __runInitializers(this, _eventType_initializers, void 0));
                __runInitializers(this, _eventType_extraInitializers);
            }
            return RedeliverWebhookDto;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _eventId_decorators = [(0, swagger_1.ApiProperty)({
                    description: "The event ID to redeliver",
                    example: "tx_abc123",
                }), (0, class_validator_1.IsString)()];
            _eventType_decorators = [(0, swagger_1.ApiProperty)({
                    description: "The event type to redeliver",
                    enum: WEBHOOK_EVENTS,
                    example: "payment.received",
                }), (0, class_validator_1.IsIn)(WEBHOOK_EVENTS)];
            __esDecorate(null, null, _eventId_decorators, { kind: "field", name: "eventId", static: false, private: false, access: { has: function (obj) { return "eventId" in obj; }, get: function (obj) { return obj.eventId; }, set: function (obj, value) { obj.eventId = value; } }, metadata: _metadata }, _eventId_initializers, _eventId_extraInitializers);
            __esDecorate(null, null, _eventType_decorators, { kind: "field", name: "eventType", static: false, private: false, access: { has: function (obj) { return "eventType" in obj; }, get: function (obj) { return obj.eventType; }, set: function (obj, value) { obj.eventType = value; } }, metadata: _metadata }, _eventType_initializers, _eventType_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.RedeliverWebhookDto = RedeliverWebhookDto;
