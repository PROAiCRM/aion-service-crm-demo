# MP-004 — Case Lifecycle & Human Review Policy v0.1

**Статус:** DESIGNED  
**Дата:** 2026-08-01  
**Product:** MP-004 Cash Leakage Guard

## 1. Purpose

Этот документ превращает денежный сигнал в управляемый case. Система не ограничивается уведомлением и не закрывает отклонение автоматически.

Главный принцип:

> Каждый существенный exception должен получить понятного владельца проверки, Evidence, outcome и следующее состояние.

## 2. Canonical Lifecycle

```text
CANDIDATE
  ↓ rule validation
DETECTED
  ↓ priority/freshness check
NEEDS_REVIEW
  ↓ human opens evidence
UNDER_REVIEW
  ├─→ EXPLAINED_VALID
  ├─→ CORRECTION_REQUIRED
  ├─→ DATA_CONFLICT
  ├─→ FALSE_POSITIVE
  └─→ ESCALATED

CORRECTION_REQUIRED
  ↓ existing command boundary
CORRECTIVE_ACTION_PENDING
  ↓ receipt/reconciliation
RESOLVED
```

Дополнительные состояния:

- `REVIEW_BLOCKED_BY_DATA`;
- `WAITING_FOR_EXTERNAL_CONFIRMATION`;
- `OWNER_DECISION_REQUIRED`;
- `REOPENED_NEW_EVIDENCE`;
- `ARCHIVED_AFTER_RETENTION`.

## 3. State Meanings

## 3.1 `CANDIDATE`

Raw rule candidate. Не показывается как доказанное отклонение, пока не пройдены:

- source availability;
- rule input completeness;
- deduplication;
- tenant boundary;
- data freshness;
- contradiction check.

## 3.2 `DETECTED`

Rule сработало детерминированно. Это ещё не означает ущерб или нарушение.

## 3.3 `NEEDS_REVIEW`

Case имеет достаточно данных для просмотра человеком и одно объяснимое основание приоритета.

## 3.4 `UNDER_REVIEW`

Reviewer открыл case и зафиксировал начало проверки. Обычное открытие страницы не должно автоматически менять этот статус; нужен явный action.

## 3.5 `REVIEW_BLOCKED_BY_DATA`

Критический источник недоступен, stale или противоречив. Case не закрывается и не обвиняет человека.

## 3.6 `EXPLAINED_VALID`

Операция законна, объяснена и подтверждена Evidence.

Пример: выдача с долгом была осознанно разрешена владельцем и имеет срок взыскания.

## 3.7 `FALSE_POSITIVE`

Rule ошибочно классифицировало нормальную операцию. Требуются reason code и input snapshot, чтобы улучшить правило.

## 3.8 `CORRECTION_REQUIRED`

Подтверждён процессный или денежный дефект. Сам case не выполняет correction.

## 3.9 `CORRECTIVE_ACTION_PENDING`

Существующая команда создана или ожидает authority. Case содержит ссылку на command intent, но не выдаёт её за завершённое действие.

## 3.10 `RESOLVED`

Разрешается только после:

- completed command receipt либо документированного non-command outcome;
- reconciliation;
- reviewer sign-off;
- final amount semantic;
- closure code.

## 3.11 `ESCALATED`

Case выходит за полномочия или SLA текущего reviewer. Эскалация не означает виновность.

## 4. Case Creation Rules

Case создаётся только при выполнении:

- supported exception type/version;
- valid tenant/workspace;
- stable source identities;
- deterministic deduplication key;
- accepted freshness;
- no unresolved earlier candidate with same semantic identity, если policy требует update.

Case creation не должна изменять исходные orders, payments, stock или issue state.

## 5. Review Assignment

### Owner-only default

P0 и финансовые authority cases назначаются владельцу.

### Manager eligibility

Управляющий может рассматривать cases только при явном grant и policy scope.

### Employee participation

Сотрудник может:

- предоставить фактическое объяснение;
- приложить разрешённое Evidence;
- выполнить назначенное корректирующее действие в рамках роли;
- видеть только необходимые сведения.

Сотрудник не может:

- закрыть owner-only discrepancy;
- менять source facts;
- удалять case;
- скрывать event;
- определять собственную виновность/невиновность как системный outcome.

## 6. Review Receipt

Каждое значимое решение создаёт append-only receipt:

```text
receiptVersion
caseId
caseVersion
reviewerPrincipal
reviewerRole
membership
AAL
policyId/policyVersion
actionCode
reasonCode
statementHash?
evidenceRefs[]
recordedAt
receiptSha256
```

Свободный текст допускается только как минимальное объяснение и хранится отдельно от публичных/агрегированных Evidence.

## 7. Human Statement Classes

- `FACTUAL_CLARIFICATION` — что физически произошло;
- `POLICY_JUSTIFICATION` — почему операция допустима;
- `CORRECTION_PLAN` — что нужно исправить;
- `OWNER_ACCEPTANCE` — владелец принимает открытый долг/risk;
- `ESCALATION_NOTE` — почему требуется другой уровень;
- `FALSE_POSITIVE_REASON` — почему rule ошиблось.

Statement не переписывает observed event.

## 8. Corrective Action Boundary

Case может предложить действие, но выполнение идёт через существующие команды:

- collect/record payment;
- authorize/revoke debt;
- approve/reject refund;
- issue reversal after physical return;
- stock return/release/correction;
- cash reconciliation;
- data correction command.

Каждое действие сохраняет:

- current Principal;
- permission;
- approval PIN/AAL, если требуется;
- idempotency identity;
- command receipt;
- result reconciliation.

## 9. Unknown Result Handling

Если response потерян:

1. case остаётся open;
2. action state = `RESULT_UNKNOWN`;
3. новый blind command запрещён;
4. используется прежняя idempotency identity;
5. выполняется receipt/object reconciliation;
6. только после этого action = completed/failed/not-found.

UI не пишет «операция не выполнена» только на основании network error.

## 10. Closure Requirements

Case нельзя закрыть без:

- closure outcome code;
- reviewer;
- authority;
- evidence completeness;
- final data freshness;
- amount/quantity semantics;
- linked corrective receipt, если было изменение;
- timestamp;
- immutable closure receipt.

`Dismiss` без reason запрещён.

## 11. Reopen Policy

Закрытый case может быть reopened только если:

- появился новый source event;
- reversal/refund изменил итог;
- выявлена ошибка closure data;
- audit обнаружил missing evidence;
- rule version не просто изменилось, а новые факты меняют outcome.

Reopen создаёт новый receipt; старый outcome остаётся в истории.

## 12. SLA Policy

Рабочие пилотные значения:

| Severity | Review target |
|---|---|
| P0 | немедленно / до следующего необратимого действия |
| P1 | в тот же рабочий день |
| P2 | до установленного срока или 1–3 рабочих дней |
| P3 | в регулярной сверке |

SLA — продуктовая гипотеза. Реальные значения настраиваются после baseline.

## 13. Evidence Completeness Levels

- `E0_SIGNAL_ONLY`;
- `E1_SOURCE_LINKED`;
- `E2_RECONCILED`;
- `E3_HUMAN_REVIEWED`;
- `E4_CORRECTIVE_RECEIPT`;
- `E5_REPEATED_OUTCOME_PROVEN`.

`RESOLVED` требует минимум E3, а при business mutation — E4.

## 14. Privacy & Minimization

Case хранит ссылки и bounded projections, а не копии всех данных.

Запрещено без необходимости:

- копировать телефон/имя;
- хранить IMEI;
- сохранять подписи;
- прикладывать raw чек или фото с PII в общий Evidence;
- дублировать внутренние заметки;
- экспортировать employee-level details в публичные отчёты.

## 15. Retention

Retention должна соответствовать business/legal policy и быть версионированной.

До утверждения:

- cases не удаляются автоматически из технического источника;
- UI может архивировать;
- Evidence export минимален;
- никакой бессрочной персональной аналитики поведения сотрудника.

## 16. Audit Trail

Append-only history включает:

- detection evaluations;
- assignments;
- state transitions;
- explanations;
- actions;
- reconciliation;
- closure/reopen.

Нельзя редактировать прошлый receipt. Ошибка исправляется новым receipt.

## 17. Offline/Degraded Operation

Если MP-004 недоступен:

- основные order/payment/issue workflows продолжают работать по своим gates;
- ручная сверка остаётся доступной;
- критические command-level запреты не зависят от case UI;
- после восстановления cases строятся из durable source events;
- отсутствие MP-004 не ослабляет debt/QC/approval restrictions.

## 18. Alert vs Case

Alert — способ привлечь внимание. Case — долговечная единица работы.

Alert можно прочитать/скрыть. Case нельзя потерять до outcome.

## 19. Owner Acceptance Questions

Для каждого типа владелец должен ответить:

1. Я понимаю, почему case появился?
2. Я вижу первичные факты?
3. Я понимаю, что неизвестно?
4. Я вижу допустимые действия?
5. Я понимаю полномочия?
6. Я могу закрыть case без разработчика?
7. Я доверяю истории решений?

## 20. Honest Status

- lifecycle: **DESIGNED**;
- review receipt: **DESIGNED**;
- persistence/schema: **not implemented**;
- role mapping: **not verified on canonical source**;
- real review SLA: **not measured**;
- employee trust effect: **not measured**.
