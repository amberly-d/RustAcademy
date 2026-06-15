"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequiresFlag = exports.REQUIRES_FLAG_KEY = void 0;
var common_1 = require("@nestjs/common");
exports.REQUIRES_FLAG_KEY = 'requires_flag';
/**
 * Marks a controller or handler as requiring a feature flag to be enabled.
 * The NetworkSafetyGuard enforces this on every request.
 *
 * Usage:
 *   @RequiresFlag('mainnet.refunds')
 *   @Post('refunds')
 *   async initiateRefund(...) {}
 */
var RequiresFlag = function (flagKey) {
    return (0, common_1.SetMetadata)(exports.REQUIRES_FLAG_KEY, flagKey);
};
exports.RequiresFlag = RequiresFlag;
