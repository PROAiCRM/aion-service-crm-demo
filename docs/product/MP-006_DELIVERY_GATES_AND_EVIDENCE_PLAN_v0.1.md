# MP-006 Opportunity Engine — Delivery Gates & Evidence Plan v0.1

**Status:** DESIGNED — EXECUTION NOT STARTED  
**Date:** 2026-08-01

## 1. Gate principle

Later success cannot compensate for earlier trust failure:

- high conversion cannot excuse unauthorized contact;
- a good UI cannot fix wrong eligibility;
- delivered message is not realized value;
- payment after contact does not prove attribution;
- source tests do not prove legal permission;
- one pilot does not authorize automation or scale.

## 2. Delivery sequence

### DG6-0 — Product package review

Required:

- all MP-006 documents complete;
- boundaries with MP-003/004/005/007 consistent;
- owner reviews one-opportunity rule, consent and value semantics;
- no implementation implied.

### DG6-1 — Canonical source and WIP gate

Required:

- canonical V10.2 source/migration line recovered;
- single-WIP queue reviewed;
- MP-001 disposition permits next engineering slice;
- exact implementation base approved.

### DG6-2 — Source, consent and legal inventory

For each candidate family map:

- authoritative tables/events/APIs;
- tenant/RLS ownership;
- contact purpose and consent evidence;
- opt-out and frequency history;
- complaint/dispute holds;
- timestamps/freshness;
- outcome/reconciliation;
- value/cost fields;
- local legal review questions.

No live contact before this gate passes.

### DG6-3 — Minimal architecture RFC

Decide:

- on-demand versus materialized assessment;
- candidate identity/deduplication;
- permission/frequency projection;
- action approval and idempotency;
- manual versus provider adapter;
- outcome/attribution receipt persistence;
- feature flag and rollback.

Default:

- modular monolith;
- existing PostgreSQL;
- pure-read discovery;
- manual/human action first;
- no generic campaign engine;
- no external AI;
- no automatic price/discount.

### DG6-4 — First-family freeze

Select at most two families; preferably one.

Candidate order:

1. ready-order collection;
2. explicit waitlist availability;
3. pending approval follow-up.

Freeze:

- eligibility/exclusions;
- relevance/customer benefit;
- permission/channel;
- frequency;
- outcome;
- value semantics;
- guardrails;
- legal limits.

### DG6-5 — Deterministic unit/property tests

Test:

- exact inputs;
- missing/extra/duplicate rejection;
- stable identity;
- deduplication;
- stale/contradicted state;
- opt-out/complaint exclusion;
- frequency limits;
- expected versus realized value;
- priority precedence;
- one-opportunity stability;
- no automatic action.

### DG6-6 — Disposable PostgreSQL/RLS gate

Prove with synthetic tenants:

- tenant isolation;
- non-superuser/non-BYPASSRLS app role;
- cross-tenant reads/actions blocked;
- pure-read assessment has no hidden writes;
- consent/contact scope enforced;
- outcome deduplication;
- no PII/secrets in Evidence;
- stale/conflicting facts fail closed.

Never use real pilot database.

### DG6-7 — Permission and frequency gate

Synthetic matrix proves:

- service-context purpose;
- explicit request;
- marketing consent where needed;
- unknown permission blocks;
- opt-out blocks;
- channel-specific permission;
- quiet hours;
- cooldown/contact cap;
- dispute/complaint suppression;
- wrong-recipient correction.

### DG6-8 — Read-only API and role projection

Prove:

- authenticated Principal/workspace;
- owner/manager/employee fields;
- no side effect on GET;
- no-store/private cache as needed;
- ETag/assessment identity;
- bounded drill-down;
- no sensitive data in URL/logs;
- action button absent without server-approved action contract.

### DG6-9 — Action/idempotency/reconciliation

Prove:

- stable action identity before execution;
- double tap/reload does not duplicate;
- timeout shows unknown result;
- no blind resend;
- provider/manual receipt reconciles;
- opt-out after approval blocks execution;
- one intended action produces one receipt.

### DG6-10 — Value and attribution gate

Synthetic and historical cases prove:

- gross/potential/expected/realized/incremental values separated;
- missing cost becomes unknown;
- organic outcome not automatically attributed;
- no double count with MP-003/004/005;
- no profit claim without governed model;
- result receipt reproduces calculations.

### DG6-11 — Privacy, fairness and wording gate

Prove:

- no sensitive targeting;
- no personalized exploitative pricing;
- no employee sales ranking;
- small-group suppression;
- neutral truthful wording;
- no fabricated urgency;
- no unrestricted free text/AI;
- clear decline/opt-out.

### DG6-12 — Mobile/desktop comprehension and staff rehearsal

Owner understands six questions within target candidate of 60 seconds.

Staff rehearsal proves:

- relevance review;
- permission visibility;
- wording edit limits;
- manual action;
- decline/opt-out;
- unknown result;
- outcome entry/reconciliation;
- immediate stop.

### DG6-13 — Historical shadow mode

No customer contact.

Measure:

- eligibility accuracy;
- relevance acceptance;
- permission gaps;
- duplicate/organic outcomes;
- expected-value error;
- owner manual comparison;
- recommendation churn.

### DG6-14 — Limited real pilot

Separate Owner Gate required.

- one family;
- one channel/action;
- small permitted population;
- human approval for every action;
- no external AI;
- daily guardrail review;
- rollback/stop;
- no production-wide rollout.

### DG6-15 — Victory/disposition

`VICTORY_OBSERVED` requires valid outcome, permission, measurement, material threshold and guardrails.

Then choose:

- repeat comparable cohort;
- revise family/action;
- park low value;
- stop unsafe/misleading;
- promote bounded slice.

No automatic scale.

## 3. Test Matrix

### Eligibility

- positive/negative/boundary;
- completed/already actioned;
- complaint/dispute;
- stale source;
- duplicate;
- wrong tenant;
- missing recipient;
- synthetic record.

### Contact

- consent purposes/channels;
- opt-out;
- cooldown;
- quiet hours;
- duplicate provider outcome;
- unknown result;
- wrong recipient.

### Value

- potential without forecast;
- estimate range;
- missing costs;
- realized outcome;
- organic attribution;
- control/baseline;
- double-count prevention.

### Security/privacy

- RLS;
- safe projections/logs;
- no sensitive targeting;
- small groups;
- no external AI path;
- no bulk send.

### UX

- one opportunity;
- customer benefit;
- permission;
- expected/realized distinction;
- one action;
- one measurement.

## 4. Evidence classes

- `E-DESIGN`;
- `E-SOURCE`;
- `E-LEGAL_POLICY`;
- `E-UNIT`;
- `E-DB`;
- `E-HTTP`;
- `E-CONTACT`;
- `E-UX`;
- `E-SHADOW`;
- `E-PILOT`;
- `E-VICTORY`;
- `E-COMMERCIAL`.

One class never implies another.

## 5. Evidence privacy

Allowed:

- rule/template versions;
- synthetic counts;
- bounded states/reason codes;
- hashes/commit SHAs;
- aggregate results;
- PASS/FAIL.

Forbidden:

- customer name/phone/email;
- full message content;
- order/device identifiers;
- consent signature/document body;
- tokens/cookies/PINs;
- database URLs;
- sensitive segments;
- raw payloads.

## 6. Rollback

- feature flag disables discovery/action layer;
- no Core deletion;
- no hidden writes;
- manual action path removable independently;
- opt-out/preferences retained;
- Evidence/result history retained under policy;
- one reviewed code revert;
- no force push/history rewrite;
- no editing applied migrations.

## 7. Cost-first constraints

- no external AI required;
- no communications platform before manual pilot proves value;
- no new microservice/CDP/vector DB;
- one opportunity family first;
- one active pilot experiment;
- focused tests before wide gates;
- provider cost measured explicitly.

## 8. Current gate state

| Gate | State |
|---|---|
| DG6-0 package | prepared for review |
| DG6-1 canonical/WIP | blocked/pending owner-PC work |
| DG6-2 inventory/legal | not started |
| DG6-3 RFC | not started |
| DG6-4 family freeze | not started |
| DG6-5–DG6-12 technical/UX | not started |
| DG6-13 shadow | not authorized |
| DG6-14 real pilot | not authorized |
| DG6-15 Victory | `NOT_MEASURED` |

## 9. Next engineering step

Not MP-006 implementation. The mandatory engineering step remains canonical source recovery and single active MP-001 WIP disposition.