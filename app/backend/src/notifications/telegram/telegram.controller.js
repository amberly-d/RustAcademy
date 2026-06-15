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
exports.TelegramController = void 0;
var common_1 = require("@nestjs/common");
var swagger_1 = require("@nestjs/swagger");
/**
 * DTO for verifying Telegram account linkage
 */
var VerifyTelegramLinkDto = /** @class */ (function () {
    function VerifyTelegramLinkDto() {
    }
    return VerifyTelegramLinkDto;
}());
/**
 * DTO for updating Telegram notification settings
 */
var UpdateTelegramSettingsDto = /** @class */ (function () {
    function UpdateTelegramSettingsDto() {
    }
    return UpdateTelegramSettingsDto;
}());
/**
 * Response DTO for Telegram link status
 */
var TelegramLinkStatusResponse = /** @class */ (function () {
    function TelegramLinkStatusResponse() {
    }
    return TelegramLinkStatusResponse;
}());
/**
 * REST API for managing Telegram account linkage and notifications.
 *
 * Users can:
 * - Link their Telegram account to a  RustAcademy public key
 * - Verify the linkage with a code
 * - Update notification settings
 * - Unlink their account
 */
var TelegramController = function () {
    var _classDecorators = [(0, swagger_1.ApiTags)("Telegram"), (0, common_1.Controller)("telegram")];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _instanceExtraInitializers = [];
    var _getStatus_decorators;
    var _verifyLink_decorators;
    var _updateSettings_decorators;
    var _unlinkAccount_decorators;
    var TelegramController = _classThis = /** @class */ (function () {
        function TelegramController_1(telegramRepo, telegramBot) {
            this.telegramRepo = (__runInitializers(this, _instanceExtraInitializers), telegramRepo);
            this.telegramBot = telegramBot;
            this.logger = new common_1.Logger(TelegramController.name);
        }
        /**
         * GET /telegram/status/:telegramId
         * Check if a Telegram account is linked to  RustAcademy
         */
        TelegramController_1.prototype.getStatus = function (telegramId) {
            return __awaiter(this, void 0, void 0, function () {
                var tid, mapping;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            tid = Number(telegramId);
                            if (isNaN(tid)) {
                                throw new common_1.BadRequestException("Invalid Telegram ID");
                            }
                            return [4 /*yield*/, this.telegramRepo.findByTelegramId(tid)];
                        case 1:
                            mapping = _a.sent();
                            if (!mapping) {
                                return [2 /*return*/, {
                                        isLinked: false,
                                        isVerified: false,
                                    }];
                            }
                            return [2 /*return*/, {
                                    isLinked: true,
                                    isVerified: mapping.isVerified,
                                    publicKey: mapping.publicKey,
                                    enabled: mapping.enabled,
                                    minAmountXlm: Number(mapping.minAmountStroops) / 10000000,
                                    createdAt: mapping.createdAt,
                                }];
                    }
                });
            });
        };
        /**
         * POST /telegram/verify/:telegramId
         * Verify a Telegram account linkage with the verification code
         */
        TelegramController_1.prototype.verifyLink = function (telegramId, dto) {
            return __awaiter(this, void 0, void 0, function () {
                var tid, mapping, isValid;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            tid = Number(telegramId);
                            if (isNaN(tid)) {
                                throw new common_1.BadRequestException("Invalid Telegram ID");
                            }
                            return [4 /*yield*/, this.telegramRepo.findByTelegramId(tid)];
                        case 1:
                            mapping = _a.sent();
                            if (!mapping) {
                                throw new common_1.NotFoundException("No pending linkage found");
                            }
                            if (mapping.isVerified) {
                                return [2 /*return*/, { success: true }];
                            }
                            return [4 /*yield*/, this.telegramBot.verifyUser(tid, dto.verificationCode)];
                        case 2:
                            isValid = _a.sent();
                            if (!isValid) {
                                throw new common_1.BadRequestException("Invalid verification code");
                            }
                            this.logger.log("Telegram account ".concat(tid, " verified successfully"));
                            return [2 /*return*/, { success: true }];
                    }
                });
            });
        };
        /**
         * PUT /telegram/settings/:telegramId
         * Update Telegram notification settings
         */
        TelegramController_1.prototype.updateSettings = function (telegramId, dto) {
            return __awaiter(this, void 0, void 0, function () {
                var tid, mapping, stroops;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            tid = Number(telegramId);
                            if (isNaN(tid)) {
                                throw new common_1.BadRequestException("Invalid Telegram ID");
                            }
                            return [4 /*yield*/, this.telegramRepo.findByTelegramId(tid)];
                        case 1:
                            mapping = _a.sent();
                            if (!mapping) {
                                throw new common_1.NotFoundException("Telegram account not linked");
                            }
                            if (!mapping.isVerified) {
                                throw new common_1.BadRequestException("Telegram account not verified");
                            }
                            if (!(dto.enabled !== undefined)) return [3 /*break*/, 3];
                            return [4 /*yield*/, this.telegramRepo.setEnabled(tid, dto.enabled)];
                        case 2:
                            _a.sent();
                            _a.label = 3;
                        case 3:
                            if (!(dto.minAmountStroops !== undefined)) return [3 /*break*/, 5];
                            stroops = BigInt(dto.minAmountStroops);
                            if (stroops < 0n) {
                                throw new common_1.BadRequestException("Minimum amount cannot be negative");
                            }
                            return [4 /*yield*/, this.telegramRepo.setMinAmount(tid, stroops)];
                        case 4:
                            _a.sent();
                            _a.label = 5;
                        case 5:
                            this.logger.log("Telegram settings updated for ".concat(tid));
                            return [2 /*return*/, { success: true }];
                    }
                });
            });
        };
        /**
         * DELETE /telegram/link/:telegramId
         * Unlink a Telegram account from  RustAcademy
         */
        TelegramController_1.prototype.unlinkAccount = function (telegramId) {
            return __awaiter(this, void 0, void 0, function () {
                var tid, mapping;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            tid = Number(telegramId);
                            if (isNaN(tid)) {
                                throw new common_1.BadRequestException("Invalid Telegram ID");
                            }
                            return [4 /*yield*/, this.telegramRepo.findByTelegramId(tid)];
                        case 1:
                            mapping = _a.sent();
                            if (!mapping) {
                                throw new common_1.NotFoundException("Telegram account not linked");
                            }
                            return [4 /*yield*/, this.telegramRepo.deleteMapping(tid)];
                        case 2:
                            _a.sent();
                            this.logger.log("Telegram account ".concat(tid, " unlinked successfully"));
                            return [2 /*return*/];
                    }
                });
            });
        };
        return TelegramController_1;
    }());
    __setFunctionName(_classThis, "TelegramController");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _getStatus_decorators = [(0, common_1.Get)("status/:telegramId"), (0, swagger_1.ApiOperation)({ summary: "Check Telegram account linkage status" }), (0, swagger_1.ApiParam)({ name: "telegramId", description: "Telegram user ID" }), (0, swagger_1.ApiResponse)({
                status: 200,
                type: TelegramLinkStatusResponse,
                description: "Linkage status retrieved successfully",
            })];
        _verifyLink_decorators = [(0, common_1.Post)("verify/:telegramId"), (0, common_1.HttpCode)(common_1.HttpStatus.OK), (0, swagger_1.ApiOperation)({ summary: "Verify Telegram account linkage" }), (0, swagger_1.ApiParam)({ name: "telegramId", description: "Telegram user ID" }), (0, swagger_1.ApiResponse)({ status: 200, description: "Verification successful" }), (0, swagger_1.ApiResponse)({ status: 400, description: "Invalid verification code" })];
        _updateSettings_decorators = [(0, common_1.Put)("settings/:telegramId"), (0, common_1.HttpCode)(common_1.HttpStatus.OK), (0, swagger_1.ApiOperation)({ summary: "Update Telegram notification settings" }), (0, swagger_1.ApiParam)({ name: "telegramId", description: "Telegram user ID" }), (0, swagger_1.ApiResponse)({ status: 200, description: "Settings updated successfully" })];
        _unlinkAccount_decorators = [(0, common_1.Delete)("link/:telegramId"), (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT), (0, swagger_1.ApiOperation)({ summary: "Unlink Telegram account" }), (0, swagger_1.ApiParam)({ name: "telegramId", description: "Telegram user ID" }), (0, swagger_1.ApiResponse)({ status: 204, description: "Account unlinked successfully" })];
        __esDecorate(_classThis, null, _getStatus_decorators, { kind: "method", name: "getStatus", static: false, private: false, access: { has: function (obj) { return "getStatus" in obj; }, get: function (obj) { return obj.getStatus; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _verifyLink_decorators, { kind: "method", name: "verifyLink", static: false, private: false, access: { has: function (obj) { return "verifyLink" in obj; }, get: function (obj) { return obj.verifyLink; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _updateSettings_decorators, { kind: "method", name: "updateSettings", static: false, private: false, access: { has: function (obj) { return "updateSettings" in obj; }, get: function (obj) { return obj.updateSettings; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _unlinkAccount_decorators, { kind: "method", name: "unlinkAccount", static: false, private: false, access: { has: function (obj) { return "unlinkAccount" in obj; }, get: function (obj) { return obj.unlinkAccount; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        TelegramController = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return TelegramController = _classThis;
}();
exports.TelegramController = TelegramController;
