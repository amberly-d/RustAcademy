"use strict";
/**
 * Username-specific errors for deterministic conflict and validation handling.
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsernameValidationError = exports.UsernameLimitExceededError = exports.UsernameConflictError = exports.UsernameErrorCode = void 0;
var UsernameErrorCode;
(function (UsernameErrorCode) {
    /** Username is already taken (uniqueness conflict). */
    UsernameErrorCode["CONFLICT"] = "USERNAME_CONFLICT";
    /** Wallet has reached the maximum allowed usernames. */
    UsernameErrorCode["LIMIT_EXCEEDED"] = "USERNAME_LIMIT_EXCEEDED";
    /** Username format invalid (length or pattern). */
    UsernameErrorCode["INVALID_FORMAT"] = "USERNAME_INVALID_FORMAT";
    /** Username not found. */
    UsernameErrorCode["NOT_FOUND"] = "USERNAME_NOT_FOUND";
})(UsernameErrorCode || (exports.UsernameErrorCode = UsernameErrorCode = {}));
var UsernameConflictError = /** @class */ (function (_super) {
    __extends(UsernameConflictError, _super);
    function UsernameConflictError(username, message) {
        if (message === void 0) { message = "Username \"".concat(username, "\" is already taken"); }
        var _this = _super.call(this, message) || this;
        _this.username = username;
        _this.name = 'UsernameConflictError';
        return _this;
    }
    return UsernameConflictError;
}(Error));
exports.UsernameConflictError = UsernameConflictError;
var UsernameLimitExceededError = /** @class */ (function (_super) {
    __extends(UsernameLimitExceededError, _super);
    function UsernameLimitExceededError(publicKey, limit, message) {
        var _this = _super.call(this, message !== null && message !== void 0 ? message : "Wallet has reached the maximum of ".concat(limit, " username(s). Cannot register more.")) || this;
        _this.publicKey = publicKey;
        _this.limit = limit;
        _this.name = 'UsernameLimitExceededError';
        return _this;
    }
    return UsernameLimitExceededError;
}(Error));
exports.UsernameLimitExceededError = UsernameLimitExceededError;
var UsernameValidationError = /** @class */ (function (_super) {
    __extends(UsernameValidationError, _super);
    function UsernameValidationError(code, message, field) {
        var _this = _super.call(this, message) || this;
        _this.code = code;
        _this.field = field;
        _this.name = 'UsernameValidationError';
        return _this;
    }
    return UsernameValidationError;
}(Error));
exports.UsernameValidationError = UsernameValidationError;
