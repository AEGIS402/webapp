import { createContext, useCallback, useContext, useMemo, useState, ReactNode } from 'react'
import { DemoTarget } from '../constants/data'
import { PreflightResponse } from '../types/preaudit'

export type AuditStage = 'intercept' | 'rpc' | 'source' | 'llm'

export type AuditModalState =
  | { phase: 'hidden' }
  | { phase: 'running'; target: DemoTarget; stage: AuditStage; elapsedSec: number; cached: boolean }
  | { phase: 'done'; target: DemoTarget; result: PreflightResponse; elapsedSec: number }
  | { phase: 'error'; target: DemoTarget; message: string; elapsedSec: number }

interface CtxValue {
  state: AuditModalState
  show: (init: Extract<AuditModalState, { phase: 'running' }>) => void
  setStage: (stage: AuditStage) => void
  setElapsed: (sec: number) => void
  finish: (target: DemoTarget, result: PreflightResponse, elapsedSec: number) => void
  fail: (target: DemoTarget, message: string, elapsedSec: number) => void
  hide: () => void
}

const ctx = createContext<CtxValue | null>(null)

export function AuditModalProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<AuditModalState>({ phase: 'hidden' })

  const show = useCallback((init: Extract<AuditModalState, { phase: 'running' }>) => {
    setState(init)
  }, [])

  const setStage = useCallback((stage: AuditStage) => {
    setState(prev => prev.phase === 'running' ? { ...prev, stage } : prev)
  }, [])

  const setElapsed = useCallback((sec: number) => {
    setState(prev => prev.phase === 'running' ? { ...prev, elapsedSec: sec } : prev)
  }, [])

  const finish = useCallback((target: DemoTarget, result: PreflightResponse, elapsedSec: number) => {
    setState({ phase: 'done', target, result, elapsedSec })
  }, [])

  const fail = useCallback((target: DemoTarget, message: string, elapsedSec: number) => {
    setState({ phase: 'error', target, message, elapsedSec })
  }, [])

  const hide = useCallback(() => setState({ phase: 'hidden' }), [])

  const value = useMemo<CtxValue>(() => ({
    state, show, setStage, setElapsed, finish, fail, hide,
  }), [state, show, setStage, setElapsed, finish, fail, hide])

  return <ctx.Provider value={value}>{children}</ctx.Provider>
}

export function useAuditModal(): CtxValue {
  const v = useContext(ctx)
  if (!v) throw new Error('useAuditModal must be used inside AuditModalProvider')
  return v
}
