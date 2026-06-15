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
Object.defineProperty(exports, "__esModule", { value: true });
exports.NOTIFICATION_PROVIDERS = exports.WebhookProvider = exports.ExpoPushProvider = exports.SendGridEmailProvider = exports.NoopNotificationProvider = void 0;
var common_1 = require("@nestjs/common");
var crypto = require("crypto");
// ---------------------------------------------------------------------------
// No-op provider for local / development transports
// ---------------------------------------------------------------------------
var NoopNotificationProvider = /** @class */ (function () {
    function NoopNotificationProvider(channel) {
        this.logger = new common_1.Logger(NoopNotificationProvider.name);
        this.channel = channel;
    }
    NoopNotificationProvider.prototype.send = function (preference, payload) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.logger.debug("[noop:".concat(this.channel, "] simulated notification for ").concat(payload.eventType, " to ").concat(preference.publicKey));
                return [2 /*return*/, {
                        messageId: "noop:".concat(payload.eventId),
                        httpStatus: 200,
                        responseBody: "noop",
                    }];
            });
        });
    };
    return NoopNotificationProvider;
}());
exports.NoopNotificationProvider = NoopNotificationProvider;
// ---------------------------------------------------------------------------
// SendGrid email provider
// ---------------------------------------------------------------------------
var SendGridEmailProvider = /** @class */ (function () {
    function SendGridEmailProvider(apiKey, fromEmail) {
        this.apiKey = apiKey;
        this.fromEmail = fromEmail;
        this.channel = "email";
        this.logger = new common_1.Logger(SendGridEmailProvider.name);
    }
    SendGridEmailProvider.prototype.send = function (preference, payload) {
        return __awaiter(this, void 0, void 0, function () {
            var body, response, text, messageId;
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!preference.email) {
                            throw new Error("No email address configured for preference");
                        }
                        body = {
                            personalizations: [{ to: [{ email: preference.email }] }],
                            from: { email: this.fromEmail },
                            subject: payload.title,
                            content: [
                                {
                                    type: "text/plain",
                                    value: payload.body,
                                },
                                {
                                    type: "text/html",
                                    value: this.buildHtml(payload),
                                },
                            ],
                        };
                        return [4 /*yield*/, fetch("https://api.sendgrid.com/v3/mail/send", {
                                method: "POST",
                                headers: {
                                    Authorization: "Bearer ".concat(this.apiKey),
                                    "Content-Type": "application/json",
                                },
                                body: JSON.stringify(body),
                            })];
                    case 1:
                        response = _b.sent();
                        if (!!response.ok) return [3 /*break*/, 3];
                        return [4 /*yield*/, response.text()];
                    case 2:
                        text = _b.sent();
                        throw new Error("SendGrid error ".concat(response.status, ": ").concat(text));
                    case 3:
                        messageId = (_a = response.headers.get("X-Message-Id")) !== null && _a !== void 0 ? _a : undefined;
                        this.logger.debug("Email sent to ".concat(preference.email, ": messageId=").concat(messageId));
                        return [2 /*return*/, { messageId: messageId }];
                }
            });
        });
    };
    SendGridEmailProvider.prototype.buildHtml = function (payload) {
        return "\n      <h2>".concat(payload.title, "</h2>\n      <p>").concat(payload.body, "</p>\n      <hr/>\n      <p style=\"color:#666;font-size:12px\"> RustAcademy \u00B7 ").concat(payload.occurredAt, "</p>\n    ").trim();
    };
    return SendGridEmailProvider;
}());
exports.SendGridEmailProvider = SendGridEmailProvider;
// ---------------------------------------------------------------------------
// Expo Push provider (React Native / mobile)
// ---------------------------------------------------------------------------
var ExpoPushProvider = /** @class */ (function () {
    function ExpoPushProvider(accessToken) {
        this.accessToken = accessToken;
        this.channel = "push";
        this.logger = new common_1.Logger(ExpoPushProvider.name);
    }
    ExpoPushProvider.prototype.send = function (preference, payload) {
        return __awaiter(this, void 0, void 0, function () {
            var message, headers, response, text, json, messageId;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (!preference.pushToken) {
                            throw new Error("No push token configured for preference");
                        }
                        message = {
                            to: preference.pushToken,
                            title: payload.title,
                            body: payload.body,
                            data: __assign({ eventType: payload.eventType, eventId: payload.eventId }, ((_a = payload.metadata) !== null && _a !== void 0 ? _a : {})),
                            sound: "default",
                            priority: "high",
                        };
                        headers = {
                            "Content-Type": "application/json",
                            Accept: "application/json",
                        };
                        if (this.accessToken) {
                            headers["Authorization"] = "Bearer ".concat(this.accessToken);
                        }
                        return [4 /*yield*/, fetch("https://exp.host/--/api/v2/push/send", {
                                method: "POST",
                                headers: headers,
                                body: JSON.stringify(message),
                            })];
                    case 1:
                        response = _c.sent();
                        if (!!response.ok) return [3 /*break*/, 3];
                        return [4 /*yield*/, response.text()];
                    case 2:
                        text = _c.sent();
                        throw new Error("Expo Push error ".concat(response.status, ": ").concat(text));
                    case 3: return [4 /*yield*/, response.json()];
                    case 4:
                        json = (_c.sent());
                        messageId = (_b = json.data) === null || _b === void 0 ? void 0 : _b.id;
                        this.logger.debug("Push sent to ".concat(preference.pushToken, ": messageId=").concat(messageId));
                        return [2 /*return*/, { messageId: messageId }];
                }
            });
        });
    };
    return ExpoPushProvider;
}());
exports.ExpoPushProvider = ExpoPushProvider;
// ---------------------------------------------------------------------------
// Webhook provider
// ---------------------------------------------------------------------------
var WebhookProvider = /** @class */ (function () {
    function WebhookProvider(metrics) {
        this.metrics = metrics;
        this.channel = "webhook";
        this.logger = new common_1.Logger(WebhookProvider.name);
        this.maxResponseBodyLength = 1000;
    }
    WebhookProvider.prototype.send = function (preference, payload) {
        return __awaiter(this, void 0, void 0, function () {
            var startTime, webhookPayload, body, signature, headers, response, duration, responseBody, text, _a, error, error_1, duration, errorType;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!preference.webhookUrl) {
                            throw new Error("No webhook URL configured for preference");
                        }
                        startTime = Date.now();
                        webhookPayload = this.buildWebhookPayload(payload);
                        body = JSON.stringify(webhookPayload);
                        signature = this.signPayload(body, webhookPayload.sentAt, preference.webhookSecret);
                        headers = {
                            "Content-Type": "application/json",
                            "X- RustAcademy-Signature": signature,
                            "X- RustAcademy-Delivery": webhookPayload.id,
                            "X- RustAcademy-Event": payload.eventType,
                            "X- RustAcademy-Timestamp": webhookPayload.sentAt,
                        };
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 7, , 8]);
                        return [4 /*yield*/, fetch(preference.webhookUrl, {
                                method: "POST",
                                headers: headers,
                                body: body,
                            })];
                    case 2:
                        response = _b.sent();
                        duration = (Date.now() - startTime) / 1000;
                        responseBody = void 0;
                        _b.label = 3;
                    case 3:
                        _b.trys.push([3, 5, , 6]);
                        return [4 /*yield*/, response.text()];
                    case 4:
                        text = _b.sent();
                        responseBody =
                            text.length > this.maxResponseBodyLength
                                ? text.slice(0, this.maxResponseBodyLength) + "..."
                                : text;
                        return [3 /*break*/, 6];
                    case 5:
                        _a = _b.sent();
                        return [3 /*break*/, 6];
                    case 6:
                        if (!response.ok) {
                            error = new Error("Webhook returned HTTP ".concat(response.status, " for ").concat(preference.webhookUrl, ": ").concat(responseBody !== null && responseBody !== void 0 ? responseBody : "no response body"));
                            if (this.metrics) {
                                this.metrics.recordWebhookDeliveryDuration(payload.eventType, "failed", duration);
                                this.metrics.recordError("webhook", "http_error");
                            }
                            throw error;
                        }
                        this.logger.debug("Webhook delivered to ".concat(preference.webhookUrl, ": status=").concat(response.status));
                        if (this.metrics) {
                            this.metrics.recordWebhookDeliveryDuration(payload.eventType, "success", duration);
                        }
                        return [2 /*return*/, {
                                httpStatus: response.status,
                                responseBody: responseBody,
                            }];
                    case 7:
                        error_1 = _b.sent();
                        duration = (Date.now() - startTime) / 1000;
                        errorType = error_1 instanceof Error ? error_1.constructor.name : "UnknownError";
                        if (this.metrics) {
                            this.metrics.recordWebhookDeliveryDuration(payload.eventType, "error", duration);
                            this.metrics.recordError("webhook", errorType);
                        }
                        throw error_1;
                    case 8: return [2 /*return*/];
                }
            });
        });
    };
    WebhookProvider.prototype.buildWebhookPayload = function (payload) {
        var _a;
        var deliveryId = "wh_".concat(Date.now(), "_").concat(Math.random().toString(36).slice(2, 10));
        return {
            id: deliveryId,
            eventType: payload.eventType,
            eventId: payload.eventId,
            timestamp: payload.occurredAt,
            sentAt: new Date().toISOString(),
            recipientPublicKey: payload.recipientPublicKey,
            title: payload.title,
            body: payload.body,
            data: (_a = payload.metadata) !== null && _a !== void 0 ? _a : {},
        };
    };
    WebhookProvider.prototype.signPayload = function (body, timestamp, secret) {
        if (!secret) {
            this.logger.warn("Webhook secret not configured - payload will not be signed");
            return "";
        }
        // Sign timestamp + "." + body to prevent replay attacks
        var hmac = crypto.createHmac("sha256", secret);
        hmac.update("".concat(timestamp, ".").concat(body));
        var digest = hmac.digest("hex");
        return "sha256=".concat(digest);
    };
    /**
     * Verify an incoming webhook signature.
     * @param body Raw request body string
     * @param signature Value of X- RustAcademy-Signature header
     * @param timestamp Value of X- RustAcademy-Timestamp header
     * @param secret Shared webhook secret
     * @param toleranceMs Replay window in ms (default 5 minutes)
     */
    WebhookProvider.verifySignature = function (body, signature, timestamp, secret, toleranceMs) {
        if (toleranceMs === void 0) { toleranceMs = 5 * 60 * 1000; }
        if (!signature.startsWith("sha256=")) {
            return false;
        }
        // Reject stale timestamps to prevent replay attacks
        var ts = new Date(timestamp).getTime();
        if (isNaN(ts) || Math.abs(Date.now() - ts) > toleranceMs) {
            return false;
        }
        var expectedDigest = signature.slice(7);
        var hmac = crypto.createHmac("sha256", secret);
        hmac.update("".concat(timestamp, ".").concat(body));
        var actualDigest = hmac.digest("hex");
        try {
            return crypto.timingSafeEqual(Buffer.from(expectedDigest, "hex"), Buffer.from(actualDigest, "hex"));
        }
        catch (_a) {
            return false;
        }
    };
    return WebhookProvider;
}());
exports.WebhookProvider = WebhookProvider;
// ---------------------------------------------------------------------------
// Token for DI
// ---------------------------------------------------------------------------
exports.NOTIFICATION_PROVIDERS = Symbol("NOTIFICATION_PROVIDERS");
