# MP-007 Reputation Booster — Product Passport & Victory Contract v0.1

**Product ID:** `MP-007`  
**Status:** DESIGNED — NOT IMPLEMENTED  
**Victory:** `NOT_MEASURED`  
**Date:** 2026-08-01  
**Canonical tracking:** public Issue #19

## 1. Product statement

Reputation Booster helps a service center close the customer experience honestly:

```text
completed service
→ neutral feedback opportunity
→ unresolved problem detected?
   → service recovery
   → verified resolution
or
   → neutral public-review request
→ observed review/referral outcome
→ measured trust improvement
```

The product is not a five-star generator. Its first responsibility is to surface unresolved harm before asking for public praise.

## 2. Customer and business pain

Customers often leave without an easy, safe way to say:

- something is still wrong;
- the explanation was unclear;
- the repair took longer than expected;
- the device or accessories are incomplete;
- the result is good and deserves recognition.

The business meanwhile may:

- learn about dissatisfaction only from a public review;
- ask for reviews inconsistently;
- pressure only visibly happy customers;
- lose the chance to correct a real problem;
- overstate reputation impact without attribution.

## 3. Product promise

### Customer promise

> You can honestly report your experience, receive a fair recovery path when something is unresolved, and choose freely whether to leave a public review.

### Owner promise

> AION helps turn completed repairs into trustworthy feedback, recover service failures before they escalate, and measure reputation outcomes without buying, filtering or fabricating reviews.

## 4. First-Value Moment

The owner sees one of two clear states:

1. **Recovery first:** “3 customers reported unresolved issues; public-review request is paused for those cases until human review.”
2. **Review eligible:** “12 completed orders are eligible for one neutral review request under the approved contact policy.”

Every state shows:

- eligibility basis;
- permission/channel state;
- unresolved-problem check;
- one next action;
- no predicted star rating;
- no guaranteed review count.

## 5. MVP scope

First MVP includes:

- neutral feedback invitation after an eligible completed repair;
- simple bounded feedback states;
- unresolved-problem routing to a service-recovery case;
- human owner for recovery;
- one neutral public-review request after eligibility passes;
- opt-out/frequency/quiet-hours controls;
- outcome reconciliation where technically and legally possible;
- aggregate measurement of feedback, recovery and public-review outcomes;
- no external AI required.

## 6. Explicit non-goals

MP-007 v0.1 does not include:

- buying or rewarding positive reviews;
- review gating;
- asking only satisfied customers for public reviews;
- suppressing negative feedback;
- writing reviews for customers;
- fake accounts, bots or automated platform posting;
- employee ranking by review score;
- sentiment surveillance from unrestricted free text;
- automatic refunds or compensation;
- automatic public responses;
- cross-platform reputation scraping without approved terms and legal review;
- a generic marketing automation platform;
- guaranteed rating growth;
- exact revenue attribution from ratings.

## 7. Core product invariants

1. Customer feedback is voluntary.
2. Public-review request wording is neutral.
3. Internal feedback may not be used to hide a public-review route from unhappy customers.
4. An unresolved safety, quality, warranty or complaint state blocks promotional review prompting and creates a recovery path.
5. Recovery is human-owned.
6. No customer is promised compensation for a positive review.
7. Opt-out is immediate and durable.
8. Unknown contact permission blocks contact.
9. One logical request is sent at most once per approved window.
10. A sent request is not a received review.
11. A new review is not automatically attributed to MP-007.
12. Aggregate ratings are not customer-level truth.
13. No employee blame or score.
14. No external AI is required for MVP.

## 8. Relationship to other products

### MP-001 Smart QR Status

May provide a trusted client access channel and reduce frustration before completion. MP-007 does not reuse public QR tokens for marketing without separate consent.

### MP-002 Mobile Express Intake

Provides consent/versioned terms and accurate customer/device/order context.

### MP-003 Owner Pulse

May show one bounded reputation/recovery item, but does not calculate MP-007 metrics.

### MP-004 Cash Leakage Guard

Financial exceptions and refund/reversal authority remain governed there or in existing Money Core.

### MP-005 Pain Scanner

May identify recurring complaint, rework or communication patterns. MP-007 owns individual feedback/recovery workflow, not root-cause analysis.

### MP-006 Opportunity Engine

May surface an ethical reputation opportunity. MP-007 owns the complete feedback, recovery and review-request rules.

## 9. Human and AI boundary

### Deterministic responsibilities

- eligibility;
- unresolved-problem blockers;
- consent/channel/frequency checks;
- neutral template selection;
- idempotent action identity;
- recovery lifecycle;
- outcome reconciliation;
- aggregate metrics;
- guardrail enforcement.

### Human responsibilities

- review unresolved feedback;
- contact customer where permitted;
- decide corrective action;
- approve compensation/refund through proper authority;
- confirm recovery outcome;
- approve public response where used;
- accept, revise or stop experiments.

### Optional future AI

AI may summarize bounded feedback or draft a response only when:

- data boundary is approved;
- every statement is labeled as a draft;
- human review is mandatory;
- AI cannot post publicly;
- AI cannot change eligibility, close a case or promise compensation.

## 10. Victory Contract

### Primary customer outcome

A materially larger share of unresolved experiences receives timely human recovery, while eligible customers receive a neutral and non-coercive review opportunity.

### Working pilot targets

Hypotheses pending baseline:

- 100% of sampled unresolved-problem signals correctly route to recovery or explicit review-required state;
- at least 90% of high-priority recovery cases receive human review within the approved SLA;
- at least 80% of recovery cases reach a valid outcome state;
- 100% of review requests pass eligibility, consent and frequency checks;
- zero review gating, bought reviews, fake reviews or positive-review incentives;
- zero duplicate requests from network ambiguity;
- at least 80% owner comprehension within 60 seconds;
- misleading reputation claim rate at most 10% after tuning;
- zero cross-tenant exposure.

### Guardrails

- complaint rate does not increase due to pressure;
- opt-outs respected immediately;
- no unresolved safety/quality case receives promotional prompting;
- no employee ranking;
- no exact rating/revenue uplift claim without measured Evidence;
- public-platform terms and local law reviewed before integration.

### `VICTORY_OBSERVED`

Requires:

1. valid baseline;
2. frozen eligibility/recovery definitions;
3. complete pilot window;
4. recovery SLA and outcome targets met;
5. review-request compliance passes;
6. customer-harm and privacy guardrails pass;
7. owner acceptance;
8. Evidence receipt registered.

### `VICTORY_REPEATED`

Requires a second comparable window or location/cohort.

### `COMMERCIAL_VICTORY`

Requires evidence that a customer paid, renewed or expanded specifically because MP-007 delivered measured value. More reviews alone do not prove commercial victory.

## 11. Provisional Value Score

| Criterion | Score | Reason |
|---|---:|---|
| Pain strength | 8/10 | reputation and hidden dissatisfaction materially affect local service businesses |
| Time to value | 8/10 | recovery workflow can create value quickly after completed repairs |
| Frequency | 8/10 | applies continuously to completed orders |
| Money/trust potential | 8/10 | may improve retention and discovery, but attribution is difficult |
| Defensibility | 8/10 | compounds through verified feedback, recovery history and ethical rules |
| **Total** | **40/50** | design estimate, not market proof |

## 12. Commercial hypothesis

Potential packaging:

- Customer Trust module;
- included in Growth tier;
- bundle with MP-001 and MP-006;
- value proposition based on recovery SLA, feedback coverage and compliant review capture.

Willingness to pay, platform availability and legal constraints remain untested.

## 13. Stop criteria

Stop, narrow or park MP-007 when:

- the main requested use becomes review gating or fake-review growth;
- contact permission cannot be established reliably;
- public-platform terms prohibit the intended flow;
- unresolved feedback is repeatedly ignored by the business;
- staff workload exceeds measured benefit;
- customer complaints increase due to contact pressure;
- attribution is too weak to justify product complexity;
- a simple manual recovery checklist produces equivalent value at lower cost;
- privacy or employment risks cannot be controlled.

## 14. Honest maturity

| Layer | Status |
|---|---|
| Product direction | approved for design |
| Product Passport | designed |
| Feedback/recovery policy | designed in package |
| Review eligibility | designed in package |
| Contact/consent | designed in package |
| Public platform integration | not designed/implemented |
| Unified runtime | not implemented |
| Real customer contact | not authorized |
| Pilot | not authorized |
| Victory | `NOT_MEASURED` |
| Commercial result | not proven |

## 15. Next mandatory gate

Complete the remaining MP-007 package, map source anchors, and keep engineering blocked behind canonical-source recovery, single-WIP discipline, legal/platform review and a separate Owner Gate.