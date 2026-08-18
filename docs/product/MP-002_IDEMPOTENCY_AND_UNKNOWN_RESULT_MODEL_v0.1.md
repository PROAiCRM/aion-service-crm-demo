# MP-002 Mobile Express Intake — Idempotency & Unknown Result Model v0.1

**Статус:** PRODUCT/TECHNICAL CONTRACT DESIGNED — CANONICAL EXECUTION NOT PROVEN  
**Дата:** 2026-08-01  
**Применяется к:** MP-002 Mobile Express Intake

## 1. Цель

Гарантировать, что один логический приём создаёт ровно один заказ даже при двойном нажатии, зависшем Wi‑Fi, перезагрузке страницы или ситуации, когда сервер сохранил заказ, но смартфон не получил ответ.

Главный принцип:

> Неизвестный результат — не ошибка создания и не разрешение повторить действие с новым ключом. Сначала reconciliation, затем решение.

## 2. Основные риски

- двойной tap;
- повторная отправка после loader;
- browser retry;
- reload во время запроса;
- серверный commit и потерянный response;
- timeout на клиенте при продолжающемся server execution;
- сотрудник открывает второй tab;
- сеть меняется Wi‑Fi/mobile;
- crash после заказа, но до очистки draft;
- receipt создана, UI её не увидел;
- idempotency key случайно меняется при каждом submit.

## 3. Термины

### Logical intake action

Одна осознанная команда сотрудника `Оформить ремонт` для конкретного состояния формы.

### Idempotency identity

Стабильный непрозрачный UUID/ключ, созданный до первой отправки logical action.

### Mutation fingerprint

Детерминированный безопасный hash метода, пути и нормализованного тела без сохранения body в journal.

### Result unknown

Клиент не может доказать, завершилась ли команда на сервере.

### Reconciliation

Проверка результата по idempotency identity/command receipt без создания новой команды.

## 4. State machine клиента

- `DRAFT`
- `READY_TO_SUBMIT`
- `SUBMITTING`
- `RESULT_CONFIRMED_SUCCESS`
- `RESULT_CONFIRMED_FAILURE`
- `RESULT_UNKNOWN`
- `RECONCILING`
- `RECONCILED_SUCCESS`
- `RECONCILED_NOT_COMMITTED`
- `MANUAL_REVIEW_REQUIRED`

Переход из `RESULT_UNKNOWN` напрямую в новый submit запрещён.

## 5. Создание identity

Identity создаётся:

- после финальной валидации формы;
- до первого network request;
- один раз для текущего fingerprint;
- не содержит tenant/customer/order данных;
- сохраняется в memory и bounded local journal;
- очищается только после подтверждённого terminal result или controlled expiration/review.

Если форма материально изменена, создаётся новая logical action после явного сброса предыдущего состояния.

## 6. Pending mutation journal

Допустимые поля:

- version;
- idempotency key;
- mutation fingerprint;
- created/updated timestamp;
- expiry;
- route identifier;
- safe state code.

Запрещённые поля:

- request body;
- имя/телефон;
- подпись;
- фото;
- service/order details;
- cookie/token;
- error stack;
- database identifiers.

Правила:

- bounded capacity;
- unresolved identities не вытесняются молча;
- full journal блокирует новый unsafe submit;
- logout/tenant switch изолирует journal;
- tampered/invalid records fail closed;
- expiry не означает, что заказ не был создан;
- expired unknown result требует manual reconciliation.

## 7. Серверный command contract

Сервер принимает:

- idempotency key;
- authenticated principal/session;
- validated command payload;
- optional client fingerprint contract.

Сервер обязан:

- scope key к tenant + command type + actor policy;
- создать command receipt;
- повторно вернуть прежний результат для совпадающей команды;
- отклонить reuse ключа с иным payload/fingerprint;
- атомарно создать service order, intake receipt и связанные обязательные объекты;
- не доверять client tenant/actor;
- возвращать понятный `COMMAND_IN_PROGRESS`;
- иметь безопасный read/reconciliation endpoint или command result boundary.

## 8. Atomicity boundary

В одной транзакции должны быть согласованы:

- service order;
- customer/device linkage;
- intake receipt snapshot;
- consent reference/state;
- command receipt;
- required audit events;
- optional MP-001 link reference — только если failure не ломает создание основного заказа либо входит в доказанную transaction policy.

Печать и внешняя отправка не должны удерживать основную транзакцию.

## 9. Response classification

### Confirmed success

- валидный response;
- command receipt соответствует key;
- order identity получена;
- journal очищается после сохранения результата.

### Confirmed deterministic failure

Примеры:

- validation failed;
- permission denied;
- invalid consent state;
- catalog item unavailable до commit.

Journal может очищаться, draft остаётся.

### Unknown result

- timeout;
- network error;
- abort после отправки;
- invalid/incomplete success response;
- HTTP 408/5xx, когда commit неизвестен;
- page crash/navigation;
- `COMMAND_IN_PROGRESS`.

Key сохраняется.

## 10. UI при неизвестном результате

Сообщение:

> «Не получили подтверждение от сервера. Заказ мог быть создан. Проверяем результат — не нажимайте “Оформить” повторно.»

Действия:

- `Проверить результат`;
- автоматическая bounded reconciliation допустима только как read/check, не повторное создание;
- `Открыть найденный заказ`, если найден;
- `Передать на ручную проверку`, если состояние неясно.

Запрещено:

- показывать обычную ошибку `Попробуйте ещё раз` с новым ключом;
- очищать форму;
- создавать второй draft автоматически;
- утверждать, что заказ не создан.

## 11. Reconciliation flow

1. Клиент отправляет safe check по idempotency key.
2. Сервер возвращает:
   - completed + result;
   - in progress;
   - known not committed;
   - key conflict;
   - expired/manual review.
3. При completed UI открывает существующий заказ.
4. При not committed сотрудник может подтвердить новый submit с новой identity.
5. При conflict/manual review запрещается автоматическая мутация.

## 12. Draft handling

- draft не очищается при unknown result;
- после reconciled success очищается только связанный draft;
- material edit во время unknown result блокируется или создаёт copy с явным предупреждением;
- draft fingerprint позволяет понять соответствие;
- несколько tabs не должны параллельно создавать один и тот же intake без coordination.

## 13. Receipt and print boundary

Если order committed, но intake receipt не создана внутри требуемой atomic boundary — command считается нарушившей invariant и требует recovery, а не второго заказа.

Если receipt создана, но print preparation failed:

- order остаётся один;
- receipt остаётся доступной;
- print можно повторить отдельно;
- UI не сообщает `ремонт не оформлен`;
- physical printed state не присваивается автоматически.

## 14. Offline boundary

MP-002 MVP не обещает полноценное offline создание заказов.

При отсутствии связи допускается:

- локальный draft;
- явный статус `не отправлено`;
- запрет считать устройство принятым системой;
- дальнейшая controlled отправка при восстановлении связи.

Запрещено:

- показывать server order number до commit;
- заявлять QR активным;
- автоматически синхронизировать несколько конфликтующих drafts;
- скрывать отсутствие связи.

## 15. Security and privacy

- key не является auth token;
- reconciliation требует employee session/permission;
- cross-tenant key lookup запрещён;
- key не попадает в публичный QR;
- logs redacted/bounded;
- fingerprint не должен позволять восстановить PII;
- journal не содержит body;
- localStorage XSS threat учитывается CSP и минимизацией;
- keys имеют retention/cleanup policy;
- brute-force lookup возвращает neutral response.

## 16. Test matrix

### Client

- double tap;
- rapid five taps;
- reload during request;
- browser back/forward;
- lost response after commit;
- timeout before commit;
- server 500 before/after commit boundary;
- invalid JSON response;
- localStorage unavailable;
- journal full;
- expired entry;
- two tabs;
- form edited after unknown result.

### Server

- same key + same command;
- same key + different command;
- cross-tenant key;
- in-progress concurrency;
- transaction rollback;
- order created exactly once;
- receipt created exactly once;
- consent reference consistent;
- command receipt durable;
- reconciliation after restart;
- concurrent identical requests.

### Privacy

- no body in journal;
- no PII in fingerprint evidence;
- key redaction from ordinary logs where policy requires;
- no signature/photo in error capture.

## 17. Evidence required

- exact canonical commit;
- unit tests;
- browser tests;
- disposable PostgreSQL concurrency tests;
- synthetic dropped-response server;
- reload persistence proof;
- five repeated Express cycles;
- no duplicate rows/snapshots;
- redacted local journal inspection;
- owner observation on target iPhone/LAN.

Draft PR #143 describes a source implementation direction for preserved mutation identity, but its executable browser/runtime Evidence remains pending and canonical lineage is unresolved.

## 18. Acceptance criteria

- 0 duplicate orders in controlled lost-response matrix;
- same logical action retains same key;
- unknown result never silently becomes failure;
- reconciliation returns committed result;
- body/PII absent from journal;
- order + receipt invariants hold;
- user can recover after reload;
- no automatic business retry;
- standard flow remains within speed target.

## 19. Stop criteria

Stop MP-002 pilot if:

- unknown result can create duplicates;
- staff cannot understand reconciliation;
- local journal stores sensitive data;
- key conflicts are not fail-closed;
- command transaction is not atomic;
- system encourages blind retry;
- recovery requires deleting production/local data;
- implementation becomes a general offline sync platform prematurely.

## 20. Maturity

- contract: **designed**;
- isolated Draft source direction: **present in PR #143**;
- canonical integration: **not established**;
- tests authored/executed: **not verified for reconciled head**;
- target-device Evidence: **pending**;
- real pilot: **not authorized**.