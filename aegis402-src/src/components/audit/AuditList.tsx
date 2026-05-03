import { useState } from 'react'
import { AUDIT_PRE_ROWS, AUDIT_POST_ROWS, Screen } from '../../constants/data'
import { StatusPill } from '../shared/StatusPill'

interface AuditListProps {
  initialTab?: 'pre' | 'post'
  navigate: (s: Screen) => void
}

export function AuditList({ initialTab = 'pre', navigate }: AuditListProps) {
  const [tab, setTab] = useState<'pre' | 'post'>(initialTab)
  const [expanded, setExpanded] = useState<string | null>(
    initialTab === 'post' ? '0xF7c3...9d1a' : '0xA4f2...8c3d'
  )

  const switchTab = (t: 'pre' | 'post') => {
    setTab(t)
    setExpanded(t === 'pre' ? '0xA4f2...8c3d' : '0xF7c3...9d1a')
  }

  const toggle = (id: string) => setExpanded(prev => prev === id ? null : id)

  const isPost = tab === 'post'
  const rows = isPost ? AUDIT_POST_ROWS : AUDIT_PRE_ROWS

  return (
    <div style={{ background: '#0E0B22', border: '1px solid #2D1F5E', borderRadius: 8, overflow: 'hidden' }}>
      {/* Tabs */}
      <div style={{ display: 'flex', background: '#13102E', borderBottom: '1px solid #2D1F5E' }}>
        {(['pre', 'post'] as const).map(t => {
          const active = tab === t
          return (
            <div
              key={t}
              onClick={() => switchTab(t)}
              style={{
                flex: 1, height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: "'Press Start 2P', monospace", fontSize: 7, letterSpacing: '0.1em',
                cursor: 'pointer',
                color: active ? (t === 'post' ? '#FFE600' : '#7F77DD') : '#5A4A8A',
                borderBottom: active ? `2px solid ${t === 'post' ? '#FFE600' : '#7F77DD'}` : '2px solid transparent',
                background: active ? (t === 'post' ? 'rgba(255,230,0,0.08)' : 'rgba(127,119,221,0.1)') : 'transparent',
                transition: 'all 0.15s',
              }}
            >
              {t === 'pre' ? 'PRE-AUDIT' : 'POST-AUDIT'}
            </div>
          )
        })}
      </div>

      {/* Column headers */}
      <div style={{ display: 'flex', alignItems: 'center', height: 32, background: '#13102E', borderBottom: '1px solid #2D1F5E', padding: '0 16px', gap: 8 }}>
        {(['TX HASH', isPost ? 'MERCHANT' : 'CONTRACT', isPost ? 'SLIPPAGE' : 'TIME', 'STATUS'] as string[]).map((col, i) => (
          <span key={i} style={{ fontFamily: "'Press Start 2P', monospace", fontSize: 6, color: '#5A4A8A', letterSpacing: '0.1em', flex: i === 1 ? 1 : 'none', width: i === 0 ? 140 : i === 2 ? 70 : i === 3 ? 90 : undefined }}>
            {col}
          </span>
        ))}
      </div>

      {/* Rows */}
      {rows.map(row => {
        const isExpanded = expanded === row.id
        const isBlock = row.status === 'BLOCK'
        const isHold  = row.status === 'HOLD'
        return (
          <div
            key={row.id}
            style={{
              borderBottom: '1px solid rgba(45,31,94,0.3)',
              cursor: 'pointer',
            }}
          >
            <div
              onClick={() => toggle(row.id)}
              style={{
                display: 'flex', alignItems: 'center', height: 44, padding: '0 16px', gap: 8,
                background: isExpanded
                  ? (isBlock ? 'rgba(255,68,68,0.06)' : isHold ? 'rgba(255,230,0,0.06)' : 'transparent')
                  : 'transparent',
                borderLeft: isExpanded
                  ? `3px solid ${isBlock ? '#FF4444' : isHold ? '#FFE600' : 'transparent'}`
                  : '3px solid transparent',
              }}
            >
              <span style={{ fontSize: 9, width: 140, flexShrink: 0, fontWeight: isExpanded ? 700 : 400, color: isExpanded ? (isBlock ? '#FF4444' : isHold ? '#FFE600' : '#9B8EC4') : '#9B8EC4' }}>
                {row.id}
              </span>
              <span style={{ fontSize: 8, color: '#9B8EC4', flex: 1 }}>
                {'contract' in row ? row.contract : row.merchant}
              </span>
              <span style={{ fontSize: 9, width: 70, flexShrink: 0, color: isPost && 'slippage' in row && row.slippage === '67.4%' ? '#FF4444' : '#5A4A8A' }}>
                {'time' in row ? row.time : row.slippage}
              </span>
              <div style={{ width: 90, display: 'flex', justifyContent: 'flex-end', flexShrink: 0 }}>
                <StatusPill status={row.status} />
              </div>
              <span style={{ fontSize: 8, color: '#5A4A8A', marginLeft: 8 }}>{isExpanded ? '▼' : '▶'}</span>
            </div>

            {/* Accordion */}
            {isExpanded && (
              <div style={{ overflow: 'hidden', borderTop: '1px solid #2D1F5E' }}>
                {isPost ? <PostAccordion /> : <PreAccordion />}
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}

function PreAccordion() {
  return (
    <div style={{ padding: '12px 16px 16px', display: 'grid', gridTemplateColumns: '1fr 1px 1fr', gap: 16 }}>
      <div>
        <AccLabel>TRANSACTION</AccLabel>
        <div style={{ fontSize: 9, fontWeight: 700, color: '#F2E7FF', marginBottom: 3 }}>0xA4f2...8c3d</div>
        <div style={{ fontSize: 8, color: '#5A4A8A', marginBottom: 12 }}>Block #23437410 · 02:14:34</div>
        <AccLabel>HOOK PERMISSIONS</AccLabel>
        {[
          { perm: 'BEFORE_SWAP', ok: true },
          { perm: 'AFTER_SWAP',  ok: true },
          { perm: 'MODIFY_LP',   ok: false },
        ].map(({ perm, ok }) => (
          <div key={perm} style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 5, fontSize: 8 }}>
            <div style={{ width: 7, height: 7, borderRadius: 2, background: ok ? '#A8FF3E' : '#FF4444', flexShrink: 0 }} />
            <span style={{ color: ok ? '#A8FF3E' : '#FF4444' }}>{perm}</span>
            {!ok && <span style={{ color: '#FF4444', marginLeft: 'auto', fontWeight: 700 }}>NOT DECLARED</span>}
            {ok  && <span style={{ color: '#5A4A8A', marginLeft: 'auto' }}>declared</span>}
          </div>
        ))}
      </div>
      <div style={{ background: '#2D1F5E' }} />
      <div>
        <AccLabel>FINDING</AccLabel>
        <FindingBox color="#FF4444" title="PERMISSION MISMATCH">
          Hook requests MODIFY_LP permission<br />not declared in x402 requirement
        </FindingBox>
        <AccLabel>LOCAL LLM ANALYSIS</AccLabel>
        <div style={{ background: '#13102E', border: '1px solid #2D1F5E', borderRadius: 6, padding: '10px 12px', marginBottom: 10 }}>
          <div style={{ fontSize: 9, color: '#378ADD', marginBottom: 3 }}>Cache: MISS → LLM called</div>
          <div style={{ fontSize: 9, color: '#5A4A8A', marginBottom: 3 }}>Model: gpt-oss-120b · Latency: 0.34s</div>
          <div style={{ fontSize: 9, color: '#A8FF3E', fontWeight: 700 }}>Confidence: 0.97</div>
        </div>
        <FindingBox color="#FF4444" title="PAYMENT HALTED">
          Agent notified — tx blocked
        </FindingBox>
      </div>
    </div>
  )
}

function PostAccordion() {
  return (
    <div style={{ padding: '12px 16px 16px', display: 'grid', gridTemplateColumns: '1fr 1px 1fr', gap: 16 }}>
      <div>
        <AccLabel>TRANSACTION</AccLabel>
        <div style={{ fontSize: 9, fontWeight: 700, color: '#F2E7FF', marginBottom: 3 }}>0xF7c3...9d1a</div>
        <div style={{ fontSize: 8, color: '#5A4A8A', marginBottom: 12 }}>Block #23437892 · 02:14:36</div>
        <AccLabel>SWAP RESULT</AccLabel>
        <div style={{ background: '#13102E', border: '1px solid #2D1F5E', borderRadius: 6, padding: '10px 12px', marginBottom: 10 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4, fontSize: 9 }}>
            <span style={{ color: '#5A4A8A' }}>Expected</span>
            <span style={{ color: '#A8FF3E' }}>≥ 0.000950 USDC</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 9 }}>
            <span style={{ color: '#5A4A8A' }}>Actual</span>
            <span style={{ color: '#FF4444', fontWeight: 700 }}>0.000310 USDC</span>
          </div>
        </div>
        <AccLabel>SLIPPAGE</AccLabel>
        <div style={{ height: 6, background: '#2D1F5E', borderRadius: 3, overflow: 'hidden', marginBottom: 6 }}>
          <div style={{ height: '100%', background: '#FF4444', width: '67.4%', borderRadius: 3 }} />
        </div>
        <div style={{ fontFamily: "'Press Start 2P', monospace", fontSize: 8, color: '#FF4444' }}>67.4% (threshold: 5.0%)</div>
      </div>
      <div style={{ background: '#2D1F5E' }} />
      <div>
        <AccLabel>POST-AUDIT LLM</AccLabel>
        <FindingBox color="#FFE600" title="SLIPPAGE ANOMALY DETECTED">
          Slippage 67.4% — MEV sandwich likely<br />Confidence: 0.91 · Model: gpt-oss-120b
        </FindingBox>
        <AccLabel>ESCROW STATUS</AccLabel>
        <FindingBox color="#FFE600" title="0.001 USDC — ESCROW HOLD">
          Merchant: weatherapi.eth · Auto-expire: +24h
        </FindingBox>
        <AccLabel>ACTIONS</AccLabel>
        <div style={{ display: 'flex', gap: 8, marginTop: 8 }}>
          {[['#A8FF3E', 'RELEASE'], ['#378ADD', 'REFUND'], ['#FF4444', 'DISPUTE']] .map(([color, label]) => (
            <div key={label} style={{
              flex: 1, height: 32, borderRadius: 6, border: `1px solid ${color}`,
              background: `${color}26`, color, cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontFamily: "'Press Start 2P', monospace", fontSize: 7,
            }}>{label}</div>
          ))}
        </div>
        <div style={{ fontSize: 8, color: '#5A4A8A', marginTop: 8 }}>Hold since: 02:14:36 · 0.001 USDC locked</div>
      </div>
    </div>
  )
}

function AccLabel({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ fontFamily: "'Press Start 2P', monospace", fontSize: 6, color: '#5A4A8A', letterSpacing: '0.12em', marginBottom: 8 }}>
      {children}
    </div>
  )
}

function FindingBox({ color, title, children }: { color: string; title: string; children: React.ReactNode }) {
  return (
    <div style={{
      borderRadius: 6, padding: '10px 12px', marginBottom: 10, position: 'relative',
      background: `${color}14`, border: `1px solid ${color}`,
      borderLeft: `3px solid ${color}`,
    }}>
      <div style={{ fontFamily: "'Press Start 2P', monospace", fontSize: 7, color, marginBottom: 6 }}>{title}</div>
      <div style={{ fontSize: 9, color: '#9B8EC4', lineHeight: 1.6 }}>{children}</div>
    </div>
  )
}
