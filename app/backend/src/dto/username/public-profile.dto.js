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
exports.PublicProfileDto = void 0;
var swagger_1 = require("@nestjs/swagger");
/**
 * DTO representing a public user profile
 */
var PublicProfileDto = function () {
    var _a;
    var _id_decorators;
    var _id_initializers = [];
    var _id_extraInitializers = [];
    var _username_decorators;
    var _username_initializers = [];
    var _username_extraInitializers = [];
    var _publicKey_decorators;
    var _publicKey_initializers = [];
    var _publicKey_extraInitializers = [];
    var _similarityScore_decorators;
    var _similarityScore_initializers = [];
    var _similarityScore_extraInitializers = [];
    var _transactionVolume_decorators;
    var _transactionVolume_initializers = [];
    var _transactionVolume_extraInitializers = [];
    var _transactionCount_decorators;
    var _transactionCount_initializers = [];
    var _transactionCount_extraInitializers = [];
    var _lastActiveAt_decorators;
    var _lastActiveAt_initializers = [];
    var _lastActiveAt_extraInitializers = [];
    var _createdAt_decorators;
    var _createdAt_initializers = [];
    var _createdAt_extraInitializers = [];
    return _a = /** @class */ (function () {
            function PublicProfileDto() {
                this.id = __runInitializers(this, _id_initializers, void 0);
                this.username = (__runInitializers(this, _id_extraInitializers), __runInitializers(this, _username_initializers, void 0));
                this.publicKey = (__runInitializers(this, _username_extraInitializers), __runInitializers(this, _publicKey_initializers, void 0));
                this.similarityScore = (__runInitializers(this, _publicKey_extraInitializers), __runInitializers(this, _similarityScore_initializers, void 0));
                this.transactionVolume = (__runInitializers(this, _similarityScore_extraInitializers), __runInitializers(this, _transactionVolume_initializers, void 0));
                this.transactionCount = (__runInitializers(this, _transactionVolume_extraInitializers), __runInitializers(this, _transactionCount_initializers, void 0));
                this.lastActiveAt = (__runInitializers(this, _transactionCount_extraInitializers), __runInitializers(this, _lastActiveAt_initializers, void 0));
                this.createdAt = (__runInitializers(this, _lastActiveAt_extraInitializers), __runInitializers(this, _createdAt_initializers, void 0));
                __runInitializers(this, _createdAt_extraInitializers);
            }
            return PublicProfileDto;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _id_decorators = [(0, swagger_1.ApiProperty)({
                    description: 'Unique identifier for the username',
                    example: '123e4567-e89b-12d3-a456-426614174000',
                })];
            _username_decorators = [(0, swagger_1.ApiProperty)({
                    description: 'Username (normalized, lowercase)',
                    example: 'alice',
                })];
            _publicKey_decorators = [(0, swagger_1.ApiProperty)({
                    description: 'Stellar public key of the profile owner',
                    example: 'GBXGQ55JMQ4L2B6E7S8Y9Z0A1B2C3D4E5F6G7H8I7YWR',
                })];
            _similarityScore_decorators = [(0, swagger_1.ApiProperty)({
                    description: 'Similarity score for search results (0-100)',
                    example: 95,
                    required: false,
                })];
            _transactionVolume_decorators = [(0, swagger_1.ApiProperty)({
                    description: 'Total transaction volume in the time period (for trending)',
                    example: 15000.50,
                    required: false,
                })];
            _transactionCount_decorators = [(0, swagger_1.ApiProperty)({
                    description: 'Number of transactions in the time period (for trending)',
                    example: 42,
                    required: false,
                })];
            _lastActiveAt_decorators = [(0, swagger_1.ApiProperty)({
                    description: 'Last activity timestamp',
                    example: '2025-03-27T10:30:00Z',
                })];
            _createdAt_decorators = [(0, swagger_1.ApiProperty)({
                    description: 'Username creation timestamp',
                    example: '2025-02-19T08:00:00Z',
                })];
            __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: function (obj) { return "id" in obj; }, get: function (obj) { return obj.id; }, set: function (obj, value) { obj.id = value; } }, metadata: _metadata }, _id_initializers, _id_extraInitializers);
            __esDecorate(null, null, _username_decorators, { kind: "field", name: "username", static: false, private: false, access: { has: function (obj) { return "username" in obj; }, get: function (obj) { return obj.username; }, set: function (obj, value) { obj.username = value; } }, metadata: _metadata }, _username_initializers, _username_extraInitializers);
            __esDecorate(null, null, _publicKey_decorators, { kind: "field", name: "publicKey", static: false, private: false, access: { has: function (obj) { return "publicKey" in obj; }, get: function (obj) { return obj.publicKey; }, set: function (obj, value) { obj.publicKey = value; } }, metadata: _metadata }, _publicKey_initializers, _publicKey_extraInitializers);
            __esDecorate(null, null, _similarityScore_decorators, { kind: "field", name: "similarityScore", static: false, private: false, access: { has: function (obj) { return "similarityScore" in obj; }, get: function (obj) { return obj.similarityScore; }, set: function (obj, value) { obj.similarityScore = value; } }, metadata: _metadata }, _similarityScore_initializers, _similarityScore_extraInitializers);
            __esDecorate(null, null, _transactionVolume_decorators, { kind: "field", name: "transactionVolume", static: false, private: false, access: { has: function (obj) { return "transactionVolume" in obj; }, get: function (obj) { return obj.transactionVolume; }, set: function (obj, value) { obj.transactionVolume = value; } }, metadata: _metadata }, _transactionVolume_initializers, _transactionVolume_extraInitializers);
            __esDecorate(null, null, _transactionCount_decorators, { kind: "field", name: "transactionCount", static: false, private: false, access: { has: function (obj) { return "transactionCount" in obj; }, get: function (obj) { return obj.transactionCount; }, set: function (obj, value) { obj.transactionCount = value; } }, metadata: _metadata }, _transactionCount_initializers, _transactionCount_extraInitializers);
            __esDecorate(null, null, _lastActiveAt_decorators, { kind: "field", name: "lastActiveAt", static: false, private: false, access: { has: function (obj) { return "lastActiveAt" in obj; }, get: function (obj) { return obj.lastActiveAt; }, set: function (obj, value) { obj.lastActiveAt = value; } }, metadata: _metadata }, _lastActiveAt_initializers, _lastActiveAt_extraInitializers);
            __esDecorate(null, null, _createdAt_decorators, { kind: "field", name: "createdAt", static: false, private: false, access: { has: function (obj) { return "createdAt" in obj; }, get: function (obj) { return obj.createdAt; }, set: function (obj, value) { obj.createdAt = value; } }, metadata: _metadata }, _createdAt_initializers, _createdAt_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.PublicProfileDto = PublicProfileDto;
