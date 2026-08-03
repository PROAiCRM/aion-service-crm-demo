# MP-001 Smart QR Status — Product Package Index v0.1

**Статус:** PRODUCT DESIGN PACKAGE COMPLETE — OWNER REVIEW PENDING  
**Дата:** 2026-08-01  
**Product ID:** `MP-001`  
**Engineering status:** canonical integration blocked  
**Victory status:** `NOT_MEASURED`

## 1. Назначение пакета

Этот пакет связывает продуктовую ценность, публичную политику, модель доступа, инженерную доставку и доказательство клиентской победы.

Он предотвращает пять типовых ошибок:

1. Начать писать второй QR-модуль вместо восстановления существующего source package.
2. Считать открывающуюся страницу доказанным продуктом.
3. Публиковать поля только потому, что они уже присутствуют в query.
4. Добавлять лишнюю авторизацию без доказанного риска.
5. Заявлять снижение звонков без baseline и guardrails.

## 2. Канонические документы MP-001

### Product identity and outcome

`MP-001_PRODUCT_PASSPORT_AND_VICTORY_CONTRACT_v0.1.md`

Определяет:

- боль;
- пользователя и покупателя;
- обещанный результат;
- First-Value Moment;
- MVP boundary;
- Human/AI boundary;
- Value Score;
- Victory Contract;
- stop/rollback/commercial hypotheses;
- честную зрелость.

### Public information boundary

`MP-001_PUBLIC_FIELD_POLICY_v0.1.md`

Определяет:

- P0/P1/P2/P3 classes;
- минимальный public allowlist;
- запрещённые поля;
- status vocabulary;
- правила цены, ETA, истории, устройства;
- log/cache/print boundary;
- tenant/platform settings boundary.

### Access and threat decision

`MP-001_ACCESS_MODEL_AND_THREAT_DECISION_v0.1.md`

Определяет:

- варианты доступа;
- recommended bearer-only pilot model;
- token lifecycle;
- storage, revocation, reissue, expiry;
- printed-paper threats;
- rate limiting;
- browser/referrer/origin hygiene;
- key rotation/recovery;
- Owner Gate.

### Delivery and Evidence

`MP-001_DELIVERY_GATES_AND_EVIDENCE_PLAN_v0.1.md`

Определяет:

- DG-0…DG-11;
- canonical recovery;
- source replay;
- static/DB/HTTP/cache/print/physical gates;
- staff rehearsal;
- friendly and bounded pilot;
- maturity mapping;
- Evidence Receipt;
- cost controls.

### Pilot and Victory measurement

`MP-001_PILOT_MEASUREMENT_AND_OWNER_ACCEPTANCE_v0.1.md`

Определяет:

- primary metric;
- baseline;
- pilot groups/phases;
- provisional 25% target;
- operational/security guardrails;
- instrumentation;
- result classifications;
- Owner Acceptance checklists;
- post-pilot decisions.

### Cross-product dependencies

`AION_PRODUCT_DEPENDENCY_MAP_MP001_MP003_v0.1.md`

Определяет:

- общий modular-monolith core;
- связь MP-001/002/003;
- delivery order vs maturity order;
- shared events/data quality;
- feature flags;
- Victory chain;
- anti-coupling rules.

## 3. Предыдущие документы, сохраняющие историю

- `MP-001_SMART_QR_STATUS_MVP_SPEC_v0.1.md` — первоначальная MVP specification.
- `MP-001_CURRENT_STATE_GAP_MAP_v0.1.md` — первичная карта после нахождения private source.
- `MP-001_CURRENT_STATE_GAP_MAP_v0.2.md` — обновление после аудита Draft PR #78.
- `AION_MINI_PRODUCTS_PORTFOLIO_v0.1.md` — исходный portfolio decision.
- `AION_MINI_PRODUCTS_DELIVERY_ROADMAP_v0.1.md` — общий delivery order.
- `AION_PRODUCT_FACTORY_AND_VICTORY_SYSTEM_v0.1.md` — общая фабрика продуктов.
- `AION_PRODUCT_CATALOG_v0.1.md` — stable product IDs.

Новые документы не удаляют историю. При конфликте:

1. security/privacy policy;
2. approved Product Passport;
3. latest Gap Map;
4. initial MVP spec.

Технические факты всегда проверяются по закрытому canonical repository и exact commit.

## 4. Зафиксированные продуктовые решения

### Решено

- MP-001 — единственный активный engineering product.
- Existing Draft PR #78 переиспользуется, а не переписывается.
- Canonical source 0041–0044 восстанавливается до integration.
- Первый MVP использует только P1 public fields.
- Цена, ETA и история выключены по умолчанию.
- AI не входит в MVP.
- Публичная проекция строится server-side allowlist.
- Victory измеряется через routine inquiries per 100 active orders.
- Security/privacy guardrails могут отменить Victory независимо от business metric.

### Рекомендовано, Owner Gate pending

- bearer-only high-entropy revocable link;
- отсутствие короткого кода в первом пилоте;
- ограниченный post-issue lifetime;
- staff-only → friendly → bounded pilot sequence;
- provisional 25% relative reduction threshold.

### Не решено

- точный срок жизни ссылки;
- точный public order reference display;
- включение exact device model во всех профилях;
- срок хранения агрегированных usage events;
- future P2 financial/ETA/history policy;
- гарантийный документ после выдачи;
- commercial pricing/package.

## 5. Honest maturity summary

| Объект | Статус |
|---|---|
| Customer pain | Qualitatively confirmed; baseline not measured |
| Product Passport | Designed |
| Public Field Policy | Designed |
| Access Model | Proposed; Owner Gate pending |
| Pilot Measurement | Designed |
| Delivery Gates | Designed |
| Draft source | Implemented in isolated private PR #78 and hardening PRs |
| Canonical V10.2 continuity | Blocked / not recovered in GitHub |
| Canonical MP-001 code | Not established |
| Static canonical tests | Not executed |
| Disposable DB/RLS | Not executed |
| HTTP/cache/log Evidence | Not executed |
| Physical QR/iPhone | Not executed |
| Real pilot | Not authorized |
| Victory | NOT_MEASURED |
| Commercial result | Not proven |

## 6. Immediate no-laptop work completed

- product promise narrowed;
- public allowlist defined;
- forbidden data defined;
- access alternatives compared;
- security recommendation recorded;
- pilot baseline and metrics designed;
- owner acceptance designed;
- engineering gates sequenced;
- cross-product dependencies mapped;
- stop criteria recorded.

## 7. Work that requires the owner Windows computer

- read-only canonical recovery;
- identify exact V10.2 commit/tree;
- recover migrations 0041–0044 and hashes;
- create canonical private branch after Owner Gate;
- replay existing source;
- execute static/DB/runtime/print/physical gates.

## 8. Owner review questions

1. Достаточно ли клиенту в первом MVP видеть только P1-набор?
2. Принимается ли bearer-only модель для ограниченных данных?
3. Какой post-issue lifetime кажется разумным для первого пилота?
4. Кто в сервисе имеет право revoke/reissue?
5. Согласен ли владелец с provisional target 25%, понимая, что baseline может изменить порог?
6. Достаточно ли прост baseline logging для сотрудников?
7. Нужно ли включать модель устройства или оставить общий тип?
8. Есть ли реальная польза суммы/ETA в первом пилоте, оправдывающая риск и scope?

## 9. Acceptance результата этой документационной сессии

Документационный пакет можно принять, если:

- продуктовая победа понятна;
- security boundary не противоречит удобству;
- документы не создают лишней бюрократии;
- engineering path не допускает пропуска canonical recovery;
- метрики можно собрать в реальном сервисе;
- не осталось скрытых claims implementation/readiness;
- следующий шаг однозначен.

## 10. Следующий обязательный шаг

### До ноутбука

После Owner review — подготовить MP-002 Product Passport, используя тот же шаблон, но не начиная engineering implementation.

### У ноутбука

Выполнить DG-0 read-only recovery канонической V10.2 линии. Никаких reset/rebase/migration/pilot changes до доказательства exact source identity.