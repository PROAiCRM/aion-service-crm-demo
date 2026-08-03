# MP-004 Cash Leakage Guard — Delivery Gates & Evidence Plan v0.1

**Статус:** DESIGNED  
**Дата:** 2026-08-01  
**Product:** MP-004 Cash Leakage Guard  
**Engineering authorization:** NOT GRANTED

## 1. Goal

Определить безопасную последовательность перехода от продуктового дизайна к проверенной реализации, не создавая параллельную денежную систему и не называя сигнал доказанным убытком.

Главный принцип:

> Нет точного source, правильной денежной семантики, human review и Evidence — нет Cash Leakage Guard.

## 2. Global Preconditions

До любой реализации обязательны:

- MP-001 engineering WIP завершён, припаркован или официально освобождён;
- Owner Gate на MP-004 implementation scope;
- восстановлена canonical source lineage V10.2 through `0044`;
- точный clean branch/head;
- command/read inventory;
- утверждены Product Passport, Taxonomy, Money Semantics, Case Lifecycle и Role Boundary;
- реальные данные не используются в разработочных gates;
- existing Money/Inventory/Issue Core не дублируются.

## 3. Gate Sequence

## DG4-0 — Product Package Acceptance

### Required

- полный пакет документов;
- owner review;
- поддерживаемые MVP exception types;
- blocked scope;
- Victory Contract;
- Stop Criteria;
- current WIP statement.

### PASS

```text
MP004_PRODUCT_DESIGN_ACCEPTED
```

Это не implementation approval.

## DG4-1 — Canonical Source Recovery

### Required

- read-only owner-PC preflight;
- exact V10.2 commit/tree/build identity;
- migrations `0041–0044` and hashes;
- no reset/clean/rebase/force-push;
- comparison with LKG manifests.

### PASS

```text
CANONICAL_SOURCE_THROUGH_0044_PROVEN
```

### STOP

- ambiguous source;
- missing migration;
- modified applied migration;
- real-pilot mutation.

## DG4-2 — Money/Issue/Inventory Command Inventory

Для каждого command фиксируются:

- source path;
- schema/version;
- authority;
- transaction;
- idempotency;
- receipts;
- events;
- rollback;
- RLS;
- unknown-result behavior.

### Required command groups

- payment/partial payment;
- refund/reversal;
- debt authorization/revocation;
- issue with debt;
- issue reversal after physical return;
- cash discrepancy/reconciliation;
- reservation/consumption/release/return;
- data correction.

### PASS

No protected action remains unmapped.

## DG4-3 — Trusted Read and Formula Inventory

### Required

- balance formula;
- confirmed payment source;
- issue/debt state;
- cash discrepancy result;
- inventory movements;
- freshness/version;
- aggregate reconciliation;
- pure-read proof.

### Critical check

Обычный MP-004 read не вызывает hidden mutation.

### PASS

Every displayed fact has canonical source and semantic label.

## DG4-4 — Minimal Architecture RFC

### Preferred design

Внутри modular monolith:

1. source-event adapters;
2. versioned deterministic exception rules;
3. case identity/deduplication;
4. append-only case/review receipts;
5. owner read projection;
6. bounded alert projection;
7. measurement instrumentation.

### Forbidden

- separate payment ledger;
- generic rule DSL;
- fraud ML platform;
- employee score;
- new microservice;
- external AI dependency in MVP.

### PASS

RFC accepted with migration/rollback plan.

## DG4-5 — Static Contracts and Rule Unit Matrix

Для каждого rule:

- positive case;
- valid exception/authorized case;
- negative case;
- stale data;
- unknown data;
- contradiction;
- duplicate event;
- out-of-order event;
- cross-tenant input;
- changed rule version;
- amount semantic;
- no accusation language.

### Target

- P0 synthetic recall 100%;
- P1 synthetic recall ≥95%;
- false confirmed cases in negative matrix = 0.

Static PASS не является database/runtime PASS.

## DG4-6 — Disposable PostgreSQL / RLS / Concurrency

### Environment

Только create-new marker-verified disposable PostgreSQL in isolated ephemeral cluster.

### Required Proof

- full canonical migrations apply;
- case and review schemas valid;
- tenant Alpha cannot access Beta;
- runtime role not superuser/BYPASSRLS/table owner;
- FORCE RLS/least privilege per accepted DB policy;
- duplicate candidate creates one case;
- concurrent evaluations deterministic;
- append-only receipts immutable;
- current authorization required for read;
- failed business command does not become completed case outcome;
- no raw secret/PII in Evidence.

### STOP

Any real pilot database connection.

## DG4-7 — Command Receipt and Unknown-Result Integration

### Required scenarios

- server commit + lost browser response;
- same idempotency identity after reload;
- no blind retry;
- one business effect;
- one canonical command result;
- case changes from `RESULT_UNKNOWN` after reconciliation;
- failed receipt bounded and durable;
- approval PIN attempts durable;
- timeout does not claim cancellation of server work.

### PASS

No duplicate payment/refund/issue/stock mutation.

## DG4-8 — HTTP, Logs, Cache and Privacy

### Required

- owner-only endpoints no-store;
- request logs exclude Cookie/Authorization/query/body;
- case responses contain bounded projection;
- UUID/secret paths not leaked publicly;
- browser Cache Storage excludes owner API/data;
- error responses exclude DB internals;
- exports contain approved aggregate fields only;
- revoked membership loses access;
- ordinary refresh does not mutate business state.

## DG4-9 — UX and Human Review Rehearsal

### Devices

- desktop target;
- iPhone target;
- AION Basic/constrained supported browser when applicable.

### Scenarios

- owner understands top case in ≤30 seconds;
- employee provides clarification with minimal data;
- owner distinguishes outstanding balance vs loss;
- unknown/conflict visible;
- protected action shows consequences;
- PIN/authority failure understandable;
- alert dismiss does not close case;
- case closure requires outcome receipt;
- no employee ranking/accusation text;
- degraded/offline state honest.

### PASS

Owner and employee can complete bounded scenarios without developer translation.

## DG4-10 — Shadow Mode

Rules evaluate real approved pilot events, but:

- no interruptive alert initially;
- no autonomous action;
- no case-driven command execution;
- reviewers compare system vs manual ground truth;
- false positives and misses recorded;
- sums reconciled.

### Promotion requirement

P0 recall 100%, acceptable P1 recall and no safety incident.

## DG4-11 — Friendly Operational Pilot

### Scope

- one service/workspace;
- small trained user set;
- limited exception types;
- manual fallback;
- daily owner review;
- reversible feature flag;
- no fraud claims.

### Evidence

- review SLA;
- outcomes;
- false positives;
- alert fatigue;
- employee trust;
- incidents;
- amount semantics.

## DG4-12 — Measured Victory

`VICTORY_OBSERVED` only if:

- agreed pilot targets met;
- no Stop Condition;
- financial facts reconcile;
- owner can operate without developer;
- team trust boundary preserved;
- recovered/prevented amounts use strict definitions;
- manual process comparison available.

## DG4-13 — Repeat or Stop

Decisions:

- `REPEAT_VICTORY` — second period/service;
- `REVISE_RULES` — useful but inaccurate/noisy;
- `REDUCE_SCOPE` — fewer exception types;
- `PARK_PRODUCT` — dependencies not ready;
- `STOP_PRODUCT` — cost/harm exceeds value.

Commercial claims require repeated result and willingness to pay.

## 4. Integration Order with Existing Drafts

No blind merge. After canonical recovery:

1. identify which historical merged controls are already present;
2. disposition Draft PR #127 failure receipts;
3. disposition PIN hardening branches #129/#138;
4. disposition browser ambiguity #143;
5. audit cash-control #48;
6. synthesize minimal dependencies;
7. create new forward-only migrations above confirmed head;
8. add MP-004 only after dependencies pass their gates.

## 5. Test Matrix Summary

| Area | Minimum proof |
|---|---|
| Taxonomy | every type + negative/stale/conflict/duplicate |
| Money | minor units, currency, semantic class, no double count |
| Cases | lifecycle, dedup, append-only, reopen |
| Authority | owner/manager/employee, AAL/PIN, current membership |
| Commands | atomic effect/receipt, rollback, unknown result |
| RLS | two tenants, cross-tenant denial |
| Alerts | priority, grouping, snooze, dismissal |
| UX | 30-second comprehension, no accusation |
| Privacy | no secrets/PII in logs/cache/Evidence |
| Resilience | DB/network outage and recovery |
| Victory | baseline, recall, outcomes, false positives, trust |

## 6. Evidence Artifact Classes

- `SOURCE_CONTRACT`;
- `UNIT_MATRIX`;
- `DISPOSABLE_DB`;
- `HTTP_PRIVACY`;
- `BROWSER_DEVICE`;
- `SHADOW_MODE`;
- `OWNER_ACCEPTANCE`;
- `EMPLOYEE_TRUST`;
- `VICTORY_MEASUREMENT`;
- `COMMERCIAL_EVIDENCE`.

Каждый artifact содержит exact commit, environment, policy versions, result and limitations.

## 7. Feature Flags and Rollback

Минимальные flags:

- `cashLeakageCasesEnabled`;
- exception type allowlist;
- alerts enabled separately;
- manager visibility separately;
- optional AI explanation separately and default-off.

Rollback:

- disable evaluation/alerts;
- preserve source business data;
- preserve existing cases/receipts read-only;
- return to manual reconciliation;
- no deletion of financial history.

## 8. Cost Gate

Перед расширением измеряются:

- implementation effort;
- rule maintenance;
- review time;
- false-positive cost;
- support cost;
- infra cost;
- prevented/recovered result.

AI/provider cost не допускается в MVP без доказанной дополнительной пользы.

## 9. Security Stop Conditions

- cross-tenant access;
- wrong amount as trusted;
- duplicate money/stock action;
- bypassed authority/PIN;
- hidden business mutation;
- receipt rewrite;
- raw secrets/PII in Evidence;
- stale value shown live;
- employee accusation/scoring;
- inability to disable product safely.

## 10. Current Gate Status

| Gate | Status |
|---|---|
| DG4-0 Product Package | In preparation; documents created |
| DG4-1 Canonical Source | BLOCKED by #83 / owner PC |
| DG4-2 Command Inventory | NOT STARTED on recovered source |
| DG4-3 Trusted Reads | NOT STARTED |
| DG4-4 Architecture RFC | NOT CREATED |
| DG4-5 Unit Matrix | NOT IMPLEMENTED |
| DG4-6 Disposable DB | NOT EXECUTED |
| DG4-7 Unknown Result | Dependencies exist in Draft/history; integrated proof absent |
| DG4-8 Privacy | NOT EXECUTED for MP-004 |
| DG4-9 UX | NOT PROTOTYPED as unified product |
| DG4-10 Shadow | NOT IMPLEMENTED |
| DG4-11 Pilot | NOT AUTHORIZED |
| DG4-12 Victory | NOT MEASURED |
| DG4-13 Repeat/Stop | NOT REACHED |

## 11. Next Mandatory Engineering Action

Не писать MP-004 code.

Первое допустимое техническое действие остаётся общепроектным:

> owner-PC read-only preflight → canonical source recovery through migration `0044`.

Только после этого возможен MP-004 command/read inventory и отдельный Owner Gate на implementation RFC.
