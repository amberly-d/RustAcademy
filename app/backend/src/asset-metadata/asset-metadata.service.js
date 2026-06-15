"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
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
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
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
exports.AssetMetadataService = void 0;
var common_1 = require("@nestjs/common");
var verified_assets_constant_1 = require("../stellar/verified-assets.constant");
var AssetMetadataService = function () {
    var _classDecorators = [(0, common_1.Injectable)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var AssetMetadataService = _classThis = /** @class */ (function () {
        function AssetMetadataService_1(cache, tomlFetcher, horizonService, supabaseService) {
            this.cache = cache;
            this.tomlFetcher = tomlFetcher;
            this.horizonService = horizonService;
            this.supabaseService = supabaseService;
            this.logger = new common_1.Logger(AssetMetadataService.name);
            // Fallback branding for native XLM
            this.XLM_FALLBACK_BRANDING = {
                name: 'Stellar Lumens',
                description: 'The native currency of the Stellar network',
                icon: 'https://assets.stellar.org/images/logos/xlm-icon.svg',
                logo: 'https://assets.stellar.org/images/logos/xlm-logo.svg',
            };
            // Generic fallback for unknown assets
            this.GENERIC_FALLBACK_BRANDING = {
                name: undefined,
                description: undefined,
                icon: undefined,
                logo: undefined,
            };
            // Known issuer domains mapping (can be extended)
            this.KNOWN_ISSUER_DOMAINS = {
                GA5ZSEJYB37JRC5AVCIA5MOP4RHTM335X2KGX3IHOJAPP5RE34K4KZVN: 'circle.com',
                GBNZILSTVQZ4R7IKQDGHYGY2QXL5QOFJYQMXPKWRRM5PAV7Y4M67AQUA: 'aqua.network',
                GARDNV3Q7YGT4AKSDF25LT32YSCCW4EV22Y2TV3I2PU2MMXJTEDL5T55: 'ultrastellar.com',
            };
        }
        AssetMetadataService_1.prototype.mapDbRecordToRecord = function (dbRecord) {
            return {
                code: dbRecord.code,
                type: dbRecord.type,
                issuer: dbRecord.issuer,
                verified: dbRecord.verified,
                decimals: dbRecord.decimals,
                branding: dbRecord.icon_url ? {
                    name: dbRecord.code,
                    icon: dbRecord.icon_url,
                    logo: dbRecord.icon_url,
                } : undefined,
            };
        };
        /**
         * Get metadata for all verified assets, optionally filtered by a search query
         */
        AssetMetadataService_1.prototype.getAllAssetsMetadata = function (search) {
            return __awaiter(this, void 0, void 0, function () {
                var cacheKey, cachedList, records, dbRecords, error_1, fallbackList, upperSearch_1, assets, response;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            cacheKey = search ? "list:search:".concat(search.toUpperCase()) : 'list:all';
                            cachedList = this.cache.get(cacheKey);
                            if (cachedList) {
                                return [2 /*return*/, cachedList];
                            }
                            records = [];
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 6, , 7]);
                            dbRecords = [];
                            if (!search) return [3 /*break*/, 3];
                            return [4 /*yield*/, this.supabaseService.searchVerifiedAssets(search)];
                        case 2:
                            dbRecords = _a.sent();
                            return [3 /*break*/, 5];
                        case 3: return [4 /*yield*/, this.supabaseService.fetchVerifiedAssets()];
                        case 4:
                            dbRecords = _a.sent();
                            _a.label = 5;
                        case 5:
                            // Filter only verified assets and map them
                            records = dbRecords
                                .filter(function (r) { return r.verified; })
                                .map(function (r) { return _this.mapDbRecordToRecord(r); });
                            return [3 /*break*/, 7];
                        case 6:
                            error_1 = _a.sent();
                            this.logger.warn("Failed to fetch assets from database: ".concat(error_1.message));
                            return [3 /*break*/, 7];
                        case 7:
                            // If DB returned nothing or failed, use fallback constant
                            if (records.length === 0) {
                                fallbackList = verified_assets_constant_1.VERIFIED_STELLAR_ASSETS.map(function (asset) { return (__assign({}, asset)); });
                                if (search) {
                                    upperSearch_1 = search.toUpperCase();
                                    records = fallbackList.filter(function (a) {
                                        return a.code.toUpperCase().includes(upperSearch_1) ||
                                            (a.issuer && a.issuer.toUpperCase().includes(upperSearch_1));
                                    });
                                }
                                else {
                                    records = fallbackList;
                                }
                            }
                            return [4 /*yield*/, Promise.all(records.map(function (asset) { return _this.getAssetMetadata(asset.code, asset.issuer); }))];
                        case 8:
                            assets = _a.sent();
                            response = {
                                assets: assets,
                                total: assets.length,
                            };
                            // Cache the list response
                            this.cache.set(cacheKey, response);
                            return [2 /*return*/, response];
                    }
                });
            });
        };
        /**
         * Get metadata for a specific asset code and optional issuer
         */
        AssetMetadataService_1.prototype.getAssetMetadata = function (code, issuer) {
            return __awaiter(this, void 0, void 0, function () {
                var upperCode, normIssuer, cacheKey, cached, verifiedAsset, dbRecords, dbRecord, error_2, fallback, branding, isFallback, cachedMetadata;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            upperCode = code.toUpperCase();
                            normIssuer = issuer || null;
                            cacheKey = normIssuer ? "".concat(upperCode, ":").concat(normIssuer.toUpperCase()) : upperCode;
                            cached = this.cache.get(cacheKey);
                            if (cached) {
                                return [2 /*return*/, this.mapToResponseDto(cached.asset, cached.branding, cached.isFallback)];
                            }
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 3, , 4]);
                            return [4 /*yield*/, this.supabaseService.fetchVerifiedAssets()];
                        case 2:
                            dbRecords = _a.sent();
                            dbRecord = dbRecords.find(function (r) {
                                var _a;
                                return r.code.toUpperCase() === upperCode &&
                                    (normIssuer === null
                                        ? r.issuer === null
                                        : ((_a = r.issuer) === null || _a === void 0 ? void 0 : _a.toUpperCase()) === normIssuer.toUpperCase());
                            });
                            if (dbRecord) {
                                verifiedAsset = this.mapDbRecordToRecord(dbRecord);
                            }
                            return [3 /*break*/, 4];
                        case 3:
                            error_2 = _a.sent();
                            this.logger.debug("Could not check DB for asset metadata: ".concat(error_2.message));
                            return [3 /*break*/, 4];
                        case 4:
                            // 2. Fall back to constant whitelist
                            if (!verifiedAsset) {
                                fallback = verified_assets_constant_1.VERIFIED_STELLAR_ASSETS.find(function (a) {
                                    var _a;
                                    return a.code.toUpperCase() === upperCode &&
                                        (normIssuer === null
                                            ? a.issuer === null
                                            : ((_a = a.issuer) === null || _a === void 0 ? void 0 : _a.toUpperCase()) === normIssuer.toUpperCase());
                                });
                                if (fallback) {
                                    verifiedAsset = __assign({}, fallback);
                                }
                            }
                            if (!verifiedAsset) {
                                // Return unverified asset with fallback branding
                                return [2 /*return*/, this.createUnverifiedResponse(code)];
                            }
                            return [4 /*yield*/, this.fetchAssetBranding(verifiedAsset)];
                        case 5:
                            branding = _a.sent();
                            isFallback = this.isFallbackBranding(branding, verifiedAsset);
                            cachedMetadata = {
                                asset: verifiedAsset,
                                branding: branding,
                                isFallback: isFallback,
                                fetchedAt: new Date(),
                            };
                            this.cache.set(cacheKey, cachedMetadata);
                            return [2 /*return*/, this.mapToResponseDto(verifiedAsset, branding, isFallback)];
                    }
                });
            });
        };
        /**
         * Refresh metadata for a specific asset (clear cache and re-fetch)
         */
        AssetMetadataService_1.prototype.refreshAssetMetadata = function (code, issuer) {
            return __awaiter(this, void 0, void 0, function () {
                var normIssuer, cacheKey;
                return __generator(this, function (_a) {
                    normIssuer = issuer || null;
                    cacheKey = normIssuer ? "".concat(code.toUpperCase(), ":").concat(normIssuer.toUpperCase()) : code.toUpperCase();
                    this.cache.delete(cacheKey);
                    // Clear list cache to reflect any changes
                    this.cache.clear();
                    return [2 /*return*/, this.getAssetMetadata(code, issuer)];
                });
            });
        };
        /**
         * Mark an asset as verified/unverified in database and clear cache
         */
        AssetMetadataService_1.prototype.verifyAsset = function (code, issuer, verified, additionalData) {
            return __awaiter(this, void 0, void 0, function () {
                var normCode, normIssuer;
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            normCode = code.toUpperCase();
                            normIssuer = issuer || null;
                            // Save/update in database
                            return [4 /*yield*/, this.supabaseService.upsertVerifiedAsset({
                                    code: normCode,
                                    issuer: normIssuer,
                                    type: (additionalData === null || additionalData === void 0 ? void 0 : additionalData.type) || (normCode === 'XLM' ? 'native' : 'credit_alphanum4'),
                                    decimals: (_a = additionalData === null || additionalData === void 0 ? void 0 : additionalData.decimals) !== null && _a !== void 0 ? _a : 7,
                                    icon_url: (additionalData === null || additionalData === void 0 ? void 0 : additionalData.iconUrl) || null,
                                    verified: verified,
                                })];
                        case 1:
                            // Save/update in database
                            _b.sent();
                            // Clear entire cache immediately so changes are reflected
                            this.cache.clear();
                            // Fetch fresh metadata
                            return [2 /*return*/, this.getAssetMetadata(normCode, normIssuer)];
                    }
                });
            });
        };
        /**
         * Get cache statistics
         */
        AssetMetadataService_1.prototype.getCacheStats = function () {
            return this.cache.getStats();
        };
        /**
         * Clear all cached metadata
         */
        AssetMetadataService_1.prototype.clearCache = function () {
            this.cache.clear();
        };
        /**
         * Fetch asset branding from TOML or use fallback
         */
        AssetMetadataService_1.prototype.fetchAssetBranding = function (asset) {
            return __awaiter(this, void 0, void 0, function () {
                var domainFromHorizon, domain, toml, currency, error_3;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            // XLM is native, handle specially
                            if (asset.code === 'XLM' && asset.type === 'native') {
                                return [2 /*return*/, this.XLM_FALLBACK_BRANDING];
                            }
                            // If no issuer, use generic fallback
                            if (!asset.issuer) {
                                return [2 /*return*/, this.GENERIC_FALLBACK_BRANDING];
                            }
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 5, , 6]);
                            return [4 /*yield*/, this.getDomainFromHorizon(asset.issuer)];
                        case 2:
                            domainFromHorizon = _a.sent();
                            domain = domainFromHorizon || this.KNOWN_ISSUER_DOMAINS[asset.issuer];
                            if (!domain) return [3 /*break*/, 4];
                            return [4 /*yield*/, this.tomlFetcher.fetchStellarToml(domain)];
                        case 3:
                            toml = _a.sent();
                            if (toml) {
                                currency = this.tomlFetcher.findCurrency(toml, asset.code);
                                if (currency) {
                                    this.logger.log("Found TOML branding for ".concat(asset.code, " from ").concat(domain));
                                    return [2 /*return*/, this.tomlFetcher.extractBranding(currency, toml)];
                                }
                            }
                            _a.label = 4;
                        case 4: return [3 /*break*/, 6];
                        case 5:
                            error_3 = _a.sent();
                            this.logger.warn("Failed to fetch TOML for ".concat(asset.code, ": ").concat(error_3.message));
                            return [3 /*break*/, 6];
                        case 6: 
                        // Return generic fallback if TOML fetch failed
                        return [2 /*return*/, __assign(__assign({}, this.GENERIC_FALLBACK_BRANDING), { name: asset.code })];
                    }
                });
            });
        };
        /**
         * Get domain from Horizon account information
         */
        AssetMetadataService_1.prototype.getDomainFromHorizon = function (issuer) {
            return __awaiter(this, void 0, void 0, function () {
                var account, error_4;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, this.horizonService.getAccount(issuer)];
                        case 1:
                            account = _a.sent();
                            return [2 /*return*/, (account === null || account === void 0 ? void 0 : account.home_domain) || null];
                        case 2:
                            error_4 = _a.sent();
                            this.logger.debug("Could not fetch account ".concat(issuer, " from Horizon"));
                            return [2 /*return*/, null];
                        case 3: return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * Check if branding is a fallback
         */
        AssetMetadataService_1.prototype.isFallbackBranding = function (branding, asset) {
            // XLM is not considered fallback
            if (asset.code === 'XLM' && asset.type === 'native') {
                return false;
            }
            // If no icon/logo, it's a fallback
            return !branding.icon && !branding.logo;
        };
        /**
         * Create response for unverified asset
         */
        AssetMetadataService_1.prototype.createUnverifiedResponse = function (code) {
            return {
                code: code,
                type: 'credit_alphanum4',
                issuer: undefined,
                verified: false,
                decimals: 7,
                branding: {
                    name: code,
                    icon: undefined,
                    logo: undefined,
                    description: undefined,
                },
                isFallback: true,
                updatedAt: new Date().toISOString(),
            };
        };
        /**
         * Map to response DTO
         */
        AssetMetadataService_1.prototype.mapToResponseDto = function (asset, branding, isFallback) {
            return {
                code: asset.code,
                type: asset.type,
                issuer: asset.issuer || undefined,
                verified: asset.verified,
                decimals: asset.decimals,
                branding: {
                    name: branding.name,
                    icon: branding.icon,
                    logo: branding.logo,
                    description: branding.description,
                    conditions: branding.conditions,
                    isAssetAnchored: branding.is_asset_anchored,
                    anchorAssetType: branding.anchor_asset_type,
                    anchorAsset: branding.anchor_asset,
                    attestationOfReserve: branding.attestation_of_reserve,
                    redemptionInstructions: branding.redemption_instructions,
                },
                isFallback: isFallback,
                updatedAt: new Date().toISOString(),
            };
        };
        return AssetMetadataService_1;
    }());
    __setFunctionName(_classThis, "AssetMetadataService");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        AssetMetadataService = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return AssetMetadataService = _classThis;
}();
exports.AssetMetadataService = AssetMetadataService;
