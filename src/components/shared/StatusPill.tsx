import { StatusType } from '../../constants/data'

const STATUS_CONFIG: Record<StatusType, { bg: string; border: string; color: string }> = {
  ALLOW:      { bg: 'rgba(46,122,0,0.15)',    border: '#A8FF3E', color: '#A8FF3E' },
  PASS:       { bg: 'rgba(46,122,0,0.15)',    border: '#A8FF3E', color: '#A8FF3E' },
  BLOCK:      { bg: 'rgba(255,68,68,0.15)',   border: '#FF4444', color: '#FF4444' },
  BLOCKED:    { bg: 'rgba(255,68,68,0.15)',   border: '#FF4444', color: '#FF4444' },
  WARN:       { bg: 'rgba(255,230,0,0.15)',   border: '#FFE600', color: '#FFE600' },
  SLIPPAGE:   { bg: 'rgba(255,230,0,0.15)',   border: '#FFE600', color: '#FFE600' },
  HOLD:       { bg: 'rgba(255,230,0,0.15)',   border: '#FFE600', color: '#FFE600' },
  PROCESSING: { bg: 'rgba(55,138,221,0.15)',  border: '#378ADD', color: '#378ADD' },
  CACHE:      { bg: 'rgba(127,119,221,0.15)', border: '#7F77DD', color: '#7F77DD' },
}

interface StatusPillProps {
  status: StatusType
  label?: string
}

export function StatusPill({ status, label }: StatusPillProps) {
  const cfg = STATUS_CONFIG[status]
  return (
    <span style={{
      display: 'inline-flex',
      alignItems: 'center',
      padding: '3px 10px',
      borderRadius: 3,
      border: `1px solid ${cfg.border}`,
      background: cfg.bg,
      color: cfg.color,
      fontFamily: "'Press Start 2P', monospace",
      fontSize: 7,
      letterSpacing: '0.06em',
      whiteSpace: 'nowrap',
    }}>
      {label ?? status}
    </span>
  )
}
