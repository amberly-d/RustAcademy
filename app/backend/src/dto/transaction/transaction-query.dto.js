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
exports.TransactionQueryDto = exports.TransactionSortOrder = void 0;
var swagger_1 = require("@nestjs/swagger");
var class_validator_1 = require("class-validator");
var class_transformer_1 = require("class-transformer");
var validators_1 = require("../validators");
/**
 * Transaction query sort order
 */
var TransactionSortOrder;
(function (TransactionSortOrder) {
    TransactionSortOrder["ASC"] = "asc";
    TransactionSortOrder["DESC"] = "desc";
})(TransactionSortOrder || (exports.TransactionSortOrder = TransactionSortOrder = {}));
/**
 * DTO for querying transactions
 *
 * Supports filtering and pagination for Stellar transaction queries.
 *
 * @example
 * ```json
 * {
 *   "account": "GBXGQ55JMQ4L2B6E7S8Y9Z0A1B2C3D4E5F6G7H8I7YWR",
 *   "asset": "XLM",
 *   "limit": 20,
 *   "cursor": "1234567890",
 *   "order": "desc",
 *   "fromDate": "2026-01-01T00:00:00Z",
 *   "toDate": "2026-01-31T23:59:59Z"
 * }
 * ```
 */
var TransactionQueryDto = function () {
    var _a;
    var _account_decorators;
    var _account_initializers = [];
    var _account_extraInitializers = [];
    var _asset_decorators;
    var _asset_initializers = [];
    var _asset_extraInitializers = [];
    var _limit_decorators;
    var _limit_initializers = [];
    var _limit_extraInitializers = [];
    var _cursor_decorators;
    var _cursor_initializers = [];
    var _cursor_extraInitializers = [];
    var _order_decorators;
    var _order_initializers = [];
    var _order_extraInitializers = [];
    var _fromDate_decorators;
    var _fromDate_initializers = [];
    var _fromDate_extraInitializers = [];
    var _toDate_decorators;
    var _toDate_initializers = [];
    var _toDate_extraInitializers = [];
    return _a = /** @class */ (function () {
            function TransactionQueryDto() {
                this.account = __runInitializers(this, _account_initializers, void 0);
                this.asset = (__runInitializers(this, _account_extraInitializers), __runInitializers(this, _asset_initializers, void 0));
                this.limit = (__runInitializers(this, _asset_extraInitializers), __runInitializers(this, _limit_initializers, void 0));
                this.cursor = (__runInitializers(this, _limit_extraInitializers), __runInitializers(this, _cursor_initializers, void 0));
                this.order = (__runInitializers(this, _cursor_extraInitializers), __runInitializers(this, _order_initializers, void 0));
                this.fromDate = (__runInitializers(this, _order_extraInitializers), __runInitializers(this, _fromDate_initializers, void 0));
                this.toDate = (__runInitializers(this, _fromDate_extraInitializers), __runInitializers(this, _toDate_initializers, void 0));
                __runInitializers(this, _toDate_extraInitializers);
            }
            return TransactionQueryDto;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _account_decorators = [(0, swagger_1.ApiPropertyOptional)({
                    description: 'Stellar account public key to filter transactions',
                    example: 'GBXGQ55JMQ4L2B6E7S8Y9Z0A1B2C3D4E5F6G7H8I7YWR',
                }), (0, class_validator_1.IsOptional)(), (0, class_validator_1.IsString)(), (0, validators_1.IsStellarPublicKey)({
                    message: 'Account must be a valid Stellar public key',
                })];
            _asset_decorators = [(0, swagger_1.ApiPropertyOptional)({
                    description: 'Asset code to filter transactions',
                    example: 'XLM',
                    enum: ['XLM', 'USDC', 'AQUA', 'yXLM'],
                }), (0, class_validator_1.IsOptional)(), (0, class_validator_1.IsString)(), (0, validators_1.IsStellarAsset)({
                    message: 'Asset must be one of: XLM, USDC, AQUA, yXLM',
                })];
            _limit_decorators = [(0, swagger_1.ApiPropertyOptional)({
                    description: 'Maximum number of transactions to return',
                    example: 20,
                    minimum: 1,
                    maximum: 200,
                    default: 20,
                }), (0, class_validator_1.IsOptional)(), (0, class_validator_1.IsInt)(), (0, class_validator_1.Min)(1), (0, class_validator_1.Max)(200), (0, class_transformer_1.Type)(function () { return Number; })];
            _cursor_decorators = [(0, swagger_1.ApiPropertyOptional)({
                    description: 'Pagination cursor (transaction ID or sequence number)',
                    example: '1234567890',
                }), (0, class_validator_1.IsOptional)(), (0, class_validator_1.IsString)()];
            _order_decorators = [(0, swagger_1.ApiPropertyOptional)({
                    description: 'Sort order for transactions',
                    example: 'desc',
                    enum: TransactionSortOrder,
                    default: TransactionSortOrder.DESC,
                }), (0, class_validator_1.IsOptional)(), (0, class_validator_1.IsEnum)(TransactionSortOrder)];
            _fromDate_decorators = [(0, swagger_1.ApiPropertyOptional)({
                    description: 'Start date for transaction filter (ISO 8601)',
                    example: '2026-01-01T00:00:00Z',
                }), (0, class_validator_1.IsOptional)(), (0, class_validator_1.IsDateString)()];
            _toDate_decorators = [(0, swagger_1.ApiPropertyOptional)({
                    description: 'End date for transaction filter (ISO 8601)',
                    example: '2026-01-31T23:59:59Z',
                }), (0, class_validator_1.IsOptional)(), (0, class_validator_1.IsDateString)()];
            __esDecorate(null, null, _account_decorators, { kind: "field", name: "account", static: false, private: false, access: { has: function (obj) { return "account" in obj; }, get: function (obj) { return obj.account; }, set: function (obj, value) { obj.account = value; } }, metadata: _metadata }, _account_initializers, _account_extraInitializers);
            __esDecorate(null, null, _asset_decorators, { kind: "field", name: "asset", static: false, private: false, access: { has: function (obj) { return "asset" in obj; }, get: function (obj) { return obj.asset; }, set: function (obj, value) { obj.asset = value; } }, metadata: _metadata }, _asset_initializers, _asset_extraInitializers);
            __esDecorate(null, null, _limit_decorators, { kind: "field", name: "limit", static: false, private: false, access: { has: function (obj) { return "limit" in obj; }, get: function (obj) { return obj.limit; }, set: function (obj, value) { obj.limit = value; } }, metadata: _metadata }, _limit_initializers, _limit_extraInitializers);
            __esDecorate(null, null, _cursor_decorators, { kind: "field", name: "cursor", static: false, private: false, access: { has: function (obj) { return "cursor" in obj; }, get: function (obj) { return obj.cursor; }, set: function (obj, value) { obj.cursor = value; } }, metadata: _metadata }, _cursor_initializers, _cursor_extraInitializers);
            __esDecorate(null, null, _order_decorators, { kind: "field", name: "order", static: false, private: false, access: { has: function (obj) { return "order" in obj; }, get: function (obj) { return obj.order; }, set: function (obj, value) { obj.order = value; } }, metadata: _metadata }, _order_initializers, _order_extraInitializers);
            __esDecorate(null, null, _fromDate_decorators, { kind: "field", name: "fromDate", static: false, private: false, access: { has: function (obj) { return "fromDate" in obj; }, get: function (obj) { return obj.fromDate; }, set: function (obj, value) { obj.fromDate = value; } }, metadata: _metadata }, _fromDate_initializers, _fromDate_extraInitializers);
            __esDecorate(null, null, _toDate_decorators, { kind: "field", name: "toDate", static: false, private: false, access: { has: function (obj) { return "toDate" in obj; }, get: function (obj) { return obj.toDate; }, set: function (obj, value) { obj.toDate = value; } }, metadata: _metadata }, _toDate_initializers, _toDate_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.TransactionQueryDto = TransactionQueryDto;
