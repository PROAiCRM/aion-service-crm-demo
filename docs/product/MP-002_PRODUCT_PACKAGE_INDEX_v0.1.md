# MP-002 Mobile Express Intake — Product Package Index v0.1

**Статус:** PRODUCT DESIGN PACKAGE COMPLETE — ENGINEERING NOT ACTIVE  
**Дата:** 2026-08-01  
**Ветка:** `docs/mp-002-product-passport-v0-1`  
**Victory status:** `NOT_MEASURED`

## 1. Назначение пакета

Этот пакет превращает MP-002 из привлекательной идеи «быстро оформить ремонт с телефона» в контролируемый продукт с:

- одной измеримой победой;
- минимальным потоком;
- границей данных;
- честной моделью согласия;
- приватностью камеры;
- защитой от дублей и неизвестного результата;
- пилотными метриками;
- инженерными gates;
- честным состоянием существующего source.

Документы не запускают параллельную инженерную работу. MP-001 остаётся единственным активным инженерным мини-продуктом.

## 2. Состав пакета

### 2.1 Product Passport & Victory Contract

`MP-002_PRODUCT_PASSPORT_AND_VICTORY_CONTRACT_v0.1.md`

Определяет:

- боль;
- пользователей;
- Outcome Promise;
- First-Value Moment;
- MVP/non-goals;
- двухминутную цель;
- Victory Contract;
- метрики;
- Value Score;
- stop/rollback;
- честную зрелость.

### 2.2 Minimum Data & Flow Policy

`MP-002_MINIMUM_DATA_AND_FLOW_POLICY_v0.1.md`

Определяет:

- что значит полноценная приёмка;
- обязательные и необязательные поля;
- модель клиента/устройства/услуги;
- режимы цены и срока;
- короткий UX flow;
- черновик;
- ошибки;
- server validation;
- data-quality guardrails.

### 2.3 Consent, Signature & Legal Boundary

`MP-002_CONSENT_SIGNATURE_AND_LEGAL_BOUNDARY_v0.1.md`

Определяет:

- consent vs рисунок подписи;
- допустимые способы подтверждения;
- обязательный текст до согласия;
- immutable document/version/hash;
- хранение signature asset;
- re-consent;
- legal review;
- запрет юридических overclaims.

### 2.4 Camera Assist Privacy Policy

`MP-002_CAMERA_ASSIST_PRIVACY_POLICY_v0.1.md`

Определяет:

- камера только по действию;
- no retention by default;
- local-first preference;
- server inference Owner Gate;
- human confirmation;
- confidence/mismatch;
- events без изображений;
- accuracy/time measurement;
- stop criteria.

### 2.5 Idempotency & Unknown Result Model

`MP-002_IDEMPOTENCY_AND_UNKNOWN_RESULT_MODEL_v0.1.md`

Определяет:

- один logical intake → один order;
- persistent safe idempotency identity;
- pending journal без PII/body;
- lost-response state;
- reconciliation;
- server command receipt;
- atomic order + receipt;
- no blind retry;
- offline non-goals.

### 2.6 Pilot Measurement & Owner Acceptance

`MP-002_PILOT_MEASUREMENT_AND_OWNER_ACCEPTANCE_v0.1.md`

Определяет:

- eligible repairs;
- baseline;
- capture-before-work rate;
- median/P90 intake time;
- bypass/correction/duplicate metrics;
- staged pilot;
- guardrails/stop triggers;
- staff/client/owner acceptance;
- Victory classification.

### 2.7 Current-State Source Map

`MP-002_CURRENT_STATE_SOURCE_MAP_v0.1.md`

Связывает продукт с Draft source:

- PR #46 Express flow;
- PR #56 immutable receipt/idempotency transaction;
- PR #100 mobile prototype;
- PR #143 lost-response mutation identity;
- migration 0044 device identity assist canonical gap.

Не называет эти fragments единым реализованным продуктом.

### 2.8 Delivery Gates & Evidence Plan

`MP-002_DELIVERY_GATES_AND_EVIDENCE_PLAN_v0.1.md`

Определяет gates DG2-0–DG2-12:

- canonical truth;
- exact file map;
- owner/legal decisions;
- manual MVP;
- database/idempotency;
- consent/receipt;
- mobile/poor network;
- optional camera;
- MP-001 QR handoff;
- rehearsal;
- pilot;
- Victory;
- repeat/stop.

## 3. Каноническая продуктовая формула

```text
Быстрая форма ≠ полноценная приёмка

Полноценная приёмка =
один заказ
+ ключевые данные
+ честная цена/срок
+ consent evidence
+ immutable receipt
+ защита от дубля
+ клиентское подтверждение
```

## 4. Принятые проектные решения v0.1

1. Основной результат — заказ зарегистрирован **до начала работы**.
2. Медианная цель — ≤120 секунд, но только вместе с guardrails.
3. Один Express order содержит одну основную услугу; сложность переводится в полный заказ.
4. Неизвестная модель допустима; ложная модель недопустима.
5. Камера необязательна и local/no-retention по умолчанию.
6. AI предлагает, человек подтверждает.
7. Consent связан с точной версией условий.
8. Рисунок подписи не называется квалифицированной ЭП без юридического доказательства.
9. Один logical submit создаёт ровно один заказ.
10. Lost response вызывает reconciliation, не blind retry.
11. Order и required intake receipt имеют атомарную доказуемую границу.
12. Физическая печать не блокирует существование заказа.
13. QR handoff переиспользует MP-001, не создаёт вторую QR-систему.
14. MP-002 не начинает engineering параллельно MP-001 без Owner Gate.

## 5. Открытые Owner Gates

До engineering/pilot требуется решение владельца:

- список eligible repairs;
- обязательность имени;
- минимальная фиксация состояния/комплектности;
- price/deadline modes;
- способ consent;
- хранение изображения подписи;
- юридический текст;
- камера в MVP или позже;
- local vs server camera processing;
- срок хранения draft/pending identity;
- QR-first vs print fallback;
- real data/client pilot;
- WIP exception или завершение MP-001.

## 6. Связь с другими продуктами

### MP-001 Smart QR Status

MP-002 создаёт качественный заказ и передаёт клиенту status link/QR. MP-001 не должен дублировать intake data.

### MP-003 Owner Pulse

MP-002 создаёт надёжные события:

- orders created;
- before/after work start;
- intake duration;
- consent completeness;
- bypass;
- unknown results.

Owner Pulse использует агрегаты и исключения, не подписи/фото/PII.

### MP-004 Cash Leakage Guard

Полная регистрация до работы снижает пространство для «мимо кассы», но MP-002 не обвиняет сотрудников.

### MP-005 Pain Scanner

Использует data-quality и bypass patterns только после доказательства событий.

## 7. Главные риски

- speed metric стимулирует мусорные данные;
- consent становится тяжёлым;
- юридические overclaims;
- camera privacy leak;
- camera accuracy ниже ручного поиска;
- lost response создаёт дубли;
- Draft source fragments конфликтуют;
- canonical migration 0044 отсутствует;
- продукт разрастается в полную CRM;
- параллельный engineering нарушает WIP.

## 8. Честная зрелость пакета

| Объект | Статус |
|---|---|
| Product Passport | designed |
| Minimum Data Policy | designed |
| Consent/Legal Boundary | designed; legal review pending |
| Camera Privacy Policy | designed; implementation absent |
| Idempotency Model | designed; isolated source direction exists |
| Pilot Plan | designed; not authorized |
| Source Map | high-level audit complete; canonical exact map pending |
| Delivery Gates | designed |
| Unified canonical code | not established |
| Target iPhone/browser proof | none |
| Two-minute Victory | NOT_MEASURED |
| Commercial result | not proven |

## 9. Неизменённые границы

Этот пакет не:

- меняет private CRM source;
- запускает разработку MP-002;
- применяет миграции;
- обрабатывает реальные данные;
- включает камеру;
- создаёт юридически значимые подписи;
- разрешает real pilot;
- доказывает runtime;
- доказывает коммерцию.

## 10. Следующий обязательный продуктовый шаг

После owner review MP-002 перейти к паспорту MP-003 Owner Pulse, сохраняя WIP: продуктовый дизайн разрешён, параллельная инженерная реализация — нет.

## 11. Следующий обязательный инженерный шаг для MP-002

После завершения/явной паузы MP-001 и восстановления canonical V10.2:

1. DG2-0 canonical truth/WIP authorization;
2. DG2-1 exact canonical file map;
3. выбрать минимальный manual Express slice без камеры;
4. не переписывать существующие PR #46/#56/#143 без reuse review.