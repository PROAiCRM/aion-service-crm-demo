# MP-003 Owner Pulse — Current-State Source Map v0.1

**Статус:** AUDIT MAP — UNIFIED IMPLEMENTATION NOT CONFIRMED  
**Дата:** 2026-08-01  
**Private source:** `PROAiCRM/AION-Service-CRM`

## 1. Executive finding

MP-003 не начинается с нуля. В закрытом репозитории уже существуют отдельные owner-facing и money-facing контуры, а также продуктовые/UX-прототипы. Однако они находятся в разных Draft-ветках и не доказаны как единый канонический Owner Pulse.

## 2. Confirmed source evidence

### Private Draft PR #48 — Control endpoints

Подтверждённая физическая проверка 2026-07-27 зафиксировала:

- `/api/owner-control/dashboard` → HTTP 200;
- `/api/money/cash-control` → HTTP 200.

Также отмечено, что dashboard может вызывать `app.refresh_promise_status` и менять производный статус `service_promises`. Поэтому текущий endpoint нельзя автоматически считать чистым read-only источником.

Статус:

- отдельные endpoints существуют;
- повторный full runtime proof текущего head отсутствует;
- supplier-related исправления находятся в Draft;
- единая owner read model не доказана.

### Private Draft PR #73 — AION Product Observatory

Содержит owner-facing proof chains, deterministic recommendation, Owner Brief, risks, decisions, Evidence и truthful maturity states.

Полезно для MP-003:

- explainability pattern;
- proof-chain contract;
- deterministic rule-first recommendation;
- no arbitrary readiness percentages;
- owner usability target.

Не является Owner Pulse для Service CRM:

- работает с проектным portfolio registry;
- не доказывает реальные платежи/заказы;
- local execution/browser evidence pending;
- не должен быть скопирован как второй data source.

### Private Draft PR #100 — Living UI / mobile direction

Содержит owner-approved visual direction, mobile/desktop presentation profiles и 30-second aspiration.

Полезно:

- AION Black/White;
- Living/Basic/Auto presentation;
- reduced motion;
- One Core — Multi Platform UX.

Не доказано:

- React/API/database integration;
- physical mobile/browser behavior;
- 30-second completion;
- Owner Pulse semantic correctness.

### Private Draft PR #157 — Owner PC master scenario

Содержит системную карту пилота, owner-PC Evidence sequence и WIP/canonical-lineage ограничения.

Полезно:

- не выполнять текущий сложный preflight;
- сохранять WIP freeze;
- сначала восстановить canonical source;
- не объявлять runtime proof по документации.

## 3. Capability gap map

| MP-003 capability | Existing evidence | Gap |
|---|---|---|
| Получено сегодня | `/api/money/cash-control` отвечал HTTP 200 | точное semantic definition и ledger reconciliation не доказаны |
| Owner dashboard | `/api/owner-control/dashboard` отвечал HTTP 200 | payload, freshness, RLS и write-side effect требуют аудита |
| Просроченные promises | `service_promises` и refresh procedure упомянуты | нельзя скрыто изменять данные при просмотре; definition/version нужны |
| Waiting for client | вероятно выводится из order/status logic | единый reason model и tests не подтверждены |
| Ready with debt | money/order contours существуют | exact query, rounding, refunds, versioning не доказаны |
| One priority action | deterministic pattern есть в Observatory | Service CRM facts/rules не реализованы как единый продукт |
| 30-second mobile UI | prototype direction существует | owner usability не проверена |
| Role/tenant boundary | общая auth/RLS architecture существует в Draft source | executable aggregate + drill-down denial proof pending |
| Freshness/offline | PWA and HTTP hardening PRs существуют отдельно | Owner Pulse freshness/degraded behavior не реализован |
| Pilot metrics | отсутствуют | baseline, instrumentation и owner acceptance нужны |

## 4. Important source risks

### Hidden write on read

Если `GET /api/owner-control/dashboard` запускает `app.refresh_promise_status`, чтение может менять состояние. Перед MP-003 engineering нужно выбрать явную архитектуру:

- read-time pure projection;
- event/scheduled derived state;
- explicit refresh mutation.

### Money semantics

`cash-control` может содержать больше или меньше данных, чем показатель «Получено сегодня». Нельзя использовать endpoint title как доказательство смысла каждой суммы.

### Multiple UI concepts

Employee-first public demo, Living UI и Observatory не должны стать тремя различными источниками бизнес-логики. MP-003 получает один semantic contract и несколько presentation modes.

### Canonical lineage

Общая проблема canonical source through migration `0044_device_identity_assist_phase1.sql` остаётся блокером для интеграции и executable database proof.

## 5. Recommended replay path

1. Восстановить canonical V10.2 source/migrations through 0044.
2. Найти точные files/queries/routes для owner-control, cash-control и service promises.
3. Зафиксировать текущие payloads и side effects.
4. Сопоставить их с Trusted Facts definitions.
5. Удалить/вынести скрытые mutations из read path.
6. Создать одну versioned Owner Pulse read projection.
7. Переиспользовать существующие permissions/RLS/order/money models.
8. Добавить deterministic priority rules.
9. Проверить disposable PostgreSQL, API, browser, mobile and pilot.

## 6. Non-claims

Этот map не подтверждает:

- точность денежных агрегатов;
- правильность overdue logic;
- отсутствие cross-tenant leakage;
- чистый read-only endpoint;
- единый Owner Pulse UI;
- физический iPhone test;
- pilot/commercial value.

## 7. Current maturity

- pain and product direction: approved;
- individual source contours: found;
- physically observed endpoints: historical bounded evidence exists;
- unified semantic design: created in MP-003 package;
- canonical implementation: not confirmed;
- tests and pilot: pending;
- Victory: `NOT_MEASURED`.
