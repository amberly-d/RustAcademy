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
exports.InitiateRefundDto = void 0;
var swagger_1 = require("@nestjs/swagger");
var InitiateRefundDto = function () {
    var _a;
    var _entityType_decorators;
    var _entityType_initializers = [];
    var _entityType_extraInitializers = [];
    var _entityId_decorators;
    var _entityId_initializers = [];
    var _entityId_extraInitializers = [];
    var _idempotencyKey_decorators;
    var _idempotencyKey_initializers = [];
    var _idempotencyKey_extraInitializers = [];
    var _reasonCode_decorators;
    var _reasonCode_initializers = [];
    var _reasonCode_extraInitializers = [];
    var _notes_decorators;
    var _notes_initializers = [];
    var _notes_extraInitializers = [];
    return _a = /** @class */ (function () {
            function InitiateRefundDto() {
                this.entityType = __runInitializers(this, _entityType_initializers, void 0);
                this.entityId = (__runInitializers(this, _entityType_extraInitializers), __runInitializers(this, _entityId_initializers, void 0));
                this.idempotencyKey = (__runInitializers(this, _entityId_extraInitializers), __runInitializers(this, _idempotencyKey_initializers, void 0));
                this.reasonCode = (__runInitializers(this, _idempotencyKey_extraInitializers), __runInitializers(this, _reasonCode_initializers, void 0));
                this.notes = (__runInitializers(this, _reasonCode_extraInitializers), __runInitializers(this, _notes_initializers, void 0));
                __runInitializers(this, _notes_extraInitializers);
            }
            return InitiateRefundDto;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _entityType_decorators = [(0, swagger_1.ApiProperty)({ enum: ['payment', 'escrow', 'link'] })];
            _entityId_decorators = [(0, swagger_1.ApiProperty)()];
            _idempotencyKey_decorators = [(0, swagger_1.ApiProperty)()];
            _reasonCode_decorators = [(0, swagger_1.ApiProperty)({ enum: ['DUPLICATE', 'FRAUD', 'CUSTOMER_REQUEST', 'TECHNICAL_ERROR'] })];
            _notes_decorators = [(0, swagger_1.ApiPropertyOptional)()];
            __esDecorate(null, null, _entityType_decorators, { kind: "field", name: "entityType", static: false, private: false, access: { has: function (obj) { return "entityType" in obj; }, get: function (obj) { return obj.entityType; }, set: function (obj, value) { obj.entityType = value; } }, metadata: _metadata }, _entityType_initializers, _entityType_extraInitializers);
            __esDecorate(null, null, _entityId_decorators, { kind: "field", name: "entityId", static: false, private: false, access: { has: function (obj) { return "entityId" in obj; }, get: function (obj) { return obj.entityId; }, set: function (obj, value) { obj.entityId = value; } }, metadata: _metadata }, _entityId_initializers, _entityId_extraInitializers);
            __esDecorate(null, null, _idempotencyKey_decorators, { kind: "field", name: "idempotencyKey", static: false, private: false, access: { has: function (obj) { return "idempotencyKey" in obj; }, get: function (obj) { return obj.idempotencyKey; }, set: function (obj, value) { obj.idempotencyKey = value; } }, metadata: _metadata }, _idempotencyKey_initializers, _idempotencyKey_extraInitializers);
            __esDecorate(null, null, _reasonCode_decorators, { kind: "field", name: "reasonCode", static: false, private: false, access: { has: function (obj) { return "reasonCode" in obj; }, get: function (obj) { return obj.reasonCode; }, set: function (obj, value) { obj.reasonCode = value; } }, metadata: _metadata }, _reasonCode_initializers, _reasonCode_extraInitializers);
            __esDecorate(null, null, _notes_decorators, { kind: "field", name: "notes", static: false, private: false, access: { has: function (obj) { return "notes" in obj; }, get: function (obj) { return obj.notes; }, set: function (obj, value) { obj.notes = value; } }, metadata: _metadata }, _notes_initializers, _notes_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.InitiateRefundDto = InitiateRefundDto;
