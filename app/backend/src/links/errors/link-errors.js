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
exports.LinkValidationError = exports.LinkErrorCode = void 0;
var LinkErrorCode;
(function (LinkErrorCode) {
    LinkErrorCode["INVALID_AMOUNT"] = "INVALID_AMOUNT";
    LinkErrorCode["AMOUNT_TOO_LOW"] = "AMOUNT_TOO_LOW";
    LinkErrorCode["AMOUNT_TOO_HIGH"] = "AMOUNT_TOO_HIGH";
    LinkErrorCode["INVALID_MEMO"] = "INVALID_MEMO";
    LinkErrorCode["MEMO_TOO_LONG"] = "MEMO_TOO_LONG";
    LinkErrorCode["INVALID_MEMO_TYPE"] = "INVALID_MEMO_TYPE";
    LinkErrorCode["INVALID_ASSET"] = "INVALID_ASSET";
    LinkErrorCode["ASSET_NOT_WHITELISTED"] = "ASSET_NOT_WHITELISTED";
    LinkErrorCode["INVALID_EXPIRATION"] = "INVALID_EXPIRATION";
    LinkErrorCode["INVALID_USERNAME"] = "INVALID_USERNAME";
    LinkErrorCode["USERNAME_RESERVED"] = "USERNAME_RESERVED";
    LinkErrorCode["INVALID_DESTINATION"] = "INVALID_DESTINATION";
    LinkErrorCode["INVALID_REFERENCE_ID"] = "INVALID_REFERENCE_ID";
})(LinkErrorCode || (exports.LinkErrorCode = LinkErrorCode = {}));
var LinkValidationError = /** @class */ (function (_super) {
    __extends(LinkValidationError, _super);
    function LinkValidationError(code, message, field) {
        var _this = _super.call(this, message) || this;
        _this.code = code;
        _this.field = field;
        _this.name = 'LinkValidationError';
        return _this;
    }
    return LinkValidationError;
}(Error));
exports.LinkValidationError = LinkValidationError;
