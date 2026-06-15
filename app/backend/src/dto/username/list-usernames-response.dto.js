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
exports.ListUsernamesResponseDto = exports.UsernameItemDto = void 0;
var swagger_1 = require("@nestjs/swagger");
var UsernameItemDto = function () {
    var _a;
    var _id_decorators;
    var _id_initializers = [];
    var _id_extraInitializers = [];
    var _username_decorators;
    var _username_initializers = [];
    var _username_extraInitializers = [];
    var _public_key_decorators;
    var _public_key_initializers = [];
    var _public_key_extraInitializers = [];
    var _created_at_decorators;
    var _created_at_initializers = [];
    var _created_at_extraInitializers = [];
    return _a = /** @class */ (function () {
            function UsernameItemDto() {
                this.id = __runInitializers(this, _id_initializers, void 0);
                this.username = (__runInitializers(this, _id_extraInitializers), __runInitializers(this, _username_initializers, void 0));
                this.public_key = (__runInitializers(this, _username_extraInitializers), __runInitializers(this, _public_key_initializers, void 0));
                this.created_at = (__runInitializers(this, _public_key_extraInitializers), __runInitializers(this, _created_at_initializers, void 0));
                __runInitializers(this, _created_at_extraInitializers);
            }
            return UsernameItemDto;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _id_decorators = [(0, swagger_1.ApiProperty)({
                    description: "Unique record id",
                    example: "550e8400-e29b-41d4-a716-446655440000",
                })];
            _username_decorators = [(0, swagger_1.ApiProperty)({
                    description: "Username (normalized lowercase)",
                    example: "alice_123",
                })];
            _public_key_decorators = [(0, swagger_1.ApiProperty)({
                    description: "Stellar public key of the owner",
                    example: "GBXGQ55JMQ4L2B6E7S8Y9Z0A1B2C3D4E5F6G7H8I7YWR",
                })];
            _created_at_decorators = [(0, swagger_1.ApiProperty)({
                    description: "ISO 8601 creation time",
                    example: "2026-02-21T08:00:00Z",
                })];
            __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: function (obj) { return "id" in obj; }, get: function (obj) { return obj.id; }, set: function (obj, value) { obj.id = value; } }, metadata: _metadata }, _id_initializers, _id_extraInitializers);
            __esDecorate(null, null, _username_decorators, { kind: "field", name: "username", static: false, private: false, access: { has: function (obj) { return "username" in obj; }, get: function (obj) { return obj.username; }, set: function (obj, value) { obj.username = value; } }, metadata: _metadata }, _username_initializers, _username_extraInitializers);
            __esDecorate(null, null, _public_key_decorators, { kind: "field", name: "public_key", static: false, private: false, access: { has: function (obj) { return "public_key" in obj; }, get: function (obj) { return obj.public_key; }, set: function (obj, value) { obj.public_key = value; } }, metadata: _metadata }, _public_key_initializers, _public_key_extraInitializers);
            __esDecorate(null, null, _created_at_decorators, { kind: "field", name: "created_at", static: false, private: false, access: { has: function (obj) { return "created_at" in obj; }, get: function (obj) { return obj.created_at; }, set: function (obj, value) { obj.created_at = value; } }, metadata: _metadata }, _created_at_initializers, _created_at_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.UsernameItemDto = UsernameItemDto;
/**
 * Response DTO for listing usernames by wallet.
 */
var ListUsernamesResponseDto = function () {
    var _a;
    var _usernames_decorators;
    var _usernames_initializers = [];
    var _usernames_extraInitializers = [];
    return _a = /** @class */ (function () {
            function ListUsernamesResponseDto() {
                this.usernames = __runInitializers(this, _usernames_initializers, void 0);
                __runInitializers(this, _usernames_extraInitializers);
            }
            return ListUsernamesResponseDto;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _usernames_decorators = [(0, swagger_1.ApiProperty)({
                    description: "Usernames registered for the given wallet",
                    type: [UsernameItemDto],
                })];
            __esDecorate(null, null, _usernames_decorators, { kind: "field", name: "usernames", static: false, private: false, access: { has: function (obj) { return "usernames" in obj; }, get: function (obj) { return obj.usernames; }, set: function (obj, value) { obj.usernames = value; } }, metadata: _metadata }, _usernames_initializers, _usernames_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.ListUsernamesResponseDto = ListUsernamesResponseDto;
