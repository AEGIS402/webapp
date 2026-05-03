import { DashboardLayout } from './DashboardLayout'
import { AuditList } from '../components/audit/AuditList'
import { VaultCards } from '../components/escrow/VaultCards'
import { HookGrid } from '../components/integrations/HookGrid'

interface AuditPageProps {
  initialTab?: 'pre' | 'post'
}

export function AuditPage({ initialTab = 'pre' }: AuditPageProps) {
  const isPost = initialTab === 'post'
  return (
    <DashboardLayout
      title="Audit"
      subtitle={isPost ? 'Post-Audit Analysis · Slippage Detection' : 'Contract Audit Log · Local LLM'}
      badgeColor={isPost ? 'yellow' : 'green'}
      escrowActive={isPost}
    >
      <AuditList initialTab={initialTab} />
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
