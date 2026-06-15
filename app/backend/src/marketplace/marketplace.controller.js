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
exports.MarketplaceController = void 0;
var common_1 = require("@nestjs/common");
var swagger_1 = require("@nestjs/swagger");
var dto_1 = require("./dto");
var errors_1 = require("./errors");
var MarketplaceController = function () {
    var _classDecorators = [(0, swagger_1.ApiTags)('marketplace'), (0, common_1.Controller)('marketplace')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _instanceExtraInitializers = [];
    var _listUsername_decorators;
    var _getActiveListings_decorators;
    var _getListing_decorators;
    var _cancelListing_decorators;
    var _placeBid_decorators;
    var _getBids_decorators;
    var _acceptBid_decorators;
    var MarketplaceController = _classThis = /** @class */ (function () {
        function MarketplaceController_1(marketplaceService) {
            this.marketplaceService = (__runInitializers(this, _instanceExtraInitializers), marketplaceService);
        }
        MarketplaceController_1.prototype.listUsername = function (body) {
            return __awaiter(this, void 0, void 0, function () {
                var listing, err_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, this.marketplaceService.listUsername(body.username, body.sellerPublicKey, body.askingPrice)];
                        case 1:
                            listing = _a.sent();
                            return [2 /*return*/, { listing: listing }];
                        case 2:
                            err_1 = _a.sent();
                            if (err_1 instanceof errors_1.MarketplaceError) {
                                this.throwHttp(err_1);
                            }
                            throw err_1;
                        case 3: return [2 /*return*/];
                    }
                });
            });
        };
        MarketplaceController_1.prototype.getActiveListings = function () {
            return __awaiter(this, arguments, void 0, function (limit, cursor) {
                var result;
                if (limit === void 0) { limit = 20; }
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.marketplaceService.getActiveListings(Number(limit), cursor !== null && cursor !== void 0 ? cursor : null)];
                        case 1:
                            result = _a.sent();
                            return [2 /*return*/, {
                                    listings: result.listings,
                                    total: result.total,
                                    next_cursor: result.next_cursor,
                                    has_more: result.has_more,
                                }];
                    }
                });
            });
        };
        MarketplaceController_1.prototype.getListing = function (listingId) {
            return __awaiter(this, void 0, void 0, function () {
                var listing, err_2;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, this.marketplaceService.getListing(listingId)];
                        case 1:
                            listing = _a.sent();
                            return [2 /*return*/, { listing: listing }];
                        case 2:
                            err_2 = _a.sent();
                            if (err_2 instanceof errors_1.MarketplaceError) {
                                this.throwHttp(err_2);
                            }
                            throw err_2;
                        case 3: return [2 /*return*/];
                    }
                });
            });
        };
        MarketplaceController_1.prototype.cancelListing = function (listingId, body) {
            return __awaiter(this, void 0, void 0, function () {
                var err_3;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, this.marketplaceService.cancelListing(listingId, body.sellerPublicKey)];
                        case 1:
                            _a.sent();
                            return [2 /*return*/, { ok: true }];
                        case 2:
                            err_3 = _a.sent();
                            if (err_3 instanceof errors_1.MarketplaceError) {
                                this.throwHttp(err_3);
                            }
                            throw err_3;
                        case 3: return [2 /*return*/];
                    }
                });
            });
        };
        MarketplaceController_1.prototype.placeBid = function (listingId, body) {
            return __awaiter(this, void 0, void 0, function () {
                var bid, err_4;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, this.marketplaceService.placeBid(listingId, body.bidderPublicKey, body.bidAmount)];
                        case 1:
                            bid = _a.sent();
                            return [2 /*return*/, { bid: bid }];
                        case 2:
                            err_4 = _a.sent();
                            if (err_4 instanceof errors_1.MarketplaceError) {
                                this.throwHttp(err_4);
                            }
                            throw err_4;
                        case 3: return [2 /*return*/];
                    }
                });
            });
        };
        MarketplaceController_1.prototype.getBids = function (listingId_1) {
            return __awaiter(this, arguments, void 0, function (listingId, limit, cursor) {
                var result, err_5;
                if (limit === void 0) { limit = 20; }
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, this.marketplaceService.getBids(listingId, Number(limit), cursor !== null && cursor !== void 0 ? cursor : null)];
                        case 1:
                            result = _a.sent();
                            return [2 /*return*/, {
                                    bids: result.bids,
                                    next_cursor: result.next_cursor,
                                    has_more: result.has_more,
                                }];
                        case 2:
                            err_5 = _a.sent();
                            if (err_5 instanceof errors_1.MarketplaceError) {
                                this.throwHttp(err_5);
                            }
                            throw err_5;
                        case 3: return [2 /*return*/];
                    }
                });
            });
        };
        MarketplaceController_1.prototype.acceptBid = function (listingId, bidId, body) {
            return __awaiter(this, void 0, void 0, function () {
                var err_6;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, this.marketplaceService.acceptBid(listingId, bidId, body.sellerPublicKey)];
                        case 1:
                            _a.sent();
                            return [2 /*return*/, { ok: true }];
                        case 2:
                            err_6 = _a.sent();
                            if (err_6 instanceof errors_1.MarketplaceError) {
                                this.throwHttp(err_6);
                            }
                            throw err_6;
                        case 3: return [2 /*return*/];
                    }
                });
            });
        };
        MarketplaceController_1.prototype.throwHttp = function (err) {
            switch (err.code) {
                case errors_1.MarketplaceErrorCode.LISTING_NOT_FOUND:
                case errors_1.MarketplaceErrorCode.BID_NOT_FOUND:
                    throw new common_1.NotFoundException({ code: err.code, message: err.message });
                case errors_1.MarketplaceErrorCode.UNAUTHORIZED:
                case errors_1.MarketplaceErrorCode.USERNAME_NOT_OWNED:
                    throw new common_1.ForbiddenException({ code: err.code, message: err.message });
                case errors_1.MarketplaceErrorCode.ALREADY_LISTED:
                    throw new common_1.ConflictException({ code: err.code, message: err.message });
                default:
                    throw new common_1.BadRequestException({ code: err.code, message: err.message });
            }
        };
        return MarketplaceController_1;
    }());
    __setFunctionName(_classThis, "MarketplaceController");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _listUsername_decorators = [(0, common_1.Post)('list'), (0, swagger_1.ApiOperation)({ summary: 'List a username for sale' }), (0, swagger_1.ApiBody)({ type: dto_1.ListUsernameDto }), (0, swagger_1.ApiResponse)({ status: 201, description: 'Listing created' }), (0, swagger_1.ApiResponse)({ status: 400, description: 'Invalid input' }), (0, swagger_1.ApiResponse)({ status: 403, description: 'Username not owned by this wallet' }), (0, swagger_1.ApiResponse)({ status: 409, description: 'Username already listed' })];
        _getActiveListings_decorators = [(0, common_1.Get)(), (0, swagger_1.ApiOperation)({ summary: 'Get all active listings' }), (0, swagger_1.ApiQuery)({ name: 'limit', required: false, example: 20, description: 'Items per page (1-100)' }), (0, swagger_1.ApiQuery)({ name: 'cursor', required: false, description: 'Opaque pagination cursor' }), (0, swagger_1.ApiResponse)({ status: 200, description: 'List of active listings' })];
        _getListing_decorators = [(0, common_1.Get)(':listingId'), (0, swagger_1.ApiOperation)({ summary: 'Get a specific listing' }), (0, swagger_1.ApiParam)({ name: 'listingId', description: 'Listing UUID' }), (0, swagger_1.ApiResponse)({ status: 200, description: 'Listing details' }), (0, swagger_1.ApiResponse)({ status: 404, description: 'Listing not found' })];
        _cancelListing_decorators = [(0, common_1.Delete)(':listingId'), (0, swagger_1.ApiOperation)({ summary: 'Cancel a listing' }), (0, swagger_1.ApiParam)({ name: 'listingId', description: 'Listing UUID' }), (0, swagger_1.ApiBody)({ type: dto_1.CancelListingDto }), (0, swagger_1.ApiResponse)({ status: 200, description: 'Listing cancelled' }), (0, swagger_1.ApiResponse)({ status: 403, description: 'Not the seller' }), (0, swagger_1.ApiResponse)({ status: 404, description: 'Listing not found' })];
        _placeBid_decorators = [(0, common_1.Post)(':listingId/bid'), (0, swagger_1.ApiOperation)({ summary: 'Place a bid on a listing' }), (0, swagger_1.ApiParam)({ name: 'listingId', description: 'Listing UUID' }), (0, swagger_1.ApiBody)({ type: dto_1.PlaceBidDto }), (0, swagger_1.ApiResponse)({ status: 201, description: 'Bid placed' }), (0, swagger_1.ApiResponse)({ status: 400, description: 'Seller cannot bid on own listing' }), (0, swagger_1.ApiResponse)({ status: 404, description: 'Listing not found' })];
        _getBids_decorators = [(0, common_1.Get)(':listingId/bids'), (0, swagger_1.ApiOperation)({ summary: 'Get all bids for a listing' }), (0, swagger_1.ApiParam)({ name: 'listingId', description: 'Listing UUID' }), (0, swagger_1.ApiQuery)({ name: 'limit', required: false, description: 'Items per page (1-100)', example: 20 }), (0, swagger_1.ApiQuery)({ name: 'cursor', required: false, description: 'Opaque pagination cursor' }), (0, swagger_1.ApiResponse)({ status: 200, description: 'List of bids' }), (0, swagger_1.ApiResponse)({ status: 404, description: 'Listing not found' })];
        _acceptBid_decorators = [(0, common_1.Post)(':listingId/accept-bid/:bidId'), (0, swagger_1.ApiOperation)({ summary: 'Accept a bid — atomically transfers username ownership' }), (0, swagger_1.ApiParam)({ name: 'listingId', description: 'Listing UUID' }), (0, swagger_1.ApiParam)({ name: 'bidId', description: 'Bid UUID' }), (0, swagger_1.ApiBody)({ type: dto_1.AcceptBidDto }), (0, swagger_1.ApiResponse)({ status: 200, description: 'Bid accepted and ownership transferred' }), (0, swagger_1.ApiResponse)({ status: 400, description: 'Bid not pending or listing not active' }), (0, swagger_1.ApiResponse)({ status: 403, description: 'Not the seller' }), (0, swagger_1.ApiResponse)({ status: 404, description: 'Listing or bid not found' })];
        __esDecorate(_classThis, null, _listUsername_decorators, { kind: "method", name: "listUsername", static: false, private: false, access: { has: function (obj) { return "listUsername" in obj; }, get: function (obj) { return obj.listUsername; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _getActiveListings_decorators, { kind: "method", name: "getActiveListings", static: false, private: false, access: { has: function (obj) { return "getActiveListings" in obj; }, get: function (obj) { return obj.getActiveListings; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _getListing_decorators, { kind: "method", name: "getListing", static: false, private: false, access: { has: function (obj) { return "getListing" in obj; }, get: function (obj) { return obj.getListing; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _cancelListing_decorators, { kind: "method", name: "cancelListing", static: false, private: false, access: { has: function (obj) { return "cancelListing" in obj; }, get: function (obj) { return obj.cancelListing; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _placeBid_decorators, { kind: "method", name: "placeBid", static: false, private: false, access: { has: function (obj) { return "placeBid" in obj; }, get: function (obj) { return obj.placeBid; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _getBids_decorators, { kind: "method", name: "getBids", static: false, private: false, access: { has: function (obj) { return "getBids" in obj; }, get: function (obj) { return obj.getBids; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _acceptBid_decorators, { kind: "method", name: "acceptBid", static: false, private: false, access: { has: function (obj) { return "acceptBid" in obj; }, get: function (obj) { return obj.acceptBid; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        MarketplaceController = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return MarketplaceController = _classThis;
}();
exports.MarketplaceController = MarketplaceController;
