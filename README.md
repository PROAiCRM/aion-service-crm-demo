# AION Service CRM Demo

> A public, demonstration-only interface prototype for the first commercial product direction of AION OS.

![Status](https://img.shields.io/badge/status-public%20demo-2563eb)
![Maturity](https://img.shields.io/badge/maturity-prototype-f59e0b)
![Data](https://img.shields.io/badge/data-demo%20only-16a34a)

## Open the public demo

**Browser demo:** https://proaicrm.github.io/aion-service-crm-demo/

Use the demo for visual and interaction review only. A working page is not evidence of production readiness, security verification or commercial validation.

Read the public review boundary: [`docs/PUBLIC_DEMO_OVERVIEW.md`](docs/PUBLIC_DEMO_OVERVIEW.md)

## What this repository is

This repository presents the owner-approved visual direction and selected interaction concepts for **AION Service CRM** — a future operating system for smartphone service businesses.

The demo focuses on a clear mobile workflow and fast understanding of the service state. It is a public showcase, not the complete CRM codebase.

## Current demonstrated scope

- mobile-first service interface;
- visual repair-order workflow;
- demonstration navigation and states;
- static sample data;
- public presentation suitable for browser review.

## Important safety boundary

This repository contains **demonstration data only**.

It currently has:

- no production CRM API;
- no production database;
- no real authentication or session model;
- no real customer or employee data;
- no production QR access tokens;
- no legally binding electronic signature;
- no external AI calls;
- no verified production security boundary.

**This is not a production-ready or pilot-ready build.**

The private `PROAiCRM/AION-Service-CRM` repository remains the technical source of truth for product implementation. Public documentation must not be treated as proof that a feature is implemented, tested, or commercially validated.

## Product direction

AION Service CRM is being designed around a practical service-center cycle:

```text
Customer reception
        ↓
Diagnosis and approval
        ↓
Repair execution
        ↓
Quality control
        ↓
Payment and handover
        ↓
Warranty and service history
```

The longer-term direction includes mobile express repair, QR order status, customer consent, inventory, printing, analytics and AI-assisted workflows. These items have different maturity levels and are not all implemented in this public demo.

## Maturity map

| Area | Current public status |
|---|---|
| Mobile visual direction | Demonstrated prototype |
| Static repair workflow | Demonstrated prototype |
| Real authentication | Not included |
| Database and tenant isolation | Not included |
| Production QR workflow | Not included |
| Electronic consent and signature | Designed direction only |
| Inventory and accounting | Not included |
| AI-assisted camera search | Designed direction only |
| Commercial effectiveness | Not yet proven |

## Architecture principles

The product direction follows these AION principles:

- **Simplicity Before Abstraction**
- **Modular Monolith First**
- **One Core — Multi Platform**
- **Security and Privacy by Design**
- **Cost First Strategy**
- **Human Amplification**
- **Invisible AI**
- **Evidence Before Scaling**

## Repository structure

```text
.github/workflows/              GitHub automation
index.html                      demo entry point
docs/PUBLIC_DEMO_OVERVIEW.md   public review and evidence boundary
README.md                       public scope and safety boundary
```

Additional files may exist as the public demo evolves. The repository structure itself is not evidence of production readiness.

## Running the demo

For a local review, download or clone the repository and open `index.html` in a modern browser. Some browser features may behave differently when opened directly from the file system.

```bash
git clone https://github.com/PROAiCRM/aion-service-crm-demo.git
cd aion-service-crm-demo
```

## Roadmap boundary

Planned public-showcase work:

1. verify the browser demo on a real smartphone;
2. add verified screenshots and a visual overview;
3. keep the public maturity map aligned with evidence;
4. document the difference between concept, prototype and implemented product;
5. add release notes when a public demo version is explicitly approved.

This roadmap is a plan, not a delivery claim.

## License and reuse

No open-source license has been granted yet. Until a license is explicitly added, standard copyright restrictions apply.

## Project status

**Repository role:** public demonstration showcase  
**Current maturity:** prototype  
**Production readiness:** not established  
**Commercial validation:** not established

---

AION OS / AION Service CRM — public demonstration repository.
