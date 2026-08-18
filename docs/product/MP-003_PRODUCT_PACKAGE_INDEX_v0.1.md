# MP-003 Owner Pulse — Product Package Index v0.1

**Статус:** PRODUCT DESIGN PACKAGE — NOT IMPLEMENTED  
**Дата:** 2026-08-01  
**Product ID:** `MP-003`  
**Victory:** `NOT_MEASURED`

## 1. Purpose

Единая точка входа в продуктовый пакет Owner Pulse и карта перехода от дизайна к Evidence.

## 2. Package documents

| Document | Role |
|---|---|
| `MP-003_PRODUCT_PASSPORT_AND_VICTORY_CONTRACT_v0.1.md` | боль, обещание, MVP, Victory и коммерческая гипотеза |
| `MP-003_TRUSTED_FACTS_AND_METRIC_DEFINITIONS_v0.1.md` | точные определения денег, долга, просрочки, ожидания и priority action |
| `MP-003_PRIORITY_ACTION_RULES_AND_EXPLAINABILITY_v0.1.md` | deterministic recommendation, tiers и explanation |
| `MP-003_OWNER_VIEW_PRIVACY_AND_ROLE_BOUNDARY_v0.1.md` | роли, tenant/privacy и запрет employee surveillance |
| `MP-003_DATA_FRESHNESS_AND_DEGRADED_MODE_POLICY_v0.1.md` | freshness, offline, partial/conflict/unavailable states |
| `MP-003_INFORMATION_ARCHITECTURE_AND_30_SECOND_UX_POLICY_v0.1.md` | one-screen contract и 30-second UX |
| `MP-003_PILOT_MEASUREMENT_AND_OWNER_ACCEPTANCE_v0.1.md` | baseline, metrics, guardrails и Victory classification |
| `MP-003_CURRENT_STATE_SOURCE_MAP_v0.1.md` | existing private source contours и gaps |
| `MP-003_DELIVERY_GATES_AND_EVIDENCE_PLAN_v0.1.md` | DG3-0–DG3-12 delivery path |
| `MP-003_PRODUCT_PACKAGE_INDEX_v0.1.md` | этот индекс |

## 3. Canonical product statement

> Owner Pulse за 30 секунд показывает владельцу проверенные деньги, завершённые заказы с долгом, просроченные обещания, ожидания клиента и одно объяснимое действие — без дублирующего дашборда и недоказанного AI.

## 4. MVP facts

1. `cash_received_today` — полученные платежи, не прибыль.
2. `completed_unpaid_orders` — готовые/завершённые заказы с подтверждённым долгом.
3. `overdue_orders` — только подтверждённые просроченные обещания.
4. `waiting_for_client_orders` — ожидание с конкретной причиной.
5. `top_priority_action` — одно deterministic action с rule/evidence trail.

## 5. Core decisions prepared

- rule-first, AI later;
- one screen / one primary action;
- no employee ranking or blame;
- unknown is not zero;
- stale is not live;
- payment is not profit;
- aggregate must reconcile with drill-down;
- Owner Pulse reads shared core, not duplicated tables;
- ordinary view must not hide business mutations;
- MP-003 engineering waits for single-WIP approval.

## 6. Existing private-source anchors

- PR #48 — historical HTTP 200 evidence for `owner-control/dashboard` and `money/cash-control`; dashboard side-effect risk noted.
- PR #73 — Product Observatory proof-chain and deterministic recommendation patterns.
- PR #100 — Living/Basic/Auto UI direction; 30-second result unproven.
- PR #157 — owner-PC/WIP/canonical-source constraints.
- canonical source recovery through migration `0044_device_identity_assist_phase1.sql` remains mandatory.

These anchors are separate source fragments, not a unified tested MP-003 implementation.

## 7. Open owner decisions

Before engineering:

1. Confirm the five MVP facts.
2. Confirm label «Получено сегодня» instead of «Заработано».
3. Confirm that manager money access is default-deny or define allowed scope.
4. Choose pure-read architecture for promise status refresh.
5. Confirm priority tier ordering P0–P4.
6. Confirm provisional pilot targets: 80% correct sessions ≤30s and 70% recommendation usefulness.
7. Confirm no employee rankings in MP-003.

## 8. Current maturity matrix

| Object | Status |
|---|---|
| Product concept | owner-approved direction |
| Product Passport | designed |
| Trusted Facts definitions | designed |
| Priority rules | designed |
| Privacy/role boundary | designed |
| Freshness/degraded policy | designed |
| 30-second UX | designed |
| Pilot plan | designed |
| Existing source contours | found |
| Unified canonical source | not confirmed |
| Pure read architecture | unresolved |
| PostgreSQL/RLS/runtime tests | not executed |
| Physical owner usability | not tested |
| Pilot Victory | `NOT_MEASURED` |
| Commercial result | not proven |

## 9. Product dependencies

### Inputs

- MP-002 improves capture completeness and timeliness.
- Shared Service Order Core provides statuses and promises.
- Money ledger/payment model provides actual receipts and debts.
- Identity/RLS provides owner/manager/tenant boundary.

### Products strengthened

- MP-004 Cash Leakage Guard;
- MP-005 Pain Scanner;
- MP-006 Opportunity Engine;
- MP-000 AION Today;
- MP-010 Business Memory.

## 10. Risks

- false confidence from wrong aggregates;
- hidden mutation on dashboard read;
- stale data shown as current;
- duplicate dashboard/business logic;
- employee surveillance creep;
- metric-definition drift;
- financial wording interpreted as accounting truth;
- owner action based on incomplete data.

## 11. Stop point

Product design package complete. No code, database, runtime, credentials, real data, deployment or pilot changed.

## 12. Next mandatory step

After owner review of this package:

- product-design queue: prepare MP-004 Cash Leakage Guard Product Passport & Victory Contract;
- engineering queue remains unchanged: restore canonical source and complete MP-001 before authorizing MP-003 engineering.
