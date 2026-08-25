# MP-004 — Money Exposure & Outcome Semantics v0.1

**Статус:** DESIGNED  
**Дата:** 2026-08-01  
**Product:** MP-004 Cash Leakage Guard

## 1. Why This Document Exists

Cash Leakage Guard легко превратить в маркетинговый счётчик с красивыми, но недоказанными суммами: «сегодня потеряно 18 700 ₽» или «AION спас 52 000 ₽». Такой подход разрушает доверие.

Этот документ фиксирует строгую семантику каждой денежной цифры.

## 2. Core Rule

> Сумма показывается только вместе с её типом, источником, валютой, временем, формулой и состоянием доказанности.

Число без semantic label запрещено.

## 3. Canonical Amount Classes

## 3.1 `TRANSACTION_AMOUNT`

Сумма конкретной подтверждённой операции:

- платёж;
- refund;
- reversal;
- кассовое внесение/изъятие;
- утверждённая стоимость заказа.

Это факт операции, а не прибыль и не убыток.

## 3.2 `OUTSTANDING_BALANCE`

```text
approved_order_amount - confirmed_net_payments
```

Требования:

- одна версия утверждённой суммы;
- только confirmed payments;
- refunds/reversals учитываются согласно Money Core;
- валюта едина;
- projection freshness известна.

Остаток долга не является автоматически потерей.

## 3.3 `CONFIRMED_DISCREPANCY`

Разница между двумя утверждёнными и сверенными значениями.

Пример:

```text
counted_cash - expected_cash
```

Статус `CONFIRMED_DISCREPANCY` допустим только после reconciliation, а не при первом сигнале.

## 3.4 `AMOUNT_AT_RISK`

Сумма, связанная с открытым case, которая может потребовать защиты или взыскания.

Примеры:

- остаток по уже выданному устройству;
- refund request до approval;
- сумма mutation с unknown result;
- стоимость детали в unresolved movement case.

`AMOUNT_AT_RISK` не называется убытком. Она может быть законным долгом, задержкой projection или false positive.

## 3.5 `CONFIRMED_LOSS`

Допускается только если одновременно:

- business outcome необратимо завершён или документально признан;
- сумма сверена;
- case прошёл human review;
- отсутствует ожидаемое возмещение/дебиторская задолженность;
- outcome receipt использует утверждённый reason code;
- владелец или уполномоченное лицо подтвердило classification.

Система не присваивает `CONFIRMED_LOSS` автоматически.

## 3.6 `RECOVERED_AMOUNT`

Сумма реально полученных денег или восстановленной стоимости после corrective action.

Примеры:

- долг фактически оплачен;
- ошибочный refund отменён до исполнения;
- денежное расхождение внесено;
- деталь физически возвращена и inventory reconciled.

Для inventory recovery денежная оценка допускается только при утверждённой cost basis.

## 3.7 `PREVENTED_LOSS`

Самая строгая категория.

Она допустима только если:

1. существовал подтверждённый execution-ready риск;
2. MP-004 case был создан до необратимого действия;
3. human intervention остановил действие;
4. без intervention команда действительно прошла бы по существующему workflow;
5. сумма прямого воздействия известна;
6. нет двойного счёта с `RECOVERED_AMOUNT`.

Пример: система заблокировала повторный refund после unknown-result reconciliation и доказано, что повторная команда создала бы второй возврат.

Предупреждение о возможной ошибке само по себе не является prevented loss.

## 3.8 `ESTIMATED_EXPOSURE`

В MVP запрещено по умолчанию.

Разрешается в будущем только при:

- версии модели;
- диапазоне, а не ложной точности;
- disclosed assumptions;
- калибровке;
- пометке `ESTIMATE`;
- запрете смешивания с confirmed totals.

## 4. Inventory Value Semantics

Запчасть имеет как минимум три разных денежные основы:

- закупочная стоимость;
- учётная стоимость;
- потенциальная цена продажи/работы.

MP-004 не выбирает их автоматически.

Для MVP inventory cases показывают:

- item;
- quantity;
- movement state;
- `COST_VALUE` только если утверждён canonical cost source;
- иначе `VALUE_UNKNOWN`.

Нельзя считать розничную цену детали подтверждённым убытком.

## 5. Price and Discount Boundary

Скидка становится exception только после появления отдельной policy:

- baseline price version;
- allowed range;
- role authority;
- campaign/compensation reason;
- manual override rules;
- customer agreement version.

До этого MP-004 не показывает «потеря на скидке».

Изменение цены может быть:

- законной скидкой;
- исправлением ошибочного прайса;
- компенсацией;
- изменением состава работ;
- owner-approved exception.

## 6. Profit Boundary

MP-004 MVP не рассчитывает прибыль.

Для прибыли нужны:

- признание выручки;
- себестоимость запчастей;
- стоимость труда;
- налоги/комиссии;
- overhead allocation;
- правила периода;
- возвраты и гарантийные затраты.

`Получено`, `выручка`, `маржа`, `прибыль` и `денежный поток` — разные понятия.

## 7. Currency Rules

- никакого автоматического сложения разных валют;
- currency хранится на каждой сумме;
- FX conversion — отдельный future contract;
- округление определяется Money Core;
- UI показывает исходную валюту;
- mismatch из-за округления классифицируется отдельным reason code.

## 8. Time Semantics

Сумма привязана к одному времени:

- at event time;
- at issue time;
- current balance at evaluation time;
- recovered at payment time.

Пример:

> Остаток при выдаче: 4 000 ₽  
> Текущий остаток: 1 500 ₽  
> Получено после выдачи: 2 500 ₽

Нельзя показывать только первоначальные 4 000 ₽ как текущий risk.

## 9. Aggregation Rules

### 9.1 Open Exposure

Суммируются только open cases с совместимой semantic class и currency.

### 9.2 Confirmed Discrepancy Total

Суммируются только reconciled cases.

### 9.3 Recovered Total

Суммируются фактически completed outcomes; один payment не учитывается дважды.

### 9.4 Prevented Total

В пилоте показывается отдельно и только после ручного owner approval каждого случая.

### 9.5 No Cross-Class Total

Запрещено складывать:

```text
amount at risk + confirmed loss + recovered amount
```

Это разные смыслы.

## 10. Case Amount Snapshot

Каждая денежная evaluation хранит:

```text
amountClass
amountMinorUnits
currency
sourceObjectRefs
sourceEventIds
formulaId
formulaVersion
evaluatedAt
freshnessState
dataQualityState
amountSha256
```

При изменении платежей создаётся новая evaluation. Старая не переписывается.

## 11. UI Language

### Разрешённые формулировки

- «Открытый остаток»;
- «Сумма под риском»;
- «Подтверждённое расхождение»;
- «Фактически возвращено»;
- «Предотвращённая повторная операция»;
- «Стоимость не определена»;
- «Требуется сверка».

### Запрещённые без доказательства

- «Украдено»;
- «Сотрудник потерял»;
- «AION спас»;
- «Потерянная прибыль»;
- «Мошенничество»;
- «Убыток»;
- «Недостача» без reconciliation.

## 12. Outcome Codes

| Code | Meaning |
|---|---|
| `EXPLAINED_VALID_OPERATION` | Операция законна и объяснена |
| `CORRECTED_DATA_ERROR` | Исправлена ошибка данных |
| `DEBT_OPEN_OWNER_ACCEPTED` | Долг осознанно оставлен открытым |
| `DEBT_COLLECTED` | Деньги фактически получены |
| `DUPLICATE_PREVENTED` | Повторная операция доказанно предотвращена |
| `REFUND_REJECTED` | Запрос отклонён до исполнения |
| `REFUND_COMPLETED_VALID` | Законный refund завершён |
| `CASH_RECONCILED` | Касса сверена |
| `STOCK_RETURNED` | Деталь возвращена и сверена |
| `STOCK_MOVEMENT_CORRECTED` | Движение исправлено |
| `CONFIRMED_LOSS_OWNER_CLASSIFIED` | Владелец подтвердил необратимый убыток |
| `FALSE_POSITIVE` | Rule сработало ошибочно |
| `SYSTEM_DEFECT` | Причина — дефект платформы |
| `UNRESOLVED_ESCALATED` | Case не закрыт и эскалирован |

## 13. Double-Counting Protection

Один economic event получает stable economic identity.

Пример:

- outstanding debt case;
- later debt payment;
- recovered outcome.

Это один lifecycle, а не три независимых финансовых результата.

Case engine обязан связывать:

- original exposure;
- corrections;
- recovery;
- final outcome.

## 14. Reconciliation Requirements

Для денежного статуса необходимы минимум:

- Money Core totals;
- command receipts;
- order state;
- issue/reversal state;
- freshness;
- no unresolved duplicate identity.

Если источники расходятся, amount state = `CONFLICT`, а не выбирается «наиболее вероятное» число.

## 15. Pilot Evidence Rules

Пилотный Evidence может хранить:

- aggregate counts;
- semantic classes;
- synthetic/reference case IDs;
- hashed source identities;
- outcome codes;
- minor-unit amounts только в защищённом owner Evidence при необходимости.

Он не должен хранить:

- клиентские payload;
- PIN;
- токены;
- подписи;
- полные internal notes;
- raw request/response bodies.

## 16. Acceptance Criteria

Policy готова к реализации, если:

- каждое число имеет semantic class;
- unit tests запрещают unlabeled amount;
- outstanding balance не называется loss;
- recovered/prevented не дублируются;
- inventory value fail-closed при неизвестной cost basis;
- multi-currency totals заблокированы;
- stale values не называются current;
- owner approval обязателен для confirmed loss/prevented loss;
- drill-down reconciles to aggregate.

## 17. Honest Status

- semantics: **DESIGNED**;
- formulas: **not mapped to recovered canonical source**;
- aggregate read model: **not implemented**;
- real monetary accuracy: **not measured**;
- prevented/recovered commercial outcome: **not proven**.
