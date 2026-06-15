"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequireScopes = exports.REQUIRED_SCOPES_KEY = void 0;
var common_1 = require("@nestjs/common");
exports.REQUIRED_SCOPES_KEY = 'requiredScopes';
/**
 * Declare which API key scopes are required to access a route.
 *
 * @example
 * \@RequireScopes('links:write')
 * \@Post()
 * createLink() {}
 */
var RequireScopes = function () {
    var scopes = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        scopes[_i] = arguments[_i];
    }
    return (0, common_1.SetMetadata)(exports.REQUIRED_SCOPES_KEY, scopes);
};
exports.RequireScopes = RequireScopes;
