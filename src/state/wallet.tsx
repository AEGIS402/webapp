import { createContext, useCallback, useContext, useMemo, useState, ReactNode } from 'react'

export type TokenSymbol = 'USDC' | 'USDT' | 'WETH' | 'ARB'

export interface TokenMeta {
  symbol: TokenSymbol
  color: string
  priceUsd: number
}

// Display order + visual metadata. Prices are static demo values.
export const TOKEN_META: TokenMeta[] = [
  { symbol: 'USDC',  color: '#378ADD', priceUsd: 1 },
  { symbol: 'USDT',  color: '#6BA17C', priceUsd: 1 },
  { symbol: 'WETH',  color: '#7F77DD', priceUsd: 3000 },
  { symbol: 'ARB',   color: '#FF6EE7', priceUsd: 0.6 },
]

export type WalletBalances = Record<TokenSymbol, number>

const INITIAL_BALANCES: WalletBalances = {
  USDC: 320.5,
  USDT: 200,
  WETH: 0.12,
  ARB:  142,
}

interface CtxValue {
  balances: WalletBalances
  deduct: (token: TokenSymbol, amount: number) => void
  credit: (token: TokenSymbol, amount: number) => void
  reset: () => void
}

const ctx = createContext<CtxValue | null>(null)

export function WalletProvider({ children }: { children: ReactNode }) {
  const [balances, setBalances] = useState<WalletBalances>(INITIAL_BALANCES)

  const deduct = useCallback((token: TokenSymbol, amount: number) => {
    setBalances(b => ({ ...b, [token]: Math.max(0, b[token] - amount) }))
  }, [])

  const credit = useCallback((token: TokenSymbol, amount: number) => {
    setBalances(b => ({ ...b, [token]: b[token] + amount }))
  }, [])

  const reset = useCallback(() => setBalances(INITIAL_BALANCES), [])

  const value = useMemo<CtxValue>(() => ({ balances, deduct, credit, reset }), [balances, deduct, credit, reset])

  return <ctx.Provider value={value}>{children}</ctx.Provider>
}

export function useWallet(): CtxValue {
  const v = useContext(ctx)
  if (!v) throw new Error('useWallet must be used inside WalletProvider')
  return v
}
