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
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationsModule = void 0;
exports.createTelegramProvider = createTelegramProvider;
var common_1 = require("@nestjs/common");
var supabase_module_1 = require("../supabase/supabase.module");
var metrics_module_1 = require("../metrics/metrics.module");
var metrics_service_1 = require("../metrics/metrics.service");
var notification_service_1 = require("./notification.service");
var notification_preferences_repository_1 = require("./notification-preferences.repository");
var notification_log_repository_1 = require("./notification-log.repository");
var notification_preferences_controller_1 = require("./notification-preferences.controller");
var notification_provider_interface_1 = require("./providers/notification-provider.interface");
var telegram_repository_1 = require("./telegram/telegram.repository");
var telegram_bot_service_1 = require("./telegram/telegram-bot.service");
var telegram_provider_1 = require("./telegram/telegram.provider");
var telegram_controller_1 = require("./telegram/telegram.controller");
var webhook_service_1 = require("./webhook.service");
var webhooks_controller_1 = require("./webhooks.controller");
var webhook_retry_scheduler_1 = require("./webhook-retry.scheduler");
var job_queue_module_1 = require("../job-queue/job-queue.module");
var in_app_notification_repository_1 = require("./in-app-notification.repository");
var template_service_1 = require("./template.service");
var notifications_controller_1 = require("./notifications.controller");
/**
 * Notification engine module.
 *
 * Provider configuration is driven by environment variables:
 *  - SENDGRID_API_KEY + SENDGRID_FROM_EMAIL  → enables email channel
 *  - EXPO_ACCESS_TOKEN (optional)            → enables push channel
 *  - TELEGRAM_BOT_TOKEN (optional)           → enables Telegram channel
 *  - Webhook channel is always registered (no credentials needed)
 *
 * ScheduleModule is registered once at AppModule level.
 */
var NotificationsModule = function () {
    var _classDecorators = [(0, common_1.Module)({
            imports: [supabase_module_1.SupabaseModule, metrics_module_1.MetricsModule, (0, common_1.forwardRef)(function () { return job_queue_module_1.JobQueueModule; })],
            controllers: [
                notification_preferences_controller_1.NotificationPreferencesController,
                telegram_controller_1.TelegramController,
                webhooks_controller_1.WebhooksController,
                notifications_controller_1.NotificationsController,
            ],
            providers: [
                notification_preferences_repository_1.NotificationPreferencesRepository,
                notification_log_repository_1.NotificationLogRepository,
                in_app_notification_repository_1.InAppNotificationRepository,
                template_service_1.TemplateService,
                telegram_repository_1.TelegramRepository,
                telegram_bot_service_1.TelegramBotService,
                telegram_provider_1.TelegramNotificationProvider,
                webhook_retry_scheduler_1.WebhookRetryScheduler,
                webhook_service_1.WebhookService,
                {
                    provide: notification_provider_interface_1.NOTIFICATION_PROVIDERS,
                    useFactory: function (telegramBot, telegramRepo, metrics) {
                        var providers = [];
                        var sendgridKey = process.env["SENDGRID_API_KEY"];
                        var fromEmail = process.env["SENDGRID_FROM_EMAIL"];
                        if (sendgridKey && fromEmail) {
                            providers.push(new notification_provider_interface_1.SendGridEmailProvider(sendgridKey, fromEmail));
                        }
                        else {
                            providers.push(new notification_provider_interface_1.NoopNotificationProvider("email"));
                        }
                        var expoToken = process.env["EXPO_ACCESS_TOKEN"];
                        if (expoToken) {
                            providers.push(new notification_provider_interface_1.ExpoPushProvider(expoToken));
                        }
                        else {
                            providers.push(new notification_provider_interface_1.NoopNotificationProvider("push"));
                        }
                        providers.push(new notification_provider_interface_1.WebhookProvider(metrics));
                        // Add Telegram provider if bot is initialized
                        var telegramToken = process.env["TELEGRAM_BOT_TOKEN"];
                        if (telegramToken) {
                            providers.push(new telegram_provider_1.TelegramNotificationProvider(telegramBot, telegramRepo));
                        }
                        else {
                            providers.push(new notification_provider_interface_1.NoopNotificationProvider("telegram"));
                        }
                        return providers;
                    },
                    inject: [telegram_bot_service_1.TelegramBotService, telegram_repository_1.TelegramRepository, metrics_service_1.MetricsService],
                },
                notification_service_1.NotificationService,
            ],
            exports: [
                notification_service_1.NotificationService,
                notification_preferences_repository_1.NotificationPreferencesRepository,
                notification_log_repository_1.NotificationLogRepository,
                telegram_repository_1.TelegramRepository,
                telegram_bot_service_1.TelegramBotService,
                telegram_provider_1.TelegramNotificationProvider,
                webhook_service_1.WebhookService,
            ],
        })];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var NotificationsModule = _classThis = /** @class */ (function () {
        function NotificationsModule_1() {
        }
        return NotificationsModule_1;
    }());
    __setFunctionName(_classThis, "NotificationsModule");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        NotificationsModule = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return NotificationsModule = _classThis;
}();
exports.NotificationsModule = NotificationsModule;
/**
 * Factory function to create Telegram provider with dependencies
 */
function createTelegramProvider(telegramBot, telegramRepo) {
    return new telegram_provider_1.TelegramNotificationProvider(telegramBot, telegramRepo);
}
