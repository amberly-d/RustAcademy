"use strict";
/**
 * Job Queue System - Initializer Service
 *
 * Registers all job handlers with their retry policies at application startup.
 * This service implements OnModuleInit to ensure handlers are registered
 * before the JobExecutor starts processing jobs.
 *
 * Requirements: 1.3, 7.1
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
exports.JobQueueInitializer = void 0;
var common_1 = require("@nestjs/common");
var types_1 = require("./types");
/**
 * Job Queue Initializer Service
 *
 * Responsible for registering all job handlers with their retry policies
 * at application startup. This ensures the JobRegistry is fully populated
 * before the JobExecutor begins polling for jobs.
 */
var JobQueueInitializer = function () {
    var _classDecorators = [(0, common_1.Injectable)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var JobQueueInitializer = _classThis = /** @class */ (function () {
        function JobQueueInitializer_1(registry, webhookDeliveryHandler, recurringPaymentHandler, exportGenerationHandler, reconciliationHandler, stellarReconnectHandler) {
            this.registry = registry;
            this.webhookDeliveryHandler = webhookDeliveryHandler;
            this.recurringPaymentHandler = recurringPaymentHandler;
            this.exportGenerationHandler = exportGenerationHandler;
            this.reconciliationHandler = reconciliationHandler;
            this.stellarReconnectHandler = stellarReconnectHandler;
            this.logger = new common_1.Logger(JobQueueInitializer.name);
        }
        /**
         * Register all job handlers on module initialization
         *
         * This method is called by NestJS after the module's dependencies are resolved
         * but before the application starts accepting requests.
         *
         * **Validates: Requirements 1.3, 7.1, 8.1, 9.1, 10.1, 11.1**
         */
        JobQueueInitializer_1.prototype.onModuleInit = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    this.logger.log('Registering job handlers...');
                    // Register webhook_delivery handler
                    // Requirements: 7.1
                    this.registry.registerHandler(types_1.JobType.WEBHOOK_DELIVERY, this.webhookDeliveryHandler, {
                        maxAttempts: 5,
                        backoffStrategy: 'exponential',
                        initialDelayMs: 60000, // 1 minute
                        maxDelayMs: 7200000, // 2 hours
                        visibilityTimeoutMs: 300000, // 5 minutes
                    });
                    // Register recurring_payment handler
                    // Requirements: 8.1
                    this.registry.registerHandler(types_1.JobType.RECURRING_PAYMENT, this.recurringPaymentHandler, {
                        maxAttempts: 3,
                        backoffStrategy: 'exponential',
                        initialDelayMs: 60000, // 1 minute
                        maxDelayMs: 3600000, // 1 hour
                        visibilityTimeoutMs: 600000, // 10 minutes
                    });
                    // Register export_generation handler
                    // Requirements: 9.1
                    this.registry.registerHandler(types_1.JobType.EXPORT_GENERATION, this.exportGenerationHandler, {
                        maxAttempts: 2,
                        backoffStrategy: 'fixed',
                        initialDelayMs: 300000, // 5 minutes
                        maxDelayMs: 300000, // 5 minutes (fixed strategy)
                        visibilityTimeoutMs: 600000, // 10 minutes
                    });
                    // Register reconciliation handler
                    // Requirements: 10.1
                    this.registry.registerHandler(types_1.JobType.RECONCILIATION, this.reconciliationHandler, {
                        maxAttempts: 1,
                        backoffStrategy: 'fixed',
                        initialDelayMs: 0, // No delay (immediate retry if needed)
                        maxDelayMs: 0, // No delay (fixed strategy)
                        visibilityTimeoutMs: 300000, // 5 minutes
                    });
                    // Register stellar_reconnect handler
                    // Requirements: 11.1
                    this.registry.registerHandler(types_1.JobType.STELLAR_RECONNECT, this.stellarReconnectHandler, {
                        maxAttempts: 0, // Unlimited retries
                        backoffStrategy: 'exponential',
                        initialDelayMs: 1000, // 1 second
                        maxDelayMs: 60000, // 1 minute
                        visibilityTimeoutMs: 120000, // 2 minutes
                    });
                    this.logger.log('Job handler registration complete');
                    return [2 /*return*/];
                });
            });
        };
        return JobQueueInitializer_1;
    }());
    __setFunctionName(_classThis, "JobQueueInitializer");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        JobQueueInitializer = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return JobQueueInitializer = _classThis;
}();
exports.JobQueueInitializer = JobQueueInitializer;
