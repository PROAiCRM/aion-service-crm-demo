# MP-004 — Role, Approval & Non-Accusation Boundary v0.1

**Статус:** DESIGNED  
**Дата:** 2026-08-01  
**Product:** MP-004 Cash Leakage Guard

## 1. Purpose

Cash Leakage Guard работает с чувствительными событиями: долг, refund, кассовое расхождение, выдача, возврат и склад. Ошибочная формулировка может повредить сотруднику и разрушить доверие команды.

Главное правило:

> Система оценивает процесс и Evidence, а не характер, честность или намерения человека.

## 2. Non-Accusation Principle

MP-004 может утверждать:

- операция не завершена;
- требуемое разрешение отсутствует;
- источники расходятся;
- сумма требует сверки;
- physical return не подтверждён;
- command result неизвестен;
- правило было нарушено;
- reviewer должен принять решение.

MP-004 не может автоматически утверждать:

- сотрудник украл деньги;
- сотрудник обманул клиента;
- сотрудник виновен;
- операция совершена умышленно;
- человек ненадёжен;
- существует мошенничество.

## 3. Role Model

## 3.1 Owner

Владелец имеет право:

- видеть owner-level aggregate и cases;
- принимать owner-only debt decisions;
- подтверждать cash discrepancy outcome;
- approve/reject protected refunds/reversals;
- классифицировать confirmed loss;
- принимать risk;
- закрывать P0/P1 cases согласно policy;
- назначать управляющему ограниченный scope;
- просматривать audit history.

Owner role не отменяет необходимость current session, tenant membership, grants, AAL/PIN и intent confirmation.

## 3.2 Manager

Управляющий получает только явно разрешённые capabilities:

- review operational cases;
- request clarification;
- propose correction;
- close P2/P3 cases;
- approve конкретные действия, если policy это разрешает.

Управляющий не наследует автоматически все owner-money права.

## 3.3 Employee

Сотрудник может:

- видеть case, связанный с его текущей работой, в минимальном объёме;
- предоставить factual clarification;
- приложить разрешённое Evidence;
- выполнить обычное corrective action в рамках роли;
- запросить owner decision.

Сотрудник не должен видеть:

- общие денежные метрики владельца;
- cases других сотрудников без операционной необходимости;
- скрытые risk scores;
- confidential owner notes;
- security/audit metadata;
- PIN history.

## 3.4 Auditor/Read-only Future Role

Возможен позже при отдельной policy. По умолчанию не реализуется.

## 4. Authority Is Not Role Name

Для protected action требуется полный authority set:

```text
current Principal
+ active session
+ organization/workspace membership
+ effective grant
+ policy compatibility
+ required AAL / approval PIN
+ explicit intent
+ idempotency identity
```

Клиентская передача `role=OWNER` не является authority.

## 5. Approval Matrix v0.1

Матрица проектная; фактическая mapping сверяется с восстановленным source.

| Action | Employee | Manager | Owner | Extra boundary |
|---|---:|---:|---:|---|
| View own operational clarification request | yes | yes | yes | minimal projection |
| View all money cases | no | policy | yes | owner grant |
| Authorize issue with debt | no | policy/possibly no | yes | approval PIN/AAL + reason |
| Revoke debt authorization | no | policy | yes | approval PIN/AAL |
| Approve cash discrepancy outcome | no | policy | yes | approval PIN/AAL |
| Request refund | policy | yes | yes | no execution yet |
| Approve/execute protected refund | no | policy | yes | approval PIN/AAL + idempotency |
| Reverse device issue | no | no/default | yes | physical return + approval |
| Correct stock movement | bounded | yes | yes | source movement + role grant |
| Mark confirmed loss | no | no/default | yes | reconciled Evidence |
| Close false positive | no | yes | yes | reason + rule feedback |
| Apply sanction | no | no | no through MP-004 | separate HR/legal process |

## 6. PIN and Step-Up Boundary

Existing source directions show approval PIN protection for debt, refund, cash discrepancy, debt revocation and issue reversal.

MP-004 must:

- invoke existing authorization boundary;
- never store raw PIN;
- never log PIN;
- not verify PIN in browser;
- preserve failed-attempt/lockout Evidence;
- fail closed if security event cannot be committed;
- separate confirmation from execution when required.

## 7. Intent Confirmation

Просмотр case не является согласием на corrective action.

Перед protected command UI показывает:

- что изменится;
- сумму/quantity;
- business object;
- последствия;
- обратимость;
- требуемое authority;
- текущие blockers.

Пользователь подтверждает конкретный intent, а не общую кнопку «решить».

## 8. Employee Explanation Boundary

Сотрудник может объяснить событие, но его statement:

- не удаляет rule result;
- не переписывает payment/order/stock event;
- не закрывает owner-only case;
- не становится доказательством умысла;
- не используется для автоматического discipline score.

Statement видит reviewer; агрегированные отчёты не раскрывают лишний текст.

## 9. Language Policy

### Правильные тексты

- «Требуется проверить разрешение на выдачу с долгом».
- «Платёж и остаток заказа не совпадают».
- «Не найдено подтверждение физического возврата».
- «Результат операции неизвестен после потери связи».
- «Управляющий запросил пояснение».

### Запрещённые тексты

- «Алексей украл 4 000 ₽».
- «Подозрительный сотрудник».
- «Вероятность мошенничества 82%».
- «Сотрудник допустил убыток» до human review.
- «Наказать» как системная CTA.

## 10. No Employee Ranking

MP-004 не создаёт:

- рейтинг честности;
- leaderboard по отклонениям;
- heatmap «кто теряет деньги»;
- автоматический KPI на количество cases;
- сравнение без нормализации ролей и объёма работы.

Количество cases может отражать:

- большую загрузку;
- сложные заказы;
- плохие данные;
- новый процесс;
- системный дефект;
- работу сотрудника, который чаще корректно фиксирует исключения.

## 11. Separation of Duties

Для высокорисковых действий желательны независимые роли:

- инициатор;
- approver;
- executor;
- reviewer.

В малом сервисе один владелец может совмещать роли, но система явно показывает это и сохраняет receipts.

## 12. Self-Review Conflict

Если reviewer является actor исходной exception-операции:

- P0/P1 case требует owner review либо second-person policy, если доступно;
- self-explanation допустимо;
- self-closure защищённого case по умолчанию запрещено;
- для малого бизнеса owner может закрыть собственное действие только с явным conflict disclosure.

## 13. Privacy of Personnel Data

Personnel data используется минимально:

- internal principal reference;
- display name только уполномоченным пользователям;
- role at event time;
- current role отдельно;
- no sensitive profile enrichment;
- no personal device/location tracking;
- no analysis вне рабочего event scope.

## 14. Retaliation Guard

Product policy должна явно сообщать:

- case не равен обвинению;
- false positive фиксируется;
- сотрудник может дать объяснение;
- автоматических санкций нет;
- решения владельца остаются audit-able;
- системные ошибки классифицируются отдельно.

## 15. Owner Responsibility

Владелец обязан:

- не использовать signal как единственное доказательство виновности;
- проверить источники;
- сохранять reason;
- применять local law и трудовые процедуры;
- не раскрывать персональные case details без необходимости;
- корректировать плохие rules.

MP-004 усиливает решение владельца, но не снимает ответственность.

## 16. Security Events

Отдельно от business cases система может фиксировать:

- failed approval attempts;
- lockout;
- unauthorized command attempt;
- cross-tenant denial.

Они не смешиваются с cash-loss total и не превращаются автоматически в employee misconduct.

## 17. Access Revocation

При изменении membership/grant:

- новые reads проверяют current authority;
- исторический receipt не раскрывается бывшему пользователю;
- assignment переназначается;
- case не теряется;
- old role snapshot остаётся историческим Evidence.

## 18. Acceptance Criteria

Boundary готова к реализации, если:

- every case view проходит tenant/grant checks;
- employee видит минимальный scope;
- owner-only actions fail closed;
- raw PIN отсутствует в logs/receipts;
- self-closure rules тестируются;
- UI не содержит accusation language;
- нет ranking/scoring;
- explanation не изменяет source facts;
- sanction actions отсутствуют;
- current authorization требуется для historical receipt read.

## 19. Honest Status

- role policy: **DESIGNED**;
- actual grant mapping: **pending canonical source audit**;
- legal/employment review: **not performed**;
- UI language testing: **not performed**;
- team trust effect: **not measured**.
