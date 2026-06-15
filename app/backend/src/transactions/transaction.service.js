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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionsService = void 0;
var common_1 = require("@nestjs/common");
var crypto_1 = require("crypto");
var StellarSdk = require("@stellar/stellar-sdk");
var stellar_sdk_1 = require("@stellar/stellar-sdk");
var param_builder_1 = require("./utils/param-builder");
var soroban_errors_1 = require("../common/soroban-errors");
var soroban_errors_2 = require("../common/soroban-errors");
var STROOPS_PER_XLM = 10000000;
var BASE_FEE = 100; // stroops
var TransactionsService = function () {
    var _classDecorators = [(0, common_1.Injectable)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var TransactionsService = _classThis = /** @class */ (function () {
        function TransactionsService_1(sorobanRpcService) {
            this.sorobanRpcService = sorobanRpcService;
            this.logger = new common_1.Logger(TransactionsService.name);
            this.idempotencyResponses = new Map();
            this.idempotencyFingerprints = new Map();
        }
        TransactionsService_1.prototype.composeTransaction = function (dto) {
            return __awaiter(this, void 0, void 0, function () {
                var payloadFingerprint, idempotencyKey, fingerprintForKey, cached, startTime, networkPassphrase, _a, account, err_1, scParams, contract, operation, tx, simulationResult, err_2, simulationLatencyMs, mapped, failedResponse, restoreResponse, assembledTx, sorobanData, resources, resourceEstimate, minResourceFee, totalFeeStroops, feeEstimate, unsignedXdr, response;
                var _b, _c, _d, _e, _f;
                return __generator(this, function (_g) {
                    switch (_g.label) {
                        case 0:
                            this.validatePayload(dto);
                            payloadFingerprint = this.buildFingerprint(dto);
                            idempotencyKey = (_b = dto.idempotencyKey) !== null && _b !== void 0 ? _b : payloadFingerprint;
                            fingerprintForKey = this.idempotencyFingerprints.get(idempotencyKey);
                            if (fingerprintForKey && fingerprintForKey !== payloadFingerprint) {
                                throw new common_1.BadRequestException("This idempotency key was already used with a different payload.");
                            }
                            cached = this.idempotencyResponses.get(idempotencyKey);
                            if (cached) {
                                return [2 /*return*/, cached];
                            }
                            startTime = Date.now();
                            if (!((_c = dto.networkPassphrase) !== null && _c !== void 0)) return [3 /*break*/, 1];
                            _a = _c;
                            return [3 /*break*/, 3];
                        case 1: return [4 /*yield*/, this.sorobanRpcService.getNetworkPassphrase()];
                        case 2:
                            _a = (_g.sent());
                            _g.label = 3;
                        case 3:
                            networkPassphrase = _a;
                            _g.label = 4;
                        case 4:
                            _g.trys.push([4, 6, , 7]);
                            return [4 /*yield*/, this.sorobanRpcService.getAccount(dto.sourceAccount)];
                        case 5:
                            account = _g.sent();
                            return [3 /*break*/, 7];
                        case 6:
                            err_1 = _g.sent();
                            return [2 /*return*/, {
                                    success: false,
                                    error: err_1.message,
                                    userMessage: "Source account not found: ".concat(err_1.message),
                                }];
                        case 7:
                            try {
                                scParams = dto.params.map(param_builder_1.buildScVal);
                            }
                            catch (err) {
                                throw new common_1.BadRequestException("Invalid parameter: ".concat(err.message));
                            }
                            contract = new StellarSdk.Contract(dto.contractId);
                            operation = contract.call.apply(contract, __spreadArray([dto.method], scParams, false));
                            tx = new StellarSdk.TransactionBuilder(account, {
                                fee: String(BASE_FEE),
                                networkPassphrase: networkPassphrase,
                            })
                                .addOperation(operation)
                                .setTimeout(StellarSdk.TimeoutInfinite)
                                .build();
                            // 6. Simulate (preflight)
                            this.logger.debug("Simulating transaction: ".concat(dto.contractId, "::").concat(dto.method));
                            _g.label = 8;
                        case 8:
                            _g.trys.push([8, 10, , 11]);
                            return [4 /*yield*/, this.sorobanRpcService.simulateTransaction(tx)];
                        case 9:
                            simulationResult = _g.sent();
                            return [3 /*break*/, 11];
                        case 10:
                            err_2 = _g.sent();
                            this.logger.error("RPC simulation request failed", err_2);
                            throw new common_1.InternalServerErrorException("Failed to reach Soroban RPC provider.");
                        case 11:
                            simulationLatencyMs = Date.now() - startTime;
                            // 7. Handle simulation failure
                            if (stellar_sdk_1.rpc.Api.isSimulationError(simulationResult)) {
                                mapped = (0, soroban_errors_1.mapSorobanError)(simulationResult.error);
                                this.logger.warn("Simulation failed [".concat(mapped.code, "]: ").concat(simulationResult.error));
                                failedResponse = {
                                    success: false,
                                    error: mapped.code,
                                    userMessage: mapped.message,
                                    details: mapped.details,
                                };
                                this.rememberResponse(idempotencyKey, payloadFingerprint, failedResponse);
                                return [2 /*return*/, failedResponse];
                            }
                            // 8. Handle restoration needed
                            if (stellar_sdk_1.rpc.Api.isSimulationRestore(simulationResult)) {
                                restoreResponse = {
                                    success: false,
                                    error: soroban_errors_2.SorobanErrorCode.RESTORE_REQUIRED,
                                    userMessage: "Some contract state entries have expired and must be restored before this transaction can proceed. Please run a restore operation first.",
                                    details: {
                                        restorePreamble: simulationResult.restorePreamble,
                                    },
                                };
                                this.rememberResponse(idempotencyKey, payloadFingerprint, restoreResponse);
                                return [2 /*return*/, restoreResponse];
                            }
                            assembledTx = stellar_sdk_1.rpc.assembleTransaction(tx, simulationResult).build();
                            sorobanData = simulationResult.transactionData.build();
                            resources = sorobanData.resources();
                            resourceEstimate = {
                                cpuInstructions: Number(resources.instructions()),
                                memoryBytes: 0, // not exposed by Soroban RPC simulate response
                                ledgerReads: resources.footprint().readOnly().length +
                                    resources.footprint().readWrite().length,
                                ledgerWrites: resources.footprint().readWrite().length,
                                eventBytes: Number((_d = resources.writeBytes()) !== null && _d !== void 0 ? _d : 0),
                                returnValueBytes: ((_e = simulationResult.result) === null || _e === void 0 ? void 0 : _e.retval)
                                    ? simulationResult.result.retval.toXDR().length
                                    : 0,
                            };
                            minResourceFee = (_f = simulationResult.minResourceFee) !== null && _f !== void 0 ? _f : "0";
                            totalFeeStroops = BASE_FEE + Number(minResourceFee);
                            feeEstimate = {
                                baseFee: String(BASE_FEE),
                                inclusionFee: minResourceFee,
                                totalFee: String(totalFeeStroops),
                                totalFeeXLM: (totalFeeStroops / STROOPS_PER_XLM).toFixed(7),
                            };
                            unsignedXdr = assembledTx.toEnvelope().toXDR("base64");
                            this.logger.log("Transaction composed successfully in ".concat(simulationLatencyMs, "ms \u2014 ") +
                                "".concat(dto.contractId, "::").concat(dto.method, ", fee: ").concat(totalFeeStroops, " stroops"));
                            response = {
                                success: true,
                                unsignedXdr: unsignedXdr,
                                resourceEstimate: resourceEstimate,
                                feeEstimate: feeEstimate,
                                minResourceFee: minResourceFee,
                                simulationLatencyMs: simulationLatencyMs,
                                idempotencyKey: idempotencyKey,
                                simulationSummary: {
                                    status: "success",
                                    footprint: {
                                        readOnly: resources.footprint().readOnly().length,
                                        readWrite: resources.footprint().readWrite().length,
                                    },
                                    estimatedCost: {
                                        cpuInstructions: resourceEstimate.cpuInstructions,
                                        ledgerReads: resourceEstimate.ledgerReads,
                                        ledgerWrites: resourceEstimate.ledgerWrites,
                                        eventBytes: resourceEstimate.eventBytes,
                                        returnValueBytes: resourceEstimate.returnValueBytes,
                                    },
                                },
                            };
                            this.rememberResponse(idempotencyKey, payloadFingerprint, response);
                            return [2 /*return*/, response];
                    }
                });
            });
        };
        TransactionsService_1.prototype.validatePayload = function (dto) {
            var _a, _b;
            var payloadSize = Buffer.byteLength(JSON.stringify((_a = dto.params) !== null && _a !== void 0 ? _a : []), "utf8");
            if (payloadSize > 4096) {
                throw new common_1.BadRequestException("Transaction parameters exceed the 4KB limit.");
            }
            if (((_b = dto.params) !== null && _b !== void 0 ? _b : []).length > 16) {
                throw new common_1.BadRequestException("A maximum of 16 contract parameters is supported.");
            }
        };
        TransactionsService_1.prototype.buildFingerprint = function (dto) {
            var _a;
            var normalized = JSON.stringify({
                contractId: dto.contractId,
                method: dto.method,
                params: dto.params,
                sourceAccount: dto.sourceAccount,
                networkPassphrase: (_a = dto.networkPassphrase) !== null && _a !== void 0 ? _a : "__default__",
            });
            return (0, crypto_1.createHash)("sha256").update(normalized).digest("hex");
        };
        TransactionsService_1.prototype.rememberResponse = function (idempotencyKey, fingerprint, response) {
            this.idempotencyFingerprints.set(idempotencyKey, fingerprint);
            this.idempotencyResponses.set(idempotencyKey, response);
        };
        return TransactionsService_1;
    }());
    __setFunctionName(_classThis, "TransactionsService");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        TransactionsService = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return TransactionsService = _classThis;
}();
exports.TransactionsService = TransactionsService;
