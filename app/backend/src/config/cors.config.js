"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildCorsOptions = buildCorsOptions;
var common_1 = require("@nestjs/common");
var logger = new common_1.Logger("CorsConfig");
/**
 * Builds the CORS options for the given environment.
 *
 * Origin resolution order:
 *  1. No origin header (server-to-server / curl) → always allowed.
 *  2. CORS_ALLOWED_ORIGINS comma-separated list → exact match.
 *  3. CORS_VERCEL_PROJECT set → allow any Vercel preview URL for that project
 *     (https://<project>-*.vercel.app).
 *  4. Otherwise → blocked.
 *
 * In non-production NODE_ENV all origins are allowed (dev / test convenience).
 */
function buildCorsOptions(env) {
    if (env.nodeEnv !== "production") {
        logger.log("CORS: open (non-production)");
        return { origin: true, credentials: true };
    }
    var staticOrigins = new Set(env.allowedOrigins.filter(Boolean));
    // Vercel preview pattern: https://<project>-<hash>-<team>.vercel.app
    // or the simpler https://<project>-*.vercel.app
    var vercelPreviewRe = env.vercelProject
        ? new RegExp("^https://".concat(escapeRegex(env.vercelProject), "-[a-z0-9-]+-[a-z0-9]+\\.vercel\\.app$"))
        : null;
    return {
        origin: function (origin, callback) {
            // Allow server-to-server (no Origin header)
            if (!origin)
                return callback(null, true);
            if (staticOrigins.has(origin))
                return callback(null, true);
            if (vercelPreviewRe === null || vercelPreviewRe === void 0 ? void 0 : vercelPreviewRe.test(origin))
                return callback(null, true);
            logger.warn("CORS blocked: ".concat(origin));
            callback(new Error("Origin not allowed: ".concat(origin)));
        },
        credentials: true,
        methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
        allowedHeaders: [
            "Content-Type",
            "Authorization",
            "x-correlation-id",
            "X-API-Key",
        ],
    };
}
function escapeRegex(s) {
    return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
