"use strict";
/**
 * Request Export DTO
 *
 * Data transfer object for export request endpoint.
 */
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
exports.RequestExportDto = void 0;
var class_validator_1 = require("class-validator");
var swagger_1 = require("@nestjs/swagger");
/**
 * Request Export DTO
 *
 * Defines the structure for export requests.
 */
var RequestExportDto = function () {
    var _a;
    var _userId_decorators;
    var _userId_initializers = [];
    var _userId_extraInitializers = [];
    var _exportType_decorators;
    var _exportType_initializers = [];
    var _exportType_extraInitializers = [];
    var _filters_decorators;
    var _filters_initializers = [];
    var _filters_extraInitializers = [];
    var _format_decorators;
    var _format_initializers = [];
    var _format_extraInitializers = [];
    var _deliveryMethod_decorators;
    var _deliveryMethod_initializers = [];
    var _deliveryMethod_extraInitializers = [];
    return _a = /** @class */ (function () {
            function RequestExportDto() {
                this.userId = __runInitializers(this, _userId_initializers, void 0);
                this.exportType = (__runInitializers(this, _userId_extraInitializers), __runInitializers(this, _exportType_initializers, void 0));
                this.filters = (__runInitializers(this, _exportType_extraInitializers), __runInitializers(this, _filters_initializers, void 0));
                this.format = (__runInitializers(this, _filters_extraInitializers), __runInitializers(this, _format_initializers, void 0));
                this.deliveryMethod = (__runInitializers(this, _format_extraInitializers), __runInitializers(this, _deliveryMethod_initializers, void 0));
                __runInitializers(this, _deliveryMethod_extraInitializers);
            }
            return RequestExportDto;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _userId_decorators = [(0, swagger_1.ApiProperty)({
                    description: 'User ID requesting the export',
                    example: '123e4567-e89b-12d3-a456-426614174000',
                }), (0, class_validator_1.IsString)()];
            _exportType_decorators = [(0, swagger_1.ApiProperty)({
                    description: 'Type of data to export',
                    enum: ['transactions', 'links', 'payments'],
                    example: 'transactions',
                }), (0, class_validator_1.IsEnum)(['transactions', 'links', 'payments'])];
            _filters_decorators = [(0, swagger_1.ApiProperty)({
                    description: 'Filters to apply to the export query',
                    example: { status: 'completed', startDate: '2024-01-01' },
                    required: false,
                }), (0, class_validator_1.IsObject)(), (0, class_validator_1.IsOptional)()];
            _format_decorators = [(0, swagger_1.ApiProperty)({
                    description: 'Output format for the export',
                    enum: ['csv', 'json'],
                    example: 'csv',
                }), (0, class_validator_1.IsEnum)(['csv', 'json'])];
            _deliveryMethod_decorators = [(0, swagger_1.ApiProperty)({
                    description: 'How to deliver the export',
                    enum: ['webhook', 'email', 'download'],
                    example: 'download',
                }), (0, class_validator_1.IsEnum)(['webhook', 'email', 'download'])];
            __esDecorate(null, null, _userId_decorators, { kind: "field", name: "userId", static: false, private: false, access: { has: function (obj) { return "userId" in obj; }, get: function (obj) { return obj.userId; }, set: function (obj, value) { obj.userId = value; } }, metadata: _metadata }, _userId_initializers, _userId_extraInitializers);
            __esDecorate(null, null, _exportType_decorators, { kind: "field", name: "exportType", static: false, private: false, access: { has: function (obj) { return "exportType" in obj; }, get: function (obj) { return obj.exportType; }, set: function (obj, value) { obj.exportType = value; } }, metadata: _metadata }, _exportType_initializers, _exportType_extraInitializers);
            __esDecorate(null, null, _filters_decorators, { kind: "field", name: "filters", static: false, private: false, access: { has: function (obj) { return "filters" in obj; }, get: function (obj) { return obj.filters; }, set: function (obj, value) { obj.filters = value; } }, metadata: _metadata }, _filters_initializers, _filters_extraInitializers);
            __esDecorate(null, null, _format_decorators, { kind: "field", name: "format", static: false, private: false, access: { has: function (obj) { return "format" in obj; }, get: function (obj) { return obj.format; }, set: function (obj, value) { obj.format = value; } }, metadata: _metadata }, _format_initializers, _format_extraInitializers);
            __esDecorate(null, null, _deliveryMethod_decorators, { kind: "field", name: "deliveryMethod", static: false, private: false, access: { has: function (obj) { return "deliveryMethod" in obj; }, get: function (obj) { return obj.deliveryMethod; }, set: function (obj, value) { obj.deliveryMethod = value; } }, metadata: _metadata }, _deliveryMethod_initializers, _deliveryMethod_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.RequestExportDto = RequestExportDto;
