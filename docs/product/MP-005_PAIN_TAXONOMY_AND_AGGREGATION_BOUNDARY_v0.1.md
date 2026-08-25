# MP-005 AION Pain Scanner — Pain Taxonomy & Aggregation Boundary v0.1

**Status:** DESIGNED — NOT IMPLEMENTED  
**Date:** 2026-08-01

## 1. Purpose

Define how individual operational facts become eligible pain episodes and how episodes may become a recurring pain pattern without double counting, incomparable aggregation or hidden assumptions.

## 2. Core distinctions

```text
source fact != pain episode
pain episode != recurring pain pattern
recurring pain pattern != root cause
root-cause hypothesis != proven cause
```

### Source fact

A recorded operational fact such as an order timestamp, confirmed promise, customer-contact state, payment event, inventory movement or command receipt.

### Pain episode

One bounded occurrence that satisfies an approved pain-family definition.

### Recurring pain pattern

A group of comparable, deduplicated episodes within a complete observation window and eligible population.

### Causal hypothesis

A separately labeled explanation for why the pattern may occur. It cannot be produced solely from recurrence.

## 3. Minimum episode contract

Every normalized pain episode must contain:

```text
schemaVersion
painFamilyCode
painDefinitionVersion
episodeId
organizationId
workspaceId
subjectType
subjectIdHashOrSafeReference
occurredAt
resolvedAtOrNull
observationWindowId
sourceFactRefs[]
truthClass = OBSERVED
evidenceLevel
dataFreshness
eligibilityResult
exclusionCodes[]
deduplicationKey
segmentDimensions{}
privacyClass
```

Requirements:

- `episodeId` is stable for the same canonical facts and definition version;
- cross-tenant facts are never combined;
- the raw customer identity is not required for portfolio aggregation;
- every episode links to exact source facts;
- missing required facts blocks eligibility;
- one underlying occurrence cannot create multiple counted episodes in the same family/version;
- corrections create a new evaluation, not a silent historical rewrite.

## 4. Registered pain families

### 4.1 Confirmed promise overdue pattern

Code: `CONFIRMED_PROMISE_OVERDUE_PATTERN`

Episode eligibility requires:

- an explicit promise with due timestamp;
- approved promise type;
- no completion/cancellation before due timestamp;
- current state reconciled after the due time;
- timezone and clock source known.

A missing due date is not overdue.

### 4.2 Waiting-for-customer stagnation pattern

Code: `WAITING_FOR_CUSTOMER_STAGNATION_PATTERN`

Requires:

- explicit waiting reason;
- explicit requested customer action;
- waiting-start timestamp;
- approved threshold for that reason;
- no recorded exit condition before threshold.

A generic order status named “waiting” is insufficient.

### 4.3 Late or bypassed intake pattern

Code: `LATE_OR_BYPASSED_INTAKE_PATTERN`

Requires a reliable comparison between:

- work-start Evidence; and
- order-registration timestamp.

If work-start time is not recorded reliably, the pain family is blocked rather than inferred from user behavior.

### 4.4 Intake correction pattern

Code: `INTAKE_CORRECTION_PATTERN`

Eligible only for material corrections to approved fields such as:

- device identity;
- selected service;
- price mode;
- agreed amount or range;
- consent version;
- customer contact needed for fulfilment.

Cosmetic edits, formatting normalization and authorized post-diagnostics changes must be excluded.

### 4.5 Part availability delay pattern

Code: `PART_AVAILABILITY_DELAY_PATTERN`

Requires:

- a required part linked to an order;
- a defined needed-by point;
- unavailable or unreserved state during the relevant interval;
- actual order delay or blocked action linked to the part.

A low stock count alone is not a proven repair delay.

### 4.6 Status inquiry load pattern

Code: `STATUS_INQUIRY_LOAD_PATTERN`

Requires a bounded classification of incoming contacts as routine status inquiries.

It excludes:

- complaints;
- approval decisions;
- price questions;
- new repair requests;
- warranty issues;
- contacts caused by broken QR access.

If calls/messages are not classified reliably, the family remains unavailable.

### 4.7 Repair rework or return pattern

Code: `REPAIR_REWORK_OR_RETURN_PATTERN`

Requires an approved relationship between original repair and later return/rework.

It must distinguish:

- same unresolved fault;
- warranty return;
- unrelated new damage;
- customer-caused damage;
- preventive follow-up;
- administrative correction.

Every return must not be labeled poor quality.

### 4.8 Document or print interruption pattern

Code: `DOCUMENT_OR_PRINT_INTERRUPTION_PATTERN`

Eligible when a required business flow was interrupted because the document or print boundary did not reach its approved state.

It distinguishes:

- document generation failed;
- preview unavailable;
- print profile missing;
- print dialog not opened;
- physical print unconfirmed;
- user cancellation;
- printer failure.

`QUEUED` is not `PRINTED`.

### 4.9 Unknown mutation result pattern

Code: `UNKNOWN_MUTATION_RESULT_PATTERN`

Requires a mutation receipt or client state indicating the server result is unknown after timeout/lost response.

Multiple retries using the same logical identity count as one episode until reconciled.

### 4.10 Recurring governed exception pattern

Code: `RECURRING_GOVERNED_EXCEPTION_PATTERN`

Uses only deduplicated MP-004 cases with valid family, lifecycle and outcome metadata.

It cannot infer loss, fraud or blame from case count.

## 5. Observation windows

Approved window types may include:

- last 7 complete local days;
- last 14 complete local days;
- last 30 complete local days;
- last N completed eligible orders;
- comparable prior period;
- controlled experiment baseline/intervention windows.

Rules:

- partial current day is excluded unless explicitly supported;
- windows use the organization timezone;
- future timestamps fail closed;
- maintenance or migration intervals may be excluded only through registered exclusion codes;
- a window cannot silently change after recommendation publication;
- low-volume windows receive `INSUFFICIENT_SAMPLE` rather than a strong conclusion.

## 6. Denominator contract

Every pain pattern must declare:

- numerator definition;
- denominator definition;
- inclusion criteria;
- exclusion criteria;
- observation window;
- minimum sample;
- segmentation;
- missing-data rate;
- deduplication rule.

Examples:

```text
overdue confirmed promises / all confirmed promises due in window
late intake episodes / all eligible express repairs in window
status inquiries / active orders in window × 100
material intake corrections / completed intakes in window
```

Counts without denominators may be displayed only as workload, not prevalence.

## 7. Comparability and segmentation

Do not aggregate unlike work blindly.

Approved dimensions may include:

- express versus full repair;
- device category;
- service category;
- promised-time class;
- weekday/daypart;
- location;
- parts-required versus no-parts-required;
- new versus repeat customer only when privacy and definition permit.

Employee identity is not an approved default segmentation dimension.

A segment is shown only when:

- minimum sample passes;
- it changes the actionable interpretation;
- privacy thresholds pass;
- the comparison is not used as an employee ranking.

## 8. Deduplication

One operational situation may emit multiple technical events. Deduplication must bind them into one episode using a registered deterministic key.

Examples:

- repeated timeout UI states for the same idempotency identity;
- several alerts linked to one MP-004 case;
- multiple status-change events during one continuous waiting interval;
- repeated print attempts for one required document interruption.

Deduplication rules are versioned. A changed rule requires recomputation under a new definition version, never historical silent replacement.

## 9. Recurrence threshold

A pattern is eligible for priority selection only when all configured gates pass:

- minimum eligible episode count;
- minimum denominator;
- maximum missing-data rate;
- complete observation window;
- deduplication complete;
- no unresolved definition contradiction;
- recurrence exceeds the approved family threshold or burden threshold.

No universal threshold is assumed. Each pain family requires a pilot-calibrated definition.

## 10. Burden dimensions

A pain pattern may expose separate observed dimensions:

- affected-order count;
- affected-order share;
- total observed waiting duration;
- median/P90 delay;
- number of repeated contacts;
- number of corrections;
- number of blocked actions;
- directly measured staff handling time;
- confirmed monetary exposure from another governed product.

These dimensions must not be collapsed into one opaque score for the user.

## 11. Exclusions and unknowns

Required exclusion codes may include:

- `SYNTHETIC_ORDER`;
- `TRAINING_EVENT`;
- `MIGRATION_WINDOW`;
- `DATA_SOURCE_UNAVAILABLE`;
- `REQUIRED_TIMESTAMP_MISSING`;
- `UNRELATED_RETURN`;
- `CUSTOMER_REQUESTED_DELAY`;
- `AUTHORIZED_EXCEPTION`;
- `DUPLICATE_TECHNICAL_EVENT`;
- `OUTSIDE_OBSERVATION_WINDOW`.

Unknowns remain visible in data-quality reporting. They are not silently removed to improve a result.

## 12. Anti-gaming boundary

The scanner must not encourage users to:

- stop recording promises to reduce overdue rate;
- close waiting states without customer action;
- avoid registering corrections;
- reclassify returns as unrelated without Evidence;
- skip MP-004 cases;
- manipulate timestamps;
- reduce the denominator through arbitrary exclusions.

Material changes in recording behavior are experiment guardrails and may invalidate the comparison.

## 13. Privacy boundary

Pattern aggregation should use privacy-minimized safe references and counts. Drill-down to individual orders requires existing role permission and current read authorization.

The aggregate projection must not expose:

- customer phone or name;
- IMEI or serial number;
- free-text complaint/internal notes;
- signature images;
- PIN, session or token material;
- employee blame labels.

## 14. Honest maturity

- taxonomy: designed;
- exact family thresholds: not calibrated;
- canonical source field inventory: pending;
- episode normalizers: not implemented;
- aggregation: not implemented;
- runtime Evidence: none;
- pilot result: none.