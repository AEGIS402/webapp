import { Screen } from '../constants/data'
import { DashboardLayout } from './DashboardLayout'
import { AuditList } from '../components/audit/AuditList'
import { VaultCards } from '../components/escrow/VaultCards'
import { HookGrid } from '../components/integrations/HookGrid'

interface PageProps {
  navigate: (s: Screen) => void
}

export function AuditPage({ navigate, initialTab = 'pre' }: PageProps & { initialTab?: 'pre' | 'post' }) {
  const isPost = initialTab === 'post'
  return (
    <DashboardLayout
      screen={isPost ? 'audit-post' : 'audit-pre'}
      navigate={navigate}
      title="Audit"
      subtitle={isPost ? 'Post-Audit Analysis · Slippage Detection' : 'Contract Audit Log · Local LLM'}
      badgeColor={isPost ? 'yellow' : 'green'}
      escrowActive={isPost}
    >
      <AuditList initialTab={initialTab} navigate={navigate} />
    </DashboardLayout>
  )
}

export function EscrowPage({ navigate }: PageProps) {
  return (
    <DashboardLayout
      screen="escrow"
      navigate={navigate}
      title="Escrow"
      subtitle="Conditional Settlement · Post-Audit Hold"
      badgeColor="yellow"
      escrowActive
    >
      <VaultCards />
    </DashboardLayout>
  )
}

export function IntegrationsPage({ navigate }: PageProps) {
  return (
    <DashboardLayout
      screen="integrations"
      navigate={navigate}
      title="Integrations"
      subtitle="Hook Registry · x402 Connections"
      badgeColor="green"
    >
      <HookGrid />
    </DashboardLayout>
  )
}
