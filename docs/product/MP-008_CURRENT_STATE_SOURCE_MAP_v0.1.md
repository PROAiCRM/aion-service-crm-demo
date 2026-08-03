# MP-008 Smart Warehouse — Current-State Source Map v0.1

**Status:** SOURCE AUDIT MAP — DESIGN EVIDENCE ONLY  
**Date:** 2026-08-01  
**Technical source of truth:** `PROAiCRM/AION-Service-CRM`

> This map identifies reusable anchors. It does not claim a unified Smart Warehouse implementation exists.

## 1. Executive finding

The private repository already contains real inventory-domain foundations:

- service orders and parts;
- reservation/consumption/release directions;
- shortage blocker;
- return and cancellation gates;
- money/stock mismatch Stop Condition;
- idempotency and lost-response handling;
- owner-control and allowed-action projection patterns.

What is not established as one canonical product:

- exact current quantity projection across all states;
- physical count and variance workflow;
- ageing/overstock semantics;
- governed reorder candidate;
- one prioritized warehouse action;
- purchasing boundary;
- MP-008 pilot Evidence.

## 2. Source anchors

### Merged PR #13 — E2E exception gates

Confirmed historical tests include:

- part shortage blocks completion;
- unused reservation release;
- repeat reservation after release;
- QC/debt/return interactions;
- disposable PostgreSQL and HTTP Evidence.

Reusable:

- reservation release is a governed event;
- shortage is a real blocker;
- inventory exception belongs in end-to-end flow.

Boundary:

- historical merged source may not equal current V10.2 canonical line;
- no complete Smart Warehouse UX, ageing or purchasing.

### Merged PR #16 — network resilience

Reusable:

- lost response after commit;
- stable logical identity;
- idempotent result;
- PostgreSQL outage/recovery;
- one receipt.

Application:

- reserve/consume/release/return must never blind-retry.

### Merged PR #25 — Pilot Control Center

Confirmed design/Evidence:

- money/stock mismatch is hard Stop Condition;
- aggregate-only fields;
- deterministic recommendation does not authorize action;
- rollback and reconciliation are mandatory.

Application:

- favorable warehouse metrics cannot override a stock contradiction.

### Draft PR #42 — Operational Projection

Reusable shape:

```text
observed state
→ blockers
→ one allowed action
→ authority
→ consequence preview
→ Action Receipt
```

Application:

- MP-008 primary card uses server-owned allowed actions;
- frontend never infers permission from quantity/status.

### Draft PR #48 — Owner/Cash Control

Reusable:

- owner-facing read projections;
- service promises and operational aggregates;
- cash/exception visibility.

Risk:

- some read flows may call refresh functions with hidden side effects.

MP-008 requirement:

- quantity projection read is pure or refresh is a separate explicit governed command.

### Draft PR #143 — mutation ambiguity

Reusable:

- pending journal without raw PII/body;
- stable mutation identity across timeout/reload;
- no automatic business retry;
- explicit unknown-result state.

Application:

- inventory movement cannot be repeated merely because UI did not receive response.

### Draft PR #171 — deterministic rule discipline

Reusable principles:

- exact inputs;
- no hidden defaults;
- immutable rule versions;
- default deny;
- bounded invalidation;
- no generic DSL requirement.

Boundary:

- not a ready generic warehouse rule engine;
- reuse discipline, not architecture wholesale.

### Issue #68 — service-management direction

Relevant directions:

- warehouse/WMS requirement;
- owner analytics;
- price and margin concerns;
- risks/deviations;
- complete service cycle.

Boundary:

- broad programme, not frozen MP-008 contracts.

## 3. Product dependencies

### MP-002 Express Intake

Provides repair/device/service demand. Part selection must remain optional/confirmed according to diagnosis stage.

### MP-004 Cash Leakage Guard

Owns concrete stock exception cases and reconciled outcomes. MP-008 surfaces inventory truth/actions but cannot call discrepancy theft or confirmed loss.

### MP-005 Pain Scanner

May aggregate recurring stockouts, expired reservations or correction patterns. It does not own individual movement commands.

### MP-006 Opportunity Engine

May use confirmed available part or explicit waitlist demand only after MP-008 truth and consent gates pass.

### MP-003 Owner Pulse

May show the selected warehouse action but not recalculate quantities.

## 4. Required canonical source inventory

Before implementation identify exact fields/functions for:

- SKU/variant/compatibility;
- warehouse/location;
- opening/on-hand basis;
- reservations and statuses;
- consumption;
- release;
- return/reversal/quarantine;
- order-part relationship;
- unit of measure;
- movement timestamps and versions;
- movement/command receipts;
- supplier/inbound records if any;
- purchase/landed cost source;
- physical count/adjustment source;
- synthetic/training exclusions;
- tenant/RLS scope.

## 5. Architecture gaps

- no approved inventory projection contract;
- no proven pure-read quantity API;
- no current physical count workflow;
- no ageing source coverage;
- no purchase approval model;
- no supplier/lead-time governance;
- no one-action priority engine;
- no current RLS/runtime Evidence for MP-008;
- no iPhone/desktop pilot.

## 6. Minimal architecture direction

Use modular monolith and existing PostgreSQL/Core movements:

```text
existing inventory/order facts
→ exact source adapters
→ deterministic quantity projection
→ blocker/action policy
→ read-only owner/staff projection
→ existing command handlers
→ immutable receipt
```

Do not start with:

- separate warehouse microservice;
- duplicate ledger;
- Kafka/event platform;
- vector DB;
- AI demand forecaster;
- autonomous purchasing.

## 7. WIP boundary

- product design only;
- no implementation branch in private CRM;
- no migration;
- no real inventory;
- no purchase action;
- MP-001 remains only active engineering mini-product.

## 8. Honest conclusion

Current status:

`DESIGNED PRODUCT PACKAGE / REAL INVENTORY SOURCE ANCHORS EXIST / UNIFIED MP-008 IMPLEMENTATION NOT CONFIRMED / VICTORY NOT MEASURED`.