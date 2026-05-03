import { useEscrowHistory, EscrowHistoryEntry } from '../../state/escrowHistory'
import { ESCROW_FIXTURES, shortfallPct } from '../../data/escrow-fixtures'

const fmtTs = (ts: number) => new Date(ts).toTimeString().slice(0, 8)
const short = (s: string) => `${s.slice(0, 6)}…${s.slice(-4)}`

interface Props {
  selectedId: string | null
  onSelect: (id: string) => void
}

export function EscrowList({ selectedId, onSelect }: Props) {
  const { entries, clear } = useEscrowHistory()

  // Always populate with example entries when no live entries exist.
  const exampleEntries: EscrowHistoryEntry[] = entries.length === 0
    ? [
        toExampleEntry(ESCROW_FIXTURES.sandwich),
        toExampleEntry(ESCROW_FIXTURES.normal),
      ]
    : []

  const allEntries = entries.length > 0 ? entries : exampleEntries

  return (
    <div style={{
      background: '#0E0B22', border: '1px solid #2D1F5E',
      borderRadius: 8, overflow: 'hidden',
      display: 'flex', flexDirection: 'column',
      height: '100%',
    }}>
      <div style={{
        height: 40, background: '#13102E',
        borderBottom: '1px solid #2D1F5E',
        display: 'flex', alignItems: 'center',
        padding: '0 14px', gap: 10,
      }}>
        <span style={{
          fontFamily: "'Press Start 2P', monospace", fontSize: 7,
          color: '#5A4A8A', letterSpacing: '0.14em',
        }}>
          █ ESCROW HISTORY
        </span>
        <span style={{
          fontFamily: "'Press Start 2P', monospace", fontSize: 7,
          color: '#7F77DD',
          padding: '2px 8px', borderRadius: 3,
          border: '1px solid #2D1F5E',
          background: 'rgba(127,119,221,0.08)',
        }}>
          {allEntries.length}
        </span>
        <span style={{ flex: 1 }} />
        {entries.length > 0 && (
          <button
            onClick={clear}
            style={{
              background: 'transparent', border: 'none', cursor: 'pointer',
              color: '#5A4A8A',
              fontFamily: "'Press Start 2P', monospace", fontSize: 6,
              letterSpacing: '0.1em',
            }}
          >
            CLEAR
          </button>
        )}
      </div>

      <div style={{ flex: 1, overflowY: 'auto' }}>
        {allEntries.map((e) => (
          <Row
            key={e.id}
            entry={e}
            selected={selectedId === e.id}
            onClick={() => onSelect(e.id)}
            isExample={entries.length === 0}
          />
        ))}
      </div>
    </div>
  )
}

function Row({
  entry, selected, onClick, isExample,
}: {
  entry: EscrowHistoryEntry
  selected: boolean
  onClick: () => void
  isExample: boolean
}) {
  const isClaim = entry.chosenAction === 'BLOCK_AND_CLAIM'
  const accent = isClaim ? '#FF4444' : '#A8FF3E'
  const sf = shortfallPct(entry)

  return (
    <div
      onClick={onClick}
      style={{
        cursor: 'pointer',
        padding: '12px 14px',
        borderBottom: '1px solid rgba(45,31,94,0.4)',
        borderLeft: `3px solid ${accent}`,
        background: selected ? `${accent}10` : 'transparent',
        transition: 'background 0.15s',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
        <span style={{
          fontFamily: "'Press Start 2P', monospace", fontSize: 7,
          color: accent, letterSpacing: '0.08em',
        }}>
          {isClaim ? '✕' : '✓'} {entry.scenario.toUpperCase()}
        </span>
        {isExample && (
          <span style={{
            fontFamily: "'Press Start 2P', monospace", fontSize: 6,
            color: '#FFE600', letterSpacing: '0.1em',
            border: '1px solid #FFE600', padding: '2px 5px',
            borderRadius: 3, background: 'rgba(255,230,0,0.08)',
          }}>
            EXAMPLE
          </span>
        )}
        <span style={{ flex: 1 }} />
        <span style={{
          fontSize: 9, color: '#5A4A8A',
          fontFamily: "'IBM Plex Mono', monospace",
        }}>
          {fmtTs(entry.timestamp)}
        </span>
      </div>

      <div style={{
        fontSize: 9, color: '#9B8EC4',
        fontFamily: "'IBM Plex Mono', monospace",
        marginBottom: 6, wordBreak: 'break-all',
      }}>
        {short(entry.tradeId)}
      </div>

      <div style={{
        fontSize: 10, color: '#F2E7FF', fontWeight: 700, marginBottom: 2,
      }}>
        {entry.amountIn} USDT → {parseFloat(entry.pendingOutputAegis).toFixed(2)} AEGIS
        {sf > 0 && (
          <span style={{ color: accent, marginLeft: 6, fontWeight: 700 }}>
            (−{sf.toFixed(1)}%)
          </span>
        )}
      </div>

      <div style={{
        display: 'flex', alignItems: 'center', gap: 6,
        fontSize: 9, color: '#5A4A8A',
      }}>
        <span style={{
          padding: '2px 6px', borderRadius: 3,
          color: accent, border: `1px solid ${accent}`,
          background: `${accent}14`,
          fontFamily: "'Press Start 2P', monospace", fontSize: 6,
          letterSpacing: '0.08em',
        }}>
          {entry.chosenAction}
        </span>
        <span>·</span>
        <span style={{ color: accent }}>{entry.finalEscrowState}</span>
      </div>
    </div>
  )
}

function toExampleEntry(fixture: import('../../data/escrow-fixtures').EscrowScenarioFixture): EscrowHistoryEntry {
  return {
    ...fixture,
    id: `example-${fixture.scenario}`,
    timestamp: Date.now() - (fixture.scenario === 'sandwich' ? 60_000 : 120_000),
    source: 'fixture',
  }
}
