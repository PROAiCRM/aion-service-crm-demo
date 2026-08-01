# MP-005 AION Pain Scanner — Delivery Gates & Evidence Plan v0.1

**Status:** DESIGNED — EXECUTION NOT STARTED  
**Date:** 2026-08-01

## 1. Purpose

Define the controlled path from product design to a tested and measured Pain Scanner without parallel engineering, premature abstraction or false readiness claims.

## 2. Gate rule

A later gate cannot compensate for a failed earlier gate.

Examples:

- a good UI cannot repair an invalid denominator;
- typecheck cannot prove causal accuracy;
- synthetic rules cannot prove live source completeness;
- owner acceptance cannot override a privacy incident;
- an improved metric cannot prove the proposed cause;
- pilot success cannot authorize production automatically.

## 3. Delivery sequence

### DG5-0 — Product package review

Required:

- all MP-005 documents complete;
- product boundaries consistent with MP-003/MP-004;
- owner reviews one-pain rule, causal limits and experiment boundary;
- no engineering start implied.

PASS evidence:

- exact document set and branch head;
- owner decision recorded;
- unresolved questions listed.

### DG5-1 — Canonical source and WIP gate

Required:

- canonical V10.2 source lineage through expected migration head recovered and proven;
- WIP freeze/evidence queue reviewed;
- MP-001 disposition permits next engineering work;
- exact implementation base approved.

STOP when:

- source lineage remains ambiguous;
- local owner checkout contains unreviewed commits;
- implementation would create a second competing branch line.

### DG5-2 — Source field inventory

For each candidate pain family record:

- exact table/view/event/function/API source;
- field ownership;
- timestamp semantics;
- correction behavior;
- tenant/RLS boundary;
- retention/privacy class;
- synthetic/training markers;
- missingness and historical coverage.

Output:

`MP-005_SOURCE_FIELD_INVENTORY_v0.1`.

No rule may be implemented before its source inventory is complete.

### DG5-3 — Minimal architecture RFC

Decide:

- on-demand versus materialized assessment;
- pure-read promise/waiting projections;
- pain episode identity and deduplication;
- assessment/history persistence need;
- experiment contract/receipt persistence;
- API and role projection;
- feature flag and rollback.

Default direction:

- modular monolith;
- existing PostgreSQL;
- read-only assessment first;
- no generic rule engine;
- no separate analytics service;
- no external AI.

### DG5-4 — Pain-family definition freeze

Select at most two pain families for implementation slice 1.

Recommended first candidates only after source review:

- `WAITING_FOR_CUSTOMER_STAGNATION_PATTERN`; or
- `STATUS_INQUIRY_LOAD_PATTERN`; or
- `LATE_OR_BYPASSED_INTAKE_PATTERN`.

For each freeze:

- definition version;
- numerator/denominator;
- minimum sample;
- exclusions;
- thresholds;
- deduplication;
- source-quality gates;
- privacy fields;
- experiment candidates.

### DG5-5 — Deterministic unit and property tests

Test:

- exact input contracts;
- missing/extra/duplicate input rejection;
- stable episode identity;
- deterministic ordering;
- deduplication;
- complete windows;
- timezone boundaries;
- small samples;
- stale/unknown/conflict;
- comparison stability;
- priority tie-breakers;
- no hidden numeric health score;
- no employee segmentation by default;
- rule version invalidation.

### DG5-6 — Disposable PostgreSQL and RLS gate

Use unique create-new disposable PostgreSQL only.

Prove:

- two synthetic tenants remain isolated;
- application role is non-superuser/non-BYPASSRLS;
- required tenant tables enforce RLS/FORCE RLS under approved policy;
- cross-tenant episode/assessment reads return nothing;
- source queries match sampled objects;
- no write occurs during read assessment;
- unavailable/contradictory sources fail closed;
- Evidence contains no PII/secrets/raw payloads.

Never use the real pilot database for this gate.

### DG5-7 — Pure-read HTTP/API gate

Prove:

- authenticated current Principal and workspace scope;
- owner/manager/employee projections;
- no hidden `refresh_*` write side effect;
- no-store/private cache headers as required;
- bounded response size and pagination/drill-down;
- ETag or assessment identity;
- stale and unavailable states;
- safe error contract;
- no token/query/PII in logs;
- no consequential POST from the scanner screen.

### DG5-8 — Truth-class and explanation gate

Synthetic matrix proves:

- `OBSERVED` versus `DERIVED_PATTERN` versus `INFERRED_CAUSE` versus `SIMULATED_EFFECT` separation;
- missing data never becomes zero;
- contradiction remains visible;
- no root-cause label;
- AI/model output cannot upgrade truth;
- supporting and alternative explanations retained;
- one-pain priority reason is reproducible.

### DG5-9 — Privacy and non-blame gate

Prove:

- aggregate-first output;
- small-group suppression;
- no customer identifiers in assessment receipt;
- employee identity excluded from primary segmentation;
- no ranking, guilt, fraud or productivity score;
- employee correction route;
- authorized drill-down only;
- external AI path absent/disabled.

### DG5-10 — Mobile and desktop comprehension gate

On iPhone-sized and desktop layouts:

- one pain visible without configuration;
- numerator/denominator and window readable;
- observed versus inferred obvious;
- one next step;
- competing pain explanation accessible;
- Basic/Living modes preserve meaning;
- keyboard and screen-reader labels;
- reduced motion;
- owner answers six questions.

Target candidate:

- at least 80% correct within 60 seconds.

This is a hypothesis until measured.

### DG5-11 — Historical shadow mode

Run assessment over a bounded historical operational window with no workflow changes.

Measure:

- definition accuracy;
- data missingness;
- recommendation relevance;
- misleading recommendation rate;
- priority churn;
- owner disagreement reasons;
- manual-review comparison.

No employee alerts or real intervention yet.

### DG5-12 — Experiment rehearsal

Synthetic/friendly rehearsal of:

- frozen baseline;
- owner approval;
- one intervention;
- one primary metric;
- guardrails;
- stop/rollback;
- contamination;
- conclusion receipt;
- supported/not-supported/inconclusive paths.

The system must accept a failed hypothesis without relabeling success.

### DG5-13 — Limited real experiment

Only after a separate Owner Gate.

Constraints:

- one low-risk pain family;
- one bounded intervention;
- defined team/location/window;
- transparent employee notice;
- no external AI required;
- rollback available;
- daily guardrail review;
- no production-wide rollout.

### DG5-14 — Victory measurement

`VICTORY_OBSERVED` requires:

- valid baseline and comparison;
- frozen contract;
- primary threshold achieved;
- guardrails passed;
- no critical privacy/trust failure;
- result receipt;
- owner acceptance.

### DG5-15 — Repeat, revise, park or stop

Possible outcomes:

- `REPEAT_COMPARABLE_CONTEXT`;
- `REVISE_DEFINITION`;
- `REVISE_INTERVENTION`;
- `PARK_LOW_VALUE`;
- `STOP_MISLEADING_OR_TOO_COSTLY`;
- `PROMOTE_BOUNDED_PRODUCT_SLICE`.

No automatic scale.

## 4. Test Matrix summary

### Definition tests

- positive, negative, boundary and insufficient cases;
- timezone/day boundary;
- correction and exclusion;
- denominator integrity;
- deduplication;
- version changes.

### Truth tests

- observed/derived/inferred/simulated isolation;
- contradiction retention;
- no missing defaults;
- no AI truth upgrade.

### Priority tests

- P0 trust blocker precedence;
- material pain selection;
- lower-cost tie-break;
- active experiment stability;
- deterministic lexical final tie-break;
- no opaque score.

### Experiment tests

- frozen contract;
- one primary intervention;
- conclusion states;
- guardrail stop;
- contamination/inconclusive;
- rollback;
- no retrospective target change.

### Security/privacy tests

- tenant isolation;
- role/field projections;
- safe logs;
- small-group suppression;
- no raw free text;
- no employee ranking;
- no external model path.

### Resilience tests

- source unavailable;
- stale projection;
- PostgreSQL timeout;
- browser timeout;
- reload;
- offline snapshot labeling;
- no duplicate assessment/decision receipt.

## 5. Evidence classes

- `E-DESIGN` — approved document contract;
- `E-SOURCE` — source/static audit;
- `E-UNIT` — deterministic tests;
- `E-DB` — disposable PostgreSQL/RLS;
- `E-HTTP` — runtime API/privacy/log;
- `E-UX` — owner comprehension;
- `E-SHADOW` — historical shadow assessment;
- `E-EXPERIMENT` — controlled intervention result;
- `E-VICTORY` — accepted measured outcome;
- `E-COMMERCIAL` — paid/renewal/retention evidence.

Passing one class does not imply another.

## 6. Evidence privacy

Evidence artifacts may contain:

- rule codes/versions;
- safe synthetic counts;
- PASS/FAIL;
- bounded reason codes;
- hashes/commit SHAs;
- timestamps;
- aggregate pilot results.

They must not contain:

- real customer names/phones;
- IMEI/serials;
- free-text notes/messages;
- cookies/tokens/PINs;
- database URLs;
- raw response/request bodies;
- individual employee ranking data.

## 7. Rollback strategy

- feature flag disables MP-005 projection;
- no canonical Core data deletion;
- no hidden workflow mutation;
- experiment change can be removed independently;
- historical assessment/experiment receipts retained under policy;
- one ordinary revert for code integration;
- no force-push/history rewrite;
- no migration rollback by editing applied migrations.

## 8. Cost-first constraints

- no paid external AI required;
- no new cloud analytics stack;
- no vector DB;
- no new microservice;
- no event-stream platform until justified;
- focused tests before wide gates;
- at most two pain families in first slice;
- one active experiment at a time in pilot.

## 9. Current gate state

| Gate | State |
|---|---|
| DG5-0 Product package | prepared for review |
| DG5-1 Canonical source/WIP | blocked/pending owner-PC work |
| DG5-2 Source inventory | not started |
| DG5-3 Architecture RFC | not started |
| DG5-4 Definition freeze | not started |
| DG5-5–DG5-10 technical/UX | not started |
| DG5-11 shadow | not authorized |
| DG5-12 rehearsal | not started |
| DG5-13 real experiment | not authorized |
| DG5-14 Victory | `NOT_MEASURED` |
| DG5-15 scale/disposition | unavailable |

## 10. Next mandatory engineering step

Not MP-005 implementation.

The current mandatory engineering step remains recovery and proof of the canonical source line and disposition of the single active MP-001 engineering WIP. MP-005 remains documentation-only until a separate owner approval.