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
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RedactionService = void 0;
var common_1 = require("@nestjs/common");
/**
 * Service responsible for redacting sensitive information from logs and crash reports.
 * Ensures no secrets, keys, or PII are included in captured data.
 */
var RedactionService = function () {
    var _classDecorators = [(0, common_1.Injectable)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var RedactionService = _classThis = /** @class */ (function () {
        function RedactionService_1() {
            // Patterns for sensitive data that should be redacted
            this.sensitivePatterns = [
                // Stellar keys
                { pattern: /G[A-Z0-9]{55}/gi, replacement: '[REDACTED_PUBLIC_KEY]' },
                { pattern: /S[A-Z0-9]{55}/gi, replacement: '[REDACTED_SECRET_KEY]' },
                // Bearer tokens (must come before JWT pattern to handle "Bearer eyJ..." as a token)
                { pattern: /Bearer\s+[A-Za-z0-9\-._~+/]+=*/gi, replacement: 'Bearer [REDACTED_TOKEN]' },
                // JWT tokens
                { pattern: /eyJ[A-Za-z0-9\-_]+\.eyJ[A-Za-z0-9\-_]+\.[A-Za-z0-9\-_]+/gi, replacement: '[REDACTED_JWT]' },
                // API keys and tokens (more specific patterns first)
                { pattern: /api[_-]?\s*key\s*[:=]\s*[A-Za-z0-9\-._~+/]+/gi, replacement: 'api_key=[REDACTED_API_KEY]' },
                { pattern: /\b[A-Za-z][A-Za-z0-9]*_key_[A-Za-z0-9._~+/=-]+\b/gi, replacement: '[REDACTED_API_KEY]' },
                { pattern: /token["\s:=]+(?!eyJ)[A-Za-z0-9\-._~+/]+/gi, replacement: 'token=[REDACTED_TOKEN]' },
                { pattern: /secret["\s:=]+[A-Za-z0-9\-._~+/]+/gi, replacement: 'secret=[REDACTED_SECRET]' },
                { pattern: /password["\s:=]+[^\s"',}]+/gi, replacement: 'password=[REDACTED_PASSWORD]' },
                // Email addresses (PII)
                { pattern: /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/gi, replacement: '[REDACTED_EMAIL]' },
                // IP addresses (PII)
                { pattern: /\b(?:\d{1,3}\.){3}\d{1,3}\b/g, replacement: '[REDACTED_IP]' },
                { pattern: /\b(?:[0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}\b/g, replacement: '[REDACTED_IPV6]' },
                // Credit card numbers (PII)
                { pattern: /\b\d{4}[\s-]?\d{4}[\s-]?\d{4}[\s-]?\d{4}\b/g, replacement: '[REDACTED_CARD]' },
                // Phone numbers (PII)
                { pattern: /\b\+?[\d\s()-]{10,}\b/g, replacement: '[REDACTED_PHONE]' },
                // Authorization headers
                { pattern: /authorization["\s:=]+(?!Bearer)[^\s"',}]+/gi, replacement: 'authorization=[REDACTED_AUTH]' },
                // Database connection strings
                { pattern: /postgres:\/\/[^\s"']+/gi, replacement: 'postgres://[REDACTED_DB_CONNECTION]' },
                { pattern: /mongodb:\/\/[^\s"']+/gi, replacement: 'mongodb://[REDACTED_DB_CONNECTION]' },
                // Environment variable values in logs
                { pattern: /(SUPABASE_SERVICE_ROLE_KEY|STELLAR_SECRET_KEY|SENDGRID_API_KEY|EXPO_ACCESS_TOKEN|API_KEYS)["\s:=]+[^\s"',}]+/gi, replacement: '$1=[REDACTED]' },
            ];
        }
        /**
         * Redact sensitive information from a string
         * @param text - The text to redact
         * @returns The redacted text
         */
        RedactionService_1.prototype.redact = function (text) {
            if (!text) {
                return text;
            }
            var redacted = text;
            for (var _i = 0, _a = this.sensitivePatterns; _i < _a.length; _i++) {
                var _b = _a[_i], pattern = _b.pattern, replacement = _b.replacement;
                redacted = redacted.replace(pattern, replacement);
            }
            return redacted;
        };
        /**
         * Redact sensitive information from an object
         * @param obj - The object to redact
         * @returns A new object with redacted values
         */
        RedactionService_1.prototype.redactObject = function (obj) {
            var _this = this;
            if (obj === null || obj === undefined) {
                return obj;
            }
            if (typeof obj === 'string') {
                return this.redact(obj);
            }
            if (typeof obj === 'number' || typeof obj === 'boolean') {
                return obj;
            }
            if (Array.isArray(obj)) {
                return obj.map(function (item) { return _this.redactObject(item); });
            }
            if (typeof obj === 'object') {
                var redacted = {};
                for (var _i = 0, _a = Object.entries(obj); _i < _a.length; _i++) {
                    var _b = _a[_i], key = _b[0], value = _b[1];
                    // Redact known sensitive keys entirely
                    var lowerKey = key.toLowerCase();
                    if (lowerKey.includes('password') ||
                        lowerKey.includes('secret') ||
                        lowerKey.includes('token') ||
                        lowerKey.includes('key') && (lowerKey.includes('api') || lowerKey.includes('private') || lowerKey.includes('public')) ||
                        lowerKey.includes('authorization') ||
                        lowerKey.includes('auth')) {
                        redacted[key] = '[REDACTED]';
                    }
                    else {
                        redacted[key] = this.redactObject(value);
                    }
                }
                return redacted;
            }
            return obj;
        };
        /**
         * Redact sensitive information from an error object
         * @param error - The error to redact
         * @returns A redacted error representation
         */
        RedactionService_1.prototype.redactError = function (error) {
            return {
                name: error.name,
                message: this.redact(error.message),
                stack: error.stack ? this.redact(error.stack) : undefined,
            };
        };
        /**
         * Redact sensitive information from log lines
         * @param logLines - Array of log lines
         * @returns Array of redacted log lines
         */
        RedactionService_1.prototype.redactLogLines = function (logLines) {
            var _this = this;
            return logLines.map(function (line) { return _this.redact(line); });
        };
        return RedactionService_1;
    }());
    __setFunctionName(_classThis, "RedactionService");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        RedactionService = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return RedactionService = _classThis;
}();
exports.RedactionService = RedactionService;
