import { createContext, useCallback, useContext, useMemo, useState, ReactNode } from 'react'
import type { EscrowScenarioFixture } from '../data/escrow-fixtures'

export interface EscrowHistoryEntry extends EscrowScenarioFixture {
  id: string
  timestamp: number
  source: 'fixture' | 'live'
}

interface CtxValue {
  entries: EscrowHistoryEntry[]
  push: (entry: Omit<EscrowHistoryEntry, 'id' | 'timestamp'>) => EscrowHistoryEntry
  clear: () => void
  getById: (id: string) => EscrowHistoryEntry | null
}

const ctx = createContext<CtxValue | null>(null)

const MAX_ENTRIES = 12

export function EscrowHistoryProvider({ children }: { children: ReactNode }) {
  const [entries, setEntries] = useState<EscrowHistoryEntry[]>([])

  const push = useCallback((entry: Omit<EscrowHistoryEntry, 'id' | 'timestamp'>): EscrowHistoryEntry => {
    const next: EscrowHistoryEntry = {
      ...entry,
      id: typeof crypto !== 'undefined' && 'randomUUID' in crypto
        ? crypto.randomUUID()
        : `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
      timestamp: Date.now(),
    }
    setEntries(prev => [next, ...prev].slice(0, MAX_ENTRIES))
    return next
  }, [])

  const clear = useCallback(() => setEntries([]), [])

  const getById = useCallback((id: string) => entries.find(e => e.id === id) ?? null, [entries])

  const value = useMemo<CtxValue>(() => ({ entries, push, clear, getById }), [entries, push, clear, getById])

  return <ctx.Provider value={value}>{children}</ctx.Provider>
}

export function useEscrowHistory(): CtxValue {
  const v = useContext(ctx)
  if (!v) throw new Error('useEscrowHistory must be used inside EscrowHistoryProvider')
  return v
}
