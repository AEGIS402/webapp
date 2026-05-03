import { createContext, useCallback, useContext, useMemo, useState, ReactNode } from 'react'
import { DemoTarget } from '../constants/data'
import { PreflightResponse } from '../types/preaudit'
import type { PostAuditReport } from '../types/postaudit'

export type AuditKind = 'pre' | 'post'

export interface PreAuditHistoryEntry {
  kind: 'pre'
  id: string
  timestamp: number
  target: DemoTarget
  result: PreflightResponse | null
  error?: string
  elapsedSec: number
  cached: boolean
  source: 'live' | 'mock'
}

export interface PostAuditHistoryEntry {
  kind: 'post'
  id: string
  timestamp: number
  txHash: string
  subjectAddress: string
  scenarioLabel: string  // e.g. "Sandwich attack"
  result: PostAuditReport | null
  error?: string
  elapsedSec: number
  cached: boolean
  source: 'live' | 'fixture'
  escrowEntryId?: string  // cross-link to escrowHistory entry
}

export type AuditHistoryEntry = PreAuditHistoryEntry | PostAuditHistoryEntry

type DistributiveOmit<T, K extends keyof any> = T extends any ? Omit<T, K> : never
export type AuditHistoryInput = DistributiveOmit<AuditHistoryEntry, 'id' | 'timestamp'>

interface CtxValue {
  entries: AuditHistoryEntry[]
  push: (entry: AuditHistoryInput) => AuditHistoryEntry
  clear: () => void
}

const ctx = createContext<CtxValue | null>(null)

const MAX_ENTRIES = 12

export function AuditHistoryProvider({ children }: { children: ReactNode }) {
  const [entries, setEntries] = useState<AuditHistoryEntry[]>([])

  const push = useCallback((entry: AuditHistoryInput): AuditHistoryEntry => {
    const id = typeof crypto !== 'undefined' && 'randomUUID' in crypto
      ? crypto.randomUUID()
      : `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`
    const next = { ...entry, id, timestamp: Date.now() } as AuditHistoryEntry
    setEntries(prev => [next, ...prev].slice(0, MAX_ENTRIES))
    return next
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
