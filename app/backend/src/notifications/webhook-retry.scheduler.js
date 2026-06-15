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
exports.WebhookRetryScheduler = void 0;
var common_1 = require("@nestjs/common");
var schedule_1 = require("@nestjs/schedule");
var notification_provider_interface_1 = require("./providers/notification-provider.interface");
/** Retry delays in milliseconds: 1m, 5m, 30m, 2h */
var RETRY_DELAYS_MS = [60000, 300000, 1800000, 7200000];
var MAX_ATTEMPTS = RETRY_DELAYS_MS.length + 1; // 5 total (1 initial + 4 retries)
var WebhookRetryScheduler = function () {
    var _classDecorators = [(0, common_1.Injectable)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _instanceExtraInitializers = [];
    var _retryFailedWebhooks_decorators;
    var WebhookRetryScheduler = _classThis = /** @class */ (function () {
        function WebhookRetryScheduler_1(logRepo, prefsRepo) {
            this.logRepo = (__runInitializers(this, _instanceExtraInitializers), logRepo);
            this.prefsRepo = prefsRepo;
            this.logger = new common_1.Logger(WebhookRetryScheduler.name);
            this.provider = new notification_provider_interface_1.WebhookProvider();
        }
        /**
         * Runs every minute to pick up failed webhook deliveries that are due for retry.
         * After MAX_ATTEMPTS the entry stays in "failed" status (DLQ — inspectable via logs API).
         */
        WebhookRetryScheduler_1.prototype.retryFailedWebhooks = function () {
            return __awaiter(this, void 0, void 0, function () {
                var pending, webhookPending, _i, webhookPending_1, entry, delayMs, nextRetryAt;
                var _a, _b;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0: return [4 /*yield*/, this.logRepo.getPendingRetries(MAX_ATTEMPTS)];
                        case 1:
                            pending = _c.sent();
                            webhookPending = pending.filter(function (r) { return r.channel === "webhook"; });
                            if (webhookPending.length === 0)
                                return [2 /*return*/];
                            this.logger.debug("Retrying ".concat(webhookPending.length, " failed webhook(s)"));
                            _i = 0, webhookPending_1 = webhookPending;
                            _c.label = 2;
                        case 2:
                            if (!(_i < webhookPending_1.length)) return [3 /*break*/, 5];
                            entry = webhookPending_1[_i];
                            delayMs = (_a = RETRY_DELAYS_MS[entry.attempts - 1]) !== null && _a !== void 0 ? _a : RETRY_DELAYS_MS[RETRY_DELAYS_MS.length - 1];
                            nextRetryAt = new Date(new Date((_b = entry.lastFailedAt) !== null && _b !== void 0 ? _b : Date.now()).getTime() + delayMs);
                            if (nextRetryAt > new Date())
                                return [3 /*break*/, 4]; // not yet due
                            return [4 /*yield*/, this.attemptRedelivery(entry.publicKey, entry.eventType, entry.eventId, entry.attempts)];
                        case 3:
                            _c.sent();
                            _c.label = 4;
                        case 4:
                            _i++;
                            return [3 /*break*/, 2];
                        case 5: return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * Manually redeliver a specific event (admin / consumer-triggered).
         * Returns true if delivery succeeded.
         */
        WebhookRetryScheduler_1.prototype.redeliver = function (publicKey, eventId, eventType) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.attemptRedelivery(publicKey, eventType, eventId, 0)];
                });
            });
        };
        WebhookRetryScheduler_1.prototype.attemptRedelivery = function (publicKey, eventType, eventId, currentAttempts) {
            return __awaiter(this, void 0, void 0, function () {
                var webhooks, active, payload, anySuccess, _i, active_1, pref, result, err_1, message;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.prefsRepo.getWebhooksByPublicKey(publicKey)];
                        case 1:
                            webhooks = _a.sent();
                            active = webhooks.filter(function (w) { return w.enabled && w.webhookUrl; });
                            if (active.length === 0) {
                                this.logger.warn("No active webhooks for ".concat(publicKey.slice(0, 8), "... \u2014 skipping retry"));
                                return [2 /*return*/, false];
                            }
                            payload = {
                                eventType: eventType,
                                eventId: eventId,
                                recipientPublicKey: publicKey,
                                title: "Redelivery: ".concat(eventType),
                                body: "Event ".concat(eventId, " redelivered"),
                                occurredAt: new Date().toISOString(),
                            };
                            anySuccess = false;
                            _i = 0, active_1 = active;
                            _a.label = 2;
                        case 2:
                            if (!(_i < active_1.length)) return [3 /*break*/, 9];
                            pref = active_1[_i];
                            _a.label = 3;
                        case 3:
                            _a.trys.push([3, 6, , 8]);
                            return [4 /*yield*/, this.provider.send(pref, payload)];
                        case 4:
                            result = _a.sent();
                            return [4 /*yield*/, this.logRepo.markSent(publicKey, "webhook", eventType, eventId, result.messageId, result.httpStatus, result.responseBody)];
                        case 5:
                            _a.sent();
                            this.logger.log("Webhook redelivered: ".concat(eventType, "/").concat(eventId, " -> ").concat(pref.webhookUrl, " (attempt ").concat(currentAttempts + 1, ")"));
                            anySuccess = true;
                            return [3 /*break*/, 8];
                        case 6:
                            err_1 = _a.sent();
                            message = err_1 instanceof Error ? err_1.message : String(err_1);
                            return [4 /*yield*/, this.logRepo.markFailed(publicKey, "webhook", eventType, eventId, message)];
                        case 7:
                            _a.sent();
                            if (currentAttempts + 1 >= MAX_ATTEMPTS) {
                                this.logger.warn("Webhook DLQ: ".concat(eventType, "/").concat(eventId, " exhausted ").concat(MAX_ATTEMPTS, " attempts. Last error: ").concat(message));
                            }
                            else {
                                this.logger.debug("Webhook retry failed (attempt ".concat(currentAttempts + 1, "/").concat(MAX_ATTEMPTS, "): ").concat(message));
                            }
                            return [3 /*break*/, 8];
                        case 8:
                            _i++;
                            return [3 /*break*/, 2];
                        case 9: return [2 /*return*/, anySuccess];
                    }
                });
            });
        };
        return WebhookRetryScheduler_1;
    }());
    __setFunctionName(_classThis, "WebhookRetryScheduler");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _retryFailedWebhooks_decorators = [(0, schedule_1.Cron)(schedule_1.CronExpression.EVERY_MINUTE)];
        __esDecorate(_classThis, null, _retryFailedWebhooks_decorators, { kind: "method", name: "retryFailedWebhooks", static: false, private: false, access: { has: function (obj) { return "retryFailedWebhooks" in obj; }, get: function (obj) { return obj.retryFailedWebhooks; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        WebhookRetryScheduler = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return WebhookRetryScheduler = _classThis;
}();
exports.WebhookRetryScheduler = WebhookRetryScheduler;
