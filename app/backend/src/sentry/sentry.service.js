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
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SentryService = void 0;
var common_1 = require("@nestjs/common");
var Sentry = require("@sentry/node");
/**
 * SentryService provides a clean, injectable interface to Sentry's
 * error-reporting and context-setting capabilities.
 *
 * Usage:
 *   constructor(private readonly sentry: SentryService) {}
 *
 *   this.sentry.captureException(error, { orderId: '123' });
 *   this.sentry.captureMessage('Horizon API unreachable', 'fatal');
 */
var SentryService = function () {
    var _classDecorators = [(0, common_1.Injectable)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var SentryService = _classThis = /** @class */ (function () {
        function SentryService_1() {
            this.logger = new common_1.Logger(SentryService.name);
        }
        Object.defineProperty(SentryService_1.prototype, "isEnabled", {
            /**
             * Check whether Sentry is initialised (i.e. a DSN was provided).
             */
            get: function () {
                return !!Sentry.getClient();
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Capture an exception and send it to Sentry with optional extra context.
         *
         * @param exception  The error to report
         * @param extras     Additional key-value pairs to attach (no sensitive data!)
         */
        SentryService_1.prototype.captureException = function (exception, extras) {
            if (!this.isEnabled) {
                this.logger.warn('Sentry is not initialised — exception not reported remotely.');
                return undefined;
            }
            return Sentry.captureException(exception, function (scope) {
                if (extras) {
                    scope.setExtras(extras);
                }
                return scope;
            });
        };
        /**
         * Capture an informational or warning message.
         *
         * @param message  Human-readable description of the event
         * @param level    Sentry severity level
         * @param extras   Additional context
         */
        SentryService_1.prototype.captureMessage = function (message, level, extras) {
            if (level === void 0) { level = 'info'; }
            if (!this.isEnabled) {
                this.logger.warn('Sentry is not initialised — message not reported remotely.');
                return undefined;
            }
            return Sentry.captureMessage(message, function (scope) {
                scope.setLevel(level);
                if (extras) {
                    scope.setExtras(extras);
                }
                return scope;
            });
        };
        /**
         * Set user context on the current Sentry scope.
         * Call this after authentication to tag all subsequent events.
         */
        SentryService_1.prototype.setUser = function (user) {
            Sentry.setUser(__assign({ id: user.id, username: user.username }, (user.wallet ? { wallet: user.wallet } : {})));
        };
        /**
         * Clear user context (e.g. on logout / request end).
         */
        SentryService_1.prototype.clearUser = function () {
            Sentry.setUser(null);
        };
        /**
         * Add a custom breadcrumb to the current Sentry scope.
         * Useful for tracing business-logic steps (e.g. "started Stellar payment").
         */
        SentryService_1.prototype.addBreadcrumb = function (breadcrumb) {
            Sentry.addBreadcrumb({
                category: breadcrumb.category,
                message: breadcrumb.message,
                level: breadcrumb.level || 'info',
                data: breadcrumb.data,
            });
        };
        /**
         * Set a custom tag on the current scope.
         * Tags are indexed and searchable in the Sentry dashboard.
         */
        SentryService_1.prototype.setTag = function (key, value) {
            Sentry.setTag(key, value);
        };
        /**
         * Set extra context on the current scope.
         */
        SentryService_1.prototype.setExtra = function (key, value) {
            Sentry.setExtra(key, value);
        };
        return SentryService_1;
    }());
    __setFunctionName(_classThis, "SentryService");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        SentryService = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return SentryService = _classThis;
}();
exports.SentryService = SentryService;
