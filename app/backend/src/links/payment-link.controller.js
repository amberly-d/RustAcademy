"use strict";
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentLinkController = void 0;
var common_1 = require("@nestjs/common");
var swagger_1 = require("@nestjs/swagger");
var payment_link_status_dto_1 = require("../dto/link/payment-link-status.dto");
var PaymentLinkController = function () {
    var _classDecorators = [(0, swagger_1.ApiTags)("payment-links"), (0, common_1.Controller)("payment-links")];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _instanceExtraInitializers = [];
    var _getPaymentLinkStatus_decorators;
    var PaymentLinkController = _classThis = /** @class */ (function () {
        function PaymentLinkController_1(paymentLinkService) {
            this.paymentLinkService = (__runInitializers(this, _instanceExtraInitializers), paymentLinkService);
        }
        PaymentLinkController_1.prototype.getPaymentLinkStatus = function (username, amount, asset, memo, acceptedAssets) {
            return __awaiter(this, void 0, void 0, function () {
                var amountNum, acceptedAssetsArray;
                return __generator(this, function (_a) {
                    if (!username) {
                        throw new common_1.BadRequestException("username is required");
                    }
                    amountNum = parseFloat(amount);
                    if (isNaN(amountNum) || amountNum <= 0) {
                        throw new common_1.BadRequestException("amount must be a valid positive number");
                    }
                    acceptedAssetsArray = acceptedAssets
                        ? acceptedAssets.split(",").map(function (a) { return a.trim(); })
                        : undefined;
                    return [2 /*return*/, this.paymentLinkService.getPaymentLinkStatus({
                            username: username,
                            amount: amountNum,
                            asset: asset || "XLM",
                            memo: memo,
                            acceptedAssets: acceptedAssetsArray,
                        })];
                });
            });
        };
        return PaymentLinkController_1;
    }());
    __setFunctionName(_classThis, "PaymentLinkController");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _getPaymentLinkStatus_decorators = [(0, common_1.Get)("status"), (0, common_1.HttpCode)(common_1.HttpStatus.OK), (0, swagger_1.ApiOperation)({
                summary: "Get payment link status",
                description: "Returns the current state (active/expired/paid/refunded) of a payment link " +
                    "based on username, amount, and optional memo. Checks on-chain to determine if paid.",
            }), (0, swagger_1.ApiQuery)({
                name: "username",
                description: "Username for the payment link",
                example: "john_doe",
            }), (0, swagger_1.ApiQuery)({ name: "amount", description: "Payment amount", example: 100 }), (0, swagger_1.ApiQuery)({
                name: "asset",
                description: "Asset code (default: XLM)",
                example: "XLM",
                required: false,
            }), (0, swagger_1.ApiQuery)({
                name: "memo",
                description: "Optional memo text",
                example: "Invoice #123",
                required: false,
            }), (0, swagger_1.ApiQuery)({
                name: "acceptedAssets",
                description: "Comma-separated list of accepted assets",
                example: "XLM,USDC",
                required: false,
            }), (0, swagger_1.ApiResponse)({
                status: 200,
                description: "Payment link status retrieved successfully",
                type: payment_link_status_dto_1.PaymentLinkStatusDto,
            }), (0, swagger_1.ApiResponse)({
                status: 404,
                description: "Username not found",
            })];
        __esDecorate(_classThis, null, _getPaymentLinkStatus_decorators, { kind: "method", name: "getPaymentLinkStatus", static: false, private: false, access: { has: function (obj) { return "getPaymentLinkStatus" in obj; }, get: function (obj) { return obj.getPaymentLinkStatus; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        PaymentLinkController = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return PaymentLinkController = _classThis;
}();
exports.PaymentLinkController = PaymentLinkController;
