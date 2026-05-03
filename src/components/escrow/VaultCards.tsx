import { useState } from 'react'
import { VAULT_DATA } from '../../constants/data'
import { StatusPill } from '../shared/StatusPill'
import { StatusType } from '../../constants/data'

export function VaultCards() {
  const [selected, setSelected] = useState<string | null>('service.eth')
  const toggle = (id: string) => setSelected(prev => prev === id ? null : id)
  const sv = VAULT_DATA.find(v => v.id === selected)

  return (
    <>
      {/* Summary counters */}
      <div style={{ display: 'flex', gap: 32, marginBottom: 20, alignItems: 'center' }}>
        {[{n:'1', label:'Holding', color:'#FFE600'},{n:'1',label:'Released',color:'#A8FF3E'},{n:'1',label:'Refunded',color:'#FF4444'}].map(c => (
          <div key={c.label} style={{ display: 'flex', alignItems: 'baseline', gap: 8 }}>
            <span style={{ fontFamily: "'Press Start 2P', monospace", fontSize: 18, color: c.color }}>{c.n}</span>
            <span style={{ fontSize: 11, color: '#9B8EC4' }}>{c.label}</span>
          </div>
        ))}
      </div>

      {/* Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 16, marginBottom: 16 }}>
        {VAULT_DATA.map(vault => {
          const isSelected = selected === vault.id
          const statusMap: Record<string, StatusType> = { Holding: 'HOLD', Released: 'ALLOW', Refunded: 'BLOCK' }
          return (
            <div
              key={vault.id}
              onClick={() => toggle(vault.id)}
              style={{
                background: isSelected ? `rgba(${vault.color === '#FFE600' ? '255,230,0' : vault.color === '#A8FF3E' ? '168,255,62' : '255,68,68'}, 0.03)` : '#0E0B22',
                border: isSelected ? `1.5px solid ${vault.color}` : '1px solid #2D1F5E',
                borderRadius: 12, overflow: 'hidden', cursor: 'pointer',
                transition: 'border-color 0.2s',
              }}
            >
              <div style={{ height: 3, background: vault.color }} />
              <div style={{ padding: '14px 16px' }}>
                <StatusPill status={statusMap[vault.status]} label={vault.status} />
                <div style={{ fontSize: 13, fontWeight: 700, color: '#F2E7FF', margin: '10px 0 4px' }}>{vault.label}</div>
                <div style={{ fontFamily: "'Press Start 2P', monospace", fontSize: 14, marginBottom: 6, color: '#F2E7FF' }}>{vault.amount}</div>
                <div style={{ fontSize: 8, color: '#5A4A8A', marginBottom: 10 }}>{vault.payId} · {vault.elapsed}</div>
                <div style={{ height: 1, background: '#2D1F5E', margin: '8px 0' }} />
                {vault.kv.map(kv => (
                  <div key={kv.k} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4, fontSize: 8 }}>
                    <span style={{ color: '#5A4A8A' }}>{kv.k}</span>
                    <span style={{ color: kv.vc }}>{kv.v}</span>
                  </div>
                ))}
              </div>
              <div style={{ padding: '8px 16px', borderTop: '1px solid #2D1F5E', fontSize: 9, color: vault.color, cursor: 'pointer' }}>View →</div>
            </div>
          )
        })}
      </div>

      {/* Detail panel */}
      {sv && <VaultDetail vault={sv} />}
    </>
  )
}

function VaultDetail({ vault }: { vault: typeof VAULT_DATA[0] }) {
  const isHolding  = vault.status === 'Holding'
  const isReleased = vault.status === 'Released'
  const isRefunded = vault.status === 'Refunded'

  return (
    <div style={{ background: '#0E0B22', border: `1px solid ${vault.color}`, borderRadius: 8, overflow: 'hidden', borderTop: `3px solid ${vault.color}` }}>
      <div style={{ height: 44, background: '#13102E', borderBottom: '1px solid #2D1F5E', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 16px' }}>
        <span style={{ fontFamily: "'Press Start 2P', monospace", fontSize: 8, color: vault.color }}>
          VAULT DETAIL — {vault.label}
        </span>
        <span style={{
          padding: '3px 10px', borderRadius: 3, border: `1px solid ${vault.color}`,
          background: `${vault.color}22`, color: vault.color,
          fontFamily: "'Press Start 2P', monospace", fontSize: 7,
        }}>
          {isHolding ? '⚠ HOLDING' : isReleased ? '✓ RELEASED' : '↩ REFUNDED'}
        </span>
      </div>
      <div style={{ padding: 16, display: 'grid', gridTemplateColumns: '1fr 1px 1fr', gap: 20 }}>
        <div>
          <AccLabel>PAYMENT INFO</AccLabel>
          {vault.kv.map(kv => (
            <div key={kv.k} style={{ fontSize: 9, marginBottom: 3 }}>
              <span style={{ color: '#5A4A8A' }}>{kv.k}: </span>
              <span style={{ color: kv.vc }}>{kv.v}</span>
            </div>
          ))}
          <div style={{ fontSize: 9, marginBottom: 3 }}><span style={{ color: '#5A4A8A' }}>amount: </span><span style={{ color: vault.color }}>{vault.amount}</span></div>
          {isHolding && (
            <>
              <br />
              <AccLabel>SLIPPAGE RESULT</AccLabel>
              <div style={{ height: 6, background: '#2D1F5E', borderRadius: 3, overflow: 'hidden', marginBottom: 6 }}>
                <div style={{ height: '100%', background: '#FF4444', width: '67.4%' }} />
              </div>
              <div style={{ fontFamily: "'Press Start 2P', monospace", fontSize: 8, color: '#FF4444', marginBottom: 4 }}>67.4% (threshold: 5.0%)</div>
              <div style={{ fontSize: 9, color: '#5A4A8A' }}>Expected: ≥ 0.000950 USDC</div>
              <div style={{ fontSize: 9, color: '#FF4444' }}>Actual: 0.000310 USDC</div>
            </>
          )}
        </div>
        <div style={{ background: '#2D1F5E' }} />
        <div>
          {isHolding && <>
            <AccLabel>HOLD REASON</AccLabel>
            <FindingBox color="#FFE600" title="SLIPPAGE ANOMALY DETECTED">
              Post-audit output 67.4% below threshold<br />Escrow hold triggered automatically
            </FindingBox>
            <AccLabel>POST-AUDIT LLM</AccLabel>
            <div style={{ background: '#13102E', border: '1px solid #2D1F5E', borderRadius: 6, padding: '10px 12px', marginBottom: 10 }}>
              <div style={{ fontSize: 9, color: '#FFE600', marginBottom: 3 }}>Slippage 67.4% — MEV sandwich likely</div>
              <div style={{ fontSize: 9, color: '#5A4A8A', marginBottom: 3 }}>Model: gpt-oss-120b · Latency: 0.34s</div>
              <div style={{ fontSize: 9, color: '#A8FF3E', fontWeight: 700 }}>Confidence: 0.91</div>
            </div>
            <AccLabel>ACTIONS</AccLabel>
            <div style={{ display: 'flex', gap: 8 }}>
              {[['#A8FF3E','RELEASE'],['#378ADD','REFUND'],['#FF4444','DISPUTE']].map(([color, label]) => (
                <div key={label} style={{ flex: 1, height: 32, borderRadius: 6, border: `1px solid ${color}`, background: `${color}22`, color, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Press Start 2P', monospace", fontSize: 7 }}>{label}</div>
              ))}
            </div>
            <div style={{ fontSize: 8, color: '#5A4A8A', marginTop: 8 }}>Hold since: 02:14:36 · Auto-expire: +24h</div>
          </>}
          {isReleased && <>
            <FindingBox color="#A8FF3E" title="SETTLEMENT COMPLETE">
              Payment released to merchant<br />Post-audit verification: passed<br />Commitment hash: matched ✓
            </FindingBox>
            <div style={{ fontSize: 9, color: '#5A4A8A' }}>Released at: 12:04:31</div>
          </>}
          {isRefunded && <>
            <FindingBox color="#FF4444" title="COMMITMENT MISMATCH">
              Service response hash did not match<br />expected commitment — auto-refunded
            </FindingBox>
            <div style={{ fontSize: 9, color: '#5A4A8A' }}>Refunded at: 12:07:22</div>
          </>}
        </div>
      </div>
    </div>
  )
}

function AccLabel({ children }: { children: React.ReactNode }) {
  return <div style={{ fontFamily: "'Press Start 2P', monospace", fontSize: 6, color: '#5A4A8A', letterSpacing: '0.12em', marginBottom: 8 }}>{children}</div>
}

function FindingBox({ color, title, children }: { color: string; title: string; children: React.ReactNode }) {
  return (
    <div style={{ borderRadius: 6, padding: '10px 12px', marginBottom: 10, background: `${color}14`, border: `1px solid ${color}`, borderLeft: `3px solid ${color}` }}>
      <div style={{ fontFamily: "'Press Start 2P', monospace", fontSize: 7, color, marginBottom: 6 }}>{title}</div>
      <div style={{ fontSize: 9, color: '#9B8EC4', lineHeight: 1.6 }}>{children}</div>
    </div>
  )
}
