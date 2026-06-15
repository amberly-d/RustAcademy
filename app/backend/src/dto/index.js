"use strict";
/**
 * Shared DTO Library
 *
 * This module provides a centralized library of DTOs and validators
 * for common payloads used across the  RustAcademy backend API.
 *
 * ## Usage
 *
 * Import DTOs from this module:
 * ```typescript
 * import { CreateUsernameDto, LinkMetadataRequestDto, TransactionQueryDto } from '@/dto';
 * ```
 *
 * Import validators:
 * ```typescript
 * import { IsUsername, IsStellarPublicKey, IsStellarAmount } from '@/dto/validators';
 * ```
 *
 * ## Structure
 *
 * - `username/` - Username-related DTOs
 * - `link/` - Payment link metadata DTOs
 * - `transaction/` - Transaction query DTOs
 * - `validators/` - Reusable validation decorators
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
// Username DTOs
__exportStar(require("./username"), exports);
// Link DTOs
__exportStar(require("./link"), exports);
// Transaction DTOs
__exportStar(require("./transaction"), exports);
// Validators
__exportStar(require("./validators"), exports);
// Pagination
__exportStar(require("./pagination"), exports);
