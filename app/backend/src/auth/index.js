"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomThrottlerGuard = exports.ApiKeyGuard = exports.AuthModule = void 0;
var auth_module_1 = require("./auth.module");
Object.defineProperty(exports, "AuthModule", { enumerable: true, get: function () { return auth_module_1.AuthModule; } });
var api_key_guard_1 = require("./guards/api-key.guard");
Object.defineProperty(exports, "ApiKeyGuard", { enumerable: true, get: function () { return api_key_guard_1.ApiKeyGuard; } });
var custom_throttler_guard_1 = require("./guards/custom-throttler.guard");
Object.defineProperty(exports, "CustomThrottlerGuard", { enumerable: true, get: function () { return custom_throttler_guard_1.CustomThrottlerGuard; } });
