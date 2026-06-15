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
exports.RecurringPaymentsScheduler = void 0;
var common_1 = require("@nestjs/common");
var schedule_1 = require("@nestjs/schedule");
var types_1 = require("../job-queue/types");
var RecurringPaymentsScheduler = function () {
    var _classDecorators = [(0, common_1.Injectable)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _instanceExtraInitializers = [];
    var _checkAndExecutePendingPayments_decorators;
    var _sendUpcomingPaymentNotifications_decorators;
    var RecurringPaymentsScheduler = _classThis = /** @class */ (function () {
        function RecurringPaymentsScheduler_1(schedulerService, repository, paymentProcessor, eventEmitter, jobQueueService) {
            this.schedulerService = (__runInitializers(this, _instanceExtraInitializers), schedulerService);
            this.repository = repository;
            this.paymentProcessor = paymentProcessor;
            this.eventEmitter = eventEmitter;
            this.jobQueueService = jobQueueService;
            this.logger = new common_1.Logger(RecurringPaymentsScheduler.name);
            this.maxRetries = parseInt(process.env.RECURRING_PAYMENT_MAX_RETRY || '3');
            this.retryBackoffMs = parseInt(process.env.RECURRING_PAYMENT_RETRY_BACKOFF_MS || '60000');
            this.notificationHoursBefore = parseInt(process.env.RECURRING_PAYMENT_NOTIFICATION_HOURS_BEFORE || '24');
        }
        RecurringPaymentsScheduler_1.prototype.onModuleInit = function () {
            this.logger.log('Recurring payments scheduler initialized');
            this.logger.log("Configuration: maxRetries=".concat(this.maxRetries, ", retryBackoffMs=").concat(this.retryBackoffMs, "ms, notificationHoursBefore=").concat(this.notificationHoursBefore, "h"));
        };
        // ---------------------------------------------------------------------------
        // Cron Jobs
        // ---------------------------------------------------------------------------
        /**
         * Check for pending payments every minute
         */
        RecurringPaymentsScheduler_1.prototype.checkAndExecutePendingPayments = function () {
            return __awaiter(this, void 0, void 0, function () {
                var linksDue, _i, linksDue_1, link, error_1, errorMessage;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 6, , 7]);
                            this.logger.debug('Checking for pending recurring payments...');
                            return [4 /*yield*/, this.schedulerService.getLinksDueForExecution()];
                        case 1:
                            linksDue = _a.sent();
                            if (linksDue.length === 0) {
                                this.logger.debug('No recurring payments due for execution');
                                return [2 /*return*/];
                            }
                            this.logger.log("Found ".concat(linksDue.length, " recurring payment(s) due for execution"));
                            _i = 0, linksDue_1 = linksDue;
                            _a.label = 2;
                        case 2:
                            if (!(_i < linksDue_1.length)) return [3 /*break*/, 5];
                            link = linksDue_1[_i];
                            return [4 /*yield*/, this.processRecurringPayment(link)];
                        case 3:
                            _a.sent();
                            _a.label = 4;
                        case 4:
                            _i++;
                            return [3 /*break*/, 2];
                        case 5: return [3 /*break*/, 7];
                        case 6:
                            error_1 = _a.sent();
                            errorMessage = error_1 instanceof Error ? error_1.message : 'Unknown error';
                            this.logger.error("Error in scheduled payment execution: ".concat(errorMessage), error_1 instanceof Error ? error_1.stack : undefined);
                            return [3 /*break*/, 7];
                        case 7: return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * Send payment due notifications 24 hours before scheduled date
         */
        RecurringPaymentsScheduler_1.prototype.sendUpcomingPaymentNotifications = function () {
            return __awaiter(this, void 0, void 0, function () {
                var errorMessage;
                return __generator(this, function (_a) {
                    try {
                        this.logger.debug('Checking for upcoming payment notifications...');
                        // This would query for payments scheduled in the next 24 hours
                        // Implementation depends on specific notification requirements
                        // For now, we'll skip detailed implementation
                    }
                    catch (error) {
                        errorMessage = error instanceof Error ? error.message : 'Unknown error';
                        this.logger.error("Error sending notifications: ".concat(errorMessage), error instanceof Error ? error.stack : undefined);
                    }
                    return [2 /*return*/];
                });
            });
        };
        // ---------------------------------------------------------------------------
        // Payment Processing Logic
        // ---------------------------------------------------------------------------
        RecurringPaymentsScheduler_1.prototype.processRecurringPayment = function (link) {
            return __awaiter(this, void 0, void 0, function () {
                var linkId, nextPeriodNumber, execution, error_2, errorMessage;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            linkId = link.id;
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 4, , 6]);
                            this.logger.log("Processing recurring payment for link: ".concat(linkId));
                            nextPeriodNumber = link.executed_count + 1;
                            return [4 /*yield*/, this.repository.createExecution({
                                    recurringLinkId: linkId,
                                    periodNumber: nextPeriodNumber,
                                    scheduledAt: new Date(link.next_execution_date),
                                    amount: link.amount,
                                    asset: link.asset,
                                })];
                        case 2:
                            execution = _a.sent();
                            this.logger.log("Created execution record: ".concat(execution.id, " for period ").concat(nextPeriodNumber));
                            // Execute the payment
                            return [4 /*yield*/, this.executeSinglePayment(link, execution)];
                        case 3:
                            // Execute the payment
                            _a.sent();
                            return [3 /*break*/, 6];
                        case 4:
                            error_2 = _a.sent();
                            errorMessage = error_2 instanceof Error ? error_2.message : 'Unknown error';
                            this.logger.error("Error processing recurring payment ".concat(linkId, ": ").concat(errorMessage), error_2 instanceof Error ? error_2.stack : undefined);
                            // Mark as failed
                            return [4 /*yield*/, this.schedulerService.markPaymentFailure(linkId, errorMessage, 0)];
                        case 5:
                            // Mark as failed
                            _a.sent();
                            return [3 /*break*/, 6];
                        case 6: return [2 /*return*/];
                    }
                });
            });
        };
        RecurringPaymentsScheduler_1.prototype.executeSinglePayment = function (link, execution) {
            return __awaiter(this, void 0, void 0, function () {
                var executionId, recipientAddress, _a, payload, jobId, error_3, errorMessage, currentRetryCount;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            executionId = execution.id;
                            _b.label = 1;
                        case 1:
                            _b.trys.push([1, 5, , 8]);
                            this.logger.log("Enqueuing payment job for execution: ".concat(executionId));
                            _a = link.destination;
                            if (_a) return [3 /*break*/, 3];
                            return [4 /*yield*/, this.resolveUsernameToAddress(link.username)];
                        case 2:
                            _a = (_b.sent());
                            _b.label = 3;
                        case 3:
                            recipientAddress = _a;
                            if (!recipientAddress) {
                                throw new Error('Could not resolve recipient address');
                            }
                            payload = {
                                recurringLinkId: link.id,
                                executionId: executionId,
                                recipientAddress: recipientAddress,
                                amount: link.amount.toString(),
                                asset: link.asset,
                                assetIssuer: link.asset_issuer || undefined,
                                memo: link.memo || undefined,
                                memoType: link.memo_type || undefined,
                            };
                            return [4 /*yield*/, this.jobQueueService.enqueue(types_1.JobType.RECURRING_PAYMENT, payload)];
                        case 4:
                            jobId = _b.sent();
                            this.logger.log("Payment job enqueued: ".concat(jobId, " for execution: ").concat(executionId));
                            return [3 /*break*/, 8];
                        case 5:
                            error_3 = _b.sent();
                            errorMessage = error_3 instanceof Error ? error_3.message : 'Unknown error';
                            this.logger.error("Failed to enqueue payment job: ".concat(errorMessage), error_3 instanceof Error ? error_3.stack : undefined);
                            currentRetryCount = execution.retry_count + 1;
                            // Mark as failed
                            return [4 /*yield*/, this.schedulerService.markPaymentFailure(executionId, errorMessage, currentRetryCount)];
                        case 6:
                            // Mark as failed
                            _b.sent();
                            // Emit failure event
                            this.eventEmitter.emit('recurring.payment.failed', {
                                executionId: executionId,
                                linkId: link.id,
                                failureReason: errorMessage,
                                retryCount: currentRetryCount,
                                permanent: currentRetryCount >= this.maxRetries,
                            });
                            // Send failure notification
                            return [4 /*yield*/, this.notifyUser(link, execution, 'failed', undefined, errorMessage)];
                        case 7:
                            // Send failure notification
                            _b.sent();
                            // Re-throw to let caller handle
                            throw error_3;
                        case 8: return [2 /*return*/];
                    }
                });
            });
        };
        // ---------------------------------------------------------------------------
        // Notification Helpers
        // ---------------------------------------------------------------------------
        RecurringPaymentsScheduler_1.prototype.notifyUser = function (link, execution, type, transactionHash, failureReason) {
            return __awaiter(this, void 0, void 0, function () {
                var eventType, errorMessage;
                return __generator(this, function (_a) {
                    try {
                        eventType = type === 'success'
                            ? 'recurring.payment.success'
                            : type === 'failed'
                                ? 'recurring.payment.failed'
                                : 'recurring.payment.due';
                        this.eventEmitter.emit(eventType, {
                            linkId: link.id,
                            executionId: execution.id,
                            username: link.username,
                            destination: link.destination,
                            amount: link.amount,
                            asset: link.asset,
                            periodNumber: execution.period_number,
                            transactionHash: transactionHash,
                            failureReason: failureReason,
                        });
                        this.logger.debug("Emitted notification event: ".concat(eventType));
                    }
                    catch (error) {
                        errorMessage = error instanceof Error ? error.message : 'Unknown error';
                        this.logger.error("Error emitting notification: ".concat(errorMessage), error instanceof Error ? error.stack : undefined);
                    }
                    return [2 /*return*/];
                });
            });
        };
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        RecurringPaymentsScheduler_1.prototype.resolveUsernameToAddress = function (_username) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    // TODO: Integrate with usernames module to resolve username to Stellar address
                    // For now, return null - in production this would query the usernames table
                    this.logger.warn('Username resolution not yet implemented');
                    return [2 /*return*/, null];
                });
            });
        };
        return RecurringPaymentsScheduler_1;
    }());
    __setFunctionName(_classThis, "RecurringPaymentsScheduler");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _checkAndExecutePendingPayments_decorators = [(0, schedule_1.Cron)(schedule_1.CronExpression.EVERY_MINUTE)];
        _sendUpcomingPaymentNotifications_decorators = [(0, schedule_1.Cron)(schedule_1.CronExpression.EVERY_HOUR)];
        __esDecorate(_classThis, null, _checkAndExecutePendingPayments_decorators, { kind: "method", name: "checkAndExecutePendingPayments", static: false, private: false, access: { has: function (obj) { return "checkAndExecutePendingPayments" in obj; }, get: function (obj) { return obj.checkAndExecutePendingPayments; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _sendUpcomingPaymentNotifications_decorators, { kind: "method", name: "sendUpcomingPaymentNotifications", static: false, private: false, access: { has: function (obj) { return "sendUpcomingPaymentNotifications" in obj; }, get: function (obj) { return obj.sendUpcomingPaymentNotifications; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        RecurringPaymentsScheduler = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return RecurringPaymentsScheduler = _classThis;
}();
exports.RecurringPaymentsScheduler = RecurringPaymentsScheduler;
