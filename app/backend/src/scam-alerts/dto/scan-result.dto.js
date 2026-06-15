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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScanResultDto = exports.ScamAlertDto = void 0;
var swagger_1 = require("@nestjs/swagger");
var scam_rules_constants_1 = require("../constants/scam-rules.constants");
/**
 * Individual alert in the scan result
 */
var ScamAlertDto = function () {
    var _a;
    var _type_decorators;
    var _type_initializers = [];
    var _type_extraInitializers = [];
    var _severity_decorators;
    var _severity_initializers = [];
    var _severity_extraInitializers = [];
    var _message_decorators;
    var _message_initializers = [];
    var _message_extraInitializers = [];
    var _recommendation_decorators;
    var _recommendation_initializers = [];
    var _recommendation_extraInitializers = [];
    return _a = /** @class */ (function () {
            function ScamAlertDto() {
                this.type = __runInitializers(this, _type_initializers, void 0);
                this.severity = (__runInitializers(this, _type_extraInitializers), __runInitializers(this, _severity_initializers, void 0));
                this.message = (__runInitializers(this, _severity_extraInitializers), __runInitializers(this, _message_initializers, void 0));
                this.recommendation = (__runInitializers(this, _message_extraInitializers), __runInitializers(this, _recommendation_initializers, void 0));
                __runInitializers(this, _recommendation_extraInitializers);
            }
            return ScamAlertDto;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _type_decorators = [(0, swagger_1.ApiProperty)({
                    description: "Type of scam alert detected",
                    enum: scam_rules_constants_1.ScamAlertType,
                    example: scam_rules_constants_1.ScamAlertType.MISSING_MEMO,
                })];
            _severity_decorators = [(0, swagger_1.ApiProperty)({
                    description: "Severity level of the alert",
                    enum: scam_rules_constants_1.ScamSeverity,
                    example: scam_rules_constants_1.ScamSeverity.MEDIUM,
                })];
            _message_decorators = [(0, swagger_1.ApiProperty)({
                    description: "Human-readable message",
                    example: "Payment link requires a memo but none is provided",
                })];
            _recommendation_decorators = [(0, swagger_1.ApiProperty)({
                    description: "Recommended action",
                    example: "Add a unique memo to identify your payment",
                })];
            __esDecorate(null, null, _type_decorators, { kind: "field", name: "type", static: false, private: false, access: { has: function (obj) { return "type" in obj; }, get: function (obj) { return obj.type; }, set: function (obj, value) { obj.type = value; } }, metadata: _metadata }, _type_initializers, _type_extraInitializers);
            __esDecorate(null, null, _severity_decorators, { kind: "field", name: "severity", static: false, private: false, access: { has: function (obj) { return "severity" in obj; }, get: function (obj) { return obj.severity; }, set: function (obj, value) { obj.severity = value; } }, metadata: _metadata }, _severity_initializers, _severity_extraInitializers);
            __esDecorate(null, null, _message_decorators, { kind: "field", name: "message", static: false, private: false, access: { has: function (obj) { return "message" in obj; }, get: function (obj) { return obj.message; }, set: function (obj, value) { obj.message = value; } }, metadata: _metadata }, _message_initializers, _message_extraInitializers);
            __esDecorate(null, null, _recommendation_decorators, { kind: "field", name: "recommendation", static: false, private: false, access: { has: function (obj) { return "recommendation" in obj; }, get: function (obj) { return obj.recommendation; }, set: function (obj, value) { obj.recommendation = value; } }, metadata: _metadata }, _recommendation_initializers, _recommendation_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.ScamAlertDto = ScamAlertDto;
/**
 * Complete scan result response
 */
var ScanResultDto = function () {
    var _a;
    var _isSafe_decorators;
    var _isSafe_initializers = [];
    var _isSafe_extraInitializers = [];
    var _riskScore_decorators;
    var _riskScore_initializers = [];
    var _riskScore_extraInitializers = [];
    var _alerts_decorators;
    var _alerts_initializers = [];
    var _alerts_extraInitializers = [];
    var _criticalCount_decorators;
    var _criticalCount_initializers = [];
    var _criticalCount_extraInitializers = [];
    var _highCount_decorators;
    var _highCount_initializers = [];
    var _highCount_extraInitializers = [];
    var _mediumCount_decorators;
    var _mediumCount_initializers = [];
    var _mediumCount_extraInitializers = [];
    var _lowCount_decorators;
    var _lowCount_initializers = [];
    var _lowCount_extraInitializers = [];
    return _a = /** @class */ (function () {
            function ScanResultDto() {
                this.isSafe = __runInitializers(this, _isSafe_initializers, void 0);
                this.riskScore = (__runInitializers(this, _isSafe_extraInitializers), __runInitializers(this, _riskScore_initializers, void 0));
                this.alerts = (__runInitializers(this, _riskScore_extraInitializers), __runInitializers(this, _alerts_initializers, void 0));
                this.criticalCount = (__runInitializers(this, _alerts_extraInitializers), __runInitializers(this, _criticalCount_initializers, void 0));
                this.highCount = (__runInitializers(this, _criticalCount_extraInitializers), __runInitializers(this, _highCount_initializers, void 0));
                this.mediumCount = (__runInitializers(this, _highCount_extraInitializers), __runInitializers(this, _mediumCount_initializers, void 0));
                this.lowCount = (__runInitializers(this, _mediumCount_extraInitializers), __runInitializers(this, _lowCount_initializers, void 0));
                __runInitializers(this, _lowCount_extraInitializers);
            }
            return ScanResultDto;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _isSafe_decorators = [(0, swagger_1.ApiProperty)({
                    description: "Whether the payment link appears safe",
                    example: false,
                })];
            _riskScore_decorators = [(0, swagger_1.ApiProperty)({
                    description: "Overall risk score (0-100, higher is riskier)",
                    example: 65,
                })];
            _alerts_decorators = [(0, swagger_1.ApiProperty)({
                    description: "List of detected scam alerts",
                    type: [ScamAlertDto],
                })];
            _criticalCount_decorators = [(0, swagger_1.ApiProperty)({
                    description: "Number of critical severity alerts",
                    example: 1,
                })];
            _highCount_decorators = [(0, swagger_1.ApiProperty)({
                    description: "Number of high severity alerts",
                    example: 0,
                })];
            _mediumCount_decorators = [(0, swagger_1.ApiProperty)({
                    description: "Number of medium severity alerts",
                    example: 1,
                })];
            _lowCount_decorators = [(0, swagger_1.ApiProperty)({
                    description: "Number of low severity alerts",
                    example: 0,
                })];
            __esDecorate(null, null, _isSafe_decorators, { kind: "field", name: "isSafe", static: false, private: false, access: { has: function (obj) { return "isSafe" in obj; }, get: function (obj) { return obj.isSafe; }, set: function (obj, value) { obj.isSafe = value; } }, metadata: _metadata }, _isSafe_initializers, _isSafe_extraInitializers);
            __esDecorate(null, null, _riskScore_decorators, { kind: "field", name: "riskScore", static: false, private: false, access: { has: function (obj) { return "riskScore" in obj; }, get: function (obj) { return obj.riskScore; }, set: function (obj, value) { obj.riskScore = value; } }, metadata: _metadata }, _riskScore_initializers, _riskScore_extraInitializers);
            __esDecorate(null, null, _alerts_decorators, { kind: "field", name: "alerts", static: false, private: false, access: { has: function (obj) { return "alerts" in obj; }, get: function (obj) { return obj.alerts; }, set: function (obj, value) { obj.alerts = value; } }, metadata: _metadata }, _alerts_initializers, _alerts_extraInitializers);
            __esDecorate(null, null, _criticalCount_decorators, { kind: "field", name: "criticalCount", static: false, private: false, access: { has: function (obj) { return "criticalCount" in obj; }, get: function (obj) { return obj.criticalCount; }, set: function (obj, value) { obj.criticalCount = value; } }, metadata: _metadata }, _criticalCount_initializers, _criticalCount_extraInitializers);
            __esDecorate(null, null, _highCount_decorators, { kind: "field", name: "highCount", static: false, private: false, access: { has: function (obj) { return "highCount" in obj; }, get: function (obj) { return obj.highCount; }, set: function (obj, value) { obj.highCount = value; } }, metadata: _metadata }, _highCount_initializers, _highCount_extraInitializers);
            __esDecorate(null, null, _mediumCount_decorators, { kind: "field", name: "mediumCount", static: false, private: false, access: { has: function (obj) { return "mediumCount" in obj; }, get: function (obj) { return obj.mediumCount; }, set: function (obj, value) { obj.mediumCount = value; } }, metadata: _metadata }, _mediumCount_initializers, _mediumCount_extraInitializers);
            __esDecorate(null, null, _lowCount_decorators, { kind: "field", name: "lowCount", static: false, private: false, access: { has: function (obj) { return "lowCount" in obj; }, get: function (obj) { return obj.lowCount; }, set: function (obj, value) { obj.lowCount = value; } }, metadata: _metadata }, _lowCount_initializers, _lowCount_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.ScanResultDto = ScanResultDto;
