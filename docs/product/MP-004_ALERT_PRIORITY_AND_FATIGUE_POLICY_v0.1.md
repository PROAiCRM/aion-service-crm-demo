# MP-004 — Alert Priority & Fatigue Policy v0.1

**Статус:** DESIGNED  
**Дата:** 2026-08-01  
**Product:** MP-004 Cash Leakage Guard

## 1. Purpose

Даже точная система становится бесполезной, если создаёт десятки одинаковых уведомлений. Владелец начинает игнорировать всё, включая действительно важное.

Цель этого документа — сохранить внимание владельца для случаев, где решение имеет реальную ценность.

## 2. Core Principle

> Case сохраняется до outcome, но количество уведомлений ограничивается, группируется и объясняется.

Alert и case — разные сущности:

- case — долговечная единица контроля;
- alert — конкретный способ напомнить о case.

## 3. Priority Inputs

Priority вычисляется только из versioned rules:

1. обратимость действия;
2. authority gap;
3. денежная/количественная semantic class;
4. physical/system mismatch;
5. proximity to irreversible action;
6. age/SLA;
7. data confidence/freshness;
8. repeat pattern at process level;
9. customer impact;
10. existence of safe next action.

Личность сотрудника не является priority input.

## 4. Priority Levels

## P0 — Stop Before Irreversible Action

Примеры:

- потенциальный повторный refund/payment;
- выдача без требуемого authority;
- system reversal без physical return;
- cross-tenant data;
- unresolved unknown result перед повтором команды;
- correction может усугубить денежное состояние.

Поведение:

- immediate owner attention;
- no silent snooze beyond safe deadline;
- existing command gate remains authoritative;
- case UI не выполняет действие автоматически.

## P1 — Same-Day Owner Review

Примеры:

- confirmed cash discrepancy;
- существенный выданный долг;
- stock movement mismatch;
- protected refund awaiting approval;
- open case с нарушенным SLA.

## P2 — Scheduled Review

Примеры:

- owner-accepted debt до срока;
- unused reservation;
- minor reconciled discrepancy awaiting documentation;
- incomplete explanation.

## P3 — Improvement/Data Quality

Примеры:

- missing optional linkage;
- repeated false positive;
- stale projection;
- rule improvement candidate.

## INFO

Наблюдение без обязательного действия. По умолчанию не push-уведомляется.

## 5. One Primary Action

В каждый момент Owner view показывает одно главное cash-control action.

Selection order:

1. P0 safety/unknown-result;
2. P1 irreversible or already issued money risk;
3. oldest overdue P1;
4. nearest P2 deadline;
5. data-quality blocker;
6. no action required.

Другие cases доступны списком, но не конкурируют как «главные».

## 6. Grouping

Сигналы объединяются, если имеют:

- один primary business object;
- один exception type;
- один open case;
- один economic identity;
- один review outcome requirement.

Пример: пять последующих проверок остатка по одному выданному долгу обновляют case, а не создают пять новых alerts.

## 7. Notification Budget

Рабочая MVP policy:

- P0 — немедленно один раз + controlled repeat, если остаётся blocker;
- P1 — owner inbox + максимум одно напоминание в рабочий период;
- P2 — daily digest;
- P3/INFO — weekly/process review, без interruptive push.

Точные значения требуют pilot tuning.

## 8. Repeat Rules

Повторное уведомление допустимо, если:

- severity выросла;
- появился новый authoritative fact;
- SLA истёк;
- assigned reviewer недоступен;
- corrective action result стал unknown;
- case reopened.

Простое повторное вычисление rule не создаёт новый alert.

## 9. Snooze

Snooze возможен только с:

- reason code;
- until time;
- reviewer identity;
- policy max duration;
- visible next reminder.

P0 snooze не может пересечь необратимое действие или safe deadline.

## 10. Dismissal

Alert можно dismiss как UI object. Case остаётся open.

Case dismissal требует:

- outcome;
- reason;
- Evidence;
- role authority.

Кнопка «убрать уведомление» не закрывает денежное отклонение.

## 11. False Positive Feedback

Каждый false positive фиксирует:

- rule ID/version;
- input snapshot;
- reason code;
- reviewer;
- whether rule should change;
- whether source data was wrong.

Нельзя автоматически снижать rule sensitivity после одного dismiss.

## 12. Thresholds

Денежные thresholds не хардкодятся глобально.

Они могут зависеть от:

- tenant policy;
- currency;
- business size;
- exception type;
- reversibility;
- owner decision.

Threshold не отменяет P0 process invariant. Например, повторный refund опасен даже на небольшую сумму.

## 13. No Dark Patterns

Запрещено:

- красить всё красным;
- показывать постоянно растущий scare counter;
- использовать звук для P2/P3;
- скрывать unknowns;
- называть case «угрозой сотрудника»;
- создавать guilt-driven CTA;
- показывать денежную сумму без semantic class.

## 14. Owner Pulse Integration

MP-003 может получать от MP-004:

- count P0/P1 open cases;
- top explainable action;
- total `AMOUNT_AT_RISK` by currency/semantic class;
- freshness/data quality.

MP-003 не должен самостоятельно переоценивать exception severity.

## 15. Daily Review View

Владелец видит:

- одно главное действие;
- новые cases;
- просроченные review;
- ожидающие authority;
- awaiting reconciliation;
- resolved since last visit;
- false-positive trend.

## 16. Alert Health Metrics

- alerts per open case;
- duplicate-alert rate;
- owner open rate by priority;
- median time to first review;
- false-positive rate;
- snooze rate;
- repeated snooze rate;
- cases closed from digest vs interrupt;
- P0 missed rate;
- owner-reported trust score.

Высокий open rate не является победой, если alerts ложные.

## 17. Stop/Revision Criteria

Policy пересматривается, если:

- owner ignores >50% P1 alerts;
- false positives >10% after tuning;
- alerts interrupt ordinary work without outcome;
- P0 gets lost among lower severity;
- employees report surveillance harm;
- duplicate alerts grow;
- owner uses external chat because system inbox is noisy.

## 18. Degraded Mode

Если notification system недоступна:

- case list остаётся source of truth;
- P0 command-level restrictions продолжают работать;
- UI показывает last refresh;
- no false «всё чисто»;
- после восстановления пропущенные alerts дедуплицируются.

## 19. Acceptance Criteria

- one case does not spam;
- alert dismiss does not close case;
- P0 precedence deterministic;
- priority reason visible;
- thresholds versioned;
- employee identity absent from scoring;
- stale/unknown lowers confidence, not hides case;
- notification budget tested;
- Owner Pulse reads canonical priority;
- false-positive feedback retained.

## 20. Honest Status

- priority policy: **DESIGNED**;
- actual notification channels: **not selected**;
- alert engine: **not implemented**;
- owner fatigue baseline: **not measured**;
- optimal thresholds: **unknown**.
