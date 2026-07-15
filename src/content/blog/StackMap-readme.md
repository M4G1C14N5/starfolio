---
title: "StackMap README"
publishedAt: "2026-05-26"
updatedAt: "2026-07-15"
author: "Thomas Tsangou"
summary: "An inventory/mapping tool for your self-hosted network — documenting all the tools, services, and how they connect across your private infrastructure. Basically observability for your own homelab, so you (and eventually others) can see the full picture of what's running and how pieces relate."
---
# StackMap

An inventory/mapping tool for your self-hosted network — documenting all the tools, services, and how they connect across your private infrastructure. Basically observability for your own homelab, so you (and eventually others) can see the full picture of what's running and how pieces relate.

---

## What it does

StackMap renders a live, interactive architectural blueprint of my home infrastructure. It queries Docker on each host, classifies containers by tier, and lays them out as a directed graph (built on React Flow) so service relationships, container topology, and network configuration are visible at a glance.

---

## Implementation details

The implementation notes below are taken from the project's [`IMPLEMENTATION.md`](https://github.com/M4G1C14N5/StackMap/blob/main/IMPLEMENTATION.md) (the file is uppercase on disk — the lowercase lookup is why it appeared "missing").

### Multi-server asset collection

The `generateHomelabGraph` function accepts an array of `dockerInstances`, each mapped to a specific host (`claw-server` or `camued-server`). By iterating through these instances, the aggregator builds a unified node map while prefixing node IDs with the server hostname. This ensures unique React Flow node identifiers despite identical container names appearing across different physical hosts.

### Network edge construction

The edge generation logic classifies network traffic:

- **ZeroTier / VPN detection** — the logic evaluates the network name property. If it identifies `zerotier` or `mesh`, it applies distinct visual styling:
  - `stroke: '#8b5cf6'` (purple tint)
  - `strokeDasharray: '5,5'` (dashed line)
- **Standard traffic** — public or internal standard traffic uses a neutral grey solid line (`#475569`).

### 4-tier grid logic

The architecture uses a `yTracking` accumulator object. As the parser classifies a container into a tier (ingress, application, private, or backend), it selects the predefined X-coordinate and increments the Y-coordinate by 150px, keeping a clean vertical flow with no node overlap within columns.

---

## Stack

Pulled from `package.json`:

| Layer | Technology |
|-------|------------|
| Framework | Next.js 15 (App Router) |
| UI | React 19, Tailwind CSS v4, Framer Motion, Lucide React |
| Graph rendering | @xyflow/react 12 |
| Container inspection | dockerode |
| Database | pg (Postgres client) |
| Search / UX | use-debounce |
| CLI parsing | yargs |
| Language | TypeScript 5 |
| Deployment | Docker (Dockerfile + docker-compose.yaml) |

---

## Project structure (top level)

```
StackMap/
├── IMPLEMENTATION.md     # Implementation notes (multi-server, edges, grid)
├── README.md             # Stub (# StackMap) — kept intentionally minimal
├── Dockerfile
├── docker-compose.yaml
├── package.json
├── tsconfig.json
├── tailwind.config.js
├── postcss.config.{js,mjs}
├── public/
└── src/
```

---

## Source

- Repo: [github.com/M4G1C14N5/StackMap](https://github.com/M4G1C14N5/StackMap)
- Live: [stackmap.camuedlabs.org](https://stackmap.camuedlabs.org)
- Implementation notes: [`IMPLEMENTATION.md`](https://github.com/M4G1C14N5/StackMap/blob/main/IMPLEMENTATION.md)
