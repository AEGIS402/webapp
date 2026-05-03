import { useNavigate } from 'react-router-dom'
import { PreflightResponse } from '../../types/preaudit'
import { StatusType, SEPOLIA_EXPLORER } from '../../constants/data'
import { StatusPill } from '../shared/StatusPill'
import {
  ScoreGauge, FindingsBreakdown, VulnerabilityCard,
  SectionHeader, Tag,
} from './shared'

interface Props {
  data: PreflightResponse
}

export function PreAuditLiveView({ data }: Props) {
  const navigate = useNavigate()
  const audit = data.audit

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
      <BackBar onBack={() => navigate('/overview')} />
      <Hero data={data} />
      {audit && <FindingsBreakdown audit={audit} />}

      {audit && audit.vulnerabilities.length > 0 ? (
        <>
          <SectionHeader>VULNERABILITIES · {audit.vulnerabilities.length}</SectionHeader>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {audit.vulnerabilities.map((v, i) => (
              <VulnerabilityCard key={v.id} v={v} index={i + 1} total={audit.vulnerabilities.length} />
            ))}
          </div>
        </>
      ) : (
        <EmptyVulnerabilities verdict={data.verdict} />
      )}
    </div>
  )
}

function BackBar({ onBack }: { onBack: () => void }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: 10,
      padding: '6px 0', borderBottom: '1px dashed #2D1F5E',
      marginBottom: -4,
    }}>
      <button
        onClick={onBack}
        style={{
          background: 'transparent', border: '1px solid #2D1F5E',
          color: '#9B8EC4', cursor: 'pointer',
          padding: '6px 12px', borderRadius: 4,
          fontFamily: "'Press Start 2P', monospace",
          fontSize: 7, letterSpacing: '0.08em',
        }}
      >
        ← BACK TO OVERVIEW
      </button>
      <span style={{ fontFamily: "'Press Start 2P', monospace", fontSize: 6, color: '#5A4A8A', letterSpacing: '0.14em' }}>
        AEGIS402 · PRE-AUDIT REPORT
      </span>
    </div>
  )
}

function Hero({ data }: { data: PreflightResponse }) {
  const verdict = data.verdict
  const tone = verdictTone(verdict)
  const score = data.audit?.overall_risk_score ?? null
  const sevLabel = data.audit?.overall_severity ?? '—'
  const etherscanUrl = `${SEPOLIA_EXPLORER}/address/${data.to}`

  return (
    <div style={{
      background: '#0E0B22',
      border: `1px solid ${tone.border}`,
      borderRadius: 10,
      overflow: 'hidden',
      position: 'relative',
    }}>
      <div style={{ height: 4, background: tone.color }} />
      <div style={{
        padding: 20,
        display: 'grid',
        gridTemplateColumns: '180px 1fr',
        gap: 24,
        alignItems: 'center',
      }}>
        <ScoreGauge
          score={score}
          severityLabel={sevLabel}
          color={tone.color}
          hint="lower is safer · 0–19 info · 90+ critical"
        />

        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
            <span style={{
              fontFamily: "'Press Start 2P', monospace",
              fontSize: 18, letterSpacing: '0.06em',
              color: tone.color, textShadow: `0 0 12px ${tone.color}55`,
            }}>
              {tone.label}
            </span>
            <span style={{ flex: 1 }} />
            <StatusPill status={verdictPill(verdict)} label={tone.pillLabel} />
          </div>

          <div style={{
            fontSize: 13, color: '#F2E7FF',
            fontWeight: 700, marginBottom: 4, wordBreak: 'break-all',
          }}>
            {data.to}
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 14 }}>
            <Tag label="chain" value={`${data.chainId} · sepolia`} />
            <Tag label="type" value={data.address_type} />
            <Tag label="source" value={data.code_status} />
            <a
              href={etherscanUrl}
              target="_blank"
              rel="noreferrer"
              style={{
                fontSize: 9, color: '#7F77DD', textDecoration: 'none',
                padding: '3px 8px', borderRadius: 3,
                border: '1px solid #2D1F5E',
                background: 'rgba(127,119,221,0.08)',
              }}
            >
              ↗ etherscan
            </a>
          </div>

          <div style={{
            background: '#13102E',
            border: `1px solid ${tone.border}`,
            borderLeft: `3px solid ${tone.color}`,
            borderRadius: 6,
            padding: '10px 12px',
            fontSize: 11, lineHeight: 1.6,
            color: '#9B8EC4',
          }}>
            <span style={{ color: tone.color, fontWeight: 700 }}>reason · </span>
            {data.reason}
          </div>
        </div>
      </div>

      {data.audit?.overall_summary && (
        <div style={{
          padding: '14px 20px',
          borderTop: '1px solid #2D1F5E',
          background: '#13102E',
          fontSize: 11.5, color: '#F2E7FF', lineHeight: 1.7,
        }}>
          {data.audit.overall_summary}
        </div>
      )}
    </div>
  )
}

function EmptyVulnerabilities({ verdict }: { verdict: PreflightResponse['verdict'] }) {
  const tone = verdict === 'safe'
    ? { color: '#A8FF3E', text: 'No medium-or-higher findings detected. AEGIS402 will allow the payment to proceed.', label: '✓ ALLOWED' }
    : verdict === 'warning'
    ? { color: '#FFE600', text: 'Contract source is unverified or analyzer skipped — AEGIS402 will require explicit user confirmation before settling.', label: '⚠ MANUAL REVIEW' }
    : { color: '#FF4444', text: 'No structured findings, but verdict is unsafe (likely analyzer error). Payment is halted.', label: '✕ HALTED' }

  return (
    <div style={{
      background: '#0E0B22', border: `1px solid ${tone.color}`, borderRadius: 10,
      borderLeft: `4px solid ${tone.color}`, padding: 18,
      display: 'flex', flexDirection: 'column', gap: 10,
    }}>
      <div style={{
        fontFamily: "'Press Start 2P', monospace", fontSize: 9,
        color: tone.color, letterSpacing: '0.08em',
      }}>
        {tone.label}
      </div>
      <div style={{ fontSize: 12, color: tone.color, lineHeight: 1.6 }}>
        {tone.text}
      </div>
    </div>
  )
}

function verdictPill(verdict: PreflightResponse['verdict']): StatusType {
  if (verdict === 'safe')    return 'ALLOW'
  if (verdict === 'warning') return 'WARN'
  return 'BLOCK'
}

function verdictTone(verdict: PreflightResponse['verdict']) {
  if (verdict === 'safe') {
    return { label: '✓ SAFE TO PROCEED', pillLabel: '✓ SAFE',    color: '#A8FF3E', border: '#A8FF3E' }
  }
  if (verdict === 'warning') {
    return { label: '⚠ MANUAL REVIEW',   pillLabel: '⚠ WARNING', color: '#FFE600', border: '#FFE600' }
  }
  return   { label: '✕ PAYMENT HALTED',  pillLabel: '✕ UNSAFE',  color: '#FF4444', border: '#FF4444' }
}
