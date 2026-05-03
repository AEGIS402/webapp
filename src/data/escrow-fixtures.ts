import type { AuditReport } from '../types/preaudit'
import { ESCROW_DEPLOYMENT, EscrowScenarioId, ChainName } from '../constants/data'

export type FinalEscrowState = 'Pending' | 'Released' | 'ClaimPaid'

export interface EscrowBalancesSnapshot {
  userUsdt: string
  userAegis: string
  vaultAegis: string
  insuranceUsdt: string
  insuranceAegis: string
}

export interface EscrowScenarioFixture {
  scenario: EscrowScenarioId

  // Inputs
  amountIn:          string
  expectedOutput:    string
  protectionFeePct:  string

  // Sandwich-only
  attackerFrontRunUsdt?: string
  attackerBackRunAegis?: string

  // Tx context
  chain:           ChainName
  swapTxHash:      string
  decisionTxHash:  string

  // Audit
  audit:        AuditReport
  reasonCode:   'CLEAN' | 'SANDWICH'
  chosenAction: 'RELEASE' | 'BLOCK_AND_CLAIM'

  // Escrow
  tradeId: string
  pendingOutputAegis: string
  finalEscrowState:   FinalEscrowState

  // Standard interface fields
  subject:      string
  beneficiary:  string
  policyHash:   string
  evidenceHash: string
  auditor:      string
  vault:        string
  insurancePool: string

  // Live snapshot of relevant balances (post-decision).
  balances: EscrowBalancesSnapshot

  // Optional narration / explainer (live runs include these).
  explainer?: string
  narration?: string[]
  elapsedMs?: number
}

const ACTORS = {
  user:     '0xA92B64722af987B97481be3b2Ef6bB79D8ccbC22',
  attacker: '0x252Df5860a4583647904A59bA67A9dd9C46EB90d',
  auditor:  '0x94fD94a8BD99A20D5A0f3D65BB99502E062Dda38',
}

// Captured live post-audit response on the Sepolia normal swap.
const NORMAL_AUDIT: AuditReport = {
  model: 'gpt-oss-120b',
  score_version: 'risk-v1',
  overall_risk_score: 0,
  overall_severity: 'info',
  overall_summary:
    'The transaction performed a protectedExactInputSingle swap of 100 USDT for approximately 99.54 AEGIS, with the output exceeding the expected amount, and no risky conditions were detected.',
  vulnerabilities: [],
}

const SANDWICH_AUDIT: AuditReport = {
  model: 'gpt-oss-120b',
  score_version: 'risk-v1',
  overall_risk_score: 80,
  overall_severity: 'high',
  overall_summary:
    'The transaction performed a protectedExactInputSingle swap of 100 USDT, but only 73.21 AEGIS was escrowed against a clean-case baseline of 99.54 AEGIS — a 26.5% shortfall. The output gap is consistent with a sandwich attack or other adverse MEV impact on the protected swap.',
  vulnerabilities: [
    {
      id: 'V-001',
      title: 'Protected Swap Output Shortfall',
      severity: 'high',
      risk_score: 80,
      confidence_score: 90,
      impact_score: 80,
      exploitability_score: 30,
      summary:
        'Escrow registered 73.207519 AEGIS as the protected swap output, against a clean-case baseline of 99.54 AEGIS — a 26.5% shortfall. The discrepancy strongly indicates a sandwich attack, MEV, or other adversarial price impact on the protected swap.',
      remediation:
        'Tighten slippage protection or use limit orders for protected swaps, verify on-chain price before execution, and consider TWAP price oracles.',
      evidence: [
        { line_start: null, line_end: null, description: 'Evidence refs: log#8 (ProtectedSwapEscrowed).' },
      ],
    },
  ],
}

export const NORMAL_FIXTURE: EscrowScenarioFixture = {
  scenario: 'normal',
  amountIn:           '100',
  expectedOutput:     '99',
  protectionFeePct:   '0.5',
  chain:              'sepolia',
  swapTxHash:         '0x9c55902631bed51d5a37e205a0eb1fd86eb84be0f7293c6aaf6161b86869e946',
  decisionTxHash:     '0x7e10d76a184506605b964981df9556b141acefd6e7610681665a564231dfc3ca',
  audit:              NORMAL_AUDIT,
  reasonCode:         'CLEAN',
  chosenAction:       'RELEASE',
  tradeId:            '0x4369069a52e2464213bb728388d0fbd5282c649da76d66633373974be96c1b90',
  pendingOutputAegis: '99.541251236045274067',
  finalEscrowState:   'Released',
  subject:            ACTORS.user,
  beneficiary:        ACTORS.user,
  policyHash:         '0x' + 'cafe'.repeat(16),
  evidenceHash:       '0x' + 'beef'.repeat(16),
  auditor:            ACTORS.auditor,
  vault:              ESCROW_DEPLOYMENT.vault,
  insurancePool:      ESCROW_DEPLOYMENT.insurancePool,
  balances: {
    userUsdt:       '9899.5',
    userAegis:      '99.541251236045274067',
    vaultAegis:     '0',
    insuranceUsdt:  '1000000.5',
    insuranceAegis: '1000137.074316',
  },
  explainer:
    'User submitted protectedExactInputSingle for 100 USDT with expectedOutput=99 AEGIS. The pool returned ~99.54 AEGIS into the escrow. Post-audit returned info; the auditor signed RELEASE and the vault forwarded the AEGIS to the user.',
}

export const SANDWICH_FIXTURE: EscrowScenarioFixture = {
  scenario: 'sandwich',
  amountIn:               '100',
  expectedOutput:         '99',
  protectionFeePct:       '0.5',
  attackerFrontRunUsdt:   '500000',
  attackerBackRunAegis:   '426823.547013',
  chain:                  'sepolia',
  swapTxHash:             '0xbb146dc17fcce5294bb67fd3eebc57822ba157bb58e8b2c601006e5b3202c39e',
  decisionTxHash:         '0x7484f8b5481d03f9d285f3b0860beace6602e51be1fe1b18a280f7621b46c1cf',
  audit:                  SANDWICH_AUDIT,
  reasonCode:             'SANDWICH',
  chosenAction:           'BLOCK_AND_CLAIM',
  tradeId:                '0xb65022f3c0f201b78cc7af4f9290f80d97677096e5b98c39bd634f740e5d877d',
  pendingOutputAegis:     '73.207519328954046387',
  finalEscrowState:       'ClaimPaid',
  subject:                ACTORS.user,
  beneficiary:            ACTORS.user,
  policyHash:             '0x' + 'beef'.repeat(16),
  evidenceHash:           '0x' + 'a1b2c3d4'.repeat(8),
  auditor:                ACTORS.auditor,
  vault:                  ESCROW_DEPLOYMENT.vault,
  insurancePool:          ESCROW_DEPLOYMENT.insurancePool,
  balances: {
    userUsdt:       '19899',
    userAegis:      '99.541251236045274067',
    vaultAegis:     '0',
    insuranceUsdt:  '999802.5',
    insuranceAegis: '1000210.281836',
  },
  explainer:
    'An attacker front-ran with a 500K USDT swap, pushing the price up. The user’s protected swap then yielded only 73.21 AEGIS against an expected 99 AEGIS — a 26.5% shortfall. The attacker back-ran. Post-audit fired the protected_swap_output_shortfall rule and returned high; the auditor signed BLOCK_AND_CLAIM. InsurancePool refunded the user’s 100 USDT principal and recovered the suspicious AEGIS.',
}

export const ESCROW_FIXTURES: Record<EscrowScenarioId, EscrowScenarioFixture> = {
  normal: NORMAL_FIXTURE,
  sandwich: SANDWICH_FIXTURE,
}

export function shortfallPct(fixture: EscrowScenarioFixture): number {
  const expected = parseFloat(fixture.expectedOutput)
  const actual = parseFloat(fixture.pendingOutputAegis)
  if (!isFinite(expected) || expected === 0) return 0
  return ((expected - actual) / expected) * 100
}
