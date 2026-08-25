# MP-003 Owner Pulse — Pilot Measurement & Owner Acceptance v0.1

**Статус:** DESIGNED — PILOT NOT AUTHORIZED  
**Дата:** 2026-08-01

## 1. Цель пилота

Проверить, что Owner Pulse действительно сокращает время ежедневного контроля и помогает владельцу выбрать полезное действие, не искажая деньги, сроки и причины.

## 2. Victory statement

> Владелец за 30 секунд правильно отвечает на пять контрольных вопросов и понимает одно объяснимое действие на основе свежих проверенных данных.

## 3. Baseline

До включения Owner Pulse измеряется обычный процесс владельца.

Для каждой сессии фиксируется только необходимое:

- время от начала проверки до ответов;
- число открытых экранов/источников;
- число обращений к сотрудникам;
- правильность ответов по последующей сверке;
- удалось ли определить одно действие;
- субъективная уверенность владельца 1–5;
- наличие расхождений.

Baseline: минимум 10 наблюдаемых контрольных сессий в разные дни либо 14 календарных дней.

## 4. Five control questions

1. Сколько платежей получено сегодня?
2. Сколько готовых/завершённых заказов имеют долг?
3. Какие заказы просрочены по подтверждённому обещанию?
4. Какие заказы ждут действия клиента?
5. Что нужно сделать первым и почему?

Ответ считается правильным только после сверки с утверждённым source-of-truth query и metric definition version.

## 5. Primary metrics

### 5.1 `control_completion_under_30s_rate`

```text
сессии с правильными пятью ответами за ≤30 секунд
──────────────────────────────────────────── × 100
все валидные наблюдаемые сессии
```

Рабочая цель: `≥80%`.

### 5.2 `median_control_time_seconds`

Рабочая цель: `≤30 сек`.

### 5.3 `fact_accuracy_rate`

```text
проверенные факты, совпавшие с источником истины
──────────────────────────────────────────── × 100
все проверенные факты
```

Требование для bounded pilot: `100%` по денежным фактам и tenant boundary; допустимые data gaps должны быть явно маркированы и не считаются правильным значением.

## 6. Secondary metrics

- число экранов до принятия решения;
- число ручных уточнений у сотрудников;
- доля opened priority actions;
- доля completed priority actions;
- доля dismissed actions и причины;
- `DATA_WRONG` dismissal rate;
- число stale/partial/conflict states;
- частота unavailable view;
- owner confidence 1–5;
- число случаев, когда Pulse предотвратил пропуск реального долга или просрочки — только как bounded observed case, без денежного extrapolation.

## 7. Guardrails

- 0 неверных денежных сумм;
- 0 cross-tenant данных;
- 0 неавторизованных role views;
- 0 скрытых бизнес-mutations при просмотре;
- 0 рекомендаций на stale/conflict facts как на достоверных;
- 0 employee blame/scoring;
- drill-down count совпадает с aggregate;
- unavailable не показано как 0;
- owner может открыть источник каждого факта;
- recommendation можно отклонить без санкции.

## 8. Pilot stages

### Stage 0 — Definition proof

- утверждены metric definitions;
- synthetic fixtures покрывают edge cases;
- owner понимает подписи без объяснения разработчика.

### Stage 1 — Staff-only synthetic rehearsal

- только синтетические tenants/orders/payments;
- desktop и iPhone;
- deliberate stale/conflict/offline cases;
- проверка 30-second comprehension.

### Stage 2 — Shadow mode

Owner Pulse рассчитывает реальные показатели, но не является источником решения. Владелец сравнивает его с привычной проверкой.

Условия:

- никаких автоматических действий;
- расхождения регистрируются;
- priority recommendation не влияет на сотрудников без проверки владельца.

### Stage 3 — Friendly operational pilot

- один сервис;
- один владелец;
- ограниченный период;
- ежедневный короткий контроль;
- owner review каждого спорного результата.

### Stage 4 — Measured pilot

- baseline сравнивается с Owner Pulse period;
- правило/metric versions заморожены;
- guardrails проверены;
- victory classification ограничена этим сервисом и периодом.

### Stage 5 — Repeat or stop

Повторить в другом периоде/сервисе либо улучшить/остановить продукт.

## 9. Victory classification

### `NOT_MEASURED`

Нет usable pilot evidence.

### `SIGNAL_ONLY`

Время сократилось или действие полезно, но выборка мала/есть gaps.

### `VICTORY_OBSERVED`

- ≥80% сессий с правильными ответами ≤30 секунд;
- денежные/tenant guardrails без нарушения;
- priority action usefulness ≥70%;
- owner подтверждает полезность;
- exact version и period известны.

### `VICTORY_REPEATED`

Результат повторён в другом определённом периоде или бизнесе.

### `COMMERCIAL_VICTORY`

Клиент платит/продлевает/расширяет продукт из-за доказанной пользы Owner Pulse.

### `VICTORY_REJECTED`

Экран не ускоряет контроль, часто ошибается или создаёт больше тревоги/ручной работы.

## 10. Owner Acceptance checklist

Владелец подтверждает:

- подписи показателей понятны;
- «Получено сегодня» не воспринимается как прибыль;
- неполные данные заметны;
- одна рекомендация действительно приоритетна;
- explanation достаточно для доверия;
- нет лишних графиков;
- экран не превращён в контроль/обвинение сотрудников;
- drill-down открывает нужные заказы;
- на iPhone всё понимается без горизонтального скролла;
- 30 секунд измерены, а не оценены на глаз.

## 11. Evidence package

- canonical commit SHA;
- metric/rule versions;
- synthetic gate receipt;
- DB/RLS/API evidence;
- desktop/iPhone evidence;
- baseline table без PII;
- pilot table без PII;
- discrepancy log;
- owner acceptance;
- risk review;
- Victory result and bounded claim.

## 12. Immediate stop

- неверные деньги;
- cross-tenant visibility;
- скрытая запись при открытии;
- stale value выглядит live;
- рекомендация обвиняет человека;
- owner совершил ошибочное действие из-за Pulse;
- recommendation не имеет rule/evidence trail;
- реальный payload попал в публичный Evidence.
