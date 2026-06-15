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
exports.RecurringPaymentsController = void 0;
var common_1 = require("@nestjs/common");
var swagger_1 = require("@nestjs/swagger");
var recurring_payment_dto_1 = require("./dto/recurring-payment.dto");
var RecurringPaymentsController = function () {
    var _classDecorators = [(0, swagger_1.ApiTags)('recurring-payments'), (0, common_1.Controller)('links/recurring')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _instanceExtraInitializers = [];
    var _createRecurringLink_decorators;
    var _getRecurringLink_decorators;
    var _listRecurringLinks_decorators;
    var _updateRecurringLink_decorators;
    var _cancelRecurringLink_decorators;
    var _pauseRecurringLink_decorators;
    var _resumeRecurringLink_decorators;
    var _getExecutionHistory_decorators;
    var RecurringPaymentsController = _classThis = /** @class */ (function () {
        function RecurringPaymentsController_1(service) {
            this.service = (__runInitializers(this, _instanceExtraInitializers), service);
        }
        // ---------------------------------------------------------------------------
        // CRUD Operations
        // ---------------------------------------------------------------------------
        RecurringPaymentsController_1.prototype.createRecurringLink = function (dto) {
            return __awaiter(this, void 0, void 0, function () {
                var result;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.service.createRecurringLink(dto)];
                        case 1:
                            result = _a.sent();
                            return [2 /*return*/, {
                                    success: true,
                                    data: result,
                                }];
                    }
                });
            });
        };
        RecurringPaymentsController_1.prototype.getRecurringLink = function (id) {
            return __awaiter(this, void 0, void 0, function () {
                var result;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.service.getRecurringLinkById(id)];
                        case 1:
                            result = _a.sent();
                            return [2 /*return*/, {
                                    success: true,
                                    data: result,
                                }];
                    }
                });
            });
        };
        RecurringPaymentsController_1.prototype.listRecurringLinks = function (query) {
            return __awaiter(this, void 0, void 0, function () {
                var result;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.service.listRecurringLinks(query)];
                        case 1:
                            result = _a.sent();
                            return [2 /*return*/, __assign({ success: true }, result)];
                    }
                });
            });
        };
        RecurringPaymentsController_1.prototype.updateRecurringLink = function (id, dto) {
            return __awaiter(this, void 0, void 0, function () {
                var result;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.service.updateRecurringLink(id, dto)];
                        case 1:
                            result = _a.sent();
                            return [2 /*return*/, {
                                    success: true,
                                    data: result,
                                }];
                    }
                });
            });
        };
        // ---------------------------------------------------------------------------
        // Status Management
        // ---------------------------------------------------------------------------
        RecurringPaymentsController_1.prototype.cancelRecurringLink = function (id) {
            return __awaiter(this, void 0, void 0, function () {
                var result;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.service.cancelRecurringLink(id)];
                        case 1:
                            result = _a.sent();
                            return [2 /*return*/, {
                                    success: true,
                                    data: result,
                                }];
                    }
                });
            });
        };
        RecurringPaymentsController_1.prototype.pauseRecurringLink = function (id) {
            return __awaiter(this, void 0, void 0, function () {
                var result;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.service.pauseRecurringLink(id)];
                        case 1:
                            result = _a.sent();
                            return [2 /*return*/, {
                                    success: true,
                                    data: result,
                                }];
                    }
                });
            });
        };
        RecurringPaymentsController_1.prototype.resumeRecurringLink = function (id) {
            return __awaiter(this, void 0, void 0, function () {
                var result;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.service.resumeRecurringLink(id)];
                        case 1:
                            result = _a.sent();
                            return [2 /*return*/, {
                                    success: true,
                                    data: result,
                                }];
                    }
                });
            });
        };
        // ---------------------------------------------------------------------------
        // Execution History
        // ---------------------------------------------------------------------------
        RecurringPaymentsController_1.prototype.getExecutionHistory = function (id) {
            return __awaiter(this, void 0, void 0, function () {
                var executions;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.service.getExecutionHistory(id)];
                        case 1:
                            executions = _a.sent();
                            return [2 /*return*/, {
                                    success: true,
                                    data: executions,
                                }];
                    }
                });
            });
        };
        return RecurringPaymentsController_1;
    }());
    __setFunctionName(_classThis, "RecurringPaymentsController");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _createRecurringLink_decorators = [(0, common_1.Post)(), (0, common_1.HttpCode)(common_1.HttpStatus.CREATED), (0, swagger_1.ApiOperation)({
                summary: 'Create a new recurring payment link',
                description: 'Creates a subscription-style payment link with specified frequency and duration',
            }), (0, swagger_1.ApiResponse)({
                status: 201,
                description: 'Recurring payment link created successfully',
                type: recurring_payment_dto_1.RecurringPaymentLinkResponseDto,
            }), (0, swagger_1.ApiResponse)({
                status: 400,
                description: 'Invalid input parameters',
            })];
        _getRecurringLink_decorators = [(0, common_1.Get)(':id'), (0, common_1.HttpCode)(common_1.HttpStatus.OK), (0, swagger_1.ApiOperation)({
                summary: 'Get recurring payment link by ID',
                description: 'Retrieves details of a specific recurring payment link including execution history',
            }), (0, swagger_1.ApiParam)({ name: 'id', description: 'Recurring payment link ID' }), (0, swagger_1.ApiResponse)({
                status: 200,
                description: 'Recurring payment link retrieved successfully',
                type: recurring_payment_dto_1.RecurringPaymentLinkResponseDto,
            }), (0, swagger_1.ApiResponse)({
                status: 404,
                description: 'Recurring payment link not found',
            })];
        _listRecurringLinks_decorators = [(0, common_1.Get)(), (0, common_1.HttpCode)(common_1.HttpStatus.OK), (0, swagger_1.ApiOperation)({
                summary: 'List recurring payment links',
                description: 'Lists all recurring payment links with optional filtering',
            }), (0, swagger_1.ApiQuery)({ name: 'status', required: false, enum: recurring_payment_dto_1.RecurringStatus }), (0, swagger_1.ApiQuery)({ name: 'username', required: false }), (0, swagger_1.ApiQuery)({ name: 'destination', required: false }), (0, swagger_1.ApiQuery)({ name: 'cursor', required: false, description: 'Opaque pagination cursor' }), (0, swagger_1.ApiQuery)({ name: 'limit', required: false, type: Number, description: 'Items per page (1-100)' }), (0, swagger_1.ApiResponse)({
                status: 200,
                description: 'Recurring payment links listed successfully',
                type: recurring_payment_dto_1.ListRecurringPaymentsResponseDto,
            })];
        _updateRecurringLink_decorators = [(0, common_1.Patch)(':id'), (0, common_1.HttpCode)(common_1.HttpStatus.OK), (0, swagger_1.ApiOperation)({
                summary: 'Update recurring payment link',
                description: 'Updates an existing recurring payment link',
            }), (0, swagger_1.ApiParam)({ name: 'id', description: 'Recurring payment link ID' }), (0, swagger_1.ApiResponse)({
                status: 200,
                description: 'Recurring payment link updated successfully',
                type: recurring_payment_dto_1.RecurringPaymentLinkResponseDto,
            }), (0, swagger_1.ApiResponse)({
                status: 400,
                description: 'Invalid update parameters or link cannot be updated',
            }), (0, swagger_1.ApiResponse)({
                status: 404,
                description: 'Recurring payment link not found',
            })];
        _cancelRecurringLink_decorators = [(0, common_1.Post)(':id/cancel'), (0, common_1.HttpCode)(common_1.HttpStatus.OK), (0, swagger_1.ApiOperation)({
                summary: 'Cancel recurring payment link',
                description: 'Cancels a recurring payment link, stopping all future payments',
            }), (0, swagger_1.ApiParam)({ name: 'id', description: 'Recurring payment link ID' }), (0, swagger_1.ApiResponse)({
                status: 200,
                description: 'Recurring payment link cancelled successfully',
                type: recurring_payment_dto_1.RecurringPaymentLinkResponseDto,
            }), (0, swagger_1.ApiResponse)({
                status: 400,
                description: 'Link is already cancelled',
            }), (0, swagger_1.ApiResponse)({
                status: 404,
                description: 'Recurring payment link not found',
            })];
        _pauseRecurringLink_decorators = [(0, common_1.Post)(':id/pause'), (0, common_1.HttpCode)(common_1.HttpStatus.OK), (0, swagger_1.ApiOperation)({
                summary: 'Pause recurring payment link',
                description: 'Temporarily suspends a recurring payment link',
            }), (0, swagger_1.ApiParam)({ name: 'id', description: 'Recurring payment link ID' }), (0, swagger_1.ApiResponse)({
                status: 200,
                description: 'Recurring payment link paused successfully',
                type: recurring_payment_dto_1.RecurringPaymentLinkResponseDto,
            }), (0, swagger_1.ApiResponse)({
                status: 400,
                description: 'Link is not active',
            }), (0, swagger_1.ApiResponse)({
                status: 404,
                description: 'Recurring payment link not found',
            })];
        _resumeRecurringLink_decorators = [(0, common_1.Post)(':id/resume'), (0, common_1.HttpCode)(common_1.HttpStatus.OK), (0, swagger_1.ApiOperation)({
                summary: 'Resume recurring payment link',
                description: 'Resumes a previously paused recurring payment link',
            }), (0, swagger_1.ApiParam)({ name: 'id', description: 'Recurring payment link ID' }), (0, swagger_1.ApiResponse)({
                status: 200,
                description: 'Recurring payment link resumed successfully',
                type: recurring_payment_dto_1.RecurringPaymentLinkResponseDto,
            }), (0, swagger_1.ApiResponse)({
                status: 400,
                description: 'Link is not paused',
            }), (0, swagger_1.ApiResponse)({
                status: 404,
                description: 'Recurring payment link not found',
            })];
        _getExecutionHistory_decorators = [(0, common_1.Get)(':id/executions'), (0, common_1.HttpCode)(common_1.HttpStatus.OK), (0, swagger_1.ApiOperation)({
                summary: 'Get execution history',
                description: 'Retrieves the execution history for a recurring payment link',
            }), (0, swagger_1.ApiParam)({ name: 'id', description: 'Recurring payment link ID' }), (0, swagger_1.ApiResponse)({
                status: 200,
                description: 'Execution history retrieved successfully',
            }), (0, swagger_1.ApiResponse)({
                status: 404,
                description: 'Recurring payment link not found',
            })];
        __esDecorate(_classThis, null, _createRecurringLink_decorators, { kind: "method", name: "createRecurringLink", static: false, private: false, access: { has: function (obj) { return "createRecurringLink" in obj; }, get: function (obj) { return obj.createRecurringLink; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _getRecurringLink_decorators, { kind: "method", name: "getRecurringLink", static: false, private: false, access: { has: function (obj) { return "getRecurringLink" in obj; }, get: function (obj) { return obj.getRecurringLink; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _listRecurringLinks_decorators, { kind: "method", name: "listRecurringLinks", static: false, private: false, access: { has: function (obj) { return "listRecurringLinks" in obj; }, get: function (obj) { return obj.listRecurringLinks; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _updateRecurringLink_decorators, { kind: "method", name: "updateRecurringLink", static: false, private: false, access: { has: function (obj) { return "updateRecurringLink" in obj; }, get: function (obj) { return obj.updateRecurringLink; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _cancelRecurringLink_decorators, { kind: "method", name: "cancelRecurringLink", static: false, private: false, access: { has: function (obj) { return "cancelRecurringLink" in obj; }, get: function (obj) { return obj.cancelRecurringLink; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _pauseRecurringLink_decorators, { kind: "method", name: "pauseRecurringLink", static: false, private: false, access: { has: function (obj) { return "pauseRecurringLink" in obj; }, get: function (obj) { return obj.pauseRecurringLink; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _resumeRecurringLink_decorators, { kind: "method", name: "resumeRecurringLink", static: false, private: false, access: { has: function (obj) { return "resumeRecurringLink" in obj; }, get: function (obj) { return obj.resumeRecurringLink; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _getExecutionHistory_decorators, { kind: "method", name: "getExecutionHistory", static: false, private: false, access: { has: function (obj) { return "getExecutionHistory" in obj; }, get: function (obj) { return obj.getExecutionHistory; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        RecurringPaymentsController = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return RecurringPaymentsController = _classThis;
}();
exports.RecurringPaymentsController = RecurringPaymentsController;
