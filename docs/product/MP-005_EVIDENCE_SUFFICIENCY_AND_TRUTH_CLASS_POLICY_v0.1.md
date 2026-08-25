# MP-005 AION Pain Scanner — Evidence Sufficiency & Truth-Class Policy v0.1

**Status:** DESIGNED — NOT IMPLEMENTED  
**Date:** 2026-08-01

## 1. Purpose

Prevent Pain Scanner from presenting incomplete data, statistical coincidence, model prose or stale projections as operational truth.

## 2. Canonical truth classes

### `OBSERVED`

Directly supported by eligible recorded sources.

Examples:

- 17 of 54 eligible orders exceeded a registered waiting threshold;
- 12 routine status inquiries were classified during the window;
- 6 intake records received a material correction;
- the source was last refreshed at a stated time.

### `DERIVED_PATTERN`

A deterministic aggregation of eligible `OBSERVED` episodes under an approved definition.

Example:

- waiting-for-customer stagnation affected 31% of eligible orders.

### `INFERRED_CAUSE`

A candidate explanation linked to observed sources and competing explanations.

Example:

- the absence of a standard first-contact step may contribute to long waiting duration.

### `SIMULATED_EFFECT`

A counterfactual or expected future result under explicit assumptions.

Example:

- reducing first-contact delay may reduce the waiting share.

### `UNKNOWN`

A required fact is unavailable, stale, inaccessible or not recorded.

### `CONTRADICTION`

Eligible sources disagree in a way that changes the conclusion.

### `ASSUMPTION`

A value chosen for experiment planning rather than observed from operations.

## 3. Allowed transitions

```text
eligible observed facts
→ observed pain episodes
→ deterministic derived pattern
→ human-reviewed causal hypothesis
→ approved experiment
→ observed experiment result
```

Forbidden shortcuts:

```text
raw status label → root cause
correlation → proven causation
LLM prose → observed fact
missing value → zero
open MP-004 case → confirmed loss
expected improvement → recovered money
```

## 4. Evidence sufficiency dimensions

Every candidate pain must be evaluated across:

1. **source authority** — is the field owned by an approved Core boundary?
2. **source integrity** — can the source be linked to committed events/receipts?
3. **freshness** — is the source current for the observation window?
4. **completeness** — are required fields present?
5. **coverage** — what share of the eligible population has usable data?
6. **sample sufficiency** — is the count large enough for the intended statement?
7. **definition stability** — did the definition remain unchanged in the window?
8. **deduplication** — have repeated technical events been collapsed correctly?
9. **tenant/workspace scope** — are all facts within the authorized scope?
10. **contradiction state** — do material sources disagree?
11. **privacy eligibility** — may the projection use and display the data?
12. **comparison validity** — are baseline and comparison populations comparable?

## 5. Evidence states

### `SUFFICIENT_FOR_OBSERVATION`

The scanner may display the observed pattern but not claim cause or future effect.

### `SUFFICIENT_FOR_PRIORITY`

The pattern may enter deterministic priority selection.

Requires observation sufficiency plus:

- recurrence threshold passed;
- burden dimension available;
- competing enabled pains evaluated;
- no critical data-quality blocker.

### `SUFFICIENT_FOR_HYPOTHESIS`

A causal hypothesis may be shown as `INFERRED_CAUSE`.

Requires:

- priority sufficiency;
- source-linked mechanism;
- at least one competing explanation;
- contradiction review;
- human review or approved deterministic hypothesis rule.

### `SUFFICIENT_FOR_EXPERIMENT`

The system may propose an experiment for owner approval.

Requires:

- measurable outcome;
- valid baseline method;
- reversible intervention;
- one primary change;
- guardrails;
- owner and duration;
- stop criteria;
- no prohibited safety or authorization bypass.

### `SUFFICIENT_FOR_VICTORY`

The result may support `VICTORY_OBSERVED`.

Requires:

- frozen pre-intervention contract;
- complete intervention window;
- comparable population;
- material threshold achieved;
- guardrails passed;
- no critical source drift;
- registered measurement receipt;
- owner acceptance.

### `INSUFFICIENT`

The product must show why it cannot conclude.

## 6. Minimum sample policy

No universal minimum is valid for every pain family.

Each family must define:

- minimum eligible population;
- minimum episode count;
- maximum missing rate;
- maximum stale-data rate;
- minimum complete days or orders;
- small-sample display behavior.

When a sample is too small, allowed wording is:

> “Недостаточно наблюдений для вывода. Зафиксировано 2 эпизода из 7 заказов.”

Forbidden wording is:

> “Главная проблема бизнеса — задержки.”

## 7. Freshness states

- `LIVE` — derived from current committed facts within the approved refresh boundary;
- `DELAYED` — recent but beyond target refresh latency;
- `STALE` — too old for current decision use;
- `OFFLINE_SNAPSHOT` — explicitly historical local snapshot;
- `UNAVAILABLE` — no valid projection.

Stale data may support historical analysis but cannot be presented as “today”.

## 8. Missing data

Missing data must be classified:

- structurally unavailable;
- temporarily unavailable;
- optional by policy;
- expected but not recorded;
- access denied;
- excluded for privacy;
- source contradiction.

The scanner must never:

- convert missing duration to zero;
- treat an absent promise as on-time;
- treat absent contact Evidence as no contact;
- treat absent return classification as quality failure;
- hide missingness from numerator/denominator explanations.

## 9. Contradictions

Material contradiction examples:

- order says issued, payment projection says unpaid without authorized debt;
- customer-wait state remains active after an exit event;
- promise marked met but completion timestamp is after due time;
- part recorded consumed and released for the same reservation;
- two source systems produce different service totals.

A material contradiction:

- blocks strong pain ranking when it affects the candidate;
- becomes visible as a data-quality pain or MP-004 case when appropriate;
- cannot be “resolved” by AI prose;
- requires a reviewed source-of-truth decision or reconciliation event.

## 10. Causal evidence levels

Pain Scanner does not use arbitrary numeric confidence in v0.1.

Use bounded labels:

- `NO_CAUSAL_CLAIM` — only pattern observed;
- `PLAUSIBLE_MECHANISM` — mechanism is coherent and source-linked;
- `SUPPORTED_BY_COMPARISON` — comparable groups/time periods support the hypothesis;
- `SUPPORTED_BY_CONTROLLED_EXPERIMENT` — approved experiment supports the effect;
- `CONTRADICTED` — observed result conflicts with the hypothesis.

Even `SUPPORTED_BY_CONTROLLED_EXPERIMENT` remains scoped to the tested context and does not prove universal causality.

## 11. Explanation contract

Every displayed pain explanation includes:

- pain family and definition version;
- truth class;
- observation window;
- numerator and denominator;
- exclusions;
- source families;
- freshness;
- missing-data rate;
- deduplication version;
- data-quality state;
- causal status;
- contradictions and alternative explanations;
- experiment status;
- exact claim limitations.

## 12. AI boundary

An AI model may not:

- select or alter canonical source facts;
- remove blockers or contradictions;
- invent a denominator;
- upgrade a truth class;
- assign numeric confidence;
- declare a root cause;
- authorize or execute an experiment;
- produce exact financial impact without governed calculation;
- reveal inaccessible drill-down data.

Optional AI output must be reconstructed from a bounded safe claim set and labeled as a summary, not Evidence.

## 13. Failure behavior

If sufficiency fails:

- no pain is forced merely to fill the screen;
- the top card becomes “Недостаточно данных для надёжного вывода”;
- the system identifies the smallest missing Evidence step;
- consequential recommendation is disabled;
- safe navigation and source review remain available.

“No reliable pain found” is a valid result.

## 14. Evidence receipt proposal

A future pain assessment receipt should bind:

```text
assessmentId
painFamilyCode
painDefinitionVersion
observationWindowId
sourceSnapshotIdentity
eligibleEpisodeIdsOrDigest
numerator
denominator
exclusionsDigest
missingRate
freshnessState
sufficiencyState
truthClass
priorityRuleVersion
causalStatus
createdAtTrusted
```

It must exclude customer PII and free-text notes from the aggregate receipt.

## 15. Honest maturity

- policy: designed;
- causal calibration: not implemented;
- sample thresholds: not calibrated;
- receipts: not implemented;
- source quality inventory: pending;
- runtime Evidence: none.