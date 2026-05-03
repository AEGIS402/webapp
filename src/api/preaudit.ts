import type { PreflightResponse } from '../types/preaudit'

const PRE_AUDIT_BASE: string =
  import.meta.env.VITE_PREAUDIT_URL ?? '/api/preaudit'

export interface PreflightOptions {
  signal?: AbortSignal
  chainId?: number
}

export async function preflight(
  to: string,
  { signal, chainId = 11155111 }: PreflightOptions = {},
): Promise<PreflightResponse> {
  const res = await fetch(`${PRE_AUDIT_BASE}/v1/tx/preflight`, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ to, chainId }),
    signal,
  })

  if (!res.ok) {
    let message = `preflight failed: HTTP ${res.status}`
    try {
      const body = await res.json()
      if (body?.message) message = body.message
    } catch {
      /* ignore */
    }
    throw new Error(message)
  }

  return (await res.json()) as PreflightResponse
}

export async function health(): Promise<{ status: string; upstream_configured: boolean }> {
  const res = await fetch(`${PRE_AUDIT_BASE}/health`)
  if (!res.ok) throw new Error(`health failed: HTTP ${res.status}`)
  return res.json()
}
