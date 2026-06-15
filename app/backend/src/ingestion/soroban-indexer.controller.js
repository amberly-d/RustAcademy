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
exports.SorobanIndexerController = void 0;
var common_1 = require("@nestjs/common");
var swagger_1 = require("@nestjs/swagger");
var class_validator_1 = require("class-validator");
var ReindexDto = function () {
    var _a;
    var _contractId_decorators;
    var _contractId_initializers = [];
    var _contractId_extraInitializers = [];
    var _fromLedger_decorators;
    var _fromLedger_initializers = [];
    var _fromLedger_extraInitializers = [];
    var _toLedger_decorators;
    var _toLedger_initializers = [];
    var _toLedger_extraInitializers = [];
    var _force_decorators;
    var _force_initializers = [];
    var _force_extraInitializers = [];
    return _a = /** @class */ (function () {
            function ReindexDto() {
                this.contractId = __runInitializers(this, _contractId_initializers, void 0);
                this.fromLedger = (__runInitializers(this, _contractId_extraInitializers), __runInitializers(this, _fromLedger_initializers, void 0));
                this.toLedger = (__runInitializers(this, _fromLedger_extraInitializers), __runInitializers(this, _toLedger_initializers, void 0));
                /**
                 * When true, ignores the stored checkpoint and re-processes the full range.
                 * Idempotent upserts ensure no duplicate records are created.
                 */
                this.force = (__runInitializers(this, _toLedger_extraInitializers), __runInitializers(this, _force_initializers, void 0));
                __runInitializers(this, _force_extraInitializers);
            }
            return ReindexDto;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _contractId_decorators = [(0, class_validator_1.IsString)(), (0, class_validator_1.IsNotEmpty)()];
            _fromLedger_decorators = [(0, class_validator_1.IsInt)(), (0, class_validator_1.Min)(1)];
            _toLedger_decorators = [(0, class_validator_1.IsInt)(), (0, class_validator_1.Min)(1)];
            _force_decorators = [(0, class_validator_1.IsBoolean)(), (0, class_validator_1.IsOptional)()];
            __esDecorate(null, null, _contractId_decorators, { kind: "field", name: "contractId", static: false, private: false, access: { has: function (obj) { return "contractId" in obj; }, get: function (obj) { return obj.contractId; }, set: function (obj, value) { obj.contractId = value; } }, metadata: _metadata }, _contractId_initializers, _contractId_extraInitializers);
            __esDecorate(null, null, _fromLedger_decorators, { kind: "field", name: "fromLedger", static: false, private: false, access: { has: function (obj) { return "fromLedger" in obj; }, get: function (obj) { return obj.fromLedger; }, set: function (obj, value) { obj.fromLedger = value; } }, metadata: _metadata }, _fromLedger_initializers, _fromLedger_extraInitializers);
            __esDecorate(null, null, _toLedger_decorators, { kind: "field", name: "toLedger", static: false, private: false, access: { has: function (obj) { return "toLedger" in obj; }, get: function (obj) { return obj.toLedger; }, set: function (obj, value) { obj.toLedger = value; } }, metadata: _metadata }, _toLedger_initializers, _toLedger_extraInitializers);
            __esDecorate(null, null, _force_decorators, { kind: "field", name: "force", static: false, private: false, access: { has: function (obj) { return "force" in obj; }, get: function (obj) { return obj.force; }, set: function (obj, value) { obj.force = value; } }, metadata: _metadata }, _force_initializers, _force_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
/**
 * Admin endpoint for triggering Soroban event reindexing over a ledger range.
 * Should be protected by an API-key guard in production.
 */
var SorobanIndexerController = function () {
    var _classDecorators = [(0, swagger_1.ApiTags)("indexer"), (0, common_1.Controller)("indexer")];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _instanceExtraInitializers = [];
    var _reindex_decorators;
    var SorobanIndexerController = _classThis = /** @class */ (function () {
        function SorobanIndexerController_1(indexer) {
            this.indexer = (__runInitializers(this, _instanceExtraInitializers), indexer);
            this.running = false;
        }
        SorobanIndexerController_1.prototype.reindex = function (dto) {
            return __awaiter(this, void 0, void 0, function () {
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            if (this.running) {
                                throw new common_1.ConflictException("A reindex run is already in progress");
                            }
                            this.running = true;
                            _b.label = 1;
                        case 1:
                            _b.trys.push([1, , 3, 4]);
                            return [4 /*yield*/, this.indexer.indexLedgerRange(dto.contractId, dto.fromLedger, dto.toLedger, undefined, (_a = dto.force) !== null && _a !== void 0 ? _a : false)];
                        case 2: return [2 /*return*/, _b.sent()];
                        case 3:
                            this.running = false;
                            return [7 /*endfinally*/];
                        case 4: return [2 /*return*/];
                    }
                });
            });
        };
        return SorobanIndexerController_1;
    }());
    __setFunctionName(_classThis, "SorobanIndexerController");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _reindex_decorators = [(0, common_1.Post)("reindex"), (0, common_1.HttpCode)(common_1.HttpStatus.OK), (0, swagger_1.ApiOperation)({
                summary: "Reindex Soroban contract events for a ledger range (admin only)",
                description: "Fetches and persists all contract events in [fromLedger, toLedger]. " +
                    "Safe to call multiple times — idempotent upserts prevent duplicates. " +
                    "Set force=true to ignore the stored checkpoint and reprocess the full range.",
            }), (0, swagger_1.ApiResponse)({ status: 200, description: "Reindex completed" }), (0, swagger_1.ApiResponse)({ status: 409, description: "A reindex run is already in progress" })];
        __esDecorate(_classThis, null, _reindex_decorators, { kind: "method", name: "reindex", static: false, private: false, access: { has: function (obj) { return "reindex" in obj; }, get: function (obj) { return obj.reindex; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        SorobanIndexerController = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return SorobanIndexerController = _classThis;
}();
exports.SorobanIndexerController = SorobanIndexerController;
