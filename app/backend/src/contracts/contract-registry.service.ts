import {
  BadRequestException,
  Injectable,
  Logger,
  // NotFoundException,
} from "@nestjs/common";
import { EventEmitter2 } from "@nestjs/event-emitter";

import { AuditService } from "../audit/audit.service";
import { AppConfigService } from "../config";
import { SupabaseService } from "../supabase/supabase.service";
import {
  ContractRegistryEntryDto,
  PublishContractRegistryDto,
  RollbackContractRegistryDto,
} from "./dto/contract-registry.dto";
import {
  ContractRegistryPublishedEvent,
  ContractRegistryRolledBackEvent,
  ContractRegistryPublishedEventPayload,
  ContractRegistryRolledBackEventPayload,
} from "../events/contract-registry.events";
import { ContractChangeWebhookService } from "./contract-change-webhook.service";
import { ContractChangeWebhookDispatcher } from "./contract-change-webhook.dispatcher";

interface RegistryRecord {
  name: string;
  network: string;
  contractId: string;
  previousContractId?: string;
  effectiveLedger?: number;
  effectiveTime?: string;
  wasmHash: string;
  contractVersion: number;
  deploymentId?: string;
  metadata?: Record<string, unknown>;
  publishedBy: string;
  version: number;
  createdAt: string;
  updatedAt: string;
  networkPassphrase: string;
  active: boolean;
}

@Injectable()
export class ContractRegistryService {
  private readonly logger = new Logger(ContractRegistryService.name);
  private readonly fallbackStore = new Map<string, RegistryRecord[]>();
  private readonly expectedContracts: string[];
  private fallbackVersion = 0;

  constructor(
    private readonly supabaseService: SupabaseService,
    private readonly auditService: AuditService,
    private readonly configService: AppConfigService,
    private readonly eventEmitter: EventEmitter2,
    private readonly contractChangeWebhookService: ContractChangeWebhookService,
    private readonly webhookDispatcher: ContractChangeWebhookDispatcher,
  ) {
    this.expectedContracts = (
      process.env.CONTRACT_REGISTRY_EXPECTED_SET ?? " RustAcademy"
    )
      .split(",")
      .map((value) => value.trim().toLowerCase())
      .filter(Boolean);
  }

  async getRegistry() {
    const records = await this.readRecords();
    const active = records.filter((record) => record.active);
    const data = Object.fromEntries(
      active.map((record) => [
        record.name,
        {
          id: record.contractId,
          wasmHash: record.wasmHash,
          version: record.contractVersion,
          deploymentId: record.deploymentId,
          updatedAt: record.updatedAt,
          metadata: record.metadata ?? {},
        },
      ]),
    );

    const version = active.reduce(
      (max, record) => Math.max(max, record.version),
      this.fallbackVersion,
    );

    return {
      network: this.configService.network,
      authoritative: true,
      version,
      etag: this.buildEtag(version),
      data,
    };
  }

  async publish(
    dto: PublishContractRegistryDto,
    actor = "deployment_automation",
  ) {
    this.validatePassphrase(dto.networkPassphrase);
    this.validateContractSet(dto.contracts);

    const current = await this.readRecords();
    const currentVersion = current.reduce(
      (max, record) => Math.max(max, record.version),
      this.fallbackVersion,
    );

    const now = new Date().toISOString();
    const names = new Set(
      dto.contracts.map((contract) => contract.name.toLowerCase()),
    );
    const retained = current.map((record) =>
      names.has(record.name)
        ? { ...record, active: false, updatedAt: now }
        : record,
    );

    const published: RegistryRecord[] = dto.contracts.map((contract) =>
      this.toRecord(contract, dto, actor, 0, now),
    );

    const merged = [...retained, ...published];

    try {
      const client = this.supabaseService.getClient();
      const { data, error } = await client.rpc("publish_contract_registry", {
        p_network: this.configService.network,
        p_records: published.map((record) => ({
          name: record.name,
          contractId: record.contractId,
          previousContractId: record.previousContractId ?? null,
          effectiveLedger: record.effectiveLedger ?? null,
          effectiveTime: record.effectiveTime ?? null,
          wasmHash: record.wasmHash,
          contractVersion: record.contractVersion,
          deploymentId: record.deploymentId ?? null,
          metadata: record.metadata ?? {},
          publishedBy: record.publishedBy,
          networkPassphrase: record.networkPassphrase,
          active: record.active,
          createdAt: record.createdAt,
          updatedAt: record.updatedAt,
        })),
        p_expected_version: currentVersion,
      });

      if (error) throw error;

      const result = data as { success: boolean; newVersion: number; publishedCount: number; previousVersion: number };
      if (!result?.success) {
        throw new Error("Failed to publish contract registry");
      }

      const nextVersion = result.newVersion;

      // Update in-memory fallback only after successful persistence
      this.fallbackVersion = nextVersion;
      const finalRecords = merged.map((record) => ({
        ...record,
        version: record.active ? nextVersion : record.version,
      }));
      this.writeFallback(finalRecords);

      // Emit audit logs and webhooks only after durable persistence succeeds
      await this.auditService.log(
        "contract_registry",
        "registry.publish",
        dto.deploymentId,
        {
          actor,
          version: nextVersion,
          contracts: published.map((record) => ({
            name: record.name,
            contractId: record.contractId,
            wasmHash: record.wasmHash,
            contractVersion: record.contractVersion,
          })),
        },
      );

      this.logger.log(
        `Published ${published.length} contract registry entr${published.length === 1 ? "y" : "ies"} at version ${nextVersion}`,
      );

      await this.eventEmitter.emit(
        ContractRegistryPublishedEvent,
        new ContractRegistryPublishedEventPayload(
          nextVersion,
          published.map((record) => ({
            name: record.name,
            contractId: record.contractId,
            wasmHash: record.wasmHash,
            contractVersion: record.contractVersion,
            deploymentId: record.deploymentId,
          })),
          actor,
        ),
      );

      const enabledWebhooks =
        await this.contractChangeWebhookService.getEnabledWebhooks();
      if (enabledWebhooks.length > 0) {
        this.webhookDispatcher.dispatch(enabledWebhooks, {
          version: nextVersion,
          event: "contract_registry.published",
          actor,
          deploymentId: dto.deploymentId,
          contracts: published.map((record) => ({
            name: record.name,
            contractId: record.contractId,
            wasmHash: record.wasmHash,
            contractVersion: record.contractVersion,
            deploymentId: record.deploymentId,
          })),
        });
      }

      return this.getRegistry();
    } catch (error) {
      this.logger.error(
        `Failed to publish contract registry: ${(error as Error).message}`,
      );
      throw error;
    }
  }

  async finalizeDualRead(
    contractName: string,
    actor = "deployment_automation",
  ) {
    const targetName = contractName.toLowerCase();

    try {
      const client = this.supabaseService.getClient();
      const { data, error } = await client.rpc("finalize_dual_read", {
        p_network: this.configService.network,
        p_contract_name: targetName,
      });

      if (error) throw error;

      const result = data as { success: boolean; contractName: string; finalizedAt: string };
      if (!result?.success) {
        throw new Error("Failed to finalize dual-read");
      }

      // Update in-memory fallback only after successful persistence
      const records = await this.readRecords();
      const now = new Date().toISOString();
      const updated = records.map((record) => {
        if (record.name !== targetName) return record;
        return {
          ...record,
          previousContractId: undefined,
          effectiveLedger: record.effectiveLedger,
          effectiveTime: now,
          updatedAt: now,
        };
      });

      this.writeFallback(updated);

      // Emit audit log only after durable persistence succeeds
      await this.auditService.log(
        "contract_registry",
        "registry.finalize_dual_read",
        contractName,
        {
          actor,
          finalizedAt: now,
        },
      );

      this.logger.log(
        `Finalized dual-read for contract ${contractName} at timestamp ${now}`,
      );

      return this.getRegistry();
    } catch (error) {
      this.logger.error(
        `Failed to finalize dual-read for ${contractName}: ${(error as Error).message}`,
      );
      throw error;
    }
  }

  async rollback(
    dto: RollbackContractRegistryDto,
    actor = "deployment_automation",
  ) {
    const targetName = dto.name.toLowerCase();

    try {
      const client = this.supabaseService.getClient();
      const { data, error } = await client.rpc("rollback_contract_registry", {
        p_network: this.configService.network,
        p_contract_name: targetName,
        p_target_contract_version: dto.version,
      });

      if (error) throw error;

      const result = data as {
        success: boolean;
        contractName: string;
        targetVersion: number;
        newRegistryVersion: number;
        contractId: string;
        wasmHash: string;
      };
      if (!result?.success) {
        throw new Error("Failed to rollback contract registry");
      }

      const nextVersion = result.newRegistryVersion;

      // Update in-memory fallback only after successful persistence
      this.fallbackVersion = Math.max(this.fallbackVersion, nextVersion);
      const records = await this.readRecords();
      const now = new Date().toISOString();
      const updated = records.map((record) => {
        if (record.name !== targetName) return record;
        return {
          ...record,
          active: record.contractVersion === dto.version,
          updatedAt: now,
          version:
            record.contractVersion === dto.version ? nextVersion : record.version,
        };
      });

      this.writeFallback(updated);

      // Emit audit logs and webhooks only after durable persistence succeeds
      await this.auditService.log(
        "contract_registry",
        "registry.rollback",
        dto.name,
        { actor, requestedVersion: dto.version, registryVersion: nextVersion },
      );

      await this.eventEmitter.emit(
        ContractRegistryRolledBackEvent,
        new ContractRegistryRolledBackEventPayload(
          targetName,
          nextVersion,
          result.contractId,
          result.wasmHash,
          dto.version,
          actor,
        ),
      );

      const enabledWebhooks =
        await this.contractChangeWebhookService.getEnabledWebhooks();
      if (enabledWebhooks.length > 0) {
        this.webhookDispatcher.dispatch(enabledWebhooks, {
          version: nextVersion,
          event: "contract_registry.rolled_back",
          contractName: targetName,
          contractId: result.contractId,
          wasmHash: result.wasmHash,
          contractVersion: dto.version,
          actor,
        });
      }

      return this.getRegistry();
    } catch (error) {
      this.logger.error(
        `Failed to rollback contract registry for ${dto.name}: ${(error as Error).message}`,
      );
      throw error;
    }
  }

  private validatePassphrase(passphrase: string): void {
    const expected =
      this.configService.network === "mainnet"
        ? "Public Global Stellar Network ; September 2015"
        : "Test SDF Network ; September 2015";

    if (passphrase !== expected) {
      throw new BadRequestException(
        `networkPassphrase does not match the active ${this.configService.network} network`,
      );
    }
  }

  private validateContractSet(contracts: ContractRegistryEntryDto[]): void {
    const normalized = contracts
      .map((contract) => contract.name.toLowerCase())
      .sort();
    const expected = [...this.expectedContracts].sort();

    if (normalized.length !== expected.length) {
      throw new BadRequestException(
        `Expected ${expected.length} contract entries (${expected.join(", ")}) but received ${normalized.length}`,
      );
    }

    for (let index = 0; index < expected.length; index += 1) {
      if (normalized[index] !== expected[index]) {
        throw new BadRequestException(
          `Unexpected contract set. Expected ${expected.join(", ")}`,
        );
      }
    }
  }

  private toRecord(
    contract: ContractRegistryEntryDto,
    dto: PublishContractRegistryDto,
    actor: string,
    version: number,
    timestamp: string,
  ): RegistryRecord {
    return {
      name: contract.name.toLowerCase(),
      network: this.configService.network,
      contractId: contract.contractId,
      wasmHash: contract.wasmHash,
      contractVersion: contract.contractVersion ?? 1,
      deploymentId: dto.deploymentId,
      metadata: contract.metadata,
      publishedBy: actor,
      version,
      createdAt: timestamp,
      updatedAt: timestamp,
      networkPassphrase: dto.networkPassphrase,
      active: true,
    };
  }

  private buildEtag(version: number): string {
    return `W/\"contract-registry-${this.configService.network}-${version}\"`;
  }

  private fallbackKey(): string {
    return `contract-registry:${this.configService.network}`;
  }

  private writeFallback(records: RegistryRecord[]): void {
    this.fallbackStore.set(this.fallbackKey(), records);
  }

  private async readRecords(): Promise<RegistryRecord[]> {
    const fallback = this.fallbackStore.get(this.fallbackKey()) ?? [];

    try {
      const client = this.supabaseService.getClient();
      const { data, error } = await client
        .from("contract_registry_entries")
        .select("*")
        .eq("network", this.configService.network)
        .order("version", { ascending: true });

      if (error) throw error;
      if (!data || data.length === 0) return fallback;

      return data.map((row) => ({
        name: String(row.contract_name),
        network: String(row.network),
        contractId: String(row.contract_id),
        previousContractId: row.previous_contract_id
          ? String(row.previous_contract_id)
          : undefined,
        effectiveLedger: row.effective_ledger
          ? Number(row.effective_ledger)
          : undefined,
        effectiveTime: row.effective_time
          ? String(row.effective_time)
          : undefined,
        wasmHash: String(row.wasm_hash),
        contractVersion: Number(row.contract_version),
        deploymentId: row.deployment_id ? String(row.deployment_id) : undefined,
        metadata:
          row.metadata && typeof row.metadata === "object"
            ? (row.metadata as Record<string, unknown>)
            : undefined,
        publishedBy: String(row.published_by ?? "unknown"),
        version: Number(row.version),
        createdAt: String(row.created_at),
        updatedAt: String(row.updated_at),
        networkPassphrase: String(row.network_passphrase),
        active: Boolean(row.is_active),
      }));
    } catch (error) {
      this.logger.warn(
        `Falling back to in-memory contract registry: ${(error as Error).message}`,
      );
      return fallback;
    }
  }

  private async persistSnapshot(records: RegistryRecord[]): Promise<void> {
    // This method is deprecated in favor of transactional RPC functions.
    // Kept for backward compatibility but should not be used in new code.
    try {
      const client = this.supabaseService.getClient();
      await client
        .from("contract_registry_entries")
        .delete()
        .eq("network", this.configService.network);
      const { error } = await client.from("contract_registry_entries").insert(
        records.map((record) => ({
          contract_name: record.name,
          network: record.network,
          contract_id: record.contractId,
          previous_contract_id: record.previousContractId ?? null,
          effective_ledger: record.effectiveLedger ?? null,
          effective_time: record.effectiveTime ?? null,
          wasm_hash: record.wasmHash,
          contract_version: record.contractVersion,
          deployment_id: record.deploymentId ?? null,
          metadata: record.metadata ?? {},
          published_by: record.publishedBy,
          version: record.version,
          created_at: record.createdAt,
          updated_at: record.updatedAt,
          network_passphrase: record.networkPassphrase,
          is_active: record.active,
        })),
      );

      if (error) throw error;
    } catch (error) {
      this.logger.warn(
        `Unable to persist contract registry snapshot: ${(error as Error).message}`,
      );
    }
  }
}
