# MP-005 AION Pain Scanner — Current-State Source Map v0.1

**Status:** SOURCE AUDIT MAP — DESIGN EVIDENCE ONLY  
**Date:** 2026-08-01  
**Technical source of truth:** `PROAiCRM/AION-Service-CRM`

> This map identifies reusable technical and conceptual anchors. It does not claim that a unified Pain Scanner implementation exists.

## 1. Executive finding

MP-005 does not start from zero. The private repository contains separate building blocks for:

- truth-class separation;
- deterministic replay and source-linked explanation;
- operational blockers and next-action projections;
- owner-control and cash-control read models;
- proof chains and deterministic recommendations;
- bounded deterministic rule catalogues;
- pilot metrics and hard Stop Conditions;
- mobile/desktop presentation directions.

However, no confirmed canonical implementation currently provides:

- registered pain-family normalizers;
- recurring-pattern aggregation;
- evidence-sufficiency evaluation;
- one-pain priority selection;
- causal hypothesis registry;
- improvement experiment ledger;
- measured MP-005 Victory.

## 2. Source anchors

### Private Draft PR #40 — EVE Living Service World

Relevant assets:

- deterministic event envelope;
- observed-state replay;
- explicit `OBSERVED / INFERRED / SIMULATED` separation;
- source-linked explanation;
- Reality Timeline;
- Action Receipts;
- owner comprehension experiment.

Reusable principle:

> inferred and simulated statements never change observed state.

Evidence boundary:

- synthetic/offline experiment;
- no live CRM integration;
- owner usability advantage not proven;
- not a Pain Scanner pattern engine.

### Private Draft PR #42 — Order Operational Projection

Relevant assets:

```text
observed state
→ blockers
→ one allowed action
→ reason/authority
→ consequence preview
→ Action Receipt
```

Reusable principles:

- status is not permission;
- frontend does not infer authority;
- blockers derive from server-owned facts/rules;
- inference/simulation cannot enable a command.

Gap:

- order-level projection, not cross-order recurring-pain analysis;
- no aggregation or experiment measurement.

### Private Draft PR #48 — owner-control and cash-control

Relevant assets:

- owner-control dashboard endpoint;
- cash-control endpoint;
- service promises and operational control data;
- safe Evidence policy direction.

Critical architecture risk:

- dashboard read may call `app.refresh_promise_status` and update derived promise state.

MP-005 requirement:

- pain assessment must be a pure read projection or use an explicit separately governed refresh command;
- ordinary view/refresh cannot hide business mutations.

Current status:

- endpoint fragments exist;
- current PR static/runtime gates are incomplete;
- unified Pain Scanner not present.

### Private Draft PR #73 — AION Product Observatory

Relevant assets:

- proof chains;
- risk trigger → mitigation → Owner Gate;
- deterministic recommendation;
- Owner Brief;
- truthful metric semantics;
- evolution/change history;
- blockers and attention states;
- source/privacy/scope gates.

Reusable principles:

- every recommendation should expose its proof chain;
- missing relationships appear as gaps;
- commercial readiness is not invented;
- owner receives one bounded next step.

Gap:

- project/product portfolio domain, not Service CRM operational pain detection;
- source implementation is separate Draft and not canonical runtime.

### Private Draft PR #171 — deterministic rule catalogue

Relevant assets:

- immutable versioned rule definitions;
- exact inputs and output ownership;
- default deny;
- no hidden defaults;
- acyclic dependency manifest;
- bounded invalidation closure;
- separation of semantic claim identity and time-bound evaluation identity;
- objective readiness separate from caller eligibility;
- no generic DSL or separate rule service.

Reusable principles for MP-005:

- each pain-family rule has exact inputs and one owned output;
- missing/extra/duplicate inputs block evaluation;
- rule changes create new versions;
- stale input invalidates current assessment;
- no model-created canonical rules.

Boundary:

- PR #171 is designed for one synthetic print recommendation;
- it is not implemented and must not be treated as a ready generic rule engine;
- MP-005 should reuse the discipline, not import the whole architecture blindly.

### Private Issue #68 — pilot completion and Service Management direction

Relevant product direction:

- “Risks & Deviations”;
- “Cash”;
- “Price & Margin”;
- owner sees what requires attention and the next step;
- customer/order/search/print flow and data-quality requirements.

Reusable pain candidates:

- failed repair creation;
- service-selection confusion;
- print/document interruption;
- search and customer-data gaps;
- process/menu complexity.

Boundary:

- Issue #68 is a broad implementation program, not a frozen Pain Scanner source contract.

### Private merged PR #25 — Day 1–7 Control Center

Relevant assets:

- deterministic `STOP / EXTEND / GO_CANDIDATE` logic;
- hard Stop Conditions for money/stock mismatch, duplicate, backup failure, prohibited-data incident and rollback unavailability;
- aggregate-only daily fields;
- explicit owner-decision boundary.

Reusable principles:

- critical guardrail overrides favorable totals;
- recommendation does not authorize action;
- aggregate privacy can coexist with deterministic decision rules.

Boundary:

- pilot-control decision pack, not recurring-pain discovery;
- historical source may not represent current canonical V10.2 lineage.

### Private merged PR #16 — network resilience

Relevant assets:

- offline local work;
- lost response after commit;
- idempotent retry;
- exactly one command receipt;
- PostgreSQL outage/recovery;
- backup/restore Evidence.

Reusable pain family:

- `UNKNOWN_MUTATION_RESULT_PATTERN`.

Boundary:

- historical resilience Evidence does not prove current browser/runtime integration across Draft branches.

### Private Draft PR #143 — web mutation ambiguity

Relevant assets:

- stable mutation identity across timeout/reload/manual retry;
- no automatic business retry;
- pending journal without request body/PII;
- explicit ambiguous-result state.

Reusable principle:

- repeated UI attempts with one logical identity form one pain episode until reconciliation.

Boundary:

- implemented in isolated branch; executable browser/server Evidence pending.

### Public Issue #2 — initial improvement metrics

Already records preliminary MP-005 metrics:

- recommendations accepted;
- evidence-confirmed accuracy;
- measurable recovered time/revenue range;
- misleading recommendation rate.

This package refines those metrics with definitions, baseline, guardrails and causal limits.

## 3. Related product packages

### MP-001 Smart QR Status

Potential measured effect:

- reduce `STATUS_INQUIRY_LOAD_PATTERN`.

Dependency boundary:

- QR access failures must be counted as a guardrail;
- current MP-001 canonical integration remains blocked.

### MP-002 Mobile Express Intake

Potential measured effect:

- reduce `LATE_OR_BYPASSED_INTAKE_PATTERN`;
- reduce material intake corrections.

Dependency boundary:

- reliable work-start and consent Evidence required.

### MP-003 Owner Pulse

Consumes the selected pain as one bounded owner-facing item.

Boundary:

- Owner Pulse must not reimplement pain calculation;
- Pain Scanner must not duplicate money/overdue cards already owned by MP-003.

### MP-004 Cash Leakage Guard

Provides deduplicated governed cases and outcomes that may be aggregated into recurring process patterns.

Boundary:

- open case is not confirmed loss;
- Pain Scanner cannot act on or close cases.

## 4. Missing canonical source inventory

Before implementation, the owner-PC/canonical-source session must identify exact source fields for:

- service promise creation/due/completion;
- waiting reason/start/exit;
- work-start Evidence;
- intake created/corrected fields;
- customer contact classification;
- part needed/reserved/consumed/released timestamps;
- repair return/rework relationship;
- document/print required states;
- mutation ambiguity and reconciliation;
- MP-004 case family/outcome;
- timezone and trusted clock;
- synthetic/training exclusions;
- tenant/workspace scope.

## 5. Architecture gaps

- no approved pain episode table or projection;
- no decision whether assessments are on-demand or materialized;
- no pure-read current promise projection decision;
- no immutable pain assessment receipt;
- no hypothesis catalogue;
- no experiment contract/receipt store;
- no source completeness baseline;
- no privacy suppression calibration;
- no current PostgreSQL/RLS proof for MP-005;
- no mobile/desktop integration;
- no pilot Evidence.

## 6. Recommended minimal architecture direction

Start with a modular-monolith read-side module:

```text
existing Core queries/events
→ pain source adapters
→ in-memory or bounded SQL episode projection
→ deterministic assessment
→ read-only API
→ owner review
```

Do not start with:

- separate analytics database;
- event-stream platform;
- generic rules service;
- vector database;
- LLM root-cause service;
- cross-product data duplication.

Persistence is added only if assessment history/experiment Evidence requires it and after an RFC/ADR.

## 7. WIP boundary

Current engineering WIP remains MP-001.

MP-005 status:

- product package design only;
- no private implementation branch authorized;
- no canonical database migration;
- no real data;
- no pilot;
- no merge/deploy.

## 8. Honest conclusion

The project has enough design and source fragments to make MP-005 credible, but not enough canonical integration Evidence to call it implemented.

Current status:

`DESIGNED PRODUCT PACKAGE / SOURCE ANCHORS IDENTIFIED / UNIFIED IMPLEMENTATION NOT PRESENT / VICTORY NOT MEASURED`.