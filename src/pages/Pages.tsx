import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { DashboardLayout } from './DashboardLayout'
import { AuditList } from '../components/audit/AuditList'
import { PreAuditLiveView } from '../components/audit/PreAuditLiveView'
import { PostAuditLiveView } from '../components/audit/PostAuditLiveView'
import { EscrowList } from '../components/escrow/EscrowList'
import { EscrowDetailView } from '../components/escrow/EscrowDetailView'
import { HookGrid } from '../components/integrations/HookGrid'
import { useEscrowHistory, EscrowHistoryEntry } from '../state/escrowHistory'
import { ESCROW_FIXTURES } from '../data/escrow-fixtures'
import type { PreflightResponse } from '../types/preaudit'
import type { PostAuditReport } from '../types/postaudit'

interface AuditPageProps {
  initialTab?: 'pre' | 'post'
}

interface PreAuditLocationState {
  audit?: PreflightResponse
}

interface PostAuditLocationState {
  audit?: PostAuditReport
  txHash?: string
  subject?: string
  chainId?: number
}

export function AuditPage({ initialTab = 'pre' }: AuditPageProps) {
  const isPost = initialTab === 'post'
  const location = useLocation()

  if (isPost) {
    const state = (location.state as PostAuditLocationState | null) ?? null
    const audit = state?.audit
    const subtitle = audit
      ? `Live Post-Audit · ${audit.overall_severity.toUpperCase()} · score ${audit.overall_risk_score}`
      : 'Post-Audit Analysis · Slippage Detection'
    const badgeColor = audit
      ? (audit.overall_severity === 'high' || audit.overall_severity === 'critical' ? 'red'
        : audit.overall_severity === 'medium' ? 'yellow' : 'green')
      : 'yellow'
    return (
      <DashboardLayout
        title="Audit"
        subtitle={subtitle}
        badgeColor={badgeColor}
        escrowActive
      >
        {audit
          ? <PostAuditLiveView audit={audit} txHash={state?.txHash} subject={state?.subject} chainId={state?.chainId} />
          : <AuditList initialTab="post" />}
      </DashboardLayout>
    )
  }

  const state = (location.state as PreAuditLocationState | null) ?? null
  const liveAudit = state?.audit
  const subtitle = liveAudit
    ? `Live Pre-Audit · ${liveAudit.verdict.toUpperCase()} · ${liveAudit.to}`
    : 'Contract Audit Log · Local LLM'
  const badgeColor = liveAudit?.verdict === 'unsafe' ? 'red'
    : liveAudit?.verdict === 'warning' ? 'yellow'
    : 'green'

  return (
    <DashboardLayout
      title="Audit"
      subtitle={subtitle}
      badgeColor={badgeColor}
    >
      {liveAudit ? <PreAuditLiveView data={liveAudit} /> : <AuditList initialTab="pre" />}
    </DashboardLayout>
  )
}

interface EscrowLocationState {
  entryId?: string
}

export function EscrowPage() {
  const location = useLocation()
  const { entries, getById } = useEscrowHistory()
  const [selectedId, setSelectedId] = useState<string | null>(null)

  // Prefer router-state entryId → first live entry → first example.
  useEffect(() => {
    const stateId = (location.state as EscrowLocationState | null)?.entryId
    if (stateId && getById(stateId)) {
      setSelectedId(stateId)
      return
    }
    if (entries.length > 0) {
      setSelectedId(entries[0].id)
      return
    }
    setSelectedId('example-sandwich')
  }, [location.state, entries, getById])

  const selectedEntry: EscrowHistoryEntry | null = selectedId
    ? getById(selectedId) ?? exampleById(selectedId)
    : null

  const subtitle = selectedEntry
    ? `tradeId ${selectedEntry.tradeId.slice(0, 10)}… · ${selectedEntry.chosenAction}`
    : 'Audit-Responsive Escrow Standard · Sepolia'

  const badge = selectedEntry?.chosenAction === 'BLOCK_AND_CLAIM' ? 'red'
    : selectedEntry?.chosenAction === 'RELEASE' ? 'green'
    : 'yellow'

  return (
    <DashboardLayout
      title="Escrow"
      subtitle={subtitle}
      badgeColor={badge}
      escrowActive
    >
      <div style={{
        display: 'grid', gridTemplateColumns: '320px 1fr', gap: 14,
        height: 'calc(100vh - 56px - 32px)', minHeight: 0,
      }}>
        <EscrowList
          selectedId={selectedId}
          onSelect={setSelectedId}
        />
        <div style={{ overflowY: 'auto', minHeight: 0 }}>
          <EscrowDetailView entry={selectedEntry} />
        </div>
      </div>
    </DashboardLayout>
  )
}

function exampleById(id: string): EscrowHistoryEntry | null {
  if (id === 'example-sandwich') {
    return { ...ESCROW_FIXTURES.sandwich, id, timestamp: Date.now(), source: 'fixture' }
  }
  if (id === 'example-normal') {
    return { ...ESCROW_FIXTURES.normal, id, timestamp: Date.now(), source: 'fixture' }
  }
  return null
}

export function IntegrationsPage() {
  return (
    <DashboardLayout
      title="Integrations"
      subtitle="Hook Registry · x402 Connections"
      badgeColor="green"
    >
      <HookGrid />
    </DashboardLayout>
  )
}
