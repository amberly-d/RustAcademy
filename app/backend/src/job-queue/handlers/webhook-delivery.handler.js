"use strict";
/**
 * Job Queue System - Webhook Delivery Handler
 *
 * Implements the JobHandler interface for webhook delivery jobs.
 * Sends HTTP POST requests to webhook URLs and handles retries based on response codes.
 *
 * Requirements: 7.3, 7.4, 7.5, 15.4, 15.5
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
exports.WebhookDeliveryHandler = exports.PermanentJobError = void 0;
var common_1 = require("@nestjs/common");
/**
 * Error thrown for permanent job failures (no retry)
 * Used for 4xx errors (except 408, 429) and validation failures
 */
var PermanentJobError = /** @class */ (function (_super) {
    __extends(PermanentJobError, _super);
    function PermanentJobError(message) {
        var _this = _super.call(this, message) || this;
        _this.name = "PermanentJobError";
        return _this;
    }
    return PermanentJobError;
}(Error));
exports.PermanentJobError = PermanentJobError;
/**
 * Webhook Delivery Handler
 *
 * Sends HTTP POST requests to webhook URLs with event payloads.
 * Classifies errors as transient (5xx, network) or permanent (4xx, validation).
 * Logs failures to notification_logs table for audit trail.
 */
var WebhookDeliveryHandler = function () {
    var _classDecorators = [(0, common_1.Injectable)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var WebhookDeliveryHandler = _classThis = /** @class */ (function () {
        function WebhookDeliveryHandler_1(notificationLogRepo) {
            this.notificationLogRepo = notificationLogRepo;
            this.logger = new common_1.Logger(WebhookDeliveryHandler.name);
            this.maxResponseBodyLength = 1000;
            this.requestTimeoutMs = 30000; // 30 seconds
        }
        /**
         * Execute webhook delivery
         *
         * Sends HTTP POST request to the webhook URL with the event payload.
         * Checks cancellation token before making the request.
         *
         * @param job - The webhook delivery job
         * @param cancellationToken - Token to check for cancellation
         * @throws PermanentJobError for 4xx responses (except 408, 429)
         * @throws Error for 5xx responses and network errors (transient)
         *
         * **Validates: Requirements 7.3, 7.4, 7.5**
         */
        WebhookDeliveryHandler_1.prototype.execute = function (job, cancellationToken) {
            return __awaiter(this, void 0, void 0, function () {
                var _a, webhookUrl, eventType, eventId, payload, recipientPublicKey, controller_1, timeoutId, response, responseBody, text, _b, errorMessage, error_1, timeoutError, networkError;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            // Check cancellation token before HTTP request
                            cancellationToken.throwIfCancelled();
                            _a = job.payload, webhookUrl = _a.webhookUrl, eventType = _a.eventType, eventId = _a.eventId, payload = _a.payload, recipientPublicKey = _a.recipientPublicKey;
                            this.logger.log("Delivering webhook to ".concat(webhookUrl, " (eventType: ").concat(eventType, ", eventId: ").concat(eventId, ", jobId: ").concat(job.id, ")"));
                            _c.label = 1;
                        case 1:
                            _c.trys.push([1, 9, , 10]);
                            controller_1 = new AbortController();
                            timeoutId = setTimeout(function () { return controller_1.abort(); }, this.requestTimeoutMs);
                            return [4 /*yield*/, fetch(webhookUrl, {
                                    method: "POST",
                                    headers: {
                                        "Content-Type": "application/json",
                                        "X- RustAcademy-Event": eventType,
                                        "X- RustAcademy-Event-Id": eventId,
                                        "User-Agent": " RustAcademy-Webhook/1.0",
                                    },
                                    body: JSON.stringify({
                                        eventType: eventType,
                                        eventId: eventId,
                                        recipientPublicKey: recipientPublicKey,
                                        payload: payload,
                                        timestamp: new Date().toISOString(),
                                    }),
                                    signal: controller_1.signal,
                                })];
                        case 2:
                            response = _c.sent();
                            clearTimeout(timeoutId);
                            responseBody = void 0;
                            _c.label = 3;
                        case 3:
                            _c.trys.push([3, 5, , 6]);
                            return [4 /*yield*/, response.text()];
                        case 4:
                            text = _c.sent();
                            responseBody =
                                text.length > this.maxResponseBodyLength
                                    ? text.slice(0, this.maxResponseBodyLength) + "..."
                                    : text;
                            return [3 /*break*/, 6];
                        case 5:
                            _b = _c.sent();
                            // Ignore response body read errors
                            responseBody = undefined;
                            return [3 /*break*/, 6];
                        case 6:
                            if (!(response.status >= 200 && response.status < 300)) return [3 /*break*/, 8];
                            // Success - log to notification_logs
                            return [4 /*yield*/, this.notificationLogRepo.markSent(recipientPublicKey, "webhook", eventType, // eventType from payload may not match NotificationEventType enum
                                eventId, undefined, // no provider message ID for webhooks
                                response.status, responseBody)];
                        case 7:
                            // Success - log to notification_logs
                            _c.sent();
                            this.logger.log("Webhook delivered successfully to ".concat(webhookUrl, " (status: ").concat(response.status, ", jobId: ").concat(job.id, ")"));
                            return [2 /*return*/];
                        case 8:
                            errorMessage = "Webhook returned HTTP ".concat(response.status, " for ").concat(webhookUrl, ": ").concat(responseBody !== null && responseBody !== void 0 ? responseBody : "no response body");
                            if (response.status >= 400 && response.status < 500) {
                                // 4xx errors are generally permanent, except:
                                // - 408 Request Timeout (transient)
                                // - 429 Too Many Requests (transient, should retry)
                                if (response.status === 408 || response.status === 429) {
                                    this.logger.warn("Webhook returned transient 4xx error (status: ".concat(response.status, ", jobId: ").concat(job.id, ") - will retry"));
                                    throw new Error(errorMessage);
                                }
                                // Other 4xx errors are permanent (bad request, unauthorized, not found, etc.)
                                this.logger.error("Webhook returned permanent 4xx error (status: ".concat(response.status, ", jobId: ").concat(job.id, ") - no retry"));
                                throw new PermanentJobError(errorMessage);
                            }
                            // 5xx errors are transient (server errors, should retry)
                            if (response.status >= 500) {
                                this.logger.warn("Webhook returned 5xx error (status: ".concat(response.status, ", jobId: ").concat(job.id, ") - will retry"));
                                throw new Error(errorMessage);
                            }
                            // Other status codes (3xx, etc.) - treat as transient
                            this.logger.warn("Webhook returned unexpected status (status: ".concat(response.status, ", jobId: ").concat(job.id, ") - will retry"));
                            throw new Error(errorMessage);
                        case 9:
                            error_1 = _c.sent();
                            // Re-throw PermanentJobError as-is
                            if (error_1 instanceof PermanentJobError) {
                                throw error_1;
                            }
                            // Handle network errors (timeout, connection refused, DNS failure, etc.)
                            if (error_1.name === "AbortError") {
                                timeoutError = "Webhook request timed out after ".concat(this.requestTimeoutMs, "ms for ").concat(webhookUrl);
                                this.logger.warn("".concat(timeoutError, " (jobId: ").concat(job.id, ") - will retry"));
                                throw new Error(timeoutError);
                            }
                            networkError = "Network error delivering webhook to ".concat(webhookUrl, ": ").concat(error_1.message);
                            this.logger.warn("".concat(networkError, " (jobId: ").concat(job.id, ") - will retry"));
                            throw new Error(networkError);
                        case 10: return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * Validate webhook delivery payload
         *
         * Checks that required fields are present:
         * - webhookUrl: Target URL for webhook delivery
         * - eventType: Type of event being delivered
         *
         * @param payload - The webhook delivery payload
         * @throws PermanentJobError if validation fails
         *
         * **Validates: Requirements 7.4, 15.4, 15.5**
         */
        WebhookDeliveryHandler_1.prototype.validate = function (payload) {
            return __awaiter(this, void 0, void 0, function () {
                var errors;
                return __generator(this, function (_a) {
                    errors = [];
                    if (!payload.webhookUrl || typeof payload.webhookUrl !== "string") {
                        errors.push("webhookUrl is required and must be a string");
                    }
                    if (!payload.eventType || typeof payload.eventType !== "string") {
                        errors.push("eventType is required and must be a string");
                    }
                    if (!payload.eventId || typeof payload.eventId !== "string") {
                        errors.push("eventId is required and must be a string");
                    }
                    if (!payload.recipientPublicKey ||
                        typeof payload.recipientPublicKey !== "string") {
                        errors.push("recipientPublicKey is required and must be a string");
                    }
                    if (!payload.payload || typeof payload.payload !== "object") {
                        errors.push("payload is required and must be an object");
                    }
                    if (errors.length > 0) {
                        throw new PermanentJobError("Validation failed: ".concat(errors.join(", ")));
                    }
                    // Validate URL format
                    try {
                        new URL(payload.webhookUrl);
                    }
                    catch (_b) {
                        throw new PermanentJobError("Invalid webhook URL: ".concat(payload.webhookUrl));
                    }
                    return [2 /*return*/];
                });
            });
        };
        /**
         * Handle job failure
         *
         * Logs webhook delivery failure to notification_logs table for audit trail.
         * This is called when the job exhausts all retry attempts and moves to DLQ.
         *
         * @param job - The failed job
         * @param error - The error that caused the failure
         *
         * **Validates: Requirements 7.5**
         */
        WebhookDeliveryHandler_1.prototype.onFailure = function (job, error) {
            return __awaiter(this, void 0, void 0, function () {
                var _a, recipientPublicKey, eventType, eventId, logError_1;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _a = job.payload, recipientPublicKey = _a.recipientPublicKey, eventType = _a.eventType, eventId = _a.eventId;
                            this.logger.error("Webhook delivery permanently failed for ".concat(recipientPublicKey, " (eventType: ").concat(eventType, ", eventId: ").concat(eventId, ", jobId: ").concat(job.id, "): ").concat(error.message));
                            _b.label = 1;
                        case 1:
                            _b.trys.push([1, 3, , 4]);
                            return [4 /*yield*/, this.notificationLogRepo.markFailed(recipientPublicKey, "webhook", eventType, // eventType from payload may not match NotificationEventType enum
                                eventId, error.message)];
                        case 2:
                            _b.sent();
                            return [3 /*break*/, 4];
                        case 3:
                            logError_1 = _b.sent();
                            this.logger.error("Failed to log webhook failure to notification_logs (jobId: ".concat(job.id, "): ").concat(logError_1.message));
                            return [3 /*break*/, 4];
                        case 4: return [2 /*return*/];
                    }
                });
            });
        };
        return WebhookDeliveryHandler_1;
    }());
    __setFunctionName(_classThis, "WebhookDeliveryHandler");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        WebhookDeliveryHandler = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return WebhookDeliveryHandler = _classThis;
}();
exports.WebhookDeliveryHandler = WebhookDeliveryHandler;
