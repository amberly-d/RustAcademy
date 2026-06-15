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
exports.LogExportDto = void 0;
var swagger_1 = require("@nestjs/swagger");
/**
 * DTO for log export response
 */
var LogExportDto = function () {
    var _a;
    var _userId_decorators;
    var _userId_initializers = [];
    var _userId_extraInitializers = [];
    var _exportedAt_decorators;
    var _exportedAt_initializers = [];
    var _exportedAt_extraInitializers = [];
    var _currentLogs_decorators;
    var _currentLogs_initializers = [];
    var _currentLogs_extraInitializers = [];
    var _crashReports_decorators;
    var _crashReports_initializers = [];
    var _crashReports_extraInitializers = [];
    return _a = /** @class */ (function () {
            function LogExportDto() {
                this.userId = __runInitializers(this, _userId_initializers, void 0);
                this.exportedAt = (__runInitializers(this, _userId_extraInitializers), __runInitializers(this, _exportedAt_initializers, void 0));
                this.currentLogs = (__runInitializers(this, _exportedAt_extraInitializers), __runInitializers(this, _currentLogs_initializers, void 0));
                this.crashReports = (__runInitializers(this, _currentLogs_extraInitializers), __runInitializers(this, _crashReports_initializers, void 0));
                __runInitializers(this, _crashReports_extraInitializers);
            }
            return LogExportDto;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _userId_decorators = [(0, swagger_1.ApiProperty)({
                    description: 'User ID',
                    example: 'user-123',
                })];
            _exportedAt_decorators = [(0, swagger_1.ApiProperty)({
                    description: 'When the logs were exported',
                    example: '2026-05-26T10:00:00Z',
                })];
            _currentLogs_decorators = [(0, swagger_1.ApiProperty)({
                    description: 'Current redacted log lines',
                    example: ['[INFO] Request received', '[INFO] Processing payment'],
                    type: [String],
                })];
            _crashReports_decorators = [(0, swagger_1.ApiProperty)({
                    description: 'Recent crash reports',
                    type: 'array',
                    items: {
                        type: 'object',
                        properties: {
                            id: { type: 'string', example: 'report-123' },
                            timestamp: { type: 'string', example: '2026-05-26T10:00:00Z' },
                            error: {
                                type: 'object',
                                properties: {
                                    name: { type: 'string', example: 'Error' },
                                    message: { type: 'string', example: 'Connection failed' },
                                    stack: { type: 'string', example: 'Error: Connection failed\n  at ...' },
                                },
                            },
                            context: { type: 'object', example: { route: '/api/payments' } },
                            logLines: { type: 'array', items: { type: 'string' } },
                        },
                    },
                })];
            __esDecorate(null, null, _userId_decorators, { kind: "field", name: "userId", static: false, private: false, access: { has: function (obj) { return "userId" in obj; }, get: function (obj) { return obj.userId; }, set: function (obj, value) { obj.userId = value; } }, metadata: _metadata }, _userId_initializers, _userId_extraInitializers);
            __esDecorate(null, null, _exportedAt_decorators, { kind: "field", name: "exportedAt", static: false, private: false, access: { has: function (obj) { return "exportedAt" in obj; }, get: function (obj) { return obj.exportedAt; }, set: function (obj, value) { obj.exportedAt = value; } }, metadata: _metadata }, _exportedAt_initializers, _exportedAt_extraInitializers);
            __esDecorate(null, null, _currentLogs_decorators, { kind: "field", name: "currentLogs", static: false, private: false, access: { has: function (obj) { return "currentLogs" in obj; }, get: function (obj) { return obj.currentLogs; }, set: function (obj, value) { obj.currentLogs = value; } }, metadata: _metadata }, _currentLogs_initializers, _currentLogs_extraInitializers);
            __esDecorate(null, null, _crashReports_decorators, { kind: "field", name: "crashReports", static: false, private: false, access: { has: function (obj) { return "crashReports" in obj; }, get: function (obj) { return obj.crashReports; }, set: function (obj, value) { obj.crashReports = value; } }, metadata: _metadata }, _crashReports_initializers, _crashReports_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.LogExportDto = LogExportDto;
