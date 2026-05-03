import { createContext, useCallback, useContext, useMemo, useState, ReactNode } from 'react'
import { DemoTarget } from '../constants/data'
import { PreflightResponse } from '../types/preaudit'

export interface AuditHistoryEntry {
  id: string
  timestamp: number
  target: DemoTarget
  result: PreflightResponse | null
  error?: string
  elapsedSec: number
  cached: boolean
  source: 'live' | 'mock'
}

interface CtxValue {
  entries: AuditHistoryEntry[]
  push: (entry: Omit<AuditHistoryEntry, 'id' | 'timestamp'>) => void
  clear: () => void
}

const ctx = createContext<CtxValue | null>(null)

const MAX_ENTRIES = 12

export function AuditHistoryProvider({ children }: { children: ReactNode }) {
  const [entries, setEntries] = useState<AuditHistoryEntry[]>([])

  const push = useCallback((entry: Omit<AuditHistoryEntry, 'id' | 'timestamp'>) => {
    const next: AuditHistoryEntry = {
      ...entry,
      id: typeof crypto !== 'undefined' && 'randomUUID' in crypto
        ? crypto.randomUUID()
        : `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
      timestamp: Date.now(),
    }
    setEntries(prev => [next, ...prev].slice(0, MAX_ENTRIES))
  }, [])

  const clear = useCallback(() => setEntries([]), [])

  const value = useMemo<CtxValue>(() => ({ entries, push, clear }), [entries, push, clear])

  return <ctx.Provider value={value}>{children}</ctx.Provider>
}

export function useAuditHistory(): CtxValue {
  const v = useContext(ctx)
  if (!v) throw new Error('useAuditHistory must be used inside AuditHistoryProvider')
  return v
}
