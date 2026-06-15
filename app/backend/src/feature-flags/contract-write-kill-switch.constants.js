"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CONTRACT_WRITES_DISABLED_MESSAGE = exports.CONTRACT_WRITES_DISABLED_CODE = exports.TESTNET_CONTRACT_WRITES_FLAG = void 0;
var soroban_errors_1 = require("../common/soroban-errors");
exports.TESTNET_CONTRACT_WRITES_FLAG = 'testnet.contract_writes';
exports.CONTRACT_WRITES_DISABLED_CODE = soroban_errors_1.SorobanErrorCode.CONTRACT_WRITES_DISABLED;
exports.CONTRACT_WRITES_DISABLED_MESSAGE = 'Contract write operations are temporarily disabled on testnet. Retry after the incident is resolved or consult the status page.';
