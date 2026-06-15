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
exports.DeveloperService = void 0;
var common_1 = require("@nestjs/common");
var crypto = require("crypto");
var VERSION = "0.1.0";
var TEST_WEBHOOK_TIMEOUT_MS = 10000;
var MAX_RESPONSE_BODY_LENGTH = 2048;
var DeveloperService = function () {
    var _classDecorators = [(0, common_1.Injectable)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var DeveloperService = _classThis = /** @class */ (function () {
        function DeveloperService_1(apiKeysService, webhookService, auditService) {
            this.apiKeysService = apiKeysService;
            this.webhookService = webhookService;
            this.auditService = auditService;
            this.logger = new common_1.Logger(DeveloperService.name);
        }
        DeveloperService_1.prototype.ping = function () {
            return {
                status: "ok",
                timestamp: new Date().toISOString(),
                version: VERSION,
            };
        };
        DeveloperService_1.prototype.testWebhook = function (webhookId) {
            return __awaiter(this, void 0, void 0, function () {
                var webhook, sentAt, testEventId, payload, bodyStr, ts, signature, controller, timer, start, httpStatus, responseBody, success, res, text, _a, err_1, msg, latencyMs;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, this.webhookService.getWebhook(webhookId)];
                        case 1:
                            webhook = _b.sent();
                            if (!webhook)
                                throw new common_1.NotFoundException("Webhook not found");
                            sentAt = new Date().toISOString();
                            testEventId = "test_".concat(crypto.randomUUID());
                            payload = {
                                eventType: "payment.received",
                                eventId: testEventId,
                                recipientPublicKey: webhook.publicKey,
                                payload: { test: true, source: "developer_self_service_api" },
                                timestamp: sentAt,
                            };
                            bodyStr = JSON.stringify(payload);
                            ts = Date.now();
                            signature = this.signPayload(webhook.secret, bodyStr, ts);
                            controller = new AbortController();
                            timer = setTimeout(function () { return controller.abort(); }, TEST_WEBHOOK_TIMEOUT_MS);
                            start = Date.now();
                            httpStatus = null;
                            responseBody = null;
                            success = false;
                            _b.label = 2;
                        case 2:
                            _b.trys.push([2, 8, 9, 10]);
                            return [4 /*yield*/, fetch(webhook.webhookUrl, {
                                    method: "POST",
                                    headers: {
                                        "Content-Type": "application/json",
                                        "X-QX-Signature": signature,
                                        "X-QX-Event": "payment.received",
                                        "X-QX-Event-Id": testEventId,
                                        "X-QX-Test": "true",
                                        "User-Agent": " RustAcademy-Webhook/1.0",
                                    },
                                    body: bodyStr,
                                    signal: controller.signal,
                                })];
                        case 3:
                            res = _b.sent();
                            httpStatus = res.status;
                            success = res.ok;
                            _b.label = 4;
                        case 4:
                            _b.trys.push([4, 6, , 7]);
                            return [4 /*yield*/, res.text()];
                        case 5:
                            text = _b.sent();
                            responseBody =
                                text.length > MAX_RESPONSE_BODY_LENGTH
                                    ? text.slice(0, MAX_RESPONSE_BODY_LENGTH) + "..."
                                    : text;
                            return [3 /*break*/, 7];
                        case 6:
                            _a = _b.sent();
                            return [3 /*break*/, 7];
                        case 7: return [3 /*break*/, 10];
                        case 8:
                            err_1 = _b.sent();
                            msg = err_1 instanceof Error ? err_1.message : String(err_1);
                            this.logger.warn("Test webhook delivery failed for ".concat(webhookId, ": ").concat(msg));
                            responseBody = msg;
                            return [3 /*break*/, 10];
                        case 9:
                            clearTimeout(timer);
                            return [7 /*endfinally*/];
                        case 10:
                            latencyMs = Date.now() - start;
                            return [4 /*yield*/, this.auditService.log("developer_api", "webhook.test", webhookId, {
                                    target_url: webhook.webhookUrl,
                                    http_status: httpStatus,
                                    success: success,
                                    latency_ms: latencyMs,
                                })];
                        case 11:
                            _b.sent();
                            return [2 /*return*/, {
                                    success: success,
                                    webhook_id: webhookId,
                                    target_url: webhook.webhookUrl,
                                    http_status: httpStatus,
                                    response_body: responseBody,
                                    latency_ms: latencyMs,
                                    sent_at: sentAt,
                                }];
                    }
                });
            });
        };
        DeveloperService_1.prototype.bulkRevoke = function (dto) {
            return __awaiter(this, void 0, void 0, function () {
                var results, revoked, failed;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, Promise.allSettled(dto.ids.map(function (id) { return _this.apiKeysService.revoke(id).then(function () { return id; }); }))];
                        case 1:
                            results = _a.sent();
                            revoked = [];
                            failed = [];
                            results.forEach(function (result, idx) {
                                if (result.status === "fulfilled") {
                                    revoked.push(result.value);
                                }
                                else {
                                    failed.push({
                                        id: dto.ids[idx],
                                        reason: result.reason instanceof Error
                                            ? result.reason.message
                                            : String(result.reason),
                                    });
                                }
                            });
                            return [4 /*yield*/, this.auditService.log("developer_api", "keys.bulk_revoke", undefined, { requested: dto.ids, revoked: revoked, failed: failed.map(function (f) { return f.id; }) })];
                        case 2:
                            _a.sent();
                            return [2 /*return*/, {
                                    revoked: revoked,
                                    failed: failed,
                                    total: dto.ids.length,
                                    success_count: revoked.length,
                                    failure_count: failed.length,
                                }];
                    }
                });
            });
        };
        DeveloperService_1.prototype.emergencyRotate = function (id) {
            return __awaiter(this, void 0, void 0, function () {
                var result;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.apiKeysService.emergencyRotate(id)];
                        case 1:
                            result = _a.sent();
                            return [4 /*yield*/, this.auditService.log("developer_api", "keys.emergency_rotate", id, {
                                    new_prefix: result.key_prefix,
                                })];
                        case 2:
                            _a.sent();
                            return [2 /*return*/, result];
                    }
                });
            });
        };
        DeveloperService_1.prototype.getIntegrationHealth = function (ownerId) {
            return __awaiter(this, void 0, void 0, function () {
                var _a, usage, webhookStats, totalDeliveries, webhookFailureRate, webhookScore, quotaUtilization, quotaScore, score, grade;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, Promise.all([
                                this.apiKeysService.getUsage(ownerId),
                                this.webhookService.getStats(ownerId),
                            ])];
                        case 1:
                            _a = _b.sent(), usage = _a[0], webhookStats = _a[1];
                            totalDeliveries = webhookStats.totalSent + webhookStats.totalFailed;
                            webhookFailureRate = totalDeliveries > 0 ? webhookStats.totalFailed / totalDeliveries : 0;
                            webhookScore = Math.round(60 * (1 - webhookFailureRate));
                            quotaUtilization = usage.quota > 0 ? usage.total_requests / usage.quota : 0;
                            quotaScore = quotaUtilization <= 0.9
                                ? Math.round(40 * (1 - Math.max(0, quotaUtilization - 0.7) / 0.3))
                                : 0;
                            score = Math.min(100, Math.max(0, webhookScore + quotaScore));
                            grade = this.toGrade(score);
                            return [4 /*yield*/, this.auditService.log("developer_api", "health.score", ownerId, {
                                    score: score,
                                    grade: grade,
                                    webhook_failure_rate: webhookFailureRate,
                                    quota_utilization: quotaUtilization,
                                })];
                        case 2:
                            _b.sent();
                            return [2 /*return*/, {
                                    score: score,
                                    grade: grade,
                                    components: {
                                        webhook_failure_rate: webhookFailureRate,
                                        quota_utilization: quotaUtilization,
                                        webhook_score: webhookScore,
                                        quota_score: quotaScore,
                                    },
                                    computed_at: new Date().toISOString(),
                                }];
                    }
                });
            });
        };
        DeveloperService_1.prototype.toGrade = function (score) {
            if (score >= 90)
                return "A";
            if (score >= 75)
                return "B";
            if (score >= 60)
                return "C";
            if (score >= 45)
                return "D";
            return "F";
        };
        DeveloperService_1.prototype.signPayload = function (secret, body, timestamp) {
            var signed = "".concat(timestamp, ".").concat(body);
            var hmac = crypto
                .createHmac("sha256", secret)
                .update(signed)
                .digest("hex");
            return "t=".concat(timestamp, ",v1=").concat(hmac);
        };
        return DeveloperService_1;
    }());
    __setFunctionName(_classThis, "DeveloperService");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        DeveloperService = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return DeveloperService = _classThis;
}();
exports.DeveloperService = DeveloperService;
