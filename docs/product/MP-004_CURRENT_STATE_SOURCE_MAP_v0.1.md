# MP-004 Cash Leakage Guard — Current-State Source Map v0.1

**Статус:** SOURCE AUDIT MAP — DESIGN EVIDENCE ONLY  
**Дата:** 2026-08-01  
**Product:** MP-004 Cash Leakage Guard  
**Технический источник истины:** `PROAiCRM/AION-Service-CRM`

> Карта показывает существующие технические кирпичики. Она не утверждает, что единый MP-004 уже реализован или готов к пилоту.

## 1. Executive Finding

MP-004 не начинается с нуля. В частном репозитории существуют и исторически проверялись отдельные денежные, выдачные, складские и доказательные границы.

Однако сейчас нет подтверждённой единой линии, в которой одновременно существуют:

- все необходимые source-файлы;
- каноническая миграционная история через `0044`;
- единый exception detector;
- case lifecycle;
- owner review UI;
- актуальная PostgreSQL/RLS Evidence;
- измеренная продуктовая победа.

Допустимый статус:

```text
PRODUCT_DESIGNED / SOURCE_ANCHORS_FOUND / UNIFIED_IMPLEMENTATION_NOT_ESTABLISHED
```

## 2. Canonical Lineage Blocker

Private Issue #83 фиксирует разрыв:

- подтверждённый V10.2 LKG ожидает миграцию `0044_device_identity_assist_phase1.sql`;
- точный source через `0041–0044` ещё не восстановлен как GitHub-каноническая линия;
- новые Draft-ветки нельзя безопасно собирать и развёртывать до восстановления lineage.

Следствие для MP-004:

- нельзя выбирать реализационную базу по названию ветки;
- нельзя автоматически merge/rebase существующие Draft PR;
- нельзя редактировать уже применённые миграции;
- фактические commands, schemas, permissions и receipts нужно повторно инвентаризировать на восстановленном source.

## 3. Source Anchor Registry

## 3.1 Private merged PR #13 — Exception E2E

**Название:** `E2E exception gates: debt, QC, return and inventory release`

Исторически проверенные сценарии:

- провал и повторный проход ОТК;
- запрет выдачи с долгом без разрешения;
- запрет сотруднику создавать debt authorization;
- неверный owner PIN;
- частичная оплата и разрешённая выдача с долгом;
- запрет отмены выдачи без физического возврата;
- owner-only reversal после подтверждения возврата;
- аннулирование гарантии после reversal;
- дефицит детали блокирует completion;
- освобождение неиспользованного резерва;
- повторное резервирование.

**Что доказывает:** в исторической канонической линии существовали и проходили синтетические HTTP/PostgreSQL exception-гейты.

**Чего не доказывает:** единый MP-004 case engine, актуальную V10.2/V10.3 интеграцию, реальный пилот или коммерческий эффект.

## 3.2 Private merged PR #15 — Governance after E2E 19/19

Зафиксировал исторический результат exception-flow E2E `19/19` и следующий network blocker.

**Польза для MP-004:** Evidence о том, что технические инварианты были не только написаны, но и канонически зарегистрированы на той линии.

**Ограничение:** результат относится к точному старому head/release и не переносится автоматически на будущую reconciled line.

## 3.3 Private merged PR #16 — Network Resilience

Исторически подтверждал:

- работу локального API без внешнего интернета;
- сохранение синтетического заказа;
- lost response after server commit;
- idempotent retry;
- ровно один successful `command_receipts` row;
- PostgreSQL outage/recovery;
- duplicate-free replay;
- backup/restore.

**Польза:** фундамент для `MUTATION_RESULT_UNKNOWN_FOR_MONEY_OR_ISSUE` и duplicate-sensitive cases.

**Ограничение:** это network/idempotency Evidence, не MP-004 detection accuracy.

## 3.4 Private merged PR #25 — Day 1–7 Pilot Control Center

Содержал aggregate-only hard Stop Conditions, включая:

- money mismatch;
- stock mismatch;
- duplicate;
- issue/warranty error;
- backup/reconciliation failure.

**Польза:** показывает раннее принятое правило: денежные и складские расхождения должны останавливать продвижение пилота.

**Ограничение:** offline aggregate control center не является operational case engine.

## 3.5 Private Draft PR #42 — EVE-ready Order Experience

Проектировал pattern:

```text
observed state
→ blockers
→ one allowed action
→ reason/authority
→ consequence preview
→ Action Receipt
```

**Польза:** подходит для MP-004 case card и corrective action boundary.

**Ограничение:** documentation/synthetic UX design; runtime integration не реализована.

## 3.6 Private Draft PR #40 — Living Service World Experiment

Разделял:

- `OBSERVED`;
- `INFERRED`;
- `SIMULATED`.

**Польза:** согласуется с Truth Classes MP-004.

**Ограничение:** isolated synthetic experiment; не live CRM.

## 3.7 Private Draft PR #48 — Cash-Control / Owner-Control

Историческая физическая проверка зафиксировала:

- `/api/owner-control/dashboard` → HTTP 200;
- `/api/money/cash-control` → HTTP 200;
- supplier endpoints → HTTP 500 на тот момент.

Также выявлено, что dashboard read может вызывать `app.refresh_promise_status`, то есть потенциально иметь скрытый write-side effect.

**Польза:** существующий cash-control endpoint — вероятный источник денежных facts.

**Обязательный аудит:** MP-004 read/detection path должен быть pure-read либо использовать явный отдельно доказанный refresh command. Обычный просмотр не должен менять business state.

## 3.8 Private Draft PR #127 — Durable Failed Command Receipts

Проектирует/реализует в isolated branch:

- rollback failed business mutation;
- commit sanitized FAILED receipt;
- replay same idempotency key without повторного business execution;
- bounded `{code}` without raw error.

**Польза:** Evidence для failed protected actions и unknown/retry cases.

**Статус:** source implemented, tests authored, executable PostgreSQL Evidence pending, not merged.

## 3.9 Private Draft PR #129 — Approval PIN Failure Boundary

Охватывает protected paths:

- debt authorization и issue with debt;
- cash discrepancy approval;
- refund;
- debt revocation;
- issue reversal;
- другие owner-governed commands.

**Польза:** показывает перечень денежных команд, требующих отдельной authority/security Evidence.

**Статус:** child Draft; не должен интегрироваться отдельно от parent/reconciliation.

## 3.10 Private Draft PR #138 — Durable Approval PIN Attempts

Предлагает отдельную short security transaction для failed/success PIN counters, чтобы business rollback не стирал lockout Evidence.

**Польза:** MP-004 не должен ослаблять существующую защиту при corrective actions.

**Статус:** source-proven defect/correction in isolated branch; runtime Evidence pending.

## 3.11 Private Draft PR #143 — Browser Mutation Ambiguity

Проектирует/реализует:

- bounded request timeouts;
- stable mutation fingerprint;
- pending mutation journal без PII/body;
- одинаковый idempotency key после timeout/reload/retry;
- no automatic business retry;
- explicit ambiguous-result state.

Required Evidence включает synthetic cash-shift и express-completion dropped-response cases.

**Польза:** прямой dependency для unknown-result exception type.

**Статус:** tests authored, browser/dropped-response Evidence pending, not merged.

## 3.12 Private Issue #68 — Product/UX Direction

Фиксирует блоки:

- «Риски и отклонения»;
- «Цена и маржа»;
- «Касса»;
- owner-only «Управление сервисом».

**Польза:** подтверждает owner-facing продуктовую потребность.

**Ограничение:** не даёт доказанной discount/margin policy. Поэтому скидки, маржа и «потерянная прибыль» заблокированы в MP-004 MVP.

## 3.13 Private WIP Freeze #155 / Master Scenario #157

Закрепляют:

- one queue item at a time;
- owner-PC read-only preflight first;
- canonical lineage recovery;
- dispositions PROMOTE / REVISE / PARK / CLOSE;
- no new corrective implementation branches.

**Следствие:** MP-004 documentation может развиваться, но engineering implementation остаётся queued.

## 4. Required Canonical Entities to Audit

После восстановления source нужно найти точные сущности и contracts:

- service orders;
- approved order amount/version;
- payments and payment reversals;
- debt authorizations/revocations;
- device issue and issue reversal;
- physical return confirmations;
- cash shifts/discrepancies/reconciliation;
- stock reservations, consumption, release and return;
- command receipts;
- approval PIN/security receipts;
- audit events;
- tenant/workspace ownership;
- permissions/grants;
- customer-safe vs owner-only projections.

Имена в документах не заменяют фактический source audit.

## 5. Required Command Inventory

Для каждого protected command необходимо записать:

- command name and version;
- route/application service;
- role/grant;
- AAL/PIN requirement;
- intent confirmation;
- transaction boundary;
- idempotency identity;
- success receipt;
- failed receipt;
- unknown-result reconciliation;
- source events;
- rollback behavior;
- RLS/tenant guarantees.

## 6. Required Read Inventory

Для каждого MP-004 fact:

- canonical table/view/function;
- formula/version;
- freshness;
- whether read has side effects;
- tenant filter/RLS;
- aggregate-to-drill-down reconciliation;
- degraded mode;
- retention/privacy classification.

## 7. Reuse vs New Source

### Reuse expected

- Money Core commands and calculations;
- issue/debt/QC state machines;
- Inventory Core movements;
- approval PIN/Principal boundary;
- idempotency/command receipts;
- audit events;
- Owner Pulse facts where definitions align.

### New bounded source likely required

- versioned exception rule registry;
- deterministic evaluator;
- case identity/deduplication;
- append-only case review receipts;
- case read projection;
- priority/alert projection;
- measurement instrumentation.

### Explicitly not required

- separate microservice;
- separate payment ledger;
- separate inventory ledger;
- generic fraud platform;
- vector database;
- ML scoring pipeline;
- employee behavior warehouse.

## 8. Architecture Risks

### R1 — Duplicate truth

Создание нового balance/stock calculation внутри MP-004 может расходиться с Shared Core.

**Mitigation:** consume canonical facts and store formula/version references.

### R2 — Hidden mutation on read

Dashboard/refresh behavior может менять derived states.

**Mitigation:** pure-read detection or explicit reviewed refresh command.

### R3 — Draft branch collage

Механическое объединение PR #127/#129/#138/#143 может создать конфликты и ложную готовность.

**Mitigation:** recover canonical lineage, map dependencies, replay minimal slices.

### R4 — Historical Evidence drift

Старый PASS может не соответствовать новой source line.

**Mitigation:** rerun full synthetic matrix at exact reconciled head.

### R5 — Excess scope

Скидки, маржа, fraud AI и employee scoring могут перегрузить MVP.

**Mitigation:** keep blocked until separate Outcome Contract and policies.

## 9. Current Maturity Matrix

| Capability | Source status | Executable evidence | Product status |
|---|---|---|---|
| Debt/issue exception invariants | Historical merged source | Historical synthetic PASS | Reuse candidate |
| Return/reversal invariants | Historical merged source | Historical synthetic PASS | Reuse candidate |
| Reservation release | Historical merged source | Historical synthetic PASS | Reuse candidate |
| Network/idempotent replay | Historical merged + newer Draft hardening | Historical PASS; new branch pending | Dependency |
| Cash-control read | Existing private endpoint | Historical HTTP 200 only | Audit required |
| Durable failed receipts | Isolated Draft source | Pending | Dependency proposal |
| Durable PIN attempts | Isolated Draft source | Pending | Dependency proposal |
| Exception detector | Not identified | None | Not implemented |
| Case lifecycle persistence | Not identified | None | Not implemented |
| Owner review UI | Designed only | None | Not implemented |
| Pilot measurement | Designed | None | Not started |

## 10. Next Mandatory Technical Step

После доступа к owner PC:

1. выполнить только утверждённый read-only Q0 preflight;
2. восстановить exact V10.2 source through `0044`;
3. провести command/read inventory;
4. определить, какие historical capabilities уже находятся в canonical source;
5. оформить MP-004 Integration RFC;
6. не создавать implementation branch до отдельного Owner Gate и WIP-освобождения.

## 11. Honest Conclusion

MP-004 имеет сильный технический фундамент, но сейчас существует как **спроектированный продукт поверх разрозненных source anchors**.

Нельзя утверждать:

- что все необходимые controls присутствуют в текущей GitHub `main`;
- что Draft hardening совместим между собой;
- что case engine реализован;
- что реальные утечки выявляются;
- что продукт экономит деньги.
