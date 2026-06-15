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
exports.QueryRecurringPaymentsDto = exports.ListRecurringPaymentsResponseDto = exports.RecurringPaymentLinkResponseDto = exports.RecurringPaymentExecutionDto = exports.UpdateRecurringPaymentLinkDto = exports.CreateRecurringPaymentLinkDto = exports.ExecutionStatus = exports.RecurringStatus = exports.FrequencyType = void 0;
var swagger_1 = require("@nestjs/swagger");
var class_validator_1 = require("class-validator");
// ---------------------------------------------------------------------------
// Enums
// ---------------------------------------------------------------------------
var FrequencyType;
(function (FrequencyType) {
    FrequencyType["DAILY"] = "daily";
    FrequencyType["WEEKLY"] = "weekly";
    FrequencyType["MONTHLY"] = "monthly";
    FrequencyType["YEARLY"] = "yearly";
})(FrequencyType || (exports.FrequencyType = FrequencyType = {}));
var RecurringStatus;
(function (RecurringStatus) {
    RecurringStatus["ACTIVE"] = "active";
    RecurringStatus["PAUSED"] = "paused";
    RecurringStatus["COMPLETED"] = "completed";
    RecurringStatus["CANCELLED"] = "cancelled";
})(RecurringStatus || (exports.RecurringStatus = RecurringStatus = {}));
var ExecutionStatus;
(function (ExecutionStatus) {
    ExecutionStatus["PENDING"] = "pending";
    ExecutionStatus["SUCCESS"] = "success";
    ExecutionStatus["FAILED"] = "failed";
    ExecutionStatus["SKIPPED"] = "skipped";
})(ExecutionStatus || (exports.ExecutionStatus = ExecutionStatus = {}));
// ---------------------------------------------------------------------------
// Request DTOs
// ---------------------------------------------------------------------------
/**
 * DTO for creating a new recurring payment link
 */
var CreateRecurringPaymentLinkDto = function () {
    var _a;
    var _amount_decorators;
    var _amount_initializers = [];
    var _amount_extraInitializers = [];
    var _asset_decorators;
    var _asset_initializers = [];
    var _asset_extraInitializers = [];
    var _assetIssuer_decorators;
    var _assetIssuer_initializers = [];
    var _assetIssuer_extraInitializers = [];
    var _username_decorators;
    var _username_initializers = [];
    var _username_extraInitializers = [];
    var _destination_decorators;
    var _destination_initializers = [];
    var _destination_extraInitializers = [];
    var _frequency_decorators;
    var _frequency_initializers = [];
    var _frequency_extraInitializers = [];
    var _startDate_decorators;
    var _startDate_initializers = [];
    var _startDate_extraInitializers = [];
    var _endDate_decorators;
    var _endDate_initializers = [];
    var _endDate_extraInitializers = [];
    var _totalPeriods_decorators;
    var _totalPeriods_initializers = [];
    var _totalPeriods_extraInitializers = [];
    var _memo_decorators;
    var _memo_initializers = [];
    var _memo_extraInitializers = [];
    var _memoType_decorators;
    var _memoType_initializers = [];
    var _memoType_extraInitializers = [];
    var _referenceId_decorators;
    var _referenceId_initializers = [];
    var _referenceId_extraInitializers = [];
    var _privacyEnabled_decorators;
    var _privacyEnabled_initializers = [];
    var _privacyEnabled_extraInitializers = [];
    return _a = /** @class */ (function () {
            function CreateRecurringPaymentLinkDto() {
                this.amount = __runInitializers(this, _amount_initializers, void 0);
                this.asset = (__runInitializers(this, _amount_extraInitializers), __runInitializers(this, _asset_initializers, void 0));
                this.assetIssuer = (__runInitializers(this, _asset_extraInitializers), __runInitializers(this, _assetIssuer_initializers, void 0));
                this.username = (__runInitializers(this, _assetIssuer_extraInitializers), __runInitializers(this, _username_initializers, void 0));
                this.destination = (__runInitializers(this, _username_extraInitializers), __runInitializers(this, _destination_initializers, void 0));
                this.frequency = (__runInitializers(this, _destination_extraInitializers), __runInitializers(this, _frequency_initializers, void 0));
                this.startDate = (__runInitializers(this, _frequency_extraInitializers), __runInitializers(this, _startDate_initializers, void 0));
                this.endDate = (__runInitializers(this, _startDate_extraInitializers), __runInitializers(this, _endDate_initializers, void 0));
                this.totalPeriods = (__runInitializers(this, _endDate_extraInitializers), __runInitializers(this, _totalPeriods_initializers, void 0));
                this.memo = (__runInitializers(this, _totalPeriods_extraInitializers), __runInitializers(this, _memo_initializers, void 0));
                this.memoType = (__runInitializers(this, _memo_extraInitializers), __runInitializers(this, _memoType_initializers, void 0));
                this.referenceId = (__runInitializers(this, _memoType_extraInitializers), __runInitializers(this, _referenceId_initializers, void 0));
                this.privacyEnabled = (__runInitializers(this, _referenceId_extraInitializers), __runInitializers(this, _privacyEnabled_initializers, void 0));
                __runInitializers(this, _privacyEnabled_extraInitializers);
            }
            return CreateRecurringPaymentLinkDto;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _amount_decorators = [(0, swagger_1.ApiProperty)({
                    description: "Payment amount",
                    example: 100,
                    minimum: 1,
                }), (0, class_validator_1.IsNumber)(), (0, class_validator_1.Min)(1)];
            _asset_decorators = [(0, swagger_1.ApiProperty)({
                    description: "Asset code (XLM, USDC, etc.)",
                    example: "XLM",
                }), (0, class_validator_1.IsString)()];
            _assetIssuer_decorators = [(0, swagger_1.ApiPropertyOptional)({
                    description: "Asset issuer address (for non-native assets)",
                    example: "GA5ZSEJYB37JRC5AVCIA5MOP4RHTM335X2K34P4D5NXJ6Z4GJ5B7G",
                }), (0, class_validator_1.IsString)(), (0, class_validator_1.IsOptional)()];
            _username_decorators = [(0, swagger_1.ApiProperty)({
                    description: "Username route ( RustAcademy.to/username)",
                    example: "john_doe",
                    required: false,
                }), (0, class_validator_1.IsString)(), (0, class_validator_1.IsOptional)()];
            _destination_decorators = [(0, swagger_1.ApiPropertyOptional)({
                    description: "Direct Stellar public key destination",
                    example: "G...56 characters",
                }), (0, class_validator_1.IsString)(), (0, class_validator_1.IsOptional)()];
            _frequency_decorators = [(0, swagger_1.ApiProperty)({
                    description: "Payment frequency",
                    enum: FrequencyType,
                    example: FrequencyType.MONTHLY,
                }), (0, class_validator_1.IsEnum)(FrequencyType)];
            _startDate_decorators = [(0, swagger_1.ApiPropertyOptional)({
                    description: "Start date for the recurring payments (ISO 8601)",
                    example: "2025-03-26T00:00:00Z",
                }), (0, class_validator_1.IsDateString)(), (0, class_validator_1.IsOptional)()];
            _endDate_decorators = [(0, swagger_1.ApiPropertyOptional)({
                    description: "End date for the recurring payments (ISO 8601)",
                    example: "2026-03-26T00:00:00Z",
                }), (0, class_validator_1.IsDateString)(), (0, class_validator_1.IsOptional)()];
            _totalPeriods_decorators = [(0, swagger_1.ApiPropertyOptional)({
                    description: "Total number of payments (null for indefinite)",
                    example: 12,
                    minimum: 1,
                }), (0, class_validator_1.IsNumber)(), (0, class_validator_1.Min)(1), (0, class_validator_1.IsOptional)()];
            _memo_decorators = [(0, swagger_1.ApiPropertyOptional)({
                    description: "Payment memo/note",
                    example: "Monthly subscription",
                }), (0, class_validator_1.IsString)(), (0, class_validator_1.IsOptional)()];
            _memoType_decorators = [(0, swagger_1.ApiPropertyOptional)({
                    description: "Memo type",
                    enum: ["text", "id", "hash", "return"],
                    default: "text",
                }), (0, class_validator_1.IsString)(), (0, class_validator_1.IsOptional)()];
            _referenceId_decorators = [(0, swagger_1.ApiPropertyOptional)({
                    description: "Reference ID for tracking",
                    example: "SUB-2025-001",
                }), (0, class_validator_1.IsString)(), (0, class_validator_1.IsOptional)()];
            _privacyEnabled_decorators = [(0, swagger_1.ApiPropertyOptional)({
                    description: "Enable X-Ray privacy (hide amounts/senders)",
                    default: false,
                }), (0, class_validator_1.IsBoolean)(), (0, class_validator_1.IsOptional)()];
            __esDecorate(null, null, _amount_decorators, { kind: "field", name: "amount", static: false, private: false, access: { has: function (obj) { return "amount" in obj; }, get: function (obj) { return obj.amount; }, set: function (obj, value) { obj.amount = value; } }, metadata: _metadata }, _amount_initializers, _amount_extraInitializers);
            __esDecorate(null, null, _asset_decorators, { kind: "field", name: "asset", static: false, private: false, access: { has: function (obj) { return "asset" in obj; }, get: function (obj) { return obj.asset; }, set: function (obj, value) { obj.asset = value; } }, metadata: _metadata }, _asset_initializers, _asset_extraInitializers);
            __esDecorate(null, null, _assetIssuer_decorators, { kind: "field", name: "assetIssuer", static: false, private: false, access: { has: function (obj) { return "assetIssuer" in obj; }, get: function (obj) { return obj.assetIssuer; }, set: function (obj, value) { obj.assetIssuer = value; } }, metadata: _metadata }, _assetIssuer_initializers, _assetIssuer_extraInitializers);
            __esDecorate(null, null, _username_decorators, { kind: "field", name: "username", static: false, private: false, access: { has: function (obj) { return "username" in obj; }, get: function (obj) { return obj.username; }, set: function (obj, value) { obj.username = value; } }, metadata: _metadata }, _username_initializers, _username_extraInitializers);
            __esDecorate(null, null, _destination_decorators, { kind: "field", name: "destination", static: false, private: false, access: { has: function (obj) { return "destination" in obj; }, get: function (obj) { return obj.destination; }, set: function (obj, value) { obj.destination = value; } }, metadata: _metadata }, _destination_initializers, _destination_extraInitializers);
            __esDecorate(null, null, _frequency_decorators, { kind: "field", name: "frequency", static: false, private: false, access: { has: function (obj) { return "frequency" in obj; }, get: function (obj) { return obj.frequency; }, set: function (obj, value) { obj.frequency = value; } }, metadata: _metadata }, _frequency_initializers, _frequency_extraInitializers);
            __esDecorate(null, null, _startDate_decorators, { kind: "field", name: "startDate", static: false, private: false, access: { has: function (obj) { return "startDate" in obj; }, get: function (obj) { return obj.startDate; }, set: function (obj, value) { obj.startDate = value; } }, metadata: _metadata }, _startDate_initializers, _startDate_extraInitializers);
            __esDecorate(null, null, _endDate_decorators, { kind: "field", name: "endDate", static: false, private: false, access: { has: function (obj) { return "endDate" in obj; }, get: function (obj) { return obj.endDate; }, set: function (obj, value) { obj.endDate = value; } }, metadata: _metadata }, _endDate_initializers, _endDate_extraInitializers);
            __esDecorate(null, null, _totalPeriods_decorators, { kind: "field", name: "totalPeriods", static: false, private: false, access: { has: function (obj) { return "totalPeriods" in obj; }, get: function (obj) { return obj.totalPeriods; }, set: function (obj, value) { obj.totalPeriods = value; } }, metadata: _metadata }, _totalPeriods_initializers, _totalPeriods_extraInitializers);
            __esDecorate(null, null, _memo_decorators, { kind: "field", name: "memo", static: false, private: false, access: { has: function (obj) { return "memo" in obj; }, get: function (obj) { return obj.memo; }, set: function (obj, value) { obj.memo = value; } }, metadata: _metadata }, _memo_initializers, _memo_extraInitializers);
            __esDecorate(null, null, _memoType_decorators, { kind: "field", name: "memoType", static: false, private: false, access: { has: function (obj) { return "memoType" in obj; }, get: function (obj) { return obj.memoType; }, set: function (obj, value) { obj.memoType = value; } }, metadata: _metadata }, _memoType_initializers, _memoType_extraInitializers);
            __esDecorate(null, null, _referenceId_decorators, { kind: "field", name: "referenceId", static: false, private: false, access: { has: function (obj) { return "referenceId" in obj; }, get: function (obj) { return obj.referenceId; }, set: function (obj, value) { obj.referenceId = value; } }, metadata: _metadata }, _referenceId_initializers, _referenceId_extraInitializers);
            __esDecorate(null, null, _privacyEnabled_decorators, { kind: "field", name: "privacyEnabled", static: false, private: false, access: { has: function (obj) { return "privacyEnabled" in obj; }, get: function (obj) { return obj.privacyEnabled; }, set: function (obj, value) { obj.privacyEnabled = value; } }, metadata: _metadata }, _privacyEnabled_initializers, _privacyEnabled_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.CreateRecurringPaymentLinkDto = CreateRecurringPaymentLinkDto;
/**
 * DTO for updating an existing recurring payment link
 */
var UpdateRecurringPaymentLinkDto = function () {
    var _a;
    var _amount_decorators;
    var _amount_initializers = [];
    var _amount_extraInitializers = [];
    var _frequency_decorators;
    var _frequency_initializers = [];
    var _frequency_extraInitializers = [];
    var _endDate_decorators;
    var _endDate_initializers = [];
    var _endDate_extraInitializers = [];
    var _totalPeriods_decorators;
    var _totalPeriods_initializers = [];
    var _totalPeriods_extraInitializers = [];
    var _memo_decorators;
    var _memo_initializers = [];
    var _memo_extraInitializers = [];
    var _referenceId_decorators;
    var _referenceId_initializers = [];
    var _referenceId_extraInitializers = [];
    return _a = /** @class */ (function () {
            function UpdateRecurringPaymentLinkDto() {
                this.amount = __runInitializers(this, _amount_initializers, void 0);
                this.frequency = (__runInitializers(this, _amount_extraInitializers), __runInitializers(this, _frequency_initializers, void 0));
                this.endDate = (__runInitializers(this, _frequency_extraInitializers), __runInitializers(this, _endDate_initializers, void 0));
                this.totalPeriods = (__runInitializers(this, _endDate_extraInitializers), __runInitializers(this, _totalPeriods_initializers, void 0));
                this.memo = (__runInitializers(this, _totalPeriods_extraInitializers), __runInitializers(this, _memo_initializers, void 0));
                this.referenceId = (__runInitializers(this, _memo_extraInitializers), __runInitializers(this, _referenceId_initializers, void 0));
                __runInitializers(this, _referenceId_extraInitializers);
            }
            return UpdateRecurringPaymentLinkDto;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _amount_decorators = [(0, swagger_1.ApiPropertyOptional)({
                    description: "Payment amount",
                    example: 150,
                    minimum: 1,
                }), (0, class_validator_1.IsNumber)(), (0, class_validator_1.Min)(1), (0, class_validator_1.IsOptional)()];
            _frequency_decorators = [(0, swagger_1.ApiPropertyOptional)({
                    description: "Payment frequency",
                    enum: FrequencyType,
                }), (0, class_validator_1.IsEnum)(FrequencyType), (0, class_validator_1.IsOptional)()];
            _endDate_decorators = [(0, swagger_1.ApiPropertyOptional)({
                    description: "End date for the recurring payments (ISO 8601)",
                }), (0, class_validator_1.IsDateString)(), (0, class_validator_1.IsOptional)()];
            _totalPeriods_decorators = [(0, swagger_1.ApiPropertyOptional)({
                    description: "Total number of payments",
                    minimum: 1,
                }), (0, class_validator_1.IsNumber)(), (0, class_validator_1.Min)(1), (0, class_validator_1.IsOptional)()];
            _memo_decorators = [(0, swagger_1.ApiPropertyOptional)({
                    description: "Payment memo/note",
                }), (0, class_validator_1.IsString)(), (0, class_validator_1.IsOptional)()];
            _referenceId_decorators = [(0, swagger_1.ApiPropertyOptional)({
                    description: "Reference ID for tracking",
                }), (0, class_validator_1.IsString)(), (0, class_validator_1.IsOptional)()];
            __esDecorate(null, null, _amount_decorators, { kind: "field", name: "amount", static: false, private: false, access: { has: function (obj) { return "amount" in obj; }, get: function (obj) { return obj.amount; }, set: function (obj, value) { obj.amount = value; } }, metadata: _metadata }, _amount_initializers, _amount_extraInitializers);
            __esDecorate(null, null, _frequency_decorators, { kind: "field", name: "frequency", static: false, private: false, access: { has: function (obj) { return "frequency" in obj; }, get: function (obj) { return obj.frequency; }, set: function (obj, value) { obj.frequency = value; } }, metadata: _metadata }, _frequency_initializers, _frequency_extraInitializers);
            __esDecorate(null, null, _endDate_decorators, { kind: "field", name: "endDate", static: false, private: false, access: { has: function (obj) { return "endDate" in obj; }, get: function (obj) { return obj.endDate; }, set: function (obj, value) { obj.endDate = value; } }, metadata: _metadata }, _endDate_initializers, _endDate_extraInitializers);
            __esDecorate(null, null, _totalPeriods_decorators, { kind: "field", name: "totalPeriods", static: false, private: false, access: { has: function (obj) { return "totalPeriods" in obj; }, get: function (obj) { return obj.totalPeriods; }, set: function (obj, value) { obj.totalPeriods = value; } }, metadata: _metadata }, _totalPeriods_initializers, _totalPeriods_extraInitializers);
            __esDecorate(null, null, _memo_decorators, { kind: "field", name: "memo", static: false, private: false, access: { has: function (obj) { return "memo" in obj; }, get: function (obj) { return obj.memo; }, set: function (obj, value) { obj.memo = value; } }, metadata: _metadata }, _memo_initializers, _memo_extraInitializers);
            __esDecorate(null, null, _referenceId_decorators, { kind: "field", name: "referenceId", static: false, private: false, access: { has: function (obj) { return "referenceId" in obj; }, get: function (obj) { return obj.referenceId; }, set: function (obj, value) { obj.referenceId = value; } }, metadata: _metadata }, _referenceId_initializers, _referenceId_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.UpdateRecurringPaymentLinkDto = UpdateRecurringPaymentLinkDto;
// ---------------------------------------------------------------------------
// Response DTOs
// ---------------------------------------------------------------------------
/**
 * DTO for recurring payment execution details
 */
var RecurringPaymentExecutionDto = function () {
    var _a;
    var _id_decorators;
    var _id_initializers = [];
    var _id_extraInitializers = [];
    var _periodNumber_decorators;
    var _periodNumber_initializers = [];
    var _periodNumber_extraInitializers = [];
    var _scheduledAt_decorators;
    var _scheduledAt_initializers = [];
    var _scheduledAt_extraInitializers = [];
    var _executedAt_decorators;
    var _executedAt_initializers = [];
    var _executedAt_extraInitializers = [];
    var _amount_decorators;
    var _amount_initializers = [];
    var _amount_extraInitializers = [];
    var _asset_decorators;
    var _asset_initializers = [];
    var _asset_extraInitializers = [];
    var _status_decorators;
    var _status_initializers = [];
    var _status_extraInitializers = [];
    var _transactionHash_decorators;
    var _transactionHash_initializers = [];
    var _transactionHash_extraInitializers = [];
    var _failureReason_decorators;
    var _failureReason_initializers = [];
    var _failureReason_extraInitializers = [];
    var _retryCount_decorators;
    var _retryCount_initializers = [];
    var _retryCount_extraInitializers = [];
    var _notificationSent_decorators;
    var _notificationSent_initializers = [];
    var _notificationSent_extraInitializers = [];
    var _createdAt_decorators;
    var _createdAt_initializers = [];
    var _createdAt_extraInitializers = [];
    return _a = /** @class */ (function () {
            function RecurringPaymentExecutionDto() {
                this.id = __runInitializers(this, _id_initializers, void 0);
                this.periodNumber = (__runInitializers(this, _id_extraInitializers), __runInitializers(this, _periodNumber_initializers, void 0));
                this.scheduledAt = (__runInitializers(this, _periodNumber_extraInitializers), __runInitializers(this, _scheduledAt_initializers, void 0));
                this.executedAt = (__runInitializers(this, _scheduledAt_extraInitializers), __runInitializers(this, _executedAt_initializers, void 0));
                this.amount = (__runInitializers(this, _executedAt_extraInitializers), __runInitializers(this, _amount_initializers, void 0));
                this.asset = (__runInitializers(this, _amount_extraInitializers), __runInitializers(this, _asset_initializers, void 0));
                this.status = (__runInitializers(this, _asset_extraInitializers), __runInitializers(this, _status_initializers, void 0));
                this.transactionHash = (__runInitializers(this, _status_extraInitializers), __runInitializers(this, _transactionHash_initializers, void 0));
                this.failureReason = (__runInitializers(this, _transactionHash_extraInitializers), __runInitializers(this, _failureReason_initializers, void 0));
                this.retryCount = (__runInitializers(this, _failureReason_extraInitializers), __runInitializers(this, _retryCount_initializers, void 0));
                this.notificationSent = (__runInitializers(this, _retryCount_extraInitializers), __runInitializers(this, _notificationSent_initializers, void 0));
                this.createdAt = (__runInitializers(this, _notificationSent_extraInitializers), __runInitializers(this, _createdAt_initializers, void 0));
                __runInitializers(this, _createdAt_extraInitializers);
            }
            return RecurringPaymentExecutionDto;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _id_decorators = [(0, swagger_1.ApiProperty)({ description: "Execution ID" })];
            _periodNumber_decorators = [(0, swagger_1.ApiProperty)({ description: "Period number" })];
            _scheduledAt_decorators = [(0, swagger_1.ApiProperty)({ description: "Scheduled execution time" })];
            _executedAt_decorators = [(0, swagger_1.ApiPropertyOptional)({ description: "Actual execution time" })];
            _amount_decorators = [(0, swagger_1.ApiProperty)({ description: "Payment amount" })];
            _asset_decorators = [(0, swagger_1.ApiProperty)({ description: "Asset code" })];
            _status_decorators = [(0, swagger_1.ApiProperty)({ description: "Execution status", enum: ExecutionStatus })];
            _transactionHash_decorators = [(0, swagger_1.ApiPropertyOptional)({ description: "Stellar transaction hash" })];
            _failureReason_decorators = [(0, swagger_1.ApiPropertyOptional)({ description: "Failure reason" })];
            _retryCount_decorators = [(0, swagger_1.ApiProperty)({ description: "Retry count" })];
            _notificationSent_decorators = [(0, swagger_1.ApiProperty)({ description: "Notification sent flag" })];
            _createdAt_decorators = [(0, swagger_1.ApiProperty)({ description: "Created timestamp" })];
            __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: function (obj) { return "id" in obj; }, get: function (obj) { return obj.id; }, set: function (obj, value) { obj.id = value; } }, metadata: _metadata }, _id_initializers, _id_extraInitializers);
            __esDecorate(null, null, _periodNumber_decorators, { kind: "field", name: "periodNumber", static: false, private: false, access: { has: function (obj) { return "periodNumber" in obj; }, get: function (obj) { return obj.periodNumber; }, set: function (obj, value) { obj.periodNumber = value; } }, metadata: _metadata }, _periodNumber_initializers, _periodNumber_extraInitializers);
            __esDecorate(null, null, _scheduledAt_decorators, { kind: "field", name: "scheduledAt", static: false, private: false, access: { has: function (obj) { return "scheduledAt" in obj; }, get: function (obj) { return obj.scheduledAt; }, set: function (obj, value) { obj.scheduledAt = value; } }, metadata: _metadata }, _scheduledAt_initializers, _scheduledAt_extraInitializers);
            __esDecorate(null, null, _executedAt_decorators, { kind: "field", name: "executedAt", static: false, private: false, access: { has: function (obj) { return "executedAt" in obj; }, get: function (obj) { return obj.executedAt; }, set: function (obj, value) { obj.executedAt = value; } }, metadata: _metadata }, _executedAt_initializers, _executedAt_extraInitializers);
            __esDecorate(null, null, _amount_decorators, { kind: "field", name: "amount", static: false, private: false, access: { has: function (obj) { return "amount" in obj; }, get: function (obj) { return obj.amount; }, set: function (obj, value) { obj.amount = value; } }, metadata: _metadata }, _amount_initializers, _amount_extraInitializers);
            __esDecorate(null, null, _asset_decorators, { kind: "field", name: "asset", static: false, private: false, access: { has: function (obj) { return "asset" in obj; }, get: function (obj) { return obj.asset; }, set: function (obj, value) { obj.asset = value; } }, metadata: _metadata }, _asset_initializers, _asset_extraInitializers);
            __esDecorate(null, null, _status_decorators, { kind: "field", name: "status", static: false, private: false, access: { has: function (obj) { return "status" in obj; }, get: function (obj) { return obj.status; }, set: function (obj, value) { obj.status = value; } }, metadata: _metadata }, _status_initializers, _status_extraInitializers);
            __esDecorate(null, null, _transactionHash_decorators, { kind: "field", name: "transactionHash", static: false, private: false, access: { has: function (obj) { return "transactionHash" in obj; }, get: function (obj) { return obj.transactionHash; }, set: function (obj, value) { obj.transactionHash = value; } }, metadata: _metadata }, _transactionHash_initializers, _transactionHash_extraInitializers);
            __esDecorate(null, null, _failureReason_decorators, { kind: "field", name: "failureReason", static: false, private: false, access: { has: function (obj) { return "failureReason" in obj; }, get: function (obj) { return obj.failureReason; }, set: function (obj, value) { obj.failureReason = value; } }, metadata: _metadata }, _failureReason_initializers, _failureReason_extraInitializers);
            __esDecorate(null, null, _retryCount_decorators, { kind: "field", name: "retryCount", static: false, private: false, access: { has: function (obj) { return "retryCount" in obj; }, get: function (obj) { return obj.retryCount; }, set: function (obj, value) { obj.retryCount = value; } }, metadata: _metadata }, _retryCount_initializers, _retryCount_extraInitializers);
            __esDecorate(null, null, _notificationSent_decorators, { kind: "field", name: "notificationSent", static: false, private: false, access: { has: function (obj) { return "notificationSent" in obj; }, get: function (obj) { return obj.notificationSent; }, set: function (obj, value) { obj.notificationSent = value; } }, metadata: _metadata }, _notificationSent_initializers, _notificationSent_extraInitializers);
            __esDecorate(null, null, _createdAt_decorators, { kind: "field", name: "createdAt", static: false, private: false, access: { has: function (obj) { return "createdAt" in obj; }, get: function (obj) { return obj.createdAt; }, set: function (obj, value) { obj.createdAt = value; } }, metadata: _metadata }, _createdAt_initializers, _createdAt_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.RecurringPaymentExecutionDto = RecurringPaymentExecutionDto;
/**
 * DTO for recurring payment link response
 */
var RecurringPaymentLinkResponseDto = function () {
    var _a;
    var _id_decorators;
    var _id_initializers = [];
    var _id_extraInitializers = [];
    var _username_decorators;
    var _username_initializers = [];
    var _username_extraInitializers = [];
    var _destination_decorators;
    var _destination_initializers = [];
    var _destination_extraInitializers = [];
    var _amount_decorators;
    var _amount_initializers = [];
    var _amount_extraInitializers = [];
    var _asset_decorators;
    var _asset_initializers = [];
    var _asset_extraInitializers = [];
    var _assetIssuer_decorators;
    var _assetIssuer_initializers = [];
    var _assetIssuer_extraInitializers = [];
    var _frequency_decorators;
    var _frequency_initializers = [];
    var _frequency_extraInitializers = [];
    var _startDate_decorators;
    var _startDate_initializers = [];
    var _startDate_extraInitializers = [];
    var _endDate_decorators;
    var _endDate_initializers = [];
    var _endDate_extraInitializers = [];
    var _totalPeriods_decorators;
    var _totalPeriods_initializers = [];
    var _totalPeriods_extraInitializers = [];
    var _executedCount_decorators;
    var _executedCount_initializers = [];
    var _executedCount_extraInitializers = [];
    var _nextExecutionDate_decorators;
    var _nextExecutionDate_initializers = [];
    var _nextExecutionDate_extraInitializers = [];
    var _status_decorators;
    var _status_initializers = [];
    var _status_extraInitializers = [];
    var _memo_decorators;
    var _memo_initializers = [];
    var _memo_extraInitializers = [];
    var _memoType_decorators;
    var _memoType_initializers = [];
    var _memoType_extraInitializers = [];
    var _referenceId_decorators;
    var _referenceId_initializers = [];
    var _referenceId_extraInitializers = [];
    var _privacyEnabled_decorators;
    var _privacyEnabled_initializers = [];
    var _privacyEnabled_extraInitializers = [];
    var _createdAt_decorators;
    var _createdAt_initializers = [];
    var _createdAt_extraInitializers = [];
    var _updatedAt_decorators;
    var _updatedAt_initializers = [];
    var _updatedAt_extraInitializers = [];
    var _executions_decorators;
    var _executions_initializers = [];
    var _executions_extraInitializers = [];
    return _a = /** @class */ (function () {
            function RecurringPaymentLinkResponseDto() {
                this.id = __runInitializers(this, _id_initializers, void 0);
                this.username = (__runInitializers(this, _id_extraInitializers), __runInitializers(this, _username_initializers, void 0));
                this.destination = (__runInitializers(this, _username_extraInitializers), __runInitializers(this, _destination_initializers, void 0));
                this.amount = (__runInitializers(this, _destination_extraInitializers), __runInitializers(this, _amount_initializers, void 0));
                this.asset = (__runInitializers(this, _amount_extraInitializers), __runInitializers(this, _asset_initializers, void 0));
                this.assetIssuer = (__runInitializers(this, _asset_extraInitializers), __runInitializers(this, _assetIssuer_initializers, void 0));
                this.frequency = (__runInitializers(this, _assetIssuer_extraInitializers), __runInitializers(this, _frequency_initializers, void 0));
                this.startDate = (__runInitializers(this, _frequency_extraInitializers), __runInitializers(this, _startDate_initializers, void 0));
                this.endDate = (__runInitializers(this, _startDate_extraInitializers), __runInitializers(this, _endDate_initializers, void 0));
                this.totalPeriods = (__runInitializers(this, _endDate_extraInitializers), __runInitializers(this, _totalPeriods_initializers, void 0));
                this.executedCount = (__runInitializers(this, _totalPeriods_extraInitializers), __runInitializers(this, _executedCount_initializers, void 0));
                this.nextExecutionDate = (__runInitializers(this, _executedCount_extraInitializers), __runInitializers(this, _nextExecutionDate_initializers, void 0));
                this.status = (__runInitializers(this, _nextExecutionDate_extraInitializers), __runInitializers(this, _status_initializers, void 0));
                this.memo = (__runInitializers(this, _status_extraInitializers), __runInitializers(this, _memo_initializers, void 0));
                this.memoType = (__runInitializers(this, _memo_extraInitializers), __runInitializers(this, _memoType_initializers, void 0));
                this.referenceId = (__runInitializers(this, _memoType_extraInitializers), __runInitializers(this, _referenceId_initializers, void 0));
                this.privacyEnabled = (__runInitializers(this, _referenceId_extraInitializers), __runInitializers(this, _privacyEnabled_initializers, void 0));
                this.createdAt = (__runInitializers(this, _privacyEnabled_extraInitializers), __runInitializers(this, _createdAt_initializers, void 0));
                this.updatedAt = (__runInitializers(this, _createdAt_extraInitializers), __runInitializers(this, _updatedAt_initializers, void 0));
                this.executions = (__runInitializers(this, _updatedAt_extraInitializers), __runInitializers(this, _executions_initializers, void 0));
                __runInitializers(this, _executions_extraInitializers);
            }
            return RecurringPaymentLinkResponseDto;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _id_decorators = [(0, swagger_1.ApiProperty)({ description: "Recurring link ID" })];
            _username_decorators = [(0, swagger_1.ApiPropertyOptional)({ description: "Username route" })];
            _destination_decorators = [(0, swagger_1.ApiPropertyOptional)({ description: "Destination public key" })];
            _amount_decorators = [(0, swagger_1.ApiProperty)({ description: "Payment amount" })];
            _asset_decorators = [(0, swagger_1.ApiProperty)({ description: "Asset code" })];
            _assetIssuer_decorators = [(0, swagger_1.ApiPropertyOptional)({ description: "Asset issuer" })];
            _frequency_decorators = [(0, swagger_1.ApiProperty)({ description: "Payment frequency", enum: FrequencyType })];
            _startDate_decorators = [(0, swagger_1.ApiProperty)({ description: "Start date" })];
            _endDate_decorators = [(0, swagger_1.ApiPropertyOptional)({ description: "End date" })];
            _totalPeriods_decorators = [(0, swagger_1.ApiPropertyOptional)({ description: "Total periods" })];
            _executedCount_decorators = [(0, swagger_1.ApiProperty)({ description: "Number of executed payments" })];
            _nextExecutionDate_decorators = [(0, swagger_1.ApiProperty)({ description: "Next execution date" })];
            _status_decorators = [(0, swagger_1.ApiProperty)({ description: "Current status", enum: RecurringStatus })];
            _memo_decorators = [(0, swagger_1.ApiPropertyOptional)({ description: "Payment memo" })];
            _memoType_decorators = [(0, swagger_1.ApiPropertyOptional)({ description: "Memo type" })];
            _referenceId_decorators = [(0, swagger_1.ApiPropertyOptional)({ description: "Reference ID" })];
            _privacyEnabled_decorators = [(0, swagger_1.ApiProperty)({ description: "Privacy enabled flag" })];
            _createdAt_decorators = [(0, swagger_1.ApiProperty)({ description: "Creation timestamp" })];
            _updatedAt_decorators = [(0, swagger_1.ApiProperty)({ description: "Last update timestamp" })];
            _executions_decorators = [(0, swagger_1.ApiPropertyOptional)({
                    description: "Execution history",
                    type: [RecurringPaymentExecutionDto],
                })];
            __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: function (obj) { return "id" in obj; }, get: function (obj) { return obj.id; }, set: function (obj, value) { obj.id = value; } }, metadata: _metadata }, _id_initializers, _id_extraInitializers);
            __esDecorate(null, null, _username_decorators, { kind: "field", name: "username", static: false, private: false, access: { has: function (obj) { return "username" in obj; }, get: function (obj) { return obj.username; }, set: function (obj, value) { obj.username = value; } }, metadata: _metadata }, _username_initializers, _username_extraInitializers);
            __esDecorate(null, null, _destination_decorators, { kind: "field", name: "destination", static: false, private: false, access: { has: function (obj) { return "destination" in obj; }, get: function (obj) { return obj.destination; }, set: function (obj, value) { obj.destination = value; } }, metadata: _metadata }, _destination_initializers, _destination_extraInitializers);
            __esDecorate(null, null, _amount_decorators, { kind: "field", name: "amount", static: false, private: false, access: { has: function (obj) { return "amount" in obj; }, get: function (obj) { return obj.amount; }, set: function (obj, value) { obj.amount = value; } }, metadata: _metadata }, _amount_initializers, _amount_extraInitializers);
            __esDecorate(null, null, _asset_decorators, { kind: "field", name: "asset", static: false, private: false, access: { has: function (obj) { return "asset" in obj; }, get: function (obj) { return obj.asset; }, set: function (obj, value) { obj.asset = value; } }, metadata: _metadata }, _asset_initializers, _asset_extraInitializers);
            __esDecorate(null, null, _assetIssuer_decorators, { kind: "field", name: "assetIssuer", static: false, private: false, access: { has: function (obj) { return "assetIssuer" in obj; }, get: function (obj) { return obj.assetIssuer; }, set: function (obj, value) { obj.assetIssuer = value; } }, metadata: _metadata }, _assetIssuer_initializers, _assetIssuer_extraInitializers);
            __esDecorate(null, null, _frequency_decorators, { kind: "field", name: "frequency", static: false, private: false, access: { has: function (obj) { return "frequency" in obj; }, get: function (obj) { return obj.frequency; }, set: function (obj, value) { obj.frequency = value; } }, metadata: _metadata }, _frequency_initializers, _frequency_extraInitializers);
            __esDecorate(null, null, _startDate_decorators, { kind: "field", name: "startDate", static: false, private: false, access: { has: function (obj) { return "startDate" in obj; }, get: function (obj) { return obj.startDate; }, set: function (obj, value) { obj.startDate = value; } }, metadata: _metadata }, _startDate_initializers, _startDate_extraInitializers);
            __esDecorate(null, null, _endDate_decorators, { kind: "field", name: "endDate", static: false, private: false, access: { has: function (obj) { return "endDate" in obj; }, get: function (obj) { return obj.endDate; }, set: function (obj, value) { obj.endDate = value; } }, metadata: _metadata }, _endDate_initializers, _endDate_extraInitializers);
            __esDecorate(null, null, _totalPeriods_decorators, { kind: "field", name: "totalPeriods", static: false, private: false, access: { has: function (obj) { return "totalPeriods" in obj; }, get: function (obj) { return obj.totalPeriods; }, set: function (obj, value) { obj.totalPeriods = value; } }, metadata: _metadata }, _totalPeriods_initializers, _totalPeriods_extraInitializers);
            __esDecorate(null, null, _executedCount_decorators, { kind: "field", name: "executedCount", static: false, private: false, access: { has: function (obj) { return "executedCount" in obj; }, get: function (obj) { return obj.executedCount; }, set: function (obj, value) { obj.executedCount = value; } }, metadata: _metadata }, _executedCount_initializers, _executedCount_extraInitializers);
            __esDecorate(null, null, _nextExecutionDate_decorators, { kind: "field", name: "nextExecutionDate", static: false, private: false, access: { has: function (obj) { return "nextExecutionDate" in obj; }, get: function (obj) { return obj.nextExecutionDate; }, set: function (obj, value) { obj.nextExecutionDate = value; } }, metadata: _metadata }, _nextExecutionDate_initializers, _nextExecutionDate_extraInitializers);
            __esDecorate(null, null, _status_decorators, { kind: "field", name: "status", static: false, private: false, access: { has: function (obj) { return "status" in obj; }, get: function (obj) { return obj.status; }, set: function (obj, value) { obj.status = value; } }, metadata: _metadata }, _status_initializers, _status_extraInitializers);
            __esDecorate(null, null, _memo_decorators, { kind: "field", name: "memo", static: false, private: false, access: { has: function (obj) { return "memo" in obj; }, get: function (obj) { return obj.memo; }, set: function (obj, value) { obj.memo = value; } }, metadata: _metadata }, _memo_initializers, _memo_extraInitializers);
            __esDecorate(null, null, _memoType_decorators, { kind: "field", name: "memoType", static: false, private: false, access: { has: function (obj) { return "memoType" in obj; }, get: function (obj) { return obj.memoType; }, set: function (obj, value) { obj.memoType = value; } }, metadata: _metadata }, _memoType_initializers, _memoType_extraInitializers);
            __esDecorate(null, null, _referenceId_decorators, { kind: "field", name: "referenceId", static: false, private: false, access: { has: function (obj) { return "referenceId" in obj; }, get: function (obj) { return obj.referenceId; }, set: function (obj, value) { obj.referenceId = value; } }, metadata: _metadata }, _referenceId_initializers, _referenceId_extraInitializers);
            __esDecorate(null, null, _privacyEnabled_decorators, { kind: "field", name: "privacyEnabled", static: false, private: false, access: { has: function (obj) { return "privacyEnabled" in obj; }, get: function (obj) { return obj.privacyEnabled; }, set: function (obj, value) { obj.privacyEnabled = value; } }, metadata: _metadata }, _privacyEnabled_initializers, _privacyEnabled_extraInitializers);
            __esDecorate(null, null, _createdAt_decorators, { kind: "field", name: "createdAt", static: false, private: false, access: { has: function (obj) { return "createdAt" in obj; }, get: function (obj) { return obj.createdAt; }, set: function (obj, value) { obj.createdAt = value; } }, metadata: _metadata }, _createdAt_initializers, _createdAt_extraInitializers);
            __esDecorate(null, null, _updatedAt_decorators, { kind: "field", name: "updatedAt", static: false, private: false, access: { has: function (obj) { return "updatedAt" in obj; }, get: function (obj) { return obj.updatedAt; }, set: function (obj, value) { obj.updatedAt = value; } }, metadata: _metadata }, _updatedAt_initializers, _updatedAt_extraInitializers);
            __esDecorate(null, null, _executions_decorators, { kind: "field", name: "executions", static: false, private: false, access: { has: function (obj) { return "executions" in obj; }, get: function (obj) { return obj.executions; }, set: function (obj, value) { obj.executions = value; } }, metadata: _metadata }, _executions_initializers, _executions_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.RecurringPaymentLinkResponseDto = RecurringPaymentLinkResponseDto;
/**
 * DTO for listing recurring payment links
 */
var ListRecurringPaymentsResponseDto = function () {
    var _a;
    var _success_decorators;
    var _success_initializers = [];
    var _success_extraInitializers = [];
    var _total_decorators;
    var _total_initializers = [];
    var _total_extraInitializers = [];
    var _data_decorators;
    var _data_initializers = [];
    var _data_extraInitializers = [];
    var _next_cursor_decorators;
    var _next_cursor_initializers = [];
    var _next_cursor_extraInitializers = [];
    var _has_more_decorators;
    var _has_more_initializers = [];
    var _has_more_extraInitializers = [];
    var _limit_decorators;
    var _limit_initializers = [];
    var _limit_extraInitializers = [];
    return _a = /** @class */ (function () {
            function ListRecurringPaymentsResponseDto() {
                this.success = __runInitializers(this, _success_initializers, void 0);
                this.total = (__runInitializers(this, _success_extraInitializers), __runInitializers(this, _total_initializers, void 0));
                this.data = (__runInitializers(this, _total_extraInitializers), __runInitializers(this, _data_initializers, void 0));
                this.next_cursor = (__runInitializers(this, _data_extraInitializers), __runInitializers(this, _next_cursor_initializers, void 0));
                this.has_more = (__runInitializers(this, _next_cursor_extraInitializers), __runInitializers(this, _has_more_initializers, void 0));
                this.limit = (__runInitializers(this, _has_more_extraInitializers), __runInitializers(this, _limit_initializers, void 0));
                __runInitializers(this, _limit_extraInitializers);
            }
            return ListRecurringPaymentsResponseDto;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _success_decorators = [(0, swagger_1.ApiProperty)({ description: "Success flag" })];
            _total_decorators = [(0, swagger_1.ApiProperty)({ description: "Total count" })];
            _data_decorators = [(0, swagger_1.ApiProperty)({
                    description: "Recurring payment links",
                    type: [RecurringPaymentLinkResponseDto],
                })];
            _next_cursor_decorators = [(0, swagger_1.ApiPropertyOptional)({
                    description: "Cursor for the next page",
                    nullable: true,
                })];
            _has_more_decorators = [(0, swagger_1.ApiProperty)({ description: "Whether more results exist" })];
            _limit_decorators = [(0, swagger_1.ApiProperty)({ description: "Limit used for this page" })];
            __esDecorate(null, null, _success_decorators, { kind: "field", name: "success", static: false, private: false, access: { has: function (obj) { return "success" in obj; }, get: function (obj) { return obj.success; }, set: function (obj, value) { obj.success = value; } }, metadata: _metadata }, _success_initializers, _success_extraInitializers);
            __esDecorate(null, null, _total_decorators, { kind: "field", name: "total", static: false, private: false, access: { has: function (obj) { return "total" in obj; }, get: function (obj) { return obj.total; }, set: function (obj, value) { obj.total = value; } }, metadata: _metadata }, _total_initializers, _total_extraInitializers);
            __esDecorate(null, null, _data_decorators, { kind: "field", name: "data", static: false, private: false, access: { has: function (obj) { return "data" in obj; }, get: function (obj) { return obj.data; }, set: function (obj, value) { obj.data = value; } }, metadata: _metadata }, _data_initializers, _data_extraInitializers);
            __esDecorate(null, null, _next_cursor_decorators, { kind: "field", name: "next_cursor", static: false, private: false, access: { has: function (obj) { return "next_cursor" in obj; }, get: function (obj) { return obj.next_cursor; }, set: function (obj, value) { obj.next_cursor = value; } }, metadata: _metadata }, _next_cursor_initializers, _next_cursor_extraInitializers);
            __esDecorate(null, null, _has_more_decorators, { kind: "field", name: "has_more", static: false, private: false, access: { has: function (obj) { return "has_more" in obj; }, get: function (obj) { return obj.has_more; }, set: function (obj, value) { obj.has_more = value; } }, metadata: _metadata }, _has_more_initializers, _has_more_extraInitializers);
            __esDecorate(null, null, _limit_decorators, { kind: "field", name: "limit", static: false, private: false, access: { has: function (obj) { return "limit" in obj; }, get: function (obj) { return obj.limit; }, set: function (obj, value) { obj.limit = value; } }, metadata: _metadata }, _limit_initializers, _limit_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.ListRecurringPaymentsResponseDto = ListRecurringPaymentsResponseDto;
// ---------------------------------------------------------------------------
// Query Parameter DTOs
// ---------------------------------------------------------------------------
/**
 * DTO for querying recurring payment links
 */
var QueryRecurringPaymentsDto = function () {
    var _a;
    var _status_decorators;
    var _status_initializers = [];
    var _status_extraInitializers = [];
    var _username_decorators;
    var _username_initializers = [];
    var _username_extraInitializers = [];
    var _destination_decorators;
    var _destination_initializers = [];
    var _destination_extraInitializers = [];
    var _cursor_decorators;
    var _cursor_initializers = [];
    var _cursor_extraInitializers = [];
    var _limit_decorators;
    var _limit_initializers = [];
    var _limit_extraInitializers = [];
    return _a = /** @class */ (function () {
            function QueryRecurringPaymentsDto() {
                this.status = __runInitializers(this, _status_initializers, void 0);
                this.username = (__runInitializers(this, _status_extraInitializers), __runInitializers(this, _username_initializers, void 0));
                this.destination = (__runInitializers(this, _username_extraInitializers), __runInitializers(this, _destination_initializers, void 0));
                this.cursor = (__runInitializers(this, _destination_extraInitializers), __runInitializers(this, _cursor_initializers, void 0));
                this.limit = (__runInitializers(this, _cursor_extraInitializers), __runInitializers(this, _limit_initializers, void 0));
                __runInitializers(this, _limit_extraInitializers);
            }
            return QueryRecurringPaymentsDto;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _status_decorators = [(0, swagger_1.ApiPropertyOptional)({
                    description: "Filter by status",
                    enum: RecurringStatus,
                }), (0, class_validator_1.IsEnum)(RecurringStatus), (0, class_validator_1.IsOptional)()];
            _username_decorators = [(0, swagger_1.ApiPropertyOptional)({
                    description: "Filter by username",
                }), (0, class_validator_1.IsString)(), (0, class_validator_1.IsOptional)()];
            _destination_decorators = [(0, swagger_1.ApiPropertyOptional)({
                    description: "Filter by destination",
                }), (0, class_validator_1.IsString)(), (0, class_validator_1.IsOptional)()];
            _cursor_decorators = [(0, swagger_1.ApiPropertyOptional)({
                    description: "Opaque cursor for the next page of results",
                    example: "eyJwayI6IjIwMjYtMDEtMDFUMDA6MDA6MDAuMDAwWiIsImlkIjoiMTIzNCJ9",
                }), (0, class_validator_1.IsString)(), (0, class_validator_1.IsOptional)()];
            _limit_decorators = [(0, swagger_1.ApiPropertyOptional)({
                    description: "Items per page",
                    example: 20,
                    minimum: 1,
                    maximum: 100,
                }), (0, class_validator_1.IsNumber)(), (0, class_validator_1.Min)(1), (0, class_validator_1.Max)(100), (0, class_validator_1.IsOptional)()];
            __esDecorate(null, null, _status_decorators, { kind: "field", name: "status", static: false, private: false, access: { has: function (obj) { return "status" in obj; }, get: function (obj) { return obj.status; }, set: function (obj, value) { obj.status = value; } }, metadata: _metadata }, _status_initializers, _status_extraInitializers);
            __esDecorate(null, null, _username_decorators, { kind: "field", name: "username", static: false, private: false, access: { has: function (obj) { return "username" in obj; }, get: function (obj) { return obj.username; }, set: function (obj, value) { obj.username = value; } }, metadata: _metadata }, _username_initializers, _username_extraInitializers);
            __esDecorate(null, null, _destination_decorators, { kind: "field", name: "destination", static: false, private: false, access: { has: function (obj) { return "destination" in obj; }, get: function (obj) { return obj.destination; }, set: function (obj, value) { obj.destination = value; } }, metadata: _metadata }, _destination_initializers, _destination_extraInitializers);
            __esDecorate(null, null, _cursor_decorators, { kind: "field", name: "cursor", static: false, private: false, access: { has: function (obj) { return "cursor" in obj; }, get: function (obj) { return obj.cursor; }, set: function (obj, value) { obj.cursor = value; } }, metadata: _metadata }, _cursor_initializers, _cursor_extraInitializers);
            __esDecorate(null, null, _limit_decorators, { kind: "field", name: "limit", static: false, private: false, access: { has: function (obj) { return "limit" in obj; }, get: function (obj) { return obj.limit; }, set: function (obj, value) { obj.limit = value; } }, metadata: _metadata }, _limit_initializers, _limit_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.QueryRecurringPaymentsDto = QueryRecurringPaymentsDto;
