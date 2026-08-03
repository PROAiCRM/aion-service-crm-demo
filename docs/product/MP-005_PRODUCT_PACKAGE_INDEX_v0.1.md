# MP-005 AION Pain Scanner — Product Package Index v0.1

**Package status:** COMPLETE PRODUCT DESIGN PACKAGE — DRAFT REVIEW  
**Date:** 2026-08-01  
**Product ID:** `MP-005`  
**Victory:** `NOT_MEASURED`  
**Engineering:** NOT STARTED  
**Canonical tracking:** public Issue #15

## 1. Package purpose

This package defines AION Pain Scanner as a standalone product that:

- identifies one recurring operational pain;
- preserves exact Evidence and limitations;
- separates observed pattern from causal hypothesis;
- selects one priority without an opaque health score;
- proposes one reversible experiment;
- accepts supported, unsupported and inconclusive outcomes honestly;
- protects customer and employee privacy;
- does not duplicate MP-003 or MP-004.

## 2. Canonical documents

### 2.1 Product Passport & Victory Contract

`MP-005_PRODUCT_PASSPORT_AND_VICTORY_CONTRACT_v0.1.md`

Defines:

- customer and owner pain;
- product promise;
- First-Value Moment;
- MVP and non-goals;
- relationship to MP-004;
- Human/AI boundary;
- Victory Contract;
- Value Score;
- commercial hypothesis;
- stop criteria;
- honest maturity.

### 2.2 Pain Taxonomy & Aggregation Boundary

`MP-005_PAIN_TAXONOMY_AND_AGGREGATION_BOUNDARY_v0.1.md`

Defines:

- source fact versus episode versus pattern versus cause;
- minimum episode contract;
- ten candidate pain families;
- observation windows;
- denominator and segmentation rules;
- deduplication;
- burden dimensions;
- exclusions, privacy and anti-gaming boundaries.

### 2.3 Evidence Sufficiency & Truth-Class Policy

`MP-005_EVIDENCE_SUFFICIENCY_AND_TRUTH_CLASS_POLICY_v0.1.md`

Defines:

- `OBSERVED`;
- `DERIVED_PATTERN`;
- `INFERRED_CAUSE`;
- `SIMULATED_EFFECT`;
- `UNKNOWN`, `CONTRADICTION`, `ASSUMPTION`;
- sufficiency states;
- sample, freshness, missing-data and contradiction behavior;
- causal evidence labels;
- explanation and AI boundaries.

### 2.4 Causal Hypothesis & Contradiction Policy

`MP-005_CAUSAL_HYPOTHESIS_AND_CONTRADICTION_POLICY_v0.1.md`

Defines:

- hypothesis contract;
- mechanism requirement;
- competing explanations;
- contradiction classes;
- causal promotion ladder;
- correlation guardrails;
- prohibition of “root cause” claims in v0.1;
- human review and AI proposal boundary.

### 2.5 Priority Selection & One-Pain UX Policy

`MP-005_PRIORITY_SELECTION_AND_ONE_PAIN_UX_POLICY_v0.1.md`

Defines:

- one primary pain;
- eligibility gates;
- visible priority dimensions;
- P0–P3 and `NO_RELIABLE_PAIN` states;
- deterministic precedence and tie-breakers;
- primary card and secondary queue;
- non-selection explanation;
- owner controls and recommendation stability;
- 60-second UX objective.

### 2.6 Improvement Experiment & Stop Criteria

`MP-005_IMPROVEMENT_EXPERIMENT_AND_STOP_CRITERIA_v0.1.md`

Defines:

- one-pain/one-change experiment contract;
- eligible and prohibited interventions;
- baseline and primary outcome;
- material threshold and guardrails;
- experiment lifecycle;
- employee transparency;
- contamination;
- supported/not-supported/inconclusive outcomes;
- immutable measurement receipt;
- scaling and rollback.

### 2.7 Privacy, Role & Non-Blame Boundary

`MP-005_PRIVACY_ROLE_AND_NON_BLAME_BOUNDARY_v0.1.md`

Defines:

- aggregate-first role projections;
- privacy-minimized fields;
- free-text and employee-data prohibitions;
- non-blame language;
- correction rights;
- small-group privacy;
- experiment transparency;
- external AI boundary;
- logging and escalation boundaries.

### 2.8 Pilot Measurement & Owner Acceptance

`MP-005_PILOT_MEASUREMENT_AND_OWNER_ACCEPTANCE_v0.1.md`

Defines:

- staged pilot;
- manual baseline;
- recommendation accuracy and misleading-rate metrics;
- owner comprehension;
- valid experiment conclusion rate;
- ground-truth review;
- Owner Acceptance checklist;
- immediate Stop Conditions;
- candidate first pilots;
- allowed and prohibited value statements.

### 2.9 Current-State Source Map

`MP-005_CURRENT_STATE_SOURCE_MAP_v0.1.md`

Maps:

- PR #40 EVE truth classes/replay;
- PR #42 Operational Projection;
- PR #48 owner/cash control and hidden refresh risk;
- PR #73 proof chains and Owner Brief;
- PR #171 deterministic rule discipline;
- Issue #68 service-management direction;
- PR #25 aggregate Stop Conditions;
- PR #16 and #143 mutation ambiguity/resilience;
- public Issue #2 metrics;
- MP-001–MP-004 dependencies;
- missing source inventory and architecture gaps.

### 2.10 Delivery Gates & Evidence Plan

`MP-005_DELIVERY_GATES_AND_EVIDENCE_PLAN_v0.1.md`

Defines `DG5-0 → DG5-15`:

```text
product review
→ canonical source/WIP
→ source inventory
→ minimal architecture RFC
→ two-family definition freeze
→ deterministic tests
→ PostgreSQL/RLS
→ pure-read API
→ truth/explanation
→ privacy/non-blame
→ mobile/desktop comprehension
→ historical shadow mode
→ experiment rehearsal
→ limited real experiment
→ Victory
→ repeat/revise/park/stop
```

## 3. Product invariants

1. One event is not a recurring pain.
2. Recurrence is not causation.
3. Missing data is not zero.
4. Counts without denominator are not prevalence.
5. Unlike repairs are not aggregated blindly.
6. One underlying event/case is counted once.
7. One primary pain is shown.
8. One primary intervention is tested.
9. Critical guardrail failure overrides favorable outcome.
10. Employee identity is not a default segmentation dimension.
11. No business-health score.
12. No employee ranking, guilt or fraud score.
13. No exact money/time claim without direct governed measurement.
14. No hidden write side effect on assessment reads.
15. AI cannot upgrade truth or authorize action.
16. A failed hypothesis is a valid learning result.
17. MP-005 does not create a second customer/order/payment/inventory truth.
18. MP-001 remains the only active engineering mini-product.

## 4. Product relationship map

```text
MP-002 Express Intake
→ trustworthy intake/work-start facts

MP-001 Smart QR Status
→ possible intervention for status inquiry pain

MP-004 Cash Leakage Guard
→ governed deduplicated exception outcomes

shared Core facts
→ MP-005 Pain Scanner
→ one selected pain + one experiment
→ MP-003 Owner Pulse / MP-000 AION Today

supported pain reduction
→ MP-006 Opportunity Engine candidates
→ MP-010 Business Memory experiment history
```

## 5. Approved product statement

> AION Pain Scanner does not tell the owner that “the business is unhealthy”. It shows one recurring, measurable operational pain, separates fact from hypothesis and asks for one reversible test whose result can prove the recommendation wrong.

## 6. Open product decisions

Before implementation:

1. Which first pain family has sufficient canonical source data?
2. Are assessments computed on demand or materialized?
3. Is an experiment ledger added now or after shadow mode?
4. What minimum samples are appropriate for the pilot volume?
5. Which small-group privacy threshold is required?
6. Which role besides owner may view and approve experiments?
7. How is inquiry classification captured without extra staff burden?
8. Is reliable work-start Evidence available for late-intake analysis?
9. Can promise/wait projections become pure read without hidden refresh?
10. Which one pain family produces the fastest valid Victory Evidence?

## 7. Dependencies and blockers

### Product dependencies

- approved Product Factory/Victory System;
- stable MP-005 ID and catalog entry;
- MP-003/MP-004 boundaries;
- Data Classification & AI Boundary Policy;
- role/Principal and tenant isolation principles.

### Engineering blockers

- canonical source lineage recovery;
- WIP freeze/evidence queue;
- MP-001 active engineering disposition;
- exact source field inventory;
- pure-read projection decision;
- PostgreSQL/RLS Evidence;
- pilot Owner Gate.

## 8. Current maturity

| Object | Status |
|---|---|
| Product direction | approved |
| Full product package | designed |
| Pain taxonomy | designed |
| Evidence/truth policy | designed |
| Causal policy | designed |
| One-pain UX | designed |
| Experiment policy | designed |
| Privacy/non-blame policy | designed |
| Pilot plan | designed |
| Source anchors | identified |
| Canonical source inventory | not complete |
| Unified implementation | not present |
| Runtime tests | none |
| Real pilot | not authorized |
| Victory | `NOT_MEASURED` |
| Commercial result | not proven |

## 9. Risk summary

- weak data coverage creates convincing but unreliable recommendations;
- process recording changes can fake improvement;
- repeated incidents can be double counted;
- owner may confuse hypothesis with fact;
- employee trust can be harmed by blame-oriented use;
- too many pain families create complexity before value;
- experiment contamination can produce false success;
- product can duplicate ordinary analytics if one-pain discipline is lost;
- premature external AI adds privacy, cost and hallucination risk;
- recommendation churn can reduce trust.

## 10. Session completion record

### Done

- full MP-005 Product Factory package prepared;
- pain/cause/experiment boundaries separated;
- source anchors mapped;
- pilot and Delivery Gates defined;
- engineering not started.

### Decisions recorded

- one recurring pain, not a dashboard;
- no root-cause claim in v0.1;
- one reversible intervention;
- no employee scoring;
- no generic rule/analytics platform;
- deterministic MVP without external AI;
- failed experiment accepted as valid Evidence.

### Documents requiring future synchronization

After owner review/merge decision:

- `AION_PRODUCT_CATALOG` maturity entry;
- product delivery roadmap;
- Evidence Register;
- Risk Register;
- Decision Log;
- File Registry;
- Session Handoff.

### Unfinished

- owner review of exact branch head;
- first pain-family selection;
- source field inventory;
- architecture RFC;
- implementation and tests;
- shadow mode;
- experiment;
- Victory.

### Stop point

`MP-005_PRODUCT_PACKAGE_COMPLETE_FOR_DRAFT_REVIEW`.

### Next mandatory product-design step

Prepare `MP-006 Opportunity Engine — Product Passport & Victory Contract v0.1` only after MP-005 review, preserving the distinction:

- Pain Scanner: what recurring constraint should be reduced;
- Opportunity Engine: what evidenced upside can be captured.

Engineering remains single-WIP.