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
exports.SearchUsernamesResponseDto = void 0;
var swagger_1 = require("@nestjs/swagger");
var public_profile_dto_1 = require("./public-profile.dto");
/**
 * DTO for search usernames response
 */
var SearchUsernamesResponseDto = function () {
    var _a;
    var _profiles_decorators;
    var _profiles_initializers = [];
    var _profiles_extraInitializers = [];
    var _total_decorators;
    var _total_initializers = [];
    var _total_extraInitializers = [];
    var _next_cursor_decorators;
    var _next_cursor_initializers = [];
    var _next_cursor_extraInitializers = [];
    var _has_more_decorators;
    var _has_more_initializers = [];
    var _has_more_extraInitializers = [];
    return _a = /** @class */ (function () {
            function SearchUsernamesResponseDto() {
                this.profiles = __runInitializers(this, _profiles_initializers, void 0);
                this.total = (__runInitializers(this, _profiles_extraInitializers), __runInitializers(this, _total_initializers, void 0));
                this.next_cursor = (__runInitializers(this, _total_extraInitializers), __runInitializers(this, _next_cursor_initializers, void 0));
                this.has_more = (__runInitializers(this, _next_cursor_extraInitializers), __runInitializers(this, _has_more_initializers, void 0));
                __runInitializers(this, _has_more_extraInitializers);
            }
            return SearchUsernamesResponseDto;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _profiles_decorators = [(0, swagger_1.ApiProperty)({
                    description: 'List of public profiles matching the search query',
                    type: [public_profile_dto_1.PublicProfileDto],
                })];
            _total_decorators = [(0, swagger_1.ApiProperty)({
                    description: 'Total number of matching results',
                    example: 42,
                })];
            _next_cursor_decorators = [(0, swagger_1.ApiPropertyOptional)({
                    description: 'Opaque cursor to fetch the next page',
                    nullable: true,
                })];
            _has_more_decorators = [(0, swagger_1.ApiProperty)({
                    description: 'Whether more results exist beyond this page',
                })];
            __esDecorate(null, null, _profiles_decorators, { kind: "field", name: "profiles", static: false, private: false, access: { has: function (obj) { return "profiles" in obj; }, get: function (obj) { return obj.profiles; }, set: function (obj, value) { obj.profiles = value; } }, metadata: _metadata }, _profiles_initializers, _profiles_extraInitializers);
            __esDecorate(null, null, _total_decorators, { kind: "field", name: "total", static: false, private: false, access: { has: function (obj) { return "total" in obj; }, get: function (obj) { return obj.total; }, set: function (obj, value) { obj.total = value; } }, metadata: _metadata }, _total_initializers, _total_extraInitializers);
            __esDecorate(null, null, _next_cursor_decorators, { kind: "field", name: "next_cursor", static: false, private: false, access: { has: function (obj) { return "next_cursor" in obj; }, get: function (obj) { return obj.next_cursor; }, set: function (obj, value) { obj.next_cursor = value; } }, metadata: _metadata }, _next_cursor_initializers, _next_cursor_extraInitializers);
            __esDecorate(null, null, _has_more_decorators, { kind: "field", name: "has_more", static: false, private: false, access: { has: function (obj) { return "has_more" in obj; }, get: function (obj) { return obj.has_more; }, set: function (obj, value) { obj.has_more = value; } }, metadata: _metadata }, _has_more_initializers, _has_more_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.SearchUsernamesResponseDto = SearchUsernamesResponseDto;
