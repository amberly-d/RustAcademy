"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DEMO_TRANSACTIONS = exports.DEMO_LINKS = exports.DEMO_USDC_ISSUER = exports.DEMO_ADDRESSES = void 0;
// ---------------------------------------------------------------------------
// Demo Stellar addresses (testnet-only, no real funds)
// ---------------------------------------------------------------------------
exports.DEMO_ADDRESSES = {
    ALICE: 'GDEMOALICE000000000000000000000000000000000000000000000001',
    BOB: 'GDEMOBOB0000000000000000000000000000000000000000000000000002',
    MERCHANT: 'GDEMO_MERCHANT00000000000000000000000000000000000000000003',
    ESCROW: 'GDEMO_ESCROW000000000000000000000000000000000000000000000004',
};
exports.DEMO_USDC_ISSUER = 'GBBD47IF6LWK7P7MDEVSCWR7DPUWV3NY3DTQEVFL4NAT4AQH3ZLLFLA5';
// ---------------------------------------------------------------------------
// Payment links
// ---------------------------------------------------------------------------
exports.DEMO_LINKS = [
    {
        id: 'demo_link_001',
        slug: 'demo-xlm-tip',
        label: 'Demo XLM Tip Jar',
        assetCode: 'XLM',
        assetIssuer: null,
        amount: '10.0000000',
        recipientAddress: exports.DEMO_ADDRESSES.ALICE,
        memo: 'Demo tip — testnet only',
        active: true,
        createdAt: '2024-01-01T00:00:00.000Z',
    },
    {
        id: 'demo_link_002',
        slug: 'demo-usdc-payment',
        label: 'Demo USDC Payment',
        assetCode: 'USDC',
        assetIssuer: exports.DEMO_USDC_ISSUER,
        amount: '25.0000000',
        recipientAddress: exports.DEMO_ADDRESSES.BOB,
        memo: 'Demo USDC — testnet only',
        active: true,
        createdAt: '2024-01-01T01:00:00.000Z',
    },
    {
        id: 'demo_link_003',
        slug: 'demo-merchant-checkout',
        label: 'Demo Merchant Checkout',
        assetCode: 'USDC',
        assetIssuer: exports.DEMO_USDC_ISSUER,
        amount: '99.9900000',
        recipientAddress: exports.DEMO_ADDRESSES.MERCHANT,
        memo: 'INV-DEMO-001',
        active: true,
        createdAt: '2024-01-01T02:00:00.000Z',
    },
    {
        id: 'demo_link_004',
        slug: 'demo-expired-link',
        label: 'Demo Expired Link (inactive)',
        assetCode: 'XLM',
        assetIssuer: null,
        amount: '5.0000000',
        recipientAddress: exports.DEMO_ADDRESSES.ALICE,
        memo: null,
        active: false,
        createdAt: '2024-01-01T03:00:00.000Z',
    },
];
// ---------------------------------------------------------------------------
// Sample transaction history
// ---------------------------------------------------------------------------
exports.DEMO_TRANSACTIONS = [
    {
        id: 'demo_tx_001',
        linkId: 'demo_link_001',
        senderAddress: exports.DEMO_ADDRESSES.BOB,
        recipientAddress: exports.DEMO_ADDRESSES.ALICE,
        assetCode: 'XLM',
        assetIssuer: null,
        amount: '10.0000000',
        stellarTxHash: 'aaaaaaaabbbbbbbbccccccccddddddddeeeeeeeeffffffff0000000011111111',
        status: 'success',
        createdAt: '2024-01-02T10:00:00.000Z',
    },
    {
        id: 'demo_tx_002',
        linkId: 'demo_link_002',
        senderAddress: exports.DEMO_ADDRESSES.ALICE,
        recipientAddress: exports.DEMO_ADDRESSES.BOB,
        assetCode: 'USDC',
        assetIssuer: exports.DEMO_USDC_ISSUER,
        amount: '25.0000000',
        stellarTxHash: '1111111122222222333333334444444455555555666666667777777788888888',
        status: 'success',
        createdAt: '2024-01-02T11:00:00.000Z',
    },
    {
        id: 'demo_tx_003',
        linkId: 'demo_link_003',
        senderAddress: exports.DEMO_ADDRESSES.ALICE,
        recipientAddress: exports.DEMO_ADDRESSES.MERCHANT,
        assetCode: 'USDC',
        assetIssuer: exports.DEMO_USDC_ISSUER,
        amount: '99.9900000',
        stellarTxHash: '9999999988888888777777776666666655555555444444443333333322222222',
        status: 'pending',
        createdAt: '2024-01-02T12:00:00.000Z',
    },
    {
        id: 'demo_tx_004',
        linkId: 'demo_link_001',
        senderAddress: exports.DEMO_ADDRESSES.MERCHANT,
        recipientAddress: exports.DEMO_ADDRESSES.ALICE,
        assetCode: 'XLM',
        assetIssuer: null,
        amount: '10.0000000',
        stellarTxHash: 'deadbeefdeadbeefdeadbeefdeadbeefdeadbeefdeadbeefdeadbeefdeadbeef',
        status: 'failed',
        createdAt: '2024-01-02T13:00:00.000Z',
    },
];
