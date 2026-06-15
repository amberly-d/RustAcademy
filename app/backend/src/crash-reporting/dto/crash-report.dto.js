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
exports.CrashReportDto = void 0;
var swagger_1 = require("@nestjs/swagger");
/**
 * DTO for crash report response
 */
var CrashReportDto = function () {
    var _a;
    var _id_decorators;
    var _id_initializers = [];
    var _id_extraInitializers = [];
    var _userId_decorators;
    var _userId_initializers = [];
    var _userId_extraInitializers = [];
    var _error_decorators;
    var _error_initializers = [];
    var _error_extraInitializers = [];
    var _context_decorators;
    var _context_initializers = [];
    var _context_extraInitializers = [];
    var _logLines_decorators;
    var _logLines_initializers = [];
    var _logLines_extraInitializers = [];
    var _timestamp_decorators;
    var _timestamp_initializers = [];
    var _timestamp_extraInitializers = [];
    var _createdAt_decorators;
    var _createdAt_initializers = [];
    var _createdAt_extraInitializers = [];
    return _a = /** @class */ (function () {
            function CrashReportDto() {
                this.id = __runInitializers(this, _id_initializers, void 0);
                this.userId = (__runInitializers(this, _id_extraInitializers), __runInitializers(this, _userId_initializers, void 0));
                this.error = (__runInitializers(this, _userId_extraInitializers), __runInitializers(this, _error_initializers, void 0));
                this.context = (__runInitializers(this, _error_extraInitializers), __runInitializers(this, _context_initializers, void 0));
                this.logLines = (__runInitializers(this, _context_extraInitializers), __runInitializers(this, _logLines_initializers, void 0));
                this.timestamp = (__runInitializers(this, _logLines_extraInitializers), __runInitializers(this, _timestamp_initializers, void 0));
                this.createdAt = (__runInitializers(this, _timestamp_extraInitializers), __runInitializers(this, _createdAt_initializers, void 0));
                __runInitializers(this, _createdAt_extraInitializers);
            }
            return CrashReportDto;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _id_decorators = [(0, swagger_1.ApiProperty)({
                    description: 'Crash report ID',
                    example: 'report-123',
                })];
            _userId_decorators = [(0, swagger_1.ApiProperty)({
                    description: 'User ID (optional)',
                    example: 'user-123',
                    required: false,
                })];
            _error_decorators = [(0, swagger_1.ApiProperty)({
                    description: 'Redacted error information',
                    example: {
                        name: 'Error',
                        message: 'Connection failed',
                        stack: 'Error: Connection failed\n  at ...',
                    },
                })];
            _context_decorators = [(0, swagger_1.ApiProperty)({
                    description: 'Redacted context information',
                    example: { route: '/api/payments', method: 'POST' },
                    required: false,
                })];
            _logLines_decorators = [(0, swagger_1.ApiProperty)({
                    description: 'Redacted log lines',
                    example: ['[INFO] Request received', '[ERROR] Connection failed'],
                    type: [String],
                })];
            _timestamp_decorators = [(0, swagger_1.ApiProperty)({
                    description: 'When the crash occurred',
                    example: '2026-05-26T10:00:00Z',
                })];
            _createdAt_decorators = [(0, swagger_1.ApiProperty)({
                    description: 'When the report was created',
                    example: '2026-05-26T10:00:01Z',
                })];
            __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: function (obj) { return "id" in obj; }, get: function (obj) { return obj.id; }, set: function (obj, value) { obj.id = value; } }, metadata: _metadata }, _id_initializers, _id_extraInitializers);
            __esDecorate(null, null, _userId_decorators, { kind: "field", name: "userId", static: false, private: false, access: { has: function (obj) { return "userId" in obj; }, get: function (obj) { return obj.userId; }, set: function (obj, value) { obj.userId = value; } }, metadata: _metadata }, _userId_initializers, _userId_extraInitializers);
            __esDecorate(null, null, _error_decorators, { kind: "field", name: "error", static: false, private: false, access: { has: function (obj) { return "error" in obj; }, get: function (obj) { return obj.error; }, set: function (obj, value) { obj.error = value; } }, metadata: _metadata }, _error_initializers, _error_extraInitializers);
            __esDecorate(null, null, _context_decorators, { kind: "field", name: "context", static: false, private: false, access: { has: function (obj) { return "context" in obj; }, get: function (obj) { return obj.context; }, set: function (obj, value) { obj.context = value; } }, metadata: _metadata }, _context_initializers, _context_extraInitializers);
            __esDecorate(null, null, _logLines_decorators, { kind: "field", name: "logLines", static: false, private: false, access: { has: function (obj) { return "logLines" in obj; }, get: function (obj) { return obj.logLines; }, set: function (obj, value) { obj.logLines = value; } }, metadata: _metadata }, _logLines_initializers, _logLines_extraInitializers);
            __esDecorate(null, null, _timestamp_decorators, { kind: "field", name: "timestamp", static: false, private: false, access: { has: function (obj) { return "timestamp" in obj; }, get: function (obj) { return obj.timestamp; }, set: function (obj, value) { obj.timestamp = value; } }, metadata: _metadata }, _timestamp_initializers, _timestamp_extraInitializers);
            __esDecorate(null, null, _createdAt_decorators, { kind: "field", name: "createdAt", static: false, private: false, access: { has: function (obj) { return "createdAt" in obj; }, get: function (obj) { return obj.createdAt; }, set: function (obj, value) { obj.createdAt = value; } }, metadata: _metadata }, _createdAt_initializers, _createdAt_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.CrashReportDto = CrashReportDto;
