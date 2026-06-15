"use strict";
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
exports.SupabaseNetworkError = exports.SupabaseUniqueConstraintError = exports.SupabaseError = void 0;
var SupabaseError = /** @class */ (function (_super) {
    __extends(SupabaseError, _super);
    function SupabaseError(message, code, details) {
        var _this = _super.call(this, message) || this;
        _this.code = code;
        _this.details = details;
        _this.name = 'SupabaseError';
        return _this;
    }
    return SupabaseError;
}(Error));
exports.SupabaseError = SupabaseError;
var SupabaseUniqueConstraintError = /** @class */ (function (_super) {
    __extends(SupabaseUniqueConstraintError, _super);
    function SupabaseUniqueConstraintError(message, details) {
        var _this = _super.call(this, message, '23505', details) || this;
        _this.name = 'SupabaseUniqueConstraintError';
        return _this;
    }
    return SupabaseUniqueConstraintError;
}(SupabaseError));
exports.SupabaseUniqueConstraintError = SupabaseUniqueConstraintError;
var SupabaseNetworkError = /** @class */ (function (_super) {
    __extends(SupabaseNetworkError, _super);
    function SupabaseNetworkError(message, details) {
        var _this = _super.call(this, message, 'NETWORK_ERROR', details) || this;
        _this.name = 'SupabaseNetworkError';
        return _this;
    }
    return SupabaseNetworkError;
}(SupabaseError));
exports.SupabaseNetworkError = SupabaseNetworkError;
