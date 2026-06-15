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
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TemplateService = void 0;
var common_1 = require("@nestjs/common");
var TemplateService = function () {
    var _classDecorators = [(0, common_1.Injectable)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var TemplateService = _classThis = /** @class */ (function () {
        function TemplateService_1() {
        }
        TemplateService_1.prototype.render = function (template, data) {
            return template.replace(/\{\{(\w+)\}\}/g, function (_, key) {
                var value = data[key];
                return typeof value === 'string' ? value : "";
            });
        };
        TemplateService_1.prototype.getTemplate = function (event) {
            var templates = {
                EscrowDeposited: {
                    title: "Escrow Deposit",
                    body: "You deposited {{amountStroops}} into escrow.",
                },
                "payment.received": {
                    title: "Payment Received",
                    body: "You received {{amountStroops}} from {{sender}}.",
                },
                EscrowWithdrawn: {
                    title: "Escrow Withdrawn",
                    body: "You withdrew {{amountStroops}} from escrow.",
                },
                EscrowRefunded: {
                    title: "Escrow Refunded",
                    body: "You received a refund of {{amountStroops}}.",
                },
                "username.claimed": {
                    title: "Username Claimed",
                    body: "Your username {{username}} is now active.",
                },
                "recurring.payment.due": {
                    title: "Payment Due",
                    body: "A recurring payment of {{amount}} {{asset}} is due.",
                },
                "recurring.payment.executed": {
                    title: "Payment Executed",
                    body: "Recurring payment of {{amount}} {{asset}} executed.",
                },
                "recurring.payment.failed": {
                    title: "Payment Failed",
                    body: "Recurring payment of {{amount}} {{asset}} failed.",
                },
                "recurring.payment.cancelled": {
                    title: "Payment Cancelled",
                    body: "Recurring payment cancelled.",
                },
                "recurring.link.created": {
                    title: "Link Created",
                    body: "New recurring link created.",
                },
                "recurring.link.updated": {
                    title: "Link Updated",
                    body: "Recurring link updated.",
                },
                "recurring.link.paused": {
                    title: "Link Paused",
                    body: "Recurring link paused.",
                },
                "recurring.link.resumed": {
                    title: "Link Resumed",
                    body: "Recurring link resumed.",
                },
                "recurring.link.completed": {
                    title: "Link Completed",
                    body: "Recurring link completed.",
                },
            };
            return templates[event] || null;
        };
        return TemplateService_1;
    }());
    __setFunctionName(_classThis, "TemplateService");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        TemplateService = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return TemplateService = _classThis;
}();
exports.TemplateService = TemplateService;
