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
exports.WebhookService = void 0;
var common_1 = require("@nestjs/common");
var crypto = require("crypto");
var WebhookService = function () {
    var _classDecorators = [(0, common_1.Injectable)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var WebhookService = _classThis = /** @class */ (function () {
        function WebhookService_1(prefsRepo, logRepo, retryScheduler) {
            this.prefsRepo = prefsRepo;
            this.logRepo = logRepo;
            this.retryScheduler = retryScheduler;
            this.logger = new common_1.Logger(WebhookService.name);
        }
        WebhookService_1.prototype.createWebhook = function (publicKey, dto) {
            return __awaiter(this, void 0, void 0, function () {
                var secret, preference;
                var _a, _b;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            secret = (_a = dto.secret) !== null && _a !== void 0 ? _a : this.generateSecret();
                            return [4 /*yield*/, this.prefsRepo.upsertPreference(publicKey, "webhook", {
                                    webhookUrl: dto.webhookUrl,
                                    webhookSecret: secret,
                                    events: (_b = dto.events) !== null && _b !== void 0 ? _b : null,
                                    minAmountStroops: dto.minAmountStroops
                                        ? BigInt(dto.minAmountStroops)
                                        : 0n,
                                    enabled: true,
                                })];
                        case 1:
                            preference = _c.sent();
                            return [2 /*return*/, this.toResponse(preference)];
                    }
                });
            });
        };
        WebhookService_1.prototype.listWebhooks = function (publicKey, cursor, limit) {
            return __awaiter(this, void 0, void 0, function () {
                var preferences;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.prefsRepo.getWebhooksByPublicKeyPaginated(publicKey, cursor, limit)];
                        case 1:
                            preferences = _a.sent();
                            return [2 /*return*/, {
                                    data: preferences.data.map(function (p) { return _this.toResponse(p); }),
                                    next_cursor: preferences.next_cursor,
                                    has_more: preferences.has_more,
                                }];
                    }
                });
            });
        };
        WebhookService_1.prototype.getWebhook = function (id) {
            return __awaiter(this, void 0, void 0, function () {
                var preference;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.prefsRepo.getWebhookById(id)];
                        case 1:
                            preference = _a.sent();
                            if (!preference)
                                return [2 /*return*/, null];
                            return [2 /*return*/, this.toResponse(preference)];
                    }
                });
            });
        };
        WebhookService_1.prototype.updateWebhook = function (id, publicKey, dto) {
            return __awaiter(this, void 0, void 0, function () {
                var existing, updated;
                var _a, _b, _c;
                return __generator(this, function (_d) {
                    switch (_d.label) {
                        case 0: return [4 /*yield*/, this.prefsRepo.getWebhookById(id)];
                        case 1:
                            existing = _d.sent();
                            if (!existing || existing.publicKey !== publicKey) {
                                return [2 /*return*/, null];
                            }
                            return [4 /*yield*/, this.prefsRepo.upsertPreference(publicKey, "webhook", {
                                    webhookUrl: (_a = dto.webhookUrl) !== null && _a !== void 0 ? _a : existing.webhookUrl,
                                    webhookSecret: existing.webhookSecret,
                                    events: (_b = dto.events) !== null && _b !== void 0 ? _b : existing.events,
                                    minAmountStroops: dto.minAmountStroops !== undefined
                                        ? BigInt(dto.minAmountStroops)
                                        : existing.minAmountStroops,
                                    enabled: (_c = dto.enabled) !== null && _c !== void 0 ? _c : existing.enabled,
                                })];
                        case 2:
                            updated = _d.sent();
                            return [2 /*return*/, this.toResponse(updated)];
                    }
                });
            });
        };
        WebhookService_1.prototype.deleteWebhook = function (id, publicKey) {
            return __awaiter(this, void 0, void 0, function () {
                var existing;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.prefsRepo.getWebhookById(id)];
                        case 1:
                            existing = _a.sent();
                            if (!existing || existing.publicKey !== publicKey) {
                                return [2 /*return*/, false];
                            }
                            return [4 /*yield*/, this.prefsRepo.deleteWebhook(id)];
                        case 2:
                            _a.sent();
                            return [2 /*return*/, true];
                    }
                });
            });
        };
        WebhookService_1.prototype.regenerateSecret = function (id, publicKey) {
            return __awaiter(this, void 0, void 0, function () {
                var existing, newSecret;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.prefsRepo.getWebhookById(id)];
                        case 1:
                            existing = _a.sent();
                            if (!existing || existing.publicKey !== publicKey) {
                                return [2 /*return*/, null];
                            }
                            newSecret = this.generateSecret();
                            return [4 /*yield*/, this.prefsRepo.regenerateWebhookSecret(id, newSecret)];
                        case 2:
                            _a.sent();
                            return [2 /*return*/, { secret: newSecret }];
                    }
                });
            });
        };
        WebhookService_1.prototype.getDeliveryLogs = function (publicKey, limit, cursor) {
            return __awaiter(this, void 0, void 0, function () {
                var result;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.logRepo.getWebhookDeliveryLogsPaginated(publicKey, limit, cursor)];
                        case 1:
                            result = _a.sent();
                            return [2 /*return*/, {
                                    data: result.data.map(function (log) { return ({
                                        id: log.id,
                                        eventType: log.eventType,
                                        eventId: log.eventId,
                                        status: log.status,
                                        attempts: log.attempts,
                                        lastError: log.lastError,
                                        httpStatus: log.httpStatus,
                                        responseBody: log.responseBody,
                                        createdAt: log.createdAt,
                                        deliveredAt: log.deliveredAt,
                                    }); }),
                                    next_cursor: result.next_cursor,
                                    has_more: result.has_more,
                                }];
                    }
                });
            });
        };
        WebhookService_1.prototype.getStats = function (publicKey) {
            return __awaiter(this, void 0, void 0, function () {
                var stats;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.logRepo.getWebhookStats(publicKey)];
                        case 1:
                            stats = _a.sent();
                            return [2 /*return*/, {
                                    totalSent: stats.totalSent,
                                    totalFailed: stats.totalFailed,
                                    pendingRetries: stats.pendingRetries,
                                    lastDeliveryAt: stats.lastDeliveryAt,
                                    lastError: stats.lastError,
                                }];
                    }
                });
            });
        };
        /**
         * Trigger immediate redelivery of a specific event via the retry scheduler.
         * Returns true if at least one webhook delivery succeeded.
         */
        WebhookService_1.prototype.redeliverEvent = function (publicKey, eventId, eventType) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.retryScheduler.redeliver(publicKey, eventId, eventType)];
                });
            });
        };
        WebhookService_1.prototype.generateSecret = function () {
            var bytes = crypto.randomBytes(32);
            return "whsec_".concat(bytes.toString("hex"));
        };
        WebhookService_1.prototype.toResponse = function (preference) {
            var _a, _b;
            return {
                id: preference.id,
                publicKey: preference.publicKey,
                webhookUrl: (_a = preference.webhookUrl) !== null && _a !== void 0 ? _a : "",
                secret: (_b = preference.webhookSecret) !== null && _b !== void 0 ? _b : "",
                events: preference.events,
                minAmountStroops: preference.minAmountStroops.toString(),
                enabled: preference.enabled,
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString(),
            };
        };
        return WebhookService_1;
    }());
    __setFunctionName(_classThis, "WebhookService");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        WebhookService = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return WebhookService = _classThis;
}();
exports.WebhookService = WebhookService;
