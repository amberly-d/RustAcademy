"use strict";
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssetMetadataController = void 0;
var common_1 = require("@nestjs/common");
var swagger_1 = require("@nestjs/swagger");
var crypto = require("crypto");
var api_key_guard_1 = require("../auth/guards/api-key.guard");
var asset_metadata_dto_1 = require("./dto/asset-metadata.dto");
var AssetMetadataController = function () {
    var _classDecorators = [(0, swagger_1.ApiTags)("assets"), (0, swagger_1.ApiHeader)({
            name: "X-API-Key",
            description: "Optional API key for higher rate limits",
            required: false,
        }), (0, common_1.UseGuards)(api_key_guard_1.ApiKeyGuard), (0, common_1.Controller)("assets")];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _instanceExtraInitializers = [];
    var _getAllAssets_decorators;
    var _getAssetMetadata_decorators;
    var _verifyAsset_decorators;
    var _refreshAssetMetadata_decorators;
    var _getCacheStats_decorators;
    var _clearCache_decorators;
    var AssetMetadataController = _classThis = /** @class */ (function () {
        function AssetMetadataController_1(assetMetadataService) {
            this.assetMetadataService = (__runInitializers(this, _instanceExtraInitializers), assetMetadataService);
            this.logger = new common_1.Logger(AssetMetadataController.name);
        }
        AssetMetadataController_1.prototype.getAllAssets = function (req, res, query) {
            return __awaiter(this, void 0, void 0, function () {
                var data, etag;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this.logger.debug("Fetching all assets metadata, search query: ".concat(query || "none"));
                            return [4 /*yield*/, this.assetMetadataService.getAllAssetsMetadata(query)];
                        case 1:
                            data = _a.sent();
                            etag = "W/\"".concat(crypto
                                .createHash("sha256")
                                .update(JSON.stringify(data))
                                .digest("hex"), "\"");
                            res.setHeader("ETag", etag);
                            res.setHeader("Cache-Control", "public, max-age=0, must-revalidate");
                            // Check If-None-Match conditional request
                            if (req.headers["if-none-match"] === etag) {
                                res.status(common_1.HttpStatus.NOT_MODIFIED);
                                return [2 /*return*/];
                            }
                            return [2 /*return*/, data];
                    }
                });
            });
        };
        AssetMetadataController_1.prototype.getAssetMetadata = function (code, issuer, req, res) {
            return __awaiter(this, void 0, void 0, function () {
                var data, etag;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this.logger.debug("Fetching metadata for asset: ".concat(code, " (issuer: ").concat(issuer || "none", ")"));
                            return [4 /*yield*/, this.assetMetadataService.getAssetMetadata(code, issuer)];
                        case 1:
                            data = _a.sent();
                            etag = "W/\"".concat(crypto
                                .createHash("sha256")
                                .update(JSON.stringify(data))
                                .digest("hex"), "\"");
                            res.setHeader("ETag", etag);
                            res.setHeader("Cache-Control", "public, max-age=0, must-revalidate");
                            // Check If-None-Match conditional request
                            if (req.headers["if-none-match"] === etag) {
                                res.status(common_1.HttpStatus.NOT_MODIFIED);
                                return [2 /*return*/];
                            }
                            return [2 /*return*/, data];
                    }
                });
            });
        };
        AssetMetadataController_1.prototype.verifyAsset = function (body) {
            return __awaiter(this, void 0, void 0, function () {
                var _a;
                return __generator(this, function (_b) {
                    this.logger.log("Admin updating verification status for asset: ".concat(body.code));
                    return [2 /*return*/, this.assetMetadataService.verifyAsset(body.code, (_a = body.issuer) !== null && _a !== void 0 ? _a : null, body.verified, {
                            type: body.type,
                            decimals: body.decimals,
                            iconUrl: body.iconUrl,
                        })];
                });
            });
        };
        AssetMetadataController_1.prototype.refreshAssetMetadata = function (code, issuer) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    this.logger.log("Refreshing metadata for asset: ".concat(code, " (issuer: ").concat(issuer || "none", ")"));
                    return [2 /*return*/, this.assetMetadataService.refreshAssetMetadata(code, issuer)];
                });
            });
        };
        AssetMetadataController_1.prototype.getCacheStats = function () {
            return this.assetMetadataService.getCacheStats();
        };
        AssetMetadataController_1.prototype.clearCache = function () {
            this.logger.log("Clearing asset metadata cache");
            this.assetMetadataService.clearCache();
        };
        return AssetMetadataController_1;
    }());
    __setFunctionName(_classThis, "AssetMetadataController");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _getAllAssets_decorators = [(0, common_1.Get)(), (0, swagger_1.ApiOperation)({
                summary: "List all verified assets with metadata",
                description: "Returns all verified assets with their branding information, icons, and metadata from TOML files. Supports searching by code or issuer.",
            }), (0, swagger_1.ApiQuery)({
                name: "q",
                description: "Search query to filter assets by code or issuer key",
                required: false,
                example: "USDC",
            }), (0, swagger_1.ApiResponse)({
                status: 200,
                description: "List of assets with metadata",
                type: asset_metadata_dto_1.AssetListResponseDto,
            })];
        _getAssetMetadata_decorators = [(0, common_1.Get)(":code"), (0, swagger_1.ApiOperation)({
                summary: "Get metadata for a specific asset",
                description: "Returns detailed metadata including branding, icons, and TOML-parsed information for the specified asset code.",
            }), (0, swagger_1.ApiParam)({
                name: "code",
                description: "Asset code (e.g., USDC, XLM, AQUA)",
                example: "USDC",
            }), (0, swagger_1.ApiQuery)({
                name: "issuer",
                description: "Asset issuer public key (null/omitted for native XLM)",
                required: false,
            }), (0, swagger_1.ApiResponse)({
                status: 200,
                description: "Asset metadata retrieved successfully",
                type: asset_metadata_dto_1.AssetMetadataResponseDto,
            }), (0, swagger_1.ApiResponse)({
                status: 404,
                description: "Asset not found or not verified",
            })];
        _verifyAsset_decorators = [(0, common_1.Post)("admin/verify"), (0, common_1.HttpCode)(common_1.HttpStatus.OK), (0, swagger_1.ApiOperation)({
                summary: "Mark asset verified or unverified",
                description: "Admin workflow to verify/unverify assets and store them in the database.",
            }), (0, swagger_1.ApiResponse)({
                status: 200,
                description: "Asset verification status updated successfully",
                type: asset_metadata_dto_1.AssetMetadataResponseDto,
            })];
        _refreshAssetMetadata_decorators = [(0, common_1.Post)(":code/refresh"), (0, common_1.HttpCode)(common_1.HttpStatus.OK), (0, swagger_1.ApiOperation)({
                summary: "Refresh asset metadata cache",
                description: "Clears the cache for the specified asset and re-fetches metadata from TOML.",
            }), (0, swagger_1.ApiParam)({
                name: "code",
                description: "Asset code to refresh (e.g., USDC)",
                example: "USDC",
            }), (0, swagger_1.ApiQuery)({
                name: "issuer",
                description: "Asset issuer public key (null/omitted for native XLM)",
                required: false,
            }), (0, swagger_1.ApiResponse)({
                status: 200,
                description: "Asset metadata refreshed successfully",
                type: asset_metadata_dto_1.AssetMetadataResponseDto,
            })];
        _getCacheStats_decorators = [(0, common_1.Get)("cache/stats"), (0, swagger_1.ApiOperation)({
                summary: "Get cache statistics",
                description: "Returns statistics about the asset metadata cache.",
            }), (0, swagger_1.ApiResponse)({
                status: 200,
                description: "Cache statistics",
            })];
        _clearCache_decorators = [(0, common_1.Post)("cache/clear"), (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT), (0, swagger_1.ApiOperation)({
                summary: "Clear asset metadata cache",
                description: "Clears all cached asset metadata entries.",
            }), (0, swagger_1.ApiResponse)({
                status: 204,
                description: "Cache cleared successfully",
            })];
        __esDecorate(_classThis, null, _getAllAssets_decorators, { kind: "method", name: "getAllAssets", static: false, private: false, access: { has: function (obj) { return "getAllAssets" in obj; }, get: function (obj) { return obj.getAllAssets; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _getAssetMetadata_decorators, { kind: "method", name: "getAssetMetadata", static: false, private: false, access: { has: function (obj) { return "getAssetMetadata" in obj; }, get: function (obj) { return obj.getAssetMetadata; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _verifyAsset_decorators, { kind: "method", name: "verifyAsset", static: false, private: false, access: { has: function (obj) { return "verifyAsset" in obj; }, get: function (obj) { return obj.verifyAsset; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _refreshAssetMetadata_decorators, { kind: "method", name: "refreshAssetMetadata", static: false, private: false, access: { has: function (obj) { return "refreshAssetMetadata" in obj; }, get: function (obj) { return obj.refreshAssetMetadata; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _getCacheStats_decorators, { kind: "method", name: "getCacheStats", static: false, private: false, access: { has: function (obj) { return "getCacheStats" in obj; }, get: function (obj) { return obj.getCacheStats; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _clearCache_decorators, { kind: "method", name: "clearCache", static: false, private: false, access: { has: function (obj) { return "clearCache" in obj; }, get: function (obj) { return obj.clearCache; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        AssetMetadataController = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return AssetMetadataController = _classThis;
}();
exports.AssetMetadataController = AssetMetadataController;
