"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
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
exports.ScamAlertsService = void 0;
var common_1 = require("@nestjs/common");
var scam_rules_constants_1 = require("./constants/scam-rules.constants");
var ScamAlertsService = function () {
    var _classDecorators = [(0, common_1.Injectable)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var ScamAlertsService = _classThis = /** @class */ (function () {
        function ScamAlertsService_1(horizonService) {
            this.horizonService = horizonService;
            this.logger = new common_1.Logger(ScamAlertsService.name);
            // Cache for external blocklist checks (in-memory for simplicity, could be Redis in prod)
            this.blocklistCache = new Map();
            this.blocklistCacheTtl = 5 * 60 * 1000; // 5 minutes
            // Cache for account age checks (to avoid repeated API calls)
            this.accountAgeCache = new Map();
            this.accountAgeCacheTtl = 10 * 60 * 1000; // 10 minutes
            /**
             * List of active scam detection rules
             */
            this.rules = [
                this.checkMissingMemo.bind(this),
                this.checkHighAmount.bind(this),
                this.checkUnknownAsset.bind(this),
                this.checkSuspiciousMemo.bind(this),
                this.checkBlacklistedRecipient.bind(this),
                this.checkHighValueMissingMemo.bind(this),
                this.checkNewlyCreatedAccount.bind(this),
                this.checkHighFrequencyLowValuePattern.bind(this),
                this.checkExternalBlocklists.bind(this),
            ];
        }
        /**
         * Scan a payment link for scam indicators
         */
        ScamAlertsService_1.prototype.scanLink = function (linkData) {
            return __awaiter(this, void 0, void 0, function () {
                var alerts, _i, _a, rule, ruleAlerts, error_1, counts, riskScore, isSafe;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            this.logger.log("Scanning link: ".concat(JSON.stringify(linkData)));
                            alerts = [];
                            _i = 0, _a = this.rules;
                            _b.label = 1;
                        case 1:
                            if (!(_i < _a.length)) return [3 /*break*/, 6];
                            rule = _a[_i];
                            _b.label = 2;
                        case 2:
                            _b.trys.push([2, 4, , 5]);
                            return [4 /*yield*/, rule(linkData)];
                        case 3:
                            ruleAlerts = _b.sent();
                            alerts.push.apply(alerts, ruleAlerts);
                            return [3 /*break*/, 5];
                        case 4:
                            error_1 = _b.sent();
                            this.logger.warn("Error in scam rule: ".concat(error_1.message));
                            return [3 /*break*/, 5];
                        case 5:
                            _i++;
                            return [3 /*break*/, 1];
                        case 6:
                            counts = this.calculateSeverityCounts(alerts);
                            riskScore = this.calculateRiskScore(counts);
                            isSafe = counts.criticalCount === 0 && riskScore < 50;
                            this.logger.log("Scan complete. Risk score: ".concat(riskScore, ", Alerts: ").concat(alerts.length));
                            return [2 /*return*/, __assign({ isSafe: isSafe, riskScore: riskScore, alerts: alerts }, counts)];
                    }
                });
            });
        };
        /**
         * Check if memo is missing when required
         */
        ScamAlertsService_1.prototype.checkMissingMemo = function (linkData) {
            if (scam_rules_constants_1.ASSETS_REQUIRING_MEMO.includes(linkData.assetCode.toUpperCase()) &&
                !linkData.memo) {
                return Promise.resolve([
                    __assign(__assign({}, scam_rules_constants_1.SCAM_RULES[scam_rules_constants_1.ScamAlertType.MISSING_MEMO]), { type: scam_rules_constants_1.ScamAlertType.MISSING_MEMO }),
                ]);
            }
            return Promise.resolve([]);
        };
        /**
         * Check if amount is suspiciously high
         */
        ScamAlertsService_1.prototype.checkHighAmount = function (linkData) {
            var maxAmount = scam_rules_constants_1.MAX_REASONABLE_AMOUNTS[linkData.assetCode.toUpperCase()] ||
                scam_rules_constants_1.MAX_REASONABLE_AMOUNTS.DEFAULT;
            if (linkData.amount > maxAmount) {
                return Promise.resolve([
                    __assign(__assign({}, scam_rules_constants_1.SCAM_RULES[scam_rules_constants_1.ScamAlertType.HIGH_AMOUNT]), { type: scam_rules_constants_1.ScamAlertType.HIGH_AMOUNT }),
                ]);
            }
            return Promise.resolve([]);
        };
        /**
         * Check if asset is not whitelisted
         */
        ScamAlertsService_1.prototype.checkUnknownAsset = function (linkData) {
            if (!scam_rules_constants_1.WHITELISTED_ASSETS.includes(linkData.assetCode.toUpperCase())) {
                return Promise.resolve([
                    __assign(__assign({}, scam_rules_constants_1.SCAM_RULES[scam_rules_constants_1.ScamAlertType.UNKNOWN_ASSET]), { type: scam_rules_constants_1.ScamAlertType.UNKNOWN_ASSET }),
                ]);
            }
            return Promise.resolve([]);
        };
        /**
         * Check for suspicious patterns in memo
         */
        ScamAlertsService_1.prototype.checkSuspiciousMemo = function (linkData) {
            if (!linkData.memo)
                return Promise.resolve([]);
            var alerts = [];
            // Check for external addresses in memo
            if (/G[A-Z0-9]{55}|0x[a-fA-F0-9]{40}/.test(linkData.memo)) {
                alerts.push(__assign(__assign({}, scam_rules_constants_1.SCAM_RULES[scam_rules_constants_1.ScamAlertType.EXTERNAL_ADDRESS_IN_MEMO]), { type: scam_rules_constants_1.ScamAlertType.EXTERNAL_ADDRESS_IN_MEMO }));
                // Critical alert, we can stop here for memo checks or return multiple?
                // The original implementation returned early. Let's return early if critical found to avoid noise.
                return Promise.resolve(alerts);
            }
            // Check for urgency patterns
            if (/urgent|asap|immediately|now|hurry/i.test(linkData.memo)) {
                alerts.push(__assign(__assign({}, scam_rules_constants_1.SCAM_RULES[scam_rules_constants_1.ScamAlertType.URGENCY_PATTERN]), { type: scam_rules_constants_1.ScamAlertType.URGENCY_PATTERN }));
            }
            // Check against suspicious patterns
            for (var _i = 0, SUSPICIOUS_MEMO_PATTERNS_1 = scam_rules_constants_1.SUSPICIOUS_MEMO_PATTERNS; _i < SUSPICIOUS_MEMO_PATTERNS_1.length; _i++) {
                var pattern = SUSPICIOUS_MEMO_PATTERNS_1[_i];
                if (pattern.test(linkData.memo)) {
                    alerts.push(__assign(__assign({}, scam_rules_constants_1.SCAM_RULES[scam_rules_constants_1.ScamAlertType.SUSPICIOUS_MEMO]), { type: scam_rules_constants_1.ScamAlertType.SUSPICIOUS_MEMO }));
                    break; // Only add once per pattern set
                }
            }
            return Promise.resolve(alerts);
        };
        /**
         * Check if recipient is blacklisted
         */
        ScamAlertsService_1.prototype.checkBlacklistedRecipient = function (linkData) {
            if (linkData.recipientAddress &&
                scam_rules_constants_1.BLACKLISTED_RECIPIENTS.includes(linkData.recipientAddress)) {
                return Promise.resolve([
                    __assign(__assign({}, scam_rules_constants_1.SCAM_RULES[scam_rules_constants_1.ScamAlertType.BLACKLISTED_RECIPIENT]), { type: scam_rules_constants_1.ScamAlertType.BLACKLISTED_RECIPIENT }),
                ]);
            }
            // Also check via regex if any blacklist term is in memo? Not required by strict interpretation but good practice.
            // Issue says "Blacklisted domains or usernames". Usually username is recipient.
            // If recipientAddress is username...
            return Promise.resolve([]);
        };
        /**
         * Check if high value transfer is missing a memo
         */
        ScamAlertsService_1.prototype.checkHighValueMissingMemo = function (linkData) {
            if (linkData.memo)
                return Promise.resolve([]);
            var threshold = scam_rules_constants_1.HIGH_VALUE_THRESHOLDS[linkData.assetCode.toUpperCase()] ||
                scam_rules_constants_1.HIGH_VALUE_THRESHOLDS.DEFAULT;
            if (linkData.amount >= threshold) {
                return Promise.resolve([
                    __assign(__assign({}, scam_rules_constants_1.SCAM_RULES[scam_rules_constants_1.ScamAlertType.HIGH_VALUE_MISSING_MEMO]), { type: scam_rules_constants_1.ScamAlertType.HIGH_VALUE_MISSING_MEMO }),
                ]);
            }
            return Promise.resolve([]);
        };
        /**
         * Check if recipient account was created recently
         */
        ScamAlertsService_1.prototype.checkNewlyCreatedAccount = function (linkData) {
            return __awaiter(this, void 0, void 0, function () {
                var cached, horizonUrl, response, accountData, creationDate, now, ageInDays, isRecent, error_2;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!linkData.recipientAddress) {
                                return [2 /*return*/, []];
                            }
                            cached = this.accountAgeCache.get(linkData.recipientAddress);
                            if (cached && (Date.now() - cached.timestamp) < this.accountAgeCacheTtl) {
                                if (cached.isRecent) {
                                    return [2 /*return*/, [
                                            __assign(__assign({}, scam_rules_constants_1.SCAM_RULES[scam_rules_constants_1.ScamAlertType.NEWLY_CREATED_ACCOUNT]), { type: scam_rules_constants_1.ScamAlertType.NEWLY_CREATED_ACCOUNT }),
                                        ]];
                                }
                                return [2 /*return*/, []];
                            }
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 4, , 5]);
                            horizonUrl = process.env.NETWORK === 'mainnet'
                                ? 'https://horizon.stellar.org'
                                : 'https://horizon-testnet.stellar.org';
                            return [4 /*yield*/, fetch("".concat(horizonUrl, "/accounts/").concat(linkData.recipientAddress))];
                        case 2:
                            response = _a.sent();
                            if (!response.ok) {
                                throw new Error("Horizon API returned status ".concat(response.status));
                            }
                            return [4 /*yield*/, response.json()];
                        case 3:
                            accountData = _a.sent();
                            if (accountData && accountData.created_at) {
                                creationDate = new Date(accountData.created_at);
                                now = new Date();
                                ageInDays = (now.getTime() - creationDate.getTime()) / (1000 * 60 * 60 * 24);
                                isRecent = ageInDays <= scam_rules_constants_1.ACCOUNT_AGE_THRESHOLDS.NEW_ACCOUNT_DAYS;
                                // Cache the result
                                this.accountAgeCache.set(linkData.recipientAddress, {
                                    isRecent: isRecent,
                                    timestamp: Date.now()
                                });
                                if (isRecent) {
                                    return [2 /*return*/, [
                                            __assign(__assign({}, scam_rules_constants_1.SCAM_RULES[scam_rules_constants_1.ScamAlertType.NEWLY_CREATED_ACCOUNT]), { type: scam_rules_constants_1.ScamAlertType.NEWLY_CREATED_ACCOUNT }),
                                        ]];
                                }
                            }
                            return [3 /*break*/, 5];
                        case 4:
                            error_2 = _a.sent();
                            // If we can't check the account age, log and continue
                            this.logger.warn("Could not check account age for ".concat(linkData.recipientAddress, ": ").concat(error_2.message));
                            return [3 /*break*/, 5];
                        case 5:
                            // Cache as not recent if we couldn't determine
                            this.accountAgeCache.set(linkData.recipientAddress, {
                                isRecent: false,
                                timestamp: Date.now()
                            });
                            return [2 /*return*/, []];
                    }
                });
            });
        };
        /**
         * Check for high frequency/low value spam patterns
         */
        ScamAlertsService_1.prototype.checkHighFrequencyLowValuePattern = function (linkData) {
            return __awaiter(this, void 0, void 0, function () {
                var timeWindowMs, cutoffDate, cutoffTimeString, horizonUrl, response, data, payments, lowValuePaymentCount, _i, payments_1, payment, amountValue, error_3;
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            if (!linkData.recipientAddress) {
                                return [2 /*return*/, []];
                            }
                            _b.label = 1;
                        case 1:
                            _b.trys.push([1, 4, , 5]);
                            timeWindowMs = scam_rules_constants_1.FREQUENCY_THRESHOLD.TIME_WINDOW_HOURS * 60 * 60 * 1000;
                            cutoffDate = new Date(Date.now() - timeWindowMs);
                            cutoffTimeString = cutoffDate.toISOString();
                            horizonUrl = process.env.NETWORK === 'mainnet'
                                ? 'https://horizon.stellar.org'
                                : 'https://horizon-testnet.stellar.org';
                            return [4 /*yield*/, fetch("".concat(horizonUrl, "/accounts/").concat(linkData.recipientAddress, "/payments") +
                                    "?limit=100&order=desc&created_at:gt=".concat(encodeURIComponent(cutoffTimeString)))];
                        case 2:
                            response = _b.sent();
                            if (!response.ok) {
                                throw new Error("Horizon API returned status ".concat(response.status));
                            }
                            return [4 /*yield*/, response.json()];
                        case 3:
                            data = _b.sent();
                            payments = ((_a = data._embedded) === null || _a === void 0 ? void 0 : _a.records) || [];
                            lowValuePaymentCount = 0;
                            for (_i = 0, payments_1 = payments; _i < payments_1.length; _i++) {
                                payment = payments_1[_i];
                                if (payment.type === 'payment' && payment.amount) {
                                    amountValue = parseFloat(payment.amount);
                                    // If it's a non-native asset, we might need to estimate value differently
                                    if (payment.asset_type !== 'native') {
                                        // For simplicity, we'll use the raw amount but in a real system, 
                                        // we'd convert to USD equivalent
                                        amountValue = parseFloat(payment.amount);
                                    }
                                    if (amountValue <= scam_rules_constants_1.FREQUENCY_THRESHOLD.LOW_VALUE_THRESHOLD) {
                                        lowValuePaymentCount++;
                                    }
                                }
                            }
                            // If we have more than the threshold of low-value payments in the time window
                            if (lowValuePaymentCount >= scam_rules_constants_1.FREQUENCY_THRESHOLD.HIGH_FREQUENCY_THRESHOLD) {
                                return [2 /*return*/, [
                                        __assign(__assign({}, scam_rules_constants_1.SCAM_RULES[scam_rules_constants_1.ScamAlertType.HIGH_FREQUENCY_LOW_VALUE]), { type: scam_rules_constants_1.ScamAlertType.HIGH_FREQUENCY_LOW_VALUE }),
                                    ]];
                            }
                            return [3 /*break*/, 5];
                        case 4:
                            error_3 = _b.sent();
                            // If we can't check the transaction history, log and continue
                            this.logger.warn("Could not check frequency pattern for ".concat(linkData.recipientAddress, ": ").concat(error_3.message));
                            return [3 /*break*/, 5];
                        case 5: return [2 /*return*/, []];
                    }
                });
            });
        };
        /**
         * Check against external blocklists
         */
        ScamAlertsService_1.prototype.checkExternalBlocklists = function (linkData) {
            return __awaiter(this, void 0, void 0, function () {
                var cacheKey, cached, alerts, _i, EXTERNAL_BLOCKLIST_SOURCES_1, source, response, blocklistData, blocklistAddresses, error_4;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!linkData.recipientAddress) {
                                return [2 /*return*/, []];
                            }
                            cacheKey = "blocklist_".concat(linkData.recipientAddress);
                            cached = this.blocklistCache.get(cacheKey);
                            if (cached && (Date.now() - cached.timestamp) < this.blocklistCacheTtl) {
                                if (cached.data.includes(linkData.recipientAddress)) {
                                    return [2 /*return*/, [
                                            __assign(__assign({}, scam_rules_constants_1.SCAM_RULES[scam_rules_constants_1.ScamAlertType.BLACKLISTED_EXTERNAL]), { type: scam_rules_constants_1.ScamAlertType.BLACKLISTED_EXTERNAL }),
                                        ]];
                                }
                                return [2 /*return*/, []];
                            }
                            alerts = [];
                            _i = 0, EXTERNAL_BLOCKLIST_SOURCES_1 = scam_rules_constants_1.EXTERNAL_BLOCKLIST_SOURCES;
                            _a.label = 1;
                        case 1:
                            if (!(_i < EXTERNAL_BLOCKLIST_SOURCES_1.length)) return [3 /*break*/, 7];
                            source = EXTERNAL_BLOCKLIST_SOURCES_1[_i];
                            _a.label = 2;
                        case 2:
                            _a.trys.push([2, 5, , 6]);
                            return [4 /*yield*/, fetch(source.url)];
                        case 3:
                            response = _a.sent();
                            if (!response.ok) {
                                throw new Error("Blocklist API returned status ".concat(response.status));
                            }
                            return [4 /*yield*/, response.json()];
                        case 4:
                            blocklistData = _a.sent();
                            if (Array.isArray(blocklistData)) {
                                blocklistAddresses = blocklistData;
                                if (blocklistAddresses.includes(linkData.recipientAddress)) {
                                    // Cache the result
                                    this.blocklistCache.set(cacheKey, {
                                        data: blocklistAddresses,
                                        timestamp: Date.now()
                                    });
                                    alerts.push(__assign(__assign({}, scam_rules_constants_1.SCAM_RULES[scam_rules_constants_1.ScamAlertType.BLACKLISTED_EXTERNAL]), { type: scam_rules_constants_1.ScamAlertType.BLACKLISTED_EXTERNAL }));
                                    // Break early since this is a critical alert
                                    return [3 /*break*/, 7];
                                }
                                else {
                                    // Still cache the blocklist for this source
                                    this.blocklistCache.set(cacheKey, {
                                        data: blocklistAddresses,
                                        timestamp: Date.now()
                                    });
                                }
                            }
                            return [3 /*break*/, 6];
                        case 5:
                            error_4 = _a.sent();
                            this.logger.warn("Could not fetch external blocklist from ".concat(source.name, ": ").concat(error_4.message));
                            return [3 /*break*/, 6];
                        case 6:
                            _i++;
                            return [3 /*break*/, 1];
                        case 7: return [2 /*return*/, alerts];
                    }
                });
            });
        };
        /**
         * Calculate severity counts
         */
        ScamAlertsService_1.prototype.calculateSeverityCounts = function (alerts) {
            return {
                criticalCount: alerts.filter(function (a) { return a.severity === scam_rules_constants_1.ScamSeverity.CRITICAL; }).length,
                highCount: alerts.filter(function (a) { return a.severity === scam_rules_constants_1.ScamSeverity.HIGH; })
                    .length,
                mediumCount: alerts.filter(function (a) { return a.severity === scam_rules_constants_1.ScamSeverity.MEDIUM; })
                    .length,
                lowCount: alerts.filter(function (a) { return a.severity === scam_rules_constants_1.ScamSeverity.LOW; }).length,
            };
        };
        /**
         * Calculate overall risk score (0-100)
         */
        ScamAlertsService_1.prototype.calculateRiskScore = function (counts) {
            var score = counts.criticalCount * 40 +
                counts.highCount * 25 +
                counts.mediumCount * 15 +
                counts.lowCount * 5;
            return Math.min(score, 100); // Cap at 100
        };
        return ScamAlertsService_1;
    }());
    __setFunctionName(_classThis, "ScamAlertsService");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        ScamAlertsService = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return ScamAlertsService = _classThis;
}();
exports.ScamAlertsService = ScamAlertsService;
