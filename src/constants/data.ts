export type StatusType = 'ALLOW' | 'BLOCK' | 'WARN' | 'HOLD' | 'PASS' | 'CACHE' | 'PROCESSING' | 'BLOCKED' | 'SLIPPAGE'
export type PipelineNodeState = 'done' | 'active' | 'wait' | 'block' | 'warn'
export type BadgeColor = 'green' | 'yellow' | 'red'

export interface NavItem {
  to: string
  label: string
  match: string
}

export const NAV_ITEMS: NavItem[] = [
  { to: '/overview',     label: 'OVERVIEW',     match: '/overview' },
  { to: '/audit/pre',    label: 'AUDIT',        match: '/audit' },
  { to: '/escrow',       label: 'ESCROW',       match: '/escrow' },
  // INTEGRATIONS hidden until the registry feature is implemented.
  // { to: '/integrations', label: 'INTEGRATIONS', match: '/integrations' },
]

export interface DemoTarget {
  id: 'safe' | 'vulnerable'
  label: string
  address: string
  description: string
  color: string
  expectedVerdict: 'safe' | 'unsafe'
}

export const PRE_AUDIT_TARGETS: DemoTarget[] = [
  {
    id: 'safe',
    label: 'Safe hook',
    address: '0xc4680Ab74eB4a4F7379016aa7b6044380Ae4C0C0',
    description: 'Safe x402-aware Uniswap v4 hook (Sepolia, verified)',
    color: '#A8FF3E',
    expectedVerdict: 'safe',
  },
  {
    id: 'vulnerable',
    label: 'Vulnerable hook',
    address: '0x70fAA067bE47D8dc839088Dcfc6f9338c07c80C0',
    description: 'Intentionally vulnerable audit benchmark hook (Sepolia, verified)',
    color: '#FF4444',
    expectedVerdict: 'unsafe',
  },
]

export const PRE_AUDIT_CHAIN_ID = 11155111
export const POST_AUDIT_CHAIN_ID = 11155111

export interface PostAuditTarget {
  id: 'normal' | 'sandwich'
  label: string
  txHash: string
  description: string
  context: string  // narrative blurb for the card
  color: string
  expectedSeverity: 'info' | 'low' | 'medium' | 'high' | 'critical'
}

// Real Sepolia tx hashes from a recent e2e:escrow:live run.
export const POST_AUDIT_TARGETS: PostAuditTarget[] = [
  {
    id: 'normal',
    label: 'Normal protected swap',
    txHash: '0xfdbb579cbf295c76a8bfeadd70553ead926461a9d41451b62ba8d6c54e30bf12',
    description: '100 USDT → ~99.5 AEGIS via protectedExactInputSingle (Sepolia)',
    context: 'Clean execution. Audit should return info → escrow RELEASE.',
    color: '#A8FF3E',
    expectedSeverity: 'info',
  },
  {
    id: 'sandwich',
    label: 'Sandwich victim swap',
    txHash: '0xaa4b83fab1d251fe768a37a81ace444ef5b34c75ec9e6f35f70c93388d9348f0',
    description: 'Victim 100 USDT → 73 AEGIS after MEV front-run + back-run (Sepolia)',
    context: 'Output 26% short. Mock fallback used because the on-chain victim swap was settled with expectedOutput=0; re-run e2e with E2E_EXPECTED_OUTPUT=99 for true live high verdict.',
    color: '#FF4444',
    expectedSeverity: 'high',
  },
]

export const SEPOLIA_EXPLORER = 'https://sepolia.etherscan.io'
export const MAINNET_EXPLORER = 'https://etherscan.io'

export type ChainName = 'mainnet' | 'sepolia'

export function explorerForChain(chain: ChainName): string {
  return chain === 'mainnet' ? MAINNET_EXPLORER : SEPOLIA_EXPLORER
}

// Live escrow-hook deployment on Sepolia (escrow-hook/deployments/sepolia-demo.json).
export const ESCROW_DEPLOYMENT = {
  vault:         '0x014A0A4239bE3450bab6A59bba32BecC9e372bc3',
  insurancePool: '0xFEA84989fAF5ee2Ee0e6413A4F6b67e1d7d7F341',
  hook:          '0x2d8b972f069D448040C4B8C3FfdD491fF25E8044',
  adapter:       '0x78159564738C31B0D31982256bBbE81bEE9aBc09',
  usdt:          '0xdEFf5dE317F4636498a58D7D7dd0bc9c178e816f',
  aegis:         '0x788AAa4E8da43480d24FB900c6685274441DBBA0',
} as const

export type EscrowScenarioId = 'normal' | 'sandwich'

export interface EscrowScenarioMeta {
  id: EscrowScenarioId
  label: string
  badgeLabel: string
  expectedAction: 'RELEASE' | 'BLOCK_AND_CLAIM'
  color: string
  description: string
}

export const ESCROW_SCENARIOS: EscrowScenarioMeta[] = [
  {
    id: 'normal',
    label: 'NORMAL SWAP',
    badgeLabel: '✓ EXPECT RELEASE',
    expectedAction: 'RELEASE',
    color: '#A8FF3E',
    description: 'Clean execution. Audit returns info → vault releases AEGIS to the user.',
  },
  {
    id: 'sandwich',
    label: 'SANDWICH ATTACK',
    badgeLabel: '✕ EXPECT BLOCK_AND_CLAIM',
    expectedAction: 'BLOCK_AND_CLAIM',
    color: '#FF4444',
    description: 'MEV bot front-runs. Output 26% short of expected → block-and-claim, insurance refunds principal.',
  },
]

export const WALLET_DATA = {
  name: 'jawgstar.eth',
  address: '0x7f3a...4e2b',
  balance: '0.482',
  balanceUSD: '≈ $1,446.00',
  tokens: [
    { symbol: 'USDC', amount: '320.50', value: '$320.50', color: '#378ADD' },
    { symbol: 'WETH', amount: '0.12',   value: '$360.24', color: '#7F77DD' },
    { symbol: 'ARB',  amount: '142.0',  value: '$85.20',  color: '#FF6EE7' },
  ],
  spendLimit: { current: 3.5, max: 10, unit: 'USDC' },
  activity: [
    { name: 'api.x402.io',  amount: '-0.5 USDC',  positive: false },
    { name: 'swap.uni.v4',  amount: '+0.12 WETH', positive: true  },
    { name: 'pay.agent.ai', amount: '-1.2 USDC',  positive: false },
  ],
}

export const AUDIT_PRE_ROWS = [
  { id: '0xA4f2...8c3d', contract: '0xUniV4Hook...a2c', time: '02:14:34', status: 'BLOCK' as StatusType },
  { id: '0xB8e1...3f9a', contract: '0xUSDC...eB48',     time: '02:14:28', status: 'ALLOW' as StatusType },
  { id: '0xC3d7...1b2e', contract: '0xRouter...5564',   time: '02:14:20', status: 'ALLOW' as StatusType },
  { id: '0xD9a4...7c5f', contract: '0xHook2...a8f1',    time: '02:14:15', status: 'WARN'  as StatusType },
  { id: '0xE1b3...2d4c', contract: '0xUniV4Hook...a2c', time: '02:13:58', status: 'CACHE' as StatusType },
]

export const AUDIT_POST_ROWS = [
  { id: '0xF7c3...9d1a', merchant: 'weatherapi.eth', slippage: '67.4%', status: 'HOLD' as StatusType },
  { id: '0xA4f2...8c3d', merchant: 'api.x402.io',    slippage: '0.3%',  status: 'PASS' as StatusType },
  { id: '0xB8e1...3f9a', merchant: 'swap.uni.v4',    slippage: '1.2%',  status: 'PASS' as StatusType },
  { id: '0xC3d7...1b2e', merchant: 'pay.agent.ai',   slippage: '2.8%',  status: 'PASS' as StatusType },
]

export const VAULT_DATA = [
  {
    id: 'service.eth',
    label: 'service.eth',
    status: 'Holding' as const,
    amount: '0.001 USDC',
    payId: 'pay_esc001',
    elapsed: 'elapsed 0:08',
    color: '#FFE600',
    selectedClass: 'holding',
    kv: [
      { k: 'payTo',       v: '0xPayTo...5e6f',   vc: '#FFE600' },
      { k: 'facilitator', v: 'Coinbase CDP',      vc: '#378ADD' },
      { k: 'contract',    v: '0xEscrow...3c4d',   vc: '#7F77DD' },
    ],
  },
  {
    id: 'weatherapi.eth',
    label: 'weatherapi.eth',
    status: 'Released' as const,
    amount: '0.001 USDC',
    payId: 'pay_abc123',
    elapsed: '12:04:31',
    color: '#A8FF3E',
    selectedClass: 'released',
    kv: [
      { k: 'release tx',  v: '0xabcd...ef12',     vc: '#A8FF3E' },
      { k: 'commitment',  v: 'matched ✓',          vc: '#A8FF3E' },
      { k: 'contract',    v: '0xEscrow...3c4d',    vc: '#7F77DD' },
    ],
  },
  {
    id: 'bad-service.eth',
    label: 'bad-service.eth',
    status: 'Refunded' as const,
    amount: '0.001 USDC',
    payId: 'pay_esc002',
    elapsed: '12:07:22',
    color: '#FF4444',
    selectedClass: 'refunded',
    kv: [
      { k: 'refund tx',   v: '0xef56...7890',     vc: '#FF4444' },
      { k: 'commitment',  v: 'mismatch ×',         vc: '#FF4444' },
      { k: 'contract',    v: '0xEscrow...3c4d',    vc: '#7F77DD' },
    ],
  },
]

export const HOOK_DATA = [
  {
    id: 'aegis',
    name: 'AEGIS V4 Hook',
    addr: '0xUniV4Hook...a2c',
    status: 'CONNECTED' as StatusType,
    color: '#A8FF3E',
    perms: ['BEFORE_SWAP', 'AFTER_SWAP'],
    permColors: ['#A8FF3E', '#A8FF3E'],
    network: 'Sepolia', version: 'v1.2.0', txCount: '142 txs',
  },
  {
    id: 'slip',
    name: 'Slippage Guard',
    addr: '0xSlipGuard...f3d',
    status: 'CONNECTED' as StatusType,
    color: '#A8FF3E',
    perms: ['AFTER_SWAP'],
    permColors: ['#A8FF3E'],
    network: 'Sepolia', version: 'v0.9.1', txCount: '38 txs',
  },
  {
    id: 'router',
    name: 'Payment Router',
    addr: '0xRouter...5564',
    status: 'WARN' as StatusType,
    color: '#FFE600',
    perms: ['BEFORE_SWAP', 'MODIFY_LP'],
    permColors: ['#A8FF3E', '#FFE600'],
    network: 'Sepolia', version: 'v2.0.0', txCount: '7 txs',
  },
  {
    id: 'test',
    name: 'Test Hook',
    addr: '0xTestHook...9b2e',
    status: 'BLOCK' as StatusType,
    color: '#5A4A8A',
    perms: ['BEFORE_SWAP'],
    permColors: ['#5A4A8A'],
    network: 'Sepolia', version: 'v0.1.0', txCount: '0 txs',
  },
]
