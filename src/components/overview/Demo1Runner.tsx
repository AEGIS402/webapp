import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { PRE_AUDIT_TARGETS, DemoTarget, PRE_AUDIT_CHAIN_ID } from '../../constants/data'
import { preflight } from '../../api/preaudit'
import { PreflightResponse, Severity } from '../../types/preaudit'
import { MonitorCard, MonitorCardConfig, LogLine } from './MonitorCard'
import { useAuditModal } from '../../state/auditModal'
import { useAuditHistory } from '../../state/auditHistory'
import { useWallet } from '../../state/wallet'

const X402_PAYMENT_USDC = 0.001

type Phase = 'idle' | 'running' | 'done' | 'error'

const tsNow = () => new Date().toTimeString().slice(0, 8)
const short = (addr: string) => `${addr.slice(0, 6)}…${addr.slice(-4)}`

const responseCache = new Map<string, PreflightResponse>()
const cacheKey = (target: DemoTarget) => `live:${target.address}`

export function Demo1Runner() {
  const [target, setTarget] = useState<DemoTarget>(PRE_AUDIT_TARGETS[1])
  const [phase, setPhase] = useState<Phase>('idle')
  const [logs, setLogs] = useState<LogLine[]>([])
  const [result, setResult] = useState<PreflightResponse | null>(null)
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

  const run = async () => {
    reset()
    setPhase('running')

    const startedAt = performance.now()
    const elapsed = () => Math.round((performance.now() - startedAt) / 1000)

    const cached = responseCache.get(cacheKey(target))

    modal.show({ phase: 'running', mode: 'pre', target, stage: 'intercept', elapsedSec: 0, cached: !!cached })

    appendLog({ ts: tsNow(), text: `▶ Pre-audit triggered — target ${target.label} ${short(target.address)}`, color: '#F2E7FF' })
    appendLog({ ts: '',      text: `   POST /api/preaudit/v1/tx/preflight  { to, chainId: ${PRE_AUDIT_CHAIN_ID} }`, color: '#5A4A8A' })

    if (cached) {
      appendLog({ ts: '', text: '   cached response — replaying instantly', color: '#7F77DD' })
    }

    scheduleLog(700,  { ts: tsNow(), text: '→ eth_getCode on Sepolia — checking address type', color: '#378ADD' })
    scheduleLog(1500, { ts: tsNow(), text: '→ etherscan getsourcecode — fetching verified source', color: '#378ADD' })
    scheduleLog(2400, { ts: tsNow(), text: '→ analyzer call — gpt-oss-120b · risk-v1', color: '#378ADD' })

    timersRef.current.push(window.setTimeout(() => modal.setStage('rpc'),    700))
    timersRef.current.push(window.setTimeout(() => modal.setStage('source'), 1500))
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
        : await preflight(target.address, { signal: controller.signal, chainId: PRE_AUDIT_CHAIN_ID })

      if (controller.signal.aborted) return
      clearAllTimers()
      const finalElapsed = elapsed()
      setElapsedSec(finalElapsed)

      responseCache.set(cacheKey(target), res)
      setResult(res)
      setPhase('done')
      modal.finishPre(target, res, finalElapsed)
      history.push({
        kind: 'pre',
        target, result: res, elapsedSec: finalElapsed,
        cached: !!cached, source: 'live',
      })
      // Agent signs the x402 payment when audit allows it.
      if (res.verdict === 'safe') {
        wallet.deduct('USDC', X402_PAYMENT_USDC)
        appendLog({ ts: tsNow(), text: `   ← response received in ${finalElapsed}s · wallet -${X402_PAYMENT_USDC} USDC`, color: '#5A4A8A' })
      } else {
        appendLog({ ts: tsNow(), text: `   ← response received in ${finalElapsed}s · payment not signed`, color: '#5A4A8A' })
      }
      appendVerdictLogs(res, appendLog)
    } catch (err) {
      if (controller.signal.aborted) return
      clearAllTimers()
      const finalElapsed = elapsed()
      setElapsedSec(finalElapsed)
      const message = err instanceof Error ? err.message : 'unknown error'
      setError(message)
      setPhase('error')
      modal.failPre(target, message, finalElapsed)
      history.push({
        kind: 'pre',
        target, result: null, error: message, elapsedSec: finalElapsed,
        cached: !!cached, source: 'live',
      })
      appendLog({ ts: tsNow(), text: `✕ pre-audit call failed — ${message}`, color: '#FF4444' })
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
      {phase === 'done' && result && <ResultPanel result={result} />}
    </div>
  )
}

interface ControlBarProps {
  target: DemoTarget
  onTargetChange: (t: DemoTarget) => void
  onRun: () => void
  phase: Phase
  elapsedSec: number
}

function ControlBar({ target, onTargetChange, onRun, phase, elapsedSec }: ControlBarProps) {
  const running = phase === 'running'
  const done = phase === 'done'

  return (
    <div style={{
      background: '#0E0B22', border: '1px solid #2D1F5E',
      borderRadius: 10, padding: 14,
      display: 'flex', flexDirection: 'column', gap: 12,
    }}>
      {/* Heading row */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <span style={{
          fontFamily: "'Press Start 2P', monospace", fontSize: 8,
          color: '#7F77DD', letterSpacing: '0.12em',
        }}>
          DEMO 1 · X402 PRE-AUDIT
        </span>
        <span style={{ fontSize: 10, color: '#5A4A8A' }}>
          Pick a hook to audit, then run. Result will jump to the full report.
        </span>
        <span style={{ flex: 1 }} />
      </div>

      {/* Target picker */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
        {PRE_AUDIT_TARGETS.map(t => (
          <TargetCard
            key={t.id}
            target={t}
            selected={target.id === t.id}
            disabled={running}
            onSelect={() => onTargetChange(t)}
          />
        ))}
      </div>

      {/* Run / reset */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <button
          onClick={onRun}
          disabled={running}
          style={{
            flex: 1, height: 44, cursor: running ? 'not-allowed' : 'pointer',
            background: running ? 'rgba(55,138,221,0.12)' : 'rgba(46,122,0,0.18)',
            border: `2px solid ${running ? '#378ADD' : '#A8FF3E'}`,
            color: running ? '#378ADD' : '#A8FF3E',
            borderRadius: 6,
            fontFamily: "'Press Start 2P', monospace",
            fontSize: 10, letterSpacing: '0.08em',
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12,
            transition: 'all 0.15s',
          }}
        >
          {running ? (
            <>
              <PulsingDot color="#378ADD" />
              RUNNING…
              <span style={{ fontSize: 9, color: '#9B8EC4' }}>{elapsedSec}s</span>
            </>
          ) : done ? (
            '▶ RUN AGAIN'
          ) : (
            '▶ RUN PRE-AUDIT'
          )}
        </button>
      </div>
    </div>
  )
}

function TargetCard({
  target, selected, disabled, onSelect,
}: {
  target: DemoTarget
  selected: boolean
  disabled: boolean
  onSelect: () => void
}) {
  const expectedVerdictColor = target.expectedVerdict === 'safe' ? '#A8FF3E' : '#FF4444'
  const expectedLabel = target.expectedVerdict === 'safe' ? '✓ EXPECT SAFE' : '✕ EXPECT UNSAFE'
  const etherscanUrl = `https://sepolia.etherscan.io/address/${target.address}`

  return (
    <div
      onClick={disabled ? undefined : onSelect}
      style={{
        position: 'relative',
        cursor: disabled ? 'not-allowed' : 'pointer',
        background: selected ? `${target.color}10` : '#13102E',
        border: `1.5px solid ${selected ? target.color : '#2D1F5E'}`,
        borderRadius: 8,
        padding: 12,
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
          color: expectedVerdictColor,
          border: `1px solid ${expectedVerdictColor}`,
          background: `${expectedVerdictColor}14`,
        }}>
          {expectedLabel}
        </span>
      </div>
      <div style={{
        fontFamily: "'IBM Plex Mono', monospace",
        fontSize: 11, color: '#9B8EC4', wordBreak: 'break-all',
      }}>
        {target.address}
      </div>
      <div style={{
        fontSize: 10, color: '#5A4A8A', lineHeight: 1.5,
      }}>
        {target.description}
      </div>
      <div onClick={(e) => e.stopPropagation()}>
        <a
          href={etherscanUrl}
          target="_blank"
          rel="noreferrer"
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

function PulsingDot({ color }: { color: string }) {
  return (
    <span style={{
      width: 8, height: 8, borderRadius: '50%', background: color,
      display: 'inline-block',
      animation: 'demo1Pulse 1.2s ease-in-out infinite',
    }}>
      <style>{`
        @keyframes demo1Pulse {
          0%,100% { opacity: 1; transform: scale(1); }
          50%      { opacity: 0.5; transform: scale(1.4); }
        }
      `}</style>
    </span>
  )
}

function ResultPanel({ result }: { result: PreflightResponse }) {
  const navigate = useNavigate()
  const tone = result.verdict === 'safe'
    ? { color: '#A8FF3E', label: '✓ SAFE TO PROCEED', cta: '→ View Report' }
    : result.verdict === 'warning'
    ? { color: '#FFE600', label: '⚠ MANUAL REVIEW REQUIRED', cta: '→ View Report' }
    : { color: '#FF4444', label: '✕ PAYMENT HALTED',         cta: '→ View Vulnerabilities' }

  const audit = result.audit
  const score = audit?.overall_risk_score ?? null
  const sev = audit?.overall_severity ?? '—'
  const counts = audit ? severityCounts(audit.vulnerabilities.map(v => v.severity)) : null

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

      {/* Score */}
      <div style={{
        width: 120, flexShrink: 0,
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        background: '#13102E',
        border: `1px solid ${tone.color}`,
        borderRadius: 8,
        padding: 10,
      }}>
        <div style={{
          fontFamily: "'Press Start 2P', monospace", fontSize: 6,
          color: '#5A4A8A', letterSpacing: '0.16em', marginBottom: 4,
        }}>
          RISK
        </div>
        <div style={{ fontFamily: "'Press Start 2P', monospace", fontSize: 28, color: tone.color, lineHeight: 1 }}>
          {score ?? '—'}
        </div>
        <div style={{ fontSize: 9, color: '#5A4A8A', marginTop: 6 }}>/ 100</div>
        <div style={{
          marginTop: 8, padding: '3px 8px',
          fontFamily: "'Press Start 2P', monospace", fontSize: 7,
          color: tone.color, letterSpacing: '0.08em',
          border: `1px solid ${tone.color}`, borderRadius: 3,
        }}>
          {sev.toUpperCase()}
        </div>
      </div>

      {/* Mid */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 8 }}>
        <div style={{
          fontFamily: "'Press Start 2P', monospace", fontSize: 11,
          color: tone.color, letterSpacing: '0.06em',
        }}>
          {tone.label}
        </div>
        <div style={{ fontSize: 11, color: '#9B8EC4', lineHeight: 1.6 }}>
          {result.reason}
        </div>
        {counts && (
          <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginTop: 4 }}>
            {counts.map(c => (
              <span key={c.sev} style={{
                fontSize: 9, padding: '3px 8px',
                fontFamily: "'Press Start 2P', monospace", letterSpacing: '0.06em',
                borderRadius: 3,
                color: c.count > 0 ? severityColor(c.sev) : '#5A4A8A',
                border: `1px solid ${c.count > 0 ? severityColor(c.sev) : '#2D1F5E'}`,
                background: c.count > 0 ? `${severityColor(c.sev)}14` : 'transparent',
              }}>
                {c.count} {c.sev.toUpperCase()}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* CTA */}
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <button
          onClick={() => navigate('/audit/pre', { state: { audit: result } })}
          style={{
            background: `${tone.color}1f`,
            border: `2px solid ${tone.color}`,
            color: tone.color,
            borderRadius: 6,
            padding: '14px 18px',
            cursor: 'pointer',
            fontFamily: "'Press Start 2P', monospace",
            fontSize: 9, letterSpacing: '0.08em',
            whiteSpace: 'nowrap',
          }}
        >
          {tone.cta}
        </button>
      </div>
    </div>
  )
}

interface BuildArgs {
  target: DemoTarget
  phase: Phase
  logs: LogLine[]
  result: PreflightResponse | null
  elapsedSec: number
}

function buildMonitorConfig({ target, phase, logs, result, elapsedSec }: BuildArgs): MonitorCardConfig {
  const amount = phase === 'running'
    ? `elapsed ${elapsedSec}s`
    : phase === 'done' && elapsedSec > 0
      ? `done in ${elapsedSec}s`
      : `Sepolia · chain ${PRE_AUDIT_CHAIN_ID}`

  const agent = {
    label: 'PRE-AUDIT AGENT',
    target: `${target.label} · ${short(target.address)}`,
    amount,
    accentColor: phase === 'done' && result
      ? verdictAccent(result.verdict)
      : phase === 'error' ? '#FF4444' : '#378ADD',
  }

  if (phase === 'idle') {
    return {
      status: 'CACHE', statusLabel: '○ IDLE',
      nodes: ['done', 'wait', 'wait', 'wait'],
      connectors: ['gray', 'gray', 'gray'],
      logs: [
        { ts: '—', text: 'Pick a target hook above and press RUN PRE-AUDIT to call /v1/tx/preflight.', color: '#5A4A8A' },
      ],
      agent,
    }
  }

  if (phase === 'running') {
    return {
      status: 'PROCESSING', statusLabel: '● AUDITING',
      nodes: ['done', 'active', 'wait', 'wait'],
      connectors: ['green', 'blue', 'gray'],
      logs,
      agent,
    }
  }

  if (phase === 'error') {
    return {
      status: 'WARN', statusLabel: '⚠ ERROR',
      nodes: ['done', 'warn', 'wait', 'wait'],
      connectors: ['green', 'gray', 'gray'],
      logs,
      agent,
    }
  }

  if (!result) {
    return {
      status: 'WARN', statusLabel: '⚠ NO RESULT',
      nodes: ['done', 'warn', 'wait', 'wait'],
      connectors: ['green', 'gray', 'gray'],
      logs,
      agent,
    }
  }

  if (result.verdict === 'safe') {
    return {
      status: 'ALLOW', statusLabel: '✓ SAFE',
      nodes: ['done', 'done', 'wait', 'wait'],
      connectors: ['green', 'green', 'gray'],
      logs,
      link: { text: '→ View Pre-Audit Report', to: '/audit/pre', state: { audit: result } },
      agent,
    }
  }

  if (result.verdict === 'warning') {
    return {
      status: 'WARN', statusLabel: '⚠ WARNING',
      nodes: ['done', 'warn', 'wait', 'wait'],
      connectors: ['green', 'gray', 'gray'],
      logs,
      link: { text: '→ View Pre-Audit Report', to: '/audit/pre', state: { audit: result } },
      agent,
    }
  }

  return {
    status: 'BLOCK', statusLabel: '✕ UNSAFE',
    nodes: ['done', 'block', 'wait', 'wait'],
    connectors: ['green', 'red', 'gray'],
    logs,
    link: { text: '→ View Pre-Audit Report', to: '/audit/pre', state: { audit: result } },
    agent,
  }
}

function verdictAccent(verdict: 'safe' | 'warning' | 'unsafe') {
  if (verdict === 'safe') return '#A8FF3E'
  if (verdict === 'warning') return '#FFE600'
  return '#FF4444'
}

function appendVerdictLogs(res: PreflightResponse, append: (l: LogLine) => void) {
  const ts = tsNow()
  const audit = res.audit

  if (res.verdict === 'safe') {
    append({ ts, text: `✓ verdict: safe — ${res.reason}`, color: '#A8FF3E' })
    if (audit) {
      append({ ts: '', text: `   risk: ${audit.overall_risk_score} / ${audit.overall_severity} · model: ${audit.model}`, color: '#5A4A8A' })
    }
    append({ ts: '', text: '   → ready to proceed with x402 payment (Demo 2 territory)', color: '#5A4A8A' })
    return
  }

  if (res.verdict === 'warning') {
    append({ ts, text: `⚠ verdict: warning — ${res.reason}`, color: '#FFE600' })
    return
  }

  append({ ts, text: `✕ verdict: unsafe — ${res.reason}`, color: '#FF4444' })
  if (audit) {
    append({ ts: '', text: `   overall_risk_score: ${audit.overall_risk_score} (${audit.overall_severity}) · model: ${audit.model}`, color: '#FF4444' })
    audit.vulnerabilities.slice(0, 3).forEach(v => {
      append({ ts: '', text: `   • ${v.id} ${v.title} — ${v.severity}`, color: '#FF4444' })
    })
    if (audit.vulnerabilities.length > 3) {
      append({ ts: '', text: `   • +${audit.vulnerabilities.length - 3} more — see Pre-Audit Report`, color: '#5A4A8A' })
    }
  }
  append({ ts: '', text: '   → payment halted before signing', color: '#FF4444' })
}

async function replayCached(res: PreflightResponse): Promise<PreflightResponse> {
  await new Promise<void>(resolve => setTimeout(resolve, 2800))
  return res
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

function severityCounts(severities: Severity[]) {
  const order: Severity[] = ['critical', 'high', 'medium', 'low', 'info']
  return order.map(sev => ({
    sev,
    count: severities.filter(s => s === sev).length,
  }))
}
