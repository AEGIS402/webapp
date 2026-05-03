import { useNavigate } from 'react-router-dom'
import { AuditStage, AuditModalState, useAuditModal, EscrowSubject, PostAuditSubject } from '../../state/auditModal'
import { DemoTarget } from '../../constants/data'
import { PreflightResponse, Severity } from '../../types/preaudit'
import type { PostAuditReport } from '../../types/postaudit'
import type { EscrowHistoryEntry } from '../../state/escrowHistory'

const PRE_STAGES: { key: AuditStage; label: string; sub: string }[] = [
  { key: 'intercept', label: 'Payment intercepted', sub: 'x402 request paused before signing' },
  { key: 'rpc',       label: 'RPC eth_getCode',     sub: 'detect EOA vs contract' },
  { key: 'source',    label: 'Etherscan source',    sub: 'fetch verified source' },
  { key: 'llm',       label: 'LLM analysis',        sub: 'gpt-oss-120b · risk-v1' },
]

const POST_STAGES: { key: AuditStage; label: string; sub: string }[] = [
  { key: 'tx',     label: 'Tx hash received',         sub: 'post-audit triggered after settlement' },
  { key: 'rpc',    label: 'RPC tx + receipt',         sub: 'eth_getTransactionByHash · receipt · block' },
  { key: 'decode', label: 'Decode logs + asset flows', sub: 'Transfer / Approval / ProtectedSwapEscrowed' },
  { key: 'llm',    label: 'LLM analysis',             sub: 'gpt-oss-120b · risk-v1' },
]

const ESCROW_STAGES: { key: AuditStage; label: string; sub: string }[] = [
  { key: 'mint',     label: 'Mint + approve',  sub: 'fund the trader, approve PoolSwapTest / adapter' },
  { key: 'swap',     label: 'Protected swap',  sub: 'protectedExactInputSingle (sandwich: front-run / back-run)' },
  { key: 'audit',    label: 'Post-audit',      sub: 'gpt-oss-120b reviews the swap receipt' },
  { key: 'decision', label: 'Auditor decision', sub: 'executeAuditDecision: RELEASE / BLOCK_AND_CLAIM' },
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
      <div style={{ height: 3, background: accent }} />
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
  if (state.mode === 'pre') {
    return (
      <ModalShell
        accent="#378ADD"
        title="AEGIS402 · INTERCEPT"
        subtitle={`auditing ${short(state.target.address)}`}
      >
        <PreSubjectCard target={state.target} />
        <StagesCard stages={PRE_STAGES} stage={state.stage} elapsedSec={state.elapsedSec} cached={state.cached} />
        <NarrativeBox color="#378ADD">
          AEGIS402 paused the agent before signing. The pre-audit will return either a green-light or a hard halt.
        </NarrativeBox>
      </ModalShell>
    )
  }
  if (state.mode === 'post') {
    return (
      <ModalShell
        accent="#FF8A4D"
        title="AEGIS402 · POST-AUDIT"
        subtitle={`auditing ${short(state.subject.txHash)}`}
      >
        <PostSubjectCard subject={state.subject} />
        <StagesCard stages={POST_STAGES} stage={state.stage} elapsedSec={state.elapsedSec} cached={state.cached} />
        <NarrativeBox color="#FF8A4D">
          Swap settled. AEGIS402 is reviewing the tx receipt to decide RELEASE vs BLOCK_AND_CLAIM on the escrow.
        </NarrativeBox>
      </ModalShell>
    )
  }
  // escrow
  return (
    <ModalShell
      accent="#FFE600"
      title="AEGIS402 · ESCROW SETTLE"
      subtitle={`scenario ${state.subject.scenarioLabel}`}
    >
      <EscrowSubjectCard subject={state.subject} />
      <StagesCard stages={ESCROW_STAGES} stage={state.stage} elapsedSec={state.elapsedSec} cached={state.cached} />
      <NarrativeBox color="#FFE600">
        AEGIS402 is settling a protected swap end-to-end on Sepolia: trader mint, protected swap, post-audit, then the auditor signs RELEASE or BLOCK_AND_CLAIM.
      </NarrativeBox>
    </ModalShell>
  )
}

function DoneView({ state }: { state: Extract<AuditModalState, { phase: 'done' }> }) {
  if (state.mode === 'pre') {
    const tone = preVerdictTone(state.result.verdict)
    return (
      <ModalShell
        accent={tone.color}
        title={`AEGIS402 · ${tone.titleSuffix}`}
        subtitle={`pre-audit complete · ${state.elapsedSec}s`}
      >
        <PreSubjectCard target={state.target} dim />
        <PreVerdictCard result={state.result} />
        <NarrativeBox color={tone.color}>{tone.narrative}</NarrativeBox>
        <ActionsRow
          ctaLabel="→ REPORT"
          ctaColor={tone.color}
          onCta={() => null}
          preResult={state.result}
        />
      </ModalShell>
    )
  }
  if (state.mode === 'post') {
    const tone = postSeverityTone(state.result.overall_severity)
    return (
      <ModalShell
        accent={tone.color}
        title={`AEGIS402 · ${tone.titleSuffix}`}
        subtitle={`post-audit complete · ${state.elapsedSec}s`}
      >
        <PostSubjectCard subject={state.subject} dim />
        <PostVerdictCard audit={state.result} />
        <NarrativeBox color={tone.color}>{tone.narrative}</NarrativeBox>
        <ActionsRow
          ctaLabel="→ REPORT"
          ctaColor={tone.color}
          onCta={() => null}
          postSubject={state.subject}
          postResult={state.result}
        />
      </ModalShell>
    )
  }
  // escrow
  const tone = escrowTone(state.entry.chosenAction)
  return (
    <ModalShell
      accent={tone.color}
      title={`AEGIS402 · ${tone.titleSuffix}`}
      subtitle={`escrow settled · ${state.elapsedSec}s`}
    >
      <EscrowSubjectCard subject={state.subject} dim />
      <EscrowVerdictCard entry={state.entry} />
      <NarrativeBox color={tone.color}>{tone.narrative(state.entry)}</NarrativeBox>
      <ActionsRow
        ctaLabel="→ ESCROW DETAIL"
        ctaColor={tone.color}
        onCta={() => null}
        escrowEntryId={state.entry.id}
      />
    </ModalShell>
  )
}

function ErrorView({ state }: { state: Extract<AuditModalState, { phase: 'error' }> }) {
  const subtitle = state.mode === 'pre'
    ? `pre-audit failed · ${state.elapsedSec}s`
    : state.mode === 'post'
    ? `post-audit failed · ${state.elapsedSec}s`
    : `escrow scenario failed · ${state.elapsedSec}s`
  return (
    <ModalShell
      accent="#FFE600"
      title="AEGIS402 · ERROR"
      subtitle={subtitle}
    >
      {state.mode === 'pre' && <PreSubjectCard target={state.target} dim />}
      {state.mode === 'post' && <PostSubjectCard subject={state.subject} dim />}
      {state.mode === 'escrow' && <EscrowSubjectCard subject={state.subject} dim />}
      <div style={{
        background: '#13102E', border: '1px solid #FFE600',
        borderLeft: '3px solid #FFE600',
        borderRadius: 6, padding: '10px 12px',
        fontSize: 11, color: '#FFE600', lineHeight: 1.6,
      }}>
        {state.message}
      </div>
      <NarrativeBox color="#FFE600">
        Agent halted by default — better to refuse than to act blind.
      </NarrativeBox>
    </ModalShell>
  )
}

function PreSubjectCard({ target, dim = false }: { target: DemoTarget; dim?: boolean }) {
  return (
    <Card label="X402 PAYMENT REQUEST" dim={dim}>
      <Row k="resource" v="/v1/x402/info" />
      <Row k="pay to"   v={short(target.address)} mono />
      <Row k="amount"   v="0.001 USDC" highlight />
      <Row k="network"  v="Sepolia · 11155111" />
    </Card>
  )
}

function PostSubjectCard({ subject, dim = false }: { subject: PostAuditSubject; dim?: boolean }) {
  return (
    <Card label="POST-SETTLEMENT TX" dim={dim}>
      <Row k="scenario" v={subject.scenarioLabel} highlight />
      <Row k="tx hash"  v={short(subject.txHash)} mono />
      <Row k="subject"  v={short(subject.subjectAddress)} mono />
      <Row k="network"  v="Sepolia · 11155111" />
    </Card>
  )
}

function EscrowSubjectCard({ subject, dim = false }: { subject: EscrowSubject; dim?: boolean }) {
  return (
    <Card label="INSURED ESCROW SCENARIO" dim={dim}>
      <Row k="scenario"  v={subject.scenarioLabel} highlight />
      <Row k="vault"     v={short(subject.vault)} mono />
      <Row k="insurance" v={short(subject.insurancePool)} mono />
      <Row k="network"   v="Sepolia · 11155111" />
    </Card>
  )
}

function StagesCard({
  stages, stage, elapsedSec, cached,
}: {
  stages: { key: AuditStage; label: string; sub: string }[]
  stage: AuditStage
  elapsedSec: number
  cached: boolean
}) {
  const reachedIndex = stages.findIndex(s => s.key === stage)
  return (
    <Card label="AEGIS402 PIPELINE">
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {stages.map((s, i) => {
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

function PreVerdictCard({ result }: { result: PreflightResponse }) {
  const tone = preVerdictTone(result.verdict)
  const audit = result.audit
  return (
    <Card label="VERDICT" accent={tone.color}>
      <ScoreHeadline score={audit?.overall_risk_score ?? null} headline={tone.headline}
                     severity={audit?.overall_severity ?? '—'} reason={result.reason} color={tone.color} />
      {audit && audit.vulnerabilities.length > 0 && (
        <SeverityChips severities={audit.vulnerabilities.map(v => v.severity)} />
      )}
    </Card>
  )
}

function PostVerdictCard({ audit }: { audit: PostAuditReport }) {
  const tone = postSeverityTone(audit.overall_severity)
  return (
    <Card label="VERDICT" accent={tone.color}>
      <ScoreHeadline score={audit.overall_risk_score} headline={tone.headline}
                     severity={audit.overall_severity} reason={tone.short} color={tone.color} />
      {audit.vulnerabilities.length > 0 && (
        <SeverityChips severities={audit.vulnerabilities.map(v => v.severity)} />
      )}
      <div style={{
        marginTop: 8, padding: '8px 10px',
        background: '#0A0818', border: '1px solid #2D1F5E', borderRadius: 6,
        fontSize: 9.5, color: '#9B8EC4', lineHeight: 1.5,
      }}>
        <span style={{ color: '#5A4A8A', fontFamily: "'Press Start 2P', monospace", fontSize: 6, letterSpacing: '0.14em' }}>
          POLICY{' '}
        </span>
        severity <span style={{ color: tone.color }}>{audit.overall_severity}</span>
        {' → '}
        <span style={{ color: tone.color, fontWeight: 700 }}>{tone.action}</span>
      </div>
    </Card>
  )
}

function EscrowVerdictCard({ entry }: { entry: EscrowHistoryEntry }) {
  const tone = escrowTone(entry.chosenAction)
  const audit = entry.audit
  return (
    <Card label="VERDICT" accent={tone.color}>
      <ScoreHeadline
        score={audit.overall_risk_score}
        headline={tone.headline}
        severity={audit.overall_severity}
        reason={tone.short(entry)}
        color={tone.color}
      />
      {audit.vulnerabilities.length > 0 && (
        <SeverityChips severities={audit.vulnerabilities.map(v => v.severity)} />
      )}
      <div style={{
        marginTop: 8, padding: '8px 10px',
        background: '#0A0818', border: '1px solid #2D1F5E', borderRadius: 6,
        fontSize: 9.5, color: '#9B8EC4', lineHeight: 1.5,
      }}>
        <span style={{ color: '#5A4A8A', fontFamily: "'Press Start 2P', monospace", fontSize: 6, letterSpacing: '0.14em' }}>
          ACTION{' '}
        </span>
        <span style={{ color: tone.color, fontWeight: 700 }}>{entry.chosenAction}</span>
        {' · finalState '}
        <span style={{ color: tone.color }}>{entry.finalEscrowState}</span>
      </div>
    </Card>
  )
}

function ScoreHeadline({
  score, headline, severity, reason, color,
}: {
  score: number | null
  headline: string
  severity: string
  reason: string
  color: string
}) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
      <div style={{
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', minWidth: 44,
      }}>
        <span style={{ fontFamily: "'Press Start 2P', monospace", fontSize: 6, color: '#5A4A8A', letterSpacing: '0.16em' }}>
          RISK
        </span>
        <span style={{ fontFamily: "'Press Start 2P', monospace", fontSize: 18, color, lineHeight: 1.2 }}>
          {score ?? '—'}
        </span>
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontFamily: "'Press Start 2P', monospace", fontSize: 9, color, letterSpacing: '0.06em' }}>
          {headline}
        </div>
        <div style={{ fontSize: 9, color: '#5A4A8A', marginTop: 3 }}>
          {String(severity).toUpperCase()} · {reason}
        </div>
      </div>
    </div>
  )
}

function SeverityChips({ severities }: { severities: Severity[] }) {
  const counts = countBySeverity(severities)
  return (
    <div style={{ display: 'flex', gap: 5, flexWrap: 'wrap', marginTop: 4 }}>
      {counts.map(c => (
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
  )
}

interface ActionsRowProps {
  ctaLabel: string
  ctaColor: string
  onCta: () => void
  preResult?: PreflightResponse
  postSubject?: { txHash: string; scenarioLabel: string; subjectAddress: string }
  postResult?: PostAuditReport
  escrowEntryId?: string
}

function ActionsRow({ ctaLabel, ctaColor, preResult, postSubject, postResult, escrowEntryId }: ActionsRowProps) {
  const navigate = useNavigate()
  const { hide } = useAuditModal()

  const goReport = () => {
    if (preResult) navigate('/audit/pre', { state: { audit: preResult } })
    else if (postResult) navigate('/audit/post', {
      state: { audit: postResult, txHash: postSubject?.txHash, subject: postSubject?.subjectAddress },
    })
    else if (escrowEntryId) navigate('/escrow', { state: { entryId: escrowEntryId } })
  }

  return (
    <div style={{ display: 'flex', gap: 6, marginTop: 4 }}>
      <button
        onClick={goReport}
        style={{
          flex: 1, height: 36, cursor: 'pointer',
          background: `${ctaColor}1f`, border: `1.5px solid ${ctaColor}`,
          color: ctaColor, borderRadius: 6,
          fontFamily: "'Press Start 2P', monospace", fontSize: 7,
          letterSpacing: '0.08em',
        }}
      >
        {ctaLabel}
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

function preVerdictTone(verdict: PreflightResponse['verdict']) {
  if (verdict === 'safe')    return { color: '#A8FF3E', titleSuffix: 'ALLOW',  headline: '✓ AGENT SIGNED',   narrative: 'No medium-or-higher risks detected. Agent will sign the x402 payment and proceed.' }
  if (verdict === 'warning') return { color: '#FFE600', titleSuffix: 'REVIEW', headline: '⚠ MANUAL REVIEW',  narrative: 'Source unverified or analyzer skipped. Agent paused for explicit human confirmation.' }
  return                     { color: '#FF4444', titleSuffix: 'BLOCK',  headline: '✕ PAYMENT HALTED', narrative: 'AEGIS402 detected medium-or-higher findings. Agent did NOT sign — payment is halted.' }
}

function postSeverityTone(sev: PostAuditReport['overall_severity']) {
  if (sev === 'high' || sev === 'critical') {
    return {
      color: '#FF4444', titleSuffix: 'BLOCK_AND_CLAIM',
      headline: '✕ ESCROW BLOCKED', short: 'high-risk settlement',
      action: 'BLOCK_AND_CLAIM',
      narrative: 'Output materially below expected. Escrow blocks settlement; insurance pool refunds the user input principal.',
    }
  }
  if (sev === 'medium') {
    return {
      color: '#FFE600', titleSuffix: 'REVIEW',
      headline: '⚠ MANUAL REVIEW',  short: 'mild slippage',
      action: 'RELEASE (with warning)',
      narrative: 'Mild signal — auto-release with warning. Production should require human review before settling.',
    }
  }
  return {
    color: '#A8FF3E', titleSuffix: 'RELEASE',
    headline: '✓ ESCROW RELEASED', short: 'clean settlement',
    action: 'RELEASE',
    narrative: 'Clean execution. Escrow releases the swap output to the user as expected.',
  }
}

function escrowTone(action: 'RELEASE' | 'BLOCK_AND_CLAIM') {
  if (action === 'BLOCK_AND_CLAIM') {
    return {
      color: '#FF4444',
      titleSuffix: 'BLOCK_AND_CLAIM',
      headline: '✕ ESCROW BLOCKED',
      short: (e: EscrowHistoryEntry) => `expected ${e.expectedOutput} → ${parseFloat(e.pendingOutputAegis).toFixed(2)} AEGIS`,
      narrative: (e: EscrowHistoryEntry) => e.explainer ?? `Audit detected a ${shortfallText(e)} shortfall. Vault recovered the bad output and InsurancePool refunded the user's ${e.amountIn} USDT principal.`,
    }
  }
  return {
    color: '#A8FF3E',
    titleSuffix: 'RELEASE',
    headline: '✓ ESCROW RELEASED',
    short: (e: EscrowHistoryEntry) => `released ${parseFloat(e.pendingOutputAegis).toFixed(2)} AEGIS to user`,
    narrative: (e: EscrowHistoryEntry) => e.explainer ?? `Clean settlement. Vault released ${parseFloat(e.pendingOutputAegis).toFixed(2)} AEGIS to the user's settlement recipient.`,
  }
}

function shortfallText(e: EscrowHistoryEntry): string {
  const exp = parseFloat(e.expectedOutput)
  const act = parseFloat(e.pendingOutputAegis)
  if (!isFinite(exp) || exp === 0) return 'large'
  return `${(((exp - act) / exp) * 100).toFixed(1)}%`
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
