"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkState = void 0;
exports.canTransition = canTransition;
exports.applyTransition = applyTransition;
exports.getAvailableTransitions = getAvailableTransitions;
var LinkState;
(function (LinkState) {
    LinkState["DRAFT"] = "DRAFT";
    LinkState["ACTIVE"] = "ACTIVE";
    LinkState["EXPIRED"] = "EXPIRED";
    LinkState["PAID"] = "PAID";
    LinkState["REFUNDED"] = "REFUNDED";
})(LinkState || (exports.LinkState = LinkState = {}));
var TRANSITIONS = (_a = {},
    _a[LinkState.DRAFT] = [LinkState.ACTIVE],
    _a[LinkState.ACTIVE] = [LinkState.EXPIRED, LinkState.PAID],
    _a[LinkState.EXPIRED] = [LinkState.ACTIVE],
    _a[LinkState.PAID] = [LinkState.REFUNDED],
    _a[LinkState.REFUNDED] = [],
    _a);
function canTransition(from, to) {
    return TRANSITIONS[from].includes(to);
}
function applyTransition(from, to) {
    if (!canTransition(from, to)) {
        throw new Error("Invalid link state transition: ".concat(from, " -> ").concat(to));
    }
    return to;
}
function getAvailableTransitions(state) {
    return __spreadArray([], TRANSITIONS[state], true);
}
