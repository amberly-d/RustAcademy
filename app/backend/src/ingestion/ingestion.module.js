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
exports.IngestionModule = void 0;
var common_1 = require("@nestjs/common");
var supabase_module_1 = require("../supabase/supabase.module");
var job_queue_module_1 = require("../job-queue/job-queue.module");
var metrics_module_1 = require("../metrics/metrics.module");
var cursor_repository_1 = require("./cursor.repository");
var escrow_event_repository_1 = require("./escrow-event.repository");
var privacy_event_repository_1 = require("./privacy-event.repository");
var admin_event_repository_1 = require("./admin-event.repository");
var stealth_event_repository_1 = require("./stealth-event.repository");
var indexer_checkpoint_repository_1 = require("./indexer-checkpoint.repository");
var soroban_event_parser_1 = require("./soroban-event.parser");
var stellar_ingestion_service_1 = require("./stellar-ingestion.service");
var soroban_event_indexer_service_1 = require("./soroban-event-indexer.service");
var soroban_indexer_controller_1 = require("./soroban-indexer.controller");
var ingestion_bootstrap_service_1 = require("./ingestion-bootstrap.service");
var IngestionModule = function () {
    var _classDecorators = [(0, common_1.Module)({
            imports: [
                supabase_module_1.SupabaseModule,
                (0, common_1.forwardRef)(function () { return job_queue_module_1.JobQueueModule; }),
                metrics_module_1.MetricsModule,
            ],
            controllers: [soroban_indexer_controller_1.SorobanIndexerController],
            providers: [
                cursor_repository_1.CursorRepository,
                escrow_event_repository_1.EscrowEventRepository,
                privacy_event_repository_1.PrivacyEventRepository,
                admin_event_repository_1.AdminEventRepository,
                stealth_event_repository_1.StealthEventRepository,
                indexer_checkpoint_repository_1.IndexerCheckpointRepository,
                soroban_event_parser_1.SorobanEventParser,
                stellar_ingestion_service_1.StellarIngestionService,
                soroban_event_indexer_service_1.SorobanEventIndexerService,
                ingestion_bootstrap_service_1.IngestionBootstrapService,
            ],
            exports: [
                stellar_ingestion_service_1.StellarIngestionService,
                soroban_event_indexer_service_1.SorobanEventIndexerService,
                soroban_event_parser_1.SorobanEventParser,
                cursor_repository_1.CursorRepository,
                escrow_event_repository_1.EscrowEventRepository,
            ],
        })];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var IngestionModule = _classThis = /** @class */ (function () {
        function IngestionModule_1() {
        }
        return IngestionModule_1;
    }());
    __setFunctionName(_classThis, "IngestionModule");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        IngestionModule = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return IngestionModule = _classThis;
}();
exports.IngestionModule = IngestionModule;
