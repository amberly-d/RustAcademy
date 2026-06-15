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
exports.TransactionResponseDto = exports.TransactionDto = void 0;
var swagger_1 = require("@nestjs/swagger");
/**
 * Individual transaction in the response
 */
var TransactionDto = function () {
    var _a;
    var _hash_decorators;
    var _hash_initializers = [];
    var _hash_extraInitializers = [];
    var _ledger_decorators;
    var _ledger_initializers = [];
    var _ledger_extraInitializers = [];
    var _timestamp_decorators;
    var _timestamp_initializers = [];
    var _timestamp_extraInitializers = [];
    var _sourceAccount_decorators;
    var _sourceAccount_initializers = [];
    var _sourceAccount_extraInitializers = [];
    var _type_decorators;
    var _type_initializers = [];
    var _type_extraInitializers = [];
    var _assetCode_decorators;
    var _assetCode_initializers = [];
    var _assetCode_extraInitializers = [];
    var _assetIssuer_decorators;
    var _assetIssuer_initializers = [];
    var _assetIssuer_extraInitializers = [];
    var _amount_decorators;
    var _amount_initializers = [];
    var _amount_extraInitializers = [];
    var _destinationAccount_decorators;
    var _destinationAccount_initializers = [];
    var _destinationAccount_extraInitializers = [];
    var _memo_decorators;
    var _memo_initializers = [];
    var _memo_extraInitializers = [];
    var _memoType_decorators;
    var _memoType_initializers = [];
    var _memoType_extraInitializers = [];
    return _a = /** @class */ (function () {
            function TransactionDto() {
                this.hash = __runInitializers(this, _hash_initializers, void 0);
                this.ledger = (__runInitializers(this, _hash_extraInitializers), __runInitializers(this, _ledger_initializers, void 0));
                this.timestamp = (__runInitializers(this, _ledger_extraInitializers), __runInitializers(this, _timestamp_initializers, void 0));
                this.sourceAccount = (__runInitializers(this, _timestamp_extraInitializers), __runInitializers(this, _sourceAccount_initializers, void 0));
                this.type = (__runInitializers(this, _sourceAccount_extraInitializers), __runInitializers(this, _type_initializers, void 0));
                this.assetCode = (__runInitializers(this, _type_extraInitializers), __runInitializers(this, _assetCode_initializers, void 0));
                this.assetIssuer = (__runInitializers(this, _assetCode_extraInitializers), __runInitializers(this, _assetIssuer_initializers, void 0));
                this.amount = (__runInitializers(this, _assetIssuer_extraInitializers), __runInitializers(this, _amount_initializers, void 0));
                this.destinationAccount = (__runInitializers(this, _amount_extraInitializers), __runInitializers(this, _destinationAccount_initializers, void 0));
                this.memo = (__runInitializers(this, _destinationAccount_extraInitializers), __runInitializers(this, _memo_initializers, void 0));
                this.memoType = (__runInitializers(this, _memo_extraInitializers), __runInitializers(this, _memoType_initializers, void 0));
                __runInitializers(this, _memoType_extraInitializers);
            }
            return TransactionDto;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _hash_decorators = [(0, swagger_1.ApiProperty)({
                    description: 'Transaction hash',
                    example: 'abc123def456...',
                })];
            _ledger_decorators = [(0, swagger_1.ApiProperty)({
                    description: 'Transaction ledger sequence number',
                    example: 12345678,
                })];
            _timestamp_decorators = [(0, swagger_1.ApiProperty)({
                    description: 'Transaction timestamp (ISO 8601)',
                    example: '2026-01-25T12:00:00Z',
                })];
            _sourceAccount_decorators = [(0, swagger_1.ApiProperty)({
                    description: 'Source account public key',
                    example: 'GBXGQ55JMQ4L2B6E7S8Y9Z0A1B2C3D4E5F6G7H8I7YWR',
                })];
            _type_decorators = [(0, swagger_1.ApiProperty)({
                    description: 'Transaction type',
                    example: 'payment',
                })];
            _assetCode_decorators = [(0, swagger_1.ApiProperty)({
                    description: 'Asset code',
                    example: 'XLM',
                    nullable: true,
                })];
            _assetIssuer_decorators = [(0, swagger_1.ApiProperty)({
                    description: 'Asset issuer (for non-native assets)',
                    example: 'GA5ZSEJYB37JRC5AVCIA5MOP4RHTM335X2KGX3IHOJAPP5RE34K4KZVN',
                    nullable: true,
                })];
            _amount_decorators = [(0, swagger_1.ApiProperty)({
                    description: 'Transaction amount',
                    example: '100.5000000',
                })];
            _destinationAccount_decorators = [(0, swagger_1.ApiProperty)({
                    description: 'Destination account public key',
                    example: 'GABC123...',
                    nullable: true,
                })];
            _memo_decorators = [(0, swagger_1.ApiProperty)({
                    description: 'Transaction memo',
                    example: 'Payment for service',
                    nullable: true,
                })];
            _memoType_decorators = [(0, swagger_1.ApiProperty)({
                    description: 'Transaction memo type',
                    example: 'text',
                    nullable: true,
                })];
            __esDecorate(null, null, _hash_decorators, { kind: "field", name: "hash", static: false, private: false, access: { has: function (obj) { return "hash" in obj; }, get: function (obj) { return obj.hash; }, set: function (obj, value) { obj.hash = value; } }, metadata: _metadata }, _hash_initializers, _hash_extraInitializers);
            __esDecorate(null, null, _ledger_decorators, { kind: "field", name: "ledger", static: false, private: false, access: { has: function (obj) { return "ledger" in obj; }, get: function (obj) { return obj.ledger; }, set: function (obj, value) { obj.ledger = value; } }, metadata: _metadata }, _ledger_initializers, _ledger_extraInitializers);
            __esDecorate(null, null, _timestamp_decorators, { kind: "field", name: "timestamp", static: false, private: false, access: { has: function (obj) { return "timestamp" in obj; }, get: function (obj) { return obj.timestamp; }, set: function (obj, value) { obj.timestamp = value; } }, metadata: _metadata }, _timestamp_initializers, _timestamp_extraInitializers);
            __esDecorate(null, null, _sourceAccount_decorators, { kind: "field", name: "sourceAccount", static: false, private: false, access: { has: function (obj) { return "sourceAccount" in obj; }, get: function (obj) { return obj.sourceAccount; }, set: function (obj, value) { obj.sourceAccount = value; } }, metadata: _metadata }, _sourceAccount_initializers, _sourceAccount_extraInitializers);
            __esDecorate(null, null, _type_decorators, { kind: "field", name: "type", static: false, private: false, access: { has: function (obj) { return "type" in obj; }, get: function (obj) { return obj.type; }, set: function (obj, value) { obj.type = value; } }, metadata: _metadata }, _type_initializers, _type_extraInitializers);
            __esDecorate(null, null, _assetCode_decorators, { kind: "field", name: "assetCode", static: false, private: false, access: { has: function (obj) { return "assetCode" in obj; }, get: function (obj) { return obj.assetCode; }, set: function (obj, value) { obj.assetCode = value; } }, metadata: _metadata }, _assetCode_initializers, _assetCode_extraInitializers);
            __esDecorate(null, null, _assetIssuer_decorators, { kind: "field", name: "assetIssuer", static: false, private: false, access: { has: function (obj) { return "assetIssuer" in obj; }, get: function (obj) { return obj.assetIssuer; }, set: function (obj, value) { obj.assetIssuer = value; } }, metadata: _metadata }, _assetIssuer_initializers, _assetIssuer_extraInitializers);
            __esDecorate(null, null, _amount_decorators, { kind: "field", name: "amount", static: false, private: false, access: { has: function (obj) { return "amount" in obj; }, get: function (obj) { return obj.amount; }, set: function (obj, value) { obj.amount = value; } }, metadata: _metadata }, _amount_initializers, _amount_extraInitializers);
            __esDecorate(null, null, _destinationAccount_decorators, { kind: "field", name: "destinationAccount", static: false, private: false, access: { has: function (obj) { return "destinationAccount" in obj; }, get: function (obj) { return obj.destinationAccount; }, set: function (obj, value) { obj.destinationAccount = value; } }, metadata: _metadata }, _destinationAccount_initializers, _destinationAccount_extraInitializers);
            __esDecorate(null, null, _memo_decorators, { kind: "field", name: "memo", static: false, private: false, access: { has: function (obj) { return "memo" in obj; }, get: function (obj) { return obj.memo; }, set: function (obj, value) { obj.memo = value; } }, metadata: _metadata }, _memo_initializers, _memo_extraInitializers);
            __esDecorate(null, null, _memoType_decorators, { kind: "field", name: "memoType", static: false, private: false, access: { has: function (obj) { return "memoType" in obj; }, get: function (obj) { return obj.memoType; }, set: function (obj, value) { obj.memoType = value; } }, metadata: _metadata }, _memoType_initializers, _memoType_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.TransactionDto = TransactionDto;
/**
 * Response DTO for transaction queries
 *
 * @example
 * ```json
 * {
 *   "transactions": [
 *     {
 *       "hash": "abc123...",
 *       "ledger": 12345678,
 *       "timestamp": "2026-01-25T12:00:00Z",
 *       "sourceAccount": "GBXGQ...",
 *       "type": "payment",
 *       "assetCode": "XLM",
 *       "assetIssuer": null,
 *       "amount": "100.5000000",
 *       "destinationAccount": "GABC123...",
 *       "memo": "Payment for service",
 *       "memoType": "text"
 *     }
 *   ],
 *   "pagination": {
 *     "limit": 20,
 *     "cursor": "1234567890",
 *     "hasMore": true
 *   }
 * }
 * ```
 */
var TransactionResponseDto = function () {
    var _a;
    var _transactions_decorators;
    var _transactions_initializers = [];
    var _transactions_extraInitializers = [];
    var _pagination_decorators;
    var _pagination_initializers = [];
    var _pagination_extraInitializers = [];
    return _a = /** @class */ (function () {
            function TransactionResponseDto() {
                this.transactions = __runInitializers(this, _transactions_initializers, void 0);
                this.pagination = (__runInitializers(this, _transactions_extraInitializers), __runInitializers(this, _pagination_initializers, void 0));
                __runInitializers(this, _pagination_extraInitializers);
            }
            return TransactionResponseDto;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _transactions_decorators = [(0, swagger_1.ApiProperty)({
                    description: 'List of transactions',
                    type: [TransactionDto],
                })];
            _pagination_decorators = [(0, swagger_1.ApiProperty)({
                    description: 'Pagination information',
                    example: {
                        limit: 20,
                        cursor: '1234567890',
                        hasMore: true,
                    },
                })];
            __esDecorate(null, null, _transactions_decorators, { kind: "field", name: "transactions", static: false, private: false, access: { has: function (obj) { return "transactions" in obj; }, get: function (obj) { return obj.transactions; }, set: function (obj, value) { obj.transactions = value; } }, metadata: _metadata }, _transactions_initializers, _transactions_extraInitializers);
            __esDecorate(null, null, _pagination_decorators, { kind: "field", name: "pagination", static: false, private: false, access: { has: function (obj) { return "pagination" in obj; }, get: function (obj) { return obj.pagination; }, set: function (obj, value) { obj.pagination = value; } }, metadata: _metadata }, _pagination_initializers, _pagination_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.TransactionResponseDto = TransactionResponseDto;
