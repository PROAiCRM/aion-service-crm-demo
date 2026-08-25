# MP-006 Opportunity Engine — Pilot Measurement & Owner Acceptance v0.1

**Status:** DESIGNED — PILOT NOT AUTHORIZED  
**Date:** 2026-08-01

## 1. Purpose

Define how to test whether Opportunity Engine identifies a real, safe and measurable opportunity instead of generating attractive but irrelevant or unauthorized recommendations.

## 2. Research questions

1. Does eligibility match approved definitions and real source objects?
2. Does the customer benefit make operational sense?
3. Is contact permission/channel state correct?
4. Can the owner understand expected versus realized value in 60 seconds?
5. Does the action produce a valid outcome beyond ordinary organic behavior?
6. Do customer, cost, workload and fairness guardrails pass?
7. Is the product better than a simple manual list?

## 3. Pilot stages

### Stage 0 — Source/legal readiness

- canonical source line proven;
- exact fields inventoried;
- local legal/contact review completed for selected family/channel;
- permission and opt-out policy approved;
- no real action.

### Stage 1 — Synthetic eligibility matrix

For each enabled family:

- eligible positive;
- irrelevant candidate;
- missing permission;
- opt-out;
- active complaint/dispute;
- stale contact/order state;
- duplicate candidate;
- already completed outcome;
- wrong tenant;
- small-group suppression;
- unknown send result;
- organic outcome attribution ambiguity.

### Stage 2 — Historical shadow mode

Generate candidates from a bounded historical period without contacting customers.

Owner reviews:

- eligibility accuracy;
- relevance;
- permission gaps;
- expected-value wording;
- likely manual action;
- duplicate/organic outcomes.

### Stage 3 — Owner comprehension

Owner answers:

1. What opportunity is selected?
2. Why is it relevant to the customer?
3. Is contact permitted and through which channel?
4. What value is observed, estimated and unknown?
5. What action will be taken?
6. What result/guardrail determines success?

### Stage 4 — Staff rehearsal

Synthetic/friendly rehearsal of approval, template, idempotency, delivery states, reply/decline, opt-out and reconciliation.

### Stage 5 — Limited real pilot

One opportunity family, one channel/action, small permitted population and human approval for every action.

### Stage 6 — Repeat, revise or stop

No automatic campaign expansion.

## 4. Manual baseline

Measure current process:

- how owner/staff find opportunities;
- time spent;
- source lists/screens used;
- missed eligible cases;
- unauthorized/duplicate-contact risk;
- outcomes and costs;
- whether value is measured;
- customer complaints or opt-outs.

## 5. Product metrics

### Eligibility accuracy

Displayed candidates matching approved family definition and source sample.

Working target: at least 90%; critical permission/recipient decisions require 100% accuracy or explicit block.

### Relevance acceptance

Share owner accepts as genuinely useful to the customer and business.

Working target: at least 70% after tuning.

### Permission accuracy

Share actions whose purpose/channel/opt-out state is correct.

Target: 100%.

### Owner comprehension

All six questions correct within 60 seconds.

Working target: at least 80% of sessions.

### Valid conclusion rate

Approved tests ending supported/not-supported/guardrail-stop rather than avoidable inconclusive.

Working target: at least 70%.

### Realized outcome rate

Family-specific primary outcome divided by valid executed/delivered population.

### Attributed incremental outcome

Only where valid baseline/control permits.

### Misleading recommendation rate

Overstated relevance, permission, value, attribution or urgency.

Working target: at most 10% after tuning; critical deception is immediate Stop.

## 6. Guardrail metrics

- unauthorized messages;
- contact after opt-out;
- duplicate actions;
- wrong recipient;
- complaint rate;
- unsubscribe rate;
- irrelevant recommendation rate;
- employee handling time;
- direct action cost;
- price/margin exception;
- unresolved disputes included;
- unknown delivery result;
- organic outcome share;
- external AI use;
- cross-tenant exposure.

## 7. Candidate first pilot families

### A. Ready-order collection

Strengths:

- direct customer benefit;
- clear source state/outcome;
- no complex cross-sell;
- payment/collection can be reconciled.

Risks:

- wrong “ready” state;
- disputed order;
- debt/privacy details in message;
- reminder frequency.

### B. Explicit waitlist availability

Strengths:

- customer requested notification;
- strong relevance;
- clear availability event.

Risks:

- request/permission evidence may not exist;
- stock may disappear before response;
- duplicate notification.

### C. Pending approval follow-up

Strengths:

- active service context;
- measurable decision completion.

Risks:

- pressure/manipulation;
- changed quote/terms;
- unresolved diagnostic facts.

First candidate selected only after source/legal inventory. Review requests and repeat-service promotions are not preferred first pilots.

## 8. Ground-truth review

For sampled candidates verify:

- correct subject/order;
- eligibility and exclusions;
- relevance;
- permission/channel;
- last contact/frequency;
- active dispute/complaint;
- expected-value semantics;
- action identity;
- delivery state;
- outcome/reconciliation;
- attribution.

Disagreement remains recorded.

## 9. Owner Acceptance

### Clarity

- one opportunity;
- customer benefit is clear;
- consent/permission visible;
- expected/realized value separated;
- one action and result method.

### Safety

- no unauthorized/bulk contact;
- no deceptive urgency;
- no automatic discount;
- no sensitive targeting;
- no employee sales scoring;
- stop/rollback available.

### Economics

- gross, contribution and incremental value distinct;
- direct cost visible or unknown;
- organic demand not claimed as product effect;
- no double counting.

### Evidence

- population frozen;
- source freshness passes;
- action receipt exists;
- outcome reconciled;
- result accepted honestly.

## 10. Owner decisions

- `ACCEPT_SHADOW_REVIEW`;
- `REQUEST_MORE_EVIDENCE`;
- `REJECT_IRRELEVANT`;
- `STOP_PERMISSION_RISK`;
- `ACCEPT_LIMITED_TEST`;
- `ACCEPT_SUPPORTED_RESULT`;
- `ACCEPT_NOT_SUPPORTED_RESULT`;
- `REPEAT_COMPARABLE_COHORT`;
- `PARK_LOW_VALUE`;
- `STOP_PRODUCT_DIRECTION`.

## 11. Immediate Stop Conditions

- unauthorized or opted-out contact;
- wrong recipient disclosure;
- duplicate send;
- misleading warranty/price/urgency;
- hidden automatic action;
- result target changed after outcome;
- cross-tenant exposure;
- protected/sensitive targeting;
- complaint/opt-out guardrail breached;
- unable to reconcile delivery/outcome safely.

## 12. Evidence package

- frozen family/eligibility definition;
- source/legal inventory;
- synthetic matrix;
- historical shadow review;
- owner comprehension result;
- action experiment contract;
- permission/frequency evidence;
- delivery and outcome receipts;
- cost/attribution analysis;
- guardrails;
- owner decision;
- risk/corrections;
- Session Handoff.

## 13. Honest maturity

- pilot plan: designed;
- baseline: not measured;
- legal/contact review: not performed;
- source readiness: not proven;
- real pilot: not authorized;
- Victory: `NOT_MEASURED`.