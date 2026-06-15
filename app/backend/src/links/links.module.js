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
exports.LinksModule = void 0;
var common_1 = require("@nestjs/common");
var links_controller_1 = require("./links.controller");
var links_service_1 = require("./links.service");
var bulk_payment_links_controller_1 = require("./bulk-payment-links.controller");
var bulk_payment_links_service_1 = require("./bulk-payment-links.service");
var recurring_payments_controller_1 = require("./recurring-payments.controller");
var recurring_payments_service_1 = require("./recurring-payments.service");
var recurring_payments_scheduler_1 = require("./recurring-payments.scheduler");
var recurring_payments_repository_1 = require("./recurring-payments.repository");
var recurring_payment_processor_1 = require("../stellar/recurring-payment-processor");
var payment_link_controller_1 = require("./payment-link.controller");
var payment_link_service_1 = require("./payment-link.service");
var supabase_module_1 = require("../supabase/supabase.module");
var stellar_module_1 = require("../stellar/stellar.module");
var api_keys_module_1 = require("../api-keys/api-keys.module");
var job_queue_module_1 = require("../job-queue/job-queue.module");
var feature_flags_module_1 = require("../feature-flags/feature-flags.module");
var privacy_module_1 = require("../privacy/privacy.module");
var transactions_module_1 = require("../transactions/transactions.module");
var audit_module_1 = require("../audit/audit.module");
var LinksModule = function () {
    var _classDecorators = [(0, common_1.Module)({
            controllers: [
                links_controller_1.LinksController,
                bulk_payment_links_controller_1.BulkPaymentLinksController,
                recurring_payments_controller_1.RecurringPaymentsController,
                payment_link_controller_1.PaymentLinkController,
            ],
            providers: [
                links_service_1.LinksService,
                bulk_payment_links_service_1.BulkPaymentLinksService,
                recurring_payments_service_1.RecurringPaymentsService,
                recurring_payments_scheduler_1.RecurringPaymentsScheduler,
                recurring_payments_repository_1.RecurringPaymentsRepository,
                recurring_payment_processor_1.RecurringPaymentProcessor,
                payment_link_service_1.PaymentLinkService,
            ],
            exports: [
                links_service_1.LinksService,
                recurring_payments_service_1.RecurringPaymentsService,
                bulk_payment_links_service_1.BulkPaymentLinksService,
                recurring_payments_repository_1.RecurringPaymentsRepository,
                recurring_payment_processor_1.RecurringPaymentProcessor,
                payment_link_service_1.PaymentLinkService,
            ],
            imports: [
                supabase_module_1.SupabaseModule,
                stellar_module_1.StellarModule,
                api_keys_module_1.ApiKeysModule,
                feature_flags_module_1.FeatureFlagsModule,
                privacy_module_1.PrivacyModule,
                transactions_module_1.TransactionsModule,
                audit_module_1.AuditModule,
                (0, common_1.forwardRef)(function () { return job_queue_module_1.JobQueueModule; }),
            ],
        })];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var LinksModule = _classThis = /** @class */ (function () {
        function LinksModule_1() {
        }
        return LinksModule_1;
    }());
    __setFunctionName(_classThis, "LinksModule");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        LinksModule = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return LinksModule = _classThis;
}();
exports.LinksModule = LinksModule;
