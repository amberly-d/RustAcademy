"use strict";
/**
 * Username rules for  RustAcademy.to/yourname
 *
 * Rules are enforced server-side in UsernamesService and by DTO validation.
 * Uniqueness and race conditions are enforced by the database (Supabase) unique constraint.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.USERNAME_PATTERN_DESCRIPTION = exports.USERNAME_DEFAULT_MAX_PER_WALLET = exports.USERNAME_PATTERN = exports.USERNAME_MAX_LENGTH = exports.USERNAME_MIN_LENGTH = void 0;
/** Minimum username length (inclusive). */
exports.USERNAME_MIN_LENGTH = 3;
/** Maximum username length (inclusive). */
exports.USERNAME_MAX_LENGTH = 32;
/**
 * Allowed characters: lowercase letters (a-z), digits (0-9), underscore (_).
 * No spaces, hyphens, or special characters.
 */
exports.USERNAME_PATTERN = /^[a-z0-9_]+$/;
/**
 * Default maximum usernames per wallet when MAX_USERNAMES_PER_WALLET is not set.
 * Use 0 to mean "no limit" (only when env is not set).
 */
exports.USERNAME_DEFAULT_MAX_PER_WALLET = 0;
/** Display name for the pattern (for error messages). */
exports.USERNAME_PATTERN_DESCRIPTION = "lowercase letters, numbers, and underscores only";
