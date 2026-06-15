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
exports.NotificationPreferenceResponseDto = exports.DisableChannelDto = exports.UpsertNotificationPreferenceDto = void 0;
var class_validator_1 = require("class-validator");
var swagger_1 = require("@nestjs/swagger");
var class_transformer_1 = require("class-transformer");
var VALID_CHANNELS = ["email", "push", "webhook"];
var VALID_EVENTS = [
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
var UpsertNotificationPreferenceDto = function () {
    var _a;
    var _channel_decorators;
    var _channel_initializers = [];
    var _channel_extraInitializers = [];
    var _email_decorators;
    var _email_initializers = [];
    var _email_extraInitializers = [];
    var _pushToken_decorators;
    var _pushToken_initializers = [];
    var _pushToken_extraInitializers = [];
    var _webhookUrl_decorators;
    var _webhookUrl_initializers = [];
    var _webhookUrl_extraInitializers = [];
    var _webhookSecret_decorators;
    var _webhookSecret_initializers = [];
    var _webhookSecret_extraInitializers = [];
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
            function UpsertNotificationPreferenceDto() {
                this.channel = __runInitializers(this, _channel_initializers, void 0);
                this.email = (__runInitializers(this, _channel_extraInitializers), __runInitializers(this, _email_initializers, void 0));
                this.pushToken = (__runInitializers(this, _email_extraInitializers), __runInitializers(this, _pushToken_initializers, void 0));
                this.webhookUrl = (__runInitializers(this, _pushToken_extraInitializers), __runInitializers(this, _webhookUrl_initializers, void 0));
                this.webhookSecret = (__runInitializers(this, _webhookUrl_extraInitializers), __runInitializers(this, _webhookSecret_initializers, void 0));
                this.events = (__runInitializers(this, _webhookSecret_extraInitializers), __runInitializers(this, _events_initializers, void 0));
                this.minAmountStroops = (__runInitializers(this, _events_extraInitializers), __runInitializers(this, _minAmountStroops_initializers, void 0));
                this.enabled = (__runInitializers(this, _minAmountStroops_extraInitializers), __runInitializers(this, _enabled_initializers, void 0));
                __runInitializers(this, _enabled_extraInitializers);
            }
            return UpsertNotificationPreferenceDto;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _channel_decorators = [(0, swagger_1.ApiProperty)({ enum: VALID_CHANNELS, example: "email" }), (0, class_validator_1.IsIn)(VALID_CHANNELS)];
            _email_decorators = [(0, swagger_1.ApiPropertyOptional)({ example: "user@example.com" }), (0, class_validator_1.IsOptional)(), (0, class_validator_1.IsEmail)()];
            _pushToken_decorators = [(0, swagger_1.ApiPropertyOptional)({ example: "ExponentPushToken[xxxx]" }), (0, class_validator_1.IsOptional)(), (0, class_validator_1.IsString)()];
            _webhookUrl_decorators = [(0, swagger_1.ApiPropertyOptional)({ example: "https://example.com/hooks/ RustAcademy" }), (0, class_validator_1.IsOptional)(), (0, class_validator_1.IsUrl)()];
            _webhookSecret_decorators = [(0, swagger_1.ApiPropertyOptional)({
                    example: "whsec_xxxxxxxxxxxxxxxx",
                    description: "Secret key for HMAC-SHA256 payload signing. If not provided, one will be generated automatically.",
                }), (0, class_validator_1.IsOptional)(), (0, class_validator_1.IsString)()];
            _events_decorators = [(0, swagger_1.ApiPropertyOptional)({
                    type: [String],
                    enum: VALID_EVENTS,
                    nullable: true,
                    description: "null = all events; otherwise only listed event types trigger notifications",
                    example: ["EscrowDeposited", "EscrowWithdrawn"],
                }), (0, class_validator_1.IsOptional)(), (0, class_validator_1.IsArray)(), (0, class_validator_1.IsIn)(VALID_EVENTS, { each: true })];
            _minAmountStroops_decorators = [(0, swagger_1.ApiPropertyOptional)({
                    description: "Minimum amount in stroops (1 XLM = 10,000,000 stroops). 0 = no threshold.",
                    example: 100000000,
                }), (0, class_validator_1.IsOptional)(), (0, class_validator_1.IsNumber)(), (0, class_validator_1.Min)(0), (0, class_transformer_1.Type)(function () { return Number; })];
            _enabled_decorators = [(0, swagger_1.ApiPropertyOptional)({ default: true }), (0, class_validator_1.IsOptional)(), (0, class_validator_1.IsBoolean)(), (0, class_transformer_1.Transform)(function (_b) {
                    var value = _b.value;
                    return value !== null && value !== void 0 ? value : true;
                })];
            __esDecorate(null, null, _channel_decorators, { kind: "field", name: "channel", static: false, private: false, access: { has: function (obj) { return "channel" in obj; }, get: function (obj) { return obj.channel; }, set: function (obj, value) { obj.channel = value; } }, metadata: _metadata }, _channel_initializers, _channel_extraInitializers);
            __esDecorate(null, null, _email_decorators, { kind: "field", name: "email", static: false, private: false, access: { has: function (obj) { return "email" in obj; }, get: function (obj) { return obj.email; }, set: function (obj, value) { obj.email = value; } }, metadata: _metadata }, _email_initializers, _email_extraInitializers);
            __esDecorate(null, null, _pushToken_decorators, { kind: "field", name: "pushToken", static: false, private: false, access: { has: function (obj) { return "pushToken" in obj; }, get: function (obj) { return obj.pushToken; }, set: function (obj, value) { obj.pushToken = value; } }, metadata: _metadata }, _pushToken_initializers, _pushToken_extraInitializers);
            __esDecorate(null, null, _webhookUrl_decorators, { kind: "field", name: "webhookUrl", static: false, private: false, access: { has: function (obj) { return "webhookUrl" in obj; }, get: function (obj) { return obj.webhookUrl; }, set: function (obj, value) { obj.webhookUrl = value; } }, metadata: _metadata }, _webhookUrl_initializers, _webhookUrl_extraInitializers);
            __esDecorate(null, null, _webhookSecret_decorators, { kind: "field", name: "webhookSecret", static: false, private: false, access: { has: function (obj) { return "webhookSecret" in obj; }, get: function (obj) { return obj.webhookSecret; }, set: function (obj, value) { obj.webhookSecret = value; } }, metadata: _metadata }, _webhookSecret_initializers, _webhookSecret_extraInitializers);
            __esDecorate(null, null, _events_decorators, { kind: "field", name: "events", static: false, private: false, access: { has: function (obj) { return "events" in obj; }, get: function (obj) { return obj.events; }, set: function (obj, value) { obj.events = value; } }, metadata: _metadata }, _events_initializers, _events_extraInitializers);
            __esDecorate(null, null, _minAmountStroops_decorators, { kind: "field", name: "minAmountStroops", static: false, private: false, access: { has: function (obj) { return "minAmountStroops" in obj; }, get: function (obj) { return obj.minAmountStroops; }, set: function (obj, value) { obj.minAmountStroops = value; } }, metadata: _metadata }, _minAmountStroops_initializers, _minAmountStroops_extraInitializers);
            __esDecorate(null, null, _enabled_decorators, { kind: "field", name: "enabled", static: false, private: false, access: { has: function (obj) { return "enabled" in obj; }, get: function (obj) { return obj.enabled; }, set: function (obj, value) { obj.enabled = value; } }, metadata: _metadata }, _enabled_initializers, _enabled_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.UpsertNotificationPreferenceDto = UpsertNotificationPreferenceDto;
var DisableChannelDto = function () {
    var _a;
    var _channel_decorators;
    var _channel_initializers = [];
    var _channel_extraInitializers = [];
    return _a = /** @class */ (function () {
            function DisableChannelDto() {
                this.channel = __runInitializers(this, _channel_initializers, void 0);
                __runInitializers(this, _channel_extraInitializers);
            }
            return DisableChannelDto;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _channel_decorators = [(0, swagger_1.ApiProperty)({ enum: VALID_CHANNELS }), (0, class_validator_1.IsIn)(VALID_CHANNELS)];
            __esDecorate(null, null, _channel_decorators, { kind: "field", name: "channel", static: false, private: false, access: { has: function (obj) { return "channel" in obj; }, get: function (obj) { return obj.channel; }, set: function (obj, value) { obj.channel = value; } }, metadata: _metadata }, _channel_initializers, _channel_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.DisableChannelDto = DisableChannelDto;
var NotificationPreferenceResponseDto = function () {
    var _a;
    var _id_decorators;
    var _id_initializers = [];
    var _id_extraInitializers = [];
    var _publicKey_decorators;
    var _publicKey_initializers = [];
    var _publicKey_extraInitializers = [];
    var _channel_decorators;
    var _channel_initializers = [];
    var _channel_extraInitializers = [];
    var _email_decorators;
    var _email_initializers = [];
    var _email_extraInitializers = [];
    var _pushToken_decorators;
    var _pushToken_initializers = [];
    var _pushToken_extraInitializers = [];
    var _webhookUrl_decorators;
    var _webhookUrl_initializers = [];
    var _webhookUrl_extraInitializers = [];
    var _webhookSecret_decorators;
    var _webhookSecret_initializers = [];
    var _webhookSecret_extraInitializers = [];
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
            function NotificationPreferenceResponseDto() {
                this.id = __runInitializers(this, _id_initializers, void 0);
                this.publicKey = (__runInitializers(this, _id_extraInitializers), __runInitializers(this, _publicKey_initializers, void 0));
                this.channel = (__runInitializers(this, _publicKey_extraInitializers), __runInitializers(this, _channel_initializers, void 0));
                this.email = (__runInitializers(this, _channel_extraInitializers), __runInitializers(this, _email_initializers, void 0));
                this.pushToken = (__runInitializers(this, _email_extraInitializers), __runInitializers(this, _pushToken_initializers, void 0));
                this.webhookUrl = (__runInitializers(this, _pushToken_extraInitializers), __runInitializers(this, _webhookUrl_initializers, void 0));
                this.webhookSecret = (__runInitializers(this, _webhookUrl_extraInitializers), __runInitializers(this, _webhookSecret_initializers, void 0));
                this.events = (__runInitializers(this, _webhookSecret_extraInitializers), __runInitializers(this, _events_initializers, void 0));
                this.minAmountStroops = (__runInitializers(this, _events_extraInitializers), __runInitializers(this, _minAmountStroops_initializers, void 0));
                this.enabled = (__runInitializers(this, _minAmountStroops_extraInitializers), __runInitializers(this, _enabled_initializers, void 0));
                __runInitializers(this, _enabled_extraInitializers);
            }
            return NotificationPreferenceResponseDto;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _id_decorators = [(0, swagger_1.ApiProperty)()];
            _publicKey_decorators = [(0, swagger_1.ApiProperty)()];
            _channel_decorators = [(0, swagger_1.ApiProperty)({ enum: VALID_CHANNELS })];
            _email_decorators = [(0, swagger_1.ApiPropertyOptional)()];
            _pushToken_decorators = [(0, swagger_1.ApiPropertyOptional)()];
            _webhookUrl_decorators = [(0, swagger_1.ApiPropertyOptional)()];
            _webhookSecret_decorators = [(0, swagger_1.ApiPropertyOptional)({
                    example: "whsec_xxxxxxxxxxxxxxxx",
                    description: "Secret key for HMAC-SHA256 payload signing (only for webhook channel, masked on read)",
                })];
            _events_decorators = [(0, swagger_1.ApiPropertyOptional)({ type: [String], nullable: true })];
            _minAmountStroops_decorators = [(0, swagger_1.ApiProperty)({
                    description: "Minimum amount in stroops as a string (bigint-safe)",
                })];
            _enabled_decorators = [(0, swagger_1.ApiProperty)()];
            __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: function (obj) { return "id" in obj; }, get: function (obj) { return obj.id; }, set: function (obj, value) { obj.id = value; } }, metadata: _metadata }, _id_initializers, _id_extraInitializers);
            __esDecorate(null, null, _publicKey_decorators, { kind: "field", name: "publicKey", static: false, private: false, access: { has: function (obj) { return "publicKey" in obj; }, get: function (obj) { return obj.publicKey; }, set: function (obj, value) { obj.publicKey = value; } }, metadata: _metadata }, _publicKey_initializers, _publicKey_extraInitializers);
            __esDecorate(null, null, _channel_decorators, { kind: "field", name: "channel", static: false, private: false, access: { has: function (obj) { return "channel" in obj; }, get: function (obj) { return obj.channel; }, set: function (obj, value) { obj.channel = value; } }, metadata: _metadata }, _channel_initializers, _channel_extraInitializers);
            __esDecorate(null, null, _email_decorators, { kind: "field", name: "email", static: false, private: false, access: { has: function (obj) { return "email" in obj; }, get: function (obj) { return obj.email; }, set: function (obj, value) { obj.email = value; } }, metadata: _metadata }, _email_initializers, _email_extraInitializers);
            __esDecorate(null, null, _pushToken_decorators, { kind: "field", name: "pushToken", static: false, private: false, access: { has: function (obj) { return "pushToken" in obj; }, get: function (obj) { return obj.pushToken; }, set: function (obj, value) { obj.pushToken = value; } }, metadata: _metadata }, _pushToken_initializers, _pushToken_extraInitializers);
            __esDecorate(null, null, _webhookUrl_decorators, { kind: "field", name: "webhookUrl", static: false, private: false, access: { has: function (obj) { return "webhookUrl" in obj; }, get: function (obj) { return obj.webhookUrl; }, set: function (obj, value) { obj.webhookUrl = value; } }, metadata: _metadata }, _webhookUrl_initializers, _webhookUrl_extraInitializers);
            __esDecorate(null, null, _webhookSecret_decorators, { kind: "field", name: "webhookSecret", static: false, private: false, access: { has: function (obj) { return "webhookSecret" in obj; }, get: function (obj) { return obj.webhookSecret; }, set: function (obj, value) { obj.webhookSecret = value; } }, metadata: _metadata }, _webhookSecret_initializers, _webhookSecret_extraInitializers);
            __esDecorate(null, null, _events_decorators, { kind: "field", name: "events", static: false, private: false, access: { has: function (obj) { return "events" in obj; }, get: function (obj) { return obj.events; }, set: function (obj, value) { obj.events = value; } }, metadata: _metadata }, _events_initializers, _events_extraInitializers);
            __esDecorate(null, null, _minAmountStroops_decorators, { kind: "field", name: "minAmountStroops", static: false, private: false, access: { has: function (obj) { return "minAmountStroops" in obj; }, get: function (obj) { return obj.minAmountStroops; }, set: function (obj, value) { obj.minAmountStroops = value; } }, metadata: _metadata }, _minAmountStroops_initializers, _minAmountStroops_extraInitializers);
            __esDecorate(null, null, _enabled_decorators, { kind: "field", name: "enabled", static: false, private: false, access: { has: function (obj) { return "enabled" in obj; }, get: function (obj) { return obj.enabled; }, set: function (obj, value) { obj.enabled = value; } }, metadata: _metadata }, _enabled_initializers, _enabled_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.NotificationPreferenceResponseDto = NotificationPreferenceResponseDto;
