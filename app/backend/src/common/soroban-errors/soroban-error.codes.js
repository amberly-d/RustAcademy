"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SorobanErrorCode = void 0;
/**
 * Stable API error codes for Soroban contract failures.
 *
 * These codes are part of the public API contract — clients can rely on them
 * for deterministic error handling and UX messaging.
 *
 * Grouped by domain: Auth, Contract State, Balance, Admin, Version, Generic.
 */
var SorobanErrorCode;
(function (SorobanErrorCode) {
    // ── Auth ──────────────────────────────────────────────────────────────────
    /** Caller is not authorised to perform this operation. */
    SorobanErrorCode["UNAUTHORIZED"] = "CONTRACT_UNAUTHORIZED";
    /** Required auth entry is missing from the transaction. */
    SorobanErrorCode["AUTH_MISSING"] = "CONTRACT_AUTH_MISSING";
    // ── Contract state ────────────────────────────────────────────────────────
    /** Contract is paused; all mutating operations are blocked. */
    SorobanErrorCode["CONTRACT_PAUSED"] = "CONTRACT_PAUSED";
    /** Contract write operations are temporarily disabled by the server. */
    SorobanErrorCode["CONTRACT_WRITES_DISABLED"] = "CONTRACT_WRITES_DISABLED";
    /** Escrow / resource entry not found in contract storage. */
    SorobanErrorCode["ESCROW_NOT_FOUND"] = "CONTRACT_ESCROW_NOT_FOUND";
    /** Escrow has already been withdrawn or refunded. */
    SorobanErrorCode["ESCROW_ALREADY_SETTLED"] = "CONTRACT_ESCROW_ALREADY_SETTLED";
    /** Escrow has not yet expired; refund is not allowed. */
    SorobanErrorCode["ESCROW_NOT_EXPIRED"] = "CONTRACT_ESCROW_NOT_EXPIRED";
    /** Escrow has expired; withdrawal is no longer allowed. */
    SorobanErrorCode["ESCROW_EXPIRED"] = "CONTRACT_ESCROW_EXPIRED";
    /** Required contract storage entry is missing (MissingValue). */
    SorobanErrorCode["STORAGE_MISSING"] = "CONTRACT_STORAGE_MISSING";
    /** Ledger entry has expired and must be restored before use. */
    SorobanErrorCode["RESTORE_REQUIRED"] = "CONTRACT_RESTORE_REQUIRED";
    // ── Balance ───────────────────────────────────────────────────────────────
    /** Account or escrow has insufficient token balance. */
    SorobanErrorCode["INSUFFICIENT_BALANCE"] = "CONTRACT_INSUFFICIENT_BALANCE";
    /** Amount provided is zero or negative. */
    SorobanErrorCode["INVALID_AMOUNT"] = "CONTRACT_INVALID_AMOUNT";
    // ── Version / upgrade ─────────────────────────────────────────────────────
    /** Contract schema version is not supported by this client. */
    SorobanErrorCode["VERSION_MISMATCH"] = "CONTRACT_VERSION_MISMATCH";
    /** WASM hash provided for upgrade is invalid. */
    SorobanErrorCode["INVALID_WASM_HASH"] = "CONTRACT_INVALID_WASM_HASH";
    // ── Admin ─────────────────────────────────────────────────────────────────
    /** Caller is not the contract admin. */
    SorobanErrorCode["NOT_ADMIN"] = "CONTRACT_NOT_ADMIN";
    /** Admin address provided is invalid. */
    SorobanErrorCode["INVALID_ADMIN"] = "CONTRACT_INVALID_ADMIN";
    // ── Input / params ────────────────────────────────────────────────────────
    /** One or more input values are invalid for this contract call. */
    SorobanErrorCode["INVALID_INPUT"] = "CONTRACT_INVALID_INPUT";
    /** Contract or account does not exist on the network. */
    SorobanErrorCode["NOT_FOUND"] = "CONTRACT_NOT_FOUND";
    // ── Resource limits ───────────────────────────────────────────────────────
    /** Transaction exceeds Soroban compute budget. */
    SorobanErrorCode["BUDGET_EXCEEDED"] = "CONTRACT_BUDGET_EXCEEDED";
    // ── Generic fallback ──────────────────────────────────────────────────────
    /** An unexpected contract error occurred. */
    SorobanErrorCode["UNKNOWN"] = "CONTRACT_UNKNOWN_ERROR";
    // ── Indexer Lag Guard ─────────────────────────────────────────────────────
    /** Indexer is lagging too far behind the network; risky operations are blocked. */
    SorobanErrorCode["INDEXER_LAGGING"] = "INDEXER_LAGGING";
})(SorobanErrorCode || (exports.SorobanErrorCode = SorobanErrorCode = {}));
