"use strict";
/**
 * Telegram Bot Integration Module
 *
 * Provides real-time notifications via Telegram bot.
 *
 * Features:
 * - User account pairing via verification codes
 * - Real-time payment and escrow notifications
 * - Configurable notification settings (min amount, enable/disable)
 * - Idempotent delivery with retry logic
 * - Rate limiting and error handling
 *
 * @module TelegramModule
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.TelegramController = exports.TelegramNotificationProvider = exports.TelegramRepository = exports.TelegramBotService = void 0;
var telegram_bot_service_1 = require("./telegram-bot.service");
Object.defineProperty(exports, "TelegramBotService", { enumerable: true, get: function () { return telegram_bot_service_1.TelegramBotService; } });
var telegram_repository_1 = require("./telegram.repository");
Object.defineProperty(exports, "TelegramRepository", { enumerable: true, get: function () { return telegram_repository_1.TelegramRepository; } });
var telegram_provider_1 = require("./telegram.provider");
Object.defineProperty(exports, "TelegramNotificationProvider", { enumerable: true, get: function () { return telegram_provider_1.TelegramNotificationProvider; } });
var telegram_controller_1 = require("./telegram.controller");
Object.defineProperty(exports, "TelegramController", { enumerable: true, get: function () { return telegram_controller_1.TelegramController; } });
