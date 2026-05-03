import { HOOK_DATA } from '../../constants/data'
import { StatusPill } from '../shared/StatusPill'

export function HookGrid() {
  return (
    <>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
        <span style={{ fontFamily: "'Press Start 2P', monospace", fontSize: 7, color: '#5A4A8A', letterSpacing: '0.14em' }}>HOOK CONTRACTS</span>
        <span style={{ padding: '3px 10px', borderRadius: 3, border: '1px solid #A8FF3E', background: 'rgba(46,122,0,0.1)', color: '#A8FF3E', fontFamily: "'Press Start 2P', monospace", fontSize: 7, cursor: 'pointer' }}>
          + Register Hook
        </span>
      </div>

      {/* Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}>
        {HOOK_DATA.map((hook, i) => (
          <div
            key={hook.id}
            style={{
              background: '#13102E',
              border: i === 0 ? `1.5px solid ${hook.color}` : '1px solid #2D1F5E',
              borderRadius: 8, overflow: 'hidden', cursor: 'pointer',
            }}
          >
            <div style={{ height: 3, background: hook.color }} />
            <div style={{ padding: '12px 14px' }}>
              <StatusPill status={hook.status} />
              <div style={{ fontSize: 10, fontWeight: 700, color: '#F2E7FF', margin: '8px 0 4px' }}>{hook.name}</div>
              <div style={{ fontSize: 8, color: '#7F77DD', marginBottom: 10 }}>{hook.addr}</div>
              <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 10 }}>
                {hook.perms.map((p, pi) => (
                  <span key={p} style={{
                    fontSize: 7, padding: '2px 8px', borderRadius: 3,
                    border: `0.5px solid ${hook.permColors[pi]}`,
                    color: hook.permColors[pi],
                  }}>{p}</span>
                ))}
              </div>
            </div>
            <div style={{ height: 32, borderTop: '1px solid #2D1F5E', display: 'flex', alignItems: 'center', padding: '0 14px', justifyContent: 'space-between' }}>
              <span style={{ fontSize: 8, color: '#5A4A8A' }}>{hook.network}</span>
              <span style={{ fontSize: 8, color: '#5A4A8A' }}>{hook.version}</span>
              <span style={{ fontSize: 8, color: hook.color }}>{hook.txCount}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Detail panel for first hook */}
      <div style={{ background: '#13102E', border: '1px solid #A8FF3E', borderRadius: 8, overflow: 'hidden' }}>
        <div style={{ height: 36, background: '#0E0B22', borderBottom: '1px solid #2D1F5E', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 14px' }}>
          <span style={{ fontFamily: "'Press Start 2P', monospace", fontSize: 8, color: '#A8FF3E' }}>HOOK DETAIL — AEGIS V4 Hook</span>
          <span style={{ padding: '3px 10px', borderRadius: 3, border: '1px solid #A8FF3E', background: 'rgba(46,122,0,0.12)', color: '#A8FF3E', fontFamily: "'Press Start 2P', monospace", fontSize: 7 }}>✓ CONNECTED</span>
        </div>
        <div style={{ padding: 14, display: 'grid', gridTemplateColumns: '1fr 1px 1fr', gap: 16 }}>
          <div>
            <Label>REGISTRATION</Label>
            {[['address','0xUniV4Hook...a2c','#7F77DD'],['network','Base','#378ADD'],['version','v1.2.0','#F2E7FF'],['registered','2026-04-28','#9B8EC4'],['tx count','142','#A8FF3E']].map(([k,v,c]) => (
              <div key={k} style={{ fontSize: 9, marginBottom: 3 }}>
                <span style={{ color: '#5A4A8A' }}>{k}: </span><span style={{ color: c }}>{v}</span>
              </div>
            ))}
            <br />
            <Label>PERMISSIONS</Label>
            {[['BEFORE_SWAP', true],['AFTER_SWAP', true],['MODIFY_LP', false]].map(([p, ok]) => (
              <div key={p as string} style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 5, fontSize: 8 }}>
                <div style={{ width: 7, height: 7, borderRadius: 2, background: ok ? '#A8FF3E' : '#2D1F5E', flexShrink: 0 }} />
                <span style={{ color: ok ? '#A8FF3E' : '#5A4A8A' }}>{p as string}</span>
                <span style={{ color: '#5A4A8A', marginLeft: 'auto' }}>{ok ? 'allowed' : 'not registered'}</span>
              </div>
            ))}
          </div>
          <div style={{ background: '#2D1F5E' }} />
          <div>
            <Label>RECENT EVENTS</Label>
            {[['beforeSwap','0xA4f2...8c3d','PASS','#A8FF3E'],['afterSwap','0xA4f2...8c3d','PASS','#A8FF3E'],['beforeSwap','0xF7c3...9d1a','PASS','#A8FF3E'],['afterSwap','0xF7c3...9d1a','HOLD','#FFE600'],['beforeSwap','0xB8e1...3f9a','BLOCK','#FF4444']].map(([ev,hash,res,c],i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6, fontSize: 9 }}>
                <span style={{ color: '#9B8EC4', width: 80 }}>{ev}</span>
                <span style={{ color: '#7F77DD', flex: 1 }}>{hash}</span>
                <span style={{ padding: '2px 8px', borderRadius: 3, border: `1px solid ${c}`, background: `${c}22`, color: c, fontFamily: "'Press Start 2P', monospace", fontSize: 6 }}>{res}</span>
              </div>
            ))}
            <br />
            <Label>ACTIONS</Label>
            <div style={{ display: 'flex', gap: 8 }}>
              {[['#FF4444','DISCONNECT'],['#378ADD','REFRESH']].map(([color, label]) => (
                <div key={label} style={{ flex: 1, height: 32, borderRadius: 6, border: `1px solid ${color}`, background: `${color}18`, color, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Press Start 2P', monospace", fontSize: 7 }}>{label}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

function Label({ children }: { children: React.ReactNode }) {
  return <div style={{ fontFamily: "'Press Start 2P', monospace", fontSize: 6, color: '#5A4A8A', letterSpacing: '0.12em', marginBottom: 8 }}>{children}</div>
}
