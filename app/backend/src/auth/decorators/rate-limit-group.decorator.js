"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RateLimitGroupTag = void 0;
var common_1 = require("@nestjs/common");
var rate_limit_config_1 = require("../../config/rate-limit.config");
var RateLimitGroupTag = function (group) {
    return (0, common_1.SetMetadata)(rate_limit_config_1.RATE_LIMIT_GROUP_METADATA_KEY, group);
};
exports.RateLimitGroupTag = RateLimitGroupTag;
