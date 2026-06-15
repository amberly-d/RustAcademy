"use strict";
/**
 * Job Queue System - Job Registry Service
 *
 * Maintains the mapping of job types to their handlers and retry policies.
 * Allows registration at application startup and retrieval during job execution.
 *
 * **Validates: Requirements 1.3, 1.4**
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
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JobRegistry = void 0;
var common_1 = require("@nestjs/common");
/**
 * Registry service for job handlers and retry policies
 *
 * This service maintains the mapping between job types and their:
 * - Handler implementations (execute, validate, onFailure)
 * - Retry policies (maxAttempts, backoff strategy, delays)
 *
 * Handlers and policies are registered at application startup and
 * retrieved during job execution by the JobExecutor.
 */
var JobRegistry = function () {
    var _classDecorators = [(0, common_1.Injectable)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var JobRegistry = _classThis = /** @class */ (function () {
        function JobRegistry_1() {
            this.logger = new common_1.Logger(JobRegistry.name);
            /**
             * Map of job types to their handler implementations
             */
            this.handlers = new Map();
            /**
             * Map of job types to their retry policies
             */
            this.policies = new Map();
        }
        /**
         * Register a job handler with its retry policy
         *
         * @param type - Job type to register
         * @param handler - Handler implementation for this job type
         * @param policy - Retry policy configuration for this job type
         *
         * **Validates: Requirement 1.3** - Support registering Job_Type handlers at application startup
         */
        JobRegistry_1.prototype.registerHandler = function (type, handler, policy) {
            if (this.handlers.has(type)) {
                this.logger.warn("Overwriting existing handler for job type: ".concat(type));
            }
            this.handlers.set(type, handler);
            this.policies.set(type, policy);
            this.logger.log("Registered handler for job type: ".concat(type, " ") +
                "(maxAttempts: ".concat(policy.maxAttempts, ", backoff: ").concat(policy.backoffStrategy, ")"));
        };
        /**
         * Get the handler for a specific job type
         *
         * @param type - Job type
         * @returns The registered handler
         * @throws Error if no handler is registered for this type
         *
         * **Validates: Requirement 1.4** - Validate that a corresponding Job_Handler exists
         */
        JobRegistry_1.prototype.getHandler = function (type) {
            var handler = this.handlers.get(type);
            if (!handler) {
                throw new Error("No handler registered for job type: ".concat(type));
            }
            return handler;
        };
        /**
         * Get the retry policy for a specific job type
         *
         * @param type - Job type
         * @returns The registered retry policy
         * @throws Error if no policy is registered for this type
         */
        JobRegistry_1.prototype.getPolicy = function (type) {
            var policy = this.policies.get(type);
            if (!policy) {
                throw new Error("No retry policy registered for job type: ".concat(type));
            }
            return policy;
        };
        /**
         * Check if a job type is registered
         *
         * @param type - Job type to check
         * @returns True if the job type has a registered handler and policy
         *
         * **Validates: Requirement 1.4** - Validate that a corresponding Job_Handler exists
         */
        JobRegistry_1.prototype.isRegistered = function (type) {
            return this.handlers.has(type) && this.policies.has(type);
        };
        /**
         * Get all registered job types
         *
         * @returns Array of registered job types
         */
        JobRegistry_1.prototype.getRegisteredTypes = function () {
            return Array.from(this.handlers.keys());
        };
        /**
         * Clear all registered handlers and policies
         *
         * Primarily used for testing purposes
         */
        JobRegistry_1.prototype.clear = function () {
            this.handlers.clear();
            this.policies.clear();
            this.logger.debug('Cleared all registered handlers and policies');
        };
        return JobRegistry_1;
    }());
    __setFunctionName(_classThis, "JobRegistry");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        JobRegistry = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return JobRegistry = _classThis;
}();
exports.JobRegistry = JobRegistry;
