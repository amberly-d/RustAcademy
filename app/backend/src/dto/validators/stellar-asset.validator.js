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
exports.IsStellarAssetConstraint = exports.STELLAR_ASSETS = void 0;
exports.IsStellarAsset = IsStellarAsset;
var class_validator_1 = require("class-validator");
/**
 * Stellar asset whitelist
 */
exports.STELLAR_ASSETS = [
    'XLM',
    'USDC',
    'AQUA',
    'yXLM',
];
/**
 * Stellar asset validation constraint
 * Validates that asset code is in the whitelist
 */
var IsStellarAssetConstraint = function () {
    var _classDecorators = [(0, class_validator_1.ValidatorConstraint)({ async: false })];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var IsStellarAssetConstraint = _classThis = /** @class */ (function () {
        function IsStellarAssetConstraint_1() {
        }
        IsStellarAssetConstraint_1.prototype.validate = function (asset) {
            if (typeof asset !== 'string') {
                return false;
            }
            return exports.STELLAR_ASSETS.includes(asset);
        };
        IsStellarAssetConstraint_1.prototype.defaultMessage = function () {
            return "Asset must be one of: ".concat(exports.STELLAR_ASSETS.join(', '));
        };
        return IsStellarAssetConstraint_1;
    }());
    __setFunctionName(_classThis, "IsStellarAssetConstraint");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        IsStellarAssetConstraint = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return IsStellarAssetConstraint = _classThis;
}();
exports.IsStellarAssetConstraint = IsStellarAssetConstraint;
/**
 * Validates that a string is a whitelisted Stellar asset
 * - Must be one of: XLM, USDC, AQUA, yXLM
 *
 * @param validationOptions - Optional validation options
 * @example
 * ```typescript
 * class PaymentDto {
 *   @IsStellarAsset()
 *   asset: string;
 * }
 * ```
 */
function IsStellarAsset(validationOptions) {
    return function (object, propertyName) {
        (0, class_validator_1.registerDecorator)({
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            constraints: [],
            validator: IsStellarAssetConstraint,
        });
    };
}
