import { StatusPill } from '../shared/StatusPill'
import { StatusType } from '../../constants/data'
import { OverviewState } from './MonitorCard'

interface FeedRow {
  ts: string
  name: string
  amount: string
  status: StatusType
  highlight?: 'block' | 'hold'
}

const FEED_DATA: Record<OverviewState, FeedRow[]> = {
  processing: [
    { ts: '02:14:33', name: 'api.x402.io',   amount: '0.5 USDC',  status: 'ALLOW' },
    { ts: '02:14:29', name: 'defi.hook.eth', amount: '220K USDC', status: 'BLOCK', highlight: 'block' },
    { ts: '02:14:21', name: 'pay.agent.ai',  amount: '1.2 USDC',  status: 'WARN' },
  ],
  blocked: [
    { ts: '02:14:34', name: 'defi.hook.eth',  amount: '0.001 USDC', status: 'BLOCK', highlight: 'block' },
    { ts: '02:14:28', name: 'api.x402.io',    amount: '0.5 USDC',   status: 'ALLOW' },
    { ts: '02:14:21', name: 'pay.agent.ai',   amount: '1.2 USDC',   status: 'WARN' },
  ],
  slippage: [
    { ts: '02:14:36', name: 'weatherapi.eth', amount: '0.001 USDC', status: 'HOLD', highlight: 'hold' },
    { ts: '02:14:33', name: 'api.x402.io',    amount: '0.5 USDC',   status: 'ALLOW' },
    { ts: '02:14:29', name: 'defi.hook.eth',  amount: '220K USDC',  status: 'BLOCK', highlight: 'block' },
  ],
}

interface LiveFeedProps {
  state: OverviewState
}

export function LiveFeed({ state }: LiveFeedProps) {
  const rows = FEED_DATA[state]
  return (
    <div style={{ background: '#0E0B22', border: '1px solid #2D1F5E', borderRadius: 8, overflow: 'hidden' }}>
      <div style={{ height: 36, background: '#13102E', borderBottom: '1px solid #2D1F5E', display: 'flex', alignItems: 'center', padding: '0 16px' }}>
        <span style={{ fontFamily: "'Press Start 2P', monospace", fontSize: 7, color: '#5A4A8A' }}>█ LIVE FEED</span>
      </div>
      {rows.map((row, i) => (
        <div
          key={i}
          style={{
            display: 'flex', alignItems: 'center', padding: '0 16px', height: 66,
            borderBottom: i < rows.length - 1 ? '1px solid rgba(45,31,94,0.35)' : 'none',
            gap: 12,
            background: row.highlight === 'block' ? 'rgba(255,68,68,0.04)'
                       : row.highlight === 'hold'  ? 'rgba(255,230,0,0.04)'
                       : 'transparent',
          }}
        >
          <span style={{ fontSize: 9, color: '#5A4A8A', width: 68, flexShrink: 0 }}>{row.ts}</span>
          <span style={{ fontSize: 10, color: '#9B8EC4', flex: 1 }}>{row.name}</span>
          <span style={{ fontSize: 10, color: '#FFE600', width: 100 }}>{row.amount}</span>
          <StatusPill status={row.status} />
        </div>
      ))}
    </div>
  )
}
