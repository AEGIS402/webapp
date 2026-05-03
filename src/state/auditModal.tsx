import { createContext, useCallback, useContext, useMemo, useState, ReactNode } from 'react'
import { DemoTarget } from '../constants/data'
import { PreflightResponse } from '../types/preaudit'
import type { PostAuditReport } from '../types/postaudit'
import type { EscrowHistoryEntry } from './escrowHistory'

export type AuditMode = 'pre' | 'post' | 'escrow'

// Pre-audit  : intercept → rpc → source → llm
// Post-audit : tx → rpc → decode → llm
// Escrow     : mint → swap → audit → decision
export type AuditStage =
  | 'intercept' | 'rpc' | 'source' | 'llm'
  | 'tx' | 'decode'
  | 'mint' | 'swap' | 'audit' | 'decision'

export interface PostAuditSubject {
  txHash: string
  scenarioLabel: string  // e.g. "Sandwich victim swap"
  subjectAddress: string
}

export interface EscrowSubject {
  scenario: 'normal' | 'sandwich'
  scenarioLabel: string  // "Normal protected swap" / "Sandwich attack"
  vault: string
  insurancePool: string
}

export type AuditModalState =
  | { phase: 'hidden' }
  | { phase: 'running'; mode: 'pre';    target: DemoTarget;        stage: AuditStage; elapsedSec: number; cached: boolean }
  | { phase: 'running'; mode: 'post';   subject: PostAuditSubject; stage: AuditStage; elapsedSec: number; cached: boolean }
  | { phase: 'running'; mode: 'escrow'; subject: EscrowSubject;    stage: AuditStage; elapsedSec: number; cached: boolean }
  | { phase: 'done';    mode: 'pre';    target: DemoTarget;        result: PreflightResponse; elapsedSec: number }
  | { phase: 'done';    mode: 'post';   subject: PostAuditSubject; result: PostAuditReport;   elapsedSec: number }
  | { phase: 'done';    mode: 'escrow'; subject: EscrowSubject;    entry: EscrowHistoryEntry; elapsedSec: number }
  | { phase: 'error';   mode: 'pre';    target: DemoTarget;        message: string; elapsedSec: number }
  | { phase: 'error';   mode: 'post';   subject: PostAuditSubject; message: string; elapsedSec: number }
  | { phase: 'error';   mode: 'escrow'; subject: EscrowSubject;    message: string; elapsedSec: number }

type RunningState = Extract<AuditModalState, { phase: 'running' }>

interface CtxValue {
  state: AuditModalState
  show: (init: RunningState) => void
  setStage: (stage: AuditStage) => void
  setElapsed: (sec: number) => void
  finishPre:    (target: DemoTarget, result: PreflightResponse, elapsedSec: number) => void
  failPre:      (target: DemoTarget, message: string, elapsedSec: number) => void
  finishPost:   (subject: PostAuditSubject, result: PostAuditReport, elapsedSec: number) => void
  failPost:     (subject: PostAuditSubject, message: string, elapsedSec: number) => void
  finishEscrow: (subject: EscrowSubject, entry: EscrowHistoryEntry, elapsedSec: number) => void
  failEscrow:   (subject: EscrowSubject, message: string, elapsedSec: number) => void
  hide: () => void
}

const ctx = createContext<CtxValue | null>(null)

export function AuditModalProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<AuditModalState>({ phase: 'hidden' })

  const show = useCallback((init: RunningState) => {
    setState(init)
  }, [])

  const setStage = useCallback((stage: AuditStage) => {
    setState(prev => prev.phase === 'running' ? { ...prev, stage } : prev)
  }, [])

  const setElapsed = useCallback((sec: number) => {
    setState(prev => prev.phase === 'running' ? { ...prev, elapsedSec: sec } : prev)
  }, [])

  const finishPre = useCallback((target: DemoTarget, result: PreflightResponse, elapsedSec: number) => {
    setState({ phase: 'done', mode: 'pre', target, result, elapsedSec })
  }, [])

  const failPre = useCallback((target: DemoTarget, message: string, elapsedSec: number) => {
    setState({ phase: 'error', mode: 'pre', target, message, elapsedSec })
  }, [])

  const finishPost = useCallback((subject: PostAuditSubject, result: PostAuditReport, elapsedSec: number) => {
    setState({ phase: 'done', mode: 'post', subject, result, elapsedSec })
  }, [])

  const failPost = useCallback((subject: PostAuditSubject, message: string, elapsedSec: number) => {
    setState({ phase: 'error', mode: 'post', subject, message, elapsedSec })
  }, [])

  const finishEscrow = useCallback((subject: EscrowSubject, entry: EscrowHistoryEntry, elapsedSec: number) => {
    setState({ phase: 'done', mode: 'escrow', subject, entry, elapsedSec })
  }, [])

  const failEscrow = useCallback((subject: EscrowSubject, message: string, elapsedSec: number) => {
    setState({ phase: 'error', mode: 'escrow', subject, message, elapsedSec })
  }, [])

  const hide = useCallback(() => setState({ phase: 'hidden' }), [])

  const value = useMemo<CtxValue>(() => ({
    state, show, setStage, setElapsed,
    finishPre, failPre, finishPost, failPost, finishEscrow, failEscrow, hide,
  }), [state, show, setStage, setElapsed, finishPre, failPre, finishPost, failPost, finishEscrow, failEscrow, hide])

  return <ctx.Provider value={value}>{children}</ctx.Provider>
}

export function useAuditModal(): CtxValue {
  const v = useContext(ctx)
  if (!v) throw new Error('useAuditModal must be used inside AuditModalProvider')
  return v
}
