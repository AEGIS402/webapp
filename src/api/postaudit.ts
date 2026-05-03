import type { PostAuditReport } from '../types/postaudit'

// `||` over `??` so empty strings (undefined GitHub Actions secrets baked
// in at build time) also fall through to the next option.
const POST_AUDIT_BASE: string =
  import.meta.env.VITE_POSTAUDIT_URL
  || import.meta.env.VITE_POSTAUDIT_PROXY
  || '/api/postaudit'

export interface PostAuditOptions {
  signal?: AbortSignal
  subjectAddress?: string
}

// /audit/from-tx: derive subject from tx.from
// /audit/subject: caller supplies subject_address
export async function auditTx(
  txHash: string,
  { signal, subjectAddress }: PostAuditOptions = {},
): Promise<PostAuditReport> {
  const path = subjectAddress ? '/audit/subject' : '/audit/from-tx'
  const body = subjectAddress
    ? { tx_hash: txHash, subject_address: subjectAddress }
    : { tx_hash: txHash }

  const res = await fetch(`${POST_AUDIT_BASE}${path}`, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(body),
    signal,
  })

  if (!res.ok) {
    let message = `post-audit failed: HTTP ${res.status}`
    try {
      const json = await res.json()
      if (json?.error?.message) message = json.error.message
      else if (json?.message) message = json.message
    } catch {
      /* ignore */
    }
    throw new Error(message)
  }

  return (await res.json()) as PostAuditReport
}
