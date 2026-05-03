import { useNavigate } from 'react-router-dom'
import { NAV_ITEMS } from '../constants/data'
import { LogoFull, LogoMark } from '../components/shared/Logo'

export function Landing() {
  const navigate = useNavigate()
  return (
    <div style={{ width: '100%', height: '100vh', background: '#0A0818', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
      {/* Navbar */}
      <nav style={{ height: 56, background: '#0E0B22', borderBottom: '1px solid #2D1F5E', display: 'flex', alignItems: 'center', padding: '0 32px', gap: 20, flexShrink: 0 }}>
        <LogoFull size={26} onClick={() => navigate('/')} />
        <div style={{ display: 'flex', gap: 28, marginLeft: 'auto' }}>
          {NAV_ITEMS.map(item => (
            <span key={item.to} onClick={() => navigate(item.to)} style={{ fontFamily: "'Press Start 2P', monospace", fontSize: 7, color: '#5A4A8A', cursor: 'pointer', letterSpacing: '0.06em' }}>{item.label}</span>
          ))}
        </div>
        <div style={{ marginLeft: 16, display: 'flex', alignItems: 'center', gap: 6, padding: '4px 12px', borderRadius: 4, background: 'rgba(46,122,0,0.2)', border: '1px solid #A8FF3E', fontFamily: "'Press Start 2P', monospace", fontSize: 7, color: '#A8FF3E', letterSpacing: '0.1em' }}>
          <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#A8FF3E' }} />
          ONLINE
        </div>
      </nav>

      {/* Hero */}
      <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40, padding: '48px 80px', alignItems: 'center', overflow: 'hidden' }}>
        <div>
          <div style={{ display: 'inline-flex', alignItems: 'center', fontFamily: "'Press Start 2P', monospace", fontSize: 7, color: '#7F77DD', background: 'rgba(127,119,221,0.12)', border: '1px solid #7F77DD', borderRadius: 3, padding: '4px 12px', marginBottom: 20, letterSpacing: '0.06em' }}>
            ETHGLOBAL 2026 · x402 PAYMENT STANDARD
          </div>
          <div style={{ marginBottom: 24 }}>
            {[['PAYMENT', '#A8FF3E', '1px 1px 0 #2E7A00'], ['GUARD', '#F2E7FF', 'none'], ['SYSTEM', '#7F77DD', 'none']].map(([text, color, shadow]) => (
              <span key={text} style={{ display: 'block', fontFamily: "'Press Start 2P', monospace", fontSize: 'clamp(28px, 4vw, 52px)', letterSpacing: '0.04em', lineHeight: 1.3, color, textShadow: shadow as string }}>{text}</span>
            ))}
          </div>
          <p style={{ fontSize: 13, color: '#9B8EC4', lineHeight: 1.8, marginBottom: 8 }}>Security layer for x402 payment flows.</p>
          <p style={{ fontSize: 10, color: '#5A4A8A', lineHeight: 1.8, marginBottom: 28 }}>Hook Contract Audit · Post-Audit Slippage Detection · Escrow Hold</p>
          <div style={{ display: 'flex', gap: 12 }}>
            <button onClick={() => navigate('/overview')} style={{ fontFamily: "'Press Start 2P', monospace", fontSize: 9, color: '#A8FF3E', background: 'rgba(46,122,0,0.2)', border: '2px solid #A8FF3E', borderRadius: 4, padding: '12px 20px', cursor: 'pointer', letterSpacing: '0.06em' }}>
              ▶ INSERT COIN
            </button>
            <button onClick={() => navigate('/overview')} style={{ fontFamily: "'Press Start 2P', monospace", fontSize: 9, color: '#9B8EC4', background: 'transparent', border: '1px solid #2D1F5E', borderRadius: 4, padding: '12px 20px', cursor: 'pointer', letterSpacing: '0.06em' }}>
              VIEW DEMO
            </button>
          </div>
        </div>

        {/* Dashboard preview */}
        <div style={{ background: '#0E0B22', border: '1px solid #2D1F5E', borderRadius: 12, overflow: 'hidden', height: 'min(460px, calc(100vh - 200px))', display: 'flex', flexDirection: 'column' }}>
          <div style={{ height: 34, background: '#13102E', borderBottom: '1px solid #2D1F5E', display: 'flex', alignItems: 'center', padding: '0 12px', gap: 8, flexShrink: 0 }}>
            <LogoMark size={18} />
            <span style={{ fontFamily: "'Press Start 2P', monospace", fontSize: 7, color: '#A8FF3E' }}>AEGIS402</span>
            <span style={{ fontSize: 9, color: '#5A4A8A', marginLeft: 8 }}>Overview · jawgstar.eth</span>
            <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 4, padding: '2px 8px', borderRadius: 3, background: 'rgba(46,122,0,0.2)', border: '1px solid #A8FF3E', fontFamily: "'Press Start 2P', monospace", fontSize: 6, color: '#A8FF3E' }}>
              <div style={{ width: 4, height: 4, borderRadius: '50%', background: '#A8FF3E' }} />ONLINE
            </div>
          </div>
          <div style={{ flex: 1, display: 'flex', overflow: 'hidden' }}>
            {/* Mini sidebar */}
            <div style={{ width: 72, background: '#13102E', borderRight: '1px solid #2D1F5E', padding: 8, flexShrink: 0 }}>
              {['OVERVIEW', 'AUDIT', 'ESCROW', 'INTEGRATIONS'].map((item, i) => (
                <div key={item} style={{ fontFamily: "'Press Start 2P', monospace", fontSize: 5, padding: '5px 4px', color: i === 0 ? '#7F77DD' : '#5A4A8A', borderRadius: 2, marginBottom: 2, background: i === 0 ? 'rgba(127,119,221,0.12)' : 'transparent' }}>{item}</div>
              ))}
            </div>
            {/* Mini content */}
            <div style={{ flex: 1, padding: 8, overflow: 'hidden', display: 'flex', flexDirection: 'column', gap: 6 }}>
              <div style={{ background: '#13102E', border: '1px solid #2D1F5E', borderRadius: 6, overflow: 'hidden' }}>
                <div style={{ height: 2, background: '#378ADD' }} />
                <div style={{ height: 22, background: 'rgba(19,16,46,0.8)', borderBottom: '1px solid #2D1F5E', display: 'flex', alignItems: 'center', padding: '0 8px', gap: 6 }}>
                  <span style={{ fontFamily: "'Press Start 2P', monospace", fontSize: 5, color: '#F2E7FF' }}>TRADING AGENT</span>
                  <span style={{ fontSize: 6, color: '#9B8EC4', flex: 1 }}>weatherapi.eth</span>
                  <span style={{ fontSize: 6, color: '#FFE600' }}>0.001 USDC</span>
                </div>
                <div style={{ padding: '6px 8px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 0, marginBottom: 4 }}>
                    {['done','active','wait','wait'].map((s, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'center', flex: 1 }}>
                        <div style={{ width: 16, height: 16, borderRadius: '50%', border: `1.5px solid ${s==='done'?'#A8FF3E':s==='active'?'#378ADD':'#2D1F5E'}`, background: s==='done'?'rgba(46,122,0,.18)':s==='active'?'rgba(55,138,221,.18)':'rgba(45,31,94,.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 6, color: s==='done'?'#A8FF3E':s==='active'?'#378ADD':'#2D1F5E', flexShrink: 0 }}>
                          {s === 'done' ? '✓' : s === 'active' ? '·' : '○'}
                        </div>
                        {i < 3 && <div style={{ flex: 1, height: 1.5, background: s==='done'?'#A8FF3E':'#2D1F5E', opacity: 0.5 }} />}
                      </div>
                    ))}
                  </div>
                  <div style={{ fontSize: 7, lineHeight: 1.7 }}>
                    <div style={{ color: '#A8FF3E' }}>✓ 402 recv — 0.001 USDC · Base</div>
                    <div style={{ color: '#378ADD' }}>→ Contract audit — LLM cache...</div>
                  </div>
                </div>
              </div>
              <div style={{ background: '#13102E', border: '1px solid #2D1F5E', borderRadius: 6, overflow: 'hidden', flex: 1 }}>
                <div style={{ height: 18, background: '#0E0B22', borderBottom: '1px solid #2D1F5E', display: 'flex', alignItems: 'center', padding: '0 6px' }}>
                  <span style={{ fontSize: 6, color: '#5A4A8A', fontFamily: "'Press Start 2P', monospace" }}>LIVE FEED</span>
                </div>
                {[['02:14:33','api.x402.io','ALLOW','#A8FF3E'],['02:14:29','defi.hook.eth','BLOCK','#FF4444'],['02:14:21','pay.agent.ai','WARN','#FFE600']].map(([ts,name,status,c]) => (
                  <div key={name} style={{ display: 'flex', alignItems: 'center', padding: '0 6px', height: 22, borderBottom: '1px solid rgba(45,31,94,0.3)', gap: 4 }}>
                    <span style={{ fontSize: 6, color: '#5A4A8a', width: 46 }}>{ts}</span>
                    <span style={{ fontSize: 7, color: '#9B8EC4', flex: 1 }}>{name}</span>
                    <span style={{ fontSize: 5, padding: '1px 5px', borderRadius: 2, border: `1px solid ${c}`, background: `${c}22`, color: c, fontFamily: "'Press Start 2P', monospace" }}>{status}</span>
                  </div>
                ))}
              </div>
            </div>
            {/* Mini wallet */}
            <div style={{ width: 88, background: '#0E0B22', borderLeft: '1px solid #2D1F5E', padding: 8, flexShrink: 0, overflow: 'hidden' }}>
              <div style={{ fontFamily: "'Press Start 2P', monospace", fontSize: 5, color: '#5A4A8A', marginBottom: 4 }}>WALLET</div>
              <div style={{ fontFamily: "'Press Start 2P', monospace", fontSize: 11, color: '#A8FF3E', marginBottom: 2 }}>0.482</div>
              <div style={{ fontSize: 7, color: '#5A4A8A', marginBottom: 6 }}>ETH · $1,446</div>
              <div style={{ height: 1, background: '#2D1F5E', marginBottom: 6 }} />
              {[['USDC','#378ADD'],['WETH','#7F77DD'],['ARB','#FF6EE7']].map(([sym, c]) => (
                <div key={sym} style={{ fontSize: 7, color: c, marginBottom: 2 }}>{sym}</div>
              ))}
              <div style={{ height: 1, background: '#2D1F5E', margin: '6px 0' }} />
              <div style={{ background: 'rgba(46,122,0,.15)', border: '1px solid #A8FF3E', borderRadius: 4, padding: 4, fontFamily: "'Press Start 2P', monospace", fontSize: 5, color: '#A8FF3E' }}>AEGIS<br />ACTIVE</div>
            </div>
          </div>
        </div>
      </div>

      {/* Feature cards */}
      <div style={{ padding: '24px 80px', display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 14, flexShrink: 0 }}>
        {[['01','CONTRACT\nAUDIT','Hook bytecode + Local LLM','#378ADD'],['02','RISK\nSCORE','Rule engine + ML model','#7F77DD'],['03','POST\nAUDIT','Slippage detection','#A8FF3E'],['04','ESCROW\nHOLD','Conditional release','#FFE600']].map(([n, title, desc, color]) => (
          <div key={n} style={{ background: '#0E0B22', border: '1px solid #2D1F5E', borderRadius: 8, padding: '20px 16px', position: 'relative', overflow: 'hidden', borderTop: `3px solid ${color}` }}>
            <div style={{ fontFamily: "'Press Start 2P', monospace", fontSize: 22, marginBottom: 12, color, opacity: 0.65 }}>{n}</div>
            <div style={{ fontFamily: "'Press Start 2P', monospace", fontSize: 9, lineHeight: 1.8, marginBottom: 8, color: '#F2E7FF' }}>
              {(title as string).split('\n').map((l, i) => <div key={i}>{l}</div>)}
            </div>
            <div style={{ fontSize: 9, color: '#9B8EC4', lineHeight: 1.6 }}>{desc}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
