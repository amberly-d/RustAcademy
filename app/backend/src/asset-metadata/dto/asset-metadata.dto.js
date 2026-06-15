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
exports.AssetListResponseDto = exports.AssetMetadataResponseDto = exports.AssetBrandingDto = void 0;
var swagger_1 = require("@nestjs/swagger");
var AssetBrandingDto = function () {
    var _a;
    var _logo_decorators;
    var _logo_initializers = [];
    var _logo_extraInitializers = [];
    var _icon_decorators;
    var _icon_initializers = [];
    var _icon_extraInitializers = [];
    var _description_decorators;
    var _description_initializers = [];
    var _description_extraInitializers = [];
    var _name_decorators;
    var _name_initializers = [];
    var _name_extraInitializers = [];
    var _conditions_decorators;
    var _conditions_initializers = [];
    var _conditions_extraInitializers = [];
    var _isAssetAnchored_decorators;
    var _isAssetAnchored_initializers = [];
    var _isAssetAnchored_extraInitializers = [];
    var _anchorAssetType_decorators;
    var _anchorAssetType_initializers = [];
    var _anchorAssetType_extraInitializers = [];
    var _anchorAsset_decorators;
    var _anchorAsset_initializers = [];
    var _anchorAsset_extraInitializers = [];
    var _attestationOfReserve_decorators;
    var _attestationOfReserve_initializers = [];
    var _attestationOfReserve_extraInitializers = [];
    var _redemptionInstructions_decorators;
    var _redemptionInstructions_initializers = [];
    var _redemptionInstructions_extraInitializers = [];
    return _a = /** @class */ (function () {
            function AssetBrandingDto() {
                this.logo = __runInitializers(this, _logo_initializers, void 0);
                this.icon = (__runInitializers(this, _logo_extraInitializers), __runInitializers(this, _icon_initializers, void 0));
                this.description = (__runInitializers(this, _icon_extraInitializers), __runInitializers(this, _description_initializers, void 0));
                this.name = (__runInitializers(this, _description_extraInitializers), __runInitializers(this, _name_initializers, void 0));
                this.conditions = (__runInitializers(this, _name_extraInitializers), __runInitializers(this, _conditions_initializers, void 0));
                this.isAssetAnchored = (__runInitializers(this, _conditions_extraInitializers), __runInitializers(this, _isAssetAnchored_initializers, void 0));
                this.anchorAssetType = (__runInitializers(this, _isAssetAnchored_extraInitializers), __runInitializers(this, _anchorAssetType_initializers, void 0));
                this.anchorAsset = (__runInitializers(this, _anchorAssetType_extraInitializers), __runInitializers(this, _anchorAsset_initializers, void 0));
                this.attestationOfReserve = (__runInitializers(this, _anchorAsset_extraInitializers), __runInitializers(this, _attestationOfReserve_initializers, void 0));
                this.redemptionInstructions = (__runInitializers(this, _attestationOfReserve_extraInitializers), __runInitializers(this, _redemptionInstructions_initializers, void 0));
                __runInitializers(this, _redemptionInstructions_extraInitializers);
            }
            return AssetBrandingDto;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _logo_decorators = [(0, swagger_1.ApiPropertyOptional)({ description: 'Asset logo URL (larger image)' })];
            _icon_decorators = [(0, swagger_1.ApiPropertyOptional)({ description: 'Asset icon URL (small icon)' })];
            _description_decorators = [(0, swagger_1.ApiPropertyOptional)({ description: 'Asset description' })];
            _name_decorators = [(0, swagger_1.ApiPropertyOptional)({ description: 'Full asset name' })];
            _conditions_decorators = [(0, swagger_1.ApiPropertyOptional)({ description: 'Conditions for using the asset' })];
            _isAssetAnchored_decorators = [(0, swagger_1.ApiPropertyOptional)({ description: 'Whether asset is anchored' })];
            _anchorAssetType_decorators = [(0, swagger_1.ApiPropertyOptional)({ description: 'Anchor asset type' })];
            _anchorAsset_decorators = [(0, swagger_1.ApiPropertyOptional)({ description: 'Anchor asset identifier' })];
            _attestationOfReserve_decorators = [(0, swagger_1.ApiPropertyOptional)({ description: 'Attestation of reserve URL' })];
            _redemptionInstructions_decorators = [(0, swagger_1.ApiPropertyOptional)({ description: 'Redemption instructions' })];
            __esDecorate(null, null, _logo_decorators, { kind: "field", name: "logo", static: false, private: false, access: { has: function (obj) { return "logo" in obj; }, get: function (obj) { return obj.logo; }, set: function (obj, value) { obj.logo = value; } }, metadata: _metadata }, _logo_initializers, _logo_extraInitializers);
            __esDecorate(null, null, _icon_decorators, { kind: "field", name: "icon", static: false, private: false, access: { has: function (obj) { return "icon" in obj; }, get: function (obj) { return obj.icon; }, set: function (obj, value) { obj.icon = value; } }, metadata: _metadata }, _icon_initializers, _icon_extraInitializers);
            __esDecorate(null, null, _description_decorators, { kind: "field", name: "description", static: false, private: false, access: { has: function (obj) { return "description" in obj; }, get: function (obj) { return obj.description; }, set: function (obj, value) { obj.description = value; } }, metadata: _metadata }, _description_initializers, _description_extraInitializers);
            __esDecorate(null, null, _name_decorators, { kind: "field", name: "name", static: false, private: false, access: { has: function (obj) { return "name" in obj; }, get: function (obj) { return obj.name; }, set: function (obj, value) { obj.name = value; } }, metadata: _metadata }, _name_initializers, _name_extraInitializers);
            __esDecorate(null, null, _conditions_decorators, { kind: "field", name: "conditions", static: false, private: false, access: { has: function (obj) { return "conditions" in obj; }, get: function (obj) { return obj.conditions; }, set: function (obj, value) { obj.conditions = value; } }, metadata: _metadata }, _conditions_initializers, _conditions_extraInitializers);
            __esDecorate(null, null, _isAssetAnchored_decorators, { kind: "field", name: "isAssetAnchored", static: false, private: false, access: { has: function (obj) { return "isAssetAnchored" in obj; }, get: function (obj) { return obj.isAssetAnchored; }, set: function (obj, value) { obj.isAssetAnchored = value; } }, metadata: _metadata }, _isAssetAnchored_initializers, _isAssetAnchored_extraInitializers);
            __esDecorate(null, null, _anchorAssetType_decorators, { kind: "field", name: "anchorAssetType", static: false, private: false, access: { has: function (obj) { return "anchorAssetType" in obj; }, get: function (obj) { return obj.anchorAssetType; }, set: function (obj, value) { obj.anchorAssetType = value; } }, metadata: _metadata }, _anchorAssetType_initializers, _anchorAssetType_extraInitializers);
            __esDecorate(null, null, _anchorAsset_decorators, { kind: "field", name: "anchorAsset", static: false, private: false, access: { has: function (obj) { return "anchorAsset" in obj; }, get: function (obj) { return obj.anchorAsset; }, set: function (obj, value) { obj.anchorAsset = value; } }, metadata: _metadata }, _anchorAsset_initializers, _anchorAsset_extraInitializers);
            __esDecorate(null, null, _attestationOfReserve_decorators, { kind: "field", name: "attestationOfReserve", static: false, private: false, access: { has: function (obj) { return "attestationOfReserve" in obj; }, get: function (obj) { return obj.attestationOfReserve; }, set: function (obj, value) { obj.attestationOfReserve = value; } }, metadata: _metadata }, _attestationOfReserve_initializers, _attestationOfReserve_extraInitializers);
            __esDecorate(null, null, _redemptionInstructions_decorators, { kind: "field", name: "redemptionInstructions", static: false, private: false, access: { has: function (obj) { return "redemptionInstructions" in obj; }, get: function (obj) { return obj.redemptionInstructions; }, set: function (obj, value) { obj.redemptionInstructions = value; } }, metadata: _metadata }, _redemptionInstructions_initializers, _redemptionInstructions_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.AssetBrandingDto = AssetBrandingDto;
var AssetMetadataResponseDto = function () {
    var _a;
    var _code_decorators;
    var _code_initializers = [];
    var _code_extraInitializers = [];
    var _type_decorators;
    var _type_initializers = [];
    var _type_extraInitializers = [];
    var _issuer_decorators;
    var _issuer_initializers = [];
    var _issuer_extraInitializers = [];
    var _verified_decorators;
    var _verified_initializers = [];
    var _verified_extraInitializers = [];
    var _decimals_decorators;
    var _decimals_initializers = [];
    var _decimals_extraInitializers = [];
    var _branding_decorators;
    var _branding_initializers = [];
    var _branding_extraInitializers = [];
    var _isFallback_decorators;
    var _isFallback_initializers = [];
    var _isFallback_extraInitializers = [];
    var _updatedAt_decorators;
    var _updatedAt_initializers = [];
    var _updatedAt_extraInitializers = [];
    return _a = /** @class */ (function () {
            function AssetMetadataResponseDto() {
                this.code = __runInitializers(this, _code_initializers, void 0);
                this.type = (__runInitializers(this, _code_extraInitializers), __runInitializers(this, _type_initializers, void 0));
                this.issuer = (__runInitializers(this, _type_extraInitializers), __runInitializers(this, _issuer_initializers, void 0));
                this.verified = (__runInitializers(this, _issuer_extraInitializers), __runInitializers(this, _verified_initializers, void 0));
                this.decimals = (__runInitializers(this, _verified_extraInitializers), __runInitializers(this, _decimals_initializers, void 0));
                this.branding = (__runInitializers(this, _decimals_extraInitializers), __runInitializers(this, _branding_initializers, void 0));
                this.isFallback = (__runInitializers(this, _branding_extraInitializers), __runInitializers(this, _isFallback_initializers, void 0));
                this.updatedAt = (__runInitializers(this, _isFallback_extraInitializers), __runInitializers(this, _updatedAt_initializers, void 0));
                __runInitializers(this, _updatedAt_extraInitializers);
            }
            return AssetMetadataResponseDto;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _code_decorators = [(0, swagger_1.ApiProperty)({ description: 'Asset code (e.g., USDC)' })];
            _type_decorators = [(0, swagger_1.ApiProperty)({ description: 'Asset type' })];
            _issuer_decorators = [(0, swagger_1.ApiPropertyOptional)({ description: 'Asset issuer public key' })];
            _verified_decorators = [(0, swagger_1.ApiProperty)({ description: 'Whether asset is verified' })];
            _decimals_decorators = [(0, swagger_1.ApiProperty)({ description: 'Number of decimal places' })];
            _branding_decorators = [(0, swagger_1.ApiPropertyOptional)({ description: 'Asset branding information' })];
            _isFallback_decorators = [(0, swagger_1.ApiProperty)({ description: 'Whether using fallback branding' })];
            _updatedAt_decorators = [(0, swagger_1.ApiProperty)({ description: 'Last updated timestamp' })];
            __esDecorate(null, null, _code_decorators, { kind: "field", name: "code", static: false, private: false, access: { has: function (obj) { return "code" in obj; }, get: function (obj) { return obj.code; }, set: function (obj, value) { obj.code = value; } }, metadata: _metadata }, _code_initializers, _code_extraInitializers);
            __esDecorate(null, null, _type_decorators, { kind: "field", name: "type", static: false, private: false, access: { has: function (obj) { return "type" in obj; }, get: function (obj) { return obj.type; }, set: function (obj, value) { obj.type = value; } }, metadata: _metadata }, _type_initializers, _type_extraInitializers);
            __esDecorate(null, null, _issuer_decorators, { kind: "field", name: "issuer", static: false, private: false, access: { has: function (obj) { return "issuer" in obj; }, get: function (obj) { return obj.issuer; }, set: function (obj, value) { obj.issuer = value; } }, metadata: _metadata }, _issuer_initializers, _issuer_extraInitializers);
            __esDecorate(null, null, _verified_decorators, { kind: "field", name: "verified", static: false, private: false, access: { has: function (obj) { return "verified" in obj; }, get: function (obj) { return obj.verified; }, set: function (obj, value) { obj.verified = value; } }, metadata: _metadata }, _verified_initializers, _verified_extraInitializers);
            __esDecorate(null, null, _decimals_decorators, { kind: "field", name: "decimals", static: false, private: false, access: { has: function (obj) { return "decimals" in obj; }, get: function (obj) { return obj.decimals; }, set: function (obj, value) { obj.decimals = value; } }, metadata: _metadata }, _decimals_initializers, _decimals_extraInitializers);
            __esDecorate(null, null, _branding_decorators, { kind: "field", name: "branding", static: false, private: false, access: { has: function (obj) { return "branding" in obj; }, get: function (obj) { return obj.branding; }, set: function (obj, value) { obj.branding = value; } }, metadata: _metadata }, _branding_initializers, _branding_extraInitializers);
            __esDecorate(null, null, _isFallback_decorators, { kind: "field", name: "isFallback", static: false, private: false, access: { has: function (obj) { return "isFallback" in obj; }, get: function (obj) { return obj.isFallback; }, set: function (obj, value) { obj.isFallback = value; } }, metadata: _metadata }, _isFallback_initializers, _isFallback_extraInitializers);
            __esDecorate(null, null, _updatedAt_decorators, { kind: "field", name: "updatedAt", static: false, private: false, access: { has: function (obj) { return "updatedAt" in obj; }, get: function (obj) { return obj.updatedAt; }, set: function (obj, value) { obj.updatedAt = value; } }, metadata: _metadata }, _updatedAt_initializers, _updatedAt_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.AssetMetadataResponseDto = AssetMetadataResponseDto;
var AssetListResponseDto = function () {
    var _a;
    var _assets_decorators;
    var _assets_initializers = [];
    var _assets_extraInitializers = [];
    var _total_decorators;
    var _total_initializers = [];
    var _total_extraInitializers = [];
    return _a = /** @class */ (function () {
            function AssetListResponseDto() {
                this.assets = __runInitializers(this, _assets_initializers, void 0);
                this.total = (__runInitializers(this, _assets_extraInitializers), __runInitializers(this, _total_initializers, void 0));
                __runInitializers(this, _total_extraInitializers);
            }
            return AssetListResponseDto;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _assets_decorators = [(0, swagger_1.ApiProperty)({ description: 'List of assets with metadata', type: [AssetMetadataResponseDto] })];
            _total_decorators = [(0, swagger_1.ApiProperty)({ description: 'Total number of assets' })];
            __esDecorate(null, null, _assets_decorators, { kind: "field", name: "assets", static: false, private: false, access: { has: function (obj) { return "assets" in obj; }, get: function (obj) { return obj.assets; }, set: function (obj, value) { obj.assets = value; } }, metadata: _metadata }, _assets_initializers, _assets_extraInitializers);
            __esDecorate(null, null, _total_decorators, { kind: "field", name: "total", static: false, private: false, access: { has: function (obj) { return "total" in obj; }, get: function (obj) { return obj.total; }, set: function (obj, value) { obj.total = value; } }, metadata: _metadata }, _total_initializers, _total_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.AssetListResponseDto = AssetListResponseDto;
