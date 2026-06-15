"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequireOrgRole = exports.REQUIRED_ORG_ROLE_KEY = void 0;
var common_1 = require("@nestjs/common");
exports.REQUIRED_ORG_ROLE_KEY = "required_org_role";
var RequireOrgRole = function (role) {
    return (0, common_1.SetMetadata)(exports.REQUIRED_ORG_ROLE_KEY, role);
};
exports.RequireOrgRole = RequireOrgRole;
