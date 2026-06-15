"use strict";
/**
 * Cursor utility for cursor-based pagination.
 *
 * Cursors are opaque base64-encoded JSON strings that encode the sort key
 * values of the last row returned.  This makes pagination deterministic:
 * even if rows are inserted or deleted between requests the client will
 * neither skip nor duplicate rows.
 *
 * A cursor always includes the `id` column as a tiebreaker so the sort
 * is fully deterministic even when the primary sort column has duplicates.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.PAGINATION_DEFAULTS = void 0;
exports.encodeCursor = encodeCursor;
exports.decodeCursor = decodeCursor;
exports.clampLimit = clampLimit;
exports.applyCursorFilter = applyCursorFilter;
exports.paginateResult = paginateResult;
/**
 * Encode a cursor payload to an opaque base64 string safe for URLs.
 */
function encodeCursor(payload) {
    var json = JSON.stringify(payload);
    return Buffer.from(json, 'utf-8').toString('base64url');
}
/**
 * Decode an opaque cursor string back to its payload.
 * Returns `null` when the cursor is invalid or malformed.
 */
function decodeCursor(cursor) {
    try {
        var json = Buffer.from(cursor, 'base64url').toString('utf-8');
        var parsed = JSON.parse(json);
        if (typeof parsed.pk === 'string' && typeof parsed.id === 'string') {
            return parsed;
        }
        return null;
    }
    catch (_a) {
        return null;
    }
}
/**
 * Default page sizes used across the application.
 */
exports.PAGINATION_DEFAULTS = {
    LIMIT_MIN: 1,
    LIMIT_MAX: 100,
    LIMIT_DEFAULT: 20,
};
/**
 * Clamp a user-supplied limit value to the allowed range.
 */
function clampLimit(limit, min, max, fallback) {
    if (min === void 0) { min = exports.PAGINATION_DEFAULTS.LIMIT_MIN; }
    if (max === void 0) { max = exports.PAGINATION_DEFAULTS.LIMIT_MAX; }
    if (fallback === void 0) { fallback = exports.PAGINATION_DEFAULTS.LIMIT_DEFAULT; }
    if (limit === undefined || limit === null || Number.isNaN(limit)) {
        return fallback;
    }
    return Math.min(max, Math.max(min, Math.floor(limit)));
}
/**
 * Build the Supabase query filter for cursor-based pagination.
 *
 * Strategy: we fetch `limit + 1` rows. If the extra row exists we know
 * there is a next page and we use its sort values as `next_cursor`.
 *
 * @param query - A Supabase query builder (already has `.select()` etc.)
 * @param cursor - Decoded cursor payload or undefined
 * @param orderColumn - The column used for ORDER BY (e.g. 'created_at')
 * @param ascending - Sort direction matching the ORDER BY
 */
function applyCursorFilter(query, cursor, orderColumn, ascending, limit) {
    var effectiveLimit = limit + 1; // fetch one extra to detect next page
    var q = query.order(orderColumn, { ascending: ascending });
    if (cursor) {
        // For DESC order: next page rows have (orderColumn < cursor.pk)
        //   OR (orderColumn = cursor.pk AND id < cursor.id)
        // For ASC order: next page rows have (orderColumn > cursor.pk)
        //   OR (orderColumn = cursor.pk AND id > cursor.id)
        if (ascending) {
            q = q.gt(orderColumn, cursor.pk).order('id', { ascending: true }).gt('id', cursor.id);
        }
        else {
            q = q.lt(orderColumn, cursor.pk).order('id', { ascending: false }).lt('id', cursor.id);
        }
    }
    // Deterministic tiebreaker by id
    q = q.order('id', { ascending: ascending }).limit(effectiveLimit);
    return q;
}
/**
 * Given the rows fetched (which may be limit+1) and the order column name,
 * split them into the actual page and compute the next cursor.
 */
function paginateResult(rows, limit, orderColumn) {
    var hasMore = rows.length > limit;
    var data = hasMore ? rows.slice(0, limit) : rows;
    var nextCursor = null;
    if (hasMore && data.length > 0) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        var last = data[data.length - 1];
        nextCursor = encodeCursor({
            pk: String(last[orderColumn]),
            id: String(last['id']),
        });
    }
    return { data: data, next_cursor: nextCursor, has_more: hasMore };
}
