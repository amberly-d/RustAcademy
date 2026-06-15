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
exports.AuditService = void 0;
var common_1 = require("@nestjs/common");
var crypto_1 = require("crypto");
var AuditService = function () {
    var _classDecorators = [(0, common_1.Injectable)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var AuditService = _classThis = /** @class */ (function () {
        function AuditService_1(supabaseService) {
            this.supabaseService = supabaseService;
            this.logger = new common_1.Logger(AuditService.name);
            this.logs = [];
        }
        AuditService_1.prototype.log = function (actor, action, target, metadata, requestId) {
            return __awaiter(this, void 0, void 0, function () {
                var entry, client, error, error_1;
                var _a, _b, _c;
                return __generator(this, function (_d) {
                    switch (_d.label) {
                        case 0:
                            entry = {
                                id: (0, crypto_1.randomUUID)(),
                                actor: actor,
                                action: action,
                                target: target,
                                metadata: metadata,
                                requestId: requestId,
                                createdAt: new Date(),
                            };
                            this.logs.push(entry);
                            this.logger.log("Audit Event: ".concat(action, " by ").concat(actor));
                            _d.label = 1;
                        case 1:
                            _d.trys.push([1, 3, , 4]);
                            client = this.supabaseService.getClient();
                            return [4 /*yield*/, client.from('admin_audit_logs').insert({
                                    id: entry.id,
                                    actor: entry.actor,
                                    action: entry.action,
                                    target: (_a = entry.target) !== null && _a !== void 0 ? _a : null,
                                    metadata: (_b = entry.metadata) !== null && _b !== void 0 ? _b : {},
                                    request_id: (_c = entry.requestId) !== null && _c !== void 0 ? _c : null,
                                    created_at: entry.createdAt.toISOString(),
                                })];
                        case 2:
                            error = (_d.sent()).error;
                            if (error) {
                                this.logger.warn("Failed to persist audit log ".concat(entry.id, ": ").concat(error.message));
                            }
                            return [3 /*break*/, 4];
                        case 3:
                            error_1 = _d.sent();
                            this.logger.warn("Audit store unavailable, keeping in-memory copy only: ".concat(error_1.message));
                            return [3 /*break*/, 4];
                        case 4: return [2 /*return*/];
                    }
                });
            });
        };
        AuditService_1.prototype.query = function (dto) {
            return __awaiter(this, void 0, void 0, function () {
                var result, start_1, end_1, page, limit, startIndex, paginated;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.readLogs()];
                        case 1:
                            result = _a.sent();
                            if (dto.action) {
                                result = result.filter(function (log) { return log.action === dto.action; });
                            }
                            if (dto.actor) {
                                result = result.filter(function (log) { return log.actor === dto.actor; });
                            }
                            if (dto.startTime) {
                                start_1 = new Date(dto.startTime).getTime();
                                result = result.filter(function (log) { return log.createdAt.getTime() >= start_1; });
                            }
                            if (dto.endTime) {
                                end_1 = new Date(dto.endTime).getTime();
                                result = result.filter(function (log) { return log.createdAt.getTime() <= end_1; });
                            }
                            page = Number(dto.page) || 1;
                            limit = Number(dto.limit) || 50;
                            startIndex = (page - 1) * limit;
                            paginated = result.slice(startIndex, startIndex + limit);
                            return [2 /*return*/, {
                                    data: paginated,
                                    total: result.length,
                                    page: page,
                                    limit: limit,
                                }];
                    }
                });
            });
        };
        AuditService_1.prototype.exportCsv = function () {
            return __awaiter(this, void 0, void 0, function () {
                var logs, header, rows;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.readLogs()];
                        case 1:
                            logs = _a.sent();
                            if (logs.length === 0)
                                return [2 /*return*/, 'id,actor,action,target,requestId,createdAt\n'];
                            header = 'id,actor,action,target,requestId,createdAt\n';
                            rows = logs.map(function (log) {
                                return "".concat(log.id, ",").concat(log.actor, ",").concat(log.action, ",").concat(log.target || '', ",").concat(log.requestId || '', ",").concat(log.createdAt.toISOString());
                            }).join('\n');
                            return [2 /*return*/, header + rows];
                    }
                });
            });
        };
        AuditService_1.prototype.applyRetention = function () {
            return __awaiter(this, arguments, void 0, function (days) {
                var cutoff, initialCount, deletedCount, client, error_2;
                if (days === void 0) { days = 90; }
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            cutoff = new Date();
                            cutoff.setDate(cutoff.getDate() - days);
                            initialCount = this.logs.length;
                            this.logs = this.logs.filter(function (log) { return log.createdAt > cutoff; });
                            deletedCount = initialCount - this.logs.length;
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 3, , 4]);
                            client = this.supabaseService.getClient();
                            return [4 /*yield*/, client.from('admin_audit_logs').delete().lt('created_at', cutoff.toISOString())];
                        case 2:
                            _a.sent();
                            return [3 /*break*/, 4];
                        case 3:
                            error_2 = _a.sent();
                            this.logger.warn("Failed to apply audit retention in store: ".concat(error_2.message));
                            return [3 /*break*/, 4];
                        case 4:
                            this.logger.log("Applied retention policy: deleted ".concat(deletedCount, " logs older than ").concat(days, " days"));
                            return [2 /*return*/, { deletedCount: deletedCount }];
                    }
                });
            });
        };
        AuditService_1.prototype.readLogs = function () {
            return __awaiter(this, void 0, void 0, function () {
                var client, _a, data, error, error_3;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _b.trys.push([0, 2, , 3]);
                            client = this.supabaseService.getClient();
                            return [4 /*yield*/, client
                                    .from('admin_audit_logs')
                                    .select('*')
                                    .order('created_at', { ascending: false })];
                        case 1:
                            _a = _b.sent(), data = _a.data, error = _a.error;
                            if (error) {
                                throw error;
                            }
                            return [2 /*return*/, (data !== null && data !== void 0 ? data : []).map(function (row) { return ({
                                    id: String(row.id),
                                    actor: String(row.actor),
                                    action: String(row.action),
                                    target: row.target ? String(row.target) : undefined,
                                    metadata: row.metadata && typeof row.metadata === 'object'
                                        ? row.metadata
                                        : undefined,
                                    requestId: row.request_id ? String(row.request_id) : undefined,
                                    createdAt: new Date(String(row.created_at)),
                                }); })];
                        case 2:
                            error_3 = _b.sent();
                            this.logger.warn("Reading audit logs from memory fallback: ".concat(error_3.message));
                            return [2 /*return*/, __spreadArray([], this.logs, true).sort(function (left, right) { return right.createdAt.getTime() - left.createdAt.getTime(); })];
                        case 3: return [2 /*return*/];
                    }
                });
            });
        };
        return AuditService_1;
    }());
    __setFunctionName(_classThis, "AuditService");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        AuditService = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return AuditService = _classThis;
}();
exports.AuditService = AuditService;
