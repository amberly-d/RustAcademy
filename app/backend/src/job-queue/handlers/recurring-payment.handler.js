"use strict";
/**
 * Job Queue System - Recurring Payment Handler
 *
 * Implements the JobHandler interface for recurring payment jobs.
 * Submits Stellar transactions for scheduled recurring payments.
 *
 * Requirements: 8.3, 8.4, 8.5, 15.4, 15.5
 */
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
exports.RecurringPaymentHandler = void 0;
var common_1 = require("@nestjs/common");
var recurring_payment_dto_1 = require("../../links/dto/recurring-payment.dto");
var webhook_delivery_handler_1 = require("./webhook-delivery.handler");
/**
 * Recurring Payment Handler
 *
 * Submits Stellar transactions for recurring payments.
 * Classifies Stellar errors as transient (tx_bad_seq, tx_insufficient_fee) or permanent (tx_bad_auth, tx_malformed).
 * Marks execution records as failed when job exhausts retries.
 */
var RecurringPaymentHandler = function () {
    var _classDecorators = [(0, common_1.Injectable)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var RecurringPaymentHandler = _classThis = /** @class */ (function () {
        function RecurringPaymentHandler_1(paymentProcessor, recurringPaymentsRepo) {
            this.paymentProcessor = paymentProcessor;
            this.recurringPaymentsRepo = recurringPaymentsRepo;
            this.logger = new common_1.Logger(RecurringPaymentHandler.name);
        }
        /**
         * Execute recurring payment
         *
         * Submits a Stellar transaction for the recurring payment.
         * Checks cancellation token before transaction submission.
         *
         * @param job - The recurring payment job
         * @param cancellationToken - Token to check for cancellation
         * @throws PermanentJobError for permanent Stellar errors (tx_bad_auth, tx_malformed, etc.)
         * @throws Error for transient Stellar errors (tx_bad_seq, tx_insufficient_fee)
         *
         * **Validates: Requirements 8.3, 8.4, 8.5**
         */
        RecurringPaymentHandler_1.prototype.execute = function (job, cancellationToken) {
            return __awaiter(this, void 0, void 0, function () {
                var _a, recurringLinkId, executionId, recipientAddress, amount, asset, assetIssuer, memo, memoType, transactionHash, error_1, errorMessage;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            // Check cancellation token before transaction submission
                            cancellationToken.throwIfCancelled();
                            _a = job.payload, recurringLinkId = _a.recurringLinkId, executionId = _a.executionId, recipientAddress = _a.recipientAddress, amount = _a.amount, asset = _a.asset, assetIssuer = _a.assetIssuer, memo = _a.memo, memoType = _a.memoType;
                            this.logger.log("Executing recurring payment: ".concat(amount, " ").concat(asset, " to ").concat(recipientAddress, " (linkId: ").concat(recurringLinkId, ", executionId: ").concat(executionId, ", jobId: ").concat(job.id, ")"));
                            _b.label = 1;
                        case 1:
                            _b.trys.push([1, 5, , 6]);
                            return [4 /*yield*/, this.paymentProcessor.submitRecurringPayment({
                                    recipientAddress: recipientAddress,
                                    amount: parseFloat(amount),
                                    assetCode: asset,
                                    assetIssuer: assetIssuer,
                                    memo: memo,
                                    memoType: memoType,
                                    referenceId: recurringLinkId,
                                })];
                        case 2:
                            transactionHash = _b.sent();
                            // Update execution record with success
                            return [4 /*yield*/, this.recurringPaymentsRepo.updateExecutionStatus(executionId, recurring_payment_dto_1.ExecutionStatus.SUCCESS, {
                                    executedAt: new Date(),
                                    transactionHash: transactionHash,
                                })];
                        case 3:
                            // Update execution record with success
                            _b.sent();
                            // Increment executed count on the recurring link
                            return [4 /*yield*/, this.recurringPaymentsRepo.incrementExecutedCount(recurringLinkId)];
                        case 4:
                            // Increment executed count on the recurring link
                            _b.sent();
                            this.logger.log("Recurring payment executed successfully (txHash: ".concat(transactionHash, ", executionId: ").concat(executionId, ", jobId: ").concat(job.id, ")"));
                            return [3 /*break*/, 6];
                        case 5:
                            error_1 = _b.sent();
                            errorMessage = error_1 instanceof Error ? error_1.message : 'Unknown error';
                            this.logger.error("Recurring payment failed (executionId: ".concat(executionId, ", jobId: ").concat(job.id, "): ").concat(errorMessage), error_1 instanceof Error ? error_1.stack : undefined);
                            // Classify Stellar errors
                            if (this.isPermanentStellarError(error_1)) {
                                this.logger.error("Permanent Stellar error detected (executionId: ".concat(executionId, ", jobId: ").concat(job.id, ") - no retry"));
                                throw new webhook_delivery_handler_1.PermanentJobError("Permanent Stellar error: ".concat(errorMessage));
                            }
                            // Transient error - will retry
                            this.logger.warn("Transient Stellar error detected (executionId: ".concat(executionId, ", jobId: ").concat(job.id, ") - will retry"));
                            throw new Error("Transient Stellar error: ".concat(errorMessage));
                        case 6: return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * Validate recurring payment payload
         *
         * Checks that required fields are present:
         * - recurringLinkId: ID of the recurring link configuration
         * - recipientAddress: Stellar address to send payment to
         * - amount: Payment amount
         * - asset: Asset code (e.g., 'XLM', 'USDC')
         *
         * @param payload - The recurring payment payload
         * @throws PermanentJobError if validation fails
         *
         * **Validates: Requirements 8.4, 15.4, 15.5**
         */
        RecurringPaymentHandler_1.prototype.validate = function (payload) {
            return __awaiter(this, void 0, void 0, function () {
                var errors, amountNum;
                return __generator(this, function (_a) {
                    errors = [];
                    if (!payload.recurringLinkId || typeof payload.recurringLinkId !== 'string') {
                        errors.push('recurringLinkId is required and must be a string');
                    }
                    if (!payload.executionId || typeof payload.executionId !== 'string') {
                        errors.push('executionId is required and must be a string');
                    }
                    if (!payload.recipientAddress || typeof payload.recipientAddress !== 'string') {
                        errors.push('recipientAddress is required and must be a string');
                    }
                    if (!payload.amount || typeof payload.amount !== 'string') {
                        errors.push('amount is required and must be a string');
                    }
                    if (!payload.asset || typeof payload.asset !== 'string') {
                        errors.push('asset is required and must be a string');
                    }
                    // Validate amount is a valid number
                    if (payload.amount) {
                        amountNum = parseFloat(payload.amount);
                        if (isNaN(amountNum) || amountNum <= 0) {
                            errors.push('amount must be a positive number');
                        }
                    }
                    // Validate Stellar address format (basic check)
                    if (payload.recipientAddress && !this.isValidStellarAddress(payload.recipientAddress)) {
                        errors.push('recipientAddress must be a valid Stellar address');
                    }
                    if (errors.length > 0) {
                        throw new webhook_delivery_handler_1.PermanentJobError("Validation failed: ".concat(errors.join(', ')));
                    }
                    return [2 /*return*/];
                });
            });
        };
        /**
         * Handle job failure
         *
         * Marks the execution record as permanently failed when the job exhausts all retry attempts.
         * This is called when the job moves to the Dead Letter Queue.
         *
         * @param job - The failed job
         * @param error - The error that caused the failure
         *
         * **Validates: Requirements 8.5**
         */
        RecurringPaymentHandler_1.prototype.onFailure = function (job, error) {
            return __awaiter(this, void 0, void 0, function () {
                var _a, recurringLinkId, executionId, updateError_1;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _a = job.payload, recurringLinkId = _a.recurringLinkId, executionId = _a.executionId;
                            this.logger.error("Recurring payment permanently failed (linkId: ".concat(recurringLinkId, ", executionId: ").concat(executionId, ", jobId: ").concat(job.id, "): ").concat(error.message));
                            _b.label = 1;
                        case 1:
                            _b.trys.push([1, 3, , 4]);
                            return [4 /*yield*/, this.recurringPaymentsRepo.updateExecutionStatus(executionId, recurring_payment_dto_1.ExecutionStatus.FAILED, {
                                    failureReason: error.message,
                                    lastRetryAt: new Date(),
                                })];
                        case 2:
                            _b.sent();
                            return [3 /*break*/, 4];
                        case 3:
                            updateError_1 = _b.sent();
                            this.logger.error("Failed to update execution status to failed (executionId: ".concat(executionId, ", jobId: ").concat(job.id, "): ").concat(updateError_1 instanceof Error ? updateError_1.message : 'Unknown error'));
                            return [3 /*break*/, 4];
                        case 4: return [2 /*return*/];
                    }
                });
            });
        };
        // ---------------------------------------------------------------------------
        // Private Helper Methods
        // ---------------------------------------------------------------------------
        /**
         * Check if a Stellar error is permanent (no retry)
         *
         * Permanent errors:
         * - tx_bad_auth: Invalid signature or authorization
         * - tx_malformed: Malformed transaction
         * - tx_bad_auth_extra: Extra unauthorized signatures
         * - tx_insufficient_balance: Insufficient balance (permanent for this attempt)
         * - op_no_destination: Destination account doesn't exist
         * - op_malformed: Malformed operation
         * - op_underfunded: Source account underfunded
         *
         * Transient errors:
         * - tx_bad_seq: Bad sequence number (can retry with updated sequence)
         * - tx_insufficient_fee: Fee too low (can retry with higher fee)
         * - tx_too_late: Transaction expired (can retry with new timebounds)
         * - tx_too_early: Transaction not yet valid (can retry later)
         * - Network errors, timeouts, etc.
         */
        RecurringPaymentHandler_1.prototype.isPermanentStellarError = function (error) {
            if (!(error instanceof Error)) {
                return false;
            }
            var errorMessage = error.message.toLowerCase();
            // Check for permanent Stellar error codes
            var permanentErrorCodes = [
                'tx_bad_auth',
                'tx_malformed',
                'tx_bad_auth_extra',
                'tx_insufficient_balance',
                'op_no_destination',
                'op_malformed',
                'op_underfunded',
                'op_line_full',
                'op_no_trust',
                'op_not_authorized',
            ];
            for (var _i = 0, permanentErrorCodes_1 = permanentErrorCodes; _i < permanentErrorCodes_1.length; _i++) {
                var code = permanentErrorCodes_1[_i];
                if (errorMessage.includes(code)) {
                    return true;
                }
            }
            // Check for transient Stellar error codes (explicitly not permanent)
            var transientErrorCodes = [
                'tx_bad_seq',
                'tx_insufficient_fee',
                'tx_too_late',
                'tx_too_early',
            ];
            for (var _a = 0, transientErrorCodes_1 = transientErrorCodes; _a < transientErrorCodes_1.length; _a++) {
                var code = transientErrorCodes_1[_a];
                if (errorMessage.includes(code)) {
                    return false;
                }
            }
            // Network errors are transient
            if (errorMessage.includes('network') ||
                errorMessage.includes('timeout') ||
                errorMessage.includes('econnrefused') ||
                errorMessage.includes('enotfound')) {
                return false;
            }
            // Default to transient for unknown errors (safer to retry)
            return false;
        };
        /**
         * Validate Stellar address format
         *
         * Basic validation: must start with 'G' and be 56 characters long
         */
        RecurringPaymentHandler_1.prototype.isValidStellarAddress = function (address) {
            return address.length === 56 && address.startsWith('G');
        };
        return RecurringPaymentHandler_1;
    }());
    __setFunctionName(_classThis, "RecurringPaymentHandler");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        RecurringPaymentHandler = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return RecurringPaymentHandler = _classThis;
}();
exports.RecurringPaymentHandler = RecurringPaymentHandler;
