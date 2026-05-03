import { Screen, NAV_ITEMS } from '../../constants/data'
import { LogoFull } from './Logo'

interface SidebarProps {
  screen: Screen
  navigate: (s: Screen) => void
}

export function Sidebar({ screen, navigate }: SidebarProps) {
  const activeKey: Screen =
    screen.startsWith('audit') ? 'audit-pre' :
    screen.startsWith('overview') ? 'overview' :
    screen

  return (
    <div style={{
      width: 200, flexShrink: 0, height: '100vh',
      background: '#0E0B22', borderRight: '1px solid #2D1F5E',
      display: 'flex', flexDirection: 'column', position: 'relative', zIndex: 10,
    }}>
      {/* Logo */}
      <div style={{
        height: 56, background: '#13102E', borderBottom: '1px solid #2D1F5E',
        display: 'flex', alignItems: 'center', padding: '0 14px', flexShrink: 0,
      }}>
        <LogoFull size={24} onClick={() => navigate('landing')} />
      </div>

      {/* Nav */}
      <div style={{ flex: 1, padding: '8px 0', overflowY: 'auto' }}>
        {NAV_ITEMS.map(item => {
          const active = activeKey === item.id
          return (
            <div
              key={item.id}
              onClick={() => navigate(item.id)}
              style={{
                height: 36, display: 'flex', alignItems: 'center',
                padding: '0 24px', cursor: 'pointer', position: 'relative',
                fontFamily: "'Press Start 2P', monospace",
                fontSize: 7, letterSpacing: '0.08em',
                color: active ? '#7F77DD' : '#5A4A8A',
                background: active ? 'rgba(127,119,221,0.12)' : 'transparent',
                transition: 'color 0.15s',
              }}
            >
              {active && (
                <div style={{
                  position: 'absolute', left: 8, top: 4, bottom: 4,
                  width: 3, background: '#7F77DD',
                }} />
              )}
              {item.label}
            </div>
          )
        })}
      </div>

      {/* Bottom */}
      <div style={{ padding: '12px 14px', borderTop: '1px solid #2D1F5E', flexShrink: 0 }}>
        <p style={{ fontSize: 9, color: '#9B8EC4', marginBottom: 2 }}>jawgstar.eth</p>
        <span style={{ fontSize: 8, color: '#5A4A8A' }}>Base · Pro</span>
      </div>
    </div>
  )
}
