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
exports.StagingSeedService = void 0;
var common_1 = require("@nestjs/common");
/**
 * StagingSeedService provides safe test data seeding for staging environments.
 *
 * This service:
 * - Only operates when STAGING_SEED_DATA_ENABLED is true
 * - Creates test data that is clearly marked as test data
 * - Never modifies production data
 * - Uses test prefixes to identify seeded data
 * - Provides idempotent seeding (safe to run multiple times)
 *
 * All seeded data includes:
 * - is_test_data: true flag
 * - test_data_prefix: 'STAGING_SEED_' for easy identification
 * - created_at: timestamp
 * - Safe, non-sensitive test values
 */
var StagingSeedService = function () {
    var _classDecorators = [(0, common_1.Injectable)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var StagingSeedService = _classThis = /** @class */ (function () {
        function StagingSeedService_1(config, supabase) {
            this.config = config;
            this.supabase = supabase;
            this.logger = new common_1.Logger(StagingSeedService.name);
            this.TEST_PREFIX = "STAGING_SEED_";
            this.seeded = false;
        }
        StagingSeedService_1.prototype.onModuleInit = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!(this.config.stagingSeedDataEnabled && !this.seeded)) return [3 /*break*/, 2];
                            return [4 /*yield*/, this.seedTestData()];
                        case 1:
                            _a.sent();
                            _a.label = 2;
                        case 2: return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * Seed test data for staging environment
         * This is idempotent and safe to run multiple times
         */
        StagingSeedService_1.prototype.seedTestData = function () {
            return __awaiter(this, void 0, void 0, function () {
                var existingData, records, seededCount, _i, records_1, record, error_1, error_2;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (this.seeded) {
                                this.logger.log("Test data already seeded, skipping...");
                                return [2 /*return*/];
                            }
                            if (!this.config.stagingSeedDataEnabled) {
                                this.logger.warn("Staging seed data is not enabled");
                                return [2 /*return*/];
                            }
                            this.logger.log("Starting staging test data seeding...");
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 9, , 10]);
                            return [4 /*yield*/, this.checkExistingTestData()];
                        case 2:
                            existingData = _a.sent();
                            if (existingData > 0) {
                                this.logger.log("Found ".concat(existingData, " existing test records, skipping seed"));
                                this.seeded = true;
                                return [2 /*return*/];
                            }
                            records = this.getTestDataRecords();
                            seededCount = 0;
                            _i = 0, records_1 = records;
                            _a.label = 3;
                        case 3:
                            if (!(_i < records_1.length)) return [3 /*break*/, 8];
                            record = records_1[_i];
                            _a.label = 4;
                        case 4:
                            _a.trys.push([4, 6, , 7]);
                            return [4 /*yield*/, this.insertTestRecord(record)];
                        case 5:
                            _a.sent();
                            seededCount++;
                            return [3 /*break*/, 7];
                        case 6:
                            error_1 = _a.sent();
                            this.logger.error("Failed to seed test data for ".concat(record.table, ": ").concat(error_1.message));
                            return [3 /*break*/, 7];
                        case 7:
                            _i++;
                            return [3 /*break*/, 3];
                        case 8:
                            this.seeded = true;
                            this.logger.log("Successfully seeded ".concat(seededCount, " test records"));
                            return [3 /*break*/, 10];
                        case 9:
                            error_2 = _a.sent();
                            this.logger.error("Failed to seed test data: ".concat(error_2.message));
                            return [3 /*break*/, 10];
                        case 10: return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * Check if test data already exists
         */
        StagingSeedService_1.prototype.checkExistingTestData = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _a, data, error, error_3;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _b.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, this.supabase
                                    .getClient()
                                    .from("usernames")
                                    .select("id", { count: "exact", head: true })
                                    .ilike("username", "".concat(this.TEST_PREFIX, "%"))];
                        case 1:
                            _a = _b.sent(), data = _a.data, error = _a.error;
                            if (error) {
                                this.logger.warn("Error checking existing test data: ".concat(error.message));
                                return [2 /*return*/, 0];
                            }
                            return [2 /*return*/, (data === null || data === void 0 ? void 0 : data.length) || 0];
                        case 2:
                            error_3 = _b.sent();
                            this.logger.warn("Error checking existing test data: ".concat(error_3.message));
                            return [2 /*return*/, 0];
                        case 3: return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * Get test data records to seed
         */
        StagingSeedService_1.prototype.getTestDataRecords = function () {
            var timestamp = new Date().toISOString();
            return [
                // Test usernames
                {
                    table: "usernames",
                    data: {
                        username: "".concat(this.TEST_PREFIX, "TEST_USER_1"),
                        wallet_address: "GAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWHF",
                        is_test_data: true,
                        test_data_label: "Test User 1",
                        created_at: timestamp,
                    },
                },
                {
                    table: "usernames",
                    data: {
                        username: "".concat(this.TEST_PREFIX, "TEST_USER_2"),
                        wallet_address: "GBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBHF",
                        is_test_data: true,
                        test_data_label: "Test User 2",
                        created_at: timestamp,
                    },
                },
                {
                    table: "usernames",
                    data: {
                        username: "".concat(this.TEST_PREFIX, "TEST_USER_3"),
                        wallet_address: "GCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCHHF",
                        is_test_data: true,
                        test_data_label: "Test User 3",
                        created_at: timestamp,
                    },
                },
            ];
        };
        /**
         * Insert a single test record
         */
        StagingSeedService_1.prototype.insertTestRecord = function (record) {
            return __awaiter(this, void 0, void 0, function () {
                var error;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.supabase
                                .getClient()
                                .from(record.table)
                                .insert(record.data)];
                        case 1:
                            error = (_a.sent()).error;
                            if (error) {
                                throw new Error("Failed to insert into ".concat(record.table, ": ").concat(error.message));
                            }
                            this.logger.debug("Seeded test data: ".concat(record.table));
                            return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * Clean up all test data (use with caution)
         */
        StagingSeedService_1.prototype.cleanupTestData = function () {
            return __awaiter(this, void 0, void 0, function () {
                var error, error_4;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this.logger.warn("Cleaning up all test data...");
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 3, , 4]);
                            return [4 /*yield*/, this.supabase
                                    .getClient()
                                    .from("usernames")
                                    .delete()
                                    .ilike("username", "".concat(this.TEST_PREFIX, "%"))];
                        case 2:
                            error = (_a.sent()).error;
                            if (error) {
                                throw new Error("Failed to cleanup test data: ".concat(error.message));
                            }
                            this.logger.log("Test data cleanup complete");
                            return [3 /*break*/, 4];
                        case 3:
                            error_4 = _a.sent();
                            this.logger.error("Test data cleanup failed: ".concat(error_4.message));
                            throw error_4;
                        case 4: return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * Check if seeding has been completed
         */
        StagingSeedService_1.prototype.isSeeded = function () {
            return this.seeded;
        };
        return StagingSeedService_1;
    }());
    __setFunctionName(_classThis, "StagingSeedService");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        StagingSeedService = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return StagingSeedService = _classThis;
}();
exports.StagingSeedService = StagingSeedService;
