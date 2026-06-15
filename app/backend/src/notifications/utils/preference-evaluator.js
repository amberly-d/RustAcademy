"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shouldSendNotification = shouldSendNotification;
function shouldSendNotification(pref, payload) {
    if (!pref.enabled)
        return false;
    // Event filtering
    if (pref.events && !pref.events.includes(payload.eventType)) {
        return false;
    }
    // Amount filtering (if applicable)
    if (pref.minAmountStroops &&
        payload.amountStroops &&
        payload.amountStroops < pref.minAmountStroops) {
        return false;
    }
    return true;
}
