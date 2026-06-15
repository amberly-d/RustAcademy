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
exports.TelegramRepository = void 0;
var common_1 = require("@nestjs/common");
var TelegramRepository = function () {
    var _classDecorators = [(0, common_1.Injectable)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var TelegramRepository = _classThis = /** @class */ (function () {
        function TelegramRepository_1(supabase) {
            this.supabase = supabase;
            this.logger = new common_1.Logger(TelegramRepository.name);
        }
        /**
         * Find a Telegram user mapping by Telegram ID
         */
        TelegramRepository_1.prototype.findByTelegramId = function (telegramId) {
            return __awaiter(this, void 0, void 0, function () {
                var _a, data, error;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, this.supabase
                                .getClient()
                                .from("telegram_user_mappings")
                                .select("*")
                                .eq("telegram_id", telegramId)
                                .single()];
                        case 1:
                            _a = _b.sent(), data = _a.data, error = _a.error;
                            if (error && error.code !== "PGRST116") {
                                // PGRST116 = not found
                                this.logger.error("Failed to fetch Telegram mapping for ".concat(telegramId, ": ").concat(error.message));
                                throw error;
                            }
                            return [2 /*return*/, data ? this.mapRow(data) : null];
                    }
                });
            });
        };
        /**
         * Find a Telegram user mapping by public key
         */
        TelegramRepository_1.prototype.findByPublicKey = function (publicKey) {
            return __awaiter(this, void 0, void 0, function () {
                var _a, data, error;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, this.supabase
                                .getClient()
                                .from("telegram_user_mappings")
                                .select("*")
                                .eq("public_key", publicKey)
                                .single()];
                        case 1:
                            _a = _b.sent(), data = _a.data, error = _a.error;
                            if (error && error.code !== "PGRST116") {
                                this.logger.error("Failed to fetch Telegram mapping for ".concat(publicKey, ": ").concat(error.message));
                                throw error;
                            }
                            return [2 /*return*/, data ? this.mapRow(data) : null];
                    }
                });
            });
        };
        /**
         * Create or update a Telegram user mapping
         */
        TelegramRepository_1.prototype.upsertMapping = function (mapping) {
            return __awaiter(this, void 0, void 0, function () {
                var row, _a, data, error;
                var _b, _c, _d, _e, _f;
                return __generator(this, function (_g) {
                    switch (_g.label) {
                        case 0:
                            row = {
                                telegram_id: mapping.telegramId,
                                username: (_b = mapping.username) !== null && _b !== void 0 ? _b : null,
                                public_key: mapping.publicKey,
                                is_verified: (_c = mapping.isVerified) !== null && _c !== void 0 ? _c : false,
                                verification_code: (_d = mapping.verificationCode) !== null && _d !== void 0 ? _d : null,
                                enabled: (_e = mapping.enabled) !== null && _e !== void 0 ? _e : true,
                                min_amount_stroops: ((_f = mapping.minAmountStroops) !== null && _f !== void 0 ? _f : 0n).toString(),
                            };
                            return [4 /*yield*/, this.supabase
                                    .getClient()
                                    .from("telegram_user_mappings")
                                    .upsert(row, { onConflict: "telegram_id" })
                                    .select()
                                    .single()];
                        case 1:
                            _a = _g.sent(), data = _a.data, error = _a.error;
                            if (error) {
                                this.logger.error("Failed to upsert Telegram mapping for ".concat(mapping.telegramId, ": ").concat(error.message));
                                throw error;
                            }
                            return [2 /*return*/, this.mapRow(data)];
                    }
                });
            });
        };
        /**
         * Update verification status
         */
        TelegramRepository_1.prototype.markAsVerified = function (telegramId) {
            return __awaiter(this, void 0, void 0, function () {
                var _a, data, error;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, this.supabase
                                .getClient()
                                .from("telegram_user_mappings")
                                .update({ is_verified: true, verification_code: null })
                                .eq("telegram_id", telegramId)
                                .select()
                                .single()];
                        case 1:
                            _a = _b.sent(), data = _a.data, error = _a.error;
                            if (error) {
                                this.logger.error("Failed to mark Telegram user ".concat(telegramId, " as verified: ").concat(error.message));
                                throw error;
                            }
                            return [2 /*return*/, this.mapRow(data)];
                    }
                });
            });
        };
        /**
         * Enable or disable notifications for a Telegram user
         */
        TelegramRepository_1.prototype.setEnabled = function (telegramId, enabled) {
            return __awaiter(this, void 0, void 0, function () {
                var _a, data, error;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, this.supabase
                                .getClient()
                                .from("telegram_user_mappings")
                                .update({ enabled: enabled })
                                .eq("telegram_id", telegramId)
                                .select()
                                .single()];
                        case 1:
                            _a = _b.sent(), data = _a.data, error = _a.error;
                            if (error) {
                                this.logger.error("Failed to set enabled=".concat(enabled, " for Telegram user ").concat(telegramId, ": ").concat(error.message));
                                throw error;
                            }
                            return [2 /*return*/, this.mapRow(data)];
                    }
                });
            });
        };
        /**
         * Update minimum amount threshold
         */
        TelegramRepository_1.prototype.setMinAmount = function (telegramId, minAmountStroops) {
            return __awaiter(this, void 0, void 0, function () {
                var _a, data, error;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, this.supabase
                                .getClient()
                                .from("telegram_user_mappings")
                                .update({ min_amount_stroops: minAmountStroops.toString() })
                                .eq("telegram_id", telegramId)
                                .select()
                                .single()];
                        case 1:
                            _a = _b.sent(), data = _a.data, error = _a.error;
                            if (error) {
                                this.logger.error("Failed to update min amount for Telegram user ".concat(telegramId, ": ").concat(error.message));
                                throw error;
                            }
                            return [2 /*return*/, this.mapRow(data)];
                    }
                });
            });
        };
        /**
         * Update last notification timestamp
         */
        TelegramRepository_1.prototype.updateLastNotification = function (telegramId) {
            return __awaiter(this, void 0, void 0, function () {
                var _a, data, error;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, this.supabase
                                .getClient()
                                .from("telegram_user_mappings")
                                .update({ last_notification_at: new Date().toISOString() })
                                .eq("telegram_id", telegramId)
                                .select()
                                .single()];
                        case 1:
                            _a = _b.sent(), data = _a.data, error = _a.error;
                            if (error) {
                                this.logger.error("Failed to update last notification for Telegram user ".concat(telegramId, ": ").concat(error.message));
                                throw error;
                            }
                            return [2 /*return*/, this.mapRow(data)];
                    }
                });
            });
        };
        /**
         * Delete a Telegram user mapping
         */
        TelegramRepository_1.prototype.deleteMapping = function (telegramId) {
            return __awaiter(this, void 0, void 0, function () {
                var error;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.supabase
                                .getClient()
                                .from("telegram_user_mappings")
                                .delete()
                                .eq("telegram_id", telegramId)];
                        case 1:
                            error = (_a.sent()).error;
                            if (error) {
                                this.logger.error("Failed to delete Telegram mapping for ".concat(telegramId, ": ").concat(error.message));
                                throw error;
                            }
                            return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * Log a Telegram notification delivery attempt
         */
        TelegramRepository_1.prototype.logNotification = function (params) {
            return __awaiter(this, void 0, void 0, function () {
                var row, error;
                var _a, _b;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            row = {
                                telegram_id: params.telegramId,
                                public_key: params.publicKey,
                                event_type: params.eventType,
                                event_id: params.eventId,
                                status: params.status,
                                attempts: 1,
                                last_error: (_a = params.errorMessage) !== null && _a !== void 0 ? _a : null,
                                telegram_message_id: (_b = params.telegramMessageId) !== null && _b !== void 0 ? _b : null,
                            };
                            return [4 /*yield*/, this.supabase
                                    .getClient()
                                    .from("telegram_notification_log")
                                    .insert(row)];
                        case 1:
                            error = (_c.sent()).error;
                            if (error) {
                                this.logger.error("Failed to log Telegram notification for ".concat(params.eventId, ": ").concat(error.message));
                                throw error;
                            }
                            return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * Get all enabled Telegram mappings for batch notifications
         */
        TelegramRepository_1.prototype.getEnabledMappings = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _a, data, error;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, this.supabase
                                .getClient()
                                .from("telegram_user_mappings")
                                .select("*")
                                .eq("is_verified", true)
                                .eq("enabled", true)];
                        case 1:
                            _a = _b.sent(), data = _a.data, error = _a.error;
                            if (error) {
                                this.logger.error("Failed to fetch enabled Telegram mappings: ".concat(error.message));
                                throw error;
                            }
                            return [2 /*return*/, (data !== null && data !== void 0 ? data : []).map(this.mapRow)];
                    }
                });
            });
        };
        TelegramRepository_1.prototype.mapRow = function (row) {
            var _a, _b, _c;
            return {
                id: row.id,
                telegramId: Number(row.telegram_id),
                username: (_a = row.username) !== null && _a !== void 0 ? _a : undefined,
                publicKey: row.public_key,
                isVerified: row.is_verified,
                verificationCode: (_b = row.verification_code) !== null && _b !== void 0 ? _b : undefined,
                enabled: row.enabled,
                minAmountStroops: BigInt((_c = row.min_amount_stroops) !== null && _c !== void 0 ? _c : "0"),
                lastNotificationAt: row.last_notification_at
                    ? new Date(row.last_notification_at)
                    : undefined,
                createdAt: new Date(row.created_at),
                updatedAt: new Date(row.updated_at),
            };
        };
        return TelegramRepository_1;
    }());
    __setFunctionName(_classThis, "TelegramRepository");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        TelegramRepository = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return TelegramRepository = _classThis;
}();
exports.TelegramRepository = TelegramRepository;
