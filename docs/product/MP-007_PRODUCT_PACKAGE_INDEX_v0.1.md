# MP-007 Reputation Booster — Product Package Index v0.1

**Package status:** COMPLETE PRODUCT DESIGN PACKAGE — DRAFT REVIEW  
**Date:** 2026-08-01  
**Product ID:** `MP-007`  
**Victory:** `NOT_MEASURED`  
**Engineering:** NOT STARTED  
**Canonical tracking:** public Issue #19

## 1. Package purpose

This package defines an ethical reputation product that:

- collects neutral feedback;
- detects unresolved problems;
- routes service recovery to a human owner;
- requests public reviews only under neutral, compliant rules;
- forbids review gating, incentives and fake activity;
- distinguishes sent, delivered, declared and verified outcomes;
- measures trust/reputation without invented business impact.

## 2. Canonical documents

1. `MP-007_PRODUCT_PASSPORT_AND_VICTORY_CONTRACT_v0.1.md`
2. `MP-007_FEEDBACK_AND_RECOVERY_TAXONOMY_v0.1.md`
3. `MP-007_REVIEW_REQUEST_ELIGIBILITY_AND_ANTI_GATING_POLICY_v0.1.md`
4. `MP-007_CONTACT_CONSENT_AND_CHANNEL_POLICY_v0.1.md`
5. `MP-007_SERVICE_RECOVERY_LIFECYCLE_AND_HUMAN_OWNERSHIP_v0.1.md`
6. `MP-007_REPUTATION_OUTCOME_AND_ATTRIBUTION_SEMANTICS_v0.1.md`
7. `MP-007_PRIVACY_FAIRNESS_AND_NON_MANIPULATION_BOUNDARY_v0.1.md`
8. `MP-007_PILOT_MEASUREMENT_AND_OWNER_ACCEPTANCE_v0.1.md`
9. `MP-007_CURRENT_STATE_SOURCE_MAP_v0.1.md`
10. `MP-007_DELIVERY_GATES_AND_EVIDENCE_PLAN_v0.1.md`
11. `MP-007_PRODUCT_PACKAGE_INDEX_v0.1.md`

## 3. Product invariants

1. Recovery comes before promotion.
2. No feedback is not satisfaction.
3. Negative feedback is not employee guilt.
4. Public-review access is not selected by expected sentiment.
5. No bought, rewarded or fake positive reviews.
6. Recovery cannot depend on changing/removing a review.
7. Unknown permission blocks non-essential contact.
8. Opt-out is durable and immediate.
9. One logical request is sent once.
10. Sent is not delivered; delivered is not reviewed.
11. Declared review is not verified review.
12. Rating change is not automatically caused by MP-007.
13. Rating change is not automatically commercial value.
14. Public responses require human approval.
15. AI cannot post, close recovery or promise compensation.
16. Employee review rankings are prohibited.
17. Existing Service/Money/Authorization Core remains source of truth.
18. MP-001 remains the only active engineering mini-product.

## 4. Product relationship map

```text
MP-001 trusted customer access/status
MP-002 accurate intake/contact/consent
MP-003 owner attention surface
MP-004 protected money/refund exceptions
MP-005 recurring pain analysis
MP-006 bounded opportunity selection
        ↓
MP-007 neutral feedback
→ unresolved issue?
   → human service recovery
   → valid outcome
or
   → eligible neutral public-review request
→ declared/verified reputation outcome
        ↓
MP-010 Business Memory retains decisions/results
```

## 5. Approved product statement

> Reputation Booster does not manufacture praise. It creates a fair route for honest feedback, ensures unresolved problems receive human recovery, and only then offers a voluntary neutral public-review opportunity.

## 6. Recommended first slice

The first slice should prove trust before growth:

1. neutral “Всё ли решено?” feedback;
2. bounded response codes;
3. P0/P1/P2 recovery case;
4. one human owner and SLA;
5. outcome receipt;
6. no public-platform integration initially;
7. optional neutral review link only after legal/platform approval.

## 7. Open decisions

Before implementation:

1. Which legal basis permits transactional feedback/review request in the pilot jurisdiction?
2. Which channel and provider are approved?
3. Which public review platform/link is first and what are its current rules?
4. What is the exact opt-out/frequency/quiet-hours policy?
5. What minimum completion/QC/warranty state is required?
6. What recovery SLAs are practical?
7. Which roles may own/close/escalate recovery?
8. Is free text included in MVP or bounded choices only?
9. How are public outcomes verified without excessive tracking?
10. What small-group privacy threshold is required?
11. Which metric constitutes the first Victory: recovery SLA, feedback coverage, or verified review conversion?

## 8. Dependencies and blockers

### Product dependencies

- Product Factory/Victory System;
- MP-006 contact/eligibility disciplines;
- MP-004 money authority boundary;
- tenant isolation/Principal/session policies;
- Data Classification & AI Boundary Policy.

### Engineering blockers

- canonical V10.2 source recovery;
- single-WIP disposition;
- source field inventory;
- legal/platform review;
- architecture RFC;
- consent/frequency/provider design;
- disposable PostgreSQL/RLS Evidence;
- separate pilot Owner Gate.

## 9. Current maturity

| Object | Status |
|---|---|
| Product direction | approved for design |
| Full package | designed |
| Feedback taxonomy | designed |
| Anti-gating policy | designed |
| Contact/consent policy | designed |
| Recovery lifecycle | designed |
| Outcome semantics | designed |
| Privacy/fairness | designed |
| Source anchors | identified |
| Legal/platform review | not performed |
| Unified implementation | not present |
| Runtime tests | none |
| Real customer contact | not authorized |
| Pilot | not authorized |
| Victory | `NOT_MEASURED` |
| Commercial result | not proven |

## 10. Risk summary

- review gating introduced through UX details;
- opt-out/permission data incomplete;
- wrong-recipient risk;
- recovery queue becomes unowned;
- staff pressure customers for ratings;
- review-platform rules change;
- rating attribution overstated;
- free text exposes sensitive data;
- public response leaks order/customer information;
- employee blame/leaderboards damage trust;
- complexity exceeds value before pilot.

## 11. Session completion record

### Done

- complete MP-007 Product Factory package;
- recovery-first model;
- feedback/recovery taxonomy;
- anti-gating/contact rules;
- human-owned recovery lifecycle;
- reputation attribution semantics;
- privacy/fairness boundary;
- pilot and Delivery Gates;
- private-source map;
- engineering not started.

### Decisions

- no review manufacturing;
- no positive-only routing;
- no incentives;
- no recovery conditioned on review edits;
- no autonomous send/post;
- feedback/recovery before platform automation;
- deterministic MVP without external AI;
- rating and commercial value separated.

### Future document synchronization

After owner review/merge decision:

- Product Catalog maturity;
- delivery roadmap;
- Decision Log;
- Risk Register;
- Evidence Register;
- File Registry;
- Session Handoff.

### Unfinished

- owner review of exact branch head;
- legal/platform policy inventory;
- source inventory;
- architecture RFC;
- implementation/tests;
- shadow mode;
- pilot;
- Victory.

### Stop point

`MP-007_PRODUCT_PACKAGE_COMPLETE_FOR_DRAFT_REVIEW`.

### Next mandatory product-design step

Prepare `MP-008 Smart Warehouse — Product Passport & Victory Contract v0.1`, preserving the boundary:

- MP-007 protects customer trust and reputation;
- MP-008 protects availability, inventory truth and working capital.

Engineering remains single-WIP.