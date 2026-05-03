# AEGIS402 Webapp

Demo frontend for AEGIS402. The agent wallet pre- and post-audits x402 payment flows, then routes risky transactions through an audit-responsive escrow + insurance pool.

EthGlobal 2026.

## Stack

- **React 18** + **TypeScript** + **react-router-dom v6**
- **Vite** (dev server + build, with audit API proxy)
- No CSS framework — inline styles + design tokens

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) (Vite falls back to 5174 if the port is taken).

## Build

```bash
npm run build
npm run preview
```

## Deployment (GitHub Pages)

The app uses [`HashRouter`](https://reactrouter.com/en/main/router-components/hash-router) so the same static `dist/` works on GitHub Pages without a custom 404 fallback. Asset URLs are emitted as relative paths (`base: './'`) so the bundle works whether it lives at the repo root or a subpath.

Production builds have no Vite dev proxy, so the browser calls the backends directly and they must send `Access-Control-Allow-Origin: *` (both pre-audit and post-audit do this today).

### Auto-deploy (recommended)

[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) builds and publishes to Pages on every push to `main`. Set up once:

1. **Repo Settings → Pages → Build and deployment → Source:** GitHub Actions.
2. **Repo Settings → Secrets and variables → Actions → New repository secret:**
   - `VITE_PREAUDIT_URL`  — full URL of the pre-audit backend (e.g. `http://<host>:13001`).
   - `VITE_POSTAUDIT_URL` — full URL of the post-audit backend (e.g. `http://<host>:13000`).

Push to `main` → GitHub Actions runs `npm ci && npm run build` with those secrets injected as `VITE_*` env vars and uploads `dist/` to Pages.

### Manual build

```bash
VITE_PREAUDIT_URL=http://<host>:13001 \
VITE_POSTAUDIT_URL=http://<host>:13000 \
  npm run build
# serve dist/ from any static host
```

## Backend Servers

The webapp talks to two backends through the Vite dev proxy. Targets come from `.env`:

```bash
cp .env.example .env
# then edit .env if you need to point at local servers
```

`.env.example` lists the two variables. Copy it to `.env` and fill in the deployed URLs:

```
VITE_PREAUDIT_PROXY=http://<host>:<port>
VITE_POSTAUDIT_PROXY=http://<host>:<port>
```

| Endpoint (webapp) | Proxies to | Backend |
|---|---|---|
| `/api/preaudit/*`  | `$VITE_PREAUDIT_PROXY`  | [`pre-audit/`](../pre-audit) — contract pre-audit (eth_getCode + Etherscan + LLM) |
| `/api/postaudit/*` | `$VITE_POSTAUDIT_PROXY` | [`post-audit/`](../post-audit) — tx post-audit + Demo 3 escrow scenarios (`POST /scenario/{normal|sandwich}`) |

The same-origin proxy avoids CORS in the browser. Falls back to `http://127.0.0.1:13001` and `http://127.0.0.1:3000` when the env vars are unset. Proxy timeouts are bumped to 600s because the LLM round trip can exceed two minutes (and Demo 3's full settle can run three minutes).

To run the backends locally instead:

```bash
# pre-audit (Demo 1)
cd ../pre-audit && npm install && npm start  # listens on 13001

# post-audit (Demo 2 / Demo 3)
cd ../post-audit && npm install && npm run api  # listens on 3000, --network sepolia
```

Both backends require an OpenAI-compatible LLM endpoint configured in their `.env`.

## Demo Scenarios

| Scenario | Story | Frontend route | Backend |
|---|---|---|---|
| **Demo 1 · Pre-Audit** | Before signing an x402 payment, ship the hook contract source to the LLM and get a safe / warning / unsafe verdict. | `/overview` (Scenario 1 toggle) → `/audit/pre` | [`pre-audit/`](../pre-audit), [`x402-hook/`](../x402-hook) |
| **Demo 2 · Post-Audit** | Replay a settled protected swap through the LLM to surface sandwich / value-imbalance findings. | `/overview` (Scenario 2 toggle) → `/audit/post` | [`post-audit/`](../post-audit) |
| **Demo 3 · Insured Escrow** | Drive a real Sepolia `protectedExactInputSingle`, post-audit the receipt, then have the auditor sign `executeAuditDecision` (RELEASE or BLOCK_AND_CLAIM) and let the insurance pool refund the user when needed. | `/overview` (Scenario 3 toggle) → `/escrow` | [`escrow-hook/`](../escrow-hook) + [`post-audit/`](../post-audit) |

All three scenarios share the same on-screen pattern: pick a target → press RUN → the wallet panel dims and an `AgentInterceptModal` slides in with stage tracker / elapsed timer → on completion a `ResultPanel` surfaces the verdict and a CTA that jumps to the corresponding report page.

## Routes

| Path | Page | Description |
|---|---|---|
| `/`              | Landing       | Hero + feature cards |
| `/overview`      | Overview      | Demo 1 / 2 / 3 scenario toggle + AuditHistory |
| `/audit/pre`     | AuditPage     | Live pre-audit report (audit object passed via router state) |
| `/audit/post`    | AuditPage     | Live post-audit report (router state) |
| `/escrow`        | EscrowPage    | EscrowList + EscrowDetailView; live entries pushed by Demo 3, fixture entries shown when no live runs exist |
| `*`              | →             | Redirect to `/` |

`/integrations` and the `IntegrationsPage` component are still in the tree but commented out in `App.tsx` and `NAV_ITEMS` until the registry feature is ready.

## Project Structure

```
src/
├── App.tsx                          # <Routes> definition
├── main.tsx                         # HashRouter + 4 providers (Wallet/EscrowHistory/AuditHistory/AuditModal)
├── index.css                        # Global styles + scanline overlay
├── vite-env.d.ts                    # ImportMetaEnv (VITE_PREAUDIT_URL / VITE_POSTAUDIT_URL)
│
├── api/                             # Backend API clients
│   ├── preaudit.ts                  # POST /v1/tx/preflight
│   ├── postaudit.ts                 # POST /audit/from-tx | /audit/subject
│   └── escrow.ts                    # POST /scenario/{normal|sandwich}
│
├── types/                           # Backend response shapes
│   ├── preaudit.ts                  # PreflightResponse, AuditReport, Vulnerability
│   ├── postaudit.ts                 # PostAuditReport (= AuditReport)
│   └── escrow.ts                    # EscrowScenarioRunResult + escrowStateLabel
│
├── data/                            # Captured fixtures used as failover / preview
│   ├── preaudit-mocks.ts            # Captured pre-audit responses (Safe / Unsafe hook)
│   ├── postaudit-mocks.ts           # Captured post-audit responses (Normal / Sandwich)
│   └── escrow-fixtures.ts           # Demo 3 example entries (real Sepolia tx hashes)
│
├── state/                           # React Context providers
│   ├── auditModal.tsx               # AgentInterceptModal state — pre / post / escrow modes
│   ├── auditHistory.tsx             # /overview audit history feed (PRE / POST entries)
│   ├── escrowHistory.tsx            # /escrow entries (live + fixture)
│   └── wallet.tsx                   # Live USDC / USDT / WETH / ARB balances
│
├── constants/
│   ├── colors.ts                    # Design tokens
│   └── data.ts                      # NAV_ITEMS, PRE_AUDIT_TARGETS, POST_AUDIT_TARGETS,
│                                    # ESCROW_DEPLOYMENT, ESCROW_SCENARIOS, MAINNET_EXPLORER,
│                                    # SEPOLIA_EXPLORER, explorerForChain
│
├── pages/
│   ├── Landing.tsx                  # Hero + feature cards + dashboard preview
│   ├── DashboardLayout.tsx          # Sidebar + Topbar + WalletPanel (with AgentInterceptModal overlay)
│   ├── Overview.tsx                 # Scenario 1 / 2 / 3 toggle + AuditHistory
│   └── Pages.tsx                    # AuditPage, EscrowPage, IntegrationsPage (last one is unmounted)
│
└── components/
    ├── shared/                      # Sidebar, Topbar, WalletPanel, StatusPill, Logo
    ├── agent/
    │   └── AgentInterceptModal.tsx  # Mode-aware (pre / post / escrow) stage tracker + verdict view, slides in over the wallet panel
    ├── overview/
    │   ├── MonitorCard.tsx          # Header + 4-step Pipeline + STEP DETAIL log (override-friendly)
    │   ├── Pipeline.tsx             # Pipeline nodes + flowing connector animation
    │   ├── Demo1Runner.tsx          # Pre-audit ControlBar + RUN + ResultPanel
    │   ├── Demo2Runner.tsx          # Post-audit ControlBar + RUN + ResultPanel
    │   ├── AuditHistory.tsx         # PRE / POST chips, ↗ ESCROW cross-link for post entries
    │   └── AuditList.tsx            # Static mock list shown when /audit/* has no router state
    ├── audit/
    │   ├── shared.tsx               # ScoreGauge, FindingsBreakdown, VulnerabilityCard, Meter
    │   ├── PreAuditLiveView.tsx     # /audit/pre — contract-address Hero
    │   └── PostAuditLiveView.tsx    # /audit/post — tx Hero
    ├── escrow/
    │   ├── Demo3Runner.tsx          # Picker + RUN + 4-stage tracker + LogStream + ResultPanel + escrow modal dispatch
    │   ├── EscrowList.tsx           # Left column on /escrow; LIVE / EXAMPLE badges per source
    │   └── EscrowDetailView.tsx     # Right column — Hero / ExplainerCard / Trade / AuditDecision / Settlement / Balances / Findings / NarrationCard
    └── integrations/
        └── HookGrid.tsx             # Static hook registry (route currently hidden)
```

## Demo Flow

**Demo 1 — Pre-Audit (live)**
1. `/overview` → Scenario 1 toggle → pick a target card (Safe hook / Vulnerable hook on Sepolia)
2. ▶ RUN PRE-AUDIT → the right wallet panel dims + blurs and `AgentInterceptModal` slides in
3. Modal stages: `intercept` → `RPC eth_getCode` → `Etherscan getsourcecode` → `LLM analysis` → flips to `✓ ALLOW` / `⚠ WARNING` / `✕ BLOCK`
4. ResultPanel CTA → `/audit/pre` full report (Hero gauge + V-001..V-006 cards)
5. On a SAFE verdict the wallet deducts `0.001 USDC` (the agent actually signs the x402 payment)

**Demo 2 — Post-Audit (live)**
1. `/overview` → Scenario 2 toggle → pick a Sepolia tx (Normal protected swap / Sandwich victim swap)
2. ▶ RUN POST-AUDIT → modal stages: `tx received` → `RPC tx + receipt` → `decode logs + flows` → `LLM analysis` → verdict
3. ResultPanel CTA → `/audit/post` full report (tx Hero + scenario vulnerability list)
4. Wallet deducts `amountIn + protectionFee USDT` to reflect the swap that already settled on-chain
5. AuditHistory accumulates the POST entry (PRE/POST chip)

**Demo 3 — Insured Escrow (live)**
1. `/overview` → Scenario 3 toggle → pick NORMAL / SANDWICH
2. ▶ RUN SCENARIO → `POST /api/postaudit/scenario/{id}` (≈ 60–180 s on Sepolia)
3. Modal stages: `Mint + approve` → `Protected swap` → `Post-audit` → `Auditor decision`; the on-card StageStrip and elapsed timer mirror the modal
4. When the response lands, the API's `narration[]` (11–14 lines) is replayed at 250 ms intervals so the on-chain story scrolls past in a few seconds
5. ResultPanel CTA → `/escrow` with the new entry id in router state; EscrowList auto-selects it and EscrowDetailView renders Hero / ExplainerCard / Trade / Decision / Settlement / post-decision balances / Findings / NarrationCard
6. Etherscan links to swap and decision tx are real Sepolia and clickable

## Wallet panel

`state/wallet.tsx` exposes a `WalletProvider` with mutable balances (USDC, USDT, WETH, ARB). Demo 1 and Demo 2 deduct from these on completion so judges see the balance tick down as scenarios run. AEGIS appears only inside the escrow flow on `/escrow`, not as a wallet token.

## Design System

- **Colors** — `src/constants/colors.ts`
- **Fonts** — Press Start 2P (UI labels) + IBM Plex Mono (addresses / numbers)
- **Theme** — Aegis Arcade: dark navy + neon accent + scanline overlay
- **Severity colors** — critical `#FF4444` / high `#FF8A4D` / medium `#FFE600` / low `#7F77DD` / info `#A8FF3E`
- **RISK score** — gauges and badges always show a `RISK` label with a "lower is safer · 0–19 info · 90+ critical" hint
