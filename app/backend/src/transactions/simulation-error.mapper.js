"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapSimulationError = mapSimulationError;
var KNOWN_ERROR_PATTERNS = [
    {
        pattern: /HostError.*Error.*WasmVm.*InvalidAction/i,
        message: "The smart contract encountered an invalid operation. The transaction parameters may be incorrect.",
    },
    {
        pattern: /HostError.*Error.*Value.*InvalidInput/i,
        message: "One or more input values are invalid for this contract operation.",
    },
    {
        pattern: /HostError.*Error.*Auth.*NotAuthorized/i,
        message: "This operation requires authorization from an account that has not been provided.",
    },
    {
        pattern: /HostError.*Error.*Storage.*MissingValue/i,
        message: "A required contract state entry does not exist. The escrow or resource may not have been initialized.",
    },
    {
        pattern: /HostError.*Error.*Budget.*ExceededLimit/i,
        message: "The transaction exceeds computational limits. Try simplifying the operation or splitting it.",
    },
    {
        pattern: /account.*does not exist/i,
        message: "The source account does not exist on the network. Ensure it is funded and activated.",
    },
    {
        pattern: /contract.*does not exist/i,
        message: "The specified contract does not exist on this network. Check the contract ID.",
    },
    {
        pattern: /insufficient.*balance/i,
        message: "The account has insufficient balance to cover fees for this transaction.",
    },
    {
        pattern: /transaction.*too large/i,
        message: "The transaction is too large. Consider reducing the complexity of the operation.",
    },
];
function mapSimulationError(rawError) {
    for (var _i = 0, KNOWN_ERROR_PATTERNS_1 = KNOWN_ERROR_PATTERNS; _i < KNOWN_ERROR_PATTERNS_1.length; _i++) {
        var _a = KNOWN_ERROR_PATTERNS_1[_i], pattern = _a.pattern, message = _a.message;
        if (pattern.test(rawError)) {
            return {
                userMessage: message,
                technicalError: rawError,
            };
        }
    }
    // Parse HostError codes if present
    var hostErrorMatch = rawError.match(/Error\((\w+),\s*(\w+)\)/);
    if (hostErrorMatch) {
        return {
            userMessage: "Contract execution failed with error type \"".concat(hostErrorMatch[1], "\". Please verify the transaction parameters and try again."),
            technicalError: rawError,
            details: {
                errorType: hostErrorMatch[1],
                errorCode: hostErrorMatch[2],
            },
        };
    }
    return {
        userMessage: "The transaction simulation failed. Please check your parameters and try again.",
        technicalError: rawError,
    };
}
