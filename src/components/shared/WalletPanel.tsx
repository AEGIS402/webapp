import { WALLET_DATA } from '../../constants/data'
import { AgentInterceptModal } from '../agent/AgentInterceptModal'
import { useAuditModal } from '../../state/auditModal'
import { useWallet, TOKEN_META, TokenSymbol } from '../../state/wallet'

interface WalletPanelProps {
  escrowActive?: boolean
}

export function WalletPanel({ escrowActive = false }: WalletPanelProps) {
  const w = WALLET_DATA
  const { state } = useAuditModal()
  const { balances, reset } = useWallet()
  const dim = state.phase !== 'hidden'

  return (
    <div style={{
      width: 300, flexShrink: 0, height: '100%',
      background: '#0E0B22', borderLeft: '1px solid #2D1F5E',
      position: 'relative',
    }}>
      <div style={{
        position: 'absolute', inset: 0, overflowY: 'auto',
        opacity: dim ? 0.18 : 1,
        filter: dim ? 'blur(1px) saturate(0.7)' : 'none',
        transition: 'opacity 220ms, filter 220ms',
        pointerEvents: dim ? 'none' : 'auto',
      }}>
      {/* Header */}
      <div style={{
        height: 44, background: '#13102E', borderBottom: '1px solid #2D1F5E',
        padding: '0 14px', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <span style={{ fontFamily: "'Press Start 2P', monospace", fontSize: 7, color: '#5A4A8A', letterSpacing: '0.14em' }}>WALLET</span>
        <span style={{
          padding: '2px 8px', borderRadius: 3, border: '1px solid #378ADD',
          background: 'rgba(55,138,221,0.12)', color: '#378ADD',
          fontFamily: "'Press Start 2P', monospace", fontSize: 7,
        }}>Sepolia</span>
      </div>

      {/* Address */}
      <Section>
        <div style={{ background: '#13102E', border: '1px solid #2D1F5E', borderRadius: 6, padding: '8px 12px' }}>
          <div style={{ fontSize: 10, fontWeight: 700, color: '#7F77DD', marginBottom: 2 }}>{w.name}</div>
          <div style={{ fontSize: 8, color: '#5A4A8A' }}>{w.address}</div>
        </div>
      </Section>

      {/* Balance */}
      <Section label="BALANCE">
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 6, marginBottom: 4 }}>
          <span style={{ fontFamily: "'Press Start 2P', monospace", fontSize: 22, color: '#A8FF3E' }}>{w.balance}</span>
          <span style={{ fontSize: 11, color: '#9B8EC4' }}>ETH</span>
        </div>
        <div style={{ fontSize: 9, color: '#5A4A8A' }}>{w.balanceUSD}</div>
      </Section>

      {/* Tokens */}
      <Section label="TOKENS" rightSlot={
        <button
          onClick={reset}
          style={{
            background: 'transparent', border: 'none', cursor: 'pointer',
            color: '#5A4A8A',
            fontFamily: "'Press Start 2P', monospace", fontSize: 6,
            letterSpacing: '0.1em',
          }}
        >
          RESET
        </button>
      }>
        {TOKEN_META.map(tok => (
          <TokenRow key={tok.symbol} symbol={tok.symbol} color={tok.color} priceUsd={tok.priceUsd} balance={balances[tok.symbol]} />
        ))}
      </Section>

      {/* Spend Limit */}
      <Section label="SPEND LIMIT">
        <div style={{ height: 5, background: '#2D1F5E', borderRadius: 3, overflow: 'hidden', marginBottom: 6 }}>
          <div style={{ height: '100%', background: '#A8FF3E', width: `${(w.spendLimit.current / w.spendLimit.max) * 100}%`, borderRadius: 3 }} />
        </div>
        <div style={{ fontSize: 8, color: '#9B8EC4' }}>{w.spendLimit.current} / {w.spendLimit.max} {w.spendLimit.unit}</div>
      </Section>

      {/* Activity */}
      <Section label="RECENT ACTIVITY">
        {w.activity.map(a => (
          <div key={a.name} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
            <span style={{ fontSize: 9, color: '#9B8EC4' }}>{a.name}</span>
            <span style={{ fontSize: 9, color: a.positive ? '#A8FF3E' : '#FF4444' }}>{a.amount}</span>
          </div>
        ))}
      </Section>

      {/* Escrow Hold (conditional) */}
      {escrowActive && (
        <Section label="ESCROW HOLD">
          <div style={{ background: 'rgba(255,230,0,0.1)', border: '1px solid #FFE600', borderRadius: 6, padding: '8px 12px' }}>
            <div style={{ fontFamily: "'Press Start 2P', monospace", fontSize: 9, color: '#FFE600', marginBottom: 4 }}>0.001 USDC</div>
            <div style={{ fontSize: 8, color: '#FFE600' }}>⚠ 1 tx on hold</div>
          </div>
        </Section>
      )}

      {/* AEGIS GUARD */}
      <Section>
        <div style={{
          borderRadius: 8, padding: '10px 12px',
          background: escrowActive ? 'rgba(255,230,0,0.1)' : 'rgba(46,122,0,0.15)',
          border: `1px solid ${escrowActive ? '#FFE600' : '#A8FF3E'}`,
          color: escrowActive ? '#FFE600' : '#A8FF3E',
        }}>
          <div style={{ fontFamily: "'Press Start 2P', monospace", fontSize: 7, fontWeight: 700, marginBottom: 6 }}>AEGIS GUARD</div>
          <div style={{ fontSize: 8 }}>{escrowActive ? '⚠ 1 escrow hold active' : '● ACTIVE — 0 threats'}</div>
        </div>
      </Section>
      </div>

      <AgentInterceptModal />
    </div>
  )
}

function Section({
  label, rightSlot, children,
}: {
  label?: string
  rightSlot?: React.ReactNode
  children: React.ReactNode
}) {
  return (
    <div style={{ padding: '10px 14px', borderBottom: '1px solid #2D1F5E' }}>
      {label && (
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          marginBottom: 8,
        }}>
          <span style={{ fontFamily: "'Press Start 2P', monospace", fontSize: 6, color: '#5A4A8A', letterSpacing: '0.14em' }}>
            {label}
          </span>
          {rightSlot}
        </div>
      )}
      {children}
    </div>
  )
}

function TokenRow({ symbol, color, priceUsd, balance }: { symbol: TokenSymbol; color: string; priceUsd: number; balance: number }) {
  const usd = priceUsd > 0 ? `$${(balance * priceUsd).toLocaleString('en-US', { maximumFractionDigits: 2 })}` : '—'
  const amount = formatBalance(balance, symbol)
  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: 8,
      background: '#13102E', border: '1px solid #2D1F5E', borderRadius: 6,
      padding: '8px 12px', marginBottom: 6,
    }}>
      <span style={{ fontSize: 9, fontWeight: 700, color, width: 44 }}>{symbol}</span>
      <span style={{
        fontSize: 9, color: '#F2E7FF', flex: 1,
        fontFamily: "'IBM Plex Mono', monospace",
        transition: 'color 200ms',
      }}>
        {amount}
      </span>
      <span style={{ fontSize: 8, color: '#5A4A8A' }}>{usd}</span>
    </div>
  )
}

function formatBalance(n: number, symbol: TokenSymbol): string {
  if (n === 0) return '0'
  if (symbol === 'WETH') return n.toLocaleString('en-US', { maximumFractionDigits: 4 })
  if (n >= 1000) return n.toLocaleString('en-US', { maximumFractionDigits: 2 })
  return n.toLocaleString('en-US', { maximumFractionDigits: 4 })
}
