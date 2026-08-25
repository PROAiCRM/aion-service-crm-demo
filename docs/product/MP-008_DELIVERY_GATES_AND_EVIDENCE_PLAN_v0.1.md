# MP-008 Smart Warehouse — Delivery Gates & Evidence Plan v0.1

**Status:** DESIGNED — EXECUTION NOT STARTED  
**Date:** 2026-08-01

## 1. Purpose

Define the controlled path from product design to trusted warehouse operation without parallel engineering, duplicate ledgers or false stock claims.

## 2. Gate rule

A later gate cannot compensate for an earlier failure:

- UI cannot repair wrong quantity semantics;
- physical count cannot excuse duplicate movement logic;
- unit tests cannot prove RLS;
- purchase outcome cannot validate hidden cost defaults;
- pilot benefit cannot override cross-tenant or double-consumption incident.

## 3. Delivery sequence

### DG8-0 — Product package review

- all 11 documents complete;
- owner reviews quantity, lifecycle, no-autopurchase and non-fraud boundaries;
- engineering remains blocked.

### DG8-1 — Canonical source and WIP gate

- V10.2/migration lineage proven;
- owner-PC checkout reconciled;
- MP-001 WIP disposition permits next engineering work;
- exact base approved.

### DG8-2 — Inventory source inventory

Map exact:

- SKU/location/unit;
- opening/on-hand basis;
- movement types;
- reservations;
- order-part links;
- receipts/idempotency;
- return/quarantine;
- cost/age/inbound fields;
- tenant/RLS and synthetic exclusions.

### DG8-3 — Minimal architecture RFC

Decide:

- canonical movement source;
- pure-read projection;
- whether a materialized projection is necessary;
- physical count/adjustment boundary;
- receipt and contradiction case integration;
- feature flags and rollback.

Default: modular monolith, existing PostgreSQL, no duplicate ledger/service.

### DG8-4 — Quantity/lifecycle freeze

Freeze:

- formulas;
- units;
- state transitions;
- deduplication identity;
- error codes;
- role/approval policy;
- first SKU/location scope.

### DG8-5 — Deterministic tests

Test:

- arithmetic and invariants;
- reserve/consume/release/return transitions;
- missing/unknown/conflict;
- duplicate identity;
- lost response;
- stale version;
- unit/location/compatibility mismatch;
- age/cost unknown;
- deterministic priority.

### DG8-6 — Disposable PostgreSQL/RLS

Prove with synthetic tenants:

- non-superuser runtime;
- RLS/FORCE RLS according to policy;
- no cross-tenant movement/projection;
- atomic or recoverable movement+receipt;
- duplicate commit prevented;
- shortage blocker;
- release/re-reserve;
- physical return not assumed;
- safe Evidence without secrets/PII.

### DG8-7 — Pure-read API and cache/log gate

Prove:

- current Principal/workspace;
- employee/manager/owner projection;
- read has no hidden mutation;
- ETag/version/freshness;
- safe unavailable/contradiction result;
- private/no-store where required;
- no payload/token secrets in logs.

### DG8-8 — Movement resilience gate

- double tap;
- timeout after commit;
- reload/manual retry;
- PostgreSQL outage/recovery;
- same logical identity returns one result;
- ambiguous result blocks new movement until reconciliation;
- one Action Receipt.

### DG8-9 — Physical count/reconciliation rehearsal

Synthetic then bounded friendly count:

- count scope/identity;
- counter/authority;
- discrepancy;
- review;
- separate adjustment;
- no history rewrite;
- quarantine and return conditions.

### DG8-10 — Shortage/ageing recommendation gate

Prove:

- confirmed demand and availability separation;
- no inbound-as-on-hand;
- no false promise;
- no hidden lead-time/cost defaults;
- overstock excludes reservations/demand;
- one transparent action;
- no auto-purchase.

### DG8-11 — Role/non-fraud gate

- grants and step-up;
- no client-supplied role;
- no employee guilt/fraud score;
- correction/context route;
- high-impact action receipt;
- owner-only fields protected.

### DG8-12 — iPhone/desktop comprehension

- one action visible;
- quantity components clear;
- truth/freshness clear;
- consequence preview;
- six owner questions;
- target candidate: 80% correct within 60 seconds.

### DG8-13 — Historical shadow/reconciliation

No workflow change. Measure projection accuracy, data gaps, expired reservations, false shortage/overstock candidates and manual-review comparison.

### DG8-14 — Limited operational pilot

Separate Owner Gate; one location, bounded SKU family, no autonomous purchasing, daily guardrail review and rollback.

### DG8-15 — Victory/disposition

Possible outcomes:

- `VICTORY_OBSERVED`;
- `REPEAT_COMPARABLE_SCOPE`;
- `REVISE_FORMULA_OR_POLICY`;
- `PARK_LOW_DATA_QUALITY`;
- `STOP_UNSAFE_OR_TOO_COSTLY`;
- `PROMOTE_BOUNDED_SLICE`.

No automatic scale.

## 4. Test Matrix summary

### Quantity

- on-hand/reserved/available;
- negative/impossible states;
- units/locations/variants;
- missing opening balance;
- freshness.

### Lifecycle

- reserve/consume/release;
- cancelled demand;
- return pending/confirmed/quarantine;
- duplicate/unknown/stale.

### Demand

- confirmed versus candidate;
- shortage;
- priority;
- substitution/compatibility;
- inbound.

### Ageing/value

- known/unknown age;
- reservations excluded;
- cost known/unknown;
- double counting;
- realized versus estimated outcome.

### Security

- RLS/tenant;
- role/step-up;
- safe logs;
- no fraud ranking;
- no autonomous purchase.

## 5. Evidence classes

- `E-DESIGN`;
- `E-SOURCE`;
- `E-UNIT`;
- `E-DB`;
- `E-HTTP`;
- `E-RESILIENCE`;
- `E-PHYSICAL-COUNT`;
- `E-UX`;
- `E-SHADOW`;
- `E-PILOT`;
- `E-VICTORY`;
- `E-COMMERCIAL`.

Each class is independent.

## 6. Evidence privacy

Allowed: synthetic IDs/counts, rule versions, PASS/FAIL, bounded errors, hashes and aggregate outcomes.

Forbidden: real customer data, PIN/token/cookie, database URLs, supplier secrets, raw payloads and employee accusation data.

## 7. Rollback

- feature flag disables projection/action UI;
- Core movements are not deleted;
- integration reverted by ordinary commit;
- no force push/history rewrite;
- adjustment uses compensating event;
- pilot stops without losing Evidence;
- backup/restore verified before real scope.

## 8. Cost-first constraints

- no external AI required;
- no microservice/event platform;
- no new analytics warehouse;
- one location and bounded SKU family first;
- no supplier integration first;
- no autonomous purchase;
- focused tests before broad gates.

## 9. Current state

| Gate | State |
|---|---|
| DG8-0 | package prepared for review |
| DG8-1 | blocked/pending canonical work |
| DG8-2–DG8-12 | not started |
| DG8-13 | not authorized |
| DG8-14 | not authorized |
| DG8-15 | `NOT_MEASURED` |

## 10. Next mandatory engineering step

Not MP-008 implementation. Canonical source recovery and single-WIP MP-001 disposition remain mandatory first.