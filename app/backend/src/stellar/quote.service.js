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
exports.QuoteService = void 0;
var common_1 = require("@nestjs/common");
var crypto = require("crypto");
var DEFAULT_SLIPPAGE_BPS = 50; // 0.5%
var DEFAULT_TTL_SECONDS = 30;
var QuoteService = function () {
    var _classDecorators = [(0, common_1.Injectable)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var QuoteService = _classThis = /** @class */ (function () {
        function QuoteService_1(pathPreview) {
            this.pathPreview = pathPreview;
            this.logger = new common_1.Logger(QuoteService.name);
            /** In-memory store — sufficient for debugging/dispute resolution per spec. */
            this.store = new Map();
        }
        QuoteService_1.prototype.createQuote = function (dto) {
            return __awaiter(this, void 0, void 0, function () {
                var slippageBps, ttl, _a, paths, horizonUrl, slippageFactor, quotePaths, quoteId, expiresAt, preflight, response;
                var _b, _c;
                return __generator(this, function (_d) {
                    switch (_d.label) {
                        case 0:
                            slippageBps = (_b = dto.maxSlippageBps) !== null && _b !== void 0 ? _b : DEFAULT_SLIPPAGE_BPS;
                            ttl = (_c = dto.ttlSeconds) !== null && _c !== void 0 ? _c : DEFAULT_TTL_SECONDS;
                            return [4 /*yield*/, this.pathPreview.previewPaths({
                                    destinationAmount: dto.destinationAmount,
                                    destinationAsset: dto.destinationAsset,
                                    sourceAssets: dto.sourceAssets,
                                })];
                        case 1:
                            _a = _d.sent(), paths = _a.paths, horizonUrl = _a.horizonUrl;
                            if (paths.length === 0) {
                                throw new common_1.BadRequestException({
                                    code: "NO_PATH_FOUND",
                                    message: "No payment path found for the requested asset pair.",
                                });
                            }
                            slippageFactor = 1 + slippageBps / 10000;
                            quotePaths = paths.map(function (p) {
                                var srcNum = parseFloat(p.sourceAmount);
                                var srcWithSlippage = isFinite(srcNum)
                                    ? (srcNum * slippageFactor).toFixed(7)
                                    : p.sourceAmount;
                                var destNum = parseFloat(p.destinationAmount);
                                var platformFee = isFinite(destNum) ? (destNum * 0.01).toFixed(7) : "0.0000000";
                                var networkFee = "0.0000100"; // 100 stroops
                                // Combining fees of potentially different assets into a single string is non-trivial without an oracle, 
                                // but for API consistency we return the platform fee as the total fee (assuming the user pays network fee separately in XLM).
                                var totalFee = platformFee;
                                return {
                                    sourceAsset: p.sourceAsset,
                                    sourceAmount: p.sourceAmount,
                                    sourceAmountWithSlippage: srcWithSlippage,
                                    destinationAsset: p.destinationAsset,
                                    destinationAmount: p.destinationAmount,
                                    pathHops: p.pathHops,
                                    rateDescription: p.rateDescription,
                                    feeBreakdown: {
                                        networkFee: networkFee,
                                        platformFee: platformFee,
                                        totalFee: totalFee,
                                    },
                                };
                            });
                            quoteId = "qx_".concat(crypto.randomBytes(12).toString("hex"));
                            expiresAt = new Date(Date.now() + ttl * 1000);
                            if (dto.preflight) {
                                // Preflight is a best-effort feasibility signal — never blocks quote creation
                                preflight = { feasible: true };
                                this.logger.debug("Preflight requested for quote ".concat(quoteId, " (stub: feasible)"));
                            }
                            response = {
                                quoteId: quoteId,
                                paths: quotePaths,
                                expiresAt: expiresAt.toISOString(),
                                maxSlippageBps: slippageBps,
                                horizonUrl: horizonUrl,
                                preflight: preflight,
                            };
                            this.store.set(quoteId, { response: response, expiresAt: expiresAt });
                            this.logger.log("Quote created: ".concat(quoteId, " expires ").concat(expiresAt.toISOString()));
                            // Evict expired entries lazily to avoid unbounded growth
                            this.evictExpired();
                            return [2 /*return*/, response];
                    }
                });
            });
        };
        QuoteService_1.prototype.getQuote = function (quoteId) {
            var entry = this.store.get(quoteId);
            if (!entry) {
                throw new common_1.NotFoundException({ code: "QUOTE_NOT_FOUND", message: "Quote not found." });
            }
            if (entry.expiresAt <= new Date()) {
                this.store.delete(quoteId);
                throw new common_1.GoneException({ code: "QUOTE_EXPIRED", message: "Quote has expired." });
            }
            return entry.response;
        };
        QuoteService_1.prototype.evictExpired = function () {
            var now = new Date();
            for (var _i = 0, _a = this.store; _i < _a.length; _i++) {
                var _b = _a[_i], id = _b[0], entry = _b[1];
                if (entry.expiresAt <= now)
                    this.store.delete(id);
            }
        };
        return QuoteService_1;
    }());
    __setFunctionName(_classThis, "QuoteService");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        QuoteService = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return QuoteService = _classThis;
}();
exports.QuoteService = QuoteService;
