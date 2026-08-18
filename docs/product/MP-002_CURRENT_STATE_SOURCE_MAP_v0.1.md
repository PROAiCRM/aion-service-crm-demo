# MP-002 Mobile Express Intake — Current-State Source Map v0.1

**Статус:** SOURCE AUDIT SUMMARY — CANONICAL CONTINUITY NOT PROVEN  
**Дата:** 2026-08-01  
**Private technical source:** `PROAiCRM/AION-Service-CRM`

## 1. Executive finding

MP-002 не начинается с нуля. В закрытом репозитории существуют несколько Draft-линий, которые вместе покрывают значительную часть будущего Express Intake:

- PR #46 — source flow `Экспресс → заказ → квитанция`, но полный runtime не доказан;
- PR #56 — атомарная intake receipt, transaction/idempotency границы, print readiness и RLS evidence design;
- PR #100 — mobile Express UX/RFC и Living UI prototype, но без React/API/database integration и юридического одобрения consent;
- PR #143 — сохранение mutation identity при timeout/lost response, но executable browser/runtime Evidence отсутствует;
- migration `0044_device_identity_assist_phase1.sql` упоминается как часть подтверждённого V10.2 LKG, но её source-линия пока не восстановлена в GitHub.

Это набор source/prototype evidence, а не один проверенный канонический MP-002.

## 2. Evidence boundary

### Подтверждено документами Draft PR

- существует Express route/catalog/create-order source flow;
- предусмотрен переход к созданному заказу;
- существует направление immutable intake receipt;
- команда проектируется как idempotent transaction;
- print request отделён от создания заказа;
- client projection исключает внутренние supplier/cost/evidence данные;
- mobile prototype и key screen specs существуют;
- mutation identity может сохраняться при потерянном ответе в изолированной ветке;
- camera/device identity assist фигурирует в V10.2 migration contract;
- owner-approved mobile Express direction существует.

### Не подтверждено

- единый canonical commit, содержащий все slices;
- migration/source 0041–0044 в GitHub;
- physical iPhone Express flow;
- пять успешных end-to-end runtime cycles на reconciled head;
- median ≤120 seconds;
- legally approved consent/signature;
- camera frame no-retention runtime proof;
- dropped-response no-duplicate database proof;
- full cross-tenant/RLS proof на canonical line;
- real-client pilot;
- commercial result.

## 3. Capability map

| Capability | Existing evidence | Gap | Next safe action |
|---|---|---|---|
| Express entry route | PR #46 source audit; PR #100 prototype | runtime/canonical integration | recover canonical source then map exact files |
| Phone/client lookup | source flow referenced | normalization/duplicate/tenant tests not proven | focused contract and DB tests |
| Device selection | catalog/manual source; 0044 identity assist reference | exact 0044 source missing | recover migration/source; human confirmation policy |
| Camera assist | approved concept/prototype direction | implementation/privacy/accuracy absent | local-first spike only after MP-001 WIP gate |
| Service selection | Express catalog exists | exact single/multi-service behavior unresolved | keep one primary service in MVP |
| Price/deadline | source flow likely supports selected catalog entry | explicit FIXED/RANGE/AFTER_DIAGNOSTICS policy not proven | implement explicit modes after source map |
| Consent/signature | approved mobile concept; prototype notes | legal text/storage/runtime absent | legal boundary and consent snapshot design |
| One order per intake | idempotency patterns in PR #56 | executable concurrency/lost-response proof absent | replay with PR #143 strategy on canonical line |
| Immutable intake receipt | PR #56 source slice | local applicator/runtime Evidence pending | integrate only after lineage recovery |
| QR handoff | MP-001 Draft source exists separately | cross-product sequencing blocked | reference MP-001 link safely after both products proven |
| Print | PR #56 readiness/optional print design | physical print unproven | do not block order on print; separate gates |
| Draft recovery | UI concepts and PR #143 journal direction | exact draft/privacy behavior not proven | bounded draft policy and tests |
| RLS/permissions | gates designed in PR #56 | canonical DB pass absent | disposable PostgreSQL after recovery |
| Metrics | not proven | no baseline/instrumentation | implement privacy-minimal events before pilot |

## 4. Existing source risks

### Fragmented Draft branches

Полезные slices находятся в разных ветках с разными base refs. Их нельзя просто merge по очереди без восстановления canonical lineage и dependency review.

### Canonical gap 0041–0044

MP-002 особенно зависит от `0044_device_identity_assist_phase1.sql`. До восстановления нельзя утверждать, что GitHub содержит актуальную модель device assist.

### Oversized PR/history

Некоторые Draft PR включают большие delivery/evidence механизмы. Product slice должен быть выделен минимально, без копирования лишней автоматизации.

### Prototype vs implementation

PR #100 доказывает дизайн/source prototype, но не React/API integration, physical browser behavior, legal consent или производительность.

### Source tests vs runtime

Написанные тесты и static audits не заменяют database, browser, LAN, iPhone и employee workflow Evidence.

## 5. Reuse decisions

Не создавать заново:

- второй service order model;
- второй client/device model;
- отдельную Express database;
- альтернативную permission system;
- новый print queue;
- новый idempotency framework;
- отдельную QR систему.

Повторно использовать после проверки:

- shared identities/sessions;
- service order command boundary;
- customer/device core;
- catalog/pricing core;
- document snapshot/receipt core;
- command receipts/idempotency;
- RLS/tenant context;
- MP-001 public-link boundary;
- print profiles.

## 6. Proposed integration slices

После завершения MP-001 active engineering и восстановления canonical source:

### Slice A — truth map

- точные файлы Express flow;
- exact order command;
- receipt transaction;
- consent data structures;
- device assist migration;
- current web mobile route;
- idempotency boundary.

### Slice B — minimum safe intake

- manual device search;
- one service;
- explicit price/deadline modes;
- consent without camera;
- one order + receipt;
- double-submit protection.

### Slice C — unknown result hardening

- persistent identity;
- reconciliation;
- dropped-response tests.

### Slice D — camera assist

- local/no-retention spike;
- human confirmation;
- accuracy and time measurement.

### Slice E — MP-001 handoff

- create/use safe status link;
- receipt QR;
- no coupling that blocks order creation.

## 7. Blocking dependencies

- Issue #83 canonical source recovery;
- MP-001 engineering WIP or explicit owner exception;
- consent/legal decision;
- product field/data policies;
- exact device assist source recovery;
- target iPhone/browser access;
- disposable PostgreSQL;
- feature flag/rollback.

## 8. Stop criteria

Stop integration if:

- exact source candidate cannot be proven;
- migrations already applied would need editing;
- slices duplicate core models;
- consent data is mutable or unprotected;
- lost response can create duplicates;
- camera requires uncontrolled external upload;
- source merge expands far beyond MP-002 scope;
- current pilot/LKG would be modified during discovery.

## 9. Maturity

- product direction: **approved**;
- source fragments: **present in Draft branches**;
- unified canonical implementation: **not established**;
- runtime/iPhone/database Evidence: **pending**;
- pilot victory: **NOT_MEASURED**.

## 10. Next engineering action

Не создавать новую реализацию MP-002 сейчас. После MP-001 gate и owner-PC recovery выполнить read-only exact-file map на доказанном canonical V10.2 source, затем выбрать минимальные reusable commits/slices вместо переписывания.