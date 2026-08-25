# MP-004 Cash Leakage Guard — Product Package Index v0.1

**Статус пакета:** COMPLETE PRODUCT DESIGN PACKAGE — DRAFT REVIEW  
**Дата:** 2026-08-01  
**Product ID:** `MP-004`  
**Victory:** `NOT_MEASURED`  
**Engineering:** NOT STARTED  
**Canonical tracking:** public Issue #11

## 1. Package Purpose

Этот пакет определяет Cash Leakage Guard как самостоятельный продукт AION, который:

- обнаруживает ограниченный набор доказуемых денежных и складских exceptions;
- создаёт долговечные cases;
- показывает факты, unknowns и authority;
- проводит case через human review;
- связывает corrective action с существующим command boundary;
- измеряет outcome без выдуманной «потерянной прибыли»;
- не превращается в employee surveillance или fraud accusation engine.

## 2. Package Documents

### 2.1 Product Passport & Victory Contract

`MP-004_PRODUCT_PASSPORT_AND_VICTORY_CONTRACT_v0.1.md`

Содержит:

- боль;
- Product Promise;
- MVP/не-MVP;
- First-Value Moment;
- Victory Definition;
- Value Score;
- Compound Value;
- pilot targets;
- commercial hypothesis;
- Stop Criteria;
- honest maturity.

### 2.2 Exception Taxonomy & Event Contract

`MP-004_EXCEPTION_TAXONOMY_AND_EVENT_CONTRACT_v0.1.md`

Содержит:

- Truth Classes;
- canonical exception envelope;
- девять MVP exception types;
- blocked future types;
- deduplication;
- event ordering/freshness;
- severity;
- rule versioning;
- no hidden mutation.

### 2.3 Money Exposure & Outcome Semantics

`MP-004_MONEY_EXPOSURE_AND_OUTCOME_SEMANTICS_v0.1.md`

Содержит строгие классы:

- transaction amount;
- outstanding balance;
- confirmed discrepancy;
- amount at risk;
- confirmed loss;
- recovered amount;
- prevented loss;
- estimated exposure.

Также фиксирует:

- inventory value basis;
- discount/margin block;
- no profit claim;
- currency/time semantics;
- aggregation and double-counting protection;
- разрешённый язык интерфейса.

### 2.4 Case Lifecycle & Human Review Policy

`MP-004_CASE_LIFECYCLE_AND_HUMAN_REVIEW_POLICY_v0.1.md`

Содержит:

- lifecycle от candidate до resolved;
- blocked/conflict/escalation/reopen states;
- assignments;
- append-only review receipts;
- corrective command boundary;
- unknown-result reconciliation;
- closure requirements;
- SLA;
- Evidence levels;
- offline/degraded operation.

### 2.5 Role, Approval & Non-Accusation Boundary

`MP-004_ROLE_APPROVAL_AND_NON_ACCUSATION_BOUNDARY_v0.1.md`

Содержит:

- Owner/Manager/Employee boundaries;
- authority set;
- проектную approval matrix;
- approval PIN/AAL/intent rules;
- no employee ranking;
- no guilt/fraud score;
- separation of duties;
- self-review conflict;
- personnel privacy;
- owner responsibility.

### 2.6 Alert Priority & Fatigue Policy

`MP-004_ALERT_PRIORITY_AND_FATIGUE_POLICY_v0.1.md`

Содержит:

- P0–INFO priority;
- one primary action;
- grouping/deduplication;
- notification budget;
- repeat/snooze/dismiss rules;
- false-positive feedback;
- threshold versioning;
- no dark patterns;
- Owner Pulse integration;
- fatigue health metrics.

### 2.7 Pilot Measurement & Owner Acceptance

`MP-004_PILOT_MEASUREMENT_AND_OWNER_ACCEPTANCE_v0.1.md`

Содержит:

- baseline;
- synthetic matrix;
- shadow mode;
- friendly/measured pilot;
- recall/review/outcome/false-positive metrics;
- economic semantic metrics;
- owner/employee trust;
- provisional targets;
- acceptance scenarios;
- Stop Conditions;
- Victory levels;
- commercial-proof boundary.

### 2.8 Current-State Source Map

`MP-004_CURRENT_STATE_SOURCE_MAP_v0.1.md`

Содержит:

- canonical lineage blocker;
- historical merged PR anchors;
- current Draft dependency anchors;
- command/read inventory requirements;
- reuse/new-source boundary;
- architecture risks;
- maturity matrix;
- next owner-PC technical step.

### 2.9 Delivery Gates & Evidence Plan

`MP-004_DELIVERY_GATES_AND_EVIDENCE_PLAN_v0.1.md`

Содержит gates `DG4-0` → `DG4-13`:

- product acceptance;
- canonical recovery;
- command/read inventory;
- minimal RFC;
- unit matrix;
- disposable PostgreSQL/RLS;
- idempotency/unknown-result;
- HTTP/privacy/cache;
- UX rehearsal;
- shadow mode;
- operational pilot;
- Victory;
- repeat/revise/stop.

### 2.10 Package Index

Этот документ.

## 3. Canonical Product Decisions

1. MP-004 — case system, а не обычный alert feed.
2. Existing Money, Issue and Inventory Core остаются источниками истины.
3. MVP работает на детерминированных правилах без внешнего AI.
4. Система оценивает процессы и факты, не личность сотрудника.
5. Signal не равен loss, misconduct или fraud.
6. Outstanding balance не равен confirmed loss.
7. Discount/margin exceptions заблокированы до отдельной policy.
8. Employee ranking, guilt score и sanctions отсутствуют.
9. Corrective actions выполняются только существующими protected commands.
10. Lost response требует reconciliation с той же idempotency identity.
11. Alert dismissal не закрывает case.
12. Closure требует authority, outcome and append-only receipt.
13. Unknown/stale/conflict не превращаются в trusted zero/amount.
14. One primary owner action важнее dashboard overload.
15. MP-001 остаётся единственным активным engineering WIP.

## 4. Supported MVP Exception Types

- `ISSUE_WITH_OUTSTANDING_DEBT`;
- `COMPLETED_ORDER_WITH_BALANCE`;
- `CASH_DISCREPANCY_REPORTED`;
- `REFUND_OR_REVERSAL_REQUIRES_REVIEW`;
- `ISSUE_REVERSAL_PHYSICAL_RETURN_MISMATCH`;
- `STOCK_RESERVATION_OR_RELEASE_ANOMALY`;
- `PAYMENT_ORDER_STATE_MISMATCH`;
- `MUTATION_RESULT_UNKNOWN_FOR_MONEY_OR_ISSUE`;
- `DUPLICATE_SENSITIVE_OPERATION_CANDIDATE`.

Каждый тип остаётся proposal for implementation до source inventory и tests.

## 5. Explicitly Blocked Scope

- automatic fraud detection;
- employee honesty/risk scores;
- hidden surveillance;
- sanctions/HR actions;
- arbitrary discount warnings;
- margin/profit calculation without approved accounting basis;
- bank/tax integrations;
- external AI analysis of real cases;
- generic rule engine/DSL;
- separate payment/inventory ledger;
- separate microservice.

## 6. Dependencies

### Product dependencies

- MP-002 Mobile Express Intake;
- MP-003 Owner Pulse;
- future MP-010 Business Memory;
- future MP-005 Pain Scanner.

### Shared Core dependencies

- Order Core;
- Money Core;
- Inventory Core;
- Identity/Principal/Authorization;
- Action/Command Receipts;
- Audit/Event boundary;
- tenant/RLS;
- data freshness and formula registry.

### Engineering dependencies

- private Issue #83 canonical recovery;
- WIP freeze/queue disposition;
- exact command/read inventory;
- reconciliation of selected Draft hardening branches.

## 7. Evidence Status

### Existing historical evidence

- debt/QC/return/inventory E2E existed and passed on historical canonical line;
- lost-response/idempotent retry passed historically;
- money/stock mismatch existed as pilot Stop Condition.

### Existing source proposals

- cash-control endpoint;
- durable failed command receipts;
- durable PIN attempt boundary;
- browser mutation ambiguity journal.

### Missing MP-004 evidence

- unified source;
- exact canonical integration;
- exception detection accuracy;
- case persistence;
- owner/employee UX;
- current PostgreSQL/RLS;
- alert fatigue;
- real economic outcome;
- pilot/commercial proof.

## 8. Provisional Victory Targets

- P0 synthetic recall: 100%;
- P1 synthetic recall: ≥95%;
- high-priority review within SLA: ≥90%;
- reviewed cases with valid outcome: ≥80%;
- false positive after tuning: ≤10%;
- financial accuracy: 100% or explicit unavailable/conflict;
- cross-tenant exposure: 0;
- automatic accusation/sanction: 0;
- duplicate corrective operation: 0;
- closure without receipt: 0.

Targets are working hypotheses pending baseline.

## 9. Stop Conditions

- wrong trusted amount;
- cross-tenant exposure;
- duplicate payment/refund/issue/stock action;
- bypassed authority;
- raw PIN/token/PII in Evidence;
- hidden mutation on read;
- employee accusation or scoring;
- P0 miss;
- case lost after alert dismissal;
- team starts bypassing CRM because product feels punitive;
- manual fallback or rollback unavailable.

## 10. Honest Maturity

| Layer | Status |
|---|---|
| Product idea | Approved |
| Product package | Designed in this branch |
| Exception rules | Designed, not implemented |
| Money semantics | Designed, not source-mapped |
| Case lifecycle | Designed, not persisted |
| Roles/approval | Designed, actual grants pending audit |
| Source anchors | Found |
| Unified implementation | Not established |
| Current executable tests | Not run for MP-004 |
| Pilot | Not authorized |
| Victory | `NOT_MEASURED` |
| Commercial result | Not proven |

## 11. Document Authority

Внутри пакета:

- Passport определяет продукт и Victory;
- Taxonomy определяет supported exceptions;
- Money Semantics определяет значение цифр;
- Lifecycle определяет case states/outcomes;
- Role Boundary определяет authority and language;
- Alert Policy определяет attention mechanics;
- Pilot Plan определяет доказательство пользы;
- Source Map определяет фактическую исходную базу;
- Delivery Plan определяет переход к implementation.

При конфликте с реальным source реальный verified source фиксируется как факт, а документы обновляются через отдельное решение. Документация не переписывает историю реализации.

## 12. Current Stop Point

Product-design package завершён в отдельной Draft branch.

Engineering remains blocked by:

1. MP-001 single-WIP;
2. owner-PC Q0 preflight;
3. canonical recovery through migration `0044`;
4. command/read inventory;
5. separate Owner Gate for MP-004 Architecture RFC.

## 13. Next Mandatory Product Step

После owner review этого пакета:

> подготовить `MP-005 AION Pain Scanner — Product Passport & Victory Contract v0.1`.

MP-005 должен агрегировать доказанные повторяющиеся process pains, но не дублировать конкретные MP-004 money cases и не превращать корреляцию в причинность.
