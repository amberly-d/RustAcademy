"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReconciliationAction = exports.OnChainState = exports.PaymentDbStatus = exports.EscrowDbStatus = void 0;
/**
 * Database-side statuses for escrow records.
 * Mirrors the `status` column in the `escrow_records` table.
 */
var EscrowDbStatus;
(function (EscrowDbStatus) {
    EscrowDbStatus["Pending"] = "pending";
    EscrowDbStatus["Active"] = "active";
    EscrowDbStatus["Claimed"] = "claimed";
    EscrowDbStatus["Expired"] = "expired";
    EscrowDbStatus["Cancelled"] = "cancelled";
})(EscrowDbStatus || (exports.EscrowDbStatus = EscrowDbStatus = {}));
/**
 * Database-side statuses for payment records.
 * Mirrors the `status` column in the `payment_records` table.
 */
var PaymentDbStatus;
(function (PaymentDbStatus) {
    PaymentDbStatus["Pending"] = "pending";
    PaymentDbStatus["Processing"] = "processing";
    PaymentDbStatus["Paid"] = "paid";
    PaymentDbStatus["Failed"] = "failed";
})(PaymentDbStatus || (exports.PaymentDbStatus = PaymentDbStatus = {}));
/**
 * Authoritative on-chain state resolved by querying Horizon.
 */
var OnChainState;
(function (OnChainState) {
    /** Account exists and funds are still held. */
    OnChainState["Active"] = "active";
    /** Account has been merged — escrow funds claimed. */
    OnChainState["Claimed"] = "claimed";
    /** Account still exists but past its time-bound expiry. */
    OnChainState["Expired"] = "expired";
    /** Transaction confirmed on-chain. */
    OnChainState["Confirmed"] = "confirmed";
    /** Transaction not found / account does not exist. */
    OnChainState["NonExistent"] = "non_existent";
    /** Horizon returned an unexpected error — cannot determine state. */
    OnChainState["Unknown"] = "unknown";
})(OnChainState || (exports.OnChainState = OnChainState = {}));
var ReconciliationAction;
(function (ReconciliationAction) {
    /** DB and chain agree — no change needed. */
    ReconciliationAction["NoOp"] = "no_op";
    /** DB was stale; updated to match chain. */
    ReconciliationAction["Updated"] = "updated";
    /** State cannot be resolved; flagged for manual review. */
    ReconciliationAction["Flagged"] = "flagged";
    /** Horizon was unavailable; skipped this record. */
    ReconciliationAction["Skipped"] = "skipped";
})(ReconciliationAction || (exports.ReconciliationAction = ReconciliationAction = {}));
