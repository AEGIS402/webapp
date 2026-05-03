import type { PreflightResponse } from '../types/preaudit'

export const PREAUDIT_MOCK_SAFE: PreflightResponse = {
  to: '0xc4680Ab74eB4a4F7379016aa7b6044380Ae4C0C0',
  chainId: 11155111,
  address_type: 'contract',
  code_status: 'verified',
  verdict: 'safe',
  reason: 'no medium+ findings',
  audit: {
    model: 'gpt-oss-120b',
    score_version: 'risk-v1',
    overall_risk_score: 8,
    overall_severity: 'info',
    overall_summary:
      'Aegis402SafeHook validates the minimal x402 payment context (signature, expiry, payment id, pool, asset, amount, minOut) before the swap and re-checks the received amount after the swap. No medium-or-higher findings were detected; only minor informational notes around explicit pause control and signer rotation.',
    vulnerabilities: [],
  },
}

export const PREAUDIT_MOCK_UNSAFE: PreflightResponse = {
  to: '0x70fAA067bE47D8dc839088Dcfc6f9338c07c80C0',
  chainId: 11155111,
  address_type: 'contract',
  code_status: 'verified',
  verdict: 'unsafe',
  reason: 'found 6 medium+ findings',
  audit: {
    model: 'gpt-oss-120b',
    score_version: 'risk-v1',
    overall_risk_score: 92,
    overall_severity: 'critical',
    overall_summary:
      'Aegis402VulnerableHook accepts a payment context but skips most validation. Privileged setters are unrestricted, the user-controlled callback runs before settlement state is finalized, payer authorization relies on tx.origin, and ERC20 transfer return values are ignored. A reused payment id can settle multiple times.',
    vulnerabilities: [
      {
        id: 'V-001',
        title: 'Missing access control on privileged setters',
        severity: 'critical',
        risk_score: 92,
        confidence_score: 95,
        impact_score: 95,
        exploitability_score: 90,
        summary:
          'setGuardSigner, setTrustedRouter, and pause/unpause functions are externally callable without an owner check. Any address can rotate the guard signer and accept arbitrary payment contexts.',
        remediation:
          'Restrict privileged setters to the contract owner via OpenZeppelin Ownable or a dedicated role check.',
        evidence: [
          { line_start: 88, line_end: 110, description: 'setGuardSigner / setTrustedRouter declared external with no auth.' },
        ],
      },
      {
        id: 'V-002',
        title: 'Reentrancy-prone callback ordering',
        severity: 'high',
        risk_score: 84,
        confidence_score: 90,
        impact_score: 85,
        exploitability_score: 80,
        summary:
          'The hook invokes a user-supplied callback target before the payment settlement state is written, violating the checks-effects-interactions pattern.',
        remediation:
          'Mark the payment id as settled before performing any external callback, or wrap the callback path with a reentrancy guard.',
        evidence: [
          { line_start: 142, line_end: 168, description: 'External call at L154 precedes state write at L165.' },
        ],
      },
      {
        id: 'V-003',
        title: 'Integer overflow / underflow in escrow math',
        severity: 'high',
        risk_score: 78,
        confidence_score: 88,
        impact_score: 80,
        exploitability_score: 70,
        summary:
          'Internal escrow + fee accounting uses unchecked arithmetic on user-controlled inputs, allowing wrap-around and inconsistent balances.',
        remediation: 'Remove unchecked blocks for user-controlled inputs and rely on Solidity 0.8 default checks.',
        evidence: [
          { line_start: 201, line_end: 219, description: 'unchecked { ... } around fee subtraction.' },
        ],
      },
      {
        id: 'V-004',
        title: 'tx.origin used for payer authorization',
        severity: 'high',
        risk_score: 76,
        confidence_score: 92,
        impact_score: 80,
        exploitability_score: 75,
        summary:
          'The hook compares context.payer to tx.origin instead of msg.sender, allowing any contract the owner interacts with to impersonate the payer.',
        remediation: 'Require the trusted router to forward msg.sender and compare against context.payer.',
        evidence: [
          { line_start: 233, line_end: 240, description: 'require(tx.origin == ctx.payer).' },
        ],
      },
      {
        id: 'V-005',
        title: 'Unchecked ERC20 transfer return value',
        severity: 'medium',
        risk_score: 62,
        confidence_score: 85,
        impact_score: 70,
        exploitability_score: 55,
        summary:
          'IERC20.transfer return value is discarded, so non-reverting tokens that return false will leave the payment marked as settled without funds moving.',
        remediation: 'Use SafeERC20 or check the boolean return and revert on false.',
        evidence: [
          { line_start: 271, line_end: 279, description: 'token.transfer(payTo, amount) result ignored.' },
        ],
      },
      {
        id: 'V-006',
        title: 'Replayable payment id',
        severity: 'medium',
        risk_score: 60,
        confidence_score: 90,
        impact_score: 65,
        exploitability_score: 60,
        summary:
          'The same paymentId can settle multiple times because the hook does not record consumed ids, enabling double-settlement on retried merchant requests.',
        remediation: 'Store consumed paymentIds in a mapping and revert on reuse.',
        evidence: [
          { line_start: 305, line_end: 318, description: 'No paymentIdSeen mapping check.' },
        ],
      },
    ],
  },
}

export function pickMock(verdict: 'safe' | 'unsafe'): PreflightResponse {
  return verdict === 'safe' ? PREAUDIT_MOCK_SAFE : PREAUDIT_MOCK_UNSAFE
}
