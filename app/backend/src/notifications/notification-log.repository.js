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
exports.NotificationLogRepository = void 0;
var common_1 = require("@nestjs/common");
var NotificationLogRepository = function () {
    var _classDecorators = [(0, common_1.Injectable)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var NotificationLogRepository = _classThis = /** @class */ (function () {
        function NotificationLogRepository_1(supabase) {
            this.supabase = supabase;
            this.logger = new common_1.Logger(NotificationLogRepository.name);
        }
        NotificationLogRepository_1.prototype.createPending = function (publicKey, channel, eventType, eventId) {
            return __awaiter(this, void 0, void 0, function () {
                var _a, data, error;
                var _b;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0: return [4 /*yield*/, this.supabase
                                .getClient()
                                .from("notification_log")
                                .upsert({
                                public_key: publicKey,
                                channel: channel,
                                event_type: eventType,
                                event_id: eventId,
                                status: "pending",
                                attempts: 0,
                            }, {
                                onConflict: "public_key,channel,event_id,event_type",
                                ignoreDuplicates: true,
                            })
                                .select("id")
                                .maybeSingle()];
                        case 1:
                            _a = _c.sent(), data = _a.data, error = _a.error;
                            if (error) {
                                this.logger.error("Failed to create pending log: ".concat(error.message));
                                return [2 /*return*/, null];
                            }
                            return [2 /*return*/, (_b = data === null || data === void 0 ? void 0 : data.id) !== null && _b !== void 0 ? _b : null];
                    }
                });
            });
        };
        NotificationLogRepository_1.prototype.markSent = function (publicKey, channel, eventType, eventId, providerMessageId, httpStatus, responseBody) {
            return __awaiter(this, void 0, void 0, function () {
                var updateData, error;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            updateData = {
                                status: "sent",
                                provider_message_id: providerMessageId !== null && providerMessageId !== void 0 ? providerMessageId : null,
                                last_error: null,
                            };
                            if (channel === "webhook") {
                                updateData.webhook_response_status = httpStatus !== null && httpStatus !== void 0 ? httpStatus : null;
                                updateData.webhook_response_body = responseBody !== null && responseBody !== void 0 ? responseBody : null;
                                updateData.webhook_delivered_at = new Date().toISOString();
                            }
                            return [4 /*yield*/, this.supabase
                                    .getClient()
                                    .from("notification_log")
                                    .update(updateData)
                                    .eq("public_key", publicKey)
                                    .eq("channel", channel)
                                    .eq("event_type", eventType)
                                    .eq("event_id", eventId)];
                        case 1:
                            error = (_a.sent()).error;
                            if (error) {
                                this.logger.warn("Failed to mark notification sent: ".concat(error.message));
                            }
                            return [2 /*return*/];
                    }
                });
            });
        };
        NotificationLogRepository_1.prototype.markFailed = function (publicKey, channel, eventType, eventId, errorMessage) {
            return __awaiter(this, void 0, void 0, function () {
                var client, data, attempts, error;
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            client = this.supabase.getClient();
                            return [4 /*yield*/, client
                                    .from("notification_log")
                                    .select("attempts")
                                    .eq("public_key", publicKey)
                                    .eq("channel", channel)
                                    .eq("event_type", eventType)
                                    .eq("event_id", eventId)
                                    .maybeSingle()];
                        case 1:
                            data = (_b.sent()).data;
                            attempts = ((_a = data === null || data === void 0 ? void 0 : data.attempts) !== null && _a !== void 0 ? _a : 0) + 1;
                            return [4 /*yield*/, client
                                    .from("notification_log")
                                    .update({ status: "failed", last_error: errorMessage, attempts: attempts })
                                    .eq("public_key", publicKey)
                                    .eq("channel", channel)
                                    .eq("event_type", eventType)
                                    .eq("event_id", eventId)];
                        case 2:
                            error = (_b.sent()).error;
                            if (error) {
                                this.logger.warn("Failed to mark notification failed: ".concat(error.message));
                            }
                            return [2 /*return*/];
                    }
                });
            });
        };
        NotificationLogRepository_1.prototype.getPendingRetries = function (maxAttempts) {
            return __awaiter(this, void 0, void 0, function () {
                var _a, data, error;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, this.supabase
                                .getClient()
                                .from("notification_log")
                                .select("public_key, channel, event_type, event_id, attempts, updated_at")
                                .eq("status", "failed")
                                .lt("attempts", maxAttempts)
                                .order("created_at", { ascending: true })
                                .limit(100)];
                        case 1:
                            _a = _b.sent(), data = _a.data, error = _a.error;
                            if (error) {
                                this.logger.error("Failed to fetch retries: ".concat(error.message));
                                return [2 /*return*/, []];
                            }
                            return [2 /*return*/, (data !== null && data !== void 0 ? data : []).map(function (r) {
                                    var _a;
                                    return ({
                                        publicKey: r.public_key,
                                        channel: r.channel,
                                        eventType: r.event_type,
                                        eventId: r.event_id,
                                        attempts: r.attempts,
                                        lastFailedAt: (_a = r.updated_at) !== null && _a !== void 0 ? _a : undefined,
                                    });
                                })];
                    }
                });
            });
        };
        /** Move a log entry to DLQ status after exhausting all retries. */
        NotificationLogRepository_1.prototype.markDlq = function (publicKey, channel, eventType, eventId, lastError) {
            return __awaiter(this, void 0, void 0, function () {
                var error;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.supabase
                                .getClient()
                                .from("notification_log")
                                .update({ status: "dlq", last_error: lastError })
                                .eq("public_key", publicKey)
                                .eq("channel", channel)
                                .eq("event_type", eventType)
                                .eq("event_id", eventId)];
                        case 1:
                            error = (_a.sent()).error;
                            if (error) {
                                this.logger.warn("Failed to mark notification as DLQ: ".concat(error.message));
                            }
                            return [2 /*return*/];
                    }
                });
            });
        };
        NotificationLogRepository_1.prototype.isAlreadySent = function (publicKey, channel, eventType, eventId) {
            return __awaiter(this, void 0, void 0, function () {
                var data;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.supabase
                                .getClient()
                                .from("notification_log")
                                .select("status")
                                .eq("public_key", publicKey)
                                .eq("channel", channel)
                                .eq("event_type", eventType)
                                .eq("event_id", eventId)
                                .eq("status", "sent")
                                .maybeSingle()];
                        case 1:
                            data = (_a.sent()).data;
                            return [2 /*return*/, !!data];
                    }
                });
            });
        };
        NotificationLogRepository_1.prototype.getWebhookDeliveryLogs = function (publicKey_1) {
            return __awaiter(this, arguments, void 0, function (publicKey, limit) {
                var _a, data, error;
                if (limit === void 0) { limit = 50; }
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, this.supabase
                                .getClient()
                                .from("notification_log")
                                .select("id, event_type, event_id, status, attempts, last_error, webhook_response_status, webhook_response_body, created_at, webhook_delivered_at")
                                .eq("public_key", publicKey)
                                .eq("channel", "webhook")
                                .order("created_at", { ascending: false })
                                .limit(limit)];
                        case 1:
                            _a = _b.sent(), data = _a.data, error = _a.error;
                            if (error) {
                                this.logger.error("Failed to fetch webhook logs for ".concat(publicKey, ": ").concat(error.message));
                                return [2 /*return*/, []];
                            }
                            return [2 /*return*/, (data !== null && data !== void 0 ? data : []).map(function (r) {
                                    var _a, _b, _c, _d;
                                    return ({
                                        id: r.id,
                                        eventType: r.event_type,
                                        eventId: r.event_id,
                                        status: r.status,
                                        attempts: r.attempts,
                                        lastError: (_a = r.last_error) !== null && _a !== void 0 ? _a : undefined,
                                        httpStatus: (_b = r.webhook_response_status) !== null && _b !== void 0 ? _b : undefined,
                                        responseBody: (_c = r.webhook_response_body) !== null && _c !== void 0 ? _c : undefined,
                                        createdAt: r.created_at,
                                        deliveredAt: (_d = r.webhook_delivered_at) !== null && _d !== void 0 ? _d : undefined,
                                    });
                                })];
                    }
                });
            });
        };
        /** Cursor-paginated variant of getWebhookDeliveryLogs. */
        NotificationLogRepository_1.prototype.getWebhookDeliveryLogsPaginated = function (publicKey_1) {
            return __awaiter(this, arguments, void 0, function (publicKey, limit, cursor) {
                var effectiveLimit, query, json, parsed, _a, data, error, rawRows, hasMore, pageRows, mapped, nextCursor, last;
                if (limit === void 0) { limit = 50; }
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            effectiveLimit = Math.min(100, Math.max(1, limit));
                            query = this.supabase
                                .getClient()
                                .from("notification_log")
                                .select("id, event_type, event_id, status, attempts, last_error, webhook_response_status, webhook_response_body, created_at, webhook_delivered_at")
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
                                this.logger.error("Failed to fetch webhook logs for ".concat(publicKey, ": ").concat(error.message));
                                return [2 /*return*/, { data: [], next_cursor: null, has_more: false }];
                            }
                            rawRows = (data !== null && data !== void 0 ? data : []);
                            hasMore = rawRows.length > effectiveLimit;
                            pageRows = hasMore ? rawRows.slice(0, effectiveLimit) : rawRows;
                            mapped = pageRows.map(function (r) {
                                var _a, _b, _c, _d;
                                return ({
                                    id: r.id,
                                    eventType: r.event_type,
                                    eventId: r.event_id,
                                    status: r.status,
                                    attempts: r.attempts,
                                    lastError: (_a = r.last_error) !== null && _a !== void 0 ? _a : undefined,
                                    httpStatus: (_b = r.webhook_response_status) !== null && _b !== void 0 ? _b : undefined,
                                    responseBody: (_c = r.webhook_response_body) !== null && _c !== void 0 ? _c : undefined,
                                    createdAt: r.created_at,
                                    deliveredAt: (_d = r.webhook_delivered_at) !== null && _d !== void 0 ? _d : undefined,
                                });
                            });
                            nextCursor = null;
                            if (hasMore && pageRows.length > 0) {
                                last = pageRows[pageRows.length - 1];
                                nextCursor = Buffer.from(JSON.stringify({ pk: last.created_at, id: last.id }), "utf-8").toString("base64url");
                            }
                            return [2 /*return*/, { data: mapped, next_cursor: nextCursor, has_more: hasMore }];
                    }
                });
            });
        };
        /** Get webhook stats for a specific public key. */
        NotificationLogRepository_1.prototype.getWebhookStats = function (publicKey) {
            return __awaiter(this, void 0, void 0, function () {
                var client, sentData, failedData, pendingRetries, pendingForUser, lastDelivery;
                var _a, _b, _c, _d;
                return __generator(this, function (_e) {
                    switch (_e.label) {
                        case 0:
                            client = this.supabase.getClient();
                            return [4 /*yield*/, client
                                    .from("notification_log")
                                    .select("id", { count: "exact", head: true })
                                    .eq("public_key", publicKey)
                                    .eq("channel", "webhook")
                                    .eq("status", "sent")];
                        case 1:
                            sentData = (_e.sent()).data;
                            return [4 /*yield*/, client
                                    .from("notification_log")
                                    .select("id", { count: "exact", head: true })
                                    .eq("public_key", publicKey)
                                    .eq("channel", "webhook")
                                    .eq("status", "failed")];
                        case 2:
                            failedData = (_e.sent()).data;
                            return [4 /*yield*/, this.getPendingRetries(3)];
                        case 3:
                            pendingRetries = _e.sent();
                            pendingForUser = pendingRetries.filter(function (r) { return r.publicKey === publicKey && r.channel === "webhook"; });
                            return [4 /*yield*/, client
                                    .from("notification_log")
                                    .select("webhook_delivered_at, last_error")
                                    .eq("public_key", publicKey)
                                    .eq("channel", "webhook")
                                    .eq("status", "sent")
                                    .order("webhook_delivered_at", { ascending: false })
                                    .limit(1)
                                    .maybeSingle()];
                        case 4:
                            lastDelivery = (_e.sent()).data;
                            return [2 /*return*/, {
                                    totalSent: (_a = sentData === null || sentData === void 0 ? void 0 : sentData.length) !== null && _a !== void 0 ? _a : 0,
                                    totalFailed: (_b = failedData === null || failedData === void 0 ? void 0 : failedData.length) !== null && _b !== void 0 ? _b : 0,
                                    pendingRetries: pendingForUser.length,
                                    lastDeliveryAt: (_c = lastDelivery === null || lastDelivery === void 0 ? void 0 : lastDelivery.webhook_delivered_at) !== null && _c !== void 0 ? _c : undefined,
                                    lastError: (_d = lastDelivery === null || lastDelivery === void 0 ? void 0 : lastDelivery.last_error) !== null && _d !== void 0 ? _d : undefined,
                                }];
                    }
                });
            });
        };
        return NotificationLogRepository_1;
    }());
    __setFunctionName(_classThis, "NotificationLogRepository");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        NotificationLogRepository = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return NotificationLogRepository = _classThis;
}();
exports.NotificationLogRepository = NotificationLogRepository;
