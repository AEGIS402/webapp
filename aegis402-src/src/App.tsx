import { useState } from 'react'
import { Screen } from './constants/data'
import { Landing } from './pages/Landing'
import { Overview } from './pages/Overview'
import { DashboardLayout } from './pages/DashboardLayout'
import { AuditList } from './components/audit/AuditList'
import { VaultCards } from './components/escrow/VaultCards'
import { HookGrid } from './components/integrations/HookGrid'

export default function App() {
  const [screen, setScreen] = useState<Screen>('landing')
  const navigate = (s: Screen) => setScreen(s)

  if (screen === 'landing') {
    return <Landing navigate={navigate} />
  }

  if (screen === 'overview' || screen === 'overview-blocked' || screen === 'overview-slippage') {
    const state = screen === 'overview-blocked' ? 'blocked'
                : screen === 'overview-slippage' ? 'slippage'
                : 'processing'
    return <Overview state={state} navigate={navigate} />
  }

  if (screen === 'audit-pre' || screen === 'audit-post') {
    const isPost = screen === 'audit-post'
    return (
      <DashboardLayout
        screen={screen}
        navigate={navigate}
        title="Audit"
        subtitle={isPost ? 'Post-Audit Analysis · Slippage Detection' : 'Contract Audit Log · Local LLM'}
        badgeColor={isPost ? 'yellow' : 'green'}
        escrowActive={isPost}
      >
        <AuditList initialTab={isPost ? 'post' : 'pre'} navigate={navigate} />
      </DashboardLayout>
    )
  }

  if (screen === 'escrow') {
    return (
      <DashboardLayout screen="escrow" navigate={navigate} title="Escrow" subtitle="Conditional Settlement · Post-Audit Hold" badgeColor="yellow" escrowActive>
        <VaultCards />
      </DashboardLayout>
    )
  }

  if (screen === 'integrations') {
    return (
      <DashboardLayout screen="integrations" navigate={navigate} title="Integrations" subtitle="Hook Registry · x402 Connections">
        <HookGrid />
      </DashboardLayout>
    )
  }

  return null
}
