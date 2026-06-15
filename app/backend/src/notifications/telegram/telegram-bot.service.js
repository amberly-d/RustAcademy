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
exports.TelegramBotService = void 0;
var common_1 = require("@nestjs/common");
var telegraf_1 = require("telegraf");
var filters_1 = require("telegraf/filters");
var TelegramBotService = function () {
    var _classDecorators = [(0, common_1.Injectable)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var TelegramBotService = _classThis = /** @class */ (function () {
        function TelegramBotService_1(telegramRepo) {
            this.telegramRepo = telegramRepo;
            this.logger = new common_1.Logger(TelegramBotService.name);
            this.bot = null;
        }
        TelegramBotService_1.prototype.onModuleInit = function () {
            return __awaiter(this, void 0, void 0, function () {
                var telegramToken, error_1;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            telegramToken = process.env["TELEGRAM_BOT_TOKEN"];
                            if (!telegramToken) {
                                this.logger.warn("TELEGRAM_BOT_TOKEN not set - Telegram bot will not be initialized");
                                return [2 /*return*/];
                            }
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 3, , 4]);
                            this.bot = new telegraf_1.Telegraf(telegramToken);
                            // Register command handlers
                            this.registerCommands();
                            // Start the bot
                            return [4 /*yield*/, this.bot.launch()];
                        case 2:
                            // Start the bot
                            _a.sent();
                            this.logger.log("Telegram bot started successfully");
                            // Enable graceful stop
                            process.once("SIGINT", function () { var _a; return (_a = _this.bot) === null || _a === void 0 ? void 0 : _a.stop("SIGINT"); });
                            process.once("SIGTERM", function () { var _a; return (_a = _this.bot) === null || _a === void 0 ? void 0 : _a.stop("SIGTERM"); });
                            return [3 /*break*/, 4];
                        case 3:
                            error_1 = _a.sent();
                            this.logger.error("Failed to start Telegram bot: ".concat(error_1.message));
                            return [3 /*break*/, 4];
                        case 4: return [2 /*return*/];
                    }
                });
            });
        };
        TelegramBotService_1.prototype.onModuleDestroy = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!this.bot) return [3 /*break*/, 2];
                            return [4 /*yield*/, this.bot.stop()];
                        case 1:
                            _a.sent();
                            this.logger.log("Telegram bot stopped");
                            _a.label = 2;
                        case 2: return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * Register all bot command handlers
         */
        TelegramBotService_1.prototype.registerCommands = function () {
            var _this = this;
            if (!this.bot)
                return;
            // /start command - Welcome and instructions
            this.bot.start(function (ctx) { return __awaiter(_this, void 0, void 0, function () {
                var telegramId, existingMapping;
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            telegramId = (_a = ctx.from) === null || _a === void 0 ? void 0 : _a.id;
                            if (!!telegramId) return [3 /*break*/, 2];
                            return [4 /*yield*/, ctx.reply("⚠️ Unable to identify you. Please try again.")];
                        case 1:
                            _b.sent();
                            return [2 /*return*/];
                        case 2: return [4 /*yield*/, this.telegramRepo.findByTelegramId(telegramId)];
                        case 3:
                            existingMapping = _b.sent();
                            if (!existingMapping) return [3 /*break*/, 5];
                            return [4 /*yield*/, ctx.reply("\u2705 Your Telegram account is already linked to  RustAcademy!\n\n" +
                                    "Public Key: `".concat(existingMapping.publicKey, "`\n\n") +
                                    "You will receive real-time notifications for:\n" +
                                    "\u2022 Payment received\n" +
                                    "\u2022 Escrow status changes\n\n" +
                                    "Use /unlink to disconnect your account.", { parse_mode: "Markdown" })];
                        case 4:
                            _b.sent();
                            return [2 /*return*/];
                        case 5: 
                        // Show welcome message with instructions
                        return [4 /*yield*/, ctx.reply("\uD83D\uDC4B Welcome to  RustAcademy Notifications Bot!\n\n" +
                                "I'll send you real-time alerts for:\n" +
                                "\u2022 \uD83D\uDCB0 Payments received\n" +
                                "\u2022 \uD83D\uDD12 Escrow deposits, withdrawals, and refunds\n\n" +
                                "To link your  RustAcademy account:\n" +
                                "1. Copy your  RustAcademy public key (starts with G...)\n" +
                                "2. Send it to me in the next message\n\n" +
                                "Or use /cancel anytime to abort.", { parse_mode: "Markdown" })];
                        case 6:
                            // Show welcome message with instructions
                            _b.sent();
                            // Set session state for linking
                            if (!ctx.session)
                                ctx.session = {};
                            ctx.session.linkingPublicKey = undefined;
                            return [2 /*return*/];
                    }
                });
            }); });
            // Handle public key submission for linking
            this.bot.on((0, filters_1.message)("text"), function (ctx) { return __awaiter(_this, void 0, void 0, function () {
                var telegramId, text, verificationCode;
                var _a, _b, _c;
                return __generator(this, function (_d) {
                    switch (_d.label) {
                        case 0:
                            telegramId = (_a = ctx.from) === null || _a === void 0 ? void 0 : _a.id;
                            text = ctx.message.text.trim();
                            if (!telegramId)
                                return [2 /*return*/];
                            // Check if user is in linking flow
                            if (!ctx.session)
                                ctx.session = {};
                            if (!(text.toLowerCase() === "/cancel")) return [3 /*break*/, 2];
                            ctx.session.linkingPublicKey = undefined;
                            return [4 /*yield*/, ctx.reply("❌ Linking process cancelled.")];
                        case 1:
                            _d.sent();
                            return [2 /*return*/];
                        case 2:
                            // If no active linking session, ignore
                            if (!ctx.session.linkingPublicKey && !text.startsWith("G")) {
                                return [2 /*return*/];
                            }
                            if (!(!text.startsWith("G") || text.length !== 56)) return [3 /*break*/, 4];
                            return [4 /*yield*/, ctx.reply("⚠️ That doesn't look like a valid Stellar public key.\n\n" +
                                    "Please send a key that starts with 'G' and is 56 characters long.\n\n" +
                                    "Or use /cancel to abort.")];
                        case 3:
                            _d.sent();
                            return [2 /*return*/];
                        case 4:
                            if (!!ctx.session.linkingPublicKey) return [3 /*break*/, 7];
                            ctx.session.linkingPublicKey = text;
                            verificationCode = Math.random()
                                .toString(36)
                                .substring(2, 8)
                                .toUpperCase();
                            ctx.session.verificationCode = verificationCode;
                            // Save mapping with verification code
                            return [4 /*yield*/, this.telegramRepo.upsertMapping({
                                    telegramId: telegramId,
                                    username: (_c = (_b = ctx.from) === null || _b === void 0 ? void 0 : _b.username) !== null && _c !== void 0 ? _c : undefined,
                                    publicKey: text,
                                    verificationCode: verificationCode,
                                })];
                        case 5:
                            // Save mapping with verification code
                            _d.sent();
                            return [4 /*yield*/, ctx.reply("\uD83D\uDD10 Verification Required\n\n" +
                                    "To confirm you own this  RustAcademy account, please visit:\n" +
                                    "`".concat(text, "`\n\n") +
                                    "And enter this verification code:\n" +
                                    "\u2728 `".concat(verificationCode, "` \u2728\n\n") +
                                    "Once verified, I'll start sending you notifications!", { parse_mode: "Markdown" })];
                        case 6:
                            _d.sent();
                            return [2 /*return*/];
                        case 7: return [2 /*return*/];
                    }
                });
            }); });
            // /status command - Show current linkage status
            this.bot.command("status", function (ctx) { return __awaiter(_this, void 0, void 0, function () {
                var telegramId, mapping, status, notifications;
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            telegramId = (_a = ctx.from) === null || _a === void 0 ? void 0 : _a.id;
                            if (!telegramId)
                                return [2 /*return*/];
                            return [4 /*yield*/, this.telegramRepo.findByTelegramId(telegramId)];
                        case 1:
                            mapping = _b.sent();
                            if (!!mapping) return [3 /*break*/, 3];
                            return [4 /*yield*/, ctx.reply("❌ Your Telegram account is not linked to any  RustAcademy account.\n\n" +
                                    "Use /start to begin linking.")];
                        case 2:
                            _b.sent();
                            return [2 /*return*/];
                        case 3:
                            status = mapping.isVerified
                                ? "✅ Verified"
                                : "⏳ Pending verification";
                            notifications = mapping.enabled ? "🔔 Enabled" : "🔕 Disabled";
                            return [4 /*yield*/, ctx.reply("\uD83D\uDCCA Your  RustAcademy Link Status\n\n" +
                                    "Public Key: `".concat(mapping.publicKey, "`\n") +
                                    "Status: ".concat(status, "\n") +
                                    "Notifications: ".concat(notifications, "\n") +
                                    "Min Amount: ".concat(Number(mapping.minAmountStroops) / 10000000, " XLM\n\n") +
                                    "Use:\n" +
                                    "/unlink - Disconnect account\n" +
                                    "/settings - Change notification settings", { parse_mode: "Markdown" })];
                        case 4:
                            _b.sent();
                            return [2 /*return*/];
                    }
                });
            }); });
            // /unlink command - Remove linkage
            this.bot.command("unlink", function (ctx) { return __awaiter(_this, void 0, void 0, function () {
                var telegramId, mapping;
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            telegramId = (_a = ctx.from) === null || _a === void 0 ? void 0 : _a.id;
                            if (!telegramId)
                                return [2 /*return*/];
                            return [4 /*yield*/, this.telegramRepo.findByTelegramId(telegramId)];
                        case 1:
                            mapping = _b.sent();
                            if (!!mapping) return [3 /*break*/, 3];
                            return [4 /*yield*/, ctx.reply("❌ No  RustAcademy account is linked.")];
                        case 2:
                            _b.sent();
                            return [2 /*return*/];
                        case 3: return [4 /*yield*/, this.telegramRepo.deleteMapping(telegramId)];
                        case 4:
                            _b.sent();
                            if (!ctx.session)
                                ctx.session = {};
                            ctx.session.linkingPublicKey = undefined;
                            return [4 /*yield*/, ctx.reply("✅ Your  RustAcademy account has been disconnected.\n\n" +
                                    "You will no longer receive notifications here.\n" +
                                    "Use /start to link again anytime.")];
                        case 5:
                            _b.sent();
                            return [2 /*return*/];
                    }
                });
            }); });
            // /settings command - Configure notification preferences
            this.bot.command("settings", function (ctx) { return __awaiter(_this, void 0, void 0, function () {
                var telegramId, mapping;
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            telegramId = (_a = ctx.from) === null || _a === void 0 ? void 0 : _a.id;
                            if (!telegramId)
                                return [2 /*return*/];
                            return [4 /*yield*/, this.telegramRepo.findByTelegramId(telegramId)];
                        case 1:
                            mapping = _b.sent();
                            if (!!mapping) return [3 /*break*/, 3];
                            return [4 /*yield*/, ctx.reply("❌ No  RustAcademy account linked. Use /start first.")];
                        case 2:
                            _b.sent();
                            return [2 /*return*/];
                        case 3: return [4 /*yield*/, ctx.reply("\u2699\uFE0F Notification Settings\n\n" +
                                "Current minimum amount: ".concat(Number(mapping.minAmountStroops) / 10000000, " XLM\n\n") +
                                "To change the minimum amount, send:\n" +
                                "/min 1.5 (for 1.5 XLM)\n\n" +
                                "To toggle notifications:\n" +
                                "/enable - Turn on notifications\n" +
                                "/disable - Turn off notifications", { parse_mode: "Markdown" })];
                        case 4:
                            _b.sent();
                            return [2 /*return*/];
                    }
                });
            }); });
            // /min command - Set minimum amount threshold
            this.bot.command("min", function (ctx) { return __awaiter(_this, void 0, void 0, function () {
                var telegramId, mapping, args, xlmAmount, stroops;
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            telegramId = (_a = ctx.from) === null || _a === void 0 ? void 0 : _a.id;
                            if (!telegramId)
                                return [2 /*return*/];
                            return [4 /*yield*/, this.telegramRepo.findByTelegramId(telegramId)];
                        case 1:
                            mapping = _b.sent();
                            if (!!mapping) return [3 /*break*/, 3];
                            return [4 /*yield*/, ctx.reply("❌ No  RustAcademy account linked. Use /start first.")];
                        case 2:
                            _b.sent();
                            return [2 /*return*/];
                        case 3:
                            args = ctx.message.text.split(" ");
                            if (!(args.length < 2)) return [3 /*break*/, 5];
                            return [4 /*yield*/, ctx.reply("Usage: /min <amount_in_XLM>\nExample: /min 1.5")];
                        case 4:
                            _b.sent();
                            return [2 /*return*/];
                        case 5:
                            xlmAmount = parseFloat(args[1]);
                            if (!(isNaN(xlmAmount) || xlmAmount < 0)) return [3 /*break*/, 7];
                            return [4 /*yield*/, ctx.reply("❌ Invalid amount. Please provide a positive number.")];
                        case 6:
                            _b.sent();
                            return [2 /*return*/];
                        case 7:
                            stroops = BigInt(Math.round(xlmAmount * 10000000));
                            return [4 /*yield*/, this.telegramRepo.setMinAmount(telegramId, stroops)];
                        case 8:
                            _b.sent();
                            return [4 /*yield*/, ctx.reply("\u2705 Minimum amount updated to `".concat(xlmAmount, " XLM`\n\n") +
                                    "You'll only receive notifications for payments >= this amount.", { parse_mode: "Markdown" })];
                        case 9:
                            _b.sent();
                            return [2 /*return*/];
                    }
                });
            }); });
            // /enable command - Enable notifications
            this.bot.command("enable", function (ctx) { return __awaiter(_this, void 0, void 0, function () {
                var telegramId, mapping;
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            telegramId = (_a = ctx.from) === null || _a === void 0 ? void 0 : _a.id;
                            if (!telegramId)
                                return [2 /*return*/];
                            return [4 /*yield*/, this.telegramRepo.findByTelegramId(telegramId)];
                        case 1:
                            mapping = _b.sent();
                            if (!!mapping) return [3 /*break*/, 3];
                            return [4 /*yield*/, ctx.reply("❌ No  RustAcademy account linked. Use /start first.")];
                        case 2:
                            _b.sent();
                            return [2 /*return*/];
                        case 3: return [4 /*yield*/, this.telegramRepo.setEnabled(telegramId, true)];
                        case 4:
                            _b.sent();
                            return [4 /*yield*/, ctx.reply("✅ Notifications enabled! You'll now receive real-time alerts.")];
                        case 5:
                            _b.sent();
                            return [2 /*return*/];
                    }
                });
            }); });
            // /disable command - Disable notifications temporarily
            this.bot.command("disable", function (ctx) { return __awaiter(_this, void 0, void 0, function () {
                var telegramId, mapping;
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            telegramId = (_a = ctx.from) === null || _a === void 0 ? void 0 : _a.id;
                            if (!telegramId)
                                return [2 /*return*/];
                            return [4 /*yield*/, this.telegramRepo.findByTelegramId(telegramId)];
                        case 1:
                            mapping = _b.sent();
                            if (!!mapping) return [3 /*break*/, 3];
                            return [4 /*yield*/, ctx.reply("❌ No  RustAcademy account linked. Use /start first.")];
                        case 2:
                            _b.sent();
                            return [2 /*return*/];
                        case 3: return [4 /*yield*/, this.telegramRepo.setEnabled(telegramId, false)];
                        case 4:
                            _b.sent();
                            return [4 /*yield*/, ctx.reply("🔕 Notifications disabled. Use /enable to turn them back on.")];
                        case 5:
                            _b.sent();
                            return [2 /*return*/];
                    }
                });
            }); });
            // /help command
            this.bot.command("help", function (ctx) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, ctx.reply("\uD83D\uDCD6  RustAcademy Bot Commands\n\n" +
                                "/start - Link your  RustAcademy account\n" +
                                "/status - Check linkage status\n" +
                                "/unlink - Disconnect account\n" +
                                "/settings - Notification settings\n" +
                                "/min <amount> - Set minimum amount (in XLM)\n" +
                                "/enable - Enable notifications\n" +
                                "/disable - Disable notifications\n" +
                                "/help - Show this help message\n" +
                                "/cancel - Cancel current operation", { parse_mode: "Markdown" })];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            }); });
        };
        /**
         * Send a notification message to a Telegram user
         */
        TelegramBotService_1.prototype.sendNotification = function (telegramId, title, body, metadata) {
            return __awaiter(this, void 0, void 0, function () {
                var emoji, formattedMessage, result, error_2;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!this.bot) {
                                throw new Error("Telegram bot not initialized");
                            }
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 3, , 4]);
                            emoji = this.getEmojiForEvent(metadata === null || metadata === void 0 ? void 0 : metadata.eventType);
                            formattedMessage = "".concat(emoji, " *").concat(title, "*\n\n").concat(body);
                            return [4 /*yield*/, this.bot.telegram.sendMessage(telegramId, formattedMessage, {
                                    parse_mode: "Markdown",
                                })];
                        case 2:
                            result = _a.sent();
                            return [2 /*return*/, result.message_id];
                        case 3:
                            error_2 = _a.sent();
                            this.logger.error("Failed to send Telegram notification to ".concat(telegramId, ": ").concat(error_2.message));
                            throw error_2;
                        case 4: return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * Get emoji for different event types
         */
        TelegramBotService_1.prototype.getEmojiForEvent = function (eventType) {
            if (!eventType)
                return "🔔";
            var emojiMap = {
                "payment.received": "💰",
                EscrowDeposited: "🔒",
                EscrowWithdrawn: "🔓",
                EscrowRefunded: "↩️",
                "username.claimed": "✅",
                "recurring.payment.executed": "🔄",
                "recurring.payment.failed": "❌",
                "recurring.payment.due": "⏰",
            };
            return emojiMap[eventType] || "🔔";
        };
        /**
         * Verify a user with the verification code
         */
        TelegramBotService_1.prototype.verifyUser = function (telegramId, verificationCode) {
            return __awaiter(this, void 0, void 0, function () {
                var mapping;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.telegramRepo.findByTelegramId(telegramId)];
                        case 1:
                            mapping = _a.sent();
                            if (!mapping || !mapping.verificationCode) {
                                return [2 /*return*/, false];
                            }
                            if (!(mapping.verificationCode.toUpperCase() === verificationCode.toUpperCase())) return [3 /*break*/, 3];
                            return [4 /*yield*/, this.telegramRepo.markAsVerified(telegramId)];
                        case 2:
                            _a.sent();
                            return [2 /*return*/, true];
                        case 3: return [2 /*return*/, false];
                    }
                });
            });
        };
        /**
         * Get the bot instance (for advanced usage)
         */
        TelegramBotService_1.prototype.getBot = function () {
            return this.bot;
        };
        return TelegramBotService_1;
    }());
    __setFunctionName(_classThis, "TelegramBotService");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        TelegramBotService = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return TelegramBotService = _classThis;
}();
exports.TelegramBotService = TelegramBotService;
