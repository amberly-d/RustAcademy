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
exports.PublicStatusResponseDto = exports.PublicStatusComponentDto = void 0;
var swagger_1 = require("@nestjs/swagger");
var PublicStatusComponentDto = function () {
    var _a;
    var _name_decorators;
    var _name_initializers = [];
    var _name_extraInitializers = [];
    var _status_decorators;
    var _status_initializers = [];
    var _status_extraInitializers = [];
    var _detail_decorators;
    var _detail_initializers = [];
    var _detail_extraInitializers = [];
    return _a = /** @class */ (function () {
            function PublicStatusComponentDto() {
                this.name = __runInitializers(this, _name_initializers, void 0);
                this.status = (__runInitializers(this, _name_extraInitializers), __runInitializers(this, _status_initializers, void 0));
                this.detail = (__runInitializers(this, _status_extraInitializers), __runInitializers(this, _detail_initializers, void 0));
                __runInitializers(this, _detail_extraInitializers);
            }
            return PublicStatusComponentDto;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _name_decorators = [(0, swagger_1.ApiProperty)({ example: "horizon" })];
            _status_decorators = [(0, swagger_1.ApiProperty)({
                    enum: ["operational", "degraded", "down"],
                    example: "operational",
                })];
            _detail_decorators = [(0, swagger_1.ApiProperty)({ example: "Network: testnet", required: false })];
            __esDecorate(null, null, _name_decorators, { kind: "field", name: "name", static: false, private: false, access: { has: function (obj) { return "name" in obj; }, get: function (obj) { return obj.name; }, set: function (obj, value) { obj.name = value; } }, metadata: _metadata }, _name_initializers, _name_extraInitializers);
            __esDecorate(null, null, _status_decorators, { kind: "field", name: "status", static: false, private: false, access: { has: function (obj) { return "status" in obj; }, get: function (obj) { return obj.status; }, set: function (obj, value) { obj.status = value; } }, metadata: _metadata }, _status_initializers, _status_extraInitializers);
            __esDecorate(null, null, _detail_decorators, { kind: "field", name: "detail", static: false, private: false, access: { has: function (obj) { return "detail" in obj; }, get: function (obj) { return obj.detail; }, set: function (obj, value) { obj.detail = value; } }, metadata: _metadata }, _detail_initializers, _detail_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.PublicStatusComponentDto = PublicStatusComponentDto;
var PublicStatusResponseDto = function () {
    var _a;
    var _status_decorators;
    var _status_initializers = [];
    var _status_extraInitializers = [];
    var _network_decorators;
    var _network_initializers = [];
    var _network_extraInitializers = [];
    var _lastLedger_decorators;
    var _lastLedger_initializers = [];
    var _lastLedger_extraInitializers = [];
    var _timestamp_decorators;
    var _timestamp_initializers = [];
    var _timestamp_extraInitializers = [];
    var _components_decorators;
    var _components_initializers = [];
    var _components_extraInitializers = [];
    var _version_decorators;
    var _version_initializers = [];
    var _version_extraInitializers = [];
    return _a = /** @class */ (function () {
            function PublicStatusResponseDto() {
                this.status = __runInitializers(this, _status_initializers, void 0);
                this.network = (__runInitializers(this, _status_extraInitializers), __runInitializers(this, _network_initializers, void 0));
                this.lastLedger = (__runInitializers(this, _network_extraInitializers), __runInitializers(this, _lastLedger_initializers, void 0));
                this.timestamp = (__runInitializers(this, _lastLedger_extraInitializers), __runInitializers(this, _timestamp_initializers, void 0));
                this.components = (__runInitializers(this, _timestamp_extraInitializers), __runInitializers(this, _components_initializers, void 0));
                this.version = (__runInitializers(this, _components_extraInitializers), __runInitializers(this, _version_initializers, void 0));
                __runInitializers(this, _version_extraInitializers);
            }
            return PublicStatusResponseDto;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _status_decorators = [(0, swagger_1.ApiProperty)({
                    example: "operational",
                    description: "Overall platform status",
                })];
            _network_decorators = [(0, swagger_1.ApiProperty)({ example: "testnet", description: "Stellar network name" })];
            _lastLedger_decorators = [(0, swagger_1.ApiProperty)({
                    example: 12345678,
                    description: "Last processed ledger sequence",
                })];
            _timestamp_decorators = [(0, swagger_1.ApiProperty)({ example: "2024-01-01T00:00:00.000Z" })];
            _components_decorators = [(0, swagger_1.ApiProperty)({ type: [PublicStatusComponentDto] })];
            _version_decorators = [(0, swagger_1.ApiProperty)({ example: "0.1.0" })];
            __esDecorate(null, null, _status_decorators, { kind: "field", name: "status", static: false, private: false, access: { has: function (obj) { return "status" in obj; }, get: function (obj) { return obj.status; }, set: function (obj, value) { obj.status = value; } }, metadata: _metadata }, _status_initializers, _status_extraInitializers);
            __esDecorate(null, null, _network_decorators, { kind: "field", name: "network", static: false, private: false, access: { has: function (obj) { return "network" in obj; }, get: function (obj) { return obj.network; }, set: function (obj, value) { obj.network = value; } }, metadata: _metadata }, _network_initializers, _network_extraInitializers);
            __esDecorate(null, null, _lastLedger_decorators, { kind: "field", name: "lastLedger", static: false, private: false, access: { has: function (obj) { return "lastLedger" in obj; }, get: function (obj) { return obj.lastLedger; }, set: function (obj, value) { obj.lastLedger = value; } }, metadata: _metadata }, _lastLedger_initializers, _lastLedger_extraInitializers);
            __esDecorate(null, null, _timestamp_decorators, { kind: "field", name: "timestamp", static: false, private: false, access: { has: function (obj) { return "timestamp" in obj; }, get: function (obj) { return obj.timestamp; }, set: function (obj, value) { obj.timestamp = value; } }, metadata: _metadata }, _timestamp_initializers, _timestamp_extraInitializers);
            __esDecorate(null, null, _components_decorators, { kind: "field", name: "components", static: false, private: false, access: { has: function (obj) { return "components" in obj; }, get: function (obj) { return obj.components; }, set: function (obj, value) { obj.components = value; } }, metadata: _metadata }, _components_initializers, _components_extraInitializers);
            __esDecorate(null, null, _version_decorators, { kind: "field", name: "version", static: false, private: false, access: { has: function (obj) { return "version" in obj; }, get: function (obj) { return obj.version; }, set: function (obj, value) { obj.version = value; } }, metadata: _metadata }, _version_initializers, _version_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.PublicStatusResponseDto = PublicStatusResponseDto;
