import { BadgeColor } from '../constants/data'
import { Sidebar } from '../components/shared/Sidebar'
import { Topbar } from '../components/shared/Topbar'
import { WalletPanel } from '../components/shared/WalletPanel'

interface DashboardLayoutProps {
  title: string
  subtitle: string
  badgeColor?: BadgeColor
  escrowActive?: boolean
  children: React.ReactNode
}

export function DashboardLayout({
  title, subtitle, badgeColor = 'green', escrowActive = false, children,
}: DashboardLayoutProps) {
  return (
    <div style={{ display: 'flex', width: '100%', height: '100vh', overflow: 'hidden', position: 'relative', zIndex: 1 }}>
      <Sidebar />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden', minWidth: 0 }}>
        <Topbar title={title} subtitle={subtitle} badgeColor={badgeColor} />
        <div style={{ flex: 1, display: 'flex', overflow: 'hidden' }}>
          <div style={{ flex: 1, overflowY: 'auto', padding: '16px 20px', minWidth: 0 }}>
            {children}
          </div>
          <WalletPanel escrowActive={escrowActive} />
        </div>
      </div>
    </div>
  )
}
