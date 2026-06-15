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
exports.SorobanRpcService = void 0;
// src/soroban/soroban-rpc.service.ts
var common_1 = require("@nestjs/common");
var stellar_sdk_1 = require("@stellar/stellar-sdk");
var SorobanRpcService = function () {
    var _classDecorators = [(0, common_1.Injectable)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var SorobanRpcService = _classThis = /** @class */ (function () {
        function SorobanRpcService_1(configService, metricsService) {
            var _a, _b, _c, _d;
            this.configService = configService;
            this.metricsService = metricsService;
            this.logger = new common_1.Logger(SorobanRpcService.name);
            this.activeIndex = 0;
            var configuredUrls = (_a = this.configService.get('stellar.sorobanRpcUrls')) !== null && _a !== void 0 ? _a : [];
            var primaryUrl = (_b = this.configService.get('stellar.sorobanRpcUrl')) !== null && _b !== void 0 ? _b : 'https://soroban-testnet.stellar.org';
            this.rpcUrls = Array.from(new Set(__spreadArray([primaryUrl], configuredUrls, true)));
            this.requestTimeoutMs = Number((_c = this.configService.get('SOROBAN_RPC_TIMEOUT_MS')) !== null && _c !== void 0 ? _c : 10000);
            this.maxRetries = Math.max(1, Number((_d = this.configService.get('SOROBAN_RPC_MAX_RETRIES')) !== null && _d !== void 0 ? _d : 3));
            this.metricsService.setSorobanRpcActiveEndpoint(this.rpcUrls[this.activeIndex], this.rpcUrls);
            this.logger.log("Soroban RPC initialized with ".concat(this.rpcUrls.length, " endpoint(s). Active: ").concat(this.rpcUrls[this.activeIndex]));
        }
        SorobanRpcService_1.prototype.createServer = function (url) {
            return new stellar_sdk_1.rpc.Server(url, { allowHttp: false });
        };
        SorobanRpcService_1.prototype.getActiveUrl = function () {
            return this.rpcUrls[this.activeIndex];
        };
        SorobanRpcService_1.prototype.rotateEndpoint = function (reason) {
            if (this.rpcUrls.length <= 1)
                return;
            var previous = this.getActiveUrl();
            this.activeIndex = (this.activeIndex + 1) % this.rpcUrls.length;
            var next = this.getActiveUrl();
            this.metricsService.recordSorobanRpcFailover(previous, next, reason);
            this.metricsService.setSorobanRpcActiveEndpoint(next, this.rpcUrls);
            this.logger.warn("Soroban RPC failover: ".concat(previous, " -> ").concat(next, " (").concat(reason, ")"));
        };
        SorobanRpcService_1.prototype.isTransientError = function (error) {
            var _a;
            var message = String((_a = error === null || error === void 0 ? void 0 : error.message) !== null && _a !== void 0 ? _a : error).toLowerCase();
            return (message.includes('timeout') ||
                message.includes('network') ||
                message.includes('fetch') ||
                message.includes('econn') ||
                message.includes('429') ||
                message.includes('503') ||
                message.includes('502') ||
                message.includes('500'));
        };
        SorobanRpcService_1.prototype.withTimeout = function (promise, operation) {
            return __awaiter(this, void 0, void 0, function () {
                var timeout, timeoutPromise;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            timeoutPromise = new Promise(function (_, reject) {
                                timeout = setTimeout(function () {
                                    reject(new Error("Soroban RPC ".concat(operation, " timed out after ").concat(_this.requestTimeoutMs, "ms")));
                                }, _this.requestTimeoutMs);
                            });
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, , 3, 4]);
                            return [4 /*yield*/, Promise.race([promise, timeoutPromise])];
                        case 2: return [2 /*return*/, _a.sent()];
                        case 3:
                            if (timeout)
                                clearTimeout(timeout);
                            return [7 /*endfinally*/];
                        case 4: return [2 /*return*/];
                    }
                });
            });
        };
        SorobanRpcService_1.prototype.executeWithFailover = function (operation, call) {
            return __awaiter(this, void 0, void 0, function () {
                var lastError, _loop_1, this_1, attempt, state_1;
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _loop_1 = function (attempt) {
                                var url, startedAt, server, result, error_1, backoffMs_1;
                                return __generator(this, function (_c) {
                                    switch (_c.label) {
                                        case 0:
                                            url = this_1.getActiveUrl();
                                            startedAt = Date.now();
                                            _c.label = 1;
                                        case 1:
                                            _c.trys.push([1, 3, , 5]);
                                            server = this_1.createServer(url);
                                            return [4 /*yield*/, this_1.withTimeout(call(server), operation)];
                                        case 2:
                                            result = _c.sent();
                                            this_1.metricsService.recordExternalCall('soroban_rpc', "".concat(operation, ":").concat(url), (Date.now() - startedAt) / 1000);
                                            return [2 /*return*/, { value: result }];
                                        case 3:
                                            error_1 = _c.sent();
                                            lastError = error_1;
                                            this_1.metricsService.recordError('soroban_rpc', this_1.isTransientError(error_1) ? 'transient' : 'non_transient');
                                            if (!this_1.isTransientError(error_1) || attempt >= this_1.maxRetries) {
                                                return [2 /*return*/, "break"];
                                            }
                                            backoffMs_1 = Math.min(250 * Math.pow(2, (attempt - 1)) + Math.floor(Math.random() * 200), 3000);
                                            this_1.rotateEndpoint((_a = error_1.message) !== null && _a !== void 0 ? _a : 'transient-error');
                                            return [4 /*yield*/, new Promise(function (resolve) { return setTimeout(resolve, backoffMs_1); })];
                                        case 4:
                                            _c.sent();
                                            return [3 /*break*/, 5];
                                        case 5: return [2 /*return*/];
                                    }
                                });
                            };
                            this_1 = this;
                            attempt = 1;
                            _b.label = 1;
                        case 1:
                            if (!(attempt <= this.maxRetries)) return [3 /*break*/, 4];
                            return [5 /*yield**/, _loop_1(attempt)];
                        case 2:
                            state_1 = _b.sent();
                            if (typeof state_1 === "object")
                                return [2 /*return*/, state_1.value];
                            if (state_1 === "break")
                                return [3 /*break*/, 4];
                            _b.label = 3;
                        case 3:
                            attempt += 1;
                            return [3 /*break*/, 1];
                        case 4: throw lastError instanceof Error
                            ? lastError
                            : new Error("Soroban RPC ".concat(operation, " failed"));
                    }
                });
            });
        };
        SorobanRpcService_1.prototype.getAccount = function (publicKey) {
            return __awaiter(this, void 0, void 0, function () {
                var err_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, this.executeWithFailover("getAccount", function (server) {
                                    return server.getAccount(publicKey);
                                })];
                        case 1: return [2 /*return*/, _a.sent()];
                        case 2:
                            err_1 = _a.sent();
                            throw new Error("account \"".concat(publicKey, "\" does not exist on the network"));
                        case 3: return [2 /*return*/];
                    }
                });
            });
        };
        SorobanRpcService_1.prototype.simulateTransaction = function (tx) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.executeWithFailover("simulateTransaction", function (server) {
                            return server.simulateTransaction(tx);
                        })];
                });
            });
        };
        SorobanRpcService_1.prototype.getNetworkPassphrase = function () {
            return __awaiter(this, void 0, void 0, function () {
                var network;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.executeWithFailover("getNetwork", function (server) {
                                return server.getNetwork();
                            })];
                        case 1:
                            network = _a.sent();
                            return [2 /*return*/, network.passphrase];
                    }
                });
            });
        };
        return SorobanRpcService_1;
    }());
    __setFunctionName(_classThis, "SorobanRpcService");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        SorobanRpcService = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return SorobanRpcService = _classThis;
}();
exports.SorobanRpcService = SorobanRpcService;
