# AION Product Dependency Map — MP-001 to MP-003 v0.1

**Статус:** APPROVED PRODUCT DESIGN — NOT IMPLEMENTED  
**Дата:** 2026-08-01  
**Область:** MP-001 Smart QR Status, MP-002 Mobile Express Intake, MP-003 Owner Pulse  
**Принцип:** одна модель данных и один modular-monolith core, разные продуктовые победы

## 1. Назначение

Показать, какие зависимости действительно существуют между первыми продуктами AION, чтобы:

- не создавать отдельные дублирующие модели заказа;
- не запускать параллельную инженерную разработку;
- различать порядок продуктового проектирования и порядок технического внедрения;
- понимать, какие Evidence одного продукта улучшают другой;
- не превращать MP-000 AION Today в ещё одну копию бизнес-логики.

## 2. Три продукта — три разные победы

| Product | Основной пользователь | Победа | Главная метрика |
|---|---|---|---|
| MP-001 Smart QR Status | Клиент сервиса | Самостоятельно понял статус без звонка | Routine status inquiries / 100 active orders |
| MP-002 Mobile Express Intake | Сотрудник/приёмщик | Полный заказ оформлен с телефона менее чем за 2 минуты | Median intake time и доля зарегистрированных express repairs |
| MP-003 Owner Pulse | Владелец | За 30 секунд понял состояние и главное действие | Time to trusted answer и action completion |

Один продукт не должен присваивать победу другого.

Например, MP-001 не считается успешным из-за более быстрой приёмки, а MP-003 не считается успешным из-за числа открытий QR.

## 3. Общий Core

Все три продукта используют одну каноническую модель:

- organization/tenant;
- user, identity, role, grants;
- customer;
- device;
- service order;
- service order state machine;
- consent/document snapshot;
- payments/debt;
- audit/action receipts;
- print profiles/jobs;
- product events and metrics;
- feature flags;
- public projection boundary.

Запрещено создавать:

- отдельную таблицу клиентов для MP-002;
- отдельный заказ для MP-001;
- отдельную финансовую истину для MP-003;
- отдельные role/session models для каждого продукта;
- отдельные микросервисы до доказанной необходимости.

## 4. Основная цепочка данных

```text
MP-002 Express Intake
    создаёт качественный заказ и согласие
        ↓
Shared Service Order Core
    хранит канонические статусы, сроки, оплату, документы и события
        ↓
MP-001 Smart QR Status
    публикует минимальную безопасную проекцию клиенту
        ↓
Product Events / Operational Evidence
    фиксируют открытие, ошибки и обращения без лишних данных
        ↓
MP-003 Owner Pulse
    показывает владельцу доверенные агрегаты и одно приоритетное действие
```

Это не означает, что MP-001 нельзя пилотировать до полного MP-002. Существующая CRM уже имеет заказ и статусы. Однако качество MP-001 и MP-003 ограничено качеством исходного capture flow.

## 5. Разница между delivery order и dependency order

### Текущий delivery order

1. MP-001 — потому что существенный Draft source уже существует и можно получить быструю клиентскую ценность после восстановления canonical line.
2. MP-002 — потому что быстрый capture уменьшает unregistered repairs и улучшает качество данных.
3. MP-003 — потому что owner screen должен строиться на доказанных operational facts.

### Логический maturity order

```text
Reliable capture (MP-002 capability)
→ transparent customer status (MP-001)
→ trusted owner clarity (MP-003)
```

Обе последовательности верны в разных смыслах:

- инженерно сейчас выгодно завершить уже начатый MP-001;
- стратегически зрелость MP-002 улучшает foundation всей платформы.

## 6. MP-001 зависимости

### Hard dependencies

- существующий service order;
- каноническая state machine;
- tenant isolation/RLS;
- employee auth/grants;
- public allowlist;
- token lifecycle;
- print document/profile;
- safe public origin;
- revoke/reissue;
- cache/log boundary.

### Soft dependencies

- MP-002 автоматизирует создание QR и улучшает adoption;
- MP-003 может показывать broken-link и status-inquiry signals;
- Reputation Booster позже может использовать post-issue moment;
- Business Memory позже может хранить причины изменений public policy.

### Не является зависимостью

- AI diagnosis;
- payment gateway;
- chat;
- cross-customer learning;
- Business Twin.

## 7. MP-002 зависимости

### Hard dependencies

- employee session/grants;
- customer/device/order creation;
- idempotency;
- consent/signature boundary;
- minimum field policy;
- price/deadline confirmation rules;
- camera privacy rule;
- draft/recovery;
- document and QR handoff;
- mobile responsive/PWA boundary.

### Усиливает

- MP-001: QR выдаётся автоматически и заказ содержит актуальные данные;
- MP-003: owner видит больше реально зарегистрированных ремонтов;
- MP-004: leakage guard видит попытки обхода системы;
- MP-005: pain scanner получает надёжнее capture events;
- Smart Warehouse: demand связана с заказами.

### Риск зависимости

Если MP-002 слишком медленный, сотрудник обходит систему, и все последующие продукты анализируют неполную картину.

## 8. MP-003 зависимости

### Hard dependencies

- доверенные платежные факты;
- active/overdue order rules;
- waiting-for-client state;
- canonical time zone/business day;
- explainable deterministic priority rule;
- data freshness;
- owner role/grants;
- event quality;
- no duplicated dashboard calculations.

### Зависимость от MP-001

MP-003 может показать:

- сколько активных заказов имеют рабочую QR-ссылку;
- сколько клиентов открыли статус;
- сколько broken-link/support incidents;
- динамику routine status inquiries;
- требует ли owner внимания проблема публичного статуса.

Однако эти метрики являются вспомогательными и не должны перегружать первый Owner Pulse.

### Зависимость от MP-002

MP-003 не может честно показать реальную загрузку, если express repairs не регистрируются. Поэтому data completeness должна быть видимой guardrail-метрикой.

## 9. MP-000 AION Today

MP-000 не хранит собственную копию результатов.

Он является experience/composition layer и показывает:

- одну карточку MP-003 Owner Pulse;
- одну проблему MP-005 Pain Scanner;
- одну возможность MP-006 Opportunity Engine;
- одно обязательство/ожидание;
- один следующий шаг.

MP-000 не должен:

- пересчитывать выручку отдельно;
- создавать второй status model;
- дублировать intake flow;
- хранить собственные версии customer/order;
- скрывать источник рекомендации.

## 10. Shared events v0.1

Начальный набор событий, полезных нескольким продуктам:

### Capture

- order intake started;
- order created;
- intake abandoned;
- consent completed;
- device model selected;
- print/QR prepared.

### Operation

- order status changed;
- customer approval requested/received;
- order became overdue;
- order marked ready;
- quality check completed;
- payment recorded;
- debt remained at issue.

### Public status

- link prepared;
- QR printed;
- public page opened;
- view failed;
- link revoked/reissued;
- routine status inquiry recorded.

### Owner action

- priority surfaced;
- owner opened evidence;
- owner accepted/dismissed action;
- outcome completed.

Каждое событие требует отдельного schema/version/privacy review. Этот список не является доказательством реализации.

## 11. Data-quality contracts

### DQ-1 — Order completeness

Заказ имеет минимальные обязательные поля и не является пустым draft.

### DQ-2 — Status timeliness

Публичный и owner-facing контуры используют последний committed canonical status.

### DQ-3 — Payment integrity

Owner Pulse не показывает денежные выводы из неподтверждённых или несогласованных сумм.

### DQ-4 — Tenant context

Все internal queries выполняются в доказанном tenant/session context.

### DQ-5 — Event completeness

Отсутствие события не интерпретируется автоматически как отсутствие реального действия, пока coverage не доказан.

### DQ-6 — Synthetic separation

Synthetic demo/pilot records не входят в реальные owner metrics.

## 12. Feature flag strategy

Каждый продукт имеет отдельный flag/entitlement:

- `mp001_public_status`;
- `mp002_mobile_express_intake`;
- `mp003_owner_pulse`.

Flag отключает experience и команды продукта, но не удаляет shared canonical data.

Зависимости не должны заставлять включать весь набор:

- MP-001 может работать с существующим intake;
- MP-002 может работать без Owner Pulse;
- MP-003 может начать с существующих заказов, но обязан показывать data-quality warning.

## 13. Commercial packaging hypothesis

### Entry victory package

- Express Intake + Smart QR Status;
- обещание: зарегистрировать работу быстро и снизить неопределённость клиента.

### Owner control package

- Owner Pulse + Leakage Guard;
- обещание: быстро понимать деньги, просрочки и критические отклонения.

### AION growth package

- Pain Scanner + Opportunity Engine + Reputation Booster;
- обещание: находить следующий измеримый способ улучшить результат.

Это гипотеза упаковки. Она не подтверждена оплатами или retention.

## 14. Cross-product Victory chain

### Victory 1 — MP-002

Больше express repairs попадает в систему при приемлемом времени оформления.

### Victory 2 — MP-001

Клиенты самостоятельно получают актуальный статус, а обращения снижаются.

### Victory 3 — MP-003

Владелец за 30 секунд видит доверенную картину и принимает одно полезное действие.

Последующая Victory не должна заявляться, если фундаментальная предыдущая data-quality проблема остаётся скрытой.

## 15. Anti-coupling rules

- публичная страница не вызывает owner calculations;
- Owner Pulse не управляет токеном напрямую;
- intake не хранит QR URL в заказе как source of truth;
- print snapshot не становится public-status database;
- event store не заменяет canonical order state;
- UI не реализует security policy;
- AI не создаёт canonical facts;
- products связываются contracts/events, а не копированием таблиц.

## 16. Активный WIP

### Инженерия

Только MP-001.

### Продуктовое проектирование

Допустимо последовательно подготовить паспорта MP-002 и MP-003, но:

- не создавать параллельные implementation branches;
- не менять shared core до MP-001 canonical recovery;
- не добавлять новые tables/APIs только на основании паспортов;
- не считать дизайн реализацией.

## 17. Gates перехода

### MP-001 → MP-002 active engineering

Требуется одно из решений:

- MP-001 достиг staff/physical gate и engineering capacity освободилась;
- MP-001 остановлен/paused по stop criteria;
- owner явно разрешил обоснованное WIP exception.

### MP-002 → MP-003 active engineering

Требуется:

- измеренная completeness intake;
- trusted order/payment/status data;
- определённый owner question;
- отсутствие duplicated dashboard path.

## 18. Основные риски

1. **Неполные данные:** Owner Pulse создаёт ложную уверенность.  
   Контроль: data quality warning и MP-002 adoption metrics.

2. **Двойной ввод:** MP-001 требует отдельного ручного статуса.  
   Контроль: public map from canonical state.

3. **Скрытая связность:** изменение intake ломает public status/owner view.  
   Контроль: versioned contracts and regression tests.

4. **Portfolio sprawl:** одновременно строятся три продукта.  
   Контроль: one active engineering product.

5. **Metric contamination:** synthetic data попадает в Owner Pulse.  
   Контроль: explicit synthetic classification/exclusion.

6. **AI before facts:** owner recommendation выглядит умной, но основана на пропусках.  
   Контроль: deterministic facts and confidence/data-quality boundary first.

## 19. Текущая зрелость

- dependency model: **спроектирована**;
- shared core contract: существует частично в CRM, требует canonical verification;
- product flags: **не подтверждены для MP-001–003**;
- shared events: **предложены, не реализованы как единый contract**;
- MP-001 passport/package: **спроектирован в Draft PR**;
- MP-002 passport: **следующий product-design document**;
- MP-003 passport: **после MP-002**;
- cross-product commercial package: **гипотеза**.

## 20. Следующий шаг

После принятия MP-001 package подготовить `MP-002_PRODUCT_PASSPORT_AND_VICTORY_CONTRACT_v0.1.md`, не начиная параллельную инженерную реализацию. Паспорт MP-002 должен доказать, что under-two-minute intake не жертвует consent, data quality, idempotency и безопасностью камеры.