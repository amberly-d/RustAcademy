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
exports.EvaluateFeatureFlagResponseDto = exports.FeatureFlagQueryDto = exports.UpdateFeatureFlagDto = void 0;
var swagger_1 = require("@nestjs/swagger");
var class_validator_1 = require("class-validator");
var UpdateFeatureFlagDto = function () {
    var _a;
    var _name_decorators;
    var _name_initializers = [];
    var _name_extraInitializers = [];
    var _description_decorators;
    var _description_initializers = [];
    var _description_extraInitializers = [];
    var _enabled_decorators;
    var _enabled_initializers = [];
    var _enabled_extraInitializers = [];
    var _killSwitch_decorators;
    var _killSwitch_initializers = [];
    var _killSwitch_extraInitializers = [];
    var _rolloutPercentage_decorators;
    var _rolloutPercentage_initializers = [];
    var _rolloutPercentage_extraInitializers = [];
    var _allowedUsers_decorators;
    var _allowedUsers_initializers = [];
    var _allowedUsers_extraInitializers = [];
    var _environments_decorators;
    var _environments_initializers = [];
    var _environments_extraInitializers = [];
    var _metadata_decorators;
    var _metadata_initializers = [];
    var _metadata_extraInitializers = [];
    return _a = /** @class */ (function () {
            function UpdateFeatureFlagDto() {
                this.name = __runInitializers(this, _name_initializers, void 0);
                this.description = (__runInitializers(this, _name_extraInitializers), __runInitializers(this, _description_initializers, void 0));
                this.enabled = (__runInitializers(this, _description_extraInitializers), __runInitializers(this, _enabled_initializers, void 0));
                this.killSwitch = (__runInitializers(this, _enabled_extraInitializers), __runInitializers(this, _killSwitch_initializers, void 0));
                this.rolloutPercentage = (__runInitializers(this, _killSwitch_extraInitializers), __runInitializers(this, _rolloutPercentage_initializers, void 0));
                this.allowedUsers = (__runInitializers(this, _rolloutPercentage_extraInitializers), __runInitializers(this, _allowedUsers_initializers, void 0));
                this.environments = (__runInitializers(this, _allowedUsers_extraInitializers), __runInitializers(this, _environments_initializers, void 0));
                this.metadata = (__runInitializers(this, _environments_extraInitializers), __runInitializers(this, _metadata_initializers, void 0));
                __runInitializers(this, _metadata_extraInitializers);
            }
            return UpdateFeatureFlagDto;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _name_decorators = [(0, swagger_1.ApiPropertyOptional)({ description: 'Human-readable display name' }), (0, class_validator_1.IsOptional)(), (0, class_validator_1.IsString)()];
            _description_decorators = [(0, swagger_1.ApiPropertyOptional)({ description: 'Feature flag description' }), (0, class_validator_1.IsOptional)(), (0, class_validator_1.IsString)()];
            _enabled_decorators = [(0, swagger_1.ApiPropertyOptional)({ description: 'Master enabled toggle' }), (0, class_validator_1.IsOptional)(), (0, class_validator_1.IsBoolean)()];
            _killSwitch_decorators = [(0, swagger_1.ApiPropertyOptional)({ description: 'Emergency kill switch' }), (0, class_validator_1.IsOptional)(), (0, class_validator_1.IsBoolean)()];
            _rolloutPercentage_decorators = [(0, swagger_1.ApiPropertyOptional)({ description: 'Deterministic rollout percentage', minimum: 0, maximum: 100 }), (0, class_validator_1.IsOptional)(), (0, class_validator_1.IsNumber)(), (0, class_validator_1.Min)(0), (0, class_validator_1.Max)(100)];
            _allowedUsers_decorators = [(0, swagger_1.ApiPropertyOptional)({ description: 'Explicit user allowlist', type: [String] }), (0, class_validator_1.IsOptional)(), (0, class_validator_1.IsArray)(), (0, class_validator_1.ArrayMaxSize)(500), (0, class_validator_1.IsString)({ each: true })];
            _environments_decorators = [(0, swagger_1.ApiPropertyOptional)({ description: 'Allowed environments', type: [String] }), (0, class_validator_1.IsOptional)(), (0, class_validator_1.IsArray)(), (0, class_validator_1.ArrayMaxSize)(20), (0, class_validator_1.IsString)({ each: true })];
            _metadata_decorators = [(0, swagger_1.ApiPropertyOptional)({ description: 'Arbitrary flag metadata', type: Object }), (0, class_validator_1.IsOptional)(), (0, class_validator_1.IsObject)()];
            __esDecorate(null, null, _name_decorators, { kind: "field", name: "name", static: false, private: false, access: { has: function (obj) { return "name" in obj; }, get: function (obj) { return obj.name; }, set: function (obj, value) { obj.name = value; } }, metadata: _metadata }, _name_initializers, _name_extraInitializers);
            __esDecorate(null, null, _description_decorators, { kind: "field", name: "description", static: false, private: false, access: { has: function (obj) { return "description" in obj; }, get: function (obj) { return obj.description; }, set: function (obj, value) { obj.description = value; } }, metadata: _metadata }, _description_initializers, _description_extraInitializers);
            __esDecorate(null, null, _enabled_decorators, { kind: "field", name: "enabled", static: false, private: false, access: { has: function (obj) { return "enabled" in obj; }, get: function (obj) { return obj.enabled; }, set: function (obj, value) { obj.enabled = value; } }, metadata: _metadata }, _enabled_initializers, _enabled_extraInitializers);
            __esDecorate(null, null, _killSwitch_decorators, { kind: "field", name: "killSwitch", static: false, private: false, access: { has: function (obj) { return "killSwitch" in obj; }, get: function (obj) { return obj.killSwitch; }, set: function (obj, value) { obj.killSwitch = value; } }, metadata: _metadata }, _killSwitch_initializers, _killSwitch_extraInitializers);
            __esDecorate(null, null, _rolloutPercentage_decorators, { kind: "field", name: "rolloutPercentage", static: false, private: false, access: { has: function (obj) { return "rolloutPercentage" in obj; }, get: function (obj) { return obj.rolloutPercentage; }, set: function (obj, value) { obj.rolloutPercentage = value; } }, metadata: _metadata }, _rolloutPercentage_initializers, _rolloutPercentage_extraInitializers);
            __esDecorate(null, null, _allowedUsers_decorators, { kind: "field", name: "allowedUsers", static: false, private: false, access: { has: function (obj) { return "allowedUsers" in obj; }, get: function (obj) { return obj.allowedUsers; }, set: function (obj, value) { obj.allowedUsers = value; } }, metadata: _metadata }, _allowedUsers_initializers, _allowedUsers_extraInitializers);
            __esDecorate(null, null, _environments_decorators, { kind: "field", name: "environments", static: false, private: false, access: { has: function (obj) { return "environments" in obj; }, get: function (obj) { return obj.environments; }, set: function (obj, value) { obj.environments = value; } }, metadata: _metadata }, _environments_initializers, _environments_extraInitializers);
            __esDecorate(null, null, _metadata_decorators, { kind: "field", name: "metadata", static: false, private: false, access: { has: function (obj) { return "metadata" in obj; }, get: function (obj) { return obj.metadata; }, set: function (obj, value) { obj.metadata = value; } }, metadata: _metadata }, _metadata_initializers, _metadata_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.UpdateFeatureFlagDto = UpdateFeatureFlagDto;
var FeatureFlagQueryDto = function () {
    var _a;
    var _userId_decorators;
    var _userId_initializers = [];
    var _userId_extraInitializers = [];
    var _environment_decorators;
    var _environment_initializers = [];
    var _environment_extraInitializers = [];
    return _a = /** @class */ (function () {
            function FeatureFlagQueryDto() {
                this.userId = __runInitializers(this, _userId_initializers, void 0);
                this.environment = (__runInitializers(this, _userId_extraInitializers), __runInitializers(this, _environment_initializers, void 0));
                __runInitializers(this, _environment_extraInitializers);
            }
            return FeatureFlagQueryDto;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _userId_decorators = [(0, swagger_1.ApiPropertyOptional)({ description: 'User identifier for deterministic rollout evaluation' }), (0, class_validator_1.IsOptional)(), (0, class_validator_1.IsString)()];
            _environment_decorators = [(0, swagger_1.ApiPropertyOptional)({ description: 'Runtime environment (defaults to server NODE_ENV)' }), (0, class_validator_1.IsOptional)(), (0, class_validator_1.IsString)()];
            __esDecorate(null, null, _userId_decorators, { kind: "field", name: "userId", static: false, private: false, access: { has: function (obj) { return "userId" in obj; }, get: function (obj) { return obj.userId; }, set: function (obj, value) { obj.userId = value; } }, metadata: _metadata }, _userId_initializers, _userId_extraInitializers);
            __esDecorate(null, null, _environment_decorators, { kind: "field", name: "environment", static: false, private: false, access: { has: function (obj) { return "environment" in obj; }, get: function (obj) { return obj.environment; }, set: function (obj, value) { obj.environment = value; } }, metadata: _metadata }, _environment_initializers, _environment_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.FeatureFlagQueryDto = FeatureFlagQueryDto;
var EvaluateFeatureFlagResponseDto = function () {
    var _a;
    var _key_decorators;
    var _key_initializers = [];
    var _key_extraInitializers = [];
    var _enabled_decorators;
    var _enabled_initializers = [];
    var _enabled_extraInitializers = [];
    var _reason_decorators;
    var _reason_initializers = [];
    var _reason_extraInitializers = [];
    var _source_decorators;
    var _source_initializers = [];
    var _source_extraInitializers = [];
    return _a = /** @class */ (function () {
            function EvaluateFeatureFlagResponseDto() {
                this.key = __runInitializers(this, _key_initializers, void 0);
                this.enabled = (__runInitializers(this, _key_extraInitializers), __runInitializers(this, _enabled_initializers, void 0));
                this.reason = (__runInitializers(this, _enabled_extraInitializers), __runInitializers(this, _reason_initializers, void 0));
                this.source = (__runInitializers(this, _reason_extraInitializers), __runInitializers(this, _source_initializers, void 0));
                __runInitializers(this, _source_extraInitializers);
            }
            return EvaluateFeatureFlagResponseDto;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _key_decorators = [(0, swagger_1.ApiProperty)()];
            _enabled_decorators = [(0, swagger_1.ApiProperty)()];
            _reason_decorators = [(0, swagger_1.ApiProperty)()];
            _source_decorators = [(0, swagger_1.ApiProperty)()];
            __esDecorate(null, null, _key_decorators, { kind: "field", name: "key", static: false, private: false, access: { has: function (obj) { return "key" in obj; }, get: function (obj) { return obj.key; }, set: function (obj, value) { obj.key = value; } }, metadata: _metadata }, _key_initializers, _key_extraInitializers);
            __esDecorate(null, null, _enabled_decorators, { kind: "field", name: "enabled", static: false, private: false, access: { has: function (obj) { return "enabled" in obj; }, get: function (obj) { return obj.enabled; }, set: function (obj, value) { obj.enabled = value; } }, metadata: _metadata }, _enabled_initializers, _enabled_extraInitializers);
            __esDecorate(null, null, _reason_decorators, { kind: "field", name: "reason", static: false, private: false, access: { has: function (obj) { return "reason" in obj; }, get: function (obj) { return obj.reason; }, set: function (obj, value) { obj.reason = value; } }, metadata: _metadata }, _reason_initializers, _reason_extraInitializers);
            __esDecorate(null, null, _source_decorators, { kind: "field", name: "source", static: false, private: false, access: { has: function (obj) { return "source" in obj; }, get: function (obj) { return obj.source; }, set: function (obj, value) { obj.source = value; } }, metadata: _metadata }, _source_initializers, _source_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.EvaluateFeatureFlagResponseDto = EvaluateFeatureFlagResponseDto;
