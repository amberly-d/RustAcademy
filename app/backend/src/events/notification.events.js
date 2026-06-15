"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AutoReconciliationSucceededEvent = exports.UsernameClaimedEvent = exports.RecurringPaymentFailedEvent = exports.RecurringPaymentExecutedEvent = exports.RecurringLinkCompletedEvent = exports.RecurringLinkCancelledEvent = exports.RecurringLinkResumedEvent = exports.RecurringLinkPausedEvent = exports.RecurringLinkUpdatedEvent = exports.RecurringLinkCreatedEvent = exports.PaymentReceivedEvent = exports.NotificationEvent = void 0;
var NotificationEvent;
(function (NotificationEvent) {
    NotificationEvent["PaymentReceived"] = "payment.received";
    NotificationEvent["UsernameClaimed"] = "username.claimed";
    NotificationEvent["RecurringLinkCreated"] = "recurring.link.created";
    NotificationEvent["RecurringLinkUpdated"] = "recurring.link.updated";
    NotificationEvent["RecurringLinkPaused"] = "recurring.link.paused";
    NotificationEvent["RecurringLinkResumed"] = "recurring.link.resumed";
    NotificationEvent["RecurringLinkCancelled"] = "recurring.link.cancelled";
    NotificationEvent["RecurringLinkCompleted"] = "recurring.link.completed";
    NotificationEvent["RecurringPaymentExecuted"] = "recurring.payment.executed";
    NotificationEvent["RecurringPaymentFailed"] = "recurring.payment.failed";
})(NotificationEvent || (exports.NotificationEvent = NotificationEvent = {}));
var PaymentReceivedEvent = /** @class */ (function () {
    function PaymentReceivedEvent(txHash, amount, sender, recipientPublicKey) {
        this.txHash = txHash;
        this.amount = amount;
        this.sender = sender;
        this.recipientPublicKey = recipientPublicKey;
    }
    return PaymentReceivedEvent;
}());
exports.PaymentReceivedEvent = PaymentReceivedEvent;
var RecurringLinkCreatedEvent = /** @class */ (function () {
    function RecurringLinkCreatedEvent(linkId, username, destination) {
        this.linkId = linkId;
        this.username = username;
        this.destination = destination;
    }
    return RecurringLinkCreatedEvent;
}());
exports.RecurringLinkCreatedEvent = RecurringLinkCreatedEvent;
var RecurringLinkUpdatedEvent = /** @class */ (function () {
    function RecurringLinkUpdatedEvent(linkId, changes) {
        this.linkId = linkId;
        this.changes = changes;
    }
    return RecurringLinkUpdatedEvent;
}());
exports.RecurringLinkUpdatedEvent = RecurringLinkUpdatedEvent;
var RecurringLinkPausedEvent = /** @class */ (function () {
    function RecurringLinkPausedEvent(linkId, username, destination) {
        this.linkId = linkId;
        this.username = username;
        this.destination = destination;
    }
    return RecurringLinkPausedEvent;
}());
exports.RecurringLinkPausedEvent = RecurringLinkPausedEvent;
var RecurringLinkResumedEvent = /** @class */ (function () {
    function RecurringLinkResumedEvent(linkId, username, destination) {
        this.linkId = linkId;
        this.username = username;
        this.destination = destination;
    }
    return RecurringLinkResumedEvent;
}());
exports.RecurringLinkResumedEvent = RecurringLinkResumedEvent;
var RecurringLinkCancelledEvent = /** @class */ (function () {
    function RecurringLinkCancelledEvent(linkId, username, destination) {
        this.linkId = linkId;
        this.username = username;
        this.destination = destination;
    }
    return RecurringLinkCancelledEvent;
}());
exports.RecurringLinkCancelledEvent = RecurringLinkCancelledEvent;
var RecurringLinkCompletedEvent = /** @class */ (function () {
    function RecurringLinkCompletedEvent(linkId, totalExecuted) {
        this.linkId = linkId;
        this.totalExecuted = totalExecuted;
    }
    return RecurringLinkCompletedEvent;
}());
exports.RecurringLinkCompletedEvent = RecurringLinkCompletedEvent;
var RecurringPaymentExecutedEvent = /** @class */ (function () {
    function RecurringPaymentExecutedEvent(executionId, transactionHash) {
        this.executionId = executionId;
        this.transactionHash = transactionHash;
    }
    return RecurringPaymentExecutedEvent;
}());
exports.RecurringPaymentExecutedEvent = RecurringPaymentExecutedEvent;
var RecurringPaymentFailedEvent = /** @class */ (function () {
    function RecurringPaymentFailedEvent(executionId, failureReason, permanent) {
        this.executionId = executionId;
        this.failureReason = failureReason;
        this.permanent = permanent;
    }
    return RecurringPaymentFailedEvent;
}());
exports.RecurringPaymentFailedEvent = RecurringPaymentFailedEvent;
var UsernameClaimedEvent = /** @class */ (function () {
    function UsernameClaimedEvent(username, publicKey) {
        this.username = username;
        this.publicKey = publicKey;
    }
    return UsernameClaimedEvent;
}());
exports.UsernameClaimedEvent = UsernameClaimedEvent;
var AutoReconciliationSucceededEvent = /** @class */ (function () {
    function AutoReconciliationSucceededEvent(linkId, ownerPublicKey, txHash, amount, assetCode, confidence, matchedAt) {
        this.linkId = linkId;
        this.ownerPublicKey = ownerPublicKey;
        this.txHash = txHash;
        this.amount = amount;
        this.assetCode = assetCode;
        this.confidence = confidence;
        this.matchedAt = matchedAt;
    }
    return AutoReconciliationSucceededEvent;
}());
exports.AutoReconciliationSucceededEvent = AutoReconciliationSucceededEvent;
