import { useState } from 'react'
import { BadgeColor } from '../constants/data'
import { DashboardLayout } from './DashboardLayout'
import { Demo1Runner } from '../components/overview/Demo1Runner'
import { Demo2Runner } from '../components/overview/Demo2Runner'
import { AuditHistory } from '../components/overview/AuditHistory'

type ScenarioId = 'pre-audit' | 'post-audit'

interface ScenarioMeta {
  id: ScenarioId
  label: string
  badge: BadgeColor
  color: string
}

const SCENARIOS: ScenarioMeta[] = [
  { id: 'pre-audit',  label: 'SCENARIO 1 · X402 PRE-AUDIT',  badge: 'green',  color: '#A8FF3E' },
  { id: 'post-audit', label: 'SCENARIO 2 · POST-TX AUDIT',   badge: 'red',    color: '#FF8A4D' },
]

export function Overview() {
  const [scenario, setScenario] = useState<ScenarioId>('pre-audit')
  const meta = SCENARIOS.find(s => s.id === scenario)!

  return (
    <DashboardLayout
      title="Overview"
      subtitle="Agent Developer · jawgstar.eth"
      badgeColor={meta.badge}
    >
      <ScenarioToggle current={scenario} onChange={setScenario} />
      {scenario === 'pre-audit' ? <Demo1Runner /> : <Demo2Runner />}
      <div style={{ marginTop: 12 }}>
        <AuditHistory />
      </div>
    </DashboardLayout>
  )
}

interface ScenarioToggleProps {
  current: ScenarioId
  onChange: (s: ScenarioId) => void
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
        const active = current === s.id
        return (
          <button
            key={s.id}
            onClick={() => onChange(s.id)}
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
