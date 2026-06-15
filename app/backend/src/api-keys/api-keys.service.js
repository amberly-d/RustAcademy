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
exports.ApiKeysService = void 0;
var common_1 = require("@nestjs/common");
var crypto = require("crypto");
var bcrypt = require("bcrypt");
var cursor_util_1 = require("../common/pagination/cursor.util");
var BCRYPT_ROUNDS = 10;
var DEFAULT_QUOTA = 10000;
var KEY_PREFIX_LENGTH = 8; // chars used for prefix display / lookup
var ApiKeysService = function () {
    var _classDecorators = [(0, common_1.Injectable)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var ApiKeysService = _classThis = /** @class */ (function () {
        function ApiKeysService_1(repo) {
            this.repo = repo;
            this.logger = new common_1.Logger(ApiKeysService.name);
        }
        // ---------------------------------------------------------------------------
        // Public API
        // ---------------------------------------------------------------------------
        ApiKeysService_1.prototype.create = function (dto) {
            return __awaiter(this, void 0, void 0, function () {
                var rawKey, prefix, hash, record;
                var _a, _b;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            rawKey = this.generateRawKey();
                            prefix = rawKey.slice(0, KEY_PREFIX_LENGTH + 3);
                            return [4 /*yield*/, bcrypt.hash(rawKey, BCRYPT_ROUNDS)];
                        case 1:
                            hash = _c.sent();
                            return [4 /*yield*/, this.repo.insert({
                                    name: dto.name,
                                    key_hash: hash,
                                    key_prefix: prefix,
                                    scopes: dto.scopes,
                                    owner_id: (_a = dto.owner_id) !== null && _a !== void 0 ? _a : null,
                                    organization_id: (_b = dto.organization_id) !== null && _b !== void 0 ? _b : null,
                                    monthly_quota: DEFAULT_QUOTA,
                                })];
                        case 2:
                            record = _c.sent();
                            this.logger.log("API key created: id=".concat(record.id, " name=\"").concat(record.name, "\""));
                            return [2 /*return*/, __assign(__assign({}, this.toPublic(record)), { key: rawKey })];
                    }
                });
            });
        };
        ApiKeysService_1.prototype.list = function (owner_id, organization_id) {
            return __awaiter(this, void 0, void 0, function () {
                var records;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.repo.findAll(owner_id, organization_id)];
                        case 1:
                            records = _a.sent();
                            return [2 /*return*/, records.map(function (r) { return _this.toPublic(r); })];
                    }
                });
            });
        };
        ApiKeysService_1.prototype.listPaginated = function (owner_id, organization_id, cursor, limit) {
            return __awaiter(this, void 0, void 0, function () {
                var decodedCursor, effectiveLimit, result;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            decodedCursor = cursor ? (0, cursor_util_1.decodeCursor)(cursor) : null;
                            effectiveLimit = (0, cursor_util_1.clampLimit)(limit);
                            return [4 /*yield*/, this.repo.findAllPaginated(owner_id, organization_id, decodedCursor, effectiveLimit)];
                        case 1:
                            result = _a.sent();
                            return [2 /*return*/, {
                                    data: result.data.map(function (r) { return _this.toPublic(r); }),
                                    pagination: {
                                        next_cursor: result.next_cursor,
                                        has_more: result.has_more,
                                        limit: result.limit,
                                    },
                                }];
                    }
                });
            });
        };
        ApiKeysService_1.prototype.revoke = function (id) {
            return __awaiter(this, void 0, void 0, function () {
                var record;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.repo.findById(id)];
                        case 1:
                            record = _a.sent();
                            if (!record)
                                throw new common_1.NotFoundException('API key not found');
                            return [4 /*yield*/, this.repo.revoke(id)];
                        case 2:
                            _a.sent();
                            this.logger.log("API key revoked: id=".concat(id));
                            return [2 /*return*/];
                    }
                });
            });
        };
        ApiKeysService_1.prototype.rotate = function (id) {
            return __awaiter(this, void 0, void 0, function () {
                var record, rawKey, prefix, hash, updated;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.repo.findById(id)];
                        case 1:
                            record = _a.sent();
                            if (!record)
                                throw new common_1.NotFoundException('API key not found');
                            rawKey = this.generateRawKey();
                            prefix = rawKey.slice(0, KEY_PREFIX_LENGTH + 3);
                            return [4 /*yield*/, bcrypt.hash(rawKey, BCRYPT_ROUNDS)];
                        case 2:
                            hash = _a.sent();
                            return [4 /*yield*/, this.repo.updateKey(id, {
                                    key_hash: hash,
                                    key_prefix: prefix,
                                })];
                        case 3:
                            updated = _a.sent();
                            this.logger.log("API key rotated: id=".concat(id));
                            return [2 /*return*/, __assign(__assign({}, this.toPublic(updated)), { key: rawKey })];
                    }
                });
            });
        };
        ApiKeysService_1.prototype.emergencyRotate = function (id) {
            return __awaiter(this, void 0, void 0, function () {
                var record, rawKey, prefix, hash, updated;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.repo.findById(id)];
                        case 1:
                            record = _a.sent();
                            if (!record)
                                throw new common_1.NotFoundException('API key not found');
                            rawKey = this.generateRawKey();
                            prefix = rawKey.slice(0, KEY_PREFIX_LENGTH + 3);
                            return [4 /*yield*/, bcrypt.hash(rawKey, BCRYPT_ROUNDS)];
                        case 2:
                            hash = _a.sent();
                            return [4 /*yield*/, this.repo.emergencyUpdateKey(id, {
                                    key_hash: hash,
                                    key_prefix: prefix,
                                })];
                        case 3:
                            updated = _a.sent();
                            this.logger.log("API key emergency-rotated: id=".concat(id));
                            return [2 /*return*/, __assign(__assign({}, this.toPublic(updated)), { key: rawKey })];
                    }
                });
            });
        };
        ApiKeysService_1.prototype.getUsage = function (owner_id, organization_id) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.repo.getUsageSummary(owner_id, organization_id)];
                });
            });
        };
        // ---------------------------------------------------------------------------
        // Guard-facing: validate an incoming raw key and return its record
        // ---------------------------------------------------------------------------
        ApiKeysService_1.prototype.validateKey = function (rawKey) {
            return __awaiter(this, void 0, void 0, function () {
                var prefix, candidates, _loop_1, this_1, _i, candidates_1, record, state_1;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            prefix = rawKey.slice(0, KEY_PREFIX_LENGTH + 3);
                            return [4 /*yield*/, this.repo.findByPrefix(prefix)];
                        case 1:
                            candidates = _a.sent();
                            _loop_1 = function (record) {
                                var isCurrentMatch, isOldMatch, rotatedAt, now, overlapMs;
                                return __generator(this, function (_b) {
                                    switch (_b.label) {
                                        case 0: return [4 /*yield*/, bcrypt.compare(rawKey, record.key_hash)];
                                        case 1:
                                            isCurrentMatch = _b.sent();
                                            isOldMatch = false;
                                            if (!(!isCurrentMatch && record.key_hash_old && record.rotated_at)) return [3 /*break*/, 3];
                                            rotatedAt = new Date(record.rotated_at).getTime();
                                            now = Date.now();
                                            overlapMs = 24 * 60 * 60 * 1000;
                                            if (!(now - rotatedAt < overlapMs)) return [3 /*break*/, 3];
                                            return [4 /*yield*/, bcrypt.compare(rawKey, record.key_hash_old)];
                                        case 2:
                                            isOldMatch = _b.sent();
                                            _b.label = 3;
                                        case 3:
                                            if (isCurrentMatch || isOldMatch) {
                                                // Fire-and-forget usage increment — don't block the request
                                                this_1.repo
                                                    .incrementUsage(record.id)
                                                    .catch(function (err) {
                                                    return _this.logger.warn("Failed to increment usage for ".concat(record.id, ": ").concat(err));
                                                });
                                                return [2 /*return*/, { value: {
                                                            record: record,
                                                            hasScope: function (scope) { return record.scopes.includes(scope); },
                                                        } }];
                                            }
                                            return [2 /*return*/];
                                    }
                                });
                            };
                            this_1 = this;
                            _i = 0, candidates_1 = candidates;
                            _a.label = 2;
                        case 2:
                            if (!(_i < candidates_1.length)) return [3 /*break*/, 5];
                            record = candidates_1[_i];
                            return [5 /*yield**/, _loop_1(record)];
                        case 3:
                            state_1 = _a.sent();
                            if (typeof state_1 === "object")
                                return [2 /*return*/, state_1.value];
                            _a.label = 4;
                        case 4:
                            _i++;
                            return [3 /*break*/, 2];
                        case 5: return [2 /*return*/, null];
                    }
                });
            });
        };
        // ---------------------------------------------------------------------------
        // Quota check
        // ---------------------------------------------------------------------------
        ApiKeysService_1.prototype.isOverQuota = function (record) {
            var now = new Date();
            var lastReset = new Date(record.last_reset_at);
            // If we've moved into a new month, the quota hasn't been reset in the DB yet
            // (it happens on the next increment), but for the guard's sake, it's NOT over quota.
            if (now.getUTCFullYear() > lastReset.getUTCFullYear() ||
                now.getUTCMonth() > lastReset.getUTCMonth()) {
                return false;
            }
            return record.request_count >= record.monthly_quota;
        };
        // ---------------------------------------------------------------------------
        // Helpers
        // ---------------------------------------------------------------------------
        ApiKeysService_1.prototype.generateRawKey = function () {
            var bytes = crypto.randomBytes(24).toString('hex');
            return "qx_live_".concat(bytes);
        };
        ApiKeysService_1.prototype.toPublic = function (record) {
            return {
                id: record.id,
                name: record.name,
                key_prefix: record.key_prefix,
                scopes: record.scopes,
                is_active: record.is_active,
                request_count: record.request_count,
                monthly_quota: record.monthly_quota,
                last_used_at: record.last_used_at,
                created_at: record.created_at,
            };
        };
        return ApiKeysService_1;
    }());
    __setFunctionName(_classThis, "ApiKeysService");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        ApiKeysService = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return ApiKeysService = _classThis;
}();
exports.ApiKeysService = ApiKeysService;
