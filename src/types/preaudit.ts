export type Verdict = 'safe' | 'warning' | 'unsafe'
export type Severity = 'info' | 'low' | 'medium' | 'high' | 'critical'
export type AddressType = 'eoa' | 'contract'
export type CodeStatus = 'none' | 'verified' | 'unverified'

export interface Evidence {
  line_start: number | null
  line_end: number | null
  description: string
}

export interface Vulnerability {
  id: string
  title: string
  severity: Severity
  risk_score: number
  confidence_score: number
  impact_score: number
  exploitability_score: number
  summary: string
  remediation: string
  evidence: Evidence[]
}

export interface AuditReport {
  model: string
  score_version: string
  overall_risk_score: number
  overall_severity: Severity
  overall_summary: string
  vulnerabilities: Vulnerability[]
}

export interface PreflightResponse {
  to: string
  chainId: number
  address_type: AddressType
  code_status: CodeStatus
  verdict: Verdict
  reason: string
  audit: AuditReport | null
}
