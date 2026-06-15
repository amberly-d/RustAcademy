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
exports.BulkPaymentLinksService = void 0;
var common_1 = require("@nestjs/common");
var uuid_1 = require("uuid");
var BulkPaymentLinksService = function () {
    var _classDecorators = [(0, common_1.Injectable)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var BulkPaymentLinksService = _classThis = /** @class */ (function () {
        function BulkPaymentLinksService_1(linksService, featureFlagsService) {
            this.linksService = linksService;
            this.featureFlagsService = featureFlagsService;
            this.logger = new common_1.Logger(BulkPaymentLinksService.name);
            this.MAX_LINKS_PER_REQUEST = 500;
        }
        /**
         * Generate multiple payment links in bulk from JSON array
         * @param items - Array of payment link items
         * @returns Bulk response with all generated links
         */
        BulkPaymentLinksService_1.prototype.generateBulkLinks = function (items) {
            return __awaiter(this, void 0, void 0, function () {
                var startTime, results, errors, batchSize, _loop_1, i, errorDetails, processingTime;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.featureFlagsService.assertActionEnabled("bulk_link_generation")];
                        case 1:
                            _a.sent();
                            startTime = Date.now();
                            // Validate batch size
                            if (items.length === 0) {
                                throw new common_1.BadRequestException("At least one payment link item is required");
                            }
                            if (items.length > this.MAX_LINKS_PER_REQUEST) {
                                throw new common_1.BadRequestException("Maximum ".concat(this.MAX_LINKS_PER_REQUEST, " links per request. Received: ").concat(items.length));
                            }
                            this.logger.log("Generating ".concat(items.length, " payment links in bulk"));
                            results = [];
                            errors = [];
                            batchSize = 50;
                            _loop_1 = function (i) {
                                var batch, batchPromises, batchResults, _i, batchResults_1, result;
                                return __generator(this, function (_b) {
                                    switch (_b.label) {
                                        case 0:
                                            batch = items.slice(i, i + batchSize);
                                            batchPromises = batch.map(function (item, batchIndex) { return __awaiter(_this, void 0, void 0, function () {
                                                var index, link, error_1, errorMessage;
                                                return __generator(this, function (_a) {
                                                    switch (_a.label) {
                                                        case 0:
                                                            index = i + batchIndex;
                                                            _a.label = 1;
                                                        case 1:
                                                            _a.trys.push([1, 3, , 4]);
                                                            return [4 /*yield*/, this.generateSingleLink(item, index)];
                                                        case 2:
                                                            link = _a.sent();
                                                            return [2 /*return*/, { success: true, link: link, index: index }];
                                                        case 3:
                                                            error_1 = _a.sent();
                                                            errorMessage = error_1 instanceof Error ? error_1.message : "Unknown error";
                                                            return [2 /*return*/, { success: false, error: errorMessage, index: index }];
                                                        case 4: return [2 /*return*/];
                                                    }
                                                });
                                            }); });
                                            return [4 /*yield*/, Promise.all(batchPromises)];
                                        case 1:
                                            batchResults = _b.sent();
                                            for (_i = 0, batchResults_1 = batchResults; _i < batchResults_1.length; _i++) {
                                                result = batchResults_1[_i];
                                                if (result.success && result.link) {
                                                    results.push(result.link);
                                                }
                                                else if (!result.success) {
                                                    errors.push({ index: result.index, error: result.error });
                                                }
                                            }
                                            return [2 /*return*/];
                                    }
                                });
                            };
                            i = 0;
                            _a.label = 2;
                        case 2:
                            if (!(i < items.length)) return [3 /*break*/, 5];
                            return [5 /*yield**/, _loop_1(i)];
                        case 3:
                            _a.sent();
                            _a.label = 4;
                        case 4:
                            i += batchSize;
                            return [3 /*break*/, 2];
                        case 5:
                            // If any errors occurred, throw with details
                            if (errors.length > 0) {
                                errorDetails = errors
                                    .slice(0, 5)
                                    .map(function (e) { return "Item ".concat(e.index, ": ").concat(e.error); })
                                    .join("; ");
                                throw new common_1.BadRequestException("Failed to generate ".concat(errors.length, " link(s). ").concat(errorDetails).concat(errors.length > 5 ? "..." : ""));
                            }
                            processingTime = Date.now() - startTime;
                            this.logger.log("Successfully generated ".concat(results.length, " payment links in ").concat(processingTime, "ms"));
                            return [2 /*return*/, {
                                    success: true,
                                    total: results.length,
                                    links: results,
                                    processingTimeMs: processingTime,
                                }];
                    }
                });
            });
        };
        /**
         * Parse CSV content and generate payment links
         * @param csvContent - CSV string with headers
         * @returns Bulk response with all generated links
         */
        BulkPaymentLinksService_1.prototype.generateFromCSV = function (csvContent) {
            return __awaiter(this, void 0, void 0, function () {
                var items;
                return __generator(this, function (_a) {
                    this.logger.log("Parsing CSV for bulk payment link generation");
                    items = this.parseCSV(csvContent);
                    if (items.length === 0) {
                        throw new common_1.BadRequestException("No valid payment link items found in CSV");
                    }
                    this.logger.log("Parsed ".concat(items.length, " items from CSV"));
                    // Generate links
                    return [2 /*return*/, this.generateBulkLinks(items)];
                });
            });
        };
        /**
         * Generate a single payment link
         * @param item - Payment link item
         * @param index - Index in the batch
         * @returns Generated link response
         */
        BulkPaymentLinksService_1.prototype.generateSingleLink = function (item, index) {
            return __awaiter(this, void 0, void 0, function () {
                var request, metadata, id, url;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            request = {
                                amount: item.amount,
                                asset: item.asset,
                                memo: item.memo,
                                memoType: item.memoType,
                                username: item.username,
                                destination: item.destination,
                                referenceId: item.referenceId,
                                privacy: item.privacy,
                                expirationDays: item.expirationDays,
                                acceptedAssets: item.acceptedAssets,
                            };
                            return [4 /*yield*/, this.linksService.generateMetadata(request)];
                        case 1:
                            metadata = _a.sent();
                            id = "link_".concat((0, uuid_1.v4)().substring(0, 12));
                            url = "https://app. RustAcademy.to/pay?".concat(metadata.canonical);
                            return [2 /*return*/, {
                                    id: id,
                                    canonical: metadata.canonical,
                                    url: url,
                                    amount: metadata.amount,
                                    asset: metadata.asset,
                                    username: metadata.username || undefined,
                                    destination: metadata.destination || undefined,
                                    referenceId: metadata.referenceId || undefined,
                                    index: index,
                                }];
                    }
                });
            });
        };
        /**
         * Parse CSV content into payment link items
         * Supports headers: amount, asset, memo, memoType, username, destination, referenceId, privacy, expirationDays, acceptedAssets
         * @param csvContent - CSV string
         * @returns Array of payment link items
         */
        BulkPaymentLinksService_1.prototype.parseCSV = function (csvContent) {
            var lines = csvContent
                .split("\n")
                .map(function (line) { return line.trim(); })
                .filter(function (line) { return line.length > 0; });
            if (lines.length < 2) {
                return [];
            }
            // Parse headers
            var headers = lines[0].split(",").map(function (h) { return h.trim().toLowerCase(); });
            // Validate required header
            if (!headers.includes("amount")) {
                throw new common_1.BadRequestException('CSV must contain "amount" column');
            }
            var items = [];
            var _loop_2 = function (i) {
                var values = this_1.parseCSVLine(lines[i]);
                if (values.length !== headers.length) {
                    this_1.logger.warn("Skipping line ".concat(i + 1, ": column count mismatch"));
                    return "continue";
                }
                // Map CSV row to DTO
                var row = {};
                headers.forEach(function (header, index) {
                    row[header] = values[index];
                });
                var item = {
                    amount: parseFloat(row.amount),
                };
                if (row.asset)
                    item.asset = row.asset;
                if (row.memo)
                    item.memo = row.memo;
                if (row.memotype)
                    item.memoType = row.memoType;
                if (row.username)
                    item.username = row.username;
                if (row.destination)
                    item.destination = row.destination;
                if (row.referenceid)
                    item.referenceId = row.referenceId;
                if (row.privacy)
                    item.privacy = row.privacy.toLowerCase() === "true";
                if (row.expirationdays)
                    item.expirationDays = parseInt(row.expirationDays, 10);
                if (row.acceptedassets) {
                    item.acceptedAssets = row.acceptedassets
                        .split("|")
                        .map(function (a) { return a.trim(); })
                        .filter(function (a) { return a.length > 0; });
                }
                // Validate amount
                if (isNaN(item.amount) || item.amount <= 0) {
                    this_1.logger.warn("Skipping line ".concat(i + 1, ": invalid amount"));
                    return "continue";
                }
                items.push(item);
            };
            var this_1 = this;
            // Parse data rows
            for (var i = 1; i < lines.length; i++) {
                _loop_2(i);
            }
            return items;
        };
        /**
         * Parse a single CSV line, handling quoted values
         * @param line - CSV line
         * @returns Array of values
         */
        BulkPaymentLinksService_1.prototype.parseCSVLine = function (line) {
            var values = [];
            var current = "";
            var inQuotes = false;
            for (var i = 0; i < line.length; i++) {
                var char = line[i];
                if (char === '"') {
                    inQuotes = !inQuotes;
                }
                else if (char === "," && !inQuotes) {
                    values.push(current.trim());
                    current = "";
                }
                else {
                    current += char;
                }
            }
            values.push(current.trim());
            return values;
        };
        return BulkPaymentLinksService_1;
    }());
    __setFunctionName(_classThis, "BulkPaymentLinksService");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        BulkPaymentLinksService = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return BulkPaymentLinksService = _classThis;
}();
exports.BulkPaymentLinksService = BulkPaymentLinksService;
