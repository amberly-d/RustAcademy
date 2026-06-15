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
exports.UsernamesService = void 0;
var common_1 = require("@nestjs/common");
var cursor_util_1 = require("../common/pagination/cursor.util");
var supabase_errors_1 = require("../supabase/supabase.errors");
var constants_1 = require("./constants");
var errors_1 = require("./errors");
var UsernamesService = function () {
    var _classDecorators = [(0, common_1.Injectable)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var UsernamesService = _classThis = /** @class */ (function () {
        function UsernamesService_1(supabase, config, cache) {
            this.supabase = supabase;
            this.config = config;
            this.cache = cache;
        }
        /**
         * Normalize username for storage (lowercase).
         */
        UsernamesService_1.prototype.normalizeUsername = function (username) {
            return username.trim().toLowerCase();
        };
        /**
         * Validate format server-side (length and pattern). DTO already validates; this is a safeguard.
         */
        UsernamesService_1.prototype.validateFormat = function (username) {
            var normalized = this.normalizeUsername(username);
            if (normalized.length < constants_1.USERNAME_MIN_LENGTH ||
                normalized.length > constants_1.USERNAME_MAX_LENGTH) {
                throw new errors_1.UsernameValidationError(errors_1.UsernameErrorCode.INVALID_FORMAT, "Username must be between ".concat(constants_1.USERNAME_MIN_LENGTH, " and ").concat(constants_1.USERNAME_MAX_LENGTH, " characters"), "username");
            }
            if (!constants_1.USERNAME_PATTERN.test(normalized)) {
                throw new errors_1.UsernameValidationError(errors_1.UsernameErrorCode.INVALID_FORMAT, "Username must contain only lowercase letters, numbers, and underscores", "username");
            }
        };
        UsernamesService_1.prototype.create = function (username, publicKey) {
            return __awaiter(this, void 0, void 0, function () {
                var normalized, maxPerWallet, count, error_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            normalized = this.normalizeUsername(username);
                            this.validateFormat(username);
                            maxPerWallet = this.config.maxUsernamesPerWallet;
                            if (!(typeof maxPerWallet === "number" && maxPerWallet > 0)) return [3 /*break*/, 2];
                            return [4 /*yield*/, this.countByPublicKey(publicKey)];
                        case 1:
                            count = _a.sent();
                            if (count >= maxPerWallet) {
                                throw new errors_1.UsernameLimitExceededError(publicKey, maxPerWallet);
                            }
                            _a.label = 2;
                        case 2:
                            _a.trys.push([2, 4, , 5]);
                            return [4 /*yield*/, this.supabase.insertUsername(normalized, publicKey)];
                        case 3:
                            _a.sent();
                            return [3 /*break*/, 5];
                        case 4:
                            error_1 = _a.sent();
                            if (error_1 instanceof supabase_errors_1.SupabaseUniqueConstraintError) {
                                throw new errors_1.UsernameConflictError(normalized);
                            }
                            throw error_1;
                        case 5: return [2 /*return*/, { ok: true }];
                    }
                });
            });
        };
        /**
         * Count usernames registered for a wallet (for limit enforcement).
         */
        UsernamesService_1.prototype.countByPublicKey = function (publicKey) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.supabase.countUsernamesByPublicKey(publicKey)];
                });
            });
        };
        /**
         * List usernames for a wallet.
         */
        UsernamesService_1.prototype.listByPublicKey = function (publicKey) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.supabase.listUsernamesByPublicKey(publicKey)];
                });
            });
        };
        /**
         * Search for public usernames with fuzzy matching.
         * Returns profiles sorted by similarity score.
         */
        UsernamesService_1.prototype.searchPublicUsernames = function (query_1) {
            return __awaiter(this, arguments, void 0, function (query, limit, cursor) {
                var normalizedQuery, decodedCursor, effectiveLimit, fetchWindow, results, windowed, cursorIndex, hasMore, data, nextCursor, last;
                if (limit === void 0) { limit = 10; }
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            normalizedQuery = this.normalizeUsername(query);
                            decodedCursor = cursor ? (0, cursor_util_1.decodeCursor)(cursor) : null;
                            if (!normalizedQuery || normalizedQuery.length < 2) {
                                throw new errors_1.UsernameValidationError(errors_1.UsernameErrorCode.INVALID_FORMAT, "Search query must be at least 2 characters", "query");
                            }
                            effectiveLimit = Math.min(100, Math.max(1, limit));
                            fetchWindow = decodedCursor ? 100 : effectiveLimit + 1;
                            return [4 /*yield*/, this.supabase.searchPublicUsernames(normalizedQuery, fetchWindow)];
                        case 1:
                            results = _a.sent();
                            windowed = results;
                            if (decodedCursor) {
                                cursorIndex = results.findIndex(function (row) {
                                    return row.id === decodedCursor.id && row.created_at === decodedCursor.pk;
                                });
                                if (cursorIndex >= 0) {
                                    windowed = results.slice(cursorIndex + 1);
                                }
                                else {
                                    // Fallback comparator for cursor continuity when the exact row is no longer in range.
                                    windowed = results.filter(function (row) {
                                        return row.created_at < decodedCursor.pk ||
                                            (row.created_at === decodedCursor.pk && row.id < decodedCursor.id);
                                    });
                                }
                            }
                            hasMore = windowed.length > effectiveLimit;
                            data = hasMore ? windowed.slice(0, effectiveLimit) : windowed;
                            nextCursor = null;
                            if (hasMore && data.length > 0) {
                                last = data[data.length - 1];
                                nextCursor = Buffer.from(JSON.stringify({ pk: last.created_at, id: last.id }), "utf-8").toString("base64url");
                            }
                            // Update activity timestamp for clicked results (async, non-blocking)
                            if (data.length > 0) {
                                this.supabase.updateUsernameActivity(data[0].username).catch(function () {
                                    // Ignore errors - activity tracking is best-effort
                                });
                            }
                            return [2 /*return*/, { data: data, next_cursor: nextCursor, has_more: hasMore }];
                    }
                });
            });
        };
        /**
         * Get trending creators based on transaction volume.
         * Defaults to last 24 hours, configurable via timeWindowHours.
         */
        UsernamesService_1.prototype.getTrendingCreators = function () {
            return __awaiter(this, arguments, void 0, function (timeWindowHours, limit, cursor) {
                var effectiveLimit, results, hasMore, data, nextCursor, last;
                if (timeWindowHours === void 0) { timeWindowHours = 24; }
                if (limit === void 0) { limit = 10; }
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            // Validate cursor format if provided (actual filtering handled by limit+1 strategy)
                            if (cursor) {
                                (0, cursor_util_1.decodeCursor)(cursor);
                            }
                            if (timeWindowHours < 1 || timeWindowHours > 720) {
                                throw new errors_1.UsernameValidationError(errors_1.UsernameErrorCode.INVALID_FORMAT, "Time window must be between 1 and 720 hours", "timeWindowHours");
                            }
                            effectiveLimit = Math.min(100, Math.max(1, limit));
                            return [4 /*yield*/, this.supabase.getTrendingCreators(timeWindowHours, effectiveLimit + 1)];
                        case 1:
                            results = _a.sent();
                            hasMore = results.length > effectiveLimit;
                            data = hasMore ? results.slice(0, effectiveLimit) : results;
                            nextCursor = null;
                            if (hasMore && data.length > 0) {
                                last = data[data.length - 1];
                                nextCursor = Buffer.from(JSON.stringify({ pk: last.created_at, id: last.id }), "utf-8").toString("base64url");
                            }
                            return [2 /*return*/, { data: data, next_cursor: nextCursor, has_more: hasMore }];
                    }
                });
            });
        };
        /**
         * Get recently active users based on payment activity and profile updates.
         * Defaults to last 24 hours, configurable via timeWindowHours.
         */
        UsernamesService_1.prototype.getRecentlyActiveUsers = function () {
            return __awaiter(this, arguments, void 0, function (timeWindowHours, limit, cursor) {
                var effectiveLimit, results, hasMore, data, nextCursor, last;
                if (timeWindowHours === void 0) { timeWindowHours = 24; }
                if (limit === void 0) { limit = 10; }
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            // Validate cursor format if provided (actual filtering handled by limit+1 strategy)
                            if (cursor) {
                                (0, cursor_util_1.decodeCursor)(cursor);
                            }
                            if (timeWindowHours < 1 || timeWindowHours > 168) {
                                throw new errors_1.UsernameValidationError(errors_1.UsernameErrorCode.INVALID_FORMAT, "Time window must be between 1 and 168 hours", "timeWindowHours");
                            }
                            effectiveLimit = Math.min(100, Math.max(1, limit));
                            return [4 /*yield*/, this.supabase.getRecentlyActiveUsers(timeWindowHours, effectiveLimit + 1)];
                        case 1:
                            results = _a.sent();
                            hasMore = results.length > effectiveLimit;
                            data = hasMore ? results.slice(0, effectiveLimit) : results;
                            nextCursor = null;
                            if (hasMore && data.length > 0) {
                                last = data[data.length - 1];
                                nextCursor = Buffer.from(JSON.stringify({ pk: last.created_at, id: last.id }), "utf-8").toString("base64url");
                            }
                            return [2 /*return*/, { data: data, next_cursor: nextCursor, has_more: hasMore }];
                    }
                });
            });
        };
        /**
         * Toggle public profile visibility for a username.
         */
        UsernamesService_1.prototype.togglePublicProfile = function (username, publicKey, isPublic) {
            return __awaiter(this, void 0, void 0, function () {
                var normalized, usernames, owned;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            normalized = this.normalizeUsername(username);
                            return [4 /*yield*/, this.listByPublicKey(publicKey)];
                        case 1:
                            usernames = _a.sent();
                            owned = usernames.find(function (u) { return u.username === normalized; });
                            if (!owned) {
                                throw new errors_1.UsernameValidationError(errors_1.UsernameErrorCode.NOT_FOUND, "Username not found or does not belong to this wallet", "username");
                            }
                            return [4 /*yield*/, this.supabase.togglePublicProfile(normalized, isPublic)];
                        case 2:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        return UsernamesService_1;
    }());
    __setFunctionName(_classThis, "UsernamesService");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        UsernamesService = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return UsernamesService = _classThis;
}();
exports.UsernamesService = UsernamesService;
