# MP-004 — Exception Taxonomy & Event Contract v0.1

**Статус:** DESIGNED  
**Дата:** 2026-08-01  
**Product:** MP-004 Cash Leakage Guard

## 1. Purpose

Этот документ определяет, какие события могут создать Cash Leakage case, какие факты обязательны и где проходит граница между наблюдаемым отклонением, предположением и подтверждённым расхождением.

Главный принцип:

> Case создаётся из проверяемого event contract, а не из ощущения, рейтинга сотрудника или непрозрачного AI-score.

## 2. Truth Classes

Каждая часть case получает один класс:

| Класс | Значение |
|---|---|
| `OBSERVED` | Прямо записанное бизнес-событие или состояние |
| `DERIVED` | Детерминированный вывод по versioned rule |
| `DECLARED` | Объяснение, введённое человеком и подписанное reviewer receipt |
| `UNKNOWN` | Нужного факта нет или источник недоступен |
| `CONTRADICTION` | Два авторитетных источника расходятся |
| `HYPOTHESIS` | Рабочее предположение, не основание для санкции |

`HYPOTHESIS` никогда не превращается в `CONFIRMED_LOSS` без новых Evidence.

## 3. Canonical Exception Envelope

Каждый exception-candidate содержит:

```text
schemaVersion
exceptionType
ruleId
ruleVersion
organizationId
workspaceId
occurredAt
observedAt
sourceEventIds[]
sourceObjectRefs[]
actorRef?             # защищённая ссылка, не публичная метка виновности
amount?
quantity?
currency?
truthClass
freshnessState
dataQualityState
idempotencyIdentity
payloadSha256
```

### 3.1 Запрещено в envelope

- пароль, PIN, cookie, bearer token;
- полная подпись или изображение документа;
- необязательный customer payload;
- свободный текст из внутренних заметок;
- предположение о виновности;
- скрытая оценка личности;
- raw database error;
- незаверенная внешняя AI-классификация.

## 4. Supported MVP Exception Types

## 4.1 `ISSUE_WITH_OUTSTANDING_DEBT`

### Смысл

Устройство выдано клиенту, а по заказу остаётся положительный остаток.

### Обязательные observed facts

- order issue event;
- order total/approved amount;
- confirmed payments;
- остаток на момент выдачи;
- debt-authorization reference либо явное отсутствие разрешения;
- actor/authority source;
- command receipt.

### Candidate outcomes

- `AUTHORIZED_DEBT_OPEN`;
- `UNAUTHORIZED_ISSUE_REQUIRES_REVIEW`;
- `DEBT_SETTLED_AFTER_ISSUE`;
- `DATA_CONFLICT`;
- `FALSE_POSITIVE`.

Наличие разрешения не закрывает case автоматически. Оно переводит case из «возможное нарушение» в «контролируемый открытый долг».

## 4.2 `COMPLETED_ORDER_WITH_BALANCE`

### Смысл

Заказ отмечен готовым/завершённым, но оплата не закрывает утверждённую сумму.

### Важная граница

Это не всегда ошибка. Заказ может быть готов, но ещё не выдан. Severity зависит от статуса, срока и согласованной схемы оплаты.

### Required facts

- order lifecycle state;
- agreed amount/version;
- payment total;
- issue state;
- debt state;
- last payment time;
- owner policy version.

## 4.3 `CASH_DISCREPANCY_REPORTED`

### Смысл

Существующий cash-control contour зафиксировал отличие ожидаемого и подтверждённого остатка.

### Required facts

- cash shift/session identity;
- expected amount;
- counted amount;
- difference;
- currency;
- closure/reconciliation status;
- approval receipt when required.

### Запрет

MP-004 не вычисляет кассу параллельно Shared Money Core. Он потребляет его канонический reconciliation result.

## 4.4 `REFUND_OR_REVERSAL_REQUIRES_REVIEW`

### Смысл

Создан refund/reversal либо запрос на него, который требует authority и основания.

### Required facts

- original payment/operation;
- requested reversal amount;
- reason code;
- actor;
- authority requirement;
- approval state;
- resulting balance;
- idempotency receipt.

### Distinction

- `REQUESTED` — действие ещё не выполнено;
- `APPROVED_NOT_EXECUTED`;
- `EXECUTED`;
- `FAILED_NO_EFFECT`;
- `UNKNOWN_RESULT`.

Эти состояния нельзя смешивать.

## 4.5 `ISSUE_REVERSAL_PHYSICAL_RETURN_MISMATCH`

### Смысл

Системная отмена выдачи не подтверждена физическим возвратом либо факты противоречат друг другу.

### Required facts

- original issue event;
- physical-return confirmation;
- return checklist receipt;
- reversal command;
- warranty invalidation/renewal state;
- owner approval when required.

### Severity

P0, если система вернула устройство в статус сервиса без подтверждённого физического возврата.

## 4.6 `STOCK_RESERVATION_OR_RELEASE_ANOMALY`

### Смысл

Запчасть зарезервирована, списана, возвращена или освобождена без ожидаемой связи с заказом/работой.

### Initial subtypes

- `RESERVATION_WITHOUT_ACTIVE_ORDER`;
- `CONSUMPTION_WITHOUT_COMPLETION`;
- `UNUSED_RESERVATION_NOT_RELEASED`;
- `RETURN_WITHOUT_ORIGINAL_MOVEMENT`;
- `NEGATIVE_OR_CONTRADICTORY_QUANTITY`;
- `ORDER_CLOSED_WITH_OPEN_RESERVATION`.

### Required facts

- inventory item/batch reference;
- movement type;
- quantity;
- source and destination location;
- order/work reference;
- reservation/consumption/release receipts;
- timestamp sequence.

## 4.7 `PAYMENT_ORDER_STATE_MISMATCH`

### Смысл

Confirmed payment state и order/issue state расходятся по утверждённому contract.

### Примеры

- payment confirmed, но order balance не изменился;
- issue completed, но payment command остаётся unknown;
- payment reversed, но balance projection stale;
- duplicate payment candidate после retry.

### Required facts

- payment ledger source;
- order balance projection;
- projection freshness/version;
- mutation receipts;
- reconciliation result.

Case не должен создаваться только из задержки projection без проверки freshness policy.

## 4.8 `MUTATION_RESULT_UNKNOWN_FOR_MONEY_OR_ISSUE`

### Смысл

Клиент перестал ждать ответ, но сервер мог завершить mutation.

### Required facts

- stable idempotency identity;
- command fingerprint;
- original request time;
- response ambiguity class;
- reconciliation attempts;
- existing command receipt state;
- business object lookup result.

### Mandatory action

Проверить результат. Запрещён blind retry с новой identity.

## 4.9 `DUPLICATE_SENSITIVE_OPERATION_CANDIDATE`

### Смысл

Две команды потенциально представляют одно логическое действие.

### Required facts

- logical fingerprint;
- idempotency identities;
- source objects;
- result receipts;
- timestamps;
- semantic equality decision.

Две законные частичные оплаты не считаются дублем только потому, что суммы одинаковы.

## 5. Proposed but Blocked Exception Types

Следующие типы не входят в MVP до отдельной политики.

## 5.1 `DISCOUNT_POLICY_DEVIATION`

Требует:

- утверждённой базовой цены;
- версии price policy;
- допустимых ролей и порогов;
- причины скидки;
- различия между скидкой, компенсацией и исправлением цены;
- доказательства, что цена была применена.

Без этого «слишком большая скидка» является субъективной оценкой.

## 5.2 `MARGIN_BELOW_POLICY`

Требует доказанной себестоимости, распределения затрат и версии margin policy. До этого не используется.

## 5.3 `UNUSUAL_EMPLOYEE_PATTERN`

Не допускается в MVP. Паттерн может возникнуть из графика, специализации, сложных заказов или ошибок данных. Требует отдельной этической, правовой и статистической политики.

## 5.4 `SUSPECTED_FRAUD`

Система не создаёт такой тип автоматически. Возможен только manual legal/audit classification после внешней процедуры.

## 6. Deduplication Contract

Один economic exception не должен создавать бесконечную ленту одинаковых cases.

Candidate case identity строится из:

- tenant/workspace;
- exception type/version;
- primary business object;
- triggering event or reconciliation window;
- rule-defined semantic key.

Новый event:

- обновляет open case новым Evidence;
- создаёт новый case, если это самостоятельное событие;
- reopen закрытого case только через отдельный receipt и причину.

## 7. Event Ordering

События могут приходить с задержкой. Case engine обязан различать:

- `occurredAt` — бизнес-время события;
- `recordedAt` — время записи;
- `observedAt` — время попадания в MP-004;
- `evaluatedAt` — время применения правила.

Out-of-order events не удаляются. Rule evaluation пересчитывается детерминированно и сохраняет новый evaluation receipt.

## 8. Freshness Boundary

Case-кандидат не создаётся как confirmed exception, если ключевой источник:

- `STALE`;
- `UNAVAILABLE`;
- имеет `CONTRADICTION`;
- не прошёл reconciliation.

Вместо этого создаётся data-quality case либо статус `REVIEW_BLOCKED_BY_DATA`.

## 9. Severity Contract

Severity зависит от последствия и обратимости, а не от личности сотрудника.

| Severity | Значение |
|---|---|
| `P0` | Возможна двойная денежная операция, выдача без authority, cross-tenant, физическая/system mismatch, необратимое действие |
| `P1` | Подтверждённое существенное расхождение или открытый риск, требующий решения сегодня |
| `P2` | Контролируемый долг/резерв/отклонение с установленным сроком |
| `P3` | Низкий риск или data-quality follow-up |
| `INFO` | Наблюдение без требования действия |

Сумма не является единственным фактором. Небольшая системная ошибка может иметь P0 из-за повторяемости.

## 10. Rule Versioning

Каждый case хранит:

- `ruleId`;
- `ruleVersion`;
- canonical rule parameters;
- input fact identities;
- evaluation result;
- result hash.

Изменение правила не переписывает старый case. Оно создаёт новую evaluation и при необходимости новое действие.

## 11. No Hidden Business Mutation

Exception evaluation является read/derive operation. Она не может автоматически:

- проводить платёж;
- возвращать деньги;
- закрывать долг;
- выдавать или возвращать устройство;
- списывать/возвращать запчасть;
- менять цену;
- блокировать сотрудника;
- изменять заказ.

Любое corrective action проходит существующий command boundary и создаёт Action Receipt.

## 12. Acceptance Criteria

Taxonomy считается готовой к реализации только если:

- каждый MVP type связан с каноническими source events;
- у каждого типа есть positive и negative scenarios;
- unknown/stale/conflict не выдаются за confirmed exception;
- deduplication проверена;
- cross-tenant исключён;
- severity объяснима;
- blocked future types не просачиваются в MVP;
- ни один тип не содержит автоматической виновности.

## 13. Honest Status

- taxonomy: **DESIGNED**;
- event schemas: **DESIGNED, not implemented**;
- source-event completeness: **not audited on recovered canonical lineage**;
- runtime detector: **not implemented**;
- pilot accuracy: **not measured**.
