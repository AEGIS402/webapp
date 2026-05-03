import type { AuditReport } from './preaudit'

export type EscrowScenarioId = 'normal' | 'sandwich'
export type FinalEscrowStateCode = '1' | '2' | '3'  // 1=Pending, 2=Released, 3=ClaimPaid

export interface EscrowScenarioRunResult {
  scenario: EscrowScenarioId
  explainer: string
  narration: string[]
  network: { chainId: string }

  deployment: {
    aegisDemoDeployer: string
    usdt: string
    aegis: string
    insurancePool: string
    vault: string
    hook: string
    adapter: string
  }

  actors: {
    auditor: string
    user: string
    attacker: string | null
  }

  tradeId: string
  swapTxHash: string
  decisionTxHash: string

  audit: AuditReport
  chosenAction: 'RELEASE' | 'BLOCK_AND_CLAIM'
  reasonCode: 'CLEAN' | 'SANDWICH'

  pendingEscrow: {
    state: FinalEscrowStateCode  // expected '1'
    inputAmount: string
    outputAmount: string
    expectedOutput: string
  }

  finalEscrow: {
    state: FinalEscrowStateCode  // '2' or '3'
    outputAmount: string
  }

  balances: {
    userUsdt: string
    userAegis: string
    insuranceUsdt: string
    insuranceAegis: string
  }

  etherscan: {
    swap: string
    decision: string
  }

  elapsedMs: number
}

export function escrowStateLabel(code: FinalEscrowStateCode): 'Pending' | 'Released' | 'ClaimPaid' {
  if (code === '2') return 'Released'
  if (code === '3') return 'ClaimPaid'
  return 'Pending'
}
