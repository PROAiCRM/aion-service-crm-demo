# MP-009 AI Master — Product Package Index v0.1

**Package status:** COMPLETE PRODUCT DESIGN PACKAGE — DRAFT REVIEW  
**Date:** 2026-08-01  
**Product ID:** `MP-009`  
**Victory:** `NOT_MEASURED`  
**Engineering:** NOT STARTED  
**Canonical tracking:** public Issue #23

## 1. Package purpose

Define AI Master as a safe technician-amplification product that:

- begins with verified device and symptom facts;
- separates fact, hypothesis and technician decision;
- provides one approved safe verification step;
- preserves alternatives, uncertainty and hazards;
- keeps work, parts, price, customer agreement and QC under existing human/Core controls;
- uses external AI only as an optional bounded adapter;
- measures value through time, quality and safety Evidence.

## 2. Canonical documents

1. `MP-009_PRODUCT_PASSPORT_AND_VICTORY_CONTRACT_v0.1.md`
2. `MP-009_DIAGNOSTIC_TRUTH_CLASSES_AND_CASE_CONTRACT_v0.1.md`
3. `MP-009_SYMPTOM_DEVICE_IDENTITY_AND_DATA_QUALITY_POLICY_v0.1.md`
4. `MP-009_HYPOTHESIS_GENERATION_AND_EVIDENCE_SUFFICIENCY_POLICY_v0.1.md`
5. `MP-009_SAFE_VERIFICATION_STEP_AND_HAZARD_BOUNDARY_v0.1.md`
6. `MP-009_TECHNICIAN_DECISION_WORK_AND_QC_LIFECYCLE_v0.1.md`
7. `MP-009_AI_PROVIDER_PRIVACY_AND_PROMPT_INJECTION_BOUNDARY_v0.1.md`
8. `MP-009_PILOT_MEASUREMENT_AND_OWNER_ACCEPTANCE_v0.1.md`
9. `MP-009_CURRENT_STATE_SOURCE_MAP_v0.1.md`
10. `MP-009_DELIVERY_GATES_AND_EVIDENCE_PLAN_v0.1.md`
11. `MP-009_PRODUCT_PACKAGE_INDEX_v0.1.md`

## 3. Product invariants

1. Customer report is not observed fact.
2. Observed fact is not diagnosis.
3. Hypothesis is not technician-confirmed direction.
4. Diagnosis does not authorize work.
5. Work completion is not QC PASS.
6. Model output never upgrades truth.
7. Missing input never receives a hidden default.
8. Device identity is confirmed by a human/approved source.
9. Camera proposes candidates and stores/uploads nothing by default.
10. One safe step is selected from an approved catalogue.
11. Free-form live repair instructions are prohibited.
12. H2/H3 cases are blocked/escalated in v0.1.
13. Technician remains accountable decision owner.
14. Existing Core owns work, consent, parts and QC.
15. External AI is optional and removable.
16. Prompt-injected content is data, never authority.
17. No automatic price, time, warranty or success promise.
18. No autonomous work, part movement, QC or customer contact.
19. Repeat repair/QC Evidence can falsify the product hypothesis.
20. MP-001 remains the only active engineering mini-product.

## 4. Recommended first slice

`DISPLAY_TOUCH_SYMPTOM_TRIAGE_NON_INVASIVE`

Boundaries:

- one smartphone family after source review;
- manual device identity;
- structured symptoms;
- H0 external/non-invasive checks only;
- deterministic catalogue first;
- optional AI disabled initially or limited to synthetic shadow review;
- technician confirmation;
- no opening, heat, battery work, soldering or chemicals;
- no customer price/time promise;
- linked existing work/QC flow only after separate authorization.

## 5. Product relationship map

```text
MP-002 Express Intake
→ verified customer/device/symptom context

MP-008 Smart Warehouse
→ trusted part availability and movement

Core order/work/QC facts
→ MP-009 AI Master
→ hypothesis + safe step + technician decision
→ existing work/parts/QC commands

MP-004 Cash Leakage Guard
← governed money/stock inconsistencies

MP-005 Pain Scanner
← recurring diagnostic/QC/rework patterns

MP-010 Business Memory
← approved diagnostic outcomes, corrections and learning history
```

## 6. Approved product statement

> AI Master does not repair a device or declare a diagnosis. It helps a qualified technician see verified facts, test one safe hypothesis and preserve the Evidence behind the human decision.

## 7. Open decisions

Before implementation:

1. Which exact first device/case family has adequate source data and expert coverage?
2. Who qualifies and publishes hypothesis/verification catalogues?
3. Is diagnostic case history persisted in v0.1?
4. Which technician roles/certifications are represented?
5. Which exact H0 tests are allowed?
6. Is external AI used at all in the first slice?
7. Which provider/data region/retention policy is acceptable?
8. How is diagnostic correctness measured against later work/QC/repeat repair?
9. What small-team separation-of-duties level is realistic?
10. What liability/customer wording is approved?

## 8. Dependencies and blockers

### Product dependencies

- Product Factory/Victory System;
- MP-002 intake facts;
- MP-008 inventory boundary;
- Core work/QC/authorization;
- Data Classification & AI Boundary Policy;
- threat model and Agent Guardian direction;
- EVE truth-class discipline.

### Engineering blockers

- canonical source recovery;
- MP-001 WIP disposition;
- exact source inventory;
- qualified repair/safety review;
- liability/privacy/provider review;
- architecture RFC;
- catalogue freeze;
- PostgreSQL/RLS and physical-device Evidence;
- separate Owner Gate.

## 9. Current maturity

| Object | Status |
|---|---|
| Direction | approved for design |
| Full package | designed |
| Truth/case contract | designed |
| Identity/data-quality | designed |
| Hypothesis policy | designed |
| Hazard/step policy | designed |
| Technician/work/QC lifecycle | designed |
| AI/privacy/injection boundary | designed |
| Pilot plan | designed |
| Source anchors | identified |
| Qualified safety catalogue | absent |
| Unified implementation | absent |
| Runtime/physical tests | none |
| External AI | not authorized |
| Pilot | not authorized |
| Victory | `NOT_MEASURED` |
| Commercial result | not proven |

## 10. Risk summary

- confident but unsupported diagnosis;
- unsafe instruction;
- wrong device variant;
- missing alternatives;
- technicians over-trust AI;
- customer promise based on hypothesis;
- hidden provider data retention;
- prompt injection;
- provider/model drift;
- increased repeat repair despite faster triage;
- liability concentrated in unclear human/AI boundary;
- premature generic AI architecture.

## 11. Session completion record

### Done

- full MP-009 Product Factory package prepared;
- source anchors audited;
- truth, safety, human and provider boundaries separated;
- pilot and Delivery Gates defined;
- engineering not started.

### Decisions recorded

- technician amplification, not replacement;
- deterministic/manual first;
- one low-risk case family;
- H0 only in first pilot;
- one safe verification step;
- no free-form live repair instructions;
- external AI optional;
- no autonomous consequential action;
- QC/repeat repair guardrails override speed gains.

### Documents requiring future synchronization

After owner review/merge decision:

- Product Catalog maturity;
- roadmap;
- Decision Log;
- Risk Register;
- Evidence Register;
- File Registry;
- Session Handoff.

### Unfinished

- owner package review;
- exact case-family choice;
- source inventory;
- expert/safety review;
- architecture RFC;
- implementation/tests;
- shadow/pilot;
- Victory.

### Stop point

`MP-009_PRODUCT_PACKAGE_COMPLETE_FOR_DRAFT_REVIEW`.

### Next mandatory product-design step

Prepare `MP-010 Business Memory — Product Passport & Victory Contract v0.1`, preserving the boundary:

- MP-009 creates reviewed case-level learning Evidence;
- MP-010 preserves reusable organizational memory without turning unverified notes or model output into truth.

Engineering remains single-WIP.