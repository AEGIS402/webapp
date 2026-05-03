import type { PostAuditReport } from '../types/postaudit'

// Captured live response (Sepolia, swap tx 0x9c55…e946).
export const POSTAUDIT_MOCK_NORMAL: PostAuditReport = {
  model: 'gpt-oss-120b',
  score_version: 'risk-v1',
  overall_risk_score: 0,
  overall_severity: 'info',
  overall_summary:
    'The transaction performed a protectedExactInputSingle swap of 100 USDT for approximately 99.54 AEGIS, with the output exceeding the expected amount, and no risky conditions were detected.',
  vulnerabilities: [],
}

// Synthetic high-severity response for the sandwich victim.
// (The real Sepolia victim swap settled with expectedOutput=0, which suppresses
// the protected_swap_output_shortfall rule. Re-run e2e:escrow:live with
// E2E_EXPECTED_OUTPUT=99 to get a true live high verdict.)
export const POSTAUDIT_MOCK_SANDWICH: PostAuditReport = {
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
        'Tighten slippage protection or use limit orders for protected swaps, verify on-chain price before execution, and consider using TWAP price oracles. Avoid large swaps in low-liquidity pools where MEV impact is amplified.',
      evidence: [
        { line_start: null, line_end: null, description: 'Evidence refs: log#8 (ProtectedSwapEscrowed).' },
      ],
    },
  ],
}
