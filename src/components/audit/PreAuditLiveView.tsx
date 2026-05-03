import { useNavigate } from 'react-router-dom'
import { PreflightResponse, Severity, Vulnerability, AuditReport } from '../../types/preaudit'
import { StatusType } from '../../constants/data'
import { StatusPill } from '../shared/StatusPill'

interface Props {
  data: PreflightResponse
}

const SEVERITY_ORDER: Severity[] = ['critical', 'high', 'medium', 'low', 'info']

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
  const etherscanUrl = `https://sepolia.etherscan.io/address/${data.to}`

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
        <ScoreGauge score={score} severityLabel={sevLabel} color={tone.color} />

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

function ScoreGauge({ score, severityLabel, color }: { score: number | null; severityLabel: string; color: string }) {
  const pct = score == null ? 0 : Math.max(0, Math.min(100, score))
  const r = 64
  const c = 2 * Math.PI * r
  const offset = c * (1 - pct / 100)

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
      <div style={{ position: 'relative', width: 160, height: 160 }}>
        <svg width="160" height="160" viewBox="0 0 160 160">
          <circle cx="80" cy="80" r={r} fill="none" stroke="#2D1F5E" strokeWidth="10" />
          <circle
            cx="80"
            cy="80"
            r={r}
            fill="none"
            stroke={color}
            strokeWidth="10"
            strokeLinecap="round"
            strokeDasharray={c}
            strokeDashoffset={offset}
            transform="rotate(-90 80 80)"
            style={{ transition: 'stroke-dashoffset 600ms ease-out, stroke 200ms' }}
          />
        </svg>
        <div style={{
          position: 'absolute', inset: 0,
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center',
        }}>
          <div style={{
            fontFamily: "'Press Start 2P', monospace", fontSize: 6,
            color: '#5A4A8A', letterSpacing: '0.16em', marginBottom: 4,
          }}>
            RISK
          </div>
          <div style={{
            fontFamily: "'Press Start 2P', monospace",
            fontSize: 32, color, lineHeight: 1,
          }}>
            {score ?? '—'}
          </div>
          <div style={{ fontSize: 9, color: '#5A4A8A', marginTop: 6 }}>/ 100</div>
        </div>
      </div>
      <div style={{
        fontFamily: "'Press Start 2P', monospace",
        fontSize: 8, letterSpacing: '0.1em',
        color, padding: '4px 10px',
        border: `1px solid ${color}`, borderRadius: 3,
        background: `${color}1a`,
      }}>
        {severityLabel.toUpperCase()}
      </div>
      <div style={{
        fontSize: 8, color: '#5A4A8A', marginTop: 2,
        textAlign: 'center', lineHeight: 1.5,
      }}>
        lower is safer · 0–19 info · 90+ critical
      </div>
    </div>
  )
}

function Tag({ label, value }: { label: string; value: string }) {
  return (
    <span style={{
      fontSize: 9, padding: '3px 8px',
      borderRadius: 3, border: '1px solid #2D1F5E',
      background: '#13102E',
    }}>
      <span style={{ color: '#5A4A8A' }}>{label}: </span>
      <span style={{ color: '#F2E7FF' }}>{value}</span>
    </span>
  )
}

function FindingsBreakdown({ audit }: { audit: AuditReport }) {
  const counts = SEVERITY_ORDER.map(sev => ({
    sev,
    count: audit.vulnerabilities.filter(v => v.severity === sev).length,
  }))
  return (
    <div style={{
      background: '#0E0B22', border: '1px solid #2D1F5E',
      borderRadius: 10, padding: 14,
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
        <span style={{ fontFamily: "'Press Start 2P', monospace", fontSize: 7, color: '#5A4A8A', letterSpacing: '0.14em' }}>
          FINDINGS BREAKDOWN
        </span>
        <span style={{ flex: 1 }} />
        <span style={{ fontSize: 9, color: '#5A4A8A' }}>
          model · <span style={{ color: '#9B8EC4' }}>{audit.model}</span>
        </span>
        <span style={{ fontSize: 9, color: '#5A4A8A' }}>
          score_version · <span style={{ color: '#9B8EC4' }}>{audit.score_version}</span>
        </span>
      </div>
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
        {counts.map(c => {
          const color = severityColor(c.sev)
          const dim = c.count === 0
          return (
            <div key={c.sev} style={{
              display: 'flex', alignItems: 'center', gap: 8,
              padding: '8px 12px',
              borderRadius: 6,
              border: `1px solid ${dim ? '#2D1F5E' : color}`,
              background: dim ? 'transparent' : `${color}14`,
              opacity: dim ? 0.5 : 1,
            }}>
              <div style={{
                width: 10, height: 10, borderRadius: '50%',
                background: color, flexShrink: 0,
              }} />
              <span style={{
                fontFamily: "'Press Start 2P', monospace",
                fontSize: 14, color: dim ? '#5A4A8A' : color,
              }}>
                {c.count}
              </span>
              <span style={{
                fontFamily: "'Press Start 2P', monospace",
                fontSize: 7, letterSpacing: '0.08em',
                color: dim ? '#5A4A8A' : color,
              }}>
                {c.sev.toUpperCase()}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

function VulnerabilityCard({ v, index, total }: { v: Vulnerability; index: number; total: number }) {
  const color = severityColor(v.severity)
  return (
    <div style={{
      background: '#0E0B22',
      border: '1px solid #2D1F5E',
      borderLeft: `4px solid ${color}`,
      borderRadius: 10,
      overflow: 'hidden',
    }}>
      {/* Header */}
      <div style={{
        display: 'flex', alignItems: 'center', gap: 10,
        padding: '12px 16px',
        borderBottom: '1px solid #2D1F5E',
        background: '#13102E',
      }}>
        <span style={{
          fontFamily: "'Press Start 2P', monospace", fontSize: 8,
          color, letterSpacing: '0.08em',
        }}>
          {v.id}
        </span>
        <span style={{
          fontSize: 8, color: '#5A4A8A',
          fontFamily: "'Press Start 2P', monospace", letterSpacing: '0.08em',
        }}>
          {String(index).padStart(2, '0')} / {String(total).padStart(2, '0')}
        </span>
        <span style={{
          padding: '3px 8px', borderRadius: 3,
          border: `1px solid ${color}`, background: `${color}1a`,
          color, fontFamily: "'Press Start 2P', monospace",
          fontSize: 7, letterSpacing: '0.08em',
        }}>
          {v.severity.toUpperCase()}
        </span>
        <span style={{ flex: 1 }} />
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 4 }}>
          <span style={{
            fontFamily: "'Press Start 2P', monospace", fontSize: 18, color,
          }}>
            {v.risk_score}
          </span>
          <span style={{ fontSize: 9, color: '#5A4A8A' }}>/100</span>
        </div>
      </div>

      <div style={{ padding: '14px 16px', display: 'flex', flexDirection: 'column', gap: 12 }}>
        {/* Title + summary */}
        <div>
          <div style={{
            fontSize: 13, fontWeight: 700, color: '#F2E7FF',
            marginBottom: 6, lineHeight: 1.4,
          }}>
            {v.title}
          </div>
          <div style={{ fontSize: 11, color: '#9B8EC4', lineHeight: 1.65 }}>
            {v.summary}
          </div>
        </div>

        {/* Meters */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 10 }}>
          <Meter label="confidence" value={v.confidence_score} color="#7F77DD" />
          <Meter label="impact" value={v.impact_score} color={color} />
          <Meter label="exploitability" value={v.exploitability_score} color="#FFE600" />
        </div>

        {/* Remediation */}
        <FindingBlock title="REMEDIATION" color="#A8FF3E">
          <div style={{ fontSize: 11, color: '#A8FF3E', lineHeight: 1.65 }}>
            {v.remediation}
          </div>
        </FindingBlock>

        {/* Evidence */}
        {v.evidence.length > 0 && (
          <FindingBlock title={`EVIDENCE · ${v.evidence.length} site${v.evidence.length === 1 ? '' : 's'}`} color="#7F77DD">
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {v.evidence.map((e, i) => (
                <div key={i} style={{
                  display: 'grid', gridTemplateColumns: '90px 1fr',
                  gap: 10, alignItems: 'baseline',
                }}>
                  <span style={{
                    fontFamily: "'IBM Plex Mono', monospace",
                    fontSize: 10, color: '#7F77DD',
                    background: 'rgba(127,119,221,0.1)',
                    padding: '2px 6px', borderRadius: 3,
                    textAlign: 'center', border: '1px solid #2D1F5E',
                  }}>
                    {e.line_start != null && e.line_end != null
                      ? `L${e.line_start}–L${e.line_end}`
                      : '—'}
                  </span>
                  <span style={{ fontSize: 11, color: '#9B8EC4', lineHeight: 1.6 }}>
                    {e.description}
                  </span>
                </div>
              ))}
            </div>
          </FindingBlock>
        )}
      </div>
    </div>
  )
}

function FindingBlock({ title, color, children }: { title: string; color: string; children: React.ReactNode }) {
  return (
    <div style={{
      background: '#13102E',
      border: '1px solid #2D1F5E',
      borderLeft: `2px solid ${color}`,
      borderRadius: 6,
      padding: '10px 12px',
    }}>
      <div style={{
        fontFamily: "'Press Start 2P', monospace", fontSize: 6,
        color, letterSpacing: '0.14em', marginBottom: 8,
      }}>
        {title}
      </div>
      {children}
    </div>
  )
}

function Meter({ label, value, color }: { label: string; value: number; color: string }) {
  const w = Math.max(0, Math.min(100, value))
  return (
    <div style={{
      background: '#13102E',
      border: '1px solid #2D1F5E',
      borderRadius: 6,
      padding: '8px 10px',
    }}>
      <div style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
        marginBottom: 6,
      }}>
        <span style={{
          fontFamily: "'Press Start 2P', monospace", fontSize: 6,
          color: '#5A4A8A', letterSpacing: '0.12em',
        }}>
          {label.toUpperCase()}
        </span>
        <span style={{ fontSize: 11, color, fontWeight: 700 }}>
          {value}
        </span>
      </div>
      <div style={{ height: 4, background: '#2D1F5E', borderRadius: 2, overflow: 'hidden' }}>
        <div style={{
          height: '100%', width: `${w}%`, background: color,
          borderRadius: 2, transition: 'width 600ms ease-out',
        }} />
      </div>
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

function SectionHeader({ children }: { children: React.ReactNode }) {
  return (
    <div style={{
      fontFamily: "'Press Start 2P', monospace", fontSize: 8,
      color: '#9B8EC4', letterSpacing: '0.14em',
      marginTop: 8, marginBottom: -4,
      paddingBottom: 6, borderBottom: '1px dashed #2D1F5E',
    }}>
      {children}
    </div>
  )
}

function severityColor(sev: Severity): string {
  switch (sev) {
    case 'critical': return '#FF4444'
    case 'high':     return '#FF8A4D'
    case 'medium':   return '#FFE600'
    case 'low':      return '#7F77DD'
    default:         return '#A8FF3E'
  }
}

function verdictPill(verdict: PreflightResponse['verdict']): StatusType {
  if (verdict === 'safe')    return 'ALLOW'
  if (verdict === 'warning') return 'WARN'
  return 'BLOCK'
}

function verdictTone(verdict: PreflightResponse['verdict']) {
  if (verdict === 'safe') {
    return {
      label: '✓ SAFE TO PROCEED',
      pillLabel: '✓ SAFE',
      color: '#A8FF3E',
      border: '#A8FF3E',
    }
  }
  if (verdict === 'warning') {
    return {
      label: '⚠ MANUAL REVIEW',
      pillLabel: '⚠ WARNING',
      color: '#FFE600',
      border: '#FFE600',
    }
  }
  return {
    label: '✕ PAYMENT HALTED',
    pillLabel: '✕ UNSAFE',
    color: '#FF4444',
    border: '#FF4444',
  }
}
