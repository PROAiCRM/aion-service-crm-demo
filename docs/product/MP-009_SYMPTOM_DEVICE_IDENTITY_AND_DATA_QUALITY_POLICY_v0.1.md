# MP-009 AI Master — Symptom, Device Identity & Data-Quality Policy v0.1

**Status:** DESIGNED — NOT IMPLEMENTED  
**Date:** 2026-08-01

## 1. Purpose

Ensure AI Master reasons only from sufficiently reliable device and symptom inputs and fails safely when identity or Evidence is incomplete.

## 2. Device identity levels

### `UNIDENTIFIED`

Only broad category is known.

### `CUSTOMER_DECLARED`

Model is reported but not independently confirmed.

### `VISUALLY_CONFIRMED`

Brand/model family is manually confirmed from approved visible features or settings.

### `SYSTEM_IDENTIFIER_CONFIRMED`

Approved system identifier matches the selected catalogue entry.

### `EXACT_VARIANT_CONFIRMED`

Exact variant required for the diagnostic/work path is confirmed.

No level is silently upgraded by camera or model output.

## 3. Required identity contract

Every case family declares the minimum identity level needed.

Example:

- general symptom triage may allow `VISUALLY_CONFIRMED`;
- part compatibility requires `EXACT_VARIANT_CONFIRMED`;
- safety bulletin applicability may require exact model/region/version Evidence.

If the required level is absent, AI Master shows `IDENTITY_INSUFFICIENT`.

## 4. Camera-assisted identification

Camera assistance follows MP-002 privacy rules:

- explicit technician action;
- transient processing by default;
- no raw image persistence or upload without separate approval;
- several candidates, not one asserted model;
- manual confirmation required;
- confidence score cannot replace exact identity Evidence;
- manual search always remains available.

## 5. Symptom structure

Symptoms are captured as bounded fields where practical:

- symptom family;
- onset;
- intermittent/constant;
- affected function;
- visible state;
- known triggering context;
- customer-reported prior events;
- whether device powers on;
- whether data-preservation concern exists;
- whether a hazard indicator is present;
- free-text note only as supplementary context.

## 6. Symptom truth

Customer statements remain `REPORTED` until verified.

Examples:

- “После падения” is reported context;
- visible damage is observed;
- “аккумулятор исправен” is not accepted without approved Evidence;
- absence of a recorded liquid indicator is not proof of no liquid exposure.

## 7. Data-quality states

- `SUFFICIENT` — all mandatory inputs valid and current;
- `PARTIAL` — useful but limited; only low-consequence suggestions allowed;
- `CONTRADICTION` — material sources disagree;
- `STALE` — required source no longer current;
- `UNAVAILABLE` — required source missing/inaccessible;
- `OUT_OF_SCOPE` — case family does not apply;
- `HAZARD_BLOCKED` — safe assistance cannot continue.

## 8. Required data checks

Before hypotheses:

- tenant/workspace/order scope;
- device identity level;
- symptom completeness;
- timestamp/freshness;
- prior work/repair history when permitted;
- open QC/warranty/recovery state;
- existing part/work decisions;
- contradiction review;
- hazard indicators;
- privacy eligibility;
- case-family definition version.

## 9. Contradictions

Examples:

- selected device variant conflicts with system identifier;
- customer reports no image but observed display image is present;
- case says no prior repair while order history records one;
- diagnosis references a part incompatible with confirmed variant;
- QC PASS conflicts with an unresolved failed required check.

Material contradiction blocks strong hypothesis ranking and consequential suggestions.

## 10. Missing-data behavior

Missing values are never guessed.

Allowed output:

> “Не хватает точной модели для проверки совместимости. Подтвердите вариант вручную.”

Forbidden output:

> “Скорее всего это iPhone 13, продолжайте замену дисплея.”

## 11. Free-text boundary

Free text may contain:

- personal information;
- passwords/passcodes;
- unrelated customer content;
- subjective blame;
- prompt-injection text;
- inaccurate technical claims.

It is not a canonical command input. Before any external AI use it must be minimized, redacted and bounded by policy.

## 12. Device data boundary

MP-009 does not require access to customer personal files, messages, photos, credentials or account content.

Any future device telemetry connector requires separate:

- purpose;
- consent/legal basis;
- field allowlist;
- local-first preference;
- retention;
- security review;
- Owner Gate.

## 13. Source correction

When identity or symptom data changes:

- dependent hypotheses become stale;
- current verification step may be withdrawn;
- new evaluation is produced;
- previous result remains in history;
- work already authorized is not silently changed.

## 14. Anti-gaming

The system must not encourage technicians to:

- skip uncertainty fields;
- mark identity exact merely to unlock a suggestion;
- omit failed tests;
- hide prior repair;
- overuse “not applicable” in QC;
- select a symptom code solely to receive a preferred repair template.

## 15. Honest maturity

- identity levels: designed;
- symptom schema: designed;
- camera implementation: not proven;
- device catalogue quality: not audited;
- data-quality evaluator: not implemented;
- real device Evidence: none.