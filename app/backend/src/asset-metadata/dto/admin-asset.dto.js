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
exports.AdminVerifyAssetDto = void 0;
var swagger_1 = require("@nestjs/swagger");
var class_validator_1 = require("class-validator");
var AdminVerifyAssetDto = function () {
    var _a;
    var _code_decorators;
    var _code_initializers = [];
    var _code_extraInitializers = [];
    var _issuer_decorators;
    var _issuer_initializers = [];
    var _issuer_extraInitializers = [];
    var _type_decorators;
    var _type_initializers = [];
    var _type_extraInitializers = [];
    var _decimals_decorators;
    var _decimals_initializers = [];
    var _decimals_extraInitializers = [];
    var _iconUrl_decorators;
    var _iconUrl_initializers = [];
    var _iconUrl_extraInitializers = [];
    var _verified_decorators;
    var _verified_initializers = [];
    var _verified_extraInitializers = [];
    return _a = /** @class */ (function () {
            function AdminVerifyAssetDto() {
                this.code = __runInitializers(this, _code_initializers, void 0);
                this.issuer = (__runInitializers(this, _code_extraInitializers), __runInitializers(this, _issuer_initializers, void 0));
                this.type = (__runInitializers(this, _issuer_extraInitializers), __runInitializers(this, _type_initializers, void 0));
                this.decimals = (__runInitializers(this, _type_extraInitializers), __runInitializers(this, _decimals_initializers, void 0));
                this.iconUrl = (__runInitializers(this, _decimals_extraInitializers), __runInitializers(this, _iconUrl_initializers, void 0));
                this.verified = (__runInitializers(this, _iconUrl_extraInitializers), __runInitializers(this, _verified_initializers, void 0));
                __runInitializers(this, _verified_extraInitializers);
            }
            return AdminVerifyAssetDto;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _code_decorators = [(0, swagger_1.ApiProperty)({ description: "Asset code (e.g., USDC, XLM)", example: "USDC" }), (0, class_validator_1.IsString)()];
            _issuer_decorators = [(0, swagger_1.ApiPropertyOptional)({
                    description: "Asset issuer public key (null for native XLM)",
                    example: "GA5ZSEJYB37JRC5AVCIA5MOP4RHTM335X2KGX3IHOJAPP5RE34K4KZVN",
                }), (0, class_validator_1.IsOptional)(), (0, class_validator_1.IsString)()];
            _type_decorators = [(0, swagger_1.ApiPropertyOptional)({
                    description: "Asset type",
                    enum: ["native", "credit_alphanum4", "credit_alphanum12"],
                    default: "credit_alphanum4",
                }), (0, class_validator_1.IsOptional)(), (0, class_validator_1.IsEnum)(["native", "credit_alphanum4", "credit_alphanum12"])];
            _decimals_decorators = [(0, swagger_1.ApiPropertyOptional)({
                    description: "Number of decimal places (typically 7 for Stellar assets)",
                    default: 7,
                }), (0, class_validator_1.IsOptional)(), (0, class_validator_1.IsInt)(), (0, class_validator_1.Min)(0), (0, class_validator_1.Max)(14)];
            _iconUrl_decorators = [(0, swagger_1.ApiPropertyOptional)({
                    description: "URL to the asset icon image",
                    example: "https://example.com/icon.png",
                }), (0, class_validator_1.IsOptional)(), (0, class_validator_1.IsString)()];
            _verified_decorators = [(0, swagger_1.ApiProperty)({
                    description: "Whether the asset is marked as verified",
                    example: true,
                }), (0, class_validator_1.IsBoolean)()];
            __esDecorate(null, null, _code_decorators, { kind: "field", name: "code", static: false, private: false, access: { has: function (obj) { return "code" in obj; }, get: function (obj) { return obj.code; }, set: function (obj, value) { obj.code = value; } }, metadata: _metadata }, _code_initializers, _code_extraInitializers);
            __esDecorate(null, null, _issuer_decorators, { kind: "field", name: "issuer", static: false, private: false, access: { has: function (obj) { return "issuer" in obj; }, get: function (obj) { return obj.issuer; }, set: function (obj, value) { obj.issuer = value; } }, metadata: _metadata }, _issuer_initializers, _issuer_extraInitializers);
            __esDecorate(null, null, _type_decorators, { kind: "field", name: "type", static: false, private: false, access: { has: function (obj) { return "type" in obj; }, get: function (obj) { return obj.type; }, set: function (obj, value) { obj.type = value; } }, metadata: _metadata }, _type_initializers, _type_extraInitializers);
            __esDecorate(null, null, _decimals_decorators, { kind: "field", name: "decimals", static: false, private: false, access: { has: function (obj) { return "decimals" in obj; }, get: function (obj) { return obj.decimals; }, set: function (obj, value) { obj.decimals = value; } }, metadata: _metadata }, _decimals_initializers, _decimals_extraInitializers);
            __esDecorate(null, null, _iconUrl_decorators, { kind: "field", name: "iconUrl", static: false, private: false, access: { has: function (obj) { return "iconUrl" in obj; }, get: function (obj) { return obj.iconUrl; }, set: function (obj, value) { obj.iconUrl = value; } }, metadata: _metadata }, _iconUrl_initializers, _iconUrl_extraInitializers);
            __esDecorate(null, null, _verified_decorators, { kind: "field", name: "verified", static: false, private: false, access: { has: function (obj) { return "verified" in obj; }, get: function (obj) { return obj.verified; }, set: function (obj, value) { obj.verified = value; } }, metadata: _metadata }, _verified_initializers, _verified_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.AdminVerifyAssetDto = AdminVerifyAssetDto;
