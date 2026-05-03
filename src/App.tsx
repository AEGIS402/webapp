import { Navigate, Route, Routes } from 'react-router-dom'
import { Landing } from './pages/Landing'
import { Overview } from './pages/Overview'
import { AuditPage, EscrowPage, IntegrationsPage } from './pages/Pages'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/overview" element={<Overview />} />
      <Route path="/audit" element={<Navigate to="/audit/pre" replace />} />
      <Route path="/audit/pre" element={<AuditPage initialTab="pre" />} />
      <Route path="/audit/post" element={<AuditPage initialTab="post" />} />
      <Route path="/escrow" element={<EscrowPage />} />
      <Route path="/integrations" element={<IntegrationsPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
