import { useNavigate } from 'react-router-dom'
import { AuditStage, AuditModalState, useAuditModal } from '../../state/auditModal'
import { DemoTarget } from '../../constants/data'
import { PreflightResponse, Severity } from '../../types/preaudit'

const STAGES: { key: AuditStage; label: string; sub: string }[] = [
  { key: 'intercept', label: 'Payment intercepted', sub: 'x402 request paused before signing' },
  { key: 'rpc',       label: 'RPC eth_getCode',     sub: 'detect EOA vs contract' },
  { key: 'source',    label: 'Etherscan source',    sub: 'fetch verified source' },
  { key: 'llm',       label: 'LLM analysis',        sub: 'gpt-oss-120b · risk-v1' },
]

export function AgentInterceptModal() {
  const { state } = useAuditModal()
  const visible = state.phase !== 'hidden'

  return (
    <div style={{
      position: 'absolute',
      inset: 8,
      pointerEvents: visible ? 'auto' : 'none',
      opacity: visible ? 1 : 0,
      transform: visible ? 'translateX(0)' : 'translateX(20px)',
      transition: 'opacity 220ms ease-out, transform 220ms ease-out',
      zIndex: 50,
    }}>
      {visible && <ModalBody state={state} />}
    </div>
  )
}

function ModalBody({ state }: { state: AuditModalState }) {
  if (state.phase === 'hidden') return null

  if (state.phase === 'running') return <RunningView state={state} />
  if (state.phase === 'done') return <DoneView state={state} />
  return <ErrorView state={state} />
}

function ModalShell({
  accent, title, subtitle, children,
}: {
  accent: string
  title: string
  subtitle: string
  children: React.ReactNode
}) {
  const { hide } = useAuditModal()
  return (
    <div style={{
      width: '100%', height: '100%',
      background: '#0E0B22',
      border: `1px solid ${accent}`,
      borderRadius: 10,
      boxShadow: `0 0 24px ${accent}22, 0 8px 24px rgba(0,0,0,0.4)`,
      overflow: 'hidden',
      display: 'flex', flexDirection: 'column',
      animation: 'agentModalIn 240ms ease-out',
    }}>
      <style>{KEYFRAMES}</style>

      {/* Top accent bar */}
      <div style={{ height: 3, background: accent }} />

      {/* Header */}
      <div style={{
        display: 'flex', alignItems: 'center', gap: 10,
        padding: '10px 12px',
        background: '#13102E',
        borderBottom: '1px solid #2D1F5E',
      }}>
        <div style={{
          width: 26, height: 26, borderRadius: 6,
          background: `${accent}1f`, border: `1px solid ${accent}`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: accent, fontSize: 14, fontWeight: 700,
        }}>
          ⚡
        </div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{
            fontFamily: "'Press Start 2P', monospace", fontSize: 8,
            color: accent, letterSpacing: '0.1em', whiteSpace: 'nowrap',
          }}>
            {title}
          </div>
          <div style={{ fontSize: 9, color: '#5A4A8A', marginTop: 2, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
            {subtitle}
          </div>
        </div>
        <button
          onClick={hide}
          style={{
            background: 'transparent', border: 'none', cursor: 'pointer',
            color: '#5A4A8A', fontSize: 14, lineHeight: 1, padding: 4,
          }}
          aria-label="dismiss"
        >
          ×
        </button>
      </div>

      {/* Body */}
      <div style={{
        flex: 1, overflowY: 'auto',
        padding: 12,
        display: 'flex', flexDirection: 'column', gap: 10,
      }}>
        {children}
      </div>
    </div>
  )
}

function RunningView({ state }: { state: Extract<AuditModalState, { phase: 'running' }> }) {
  return (
    <ModalShell
      accent="#378ADD"
      title="AEGIS402 · INTERCEPT"
      subtitle={`auditing ${short(state.target.address)}`}
    >
      <PaymentRequestCard target={state.target} />
      <StagesCard stage={state.stage} elapsedSec={state.elapsedSec} cached={state.cached} />
      <NarrativeBox color="#378ADD">
        AEGIS402 paused the agent before signing. The pre-audit will return either a green-light or a hard halt.
      </NarrativeBox>
    </ModalShell>
  )
}

function DoneView({ state }: { state: Extract<AuditModalState, { phase: 'done' }> }) {
  const tone = verdictTone(state.result.verdict)
  return (
    <ModalShell
      accent={tone.color}
      title={`AEGIS402 · ${tone.titleSuffix}`}
      subtitle={`audit complete · ${state.elapsedSec}s`}
    >
      <PaymentRequestCard target={state.target} dim />
      <VerdictCard result={state.result} />
      <NarrativeBox color={tone.color}>{tone.narrative}</NarrativeBox>
      <ActionsRow result={state.result} />
    </ModalShell>
  )
}

function ErrorView({ state }: { state: Extract<AuditModalState, { phase: 'error' }> }) {
  return (
    <ModalShell
      accent="#FFE600"
      title="AEGIS402 · ERROR"
      subtitle={`pre-audit failed · ${state.elapsedSec}s`}
    >
      <PaymentRequestCard target={state.target} dim />
      <div style={{
        background: '#13102E', border: '1px solid #FFE600',
        borderLeft: '3px solid #FFE600',
        borderRadius: 6, padding: '10px 12px',
        fontSize: 11, color: '#FFE600', lineHeight: 1.6,
      }}>
        {state.message}
      </div>
      <NarrativeBox color="#FFE600">
        Agent halted the payment by default — better to refuse than to sign blind.
      </NarrativeBox>
    </ModalShell>
  )
}

function PaymentRequestCard({ target, dim = false }: { target: DemoTarget; dim?: boolean }) {
  return (
    <Card label="X402 PAYMENT REQUEST" dim={dim}>
      <Row k="resource" v="/v1/x402/info" />
      <Row k="pay to" v={short(target.address)} mono />
      <Row k="amount" v="0.001 USDC" highlight />
      <Row k="network" v="Sepolia · 11155111" />
    </Card>
  )
}

function StagesCard({ stage, elapsedSec, cached }: { stage: AuditStage; elapsedSec: number; cached: boolean }) {
  const reachedIndex = STAGES.findIndex(s => s.key === stage)
  return (
    <Card label="AEGIS402 PRE-AUDIT">
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {STAGES.map((s, i) => {
          const status: 'done' | 'active' | 'pending' =
            i < reachedIndex ? 'done' : i === reachedIndex ? 'active' : 'pending'
          return <StageRow key={s.key} label={s.label} sub={s.sub} status={status} />
        })}
        <StageRow label="Verdict" sub="block / allow" status="pending" />
      </div>
      <div style={{
        marginTop: 10, paddingTop: 8, borderTop: '1px solid #2D1F5E',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        fontSize: 9, color: '#5A4A8A',
      }}>
        <span>elapsed</span>
        <span style={{ color: '#9B8EC4', fontFamily: "'IBM Plex Mono', monospace" }}>
          {elapsedSec}s {cached && '(cached replay)'}
        </span>
      </div>
    </Card>
  )
}

function StageRow({ label, sub, status }: { label: string; sub: string; status: 'done' | 'active' | 'pending' }) {
  const color =
    status === 'done' ? '#A8FF3E' :
    status === 'active' ? '#378ADD' : '#5A4A8A'
  return (
    <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
      <div style={{
        width: 16, height: 16, borderRadius: '50%',
        border: `1.5px solid ${color}`,
        background: status === 'done' ? `${color}33` : 'transparent',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        flexShrink: 0, marginTop: 2,
      }}>
        {status === 'done' && <span style={{ fontSize: 9, color }}>✓</span>}
        {status === 'active' && (
          <span style={{
            width: 6, height: 6, borderRadius: '50%', background: color,
            animation: 'agentDotPulse 1.2s ease-in-out infinite',
          }} />
        )}
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{
          fontSize: 11, color, fontWeight: status === 'pending' ? 400 : 700,
          lineHeight: 1.4,
        }}>
          {label}
        </div>
        <div style={{ fontSize: 9, color: '#5A4A8A', lineHeight: 1.4 }}>
          {sub}
        </div>
      </div>
    </div>
  )
}

function VerdictCard({ result }: { result: PreflightResponse }) {
  const tone = verdictTone(result.verdict)
  const audit = result.audit
  return (
    <Card label="VERDICT" accent={tone.color}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
        <div style={{
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', minWidth: 44,
        }}>
          <span style={{
            fontFamily: "'Press Start 2P', monospace", fontSize: 6,
            color: '#5A4A8A', letterSpacing: '0.16em',
          }}>
            RISK
          </span>
          <span style={{
            fontFamily: "'Press Start 2P', monospace", fontSize: 18,
            color: tone.color, lineHeight: 1.2,
          }}>
            {audit?.overall_risk_score ?? '—'}
          </span>
        </div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{
            fontFamily: "'Press Start 2P', monospace", fontSize: 9,
            color: tone.color, letterSpacing: '0.06em',
          }}>
            {tone.headline}
          </div>
          <div style={{ fontSize: 9, color: '#5A4A8A', marginTop: 3 }}>
            {audit?.overall_severity?.toUpperCase() ?? '—'} · {result.reason}
          </div>
        </div>
      </div>
      {audit && audit.vulnerabilities.length > 0 && (
        <div style={{ display: 'flex', gap: 5, flexWrap: 'wrap', marginTop: 4 }}>
          {countBySeverity(audit.vulnerabilities.map(v => v.severity)).map(c => (
            <span key={c.sev} style={{
              fontFamily: "'Press Start 2P', monospace", fontSize: 7,
              padding: '3px 7px', borderRadius: 3,
              color: severityColor(c.sev),
              border: `1px solid ${severityColor(c.sev)}`,
              background: `${severityColor(c.sev)}14`,
              letterSpacing: '0.06em',
            }}>
              {c.count} {c.sev.toUpperCase()}
            </span>
          ))}
        </div>
      )}
    </Card>
  )
}

function ActionsRow({ result }: { result: PreflightResponse }) {
  const navigate = useNavigate()
  const { hide } = useAuditModal()
  const tone = verdictTone(result.verdict)
  return (
    <div style={{ display: 'flex', gap: 6, marginTop: 4 }}>
      <button
        onClick={() => navigate('/audit/pre', { state: { audit: result } })}
        style={{
          flex: 1, height: 36, cursor: 'pointer',
          background: `${tone.color}1f`, border: `1.5px solid ${tone.color}`,
          color: tone.color, borderRadius: 6,
          fontFamily: "'Press Start 2P', monospace", fontSize: 7,
          letterSpacing: '0.08em',
        }}
      >
        → REPORT
      </button>
      <button
        onClick={hide}
        style={{
          height: 36, padding: '0 12px', cursor: 'pointer',
          background: 'transparent', border: '1px solid #2D1F5E',
          color: '#5A4A8A', borderRadius: 6,
          fontFamily: "'Press Start 2P', monospace", fontSize: 7,
          letterSpacing: '0.08em',
        }}
      >
        DISMISS
      </button>
    </div>
  )
}

function Card({ label, accent, dim, children }: { label: string; accent?: string; dim?: boolean; children: React.ReactNode }) {
  return (
    <div style={{
      background: '#13102E',
      border: `1px solid ${accent ?? '#2D1F5E'}`,
      borderLeft: accent ? `3px solid ${accent}` : '1px solid #2D1F5E',
      borderRadius: 6,
      padding: '10px 12px',
      opacity: dim ? 0.55 : 1,
      transition: 'opacity 200ms',
    }}>
      <div style={{
        fontFamily: "'Press Start 2P', monospace", fontSize: 6,
        color: accent ?? '#5A4A8A', letterSpacing: '0.14em',
        marginBottom: 8,
      }}>
        {label}
      </div>
      {children}
    </div>
  )
}

function Row({ k, v, mono, highlight }: { k: string; v: string; mono?: boolean; highlight?: boolean }) {
  return (
    <div style={{
      display: 'flex', justifyContent: 'space-between', gap: 8,
      fontSize: 10, marginBottom: 4,
    }}>
      <span style={{ color: '#5A4A8A' }}>{k}</span>
      <span style={{
        color: highlight ? '#FFE600' : '#F2E7FF',
        fontFamily: mono ? "'IBM Plex Mono', monospace" : undefined,
        textAlign: 'right',
      }}>
        {v}
      </span>
    </div>
  )
}

function NarrativeBox({ color, children }: { color: string; children: React.ReactNode }) {
  return (
    <div style={{
      background: 'rgba(127,119,221,0.04)',
      border: '1px dashed #2D1F5E',
      borderRadius: 6, padding: '10px 12px',
      fontSize: 10.5, color: '#9B8EC4', lineHeight: 1.6,
      borderLeft: `2px solid ${color}`,
    }}>
      {children}
    </div>
  )
}

function short(addr: string): string {
  return `${addr.slice(0, 6)}…${addr.slice(-4)}`
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

function countBySeverity(severities: Severity[]) {
  const order: Severity[] = ['critical', 'high', 'medium', 'low', 'info']
  return order
    .map(sev => ({ sev, count: severities.filter(s => s === sev).length }))
    .filter(c => c.count > 0)
}

function verdictTone(verdict: PreflightResponse['verdict']) {
  if (verdict === 'safe') {
    return {
      color: '#A8FF3E',
      titleSuffix: 'ALLOW',
      headline: '✓ AGENT SIGNED',
      narrative: 'No medium-or-higher risks detected. Agent will sign the x402 payment and proceed.',
    }
  }
  if (verdict === 'warning') {
    return {
      color: '#FFE600',
      titleSuffix: 'REVIEW',
      headline: '⚠ MANUAL REVIEW',
      narrative: 'Source unverified or analyzer skipped. Agent paused for explicit human confirmation.',
    }
  }
  return {
    color: '#FF4444',
    titleSuffix: 'BLOCK',
    headline: '✕ PAYMENT HALTED',
    narrative: 'AEGIS402 detected medium-or-higher findings. Agent did NOT sign — payment is halted.',
  }
}

const KEYFRAMES = `
  @keyframes agentModalIn {
    from { opacity: 0; transform: translateY(6px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes agentDotPulse {
    0%,100% { opacity: 1; transform: scale(1); }
    50%      { opacity: 0.5; transform: scale(1.5); }
  }
`
