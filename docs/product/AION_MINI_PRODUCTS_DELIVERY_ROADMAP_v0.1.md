# AION Mini Products — Controlled Delivery Roadmap v0.1

**Status:** APPROVED DELIVERY PLAN — IMPLEMENTATION NOT YET VERIFIED  
**Date:** 2026-08-01  
**Owner decision:** implement, develop and improve the approved mini-products  
**Source of truth:** GitHub

## 1. Objective

Move the approved mini-products from hypotheses to tested pilot capabilities without building five parallel unfinished products.

## 2. Delivery rule

Only one mini-product may be in active engineering implementation at a time. The next product enters implementation only after the current product has:

- an approved scope boundary;
- identified source-code integration points;
- passing acceptance tests;
- recorded evidence;
- an owner-facing pilot metric;
- a rollback path.

## 3. Delivery sequence

### Gate 0 — Source integration and truth recovery

Before implementation claims:

- import or connect the actual CRM source;
- identify canonical branch and runtime;
- map database schema, order state machine, authentication, tenant boundary, audit, printing and QR behavior;
- create MP-001 Current-State Gap Map;
- confirm that no client secrets or production data enter this public demo repository.

**Exit evidence:** repository paths, commit SHA, test commands, screenshots or logs, identified gaps.

### Gate 1 — MP-001 Smart QR Status

Deliver the smallest safe client-status loop:

1. public-safe order projection;
2. random revocable access token;
3. client-safe status vocabulary;
4. mobile status page;
5. employee preview;
6. QR on receipt;
7. rate limiting and cross-tenant denial;
8. baseline and pilot metrics.

**Explicitly deferred:** payment, chat, photos, predictive deadlines, AI explanations.

### Gate 2 — MP-002 Mobile Express Intake

Only after MP-001 uses reliable order data:

- under-two-minute intake target;
- minimum required fields;
- electronic consent and signature;
- QR handoff to the client;
- camera-assisted model search without saving images;
- employee bypass measurement.

### Gate 3 — MP-003 Owner Pulse

Use proven operational facts, not estimated dashboards:

- received money today;
- unpaid completed orders;
- overdue orders;
- waiting-for-client orders;
- one deterministic priority action with evidence.

### Gate 4 — MP-004 Cash Leakage Guard

Introduce explainable control rules only after event and audit quality are verified:

- issue with debt;
- excessive discount;
- repeated cancellation;
- stock movement without linked order;
- human review and reason capture.

No guilt scores and no automatic sanctions.

### Gate 5 — MP-005 AION Pain Scanner

Start with deterministic rules. One pain, one evidence chain, one reversible action.

AI may later improve wording or rank already evidenced rules, but may not invent losses, blame people or make irreversible decisions.

## 4. Improvement loop for every mini-product

Each pilot cycle follows:

**Pain → baseline → smallest change → test → evidence → owner review → improve or stop.**

Mandatory questions:

- Did the customer pain measurably decrease?
- Did employee work become faster or harder?
- Did security or privacy risk increase?
- Is the result worth its ongoing cost?
- Can the module be removed or disabled safely?
- Is the value reusable in other service businesses?

## 5. Shared-core components to reuse

The mini-products should reuse one modular-monolith core:

- identities, roles and sessions;
- tenant isolation;
- service-order state machine;
- audit/action receipts;
- public projection boundary;
- printing profiles;
- event and metric collection;
- feature flags;
- notification adapters.

Do not create separate services or duplicate customer/order models for each mini-product.

## 6. Quality gates

A maturity label changes only with evidence:

- **Designed:** approved contract and acceptance criteria.
- **Prototype:** usable flow exists, but architecture or evidence may be incomplete.
- **Implemented:** code and migration exist in the canonical repository.
- **Tested:** automated and manual acceptance checks pass.
- **Pilot validated:** real users completed the flow and metrics were recorded.
- **Commercially proven:** a customer paid or retained payment because of demonstrated value.

## 7. Current state

- MP-001: designed; implementation not verified.
- MP-002: approved concept; implementation not verified in this repository.
- MP-003: hypothesis.
- MP-004: hypothesis; some control rules may exist elsewhere and require verification.
- MP-005: signature-product hypothesis; blocked by data-quality dependencies.

## 8. Active work limit

**Active engineering product:** MP-001 Smart QR Status.  
**Next mandatory task:** connect or import the canonical CRM source and complete the Current-State Gap Map.

## 9. Main risks

- public repository receives internal source, secrets or client data;
- documentation gets ahead of working code;
- parallel implementation creates duplicated logic;
- AI is added before reliable operational data;
- status page leaks internal or personal fields;
- employees bypass intake due to friction;
- control alerts damage trust through false accusations.

## 10. Owner approvals still required

Explicit owner confirmation is required before:

- publishing private production source or data;
- changing production access, databases or tenant policies;
- enabling real client public links;
- sending automatic messages to clients;
- deploying to a production environment;
- activating employee-control alerts in real operations.
