# MP-006 Opportunity Engine — Priority Selection & One-Opportunity UX Policy v0.1

**Status:** DESIGNED — NOT IMPLEMENTED  
**Date:** 2026-08-01

## 1. Purpose

Select and present one high-value, safe and actionable opportunity without a campaign dashboard, opaque revenue score or overwhelming lead list.

## 2. One-opportunity rule

The primary view shows:

- one selected opportunity family/population;
- verified eligibility;
- customer benefit;
- contact/permission state;
- expected-value class and uncertainty;
- one proposed action;
- one human decision;
- one measurement method.

Secondary candidates remain in a bounded queue.

## 3. Eligibility before priority

A candidate cannot enter priority selection unless:

- family definition is active;
- source coverage and freshness pass;
- relevance gate passes;
- permission/contact state is valid or action is no-contact;
- exclusions and frequency caps pass;
- no dispute/complaint/safety blocker exists;
- expected-value wording is valid;
- a measurable action exists;
- candidate is deduplicated;
- no overlapping active experiment exists.

## 4. Transparent priority dimensions

### Customer benefit

How directly the action helps a verified customer need or service outcome.

### Evidence strength

Quality, freshness, completeness and definition stability.

### Realizable value

Observed eligible base and plausible measured outcome—not theoretical maximum alone.

### Actionability

One safe human-approved action exists with low dependency complexity.

### Timeliness

The value decays or customer need becomes less useful if delayed.

### Contact safety

Permission, channel, frequency and sensitivity risk.

### Cost and effort

Employee time, communication cost, implementation need and operational burden.

These dimensions are displayed separately. No user-facing “opportunity score 87%”.

## 5. Priority classes

- `P0_PERMISSION_OR_TRUST_BLOCKER` — resolve wrong/unknown permission, contradiction or privacy risk;
- `P1_READY_HIGH_VALUE` — strong relevance, permission and measurable bounded action;
- `P2_READY_LOW_COST_TEST` — useful small experiment with moderate value;
- `P3_NEEDS_EVIDENCE` — plausible but blocked by missing data/value/permission;
- `P4_MONITOR` — eligible but low urgency or weak materiality;
- `NO_RELIABLE_OPPORTUNITY` — nothing should be forced.

## 6. Precedence

1. permission/trust correction when customer harm is possible;
2. customer-completion opportunities tied to an existing service outcome;
3. explicit customer-requested waitlist/availability opportunities;
4. high-relevance, low-cost opportunities with governed measurement;
5. growth experiments based on repeated MP-005 Evidence;
6. optional promotional opportunities with stricter consent;
7. monitor/no action.

Tie-breakers:

1. clearer customer benefit;
2. stronger permission state;
3. stronger Evidence;
4. lower contact and operational risk;
5. lower experiment cost;
6. shorter valid result window;
7. deterministic family code.

## 7. Primary card

The card contains:

### Opportunity

Plain-language action and population.

### Why now

Verified timeliness or value-decay reason.

### Customer benefit

What useful result the customer may receive.

### Eligibility proof

- population count;
- inclusion/exclusion;
- source freshness;
- relevance code;
- contact permission coverage;
- deduplication.

### Value semantics

- observed eligible base;
- estimated range or `UNKNOWN`;
- realized value remains zero/not applicable until outcome;
- costs and attribution limits.

### Proposed action

One action, channel, owner and outcome metric.

### Human decision

Approve, edit within policy, request Evidence, reject, park or choose a permitted alternative.

## 8. Secondary queue

Maximum five candidates show:

- family;
- eligible population;
- status;
- customer benefit;
- why not selected;
- next unlock step.

No endless leads list and no “send all” button.

## 9. Example explanations

- “Ready-order collection selected because customer benefit is immediate, six permitted contacts exist and outcome can be reconciled within seven days.”
- “Repeat-service candidate not selected: relevance mechanism is not approved.”
- “Review requests blocked: two unresolved complaints and consent basis incomplete.”
- “Capacity-fill opportunity parked: expected margin cannot be calculated safely.”

## 10. UX objective

Within 60 seconds the owner correctly answers:

1. what opportunity is selected;
2. why the customer may benefit;
3. whether contact is permitted;
4. what value is observed versus estimated;
5. what action will happen;
6. how success and harm are measured.

The screen fails when the owner must:

- configure a campaign;
- compare dozens of contacts;
- decode a composite score;
- guess consent;
- assume forecast equals cash;
- choose among several primary actions.

## 11. Recommendation stability

Avoid daily churn through:

- complete observation windows;
- material-change threshold;
- active-experiment lock;
- contact cooldown;
- stable priority rules;
- reason receipt for every selection change.

A P0 privacy/trust issue may override an active opportunity.

## 12. Owner controls

Owner may:

- approve a bounded test;
- reject as irrelevant;
- request more Evidence;
- change to another permitted channel;
- park until date;
- disable a family;
- view prior actions/results;
- stop immediately.

Owner cannot manually mark estimated value as realized.

## 13. Language policy

Preferred:

- “eligible opportunity”;
- “potential gross range”;
- “contact permitted for this purpose”;
- “human approval required”;
- “result not yet measured”.

Forbidden:

- “guaranteed profit”;
- “easy money”;
- “AI found ₽X”;
- “send everyone”;
- “customer likely to buy” without approved evidence and ethical policy.

## 14. Device/accessibility

- mobile-first primary card;
- desktop adds safe drill-down, not different meaning;
- minimum 44px targets;
- no color-only meaning;
- reduced motion;
- Living and Basic modes share semantic projection;
- no external fonts/heavy chart dependency.

## 15. Honest maturity

- policy: designed;
- priority calibration: not tested;
- UX prototype: not built;
- owner comprehension: not measured;
- recommendation stability: not implemented.