"use strict";
/**
 * Auto-Match Engine – Domain Types
 *
 * Models the full lifecycle of automatically matching an incoming Stellar
 * payment to an open  RustAcademy payment link:
 *
 *   IncomingTransaction  ──▶  score against PaymentLink[]
 *                         ──▶  MatchResult (AutoMatch | ReviewRequired | Unmatched)
 *                         ──▶  apply state update or queue for operator review
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnmatchedStatus = exports.MatchDecision = exports.PaymentLinkStatus = void 0;
var PaymentLinkStatus;
(function (PaymentLinkStatus) {
    PaymentLinkStatus["Open"] = "open";
    PaymentLinkStatus["Paid"] = "paid";
    PaymentLinkStatus["Expired"] = "expired";
    PaymentLinkStatus["Cancelled"] = "cancelled";
})(PaymentLinkStatus || (exports.PaymentLinkStatus = PaymentLinkStatus = {}));
// ─── Match Decisions ──────────────────────────────────────────────────────────
var MatchDecision;
(function (MatchDecision) {
    /**
     * confidence ≥ AUTO_MATCH_THRESHOLD.
     * The engine marks the link as "paid" and fires a webhook automatically.
     */
    MatchDecision["AutoMatch"] = "auto_match";
    /**
     * confidence ≥ REVIEW_THRESHOLD but < AUTO_MATCH_THRESHOLD.
     * The transaction is queued in `unmatched_transactions` for operator review.
     */
    MatchDecision["ReviewRequired"] = "review_required";
    /**
     * No candidate scored above the minimum threshold.
     * The transaction is stored as unmatched with no suggested link.
     */
    MatchDecision["Unmatched"] = "unmatched";
})(MatchDecision || (exports.MatchDecision = MatchDecision = {}));
var UnmatchedStatus;
(function (UnmatchedStatus) {
    UnmatchedStatus["Pending"] = "pending";
    UnmatchedStatus["Resolved"] = "resolved";
    UnmatchedStatus["Dismissed"] = "dismissed";
})(UnmatchedStatus || (exports.UnmatchedStatus = UnmatchedStatus = {}));
