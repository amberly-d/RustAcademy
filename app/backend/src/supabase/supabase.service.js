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
exports.SupabaseService = void 0;
var common_1 = require("@nestjs/common");
var supabase_js_1 = require("@supabase/supabase-js");
var reconciliation_types_1 = require("../reconciliation/types/reconciliation.types");
var supabase_errors_1 = require("./supabase.errors");
var SupabaseService = function () {
    var _classDecorators = [(0, common_1.Injectable)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var SupabaseService = _classThis = /** @class */ (function () {
        function SupabaseService_1(configService) {
            this.configService = configService;
            this.logger = new common_1.Logger(SupabaseService.name);
            // Environment variables are validated at startup via Joi schema,
            // so we can safely access them here without null checks
            var url = this.configService.supabaseUrl;
            var anonKey = this.configService.supabaseAnonKey;
            this.client = (0, supabase_js_1.createClient)(url, anonKey, {
                auth: {
                    persistSession: false,
                },
            });
            this.logger.log("Supabase client initialized successfully");
        }
        /**
         * Expose the underlying SupabaseClient for direct table access in repositories.
         */
        SupabaseService_1.prototype.getClient = function () {
            return this.client;
        };
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        SupabaseService_1.prototype.handleError = function (error) {
            var _a, _b;
            if ((error === null || error === void 0 ? void 0 : error.code) === "23505") {
                throw new supabase_errors_1.SupabaseUniqueConstraintError(error.message || "Unique constraint violation", error);
            }
            // Match common network/timeout issues or PostgREST generic errors
            if (((_a = error === null || error === void 0 ? void 0 : error.message) === null || _a === void 0 ? void 0 : _a.toLowerCase().includes("fetch")) ||
                ((_b = error === null || error === void 0 ? void 0 : error.message) === null || _b === void 0 ? void 0 : _b.toLowerCase().includes("network")) ||
                (error === null || error === void 0 ? void 0 : error.code) === "PGRST301") {
                throw new supabase_errors_1.SupabaseNetworkError(error.message || "Network error connecting to Supabase", error);
            }
            throw new supabase_errors_1.SupabaseError((error === null || error === void 0 ? void 0 : error.message) || "Unknown Supabase error", error === null || error === void 0 ? void 0 : error.code, error);
        };
        SupabaseService_1.prototype.insertUsername = function (username, publicKey) {
            return __awaiter(this, void 0, void 0, function () {
                var error;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.client.from("usernames").insert({
                                username: username,
                                public_key: publicKey,
                            })];
                        case 1:
                            error = (_a.sent()).error;
                            if (error)
                                this.handleError(error);
                            return [2 /*return*/];
                    }
                });
            });
        };
        SupabaseService_1.prototype.countUsernamesByPublicKey = function (publicKey) {
            return __awaiter(this, void 0, void 0, function () {
                var _a, count, error;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, this.client
                                .from("usernames")
                                .select("*", { count: "exact", head: true })
                                .eq("public_key", publicKey)];
                        case 1:
                            _a = _b.sent(), count = _a.count, error = _a.error;
                            if (error)
                                this.handleError(error);
                            return [2 /*return*/, count !== null && count !== void 0 ? count : 0];
                    }
                });
            });
        };
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        SupabaseService_1.prototype.listUsernamesByPublicKey = function (publicKey) {
            return __awaiter(this, void 0, void 0, function () {
                var _a, data, error;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, this.client
                                .from("usernames")
                                .select("id, username, public_key, created_at")
                                .eq("public_key", publicKey)
                                .order("created_at", { ascending: true })];
                        case 1:
                            _a = _b.sent(), data = _a.data, error = _a.error;
                            if (error)
                                this.handleError(error);
                            return [2 /*return*/, data !== null && data !== void 0 ? data : []];
                    }
                });
            });
        };
        // ---------------------------------------------------------------------------
        // Reconciliation helpers
        // ---------------------------------------------------------------------------
        SupabaseService_1.prototype.fetchPendingEscrows = function (statuses, limit) {
            return __awaiter(this, void 0, void 0, function () {
                var _a, data, error;
                var _b;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0: return [4 /*yield*/, this.client
                                .from("escrow_records")
                                .select("*")
                                .in("status", statuses)
                                .order("updated_at", { ascending: true })
                                .limit(limit)];
                        case 1:
                            _a = _c.sent(), data = _a.data, error = _a.error;
                            if (error)
                                this.handleError(error);
                            return [2 /*return*/, (_b = data) !== null && _b !== void 0 ? _b : []];
                    }
                });
            });
        };
        SupabaseService_1.prototype.fetchPendingPayments = function (statuses, limit) {
            return __awaiter(this, void 0, void 0, function () {
                var _a, data, error;
                var _b;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0: return [4 /*yield*/, this.client
                                .from("payment_records")
                                .select("*")
                                .in("status", statuses)
                                .order("updated_at", { ascending: true })
                                .limit(limit)];
                        case 1:
                            _a = _c.sent(), data = _a.data, error = _a.error;
                            if (error)
                                this.handleError(error);
                            return [2 /*return*/, (_b = data) !== null && _b !== void 0 ? _b : []];
                    }
                });
            });
        };
        SupabaseService_1.prototype.fetchPaidPayments = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _a, data, error;
                var _b;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0: return [4 /*yield*/, this.client
                                .from("payment_records")
                                .select("*")
                                .eq("status", reconciliation_types_1.PaymentDbStatus.Paid)
                                .order("created_at", { ascending: false })];
                        case 1:
                            _a = _c.sent(), data = _a.data, error = _a.error;
                            if (error)
                                this.handleError(error);
                            return [2 /*return*/, (_b = data) !== null && _b !== void 0 ? _b : []];
                    }
                });
            });
        };
        SupabaseService_1.prototype.updateEscrowStatus = function (id, status) {
            return __awaiter(this, void 0, void 0, function () {
                var error;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.client
                                .from("escrow_records")
                                .update({ status: status, updated_at: new Date().toISOString() })
                                .eq("id", id)];
                        case 1:
                            error = (_a.sent()).error;
                            if (error)
                                this.handleError(error);
                            return [2 /*return*/];
                    }
                });
            });
        };
        SupabaseService_1.prototype.updatePaymentStatus = function (id, status) {
            return __awaiter(this, void 0, void 0, function () {
                var error;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.client
                                .from("payment_records")
                                .update({ status: status, updated_at: new Date().toISOString() })
                                .eq("id", id)];
                        case 1:
                            error = (_a.sent()).error;
                            if (error)
                                this.handleError(error);
                            return [2 /*return*/];
                    }
                });
            });
        };
        SupabaseService_1.prototype.flagIrreconcilableEscrow = function (id, reason) {
            return __awaiter(this, void 0, void 0, function () {
                var error;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.client
                                .from("escrow_records")
                                .update({
                                status: "irreconcilable",
                                reconciliation_note: reason,
                                updated_at: new Date().toISOString(),
                            })
                                .eq("id", id)];
                        case 1:
                            error = (_a.sent()).error;
                            if (error)
                                this.handleError(error);
                            return [2 /*return*/];
                    }
                });
            });
        };
        SupabaseService_1.prototype.flagIrreconcilablePayment = function (id, reason) {
            return __awaiter(this, void 0, void 0, function () {
                var error;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.client
                                .from("payment_records")
                                .update({
                                status: "irreconcilable",
                                reconciliation_note: reason,
                                updated_at: new Date().toISOString(),
                            })
                                .eq("id", id)];
                        case 1:
                            error = (_a.sent()).error;
                            if (error)
                                this.handleError(error);
                            return [2 /*return*/];
                    }
                });
            });
        };
        SupabaseService_1.prototype.checkHealth = function () {
            return __awaiter(this, void 0, void 0, function () {
                var error, err_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, this.client
                                    .from("usernames")
                                    .select("id")
                                    .limit(1)];
                        case 1:
                            error = (_a.sent()).error;
                            if (error) {
                                this.logger.warn("Supabase health check failed: ".concat(error.message));
                                return [2 /*return*/, false];
                            }
                            return [2 /*return*/, true];
                        case 2:
                            err_1 = _a.sent();
                            this.logger.warn("Supabase health check threw an error: ".concat(err_1.message));
                            return [2 /*return*/, false];
                        case 3: return [2 /*return*/];
                    }
                });
            });
        };
        // ---------------------------------------------------------------------------
        // Public profile discovery helpers
        // ---------------------------------------------------------------------------
        /**
         * Search for public usernames with fuzzy matching using PostgreSQL trigram similarity
         */
        SupabaseService_1.prototype.searchPublicUsernames = function (query_1) {
            return __awaiter(this, arguments, void 0, function (query, limit) {
                var normalizedQuery, _a, data, error;
                if (limit === void 0) { limit = 10; }
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            normalizedQuery = query.trim().toLowerCase();
                            return [4 /*yield*/, this.client.rpc("search_usernames", {
                                    search_query: normalizedQuery,
                                    result_limit: limit,
                                })];
                        case 1:
                            _a = _b.sent(), data = _a.data, error = _a.error;
                            if (error) {
                                this.logger.warn("PostgreSQL function search_usernames not available, using fallback: ".concat(error.message));
                                // Fallback: simple LIKE query with wildcards
                                return [2 /*return*/, this.searchUsernamesFallback(normalizedQuery, limit)];
                            }
                            return [2 /*return*/, data !== null && data !== void 0 ? data : []];
                    }
                });
            });
        };
        /**
         * Fallback search when pg_trgm is not available
         */
        SupabaseService_1.prototype.searchUsernamesFallback = function (query, limit) {
            return __awaiter(this, void 0, void 0, function () {
                var escapedQuery, pattern, _a, data, error;
                var _this = this;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            escapedQuery = query.replace(/[%_]/g, "\\$&");
                            pattern = "%".concat(escapedQuery, "%");
                            return [4 /*yield*/, this.client
                                    .from("usernames")
                                    .select("id, username, public_key, created_at, last_active_at, is_public")
                                    .eq("is_public", true)
                                    .ilike("username", pattern)
                                    .order("last_active_at", { ascending: false })
                                    .limit(limit)];
                        case 1:
                            _a = _b.sent(), data = _a.data, error = _a.error;
                            if (error)
                                this.handleError(error);
                            // Calculate simple similarity score based on position and length
                            return [2 /*return*/, (data !== null && data !== void 0 ? data : [])
                                    .map(function (row) { return (__assign(__assign({}, row), { similarity_score: _this.calculateSimpleSimilarity(row.username, query) })); })
                                    .sort(function (a, b) { var _a, _b; return ((_a = b.similarity_score) !== null && _a !== void 0 ? _a : 0) - ((_b = a.similarity_score) !== null && _b !== void 0 ? _b : 0); })];
                    }
                });
            });
        };
        /**
         * Calculate simple similarity score (0-100) for fallback search
         */
        SupabaseService_1.prototype.calculateSimpleSimilarity = function (username, query) {
            var lowerUsername = username.toLowerCase();
            var lowerQuery = query.toLowerCase();
            // Exact match
            if (lowerUsername === lowerQuery)
                return 100;
            // Starts with query
            if (lowerUsername.startsWith(lowerQuery))
                return 90;
            // Contains query
            if (lowerUsername.includes(lowerQuery))
                return 75;
            // Partial match with some character overlap
            var commonChars = lowerUsername
                .split("")
                .filter(function (c) { return lowerQuery.includes(c); }).length;
            var maxLen = Math.max(lowerUsername.length, lowerQuery.length);
            return Math.round((commonChars / maxLen) * 100);
        };
        /**
         * Get trending creators based on transaction volume in a time window
         */
        SupabaseService_1.prototype.getTrendingCreators = function (timeWindowHours_1) {
            return __awaiter(this, arguments, void 0, function (timeWindowHours, limit) {
                var cutoffTime, _a, payments, paymentsError, volumeMap, processTransaction, topCreators, publicKeys, _b, profiles, profilesError;
                if (limit === void 0) { limit = 10; }
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            cutoffTime = new Date();
                            cutoffTime.setHours(cutoffTime.getHours() - timeWindowHours);
                            return [4 /*yield*/, this.client
                                    .from("payment_records")
                                    .select("sender_public_key, receiver_public_key, amount_usd, created_at")
                                    .gte("created_at", cutoffTime.toISOString())
                                    .in("status", ["completed", "pending"])];
                        case 1:
                            _a = _c.sent(), payments = _a.data, paymentsError = _a.error;
                            if (paymentsError) {
                                this.logger.warn("Failed to fetch payment records: ".concat(paymentsError.message));
                            }
                            volumeMap = new Map();
                            processTransaction = function (publicKey, amountUsd) {
                                if (!publicKey || amountUsd == null)
                                    return;
                                var current = volumeMap.get(publicKey) || { volume: 0, count: 0 };
                                current.volume += Number(amountUsd) || 0;
                                current.count += 1;
                                volumeMap.set(publicKey, current);
                            };
                            (payments !== null && payments !== void 0 ? payments : []).forEach(function (payment) {
                                processTransaction(payment.sender_public_key, payment.amount_usd);
                                processTransaction(payment.receiver_public_key, payment.amount_usd);
                            });
                            topCreators = Array.from(volumeMap.entries())
                                .sort(function (a, b) { return b[1].volume - a[1].volume; })
                                .slice(0, limit);
                            // Fetch public profiles for these creators
                            if (topCreators.length === 0) {
                                return [2 /*return*/, []];
                            }
                            publicKeys = topCreators.map(function (_a) {
                                var key = _a[0];
                                return key;
                            });
                            return [4 /*yield*/, this.client
                                    .from("usernames")
                                    .select("id, username, public_key, created_at, last_active_at, is_public")
                                    .in("public_key", publicKeys)
                                    .eq("is_public", true)];
                        case 2:
                            _b = _c.sent(), profiles = _b.data, profilesError = _b.error;
                            if (profilesError) {
                                this.logger.warn("Failed to fetch profiles: ".concat(profilesError.message));
                                return [2 /*return*/, []];
                            }
                            // Merge volume data with profile data
                            return [2 /*return*/, (profiles !== null && profiles !== void 0 ? profiles : [])
                                    .map(function (profile) {
                                    var found = topCreators.find(function (_a) {
                                        var key = _a[0];
                                        return key === profile.public_key;
                                    });
                                    var stats = found ? found[1] : { volume: 0, count: 0 };
                                    return __assign(__assign({}, profile), { transaction_volume: stats.volume, transaction_count: stats.count });
                                })
                                    .sort(function (a, b) {
                                    return (b.transaction_volume || 0) - (a.transaction_volume || 0);
                                })];
                    }
                });
            });
        };
        /**
         * Update last_active_at timestamp for a username
         */
        SupabaseService_1.prototype.updateUsernameActivity = function (username) {
            return __awaiter(this, void 0, void 0, function () {
                var error;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.client
                                .from("usernames")
                                .update({ last_active_at: new Date().toISOString() })
                                .eq("username", username)];
                        case 1:
                            error = (_a.sent()).error;
                            if (error)
                                this.handleError(error);
                            return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * Get recently active users based on payment activity and profile updates
         */
        SupabaseService_1.prototype.getRecentlyActiveUsers = function (timeWindowHours_1) {
            return __awaiter(this, arguments, void 0, function (timeWindowHours, limit) {
                var cutoffTime, _a, payments, paymentsError, activePublicKeys, _b, profileActivity, profileError, _c, profiles, profilesError, activityMap;
                if (limit === void 0) { limit = 10; }
                return __generator(this, function (_d) {
                    switch (_d.label) {
                        case 0:
                            cutoffTime = new Date();
                            cutoffTime.setHours(cutoffTime.getHours() - timeWindowHours);
                            return [4 /*yield*/, this.client
                                    .from("payment_records")
                                    .select("sender_public_key, receiver_public_key, created_at")
                                    .gte("created_at", cutoffTime.toISOString())
                                    .in("status", ["completed", "pending"])];
                        case 1:
                            _a = _d.sent(), payments = _a.data, paymentsError = _a.error;
                            if (paymentsError) {
                                this.logger.warn("Failed to fetch payment records for recently active: ".concat(paymentsError.message));
                            }
                            activePublicKeys = new Set();
                            (payments !== null && payments !== void 0 ? payments : []).forEach(function (payment) {
                                if (payment.sender_public_key)
                                    activePublicKeys.add(payment.sender_public_key);
                                if (payment.receiver_public_key)
                                    activePublicKeys.add(payment.receiver_public_key);
                            });
                            return [4 /*yield*/, this.client
                                    .from("usernames")
                                    .select("public_key")
                                    .gte("last_active_at", cutoffTime.toISOString())
                                    .eq("is_public", true)];
                        case 2:
                            _b = _d.sent(), profileActivity = _b.data, profileError = _b.error;
                            if (profileError) {
                                this.logger.warn("Failed to fetch profile activity: ".concat(profileError.message));
                            }
                            (profileActivity !== null && profileActivity !== void 0 ? profileActivity : []).forEach(function (profile) {
                                activePublicKeys.add(profile.public_key);
                            });
                            if (activePublicKeys.size === 0) {
                                return [2 /*return*/, []];
                            }
                            return [4 /*yield*/, this.client
                                    .from("usernames")
                                    .select("id, username, public_key, created_at, last_active_at, is_public")
                                    .in("public_key", Array.from(activePublicKeys))
                                    .eq("is_public", true)
                                    .order("last_active_at", { ascending: false })
                                    .limit(limit)];
                        case 3:
                            _c = _d.sent(), profiles = _c.data, profilesError = _c.error;
                            if (profilesError) {
                                this.logger.warn("Failed to fetch profiles: ".concat(profilesError.message));
                                return [2 /*return*/, []];
                            }
                            activityMap = new Map();
                            // Process payment activity
                            (payments !== null && payments !== void 0 ? payments : []).forEach(function (payment) {
                                var timestamp = payment.created_at;
                                if (payment.sender_public_key) {
                                    var current = activityMap.get(payment.sender_public_key);
                                    if (!current || timestamp > current) {
                                        activityMap.set(payment.sender_public_key, timestamp);
                                    }
                                }
                                if (payment.receiver_public_key) {
                                    var current = activityMap.get(payment.receiver_public_key);
                                    if (!current || timestamp > current) {
                                        activityMap.set(payment.receiver_public_key, timestamp);
                                    }
                                }
                            });
                            // Merge with profile data and sort by activity
                            return [2 /*return*/, (profiles !== null && profiles !== void 0 ? profiles : [])
                                    .map(function (profile) { return (__assign(__assign({}, profile), { last_active_at: activityMap.get(profile.public_key) || profile.last_active_at })); })
                                    .sort(function (a, b) {
                                    var aTime = new Date(a.last_active_at || a.created_at).getTime();
                                    var bTime = new Date(b.last_active_at || b.created_at).getTime();
                                    return bTime - aTime;
                                })
                                    .slice(0, limit)];
                    }
                });
            });
        };
        /**
         * Toggle public profile visibility
         */
        SupabaseService_1.prototype.togglePublicProfile = function (username, isPublic) {
            return __awaiter(this, void 0, void 0, function () {
                var error;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.client
                                .from("usernames")
                                .update({
                                is_public: isPublic,
                                last_active_at: new Date().toISOString(),
                            })
                                .eq("username", username)];
                        case 1:
                            error = (_a.sent()).error;
                            if (error)
                                this.handleError(error);
                            return [2 /*return*/];
                    }
                });
            });
        };
        SupabaseService_1.prototype.createListing = function (username, sellerPublicKey, askingPrice) {
            return __awaiter(this, void 0, void 0, function () {
                var _a, data, error;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, this.client
                                .from("username_marketplace")
                                .insert({
                                username: username,
                                seller_public_key: sellerPublicKey,
                                asking_price: askingPrice,
                            })
                                .select()
                                .single()];
                        case 1:
                            _a = _b.sent(), data = _a.data, error = _a.error;
                            if (error)
                                this.handleError(error);
                            return [2 /*return*/, data];
                    }
                });
            });
        };
        SupabaseService_1.prototype.getActiveListings = function (limit, cursor) {
            return __awaiter(this, void 0, void 0, function () {
                var effectiveLimit, query, json, parsed, _a, data, error, count, rows, hasMore, listings, nextCursor, last;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            effectiveLimit = Math.min(100, Math.max(1, limit));
                            query = this.client
                                .from('username_marketplace')
                                .select('*', { count: 'exact' })
                                .eq('status', 'active');
                            if (cursor) {
                                // Decode cursor
                                try {
                                    json = Buffer.from(cursor, 'base64url').toString('utf-8');
                                    parsed = JSON.parse(json);
                                    if (typeof parsed.pk === 'string' && typeof parsed.id === 'string') {
                                        query = query
                                            .lt('created_at', parsed.pk)
                                            .or("created_at.eq.".concat(parsed.pk, ",id.lt.").concat(parsed.id));
                                    }
                                }
                                catch (_c) {
                                    // invalid cursor – start from beginning
                                }
                            }
                            query = query
                                .order('created_at', { ascending: false })
                                .order('id', { ascending: false })
                                .limit(effectiveLimit + 1);
                            return [4 /*yield*/, query];
                        case 1:
                            _a = _b.sent(), data = _a.data, error = _a.error, count = _a.count;
                            if (error)
                                this.handleError(error);
                            rows = (data !== null && data !== void 0 ? data : []);
                            hasMore = rows.length > effectiveLimit;
                            listings = hasMore ? rows.slice(0, effectiveLimit) : rows;
                            nextCursor = null;
                            if (hasMore && listings.length > 0) {
                                last = listings[listings.length - 1];
                                nextCursor = Buffer.from(JSON.stringify({ pk: last.created_at, id: last.id }), 'utf-8').toString('base64url');
                            }
                            return [2 /*return*/, {
                                    listings: listings,
                                    next_cursor: nextCursor,
                                    has_more: hasMore,
                                    total: count !== null && count !== void 0 ? count : 0,
                                }];
                    }
                });
            });
        };
        SupabaseService_1.prototype.getBidsByListingIdPaginated = function (listingId, limit, cursor) {
            return __awaiter(this, void 0, void 0, function () {
                var effectiveLimit, query, json, parsed, _a, data, error, rows, hasMore, bids, nextCursor, last;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            effectiveLimit = Math.min(100, Math.max(1, limit));
                            query = this.client
                                .from('username_bids')
                                .select('*')
                                .eq('listing_id', listingId);
                            if (cursor) {
                                try {
                                    json = Buffer.from(cursor, 'base64url').toString('utf-8');
                                    parsed = JSON.parse(json);
                                    if (typeof parsed.pk === 'string' && typeof parsed.id === 'string') {
                                        query = query
                                            .lt('created_at', parsed.pk)
                                            .or("created_at.eq.".concat(parsed.pk, ",id.lt.").concat(parsed.id));
                                    }
                                }
                                catch (_c) {
                                    // invalid cursor
                                }
                            }
                            query = query
                                .order('created_at', { ascending: false })
                                .order('id', { ascending: false })
                                .limit(effectiveLimit + 1);
                            return [4 /*yield*/, query];
                        case 1:
                            _a = _b.sent(), data = _a.data, error = _a.error;
                            if (error)
                                this.handleError(error);
                            rows = (data !== null && data !== void 0 ? data : []);
                            hasMore = rows.length > effectiveLimit;
                            bids = hasMore ? rows.slice(0, effectiveLimit) : rows;
                            nextCursor = null;
                            if (hasMore && bids.length > 0) {
                                last = bids[bids.length - 1];
                                nextCursor = Buffer.from(JSON.stringify({ pk: last.created_at, id: last.id }), 'utf-8').toString('base64url');
                            }
                            return [2 /*return*/, { bids: bids, next_cursor: nextCursor, has_more: hasMore }];
                    }
                });
            });
        };
        SupabaseService_1.prototype.getListingById = function (listingId) {
            return __awaiter(this, void 0, void 0, function () {
                var _a, data, error;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, this.client
                                .from("username_marketplace")
                                .select("*")
                                .eq("id", listingId)
                                .maybeSingle()];
                        case 1:
                            _a = _b.sent(), data = _a.data, error = _a.error;
                            if (error)
                                this.handleError(error);
                            return [2 /*return*/, data];
                    }
                });
            });
        };
        SupabaseService_1.prototype.getActiveListingByUsername = function (username) {
            return __awaiter(this, void 0, void 0, function () {
                var _a, data, error;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, this.client
                                .from("username_marketplace")
                                .select("*")
                                .eq("username", username)
                                .eq("status", "active")
                                .maybeSingle()];
                        case 1:
                            _a = _b.sent(), data = _a.data, error = _a.error;
                            if (error)
                                this.handleError(error);
                            return [2 /*return*/, data];
                    }
                });
            });
        };
        SupabaseService_1.prototype.cancelListing = function (listingId) {
            return __awaiter(this, void 0, void 0, function () {
                var error;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.client
                                .from("username_marketplace")
                                .update({ status: "cancelled", updated_at: new Date().toISOString() })
                                .eq("id", listingId)];
                        case 1:
                            error = (_a.sent()).error;
                            if (error)
                                this.handleError(error);
                            return [2 /*return*/];
                    }
                });
            });
        };
        SupabaseService_1.prototype.placeBid = function (listingId, bidderPublicKey, bidAmount) {
            return __awaiter(this, void 0, void 0, function () {
                var _a, data, error;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, this.client
                                .from("username_bids")
                                .insert({
                                listing_id: listingId,
                                bidder_public_key: bidderPublicKey,
                                bid_amount: bidAmount,
                            })
                                .select()
                                .single()];
                        case 1:
                            _a = _b.sent(), data = _a.data, error = _a.error;
                            if (error)
                                this.handleError(error);
                            return [2 /*return*/, data];
                    }
                });
            });
        };
        SupabaseService_1.prototype.getBidsByListingId = function (listingId) {
            return __awaiter(this, void 0, void 0, function () {
                var _a, data, error;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, this.client
                                .from("username_bids")
                                .select("*")
                                .eq("listing_id", listingId)
                                .order("bid_amount", { ascending: false })];
                        case 1:
                            _a = _b.sent(), data = _a.data, error = _a.error;
                            if (error)
                                this.handleError(error);
                            return [2 /*return*/, (data !== null && data !== void 0 ? data : [])];
                    }
                });
            });
        };
        SupabaseService_1.prototype.getBidById = function (bidId) {
            return __awaiter(this, void 0, void 0, function () {
                var _a, data, error;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, this.client
                                .from("username_bids")
                                .select("*")
                                .eq("id", bidId)
                                .maybeSingle()];
                        case 1:
                            _a = _b.sent(), data = _a.data, error = _a.error;
                            if (error)
                                this.handleError(error);
                            return [2 /*return*/, data];
                    }
                });
            });
        };
        SupabaseService_1.prototype.acceptBid = function (listingId, bidId, sellerPublicKey) {
            return __awaiter(this, void 0, void 0, function () {
                var error;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.client.rpc("accept_username_bid", {
                                p_listing_id: listingId,
                                p_bid_id: bidId,
                                p_seller_public_key: sellerPublicKey,
                            })];
                        case 1:
                            error = (_a.sent()).error;
                            if (error)
                                this.handleError(error);
                            return [2 /*return*/];
                    }
                });
            });
        };
        SupabaseService_1.prototype.fetchVerifiedAssets = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _a, data, error;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, this.client
                                .from("verified_assets")
                                .select("*")
                                .order("code", { ascending: true })];
                        case 1:
                            _a = _b.sent(), data = _a.data, error = _a.error;
                            if (error)
                                this.handleError(error);
                            return [2 /*return*/, (data !== null && data !== void 0 ? data : [])];
                    }
                });
            });
        };
        SupabaseService_1.prototype.searchVerifiedAssets = function (query) {
            return __awaiter(this, void 0, void 0, function () {
                var pattern, _a, data, error;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            pattern = "%".concat(query.trim().toLowerCase(), "%");
                            return [4 /*yield*/, this.client
                                    .from("verified_assets")
                                    .select("*")
                                    .or("code.ilike.".concat(pattern, ",issuer.ilike.").concat(pattern))
                                    .order("code", { ascending: true })];
                        case 1:
                            _a = _b.sent(), data = _a.data, error = _a.error;
                            if (error)
                                this.handleError(error);
                            return [2 /*return*/, (data !== null && data !== void 0 ? data : [])];
                    }
                });
            });
        };
        SupabaseService_1.prototype.upsertVerifiedAsset = function (asset) {
            return __awaiter(this, void 0, void 0, function () {
                var selectQuery, _a, existing, selectError, _b, data, error, _c, data, error;
                return __generator(this, function (_d) {
                    switch (_d.label) {
                        case 0:
                            selectQuery = this.client
                                .from("verified_assets")
                                .select("*")
                                .eq("code", asset.code);
                            if (asset.issuer === null) {
                                selectQuery = selectQuery.is("issuer", null);
                            }
                            else {
                                selectQuery = selectQuery.eq("issuer", asset.issuer);
                            }
                            return [4 /*yield*/, selectQuery.maybeSingle()];
                        case 1:
                            _a = _d.sent(), existing = _a.data, selectError = _a.error;
                            if (selectError)
                                this.handleError(selectError);
                            if (!existing) return [3 /*break*/, 3];
                            return [4 /*yield*/, this.client
                                    .from("verified_assets")
                                    .update({
                                    type: asset.type,
                                    decimals: asset.decimals,
                                    icon_url: asset.icon_url,
                                    verified: asset.verified,
                                    updated_at: new Date().toISOString(),
                                })
                                    .eq("id", existing.id)
                                    .select()
                                    .single()];
                        case 2:
                            _b = _d.sent(), data = _b.data, error = _b.error;
                            if (error)
                                this.handleError(error);
                            return [2 /*return*/, data];
                        case 3: return [4 /*yield*/, this.client
                                .from("verified_assets")
                                .insert({
                                code: asset.code,
                                issuer: asset.issuer,
                                type: asset.type,
                                decimals: asset.decimals,
                                icon_url: asset.icon_url,
                                verified: asset.verified,
                            })
                                .select()
                                .single()];
                        case 4:
                            _c = _d.sent(), data = _c.data, error = _c.error;
                            if (error)
                                this.handleError(error);
                            return [2 /*return*/, data];
                    }
                });
            });
        };
        SupabaseService_1.prototype.updateAssetVerificationStatus = function (code, issuer, verified) {
            return __awaiter(this, void 0, void 0, function () {
                var query, _a, data, error;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            query = this.client
                                .from("verified_assets")
                                .update({
                                verified: verified,
                                updated_at: new Date().toISOString(),
                            })
                                .eq("code", code);
                            if (issuer === null) {
                                query = query.is("issuer", null);
                            }
                            else {
                                query = query.eq("issuer", issuer);
                            }
                            return [4 /*yield*/, query.select().maybeSingle()];
                        case 1:
                            _a = _b.sent(), data = _a.data, error = _a.error;
                            if (error)
                                this.handleError(error);
                            return [2 /*return*/, data];
                    }
                });
            });
        };
        return SupabaseService_1;
    }());
    __setFunctionName(_classThis, "SupabaseService");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        SupabaseService = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return SupabaseService = _classThis;
}();
exports.SupabaseService = SupabaseService;
