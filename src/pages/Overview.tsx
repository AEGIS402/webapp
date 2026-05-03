import { useState } from 'react'
import { BadgeColor } from '../constants/data'
import { DashboardLayout } from './DashboardLayout'
import { MonitorCard, OverviewState } from '../components/overview/MonitorCard'
import { LiveFeed } from '../components/overview/LiveFeed'

const SCENARIOS: { state: OverviewState; label: string; badge: BadgeColor; color: string }[] = [
  { state: 'processing', label: 'SCENARIO 1 · PROCESSING', badge: 'green',  color: '#378ADD' },
  { state: 'blocked',    label: 'SCENARIO 1 · BLOCKED',    badge: 'red',    color: '#FF4444' },
  { state: 'slippage',   label: 'SCENARIO 2 · SLIPPAGE',   badge: 'yellow', color: '#FFE600' },
]

export function Overview() {
  const [state, setState] = useState<OverviewState>('processing')
  const cfg = SCENARIOS.find(s => s.state === state)!
  const escrowActive = state === 'slippage'

  return (
    <DashboardLayout
      title="Overview"
      subtitle="Agent Developer · jawgstar.eth"
      badgeColor={cfg.badge}
      escrowActive={escrowActive}
    >
      <ScenarioToggle current={state} onChange={setState} />
      <MonitorCard state={state} />
      <LiveFeed state={state} />
    </DashboardLayout>
  )
}

interface ScenarioToggleProps {
  current: OverviewState
  onChange: (s: OverviewState) => void
}

function ScenarioToggle({ current, onChange }: ScenarioToggleProps) {
  return (
    <div style={{
      display: 'flex', gap: 8, marginBottom: 12,
      padding: 8, background: '#0E0B22',
      border: '1px solid #2D1F5E', borderRadius: 8,
    }}>
      <span style={{
        fontFamily: "'Press Start 2P', monospace", fontSize: 6,
        color: '#5A4A8A', letterSpacing: '0.12em',
        alignSelf: 'center', marginRight: 8, paddingLeft: 6,
      }}>
        DEMO STATE
      </span>
      {SCENARIOS.map(s => {
        const active = current === s.state
        return (
          <button
            key={s.state}
            onClick={() => onChange(s.state)}
            style={{
              flex: 1, height: 32, cursor: 'pointer',
              background: active ? `${s.color}22` : 'transparent',
              border: `1px solid ${active ? s.color : '#2D1F5E'}`,
              borderRadius: 4,
              color: active ? s.color : '#5A4A8A',
              fontFamily: "'Press Start 2P', monospace",
              fontSize: 7, letterSpacing: '0.08em',
              transition: 'all 0.15s',
            }}
          >
            {s.label}
          </button>
        )
      })}
    </div>
  )
}
