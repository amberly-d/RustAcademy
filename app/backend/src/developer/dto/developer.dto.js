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
exports.PingResponseDto = exports.IntegrationHealthDto = exports.HealthComponentsDto = exports.WebhookTestResultDto = exports.BulkRevokeResultDto = exports.BulkRevokeFailedItemDto = exports.BulkRevokeDto = void 0;
var swagger_1 = require("@nestjs/swagger");
var class_validator_1 = require("class-validator");
var BulkRevokeDto = function () {
    var _a;
    var _ids_decorators;
    var _ids_initializers = [];
    var _ids_extraInitializers = [];
    return _a = /** @class */ (function () {
            function BulkRevokeDto() {
                this.ids = __runInitializers(this, _ids_initializers, void 0);
                __runInitializers(this, _ids_extraInitializers);
            }
            return BulkRevokeDto;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _ids_decorators = [(0, swagger_1.ApiProperty)({
                    description: 'Array of API key UUIDs to revoke (max 100)',
                    type: [String],
                    example: ['3fa85f64-5717-4562-b3fc-2c963f66afa6'],
                }), (0, class_validator_1.IsArray)(), (0, class_validator_1.ArrayMinSize)(1), (0, class_validator_1.ArrayMaxSize)(100), (0, class_validator_1.IsUUID)('4', { each: true })];
            __esDecorate(null, null, _ids_decorators, { kind: "field", name: "ids", static: false, private: false, access: { has: function (obj) { return "ids" in obj; }, get: function (obj) { return obj.ids; }, set: function (obj, value) { obj.ids = value; } }, metadata: _metadata }, _ids_initializers, _ids_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.BulkRevokeDto = BulkRevokeDto;
var BulkRevokeFailedItemDto = function () {
    var _a;
    var _id_decorators;
    var _id_initializers = [];
    var _id_extraInitializers = [];
    var _reason_decorators;
    var _reason_initializers = [];
    var _reason_extraInitializers = [];
    return _a = /** @class */ (function () {
            function BulkRevokeFailedItemDto() {
                this.id = __runInitializers(this, _id_initializers, void 0);
                this.reason = (__runInitializers(this, _id_extraInitializers), __runInitializers(this, _reason_initializers, void 0));
                __runInitializers(this, _reason_extraInitializers);
            }
            return BulkRevokeFailedItemDto;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _id_decorators = [(0, swagger_1.ApiProperty)({ example: '3fa85f64-5717-4562-b3fc-2c963f66afa6' })];
            _reason_decorators = [(0, swagger_1.ApiProperty)({ example: 'API key not found' })];
            __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: function (obj) { return "id" in obj; }, get: function (obj) { return obj.id; }, set: function (obj, value) { obj.id = value; } }, metadata: _metadata }, _id_initializers, _id_extraInitializers);
            __esDecorate(null, null, _reason_decorators, { kind: "field", name: "reason", static: false, private: false, access: { has: function (obj) { return "reason" in obj; }, get: function (obj) { return obj.reason; }, set: function (obj, value) { obj.reason = value; } }, metadata: _metadata }, _reason_initializers, _reason_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.BulkRevokeFailedItemDto = BulkRevokeFailedItemDto;
var BulkRevokeResultDto = function () {
    var _a;
    var _revoked_decorators;
    var _revoked_initializers = [];
    var _revoked_extraInitializers = [];
    var _failed_decorators;
    var _failed_initializers = [];
    var _failed_extraInitializers = [];
    var _total_decorators;
    var _total_initializers = [];
    var _total_extraInitializers = [];
    var _success_count_decorators;
    var _success_count_initializers = [];
    var _success_count_extraInitializers = [];
    var _failure_count_decorators;
    var _failure_count_initializers = [];
    var _failure_count_extraInitializers = [];
    return _a = /** @class */ (function () {
            function BulkRevokeResultDto() {
                this.revoked = __runInitializers(this, _revoked_initializers, void 0);
                this.failed = (__runInitializers(this, _revoked_extraInitializers), __runInitializers(this, _failed_initializers, void 0));
                this.total = (__runInitializers(this, _failed_extraInitializers), __runInitializers(this, _total_initializers, void 0));
                this.success_count = (__runInitializers(this, _total_extraInitializers), __runInitializers(this, _success_count_initializers, void 0));
                this.failure_count = (__runInitializers(this, _success_count_extraInitializers), __runInitializers(this, _failure_count_initializers, void 0));
                __runInitializers(this, _failure_count_extraInitializers);
            }
            return BulkRevokeResultDto;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _revoked_decorators = [(0, swagger_1.ApiProperty)({ type: [String], description: 'IDs successfully revoked' })];
            _failed_decorators = [(0, swagger_1.ApiProperty)({ type: [BulkRevokeFailedItemDto] })];
            _total_decorators = [(0, swagger_1.ApiProperty)({ example: 5 })];
            _success_count_decorators = [(0, swagger_1.ApiProperty)({ example: 4 })];
            _failure_count_decorators = [(0, swagger_1.ApiProperty)({ example: 1 })];
            __esDecorate(null, null, _revoked_decorators, { kind: "field", name: "revoked", static: false, private: false, access: { has: function (obj) { return "revoked" in obj; }, get: function (obj) { return obj.revoked; }, set: function (obj, value) { obj.revoked = value; } }, metadata: _metadata }, _revoked_initializers, _revoked_extraInitializers);
            __esDecorate(null, null, _failed_decorators, { kind: "field", name: "failed", static: false, private: false, access: { has: function (obj) { return "failed" in obj; }, get: function (obj) { return obj.failed; }, set: function (obj, value) { obj.failed = value; } }, metadata: _metadata }, _failed_initializers, _failed_extraInitializers);
            __esDecorate(null, null, _total_decorators, { kind: "field", name: "total", static: false, private: false, access: { has: function (obj) { return "total" in obj; }, get: function (obj) { return obj.total; }, set: function (obj, value) { obj.total = value; } }, metadata: _metadata }, _total_initializers, _total_extraInitializers);
            __esDecorate(null, null, _success_count_decorators, { kind: "field", name: "success_count", static: false, private: false, access: { has: function (obj) { return "success_count" in obj; }, get: function (obj) { return obj.success_count; }, set: function (obj, value) { obj.success_count = value; } }, metadata: _metadata }, _success_count_initializers, _success_count_extraInitializers);
            __esDecorate(null, null, _failure_count_decorators, { kind: "field", name: "failure_count", static: false, private: false, access: { has: function (obj) { return "failure_count" in obj; }, get: function (obj) { return obj.failure_count; }, set: function (obj, value) { obj.failure_count = value; } }, metadata: _metadata }, _failure_count_initializers, _failure_count_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.BulkRevokeResultDto = BulkRevokeResultDto;
var WebhookTestResultDto = function () {
    var _a;
    var _success_decorators;
    var _success_initializers = [];
    var _success_extraInitializers = [];
    var _webhook_id_decorators;
    var _webhook_id_initializers = [];
    var _webhook_id_extraInitializers = [];
    var _target_url_decorators;
    var _target_url_initializers = [];
    var _target_url_extraInitializers = [];
    var _http_status_decorators;
    var _http_status_initializers = [];
    var _http_status_extraInitializers = [];
    var _response_body_decorators;
    var _response_body_initializers = [];
    var _response_body_extraInitializers = [];
    var _latency_ms_decorators;
    var _latency_ms_initializers = [];
    var _latency_ms_extraInitializers = [];
    var _sent_at_decorators;
    var _sent_at_initializers = [];
    var _sent_at_extraInitializers = [];
    return _a = /** @class */ (function () {
            function WebhookTestResultDto() {
                this.success = __runInitializers(this, _success_initializers, void 0);
                this.webhook_id = (__runInitializers(this, _success_extraInitializers), __runInitializers(this, _webhook_id_initializers, void 0));
                this.target_url = (__runInitializers(this, _webhook_id_extraInitializers), __runInitializers(this, _target_url_initializers, void 0));
                this.http_status = (__runInitializers(this, _target_url_extraInitializers), __runInitializers(this, _http_status_initializers, void 0));
                this.response_body = (__runInitializers(this, _http_status_extraInitializers), __runInitializers(this, _response_body_initializers, void 0));
                this.latency_ms = (__runInitializers(this, _response_body_extraInitializers), __runInitializers(this, _latency_ms_initializers, void 0));
                this.sent_at = (__runInitializers(this, _latency_ms_extraInitializers), __runInitializers(this, _sent_at_initializers, void 0));
                __runInitializers(this, _sent_at_extraInitializers);
            }
            return WebhookTestResultDto;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _success_decorators = [(0, swagger_1.ApiProperty)({ example: true })];
            _webhook_id_decorators = [(0, swagger_1.ApiProperty)({ example: '3fa85f64-5717-4562-b3fc-2c963f66afa6' })];
            _target_url_decorators = [(0, swagger_1.ApiProperty)({ example: 'https://example.com/webhooks' })];
            _http_status_decorators = [(0, swagger_1.ApiPropertyOptional)({ example: 200, nullable: true })];
            _response_body_decorators = [(0, swagger_1.ApiPropertyOptional)({ example: '{"ok":true}', nullable: true })];
            _latency_ms_decorators = [(0, swagger_1.ApiProperty)({ example: 142 })];
            _sent_at_decorators = [(0, swagger_1.ApiProperty)({ example: '2026-04-29T12:00:00.000Z' })];
            __esDecorate(null, null, _success_decorators, { kind: "field", name: "success", static: false, private: false, access: { has: function (obj) { return "success" in obj; }, get: function (obj) { return obj.success; }, set: function (obj, value) { obj.success = value; } }, metadata: _metadata }, _success_initializers, _success_extraInitializers);
            __esDecorate(null, null, _webhook_id_decorators, { kind: "field", name: "webhook_id", static: false, private: false, access: { has: function (obj) { return "webhook_id" in obj; }, get: function (obj) { return obj.webhook_id; }, set: function (obj, value) { obj.webhook_id = value; } }, metadata: _metadata }, _webhook_id_initializers, _webhook_id_extraInitializers);
            __esDecorate(null, null, _target_url_decorators, { kind: "field", name: "target_url", static: false, private: false, access: { has: function (obj) { return "target_url" in obj; }, get: function (obj) { return obj.target_url; }, set: function (obj, value) { obj.target_url = value; } }, metadata: _metadata }, _target_url_initializers, _target_url_extraInitializers);
            __esDecorate(null, null, _http_status_decorators, { kind: "field", name: "http_status", static: false, private: false, access: { has: function (obj) { return "http_status" in obj; }, get: function (obj) { return obj.http_status; }, set: function (obj, value) { obj.http_status = value; } }, metadata: _metadata }, _http_status_initializers, _http_status_extraInitializers);
            __esDecorate(null, null, _response_body_decorators, { kind: "field", name: "response_body", static: false, private: false, access: { has: function (obj) { return "response_body" in obj; }, get: function (obj) { return obj.response_body; }, set: function (obj, value) { obj.response_body = value; } }, metadata: _metadata }, _response_body_initializers, _response_body_extraInitializers);
            __esDecorate(null, null, _latency_ms_decorators, { kind: "field", name: "latency_ms", static: false, private: false, access: { has: function (obj) { return "latency_ms" in obj; }, get: function (obj) { return obj.latency_ms; }, set: function (obj, value) { obj.latency_ms = value; } }, metadata: _metadata }, _latency_ms_initializers, _latency_ms_extraInitializers);
            __esDecorate(null, null, _sent_at_decorators, { kind: "field", name: "sent_at", static: false, private: false, access: { has: function (obj) { return "sent_at" in obj; }, get: function (obj) { return obj.sent_at; }, set: function (obj, value) { obj.sent_at = value; } }, metadata: _metadata }, _sent_at_initializers, _sent_at_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.WebhookTestResultDto = WebhookTestResultDto;
var HealthComponentsDto = function () {
    var _a;
    var _webhook_failure_rate_decorators;
    var _webhook_failure_rate_initializers = [];
    var _webhook_failure_rate_extraInitializers = [];
    var _quota_utilization_decorators;
    var _quota_utilization_initializers = [];
    var _quota_utilization_extraInitializers = [];
    var _webhook_score_decorators;
    var _webhook_score_initializers = [];
    var _webhook_score_extraInitializers = [];
    var _quota_score_decorators;
    var _quota_score_initializers = [];
    var _quota_score_extraInitializers = [];
    return _a = /** @class */ (function () {
            function HealthComponentsDto() {
                this.webhook_failure_rate = __runInitializers(this, _webhook_failure_rate_initializers, void 0);
                this.quota_utilization = (__runInitializers(this, _webhook_failure_rate_extraInitializers), __runInitializers(this, _quota_utilization_initializers, void 0));
                this.webhook_score = (__runInitializers(this, _quota_utilization_extraInitializers), __runInitializers(this, _webhook_score_initializers, void 0));
                this.quota_score = (__runInitializers(this, _webhook_score_extraInitializers), __runInitializers(this, _quota_score_initializers, void 0));
                __runInitializers(this, _quota_score_extraInitializers);
            }
            return HealthComponentsDto;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _webhook_failure_rate_decorators = [(0, swagger_1.ApiProperty)({ example: 0.05, description: '0–1 ratio of failed deliveries' })];
            _quota_utilization_decorators = [(0, swagger_1.ApiProperty)({ example: 0.3, description: '0–1 ratio of quota consumed' })];
            _webhook_score_decorators = [(0, swagger_1.ApiProperty)({ example: 57, description: 'Webhook reliability sub-score (0–60)' })];
            _quota_score_decorators = [(0, swagger_1.ApiProperty)({ example: 40, description: 'Quota efficiency sub-score (0–40)' })];
            __esDecorate(null, null, _webhook_failure_rate_decorators, { kind: "field", name: "webhook_failure_rate", static: false, private: false, access: { has: function (obj) { return "webhook_failure_rate" in obj; }, get: function (obj) { return obj.webhook_failure_rate; }, set: function (obj, value) { obj.webhook_failure_rate = value; } }, metadata: _metadata }, _webhook_failure_rate_initializers, _webhook_failure_rate_extraInitializers);
            __esDecorate(null, null, _quota_utilization_decorators, { kind: "field", name: "quota_utilization", static: false, private: false, access: { has: function (obj) { return "quota_utilization" in obj; }, get: function (obj) { return obj.quota_utilization; }, set: function (obj, value) { obj.quota_utilization = value; } }, metadata: _metadata }, _quota_utilization_initializers, _quota_utilization_extraInitializers);
            __esDecorate(null, null, _webhook_score_decorators, { kind: "field", name: "webhook_score", static: false, private: false, access: { has: function (obj) { return "webhook_score" in obj; }, get: function (obj) { return obj.webhook_score; }, set: function (obj, value) { obj.webhook_score = value; } }, metadata: _metadata }, _webhook_score_initializers, _webhook_score_extraInitializers);
            __esDecorate(null, null, _quota_score_decorators, { kind: "field", name: "quota_score", static: false, private: false, access: { has: function (obj) { return "quota_score" in obj; }, get: function (obj) { return obj.quota_score; }, set: function (obj, value) { obj.quota_score = value; } }, metadata: _metadata }, _quota_score_initializers, _quota_score_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.HealthComponentsDto = HealthComponentsDto;
var IntegrationHealthDto = function () {
    var _a;
    var _score_decorators;
    var _score_initializers = [];
    var _score_extraInitializers = [];
    var _grade_decorators;
    var _grade_initializers = [];
    var _grade_extraInitializers = [];
    var _components_decorators;
    var _components_initializers = [];
    var _components_extraInitializers = [];
    var _computed_at_decorators;
    var _computed_at_initializers = [];
    var _computed_at_extraInitializers = [];
    return _a = /** @class */ (function () {
            function IntegrationHealthDto() {
                this.score = __runInitializers(this, _score_initializers, void 0);
                this.grade = (__runInitializers(this, _score_extraInitializers), __runInitializers(this, _grade_initializers, void 0));
                this.components = (__runInitializers(this, _grade_extraInitializers), __runInitializers(this, _components_initializers, void 0));
                this.computed_at = (__runInitializers(this, _components_extraInitializers), __runInitializers(this, _computed_at_initializers, void 0));
                __runInitializers(this, _computed_at_extraInitializers);
            }
            return IntegrationHealthDto;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _score_decorators = [(0, swagger_1.ApiProperty)({ example: 97, description: 'Composite score 0–100' })];
            _grade_decorators = [(0, swagger_1.ApiProperty)({ enum: ['A', 'B', 'C', 'D', 'F'], example: 'A' })];
            _components_decorators = [(0, swagger_1.ApiProperty)({ type: HealthComponentsDto })];
            _computed_at_decorators = [(0, swagger_1.ApiProperty)({ example: '2026-04-29T12:00:00.000Z' })];
            __esDecorate(null, null, _score_decorators, { kind: "field", name: "score", static: false, private: false, access: { has: function (obj) { return "score" in obj; }, get: function (obj) { return obj.score; }, set: function (obj, value) { obj.score = value; } }, metadata: _metadata }, _score_initializers, _score_extraInitializers);
            __esDecorate(null, null, _grade_decorators, { kind: "field", name: "grade", static: false, private: false, access: { has: function (obj) { return "grade" in obj; }, get: function (obj) { return obj.grade; }, set: function (obj, value) { obj.grade = value; } }, metadata: _metadata }, _grade_initializers, _grade_extraInitializers);
            __esDecorate(null, null, _components_decorators, { kind: "field", name: "components", static: false, private: false, access: { has: function (obj) { return "components" in obj; }, get: function (obj) { return obj.components; }, set: function (obj, value) { obj.components = value; } }, metadata: _metadata }, _components_initializers, _components_extraInitializers);
            __esDecorate(null, null, _computed_at_decorators, { kind: "field", name: "computed_at", static: false, private: false, access: { has: function (obj) { return "computed_at" in obj; }, get: function (obj) { return obj.computed_at; }, set: function (obj, value) { obj.computed_at = value; } }, metadata: _metadata }, _computed_at_initializers, _computed_at_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.IntegrationHealthDto = IntegrationHealthDto;
var PingResponseDto = function () {
    var _a;
    var _status_decorators;
    var _status_initializers = [];
    var _status_extraInitializers = [];
    var _timestamp_decorators;
    var _timestamp_initializers = [];
    var _timestamp_extraInitializers = [];
    var _version_decorators;
    var _version_initializers = [];
    var _version_extraInitializers = [];
    return _a = /** @class */ (function () {
            function PingResponseDto() {
                this.status = __runInitializers(this, _status_initializers, void 0);
                this.timestamp = (__runInitializers(this, _status_extraInitializers), __runInitializers(this, _timestamp_initializers, void 0));
                this.version = (__runInitializers(this, _timestamp_extraInitializers), __runInitializers(this, _version_initializers, void 0));
                __runInitializers(this, _version_extraInitializers);
            }
            return PingResponseDto;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _status_decorators = [(0, swagger_1.ApiProperty)({ example: 'ok' })];
            _timestamp_decorators = [(0, swagger_1.ApiProperty)({ example: '2026-04-29T12:00:00.000Z' })];
            _version_decorators = [(0, swagger_1.ApiProperty)({ example: '0.1.0' })];
            __esDecorate(null, null, _status_decorators, { kind: "field", name: "status", static: false, private: false, access: { has: function (obj) { return "status" in obj; }, get: function (obj) { return obj.status; }, set: function (obj, value) { obj.status = value; } }, metadata: _metadata }, _status_initializers, _status_extraInitializers);
            __esDecorate(null, null, _timestamp_decorators, { kind: "field", name: "timestamp", static: false, private: false, access: { has: function (obj) { return "timestamp" in obj; }, get: function (obj) { return obj.timestamp; }, set: function (obj, value) { obj.timestamp = value; } }, metadata: _metadata }, _timestamp_initializers, _timestamp_extraInitializers);
            __esDecorate(null, null, _version_decorators, { kind: "field", name: "version", static: false, private: false, access: { has: function (obj) { return "version" in obj; }, get: function (obj) { return obj.version; }, set: function (obj, value) { obj.version = value; } }, metadata: _metadata }, _version_initializers, _version_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.PingResponseDto = PingResponseDto;
