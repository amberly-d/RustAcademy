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
exports.TrendingCreatorsResponseDto = void 0;
var swagger_1 = require("@nestjs/swagger");
var public_profile_dto_1 = require("./public-profile.dto");
/**
 * DTO for trending creators response
 */
var TrendingCreatorsResponseDto = function () {
    var _a;
    var _creators_decorators;
    var _creators_initializers = [];
    var _creators_extraInitializers = [];
    var _timeWindowHours_decorators;
    var _timeWindowHours_initializers = [];
    var _timeWindowHours_extraInitializers = [];
    var _calculatedAt_decorators;
    var _calculatedAt_initializers = [];
    var _calculatedAt_extraInitializers = [];
    var _next_cursor_decorators;
    var _next_cursor_initializers = [];
    var _next_cursor_extraInitializers = [];
    var _has_more_decorators;
    var _has_more_initializers = [];
    var _has_more_extraInitializers = [];
    return _a = /** @class */ (function () {
            function TrendingCreatorsResponseDto() {
                this.creators = __runInitializers(this, _creators_initializers, void 0);
                this.timeWindowHours = (__runInitializers(this, _creators_extraInitializers), __runInitializers(this, _timeWindowHours_initializers, void 0));
                this.calculatedAt = (__runInitializers(this, _timeWindowHours_extraInitializers), __runInitializers(this, _calculatedAt_initializers, void 0));
                this.next_cursor = (__runInitializers(this, _calculatedAt_extraInitializers), __runInitializers(this, _next_cursor_initializers, void 0));
                this.has_more = (__runInitializers(this, _next_cursor_extraInitializers), __runInitializers(this, _has_more_initializers, void 0));
                __runInitializers(this, _has_more_extraInitializers);
            }
            return TrendingCreatorsResponseDto;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _creators_decorators = [(0, swagger_1.ApiProperty)({
                    description: 'List of trending creator profiles sorted by volume',
                    type: [public_profile_dto_1.PublicProfileDto],
                })];
            _timeWindowHours_decorators = [(0, swagger_1.ApiProperty)({
                    description: 'Time window used for trending calculation (hours)',
                    example: 24,
                })];
            _calculatedAt_decorators = [(0, swagger_1.ApiProperty)({
                    description: 'Timestamp when trending was calculated',
                    example: '2025-03-27T10:30:00Z',
                })];
            _next_cursor_decorators = [(0, swagger_1.ApiPropertyOptional)({
                    description: 'Opaque cursor to fetch the next page',
                    nullable: true,
                })];
            _has_more_decorators = [(0, swagger_1.ApiProperty)({
                    description: 'Whether more results exist beyond this page',
                })];
            __esDecorate(null, null, _creators_decorators, { kind: "field", name: "creators", static: false, private: false, access: { has: function (obj) { return "creators" in obj; }, get: function (obj) { return obj.creators; }, set: function (obj, value) { obj.creators = value; } }, metadata: _metadata }, _creators_initializers, _creators_extraInitializers);
            __esDecorate(null, null, _timeWindowHours_decorators, { kind: "field", name: "timeWindowHours", static: false, private: false, access: { has: function (obj) { return "timeWindowHours" in obj; }, get: function (obj) { return obj.timeWindowHours; }, set: function (obj, value) { obj.timeWindowHours = value; } }, metadata: _metadata }, _timeWindowHours_initializers, _timeWindowHours_extraInitializers);
            __esDecorate(null, null, _calculatedAt_decorators, { kind: "field", name: "calculatedAt", static: false, private: false, access: { has: function (obj) { return "calculatedAt" in obj; }, get: function (obj) { return obj.calculatedAt; }, set: function (obj, value) { obj.calculatedAt = value; } }, metadata: _metadata }, _calculatedAt_initializers, _calculatedAt_extraInitializers);
            __esDecorate(null, null, _next_cursor_decorators, { kind: "field", name: "next_cursor", static: false, private: false, access: { has: function (obj) { return "next_cursor" in obj; }, get: function (obj) { return obj.next_cursor; }, set: function (obj, value) { obj.next_cursor = value; } }, metadata: _metadata }, _next_cursor_initializers, _next_cursor_extraInitializers);
            __esDecorate(null, null, _has_more_decorators, { kind: "field", name: "has_more", static: false, private: false, access: { has: function (obj) { return "has_more" in obj; }, get: function (obj) { return obj.has_more; }, set: function (obj, value) { obj.has_more = value; } }, metadata: _metadata }, _has_more_initializers, _has_more_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.TrendingCreatorsResponseDto = TrendingCreatorsResponseDto;
