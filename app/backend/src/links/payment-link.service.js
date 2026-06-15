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
exports.PaymentLinkService = void 0;
var common_1 = require("@nestjs/common");
var link_state_machine_1 = require("../links/link-state-machine");
var PaymentLinkService = function () {
    var _classDecorators = [(0, common_1.Injectable)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var PaymentLinkService = _classThis = /** @class */ (function () {
        function PaymentLinkService_1(horizonService, supabaseService, linksService, pathPreviewService) {
            this.horizonService = horizonService;
            this.supabaseService = supabaseService;
            this.linksService = linksService;
            this.pathPreviewService = pathPreviewService;
            this.logger = new common_1.Logger(PaymentLinkService.name);
            this.DEFAULT_EXPIRY_DAYS = 30;
        }
        /**
         * Get the current state of a payment link
         * Payment links are stateless URLs, so we determine state by:
         * 1. Checking if the username exists
         * 2. Checking if a matching payment has been made
         * 3. Checking if the link has expired
         */
        PaymentLinkService_1.prototype.getPaymentLinkStatus = function (params) {
            return __awaiter(this, void 0, void 0, function () {
                var username, amount, _a, asset, memo, acceptedAssets, usernameRecord, destinationPublicKey, metadata, paymentInfo, state, swapOptions, _b, userMessage, availableActions;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            username = params.username, amount = params.amount, _a = params.asset, asset = _a === void 0 ? "XLM" : _a, memo = params.memo, acceptedAssets = params.acceptedAssets;
                            return [4 /*yield*/, this.getUsernameRecord(username)];
                        case 1:
                            usernameRecord = _c.sent();
                            destinationPublicKey = usernameRecord.public_key;
                            return [4 /*yield*/, this.linksService.generateMetadata({
                                    amount: amount,
                                    asset: asset,
                                    username: username,
                                    memo: memo,
                                    acceptedAssets: acceptedAssets,
                                    expirationDays: this.DEFAULT_EXPIRY_DAYS,
                                })];
                        case 2:
                            metadata = _c.sent();
                            return [4 /*yield*/, this.checkIfPaymentMade(destinationPublicKey, metadata.amount, metadata.asset, metadata.memo)];
                        case 3:
                            paymentInfo = _c.sent();
                            state = this.determineLinkState(metadata, paymentInfo);
                            swapOptions = metadata.swapOptions || null;
                            _b = this.buildUserContext(state), userMessage = _b.userMessage, availableActions = _b.availableActions;
                            return [2 /*return*/, {
                                    state: state,
                                    username: metadata.username || username,
                                    amount: metadata.amount,
                                    asset: metadata.asset,
                                    memo: metadata.memo,
                                    destinationPublicKey: destinationPublicKey,
                                    expiresAt: metadata.expiresAt,
                                    transactionHash: (paymentInfo === null || paymentInfo === void 0 ? void 0 : paymentInfo.transactionHash) || null,
                                    paidAt: (paymentInfo === null || paymentInfo === void 0 ? void 0 : paymentInfo.paidAt) || null,
                                    swapOptions: swapOptions,
                                    acceptsMultipleAssets: !!acceptedAssets && acceptedAssets.length > 0,
                                    acceptedAssets: metadata.acceptedAssets || null,
                                    userMessage: userMessage,
                                    availableActions: availableActions,
                                }];
                    }
                });
            });
        };
        /**
         * Get username record from database
         */
        PaymentLinkService_1.prototype.getUsernameRecord = function (username) {
            return __awaiter(this, void 0, void 0, function () {
                var _a, data, error;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, this.supabaseService
                                .getClient()
                                .from("usernames")
                                .select("public_key")
                                .eq("username", username.toLowerCase())
                                .single()];
                        case 1:
                            _a = _b.sent(), data = _a.data, error = _a.error;
                            if (error || !data) {
                                throw new common_1.NotFoundException("Username '".concat(username, "' not found"));
                            }
                            return [2 /*return*/, data];
                    }
                });
            });
        };
        /**
         * Check if a matching payment has been made on-chain
         * Looks for recent payments to the destination with matching amount and memo
         */
        PaymentLinkService_1.prototype.checkIfPaymentMade = function (destinationPublicKey, amount, asset, memo) {
            return __awaiter(this, void 0, void 0, function () {
                var payments, matchingPayment, error_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, this.horizonService.getPayments(destinationPublicKey, undefined, 50)];
                        case 1:
                            payments = _a.sent();
                            matchingPayment = payments.items.find(function (payment) {
                                // Check amount (allow small floating point differences)
                                var paymentAmount = parseFloat(payment.amount);
                                var expectedAmount = parseFloat(amount);
                                var amountMatches = Math.abs(paymentAmount - expectedAmount) < 0.0000001;
                                // Check asset
                                var assetMatches = payment.asset === asset;
                                // Check memo if provided
                                var memoMatches = !memo || payment.memo === memo;
                                return amountMatches && assetMatches && memoMatches;
                            });
                            if (matchingPayment) {
                                return [2 /*return*/, {
                                        transactionHash: matchingPayment.txHash,
                                        paidAt: new Date(matchingPayment.timestamp),
                                    }];
                            }
                            return [2 /*return*/, null];
                        case 2:
                            error_1 = _a.sent();
                            this.logger.error("Failed to check payment status: ".concat(error_1));
                            // If we can't check Horizon, assume payment not made
                            return [2 /*return*/, null];
                        case 3: return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * Determine the current state of the payment link
         */
        PaymentLinkService_1.prototype.determineLinkState = function (metadata, paymentInfo) {
            // If payment has been made, link is PAID
            if (paymentInfo) {
                return link_state_machine_1.LinkState.PAID;
            }
            // Check if link has expired
            if (metadata.expiresAt && new Date(metadata.expiresAt) < new Date()) {
                return link_state_machine_1.LinkState.EXPIRED;
            }
            // Otherwise, link is ACTIVE
            return link_state_machine_1.LinkState.ACTIVE;
        };
        /**
         * Build user-friendly message and available actions based on state
         */
        PaymentLinkService_1.prototype.buildUserContext = function (state) {
            switch (state) {
                case link_state_machine_1.LinkState.ACTIVE:
                    return {
                        userMessage: "This payment link is active and ready to receive payment",
                        availableActions: ["pay", "share"],
                    };
                case link_state_machine_1.LinkState.EXPIRED:
                    return {
                        userMessage: "This payment link has expired. Please request a new payment link.",
                        availableActions: [],
                    };
                case link_state_machine_1.LinkState.PAID:
                    return {
                        userMessage: "Payment completed successfully!",
                        availableActions: ["view_transaction"],
                    };
                case link_state_machine_1.LinkState.REFUNDED:
                    return {
                        userMessage: "This payment has been refunded.",
                        availableActions: [],
                    };
                default:
                    return {
                        userMessage: "Unknown payment link state",
                        availableActions: [],
                    };
            }
        };
        return PaymentLinkService_1;
    }());
    __setFunctionName(_classThis, "PaymentLinkService");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        PaymentLinkService = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return PaymentLinkService = _classThis;
}();
exports.PaymentLinkService = PaymentLinkService;
