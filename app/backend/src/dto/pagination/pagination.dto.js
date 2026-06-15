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
exports.PaginationMetaDto = exports.CursorPaginationQueryDto = void 0;
exports.paginatedResponse = paginatedResponse;
var swagger_1 = require("@nestjs/swagger");
var class_validator_1 = require("class-validator");
var class_transformer_1 = require("class-transformer");
var cursor_util_1 = require("../../common/pagination/cursor.util");
/**
 * Standard query DTO for cursor-based pagination.
 * All list endpoints should accept these parameters.
 */
var CursorPaginationQueryDto = function () {
    var _a;
    var _cursor_decorators;
    var _cursor_initializers = [];
    var _cursor_extraInitializers = [];
    var _limit_decorators;
    var _limit_initializers = [];
    var _limit_extraInitializers = [];
    return _a = /** @class */ (function () {
            function CursorPaginationQueryDto() {
                this.cursor = __runInitializers(this, _cursor_initializers, void 0);
                this.limit = (__runInitializers(this, _cursor_extraInitializers), __runInitializers(this, _limit_initializers, cursor_util_1.PAGINATION_DEFAULTS.LIMIT_DEFAULT));
                __runInitializers(this, _limit_extraInitializers);
            }
            return CursorPaginationQueryDto;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _cursor_decorators = [(0, swagger_1.ApiPropertyOptional)({
                    description: 'Opaque cursor for the next page of results',
                    example: 'eyJwayI6IjIwMjYtMDEtMDFUMDA6MDA6MDAuMDAwWiIsImlkIjoiMTIzNDU2NzgtYWJjZC0xMjM0LTEyMzQtMTIzNDU2Nzg5MGFiIn0',
                }), (0, class_validator_1.IsOptional)(), (0, class_validator_1.IsString)()];
            _limit_decorators = [(0, swagger_1.ApiPropertyOptional)({
                    description: 'Maximum number of items to return per page',
                    minimum: cursor_util_1.PAGINATION_DEFAULTS.LIMIT_MIN,
                    maximum: cursor_util_1.PAGINATION_DEFAULTS.LIMIT_MAX,
                    default: cursor_util_1.PAGINATION_DEFAULTS.LIMIT_DEFAULT,
                    example: 20,
                }), (0, class_validator_1.IsOptional)(), (0, class_transformer_1.Type)(function () { return Number; }), (0, class_validator_1.IsInt)(), (0, class_validator_1.Min)(cursor_util_1.PAGINATION_DEFAULTS.LIMIT_MIN), (0, class_validator_1.Max)(cursor_util_1.PAGINATION_DEFAULTS.LIMIT_MAX)];
            __esDecorate(null, null, _cursor_decorators, { kind: "field", name: "cursor", static: false, private: false, access: { has: function (obj) { return "cursor" in obj; }, get: function (obj) { return obj.cursor; }, set: function (obj, value) { obj.cursor = value; } }, metadata: _metadata }, _cursor_initializers, _cursor_extraInitializers);
            __esDecorate(null, null, _limit_decorators, { kind: "field", name: "limit", static: false, private: false, access: { has: function (obj) { return "limit" in obj; }, get: function (obj) { return obj.limit; }, set: function (obj, value) { obj.limit = value; } }, metadata: _metadata }, _limit_initializers, _limit_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.CursorPaginationQueryDto = CursorPaginationQueryDto;
/**
 * Standard pagination metadata included in every cursor-paginated response.
 */
var PaginationMetaDto = function () {
    var _a;
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
            function PaginationMetaDto() {
                this.next_cursor = __runInitializers(this, _next_cursor_initializers, void 0);
                this.has_more = (__runInitializers(this, _next_cursor_extraInitializers), __runInitializers(this, _has_more_initializers, void 0));
                this.limit = (__runInitializers(this, _has_more_extraInitializers), __runInitializers(this, _limit_initializers, void 0));
                __runInitializers(this, _limit_extraInitializers);
            }
            return PaginationMetaDto;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _next_cursor_decorators = [(0, swagger_1.ApiPropertyOptional)({
                    description: 'Opaque cursor to fetch the next page. Null if no more results.',
                    example: 'eyJwayI6IjIwMjYtMDEtMDFUMDA6MDA6MDAuMDAwWiIsImlkIjoiMTIzNDU2NzgtYWJjZC0xMjM0LTEyMzQtMTIzNDU2Nzg5MGFiIn0',
                    nullable: true,
                })];
            _has_more_decorators = [(0, swagger_1.ApiProperty)({
                    description: 'Whether there are more results beyond this page',
                    example: true,
                })];
            _limit_decorators = [(0, swagger_1.ApiProperty)({
                    description: 'The limit used for this page',
                    example: 20,
                })];
            __esDecorate(null, null, _next_cursor_decorators, { kind: "field", name: "next_cursor", static: false, private: false, access: { has: function (obj) { return "next_cursor" in obj; }, get: function (obj) { return obj.next_cursor; }, set: function (obj, value) { obj.next_cursor = value; } }, metadata: _metadata }, _next_cursor_initializers, _next_cursor_extraInitializers);
            __esDecorate(null, null, _has_more_decorators, { kind: "field", name: "has_more", static: false, private: false, access: { has: function (obj) { return "has_more" in obj; }, get: function (obj) { return obj.has_more; }, set: function (obj, value) { obj.has_more = value; } }, metadata: _metadata }, _has_more_initializers, _has_more_extraInitializers);
            __esDecorate(null, null, _limit_decorators, { kind: "field", name: "limit", static: false, private: false, access: { has: function (obj) { return "limit" in obj; }, get: function (obj) { return obj.limit; }, set: function (obj, value) { obj.limit = value; } }, metadata: _metadata }, _limit_initializers, _limit_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.PaginationMetaDto = PaginationMetaDto;
/**
 * Helper to build a standard paginated response envelope.
 */
function paginatedResponse(data, nextCursor, hasMore, limit) {
    var pagination = new PaginationMetaDto();
    pagination.next_cursor = nextCursor;
    pagination.has_more = hasMore;
    pagination.limit = limit;
    return { data: data, pagination: pagination };
}
