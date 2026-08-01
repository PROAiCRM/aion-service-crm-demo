# MP-006 Opportunity Engine — Current-State Source Map v0.1

**Status:** SOURCE AUDIT MAP — DESIGN EVIDENCE ONLY  
**Date:** 2026-08-01  
**Technical source of truth:** `PROAiCRM/AION-Service-CRM`

> This map identifies reusable facts and design disciplines. It does not claim a unified Opportunity Engine exists.

## 1. Executive finding

No opportunity-specific engine was found in the accessible private source search. The project has reusable Core and design fragments for:

- customers, orders, service states and payments;
- owner/cash control;
- operational blockers and allowed actions;
- OBSERVED/INFERRED/SIMULATED separation;
- proof chains and deterministic recommendations;
- exact-input/default-deny rule discipline;
- network idempotency and unknown-result handling;
- product Victory measurement.

Missing:

- opportunity-family source adapters;
- purpose/consent/channel eligibility projection;
- frequency suppression;
- expected-value methods;
- one-opportunity priority;
- approved action/template registry;
- delivery adapter and reconciliation;
- realized/incremental value receipts;
- live pilot Evidence.

## 2. Private source anchors

### Draft PR #40 — EVE Living Service World

Reusable:

- deterministic event replay;
- `OBSERVED / INFERRED / SIMULATED` separation;
- source-linked explanation;
- action receipts;
- owner comprehension protocol.

Boundary:

- synthetic/offline experiment;
- no customer eligibility/contact action;
- no opportunity value calculation.

### Draft PR #42 — Order Operational Projection

Reusable pattern:

```text
observed state
→ blockers
→ one allowed action
→ authority
→ consequence preview
→ receipt
```

MP-006 can reuse this discipline for one human-approved action. It must not infer permission from a customer/order status.

Boundary:

- order-level operational design, not campaign/opportunity engine.

### Draft PR #48 — owner-control and cash-control

Potential sources:

- ready/completed order counts;
- payment/debt projections;
- promises/operational attention;
- owner read models.

Critical risk:

- current read path may call `app.refresh_promise_status`, creating a hidden side effect.

Requirement:

- MP-006 assessment must be pure read or use an explicit separately governed refresh command.

### Draft PR #73 — Product Observatory

Reusable:

- proof chains;
- deterministic recommendation;
- Owner Brief;
- missing link shown as gap;
- truth/privacy/scope gates;
- one bounded next step.

Boundary:

- project/product portfolio domain, not customer opportunity runtime.

### Draft PR #171 — deterministic rule catalogue

Reusable discipline:

- immutable versioned exact-input rules;
- missing/extra/duplicate inputs fail closed;
- one output owner;
- no hidden defaults;
- invalidation and freshness;
- objective readiness separated from caller eligibility;
- no generic DSL/microservice.

Boundary:

- designed for one synthetic print recommendation;
- not implemented as a general engine;
- MP-006 should reuse discipline, not import the entire architecture blindly.

### Merged PR #16 and Draft PR #143 — network resilience

Reusable:

- lost response after commit;
- stable idempotency identity;
- no automatic business retry;
- reconciliation before resend;
- safe client pending journal.

Essential for outbound actions: one intended message/task must not duplicate after timeout/reload.

### Merged PR #25 — aggregate Stop Conditions

Reusable:

- hard Stop overrides favorable totals;
- aggregate privacy;
- deterministic owner decision;
- no recommendation-as-authorization.

### Private Issue #68 — Service Management direction

Relevant directions:

- Price & Margin;
- Risks & Deviations;
- Cash;
- customers/orders/search/print;
- one owner next step.

Boundary:

- broad program, not a frozen opportunity/consent/value contract.

## 3. Product-package anchors

### MP-001 Smart QR Status

Potentially supplies a safe service-status channel and reduces status inquiry pain. MP-006 must not reuse QR access for unrelated marketing without separate permission.

### MP-002 Mobile Express Intake

Potential future source for customer-requested notifications, service need, price mode and consent version—only after canonical implementation/proof.

### MP-003 Owner Pulse

Consumes the one selected opportunity as a bounded owner action. Does not calculate it.

### MP-004 Cash Leakage Guard

Open debt/exception is not automatically an opportunity. Disputed or governed cases are excluded from growth contact unless a separate lawful workflow permits it.

### MP-005 Pain Scanner

A supported pain-reduction experiment may create an expansion opportunity. MP-006 does not rewrite the pain result.

### MP-007 Reputation Booster

Likely future owner of the full review/reputation workflow. MP-006 review-request family should remain a small eligibility experiment or migrate cleanly.

## 4. Required canonical source inventory

Before implementation identify exact authoritative fields/events for:

- customer safe identity/contact channels;
- contact purpose/consent/opt-out/preferences;
- order readiness, issue and collection;
- quote/approval request and decision;
- complaint/dispute/return/warranty hold;
- prior unavailable request/waitlist;
- service/part availability;
- payment/reconciliation;
- action/send/delivery/reply outcome;
- communication frequency;
- price/cost/margin when used;
- timezone/quiet hours;
- synthetic/training exclusion;
- tenant/workspace scope.

## 5. Key gaps and risks

- existing consent data may not support marketing purposes;
- contact history/frequency may be incomplete;
- ready/order/payment projections may conflict;
- no verified messaging provider/adapter;
- no legal review by jurisdiction;
- expected value can be confused with guaranteed revenue;
- organic demand may be falsely attributed;
- review requests can overlap MP-007;
- customer identity/privacy can leak in Evidence;
- opportunity lists can become spam tools;
- incomplete costs make margin claims unsafe.

## 6. Minimal architecture direction

Start in the modular monolith:

```text
existing Core reads/events
→ family-specific adapters
→ deterministic eligibility
→ permission/frequency projection
→ read-only opportunity assessment
→ owner approval
→ existing/manual bounded action adapter
→ outcome reconciliation
```

First slice should prefer internal/manual execution before building a generalized communications system.

Do not start with:

- marketing automation suite;
- external AI campaign generator;
- new customer data platform;
- vector database;
- microservices;
- dynamic pricing;
- generic campaign DSL.

## 7. Recommended first-source candidates

Subject to owner-PC audit:

1. ready-order collection — likely clearest state and outcome;
2. explicit waitlist notification — strongest consent/relevance if data exists;
3. pending approval follow-up — active service context but higher pressure risk.

Review requests and repeat-service promotions should not be first unless consent/legal evidence is stronger than expected.

## 8. WIP boundary

- documentation only;
- MP-001 remains active engineering WIP;
- no customer contact;
- no database/migration;
- no private implementation branch;
- no pilot/merge/deploy.

## 9. Honest conclusion

`DESIGNED PRODUCT PACKAGE / REUSABLE SOURCE DISCIPLINES FOUND / OPPORTUNITY-SPECIFIC ENGINE NOT PRESENT / VICTORY NOT MEASURED`.