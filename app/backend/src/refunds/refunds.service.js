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
exports.RefundsService = void 0;
var common_1 = require("@nestjs/common");
var refunds_eligibility_1 = require("./refunds.eligibility");
var RefundsService = function () {
    var _classDecorators = [(0, common_1.Injectable)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var RefundsService = _classThis = /** @class */ (function () {
        function RefundsService_1(supabaseService) {
            this.supabaseService = supabaseService;
            this.logger = new common_1.Logger(RefundsService.name);
        }
        RefundsService_1.prototype.initiateRefund = function (dto, actorId) {
            return __awaiter(this, void 0, void 0, function () {
                var client, existing, _a, data, error, race, record;
                var _b;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            client = this.supabaseService.getClient();
                            return [4 /*yield*/, this.getRefundByIdempotencyKey(dto.idempotencyKey)];
                        case 1:
                            existing = _c.sent();
                            if (existing) {
                                this.logger.log("Idempotent refund hit for key=".concat(dto.idempotencyKey, " id=").concat(existing.id));
                                return [2 /*return*/, existing];
                            }
                            // --- Eligibility check ---
                            return [4 /*yield*/, this.assertEligible(dto.entityType, dto.entityId)];
                        case 2:
                            // --- Eligibility check ---
                            _c.sent();
                            return [4 /*yield*/, client
                                    .from('refund_attempts')
                                    .insert({
                                    idempotency_key: dto.idempotencyKey,
                                    entity_type: dto.entityType,
                                    entity_id: dto.entityId,
                                    reason_code: dto.reasonCode,
                                    notes: (_b = dto.notes) !== null && _b !== void 0 ? _b : null,
                                    status: 'pending',
                                    actor_id: actorId,
                                })
                                    .select()
                                    .single()];
                        case 3:
                            _a = _c.sent(), data = _a.data, error = _a.error;
                            if (!error) return [3 /*break*/, 6];
                            if (!(error.code === '23505')) return [3 /*break*/, 5];
                            return [4 /*yield*/, this.getRefundByIdempotencyKey(dto.idempotencyKey)];
                        case 4:
                            race = _c.sent();
                            if (race)
                                return [2 /*return*/, race];
                            _c.label = 5;
                        case 5: throw error;
                        case 6:
                            record = data;
                            // --- Audit log ---
                            return [4 /*yield*/, this.appendAudit(record.id, actorId, 'initiated', dto.reasonCode, dto.notes)];
                        case 7:
                            // --- Audit log ---
                            _c.sent();
                            this.logger.log("Refund initiated id=".concat(record.id, " entity=").concat(dto.entityType, ":").concat(dto.entityId));
                            return [2 /*return*/, record];
                    }
                });
            });
        };
        RefundsService_1.prototype.approveRefund = function (id, actorId) {
            return __awaiter(this, void 0, void 0, function () {
                var record, client, _a, data, error;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, this.getRefundById(id)];
                        case 1:
                            record = _b.sent();
                            if (record.status !== 'pending') {
                                throw new common_1.ConflictException({
                                    error: 'REFUND_NOT_PENDING',
                                    message: "Refund ".concat(id, " is already ").concat(record.status),
                                });
                            }
                            client = this.supabaseService.getClient();
                            return [4 /*yield*/, client
                                    .from('refund_attempts')
                                    .update({ status: 'approved', updated_at: new Date().toISOString() })
                                    .eq('id', id)
                                    .select()
                                    .single()];
                        case 2:
                            _a = _b.sent(), data = _a.data, error = _a.error;
                            if (error)
                                throw error;
                            return [4 /*yield*/, this.appendAudit(id, actorId, 'approved', null, null)];
                        case 3:
                            _b.sent();
                            this.logger.log("Refund approved id=".concat(id));
                            return [2 /*return*/, data];
                    }
                });
            });
        };
        RefundsService_1.prototype.rejectRefund = function (id, actorId, notes) {
            return __awaiter(this, void 0, void 0, function () {
                var record, client, _a, data, error;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, this.getRefundById(id)];
                        case 1:
                            record = _b.sent();
                            if (record.status !== 'pending') {
                                throw new common_1.ConflictException({
                                    error: 'REFUND_NOT_PENDING',
                                    message: "Refund ".concat(id, " is already ").concat(record.status),
                                });
                            }
                            client = this.supabaseService.getClient();
                            return [4 /*yield*/, client
                                    .from('refund_attempts')
                                    .update({ status: 'rejected', updated_at: new Date().toISOString() })
                                    .eq('id', id)
                                    .select()
                                    .single()];
                        case 2:
                            _a = _b.sent(), data = _a.data, error = _a.error;
                            if (error)
                                throw error;
                            return [4 /*yield*/, this.appendAudit(id, actorId, 'rejected', null, notes !== null && notes !== void 0 ? notes : null)];
                        case 3:
                            _b.sent();
                            this.logger.log("Refund rejected id=".concat(id));
                            return [2 /*return*/, data];
                    }
                });
            });
        };
        RefundsService_1.prototype.listRefunds = function (cursor_1) {
            return __awaiter(this, arguments, void 0, function (cursor, limit) {
                var client, effectiveLimit, query, json, parsed, _a, data, error, rows, hasMore, resultData, nextCursor, last;
                if (limit === void 0) { limit = 20; }
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            client = this.supabaseService.getClient();
                            effectiveLimit = Math.min(100, Math.max(1, limit));
                            query = client
                                .from('refund_attempts')
                                .select('*')
                                .order('created_at', { ascending: false })
                                .order('id', { ascending: false });
                            // Decode cursor
                            if (cursor) {
                                try {
                                    json = Buffer.from(cursor, 'base64url').toString('utf-8');
                                    parsed = JSON.parse(json);
                                    if (typeof parsed.pk === 'string' && typeof parsed.id === 'string') {
                                        query = query
                                            .lt('created_at', parsed.pk)
                                            .or("created_at.eq.".concat(parsed.pk, ",id.lt.").concat(parsed.id));
                                    }
                                }
                                catch (_c) {
                                    // invalid cursor – start from beginning
                                }
                            }
                            query = query.limit(effectiveLimit + 1);
                            return [4 /*yield*/, query];
                        case 1:
                            _a = _b.sent(), data = _a.data, error = _a.error;
                            if (error)
                                throw error;
                            rows = (data !== null && data !== void 0 ? data : []);
                            hasMore = rows.length > effectiveLimit;
                            resultData = hasMore ? rows.slice(0, effectiveLimit) : rows;
                            nextCursor = null;
                            if (hasMore && resultData.length > 0) {
                                last = resultData[resultData.length - 1];
                                nextCursor = Buffer.from(JSON.stringify({ pk: last.created_at, id: last.id }), 'utf-8').toString('base64url');
                            }
                            return [2 /*return*/, { data: resultData, next_cursor: nextCursor, has_more: hasMore }];
                    }
                });
            });
        };
        RefundsService_1.prototype.getRefundByIdempotencyKey = function (key) {
            return __awaiter(this, void 0, void 0, function () {
                var client, _a, data, error;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            client = this.supabaseService.getClient();
                            return [4 /*yield*/, client
                                    .from('refund_attempts')
                                    .select('*')
                                    .eq('idempotency_key', key)
                                    .maybeSingle()];
                        case 1:
                            _a = _b.sent(), data = _a.data, error = _a.error;
                            if (error)
                                throw error;
                            return [2 /*return*/, data];
                    }
                });
            });
        };
        // ---------------------------------------------------------------------------
        // Private helpers
        // ---------------------------------------------------------------------------
        RefundsService_1.prototype.getRefundById = function (id) {
            return __awaiter(this, void 0, void 0, function () {
                var client, _a, data, error;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            client = this.supabaseService.getClient();
                            return [4 /*yield*/, client
                                    .from('refund_attempts')
                                    .select('*')
                                    .eq('id', id)
                                    .maybeSingle()];
                        case 1:
                            _a = _b.sent(), data = _a.data, error = _a.error;
                            if (error)
                                throw error;
                            if (!data) {
                                throw new common_1.NotFoundException({ error: 'REFUND_NOT_FOUND', message: "Refund ".concat(id, " not found") });
                            }
                            return [2 /*return*/, data];
                    }
                });
            });
        };
        RefundsService_1.prototype.assertEligible = function (entityType, entityId) {
            return __awaiter(this, void 0, void 0, function () {
                var client, data, data, data;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            client = this.supabaseService.getClient();
                            if (!(entityType === 'payment')) return [3 /*break*/, 2];
                            return [4 /*yield*/, client
                                    .from('payment_records')
                                    .select('status')
                                    .eq('id', entityId)
                                    .maybeSingle()];
                        case 1:
                            data = (_a.sent()).data;
                            if (!data || !(0, refunds_eligibility_1.isPaymentRefundable)(data.status)) {
                                throw new common_1.ConflictException({
                                    error: 'REFUND_NOT_ELIGIBLE',
                                    message: "Payment ".concat(entityId, " is not in a refundable state (must be 'paid')"),
                                });
                            }
                            return [2 /*return*/];
                        case 2:
                            if (!(entityType === 'escrow')) return [3 /*break*/, 4];
                            return [4 /*yield*/, client
                                    .from('escrow_records')
                                    .select('status')
                                    .eq('id', entityId)
                                    .maybeSingle()];
                        case 3:
                            data = (_a.sent()).data;
                            if (!data || !(0, refunds_eligibility_1.isEscrowRefundable)(data.status)) {
                                throw new common_1.ConflictException({
                                    error: 'REFUND_NOT_ELIGIBLE',
                                    message: "Escrow ".concat(entityId, " is not in a refundable state (must be 'active' or 'claimed')"),
                                });
                            }
                            return [2 /*return*/];
                        case 4:
                            if (!(entityType === 'link')) return [3 /*break*/, 6];
                            return [4 /*yield*/, client
                                    .from('payment_links')
                                    .select('state')
                                    .eq('id', entityId)
                                    .maybeSingle()];
                        case 5:
                            data = (_a.sent()).data;
                            if (!data || !(0, refunds_eligibility_1.isLinkRefundable)(data.state)) {
                                throw new common_1.ConflictException({
                                    error: 'REFUND_NOT_ELIGIBLE',
                                    message: "Link ".concat(entityId, " is not in a refundable state (must be 'PAID')"),
                                });
                            }
                            return [2 /*return*/];
                        case 6: throw new common_1.ConflictException({
                            error: 'REFUND_NOT_ELIGIBLE',
                            message: "Unknown entity type: ".concat(entityType),
                        });
                    }
                });
            });
        };
        RefundsService_1.prototype.appendAudit = function (refundId, actorId, action, reasonCode, notes) {
            return __awaiter(this, void 0, void 0, function () {
                var client, error;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            client = this.supabaseService.getClient();
                            return [4 /*yield*/, client.from('refund_audit_log').insert({
                                    refund_id: refundId,
                                    actor_id: actorId,
                                    action: action,
                                    reason_code: reasonCode !== null && reasonCode !== void 0 ? reasonCode : null,
                                    notes: notes !== null && notes !== void 0 ? notes : null,
                                })];
                        case 1:
                            error = (_a.sent()).error;
                            if (error) {
                                this.logger.warn("Failed to append audit log for refund ".concat(refundId, ": ").concat(error.message));
                            }
                            return [2 /*return*/];
                    }
                });
            });
        };
        return RefundsService_1;
    }());
    __setFunctionName(_classThis, "RefundsService");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        RefundsService = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return RefundsService = _classThis;
}();
exports.RefundsService = RefundsService;
