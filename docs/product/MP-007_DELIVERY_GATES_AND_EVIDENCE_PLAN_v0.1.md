# MP-007 Reputation Booster — Delivery Gates & Evidence Plan v0.1

**Status:** DESIGNED — EXECUTION NOT STARTED  
**Date:** 2026-08-01

## 1. Purpose

Define the controlled path from product design to a tested, ethical and measured Reputation Booster without premature public-platform automation or false reputation claims.

## 2. Gate principle

A later success cannot erase an earlier ethical or safety failure.

Examples:

- more reviews cannot compensate for review gating;
- a higher rating cannot compensate for unresolved complaints;
- typecheck cannot prove consent or wrong-recipient safety;
- a delivered message cannot prove a review;
- a review cannot prove incremental revenue;
- owner approval cannot override platform terms or law.

## 3. Delivery sequence

### DG7-0 — Product package review

Required:

- all MP-007 documents complete;
- boundaries with MP-005/MP-006 clear;
- owner reviews recovery-first, anti-gating and attribution rules;
- engineering remains blocked.

### DG7-1 — Canonical source and WIP gate

Required:

- canonical V10.2 source lineage proven;
- active engineering WIP reviewed;
- MP-001 disposition permits new work;
- exact implementation base approved.

STOP on ambiguous source or competing branch line.

### DG7-2 — Source field inventory

Inventory exact sources for:

- completion/issue/QC;
- warranty/rework/return;
- customer/contact ownership;
- consent/purpose/channel/opt-out;
- communication receipts;
- complaint/recovery state;
- platform/link configuration;
- tenant/workspace/RLS;
- trusted time and exclusions.

No rule before field ownership is known.

### DG7-3 — Legal and platform policy gate

Before real contact or public links:

- local communications/legal review;
- privacy/retention review;
- review-platform terms reviewed;
- anti-gating/incentive restrictions recorded;
- provider terms/security reviewed;
- approval version and expiry recorded;
- rollback/disable path confirmed.

Failure blocks live pilot.

### DG7-4 — Minimal architecture RFC

Decide:

- feedback/recovery persistence;
- permission/frequency ledger ownership;
- pure-read eligibility projection;
- contact command adapter;
- template registry;
- recovery receipts;
- platform outcome verification strategy;
- feature flags/rollback.

Default:

- modular monolith;
- existing PostgreSQL;
- no separate campaign/reputation service;
- no external AI;
- feedback/recovery first.

### DG7-5 — Definition/template freeze

First slice freezes:

- bounded feedback choices;
- recovery priority codes;
- eligibility/blockers;
- one feedback template;
- one recovery acknowledgement;
- optional one neutral review template;
- opt-out/frequency/quiet-hours rules;
- outcome states.

### DG7-6 — Deterministic unit/property tests

Test:

- missing/extra/duplicate input rejection;
- completion/QC/recovery blockers;
- consent/channel/opt-out precedence;
- anti-gating invariants;
- template versioning;
- idempotency;
- wrong-recipient stop;
- frequency/quiet hours;
- declared versus verified review;
- aggregate deduplication;
- no employee score;
- stale platform policy block.

### DG7-7 — Disposable PostgreSQL and RLS

Use unique disposable PostgreSQL.

Prove:

- two synthetic tenants isolated;
- application role non-superuser/non-BYPASSRLS;
- feedback/recovery/permission rows tenant-bound;
- cross-tenant reads/writes blocked;
- pure eligibility read has no business side effect;
- opt-out and case closure durable;
- request/action receipts exactly once;
- Evidence/logs contain no PII/secrets/raw text.

### DG7-8 — Contact and network-resilience gate

With synthetic/fake provider adapter prove:

- stable idempotency identity;
- one logical send;
- timeout after commit;
- unknown result reconciliation;
- no blind resend;
- provider failure;
- wrong-recipient report stop;
- immediate opt-out;
- no message body/recipient in general logs;
- no autonomous send.

### DG7-9 — Recovery lifecycle gate

Synthetic matrix proves:

- P0/P1/P2/P3 triage;
- one human owner;
- SLA/next action;
- protected corrective commands;
- customer-confirmed unresolved reopens/escalates;
- closure requires outcome Evidence;
- review request never conditions recovery;
- compensation authority remains external.

### DG7-10 — Anti-gating and fairness gate

Prove:

- public route not selected by satisfaction prediction;
- equal rules for eligible populations;
- no positive-only reward;
- no sensitive targeting;
- no employee review ranking;
- small-group suppression;
- platform/legal version current;
- public text/replies not autonomous.

### DG7-11 — Mobile/desktop comprehension gate

Owner and staff can see:

- recovery-first cases;
- eligibility/blockers;
- permission/channel;
- one next action;
- declared versus verified outcome;
- opt-out and platform limitations.

Target candidate:

- at least 80% correct owner sessions within 60 seconds.

### DG7-12 — Historical shadow mode

No contact.

Measure:

- eligible completed orders;
- unresolved blockers;
- missing permission data;
- potential gating bias;
- data completeness;
- owner relevance;
- expected staff workload.

### DG7-13 — Friendly rehearsal

Use synthetic or explicitly friendly recipients:

- feedback flow;
- opt-out;
- wrong recipient;
- recovery case;
- unknown result;
- neutral request;
- no public review requirement;
- rollback.

### DG7-14 — Limited real pilot

Separate Owner Gate required.

Constraints:

- one location/cohort;
- manual approval;
- one neutral feedback flow;
- recovery first;
- no incentives;
- no autonomous response/post;
- daily guardrail review;
- bounded duration/sample;
- immediate disable available.

### DG7-15 — Victory and disposition

`VICTORY_OBSERVED` only when:

- baseline valid;
- recovery detection/SLA/outcomes meet target;
- contact compliance is 100% or blocked;
- anti-gating and privacy guardrails pass;
- measurement receipt exists;
- owner accepts.

Then choose:

- repeat comparable window;
- revise;
- park;
- stop;
- promote bounded slice.

No automatic scale or commercial claim.

## 4. Test matrix

### Eligibility

- eligible completion;
- incomplete/QC/warranty/open recovery;
- opt-out/unknown permission;
- expired platform policy;
- duplicate candidate;
- quiet hours/frequency.

### Feedback/recovery

- positive/neutral/question/unresolved/P0;
- free-text absent/present;
- duplicate feedback;
- reopen;
- customer confirmation;
- closure without Evidence rejected.

### Ethics/fairness

- positive and negative respondents receive same independent public-review rights;
- no rewards;
- no employee/sensitive segmentation;
- small groups suppressed;
- recovery not conditional on review.

### Outcome

- sent/delivered/opened/declared/verified separation;
- rating snapshot source/time;
- attribution levels;
- organic outcome not claimed;
- review edit/removal reason unknown.

### Security/resilience

- RLS;
- safe logs;
- wrong recipient;
- provider timeout;
- no blind resend;
- opt-out race;
- stale permission;
- no autonomous action.

## 5. Evidence classes

- `E-DESIGN`;
- `E-SOURCE`;
- `E-LEGAL_PLATFORM`;
- `E-UNIT`;
- `E-DB_RLS`;
- `E-CONTACT_RUNTIME`;
- `E-RECOVERY`;
- `E-UX`;
- `E-SHADOW`;
- `E-PILOT`;
- `E-VICTORY`;
- `E-COMMERCIAL`.

Each class is independent.

## 6. Evidence privacy

Allowed:

- rule/template/policy versions;
- safe counts;
- bounded outcome codes;
- PASS/FAIL/reason;
- hashes/commit SHAs;
- aggregate metrics.

Forbidden:

- customer name/phone/email;
- order/device details;
- message/review text;
- platform profile ID;
- tokens/cookies/credentials;
- staff accusations;
- raw provider payloads.

## 7. Rollback

- feature flags disable feedback/request flows;
- provider keys/config disabled separately;
- no deletion of canonical Service Core data;
- experiments/templates reversible;
- opt-outs/recovery Evidence retained under policy;
- ordinary revert for code;
- no force-push/history rewrite;
- no applied-migration editing.

## 8. Cost-first constraints

- no external AI required;
- no social-listening stack;
- no separate microservice;
- no generic campaign builder;
- no multi-platform automation first;
- feedback/recovery before review integration;
- one location/cohort/template in first pilot;
- one active reputation experiment.

## 9. Current state

| Gate | State |
|---|---|
| DG7-0 package | prepared for review |
| DG7-1 canonical/WIP | pending/blocked |
| DG7-2 source inventory | not started |
| DG7-3 legal/platform | not started |
| DG7-4 architecture RFC | not started |
| DG7-5–DG7-11 implementation/tests | not started |
| DG7-12 shadow | not authorized |
| DG7-13 rehearsal | not started |
| DG7-14 real pilot | not authorized |
| DG7-15 Victory | `NOT_MEASURED` |

## 10. Next mandatory engineering step

Not MP-007 implementation. The mandatory engineering step remains canonical-source proof and disposition of MP-001 single WIP. MP-007 remains documentation-only until separate owner authorization.