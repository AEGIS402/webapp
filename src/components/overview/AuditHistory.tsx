import { useNavigate } from 'react-router-dom'
import { useAuditHistory, AuditHistoryEntry, PostAuditHistoryEntry } from '../../state/auditHistory'
import { StatusType } from '../../constants/data'
import { StatusPill } from '../shared/StatusPill'

const fmtTs = (ts: number) => {
  const d = new Date(ts)
  return d.toTimeString().slice(0, 8)
}

const short = (addr: string) => `${addr.slice(0, 6)}…${addr.slice(-4)}`

export function AuditHistory() {
  const { entries, clear } = useAuditHistory()

  return (
    <div style={{
      background: '#0E0B22',
      border: '1px solid #2D1F5E',
      borderRadius: 8,
      overflow: 'hidden',
    }}>
      <div style={{
        height: 36, background: '#13102E',
        borderBottom: '1px solid #2D1F5E',
        display: 'flex', alignItems: 'center',
        padding: '0 16px', gap: 10,
      }}>
        <span style={{
          fontFamily: "'Press Start 2P', monospace", fontSize: 7,
          color: '#5A4A8A', letterSpacing: '0.14em',
        }}>
          █ AUDIT HISTORY
        </span>
        <span style={{
          fontFamily: "'Press Start 2P', monospace", fontSize: 7,
          color: '#7F77DD', letterSpacing: '0.06em',
          padding: '2px 8px', borderRadius: 3,
          border: '1px solid #2D1F5E',
          background: 'rgba(127,119,221,0.08)',
        }}>
          {entries.length}
        </span>
        <span style={{ flex: 1 }} />
        {entries.length > 0 && (
          <button
            onClick={clear}
            style={{
              background: 'transparent', border: 'none',
              cursor: 'pointer', color: '#5A4A8A',
              fontFamily: "'Press Start 2P', monospace", fontSize: 6,
              letterSpacing: '0.1em',
            }}
          >
            CLEAR
          </button>
        )}
      </div>

      {entries.length === 0 ? (
        <EmptyState />
      ) : (
        <div>
          {entries.map((e, i) => (
            <Row key={e.id} entry={e} isLast={i === entries.length - 1} />
          ))}
        </div>
      )}
    </div>
  )
}

function EmptyState() {
  return (
    <div style={{
      padding: '20px 18px',
      fontSize: 11, color: '#5A4A8A', lineHeight: 1.6,
      textAlign: 'center',
    }}>
      No audits yet. Run a scenario above (<span style={{ color: '#A8FF3E' }}>SCENARIO 1</span> or <span style={{ color: '#FF4444' }}>SCENARIO 2-3</span>) to log a run here.
    </div>
  )
}

function Row({ entry, isLast }: { entry: AuditHistoryEntry; isLast: boolean }) {
  const navigate = useNavigate()
  const tone = rowTone(entry)
  const scoreVal = extractScore(entry)
  const findings = extractFindings(entry)
  const clickable = !!entry.result

  const onClick = () => {
    if (entry.kind === 'pre' && entry.result) {
      navigate('/audit/pre', { state: { audit: entry.result } })
    } else if (entry.kind === 'post' && entry.result) {
      navigate('/audit/post', { state: { audit: entry.result, txHash: entry.txHash, subject: entry.subjectAddress } })
    }
  }

  const onJumpToEscrow = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (entry.kind === 'post' && entry.escrowEntryId) {
      navigate('/escrow', { state: { entryId: entry.escrowEntryId } })
    }
  }

  return (
    <div
      onClick={clickable ? onClick : undefined}
      style={{
        display: 'flex', alignItems: 'center', gap: 12,
        padding: '12px 16px',
        borderBottom: isLast ? 'none' : '1px solid rgba(45,31,94,0.4)',
        cursor: clickable ? 'pointer' : 'default',
        background: tone.row,
        borderLeft: `3px solid ${tone.color}`,
        transition: 'background 0.15s',
      }}
      onMouseEnter={(e) => {
        if (clickable) (e.currentTarget as HTMLDivElement).style.background = '#13102E'
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.background = tone.row
      }}
    >
      <span style={{
        fontSize: 9, color: '#5A4A8A',
        width: 60, flexShrink: 0,
        fontFamily: "'IBM Plex Mono', monospace",
      }}>
        {fmtTs(entry.timestamp)}
      </span>

      <span style={{
        fontFamily: "'Press Start 2P', monospace", fontSize: 6,
        letterSpacing: '0.12em',
        color: entry.kind === 'pre' ? '#7F77DD' : '#FF8A4D',
        border: `1px solid ${entry.kind === 'pre' ? '#7F77DD' : '#FF8A4D'}`,
        background: entry.kind === 'pre' ? 'rgba(127,119,221,0.08)' : 'rgba(255,138,77,0.08)',
        padding: '3px 6px', borderRadius: 3,
        flexShrink: 0, width: 36, textAlign: 'center',
      }}>
        {entry.kind.toUpperCase()}
      </span>

      <RowSubject entry={entry} />

      <div style={{
        display: 'flex', alignItems: 'center', gap: 6,
        minWidth: 84, justifyContent: 'flex-end',
      }}>
        {(entry.kind === 'pre' && entry.source === 'mock') && (
          <Badge color="#FFE600">MOCK</Badge>
        )}
        {(entry.kind === 'post' && entry.source === 'fixture') && (
          <Badge color="#FFE600">FIXTURE</Badge>
        )}
        {entry.cached && <Badge color="#7F77DD">CACHED</Badge>}
      </div>

      <div style={{
        fontSize: 10, color: '#5A4A8A',
        width: 56, textAlign: 'right',
        fontFamily: "'IBM Plex Mono', monospace",
      }}>
        {entry.elapsedSec}s
      </div>

      {scoreVal != null ? (
        <div style={{ width: 80, textAlign: 'right' }}>
          <div style={{
            fontFamily: "'Press Start 2P', monospace", fontSize: 6,
            color: '#5A4A8A', letterSpacing: '0.14em', marginBottom: 2,
          }}>
            RISK
          </div>
          <div style={{
            fontFamily: "'Press Start 2P', monospace", fontSize: 11,
            color: tone.color, lineHeight: 1,
          }}>
            {scoreVal}
            <span style={{ fontSize: 8, color: '#5A4A8A', marginLeft: 2 }}>/100</span>
          </div>
        </div>
      ) : (
        <div style={{ width: 80, textAlign: 'right', fontSize: 9, color: '#5A4A8A' }}>—</div>
      )}

      {entry.result && (
        <span style={{
          fontSize: 8, color: tone.color,
          fontFamily: "'IBM Plex Mono', monospace",
          width: 28, textAlign: 'right',
        }}>
          {findings}f
        </span>
      )}

      {entry.kind === 'post' && entry.escrowEntryId && (
        <button
          onClick={onJumpToEscrow}
          style={{
            background: 'transparent', border: '1px solid #2D1F5E',
            color: '#FFE600', cursor: 'pointer',
            padding: '3px 8px', borderRadius: 3,
            fontFamily: "'Press Start 2P', monospace", fontSize: 6,
            letterSpacing: '0.08em',
          }}
        >
          ↗ ESCROW
        </button>
      )}

      <div style={{ width: 90, display: 'flex', justifyContent: 'flex-end' }}>
        <StatusPill status={tone.status} label={tone.label} />
      </div>
    </div>
  )
}

function RowSubject({ entry }: { entry: AuditHistoryEntry }) {
  if (entry.kind === 'pre') {
    return (
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontSize: 10, color: '#F2E7FF', fontWeight: 700, marginBottom: 2 }}>
          {entry.target.label}
        </div>
        <div style={{ fontSize: 9, color: '#9B8EC4', fontFamily: "'IBM Plex Mono', monospace" }}>
          {short(entry.target.address)}
        </div>
      </div>
    )
  }
  return (
    <div style={{ flex: 1, minWidth: 0 }}>
      <div style={{ fontSize: 10, color: '#F2E7FF', fontWeight: 700, marginBottom: 2 }}>
        {entry.scenarioLabel}
      </div>
      <div style={{ fontSize: 9, color: '#9B8EC4', fontFamily: "'IBM Plex Mono', monospace" }}>
        {short(entry.txHash)}
      </div>
    </div>
  )
}

function Badge({ color, children }: { color: string; children: React.ReactNode }) {
  return (
    <span style={{
      fontFamily: "'Press Start 2P', monospace", fontSize: 6,
      color, letterSpacing: '0.1em',
      border: `1px solid ${color}`, padding: '2px 5px',
      borderRadius: 3, background: `${color}14`,
    }}>
      {children}
    </span>
  )
}

function extractScore(entry: AuditHistoryEntry): number | null {
  if (!entry.result) return null
  if (entry.kind === 'pre') return entry.result.audit?.overall_risk_score ?? null
  return entry.result.overall_risk_score ?? null
}

function extractFindings(entry: AuditHistoryEntry): number {
  if (!entry.result) return 0
  if (entry.kind === 'pre') return entry.result.audit?.vulnerabilities.length ?? 0
  return entry.result.vulnerabilities.length
}

function rowTone(entry: AuditHistoryEntry): {
  status: StatusType
  label: string
  color: string
  row: string
} {
  const errored = (entry.kind === 'pre' && entry.error) || (entry.kind === 'post' && entry.error) || !entry.result
  if (errored) {
    return { status: 'WARN', label: '⚠ ERROR', color: '#FFE600', row: 'rgba(255,230,0,0.04)' }
  }

  if (entry.kind === 'pre' && entry.result) {
    if (entry.result.verdict === 'safe')    return { status: 'ALLOW', label: '✓ SAFE',   color: '#A8FF3E', row: 'rgba(168,255,62,0.03)' }
    if (entry.result.verdict === 'warning') return { status: 'WARN',  label: '⚠ WARN',   color: '#FFE600', row: 'rgba(255,230,0,0.04)' }
    return { status: 'BLOCK', label: '✕ UNSAFE', color: '#FF4444', row: 'rgba(255,68,68,0.04)' }
  }

  // post-audit
  const post = (entry as PostAuditHistoryEntry).result!
  const sev = post.overall_severity
  if (sev === 'high' || sev === 'critical') return { status: 'BLOCK', label: '✕ BLOCKED', color: '#FF4444', row: 'rgba(255,68,68,0.04)' }
  if (sev === 'medium')                     return { status: 'WARN',  label: '⚠ WARN',    color: '#FFE600', row: 'rgba(255,230,0,0.04)' }
  return { status: 'ALLOW', label: '✓ CLEAN', color: '#A8FF3E', row: 'rgba(168,255,62,0.03)' }
}

