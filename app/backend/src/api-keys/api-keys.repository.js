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
exports.ApiKeysRepository = void 0;
var common_1 = require("@nestjs/common");
var cursor_util_1 = require("../common/pagination/cursor.util");
var ApiKeysRepository = function () {
    var _classDecorators = [(0, common_1.Injectable)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var ApiKeysRepository = _classThis = /** @class */ (function () {
        function ApiKeysRepository_1(supabase) {
            this.supabase = supabase;
        }
        Object.defineProperty(ApiKeysRepository_1.prototype, "client", {
            get: function () {
                return this.supabase.getClient();
            },
            enumerable: false,
            configurable: true
        });
        ApiKeysRepository_1.prototype.insert = function (data) {
            return __awaiter(this, void 0, void 0, function () {
                var _a, row, error;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, this.client
                                .from('api_keys')
                                .insert(data)
                                .select()
                                .single()];
                        case 1:
                            _a = _b.sent(), row = _a.data, error = _a.error;
                            if (error)
                                throw error;
                            return [2 /*return*/, row];
                    }
                });
            });
        };
        ApiKeysRepository_1.prototype.findAll = function (owner_id, organization_id) {
            return __awaiter(this, void 0, void 0, function () {
                var query, _a, data, error;
                var _b;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            query = this.client
                                .from('api_keys')
                                .select('*')
                                .eq('is_active', true)
                                .order('created_at', { ascending: false });
                            if (owner_id) {
                                query = query.eq('owner_id', owner_id);
                            }
                            if (organization_id) {
                                query = query.eq('organization_id', organization_id);
                            }
                            return [4 /*yield*/, query];
                        case 1:
                            _a = _c.sent(), data = _a.data, error = _a.error;
                            if (error)
                                throw error;
                            return [2 /*return*/, (_b = data) !== null && _b !== void 0 ? _b : []];
                    }
                });
            });
        };
        /**
         * Cursor-paginated variant of findAll.
         * Returns { data, next_cursor, has_more, limit }.
         */
        ApiKeysRepository_1.prototype.findAllPaginated = function (owner_id, organization_id, cursor, limit) {
            return __awaiter(this, void 0, void 0, function () {
                var effectiveLimit, query, _a, data, error, rows, result;
                var _b;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            effectiveLimit = (0, cursor_util_1.clampLimit)(limit);
                            query = this.client
                                .from('api_keys')
                                .select('*')
                                .eq('is_active', true);
                            if (owner_id) {
                                query = query.eq('owner_id', owner_id);
                            }
                            if (organization_id) {
                                query = query.eq('organization_id', organization_id);
                            }
                            // Apply cursor filter
                            if (cursor) {
                                query = query
                                    .lt('created_at', cursor.pk)
                                    .or("created_at.eq.".concat(cursor.pk, ",id.lt.").concat(cursor.id));
                            }
                            query = query
                                .order('created_at', { ascending: false })
                                .order('id', { ascending: false })
                                .limit(effectiveLimit + 1);
                            return [4 /*yield*/, query];
                        case 1:
                            _a = _c.sent(), data = _a.data, error = _a.error;
                            if (error)
                                throw error;
                            rows = (_b = data) !== null && _b !== void 0 ? _b : [];
                            result = (0, cursor_util_1.paginateResult)(rows, effectiveLimit, 'created_at');
                            return [2 /*return*/, {
                                    data: result.data,
                                    next_cursor: result.next_cursor,
                                    has_more: result.has_more,
                                    limit: effectiveLimit,
                                }];
                    }
                });
            });
        };
        ApiKeysRepository_1.prototype.findById = function (id) {
            return __awaiter(this, void 0, void 0, function () {
                var _a, data, error;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, this.client
                                .from('api_keys')
                                .select('*')
                                .eq('id', id)
                                .eq('is_active', true)
                                .single()];
                        case 1:
                            _a = _b.sent(), data = _a.data, error = _a.error;
                            // PGRST116 = "no rows returned" — treat as not found, not an error
                            if ((error === null || error === void 0 ? void 0 : error.code) === 'PGRST116')
                                return [2 /*return*/, null];
                            if (error)
                                throw error;
                            return [2 /*return*/, data];
                    }
                });
            });
        };
        ApiKeysRepository_1.prototype.findByPrefix = function (prefix) {
            return __awaiter(this, void 0, void 0, function () {
                var _a, data, error;
                var _b;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0: return [4 /*yield*/, this.client
                                .from('api_keys')
                                .select('*')
                                .eq('key_prefix', prefix)
                                .eq('is_active', true)];
                        case 1:
                            _a = _c.sent(), data = _a.data, error = _a.error;
                            if (error)
                                throw error;
                            return [2 /*return*/, (_b = data) !== null && _b !== void 0 ? _b : []];
                    }
                });
            });
        };
        ApiKeysRepository_1.prototype.revoke = function (id) {
            return __awaiter(this, void 0, void 0, function () {
                var error;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.client
                                .from('api_keys')
                                .update({ is_active: false, updated_at: new Date().toISOString() })
                                .eq('id', id)];
                        case 1:
                            error = (_a.sent()).error;
                            if (error)
                                throw error;
                            return [2 /*return*/];
                    }
                });
            });
        };
        ApiKeysRepository_1.prototype.updateKey = function (id, data) {
            return __awaiter(this, void 0, void 0, function () {
                var current, _a, row, error;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, this.findById(id)];
                        case 1:
                            current = _b.sent();
                            if (!current)
                                throw new Error('API key not found');
                            return [4 /*yield*/, this.client
                                    .from('api_keys')
                                    .update({
                                    key_hash: data.key_hash,
                                    key_prefix: data.key_prefix,
                                    key_hash_old: current.key_hash,
                                    rotated_at: new Date().toISOString(),
                                    request_count: 0,
                                    last_used_at: null,
                                    updated_at: new Date().toISOString(),
                                })
                                    .eq('id', id)
                                    .select()
                                    .single()];
                        case 2:
                            _a = _b.sent(), row = _a.data, error = _a.error;
                            if (error)
                                throw error;
                            return [2 /*return*/, row];
                    }
                });
            });
        };
        ApiKeysRepository_1.prototype.emergencyUpdateKey = function (id, data) {
            return __awaiter(this, void 0, void 0, function () {
                var _a, row, error;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, this.client
                                .from('api_keys')
                                .update({
                                key_hash: data.key_hash,
                                key_prefix: data.key_prefix,
                                key_hash_old: null,
                                rotated_at: new Date().toISOString(),
                                request_count: 0,
                                last_used_at: null,
                                updated_at: new Date().toISOString(),
                            })
                                .eq('id', id)
                                .select()
                                .single()];
                        case 1:
                            _a = _b.sent(), row = _a.data, error = _a.error;
                            if (error)
                                throw error;
                            return [2 /*return*/, row];
                    }
                });
            });
        };
        ApiKeysRepository_1.prototype.incrementUsage = function (id) {
            return __awaiter(this, void 0, void 0, function () {
                var error;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.client.rpc('increment_api_key_usage', {
                                key_id: id,
                            })];
                        case 1:
                            error = (_a.sent()).error;
                            if (error)
                                throw error;
                            return [2 /*return*/];
                    }
                });
            });
        };
        ApiKeysRepository_1.prototype.getUsageSummary = function (owner_id, organization_id) {
            return __awaiter(this, void 0, void 0, function () {
                var query, _a, data, error, rows;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            query = this.client
                                .from('api_keys')
                                .select('request_count, monthly_quota')
                                .eq('is_active', true);
                            if (owner_id) {
                                query = query.eq('owner_id', owner_id);
                            }
                            if (organization_id) {
                                query = query.eq('organization_id', organization_id);
                            }
                            return [4 /*yield*/, query];
                        case 1:
                            _a = _b.sent(), data = _a.data, error = _a.error;
                            if (error)
                                throw error;
                            rows = (data !== null && data !== void 0 ? data : []);
                            return [2 /*return*/, {
                                    total_keys: rows.length,
                                    total_requests: rows.reduce(function (s, r) { return s + r.request_count; }, 0),
                                    quota: rows.reduce(function (s, r) { return s + r.monthly_quota; }, 0),
                                }];
                    }
                });
            });
        };
        return ApiKeysRepository_1;
    }());
    __setFunctionName(_classThis, "ApiKeysRepository");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        ApiKeysRepository = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return ApiKeysRepository = _classThis;
}();
exports.ApiKeysRepository = ApiKeysRepository;
