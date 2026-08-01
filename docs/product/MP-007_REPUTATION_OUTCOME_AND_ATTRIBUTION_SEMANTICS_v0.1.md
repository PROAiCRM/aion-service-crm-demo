# MP-007 Reputation Booster — Reputation Outcome & Attribution Semantics v0.1

**Status:** DESIGNED — NOT IMPLEMENTED  
**Date:** 2026-08-01

## 1. Purpose

Prevent MP-007 from treating requests, clicks, declared reviews, rating changes or later revenue as the same thing.

## 2. Core distinctions

```text
eligible customer != contacted customer
sent request != delivered request
delivered request != opened request
opened request != submitted review
submitted review != verified public review
new review != rating improvement
rating improvement != incremental business value
```

## 3. Outcome classes

### `FEEDBACK_RESPONSE`

Customer submitted bounded/private feedback.

### `RECOVERY_CASE_OPENED`

Material unresolved issue entered governed recovery.

### `RECOVERY_OUTCOME_VALID`

Recovery ended with an approved outcome code and Evidence.

### `CUSTOMER_CONFIRMED_RESOLUTION`

Customer explicitly confirmed resolution.

### `REVIEW_REQUEST_SENT_CONFIRMED`

A permitted request was sent once with a valid receipt.

### `REVIEW_LINK_OPENED`

Optional event where a safe redirect can measure it lawfully and without platform-policy violation.

### `PUBLIC_REVIEW_DECLARED`

Customer says they posted a review. Declaration only.

### `PUBLIC_REVIEW_VERIFIED`

Approved platform/link Evidence confirms a review associated through a privacy-safe method.

### `RATING_SNAPSHOT_OBSERVED`

Aggregate public rating/review count observed at a timestamp under an approved source policy.

### `REFERRAL_DECLARED` / `REFERRAL_VERIFIED`

Future separate outcome; not inferred from a positive review.

## 4. Aggregate reputation metrics

Allowed when source/policy permits:

- review-request eligibility rate;
- feedback response rate;
- recovery-case rate;
- recovery SLA/outcome rate;
- neutral request delivery rate;
- verified review conversion rate;
- aggregate review count change;
- aggregate rating snapshot change;
- opt-out and complaint rate;
- platform/source coverage.

Every metric states:

- window;
- eligible population;
- numerator/denominator;
- source;
- missingness;
- platform policy version;
- whether outcome is declared or verified.

## 5. Rating semantics

An aggregate rating is a platform-observed state, not AION’s own customer satisfaction truth.

The system must disclose:

- platform;
- snapshot time;
- review count;
- rating scale;
- missing/removed reviews if knowable;
- inability to verify every review origin;
- historical comparison limitations.

A change from 4.6 to 4.7 may be mathematically real but operationally small or due to external reviews/removals.

## 6. Attribution levels

### A0 — `NO_ATTRIBUTION`

Outcome observed, but no link to MP-007 action.

### A1 — `TEMPORAL_ASSOCIATION`

Outcome occurred after action; organic behavior remains plausible.

### A2 — `LINK_OR_RECEIPT_ASSOCIATION`

A safe campaign/request identity connects the outcome, subject to platform constraints.

### A3 — `COMPARATIVE_SUPPORT`

A valid baseline/control/comparable cohort supports incremental effect.

### A4 — `REPEATED_COMPARATIVE_SUPPORT`

Effect repeats in another comparable window/cohort.

No level proves that reputation alone caused future revenue.

## 7. Value semantics

### Operational value

- unresolved issue caught before escalation;
- faster recovery;
- higher feedback coverage;
- fewer unowned complaints;
- compliant review-request process.

### Reputation value

- more verified public reviews;
- improved aggregate rating/review freshness;
- higher share of recent authentic feedback.

### Commercial value

Requires separate evidence such as:

- customer acquisition source;
- conversion comparison;
- renewal/retention reason;
- paid product adoption.

MP-007 must not claim “each review is worth ₽X” without a governed model and validation.

## 8. Incremental review outcome

A rough incremental review effect may be estimated only with:

- frozen eligible population;
- valid comparison method;
- stable platform conditions;
- no review buying/gating;
- review removals/account changes documented;
- transparent assumptions.

Allowed wording:

> “The pilot cohort produced 6 verified reviews versus 2 in the comparable baseline; incremental effect is supported but not universally proven.”

Forbidden:

> “AION generated exactly 4 reviews and ₽80,000 profit.”

## 9. Recovery and reputation interaction

A resolved complaint may later result in a positive review, unchanged review, negative review or no review.

None of these outcomes invalidates the recovery if the customer problem was fairly handled.

Recovery success is measured independently from star rating.

## 10. Review edits/removals

The system may observe that a public review changed or disappeared but must not infer why.

Forbidden attribution without evidence:

- customer removed review because of recovery;
- platform removed fake review;
- employee persuaded customer;
- competitor posted review.

Use `OBSERVED_CHANGE_REASON_UNKNOWN` unless a permitted source exists.

## 11. Outcome receipt

A future aggregate measurement receipt should bind:

```text
measurementId
windowId
eligibilityDefinitionVersion
contactPolicyVersion
platformSourceVersion
eligibleCount
requestSentCount
feedbackResponseCount
recoveryOpenedCount
validRecoveryOutcomeCount
verifiedReviewCount
ratingSnapshotBefore/After
attributionLevel
guardrailResults
recordedAtTrusted
```

No customer PII, review text, platform credentials or employee score appears in aggregate Evidence.

## 12. No double counting

One customer/order/review may appear across stages but must not be counted twice within the same metric.

Examples:

- declared and verified review are one outcome, with verification upgrade;
- multiple clicks are not multiple reviews;
- reopened recovery is one case with lifecycle events;
- copied review across platforms is separate platform outcomes but not automatically separate customer victories.

## 13. Guardrails

Any favorable review count is overridden by:

- review gating;
- bought/incentivized positive reviews;
- wrong-recipient contact;
- opt-out violation;
- unresolved high-priority cases ignored;
- fake/bot activity;
- platform-policy breach;
- employee coercion.

## 14. Honest maturity

- outcome semantics: designed;
- platform snapshots: not integrated;
- attribution method: not calibrated;
- verified review linkage: not designed for a specific platform;
- commercial attribution: not proven;
- runtime Evidence: none.