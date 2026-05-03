import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App'
import { AuditModalProvider } from './state/auditModal'
import { AuditHistoryProvider } from './state/auditHistory'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <AuditHistoryProvider>
        <AuditModalProvider>
          <div className="grid-bg" />
          <App />
        </AuditModalProvider>
      </AuditHistoryProvider>
    </BrowserRouter>
  </StrictMode>
)
