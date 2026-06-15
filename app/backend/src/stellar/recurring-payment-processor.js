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
exports.RecurringPaymentProcessor = void 0;
var common_1 = require("@nestjs/common");
var StellarSdk = require("@stellar/stellar-sdk");
/**
 * Handles Stellar transaction processing for recurring payments
 */
var RecurringPaymentProcessor = function () {
    var _classDecorators = [(0, common_1.Injectable)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var RecurringPaymentProcessor = _classThis = /** @class */ (function () {
        function RecurringPaymentProcessor_1(config) {
            this.config = config;
            this.logger = new common_1.Logger(RecurringPaymentProcessor.name);
            var network = this.config.get('stellar.network') || 'testnet';
            if (network === 'mainnet') {
                this.horizonUrl = 'https://horizon.stellar.org';
                this.networkPassphrase = StellarSdk.Networks.PUBLIC;
            }
            else {
                this.horizonUrl = 'https://horizon-testnet.stellar.org';
                this.networkPassphrase = StellarSdk.Networks.TESTNET;
            }
            this.server = new StellarSdk.Horizon.Server(this.horizonUrl);
            this.logger.log("Recurring payment processor initialized (".concat(network, " \u2192 ").concat(this.horizonUrl, ")"));
        }
        /**
         * Submit a recurring payment transaction to Stellar
         */
        RecurringPaymentProcessor_1.prototype.submitRecurringPayment = function (params) {
            return __awaiter(this, void 0, void 0, function () {
                var recipientAddress, amount, assetCode, assetIssuer, memo, memoType, sourceKeypair, sourceAccount, transaction, builtTransaction, response, error_1, errorMessage, errorData;
                var _a, _b, _c;
                return __generator(this, function (_d) {
                    switch (_d.label) {
                        case 0:
                            recipientAddress = params.recipientAddress, amount = params.amount, assetCode = params.assetCode, assetIssuer = params.assetIssuer, memo = params.memo, memoType = params.memoType;
                            _d.label = 1;
                        case 1:
                            _d.trys.push([1, 5, , 6]);
                            this.logger.log("Submitting recurring payment: ".concat(amount, " ").concat(assetCode, " to ").concat(recipientAddress));
                            sourceKeypair = this.getSourceKeypair();
                            return [4 /*yield*/, this.server.loadAccount(sourceKeypair.publicKey())];
                        case 2:
                            sourceAccount = _d.sent();
                            return [4 /*yield*/, this.buildPaymentTransaction({
                                    sourceAccount: sourceAccount,
                                    recipientAddress: recipientAddress,
                                    amount: amount,
                                    assetCode: assetCode,
                                    assetIssuer: assetIssuer,
                                    memo: memo,
                                    memoType: memoType,
                                })];
                        case 3:
                            transaction = _d.sent();
                            builtTransaction = transaction.build();
                            builtTransaction.sign(sourceKeypair);
                            return [4 /*yield*/, this.server.submitTransaction(builtTransaction)];
                        case 4:
                            response = _d.sent();
                            this.logger.log("Payment submitted successfully: ".concat(response.hash));
                            return [2 /*return*/, response.hash];
                        case 5:
                            error_1 = _d.sent();
                            errorMessage = error_1 instanceof Error ? error_1.message : 'Unknown error';
                            this.logger.error("Failed to submit payment: ".concat(errorMessage), error_1 instanceof Error ? error_1.stack : undefined);
                            if ((_c = (_b = (_a = error_1.response) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.extras) === null || _c === void 0 ? void 0 : _c.result_codes) {
                                errorData = error_1;
                                this.logger.error("Stellar error codes: ".concat(JSON.stringify(errorData.response.data.extras.result_codes)));
                            }
                            throw new Error("Payment submission failed: ".concat(errorMessage));
                        case 6: return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * Verify if a payment was claimed (for claimable balances)
         */
        RecurringPaymentProcessor_1.prototype.verifyPaymentCompletion = function (transactionHash) {
            return __awaiter(this, void 0, void 0, function () {
                var tx, error_2, errorMessage;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, this.server.transactions().transaction(transactionHash).call()];
                        case 1:
                            tx = _a.sent();
                            return [2 /*return*/, tx.successful];
                        case 2:
                            error_2 = _a.sent();
                            errorMessage = error_2 instanceof Error ? error_2.message : 'Unknown error';
                            this.logger.error("Failed to verify payment: ".concat(errorMessage));
                            return [2 /*return*/, false];
                        case 3: return [2 /*return*/];
                    }
                });
            });
        };
        // ---------------------------------------------------------------------------
        // Private Helper Methods
        // ---------------------------------------------------------------------------
        RecurringPaymentProcessor_1.prototype.getSourceKeypair = function () {
            var secretKey = this.config.get('STELLAR_SECRET_KEY');
            if (!secretKey) {
                throw new Error('STELLAR_SECRET_KEY environment variable is not set');
            }
            return StellarSdk.Keypair.fromSecret(secretKey);
        };
        RecurringPaymentProcessor_1.prototype.buildPaymentTransaction = function (params) {
            return __awaiter(this, void 0, void 0, function () {
                var sourceAccount, recipientAddress, amount, assetCode, assetIssuer, memo, memoType, asset, paymentOperation, memoObj, transactionBuilder;
                return __generator(this, function (_a) {
                    sourceAccount = params.sourceAccount, recipientAddress = params.recipientAddress, amount = params.amount, assetCode = params.assetCode, assetIssuer = params.assetIssuer, memo = params.memo, memoType = params.memoType;
                    asset = this.createAsset(assetCode, assetIssuer);
                    paymentOperation = this.createPaymentOperation({
                        recipientAddress: recipientAddress,
                        amount: amount,
                        asset: asset,
                    });
                    memoObj = memo ? this.createMemo(memo, memoType) : undefined;
                    transactionBuilder = new StellarSdk.TransactionBuilder(sourceAccount, {
                        fee: '100',
                        networkPassphrase: this.networkPassphrase,
                    });
                    transactionBuilder.addOperation(paymentOperation);
                    if (memoObj) {
                        transactionBuilder.addMemo(memoObj);
                    }
                    transactionBuilder.setTimeout(300);
                    return [2 /*return*/, transactionBuilder];
                });
            });
        };
        RecurringPaymentProcessor_1.prototype.createAsset = function (assetCode, assetIssuer) {
            if (assetCode === 'XLM' || !assetIssuer) {
                return StellarSdk.Asset.native();
            }
            return new StellarSdk.Asset(assetCode, assetIssuer);
        };
        RecurringPaymentProcessor_1.prototype.createPaymentOperation = function (params) {
            var recipientAddress = params.recipientAddress, amount = params.amount, asset = params.asset;
            var amountStr = typeof amount === 'number' ? amount.toFixed(7) : amount;
            return StellarSdk.Operation.payment({
                destination: recipientAddress,
                asset: asset,
                amount: amountStr,
            });
        };
        RecurringPaymentProcessor_1.prototype.createMemo = function (memo, memoType) {
            var type = memoType || 'text';
            switch (type) {
                case 'id':
                    return StellarSdk.Memo.id(memo);
                case 'hash':
                    return StellarSdk.Memo.hash(memo);
                case 'return':
                    return StellarSdk.Memo.return(memo);
                case 'text':
                default:
                    return StellarSdk.Memo.text(memo);
            }
        };
        return RecurringPaymentProcessor_1;
    }());
    __setFunctionName(_classThis, "RecurringPaymentProcessor");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        RecurringPaymentProcessor = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return RecurringPaymentProcessor = _classThis;
}();
exports.RecurringPaymentProcessor = RecurringPaymentProcessor;
