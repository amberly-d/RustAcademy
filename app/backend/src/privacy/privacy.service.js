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
exports.PrivacyService = void 0;
var common_1 = require("@nestjs/common");
var crypto_1 = require("crypto");
var PrivacyService = function () {
    var _classDecorators = [(0, common_1.Injectable)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var PrivacyService = _classThis = /** @class */ (function () {
        function PrivacyService_1() {
        }
        PrivacyService_1.prototype.encryptRecipientForViewKey = function (recipientAddress, recipientViewPublicKeyPem) {
            if (!recipientAddress || typeof recipientAddress !== "string") {
                throw new common_1.BadRequestException("Recipient address is required");
            }
            if (!recipientViewPublicKeyPem || typeof recipientViewPublicKeyPem !== "string") {
                throw new common_1.BadRequestException("Recipient view public key is required");
            }
            var recipientKey;
            try {
                recipientKey = (0, crypto_1.createPublicKey)(recipientViewPublicKeyPem);
            }
            catch (_a) {
                throw new common_1.BadRequestException("Invalid recipient view public key format");
            }
            var _b = (0, crypto_1.generateKeyPairSync)("x25519"), ephPrivateKey = _b.privateKey, ephPublicKey = _b.publicKey;
            var shared = (0, crypto_1.diffieHellman)({ privateKey: ephPrivateKey, publicKey: recipientKey });
            var encryptionKey = (0, crypto_1.createHash)("sha256").update(shared).digest();
            var iv = (0, crypto_1.randomBytes)(12);
            var cipher = (0, crypto_1.createCipheriv)("aes-256-gcm", encryptionKey, iv);
            var ciphertext = Buffer.concat([
                cipher.update(recipientAddress, "utf8"),
                cipher.final(),
            ]);
            var authTag = cipher.getAuthTag();
            return {
                ephPublicKeyPem: ephPublicKey.export({ format: "pem", type: "spki" }).toString(),
                ivBase64: iv.toString("base64"),
                authTagBase64: authTag.toString("base64"),
                ciphertextBase64: ciphertext.toString("base64"),
                algorithm: "aes-256-gcm",
            };
        };
        PrivacyService_1.prototype.deriveSharedSecretHex = function (privateKeyPem, publicKeyPem) {
            if (!privateKeyPem || typeof privateKeyPem !== "string") {
                throw new common_1.BadRequestException("Private key is required");
            }
            if (!publicKeyPem || typeof publicKeyPem !== "string") {
                throw new common_1.BadRequestException("Public key is required");
            }
            var privateKey;
            var publicKey;
            try {
                privateKey = (0, crypto_1.createPrivateKey)(privateKeyPem);
            }
            catch (_a) {
                throw new common_1.BadRequestException("Invalid private key format");
            }
            try {
                publicKey = (0, crypto_1.createPublicKey)(publicKeyPem);
            }
            catch (_b) {
                throw new common_1.BadRequestException("Invalid public key format");
            }
            return (0, crypto_1.diffieHellman)({ privateKey: privateKey, publicKey: publicKey }).toString("hex");
        };
        PrivacyService_1.prototype.decryptRecipientEnvelope = function (envelope, recipientViewPrivateKeyPem) {
            if (!(envelope === null || envelope === void 0 ? void 0 : envelope.ephPublicKeyPem)) {
                throw new common_1.BadRequestException("Envelope is missing ephemeral public key");
            }
            if (!recipientViewPrivateKeyPem || typeof recipientViewPrivateKeyPem !== "string") {
                throw new common_1.BadRequestException("Recipient view private key is required");
            }
            var privateKey;
            try {
                privateKey = (0, crypto_1.createPrivateKey)(recipientViewPrivateKeyPem);
            }
            catch (_a) {
                throw new common_1.BadRequestException("Invalid recipient view private key format");
            }
            var ephPublic;
            try {
                ephPublic = (0, crypto_1.createPublicKey)(envelope.ephPublicKeyPem);
            }
            catch (_b) {
                throw new common_1.BadRequestException("Invalid envelope ephemeral public key format");
            }
            var shared;
            try {
                shared = (0, crypto_1.diffieHellman)({ privateKey: privateKey, publicKey: ephPublic });
            }
            catch (_c) {
                throw new common_1.BadRequestException("Failed to derive shared secret - key mismatch");
            }
            var encryptionKey = (0, crypto_1.createHash)("sha256").update(shared).digest();
            var decipher = (0, crypto_1.createDecipheriv)("aes-256-gcm", encryptionKey, Buffer.from(envelope.ivBase64, "base64"));
            try {
                decipher.setAuthTag(Buffer.from(envelope.authTagBase64, "base64"));
            }
            catch (_d) {
                throw new common_1.BadRequestException("Invalid authentication tag format");
            }
            var plaintext;
            try {
                plaintext = Buffer.concat([
                    decipher.update(Buffer.from(envelope.ciphertextBase64, "base64")),
                    decipher.final(),
                ]);
            }
            catch (_e) {
                throw new common_1.BadRequestException("Decryption failed - data may be tampered or key mismatch");
            }
            return plaintext.toString("utf8");
        };
        return PrivacyService_1;
    }());
    __setFunctionName(_classThis, "PrivacyService");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        PrivacyService = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return PrivacyService = _classThis;
}();
exports.PrivacyService = PrivacyService;
