import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  ESCROW_SCENARIOS, EscrowScenarioMeta, EscrowScenarioId,
  ESCROW_DEPLOYMENT,
} from '../../constants/data'
import { runScenario } from '../../api/escrow'
import { EscrowScenarioRunResult, escrowStateLabel } from '../../types/escrow'
import { EscrowScenarioFixture } from '../../data/escrow-fixtures'
import { useEscrowHistory, EscrowHistoryEntry } from '../../state/escrowHistory'
import { useAuditModal, EscrowSubject } from '../../state/auditModal'

type Phase = 'idle' | 'running' | 'done' | 'error'

type StageKey = 'mint' | 'swap' | 'audit' | 'decision'

const STAGES: { key: StageKey; label: string; sub: string }[] = [
  { key: 'mint',     label: 'Mint + approve', sub: 'fund the trader, approve PoolSwapTest / adapter' },
  { key: 'swap',     label: 'Protected swap', sub: 'protectedExactInputSingle (sandwich: front-run / back-run)' },
  { key: 'audit',    label: 'Post-audit',     sub: 'gpt-oss-120b reviews the swap receipt' },
  { key: 'decision', label: 'Auditor decision', sub: 'executeAuditDecision: RELEASE / BLOCK_AND_CLAIM' },
]

interface LogLine {
  ts: string
  text: string
  color: string
}

const tsNow = () => new Date().toTimeString().slice(0, 8)
const short = (s: string) => `${s.slice(0, 6)}…${s.slice(-4)}`

export function Demo3Runner() {
  const [scenario, setScenario] = useState<EscrowScenarioId>('sandwich')
  const [phase, setPhase] = useState<Phase>('idle')
  const [stage, setStage] = useState<StageKey>('mint')
  const [logs, setLogs] = useState<LogLine[]>([])
  const [elapsedSec, setElapsedSec] = useState(0)
  const [errorMsg, setErrorMsg] = useState<string | null>(null)
  const [resultEntry, setResultEntry] = useState<EscrowHistoryEntry | null>(null)

  const abortRef = useRef<AbortController | null>(null)
  const timersRef = useRef<number[]>([])
  const intervalsRef = useRef<number[]>([])

  const escrowHistory = useEscrowHistory()
  const modal = useAuditModal()
  const modalRef = useRef(modal)
  modalRef.current = modal

  const meta = ESCROW_SCENARIOS.find(s => s.id === scenario)!

  const escrowSubject = (s: EscrowScenarioId): EscrowSubject => ({
    scenario: s,
    scenarioLabel: ESCROW_SCENARIOS.find(m => m.id === s)?.label ?? s,
    vault: ESCROW_DEPLOYMENT.vault,
    insurancePool: ESCROW_DEPLOYMENT.insurancePool,
  })

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
    setPhase('idle')
    setStage('mint')
    setLogs([])
    setElapsedSec(0)
    setErrorMsg(null)
    setResultEntry(null)
    modal.hide()
  }

  const run = async () => {
    reset()
    setPhase('running')
    setStage('mint')

    const startedAt = performance.now()
    const elapsed = () => Math.round((performance.now() - startedAt) / 1000)

    const subject = escrowSubject(scenario)
    modal.show({
      phase: 'running', mode: 'escrow',
      subject, stage: 'mint', elapsedSec: 0, cached: false,
    })

    appendLog({ ts: tsNow(), text: `▶ scenario triggered — POST /api/postaudit/scenario/${scenario}`, color: '#F2E7FF' })
    appendLog({ ts: '', text: '   trader wallet will mint USDT, approve, swap, then auditor settles', color: '#5A4A8A' })

    // Stage progression while we wait for the single response.
    timersRef.current.push(window.setTimeout(() => {
      setStage('swap')
      modal.setStage('swap')
      appendLog({ ts: tsNow(), text: '→ submitting protected swap on Sepolia', color: '#FF8A4D' })
      if (scenario === 'sandwich') {
        appendLog({ ts: '', text: '   front-run + victim swap + back-run', color: '#5A4A8A' })
      }
    }, 12_000))
    timersRef.current.push(window.setTimeout(() => {
      setStage('audit')
      modal.setStage('audit')
      appendLog({ ts: tsNow(), text: '→ post-audit running — gpt-oss-120b inspecting receipt', color: '#FF8A4D' })
    }, 35_000))
    timersRef.current.push(window.setTimeout(() => {
      setStage('decision')
      modal.setStage('decision')
      appendLog({ ts: tsNow(), text: '→ auditor preparing executeAuditDecision', color: '#FF8A4D' })
    }, 150_000))

    // Elapsed ticker — drives both card + modal.
    intervalsRef.current.push(window.setInterval(() => {
      const sec = elapsed()
      setElapsedSec(sec)
      modal.setElapsed(sec)
    }, 1000))

    // Heartbeat keeps the screen alive on the long path.
    intervalsRef.current.push(window.setInterval(() => {
      const e = elapsed()
      if (e >= 3) appendLog({ ts: tsNow(), text: `   …still running (${e}s elapsed)`, color: '#5A4A8A' })
    }, 30_000))

    const controller = new AbortController()
    abortRef.current = controller

    try {
      const result = await runScenario(scenario, { signal: controller.signal })
      if (controller.signal.aborted) return
      clearAllTimers()
      const finalElapsed = elapsed()
      setElapsedSec(finalElapsed)
      setStage('decision')
      setPhase('done')

      // Push to history + dispatch modal completion.
      const entry = escrowHistory.push(toEntry(result))
      setResultEntry(entry)
      modal.finishEscrow(subject, entry, finalElapsed)

      appendLog({ ts: tsNow(), text: `   ← scenario settled in ${finalElapsed}s`, color: '#5A4A8A' })
      appendLog({ ts: '', text: `   verdict severity=${result.audit.overall_severity} score=${result.audit.overall_risk_score}`, color: result.chosenAction === 'BLOCK_AND_CLAIM' ? '#FF4444' : '#A8FF3E' })
      appendLog({ ts: '', text: `   action=${result.chosenAction}  finalEscrowState=${escrowStateLabel(result.finalEscrow.state)}`, color: result.chosenAction === 'BLOCK_AND_CLAIM' ? '#FF4444' : '#A8FF3E' })

      // Replay narration from API quickly so the user sees the on-chain story.
      result.narration.forEach((line, i) => {
        const id = window.setTimeout(() => {
          appendLog({ ts: '', text: `   ${line}`, color: '#7F77DD' })
        }, 250 * (i + 1))
        timersRef.current.push(id)
      })
    } catch (err) {
      if (controller.signal.aborted) return
      clearAllTimers()
      const finalElapsed = elapsed()
      setElapsedSec(finalElapsed)
      const message = err instanceof Error ? err.message : 'unknown error'
      setErrorMsg(message)
      setPhase('error')
      modal.failEscrow(subject, message, finalElapsed)
      appendLog({ ts: tsNow(), text: `✕ scenario failed — ${message}`, color: '#FF4444' })
    }
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <div style={{
        background: '#0E0B22', border: '1px solid #2D1F5E',
        borderRadius: 10, padding: 14,
        display: 'flex', flexDirection: 'column', gap: 12,
      }}>
        <Header />
        <ScenarioPicker scenario={scenario} onChange={(s) => { setScenario(s); reset() }} disabled={phase === 'running'} />
        <RunButton meta={meta} phase={phase} elapsedSec={elapsedSec} onRun={run} />
        <StageStrip stage={stage} phase={phase} />
        <LogStream logs={logs} />
        {errorMsg && <ErrorBanner message={errorMsg} />}
      </div>
      {phase === 'done' && resultEntry && <ResultPanel entry={resultEntry} />}
    </div>
  )
}

function ResultPanel({ entry }: { entry: EscrowHistoryEntry }) {
  const navigate = useNavigate()
  const isClaim = entry.chosenAction === 'BLOCK_AND_CLAIM'
  const accent = isClaim ? '#FF4444' : '#A8FF3E'
  const headline = isClaim ? '✕ ESCROW BLOCKED' : '✓ ESCROW RELEASED'
  const sev = entry.audit.overall_severity
  const score = entry.audit.overall_risk_score
  return (
    <div style={{
      background: '#0E0B22',
      border: `1px solid ${accent}`,
      borderLeft: `4px solid ${accent}`,
      borderRadius: 10, padding: 16,
      display: 'flex', alignItems: 'stretch', gap: 16,
      animation: 'demo3ResultIn 320ms ease-out',
    }}>
      <style>{`
        @keyframes demo3ResultIn {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <div style={{
        width: 120, flexShrink: 0,
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        background: '#13102E',
        border: `1px solid ${accent}`,
        borderRadius: 8, padding: 10,
      }}>
        <div style={{
          fontFamily: "'Press Start 2P', monospace", fontSize: 6,
          color: '#5A4A8A', letterSpacing: '0.16em', marginBottom: 4,
        }}>
          RISK
        </div>
        <div style={{ fontFamily: "'Press Start 2P', monospace", fontSize: 28, color: accent, lineHeight: 1 }}>
          {score}
        </div>
        <div style={{ fontSize: 9, color: '#5A4A8A', marginTop: 6 }}>/ 100</div>
        <div style={{
          marginTop: 8, padding: '3px 8px',
          fontFamily: "'Press Start 2P', monospace", fontSize: 7,
          color: accent, letterSpacing: '0.08em',
          border: `1px solid ${accent}`, borderRadius: 3,
        }}>
          {sev.toUpperCase()}
        </div>
      </div>

      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 8 }}>
        <div style={{
          fontFamily: "'Press Start 2P', monospace", fontSize: 11,
          color: accent, letterSpacing: '0.06em',
        }}>
          {headline}
        </div>
        <div style={{ fontSize: 11, color: '#9B8EC4', lineHeight: 1.6 }}>
          {entry.explainer ?? entry.audit.overall_summary}
        </div>
        <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginTop: 4 }}>
          <Chip color={accent}>{entry.chosenAction}</Chip>
          <Chip color="#7F77DD">finalState: {entry.finalEscrowState}</Chip>
          {entry.elapsedMs != null && (
            <Chip color="#5A4A8A">settled in {(entry.elapsedMs / 1000).toFixed(1)}s</Chip>
          )}
        </div>
      </div>

      <div style={{ display: 'flex', alignItems: 'center' }}>
        <button
          onClick={() => navigate('/escrow', { state: { entryId: entry.id } })}
          style={{
            background: `${accent}1f`,
            border: `2px solid ${accent}`,
            color: accent,
            borderRadius: 6, padding: '14px 18px',
            cursor: 'pointer',
            fontFamily: "'Press Start 2P', monospace",
            fontSize: 9, letterSpacing: '0.08em',
            whiteSpace: 'nowrap',
          }}
        >
          → OPEN ESCROW DETAIL
        </button>
      </div>
    </div>
  )
}

function Chip({ color, children }: { color: string; children: React.ReactNode }) {
  return (
    <span style={{
      fontFamily: "'Press Start 2P', monospace", fontSize: 7,
      padding: '3px 8px', borderRadius: 3,
      color, border: `1px solid ${color}`,
      background: `${color}14`, letterSpacing: '0.06em',
    }}>
      {children}
    </span>
  )
}

function Header() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
      <span style={{
        fontFamily: "'Press Start 2P', monospace", fontSize: 8,
        color: '#FFE600', letterSpacing: '0.12em',
      }}>
        DEMO 3 · INSURED ESCROW (LIVE SEPOLIA)
      </span>
      <span style={{ fontSize: 10, color: '#5A4A8A' }}>
        Triggers a real protectedExactInputSingle + auditor decision tx. Takes 60–180s.
      </span>
    </div>
  )
}

function ScenarioPicker({
  scenario, onChange, disabled,
}: {
  scenario: EscrowScenarioId
  onChange: (s: EscrowScenarioId) => void
  disabled: boolean
}) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
      {ESCROW_SCENARIOS.map(s => (
        <ScenarioCard
          key={s.id}
          meta={s}
          selected={scenario === s.id}
          disabled={disabled}
          onSelect={() => onChange(s.id)}
        />
      ))}
    </div>
  )
}

function ScenarioCard({
  meta, selected, disabled, onSelect,
}: {
  meta: EscrowScenarioMeta
  selected: boolean
  disabled: boolean
  onSelect: () => void
}) {
  const expectedColor = meta.expectedAction === 'RELEASE' ? '#A8FF3E' : '#FF4444'
  return (
    <div
      onClick={disabled ? undefined : onSelect}
      style={{
        position: 'relative',
        cursor: disabled ? 'not-allowed' : 'pointer',
        background: selected ? `${meta.color}10` : '#13102E',
        border: `1.5px solid ${selected ? meta.color : '#2D1F5E'}`,
        borderRadius: 8, padding: 12,
        display: 'flex', flexDirection: 'column', gap: 8,
        opacity: disabled && !selected ? 0.6 : 1,
        transition: 'all 0.15s',
      }}
    >
      {selected && (
        <div style={{
          position: 'absolute', top: -1, left: -1, right: -1,
          height: 3, background: meta.color, borderRadius: '8px 8px 0 0',
        }} />
      )}
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <span style={{
          fontFamily: "'Press Start 2P', monospace", fontSize: 9,
          color: selected ? meta.color : '#F2E7FF',
          letterSpacing: '0.04em', flex: 1,
        }}>
          {meta.label}
        </span>
        <span style={{
          fontFamily: "'Press Start 2P', monospace", fontSize: 6,
          letterSpacing: '0.1em',
          padding: '3px 7px', borderRadius: 3,
          color: expectedColor,
          border: `1px solid ${expectedColor}`,
          background: `${expectedColor}14`,
        }}>
          {meta.badgeLabel}
        </span>
      </div>
      <div style={{ fontSize: 10, color: '#5A4A8A', lineHeight: 1.5 }}>
        {meta.description}
      </div>
      <div style={{
        fontFamily: "'IBM Plex Mono', monospace", fontSize: 9, color: '#9B8EC4',
      }}>
        vault {short(ESCROW_DEPLOYMENT.vault)} · insurance {short(ESCROW_DEPLOYMENT.insurancePool)}
      </div>
    </div>
  )
}

function RunButton({
  meta, phase, elapsedSec, onRun,
}: {
  meta: EscrowScenarioMeta
  phase: Phase
  elapsedSec: number
  onRun: () => void
}) {
  const running = phase === 'running'
  const done = phase === 'done'
  return (
    <button
      onClick={onRun}
      disabled={running}
      style={{
        height: 44, cursor: running ? 'not-allowed' : 'pointer',
        background: running ? 'rgba(255,138,77,0.12)' : `${meta.color}1f`,
        border: `2px solid ${running ? '#FF8A4D' : meta.color}`,
        color: running ? '#FF8A4D' : meta.color,
        borderRadius: 6,
        fontFamily: "'Press Start 2P', monospace",
        fontSize: 10, letterSpacing: '0.08em',
        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12,
      }}
    >
      {running ? (
        <>
          <PulsingDot color="#FF8A4D" />
          RUNNING ON SEPOLIA…
          <span style={{ fontSize: 9, color: '#9B8EC4' }}>{elapsedSec}s</span>
        </>
      ) : done ? (
        '▶ RUN AGAIN'
      ) : (
        '▶ RUN SCENARIO'
      )}
    </button>
  )
}

function PulsingDot({ color }: { color: string }) {
  return (
    <span style={{
      width: 8, height: 8, borderRadius: '50%', background: color,
      display: 'inline-block', animation: 'demo3Pulse 1.2s ease-in-out infinite',
    }}>
      <style>{`
        @keyframes demo3Pulse {
          0%,100% { opacity: 1; transform: scale(1); }
          50%      { opacity: 0.5; transform: scale(1.4); }
        }
      `}</style>
    </span>
  )
}

function StageStrip({ stage, phase }: { stage: StageKey; phase: Phase }) {
  const reachedIdx = STAGES.findIndex(s => s.key === stage)
  const allDone = phase === 'done'
  return (
    <div style={{ display: 'flex', gap: 4 }}>
      {STAGES.map((s, i) => {
        const isDone = allDone || i < reachedIdx
        const isActive = !allDone && i === reachedIdx && phase === 'running'
        const accent = isDone ? '#A8FF3E' : isActive ? '#FF8A4D' : '#2D1F5E'
        return (
          <div key={s.key} style={{
            flex: 1, padding: '8px 10px', borderRadius: 6,
            background: isActive ? `${accent}14` : 'transparent',
            border: `1px solid ${isActive ? accent : '#2D1F5E'}`,
            position: 'relative',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <div style={{
                width: 14, height: 14, borderRadius: '50%',
                border: `1.5px solid ${accent}`,
                background: isDone && !isActive ? `${accent}33` : 'transparent',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0,
              }}>
                {isDone && !isActive && <span style={{ fontSize: 8, color: accent }}>✓</span>}
                {isActive && <PulsingDot color={accent} />}
              </div>
              <span style={{
                fontFamily: "'Press Start 2P', monospace", fontSize: 6,
                color: accent, letterSpacing: '0.08em', whiteSpace: 'nowrap',
              }}>
                {s.label}
              </span>
            </div>
            <div style={{ fontSize: 8, color: isDone || isActive ? '#9B8EC4' : '#5A4A8A', marginTop: 4, paddingLeft: 20, lineHeight: 1.4 }}>
              {s.sub}
            </div>
          </div>
        )
      })}
    </div>
  )
}

function LogStream({ logs }: { logs: LogLine[] }) {
  const ref = useRef<HTMLDivElement | null>(null)
  useEffect(() => {
    const el = ref.current
    if (el) el.scrollTop = el.scrollHeight
  }, [logs])

  return (
    <div style={{
      background: '#13102E', border: '1px solid #2D1F5E', borderRadius: 6,
      padding: '10px 12px', height: 160, overflowY: 'auto',
    }} ref={ref}>
      <style>{`
        @keyframes demo3LogIn {
          from { opacity: 0; transform: translateY(4px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
      <div style={{
        fontFamily: "'Press Start 2P', monospace", fontSize: 6,
        color: '#5A4A8A', letterSpacing: '0.14em', marginBottom: 8,
      }}>
        STEP DETAIL
      </div>
      {logs.length === 0 ? (
        <div style={{ fontSize: 10, color: '#5A4A8A' }}>
          Pick a scenario above and press RUN to fire it on Sepolia.
        </div>
      ) : (
        logs.map((log, i) => (
          <div key={i} style={{
            display: 'flex', gap: 10, marginBottom: 3,
            fontSize: 10, lineHeight: 1.5,
            animation: 'demo3LogIn 240ms ease-out',
          }}>
            <span style={{ color: '#5A4A8A', flexShrink: 0, width: 58, fontSize: 9 }}>{log.ts}</span>
            <span style={{ color: log.color }}>{log.text}</span>
          </div>
        ))
      )}
    </div>
  )
}

function ErrorBanner({ message }: { message: string }) {
  return (
    <div style={{
      padding: '10px 12px', background: 'rgba(255,68,68,0.06)',
      border: '1px solid #FF4444', borderLeft: '3px solid #FF4444', borderRadius: 6,
      fontSize: 11, color: '#FF4444', lineHeight: 1.5,
    }}>
      <b>scenario failed:</b> {message}
    </div>
  )
}

function toEntry(res: EscrowScenarioRunResult): Omit<EscrowScenarioFixture, never> & { source: 'live' } {
  const finalState = escrowStateLabel(res.finalEscrow.state)
  return {
    scenario: res.scenario,
    amountIn:           res.pendingEscrow.inputAmount,
    expectedOutput:     res.pendingEscrow.expectedOutput,
    protectionFeePct:   '0.5',
    chain:              'sepolia',
    swapTxHash:         res.swapTxHash,
    decisionTxHash:     res.decisionTxHash,
    audit:              res.audit,
    reasonCode:         res.reasonCode,
    chosenAction:       res.chosenAction,
    tradeId:            res.tradeId,
    pendingOutputAegis: res.pendingEscrow.outputAmount,
    finalEscrowState:   finalState,
    subject:            res.actors.user,
    beneficiary:        res.actors.user,
    policyHash:         '0x' + 'deca'.repeat(16),
    evidenceHash:       '0x' + 'd0c5'.repeat(16),
    auditor:            res.actors.auditor,
    vault:              res.deployment.vault,
    insurancePool:      res.deployment.insurancePool,
    balances: {
      userUsdt:       res.balances.userUsdt,
      userAegis:      res.balances.userAegis,
      vaultAegis:     '0',  // always 0 post-settlement (forwarded to user or insurance)
      insuranceUsdt:  res.balances.insuranceUsdt,
      insuranceAegis: res.balances.insuranceAegis,
    },
    explainer: res.explainer,
    narration: res.narration,
    elapsedMs: res.elapsedMs,
    source: 'live',
  }
}
