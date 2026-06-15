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
exports.RecurringPaymentsService = void 0;
var common_1 = require("@nestjs/common");
var recurring_payment_dto_1 = require("./dto/recurring-payment.dto");
var errors_1 = require("./errors");
var RecurringPaymentsService = function () {
    var _classDecorators = [(0, common_1.Injectable)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var RecurringPaymentsService = _classThis = /** @class */ (function () {
        function RecurringPaymentsService_1(repository, eventEmitter) {
            this.repository = repository;
            this.eventEmitter = eventEmitter;
            this.logger = new common_1.Logger(RecurringPaymentsService.name);
        }
        // ---------------------------------------------------------------------------
        // Public API Methods
        // ---------------------------------------------------------------------------
        /**
         * Create a new recurring payment link
         */
        RecurringPaymentsService_1.prototype.createRecurringLink = function (dto) {
            return __awaiter(this, void 0, void 0, function () {
                var startDate, link, error_1, errorMessage;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            // Validate input
                            this.validateCreateDto(dto);
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 4, , 5]);
                            startDate = dto.startDate ? new Date(dto.startDate) : new Date();
                            this.calculateNextExecutionDate(startDate, dto.frequency);
                            return [4 /*yield*/, this.repository.createLink({
                                    username: dto.username || null,
                                    destination: dto.destination || null,
                                    amount: dto.amount,
                                    asset: dto.asset,
                                    assetIssuer: dto.assetIssuer || null,
                                    frequency: dto.frequency,
                                    startDate: startDate,
                                    endDate: dto.endDate ? new Date(dto.endDate) : null,
                                    totalPeriods: dto.totalPeriods || null,
                                    memo: dto.memo || null,
                                    memoType: dto.memoType || 'text',
                                    referenceId: dto.referenceId || null,
                                    privacyEnabled: dto.privacyEnabled || false,
                                })];
                        case 2:
                            link = _a.sent();
                            // Create first execution record
                            return [4 /*yield*/, this.repository.createExecution({
                                    recurringLinkId: link.id,
                                    periodNumber: 1,
                                    scheduledAt: startDate,
                                    amount: dto.amount,
                                    asset: dto.asset,
                                })];
                        case 3:
                            // Create first execution record
                            _a.sent();
                            this.logger.log("Created recurring payment link: ".concat(link.id));
                            // Emit event
                            this.eventEmitter.emit('recurring.link.created', {
                                linkId: link.id,
                                username: link.username,
                                destination: link.destination,
                            });
                            return [2 /*return*/, this.mapToResponseDto(link)];
                        case 4:
                            error_1 = _a.sent();
                            errorMessage = error_1 instanceof Error ? error_1.message : 'Unknown error';
                            this.logger.error("Error creating recurring link: ".concat(errorMessage), error_1 instanceof Error ? error_1.stack : undefined);
                            throw new common_1.BadRequestException("Failed to create recurring payment link: ".concat(errorMessage));
                        case 5: return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * Get a recurring payment link by ID
         */
        RecurringPaymentsService_1.prototype.getRecurringLinkById = function (id) {
            return __awaiter(this, void 0, void 0, function () {
                var link, executions;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.repository.findById(id)];
                        case 1:
                            link = _a.sent();
                            if (!link) {
                                throw new common_1.NotFoundException("Recurring payment link not found: ".concat(id));
                            }
                            return [4 /*yield*/, this.repository.findExecutionsByLinkId(id)];
                        case 2:
                            executions = _a.sent();
                            return [2 /*return*/, this.mapToResponseDto(link, executions)];
                    }
                });
            });
        };
        /**
         * List recurring payment links
         */
        RecurringPaymentsService_1.prototype.listRecurringLinks = function (params) {
            return __awaiter(this, void 0, void 0, function () {
                var result, data;
                var _this = this;
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, this.repository.listLinks(params)];
                        case 1:
                            result = _b.sent();
                            data = result.data.map(function (link) { return _this.mapToResponseDto(link); });
                            return [2 /*return*/, {
                                    data: data,
                                    total: result.total,
                                    next_cursor: result.next_cursor,
                                    has_more: result.has_more,
                                    limit: (_a = params.limit) !== null && _a !== void 0 ? _a : 20,
                                }];
                    }
                });
            });
        };
        /**
         * Update a recurring payment link
         */
        RecurringPaymentsService_1.prototype.updateRecurringLink = function (id, dto) {
            return __awaiter(this, void 0, void 0, function () {
                var existingLink, updatedLink, error_2, errorMessage;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.repository.findById(id)];
                        case 1:
                            existingLink = _a.sent();
                            if (!existingLink) {
                                throw new common_1.NotFoundException("Recurring payment link not found: ".concat(id));
                            }
                            // Validate updates
                            this.validateUpdateDto(dto, existingLink);
                            _a.label = 2;
                        case 2:
                            _a.trys.push([2, 4, , 5]);
                            return [4 /*yield*/, this.repository.updateLink(id, {
                                    amount: dto.amount,
                                    frequency: dto.frequency,
                                    endDate: dto.endDate ? new Date(dto.endDate) : undefined,
                                    totalPeriods: dto.totalPeriods,
                                    memo: dto.memo,
                                    referenceId: dto.referenceId,
                                })];
                        case 3:
                            updatedLink = _a.sent();
                            this.logger.log("Updated recurring payment link: ".concat(id));
                            // Emit event
                            this.eventEmitter.emit('recurring.link.updated', {
                                linkId: id,
                                changes: dto,
                            });
                            return [2 /*return*/, this.mapToResponseDto(updatedLink)];
                        case 4:
                            error_2 = _a.sent();
                            errorMessage = error_2 instanceof Error ? error_2.message : 'Unknown error';
                            this.logger.error("Error updating recurring link: ".concat(errorMessage), error_2 instanceof Error ? error_2.stack : undefined);
                            throw new common_1.BadRequestException("Failed to update recurring payment link: ".concat(errorMessage));
                        case 5: return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * Cancel a recurring payment link
         */
        RecurringPaymentsService_1.prototype.cancelRecurringLink = function (id) {
            return __awaiter(this, void 0, void 0, function () {
                var link, updatedLink;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.repository.findById(id)];
                        case 1:
                            link = _a.sent();
                            if (!link) {
                                throw new common_1.NotFoundException("Recurring payment link not found: ".concat(id));
                            }
                            if (link.status === recurring_payment_dto_1.RecurringStatus.CANCELLED) {
                                throw new common_1.BadRequestException('Link is already cancelled');
                            }
                            return [4 /*yield*/, this.repository.updateStatus(id, recurring_payment_dto_1.RecurringStatus.CANCELLED)];
                        case 2:
                            updatedLink = _a.sent();
                            this.logger.log("Cancelled recurring payment link: ".concat(id));
                            // Emit event
                            this.eventEmitter.emit('recurring.link.cancelled', {
                                linkId: id,
                                username: link.username,
                                destination: link.destination,
                            });
                            return [2 /*return*/, this.mapToResponseDto(updatedLink)];
                    }
                });
            });
        };
        /**
         * Pause a recurring payment link
         */
        RecurringPaymentsService_1.prototype.pauseRecurringLink = function (id) {
            return __awaiter(this, void 0, void 0, function () {
                var link, updatedLink;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.repository.findById(id)];
                        case 1:
                            link = _a.sent();
                            if (!link) {
                                throw new common_1.NotFoundException("Recurring payment link not found: ".concat(id));
                            }
                            if (link.status !== recurring_payment_dto_1.RecurringStatus.ACTIVE) {
                                throw new common_1.BadRequestException('Link is not active');
                            }
                            return [4 /*yield*/, this.repository.updateStatus(id, recurring_payment_dto_1.RecurringStatus.PAUSED)];
                        case 2:
                            updatedLink = _a.sent();
                            this.logger.log("Paused recurring payment link: ".concat(id));
                            // Emit event
                            this.eventEmitter.emit('recurring.link.paused', {
                                linkId: id,
                                username: link.username,
                                destination: link.destination,
                            });
                            return [2 /*return*/, this.mapToResponseDto(updatedLink)];
                    }
                });
            });
        };
        /**
         * Resume a paused recurring payment link
         */
        RecurringPaymentsService_1.prototype.resumeRecurringLink = function (id) {
            return __awaiter(this, void 0, void 0, function () {
                var link, statusUpdatedLink;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.repository.findById(id)];
                        case 1:
                            link = _a.sent();
                            if (!link) {
                                throw new common_1.NotFoundException("Recurring payment link not found: ".concat(id));
                            }
                            if (link.status !== recurring_payment_dto_1.RecurringStatus.PAUSED) {
                                throw new common_1.BadRequestException('Link is not paused');
                            }
                            // Calculate next execution date from now
                            this.calculateNextExecutionDate(new Date(), link.frequency);
                            return [4 /*yield*/, this.repository.updateLink(id, {
                                // Reset next execution date
                                })];
                        case 2:
                            _a.sent();
                            return [4 /*yield*/, this.repository.updateStatus(id, recurring_payment_dto_1.RecurringStatus.ACTIVE)];
                        case 3:
                            statusUpdatedLink = _a.sent();
                            this.logger.log("Resumed recurring payment link: ".concat(id));
                            // Emit event
                            this.eventEmitter.emit('recurring.link.resumed', {
                                linkId: id,
                                username: link.username,
                                destination: link.destination,
                            });
                            return [2 /*return*/, this.mapToResponseDto(statusUpdatedLink)];
                    }
                });
            });
        };
        /**
         * Get execution history for a recurring link
         */
        RecurringPaymentsService_1.prototype.getExecutionHistory = function (linkId) {
            return __awaiter(this, void 0, void 0, function () {
                var link, executions;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.repository.findById(linkId)];
                        case 1:
                            link = _a.sent();
                            if (!link) {
                                throw new common_1.NotFoundException("Recurring payment link not found: ".concat(linkId));
                            }
                            return [4 /*yield*/, this.repository.findExecutionsByLinkId(linkId)];
                        case 2:
                            executions = _a.sent();
                            return [2 /*return*/, executions.map(function (exec) { return _this.mapExecutionToDto(exec); })];
                    }
                });
            });
        };
        // ---------------------------------------------------------------------------
        // Scheduler Integration Methods
        // ---------------------------------------------------------------------------
        /**
         * Get all links due for execution
         */
        RecurringPaymentsService_1.prototype.getLinksDueForExecution = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.repository.getDueForExecution()];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        /**
         * Mark a payment as successfully executed
         */
        RecurringPaymentsService_1.prototype.markPaymentSuccess = function (executionId, transactionHash) {
            return __awaiter(this, void 0, void 0, function () {
                var executions, execution, link, shouldComplete, nextDate;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.repository.findExecutionsByLinkId(executionId)];
                        case 1:
                            executions = _a.sent();
                            execution = executions.find(function (e) { return e.id === executionId; });
                            if (!execution) {
                                throw new common_1.NotFoundException("Execution not found: ".concat(executionId));
                            }
                            return [4 /*yield*/, this.repository.updateExecutionStatus(executionId, recurring_payment_dto_1.ExecutionStatus.SUCCESS, {
                                    executedAt: new Date(),
                                    transactionHash: transactionHash,
                                })];
                        case 2:
                            _a.sent();
                            return [4 /*yield*/, this.repository.findById(execution.recurring_link_id)];
                        case 3:
                            link = _a.sent();
                            if (!link) return [3 /*break*/, 7];
                            shouldComplete = (link.total_periods !== null && link.executed_count + 1 >= link.total_periods) ||
                                (link.end_date && new Date(link.end_date) <= new Date());
                            if (!shouldComplete) return [3 /*break*/, 5];
                            return [4 /*yield*/, this.repository.updateStatus(link.id, recurring_payment_dto_1.RecurringStatus.COMPLETED)];
                        case 4:
                            _a.sent();
                            this.logger.log("Completed recurring payment link: ".concat(link.id));
                            this.eventEmitter.emit('recurring.link.completed', {
                                linkId: link.id,
                                totalExecuted: link.executed_count + 1,
                            });
                            return [3 /*break*/, 7];
                        case 5:
                            nextDate = this.calculateNextExecutionDate(new Date(), link.frequency);
                            return [4 /*yield*/, this.repository.createExecution({
                                    recurringLinkId: link.id,
                                    periodNumber: link.executed_count + 2,
                                    scheduledAt: nextDate,
                                    amount: link.amount,
                                    asset: link.asset,
                                })];
                        case 6:
                            _a.sent();
                            _a.label = 7;
                        case 7:
                            this.logger.log("Marked payment ".concat(executionId, " as successful"));
                            // Emit event
                            this.eventEmitter.emit('recurring.payment.executed', {
                                executionId: executionId,
                                transactionHash: transactionHash,
                            });
                            return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * Mark a payment as failed
         */
        RecurringPaymentsService_1.prototype.markPaymentFailure = function (executionId, failureReason, retryCount) {
            return __awaiter(this, void 0, void 0, function () {
                var maxRetries, executions, execution;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            maxRetries = parseInt(process.env.RECURRING_PAYMENT_MAX_RETRY || '3');
                            return [4 /*yield*/, this.repository.findExecutionsByLinkId(executionId)];
                        case 1:
                            executions = _a.sent();
                            execution = executions.find(function (e) { return e.id === executionId; });
                            if (!execution) {
                                throw new common_1.NotFoundException("Execution not found: ".concat(executionId));
                            }
                            if (!(retryCount >= maxRetries)) return [3 /*break*/, 3];
                            // Max retries reached - mark as permanently failed
                            return [4 /*yield*/, this.repository.updateExecutionStatus(executionId, recurring_payment_dto_1.ExecutionStatus.FAILED, {
                                    failureReason: failureReason,
                                    retryCount: retryCount,
                                    lastRetryAt: new Date(),
                                })];
                        case 2:
                            // Max retries reached - mark as permanently failed
                            _a.sent();
                            this.logger.error("Payment ".concat(executionId, " failed permanently after ").concat(retryCount, " retries"));
                            // Emit event
                            this.eventEmitter.emit('recurring.payment.failed', {
                                executionId: executionId,
                                failureReason: failureReason,
                                permanent: true,
                            });
                            return [3 /*break*/, 5];
                        case 3: 
                        // Schedule retry
                        return [4 /*yield*/, this.repository.updateExecutionStatus(executionId, recurring_payment_dto_1.ExecutionStatus.PENDING, {
                                failureReason: failureReason,
                                retryCount: retryCount,
                                lastRetryAt: new Date(),
                            })];
                        case 4:
                            // Schedule retry
                            _a.sent();
                            this.logger.warn("Payment ".concat(executionId, " failed, will retry (attempt ").concat(retryCount, "/").concat(maxRetries, ")"));
                            _a.label = 5;
                        case 5: return [2 /*return*/];
                    }
                });
            });
        };
        // ---------------------------------------------------------------------------
        // Private Helper Methods
        // ---------------------------------------------------------------------------
        RecurringPaymentsService_1.prototype.validateCreateDto = function (dto) {
            // Validate either username or destination is provided
            if (!dto.username && !dto.destination) {
                throw new errors_1.LinkValidationError(errors_1.LinkErrorCode.INVALID_DESTINATION, 'Either username or destination must be provided', 'username/destination');
            }
            // Validate amount
            if (dto.amount <= 0) {
                throw new errors_1.LinkValidationError(errors_1.LinkErrorCode.INVALID_AMOUNT, 'Amount must be greater than zero', 'amount');
            }
            // Validate asset
            if (!dto.asset || dto.asset.trim() === '') {
                throw new errors_1.LinkValidationError(errors_1.LinkErrorCode.ASSET_NOT_WHITELISTED, 'Asset must be provided', 'asset');
            }
            // Validate frequency
            if (!Object.values(recurring_payment_dto_1.FrequencyType).includes(dto.frequency)) {
                throw new errors_1.LinkValidationError(errors_1.LinkErrorCode.INVALID_AMOUNT, // Reusing error code
                'Invalid frequency type', 'frequency');
            }
            // Validate dates
            if (dto.startDate && new Date(dto.startDate) < new Date()) {
                throw new errors_1.LinkValidationError(errors_1.LinkErrorCode.INVALID_AMOUNT, 'Start date cannot be in the past', 'startDate');
            }
            if (dto.endDate && dto.startDate && new Date(dto.endDate) <= new Date(dto.startDate)) {
                throw new errors_1.LinkValidationError(errors_1.LinkErrorCode.INVALID_AMOUNT, 'End date must be after start date', 'endDate');
            }
            // Validate total periods
            if (dto.totalPeriods !== undefined && dto.totalPeriods <= 0) {
                throw new errors_1.LinkValidationError(errors_1.LinkErrorCode.INVALID_AMOUNT, 'Total periods must be greater than zero', 'totalPeriods');
            }
        };
        RecurringPaymentsService_1.prototype.validateUpdateDto = function (dto, existingLink) {
            // Cannot update completed or cancelled links
            if (existingLink.status === recurring_payment_dto_1.RecurringStatus.COMPLETED ||
                existingLink.status === recurring_payment_dto_1.RecurringStatus.CANCELLED) {
                throw new common_1.BadRequestException('Cannot update a completed or cancelled recurring link');
            }
            // Validate amount if provided
            if (dto.amount !== undefined && dto.amount <= 0) {
                throw new common_1.BadRequestException('Amount must be greater than zero');
            }
            // Validate dates if provided
            if (dto.endDate) {
                var endDate = new Date(dto.endDate);
                if (endDate <= new Date()) {
                    throw new common_1.BadRequestException('End date must be in the future');
                }
            }
        };
        RecurringPaymentsService_1.prototype.calculateNextExecutionDate = function (currentDate, frequency) {
            var next = new Date(currentDate);
            switch (frequency) {
                case recurring_payment_dto_1.FrequencyType.DAILY:
                    next.setDate(next.getDate() + 1);
                    break;
                case recurring_payment_dto_1.FrequencyType.WEEKLY:
                    next.setDate(next.getDate() + 7);
                    break;
                case recurring_payment_dto_1.FrequencyType.MONTHLY:
                    next.setMonth(next.getMonth() + 1);
                    break;
                case recurring_payment_dto_1.FrequencyType.YEARLY:
                    next.setFullYear(next.getFullYear() + 1);
                    break;
            }
            return next;
        };
        RecurringPaymentsService_1.prototype.mapToResponseDto = function (link, executions) {
            var _this = this;
            var response = {
                id: link.id,
                username: link.username || undefined,
                destination: link.destination || undefined,
                amount: link.amount,
                asset: link.asset,
                assetIssuer: link.asset_issuer || undefined,
                frequency: link.frequency,
                startDate: new Date(link.start_date),
                endDate: link.end_date ? new Date(link.end_date) : undefined,
                totalPeriods: link.total_periods || undefined,
                executedCount: link.executed_count,
                nextExecutionDate: new Date(link.next_execution_date),
                status: link.status,
                memo: link.memo || undefined,
                memoType: link.memo_type || undefined,
                referenceId: link.reference_id || undefined,
                privacyEnabled: link.privacy_enabled,
                createdAt: new Date(link.created_at),
                updatedAt: new Date(link.updated_at),
            };
            if (executions) {
                response.executions = executions.map(function (exec) { return _this.mapExecutionToDto(exec); });
            }
            return response;
        };
        RecurringPaymentsService_1.prototype.mapExecutionToDto = function (execution) {
            return {
                id: execution.id,
                periodNumber: execution.period_number,
                scheduledAt: new Date(execution.scheduled_at),
                executedAt: execution.executed_at ? new Date(execution.executed_at) : undefined,
                amount: execution.amount,
                asset: execution.asset,
                status: execution.status,
                transactionHash: execution.transaction_hash || undefined,
                failureReason: execution.failure_reason || undefined,
                retryCount: execution.retry_count,
                notificationSent: execution.notification_sent,
                createdAt: new Date(execution.created_at),
            };
        };
        return RecurringPaymentsService_1;
    }());
    __setFunctionName(_classThis, "RecurringPaymentsService");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        RecurringPaymentsService = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return RecurringPaymentsService = _classThis;
}();
exports.RecurringPaymentsService = RecurringPaymentsService;
