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
exports.RecurringPaymentsRepository = void 0;
var common_1 = require("@nestjs/common");
var cursor_util_1 = require("../common/pagination/cursor.util");
var RecurringPaymentsRepository = function () {
    var _classDecorators = [(0, common_1.Injectable)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var RecurringPaymentsRepository = _classThis = /** @class */ (function () {
        function RecurringPaymentsRepository_1(supabaseService) {
            this.supabaseService = supabaseService;
            this.logger = new common_1.Logger(RecurringPaymentsRepository.name);
            this.supabase = this.supabaseService.getClient();
        }
        // ---------------------------------------------------------------------------
        // Recurring Payment Links CRUD
        // ---------------------------------------------------------------------------
        RecurringPaymentsRepository_1.prototype.createLink = function (link) {
            return __awaiter(this, void 0, void 0, function () {
                var _a, data, error;
                var _b, _c;
                return __generator(this, function (_d) {
                    switch (_d.label) {
                        case 0: return [4 /*yield*/, this.supabase
                                .from('recurring_payment_links')
                                .insert({
                                username: link.username || null,
                                destination: link.destination || null,
                                amount: link.amount,
                                asset: link.asset,
                                asset_issuer: link.assetIssuer || null,
                                frequency: link.frequency,
                                start_date: ((_b = link.startDate) === null || _b === void 0 ? void 0 : _b.toISOString()) || new Date().toISOString(),
                                end_date: ((_c = link.endDate) === null || _c === void 0 ? void 0 : _c.toISOString()) || null,
                                total_periods: link.totalPeriods || null,
                                memo: link.memo || null,
                                memo_type: link.memoType || 'text',
                                reference_id: link.referenceId || null,
                                privacy_enabled: link.privacyEnabled || false,
                                next_execution_date: (link.startDate || new Date()).toISOString(),
                            })
                                .select()
                                .single()];
                        case 1:
                            _a = _d.sent(), data = _a.data, error = _a.error;
                            if (error) {
                                this.logger.error("Error creating recurring link: ".concat(error.message), error.stack);
                                throw error;
                            }
                            return [2 /*return*/, data];
                    }
                });
            });
        };
        RecurringPaymentsRepository_1.prototype.findById = function (id) {
            return __awaiter(this, void 0, void 0, function () {
                var _a, data, error;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, this.supabase
                                .from('recurring_payment_links')
                                .select('*')
                                .eq('id', id)
                                .single()];
                        case 1:
                            _a = _b.sent(), data = _a.data, error = _a.error;
                            if (error && error.code !== 'PGRST116') {
                                this.logger.error("Error finding recurring link: ".concat(error.message), error.stack);
                                throw error;
                            }
                            return [2 /*return*/, data];
                    }
                });
            });
        };
        RecurringPaymentsRepository_1.prototype.findByUsername = function (username) {
            return __awaiter(this, void 0, void 0, function () {
                var _a, data, error;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, this.supabase
                                .from('recurring_payment_links')
                                .select('*')
                                .eq('username', username)
                                .in('status', ['active', 'paused'])];
                        case 1:
                            _a = _b.sent(), data = _a.data, error = _a.error;
                            if (error) {
                                this.logger.error("Error finding links by username: ".concat(error.message), error.stack);
                                throw error;
                            }
                            return [2 /*return*/, data];
                    }
                });
            });
        };
        RecurringPaymentsRepository_1.prototype.findByDestination = function (destination) {
            return __awaiter(this, void 0, void 0, function () {
                var _a, data, error;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, this.supabase
                                .from('recurring_payment_links')
                                .select('*')
                                .eq('destination', destination)
                                .in('status', ['active', 'paused'])];
                        case 1:
                            _a = _b.sent(), data = _a.data, error = _a.error;
                            if (error) {
                                this.logger.error("Error finding links by destination: ".concat(error.message), error.stack);
                                throw error;
                            }
                            return [2 /*return*/, data];
                    }
                });
            });
        };
        RecurringPaymentsRepository_1.prototype.listLinks = function (params) {
            return __awaiter(this, void 0, void 0, function () {
                var status, username, destination, cursorStr, limit, effectiveLimit, decodedCursor, query, _a, data, error, count, rows, paginated;
                var _b;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            status = params.status, username = params.username, destination = params.destination, cursorStr = params.cursor, limit = params.limit;
                            effectiveLimit = (0, cursor_util_1.clampLimit)(limit);
                            decodedCursor = cursorStr ? (0, cursor_util_1.decodeCursor)(cursorStr) : null;
                            query = this.supabase.from('recurring_payment_links').select('*', { count: 'exact' });
                            if (status) {
                                query = query.eq('status', status);
                            }
                            if (username) {
                                query = query.eq('username', username);
                            }
                            if (destination) {
                                query = query.eq('destination', destination);
                            }
                            // Apply cursor filter for deterministic ordering
                            if (decodedCursor) {
                                query = query
                                    .lt('created_at', decodedCursor.pk)
                                    .or("created_at.eq.".concat(decodedCursor.pk, ",id.lt.").concat(decodedCursor.id));
                            }
                            query = query
                                .order('created_at', { ascending: false })
                                .order('id', { ascending: false })
                                .limit(effectiveLimit + 1);
                            return [4 /*yield*/, query];
                        case 1:
                            _a = _c.sent(), data = _a.data, error = _a.error, count = _a.count;
                            if (error) {
                                this.logger.error("Error listing recurring links: ".concat(error.message), error.stack);
                                throw error;
                            }
                            rows = (_b = data) !== null && _b !== void 0 ? _b : [];
                            paginated = (0, cursor_util_1.paginateResult)(rows, effectiveLimit, 'created_at');
                            return [2 /*return*/, {
                                    data: paginated.data,
                                    next_cursor: paginated.next_cursor,
                                    has_more: paginated.has_more,
                                    total: count || 0,
                                }];
                    }
                });
            });
        };
        RecurringPaymentsRepository_1.prototype.updateLink = function (id, updates) {
            return __awaiter(this, void 0, void 0, function () {
                var updateData, _a, data, error;
                var _b;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            updateData = {};
                            if (updates.amount !== undefined)
                                updateData.amount = updates.amount;
                            if (updates.frequency !== undefined)
                                updateData.frequency = updates.frequency;
                            if (updates.endDate !== undefined)
                                updateData.end_date = (_b = updates.endDate) === null || _b === void 0 ? void 0 : _b.toISOString();
                            if (updates.totalPeriods !== undefined)
                                updateData.total_periods = updates.totalPeriods;
                            if (updates.memo !== undefined)
                                updateData.memo = updates.memo;
                            if (updates.referenceId !== undefined)
                                updateData.reference_id = updates.referenceId;
                            return [4 /*yield*/, this.supabase
                                    .from('recurring_payment_links')
                                    .update(updateData)
                                    .eq('id', id)
                                    .select()
                                    .single()];
                        case 1:
                            _a = _c.sent(), data = _a.data, error = _a.error;
                            if (error) {
                                this.logger.error("Error updating recurring link: ".concat(error.message), error.stack);
                                throw error;
                            }
                            return [2 /*return*/, data];
                    }
                });
            });
        };
        RecurringPaymentsRepository_1.prototype.updateStatus = function (id, status) {
            return __awaiter(this, void 0, void 0, function () {
                var _a, data, error;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, this.supabase
                                .from('recurring_payment_links')
                                .update({ status: status })
                                .eq('id', id)
                                .select()
                                .single()];
                        case 1:
                            _a = _b.sent(), data = _a.data, error = _a.error;
                            if (error) {
                                this.logger.error("Error updating link status: ".concat(error.message), error.stack);
                                throw error;
                            }
                            return [2 /*return*/, data];
                    }
                });
            });
        };
        RecurringPaymentsRepository_1.prototype.incrementExecutedCount = function (id) {
            return __awaiter(this, void 0, void 0, function () {
                var link, nextDate, error;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.findById(id)];
                        case 1:
                            link = _a.sent();
                            if (!link) {
                                throw new Error("Link not found: ".concat(id));
                            }
                            nextDate = this.calculateNextExecutionDate(new Date(link.next_execution_date), link.frequency);
                            return [4 /*yield*/, this.supabase
                                    .from('recurring_payment_links')
                                    .update({
                                    executed_count: link.executed_count + 1,
                                    next_execution_date: nextDate.toISOString(),
                                })
                                    .eq('id', id)];
                        case 2:
                            error = (_a.sent()).error;
                            if (error) {
                                this.logger.error("Error incrementing executed count: ".concat(error.message), error.stack);
                                throw error;
                            }
                            return [2 /*return*/];
                    }
                });
            });
        };
        RecurringPaymentsRepository_1.prototype.calculateNextExecutionDate = function (currentDate, frequency) {
            var next = new Date(currentDate);
            switch (frequency) {
                case 'daily':
                    next.setDate(next.getDate() + 1);
                    break;
                case 'weekly':
                    next.setDate(next.getDate() + 7);
                    break;
                case 'monthly':
                    next.setMonth(next.getMonth() + 1);
                    break;
                case 'yearly':
                    next.setFullYear(next.getFullYear() + 1);
                    break;
            }
            return next;
        };
        RecurringPaymentsRepository_1.prototype.deleteLink = function (id) {
            return __awaiter(this, void 0, void 0, function () {
                var error;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.supabase.from('recurring_payment_links').delete().eq('id', id)];
                        case 1:
                            error = (_a.sent()).error;
                            if (error) {
                                this.logger.error("Error deleting recurring link: ".concat(error.message), error.stack);
                                throw error;
                            }
                            return [2 /*return*/];
                    }
                });
            });
        };
        // ---------------------------------------------------------------------------
        // Recurring Payment Executions
        // ---------------------------------------------------------------------------
        RecurringPaymentsRepository_1.prototype.createExecution = function (execution) {
            return __awaiter(this, void 0, void 0, function () {
                var _a, data, error;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, this.supabase
                                .from('recurring_payment_executions')
                                .insert({
                                recurring_link_id: execution.recurringLinkId,
                                period_number: execution.periodNumber,
                                scheduled_at: execution.scheduledAt.toISOString(),
                                amount: execution.amount,
                                asset: execution.asset,
                                status: 'pending',
                                retry_count: 0,
                            })
                                .select()
                                .single()];
                        case 1:
                            _a = _b.sent(), data = _a.data, error = _a.error;
                            if (error) {
                                this.logger.error("Error creating execution: ".concat(error.message), error.stack);
                                throw error;
                            }
                            return [2 /*return*/, data];
                    }
                });
            });
        };
        RecurringPaymentsRepository_1.prototype.findPendingExecutions = function () {
            return __awaiter(this, arguments, void 0, function (limit) {
                var _a, data, error;
                if (limit === void 0) { limit = 100; }
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, this.supabase
                                .from('recurring_payment_executions')
                                .select('*')
                                .eq('status', 'pending')
                                .lte('scheduled_at', new Date().toISOString())
                                .order('scheduled_at', { ascending: true })
                                .limit(limit)];
                        case 1:
                            _a = _b.sent(), data = _a.data, error = _a.error;
                            if (error) {
                                this.logger.error("Error finding pending executions: ".concat(error.message), error.stack);
                                throw error;
                            }
                            return [2 /*return*/, data];
                    }
                });
            });
        };
        RecurringPaymentsRepository_1.prototype.findExecutionsByLinkId = function (linkId) {
            return __awaiter(this, void 0, void 0, function () {
                var _a, data, error;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, this.supabase
                                .from('recurring_payment_executions')
                                .select('*')
                                .eq('recurring_link_id', linkId)
                                .order('period_number', { ascending: true })];
                        case 1:
                            _a = _b.sent(), data = _a.data, error = _a.error;
                            if (error) {
                                this.logger.error("Error finding executions: ".concat(error.message), error.stack);
                                throw error;
                            }
                            return [2 /*return*/, data];
                    }
                });
            });
        };
        RecurringPaymentsRepository_1.prototype.updateExecutionStatus = function (executionId, status, updates) {
            return __awaiter(this, void 0, void 0, function () {
                var updateData, _a, data, error;
                var _b;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            updateData = __assign(__assign(__assign(__assign(__assign({ status: status }, ((updates === null || updates === void 0 ? void 0 : updates.executedAt) && { executed_at: updates.executedAt.toISOString() })), ((updates === null || updates === void 0 ? void 0 : updates.transactionHash) !== undefined && { transaction_hash: updates.transactionHash })), ((updates === null || updates === void 0 ? void 0 : updates.failureReason) !== undefined && { failure_reason: updates.failureReason })), ((updates === null || updates === void 0 ? void 0 : updates.retryCount) !== undefined && { retry_count: updates.retryCount })), ((updates === null || updates === void 0 ? void 0 : updates.lastRetryAt) !== undefined && { last_retry_at: (_b = updates.lastRetryAt) === null || _b === void 0 ? void 0 : _b.toISOString() }));
                            return [4 /*yield*/, this.supabase
                                    .from('recurring_payment_executions')
                                    .update(updateData)
                                    .eq('id', executionId)
                                    .select()
                                    .single()];
                        case 1:
                            _a = _c.sent(), data = _a.data, error = _a.error;
                            if (error) {
                                this.logger.error("Error updating execution: ".concat(error.message), error.stack);
                                throw error;
                            }
                            return [2 /*return*/, data];
                    }
                });
            });
        };
        RecurringPaymentsRepository_1.prototype.markNotificationSent = function (executionId) {
            return __awaiter(this, void 0, void 0, function () {
                var error;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.supabase
                                .from('recurring_payment_executions')
                                .update({
                                notification_sent: true,
                                notification_sent_at: new Date().toISOString(),
                            })
                                .eq('id', executionId)];
                        case 1:
                            error = (_a.sent()).error;
                            if (error) {
                                this.logger.error("Error marking notification sent: ".concat(error.message), error.stack);
                                throw error;
                            }
                            return [2 /*return*/];
                    }
                });
            });
        };
        // ---------------------------------------------------------------------------
        // Helper methods
        // ---------------------------------------------------------------------------
        RecurringPaymentsRepository_1.prototype.getDueForExecution = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _a, data, error, fallbackResult;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, this.supabase.rpc('should_execute_recurring_link')];
                        case 1:
                            _a = _b.sent(), data = _a.data, error = _a.error;
                            if (!error) return [3 /*break*/, 3];
                            return [4 /*yield*/, this.supabase
                                    .from('recurring_payment_links')
                                    .select('*')
                                    .eq('status', 'active')
                                    .lte('next_execution_date', new Date().toISOString())
                                    .or("total_periods.is.null,executed_count.lt.total_periods")
                                    .or("end_date.is.null,end_date.gt.".concat(new Date().toISOString()))];
                        case 2:
                            fallbackResult = _b.sent();
                            if (fallbackResult.error) {
                                this.logger.error("Error getting due links: ".concat(fallbackResult.error.message), fallbackResult.error.stack);
                                throw fallbackResult.error;
                            }
                            return [2 /*return*/, fallbackResult.data];
                        case 3: return [2 /*return*/, data];
                    }
                });
            });
        };
        return RecurringPaymentsRepository_1;
    }());
    __setFunctionName(_classThis, "RecurringPaymentsRepository");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        RecurringPaymentsRepository = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return RecurringPaymentsRepository = _classThis;
}();
exports.RecurringPaymentsRepository = RecurringPaymentsRepository;
