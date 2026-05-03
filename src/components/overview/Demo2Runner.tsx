import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  POST_AUDIT_TARGETS, PostAuditTarget,
  POST_AUDIT_CHAIN_ID, SEPOLIA_EXPLORER,
} from '../../constants/data'
import { auditTx } from '../../api/postaudit'
import { PostAuditReport, Severity } from '../../types/postaudit'
import { MonitorCard, MonitorCardConfig, LogLine } from './MonitorCard'
import { useAuditModal } from '../../state/auditModal'
import { useAuditHistory } from '../../state/auditHistory'
import { useWallet } from '../../state/wallet'
import { ESCROW_FIXTURES } from '../../data/escrow-fixtures'

type Phase = 'idle' | 'running' | 'done' | 'error'

const tsNow = () => new Date().toTimeString().slice(0, 8)
const short = (s: string) => `${s.slice(0, 6)}…${s.slice(-4)}`

const responseCache = new Map<string, PostAuditReport>()
const cacheKey = (target: PostAuditTarget) => `live:${target.txHash}`

export function Demo2Runner() {
  const [target, setTarget] = useState<PostAuditTarget>(POST_AUDIT_TARGETS[1])  // sandwich first by default
  const [phase, setPhase] = useState<Phase>('idle')
  const [logs, setLogs] = useState<LogLine[]>([])
  const [result, setResult] = useState<PostAuditReport | null>(null)
  const [, setError] = useState<string | null>(null)
  const [elapsedSec, setElapsedSec] = useState(0)

  const abortRef = useRef<AbortController | null>(null)
  const timersRef = useRef<number[]>([])
  const intervalsRef = useRef<number[]>([])

  const modal = useAuditModal()
  const modalRef = useRef(modal)
  modalRef.current = modal

  const history = useAuditHistory()
  const wallet = useWallet()

  const clearAllTimers = () => {
    timersRef.current.forEach(clearTimeout)
    timersRef.current = []
    intervalsRef.current.forEach(clearInterval)
    intervalsRef.current = []
  }

  useEffect(() => () => {
    abortRef.current?.abort()
    clearAllTimers()
    modalRef.current.hide()
  }, [])

  const appendLog = (line: LogLine) => setLogs(prev => [...prev, line])

  const reset = () => {
    abortRef.current?.abort()
    clearAllTimers()
    setLogs([])
    setResult(null)
    setError(null)
    setElapsedSec(0)
    setPhase('idle')
    modal.hide()
  }

  const scheduleLog = (delayMs: number, line: LogLine) => {
    const id = window.setTimeout(() => appendLog(line), delayMs)
    timersRef.current.push(id)
  }

  const subjectMeta = (t: PostAuditTarget) => ({
    txHash: t.txHash,
    scenarioLabel: t.label,
    subjectAddress: '',  // tx.from (resolved server-side via /audit/from-tx)
  })

  const run = async () => {
    reset()
    setPhase('running')

    const startedAt = performance.now()
    const elapsed = () => Math.round((performance.now() - startedAt) / 1000)

    const cached = responseCache.get(cacheKey(target))

    modal.show({
      phase: 'running', mode: 'post',
      subject: subjectMeta(target),
      stage: 'tx', elapsedSec: 0, cached: !!cached,
    })

    appendLog({ ts: tsNow(), text: `▶ Post-audit triggered — target ${target.label}`, color: '#F2E7FF' })
    appendLog({ ts: '',      text: `   POST /api/postaudit/audit/from-tx  { tx_hash: ${short(target.txHash)} }`, color: '#5A4A8A' })
    if (cached) {
      appendLog({ ts: '', text: '   cached response — replaying instantly', color: '#7F77DD' })
    }

    scheduleLog(700,  { ts: tsNow(), text: '→ eth_getTransactionByHash + receipt + block (Sepolia)', color: '#FF8A4D' })
    scheduleLog(1500, { ts: tsNow(), text: '→ decode logs (Transfer / Approval / ProtectedSwapEscrowed)', color: '#FF8A4D' })
    scheduleLog(2400, { ts: tsNow(), text: '→ analyzer call — gpt-oss-120b · risk-v1', color: '#FF8A4D' })

    timersRef.current.push(window.setTimeout(() => modal.setStage('rpc'),    700))
    timersRef.current.push(window.setTimeout(() => modal.setStage('decode'), 1500))
    timersRef.current.push(window.setTimeout(() => modal.setStage('llm'),    2400))

    const tickId = window.setInterval(() => {
      const sec = elapsed()
      setElapsedSec(sec)
      modal.setElapsed(sec)
    }, 1000)
    intervalsRef.current.push(tickId)

    if (!cached) {
      const heartbeatId = window.setInterval(() => {
        const e = elapsed()
        if (e >= 3) {
          appendLog({ ts: tsNow(), text: `   …still analyzing (${e}s elapsed)`, color: '#5A4A8A' })
        }
      }, 15000)
      intervalsRef.current.push(heartbeatId)
    }

    const controller = new AbortController()
    abortRef.current = controller

    try {
      const res = cached
        ? await replayCached(cached)
        : await auditTx(target.txHash, { signal: controller.signal })

      if (controller.signal.aborted) return
      clearAllTimers()
      const finalElapsed = elapsed()
      setElapsedSec(finalElapsed)

      responseCache.set(cacheKey(target), res)
      setResult(res)
      setPhase('done')
      modal.finishPost(subjectMeta(target), res, finalElapsed)
      history.push({
        kind: 'post',
        txHash: target.txHash,
        subjectAddress: '',
        scenarioLabel: target.label,
        result: res,
        elapsedSec: finalElapsed,
        cached: !!cached,
        source: 'live',
      })
      // Reflect the swap that already settled on-chain in the wallet panel.
      const fixture = ESCROW_FIXTURES[target.id]
      const inputCharge = parseFloat(fixture.amountIn) * (1 + parseFloat(fixture.protectionFeePct) / 100)
      wallet.deduct('USDT', inputCharge)
      appendLog({ ts: tsNow(), text: `   ← response received in ${finalElapsed}s · wallet -${inputCharge.toFixed(2)} USDT (swap input + fee)`, color: '#5A4A8A' })
      appendVerdictLogs(res, appendLog)
    } catch (err) {
      if (controller.signal.aborted) return
      clearAllTimers()
      const finalElapsed = elapsed()
      setElapsedSec(finalElapsed)
      const message = err instanceof Error ? err.message : 'unknown error'
      setError(message)
      setPhase('error')
      modal.failPost(subjectMeta(target), message, finalElapsed)
      history.push({
        kind: 'post',
        txHash: target.txHash,
        subjectAddress: '',
        scenarioLabel: target.label,
        result: null,
        error: message,
        elapsedSec: finalElapsed,
        cached: !!cached,
        source: 'live',
      })
      appendLog({ ts: tsNow(), text: `✕ post-audit call failed — ${message}`, color: '#FF4444' })
    }
  }

  const cfg = buildMonitorConfig({ target, phase, logs, result, elapsedSec })

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <ControlBar
        target={target}
        onTargetChange={setTarget}
        onRun={run}
        phase={phase}
        elapsedSec={elapsedSec}
      />
      <MonitorCard override={cfg} />
      {phase === 'done' && result && <ResultPanel result={result} target={target} />}
    </div>
  )
}

interface ControlBarProps {
  target: PostAuditTarget
  onTargetChange: (t: PostAuditTarget) => void
  onRun: () => void
  phase: Phase
  elapsedSec: number
}

function ControlBar({
  target, onTargetChange, onRun, phase, elapsedSec,
}: ControlBarProps) {
  const running = phase === 'running'
  const done = phase === 'done'

  return (
    <div style={{
      background: '#0E0B22', border: '1px solid #2D1F5E',
      borderRadius: 10, padding: 14,
      display: 'flex', flexDirection: 'column', gap: 12,
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <span style={{
          fontFamily: "'Press Start 2P', monospace", fontSize: 8,
          color: '#FF8A4D', letterSpacing: '0.12em',
        }}>
          DEMO 2 · POST-TX AUDIT
        </span>
        <span style={{ fontSize: 10, color: '#5A4A8A' }}>
          Pick a settled tx, run the audit, jump to the full report.
        </span>
        <span style={{ flex: 1 }} />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
        {POST_AUDIT_TARGETS.map(t => (
          <TargetCard
            key={t.id}
            target={t}
            selected={target.id === t.id}
            disabled={running}
            onSelect={() => onTargetChange(t)}
          />
        ))}
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <button
          onClick={onRun}
          disabled={running}
          style={{
            flex: 1, height: 44, cursor: running ? 'not-allowed' : 'pointer',
            background: running ? 'rgba(55,138,221,0.12)' : 'rgba(255,138,77,0.18)',
            border: `2px solid ${running ? '#378ADD' : '#FF8A4D'}`,
            color: running ? '#378ADD' : '#FF8A4D',
            borderRadius: 6,
            fontFamily: "'Press Start 2P', monospace",
            fontSize: 10, letterSpacing: '0.08em',
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12,
          }}
        >
          {running ? (
            <>● RUNNING… <span style={{ fontSize: 9, color: '#9B8EC4' }}>{elapsedSec}s</span></>
          ) : done ? (
            '▶ RUN AGAIN'
          ) : (
            '▶ RUN POST-AUDIT'
          )}
        </button>
      </div>
    </div>
  )
}

function TargetCard({
  target, selected, disabled, onSelect,
}: {
  target: PostAuditTarget
  selected: boolean
  disabled: boolean
  onSelect: () => void
}) {
  const expectedColor = target.expectedSeverity === 'info' ? '#A8FF3E' : '#FF4444'
  const expectedLabel = target.expectedSeverity === 'info' ? '✓ EXPECT INFO' : `✕ EXPECT ${target.expectedSeverity.toUpperCase()}`
  const txUrl = `${SEPOLIA_EXPLORER}/tx/${target.txHash}`
  return (
    <div
      onClick={disabled ? undefined : onSelect}
      style={{
        position: 'relative',
        cursor: disabled ? 'not-allowed' : 'pointer',
        background: selected ? `${target.color}10` : '#13102E',
        border: `1.5px solid ${selected ? target.color : '#2D1F5E'}`,
        borderRadius: 8, padding: 12,
        display: 'flex', flexDirection: 'column', gap: 8,
        opacity: disabled && !selected ? 0.6 : 1,
        transition: 'all 0.15s',
      }}
    >
      {selected && (
        <div style={{
          position: 'absolute', top: -1, left: -1, right: -1,
          height: 3, background: target.color, borderRadius: '8px 8px 0 0',
        }} />
      )}
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <span style={{
          fontFamily: "'Press Start 2P', monospace", fontSize: 9,
          color: selected ? target.color : '#F2E7FF', letterSpacing: '0.04em',
          flex: 1,
        }}>
          {target.label}
        </span>
        <span style={{
          fontFamily: "'Press Start 2P', monospace", fontSize: 6,
          letterSpacing: '0.1em',
          padding: '3px 7px', borderRadius: 3,
          color: expectedColor,
          border: `1px solid ${expectedColor}`,
          background: `${expectedColor}14`,
        }}>
          {expectedLabel}
        </span>
      </div>
      <div style={{
        fontFamily: "'IBM Plex Mono', monospace",
        fontSize: 11, color: '#9B8EC4', wordBreak: 'break-all',
      }}>
        {target.txHash.slice(0, 22)}…{target.txHash.slice(-10)}
      </div>
      <div style={{
        fontSize: 10, color: '#5A4A8A', lineHeight: 1.5,
      }}>
        {target.description}
      </div>
      <div onClick={(e) => e.stopPropagation()}>
        <a
          href={txUrl} target="_blank" rel="noreferrer"
          style={{
            fontSize: 9, color: '#7F77DD', textDecoration: 'none',
            padding: '3px 8px', borderRadius: 3,
            border: '1px solid #2D1F5E',
            display: 'inline-block',
          }}
        >
          ↗ etherscan
        </a>
      </div>
    </div>
  )
}

function ResultPanel({ result, target }: { result: PostAuditReport; target: PostAuditTarget }) {
  const navigate = useNavigate()
  const tone = severityTone(result.overall_severity)
  return (
    <div style={{
      background: '#0E0B22',
      border: `1px solid ${tone.color}`,
      borderLeft: `4px solid ${tone.color}`,
      borderRadius: 10, padding: 16,
      display: 'flex', alignItems: 'stretch', gap: 16,
      animation: 'resultIn 320ms ease-out',
    }}>
      <style>{`
        @keyframes resultIn {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <div style={{
        width: 120, flexShrink: 0,
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        background: '#13102E',
        border: `1px solid ${tone.color}`,
        borderRadius: 8, padding: 10,
      }}>
        <div style={{
          fontFamily: "'Press Start 2P', monospace", fontSize: 6,
          color: '#5A4A8A', letterSpacing: '0.16em', marginBottom: 4,
        }}>
          RISK
        </div>
        <div style={{ fontFamily: "'Press Start 2P', monospace", fontSize: 28, color: tone.color, lineHeight: 1 }}>
          {result.overall_risk_score}
        </div>
        <div style={{ fontSize: 9, color: '#5A4A8A', marginTop: 6 }}>/ 100</div>
        <div style={{
          marginTop: 8, padding: '3px 8px',
          fontFamily: "'Press Start 2P', monospace", fontSize: 7,
          color: tone.color, letterSpacing: '0.08em',
          border: `1px solid ${tone.color}`, borderRadius: 3,
        }}>
          {result.overall_severity.toUpperCase()}
        </div>
      </div>

      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 8 }}>
        <div style={{
          fontFamily: "'Press Start 2P', monospace", fontSize: 11,
          color: tone.color, letterSpacing: '0.06em',
        }}>
          {tone.headline}
        </div>
        <div style={{ fontSize: 11, color: '#9B8EC4', lineHeight: 1.6 }}>
          {result.overall_summary}
        </div>
        {result.vulnerabilities.length > 0 && (
          <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginTop: 4 }}>
            {countBySeverity(result.vulnerabilities.map(v => v.severity)).map(c => (
              <span key={c.sev} style={{
                fontSize: 9, padding: '3px 8px',
                fontFamily: "'Press Start 2P', monospace", letterSpacing: '0.06em',
                borderRadius: 3,
                color: severityColor(c.sev),
                border: `1px solid ${severityColor(c.sev)}`,
                background: `${severityColor(c.sev)}14`,
              }}>
                {c.count} {c.sev.toUpperCase()}
              </span>
            ))}
          </div>
        )}
      </div>

      <div style={{ display: 'flex', alignItems: 'center' }}>
        <button
          onClick={() => navigate('/audit/post', {
            state: { audit: result, txHash: target.txHash, chainId: POST_AUDIT_CHAIN_ID },
          })}
          style={{
            background: `${tone.color}1f`,
            border: `2px solid ${tone.color}`,
            color: tone.color,
            borderRadius: 6, padding: '14px 18px',
            cursor: 'pointer',
            fontFamily: "'Press Start 2P', monospace",
            fontSize: 9, letterSpacing: '0.08em',
            whiteSpace: 'nowrap',
          }}
        >
          → View Report
        </button>
      </div>
    </div>
  )
}

interface BuildArgs {
  target: PostAuditTarget
  phase: Phase
  logs: LogLine[]
  result: PostAuditReport | null
  elapsedSec: number
}

function buildMonitorConfig({ target, phase, logs, result, elapsedSec }: BuildArgs): MonitorCardConfig {
  const amount = phase === 'running'
    ? `elapsed ${elapsedSec}s`
    : phase === 'done' && elapsedSec > 0
      ? `done in ${elapsedSec}s`
      : `Sepolia · chain ${POST_AUDIT_CHAIN_ID}`

  const agent = {
    label: 'POST-AUDIT AGENT',
    target: `${target.label} · ${short(target.txHash)}`,
    amount,
    accentColor: phase === 'done' && result
      ? severityToAccent(result.overall_severity)
      : phase === 'error' ? '#FF4444' : '#FF8A4D',
  }

  if (phase === 'idle') {
    return {
      status: 'CACHE', statusLabel: '○ IDLE',
      nodes: ['done', 'wait', 'wait', 'wait'],
      connectors: ['gray', 'gray', 'gray'],
      logs: [
        { ts: '—', text: 'Pick a settled tx above and press RUN POST-AUDIT.', color: '#5A4A8A' },
      ],
      agent,
    }
  }

  if (phase === 'running') {
    return {
      status: 'PROCESSING', statusLabel: '● AUDITING',
      nodes: ['done', 'done', 'done', 'active'],
      connectors: ['green', 'green', 'blue'],
      logs,
      agent,
    }
  }

  if (phase === 'error') {
    return {
      status: 'WARN', statusLabel: '⚠ ERROR',
      nodes: ['done', 'done', 'done', 'warn'],
      connectors: ['green', 'green', 'gray'],
      logs,
      agent,
    }
  }

  if (!result) {
    return {
      status: 'WARN', statusLabel: '⚠ NO RESULT',
      nodes: ['done', 'done', 'done', 'warn'],
      connectors: ['green', 'green', 'gray'],
      logs,
      agent,
    }
  }

  const sev = result.overall_severity
  if (sev === 'high' || sev === 'critical') {
    return {
      status: 'BLOCK', statusLabel: '✕ HIGH RISK',
      nodes: ['done', 'done', 'done', 'block'],
      connectors: ['green', 'green', 'red'],
      logs,
      link: { text: '→ View Post-Audit Report', to: '/audit/post', state: { audit: result, txHash: target.txHash } },
      agent,
    }
  }
  if (sev === 'medium') {
    return {
      status: 'WARN', statusLabel: '⚠ REVIEW',
      nodes: ['done', 'done', 'done', 'warn'],
      connectors: ['green', 'green', 'gray'],
      logs,
      link: { text: '→ View Post-Audit Report', to: '/audit/post', state: { audit: result, txHash: target.txHash } },
      agent,
    }
  }
  return {
    status: 'ALLOW', statusLabel: '✓ CLEAN',
    nodes: ['done', 'done', 'done', 'done'],
    connectors: ['green', 'green', 'green'],
    logs,
    link: { text: '→ View Post-Audit Report', to: '/audit/post', state: { audit: result, txHash: target.txHash } },
    agent,
  }
}

function severityToAccent(sev: Severity): string {
  if (sev === 'high' || sev === 'critical') return '#FF4444'
  if (sev === 'medium') return '#FFE600'
  return '#A8FF3E'
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

function severityTone(sev: Severity) {
  if (sev === 'high' || sev === 'critical') {
    return { color: '#FF4444', headline: '✕ HIGH-RISK SETTLEMENT' }
  }
  if (sev === 'medium') {
    return { color: '#FFE600', headline: '⚠ MANUAL REVIEW' }
  }
  return { color: '#A8FF3E', headline: '✓ CLEAN SETTLEMENT' }
}

function countBySeverity(severities: Severity[]) {
  const order: Severity[] = ['critical', 'high', 'medium', 'low', 'info']
  return order
    .map(sev => ({ sev, count: severities.filter(s => s === sev).length }))
    .filter(c => c.count > 0)
}

function appendVerdictLogs(res: PostAuditReport, append: (l: LogLine) => void) {
  const ts = tsNow()
  const sev = res.overall_severity
  const color = severityToAccent(sev)
  if (sev === 'high' || sev === 'critical') {
    append({ ts, text: `✕ severity=${sev} · score ${res.overall_risk_score} — escrow would BLOCK_AND_CLAIM`, color })
    res.vulnerabilities.slice(0, 3).forEach(v => {
      append({ ts: '', text: `   • ${v.id} ${v.title} — ${v.severity}`, color })
    })
    return
  }
  if (sev === 'medium') {
    append({ ts, text: `⚠ severity=medium · score ${res.overall_risk_score} — manual review`, color })
    return
  }
  append({ ts, text: `✓ severity=${sev} · score ${res.overall_risk_score} — escrow would RELEASE`, color })
}

async function replayCached(res: PostAuditReport): Promise<PostAuditReport> {
  await new Promise<void>(resolve => setTimeout(resolve, 2800))
  return res
}
