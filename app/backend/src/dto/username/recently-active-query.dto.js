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
exports.RecentlyActiveQueryDto = void 0;
var swagger_1 = require("@nestjs/swagger");
var class_transformer_1 = require("class-transformer");
var class_validator_1 = require("class-validator");
/**
 * DTO for recently active users query parameters
 */
var RecentlyActiveQueryDto = function () {
    var _a;
    var _timeWindowHours_decorators;
    var _timeWindowHours_initializers = [];
    var _timeWindowHours_extraInitializers = [];
    var _limit_decorators;
    var _limit_initializers = [];
    var _limit_extraInitializers = [];
    var _cursor_decorators;
    var _cursor_initializers = [];
    var _cursor_extraInitializers = [];
    return _a = /** @class */ (function () {
            function RecentlyActiveQueryDto() {
                this.timeWindowHours = __runInitializers(this, _timeWindowHours_initializers, 24);
                this.limit = (__runInitializers(this, _timeWindowHours_extraInitializers), __runInitializers(this, _limit_initializers, 10));
                this.cursor = (__runInitializers(this, _limit_extraInitializers), __runInitializers(this, _cursor_initializers, void 0));
                __runInitializers(this, _cursor_extraInitializers);
            }
            return RecentlyActiveQueryDto;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _timeWindowHours_decorators = [(0, swagger_1.ApiProperty)({
                    description: 'Time window in hours to consider users as recently active',
                    example: 24,
                    required: false,
                    default: 24,
                }), (0, class_validator_1.IsInt)(), (0, class_validator_1.Min)(1), (0, class_validator_1.Max)(168), (0, class_transformer_1.Type)(function () { return Number; })];
            _limit_decorators = [(0, swagger_1.ApiProperty)({
                    description: 'Maximum number of recently active users to return',
                    example: 10,
                    required: false,
                    default: 10,
                }), (0, class_validator_1.IsInt)(), (0, class_validator_1.Min)(1), (0, class_validator_1.Max)(100), (0, class_transformer_1.Type)(function () { return Number; })];
            _cursor_decorators = [(0, swagger_1.ApiProperty)({
                    description: 'Opaque cursor for the next page of results',
                    required: false,
                }), (0, class_validator_1.IsOptional)(), (0, class_validator_1.IsString)()];
            __esDecorate(null, null, _timeWindowHours_decorators, { kind: "field", name: "timeWindowHours", static: false, private: false, access: { has: function (obj) { return "timeWindowHours" in obj; }, get: function (obj) { return obj.timeWindowHours; }, set: function (obj, value) { obj.timeWindowHours = value; } }, metadata: _metadata }, _timeWindowHours_initializers, _timeWindowHours_extraInitializers);
            __esDecorate(null, null, _limit_decorators, { kind: "field", name: "limit", static: false, private: false, access: { has: function (obj) { return "limit" in obj; }, get: function (obj) { return obj.limit; }, set: function (obj, value) { obj.limit = value; } }, metadata: _metadata }, _limit_initializers, _limit_extraInitializers);
            __esDecorate(null, null, _cursor_decorators, { kind: "field", name: "cursor", static: false, private: false, access: { has: function (obj) { return "cursor" in obj; }, get: function (obj) { return obj.cursor; }, set: function (obj, value) { obj.cursor = value; } }, metadata: _metadata }, _cursor_initializers, _cursor_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.RecentlyActiveQueryDto = RecentlyActiveQueryDto;
