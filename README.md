# AEGIS402 — Payment Guard System

x402 결제 표준을 위한 보안 레이어. EthGlobal 2026.

## Stack

- **React 18** + **TypeScript**
- **Vite** (build tool)
- No CSS framework — inline styles + CSS variables

## Quick Start

```bash
pnpm install
pnpm dev
```

Open [http://localhost:5173](http://localhost:5173)

## Build

```bash
pnpm build
pnpm preview
```

## Project Structure

```
src/
├── constants/
│   ├── colors.ts        # Design tokens (colors, fonts)
│   └── data.ts          # Static data, types
├── components/
│   ├── shared/
│   │   ├── Logo.tsx         # LogoMark + LogoFull
│   │   ├── Sidebar.tsx      # Navigation sidebar
│   │   ├── Topbar.tsx       # Page header bar
│   │   ├── WalletPanel.tsx  # Right wallet panel
│   │   └── StatusPill.tsx   # Status badges
│   ├── overview/
│   │   ├── MonitorCard.tsx  # Agent monitor + pipeline
│   │   ├── Pipeline.tsx     # 4-step pipeline nodes
│   │   └── LiveFeed.tsx     # Transaction feed
│   ├── audit/
│   │   └── AuditList.tsx    # Tab + accordion audit list
│   ├── escrow/
│   │   └── VaultCards.tsx   # Vault cards + detail panel
│   └── integrations/
│       └── HookGrid.tsx     # Hook grid + detail
├── pages/
│   ├── DashboardLayout.tsx  # Shared 3-column layout
│   ├── Landing.tsx          # Landing page
│   ├── Overview.tsx         # Overview (3 states)
│   └── index.ts             # Page exports
├── App.tsx                  # Router (useState-based)
├── main.tsx
└── index.css                # Global styles + scanlines
```

## Screens

| Screen key | Description |
|---|---|
| `landing` | Landing page with hero + features |
| `overview` | Overview — Processing state |
| `overview-blocked` | Overview — S-2' BLOCKED state |
| `overview-slippage` | Overview — S-7 Slippage state |
| `audit-pre` | Audit — Pre-audit tab |
| `audit-post` | Audit — Post-audit tab |
| `escrow` | Escrow vault management |
| `integrations` | Hook integrations |

## Design System

**Colors** — defined in `src/constants/colors.ts`  
**Fonts** — Press Start 2P (UI labels) + IBM Plex Mono (data/mono)  
**Theme** — Aegis Arcade: dark navy base, neon accents, scanline overlay

