"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isPaymentRefundable = isPaymentRefundable;
exports.isEscrowRefundable = isEscrowRefundable;
exports.isLinkRefundable = isLinkRefundable;
var reconciliation_types_1 = require("../reconciliation/types/reconciliation.types");
var reconciliation_types_2 = require("../reconciliation/types/reconciliation.types");
var link_state_machine_1 = require("../links/link-state-machine");
function isPaymentRefundable(status) {
    return status === reconciliation_types_1.PaymentDbStatus.Paid;
}
function isEscrowRefundable(status) {
    return status === reconciliation_types_2.EscrowDbStatus.Active || status === reconciliation_types_2.EscrowDbStatus.Claimed;
}
function isLinkRefundable(state) {
    return state === link_state_machine_1.LinkState.PAID;
}
