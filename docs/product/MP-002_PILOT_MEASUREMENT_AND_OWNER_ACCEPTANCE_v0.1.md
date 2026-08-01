# MP-002 Mobile Express Intake — Pilot Measurement & Owner Acceptance v0.1

**Статус:** PILOT DESIGN — EXECUTION NOT AUTHORIZED  
**Дата:** 2026-08-01  
**Применяется к:** MP-002 Mobile Express Intake

## 1. Цель пилота

Проверить, что Mobile Express Intake не просто быстро открывается, а реально увеличивает долю ремонтов, зарегистрированных до начала работы, при этом:

- медианное время приёмки не превышает 120 секунд;
- согласие связано с точной версией условий;
- один приём создаёт один заказ;
- качество клиента, устройства и цены не ухудшается;
- камера не нарушает приватность;
- сотрудники не обходят поток.

## 2. Primary Victory

> Подходящий экспресс-ремонт регистрируется до начала работы как один полноценный заказ с receipt и consent evidence.

### Рабочие цели v0.1

- capture rate до начала работы: **≥90%** подходящих ремонтов;
- медиана intake time: **≤120 секунд**;
- P90: измеряется и отдельно принимается владельцем;
- duplicate rate из-за submit/network: **0**;
- required consent completeness: **100%**;
- unauthorized camera retention: **0**;
- критические ошибки цены/устройства: **0** в ограниченном пилоте либо заранее утверждённый безопасный порог после baseline.

Это тестовые пороги, а не доказанные рыночные обещания.

## 3. Определение подходящего ремонта

До baseline владелец утверждает список категорий, например:

- замена аккумулятора;
- замена дисплея с известной ценой/диапазоном;
- разъём;
- чистка;
- стандартная диагностика;
- другие повторяемые услуги.

Каждый исключённый случай получает reason code:

- complex repair;
- B2B/legal;
- multiple devices;
- ownership concern;
- advanced condition capture;
- unknown pricing;
- system unavailable;
- other approved reason.

Нельзя улучшать capture rate, объявляя неудобные случаи неподходящими задним числом.

## 4. Baseline

### Минимальный baseline

Предпочтительно:

- 14 календарных дней;
- либо минимум 30 подходящих ремонтов;
- либо другой объём, заранее утверждённый владельцем.

### Что фиксируется до MP-002

- общее число подходящих ремонтов;
- зарегистрированы до начала работы;
- зарегистрированы после начала/после завершения;
- не зарегистрированы;
- время обычной приёмки на выборке;
- доля неполных заказов;
- споры о цене/условиях;
- дубли;
- способ выдачи квитанции;
- причины обхода CRM.

### Источники baseline

- существующая CRM;
- короткий ручной tally;
- касса/выдача для reconciliation;
- наблюдение владельца;
- синтетические прогоны не считаются бизнес-baseline.

## 5. Measurement definitions

### Capture-before-work rate

```text
orders created before work start / all eligible express repairs × 100
```

Момент начала работы фиксируется простым подтверждением/событием, не тотальной слежкой.

### Intake time

Начало:

- сотрудник открывает новый Express flow для конкретного клиента.

Конец:

- сервер подтвердил service order и required intake receipt.

Не заканчивать таймер на нажатии CTA.

### Completion rate

```text
confirmed express orders / started eligible express flows × 100
```

### Bypass rate

```text
eligible repairs completed outside MP-002 / all eligible repairs × 100
```

### Data correction rate

Доля заказов, где в течение установленного окна исправлялись:

- клиент;
- устройство;
- услуга;
- цена;
- срок;
- consent state.

### Duplicate rate

Число дополнительных service orders для одного logical intake, подтверждённых Evidence.

## 6. Instrumentation

Privacy-minimal события:

- flow started;
- client selected/created;
- device manual/camera/unknown;
- service selected;
- consent shown/confirmed/declined;
- submit started;
- result success/known failure/unknown;
- reconciliation success/manual review;
- receipt ready/not ready;
- flow abandoned with reason;
- correction event by category;
- work started;
- express bypass reason.

Не записывать в продуктовую аналитику:

- телефон/имя;
- подпись;
- фото;
- complaint text;
- пароли;
- serial/IMEI;
- request body;
- session tokens;
- exact local paths.

## 7. Pilot stages

### Stage 0 — Source and policy readiness

- canonical lineage established;
- exact code/version known;
- product policies approved;
- legal boundary reviewed;
- feature flag exists;
- rollback documented.

### Stage 1 — Synthetic staff rehearsal

- только синтетические клиенты;
- минимум 20 сценариев;
- iPhone + supported browser;
- fixed/range/diagnostics price modes;
- consent accept/decline;
- double tap;
- dropped response;
- camera denied/manual fallback;
- receipt/QR handoff.

Exit: no critical defects; no real clients.

### Stage 2 — Shadow measurement

Сотрудник проходит flow на синтетических или дублирующих безопасных данных без изменения реального процесса, чтобы измерить время и UX.

Exit: speed potential demonstrated, data capture understandable.

### Stage 3 — Friendly real pilot

- малое число клиентов;
- владелец рядом;
- только низкорисковые категории;
- отдельное разрешение реальных данных и consent;
- ручной fallback готов.

### Stage 4 — Bounded operational pilot

- заранее заданные даты;
- approved staff;
- approved categories;
- baseline frozen;
- ежедневный review;
- stop triggers active.

### Stage 5 — Repeatability

Результат повторяется на другой неделе/сотруднике/сервисе до `VICTORY_REPEATED`.

## 8. Daily pilot review

Каждый день владелец видит максимум:

- eligible repairs;
- captured before work;
- median/P90 intake time;
- abandoned/bypassed;
- unknown results;
- duplicates;
- consent gaps;
- data corrections;
- camera use/failure;
- одна главная проблема и следующий шаг.

Без employee guilt scoring.

## 9. Guardrails

Победа не засчитывается при:

- cross-tenant leak;
- подписи/фото в логах;
- создании заказа без явного consent там, где он нужен;
- дубликате после unknown result;
- существенном ухудшении data quality;
- ложной фиксированной цене;
- ложном обещании срока;
- систематическом обходе сотрудниками;
- невозможности выдать клиенту подтверждение;
- юридически неутверждённом реальном потоке.

## 10. Stop triggers

Немедленный stop:

- privacy/security incident;
- заказ создан не в том tenant;
- consent подставлен автоматически;
- raw signature/photo leaked;
- duplicate real order;
- потеря/искажение реального заказа;
- rollback/fallback недоступен;
- owner cannot determine whether order exists.

Pause and review:

- медиана >150 секунд после обучения;
- P90 создаёт очередь;
- completion rate ниже baseline;
- bypass >10% или растёт;
- corrections above approved threshold;
- camera saves no meaningful time;
- staff reports high friction;
- клиент часто не понимает условия.

## 11. Staff acceptance

После пилота сотрудник отвечает:

- поток быстрее текущего способа?;
- понятно ли, что обязательно?;
- понятно ли состояние после плохой сети?;
- можно ли завершить без камеры?;
- согласие удобно показать клиенту?;
- где возникают обходы?;
- что можно убрать?;

Owner Acceptance не заменяется только субъективной похвалой сотрудника.

## 12. Client acceptance

Короткие вопросы без dark patterns:

- было ли понятно, что принято в ремонт?;
- понятны ли цена/порядок согласования?;
- получили ли подтверждение?;
- мешала ли подпись/экран?;
- возникло ли ощущение скрытой съёмки?;

Не собирать лишние персональные данные для опроса.

## 13. Owner Acceptance checklist

Владелец подтверждает:

### Outcome

- capture rate достигнут либо улучшение значимо;
- медиана ≤120 секунд;
- очередь не ухудшилась;
- ремонты создаются до работы;
- данные реально полезны дальше.

### Trust

- один заказ на один приём;
- consent evidence восстанавливается;
- цена/срок честны;
- камера не сохраняет фото;
- unknown result понятен.

### Operations

- сотрудник не обходит поток;
- fallback работает;
- клиент получает квитанцию/QR;
- сложный ремонт корректно переводится в полный заказ;
- исправления контролируемы.

### Cost

- нет неоправданного внешнего AI/API расхода;
- support cost приемлем;
- оборудование не требуется;
- time saving/value оправдывает поддержку.

## 14. Victory classification

### `NOT_MEASURED`

Нет достаточного baseline/pilot Evidence.

### `SIGNAL_ONLY`

Скорость или capture улучшились на малой/синтетической выборке.

### `VICTORY_OBSERVED`

В bounded real pilot:

- primary target достигнут или принят скорректированный meaningful threshold;
- speed target достигнут;
- guardrails пройдены;
- владелец подтвердил пользу.

### `VICTORY_REPEATED`

Результат повторён на новом периоде/сотруднике/площадке.

### `COMMERCIAL_VICTORY`

Клиент заплатил, продлил или расширил использование из-за доказанной ценности MP-002.

### `VICTORY_REJECTED`

Скорость/полнота/качество/риск не оправдали продукт.

## 15. Evidence package

- tested commit/tree;
- feature flag/version;
- approved policies;
- synthetic test receipt;
- baseline summary;
- pilot summary;
- aggregate metrics;
- incident/stop log;
- owner acceptance receipt;
- staff feedback summary;
- no raw client data in public repository;
- known limitations;
- next decision.

## 16. Confounders

Учитывать:

- обучение сотрудника;
- необычно низкий/высокий поток клиентов;
- разные типы ремонтов;
- нестабильную сеть;
- изменения цен/команды;
- ручные акции;
- новый интерфейс в целом;
- одновременное включение MP-001.

Не приписывать MP-002 всю разницу без анализа.

## 17. Owner decision outcomes

После пилота допустимы:

- approve next bounded iteration;
- simplify;
- narrow eligible categories;
- disable camera;
- change consent method;
- improve idempotency/reconciliation;
- pause;
- retire;
- proceed to repeatability;
- unlock integration benefits for MP-001/MP-003.

## 18. Maturity

- measurement model: **designed**;
- baseline: **not collected**;
- real pilot: **not authorized/executed**;
- victory: **NOT_MEASURED**;
- commercial proof: **none**.