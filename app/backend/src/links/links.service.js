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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinksService = void 0;
var common_1 = require("@nestjs/common");
var constants_1 = require("./constants");
var errors_1 = require("./errors");
var LinksService = function () {
    var _classDecorators = [(0, common_1.Injectable)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var LinksService = _classThis = /** @class */ (function () {
        function LinksService_1(pathPreviewService, privacyService) {
            this.pathPreviewService = pathPreviewService;
            this.privacyService = privacyService;
            this.logger = new common_1.Logger(LinksService.name);
        }
        LinksService_1.prototype.generateMetadata = function (request) {
            return __awaiter(this, void 0, void 0, function () {
                var amt, _a, memo, memoType, asset, privacy, expiresAt, username, destination, referenceId, normalizedAsset, acceptedAssets, canonical, warnings, normalized, additionalMetadata, stealthRecipientEnvelope, swapOptions;
                var _b;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            amt = this.validateAmount(request.amount);
                            _a = this.validateMemo(request.memo, request.memoType), memo = _a.memo, memoType = _a.memoType;
                            asset = this.validateAsset(request.asset);
                            privacy = (_b = request.privacy) !== null && _b !== void 0 ? _b : false;
                            expiresAt = this.calculateExpiration(request.expirationDays);
                            username = this.validateUsername(request.username);
                            destination = this.validateDestination(request.destination);
                            referenceId = this.validateReferenceId(request.referenceId);
                            normalizedAsset = this.normalizeAssetSymbol(asset);
                            acceptedAssets = this.validateAcceptedAssets(request.acceptedAssets, normalizedAsset);
                            canonical = this.generateCanonicalFormat(amt, normalizedAsset, memo, username, destination, referenceId, acceptedAssets);
                            warnings = [];
                            normalized = false;
                            if (request.amount.toString() !== amt) {
                                warnings.push("Amount was normalized to 7 decimal places");
                                normalized = true;
                            }
                            if (memo && request.memo !== memo) {
                                warnings.push("Memo was trimmed and sanitized");
                                normalized = true;
                            }
                            if (normalizedAsset !== asset) {
                                warnings.push("Asset symbol '".concat(asset, "' normalized to '").concat(normalizedAsset, "'"));
                                normalized = true;
                            }
                            additionalMetadata = this.deriveAdditionalMetadata(request, normalizedAsset);
                            stealthRecipientEnvelope = request.privacy &&
                                request.recipientViewPublicKeyPem &&
                                destination &&
                                this.privacyService
                                ? this.privacyService.encryptRecipientForViewKey(destination, request.recipientViewPublicKeyPem)
                                : undefined;
                            swapOptions = null;
                            if (!acceptedAssets) return [3 /*break*/, 2];
                            return [4 /*yield*/, this.buildSwapOptions(amt, normalizedAsset, acceptedAssets)];
                        case 1:
                            swapOptions = _c.sent();
                            _c.label = 2;
                        case 2: return [2 /*return*/, {
                                amount: amt,
                                memo: memo,
                                memoType: memoType,
                                asset: normalizedAsset,
                                privacy: privacy,
                                expiresAt: expiresAt,
                                canonical: canonical,
                                username: username,
                                destination: destination,
                                referenceId: referenceId,
                                acceptedAssets: acceptedAssets,
                                swapOptions: swapOptions,
                                metadata: __assign({ normalized: normalized, warnings: warnings.length > 0 ? warnings : undefined, stealthRecipientEnvelope: stealthRecipientEnvelope }, additionalMetadata),
                            }];
                    }
                });
            });
        };
        LinksService_1.prototype.validateAmount = function (amount) {
            if (typeof amount !== "number" || isNaN(amount)) {
                throw new errors_1.LinkValidationError(errors_1.LinkErrorCode.INVALID_AMOUNT, "Amount must be a valid number", "amount");
            }
            if (amount < constants_1.LinkConstraints.AMOUNT.MIN) {
                throw new errors_1.LinkValidationError(errors_1.LinkErrorCode.AMOUNT_TOO_LOW, "Amount must be at least ".concat(constants_1.LinkConstraints.AMOUNT.MIN, " XLM"), "amount");
            }
            if (amount > constants_1.LinkConstraints.AMOUNT.MAX) {
                throw new errors_1.LinkValidationError(errors_1.LinkErrorCode.AMOUNT_TOO_HIGH, "Amount cannot exceed ".concat(constants_1.LinkConstraints.AMOUNT.MAX, " XLM"), "amount");
            }
            return this.formatAmount(amount);
        };
        LinksService_1.prototype.formatAmount = function (amount) {
            return amount.toFixed(constants_1.LinkConstraints.AMOUNT.DECIMALS);
        };
        LinksService_1.prototype.validateMemo = function (memo, memoType) {
            if (!memo || memo.trim() === "") {
                return {
                    memo: null,
                    memoType: constants_1.LinkConstraints.MEMO.DEFAULT_TYPE,
                };
            }
            var sanitized = memo.trim();
            sanitized = sanitized.replace(/[<>"']/g, "");
            if (sanitized.length === 0) {
                return {
                    memo: null,
                    memoType: constants_1.LinkConstraints.MEMO.DEFAULT_TYPE,
                };
            }
            if (sanitized.length > constants_1.LinkConstraints.MEMO.MAX_LENGTH) {
                throw new errors_1.LinkValidationError(errors_1.LinkErrorCode.MEMO_TOO_LONG, "Memo cannot exceed ".concat(constants_1.LinkConstraints.MEMO.MAX_LENGTH, " characters"), "memo");
            }
            var validatedMemoType = (memoType ||
                constants_1.LinkConstraints.MEMO.DEFAULT_TYPE);
            if (!constants_1.LinkConstraints.MEMO.ALLOWED_TYPES.includes(validatedMemoType)) {
                throw new errors_1.LinkValidationError(errors_1.LinkErrorCode.INVALID_MEMO_TYPE, "Memo type must be one of: text, id, hash, return", "memoType");
            }
            return {
                memo: sanitized,
                memoType: validatedMemoType,
            };
        };
        LinksService_1.prototype.validateUsername = function (username) {
            if (!username || username.trim() === "") {
                return null;
            }
            var trimmed = username.trim().toLowerCase();
            if (trimmed.length < 3) {
                throw new errors_1.LinkValidationError(errors_1.LinkErrorCode.INVALID_USERNAME, "Username must be at least 3 characters long", "username");
            }
            if (trimmed.length > 32) {
                throw new errors_1.LinkValidationError(errors_1.LinkErrorCode.INVALID_USERNAME, "Username cannot exceed 32 characters", "username");
            }
            if (!/^[a-z0-9][a-z0-9_-]{0,30}[a-z0-9]$|^[a-z0-9]{1,2}$/.test(trimmed)) {
                throw new errors_1.LinkValidationError(errors_1.LinkErrorCode.INVALID_USERNAME, "Username must be lowercase alphanumeric characters, may include hyphens and underscores, but cannot start or end with special characters", "username");
            }
            var reservedWords = [
                "admin",
                "system",
                "root",
                " RustAcademy",
                "null",
                "undefined",
            ];
            if (reservedWords.includes(trimmed)) {
                throw new errors_1.LinkValidationError(errors_1.LinkErrorCode.USERNAME_RESERVED, "Username is reserved and cannot be used", "username");
            }
            return trimmed;
        };
        LinksService_1.prototype.validateDestination = function (destination) {
            if (!destination || destination.trim() === "") {
                return null;
            }
            var trimmed = destination.trim();
            if (!/^G[ABCDEFGHIJKLMNOPQRSTUVWXYZ234567]{55}$/.test(trimmed)) {
                throw new errors_1.LinkValidationError(errors_1.LinkErrorCode.INVALID_DESTINATION, "Destination must be a valid Stellar public key (starts with G, 56 characters)", "destination");
            }
            return trimmed;
        };
        LinksService_1.prototype.validateReferenceId = function (referenceId) {
            if (!referenceId || referenceId.trim() === "") {
                return null;
            }
            var trimmed = referenceId.trim();
            if (trimmed.length > 64) {
                throw new errors_1.LinkValidationError(errors_1.LinkErrorCode.INVALID_REFERENCE_ID, "Reference ID cannot exceed 64 characters", "referenceId");
            }
            if (!/^[a-zA-Z0-9_-]{1,64}$/.test(trimmed)) {
                throw new errors_1.LinkValidationError(errors_1.LinkErrorCode.INVALID_REFERENCE_ID, "Reference ID must be 1-64 alphanumeric characters, hyphens, or underscores", "referenceId");
            }
            return trimmed;
        };
        LinksService_1.prototype.calculateExpiration = function (days) {
            if (!days)
                return null;
            if (days < 1 || days > constants_1.LinkConstraints.LINK.MAX_EXPIRATION_DAYS) {
                throw new errors_1.LinkValidationError(errors_1.LinkErrorCode.INVALID_EXPIRATION, "Expiration must be between 1 and 365 days", "expirationDays");
            }
            var expiration = new Date();
            expiration.setDate(expiration.getDate() + days);
            return expiration;
        };
        LinksService_1.prototype.validateAsset = function (asset) {
            var assetCode = (asset || constants_1.LinkConstraints.ASSET.DEFAULT);
            if (!constants_1.LinkConstraints.ASSET.WHITELIST.includes(assetCode)) {
                throw new errors_1.LinkValidationError(errors_1.LinkErrorCode.ASSET_NOT_WHITELISTED, "Asset is not supported. Supported assets: ".concat(constants_1.LinkConstraints.ASSET.WHITELIST.join(", ")), "asset");
            }
            return assetCode;
        };
        LinksService_1.prototype.normalizeAssetSymbol = function (asset) {
            var normalized = {
                XLM: "XLM",
                USDC: "USDC",
                AQUA: "AQUA",
                yXLM: "yXLM",
            };
            return normalized[asset] || asset;
        };
        LinksService_1.prototype.validateAcceptedAssets = function (assets, destinationAsset) {
            if (!assets || assets.length === 0) {
                return null;
            }
            var invalid = assets.filter(function (a) { return !constants_1.LinkConstraints.ASSET.WHITELIST.includes(a); });
            if (invalid.length > 0) {
                throw new errors_1.LinkValidationError(errors_1.LinkErrorCode.ASSET_NOT_WHITELISTED, "Unsupported asset(s) in acceptedAssets: ".concat(invalid.join(", ")), "acceptedAssets");
            }
            // Ensure the destination asset is always included
            var unique = Array.from(new Set(__spreadArray(__spreadArray([], assets, true), [destinationAsset], false)));
            return unique;
        };
        LinksService_1.prototype.buildSwapOptions = function (destinationAmount, destinationAsset, acceptedAssets) {
            return __awaiter(this, void 0, void 0, function () {
                var swapSourceAssets, result, err_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!this.pathPreviewService) {
                                return [2 /*return*/, []];
                            }
                            swapSourceAssets = acceptedAssets
                                .filter(function (a) { return a !== destinationAsset; })
                                .map(function (code) { return ({ code: code }); });
                            if (swapSourceAssets.length === 0) {
                                return [2 /*return*/, []];
                            }
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 3, , 4]);
                            return [4 /*yield*/, this.pathPreviewService.previewPaths({
                                    destinationAmount: destinationAmount,
                                    destinationAsset: { code: destinationAsset },
                                    sourceAssets: swapSourceAssets,
                                })];
                        case 2:
                            result = _a.sent();
                            return [2 /*return*/, result.paths];
                        case 3:
                            err_1 = _a.sent();
                            this.logger.warn("Swap path preview failed; returning empty swap options", err_1);
                            return [2 /*return*/, []];
                        case 4: return [2 /*return*/];
                    }
                });
            });
        };
        LinksService_1.prototype.generateCanonicalFormat = function (amount, asset, memo, username, destination, referenceId, acceptedAssets) {
            var params = new URLSearchParams();
            params.set("amount", amount);
            params.set("asset", asset);
            if (memo)
                params.set("memo", memo);
            if (username)
                params.set("username", username);
            if (destination)
                params.set("destination", destination);
            if (referenceId)
                params.set("ref", referenceId);
            if (acceptedAssets && acceptedAssets.length > 0) {
                params.set("acceptedAssets", acceptedAssets.join(","));
            }
            return params.toString();
        };
        LinksService_1.prototype.deriveAdditionalMetadata = function (request, asset) {
            var metadata = {};
            // Asset type and issuer
            if (asset === "XLM") {
                metadata.assetType = "native";
                metadata.assetIssuer = null;
            }
            else {
                metadata.assetType = "credit_alphanum4";
                metadata.assetIssuer = this.getAssetIssuer(asset);
            }
            // Link type classification
            if (request.privacy) {
                metadata.linkType = "private";
            }
            else if (request.username) {
                metadata.linkType = "username";
            }
            else {
                metadata.linkType = "standard";
            }
            // Expiration metadata
            if (request.expirationDays) {
                metadata.expiresInDays = request.expirationDays;
                metadata.isExpiring = true;
            }
            else {
                metadata.isExpiring = false;
            }
            // Security level
            metadata.securityLevel = this.calculateSecurityLevel(request);
            // Currency display info
            metadata.currencySymbol = this.getCurrencySymbol(asset);
            metadata.trustScore = this.getTrustScore(asset);
            return metadata;
        };
        LinksService_1.prototype.getAssetIssuer = function (asset) {
            var issuers = {
                USDC: "GA5ZSEJYB37JRC5AVCIA5MOP4RHTM335X2KGX3IHOJAPP5RE34K4KZVN",
                AQUA: "GBNZILSTVQZ4R7IKQDGHYGY2QXL5QOFJYQMXPKWRRM5PAV7Y4M67AQUA",
                yXLM: "GARDNV3Q7YGT4AKSDF25LT32YSCCW4EV22Y2TV3I2PU2MMXJTEDL5T55",
            };
            return issuers[asset] || null;
        };
        LinksService_1.prototype.getCurrencySymbol = function (asset) {
            var symbols = {
                XLM: "₳",
                USDC: "$",
                AQUA: "A",
                yXLM: "y",
            };
            return symbols[asset] || asset;
        };
        LinksService_1.prototype.getTrustScore = function (asset) {
            var scores = {
                XLM: 100,
                USDC: 95,
                AQUA: 85,
                yXLM: 80,
            };
            return scores[asset] || 50;
        };
        LinksService_1.prototype.calculateSecurityLevel = function (request) {
            var score = 0;
            if (request.memo)
                score += 1;
            if (request.expirationDays)
                score += 1;
            if (request.privacy)
                score += 1;
            if (request.destination)
                score += 1;
            if (score >= 3)
                return "high";
            if (score >= 1)
                return "medium";
            return "low";
        };
        return LinksService_1;
    }());
    __setFunctionName(_classThis, "LinksService");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        LinksService = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return LinksService = _classThis;
}();
exports.LinksService = LinksService;
