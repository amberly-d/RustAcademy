"use strict";
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsStellarAmountConstraint = exports.STELLAR_AMOUNT = void 0;
exports.IsStellarAmount = IsStellarAmount;
var class_validator_1 = require("class-validator");
/**
 * Stellar amount validation constraints
 */
exports.STELLAR_AMOUNT = {
    MIN: 0.0000001,
    MAX: 1000000,
    DECIMALS: 7,
};
/**
 * Stellar amount validation constraint
 * Validates that amount is within Stellar network limits
 */
var IsStellarAmountConstraint = function () {
    var _classDecorators = [(0, class_validator_1.ValidatorConstraint)({ async: false })];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var IsStellarAmountConstraint = _classThis = /** @class */ (function () {
        function IsStellarAmountConstraint_1() {
        }
        IsStellarAmountConstraint_1.prototype.validate = function (amount) {
            if (typeof amount !== 'number' || isNaN(amount)) {
                return false;
            }
            return (amount >= exports.STELLAR_AMOUNT.MIN && amount <= exports.STELLAR_AMOUNT.MAX);
        };
        IsStellarAmountConstraint_1.prototype.defaultMessage = function () {
            return "Amount must be between ".concat(exports.STELLAR_AMOUNT.MIN, " and ").concat(exports.STELLAR_AMOUNT.MAX);
        };
        return IsStellarAmountConstraint_1;
    }());
    __setFunctionName(_classThis, "IsStellarAmountConstraint");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        IsStellarAmountConstraint = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return IsStellarAmountConstraint = _classThis;
}();
exports.IsStellarAmountConstraint = IsStellarAmountConstraint;
/**
 * Validates that a number is a valid Stellar amount
 * - Minimum: 0.0000001 (Stellar minimum)
 * - Maximum: 1,000,000
 *
 * @param validationOptions - Optional validation options
 * @example
 * ```typescript
 * class PaymentDto {
 *   @IsStellarAmount()
 *   amount: number;
 * }
 * ```
 */
function IsStellarAmount(validationOptions) {
    return function (object, propertyName) {
        (0, class_validator_1.registerDecorator)({
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            constraints: [],
            validator: IsStellarAmountConstraint,
        });
    };
}
