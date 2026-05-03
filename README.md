# AEGIS402 Webapp

AEGIS402 데모용 프론트엔드. x402 결제 흐름을 사전·사후 감사하고, 위험 트랜잭션을 에스크로 + 보험풀로 연결하는 가드 월렛의 시연 UI.

EthGlobal 2026.

## Stack

- **React 18** + **TypeScript**
- **Vite** (build tool)
- No CSS framework — inline styles + design tokens

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

## Build

```bash
npm run build
npm run preview
```

## Demo Scenarios

발표 시나리오 1·2·3과 화면 매핑:

| Scenario | 메시지 | 사용 화면 | 백엔드 레포 |
|---|---|---|---|
| **1. 사전감사** | 취약 훅 차단 | `overview-blocked` → `audit-pre` | [`pre-audit/`](../pre-audit), [`x402-hook/`](../x402-hook) |
| **2. 사후감사** | 샌드위치 검출 | `overview-slippage` → `audit-post` | [`post-audit/`](../post-audit) |
| **3. 에스크로 + 보험** | BLOCK_AND_CLAIM, 보험풀 환급 | `escrow` (Holding → ClaimPaid) | [`escrow-hook/`](../escrow-hook) |

## Project Structure

```
src/
├── App.tsx                     # Screen-state router
├── main.tsx
├── index.css                   # Global styles + scanline overlay
├── constants/
│   ├── colors.ts               # Design tokens
│   └── data.ts                 # Screen types + mock data
├── pages/
│   ├── Landing.tsx             # Hero + feature cards
│   ├── DashboardLayout.tsx     # Sidebar + Topbar + WalletPanel
│   ├── Overview.tsx            # Scenario states
│   └── Pages.tsx
└── components/
    ├── shared/                 # Sidebar, Topbar, WalletPanel, StatusPill, Logo
    ├── overview/               # MonitorCard, Pipeline, LiveFeed
    ├── audit/AuditList.tsx     # PRE / POST tabs + accordion
    ├── escrow/VaultCards.tsx   # Vault cards + detail panel
    └── integrations/HookGrid.tsx
```

## Screen Keys

| Screen key | 설명 |
|---|---|
| `landing` | 진입 화면 |
| `overview` | Scenario 진행 중 (processing) |
| `overview-blocked` | Scenario 1 — 사전감사 차단 |
| `overview-slippage` | Scenario 2 — 사후감사 슬리피지 검출 |
| `audit-pre` | 사전감사 결과 (vulnerabilities 리스트) |
| `audit-post` | 사후감사 결과 (slippage / value imbalance) |
| `escrow` | Scenario 3 — 에스크로 + 보험풀 |
| `integrations` | Hook 등록 정보 |

## Design System

- **Colors** — `src/constants/colors.ts`
- **Fonts** — Press Start 2P (UI 라벨) + IBM Plex Mono (데이터)
- **Theme** — Aegis Arcade: dark navy + neon accent + scanline overlay

