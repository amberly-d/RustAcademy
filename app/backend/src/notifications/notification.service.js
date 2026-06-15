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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationService = void 0;
var common_1 = require("@nestjs/common");
var event_emitter_1 = require("@nestjs/event-emitter");
var schedule_1 = require("@nestjs/schedule");
var notification_rate_limiter_1 = require("./notification-rate-limiter");
var notification_events_1 = require("../events/notification.events");
var types_1 = require("../job-queue/types");
var MAX_ATTEMPTS = 3;
var NotificationService = function () {
    var _classDecorators = [(0, common_1.Injectable)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _instanceExtraInitializers = [];
    var _onEscrowDeposited_decorators;
    var _onEscrowWithdrawn_decorators;
    var _onEscrowRefunded_decorators;
    var _onPaymentReceived_decorators;
    var _onAutoReconciliationSucceeded_decorators;
    var _onUsernameClaimed_decorators;
    var _retryFailedNotifications_decorators;
    var NotificationService = _classThis = /** @class */ (function () {
        function NotificationService_1(providers, prefsRepo, inAppRepo, templateService, logRepo, jobQueueService) {
            this.providers = (__runInitializers(this, _instanceExtraInitializers), providers);
            this.prefsRepo = prefsRepo;
            this.inAppRepo = inAppRepo;
            this.templateService = templateService;
            this.logRepo = logRepo;
            this.jobQueueService = jobQueueService;
            this.logger = new common_1.Logger(NotificationService.name);
            this.rateLimiter = new notification_rate_limiter_1.NotificationRateLimiter(10, 60 * 60 * 1000);
            this.providerMap = new Map();
        }
        NotificationService_1.prototype.onModuleInit = function () {
            for (var _i = 0, _a = this.providers; _i < _a.length; _i++) {
                var p = _a[_i];
                this.providerMap.set(p.channel, p);
            }
            this.logger.log("NotificationService ready. Channels: [" +
                __spreadArray([], this.providerMap.keys(), true).join(", ") +
                "]");
        };
        // ---------------------------------------------------------------------------
        // EVENT HANDLERS (UNCHANGED)
        // ---------------------------------------------------------------------------
        NotificationService_1.prototype.onEscrowDeposited = function (event) {
            return __awaiter(this, void 0, void 0, function () {
                var payload;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            payload = {
                                eventType: "EscrowDeposited",
                                eventId: event.pagingToken,
                                recipientPublicKey: event.owner,
                                title: "Escrow Deposit Confirmed",
                                body: "Your escrow of " +
                                    this.formatAmount(event.amount) +
                                    " has been deposited.",
                                occurredAt: new Date(Number(event.contractTimestamp) * 1000).toISOString(),
                                amountStroops: event.amount,
                                commitment: event.commitment,
                                token: event.token,
                                metadata: { commitment: event.commitment, token: event.token },
                            };
                            return [4 /*yield*/, this.dispatch(payload)];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        NotificationService_1.prototype.onEscrowWithdrawn = function (event) {
            return __awaiter(this, void 0, void 0, function () {
                var payload;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            payload = {
                                eventType: "EscrowWithdrawn",
                                eventId: event.pagingToken,
                                recipientPublicKey: event.owner,
                                title: "Escrow Withdrawn",
                                body: "Your escrow of " +
                                    this.formatAmount(event.amount) +
                                    " has been released.",
                                occurredAt: new Date(Number(event.contractTimestamp) * 1000).toISOString(),
                                amountStroops: event.amount,
                                commitment: event.commitment,
                                token: event.token,
                                metadata: { commitment: event.commitment, token: event.token },
                            };
                            return [4 /*yield*/, this.dispatch(payload)];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        NotificationService_1.prototype.onEscrowRefunded = function (event) {
            return __awaiter(this, void 0, void 0, function () {
                var payload;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            payload = {
                                eventType: "EscrowRefunded",
                                eventId: event.pagingToken,
                                recipientPublicKey: event.owner,
                                title: "Escrow Refunded",
                                body: "Your escrow of " +
                                    this.formatAmount(event.amount) +
                                    " has been refunded.",
                                occurredAt: new Date(Number(event.contractTimestamp) * 1000).toISOString(),
                                amountStroops: event.amount,
                                commitment: event.commitment,
                                token: event.token,
                                metadata: { commitment: event.commitment, token: event.token },
                            };
                            return [4 /*yield*/, this.dispatch(payload)];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        NotificationService_1.prototype.onPaymentReceived = function (event) {
            return __awaiter(this, void 0, void 0, function () {
                var amountStroops, payload;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            amountStroops = BigInt(event.amount);
                            payload = {
                                eventType: "payment.received",
                                eventId: event.txHash,
                                recipientPublicKey: event.recipientPublicKey,
                                title: "Payment Received",
                                body: "You received " +
                                    this.formatAmount(amountStroops) +
                                    " from " +
                                    event.sender.slice(0, 8) +
                                    "...",
                                occurredAt: new Date().toISOString(),
                                amountStroops: amountStroops,
                                txHash: event.txHash,
                                sender: event.sender,
                                metadata: { txHash: event.txHash, sender: event.sender },
                            };
                            return [4 /*yield*/, this.dispatch(payload)];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        NotificationService_1.prototype.onAutoReconciliationSucceeded = function (event) {
            return __awaiter(this, void 0, void 0, function () {
                var payload;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            payload = {
                                eventType: "auto_reconciliation.succeeded",
                                eventId: event.txHash,
                                recipientPublicKey: event.ownerPublicKey,
                                title: "Payment Link Fulfilled",
                                body: "Your payment link for " +
                                    event.amount +
                                    " " +
                                    event.assetCode +
                                    " has been automatically matched and marked as paid.",
                                occurredAt: event.matchedAt,
                                linkId: event.linkId,
                                txHash: event.txHash,
                                assetCode: event.assetCode,
                                confidence: event.confidence,
                                metadata: {
                                    linkId: event.linkId,
                                    txHash: event.txHash,
                                    confidence: event.confidence,
                                },
                            };
                            return [4 /*yield*/, this.dispatch(payload)];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        NotificationService_1.prototype.onUsernameClaimed = function (event) {
            return __awaiter(this, void 0, void 0, function () {
                var payload;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            payload = {
                                eventType: "username.claimed",
                                eventId: "username:" + event.username,
                                recipientPublicKey: event.publicKey,
                                title: "Username Registered",
                                body: "Your username @" +
                                    event.username +
                                    " has been successfully registered.",
                                occurredAt: new Date().toISOString(),
                                username: event.username,
                            };
                            return [4 /*yield*/, this.dispatch(payload)];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        // ---------------------------------------------------------------------------
        // CORE DISPATCH (UPDATED WITH TEMPLATE)
        // ---------------------------------------------------------------------------
        NotificationService_1.prototype.dispatch = function (payload) {
            return __awaiter(this, void 0, void 0, function () {
                var preferences, err_1, template, renderedPayload, filtered;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, this.prefsRepo.getEnabledPreferences(payload.recipientPublicKey)];
                        case 1:
                            preferences = _a.sent();
                            return [3 /*break*/, 3];
                        case 2:
                            err_1 = _a.sent();
                            this.logger.error("Failed to load preferences for " +
                                payload.recipientPublicKey +
                                ": " +
                                String(err_1));
                            return [2 /*return*/];
                        case 3:
                            if (preferences.length === 0)
                                return [2 /*return*/];
                            template = this.templateService.getTemplate(payload.eventType);
                            renderedPayload = __assign(__assign({}, payload), { title: template
                                    ? this.templateService.render(template.title, payload)
                                    : payload.title, body: template
                                    ? this.templateService.render(template.body, payload)
                                    : payload.body });
                            filtered = preferences.filter(function (pref) {
                                return _this.matchesPreference(renderedPayload, pref);
                            });
                            return [4 /*yield*/, Promise.allSettled(filtered.map(function (pref) { return _this.sendToChannel(pref, renderedPayload); }))];
                        case 4:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        // ---------------------------------------------------------------------------
        // CHANNEL DELIVERY (UPDATED WITH IN-APP)
        // ---------------------------------------------------------------------------
        NotificationService_1.prototype.sendToChannel = function (pref, payload) {
            return __awaiter(this, void 0, void 0, function () {
                var publicKey, channel, eventType, eventId, alreadySent, err_2, provider, result, err_3;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            publicKey = pref.publicKey, channel = pref.channel;
                            eventType = payload.eventType, eventId = payload.eventId;
                            return [4 /*yield*/, this.logRepo.isAlreadySent(publicKey, channel, eventType, eventId)];
                        case 1:
                            alreadySent = _a.sent();
                            if (alreadySent)
                                return [2 /*return*/];
                            if (!this.rateLimiter.allow(publicKey, channel))
                                return [2 /*return*/];
                            if (!(channel === "in_app")) return [3 /*break*/, 9];
                            return [4 /*yield*/, this.logRepo.createPending(publicKey, channel, eventType, eventId)];
                        case 2:
                            _a.sent();
                            _a.label = 3;
                        case 3:
                            _a.trys.push([3, 6, , 8]);
                            return [4 /*yield*/, this.inAppRepo.create({
                                    publicKey: publicKey,
                                    eventType: eventType,
                                    eventId: eventId,
                                    title: payload.title,
                                    body: payload.body,
                                    metadata: payload.metadata,
                                })];
                        case 4:
                            _a.sent();
                            return [4 /*yield*/, this.logRepo.markSent(publicKey, channel, eventType, eventId)];
                        case 5:
                            _a.sent();
                            return [3 /*break*/, 8];
                        case 6:
                            err_2 = _a.sent();
                            return [4 /*yield*/, this.logRepo.markFailed(publicKey, channel, eventType, eventId, err_2.message)];
                        case 7:
                            _a.sent();
                            return [3 /*break*/, 8];
                        case 8: return [2 /*return*/];
                        case 9:
                            if (!(channel === "webhook" && this.jobQueueService)) return [3 /*break*/, 11];
                            return [4 /*yield*/, this.enqueueWebhookJob(pref, payload)];
                        case 10:
                            _a.sent();
                            return [2 /*return*/];
                        case 11:
                            provider = this.providerMap.get(channel);
                            if (!provider)
                                return [2 /*return*/];
                            return [4 /*yield*/, this.logRepo.createPending(publicKey, channel, eventType, eventId)];
                        case 12:
                            _a.sent();
                            _a.label = 13;
                        case 13:
                            _a.trys.push([13, 16, , 18]);
                            return [4 /*yield*/, provider.send(pref, payload)];
                        case 14:
                            result = _a.sent();
                            return [4 /*yield*/, this.logRepo.markSent(publicKey, channel, eventType, eventId, result.messageId, result.httpStatus, result.responseBody)];
                        case 15:
                            _a.sent();
                            return [3 /*break*/, 18];
                        case 16:
                            err_3 = _a.sent();
                            return [4 /*yield*/, this.logRepo.markFailed(publicKey, channel, eventType, eventId, err_3.message)];
                        case 17:
                            _a.sent();
                            return [3 /*break*/, 18];
                        case 18: return [2 /*return*/];
                    }
                });
            });
        };
        // ---------------------------------------------------------------------------
        // RETRY (UNCHANGED)
        // ---------------------------------------------------------------------------
        NotificationService_1.prototype.retryFailedNotifications = function () {
            return __awaiter(this, void 0, void 0, function () {
                var retries, _loop_1, this_1, _i, retries_1, entry;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.logRepo.getPendingRetries(MAX_ATTEMPTS)];
                        case 1:
                            retries = _a.sent();
                            _loop_1 = function (entry) {
                                var prefs, pref, synthetic, _b;
                                return __generator(this, function (_c) {
                                    switch (_c.label) {
                                        case 0:
                                            _c.trys.push([0, 3, , 4]);
                                            return [4 /*yield*/, this_1.prefsRepo.getEnabledPreferences(entry.publicKey)];
                                        case 1:
                                            prefs = _c.sent();
                                            pref = prefs.find(function (p) { return p.channel === entry.channel; });
                                            if (!pref)
                                                return [2 /*return*/, "continue"];
                                            synthetic = {
                                                eventType: entry.eventType,
                                                eventId: entry.eventId,
                                                recipientPublicKey: entry.publicKey,
                                                title: "Retry: " + entry.eventType,
                                                body: "Retry notification for event " + entry.eventId,
                                                occurredAt: new Date().toISOString(),
                                            };
                                            return [4 /*yield*/, this_1.sendToChannel(pref, synthetic)];
                                        case 2:
                                            _c.sent();
                                            return [3 /*break*/, 4];
                                        case 3:
                                            _b = _c.sent();
                                            return [3 /*break*/, 4];
                                        case 4: return [2 /*return*/];
                                    }
                                });
                            };
                            this_1 = this;
                            _i = 0, retries_1 = retries;
                            _a.label = 2;
                        case 2:
                            if (!(_i < retries_1.length)) return [3 /*break*/, 5];
                            entry = retries_1[_i];
                            return [5 /*yield**/, _loop_1(entry)];
                        case 3:
                            _a.sent();
                            _a.label = 4;
                        case 4:
                            _i++;
                            return [3 /*break*/, 2];
                        case 5: return [2 /*return*/];
                    }
                });
            });
        };
        // ---------------------------------------------------------------------------
        // HELPERS
        // ---------------------------------------------------------------------------
        NotificationService_1.prototype.matchesPreference = function (payload, pref) {
            if (pref.events !== null && !pref.events.includes(payload.eventType)) {
                return false;
            }
            if (pref.minAmountStroops > 0n && payload.amountStroops !== undefined) {
                if (payload.amountStroops < pref.minAmountStroops) {
                    return false;
                }
            }
            return true;
        };
        NotificationService_1.prototype.formatAmount = function (stroops) {
            var xlm = Number(stroops) / 10000000;
            return xlm.toFixed(7) + " XLM";
        };
        NotificationService_1.prototype.enqueueWebhookJob = function (pref, payload) {
            return __awaiter(this, void 0, void 0, function () {
                var publicKey, webhookUrl, eventType, eventId, jobPayload;
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            publicKey = pref.publicKey, webhookUrl = pref.webhookUrl;
                            eventType = payload.eventType, eventId = payload.eventId;
                            if (!webhookUrl)
                                return [2 /*return*/];
                            return [4 /*yield*/, this.logRepo.createPending(publicKey, "webhook", eventType, eventId)];
                        case 1:
                            _b.sent();
                            jobPayload = {
                                recipientPublicKey: publicKey,
                                webhookUrl: webhookUrl,
                                eventType: eventType,
                                eventId: eventId,
                                payload: {
                                    title: payload.title,
                                    body: payload.body,
                                    occurredAt: payload.occurredAt,
                                    amountStroops: (_a = payload.amountStroops) === null || _a === void 0 ? void 0 : _a.toString(),
                                    metadata: payload.metadata,
                                },
                            };
                            return [4 /*yield*/, this.jobQueueService.enqueue(types_1.JobType.WEBHOOK_DELIVERY, jobPayload)];
                        case 2:
                            _b.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        return NotificationService_1;
    }());
    __setFunctionName(_classThis, "NotificationService");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _onEscrowDeposited_decorators = [(0, event_emitter_1.OnEvent)("stellar.EscrowDeposited", { async: true })];
        _onEscrowWithdrawn_decorators = [(0, event_emitter_1.OnEvent)("stellar.EscrowWithdrawn", { async: true })];
        _onEscrowRefunded_decorators = [(0, event_emitter_1.OnEvent)("stellar.EscrowRefunded", { async: true })];
        _onPaymentReceived_decorators = [(0, event_emitter_1.OnEvent)(notification_events_1.NotificationEvent.PaymentReceived, { async: true })];
        _onAutoReconciliationSucceeded_decorators = [(0, event_emitter_1.OnEvent)("auto_reconciliation.succeeded", { async: true })];
        _onUsernameClaimed_decorators = [(0, event_emitter_1.OnEvent)(notification_events_1.NotificationEvent.UsernameClaimed, { async: true })];
        _retryFailedNotifications_decorators = [(0, schedule_1.Cron)(schedule_1.CronExpression.EVERY_30_MINUTES)];
        __esDecorate(_classThis, null, _onEscrowDeposited_decorators, { kind: "method", name: "onEscrowDeposited", static: false, private: false, access: { has: function (obj) { return "onEscrowDeposited" in obj; }, get: function (obj) { return obj.onEscrowDeposited; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _onEscrowWithdrawn_decorators, { kind: "method", name: "onEscrowWithdrawn", static: false, private: false, access: { has: function (obj) { return "onEscrowWithdrawn" in obj; }, get: function (obj) { return obj.onEscrowWithdrawn; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _onEscrowRefunded_decorators, { kind: "method", name: "onEscrowRefunded", static: false, private: false, access: { has: function (obj) { return "onEscrowRefunded" in obj; }, get: function (obj) { return obj.onEscrowRefunded; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _onPaymentReceived_decorators, { kind: "method", name: "onPaymentReceived", static: false, private: false, access: { has: function (obj) { return "onPaymentReceived" in obj; }, get: function (obj) { return obj.onPaymentReceived; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _onAutoReconciliationSucceeded_decorators, { kind: "method", name: "onAutoReconciliationSucceeded", static: false, private: false, access: { has: function (obj) { return "onAutoReconciliationSucceeded" in obj; }, get: function (obj) { return obj.onAutoReconciliationSucceeded; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _onUsernameClaimed_decorators, { kind: "method", name: "onUsernameClaimed", static: false, private: false, access: { has: function (obj) { return "onUsernameClaimed" in obj; }, get: function (obj) { return obj.onUsernameClaimed; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _retryFailedNotifications_decorators, { kind: "method", name: "retryFailedNotifications", static: false, private: false, access: { has: function (obj) { return "retryFailedNotifications" in obj; }, get: function (obj) { return obj.retryFailedNotifications; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        NotificationService = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return NotificationService = _classThis;
}();
exports.NotificationService = NotificationService;
