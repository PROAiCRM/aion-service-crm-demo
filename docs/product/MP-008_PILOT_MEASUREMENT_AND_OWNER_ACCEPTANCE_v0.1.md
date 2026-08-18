# MP-008 Smart Warehouse — Pilot Measurement & Owner Acceptance v0.1

**Status:** DESIGNED — PILOT NOT AUTHORIZED  
**Date:** 2026-08-01

## 1. Purpose

Test whether Smart Warehouse improves inventory truth and repair continuity without false availability, duplicate movements, excessive staff burden or unsupported financial claims.

## 2. Pilot research questions

1. Do calculated quantities match approved source events and physical sample counts?
2. Are reservations and movements idempotent and explainable?
3. Does the owner understand the top warehouse action within 60 seconds?
4. Does the selected action improve a predeclared shortage, reservation or ageing outcome?
5. Are contradictions surfaced rather than hidden?
6. Is the product better than the current manual stock review?

## 3. Stages

### Stage 0 — Source readiness

- canonical source lineage proven;
- exact SKU/location/movement fields inventoried;
- quantity formula and lifecycle frozen;
- no real mutation.

### Stage 1 — Synthetic matrix

Test:

- reserve/consume/release happy paths;
- shortage;
- duplicate command;
- lost response;
- stale version;
- physical return pending/confirmed;
- quarantine;
- negative/impossible quantity;
- cross-tenant attempt;
- missing opening balance;
- unit/location mismatch;
- ageing unknown.

### Stage 2 — Historical reconciliation shadow

Compare derived projection with historical movements and bounded physical sample where lawful/available. No workflow change.

### Stage 3 — Staff rehearsal

Synthetic/friendly inventory with mobile and desktop flows.

### Stage 4 — Limited real pilot

One location and bounded SKU family, after separate Owner Gate.

### Stage 5 — Repeat or stop

Second comparable window/SKU family or explicit stop/revision.

## 4. Baseline

Measure current process:

- stock discrepancies in sampled SKUs;
- repairs blocked by parts;
- time to identify availability;
- expired/unused reservations;
- emergency purchases;
- duplicate/corrected movements;
- owner review time;
- staff data-entry burden;
- unknown cost/age coverage.

## 5. Primary pilot metrics

### Quantity accuracy

Share of sampled SKU/location projections matching approved event reconstruction and physical verification tolerance.

Working target: 100% arithmetic agreement or explicit `UNKNOWN/CONTRADICTION`.

### Movement integrity

- duplicate logical effects: 0;
- unknown results reconciled: 100% in sample;
- movement without receipt: 0;
- invalid consume/release transition: 0.

### Shortage/service continuity

Selected metric such as:

- share of confirmed repairs blocked by shortage;
- shortage-blocked duration;
- reservation fulfilment rate.

Target frozen after baseline.

### Reservation quality

- expired reservation share;
- release outcome;
- false release causing shortage: 0.

### Owner comprehension

At least 80% correct sessions within 60 seconds.

### Action conclusion rate

At least 80% of reviewed actions receive a valid outcome receipt.

## 6. Ageing/working-capital metrics

Only when sources support them:

- quantity older than approved threshold;
- known recorded cost tied to that quantity;
- disposition outcome;
- actual supplier refund/sale/cash receipt;
- purchase reduction candidate versus realized purchase avoidance.

No profit attribution without complete cost and causal Evidence.

## 7. Guardrails

- critical repair blocked by false recommendation;
- employee handling-time increase;
- missing/late movement rate;
- customer promise error;
- emergency purchase increase;
- stockout increase;
- employee disputes;
- cross-tenant/privacy incident;
- autonomous purchase/adjustment;
- cost/margin misstatement.

## 8. Owner Acceptance questions

1. What is physically/systemically known?
2. What is reserved and available?
3. Is any quantity uncertain or contradictory?
4. Which repair/demand is affected?
5. What one action is proposed?
6. Who may approve it?
7. What is the consequence and receipt?
8. What would stop the pilot?

## 9. Immediate STOP

- cross-tenant access;
- false availability causes unsafe promise or repair failure;
- duplicate consumption/release/return;
- movement history deletion;
- unknown result triggers blind retry;
- unauthorized adjustment/purchase;
- physical return assumed without confirmation;
- employee accused automatically;
- exact profit claim without Evidence;
- critical backup/rollback unavailable.

## 10. Candidate first pilot

Recommended after source review:

**Expired reservation and shortage truth for a small set of common display/battery SKUs.**

Why:

- source anchors already exist;
- direct link to repairs;
- bounded action;
- no supplier integration required;
- measurable available quantity and blocked time;
- reversible feature flag.

## 11. Evidence package

- frozen definitions;
- source map;
- synthetic matrix;
- PostgreSQL/RLS results;
- event reconstruction sample;
- physical count receipt where used;
- UX comprehension;
- action/guardrail outcomes;
- owner decision;
- risks/corrections;
- Session Handoff.

## 12. Honest maturity

- pilot plan: designed;
- baseline: not measured;
- physical count: not performed;
- real pilot: not authorized;
- Victory: `NOT_MEASURED`.