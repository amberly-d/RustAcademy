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
exports.UsernamesController = void 0;
var common_1 = require("@nestjs/common");
var throttler_1 = require("@nestjs/throttler");
// import { RateLimitGroup } from "../config/rate-limit.config";
var swagger_1 = require("@nestjs/swagger");
var dto_1 = require("../dto");
var errors_1 = require("./errors");
var UsernamesController = function () {
    var _classDecorators = [(0, swagger_1.ApiTags)("usernames"), (0, common_1.Controller)("username")];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _instanceExtraInitializers = [];
    var _createUsername_decorators;
    var _listUsernames_decorators;
    var _searchUsernames_decorators;
    var _getTrendingCreators_decorators;
    var _getRecentlyActive_decorators;
    var _togglePublicProfile_decorators;
    var UsernamesController = _classThis = /** @class */ (function () {
        function UsernamesController_1(usernamesService, eventEmitter) {
            this.usernamesService = (__runInitializers(this, _instanceExtraInitializers), usernamesService);
            this.eventEmitter = eventEmitter;
        }
        UsernamesController_1.prototype.createUsername = function (body) {
            return __awaiter(this, void 0, void 0, function () {
                var err_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, this.usernamesService.create(body.username, body.publicKey)];
                        case 1:
                            _a.sent();
                            return [3 /*break*/, 3];
                        case 2:
                            err_1 = _a.sent();
                            if (err_1 instanceof errors_1.UsernameConflictError) {
                                throw new common_1.ConflictException({
                                    code: "USERNAME_CONFLICT",
                                    message: err_1.message,
                                });
                            }
                            if (err_1 instanceof errors_1.UsernameLimitExceededError) {
                                throw new common_1.ForbiddenException({
                                    code: "USERNAME_LIMIT_EXCEEDED",
                                    message: err_1.message,
                                });
                            }
                            if (err_1 instanceof errors_1.UsernameValidationError) {
                                throw new common_1.BadRequestException({
                                    code: err_1.code,
                                    message: err_1.message,
                                    field: err_1.field,
                                });
                            }
                            throw err_1;
                        case 3:
                            this.eventEmitter.emit("username.claimed", {
                                username: body.username,
                                publicKey: body.publicKey,
                                timestamp: new Date().toISOString(),
                            });
                            return [2 /*return*/, { ok: true }];
                    }
                });
            });
        };
        UsernamesController_1.prototype.listUsernames = function (query) {
            return __awaiter(this, void 0, void 0, function () {
                var usernames;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.usernamesService.listByPublicKey(query.publicKey)];
                        case 1:
                            usernames = _a.sent();
                            return [2 /*return*/, { usernames: usernames }];
                    }
                });
            });
        };
        UsernamesController_1.prototype.searchUsernames = function (query) {
            return __awaiter(this, void 0, void 0, function () {
                var results;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.usernamesService.searchPublicUsernames(query.query, query.limit, query.cursor)];
                        case 1:
                            results = _a.sent();
                            return [2 /*return*/, {
                                    profiles: results.data.map(function (r) { return ({
                                        id: r.id,
                                        username: r.username,
                                        publicKey: r.public_key,
                                        lastActiveAt: r.last_active_at || r.created_at,
                                        createdAt: r.created_at,
                                        similarityScore: r.similarity_score,
                                    }); }),
                                    total: results.data.length,
                                    next_cursor: results.next_cursor,
                                    has_more: results.has_more,
                                }];
                    }
                });
            });
        };
        UsernamesController_1.prototype.getTrendingCreators = function (query) {
            return __awaiter(this, void 0, void 0, function () {
                var creators;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.usernamesService.getTrendingCreators(query.timeWindowHours, query.limit, query.cursor)];
                        case 1:
                            creators = _a.sent();
                            return [2 /*return*/, {
                                    creators: creators.data.map(function (c) { return ({
                                        id: c.id,
                                        username: c.username,
                                        publicKey: c.public_key,
                                        lastActiveAt: c.last_active_at || c.created_at,
                                        createdAt: c.created_at,
                                        transactionVolume: c.transaction_volume,
                                        transactionCount: c.transaction_count,
                                    }); }),
                                    timeWindowHours: query.timeWindowHours,
                                    calculatedAt: new Date().toISOString(),
                                    next_cursor: creators.next_cursor,
                                    has_more: creators.has_more,
                                }];
                    }
                });
            });
        };
        UsernamesController_1.prototype.getRecentlyActive = function (query) {
            return __awaiter(this, void 0, void 0, function () {
                var users;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.usernamesService.getRecentlyActiveUsers(query.timeWindowHours, query.limit, query.cursor)];
                        case 1:
                            users = _a.sent();
                            return [2 /*return*/, {
                                    users: users.data.map(function (u) { return ({
                                        id: u.id,
                                        username: u.username,
                                        publicKey: u.public_key,
                                        lastActiveAt: u.last_active_at || u.created_at,
                                        createdAt: u.created_at,
                                    }); }),
                                    timeWindowHours: query.timeWindowHours,
                                    calculatedAt: new Date().toISOString(),
                                    next_cursor: users.next_cursor,
                                    has_more: users.has_more,
                                }];
                    }
                });
            });
        };
        UsernamesController_1.prototype.togglePublicProfile = function (body) {
            return __awaiter(this, void 0, void 0, function () {
                var err_2;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, this.usernamesService.togglePublicProfile(body.username, body.publicKey, body.isPublic)];
                        case 1:
                            _a.sent();
                            return [2 /*return*/, { ok: true }];
                        case 2:
                            err_2 = _a.sent();
                            if (err_2 instanceof errors_1.UsernameValidationError) {
                                if (err_2.code === errors_1.UsernameErrorCode.NOT_FOUND) {
                                    throw new common_1.NotFoundException({
                                        code: errors_1.UsernameErrorCode.NOT_FOUND,
                                        message: err_2.message,
                                    });
                                }
                                throw new common_1.BadRequestException({
                                    code: err_2.code,
                                    message: err_2.message,
                                });
                            }
                            throw err_2;
                        case 3: return [2 /*return*/];
                    }
                });
            });
        };
        return UsernamesController_1;
    }());
    __setFunctionName(_classThis, "UsernamesController");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _createUsername_decorators = [(0, common_1.Post)(), (0, swagger_1.ApiOperation)({
                summary: "Create a new username",
                description: "Registers a new username for a user. Username must be 3-32 characters, " +
                    "lowercase alphanumeric with underscores only. Uniqueness is enforced; " +
                    "duplicate username returns 409 Conflict.",
            }), (0, swagger_1.ApiBody)({
                type: dto_1.CreateUsernameDto,
                description: "Username creation payload",
            }), (0, swagger_1.ApiResponse)({
                status: 201,
                description: "Username created successfully",
                type: dto_1.CreateUsernameResponseDto,
            }), (0, swagger_1.ApiResponse)({
                status: 400,
                description: "Invalid username format or validation failed",
            }), (0, swagger_1.ApiResponse)({
                status: 409,
                description: "Username already taken (conflict)",
            }), (0, swagger_1.ApiResponse)({
                status: 403,
                description: "Wallet has reached the maximum allowed usernames",
            })];
        _listUsernames_decorators = [(0, common_1.Get)(), (0, swagger_1.ApiOperation)({
                summary: "List usernames for a wallet",
                description: "Returns all usernames registered for the given Stellar public key.",
            }), (0, swagger_1.ApiQuery)({
                name: "publicKey",
                description: "Stellar public key of the wallet",
                required: true,
            }), (0, swagger_1.ApiResponse)({
                status: 200,
                description: "List of usernames",
                type: dto_1.ListUsernamesResponseDto,
            }), (0, swagger_1.ApiResponse)({
                status: 400,
                description: "Invalid or missing publicKey",
            })];
        _searchUsernames_decorators = [(0, common_1.Get)("search"), (0, throttler_1.Throttle)({ default: { limit: 20, ttl: 60000 } }), (0, swagger_1.ApiOperation)({
                summary: "Search public profiles",
                description: "Fuzzy search for public usernames. Returns profiles sorted by similarity score. " +
                    'Only profiles with "Public Profile" enabled will appear in search results.',
            }), (0, swagger_1.ApiQuery)({
                name: "query",
                description: "Search query for fuzzy matching (min 2 characters)",
                required: true,
                example: "alice",
            }), (0, swagger_1.ApiQuery)({
                name: "limit",
                description: "Maximum number of results (1-100)",
                required: false,
                example: 10,
            }), (0, swagger_1.ApiResponse)({
                status: 200,
                description: "List of public profiles matching the search query",
                type: dto_1.SearchUsernamesResponseDto,
            }), (0, swagger_1.ApiResponse)({
                status: 400,
                description: "Invalid search query",
            })];
        _getTrendingCreators_decorators = [(0, common_1.Get)("trending"), (0, throttler_1.Throttle)({ default: { limit: 10, ttl: 60000 } }), (0, swagger_1.ApiOperation)({
                summary: "Get trending creators",
                description: "Returns trending creator profiles based on transaction volume. " +
                    "Ranking is calculated from recent payment activity within the specified time window.",
            }), (0, swagger_1.ApiQuery)({
                name: "timeWindowHours",
                description: "Time window in hours for trending calculation (1-720)",
                required: false,
                example: 24,
            }), (0, swagger_1.ApiQuery)({
                name: "limit",
                description: "Maximum number of trending creators (1-100)",
                required: false,
                example: 10,
            }), (0, swagger_1.ApiResponse)({
                status: 200,
                description: "List of trending creator profiles sorted by volume",
                type: dto_1.TrendingCreatorsResponseDto,
            }), (0, swagger_1.ApiResponse)({
                status: 400,
                description: "Invalid time window parameter",
            })];
        _getRecentlyActive_decorators = [(0, common_1.Get)("recently-active"), (0, throttler_1.Throttle)({ default: { limit: 10, ttl: 60000 } }), (0, swagger_1.ApiOperation)({
                summary: "Get recently active users",
                description: "Returns users who have been recently active based on payment activity. " +
                    "Users are sorted by their most recent transaction or profile activity.",
            }), (0, swagger_1.ApiQuery)({
                name: "timeWindowHours",
                description: "Time window in hours to consider users as recently active (1-168)",
                required: false,
                example: 24,
            }), (0, swagger_1.ApiQuery)({
                name: "limit",
                description: "Maximum number of recently active users (1-100)",
                required: false,
                example: 10,
            }), (0, swagger_1.ApiResponse)({
                status: 200,
                description: "List of recently active public profiles sorted by last activity",
                type: dto_1.RecentlyActiveResponseDto,
            }), (0, swagger_1.ApiResponse)({
                status: 400,
                description: "Invalid time window parameter",
            })];
        _togglePublicProfile_decorators = [(0, common_1.Post)("toggle-public"), (0, swagger_1.ApiOperation)({
                summary: "Toggle public profile visibility",
                description: "Enable or disable public profile visibility for a username. " +
                    "Only the wallet owner can toggle their profile visibility.",
            }), (0, swagger_1.ApiBody)({
                schema: {
                    type: "object",
                    properties: {
                        username: { type: "string", example: "alice" },
                        publicKey: {
                            type: "string",
                            example: "GBXGQ55JMQ4L2B6E7S8Y9Z0A1B2C3D4E5F6G7H8I7YWR",
                        },
                        isPublic: { type: "boolean", example: true },
                    },
                    required: ["username", "publicKey", "isPublic"],
                },
            }), (0, swagger_1.ApiResponse)({
                status: 200,
                description: "Public profile visibility toggled successfully",
            }), (0, swagger_1.ApiResponse)({
                status: 404,
                description: "Username not found or does not belong to this wallet",
            }), (0, swagger_1.ApiResponse)({
                status: 400,
                description: "Invalid username format",
            })];
        __esDecorate(_classThis, null, _createUsername_decorators, { kind: "method", name: "createUsername", static: false, private: false, access: { has: function (obj) { return "createUsername" in obj; }, get: function (obj) { return obj.createUsername; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _listUsernames_decorators, { kind: "method", name: "listUsernames", static: false, private: false, access: { has: function (obj) { return "listUsernames" in obj; }, get: function (obj) { return obj.listUsernames; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _searchUsernames_decorators, { kind: "method", name: "searchUsernames", static: false, private: false, access: { has: function (obj) { return "searchUsernames" in obj; }, get: function (obj) { return obj.searchUsernames; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _getTrendingCreators_decorators, { kind: "method", name: "getTrendingCreators", static: false, private: false, access: { has: function (obj) { return "getTrendingCreators" in obj; }, get: function (obj) { return obj.getTrendingCreators; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _getRecentlyActive_decorators, { kind: "method", name: "getRecentlyActive", static: false, private: false, access: { has: function (obj) { return "getRecentlyActive" in obj; }, get: function (obj) { return obj.getRecentlyActive; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _togglePublicProfile_decorators, { kind: "method", name: "togglePublicProfile", static: false, private: false, access: { has: function (obj) { return "togglePublicProfile" in obj; }, get: function (obj) { return obj.togglePublicProfile; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        UsernamesController = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return UsernamesController = _classThis;
}();
exports.UsernamesController = UsernamesController;
