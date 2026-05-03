import { useNavigate } from 'react-router-dom'
import { PostAuditReport } from '../../types/postaudit'
import { SEPOLIA_EXPLORER } from '../../constants/data'
import { StatusPill } from '../shared/StatusPill'
import {
  ScoreGauge, FindingsBreakdown, VulnerabilityCard,
  SectionHeader, Tag, severityToStatus, severityColor,
} from './shared'

interface Props {
  audit: PostAuditReport
  txHash?: string
  subject?: string
  chainId?: number
}

export function PostAuditLiveView({ audit, txHash, subject, chainId = 11155111 }: Props) {
  const navigate = useNavigate()

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
      <BackBar onBack={() => navigate('/overview')} />
      <Hero audit={audit} txHash={txHash} subject={subject} chainId={chainId} />
      <FindingsBreakdown audit={audit} />

      {audit.vulnerabilities.length > 0 ? (
        <>
          <SectionHeader>POST-AUDIT FINDINGS · {audit.vulnerabilities.length}</SectionHeader>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {audit.vulnerabilities.map((v, i) => (
              <VulnerabilityCard key={v.id} v={v} index={i + 1} total={audit.vulnerabilities.length} />
            ))}
          </div>
        </>
      ) : (
        <CleanCard />
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
      <span style={{
        fontFamily: "'Press Start 2P', monospace", fontSize: 6,
        color: '#5A4A8A', letterSpacing: '0.14em',
      }}>
        AEGIS402 · POST-AUDIT REPORT
      </span>
    </div>
  )
}

function Hero({ audit, txHash, subject, chainId }: { audit: PostAuditReport; txHash?: string; subject?: string; chainId: number }) {
  const tone = severityTone(audit.overall_severity)
  const txUrl = txHash ? `${SEPOLIA_EXPLORER}/tx/${txHash}` : null
  const subjectUrl = subject ? `${SEPOLIA_EXPLORER}/address/${subject}` : null

  return (
    <div style={{
      background: '#0E0B22',
      border: `1px solid ${tone.color}`,
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
          score={audit.overall_risk_score}
          severityLabel={audit.overall_severity}
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
              {tone.headline}
            </span>
            <span style={{ flex: 1 }} />
            <StatusPill status={severityToStatus(audit.overall_severity)} label={tone.pillLabel} />
          </div>

          {txHash && (
            <div style={{
              fontSize: 12, color: '#F2E7FF',
              fontWeight: 700, marginBottom: 4, wordBreak: 'break-all',
              fontFamily: "'IBM Plex Mono', monospace",
            }}>
              {txHash}
            </div>
          )}

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 14 }}>
            <Tag label="chain" value={`${chainId} · sepolia`} />
            {subject && <Tag label="subject" value={`${subject.slice(0, 6)}…${subject.slice(-4)}`} />}
            {txUrl && (
              <a href={txUrl} target="_blank" rel="noreferrer" style={LINK_STYLE}>
                ↗ tx
              </a>
            )}
            {subjectUrl && (
              <a href={subjectUrl} target="_blank" rel="noreferrer" style={LINK_STYLE}>
                ↗ subject
              </a>
            )}
          </div>

          <div style={{
            background: '#13102E',
            border: `1px solid ${tone.color}`,
            borderLeft: `3px solid ${tone.color}`,
            borderRadius: 6,
            padding: '10px 12px',
            fontSize: 11, lineHeight: 1.6,
            color: '#9B8EC4',
          }}>
            <span style={{ color: tone.color, fontWeight: 700 }}>summary · </span>
            {audit.overall_summary}
          </div>
        </div>
      </div>
    </div>
  )
}

function CleanCard() {
  return (
    <div style={{
      background: '#0E0B22', border: '1px solid #A8FF3E', borderRadius: 10,
      borderLeft: '4px solid #A8FF3E', padding: 18,
      display: 'flex', flexDirection: 'column', gap: 10,
    }}>
      <div style={{
        fontFamily: "'Press Start 2P', monospace", fontSize: 9,
        color: '#A8FF3E', letterSpacing: '0.08em',
      }}>
        ✓ CLEAN EXECUTION
      </div>
      <div style={{ fontSize: 12, color: '#A8FF3E', lineHeight: 1.6 }}>
        No medium-or-higher risks detected after the swap settled. AEGIS402 will release the escrowed output.
      </div>
    </div>
  )
}

const LINK_STYLE: React.CSSProperties = {
  fontSize: 9, color: '#7F77DD', textDecoration: 'none',
  padding: '3px 8px', borderRadius: 3,
  border: '1px solid #2D1F5E',
  background: 'rgba(127,119,221,0.08)',
}

function severityTone(sev: PostAuditReport['overall_severity']) {
  const color = severityColor(sev)
  if (sev === 'high' || sev === 'critical') {
    return { color, headline: '✕ HIGH-RISK SETTLEMENT', pillLabel: '✕ BLOCKED' }
  }
  if (sev === 'medium') {
    return { color, headline: '⚠ MANUAL REVIEW',          pillLabel: '⚠ WARN' }
  }
  return { color, headline: '✓ CLEAN SETTLEMENT',          pillLabel: '✓ CLEAN' }
}
