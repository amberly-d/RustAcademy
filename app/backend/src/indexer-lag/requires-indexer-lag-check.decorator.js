"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequiresIndexerLagCheck = exports.REQUIRE_INDEXER_LAG_CHECK_KEY = void 0;
var common_1 = require("@nestjs/common");
exports.REQUIRE_INDEXER_LAG_CHECK_KEY = "REQUIRE_INDEXER_LAG_CHECK";
var RequiresIndexerLagCheck = function () {
    return (0, common_1.SetMetadata)(exports.REQUIRE_INDEXER_LAG_CHECK_KEY, true);
};
exports.RequiresIndexerLagCheck = RequiresIndexerLagCheck;
