import { Screen, BadgeColor } from '../constants/data'
import { DashboardLayout } from './DashboardLayout'
import { MonitorCard, OverviewState } from '../components/overview/MonitorCard'
import { LiveFeed } from '../components/overview/LiveFeed'

interface OverviewProps {
  state: OverviewState
  navigate: (s: Screen) => void
}

const OVERVIEW_CONFIG: Record<OverviewState, { badge: BadgeColor; screen: Screen }> = {
  processing: { badge: 'green',  screen: 'overview' },
  blocked:    { badge: 'red',    screen: 'overview-blocked' },
  slippage:   { badge: 'yellow', screen: 'overview-slippage' },
}

export function Overview({ state, navigate }: OverviewProps) {
  const cfg = OVERVIEW_CONFIG[state]
  const escrowActive = state === 'slippage'
  return (
    <DashboardLayout
      screen={cfg.screen}
      navigate={navigate}
      title="Overview"
      subtitle="Agent Developer · jawgstar.eth"
      badgeColor={cfg.badge}
      escrowActive={escrowActive}
    >
      <MonitorCard state={state} navigate={navigate} />
      <LiveFeed state={state} />
    </DashboardLayout>
  )
}
