import { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { PipelineNodeState, StatusType } from '../../constants/data'
import { StatusPill } from '../shared/StatusPill'
import { Pipeline } from './Pipeline'

export type OverviewState = 'processing' | 'blocked' | 'slippage'

export interface LogLine {
  ts: string
  text: string
  color: string
}

export interface MonitorCardConfig {
  status: StatusType
  statusLabel: string
  nodes: PipelineNodeState[]
  connectors: ('green' | 'blue' | 'gray' | 'red')[]
  logs: LogLine[]
  link?: { text: string; to: string; state?: unknown }
  agent?: {
    label: string
    target: string
    amount: string
    accentColor?: string
  }
}

type AgentInfo = NonNullable<MonitorCardConfig['agent']>

const LOG_KEYFRAMES = `
  @keyframes logLineIn {
    from { opacity: 0; transform: translateY(4px); }
    to   { opacity: 1; transform: translateY(0); }
  }
`

const DEFAULT_AGENT: AgentInfo = {
  label: 'TRADING AGENT',
  target: 'weatherapi.eth · Hook swap TX',
  amount: '0.001 USDC',
}

const CONFIGS: Record<OverviewState, MonitorCardConfig> = {
  processing: {
    status: 'PROCESSING', statusLabel: '● PROCESSING',
    nodes: ['done', 'active', 'wait', 'wait'],
    connectors: ['green', 'blue', 'gray'],
    logs: [
      { ts: '02:14:33', text: '✓ 402 received — amount: 0.001 USDC · token: USDC · network: Sepolia', color: '#A8FF3E' },
      { ts: '',         text: '   payTo: 0xWeatherAPI...f3d · resource: /api/weather · expiresAt: +30s', color: '#5A4A8A' },
      { ts: '02:14:34', text: '→ Contract audit — querying local LLM cache...', color: '#378ADD' },
      { ts: '',         text: '   hook: 0xUniV4Hook...a2c · checking bytecode + permission flags', color: '#5A4A8A' },
      { ts: '—',        text: '○ x402 payment · post-audit', color: '#2D1F5E' },
    ],
  },
  blocked: {
    status: 'BLOCKED', statusLabel: '✕ BLOCKED',
    nodes: ['done', 'block', 'wait', 'wait'],
    connectors: ['green', 'red', 'gray'],
    logs: [
      { ts: '02:14:33', text: '✓ 402 received — amount: 0.001 USDC · token: USDC · network: Sepolia', color: '#A8FF3E' },
      { ts: '',         text: '   payTo: 0xWeatherAPI...f3d · resource: /api/weather · expiresAt: +30s', color: '#5A4A8A' },
      { ts: '02:14:34', text: '✕ Contract audit FAILED — hook permission mismatch', color: '#FF4444' },
      { ts: '',         text: '   MODIFY_LP not declared in x402 requirement', color: '#FF4444' },
      { ts: '02:14:34', text: '✕ Payment halted — agent notified', color: '#FF4444' },
    ],
  },
  slippage: {
    status: 'SLIPPAGE', statusLabel: '⚠ SLIPPAGE',
    nodes: ['done', 'done', 'done', 'warn'],
    connectors: ['green', 'green', 'green'],
    logs: [
      { ts: '02:14:33', text: '✓ 402 received · contract audit pass · risk: 0.08', color: '#A8FF3E' },
      { ts: '02:14:35', text: '✓ x402 payment executed — tx: 0xA4f2...8c3d', color: '#A8FF3E' },
      { ts: '02:14:36', text: '⚠ Post-audit — slippage anomaly detected', color: '#FFE600' },
      { ts: '',         text: '   expected: ≥ 0.000950 USDC · actual: 0.000310 USDC', color: '#FFE600' },
      { ts: '',         text: '   slippage: 67.4% · threshold: 5.0% → ESCROW HOLD triggered', color: '#FF4444' },
    ],
    link: { text: '→ View Post-Audit Report', to: '/audit/post' },
  },
}

interface MonitorCardProps {
  state?: OverviewState
  override?: MonitorCardConfig
}

export function MonitorCard({ state = 'processing', override }: MonitorCardProps) {
  const navigate = useNavigate()
  const cfg = override ?? CONFIGS[state]
  const agent = cfg.agent ?? DEFAULT_AGENT
  const accent = agent.accentColor ?? '#378ADD'

  const logScrollRef = useRef<HTMLDivElement | null>(null)
  useEffect(() => {
    const el = logScrollRef.current
    if (el) el.scrollTop = el.scrollHeight
  }, [cfg.logs])

  return (
    <div style={{
      background: '#0E0B22', border: '1px solid #2D1F5E',
      borderRadius: 8, overflow: 'hidden', marginBottom: 12,
      height: 280, position: 'relative',
    }}>
      {/* Top accent */}
      <div style={{ height: 3, background: accent }} />

      {/* Agent row */}
      <div style={{
        height: 44, background: '#13102E', borderBottom: '1px solid #2D1F5E',
        display: 'flex', alignItems: 'center', padding: '0 14px', gap: 10,
      }}>
        <span style={{ fontFamily: "'Press Start 2P', monospace", fontSize: 9, color: '#F2E7FF' }}>{agent.label}</span>
        <span style={{ fontSize: 10, color: '#9B8EC4', flex: 1 }}>{agent.target}</span>
        <span style={{ fontSize: 10, color: '#FFE600', fontWeight: 700 }}>{agent.amount}</span>
        <StatusPill status={cfg.status} label={cfg.statusLabel} />
      </div>

      {/* Body */}
      <div style={{ padding: 14, height: 'calc(280px - 3px - 44px)', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        <Pipeline nodes={cfg.nodes} connectors={cfg.connectors} />

        {/* Step Detail */}
        <div style={{ borderTop: '1px solid #2D1F5E', paddingTop: 10, flex: 1, minHeight: 0, display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontFamily: "'Press Start 2P', monospace", fontSize: 6, color: '#5A4A8A', letterSpacing: '0.14em', marginBottom: 8 }}>
            STEP DETAIL
          </div>
          <div ref={logScrollRef} style={{ flex: 1, overflowY: 'auto', minHeight: 0 }}>
            <style>{LOG_KEYFRAMES}</style>
            {cfg.logs.map((log, i) => (
              <div key={i} style={{
                display: 'flex', gap: 10, marginBottom: 3,
                fontSize: 10, lineHeight: 1.5,
                animation: 'logLineIn 280ms ease-out',
              }}>
                <span style={{ color: '#5A4A8A', flexShrink: 0, width: 58, fontSize: 9 }}>{log.ts}</span>
                <span style={{ color: log.color }}>{log.text}</span>
              </div>
            ))}
            {cfg.link && (
              <span
                onClick={() => navigate(cfg.link!.to, cfg.link!.state ? { state: cfg.link!.state } : undefined)}
                style={{ color: '#FFE600', cursor: 'pointer', fontSize: 9, textDecoration: 'underline', display: 'block', paddingLeft: 68, marginTop: 4 }}
              >
                {cfg.link.text}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
