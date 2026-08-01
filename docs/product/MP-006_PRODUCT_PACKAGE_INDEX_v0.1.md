# MP-006 Opportunity Engine — Product Package Index v0.1

**Package status:** COMPLETE PRODUCT DESIGN PACKAGE — DRAFT REVIEW  
**Date:** 2026-08-01  
**Product ID:** `MP-006`  
**Victory:** `NOT_MEASURED`  
**Engineering:** NOT STARTED  
**Canonical tracking:** public Issue #17

## 1. Package purpose

This package defines Opportunity Engine as a standalone AION product that:

- identifies one evidence-backed upside opportunity;
- proves eligibility and customer relevance;
- verifies purpose, permission, channel and frequency;
- separates potential, expected, realized and attributed value;
- proposes one human-approved action;
- reconciles delivery and business outcome;
- preserves privacy, fairness and customer autonomy;
- accepts unsupported/inconclusive results honestly.

## 2. Canonical documents

1. `MP-006_PRODUCT_PASSPORT_AND_VICTORY_CONTRACT_v0.1.md`
2. `MP-006_OPPORTUNITY_TAXONOMY_AND_ELIGIBILITY_CONTRACT_v0.1.md`
3. `MP-006_EXPECTED_VALUE_AND_REALIZED_OUTCOME_SEMANTICS_v0.1.md`
4. `MP-006_CONSENT_CONTACT_AND_CHANNEL_POLICY_v0.1.md`
5. `MP-006_PRIORITY_SELECTION_AND_ONE_OPPORTUNITY_UX_POLICY_v0.1.md`
6. `MP-006_ACTION_EXPERIMENT_AND_MEASUREMENT_POLICY_v0.1.md`
7. `MP-006_PRIVACY_FAIRNESS_AND_NON_MANIPULATION_BOUNDARY_v0.1.md`
8. `MP-006_PILOT_MEASUREMENT_AND_OWNER_ACCEPTANCE_v0.1.md`
9. `MP-006_CURRENT_STATE_SOURCE_MAP_v0.1.md`
10. `MP-006_DELIVERY_GATES_AND_EVIDENCE_PLAN_v0.1.md`
11. `MP-006_PRODUCT_PACKAGE_INDEX_v0.1.md`

## 3. Product invariants

1. A source signal is not an eligible opportunity.
2. Eligibility is not permission to contact.
3. Permission is purpose- and channel-specific.
4. Unknown permission blocks contact.
5. Customer benefit is required; desire to sell is insufficient.
6. One need is deduplicated into one candidate.
7. One primary opportunity is shown.
8. One primary human-approved action is tested.
9. No autonomous send or “send all”.
10. No automatic discount, price or margin change.
11. Potential gross value is not forecast, revenue or profit.
12. Realized gross value is not automatically incremental value.
13. Organic outcomes are not automatically attributed to MP-006.
14. One realized event is not double-counted across products.
15. No sensitive-trait or vulnerability targeting.
16. No deceptive urgency, scarcity or warranty claims.
17. No employee sales ranking or sanctions.
18. Unknown send result requires reconciliation, not blind resend.
19. A critical consent/privacy guardrail overrides favorable conversion.
20. External AI is optional and cannot select, price, send or upgrade truth.
21. MP-006 does not create a second customer/payment/consent truth.
22. MP-001 remains the only active engineering mini-product.

## 4. Candidate family map

| Family | Customer benefit | Main risk |
|---|---|---|
| Ready-order collection | receives repaired device promptly | wrong ready state, privacy, frequency |
| Pending approval | completes informed repair decision | pressure, stale quote |
| Service/care follow-up | useful post-repair information | unrelated promotion |
| Review request | easy neutral feedback | review manipulation, MP-007 overlap |
| Repeat service relevance | valid maintenance/service need | generic upsell |
| Waitlist recovery | customer-requested availability | missing request/permission |
| Part-demand match | unresolved need can be served | stock volatility |
| Warranty/maintenance reminder | protects service outcome | legal/rights misstatement |
| Capacity fill | faster service access | discount/spam temptation |
| Pain-reduction expansion | repeats proven improvement | premature scaling |

## 5. Product relationship map

```text
MP-002 intake/consent facts
MP-001 safe status channel
MP-004 governed exceptions
MP-005 supported pain/experiment Evidence
shared Customer/Order/Payment Core
→ MP-006 eligibility + permission + value
→ one human-approved action
→ outcome receipt
→ MP-003 Owner Pulse / MP-000 AION Today
→ MP-007 Reputation Booster or later Growth products
→ MP-010 Business Memory of experiments/results
```

## 6. Approved product statement

> Opportunity Engine does not promise that the owner can “earn ₽X today”. It identifies one customer-relevant and permitted opportunity, explains the possible value and uncertainty, asks a human to approve one action, and counts value only after a real reconciled outcome.

## 7. Open decisions before implementation

1. Which family has reliable canonical data and legal permission?
2. Does a consent/preference model already exist or require design?
3. What communications are service-essential versus optional marketing?
4. Which jurisdictional rules apply to each channel?
5. Is the first action manual, task-based or provider-mediated?
6. How are frequency caps and quiet hours stored?
7. How is wrong-recipient risk handled?
8. What exact costs permit contribution-value calculation?
9. Which attribution method is feasible at pilot volume?
10. Should review requests move immediately to MP-007?
11. What minimum cohort size protects privacy and measurement validity?
12. Can ready-order state be proven pure-read and conflict-free?

## 8. Dependencies and blockers

### Product dependencies

- Product Factory & Victory System;
- stable Product Catalog;
- MP-003/004/005 boundaries;
- tenant/Principal/grant policies;
- Data Classification & AI Boundary Policy;
- future local legal/contact review.

### Engineering blockers

- canonical source recovery;
- active MP-001 WIP disposition;
- source/consent/channel inventory;
- pure-read state projections;
- action idempotency/reconciliation;
- PostgreSQL/RLS Evidence;
- owner and legal gates;
- real pilot authorization.

## 9. Current maturity

| Object | Status |
|---|---|
| Product direction | approved as next design step |
| Full product package | designed |
| Taxonomy/eligibility | designed |
| Value semantics | designed |
| Consent/contact policy | designed, legal review pending |
| One-opportunity UX | designed |
| Action/measurement | designed |
| Privacy/fairness | designed |
| Pilot plan | designed |
| Source disciplines | identified |
| Opportunity-specific source inventory | not complete |
| Unified implementation | not present |
| Runtime tests | none |
| Customer contact | not authorized |
| Real pilot | not authorized |
| Victory | `NOT_MEASURED` |
| Commercial result | not proven |

## 10. Risk summary

- service contact may be confused with marketing consent;
- stale order/contact facts can create customer harm;
- opportunity value may be overstated;
- organic demand may be falsely attributed;
- outbound actions can duplicate after timeout;
- recommendations can become spam or manipulation;
- incomplete cost data makes margin unsafe;
- review requests overlap MP-007;
- employee pressure can replace customer value;
- generic marketing platform complexity can appear prematurely;
- external AI increases privacy/cost/hallucination risk;
- legal rules vary by jurisdiction/channel.

## 11. Session completion record

### Done

- complete MP-006 product package prepared;
- taxonomy, consent, value and action boundaries separated;
- reusable private-source disciplines mapped;
- first candidate order proposed;
- Delivery Gates and pilot model defined;
- engineering not started.

### Decisions

- one opportunity, not a campaign dashboard;
- customer benefit before business value;
- unknown consent blocks;
- human approval before action;
- no automatic discounts/messages;
- expected value is not realized value;
- no sensitive targeting;
- no generic campaign platform;
- no external AI dependency;
- failure/inconclusive result accepted honestly.

### Documents requiring future synchronization

After owner review/merge decision:

- Product Catalog maturity;
- Product Delivery Roadmap;
- Decision Log;
- Risk Register;
- Evidence Register;
- File Registry;
- Session Handoff.

### Unfinished

- owner review of exact head;
- first-family selection;
- source/legal inventory;
- architecture RFC;
- implementation/tests;
- shadow mode;
- limited real pilot;
- Victory.

### Stop point

`MP-006_PRODUCT_PACKAGE_COMPLETE_FOR_DRAFT_REVIEW`.

### Next mandatory product-design step

Prepare `MP-007 Reputation Booster — Product Passport & Victory Contract v0.1` only after MP-006 review, preserving the boundary:

- MP-006 selects a bounded growth opportunity;
- MP-007 owns the full ethical review, reputation and referral experience.

Engineering remains single-WIP.