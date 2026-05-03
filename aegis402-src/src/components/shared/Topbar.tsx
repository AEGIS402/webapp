import { BadgeColor } from '../../constants/data'

interface TopbarProps {
  title: string
  subtitle: string
  badgeColor?: BadgeColor
}

const BADGE_STYLES: Record<BadgeColor, { bg: string; border: string; color: string }> = {
  green:  { bg: 'rgba(46,122,0,0.2)',    border: '#A8FF3E', color: '#A8FF3E' },
  yellow: { bg: 'rgba(255,230,0,0.15)',  border: '#FFE600', color: '#FFE600' },
  red:    { bg: 'rgba(255,68,68,0.15)',  border: '#FF4444', color: '#FF4444' },
}

export function Topbar({ title, subtitle, badgeColor = 'green' }: TopbarProps) {
  const badge = BADGE_STYLES[badgeColor]
  return (
    <div style={{
      height: 56, flexShrink: 0, background: '#0E0B22',
      borderBottom: '1px solid #2D1F5E',
      display: 'flex', alignItems: 'center', padding: '0 24px', gap: 16,
    }}>
      <span style={{ fontFamily: "'Press Start 2P', monospace", fontSize: 12, color: '#F2E7FF' }}>
        {title}
      </span>
      <span style={{ fontSize: 11, color: '#5A4A8A', marginLeft: 8 }}>{subtitle}</span>
      <div style={{ flex: 1 }} />
      <div style={{
        display: 'flex', alignItems: 'center', gap: 6,
        padding: '4px 12px', borderRadius: 4,
        background: badge.bg, border: `1px solid ${badge.border}`,
        fontFamily: "'Press Start 2P', monospace", fontSize: 7,
        color: badge.color, letterSpacing: '0.1em',
      }}>
        <div style={{
          width: 6, height: 6, borderRadius: '50%', background: badge.color,
          ...(badgeColor === 'green' ? { animation: 'pulseDot 2s ease-in-out infinite' } : {}),
        }} />
        ONLINE
      </div>
      <style>{`
        @keyframes pulseDot {
          0%,100% { box-shadow: 0 0 0 0 rgba(168,255,62,0.4); }
          50%      { box-shadow: 0 0 0 4px rgba(168,255,62,0); }
        }
      `}</style>
    </div>
  )
}
