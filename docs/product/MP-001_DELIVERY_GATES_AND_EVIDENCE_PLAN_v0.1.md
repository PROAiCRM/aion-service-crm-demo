# MP-001 Smart QR Status — Delivery Gates & Evidence Plan v0.1

**Статус:** APPROVED DELIVERY DESIGN — EXECUTION PENDING  
**Дата:** 2026-08-01  
**Продукт:** MP-001 Smart QR Status  
**Инженерный WIP:** один активный продукт  
**Канонический код:** закрытый `PROAiCRM/AION-Service-CRM`  
**Текущий source package:** private Draft PR #78 и связанные hardening Draft PR  
**Главный блокер:** не восстановлена V10.2 линия через миграцию `0044_device_identity_assist_phase1.sql`

## 1. Назначение

Определить один безопасный путь от существующего Draft source до ограниченного клиентского пилота и доказанной Victory.

Каждый gate имеет:

- входные условия;
- разрешённые действия;
- обязательное Evidence;
- stop conditions;
- честный статус после прохождения.

Прохождение одного gate не означает автоматического прохождения следующего.

## 2. Основной принцип

```text
Canonical source → source replay → static tests → disposable DB → HTTP/privacy/cache → print artifact → physical QR/iPhone → staff-only → bounded pilot → Victory review
```

Нельзя компенсировать пропущенный ранний gate успешным поздним тестом.

Например, физически сканируемый QR не доказывает tenant isolation, а зелёный typecheck не доказывает работоспособность напечатанного QR.

## 3. DG-0 — Owner-PC Read-Only Recovery

### Цель

Найти точный источник V10.2, который соответствует сохранённому last-known-good runtime и ожидает миграцию 0044.

### Разрешено

- read-only Git inspection;
- просмотр локальных branches/tags/commits;
- проверка bundles;
- просмотр stashes без apply/pop;
- поиск source packages и manifests;
- вычисление hashes;
- создание редактированного Evidence вне репозитория.

### Запрещено

- `reset --hard`;
- `clean`;
- `rebase`;
- `stash apply/pop`;
- checkout старой линии поверх рабочей папки;
- миграция реальной базы;
- запуск mutable feature checkout как пилота;
- публикация локальных путей, credentials и customer data.

### Evidence

- local HEAD SHA;
- tree SHA;
- branch/upstream;
- clean/dirty verdict;
- candidate V10.2 commit;
- наличие 0041–0044;
- hashes миграций;
- manifest/release-seal comparison;
- verdict `CANONICAL_CANDIDATE_IDENTIFIED` или fail-closed classification.

### Exit

Точный immutable V10.2 source candidate доказан.

### Stop

- candidate неоднозначен;
- worktree dirty и невозможно безопасно выделить источник;
- migrations отсутствуют;
- manifests расходятся;
- Git objects повреждены;
- действие требует изменения активного пилота.

## 4. DG-1 — Canonical Integration Branch

### Цель

Создать private integration branch от доказанной V10.2 линии.

### Требования

- branch основан на exact proven commit;
- applied migrations 0041–0044 не изменяются;
- никаких renumber/edit/reuse старых migrations;
- branch purpose и base SHA записаны;
- existing LKG/runtime не изменяется;
- GitHub становится доступным источником этой exact линии после отдельного Owner Gate на push.

### Evidence

- branch ref;
- base commit/tree;
- migration list/hashes;
- compare с recovered source;
- no unintended files;
- owner-approved publication of private source only.

### Exit

Есть каноническая private branch, на которую можно replay MP-001.

### Stop

- требуется force-push;
- история не соответствует recovered candidate;
- source package содержит secrets/backups/runtime data;
- migration chain меняется задним числом.

## 5. DG-2 — Replay Existing MP-001 Source

### Цель

Не переписывать продукт заново, а перенести проверенные slices Draft PR #78 и hardening packages поверх canonical V10.2.

### Переносимые capabilities

- public route;
- server-rendered mobile page;
- allowlisted public projection;
- hash-only/HMAC token boundary;
- version/revocation;
- controlled public origin;
- print-time QR hydration;
- stale/revoked print validation;
- no-store/no-index;
- token/log/cache protections;
- focused tests.

### Правило migrations

Новые MP-001 migrations получают forward-only номера после подтверждённого максимума V10.2. Нельзя оставлять конфликтующие `0039/0040` только потому, что они существовали в старой Draft line.

### Scope control

Не переносить автоматически:

- unrelated RFC;
- universal catalog expansions;
- pricing/thermal work;
- дополнительные UI-модули;
- P2/P3 public fields;
- AI forecasts;
- chat/payment/photos.

### Evidence

- exact cherry-pick/replay map;
- file list;
- migration mapping old Draft → new canonical IDs;
- diff review;
- no secret/customer/runtime files;
- public-field policy conformance report.

### Exit

Canonical branch содержит bounded MP-001 source implementation.

### Stop

- replay требует изменения applied migration;
- появляется скрытая зависимость от unrelated branch work;
- source не соответствует Public Field Policy;
- raw token появляется в persistent data;
- scope выходит за MP-001.

## 6. DG-3 — Static Source Gate

### Цель

Доказать внутреннюю целостность exact canonical diff.

### Проверки

- server typecheck;
- focused public-status unit tests;
- security-contract tests;
- public payload allowlist/forbidden-field tests;
- web typecheck/tests/build;
- migration registry/lint;
- syntax/static safety checks;
- environment continuity tests;
- source secret scan;
- `git diff --check`;
- exact tested diff hash;
- clean HEAD Evidence.

### Evidence

- command list;
- tool versions;
- exit codes;
- commit/tree/diff hash;
- summary without raw logs containing secrets;
- failed checks preserved honestly.

### Exit

Status может стать `SOURCE_IMPLEMENTED_STATIC_TESTED`.

### Не доказывает

- PostgreSQL behavior;
- RLS/grants;
- HTTP runtime;
- physical QR;
- pilot value.

## 7. DG-4 — Disposable PostgreSQL Gate

### Цель

Проверить полный canonical migration chain и security boundary без касания реальной базы.

### Boundary

- уникальная disposable database;
- уникальные одноразовые roles;
- loopback PostgreSQL only;
- явное administrative connection;
- generated names recorded before action;
- teardown exact resources in finally;
- real pilot DB/roles/container/volume запрещены.

### Assertions

- full migrations apply in order;
- checksums match approved registry;
- RLS enabled where required;
- runtime role not superuser/BYPASSRLS;
- runtime cannot direct-read public-link table;
- reviewed functions executable only as intended;
- tenant A cannot issue/read/change tenant B link;
- raw token column absent;
- token hash required/unique/constrained;
- invalid/revoked/expired/prior-version hash does not resolve;
- current active hash resolves only P1 allowlist;
- print validator true only for current tenant/link/version/hash;
- validation causes no unsafe mutation;
- snapshots/events/outbox contain no bearer material;
- teardown PASS recorded separately.

### Exit

Status может стать `DATABASE_BOUNDARY_TESTED_ON_DISPOSABLE_ENVIRONMENT`.

### Stop

- target host/database не однозначно disposable;
- command может затронуть pilot;
- RLS/grants fail;
- cross-tenant access;
- cleanup cannot be bounded;
- migration chain differs from canonical registry.

## 8. DG-5 — HTTP, Privacy, Log & Cache Gate

### Цель

Проверить реальное поведение public route и отсутствие утечек через web boundary.

### HTTP assertions

- page opens without employee session;
- employee API remains authenticated;
- only P1 fields returned;
- invalid/revoked/expired/unknown responses neutral;
- no internal database details;
- no customer identity;
- no internal status code/reason;
- no-store/no-index/referrer policy;
- HTML escaping;
- bounded response size;
- rate limit behavior;
- safe error handling.

### Log assertions

- ordinary access log does not contain token-bearing path;
- application errors do not contain raw token;
- request IDs sanitized;
- Cookie/Authorization/Set-Cookie redacted;
- no payload dump;
- product events use allowlisted fields only.

### Browser/cache assertions

- service worker does not intercept/cache token URL;
- query/token URLs network-only;
- public response absent from Cache Storage/localStorage/IndexedDB;
- external resources receive no token referrer;
- browser history risk documented;
- invalid response not cached.

### Exit

Status может стать `PUBLIC_RUNTIME_BOUNDARY_TESTED_SYNTHETICALLY`.

### Stop

Любая token/PII/cache/log утечка.

## 9. DG-6 — Synthetic Print Artifact Gate

### Цель

Проверить document snapshot → print claim → renderer payload до физического принтера.

### Assertions

- snapshot stores only link ID/version;
- active current reference yields QR only after DB validation;
- revoked/stale/expired/hash mismatch yields `qrValue = null`;
- absent/unsafe origin yields no QR;
- print job continues safely without QR when blocked;
- printed availability is honest;
- renderer consumes hydrated payload, not stale snapshot QR;
- A4 and 58mm markup contain no hidden sensitive fields;
- QR size/quiet zone within approved profile;
- synthetic artifact contains expected non-localhost URL.

### Evidence

- synthetic document ID only;
- artifact hash;
- QR decoded value redacted or represented by safe hash in Evidence;
- renderer/profile version;
- screenshots without real data;
- no automatic claim of physical print.

### Exit

Status может стать `PRINT_ARTIFACT_TESTED_SYNTHETICALLY`.

## 10. DG-7 — Physical Windows + iPhone Gate

### Цель

Доказать реальный человеческий путь на целевом оборудовании.

### Test matrix

- A4 print;
- 58mm print, если профиль включён;
- iPhone Safari scan;
- слабая сеть/LAN scenario;
- page without employee login;
- active token;
- revoked token;
- reissued token and old paper;
- large text/accessibility;
- invalid link;
- no QR path when validation blocked.

### Required Evidence

- exact commit/version;
- printer/profile;
- iPhone/browser version;
- photo/screenshot without customer data;
- decoded origin classification;
- pass/fail per scenario;
- owner observation.

### Exit

Status может стать `PHYSICAL_FLOW_TESTED_WITH_SYNTHETIC_DATA`.

### Stop

- QR не сканируется стабильно;
- old QR remains active after reissue;
- origin unreachable/localhost;
- page shows employee login;
- printed document broken;
- sensitive data visible.

## 11. DG-8 — Staff-Only Operational Rehearsal

### Цель

Проверить процесс сотрудника без реальных клиентских ссылок.

### Проверки

- QR появляется автоматически в правильном месте;
- employee preview exact;
- revoke/reissue understandable;
- additional effort измеряется;
- status map понятна;
- staff does not duplicate status input;
- QR blocked state объяснён;
- baseline logging flow simple;
- feature flag disables product.

### Exit

Owner может разрешить friendly pilot.

### Stop

- median additional effort >20 sec/order;
- сотрудник должен вводить второй статус;
- preview расходится с public projection;
- team не понимает revoke/reissue;
- process bypass widespread.

## 12. DG-9 — Friendly Real-Client Pilot

### Owner Gate required

До первого реального клиента владелец отдельно подтверждает:

- P1 allowlist;
- bearer-only access model;
- link lifetime;
- participants and period;
- feature flag/stop path;
- no price/ETA/history/photos/chat/payment;
- incident owner;
- baseline recording.

### Scope

- небольшой набор заказов;
- staff informed;
- every failure reviewed;
- no broad rollout;
- no commercial claim.

### Exit

Нет критических incidents, flow понятен, можно перейти к bounded operational pilot.

## 13. DG-10 — Bounded Victory Pilot

### Requirements

- baseline usable;
- 30–60 orders or 14–28 days;
- exact product version;
- primary/secondary/guardrail metrics;
- confounders recorded;
- owner acceptance;
- no critical incidents.

### Primary target

Минимум 25% относительного снижения routine status inquiries per 100 active orders — provisional threshold.

### Result

- `SIGNAL_ONLY`;
- `VICTORY_OBSERVED`;
- `VICTORY_REJECTED`;
- или продолжение измерения.

## 14. DG-11 — Repeat or Stop

### Scale candidate

Допускается только если:

- Victory observed;
- result repeated or repeat plan approved;
- support cost acceptable;
- no critical dependence on one employee/device/network;
- security controls stable;
- commercial packaging has measurable value.

### Stop/retire candidate

Если продукт не снижает общую нагрузку или risk/cost outweigh value:

- feature flag off;
- links revoked/expired по policy;
- Evidence retained;
- причины записаны;
- shared public-projection capability может быть сохранена только при отдельной пользе.

## 15. Maturity mapping

| Gate | Допустимый технический статус | Victory status |
|---|---|---|
| DG-0–1 | Canonical source identified | NOT_MEASURED |
| DG-2 | Implemented in canonical branch | NOT_MEASURED |
| DG-3 | Static tested | NOT_MEASURED |
| DG-4 | DB boundary tested | NOT_MEASURED |
| DG-5 | Runtime privacy tested | NOT_MEASURED |
| DG-6 | Synthetic print tested | NOT_MEASURED |
| DG-7 | Physical synthetic flow tested | NOT_MEASURED |
| DG-8 | Staff rehearsal passed | NOT_MEASURED |
| DG-9 | Friendly pilot signal | SIGNAL_ONLY maximum |
| DG-10 | Bounded pilot measured | SIGNAL_ONLY / VICTORY_OBSERVED / REJECTED |
| DG-11 | Repeated/commercial evidence | VICTORY_REPEATED / COMMERCIAL_VICTORY |

## 16. Evidence receipt minimum

Каждый выполненный gate создаёт receipt:

```text
product_id
product_version
commit_sha
tree_sha
tested_diff_sha256
gate_id
environment_classification
synthetic_or_real_data
commands_or_actions
result
failed_assertions
artifacts_and_hashes
privacy_redaction_check
rollback_or_teardown_result
owner_gate_status
next_required_gate
```

Receipt не содержит credentials, customer data, raw token, DB URL, local private path или полный sensitive log.

## 17. Cost controls

- повторно не выполнять широкие проверки без изменения tested diff;
- использовать focused tests до финального full gate;
- не запускать paid hosted workflows без отдельного Owner Gate;
- disposable infrastructure только локальная/одобренная;
- не добавлять новые сервисы, аналитику или SMS-провайдера в MP-001;
- поддерживать modular-monolith boundary;
- не строить автоматизированную Product Factory до доказательства нескольких повторяемых паспортов.

## 18. Critical dependencies

- recovery issue canonical 0041–0044;
- private source branch;
- ADR-001 tenant isolation/RLS;
- employee identity/grants;
- service order state machine;
- public-field policy;
- stable print profiles;
- backup/restore of public-status HMAC key;
- service-worker cache restrictions;
- owner disable/revoke path;
- baseline measurement flow.

## 19. Current position

- DG-0 design: complete, execution requires owner PC;
- DG-1: pending;
- DG-2: existing Draft source available, canonical replay pending;
- DG-3: old Draft static PASS reported, canonical rerun pending;
- DG-4–11: pending;
- real pilot: not authorized;
- Victory: `NOT_MEASURED`.

## 20. Next mandatory action

Когда владелец находится у Windows-компьютера, выполнить только DG-0 read-only canonical recovery. До его PASS не создавать новую implementation branch, не применять MP-001 migrations и не менять реальный pilot runtime/database.