# MP-003 Owner Pulse — Delivery Gates & Evidence Plan v0.1

**Статус:** DESIGNED — ENGINEERING NOT STARTED  
**Дата:** 2026-08-01

## 1. Purpose

Определить безопасную последовательность доведения MP-003 от продуктового дизайна до измеряемой победы без параллельной инженерной разработки и без создания второго источника истины.

## 2. Global constraints

- MP-001 остаётся единственным активным инженерным mini-product.
- MP-003 engineering не начинается без отдельного WIP/Owner Gate.
- Canonical source lineage through migration 0044 должна быть восстановлена.
- Existing owner/money/order/auth/RLS models переиспользуются.
- Никаких реальных данных в public demo repository.
- Ни один отдельный PASS не доказывает весь продукт.

## DG3-0 — Product package approval

Required:

- Product Passport;
- Trusted Facts definitions;
- priority rules;
- privacy/role boundary;
- freshness/degraded policy;
- 30-second UX policy;
- pilot contract;
- owner approval of product boundary.

Exit status: `PRODUCT_DESIGNED`.

## DG3-1 — Canonical source and exact current-state audit

Required:

- exact canonical commit and migration maximum;
- routes/files/queries for owner-control, cash-control and service promises;
- current payload samples using synthetic data;
- side-effect map;
- permission/RLS map;
- identification of duplicate/obsolete concepts.

Hard stop:

- source through 0044 unavailable;
- hidden mutation cannot be identified;
- metric cannot be grounded in source data.

## DG3-2 — Semantic contract freeze

Required:

- semantic IDs and definitions versioned;
- timezone/day-boundary decision;
- payment/refund/debt rules;
- overdue/promise rule;
- waiting-client reason model;
- zero vs unknown behavior;
- owner/manager permissions.

Evidence:

- reviewed examples and edge-case table;
- owner can explain each metric in plain language.

## DG3-3 — Pure read architecture decision

Choose and document:

1. pure query-time projection;
2. event/scheduled derived projection;
3. explicit refresh mutation.

Required:

- no hidden writes on GET;
- consistency model;
- refresh/failure behavior;
- rollback;
- ADR/RFC if architectural change is material.

## DG3-4 — Synthetic read-model implementation

Only after engineering WIP approval.

Required:

- one versioned Owner Pulse response contract;
- no duplicate customer/order/payment tables;
- feature flag;
- synthetic fixtures;
- data-quality and freshness metadata;
- deterministic priority rule engine;
- no AI dependency.

Status after source only: `SOURCE_IMPLEMENTED`.

## DG3-5 — Static and unit gates

- server typecheck;
- web typecheck;
- lint/static syntax;
- focused metric tests;
- priority determinism tests;
- no hidden mutation source contract;
- role/payload allowlist tests;
- no PII/secrets in logs/Evidence;
- build.

Static PASS is not DB/runtime proof.

## DG3-6 — Disposable PostgreSQL and RLS

Use unique synthetic database and at least two tenants.

Prove:

- migrations apply forward-only;
- owner facts match seed ledger/orders;
- refunds/partial payment/debt cases;
- overdue and waiting reasons;
- cross-tenant aggregate denial;
- cross-tenant drill-down denial;
- runtime role not superuser/BYPASSRLS;
- refresh/read path has expected side-effect behavior;
- rollback/disable path.

## DG3-7 — HTTP, cache and failure behavior

Prove:

- authenticated owner access;
- manager/employee/support denial/limits;
- no-store/private cache policy as approved;
- no sensitive payload in ordinary logs;
- stale/partial/conflict/unavailable responses;
- timeout and dropped read behavior;
- older response cannot overwrite newer;
- no mutation on ordinary view/refresh unless explicitly designed.

## DG3-8 — UI/browser 30-second rehearsal

Synthetic data only.

Devices:

- target desktop;
- iPhone Safari;
- Android Chrome where available;
- constrained supported computer/Basic mode.

Prove:

- first viewport answers five questions;
- no horizontal scroll;
- Light/Dark and Living/Basic preserve meaning;
- reduced motion/accessibility;
- drill-down reconciliation;
- owner completes tasks ≤30 seconds in rehearsal;
- zero/unavailable/stale distinction understood.

## DG3-9 — Shadow mode

Owner Pulse reads real pilot data but does not drive operations.

Required:

- owner compares each fact with normal process;
- discrepancies recorded;
- no automatic action;
- no employee-facing judgment;
- metric/rule versions frozen;
- privacy review passed.

Exit only when critical discrepancy rate = 0 for defined window.

## DG3-10 — Friendly owner pilot

- one owner;
- one service;
- bounded duration;
- daily observed sessions;
- owner dismiss reasons captured;
- data-quality incidents reviewed same day;
- feature flag/disable available.

No commercial claim.

## DG3-11 — Measured Victory pilot

Required:

- baseline completed;
- ≥14-day measurement window or approved sample;
- correct five answers ≤30s target evaluated;
- fact accuracy and guardrails evaluated;
- recommendation usefulness evaluated;
- exact tested version known;
- Owner Acceptance signed/recorded;
- bounded Victory classification.

## DG3-12 — Repeat, improve or stop

### Scale only if

- Victory observed;
- result repeatable;
- support/compute cost acceptable;
- no critical privacy/security issue;
- data definitions stable;
- another customer/business shows demand.

### Improve if

- facts accurate but UX slow;
- recommendation often dismissed;
- freshness too weak;
- owner needs one additional fact with strong evidence.

### Stop/narrow if

- data quality cannot support trustworthy view;
- owner continues using manual checks because Pulse adds no value;
- hidden complexity grows;
- product becomes employee surveillance;
- commercial willingness absent after useful pilot.

## 3. Evidence hierarchy

1. **Documented design** — contracts exist.
2. **Source evidence** — exact canonical files/commit.
3. **Static evidence** — tests/build.
4. **Database evidence** — executable PostgreSQL/RLS.
5. **Runtime evidence** — HTTP/cache/failure.
6. **Physical UX evidence** — target devices and owner tasks.
7. **Pilot evidence** — baseline/result/guardrails.
8. **Commercial evidence** — payment/renewal/expansion.

No lower level substitutes a higher one.

## 4. Evidence package naming

Recommended:

```text
MP003_<GATE>_<DATE>_<COMMIT>_<RESULT>
```

Evidence must exclude:

- customer names/phones;
- order bodies;
- cookies/tokens;
- DB URLs;
- stack traces with sensitive paths;
- raw financial datasets;
- cross-tenant identifiers.

## 5. Release and regression checks

Before any pilot release:

- MP-001/MP-002 flows unchanged;
- money/order state machines unchanged unless explicitly reviewed;
- owner dashboard old route compatibility decision documented;
- backup/restore unaffected;
- desktop/mobile navigation unaffected;
- feature flag off returns previous behavior;
- no new external provider or recurring cost without Cost Gate.

## 6. Current gate state

| Gate | State |
|---|---|
| DG3-0 Product design | package prepared, owner review pending |
| DG3-1 Canonical/source audit | partially mapped, blocked by source lineage |
| DG3-2 Semantic freeze | designed, not owner-accepted as final |
| DG3-3 Pure read architecture | unresolved |
| DG3-4+ Engineering/runtime/pilot | not started |
