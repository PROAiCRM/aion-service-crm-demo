# MP-006 Opportunity Engine — Product Passport & Victory Contract v0.1

**Product ID:** `MP-006`  
**Status:** DESIGNED — NOT IMPLEMENTED  
**Victory:** `NOT_MEASURED`  
**Date:** 2026-08-01  
**Canonical tracking:** public Issue #17

## 1. Product statement

Opportunity Engine identifies **one evidence-backed opportunity to create additional customer and business value**, verifies eligibility and contact permission, proposes one bounded human-approved action, and measures the realized outcome.

It does not promise money. It answers:

> Which single safe opportunity is worth testing now, why is it eligible, what value may exist, what must remain uncertain, and how will we know whether the action produced a real result?

## 2. Customer and owner pain

Service businesses often possess useful signals but do not convert them into timely, respectful action:

- a customer has an approved repair ready but has not collected it;
- a completed repair creates a legitimate follow-up or care need;
- a customer previously requested a service that was unavailable;
- a common part is now available for an unresolved demand;
- a warranty or maintenance milestone may justify a helpful reminder;
- a satisfied customer may be eligible for a review request;
- an existing customer may have a relevant complementary service;
- recurring operational pain was reduced and a new capacity window appeared;
- a quote or approval request remains unresolved;
- inventory has a valid customer-demand match.

Today these opportunities are either missed, handled from memory, or converted into indiscriminate messaging.

## 3. Product victory

### Owner victory

Within 60 seconds the owner can correctly state:

1. the single selected opportunity;
2. who or what population is eligible;
3. why the proposed action is relevant to the customer;
4. whether contact permission and channel eligibility exist;
5. what expected value is only estimated;
6. what exact human action is proposed;
7. what outcome and guardrails will determine success.

### Customer victory

The customer receives a timely, relevant and respectful action that helps them complete, protect or improve a real service outcome, with clear choice and no coercion.

### Business victory

The action produces a directly measured outcome such as:

- completed collection;
- approved repair;
- booked service;
- completed repeat service;
- verified review;
- recovered dormant demand;
- reduced time to payment/collection;
- realized contribution margin when source costs are governed.

No potential value is called realized value before the event occurs and reconciles.

## 4. First-Value Moment

The owner opens Opportunity Engine and sees one card such as:

> **Opportunity:** 8 completed orders have remained uncollected beyond the approved reminder threshold. Six customers have a permitted contact channel. A single polite collection reminder is proposed. Estimated exposure is shown separately from realized payment. Human approval required.

The card shows:

- exact population and exclusions;
- relevance reason;
- permission/consent state;
- expected-value class;
- uncertainty and missing data;
- proposed action;
- action owner;
- customer benefit;
- stop criteria;
- measurement method.

## 5. MVP opportunity families

Candidate families:

1. `READY_ORDER_COLLECTION_OPPORTUNITY`;
2. `PENDING_APPROVAL_COMPLETION_OPPORTUNITY`;
3. `PERMITTED_STATUS_OR_CARE_FOLLOWUP_OPPORTUNITY`;
4. `REVIEW_REQUEST_OPPORTUNITY`;
5. `REPEAT_SERVICE_RELEVANCE_OPPORTUNITY`;
6. `WAITLIST_OR_UNAVAILABLE_SERVICE_RECOVERY_OPPORTUNITY`;
7. `PART_AVAILABLE_DEMAND_MATCH_OPPORTUNITY`;
8. `WARRANTY_OR_MAINTENANCE_REMINDER_OPPORTUNITY`;
9. `CAPACITY_FILL_OPPORTUNITY`;
10. `PROVEN_PAIN_REDUCTION_EXPANSION_OPPORTUNITY` based on MP-005 Evidence.

Not every family is enabled. First implementation may select at most two after source, legal, consent and value-semantic review.

## 6. Explicit non-goals

MP-006 v0.1 does not include:

- mass marketing automation;
- autonomous outbound messaging;
- dynamic price optimization;
- automatic discounts;
- customer manipulation or dark patterns;
- lookalike profiling;
- sensitive-trait inference;
- employee sales rankings;
- generic recommendation marketplace;
- LLM-created campaigns;
- revenue/profit forecasts presented as facts;
- a separate CRM customer database;
- a separate payment, consent or communications ledger;
- a generic campaign engine;
- a vector database;
- a new microservice;
- cross-tenant benchmarking without explicit approved anonymization.

## 7. Relationship to adjacent products

### MP-005 Pain Scanner

Pain Scanner identifies a recurring constraint to reduce. Opportunity Engine identifies an evidenced upside to capture.

A reduced pain may create an opportunity, but MP-006 does not recalculate the pain or rewrite its experiment result.

### MP-003 Owner Pulse

Owner Pulse may show the selected opportunity as one bounded next action. It does not calculate eligibility or expected value.

### MP-004 Cash Leakage Guard

MP-004 protects governed money/stock exceptions. MP-006 cannot convert an open exception into a sales opportunity or contact customers to resolve a disputed case without approved policy.

### MP-007 Reputation Booster

Review requests may later move to MP-007 as a dedicated product. MP-006 v0.1 may only identify and test eligibility, not become the full reputation workflow.

## 8. Architecture direction

```text
canonical customer/order/payment/consent/service facts
→ opportunity source adapters
→ eligibility and exclusion rules
→ relevance and customer-benefit gate
→ consent/channel gate
→ expected-value semantics
→ one-opportunity priority
→ human approval
→ existing communication/operational action boundary
→ outcome reconciliation
→ immutable result receipt
```

Read-side discovery and decision support remain separate from consequential action.

## 9. Human and AI boundary

### Deterministic system

- selects eligible source facts;
- enforces tenant and permission scope;
- applies exclusions and frequency limits;
- separates expected from realized value;
- ranks one opportunity through registered rules;
- creates an explainable proposal;
- reconciles action outcome;
- blocks unsupported claims.

### Human

- confirms relevance and tone;
- approves, edits within policy or rejects action;
- chooses permitted channel/time;
- handles customer response;
- accepts measured result;
- stops harmful or low-value experiments.

### Optional future AI

AI may draft bounded text or summarize Evidence only after:

- deterministic eligibility passes;
- safe fields are allowlisted;
- consent/channel policy is satisfied;
- every generated claim is constrained by approved facts;
- a human reviews before sending;
- the product works without the model.

AI cannot select recipients autonomously, invent offers, change prices or send messages.

## 10. Victory Contract

### Primary Outcome

One approved opportunity action produces its predeclared realized outcome at a materially higher rate than baseline or control, while customer, consent, workload, margin and complaint guardrails pass.

### Working pilot targets

Hypotheses pending baseline:

- at least 90% of displayed opportunities match approved eligibility definitions;
- 100% of actions have valid permission/channel state or explicit no-contact path;
- 100% of expected value is labeled estimate/range/unknown until reconciliation;
- at least 80% owner comprehension within 60 seconds;
- at least 70% of approved actions reach a valid measured conclusion;
- no more than 10% misleading or operationally irrelevant recommendations after tuning;
- zero unauthorized messages;
- zero automatic discounts or price changes;
- zero cross-tenant exposure;
- zero exact profit claims without governed cost evidence.

### `VICTORY_OBSERVED`

Requires:

1. frozen opportunity definition and population;
2. valid baseline/control or predeclared expected-outcome method;
3. permission and frequency rules passed;
4. human-approved action executed;
5. realized outcome reconciled;
6. material threshold achieved;
7. all critical guardrails passed;
8. owner accepts the result;
9. Evidence receipt registered.

### `VICTORY_REPEATED`

Requires another valid comparable cohort/window/location.

### `COMMERCIAL_VICTORY`

Requires paid adoption, renewal, expansion or retention attributable to demonstrated Opportunity Engine value. An extra repair payment is customer outcome Evidence, not automatically proof that the software product itself is commercially successful.

## 11. Guardrails

- complaint and unsubscribe rate;
- contact frequency;
- wrong-recipient rate;
- irrelevant-offer rate;
- employee handling time;
- discount/margin integrity;
- consent completeness;
- customer pressure or confusion;
- duplicate messages;
- messages after completion/opt-out;
- impact on MP-001–MP-005 flows;
- no bypass of legal, safety, payment or warranty policy.

## 12. Provisional Value Score

| Criterion | Score | Reason |
|---|---:|---|
| Pain/opportunity strength | 8/10 | real upside is often missed but depends on data and permission quality |
| Time to value | 7/10 | some families can test quickly; others need history and consent |
| Frequency | 8/10 | weekly/daily depending on service volume |
| Money/value potential | 9/10 | direct bookings, collection and repeat service may be measurable |
| Defensibility | 8/10 | compounds through eligibility, outcome history and customer trust |
| **Total** | **40/50** | design estimate, not market proof |

## 13. Commercial hypothesis

Opportunity Engine may monetize naturally after operational trust products:

- Growth tier add-on;
- bundle with Owner Pulse and Pain Scanner;
- bounded success-fee pilot only when attribution and legal terms are clear;
- per-location or per-active-order pricing;
- vertical opportunity packs with strict policy.

Pricing, willingness to pay and attribution remain untested.

## 14. Stop criteria

Stop, narrow or park when:

- valid permission cannot be proven;
- recommendations become generic marketing;
- irrelevant recommendation rate stays above 20% after two tuning cycles;
- complaints/unsubscribes exceed approved thresholds;
- realized contribution is lower than action cost;
- attribution cannot distinguish existing demand from product effect;
- source data encourages discriminatory or manipulative targeting;
- staff workload exceeds benefit;
- the product duplicates MP-003, MP-005 or MP-007;
- a simple manual list performs equally well at lower cost;
- external AI becomes required for basic operation.

## 15. Honest maturity

| Layer | Status |
|---|---|
| Product direction | approved next product direction |
| Product Passport | designed |
| Victory Contract | designed |
| Opportunity families | designed, not calibrated |
| Consent/channel policy | separate document, not implemented |
| Source adapters | not inventoried on canonical runtime |
| Priority engine | not implemented |
| Messaging/action integration | not implemented |
| Outcome reconciliation | not implemented |
| Pilot | not authorized |
| Victory | `NOT_MEASURED` |
| Commercial result | not proven |

## 16. Next mandatory gate

Complete the full MP-006 documentation package, preserve single engineering WIP and require a separate Owner Gate before any real customer contact or implementation.