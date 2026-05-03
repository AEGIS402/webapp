import type { EscrowScenarioId, EscrowScenarioRunResult } from '../types/escrow'

const POST_AUDIT_BASE: string =
  import.meta.env.VITE_POSTAUDIT_URL ?? '/api/postaudit'

export interface RunScenarioOptions {
  signal?: AbortSignal
}

export async function runScenario(
  id: EscrowScenarioId,
  { signal }: RunScenarioOptions = {},
): Promise<EscrowScenarioRunResult> {
  const res = await fetch(`${POST_AUDIT_BASE}/scenario/${id}`, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: '{}',
    signal,
  })

  if (!res.ok) {
    let message = `scenario ${id} failed: HTTP ${res.status}`
    try {
      const body = await res.json()
      if (body?.error?.message) message = body.error.message
      else if (body?.message) message = body.message
    } catch {
      /* ignore */
    }
    throw new Error(message)
  }

  return (await res.json()) as EscrowScenarioRunResult
}
