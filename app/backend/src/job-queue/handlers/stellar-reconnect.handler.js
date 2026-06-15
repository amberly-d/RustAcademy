"use strict";
/**
 * Job Queue System - Stellar Reconnect Handler
 *
 * Implements the JobHandler interface for Stellar SSE stream reconnection jobs.
 * Reopens SSE streams from the last cursor after disconnection.
 *
 * Requirements: 11.3, 11.4, 15.4, 15.5
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
exports.StellarReconnectHandler = void 0;
var common_1 = require("@nestjs/common");
var webhook_delivery_handler_1 = require("./webhook-delivery.handler");
/**
 * Stellar Reconnect Handler
 *
 * Handles reconnection of Stellar SSE streams after disconnection.
 * This handler is designed to run with unlimited retries (maxAttempts=0)
 * and exponential backoff to ensure eventual reconnection.
 *
 * The handler delegates to StellarIngestionService which manages the
 * actual SSE stream lifecycle and cursor management.
 */
var StellarReconnectHandler = function () {
    var _classDecorators = [(0, common_1.Injectable)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var StellarReconnectHandler = _classThis = /** @class */ (function () {
        function StellarReconnectHandler_1(stellarIngestionService) {
            this.stellarIngestionService = stellarIngestionService;
            this.logger = new common_1.Logger(StellarReconnectHandler.name);
        }
        /**
         * Execute SSE stream reconnection
         *
         * Reopens the SSE stream for the specified contract ID from the last cursor.
         * The StellarIngestionService handles cursor management and will resume
         * event processing from where it left off.
         *
         * @param job - The reconnection job
         * @param cancellationToken - Token to check for cancellation
         * @throws Error on transient failures (network errors, Horizon unavailable)
         * @throws PermanentJobError on validation failures
         *
         * **Validates: Requirements 11.3, 11.4**
         */
        StellarReconnectHandler_1.prototype.execute = function (job, cancellationToken) {
            return __awaiter(this, void 0, void 0, function () {
                var _a, contractId, lastCursor, error_1;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _a = job.payload, contractId = _a.contractId, lastCursor = _a.lastCursor;
                            this.logger.log("Attempting to reconnect SSE stream (jobId: ".concat(job.id, ", ") +
                                "contractId: ".concat(contractId, ", lastCursor: ").concat(lastCursor, ")"));
                            // Check cancellation before attempting reconnection
                            cancellationToken.throwIfCancelled();
                            _b.label = 1;
                        case 1:
                            _b.trys.push([1, 3, , 4]);
                            // Start streaming - this will open a new SSE connection
                            // The StellarIngestionService will automatically resume from the last cursor
                            // stored in the cursor repository
                            return [4 /*yield*/, this.stellarIngestionService.startStreaming(contractId)];
                        case 2:
                            // Start streaming - this will open a new SSE connection
                            // The StellarIngestionService will automatically resume from the last cursor
                            // stored in the cursor repository
                            _b.sent();
                            this.logger.log("SSE stream reconnected successfully (jobId: ".concat(job.id, ", ") +
                                "contractId: ".concat(contractId, ")"));
                            return [3 /*break*/, 4];
                        case 3:
                            error_1 = _b.sent();
                            // Log error with context
                            this.logger.error("SSE stream reconnection failed (jobId: ".concat(job.id, ", ") +
                                "contractId: ".concat(contractId, "): ").concat(error_1.message), error_1.stack);
                            // Re-throw to trigger job retry with exponential backoff
                            // Most reconnection errors are transient (network issues, Horizon unavailable)
                            throw error_1;
                        case 4: return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * Validate reconnection payload
         *
         * Checks that required fields are present:
         * - contractId: Stellar contract ID to reconnect to (must be non-empty string)
         * - lastCursor: Last cursor position before disconnection (must be non-empty string)
         *
         * @param payload - The reconnection payload
         * @throws PermanentJobError if validation fails
         *
         * **Validates: Requirements 11.3, 15.4, 15.5**
         */
        StellarReconnectHandler_1.prototype.validate = function (payload) {
            return __awaiter(this, void 0, void 0, function () {
                var errors;
                return __generator(this, function (_a) {
                    errors = [];
                    // Validate contractId
                    if (!payload.contractId || typeof payload.contractId !== 'string') {
                        errors.push('contractId is required and must be a string');
                    }
                    else if (payload.contractId.trim().length === 0) {
                        errors.push('contractId cannot be empty');
                    }
                    // Validate lastCursor
                    if (!payload.lastCursor || typeof payload.lastCursor !== 'string') {
                        errors.push('lastCursor is required and must be a string');
                    }
                    else if (payload.lastCursor.trim().length === 0) {
                        errors.push('lastCursor cannot be empty');
                    }
                    if (errors.length > 0) {
                        throw new webhook_delivery_handler_1.PermanentJobError("Validation failed: ".concat(errors.join(', ')));
                    }
                    return [2 /*return*/];
                });
            });
        };
        /**
         * Handle reconnection failure
         *
         * Logs reconnection failure for monitoring and alerting.
         * Since this handler runs with unlimited retries, this method should
         * rarely be called. If it is called, it indicates a persistent issue
         * that requires manual intervention.
         *
         * @param job - The failed job
         * @param error - The error that caused the failure
         *
         * **Validates: Requirements 11.4**
         */
        StellarReconnectHandler_1.prototype.onFailure = function (job, error) {
            return __awaiter(this, void 0, void 0, function () {
                var _a, contractId, lastCursor;
                return __generator(this, function (_b) {
                    _a = job.payload, contractId = _a.contractId, lastCursor = _a.lastCursor;
                    this.logger.error("SSE stream reconnection permanently failed (jobId: ".concat(job.id, ", ") +
                        "contractId: ".concat(contractId, ", lastCursor: ").concat(lastCursor, "): ").concat(error.message), error.stack);
                    return [2 /*return*/];
                });
            });
        };
        return StellarReconnectHandler_1;
    }());
    __setFunctionName(_classThis, "StellarReconnectHandler");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        StellarReconnectHandler = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return StellarReconnectHandler = _classThis;
}();
exports.StellarReconnectHandler = StellarReconnectHandler;
