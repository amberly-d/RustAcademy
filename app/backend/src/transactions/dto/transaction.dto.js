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
exports.TransactionResponseDto = exports.TransactionItemDto = exports.GetTransactionsQueryDto = void 0;
var swagger_1 = require("@nestjs/swagger");
var class_validator_1 = require("class-validator");
var class_transformer_1 = require("class-transformer");
var GetTransactionsQueryDto = function () {
    var _a;
    var _accountId_decorators;
    var _accountId_initializers = [];
    var _accountId_extraInitializers = [];
    var _asset_decorators;
    var _asset_initializers = [];
    var _asset_extraInitializers = [];
    var _limit_decorators;
    var _limit_initializers = [];
    var _limit_extraInitializers = [];
    var _cursor_decorators;
    var _cursor_initializers = [];
    var _cursor_extraInitializers = [];
    return _a = /** @class */ (function () {
            function GetTransactionsQueryDto() {
                this.accountId = __runInitializers(this, _accountId_initializers, void 0);
                this.asset = (__runInitializers(this, _accountId_extraInitializers), __runInitializers(this, _asset_initializers, void 0));
                this.limit = (__runInitializers(this, _asset_extraInitializers), __runInitializers(this, _limit_initializers, 20));
                this.cursor = (__runInitializers(this, _limit_extraInitializers), __runInitializers(this, _cursor_initializers, void 0));
                __runInitializers(this, _cursor_extraInitializers);
            }
            return GetTransactionsQueryDto;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _accountId_decorators = [(0, swagger_1.ApiProperty)({
                    description: "Stellar account ID (public key)",
                    example: "GD...",
                }), (0, class_validator_1.IsNotEmpty)(), (0, class_validator_1.IsString)(), (0, class_validator_1.Matches)(/^G[A-Z2-7]{55}$/, { message: "Invalid Stellar account ID format" })];
            _asset_decorators = [(0, swagger_1.ApiPropertyOptional)({
                    description: "Asset code and issuer (e.g., XLM or USDC:GA...)",
                    example: "USDC:GA5ZSEJYB37JRC5AVCIA5MOP4RHTM335XOP3IA2M65BZDCCXN2YRC2TH",
                }), (0, class_validator_1.IsOptional)(), (0, class_validator_1.IsString)(), (0, class_validator_1.Matches)(/^(XLM|[A-Z0-9]{1,12}:G[A-Z2-7]{55})$/, {
                    message: "Invalid asset format. Use XLM or CODE:ISSUER",
                })];
            _limit_decorators = [(0, swagger_1.ApiPropertyOptional)({
                    description: "Maximum number of transactions to return",
                    minimum: 1,
                    maximum: 200,
                    default: 20,
                }), (0, class_validator_1.IsOptional)(), (0, class_transformer_1.Type)(function () { return Number; }), (0, class_validator_1.IsInt)(), (0, class_validator_1.Min)(1), (0, class_validator_1.Max)(200)];
            _cursor_decorators = [(0, swagger_1.ApiPropertyOptional)({
                    description: "Cursor for pagination (paging_token)",
                }), (0, class_validator_1.IsOptional)(), (0, class_validator_1.IsString)()];
            __esDecorate(null, null, _accountId_decorators, { kind: "field", name: "accountId", static: false, private: false, access: { has: function (obj) { return "accountId" in obj; }, get: function (obj) { return obj.accountId; }, set: function (obj, value) { obj.accountId = value; } }, metadata: _metadata }, _accountId_initializers, _accountId_extraInitializers);
            __esDecorate(null, null, _asset_decorators, { kind: "field", name: "asset", static: false, private: false, access: { has: function (obj) { return "asset" in obj; }, get: function (obj) { return obj.asset; }, set: function (obj, value) { obj.asset = value; } }, metadata: _metadata }, _asset_initializers, _asset_extraInitializers);
            __esDecorate(null, null, _limit_decorators, { kind: "field", name: "limit", static: false, private: false, access: { has: function (obj) { return "limit" in obj; }, get: function (obj) { return obj.limit; }, set: function (obj, value) { obj.limit = value; } }, metadata: _metadata }, _limit_initializers, _limit_extraInitializers);
            __esDecorate(null, null, _cursor_decorators, { kind: "field", name: "cursor", static: false, private: false, access: { has: function (obj) { return "cursor" in obj; }, get: function (obj) { return obj.cursor; }, set: function (obj, value) { obj.cursor = value; } }, metadata: _metadata }, _cursor_initializers, _cursor_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.GetTransactionsQueryDto = GetTransactionsQueryDto;
var TransactionItemDto = function () {
    var _a;
    var _amount_decorators;
    var _amount_initializers = [];
    var _amount_extraInitializers = [];
    var _asset_decorators;
    var _asset_initializers = [];
    var _asset_extraInitializers = [];
    var _memo_decorators;
    var _memo_initializers = [];
    var _memo_extraInitializers = [];
    var _timestamp_decorators;
    var _timestamp_initializers = [];
    var _timestamp_extraInitializers = [];
    var _source_decorators;
    var _source_initializers = [];
    var _source_extraInitializers = [];
    var _destination_decorators;
    var _destination_initializers = [];
    var _destination_extraInitializers = [];
    var _status_decorators;
    var _status_initializers = [];
    var _status_extraInitializers = [];
    var _txHash_decorators;
    var _txHash_initializers = [];
    var _txHash_extraInitializers = [];
    var _pagingToken_decorators;
    var _pagingToken_initializers = [];
    var _pagingToken_extraInitializers = [];
    var _feeBreakdown_decorators;
    var _feeBreakdown_initializers = [];
    var _feeBreakdown_extraInitializers = [];
    return _a = /** @class */ (function () {
            function TransactionItemDto() {
                this.amount = __runInitializers(this, _amount_initializers, void 0);
                this.asset = (__runInitializers(this, _amount_extraInitializers), __runInitializers(this, _asset_initializers, void 0));
                this.memo = (__runInitializers(this, _asset_extraInitializers), __runInitializers(this, _memo_initializers, void 0));
                this.timestamp = (__runInitializers(this, _memo_extraInitializers), __runInitializers(this, _timestamp_initializers, void 0));
                this.source = (__runInitializers(this, _timestamp_extraInitializers), __runInitializers(this, _source_initializers, void 0));
                this.destination = (__runInitializers(this, _source_extraInitializers), __runInitializers(this, _destination_initializers, void 0));
                this.status = (__runInitializers(this, _destination_extraInitializers), __runInitializers(this, _status_initializers, void 0));
                this.txHash = (__runInitializers(this, _status_extraInitializers), __runInitializers(this, _txHash_initializers, void 0));
                this.pagingToken = (__runInitializers(this, _txHash_extraInitializers), __runInitializers(this, _pagingToken_initializers, void 0));
                this.feeBreakdown = (__runInitializers(this, _pagingToken_extraInitializers), __runInitializers(this, _feeBreakdown_initializers, void 0));
                __runInitializers(this, _feeBreakdown_extraInitializers);
            }
            return TransactionItemDto;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _amount_decorators = [(0, swagger_1.ApiProperty)({ example: "100.5000000" })];
            _asset_decorators = [(0, swagger_1.ApiProperty)({ example: "XLM" })];
            _memo_decorators = [(0, swagger_1.ApiPropertyOptional)({ example: "Payment for services" })];
            _timestamp_decorators = [(0, swagger_1.ApiProperty)({ example: "2026-02-21T08:00:00Z" })];
            _source_decorators = [(0, swagger_1.ApiProperty)({ example: "GABCD...1234", description: "Source account" })];
            _destination_decorators = [(0, swagger_1.ApiProperty)({ example: "GDCBA...4321", description: "Destination account" })];
            _status_decorators = [(0, swagger_1.ApiProperty)({
                    example: "Success",
                    description: "Transaction status (Success or Pending)",
                })];
            _txHash_decorators = [(0, swagger_1.ApiProperty)({ example: "6852...a341" })];
            _pagingToken_decorators = [(0, swagger_1.ApiProperty)({ example: "1234567890" })];
            _feeBreakdown_decorators = [(0, swagger_1.ApiPropertyOptional)({
                    description: "Fee breakdown for this transaction",
                    example: { networkFee: "0.0000100", platformFee: "0.1000000", totalFee: "0.1000100" },
                })];
            __esDecorate(null, null, _amount_decorators, { kind: "field", name: "amount", static: false, private: false, access: { has: function (obj) { return "amount" in obj; }, get: function (obj) { return obj.amount; }, set: function (obj, value) { obj.amount = value; } }, metadata: _metadata }, _amount_initializers, _amount_extraInitializers);
            __esDecorate(null, null, _asset_decorators, { kind: "field", name: "asset", static: false, private: false, access: { has: function (obj) { return "asset" in obj; }, get: function (obj) { return obj.asset; }, set: function (obj, value) { obj.asset = value; } }, metadata: _metadata }, _asset_initializers, _asset_extraInitializers);
            __esDecorate(null, null, _memo_decorators, { kind: "field", name: "memo", static: false, private: false, access: { has: function (obj) { return "memo" in obj; }, get: function (obj) { return obj.memo; }, set: function (obj, value) { obj.memo = value; } }, metadata: _metadata }, _memo_initializers, _memo_extraInitializers);
            __esDecorate(null, null, _timestamp_decorators, { kind: "field", name: "timestamp", static: false, private: false, access: { has: function (obj) { return "timestamp" in obj; }, get: function (obj) { return obj.timestamp; }, set: function (obj, value) { obj.timestamp = value; } }, metadata: _metadata }, _timestamp_initializers, _timestamp_extraInitializers);
            __esDecorate(null, null, _source_decorators, { kind: "field", name: "source", static: false, private: false, access: { has: function (obj) { return "source" in obj; }, get: function (obj) { return obj.source; }, set: function (obj, value) { obj.source = value; } }, metadata: _metadata }, _source_initializers, _source_extraInitializers);
            __esDecorate(null, null, _destination_decorators, { kind: "field", name: "destination", static: false, private: false, access: { has: function (obj) { return "destination" in obj; }, get: function (obj) { return obj.destination; }, set: function (obj, value) { obj.destination = value; } }, metadata: _metadata }, _destination_initializers, _destination_extraInitializers);
            __esDecorate(null, null, _status_decorators, { kind: "field", name: "status", static: false, private: false, access: { has: function (obj) { return "status" in obj; }, get: function (obj) { return obj.status; }, set: function (obj, value) { obj.status = value; } }, metadata: _metadata }, _status_initializers, _status_extraInitializers);
            __esDecorate(null, null, _txHash_decorators, { kind: "field", name: "txHash", static: false, private: false, access: { has: function (obj) { return "txHash" in obj; }, get: function (obj) { return obj.txHash; }, set: function (obj, value) { obj.txHash = value; } }, metadata: _metadata }, _txHash_initializers, _txHash_extraInitializers);
            __esDecorate(null, null, _pagingToken_decorators, { kind: "field", name: "pagingToken", static: false, private: false, access: { has: function (obj) { return "pagingToken" in obj; }, get: function (obj) { return obj.pagingToken; }, set: function (obj, value) { obj.pagingToken = value; } }, metadata: _metadata }, _pagingToken_initializers, _pagingToken_extraInitializers);
            __esDecorate(null, null, _feeBreakdown_decorators, { kind: "field", name: "feeBreakdown", static: false, private: false, access: { has: function (obj) { return "feeBreakdown" in obj; }, get: function (obj) { return obj.feeBreakdown; }, set: function (obj, value) { obj.feeBreakdown = value; } }, metadata: _metadata }, _feeBreakdown_initializers, _feeBreakdown_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.TransactionItemDto = TransactionItemDto;
var TransactionResponseDto = function () {
    var _a;
    var _items_decorators;
    var _items_initializers = [];
    var _items_extraInitializers = [];
    var _nextCursor_decorators;
    var _nextCursor_initializers = [];
    var _nextCursor_extraInitializers = [];
    return _a = /** @class */ (function () {
            function TransactionResponseDto() {
                this.items = __runInitializers(this, _items_initializers, void 0);
                this.nextCursor = (__runInitializers(this, _items_extraInitializers), __runInitializers(this, _nextCursor_initializers, void 0));
                __runInitializers(this, _nextCursor_extraInitializers);
            }
            return TransactionResponseDto;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _items_decorators = [(0, swagger_1.ApiProperty)({
                    type: [TransactionItemDto],
                    description: "List of transaction items",
                })];
            _nextCursor_decorators = [(0, swagger_1.ApiPropertyOptional)({
                    description: "Cursor for the next page",
                    example: "1234567890",
                })];
            __esDecorate(null, null, _items_decorators, { kind: "field", name: "items", static: false, private: false, access: { has: function (obj) { return "items" in obj; }, get: function (obj) { return obj.items; }, set: function (obj, value) { obj.items = value; } }, metadata: _metadata }, _items_initializers, _items_extraInitializers);
            __esDecorate(null, null, _nextCursor_decorators, { kind: "field", name: "nextCursor", static: false, private: false, access: { has: function (obj) { return "nextCursor" in obj; }, get: function (obj) { return obj.nextCursor; }, set: function (obj, value) { obj.nextCursor = value; } }, metadata: _metadata }, _nextCursor_initializers, _nextCursor_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.TransactionResponseDto = TransactionResponseDto;
