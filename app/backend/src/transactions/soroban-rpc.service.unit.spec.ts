import { ConfigService } from "@nestjs/config";
import { rpc as SorobanRpc } from "@stellar/stellar-sdk";
import { MetricsService } from "../metrics/metrics.service";
import { SorobanRpcService, SOROBAN_ERROR_CODES } from "./soroban-rpc.service";

function createConfig(overrides: Record<string, unknown> = {}) {
  const values: Record<string, unknown> = {
    "stellar.sorobanRpcUrl": "https://rpc-1.example.com",
    "stellar.sorobanRpcUrls": ["https://rpc-1.example.com", "https://rpc-2.example.com"],
    SOROBAN_RPC_TIMEOUT_MS: "50",
    SOROBAN_RPC_MAX_RETRIES: "2",
    SOROBAN_POLL_INTERVAL_MS: "10",
    SOROBAN_POLL_TIMEOUT_MS: "100",
    ...overrides,
  };
  return { get: jest.fn((key: string) => values[key]) } as unknown as ConfigService;
}

function createMetrics() {
  return {
    setSorobanRpcActiveEndpoint: jest.fn(),
    recordSorobanRpcFailover: jest.fn(),
    recordExternalCall: jest.fn(),
    recordError: jest.fn(),
  } as unknown as MetricsService;
}

function makeTx() {
  return { hash: () => Buffer.from("abc123", "hex") } as unknown as import("@stellar/stellar-sdk").Transaction;
}

describe("SorobanRpcService", () => {
  // ── Existing failover tests ────────────────────────────────────────────

  it("fails over to secondary RPC endpoint on transient error", async () => {
    const service = new SorobanRpcService(createConfig(), createMetrics());
    const firstServer = { getNetwork: jest.fn().mockRejectedValue(new Error("network timeout")) };
    const secondServer = { getNetwork: jest.fn().mockResolvedValue({ passphrase: "TESTNET" }) };
    const internals = service as unknown as { createServer: jest.Mock };
    internals.createServer = jest.fn().mockReturnValueOnce(firstServer).mockReturnValueOnce(secondServer);
    await expect(service.getNetworkPassphrase()).resolves.toBe("TESTNET");
    expect(internals.createServer).toHaveBeenCalledTimes(2);
  });

  it("throws after max retries for persistent transient failures", async () => {
    const service = new SorobanRpcService(createConfig(), createMetrics());
    const internals = service as unknown as { createServer: jest.Mock };
    internals.createServer = jest.fn().mockReturnValue({
      getNetwork: jest.fn().mockRejectedValue(new Error("503 unavailable")),
    });
    await expect(service.getNetworkPassphrase()).rejects.toThrow("503");
    expect(internals.createServer).toHaveBeenCalledTimes(2);
  });

  // ── prepareTransaction ────────────────────────────────────────────────

  it("prepareTransaction throws SIMULATION_FAILED on simulation error", async () => {
    const service = new SorobanRpcService(createConfig(), createMetrics());
    jest.spyOn(service, "simulateTransaction").mockResolvedValue({
      error: "contract trap",
    } as unknown as SorobanRpc.Api.SimulateTransactionResponse);

    jest.spyOn(SorobanRpc.Api, "isSimulationError").mockReturnValue(true);
    jest.spyOn(SorobanRpc.Api, "isSimulationRestore").mockReturnValue(false);

    await expect(service.prepareTransaction(makeTx())).rejects.toThrow(
      SOROBAN_ERROR_CODES.SIMULATION_FAILED,
    );
  });

  // ── submitTransaction ─────────────────────────────────────────────────

  it("submitTransaction returns hash on PENDING status", async () => {
    const service = new SorobanRpcService(createConfig(), createMetrics());
    const internals = service as unknown as { createServer: jest.Mock };
    internals.createServer = jest.fn().mockReturnValue({
      sendTransaction: jest.fn().mockResolvedValue({ status: "PENDING" }),
    });
    const hash = await service.submitTransaction(makeTx());
    expect(hash).toBe("abc123");
  });

  it("submitTransaction throws DUPLICATE_SUBMISSION on txBAD_SEQ", async () => {
    const service = new SorobanRpcService(createConfig(), createMetrics());
    const internals = service as unknown as { createServer: jest.Mock };
    internals.createServer = jest.fn().mockReturnValue({
      sendTransaction: jest.fn().mockResolvedValue({
        status: "ERROR",
        errorResult: { result: () => ({ switch: () => ({ name: "txBadSeq" }) }) },
      }),
    });
    await expect(service.submitTransaction(makeTx())).rejects.toThrow(
      SOROBAN_ERROR_CODES.DUPLICATE_SUBMISSION,
    );
  });

  it("submitTransaction throws SUBMIT_FAILED on other ERROR status", async () => {
    const service = new SorobanRpcService(createConfig(), createMetrics());
    const internals = service as unknown as { createServer: jest.Mock };
    internals.createServer = jest.fn().mockReturnValue({
      sendTransaction: jest.fn().mockResolvedValue({
        status: "ERROR",
        errorResult: { result: () => ({ switch: () => ({ name: "txFAILED" }) }) },
      }),
    });
    await expect(service.submitTransaction(makeTx())).rejects.toThrow(
      SOROBAN_ERROR_CODES.SUBMIT_FAILED,
    );
  });

  // ── pollTransactionStatus ─────────────────────────────────────────────

  it("pollTransactionStatus returns SUCCESS result", async () => {
    const service = new SorobanRpcService(createConfig(), createMetrics());
    const internals = service as unknown as { createServer: jest.Mock };
    internals.createServer = jest.fn().mockReturnValue({
      getTransaction: jest.fn().mockResolvedValue({
        status: SorobanRpc.Api.GetTransactionStatus.SUCCESS,
      }),
    });
    const result = await service.pollTransactionStatus("abc123");
    expect(result.status).toBe("SUCCESS");
    expect(result.hash).toBe("abc123");
  });

  it("pollTransactionStatus returns FAILED result with CONTRACT_ERROR code", async () => {
    const service = new SorobanRpcService(createConfig(), createMetrics());
    const internals = service as unknown as { createServer: jest.Mock };
    internals.createServer = jest.fn().mockReturnValue({
      getTransaction: jest.fn().mockResolvedValue({
        status: SorobanRpc.Api.GetTransactionStatus.FAILED,
        resultXdr: { toXDR: () => "AAAA" },
      }),
    });
    const result = await service.pollTransactionStatus("abc123");
    expect(result.status).toBe("FAILED");
    expect(result.errorCode).toBe(SOROBAN_ERROR_CODES.CONTRACT_ERROR);
  });

  it("pollTransactionStatus returns TX_TIMEOUT when deadline exceeded", async () => {
    const service = new SorobanRpcService(
      createConfig({ SOROBAN_POLL_TIMEOUT_MS: "10", SOROBAN_POLL_INTERVAL_MS: "5" }),
      createMetrics(),
    );
    const internals = service as unknown as { createServer: jest.Mock };
    internals.createServer = jest.fn().mockReturnValue({
      getTransaction: jest.fn().mockResolvedValue({
        status: SorobanRpc.Api.GetTransactionStatus.NOT_FOUND,
      }),
    });
    const result = await service.pollTransactionStatus("abc123");
    expect(result.status).toBe("FAILED");
    expect(result.errorCode).toBe(SOROBAN_ERROR_CODES.TX_TIMEOUT);
  });
});