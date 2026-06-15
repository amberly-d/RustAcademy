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
exports.DemoService = void 0;
var common_1 = require("@nestjs/common");
var demo_fixtures_1 = require("./demo.fixtures");
var DemoService = function () {
    var _classDecorators = [(0, common_1.Injectable)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var DemoService = _classThis = /** @class */ (function () {
        function DemoService_1(configService, supabaseService) {
            this.configService = configService;
            this.supabaseService = supabaseService;
            this.logger = new common_1.Logger(DemoService.name);
        }
        /**
         * Throws {@link ForbiddenException} unless the active Stellar network is
         * `"testnet"`.  Called at the top of every public method.
         */
        DemoService_1.prototype.assertTestnet = function () {
            var _a, _b, _c, _d;
            var network = (_d = (_c = (_b = (_a = this.configService.get('stellar')) === null || _a === void 0 ? void 0 : _a.network) !== null && _b !== void 0 ? _b : process.env['NETWORK']) !== null && _c !== void 0 ? _c : process.env['STELLAR_NETWORK']) !== null && _d !== void 0 ? _d : 'testnet';
            if (network !== 'testnet') {
                throw new common_1.ForbiddenException({
                    error: 'DEMO_MODE_UNAVAILABLE',
                    message: 'Demo mode is only available on testnet.',
                });
            }
        };
        /**
         * Upserts all demo fixtures into the database.
         * Idempotent — safe to call multiple times; existing demo rows are
         * overwritten with the same values so state stays deterministic.
         */
        DemoService_1.prototype.seed = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _a, linkResult, txResult;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            this.assertTestnet();
                            return [4 /*yield*/, Promise.all([
                                    this.seedLinks(),
                                    this.seedTransactions(),
                                ])];
                        case 1:
                            _a = _b.sent(), linkResult = _a[0], txResult = _a[1];
                            this.logger.log("Demo seed complete: ".concat(linkResult.seeded, " links, ").concat(txResult.seeded, " transactions"));
                            return [2 /*return*/, {
                                    seededLinks: linkResult.seeded,
                                    seededTransactions: txResult.seeded,
                                    skippedLinks: linkResult.skipped,
                                    skippedTransactions: txResult.skipped,
                                }];
                    }
                });
            });
        };
        /**
         * Removes all rows whose `id` matches a known demo fixture ID.
         * Does not touch any non-demo data.
         */
        DemoService_1.prototype.clear = function () {
            return __awaiter(this, void 0, void 0, function () {
                var linkIds, txIds, client, _a, linkDel, txDel, deletedLinks, deletedTransactions;
                var _b, _c;
                return __generator(this, function (_d) {
                    switch (_d.label) {
                        case 0:
                            this.assertTestnet();
                            linkIds = demo_fixtures_1.DEMO_LINKS.map(function (l) { return l.id; });
                            txIds = demo_fixtures_1.DEMO_TRANSACTIONS.map(function (t) { return t.id; });
                            client = this.supabaseService.getClient();
                            return [4 /*yield*/, Promise.all([
                                    client.from('links').delete().in('id', linkIds).select('id'),
                                    client.from('transactions').delete().in('id', txIds).select('id'),
                                ])];
                        case 1:
                            _a = _d.sent(), linkDel = _a[0], txDel = _a[1];
                            deletedLinks = ((_b = linkDel.data) !== null && _b !== void 0 ? _b : []).length;
                            deletedTransactions = ((_c = txDel.data) !== null && _c !== void 0 ? _c : []).length;
                            this.logger.log("Demo clear complete: ".concat(deletedLinks, " links, ").concat(deletedTransactions, " transactions removed"));
                            return [2 /*return*/, { deletedLinks: deletedLinks, deletedTransactions: deletedTransactions }];
                    }
                });
            });
        };
        /**
         * Returns which demo fixtures are currently present in the database.
         * Useful for the controller to report partial-seed state.
         */
        DemoService_1.prototype.status = function () {
            return __awaiter(this, void 0, void 0, function () {
                var linkIds, txIds, client, _a, linkRows, txRows;
                var _b, _c;
                return __generator(this, function (_d) {
                    switch (_d.label) {
                        case 0:
                            this.assertTestnet();
                            linkIds = demo_fixtures_1.DEMO_LINKS.map(function (l) { return l.id; });
                            txIds = demo_fixtures_1.DEMO_TRANSACTIONS.map(function (t) { return t.id; });
                            client = this.supabaseService.getClient();
                            return [4 /*yield*/, Promise.all([
                                    client.from('links').select('id').in('id', linkIds),
                                    client.from('transactions').select('id').in('id', txIds),
                                ])];
                        case 1:
                            _a = _d.sent(), linkRows = _a[0], txRows = _a[1];
                            return [2 /*return*/, {
                                    network: 'testnet',
                                    seededLinks: ((_b = linkRows.data) !== null && _b !== void 0 ? _b : []).map(function (r) { return r.id; }),
                                    seededTransactions: ((_c = txRows.data) !== null && _c !== void 0 ? _c : []).map(function (r) { return r.id; }),
                                }];
                    }
                });
            });
        };
        DemoService_1.prototype.seedLinks = function () {
            return __awaiter(this, void 0, void 0, function () {
                var client, rows, _a, data, error, seeded, skipped;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            client = this.supabaseService.getClient();
                            rows = demo_fixtures_1.DEMO_LINKS.map(this.mapLink);
                            return [4 /*yield*/, client
                                    .from('links')
                                    .upsert(rows, { onConflict: 'id', ignoreDuplicates: false })
                                    .select('id')];
                        case 1:
                            _a = _b.sent(), data = _a.data, error = _a.error;
                            if (error) {
                                this.logger.error("Failed to seed demo links: ".concat(error.message));
                                // Return 0/total so the caller knows nothing was inserted
                                return [2 /*return*/, { seeded: 0, skipped: rows.length }];
                            }
                            seeded = (data !== null && data !== void 0 ? data : []).length;
                            skipped = rows.length - seeded;
                            return [2 /*return*/, { seeded: seeded, skipped: skipped }];
                    }
                });
            });
        };
        DemoService_1.prototype.seedTransactions = function () {
            return __awaiter(this, void 0, void 0, function () {
                var client, rows, _a, data, error, seeded, skipped;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            client = this.supabaseService.getClient();
                            rows = demo_fixtures_1.DEMO_TRANSACTIONS.map(this.mapTransaction);
                            return [4 /*yield*/, client
                                    .from('transactions')
                                    .upsert(rows, { onConflict: 'id', ignoreDuplicates: false })
                                    .select('id')];
                        case 1:
                            _a = _b.sent(), data = _a.data, error = _a.error;
                            if (error) {
                                this.logger.error("Failed to seed demo transactions: ".concat(error.message));
                                return [2 /*return*/, { seeded: 0, skipped: rows.length }];
                            }
                            seeded = (data !== null && data !== void 0 ? data : []).length;
                            skipped = rows.length - seeded;
                            return [2 /*return*/, { seeded: seeded, skipped: skipped }];
                    }
                });
            });
        };
        // Map camelCase fixture shapes → snake_case DB columns
        DemoService_1.prototype.mapLink = function (link) {
            return {
                id: link.id,
                slug: link.slug,
                label: link.label,
                asset_code: link.assetCode,
                asset_issuer: link.assetIssuer,
                amount: link.amount,
                recipient_address: link.recipientAddress,
                memo: link.memo,
                active: link.active,
                created_at: link.createdAt,
            };
        };
        DemoService_1.prototype.mapTransaction = function (tx) {
            return {
                id: tx.id,
                link_id: tx.linkId,
                sender_address: tx.senderAddress,
                recipient_address: tx.recipientAddress,
                asset_code: tx.assetCode,
                asset_issuer: tx.assetIssuer,
                amount: tx.amount,
                stellar_tx_hash: tx.stellarTxHash,
                status: tx.status,
                created_at: tx.createdAt,
            };
        };
        return DemoService_1;
    }());
    __setFunctionName(_classThis, "DemoService");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        DemoService = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return DemoService = _classThis;
}();
exports.DemoService = DemoService;
