# MP-005 AION Pain Scanner — Causal Hypothesis & Contradiction Policy v0.1

**Status:** DESIGNED — NOT IMPLEMENTED  
**Date:** 2026-08-01

## 1. Purpose

Define how Pain Scanner may propose an explanation for a recurring pattern without claiming that recurrence, correlation or AI language proves causation.

## 2. Core rule

> The scanner detects patterns. Causes remain hypotheses until a governed comparison or experiment supports them.

A pain card must keep two separate statements:

1. **Observed pain:** what repeatedly happened.
2. **Causal hypothesis:** what may contribute and how it can be tested.

## 3. Causal hypothesis contract

Every candidate hypothesis requires:

```text
hypothesisId
hypothesisDefinitionVersion
painAssessmentId
painFamilyCode
statementCode
boundedHumanReadableStatement
truthClass = INFERRED_CAUSE
mechanismDescription
supportingObservedClaimRefs[]
contradictingClaimRefs[]
alternativeHypotheses[]
requiredMissingEvidence[]
causalEvidenceLevel
scopeLimitations[]
testableInterventionCodeOrNull
createdAtTrusted
```

Free-form model text is not a canonical hypothesis definition.

## 4. Mechanism requirement

A causal hypothesis is eligible only when it describes a plausible mechanism connecting an intervention point to the observed outcome.

Example:

```text
Observed: customer-wait duration is repeatedly high.
Hypothesis: first contact often begins only after the repair queue review, increasing time before customer action.
Mechanism: earlier standardized contact may move the waiting-start point earlier and reduce total stagnation.
```

Invalid hypothesis:

> “Employees are slow.”

It lacks a bounded process mechanism, uses blame language and cannot be safely tested.

## 5. Hypothesis source types

Allowed sources:

- deterministic process-rule analysis;
- explicit owner/manager operational observation;
- employee-reported workflow constraint;
- source-linked historical comparison;
- documented customer-contact process;
- prior controlled experiment result;
- privacy-approved research imported as non-local contextual evidence.

Every non-system source remains labeled as declaration, external evidence or hypothesis—not observed CRM truth.

## 6. Competing explanations

At least one alternative explanation is required before an experiment proposal unless the hypothesis is a direct deterministic mechanism.

Example alternatives for long waiting-for-customer duration:

- first contact is late;
- contact details are invalid;
- the customer deliberately requested delay;
- quoted price requires repeated consideration;
- no standard follow-up exists;
- status transitions are recorded late.

The scanner must not hide alternatives merely because one explanation sounds intuitive.

## 7. Contradiction classes

### Source contradiction

Canonical data sources disagree.

### Temporal contradiction

Event order makes the hypothesis impossible or unclear.

### Population contradiction

The pattern exists only in a segment inconsistent with the proposed general cause.

### Intervention contradiction

Previous use of the proposed intervention did not improve the outcome or worsened a guardrail.

### Human-context contradiction

Owner or employee review provides bounded operational Evidence that the proposed mechanism cannot apply to part of the sample.

### Policy contradiction

The proposed intervention conflicts with safety, legal, consent, authorization, privacy or service policy.

## 8. Contradiction behavior

A material contradiction must:

- remain visible in the canonical hypothesis result;
- block causal promotion when unresolved;
- prevent a “root cause” label;
- be included in the experiment decision;
- generate a data-quality or governance review when appropriate.

AI cannot remove or summarize away a contradiction.

## 9. Causal promotion ladder

### Level 0 — `NO_CAUSAL_CLAIM`

Only the recurring pattern is supported.

### Level 1 — `PLAUSIBLE_MECHANISM`

A source-linked mechanism and alternatives exist. Experiment may be proposed if safe and measurable.

### Level 2 — `SUPPORTED_BY_NATURAL_COMPARISON`

Comparable segments or periods support the expected relationship, with limitations disclosed.

### Level 3 — `SUPPORTED_BY_CONTROLLED_EXPERIMENT`

A predeclared intervention improved the target while guardrails passed.

### Level 4 — `REPEATED_IN_COMPARABLE_CONTEXT`

The effect was repeated in another valid comparable window/cohort/location.

### Terminal — `CONTRADICTED`

The tested intervention did not support the hypothesis or violated guardrails.

The ladder is categorical. No arbitrary numeric confidence is used in v0.1.

## 10. Correlation guardrails

Pain Scanner may say:

> “Orders requiring a part had longer median completion time in this window.”

It may not say:

> “Parts caused all delays.”

without mechanism, comparison validity and experiment Evidence.

Segment differences must disclose:

- sample sizes;
- inclusion criteria;
- case-mix differences;
- missingness;
- observation window;
- whether the comparison was predeclared or exploratory.

## 11. Root-cause label

The user-facing phrase “корневая причина” is prohibited in v0.1 unless a future approved policy defines a sufficiently strong evidence standard.

Preferred wording:

- “наблюдаемая повторяющаяся боль”;
- “возможная причина”;
- “гипотеза для проверки”;
- “результат эксперимента поддерживает гипотезу”;
- “гипотеза не подтвердилась”.

## 12. Human review

Before an experiment, the owner or authorized manager may:

- accept hypothesis for testing;
- reject it with a bounded reason;
- request missing Evidence;
- select an alternative hypothesis;
- narrow the population;
- park the pain;
- stop analysis due to privacy, workload or policy risk.

Human acceptance does not convert the hypothesis into observed truth.

## 13. AI proposal boundary

A future AI may propose candidate mechanisms only from an allowlisted claim package containing:

- pain definition;
- observed aggregate;
- safe source summaries;
- known process map;
- contradictions;
- approved hypothesis catalogue.

The model may not:

- inspect unrestricted free text by default;
- identify or score employees;
- create a new canonical hypothesis code;
- upgrade causal level;
- choose the final priority;
- authorize an experiment;
- conceal alternatives or uncertainty.

## 14. Hypothesis invalidation

A hypothesis evaluation becomes invalid when:

- pain definition changes;
- source facts materially change;
- window or population changes;
- contradiction appears;
- mechanism policy is revoked;
- experiment outcome contradicts it;
- privacy/access scope changes;
- freshness expires for current decision use.

Historical records remain immutable and verifiable.

## 15. Example

### Observed

- 14 complete days;
- 22 waiting-for-customer episodes from 61 eligible orders;
- 10 episodes exceeded the registered threshold;
- contact-start timestamp missing in 3 cases;
- data-quality state `PARTIAL`.

### Hypothesis

> A standardized contact action immediately after diagnosis may reduce long waiting intervals.

Supporting Evidence:

- 7 of 10 long episodes had contact recorded more than one business day after diagnosis.

Alternative explanations:

- invalid contact details;
- customer-requested delay;
- delayed data entry.

Allowed status:

`PLAUSIBLE_MECHANISM`.

Forbidden status:

`PROVEN_ROOT_CAUSE`.

## 16. Stop criteria

Stop or redesign causal analysis when:

- hypotheses repeatedly become employee blame;
- no safe reversible intervention exists;
- sources cannot distinguish event time from entry time;
- contradictions exceed the approved threshold;
- experiment contamination cannot be controlled;
- the owner cannot understand observed versus inferred statements;
- optional AI increases misleading recommendation rate.

## 17. Honest maturity

- causal policy: designed;
- hypothesis catalogue: not implemented;
- contradiction evaluator: not implemented;
- causal experiments: none;
- AI causal assistance: not authorized;
- root causes proven: none.