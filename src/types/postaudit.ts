import type { AuditReport, Severity, Vulnerability } from './preaudit'

// post-audit returns the same `AuditReport` shape as pre-audit's `audit` field.
// The wrapper here adds the request inputs so the frontend can keep tx + subject in one place.
export type PostAuditReport = AuditReport

export interface PostAuditResponse {
  tx_hash: string
  subject_address?: string
  chain_id?: number
  audit: PostAuditReport
}

export type { Severity, Vulnerability, AuditReport }
