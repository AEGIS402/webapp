import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App'
import { AuditModalProvider } from './state/auditModal'
import { AuditHistoryProvider } from './state/auditHistory'
import { EscrowHistoryProvider } from './state/escrowHistory'
import { WalletProvider } from './state/wallet'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <WalletProvider>
        <EscrowHistoryProvider>
          <AuditHistoryProvider>
            <AuditModalProvider>
              <div className="grid-bg" />
              <App />
            </AuditModalProvider>
          </AuditHistoryProvider>
        </EscrowHistoryProvider>
      </WalletProvider>
    </BrowserRouter>
  </StrictMode>
)
