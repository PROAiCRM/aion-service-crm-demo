# MP-002 Mobile Express Intake — Delivery Gates & Evidence Plan v0.1

**Статус:** DELIVERY PLAN DESIGNED — ENGINEERING NOT ACTIVE  
**Дата:** 2026-08-01  
**WIP rule:** MP-001 остаётся единственным активным инженерным продуктом до отдельного Owner Gate

## 1. Цель

Определить последовательность, по которой MP-002 может перейти от продуктового дизайна к протестированному пилоту без переписывания существующего Express source, без ложных заявлений о подписи и без риска дублей.

Каждый gate отвечает на отдельный вопрос. PASS одного gate не означает PASS остальных.

## 2. Общая цепочка

```text
DG2-0 Canonical truth
→ DG2-1 Exact source map
→ DG2-2 Product/legal decisions
→ DG2-3 Minimum manual flow
→ DG2-4 Idempotency and database
→ DG2-5 Consent and receipt
→ DG2-6 Mobile browser and poor network
→ DG2-7 Camera assist optional slice
→ DG2-8 MP-001 QR handoff
→ DG2-9 Staff rehearsal
→ DG2-10 Friendly pilot
→ DG2-11 Victory measurement
→ DG2-12 Repeat, improve or stop
```

## 3. Gate DG2-0 — Canonical truth and WIP authorization

### Required

- canonical V10.2 source through migration 0044 recovered;
- exact commit/tree identified;
- active runtime/LKG protected;
- MP-001 active engineering completed/paused or owner explicitly approves bounded exception;
- branch created from proven source;
- no production/real DB mutation.

### Evidence

- canonical-line receipt;
- migration list/checksums;
- source manifest;
- owner WIP decision;
- clean working tree.

### Stop

- source ambiguity;
- dirty/unbound worktree;
- missing 0044;
- need for reset/rebase of owner candidate;
- active pilot would be touched.

## 4. Gate DG2-1 — Exact current-state file map

### Required

Find exact canonical files for:

- Express route/screen;
- client lookup/create;
- device/catalog search;
- service selection;
- order command;
- idempotency/command receipt;
- intake receipt/document snapshot;
- consent/signature structures;
- draft handling;
- printing/QR handoff;
- event/metrics;
- permissions/RLS;
- migration 0044 device identity assist.

### Evidence

- file/path map;
- existing tests;
- source maturity per capability;
- reusable vs obsolete slices;
- conflicts among PR #46/#56/#100/#143.

### Exit

No coding estimate until map is approved.

## 5. Gate DG2-2 — Product, legal and privacy decisions

### Owner decisions

- eligible repair categories;
- mandatory fields;
- price/deadline modes;
- consent method;
- use/storage of signature image;
- legal text/version;
- camera local/server boundary;
- draft retention;
- QR-first vs print fallback;
- pilot staff/data boundary.

### Required reviews

- public/client data classification;
- consent legal review;
- camera privacy review;
- threat model;
- cost estimate;
- rollback plan.

### Exit

All unresolved decisions default to safest/manual/off state.

## 6. Gate DG2-3 — Minimum manual Express flow

Camera and external AI excluded.

### Implement

- mobile route;
- phone/client;
- manual device selection;
- one primary service;
- explicit price/deadline modes;
- summary;
- consent action;
- single CTA;
- order + receipt result screen;
- feature flag;
- full-order escape path.

### Acceptance

- one end-to-end synthetic flow;
- no hidden defaults;
- no client-supplied tenant/role;
- standard full intake unchanged;
- no automatic print claim;
- accessible iPhone layout source tests.

### Evidence

- bounded diff;
- typecheck/tests/build;
- source/privacy checks;
- exact commit.

## 7. Gate DG2-4 — Idempotency, concurrency and database

### Required

- stable idempotency identity;
- command receipt;
- same key/same payload replay;
- key conflict fail closed;
- order + required receipt atomicity;
- persistent unknown-result journal without PII;
- reconciliation;
- no automatic business retry.

### Disposable PostgreSQL tests

- concurrent same-key requests;
- rollback before/after each step;
- tenant A/B isolation;
- permission denial;
- order exactly once;
- intake receipt exactly once;
- consent reference consistency;
- server restart and replay;
- dropped response after commit.

### Stop

Any duplicate, unknown cross-tenant result or non-atomic invariant.

## 8. Gate DG2-5 — Consent, document and receipt

### Required

- approved terms version;
- client sees summary/full terms;
- explicit accept/decline;
- signature asset policy if enabled;
- immutable snapshot/hash;
- material changes require new consent;
- client copy available;
- no signature/terms in logs/analytics.

### Tests

- accept/decline;
- empty signature;
- asset failure;
- old document unchanged;
- change price after consent;
- cross-tenant asset/document;
- public QR does not expose consent evidence;
- legal text exact-version check.

### Exit

Technical Evidence does not equal legal certification. Legal status remains bounded.

## 9. Gate DG2-6 — Mobile browser, performance and poor network

### Devices

- target iPhone Safari;
- supported desktop browser;
- later Android Chrome;
- constrained supported device/profile if relevant.

### Scenarios

- keyboard open;
- rotate/background/return;
- large text;
- reduced motion;
- slow LAN;
- lost response;
- reload;
- camera denied;
- popup blocked;
- session expiry;
- draft recovery.

### Performance target

- flow interaction remains responsive;
- median synthetic/manual eligible flow demonstrates credible path to ≤120 seconds;
- no claim of business victory yet.

### Evidence

- timestamps;
- screenshots/video without client data;
- browser console redaction;
- storage/cache inspection;
- owner observation.

## 10. Gate DG2-7 — Camera Assist optional slice

This gate may be skipped for MVP.

### Required before implementation

- manual flow already passes;
- expected time saving defined;
- local-first approach selected;
- no-retention contract;
- human confirmation;
- feature flag separate from MP-002.

### Tests

- permission denied;
- stream stop;
- raw frame absent from storage/network/logs;
- low confidence;
- wrong result correction;
- background/navigation cleanup;
- no camera path speed baseline;
- accuracy top-1/top-3.

### Stop

Camera is removed if it does not measurably improve speed or accuracy.

## 11. Gate DG2-8 — MP-001 QR handoff

### Dependency

MP-001 public link boundary must be canonically integrated and tested.

### Required

- Express order can request/get safe public link reference;
- failure of QR link does not create duplicate order;
- receipt shows QR only when ready/validated;
- fallback URL/print behavior defined;
- no raw token in snapshots/logs;
- revoked/stale QR handling.

### Exit

MP-002 can pass without camera, but the target client handoff requires MP-001 or an approved non-QR receipt fallback.

## 12. Gate DG2-9 — Staff rehearsal

### Scope

- synthetic customers only;
- minimum 20 flows;
- all price modes;
- existing/new client/device;
- unknown model;
- complex escape;
- consent decline;
- double submit;
- dropped response;
- print/QR failure;
- session expiry.

### Metrics

- median/P90;
- completion;
- errors;
- corrections;
- bypass intent;
- unknown results;
- duplicate count;
- staff feedback.

### Exit

No critical safety defects; workflow understandable.

## 13. Gate DG2-10 — Friendly real pilot

Requires explicit Owner Gate for real client data and legal consent.

### Boundary

- small defined count;
- owner present/available;
- approved staff/categories;
- manual fallback;
- daily review;
- no camera server upload unless separately approved;
- no broad release.

### Stop triggers

Any real duplicate, privacy leak, consent failure, wrong tenant, inability to determine order existence or unavailable fallback.

## 14. Gate DG2-11 — Victory measurement

### Required

- frozen baseline;
- eligible repairs counted;
- work-start timing;
- intake timing;
- capture before work;
- bypass reasons;
- corrections;
- consent completeness;
- duplicates;
- guardrails;
- owner acceptance.

### Victory result

- `SIGNAL_ONLY` for synthetic/friendly insufficient evidence;
- `VICTORY_OBSERVED` only in bounded operational pilot with targets and guardrails;
- no commercial claim without payment/retention evidence.

## 15. Gate DG2-12 — Repeat, improve or stop

Options:

- repeat with another staff member;
- narrow eligible categories;
- simplify fields;
- remove camera;
- revise consent;
- strengthen reconciliation;
- integrate Owner Pulse metrics;
- pause;
- retire.

Scale requires repeatability and acceptable support cost.

## 16. Evidence matrix

| Claim | Minimum Evidence |
|---|---|
| Designed | approved passport/policies |
| Source implemented | exact canonical paths/commit/migration |
| Tested | automated + disposable DB + browser matrix |
| Two-minute capable | measured target-device staff rehearsal |
| Pilot validated | real bounded pilot + baseline/guardrails |
| Victory observed | capture/speed targets + owner acceptance |
| Commercially proven | customer payment/renewal attributable to value |

## 17. Cross-cutting invariants

- one active engineering product unless owner exception;
- one Core, no duplicate entities;
- no secrets/real data in public docs;
- no edit/reuse of applied migrations;
- no AI before reliable manual flow;
- no camera retention by default;
- no legal overclaim;
- no blind retry;
- order creation not blocked by physical printing;
- every claim tied to exact version/Evidence.

## 18. Main risks

- MP-002 expands into full CRM redesign;
- consent slows flow;
- camera creates privacy/cost complexity;
- existing Draft slices conflict;
- source lineage is incomplete;
- speed encourages garbage data;
- offline ambition causes premature sync architecture;
- employees bypass metrics;
- MP-001 dependency blocks handoff.

## 19. Current gate status

| Gate | Status |
|---|---|
| DG2-0 | blocked by canonical recovery and WIP |
| DG2-1 | high-level source map created; exact canonical paths pending |
| DG2-2 | policies designed; owner/legal gates pending |
| DG2-3–DG2-12 | not started |

## 20. Next mandatory action

Continue product design only: finalize package index and owner decisions. Engineering begins only after MP-001/WIP and canonical-source gates are explicitly resolved.