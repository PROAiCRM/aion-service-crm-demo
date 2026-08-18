# MP-004 — Pilot Measurement & Owner Acceptance v0.1

**Статус:** DESIGNED  
**Дата:** 2026-08-01  
**Product:** MP-004 Cash Leakage Guard  
**Victory status:** `NOT_MEASURED`

## 1. Goal

Проверить, помогает ли MP-004 владельцу вовремя находить и закрывать реальные денежные/складские отклонения без ложных обвинений, перегрузки и выдуманной экономики.

## 2. Pilot Questions

Пилот должен ответить:

1. Обнаруживаются ли поддерживаемые exceptions?
2. Теряются ли valid cases из-за deduplication/priority?
3. Понимает ли владелец case без разработчика?
4. Сколько времени занимает review?
5. Какова доля false positives?
6. Закрываются ли cases доказуемым outcome?
7. Есть ли реально recovered/prevented amounts?
8. Ухудшает ли продукт доверие сотрудников?
9. Стоит ли польза сложности и времени?

## 3. Baseline

До включения автоматического case engine минимум 14 дней или достаточный объём операций фиксируется текущий процесс:

- число выдач с долгом;
- открытые долги и сроки;
- refunds/reversals;
- cash discrepancies;
- issue reversals;
- stock corrections/reservation releases;
- unknown-result incidents;
- время владельца на ручную сверку;
- случаи, найденные поздно;
- способы фиксации: память, чат, бумага, CRM;
- фактические outcomes.

Если событий мало, baseline продлевается; статистика не выдумывается.

## 4. Eligible Case Population

В пилот входят только:

- exception types, прошедшие DG4 source mapping;
- operations within approved tenant;
- users with training;
- data with known freshness;
- transactions after pilot start;
- synthetic cases, явно помеченные separately.

Не включаются:

- historical data без migration quality proof;
- неподдерживаемые discount/margin rules;
- cases с реальными обвинениями/HR investigation;
- внешние банковские данные;
- события другого tenant.

## 5. Measurement Layers

## 5.1 Synthetic Detection Matrix

Для каждого type создаются positive, negative, stale, conflict, duplicate и cross-tenant scenarios.

Рабочие цели:

- P0 recall = 100%;
- P1 recall ≥95%;
- negative scenarios не создают confirmed case;
- cross-tenant = 0 exposure;
- duplicate case count = 0;
- unknown result never triggers blind repeat.

## 5.2 Shadow Mode

Rules работают, но не отправляют interruptive alerts и не выполняют actions.

Владелец/ревьюер сравнивает:

- что система обнаружила;
- что заметил ручной процесс;
- что было false positive;
- что пропущено;
- корректны ли суммы/semantic labels.

Shadow mode длится до достижения доверия к rules.

## 5.3 Friendly Operational Pilot

Ограниченный набор exceptions и пользователей. Все actions остаются в существующих command gates.

## 5.4 Measured Pilot

После Owner Gate измеряются speed, coverage, outcomes и team trust.

## 6. Primary Metrics

### 6.1 Detection Recall

```text
correctly surfaced eligible exceptions
───────────────────────────────────── × 100
all known eligible exceptions
```

Ground truth создаётся через synthetic matrix и human reconciliation sample.

### 6.2 Review Coverage

```text
high-priority cases reviewed within SLA
────────────────────────────────────── × 100
all high-priority cases
```

### 6.3 Outcome Completion

```text
reviewed cases with valid closure outcome
──────────────────────────────────────── × 100
all reviewed cases due for closure
```

### 6.4 False Positive Rate

```text
cases closed as FALSE_POSITIVE
────────────────────────────── × 100
all reviewed cases
```

### 6.5 Time to First Review

Median/P90 from `NEEDS_REVIEW` to explicit `UNDER_REVIEW` receipt.

### 6.6 Time to Outcome

Median/P90 by exception type and severity.

## 7. Economic Metrics

Измеряются отдельно:

- current `AMOUNT_AT_RISK`;
- `CONFIRMED_DISCREPANCY`;
- `RECOVERED_AMOUNT`;
- `PREVENTED_LOSS` owner-approved;
- `CONFIRMED_LOSS` owner-classified;
- review labor time;
- correction labor time;
- support/false-positive cost.

Нельзя создавать один общий «экономический эффект» сложением несовместимых классов.

## 8. Operational Quality Metrics

- cases with complete source links;
- cases blocked by stale data;
- unknown-result reconciliation success;
- duplicate command prevention;
- closure receipts completeness;
- reopen rate;
- alert-to-case ratio;
- repeated snooze rate;
- manual workaround rate;
- owner drill-down reconciliation accuracy.

## 9. Human Trust Metrics

### Owner

- «Я понимаю, почему появился case»;
- «Я доверяю сумме»;
- «Я вижу, что неизвестно»;
- «Следующее действие полезно»;
- «Система экономит время».

### Employees

- «Система описывает процесс, а не обвиняет меня»;
- «Я могу дать объяснение»;
- «Нет скрытого рейтинга»;
- «Правила понятны»;
- «Я не боюсь корректно фиксировать исключение».

Ответы собираются в bounded survey без персонального публичного ранжирования.

## 10. Provisional Victory Targets

Цели рабочие и корректируются после baseline:

| Metric | Target |
|---|---:|
| P0 synthetic recall | 100% |
| P1 synthetic recall | ≥95% |
| High-priority review within SLA | ≥90% |
| Reviewed cases with valid outcome | ≥80% |
| False positive after tuning | ≤10% |
| Amount/drill-down accuracy sample | 100% or explicit unavailable/conflict |
| Cross-tenant exposure | 0 |
| Automatic accusation/sanction | 0 |
| Duplicate corrective operation | 0 |
| Closure without receipt | 0 |
| Employee trust serious incident | 0 |

## 11. Victory Levels

- `NOT_MEASURED` — только дизайн;
- `SIGNAL_OBSERVED` — synthetic/shadow usefulness;
- `VICTORY_OBSERVED` — один measured period met targets;
- `VICTORY_REPEATED` — второй период/второй сервис повторил результат;
- `COMMERCIAL_VICTORY` — клиент платит и подтверждает ценность/renewal.

## 12. Owner Acceptance Scenario

Владелец проходит без подсказки:

1. открывает top case;
2. объясняет exception;
3. называет semantic class суммы;
4. показывает primary Evidence;
5. указывает unknown/conflict;
6. выбирает допустимое action;
7. проходит authority boundary;
8. проверяет receipt;
9. закрывает case либо эскалирует;
10. находит историю решения.

PASS требует правильного понимания без developer interpretation.

## 13. Employee Scenario

Сотрудник:

1. получает запрос factual clarification;
2. видит минимальные факты;
3. добавляет объяснение;
4. не видит owner-only totals;
5. не может закрыть protected case;
6. не получает ярлык «виновен»;
7. понимает следующий шаг.

## 14. Stop Conditions

Немедленная остановка пилота при:

- cross-tenant exposure;
- неправильной денежной сумме, показанной как trusted;
- duplicate refund/payment/issue reversal;
- raw PIN/token/customer payload в Evidence;
- автоматическом обвинении/санкции;
- закрытии case без authority;
- скрытой mutation при просмотре;
- потере исходного event;
- P0 exception не surfaced;
- команда начинает обходить CRM из-за surveillance fear;
- manual rollback unavailable.

## 15. Pause/Revision Conditions

- false positives >10%;
- owner ignores majority alerts;
- review time выше baseline;
- rules require missing data;
- amount semantic unclear;
- too few real cases for conclusion;
- technical instability contaminates results.

## 16. Evidence Package

Пакет пилота содержит:

- exact source/head;
- policy versions;
- synthetic matrix results;
- aggregate real case counts;
- recall/false-positive calculations;
- owner acceptance receipt;
- employee trust summary;
- economic semantic breakdown;
- incidents;
- risks;
- decision: CONTINUE / REVISE / STOP.

Не включаются прямые customer identifiers и raw confidential case bodies.

## 17. Commercial Proof

Коммерческий результат доказан только если:

- технические guardrails стабильны;
- Victory повторена;
- клиент готов платить/продлевать;
- стоимость review/support известна;
- обещание не строится на недоказанном fraud prevention;
- recovered/prevented amount не двойной счёт.

## 18. Honest Status

- measurement plan: **DESIGNED**;
- baseline: **not collected**;
- synthetic matrix implementation: **not started for MP-004**;
- shadow mode: **not implemented**;
- pilot: **not authorized**;
- victory: `NOT_MEASURED`.
