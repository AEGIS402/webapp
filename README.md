# AEGIS402 Webapp

AEGIS402 데모용 프론트엔드. x402 결제 흐름을 사전·사후 감사하고, 위험 트랜잭션을 에스크로 + 보험풀로 연결하는 가드 월렛의 시연 UI.

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

## Backend Servers

The webapp talks to two local backends through the Vite dev proxy:

| Endpoint (webapp) | Proxies to | Backend repo |
|---|---|---|
| `/api/preaudit/*`  | `http://127.0.0.1:13001` | [`pre-audit/`](../pre-audit) — contract pre-audit (eth_getCode + Etherscan + LLM) |
| `/api/postaudit/*` | `http://127.0.0.1:3000`  | [`post-audit/`](../post-audit) — tx post-audit (RPC + decode + LLM) |

Override targets with `VITE_PREAUDIT_PROXY` / `VITE_POSTAUDIT_PROXY` env vars before `npm run dev`.

To run the backends:

```bash
# pre-audit (Demo 1)
cd ../pre-audit && npm install && npm start  # listens on 13001

# post-audit (Demo 2)
cd ../post-audit && npm install && npm run api  # listens on 3000, --network sepolia
```

Both backends require an OpenAI-compatible LLM endpoint configured in their `.env`. See each repo's README for details.

## Demo Scenarios

| Scenario | Story | Frontend route | Backend repo |
|---|---|---|---|
| **Demo 1 · Pre-Audit** | x402 결제 직전, 훅 컨트랙트 코드를 LLM에 넘겨 risk 판정 (safe / warning / unsafe) | `/overview` (Scenario 1 toggle) → `/audit/pre` | [`pre-audit/`](../pre-audit), [`x402-hook/`](../x402-hook) |
| **Demo 2 · Post-Audit** | 이미 settle된 protected swap의 영수증을 LLM에 넘겨 sandwich/슬리피지 검출 | `/overview` (Scenario 2 toggle) → `/audit/post` | [`post-audit/`](../post-audit) |
| **Demo 3 · Insured Escrow** | 사후감사 verdict를 표준 `executeAuditDecision`으로 보내 RELEASE 또는 BLOCK_AND_CLAIM 정산 | `/escrow` (현재 fixture 기반 미리보기) | [`escrow-hook/`](../escrow-hook) — API 미구현 |

Demo 3은 현재 별도 API가 없어서 `/escrow` 페이지에서 캡쳐된 Sepolia e2e 결과를 정적으로 렌더한다. 새 escrow API가 붙으면 Overview 토글에 합류 예정.

## Routes

| Path | Page | 설명 |
|---|---|---|
| `/`              | Landing       | 진입 화면 |
| `/overview`      | Overview      | Demo 1 / Demo 2 토글 + AuditHistory |
| `/audit/pre`     | AuditPage     | 라이브 pre-audit 응답 풀 리포트 (router state로 audit 객체 전달) |
| `/audit/post`    | AuditPage     | 라이브 post-audit 응답 풀 리포트 (router state) |
| `/escrow`        | EscrowPage    | EscrowList + EscrowDetailView. 진짜 e2e:escrow:live 결과 (SHOW EXAMPLE DATA 토글) |
| `/integrations`  | IntegrationsPage | Hook 등록 정보 |

## Project Structure

```
src/
├── App.tsx                          # <Routes> 라우트 정의
├── main.tsx                         # BrowserRouter + 3 providers (AuditModal/AuditHistory/EscrowHistory)
├── index.css                        # Global + scanline overlay
├── vite-env.d.ts                    # ImportMetaEnv (VITE_PREAUDIT_URL / VITE_POSTAUDIT_URL)
│
├── api/                             # 백엔드 API 클라이언트
│   ├── preaudit.ts                  # POST /v1/tx/preflight
│   └── postaudit.ts                 # POST /audit/from-tx | /audit/subject
│
├── types/                           # 백엔드 응답 타입
│   ├── preaudit.ts                  # PreflightResponse, AuditReport, Vulnerability
│   └── postaudit.ts                 # PostAuditReport (= AuditReport)
│
├── data/                            # 캡쳐된 응답 / 시연용 fixture
│   ├── preaudit-mocks.ts            # Demo 1 USE MOCK 폴백 (Safe / Unsafe Hook)
│   ├── postaudit-mocks.ts           # Demo 2 USE MOCK 폴백 (Normal / Sandwich)
│   └── escrow-fixtures.ts           # Demo 3 시나리오 fixture (real Sepolia tx hashes)
│
├── state/                           # React Context providers
│   ├── auditModal.tsx               # 우측 wallet 영역에 뜨는 AgentInterceptModal 상태
│   ├── auditHistory.tsx             # /overview 하단 누적 history (PRE/POST 분기)
│   └── escrowHistory.tsx            # /escrow 페이지의 escrow 엔트리 풀
│
├── constants/
│   ├── colors.ts                    # Design tokens
│   └── data.ts                      # NAV_ITEMS, PRE_AUDIT_TARGETS, POST_AUDIT_TARGETS,
│                                    # ESCROW_DEPLOYMENT, ESCROW_SCENARIOS, explorerForChain
│
├── pages/
│   ├── Landing.tsx                  # Hero + feature cards
│   ├── DashboardLayout.tsx          # Sidebar + Topbar + WalletPanel(+ AgentInterceptModal overlay)
│   ├── Overview.tsx                 # Demo 1 / Demo 2 시나리오 토글
│   └── Pages.tsx                    # AuditPage / EscrowPage / IntegrationsPage
│
└── components/
    ├── shared/                      # Sidebar, Topbar, WalletPanel, StatusPill, Logo
    ├── agent/
    │   └── AgentInterceptModal.tsx  # 모드별(pre/post) 단계 트래커 + verdict view, wallet 위에 슬라이드 인
    ├── overview/
    │   ├── MonitorCard.tsx          # 헤더 + 4-단 Pipeline + STEP DETAIL 로그 (override 가능)
    │   ├── Pipeline.tsx             # 노드 + 흐르는 커넥터 애니메이션
    │   ├── Demo1Runner.tsx          # Demo 1 컨트롤바 + RUN + ResultPanel + USE MOCK
    │   ├── Demo2Runner.tsx          # Demo 2 컨트롤바 + RUN + ResultPanel + USE MOCK
    │   ├── AuditHistory.tsx         # PRE/POST 칩 + ↗ ESCROW cross-link
    │   └── AuditList.tsx            # 정적 mock 리스트 (라우터 state 없을 때 폴백)
    ├── audit/
    │   ├── shared.tsx               # ScoreGauge, FindingsBreakdown, VulnerabilityCard, Meter
    │   ├── PreAuditLiveView.tsx     # /audit/pre — 컨트랙트 주소 Hero
    │   └── PostAuditLiveView.tsx    # /audit/post — tx 정보 Hero
    ├── escrow/
    │   ├── EscrowList.tsx           # /escrow 좌측 — escrowHistory 누적 + SHOW EXAMPLE DATA 토글
    │   └── EscrowDetailView.tsx     # /escrow 우측 — Hero / Trade / Decision / Settlement / Balances
    └── integrations/
        └── HookGrid.tsx
```

## Demo Flow

**Demo 1 — Pre-Audit (live)**
1. `/overview` → Scenario 1 토글 → 타깃 카드 (Aegis402SafeHook / VulnerableHook on Sepolia) 픽
2. ▶ RUN PRE-AUDIT → 우측 wallet 패널이 dim+blur, AgentInterceptModal 슬라이드 인
3. 모달 단계: `intercept` → `RPC eth_getCode` → `Etherscan getsourcecode` → `LLM analysis` → 모달이 `✓ ALLOW` / `✕ BLOCK`로 전환
4. ResultPanel CTA → `/audit/pre` 풀 리포트 (Hero 게이지 + V-001~V-006 카드)

**Demo 2 — Post-Audit (live)**
1. `/overview` → Scenario 2 토글 → 타깃 픽 (Normal / Sandwich victim swap on Sepolia)
2. ▶ RUN POST-AUDIT → 모달 단계: `tx received` → `RPC tx + receipt` → `decode logs + flows` → `LLM analysis` → verdict
3. ResultPanel CTA → `/audit/post` 풀 리포트 (tx Hero + 시나리오 vulnerability 리스트)
4. AuditHistory에 POST 엔트리 누적

**Demo 3 — Insured Escrow (fixture preview)**
- `/escrow` 직접 진입 → "SHOW EXAMPLE DATA" 토글 → Sepolia e2e:escrow:live 결과 두 건 미리보기
- 진짜 swap/decision tx etherscan 링크 작동 (실제 Sepolia)
- 별도 escrow API가 붙으면 Overview에서 라이브 트리거하도록 통합

## USE MOCK 토글

Demo 1, Demo 2 둘 다 컨트롤바에 `USE MOCK` 토글이 있다. 켜면 라이브 API 대신 [data/preaudit-mocks.ts](src/data/preaudit-mocks.ts) / [data/postaudit-mocks.ts](src/data/postaudit-mocks.ts)의 캡쳐 응답을 ~3초 안에 재생. 발표 중 LLM/RPC 다운 대비.

## Design System

- **Colors** — `src/constants/colors.ts`
- **Fonts** — Press Start 2P (UI 라벨) + IBM Plex Mono (주소/숫자)
- **Theme** — Aegis Arcade: dark navy + neon accent + scanline overlay
- **Severity colors** — critical `#FF4444` / high `#FF8A4D` / medium `#FFE600` / low `#7F77DD` / info `#A8FF3E`
- **RISK score 표시** — 모든 게이지/배지 위에 `RISK` 라벨 + "lower is safer · 0–19 info · 90+ critical" 안내

