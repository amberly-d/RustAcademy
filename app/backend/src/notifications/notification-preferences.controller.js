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
exports.NotificationPreferencesController = void 0;
var common_1 = require("@nestjs/common");
var swagger_1 = require("@nestjs/swagger");
var notification_preferences_dto_1 = require("./dto/notification-preferences.dto");
/**
 * REST API for managing per-wallet notification preferences.
 *
 * Routes are keyed by Stellar public key (the wallet address), which serves
 * as the user identity throughout the system.
 *
 * Note: In production you would add the ApiKeyGuard here. For now it is
 * intentionally left open so mobile clients can register preferences without
 * a separate auth flow. Add `@UseGuards(ApiKeyGuard)` when ready.
 */
var NotificationPreferencesController = function () {
    var _classDecorators = [(0, swagger_1.ApiTags)("Notifications"), (0, common_1.Controller)("notifications/preferences")];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _instanceExtraInitializers = [];
    var _listPreferences_decorators;
    var _upsertPreference_decorators;
    var _disableChannel_decorators;
    var NotificationPreferencesController = _classThis = /** @class */ (function () {
        function NotificationPreferencesController_1(prefsRepo) {
            this.prefsRepo = (__runInitializers(this, _instanceExtraInitializers), prefsRepo);
            this.logger = new common_1.Logger(NotificationPreferencesController.name);
        }
        /**
         * GET /notifications/preferences/:publicKey
         * List all notification preferences for a wallet.
         */
        NotificationPreferencesController_1.prototype.listPreferences = function (publicKey) {
            return __awaiter(this, void 0, void 0, function () {
                var all;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.prefsRepo.getEnabledPreferences(publicKey)];
                        case 1:
                            all = _a.sent();
                            return [2 /*return*/, all.map(this.toResponse)];
                    }
                });
            });
        };
        /**
         * PUT /notifications/preferences/:publicKey
         * Create or update a channel preference for a wallet.
         */
        NotificationPreferencesController_1.prototype.upsertPreference = function (publicKey, dto) {
            return __awaiter(this, void 0, void 0, function () {
                var pref;
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            this.logger.log("Upserting ".concat(dto.channel, " preference for ").concat(publicKey.slice(0, 8), "..."));
                            return [4 /*yield*/, this.prefsRepo.upsertPreference(publicKey, dto.channel, {
                                    email: dto.email,
                                    pushToken: dto.pushToken,
                                    webhookUrl: dto.webhookUrl,
                                    webhookSecret: dto.webhookSecret,
                                    events: (_a = dto.events) !== null && _a !== void 0 ? _a : null,
                                    minAmountStroops: dto.minAmountStroops !== undefined
                                        ? BigInt(dto.minAmountStroops)
                                        : undefined,
                                    enabled: dto.enabled,
                                })];
                        case 1:
                            pref = _b.sent();
                            return [2 /*return*/, this.toResponse(pref)];
                    }
                });
            });
        };
        /**
         * DELETE /notifications/preferences/:publicKey/:channel
         * Opt-out of a specific notification channel (soft disable).
         */
        NotificationPreferencesController_1.prototype.disableChannel = function (publicKey, channel) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this.logger.log("Disabling ".concat(channel, " for ").concat(publicKey.slice(0, 8), "..."));
                            return [4 /*yield*/, this.prefsRepo.disableChannel(publicKey, channel)];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        // ---------------------------------------------------------------------------
        NotificationPreferencesController_1.prototype.toResponse = function (pref) {
            var dto = new notification_preferences_dto_1.NotificationPreferenceResponseDto();
            dto.id = pref.id;
            dto.publicKey = pref.publicKey;
            dto.channel = pref.channel;
            dto.email = pref.email;
            dto.pushToken = pref.pushToken;
            dto.webhookUrl = pref.webhookUrl;
            dto.webhookSecret = pref.webhookSecret;
            dto.events = pref.events;
            dto.minAmountStroops = pref.minAmountStroops.toString();
            dto.enabled = pref.enabled;
            return dto;
        };
        return NotificationPreferencesController_1;
    }());
    __setFunctionName(_classThis, "NotificationPreferencesController");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _listPreferences_decorators = [(0, common_1.Get)(":publicKey"), (0, swagger_1.ApiOperation)({ summary: "List notification preferences for a wallet" }), (0, swagger_1.ApiParam)({ name: "publicKey", description: "Stellar public key (G...)" }), (0, swagger_1.ApiResponse)({ status: 200, type: [notification_preferences_dto_1.NotificationPreferenceResponseDto] })];
        _upsertPreference_decorators = [(0, common_1.Put)(":publicKey"), (0, common_1.HttpCode)(common_1.HttpStatus.OK), (0, swagger_1.ApiOperation)({
                summary: "Create or update a notification channel preference",
            }), (0, swagger_1.ApiParam)({ name: "publicKey", description: "Stellar public key (G...)" }), (0, swagger_1.ApiResponse)({ status: 200, type: notification_preferences_dto_1.NotificationPreferenceResponseDto })];
        _disableChannel_decorators = [(0, common_1.Delete)(":publicKey/:channel"), (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT), (0, swagger_1.ApiOperation)({ summary: "Opt-out of a notification channel (soft disable)" }), (0, swagger_1.ApiParam)({ name: "publicKey", description: "Stellar public key (G...)" }), (0, swagger_1.ApiParam)({ name: "channel", enum: ["email", "push", "webhook"] }), (0, swagger_1.ApiResponse)({ status: 204, description: "Channel disabled" })];
        __esDecorate(_classThis, null, _listPreferences_decorators, { kind: "method", name: "listPreferences", static: false, private: false, access: { has: function (obj) { return "listPreferences" in obj; }, get: function (obj) { return obj.listPreferences; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _upsertPreference_decorators, { kind: "method", name: "upsertPreference", static: false, private: false, access: { has: function (obj) { return "upsertPreference" in obj; }, get: function (obj) { return obj.upsertPreference; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _disableChannel_decorators, { kind: "method", name: "disableChannel", static: false, private: false, access: { has: function (obj) { return "disableChannel" in obj; }, get: function (obj) { return obj.disableChannel; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        NotificationPreferencesController = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return NotificationPreferencesController = _classThis;
}();
exports.NotificationPreferencesController = NotificationPreferencesController;
