import { useNavigate } from 'react-router-dom'
import { EscrowHistoryEntry } from '../../state/escrowHistory'
import { shortfallPct } from '../../data/escrow-fixtures'
import { SEPOLIA_EXPLORER, explorerForChain } from '../../constants/data'
import { severityColor, FindingsBreakdown, VulnerabilityCard, SectionHeader } from '../audit/shared'

interface Props {
  entry: EscrowHistoryEntry | null
}

export function EscrowDetailView({ entry }: Props) {
  if (!entry) return <PlaceholderPanel />
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <Hero entry={entry} />
      {entry.explainer && <ExplainerCard text={entry.explainer} />}
      <TradeSnapshot entry={entry} />
      <AuditDecision entry={entry} />
      <SettlementFlow entry={entry} />
      <BalancesTable entry={entry} />
      {entry.audit.vulnerabilities.length > 0 && (
        <>
          <FindingsBreakdown audit={entry.audit} />
          <SectionHeader>POST-AUDIT FINDINGS · {entry.audit.vulnerabilities.length}</SectionHeader>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {entry.audit.vulnerabilities.map((v, i) => (
              <VulnerabilityCard key={v.id} v={v} index={i + 1} total={entry.audit.vulnerabilities.length} />
            ))}
          </div>
        </>
      )}
      {entry.narration && entry.narration.length > 0 && (
        <NarrationCard lines={entry.narration} elapsedMs={entry.elapsedMs} />
      )}
    </div>
  )
}

function ExplainerCard({ text }: { text: string }) {
  return (
    <div style={{
      background: '#13102E', border: '1px solid #2D1F5E',
      borderLeft: '3px solid #7F77DD', borderRadius: 8,
      padding: '12px 14px',
      fontSize: 12, color: '#F2E7FF', lineHeight: 1.7,
    }}>
      <div style={{
        fontFamily: "'Press Start 2P', monospace", fontSize: 6,
        color: '#7F77DD', letterSpacing: '0.14em', marginBottom: 8,
      }}>
        WHAT HAPPENED
      </div>
      {text}
    </div>
  )
}

function NarrationCard({ lines, elapsedMs }: { lines: string[]; elapsedMs?: number }) {
  return (
    <div style={{
      background: '#0E0B22', border: '1px solid #2D1F5E',
      borderLeft: '3px solid #FF8A4D', borderRadius: 8,
      padding: '12px 14px',
    }}>
      <div style={{
        display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10,
      }}>
        <span style={{
          fontFamily: "'Press Start 2P', monospace", fontSize: 7,
          color: '#FF8A4D', letterSpacing: '0.14em',
        }}>
          AGENT NARRATION · {lines.length} STEPS
        </span>
        <span style={{ flex: 1 }} />
        {elapsedMs != null && (
          <span style={{
            fontFamily: "'IBM Plex Mono', monospace", fontSize: 9,
            color: '#5A4A8A',
          }}>
            settled in {(elapsedMs / 1000).toFixed(1)}s
          </span>
        )}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        {lines.map((line, i) => (
          <div key={i} style={{
            display: 'flex', alignItems: 'baseline', gap: 8,
            fontSize: 10.5, lineHeight: 1.55,
            color: '#9B8EC4',
            fontFamily: "'IBM Plex Mono', monospace",
          }}>
            <span style={{ color: '#5A4A8A', width: 22, flexShrink: 0, textAlign: 'right' }}>
              {String(i + 1).padStart(2, '0')}
            </span>
            <span>{line}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function PlaceholderPanel() {
  return (
    <div style={{
      background: '#0E0B22', border: '1px dashed #2D1F5E',
      borderRadius: 10, padding: 32,
      textAlign: 'center',
      fontSize: 12, color: '#5A4A8A', lineHeight: 1.6,
    }}>
      Select an escrow on the left to view its full audit decision and settlement detail.
    </div>
  )
}

function Hero({ entry }: { entry: EscrowHistoryEntry }) {
  const isClaim = entry.chosenAction === 'BLOCK_AND_CLAIM'
  const accent = isClaim ? '#FF4444' : '#A8FF3E'
  const headline = isClaim ? '✕ CLAIM PAID' : '✓ RELEASED'
  // Swap tx is live for both 'live' source and fixture entries that point at real mainnet hashes.
  const txExplorer = explorerForChain(entry.chain)
  const txLinksLive = entry.source === 'live' || entry.chain === 'mainnet'
  const tradeUrl = `${txExplorer}/tx/${entry.swapTxHash}`

  return (
    <div style={{
      background: '#0E0B22',
      border: `1px solid ${accent}`,
      borderRadius: 10, overflow: 'hidden',
    }}>
      <div style={{ height: 4, background: accent }} />
      <div style={{ padding: 18 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
          <span style={{
            fontFamily: "'Press Start 2P', monospace", fontSize: 14,
            color: accent, letterSpacing: '0.06em',
            textShadow: `0 0 12px ${accent}55`,
          }}>
            ESCROW · {headline}
          </span>
          <span style={{ flex: 1 }} />
          <span style={{
            fontFamily: "'Press Start 2P', monospace", fontSize: 7,
            color: accent, letterSpacing: '0.08em',
            padding: '4px 8px', borderRadius: 3,
            border: `1px solid ${accent}`, background: `${accent}14`,
          }}>
            {entry.finalEscrowState.toUpperCase()}
          </span>
        </div>

        <div style={{
          fontFamily: "'IBM Plex Mono', monospace",
          fontSize: 12, color: '#F2E7FF', wordBreak: 'break-all',
          marginBottom: 8,
        }}>
          tradeId · {entry.tradeId}
        </div>

        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, fontSize: 10,
        }}>
          <KV k="subject"      v={entry.subject} />
          <KV k="beneficiary"  v={entry.beneficiary} />
          <KV k="vault"        v={entry.vault} />
          <KV k="auditAgent"   v={entry.auditor} />
          <KV k="policyHash"   v={entry.policyHash} />
          <KV k="evidenceHash" v={entry.evidenceHash} />
        </div>

        <div style={{ display: 'flex', gap: 6, marginTop: 12, flexWrap: 'wrap', alignItems: 'center' }}>
          {txLinksLive ? (
            <>
              <a href={tradeUrl} target="_blank" rel="noreferrer" style={LINK_STYLE}>↗ swap tx</a>
              <span style={{
                fontSize: 9, color: '#5A4A8A',
                padding: '3px 8px', borderRadius: 3,
                border: '1px dashed #2D1F5E',
                fontFamily: "'Press Start 2P', monospace", letterSpacing: '0.08em',
              }}>
                decision tx · synthetic
              </span>
            </>
          ) : (
            <span style={{
              fontSize: 9, color: '#5A4A8A',
              padding: '3px 8px', borderRadius: 3,
              border: '1px dashed #2D1F5E',
              fontFamily: "'Press Start 2P', monospace", letterSpacing: '0.08em',
            }}>
              FORK TX (no live etherscan link)
            </span>
          )}
          <a href={`${SEPOLIA_EXPLORER}/address/${entry.vault}`} target="_blank" rel="noreferrer" style={LINK_STYLE}>↗ vault (sepolia)</a>
          <a href={`${SEPOLIA_EXPLORER}/address/${entry.insurancePool}`} target="_blank" rel="noreferrer" style={LINK_STYLE}>↗ insurance (sepolia)</a>
        </div>
      </div>
    </div>
  )
}

function TradeSnapshot({ entry }: { entry: EscrowHistoryEntry }) {
  const sf = shortfallPct(entry)
  const isClaim = entry.chosenAction === 'BLOCK_AND_CLAIM'
  const expNum = parseFloat(entry.expectedOutput)
  const actNum = parseFloat(entry.pendingOutputAegis)
  const ratio = expNum > 0 ? Math.max(0, Math.min(1, actNum / expNum)) : 0

  return (
    <Section title="TRADE EXECUTION" accent="#7F77DD">
      <div style={{
        display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
        gap: 14, alignItems: 'center', marginBottom: 12,
      }}>
        <Stat label="INPUT" value={`${entry.amountIn} USDT`} color="#F2E7FF" />
        <Stat label="EXPECTED" value={`${entry.expectedOutput} AEGIS`} color="#F2E7FF" />
        <Stat label="ACTUAL" value={`${actNum.toFixed(4)} AEGIS`} color={isClaim ? '#FF4444' : '#A8FF3E'} highlight />
        <Stat label="Δ" value={isClaim ? `−${sf.toFixed(2)}%` : '0%'} color={isClaim ? '#FF4444' : '#A8FF3E'} highlight />
      </div>
      <div style={{
        height: 10, background: '#2D1F5E', borderRadius: 5, overflow: 'hidden', marginBottom: 8,
      }}>
        <div style={{
          height: '100%',
          width: `${ratio * 100}%`,
          background: isClaim ? '#FF4444' : '#A8FF3E',
          borderRadius: 5,
          transition: 'width 600ms ease-out',
        }} />
      </div>
      <div style={{ fontSize: 9, color: '#5A4A8A', textAlign: 'right' }}>
        actual / expected = {(ratio * 100).toFixed(2)}%
      </div>
      {entry.scenario === 'sandwich' && entry.attackerFrontRunUsdt && (
        <div style={{
          marginTop: 10,
          padding: '8px 10px', background: 'rgba(255,68,68,0.06)',
          border: '1px dashed #FF4444', borderRadius: 6,
          fontSize: 10, color: '#FF8A4D',
        }}>
          MEV: front-run {entry.attackerFrontRunUsdt} USDT → AEGIS · back-run {entry.attackerBackRunAegis} AEGIS → USDT
        </div>
      )}
    </Section>
  )
}

function AuditDecision({ entry }: { entry: EscrowHistoryEntry }) {
  const audit = entry.audit
  const sevColor = severityColor(audit.overall_severity)
  const isClaim = entry.chosenAction === 'BLOCK_AND_CLAIM'
  const actionColor = isClaim ? '#FF4444' : '#A8FF3E'
  const navigate = useNavigate()

  return (
    <Section title="POST-AUDIT VERDICT" accent={sevColor}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 10 }}>
        <div style={{
          fontFamily: "'Press Start 2P', monospace", fontSize: 6,
          color: '#5A4A8A', letterSpacing: '0.16em',
          display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: 44,
        }}>
          RISK
          <span style={{ fontSize: 22, color: sevColor, marginTop: 4, lineHeight: 1 }}>
            {audit.overall_risk_score}
          </span>
          <span style={{ fontSize: 7, color: '#5A4A8A', marginTop: 4 }}>/ 100</span>
        </div>
        <div style={{ flex: 1 }}>
          <div style={{
            fontFamily: "'Press Start 2P', monospace", fontSize: 8,
            color: sevColor, letterSpacing: '0.08em', marginBottom: 4,
          }}>
            {audit.overall_severity.toUpperCase()}
          </div>
          <div style={{ fontSize: 11, color: '#9B8EC4', lineHeight: 1.6 }}>
            {audit.overall_summary}
          </div>
        </div>
      </div>

      <div style={{
        display: 'grid', gridTemplateColumns: 'auto 1fr', gap: 10,
        padding: '10px 12px', background: '#13102E',
        border: `1px solid ${actionColor}`, borderRadius: 6,
        marginBottom: 10,
      }}>
        <div style={{
          padding: '6px 10px', borderRadius: 4,
          fontFamily: "'Press Start 2P', monospace", fontSize: 7,
          color: '#5A4A8A', border: '1px solid #2D1F5E', background: '#0A0818',
          letterSpacing: '0.1em', alignSelf: 'center',
        }}>
          POLICY
        </div>
        <div style={{ fontSize: 11, color: '#9B8EC4', alignSelf: 'center' }}>
          severity <code style={{ color: sevColor }}>{audit.overall_severity}</code> →
          <span style={{ color: actionColor, fontWeight: 700, marginLeft: 6 }}>
            {entry.chosenAction}
          </span>
        </div>
      </div>

      <KvBlock title="STANDARD AUDITDECISION (executed)" accent={actionColor}>
        <Kv k="action"       v={`${entry.chosenAction} (${entry.chosenAction === 'RELEASE' ? '0' : '1'})`} accent={actionColor} mono />
        <Kv k="reason"       v={`bytes32("${entry.reasonCode}")`} mono />
        <Kv k="evidenceHash" v={entry.evidenceHash} mono />
        <Kv k="actionData"   v="0x" mono />
      </KvBlock>

      <div style={{ marginTop: 10 }}>
        <button
          onClick={() => navigate('/audit/post', { state: { audit, txHash: entry.swapTxHash, subject: entry.subject } })}
          style={{
            background: 'transparent',
            border: `1px solid ${sevColor}`,
            color: sevColor,
            padding: '6px 14px', borderRadius: 4,
            cursor: 'pointer',
            fontFamily: "'Press Start 2P', monospace", fontSize: 7,
            letterSpacing: '0.08em',
          }}
        >
          → OPEN POST-AUDIT REPORT
        </button>
      </div>
    </Section>
  )
}

function SettlementFlow({ entry }: { entry: EscrowHistoryEntry }) {
  const isClaim = entry.chosenAction === 'BLOCK_AND_CLAIM'
  return (
    <Section title="SETTLEMENT FLOW" accent={isClaim ? '#FF4444' : '#A8FF3E'}>
      {isClaim ? <ClaimDiagram entry={entry} /> : <ReleaseDiagram entry={entry} />}
    </Section>
  )
}

function ReleaseDiagram({ entry }: { entry: EscrowHistoryEntry }) {
  return (
    <div style={{
      padding: '14px 16px', background: '#13102E',
      border: '1px solid #A8FF3E', borderRadius: 6,
      fontSize: 12, color: '#A8FF3E', lineHeight: 1.8,
    }}>
      <div style={{ marginBottom: 6 }}>
        <b>VAULT</b> ━━ <code>{parseFloat(entry.pendingOutputAegis).toFixed(4)} AEGIS</code> ━━▶ <b>USER (settlement recipient)</b>
      </div>
      <div style={{ fontSize: 10, color: '#9B8EC4' }}>
        Net: user received the expected swap output. No insurance involvement.
      </div>
    </div>
  )
}

function ClaimDiagram({ entry }: { entry: EscrowHistoryEntry }) {
  return (
    <div style={{
      padding: '14px 16px', background: '#13102E',
      border: '1px solid #FF4444', borderRadius: 6,
      display: 'flex', flexDirection: 'column', gap: 10,
      fontSize: 12, lineHeight: 1.8,
    }}>
      <div style={{ color: '#FF4444' }}>
        <b>VAULT</b> ━━ <code>{parseFloat(entry.pendingOutputAegis).toFixed(4)} AEGIS</code> (recovered) ━━▶ <b style={{ color: '#FFE600' }}>INSURANCE POOL</b>
      </div>
      <div style={{ color: '#A8FF3E' }}>
        <b style={{ color: '#FFE600' }}>INSURANCE POOL</b> ━━ <code>{entry.amountIn} USDT</code> (claim refund) ━━▶ <b>USER</b>
      </div>
      <div style={{ fontSize: 10, color: '#9B8EC4', borderTop: '1px dashed #2D1F5E', paddingTop: 8 }}>
        Net: user principal recovered from insurance reserves. Insurance absorbed the bad swap output as bad debt.
      </div>
    </div>
  )
}

function BalancesTable({ entry }: { entry: EscrowHistoryEntry }) {
  const rows: { actor: string; symbol: string; current: string; note?: string; noteColor?: string }[] = [
    { actor: 'USER',      symbol: 'USDT',  current: entry.balances.userUsdt },
    { actor: 'USER',      symbol: 'AEGIS', current: entry.balances.userAegis,
      note: entry.chosenAction === 'BLOCK_AND_CLAIM' ? 'escrowed output recovered' : undefined,
      noteColor: '#FF8A4D' },
    { actor: 'VAULT',     symbol: 'AEGIS', current: entry.balances.vaultAegis,
      note: entry.finalEscrowState === 'Released'  ? 'released to user' :
            entry.finalEscrowState === 'ClaimPaid' ? 'forwarded to insurance' : undefined,
      noteColor: entry.finalEscrowState === 'Released' ? '#A8FF3E' : '#FF8A4D' },
    { actor: 'INSURANCE', symbol: 'USDT',  current: entry.balances.insuranceUsdt,
      note: entry.chosenAction === 'BLOCK_AND_CLAIM' ? `−${entry.amountIn} refund + protection fee` : '+protection fee',
      noteColor: entry.chosenAction === 'BLOCK_AND_CLAIM' ? '#FF4444' : '#A8FF3E' },
    { actor: 'INSURANCE', symbol: 'AEGIS', current: entry.balances.insuranceAegis,
      note: entry.chosenAction === 'BLOCK_AND_CLAIM' ? `+${parseFloat(entry.pendingOutputAegis).toFixed(2)} recovered` : undefined,
      noteColor: '#A8FF3E' },
  ]
  return (
    <Section title="BALANCES · POST-DECISION" accent="#7F77DD">
      <div style={{
        display: 'grid', gridTemplateColumns: '1fr 1fr 1.6fr 2fr',
        gap: 0, fontSize: 9,
        fontFamily: "'Press Start 2P', monospace",
        color: '#5A4A8A', letterSpacing: '0.12em',
        padding: '6px 10px', borderBottom: '1px solid #2D1F5E',
        background: '#13102E',
      }}>
        <span>ACTOR</span>
        <span>TOKEN</span>
        <span style={{ textAlign: 'right' }}>CURRENT</span>
        <span style={{ textAlign: 'right' }}>NOTE</span>
      </div>
      {rows.map((r, i) => (
        <div key={i} style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr 1.6fr 2fr',
          gap: 0, fontSize: 10,
          padding: '8px 10px',
          borderBottom: i === rows.length - 1 ? 'none' : '1px solid rgba(45,31,94,0.4)',
          fontFamily: "'IBM Plex Mono', monospace",
        }}>
          <span style={{ color: '#9B8EC4' }}>{r.actor}</span>
          <span style={{ color: '#7F77DD' }}>{r.symbol}</span>
          <span style={{ color: '#F2E7FF', textAlign: 'right' }}>{fmtBal(r.current)}</span>
          <span style={{
            color: r.noteColor ?? '#5A4A8A',
            textAlign: 'right', fontSize: 9,
            fontFamily: 'inherit',
          }}>
            {r.note ?? '—'}
          </span>
        </div>
      ))}
    </Section>
  )
}

// Small primitives -----------------------------------------------------------

function Section({ title, accent, children }: { title: string; accent: string; children: React.ReactNode }) {
  return (
    <div style={{
      background: '#0E0B22', border: '1px solid #2D1F5E',
      borderLeft: `3px solid ${accent}`,
      borderRadius: 10, padding: 14,
    }}>
      <div style={{
        fontFamily: "'Press Start 2P', monospace", fontSize: 7,
        color: accent, letterSpacing: '0.14em', marginBottom: 12,
      }}>
        {title}
      </div>
      {children}
    </div>
  )
}

function KV({ k, v }: { k: string; v: string }) {
  return (
    <div style={{ display: 'flex', gap: 6, alignItems: 'baseline' }}>
      <span style={{ color: '#5A4A8A', minWidth: 90, fontFamily: "'Press Start 2P', monospace", fontSize: 6, letterSpacing: '0.14em' }}>{k}</span>
      <span style={{ color: '#F2E7FF', wordBreak: 'break-all', fontFamily: "'IBM Plex Mono', monospace", fontSize: 10 }}>{v}</span>
    </div>
  )
}

function KvBlock({ title, accent, children }: { title: string; accent: string; children: React.ReactNode }) {
  return (
    <div style={{
      background: '#13102E', border: `1px solid ${accent}`,
      borderLeft: `3px solid ${accent}`, borderRadius: 6,
      padding: '10px 12px',
    }}>
      <div style={{
        fontFamily: "'Press Start 2P', monospace", fontSize: 6,
        color: accent, letterSpacing: '0.14em', marginBottom: 8,
      }}>
        {title}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        {children}
      </div>
    </div>
  )
}

function Kv({ k, v, accent, mono }: { k: string; v: string; accent?: string; mono?: boolean }) {
  return (
    <div style={{ display: 'flex', gap: 8, fontSize: 10 }}>
      <span style={{ color: '#5A4A8A', width: 100, flexShrink: 0 }}>{k}</span>
      <span style={{
        color: accent ?? '#F2E7FF',
        fontFamily: mono ? "'IBM Plex Mono', monospace" : undefined,
        wordBreak: 'break-all', flex: 1,
      }}>{v}</span>
    </div>
  )
}

function Stat({ label, value, color, highlight }: { label: string; value: string; color: string; highlight?: boolean }) {
  return (
    <div>
      <div style={{
        fontFamily: "'Press Start 2P', monospace", fontSize: 6,
        color: '#5A4A8A', letterSpacing: '0.14em', marginBottom: 4,
      }}>
        {label}
      </div>
      <div style={{
        fontSize: highlight ? 14 : 12, color,
        fontFamily: "'IBM Plex Mono', monospace",
        fontWeight: highlight ? 700 : 400,
      }}>
        {value}
      </div>
    </div>
  )
}

function fmtBal(v: string): string {
  const n = parseFloat(v)
  if (!isFinite(n)) return v
  const abs = Math.abs(n)
  if (abs >= 1000) return n.toLocaleString('en-US', { maximumFractionDigits: 2 })
  if (abs >= 1)    return n.toLocaleString('en-US', { maximumFractionDigits: 4 })
  return n.toString()
}

const LINK_STYLE: React.CSSProperties = {
  fontSize: 9, color: '#7F77DD', textDecoration: 'none',
  padding: '3px 8px', borderRadius: 3,
  border: '1px solid #2D1F5E',
  background: 'rgba(127,119,221,0.08)',
}
