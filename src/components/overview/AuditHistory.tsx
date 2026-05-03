import { useNavigate } from 'react-router-dom'
import { useAuditHistory, AuditHistoryEntry } from '../../state/auditHistory'
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
      {/* Header */}
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

      {/* Body */}
      {entries.length === 0 ? (
        <EmptyState />
      ) : (
        <div>
          {entries.map((e, i) => (
            <Row
              key={e.id}
              entry={e}
              isLast={i === entries.length - 1}
            />
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
      No audits yet. Press <span style={{ color: '#A8FF3E' }}>▶ RUN PRE-AUDIT</span> above to log a run here.
    </div>
  )
}

function Row({ entry, isLast }: { entry: AuditHistoryEntry; isLast: boolean }) {
  const navigate = useNavigate()
  const tone = rowTone(entry)
  const score = entry.result?.audit?.overall_risk_score ?? null
  const findings = entry.result?.audit?.vulnerabilities.length ?? 0
  const clickable = !!entry.result

  const onClick = () => {
    if (entry.result) {
      navigate('/audit/pre', { state: { audit: entry.result } })
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

      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{
          fontSize: 10, color: '#F2E7FF', fontWeight: 700,
          marginBottom: 2,
        }}>
          {entry.target.label}
        </div>
        <div style={{
          fontSize: 9, color: '#9B8EC4',
          fontFamily: "'IBM Plex Mono', monospace",
        }}>
          {short(entry.target.address)}
        </div>
      </div>

      <div style={{
        display: 'flex', alignItems: 'center', gap: 6,
        minWidth: 84, justifyContent: 'flex-end',
      }}>
        {entry.source === 'mock' && (
          <span style={{
            fontFamily: "'Press Start 2P', monospace", fontSize: 6,
            color: '#FFE600', letterSpacing: '0.1em',
            border: '1px solid #FFE600', padding: '2px 5px',
            borderRadius: 3, background: 'rgba(255,230,0,0.08)',
          }}>
            MOCK
          </span>
        )}
        {entry.cached && (
          <span style={{
            fontFamily: "'Press Start 2P', monospace", fontSize: 6,
            color: '#7F77DD', letterSpacing: '0.1em',
            border: '1px solid #7F77DD', padding: '2px 5px',
            borderRadius: 3, background: 'rgba(127,119,221,0.08)',
          }}>
            CACHED
          </span>
        )}
      </div>

      <div style={{
        fontSize: 10, color: '#5A4A8A',
        width: 56, textAlign: 'right',
        fontFamily: "'IBM Plex Mono', monospace",
      }}>
        {entry.elapsedSec}s
      </div>

      {score != null ? (
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
            {score}
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

      <div style={{ width: 90, display: 'flex', justifyContent: 'flex-end' }}>
        <StatusPill status={tone.status} label={tone.label} />
      </div>
    </div>
  )
}

function rowTone(entry: AuditHistoryEntry): {
  status: StatusType
  label: string
  color: string
  row: string
} {
  if (entry.error || !entry.result) {
    return {
      status: 'WARN', label: '⚠ ERROR',
      color: '#FFE600', row: 'rgba(255,230,0,0.04)',
    }
  }
  if (entry.result.verdict === 'safe') {
    return {
      status: 'ALLOW', label: '✓ SAFE',
      color: '#A8FF3E', row: 'rgba(168,255,62,0.03)',
    }
  }
  if (entry.result.verdict === 'warning') {
    return {
      status: 'WARN', label: '⚠ WARN',
      color: '#FFE600', row: 'rgba(255,230,0,0.04)',
    }
  }
  return {
    status: 'BLOCK', label: '✕ UNSAFE',
    color: '#FF4444', row: 'rgba(255,68,68,0.04)',
  }
}
