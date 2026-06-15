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
exports.MarketplaceError = exports.MarketplaceErrorCode = void 0;
var MarketplaceErrorCode;
(function (MarketplaceErrorCode) {
    MarketplaceErrorCode["LISTING_NOT_FOUND"] = "LISTING_NOT_FOUND";
    MarketplaceErrorCode["BID_NOT_FOUND"] = "BID_NOT_FOUND";
    MarketplaceErrorCode["LISTING_NOT_ACTIVE"] = "LISTING_NOT_ACTIVE";
    MarketplaceErrorCode["BID_NOT_PENDING"] = "BID_NOT_PENDING";
    MarketplaceErrorCode["UNAUTHORIZED"] = "MARKETPLACE_UNAUTHORIZED";
    MarketplaceErrorCode["USERNAME_NOT_OWNED"] = "USERNAME_NOT_OWNED";
    MarketplaceErrorCode["ALREADY_LISTED"] = "USERNAME_ALREADY_LISTED";
    MarketplaceErrorCode["SELF_BID"] = "MARKETPLACE_SELF_BID";
    MarketplaceErrorCode["INVALID_PRICE"] = "MARKETPLACE_INVALID_PRICE";
})(MarketplaceErrorCode || (exports.MarketplaceErrorCode = MarketplaceErrorCode = {}));
var MarketplaceError = /** @class */ (function (_super) {
    __extends(MarketplaceError, _super);
    function MarketplaceError(code, message) {
        var _this = _super.call(this, message) || this;
        _this.code = code;
        _this.name = 'MarketplaceError';
        return _this;
    }
    return MarketplaceError;
}(Error));
exports.MarketplaceError = MarketplaceError;
