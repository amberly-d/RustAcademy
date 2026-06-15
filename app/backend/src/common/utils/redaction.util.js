"use strict";
/**
 * Sensitive value redaction utility.
 * Prevents secret values from appearing in logs and error messages.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.redactSensitiveValues = redactSensitiveValues;
exports.redactValue = redactValue;
exports.sanitizeErrorMessage = sanitizeErrorMessage;
exports.createConfigSummary = createConfigSummary;
/**
 * List of environment variable keys that contain sensitive information
 */
var SENSITIVE_KEYS = [
    'SUPABASE_ANON_KEY',
    'SUPABASE_SERVICE_ROLE_KEY',
    'STELLAR_SECRET_KEY',
    'SENDGRID_API_KEY',
    'EXPO_ACCESS_TOKEN',
    'SECRET_KEY',
    'API_KEY',
    'PASSWORD',
    'TOKEN',
];
/**
 * Redact sensitive values from an environment object.
 * Shows only the first and last 4 characters, masking the middle.
 *
 * @param env - Environment variables object
 * @returns Sanitized copy with redacted sensitive values
 */
function redactSensitiveValues(env) {
    var redacted = {};
    for (var _i = 0, _a = Object.entries(env); _i < _a.length; _i++) {
        var _b = _a[_i], key = _b[0], value = _b[1];
        if (isSensitiveKey(key)) {
            redacted[key] = redactValue(String(value));
        }
        else {
            redacted[key] = value;
        }
    }
    return redacted;
}
/**
 * Redact a single sensitive value.
 * Shows first 4 and last 4 characters with asterisks in between.
 *
 * @param value - The value to redact
 * @returns Redacted string (e.g., "abcd********xyz1")
 */
function redactValue(value) {
    if (!value || value.length <= 8) {
        return '****';
    }
    var visible = 4;
    var start = value.substring(0, visible);
    var end = value.substring(value.length - visible);
    var masked = '*'.repeat(Math.min(value.length - visible * 2, 12));
    return "".concat(start).concat(masked).concat(end);
}
/**
 * Check if a key name indicates sensitive data.
 *
 * @param key - Environment variable name
 * @returns True if the key is sensitive
 */
function isSensitiveKey(key) {
    var upperKey = key.toUpperCase();
    return SENSITIVE_KEYS.some(function (sensitive) { return upperKey.includes(sensitive); });
}
/**
 * Sanitize an error message to prevent leaking sensitive configuration.
 * Removes any values that look like keys, tokens, or secrets.
 *
 * @param message - Error message to sanitize
 * @returns Sanitized error message
 */
function sanitizeErrorMessage(message) {
    // Remove anything that looks like a secret key (S followed by 55 base64 chars)
    var sanitized = message.replace(/S[A-Za-z0-9+/=]{55}/g, '[REDACTED_SECRET_KEY]');
    // Remove anything that looks like a public key (G followed by 55 base64 chars)
    sanitized = sanitized.replace(/G[A-Za-z0-9+/=]{55}/g, '[REDACTED_PUBLIC_KEY]');
    // Remove JWT-like tokens (three base64 segments separated by dots)
    sanitized = sanitized.replace(/[A-Za-z0-9+/=]{20,}\.[A-Za-z0-9+/=]{20,}\.[A-Za-z0-9+/=]{20,}/g, '[REDACTED_TOKEN]');
    // Remove Supabase keys (typically start with 'eyJ')
    sanitized = sanitized.replace(/eyJ[A-Za-z0-9+/=]{30,}/g, '[REDACTED_JWT]');
    return sanitized;
}
/**
 * Create a safe config summary for logging at startup.
 * Shows which required configs are loaded without exposing values.
 *
 * @param config - Configuration object
 * @returns Safe summary string for logging
 */
function createConfigSummary(config) {
    var entries = Object.entries(config);
    var required = entries.filter(function (_a) {
        var key = _a[0];
        return !key.includes('?') && !key.includes('OPTIONAL');
    });
    var loaded = required.filter(function (_a) {
        var value = _a[1];
        return value !== undefined && value !== '';
    });
    var missing = required.filter(function (_a) {
        var value = _a[1];
        return value === undefined || value === '';
    });
    var lines = [
        "Configuration: ".concat(loaded.length, "/").concat(required.length, " required values loaded"),
    ];
    if (missing.length > 0) {
        lines.push("Missing: ".concat(missing.map(function (_a) {
            var key = _a[0];
            return key;
        }).join(', ')));
    }
    return lines.join('. ');
}
