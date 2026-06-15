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
exports.TomlFetcherService = void 0;
var common_1 = require("@nestjs/common");
var toml = require("toml");
var TomlFetcherService = function () {
    var _classDecorators = [(0, common_1.Injectable)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var TomlFetcherService = _classThis = /** @class */ (function () {
        function TomlFetcherService_1() {
            this.logger = new common_1.Logger(TomlFetcherService.name);
            this.TIMEOUT_MS = 5000; // 5 second timeout
        }
        /**
         * Fetch and parse stellar.toml from an issuer's domain
         * @param domain - The domain to fetch TOML from
         * @returns Parsed TOML or null if failed
         */
        TomlFetcherService_1.prototype.fetchStellarToml = function (domain) {
            return __awaiter(this, void 0, void 0, function () {
                var normalizedDomain, urls, _loop_1, this_1, _i, urls_1, url, state_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!domain) {
                                this.logger.warn('No domain provided for TOML fetch');
                                return [2 /*return*/, null];
                            }
                            normalizedDomain = domain.replace(/^https?:\/\//, '').replace(/\/$/, '');
                            urls = [
                                "https://".concat(normalizedDomain, "/.well-known/stellar.toml"),
                                "https://".concat(normalizedDomain, "/stellar.toml"),
                            ];
                            _loop_1 = function (url) {
                                var controller_1, timeoutId, response, tomlText, parsed, error_1;
                                return __generator(this, function (_b) {
                                    switch (_b.label) {
                                        case 0:
                                            _b.trys.push([0, 3, , 4]);
                                            this_1.logger.debug("Fetching TOML from: ".concat(url));
                                            controller_1 = new AbortController();
                                            timeoutId = setTimeout(function () { return controller_1.abort(); }, this_1.TIMEOUT_MS);
                                            return [4 /*yield*/, fetch(url, {
                                                    signal: controller_1.signal,
                                                    headers: {
                                                        Accept: 'text/plain, application/toml',
                                                    },
                                                })];
                                        case 1:
                                            response = _b.sent();
                                            clearTimeout(timeoutId);
                                            if (!response.ok) {
                                                this_1.logger.debug("TOML fetch failed for ".concat(url, ": ").concat(response.status));
                                                return [2 /*return*/, "continue"];
                                            }
                                            return [4 /*yield*/, response.text()];
                                        case 2:
                                            tomlText = _b.sent();
                                            parsed = this_1.parseToml(tomlText);
                                            if (parsed) {
                                                this_1.logger.debug("Successfully parsed TOML from ".concat(url));
                                                return [2 /*return*/, { value: parsed }];
                                            }
                                            return [3 /*break*/, 4];
                                        case 3:
                                            error_1 = _b.sent();
                                            this_1.logger.debug("Error fetching TOML from ".concat(url, ": ").concat(error_1.message));
                                            return [2 /*return*/, "continue"];
                                        case 4: return [2 /*return*/];
                                    }
                                });
                            };
                            this_1 = this;
                            _i = 0, urls_1 = urls;
                            _a.label = 1;
                        case 1:
                            if (!(_i < urls_1.length)) return [3 /*break*/, 4];
                            url = urls_1[_i];
                            return [5 /*yield**/, _loop_1(url)];
                        case 2:
                            state_1 = _a.sent();
                            if (typeof state_1 === "object")
                                return [2 /*return*/, state_1.value];
                            _a.label = 3;
                        case 3:
                            _i++;
                            return [3 /*break*/, 1];
                        case 4:
                            this.logger.warn("Failed to fetch TOML from any URL for domain: ".concat(domain));
                            return [2 /*return*/, null];
                    }
                });
            });
        };
        /**
         * Extract currency information for a specific asset code
         * @param toml - Parsed TOML
         * @param assetCode - Asset code to find
         * @returns Currency info or null if not found
         */
        TomlFetcherService_1.prototype.findCurrency = function (toml, assetCode) {
            if (!toml.CURRENCIES || !Array.isArray(toml.CURRENCIES)) {
                return null;
            }
            var upperCode = assetCode.toUpperCase();
            var currency = toml.CURRENCIES.find(function (c) { var _a; return ((_a = c.code) === null || _a === void 0 ? void 0 : _a.toUpperCase()) === upperCode; });
            return currency || null;
        };
        /**
         * Convert TOML currency to asset branding
         * @param currency - TOML currency entry
         * @param toml - Full parsed TOML for context
         * @returns Asset branding information
         */
        TomlFetcherService_1.prototype.extractBranding = function (currency, toml) {
            var _a;
            var branding = {
                name: currency.name,
                description: currency.desc,
                conditions: currency.conditions,
                is_asset_anchored: currency.is_asset_anchored,
                anchor_asset_type: currency.anchor_asset_type,
                anchor_asset: currency.anchor_asset,
                attestation_of_reserve: currency.attestation_of_reserve,
                redemption_instructions: currency.redemption_instructions,
                collateral_addresses: currency.collateral_addresses,
                collateral_address_signatures: currency.collateral_address_signatures,
            };
            // Handle image/logo - can be a direct URL or relative path
            if (currency.image) {
                branding.icon = this.resolveUrl(currency.image, toml);
                branding.logo = branding.icon;
            }
            // If no currency image, try organization logo from DOCUMENTATION
            if (!branding.logo && ((_a = toml.DOCUMENTATION) === null || _a === void 0 ? void 0 : _a.ORG_LOGO)) {
                branding.logo = this.resolveUrl(toml.DOCUMENTATION.ORG_LOGO, toml);
            }
            return branding;
        };
        /**
         * Parse TOML text into structured object
         */
        TomlFetcherService_1.prototype.parseToml = function (tomlText) {
            try {
                // Use @iarna/toml parser which handles Stellar TOML format well
                var parsed = toml.parse(tomlText);
                return parsed;
            }
            catch (error) {
                this.logger.error("Failed to parse TOML: ".concat(error.message));
                return null;
            }
        };
        /**
         * Resolve a potentially relative URL to absolute
         */
        TomlFetcherService_1.prototype.resolveUrl = function (url, toml) {
            var _a;
            if (!url)
                return url;
            // Already absolute URL
            if (url.startsWith('http://') || url.startsWith('https://')) {
                return url;
            }
            // Try to construct from ORG_URL in DOCUMENTATION
            var orgUrl = (_a = toml.DOCUMENTATION) === null || _a === void 0 ? void 0 : _a.ORG_URL;
            if (orgUrl) {
                var base = orgUrl.replace(/\/$/, '');
                var path = url.startsWith('/') ? url : "/".concat(url);
                return "".concat(base).concat(path);
            }
            // Return as-is if we can't resolve
            return url;
        };
        return TomlFetcherService_1;
    }());
    __setFunctionName(_classThis, "TomlFetcherService");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        TomlFetcherService = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return TomlFetcherService = _classThis;
}();
exports.TomlFetcherService = TomlFetcherService;
