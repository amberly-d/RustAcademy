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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var crypto_1 = require("crypto");
var child_process_1 = require("child_process");
var fs_1 = require("fs");
var path = require("path");
function parseArgs(argv) {
    var _a, _b, _c;
    var map = new Map();
    for (var index = 0; index < argv.length; index += 1) {
        var arg = argv[index];
        if (!arg.startsWith("--"))
            continue;
        var key = arg.slice(2);
        var next = argv[index + 1];
        if (!next || next.startsWith("--")) {
            map.set(key, "true");
        }
        else {
            map.set(key, next);
            index += 1;
        }
    }
    var network = ((_a = map.get("network")) !== null && _a !== void 0 ? _a : "testnet");
    var source = map.get("source");
    var wasm = (_b = map.get("wasm")) !== null && _b !== void 0 ? _b : "app/contract/target/wasm32-unknown-unknown/release/ RustAcademy.wasm";
    var contractName = (_c = map.get("contract-name")) !== null && _c !== void 0 ? _c : " RustAcademy";
    if (!source) {
        throw new Error("--source is required");
    }
    return {
        network: network,
        source: source,
        admin: map.get("admin"),
        wasm: wasm,
        contractName: contractName,
        dryRun: map.get("dry-run") === "true",
        registryUrl: map.get("registry-url"),
        apiKey: map.get("api-key"),
    };
}
function run(command, args, dryRun) {
    if (dryRun)
        return __spreadArray([command], args, true).join(" ");
    return (0, child_process_1.execFileSync)(command, args, { encoding: "utf8" }).trim();
}
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var args, wasmPath, networkPassphrase, wasmHash, installCommand, deployCommand, installResult, contractId, initResult, artifact, outputDir, artifactPath, response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    args = parseArgs(process.argv.slice(2));
                    wasmPath = path.resolve(args.wasm);
                    if (!(0, fs_1.existsSync)(wasmPath)) {
                        throw new Error("WASM file not found at ".concat(wasmPath));
                    }
                    networkPassphrase = args.network === "mainnet"
                        ? "Public Global Stellar Network ; September 2015"
                        : "Test SDF Network ; September 2015";
                    wasmHash = (0, crypto_1.createHash)("sha256")
                        .update((0, fs_1.readFileSync)(wasmPath))
                        .digest("hex");
                    installCommand = [
                        "contract",
                        "install",
                        "--network",
                        args.network,
                        "--source",
                        args.source,
                        "--wasm",
                        wasmPath,
                    ];
                    deployCommand = [
                        "contract",
                        "deploy",
                        "--network",
                        args.network,
                        "--source",
                        args.source,
                        "--wasm-hash",
                        wasmHash,
                    ];
                    installResult = run("soroban", installCommand, args.dryRun);
                    contractId = run("soroban", deployCommand, args.dryRun) || "<contract-id>";
                    initResult = null;
                    if (args.admin) {
                        initResult = run("soroban", [
                            "contract",
                            "invoke",
                            "--network",
                            args.network,
                            "--source",
                            args.source,
                            "--id",
                            contractId,
                            "--",
                            "initialize",
                            args.admin,
                        ], args.dryRun);
                    }
                    artifact = {
                        deployedAt: new Date().toISOString(),
                        network: args.network,
                        networkPassphrase: networkPassphrase,
                        contractName: args.contractName,
                        contractId: contractId,
                        wasmHash: wasmHash,
                        installResult: installResult,
                        initResult: initResult,
                    };
                    outputDir = path.resolve("app/backend/deployments");
                    (0, fs_1.mkdirSync)(outputDir, { recursive: true });
                    artifactPath = path.join(outputDir, "".concat(args.network, "-").concat(args.contractName, ".json"));
                    (0, fs_1.writeFileSync)(artifactPath, JSON.stringify(artifact, null, 2));
                    if (!args.registryUrl) return [3 /*break*/, 2];
                    return [4 /*yield*/, fetch("".concat(args.registryUrl.replace(/\/$/, ""), "/contracts/registry/publish"), {
                            method: "POST",
                            headers: __assign({ "Content-Type": "application/json" }, (args.apiKey ? { "X-API-Key": args.apiKey } : {})),
                            body: JSON.stringify({
                                networkPassphrase: networkPassphrase,
                                deploymentId: "".concat(args.network, "-").concat(args.contractName, "-").concat(Date.now()),
                                contracts: [
                                    {
                                        name: args.contractName,
                                        contractId: contractId,
                                        wasmHash: wasmHash,
                                        contractVersion: 1,
                                        metadata: {
                                            artifactPath: artifactPath,
                                            dryRun: args.dryRun,
                                        },
                                    },
                                ],
                            }),
                        })];
                case 1:
                    response = _a.sent();
                    if (!response.ok) {
                        throw new Error("Registry publish failed with status ".concat(response.status));
                    }
                    _a.label = 2;
                case 2:
                    process.stdout.write("".concat(JSON.stringify({ artifactPath: artifactPath, artifact: artifact }, null, 2), "\n"));
                    return [2 /*return*/];
            }
        });
    });
}
void main();
