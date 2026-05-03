import { useLocation } from 'react-router-dom'
import { DashboardLayout } from './DashboardLayout'
import { AuditList } from '../components/audit/AuditList'
import { PreAuditLiveView } from '../components/audit/PreAuditLiveView'
import { VaultCards } from '../components/escrow/VaultCards'
import { HookGrid } from '../components/integrations/HookGrid'
import type { PreflightResponse } from '../types/preaudit'

interface AuditPageProps {
  initialTab?: 'pre' | 'post'
}

interface AuditLocationState {
  audit?: PreflightResponse
}

export function AuditPage({ initialTab = 'pre' }: AuditPageProps) {
  const isPost = initialTab === 'post'
  const location = useLocation()
  const liveAudit = !isPost ? (location.state as AuditLocationState | null)?.audit : undefined

  const subtitle = isPost
    ? 'Post-Audit Analysis · Slippage Detection'
    : liveAudit
    ? `Live Pre-Audit · ${liveAudit.verdict.toUpperCase()} · ${liveAudit.to}`
    : 'Contract Audit Log · Local LLM'

  const badgeColor = isPost ? 'yellow'
    : liveAudit?.verdict === 'unsafe' ? 'red'
    : liveAudit?.verdict === 'warning' ? 'yellow'
    : 'green'

  return (
    <DashboardLayout
      title="Audit"
      subtitle={subtitle}
      badgeColor={badgeColor}
      escrowActive={isPost}
    >
      {liveAudit ? <PreAuditLiveView data={liveAudit} /> : <AuditList initialTab={initialTab} />}
    </DashboardLayout>
  )
}

export function EscrowPage() {
  return (
    <DashboardLayout
      title="Escrow"
      subtitle="Conditional Settlement · Post-Audit Hold"
      badgeColor="yellow"
      escrowActive
    >
      <VaultCards />
    </DashboardLayout>
  )
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
