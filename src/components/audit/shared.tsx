import { Severity, Vulnerability, AuditReport } from '../../types/preaudit'
import { StatusType } from '../../constants/data'

const SEVERITY_ORDER: Severity[] = ['critical', 'high', 'medium', 'low', 'info']

export function severityColor(sev: Severity): string {
  switch (sev) {
    case 'critical': return '#FF4444'
    case 'high':     return '#FF8A4D'
    case 'medium':   return '#FFE600'
    case 'low':      return '#7F77DD'
    default:         return '#A8FF3E'
  }
}

export function severityToStatus(sev: Severity): StatusType {
  if (sev === 'critical' || sev === 'high') return 'BLOCK'
  if (sev === 'medium') return 'WARN'
  if (sev === 'low') return 'CACHE'
  return 'PASS'
}

export function ScoreGauge({
  score, severityLabel, color, hint,
}: {
  score: number | null
  severityLabel: string
  color: string
  hint?: string
}) {
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
      {hint && (
        <div style={{
          fontSize: 8, color: '#5A4A8A',
          textAlign: 'center', lineHeight: 1.5,
        }}>
          {hint}
        </div>
      )}
    </div>
  )
}

export function FindingsBreakdown({ audit, hideMeta = false }: { audit: AuditReport; hideMeta?: boolean }) {
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
        <span style={{
          fontFamily: "'Press Start 2P', monospace", fontSize: 7,
          color: '#5A4A8A', letterSpacing: '0.14em',
        }}>
          FINDINGS BREAKDOWN
        </span>
        <span style={{ flex: 1 }} />
        {!hideMeta && (
          <>
            <span style={{ fontSize: 9, color: '#5A4A8A' }}>
              model · <span style={{ color: '#9B8EC4' }}>{audit.model}</span>
            </span>
            <span style={{ fontSize: 9, color: '#5A4A8A' }}>
              score_version · <span style={{ color: '#9B8EC4' }}>{audit.score_version}</span>
            </span>
          </>
        )}
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

export function VulnerabilityCard({ v, index, total }: { v: Vulnerability; index: number; total: number }) {
  const color = severityColor(v.severity)
  return (
    <div style={{
      background: '#0E0B22',
      border: '1px solid #2D1F5E',
      borderLeft: `4px solid ${color}`,
      borderRadius: 10,
      overflow: 'hidden',
    }}>
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

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 10 }}>
          <Meter label="confidence" value={v.confidence_score} color="#7F77DD" />
          <Meter label="impact" value={v.impact_score} color={color} />
          <Meter label="exploitability" value={v.exploitability_score} color="#FFE600" />
        </div>

        <FindingBlock title="REMEDIATION" color="#A8FF3E">
          <div style={{ fontSize: 11, color: '#A8FF3E', lineHeight: 1.65 }}>
            {v.remediation}
          </div>
        </FindingBlock>

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

export function FindingBlock({ title, color, children }: { title: string; color: string; children: React.ReactNode }) {
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

export function Meter({ label, value, color }: { label: string; value: number; color: string }) {
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

export function SectionHeader({ children }: { children: React.ReactNode }) {
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

export function Tag({ label, value }: { label: string; value: string }) {
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

export function VerdictBadge({
  label, color,
}: {
  label: string
  color: string
}) {
  return (
    <span style={{
      fontFamily: "'Press Start 2P', monospace", fontSize: 8,
      letterSpacing: '0.1em',
      padding: '4px 10px',
      color, border: `1px solid ${color}`,
      background: `${color}1a`, borderRadius: 3,
    }}>
      {label}
    </span>
  )
}

