# MP-007 Reputation Booster — Current-State Source Map v0.1

**Status:** SOURCE AUDIT MAP — DESIGN EVIDENCE ONLY  
**Date:** 2026-08-01  
**Technical source of truth:** `PROAiCRM/AION-Service-CRM`

> This map identifies reusable source and design anchors. It does not claim that a unified Reputation Booster exists.

## 1. Executive finding

No reputation/review/referral-specific engine was found through the accessible private-repository search.

The project does contain reusable foundations for:

- completed service orders;
- QC/payment/issue/warranty/return boundaries;
- customer/contact data;
- deterministic operational blockers;
- owner control/proof chains;
- Action Receipts and idempotency;
- truth-class separation;
- product eligibility and contact policies designed in MP-006.

Missing as a unified capability:

- feedback records;
- recovery cases;
- contact-purpose/opt-out/frequency ledger;
- anti-gating review eligibility;
- external review-platform policy/integration;
- outcome/attribution engine;
- pilot Evidence.

## 2. Private source anchors

### Merged PR #13 — exception-flow E2E

Relevant historical assets:

- QC gate;
- debt/issue authorization;
- physical return;
- inventory reservation/release;
- warranty/exception flow direction.

Reusable boundary:

- a service should not be treated as safely complete for promotional prompting when quality, payment, return or warranty exceptions remain unresolved.

Limit:

- historical E2E is not current unified MP-007 proof.

### Merged PR #16 — network resilience

Relevant assets:

- lost response after commit;
- idempotent retry;
- exactly one command receipt;
- offline/outage recovery.

Reusable boundary:

- one feedback/review request cannot become duplicate sends after network ambiguity.

### Draft PR #40 — EVE Living Service World

Relevant assets:

- `OBSERVED / INFERRED / SIMULATED` separation;
- source-linked explanation;
- Action Receipts;
- owner/employee/read-only AI projections.

Reusable boundary:

- review/rating declarations, inferred sentiment and simulated reputation impact remain separate from observed outcomes.

### Draft PR #42 — Order Operational Projection

Relevant assets:

```text
observed state
→ blockers
→ one allowed action
→ reason/authority
→ consequence preview
→ Action Receipt
```

Reusable boundary:

- review request appears only as an allowed action after server-owned blockers pass;
- frontend cannot infer permission from “completed” status alone.

### Draft PR #48 — owner-control/cash-control

Relevant assets:

- service promises;
- order/customer operational state;
- owner-control read direction;
- money/control projection.

Critical risk:

- read-side hidden refresh/mutation direction must not be repeated in MP-007.

Requirement:

- feedback/recovery/review eligibility projection is pure read, or refresh is an explicit governed command.

### Draft PR #73 — Product Observatory

Relevant assets:

- proof chains;
- risks and Owner Gates;
- deterministic recommendation;
- truthful metric semantics;
- evolution/change history.

Reusable boundary:

- every recovery/review recommendation explains why, Evidence, blockers and next gate.

### Draft PR #143 — browser mutation ambiguity

Relevant assets:

- stable mutation identity across timeout/reload/manual retry;
- pending journal without request body/PII;
- explicit ambiguous-result state;
- no blind business retry.

Reusable boundary:

- contact requests and recovery actions preserve stable idempotency identity and reconcile unknown results.

### Draft PR #171 — deterministic rule catalogue discipline

Relevant principles:

- exact input contracts;
- default deny;
- immutable versioned rules;
- no hidden defaults;
- one output ownership;
- stale/contradictory input blocks evaluation;
- no generic DSL/service.

Reuse the discipline for eligibility rules, not the entire unrelated print-recommendation package.

### Issue #68 — Service Management direction

Relevant product context:

- customer/order/search/print flow;
- service promises;
- warranty and operational risks;
- owner next-action direction.

Limit:

- broad program issue, not a frozen reputation contract.

## 3. Public product-package dependencies

### MP-001 Smart QR Status

Potential feedback access surface after service completion.

Boundary:

- public status tokens are not automatically marketing/review permission;
- privacy field policy remains separate.

### MP-002 Mobile Express Intake

Potential source for:

- customer/contact accuracy;
- versioned consent;
- service-order receipt;
- device/order identity.

Boundary:

- consent at intake must not be silently broadened into review marketing.

### MP-003 Owner Pulse

May display:

- unresolved recovery count;
- recovery SLA risk;
- one reputation next action.

Does not own MP-007 calculations.

### MP-004 Cash Leakage Guard

Owns governed money/refund/reversal exceptions. MP-007 cannot promise or execute compensation independently.

### MP-005 Pain Scanner

May aggregate recurring complaint, rework or communication patterns from privacy-minimized MP-007 outcomes.

MP-007 owns individual feedback/recovery cases.

### MP-006 Opportunity Engine

May identify an eligible reputation opportunity and consume realized outcomes. MP-007 is authoritative for anti-gating, feedback and recovery workflow.

## 4. Missing canonical source inventory

Before implementation identify exact canonical fields/events for:

- order completion and physical issue;
- QC pass/fail/current validity;
- warranty/rework/return state;
- customer identity/contact ownership;
- contact permission/purpose/channel/opt-out;
- communication receipts;
- open complaint/recovery state;
- feedback source and response;
- wrong-recipient/privacy incident;
- platform policy/link configuration;
- public-review declared/verified outcomes;
- timezone/trusted clock;
- tenant/workspace/RLS;
- synthetic/training exclusions.

## 5. Architecture gaps

- no approved feedback/recovery tables or projection;
- no contact-purpose permission ledger;
- no cross-campaign frequency ledger;
- no template registry;
- no anti-gating rule implementation;
- no provider adapter;
- no review-platform adapter/policy inventory;
- no recovery SLA/outcome receipt;
- no aggregate reputation measurement receipt;
- no small-group privacy thresholds;
- no legal/platform approval;
- no runtime/Pilot Evidence.

## 6. Recommended minimal architecture direction

Modular-monolith first:

```text
existing Service/Customer Core
→ feedback eligibility/read adapter
→ protected feedback record
→ recovery case lifecycle
→ review-request eligibility projection
→ existing/new bounded contact command adapter
→ action/outcome receipts
→ aggregate owner view
```

Do not start with:

- generic campaign platform;
- social listening/scraping service;
- sentiment AI;
- reputation microservice;
- data warehouse;
- automated multi-platform posting;
- referral marketplace.

## 7. Recommended first slice

The safest first implementation candidate is not a public campaign.

Start with:

1. bounded neutral post-service feedback;
2. unresolved-problem recovery routing;
3. manual owner/staff recovery workflow;
4. no public-review platform integration initially;
5. optional manually approved neutral review link only after legal/platform and eligibility gates.

This proves trust value before growth automation.

## 8. WIP boundary

- MP-001 remains the only active engineering mini-product;
- MP-007 is documentation-only;
- no private runtime branch authorized;
- no migration/contact/provider/platform action;
- no real customer data;
- no pilot/merge/deploy.

## 9. Honest conclusion

Current status:

`DESIGNED PRODUCT PACKAGE / FOUNDATIONAL SOURCE ANCHORS IDENTIFIED / REPUTATION RUNTIME NOT PRESENT / VICTORY NOT MEASURED`.