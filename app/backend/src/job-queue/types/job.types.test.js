"use strict";
/**
 * Basic type checking tests for job queue types
 * These tests verify that the types are correctly defined and can be used
 */
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
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../index");
describe('Job Queue Types', function () {
    describe('JobType enum', function () {
        it('should have all 5 job types defined', function () {
            expect(index_1.JobType.WEBHOOK_DELIVERY).toBe('webhook_delivery');
            expect(index_1.JobType.RECURRING_PAYMENT).toBe('recurring_payment');
            expect(index_1.JobType.EXPORT_GENERATION).toBe('export_generation');
            expect(index_1.JobType.RECONCILIATION).toBe('reconciliation');
            expect(index_1.JobType.STELLAR_RECONNECT).toBe('stellar_reconnect');
        });
    });
    describe('JobStatus enum', function () {
        it('should have all 5 job statuses defined', function () {
            expect(index_1.JobStatus.PENDING).toBe('pending');
            expect(index_1.JobStatus.RUNNING).toBe('running');
            expect(index_1.JobStatus.COMPLETED).toBe('completed');
            expect(index_1.JobStatus.FAILED).toBe('failed');
            expect(index_1.JobStatus.CANCELLED).toBe('cancelled');
        });
    });
    describe('Job interface', function () {
        it('should allow creating a valid job object', function () {
            var job = {
                id: '123e4567-e89b-12d3-a456-426614174000',
                type: index_1.JobType.WEBHOOK_DELIVERY,
                payload: {
                    recipientPublicKey: 'GABC123',
                    webhookUrl: 'https://example.com/webhook',
                    eventType: 'payment.received',
                    eventId: 'evt_123',
                    payload: { amount: '100' },
                },
                status: index_1.JobStatus.PENDING,
                attempts: 0,
                maxAttempts: 5,
                createdAt: new Date(),
                scheduledAt: new Date(),
                startedAt: null,
                completedAt: null,
                failureReason: null,
                visibilityTimeout: null,
            };
            expect(job.type).toBe(index_1.JobType.WEBHOOK_DELIVERY);
            expect(job.status).toBe(index_1.JobStatus.PENDING);
            expect(job.payload.webhookUrl).toBe('https://example.com/webhook');
        });
    });
    describe('RetryPolicy interface', function () {
        it('should allow creating a valid retry policy', function () {
            var policy = {
                maxAttempts: 5,
                backoffStrategy: 'exponential',
                initialDelayMs: 60000,
                maxDelayMs: 7200000,
                visibilityTimeoutMs: 300000,
            };
            expect(policy.maxAttempts).toBe(5);
            expect(policy.backoffStrategy).toBe('exponential');
        });
        it('should support all backoff strategies', function () {
            var fixed = 'fixed';
            var linear = 'linear';
            var exponential = 'exponential';
            expect(fixed).toBe('fixed');
            expect(linear).toBe('linear');
            expect(exponential).toBe('exponential');
        });
    });
    describe('Job Payload interfaces', function () {
        it('should allow creating WebhookDeliveryPayload', function () {
            var payload = {
                recipientPublicKey: 'GABC123',
                webhookUrl: 'https://example.com/webhook',
                eventType: 'payment.received',
                eventId: 'evt_123',
                payload: { amount: '100' },
            };
            expect(payload.eventType).toBe('payment.received');
        });
        it('should allow creating RecurringPaymentPayload', function () {
            var payload = {
                recurringLinkId: 'link_123',
                executionId: 'exec_456',
                recipientAddress: 'GDEF456',
                amount: '50.00',
                asset: 'USDC',
                assetIssuer: 'GISSUER',
                memo: 'Monthly payment',
                memoType: 'text',
            };
            expect(payload.asset).toBe('USDC');
        });
        it('should allow creating ExportGenerationPayload', function () {
            var payload = {
                userId: 'user_123',
                exportType: 'transactions',
                filters: { startDate: '2024-01-01' },
                format: 'csv',
                deliveryMethod: 'download',
            };
            expect(payload.exportType).toBe('transactions');
        });
        it('should allow creating ReconciliationPayload', function () {
            var payload = {
                batchSize: 100,
                startLedger: 1000,
                endLedger: 2000,
            };
            expect(payload.batchSize).toBe(100);
        });
        it('should allow creating StellarReconnectPayload', function () {
            var payload = {
                contractId: 'contract_123',
                lastCursor: 'cursor_abc',
            };
            expect(payload.contractId).toBe('contract_123');
        });
    });
    describe('CancellationToken interface', function () {
        it('should define required methods', function () {
            var token = {
                isCancelled: function () { return false; },
                throwIfCancelled: function () { },
            };
            expect(token.isCancelled()).toBe(false);
            expect(function () { return token.throwIfCancelled(); }).not.toThrow();
        });
    });
    describe('JobHandler interface', function () {
        it('should define required methods', function () {
            var handler = {
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                execute: function (_job, _token) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                    return [2 /*return*/];
                }); }); },
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                validate: function (_payload) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                    return [2 /*return*/];
                }); }); },
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                onFailure: function (_job, _error) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                    return [2 /*return*/];
                }); }); },
            };
            expect(handler.execute).toBeDefined();
            expect(handler.validate).toBeDefined();
            expect(handler.onFailure).toBeDefined();
        });
    });
});
