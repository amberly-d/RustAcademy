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
exports.NotificationPreferencesRepository = void 0;
var common_1 = require("@nestjs/common");
function mapRow(row) {
    var _a, _b, _c, _d, _e, _f;
    return {
        id: row.id,
        publicKey: row.public_key,
        channel: row.channel,
        email: (_a = row.email) !== null && _a !== void 0 ? _a : undefined,
        pushToken: (_b = row.push_token) !== null && _b !== void 0 ? _b : undefined,
        webhookUrl: (_c = row.webhook_url) !== null && _c !== void 0 ? _c : undefined,
        webhookSecret: (_d = row.webhook_secret) !== null && _d !== void 0 ? _d : undefined,
        events: (_e = row.events) !== null && _e !== void 0 ? _e : null,
        minAmountStroops: BigInt((_f = row.min_amount_stroops) !== null && _f !== void 0 ? _f : "0"),
        enabled: row.enabled,
    };
}
var NotificationPreferencesRepository = function () {
    var _classDecorators = [(0, common_1.Injectable)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var NotificationPreferencesRepository = _classThis = /** @class */ (function () {
        function NotificationPreferencesRepository_1(supabase) {
            this.supabase = supabase;
            this.logger = new common_1.Logger(NotificationPreferencesRepository.name);
        }
        /** Return all enabled preferences for a given public key. */
        NotificationPreferencesRepository_1.prototype.getEnabledPreferences = function (publicKey) {
            return __awaiter(this, void 0, void 0, function () {
                var _a, data, error;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, this.supabase
                                .getClient()
                                .from("notification_preferences")
                                .select("*")
                                .eq("public_key", publicKey)
                                .eq("enabled", true)];
                        case 1:
                            _a = _b.sent(), data = _a.data, error = _a.error;
                            if (error) {
                                this.logger.error("Failed to fetch preferences for ".concat(publicKey, ": ").concat(error.message));
                                throw error;
                            }
                            return [2 /*return*/, (data !== null && data !== void 0 ? data : []).map(mapRow)];
                    }
                });
            });
        };
        /** Upsert a preference row (creates or updates). */
        NotificationPreferencesRepository_1.prototype.upsertPreference = function (publicKey, channel, options) {
            return __awaiter(this, void 0, void 0, function () {
                var row, _a, data, error;
                var _b, _c, _d, _e, _f, _g, _h;
                return __generator(this, function (_j) {
                    switch (_j.label) {
                        case 0:
                            row = {
                                public_key: publicKey,
                                channel: channel,
                                email: (_b = options.email) !== null && _b !== void 0 ? _b : null,
                                push_token: (_c = options.pushToken) !== null && _c !== void 0 ? _c : null,
                                webhook_url: (_d = options.webhookUrl) !== null && _d !== void 0 ? _d : null,
                                webhook_secret: (_e = options.webhookSecret) !== null && _e !== void 0 ? _e : null,
                                events: (_f = options.events) !== null && _f !== void 0 ? _f : null,
                                min_amount_stroops: ((_g = options.minAmountStroops) !== null && _g !== void 0 ? _g : 0n).toString(),
                                enabled: (_h = options.enabled) !== null && _h !== void 0 ? _h : true,
                            };
                            return [4 /*yield*/, this.supabase
                                    .getClient()
                                    .from("notification_preferences")
                                    .upsert(row, { onConflict: "public_key,channel" })
                                    .select()
                                    .single()];
                        case 1:
                            _a = _j.sent(), data = _a.data, error = _a.error;
                            if (error) {
                                this.logger.error("Failed to upsert preference for ".concat(publicKey, "/").concat(channel, ": ").concat(error.message));
                                throw error;
                            }
                            return [2 /*return*/, mapRow(data)];
                    }
                });
            });
        };
        /** Disable a specific channel for a user (soft opt-out). */
        NotificationPreferencesRepository_1.prototype.disableChannel = function (publicKey, channel) {
            return __awaiter(this, void 0, void 0, function () {
                var error;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.supabase
                                .getClient()
                                .from("notification_preferences")
                                .update({ enabled: false })
                                .eq("public_key", publicKey)
                                .eq("channel", channel)];
                        case 1:
                            error = (_a.sent()).error;
                            if (error) {
                                this.logger.error("Failed to disable ".concat(channel, " for ").concat(publicKey, ": ").concat(error.message));
                                throw error;
                            }
                            return [2 /*return*/];
                    }
                });
            });
        };
        /** Get a specific webhook preference by ID. */
        NotificationPreferencesRepository_1.prototype.getWebhookById = function (id) {
            return __awaiter(this, void 0, void 0, function () {
                var _a, data, error;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, this.supabase
                                .getClient()
                                .from("notification_preferences")
                                .select("*")
                                .eq("id", id)
                                .eq("channel", "webhook")
                                .maybeSingle()];
                        case 1:
                            _a = _b.sent(), data = _a.data, error = _a.error;
                            if (error) {
                                this.logger.error("Failed to fetch webhook ".concat(id, ": ").concat(error.message));
                                throw error;
                            }
                            return [2 /*return*/, data ? mapRow(data) : null];
                    }
                });
            });
        };
        /** Get all webhooks for a public key. */
        NotificationPreferencesRepository_1.prototype.getWebhooksByPublicKey = function (publicKey) {
            return __awaiter(this, void 0, void 0, function () {
                var _a, data, error;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, this.supabase
                                .getClient()
                                .from("notification_preferences")
                                .select("*")
                                .eq("public_key", publicKey)
                                .eq("channel", "webhook")];
                        case 1:
                            _a = _b.sent(), data = _a.data, error = _a.error;
                            if (error) {
                                this.logger.error("Failed to fetch webhooks for ".concat(publicKey, ": ").concat(error.message));
                                throw error;
                            }
                            return [2 /*return*/, (data !== null && data !== void 0 ? data : []).map(mapRow)];
                    }
                });
            });
        };
        /** Get webhooks for a public key with cursor-based pagination. */
        NotificationPreferencesRepository_1.prototype.getWebhooksByPublicKeyPaginated = function (publicKey, cursor, limit) {
            return __awaiter(this, void 0, void 0, function () {
                var effectiveLimit, query, json, parsed, _a, data, error, rows, hasMore, resultData, nextCursor, lastRaw;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            effectiveLimit = Math.min(100, Math.max(1, limit !== null && limit !== void 0 ? limit : 20));
                            query = this.supabase
                                .getClient()
                                .from("notification_preferences")
                                .select("*")
                                .eq("public_key", publicKey)
                                .eq("channel", "webhook");
                            // Decode cursor
                            if (cursor) {
                                try {
                                    json = Buffer.from(cursor, "base64url").toString("utf-8");
                                    parsed = JSON.parse(json);
                                    if (typeof parsed.pk === "string" && typeof parsed.id === "string") {
                                        query = query
                                            .lt("created_at", parsed.pk)
                                            .or("created_at.eq.".concat(parsed.pk, ",id.lt.").concat(parsed.id));
                                    }
                                }
                                catch (_c) {
                                    // invalid cursor
                                }
                            }
                            query = query
                                .order("created_at", { ascending: false })
                                .order("id", { ascending: false })
                                .limit(effectiveLimit + 1);
                            return [4 /*yield*/, query];
                        case 1:
                            _a = _b.sent(), data = _a.data, error = _a.error;
                            if (error) {
                                this.logger.error("Failed to fetch webhooks for ".concat(publicKey, ": ").concat(error.message));
                                throw error;
                            }
                            rows = (data !== null && data !== void 0 ? data : []).map(mapRow);
                            hasMore = rows.length > effectiveLimit;
                            resultData = hasMore ? rows.slice(0, effectiveLimit) : rows;
                            nextCursor = null;
                            if (hasMore && resultData.length > 0) {
                                lastRaw = data[effectiveLimit - 1];
                                nextCursor = Buffer.from(JSON.stringify({ pk: lastRaw.created_at, id: lastRaw.id }), "utf-8").toString("base64url");
                            }
                            return [2 /*return*/, { data: resultData, next_cursor: nextCursor, has_more: hasMore }];
                    }
                });
            });
        };
        /** Delete a webhook preference. */
        NotificationPreferencesRepository_1.prototype.deleteWebhook = function (id) {
            return __awaiter(this, void 0, void 0, function () {
                var error;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.supabase
                                .getClient()
                                .from("notification_preferences")
                                .delete()
                                .eq("id", id)
                                .eq("channel", "webhook")];
                        case 1:
                            error = (_a.sent()).error;
                            if (error) {
                                this.logger.error("Failed to delete webhook ".concat(id, ": ").concat(error.message));
                                throw error;
                            }
                            return [2 /*return*/, true];
                    }
                });
            });
        };
        /** Regenerate webhook secret. */
        NotificationPreferencesRepository_1.prototype.regenerateWebhookSecret = function (id, newSecret) {
            return __awaiter(this, void 0, void 0, function () {
                var _a, data, error;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, this.supabase
                                .getClient()
                                .from("notification_preferences")
                                .update({ webhook_secret: newSecret })
                                .eq("id", id)
                                .eq("channel", "webhook")
                                .select()
                                .single()];
                        case 1:
                            _a = _b.sent(), data = _a.data, error = _a.error;
                            if (error) {
                                this.logger.error("Failed to regenerate secret for webhook ".concat(id, ": ").concat(error.message));
                                throw error;
                            }
                            return [2 /*return*/, mapRow(data)];
                    }
                });
            });
        };
        return NotificationPreferencesRepository_1;
    }());
    __setFunctionName(_classThis, "NotificationPreferencesRepository");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        NotificationPreferencesRepository = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return NotificationPreferencesRepository = _classThis;
}();
exports.NotificationPreferencesRepository = NotificationPreferencesRepository;
