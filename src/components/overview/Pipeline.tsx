import { PipelineNodeState } from '../../constants/data'

const NODE_STYLE: Record<PipelineNodeState, { border: string; bg: string; color: string; glow: string }> = {
  done:   { border: '#A8FF3E', bg: 'rgba(46,122,0,0.18)',    color: '#A8FF3E', glow: 'rgba(168,255,62,0.35)' },
  active: { border: '#378ADD', bg: 'rgba(55,138,221,0.18)',  color: '#378ADD', glow: 'rgba(55,138,221,0.55)' },
  wait:   { border: '#2D1F5E', bg: 'rgba(45,31,94,0.1)',     color: '#5A4A8A', glow: 'transparent' },
  block:  { border: '#FF4444', bg: 'rgba(255,68,68,0.18)',   color: '#FF4444', glow: 'rgba(255,68,68,0.45)' },
  warn:   { border: '#FFE600', bg: 'rgba(255,230,0,0.18)',   color: '#FFE600', glow: 'rgba(255,230,0,0.4)' },
}

const CONN_STYLE: Record<string, string> = {
  green: '#A8FF3E',
  blue:  '#378ADD',
  gray:  '#2D1F5E',
  red:   '#FF4444',
}

const LABELS = ['402\nPARSED', 'CONTRACT\nAUDIT', 'x402\nPAYMENT', 'POST\nAUDIT']

interface PipelineProps {
  nodes: PipelineNodeState[]
  connectors: ('green' | 'blue' | 'gray' | 'red')[]
}

export function Pipeline({ nodes, connectors }: PipelineProps) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', marginBottom: 16 }}>
      <style>{KEYFRAMES}</style>
      {nodes.map((state, i) => {
        const style = NODE_STYLE[state]
        const isPulsing = state === 'active' || state === 'warn'
        return (
          <div key={i} style={{ display: 'flex', alignItems: 'center', flex: 1 }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
              {/* Node circle */}
              <div style={{
                width: 44, height: 44, borderRadius: '50%',
                border: `2px solid ${style.border}`,
                background: style.bg, color: style.color,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: "'Press Start 2P', monospace", fontSize: 11,
                flexShrink: 0,
                boxShadow: isPulsing ? `0 0 14px ${style.glow}` : state === 'done' || state === 'block' ? `0 0 6px ${style.glow}` : 'none',
                transition: 'box-shadow 200ms, border-color 200ms, background 200ms',
              }}>
                {state === 'done'   && '✓'}
                {state === 'block'  && '✕'}
                {state === 'active' && <PulsingDot color="#378ADD" />}
                {state === 'warn'   && <PulsingDot color="#FFE600" />}
                {state === 'wait'   && <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#2D1F5E', opacity: 0.5 }} />}
              </div>
              {/* Label */}
              <div style={{
                fontFamily: "'Press Start 2P', monospace", fontSize: 6,
                color: style.color, textAlign: 'center', lineHeight: 1.8, whiteSpace: 'nowrap',
              }}>
                {LABELS[i].split('\n').map((l, li) => <div key={li}>{l}</div>)}
              </div>
            </div>
            {/* Connector */}
            {i < nodes.length - 1 && (
              <Connector kind={connectors[i]} />
            )}
          </div>
        )
      })}
    </div>
  )
}

function Connector({ kind }: { kind: 'green' | 'blue' | 'gray' | 'red' }) {
  if (kind === 'blue') {
    return (
      <div style={{
        flex: 1, height: 2, marginBottom: 28, marginLeft: 4, marginRight: 4,
        background: 'repeating-linear-gradient(90deg, #378ADD 0, #378ADD 4px, transparent 4px, transparent 8px)',
        backgroundSize: '8px 100%',
        animation: 'pipelineFlow 0.8s linear infinite',
      }} />
    )
  }
  return (
    <div style={{
      flex: 1, height: 2, marginBottom: 28, marginLeft: 4, marginRight: 4,
      background: CONN_STYLE[kind] || '#2D1F5E',
      opacity: kind === 'gray' ? 0.35 : 0.65,
    }} />
  )
}

function PulsingDot({ color }: { color: string }) {
  return (
    <div style={{
      width: 10, height: 10, borderRadius: '50%', background: color,
      animation: 'pipelinePulse 1.4s ease-in-out infinite',
    }} />
  )
}

const KEYFRAMES = `
  @keyframes pipelinePulse {
    0%,100% { transform: scale(1); opacity: 1; }
    50%      { transform: scale(1.3); opacity: 0.6; }
  }
  @keyframes pipelineFlow {
    from { background-position: 0 0; }
    to   { background-position: 8px 0; }
  }
`
