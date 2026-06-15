"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContractRegistryRolledBackEventPayload = exports.ContractRegistryPublishedEventPayload = exports.ContractRegistryRolledBackEvent = exports.ContractRegistryPublishedEvent = void 0;
exports.ContractRegistryPublishedEvent = 'contract_registry.published';
exports.ContractRegistryRolledBackEvent = 'contract_registry.rolled_back';
var ContractRegistryPublishedEventPayload = /** @class */ (function () {
    function ContractRegistryPublishedEventPayload(version, contracts, actor) {
        this.version = version;
        this.contracts = contracts;
        this.actor = actor;
    }
    return ContractRegistryPublishedEventPayload;
}());
exports.ContractRegistryPublishedEventPayload = ContractRegistryPublishedEventPayload;
var ContractRegistryRolledBackEventPayload = /** @class */ (function () {
    function ContractRegistryRolledBackEventPayload(contractName, registryVersion, contractId, wasmHash, contractVersion, actor) {
        this.contractName = contractName;
        this.registryVersion = registryVersion;
        this.contractId = contractId;
        this.wasmHash = wasmHash;
        this.contractVersion = contractVersion;
        this.actor = actor;
    }
    return ContractRegistryRolledBackEventPayload;
}());
exports.ContractRegistryRolledBackEventPayload = ContractRegistryRolledBackEventPayload;
