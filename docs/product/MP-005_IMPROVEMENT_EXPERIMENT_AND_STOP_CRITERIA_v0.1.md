# MP-005 AION Pain Scanner — Improvement Experiment & Stop Criteria v0.1

**Status:** DESIGNED — NOT IMPLEMENTED  
**Date:** 2026-08-01

## 1. Purpose

Turn one selected recurring pain into one reversible, measurable improvement experiment without allowing recommendation theater, uncontrolled process changes or retrospective success criteria.

## 2. Experiment principle

```text
one selected pain
→ one causal hypothesis
→ one primary intervention
→ one primary outcome
→ bounded guardrails
→ predeclared decision
```

The first version does not optimize several variables simultaneously.

## 3. Experiment contract

Every proposed experiment requires:

```text
experimentId
experimentDefinitionVersion
painAssessmentId
hypothesisId
organization/workspace scope
eligiblePopulationDefinition
baselineWindow
interventionWindow
primaryInterventionCode
interventionOwnerRole
startGate
primaryOutcomeDefinition
targetThreshold
guardrails[]
minimumSample
exclusions[]
contaminationRules[]
stopCriteria[]
rollbackProcedure
measurementReceiptSchema
ownerDecision
```

The contract is frozen before intervention begins.

## 4. Eligible interventions

A v0.1 intervention must be:

- small;
- reversible;
- low-cost;
- understandable by employees;
- compatible with existing authorization and safety rules;
- measurable through existing or minimally added events;
- limited to one primary process change.

Examples:

- standard first-contact step after diagnosis;
- one required waiting reason and exit condition;
- a simplified express intake checklist;
- one preflight check for a common part before promise confirmation;
- one customer status message at a defined stage;
- one print/profile readiness check before document request;
- one reconciliation step for unknown mutation result.

## 5. Prohibited interventions

- weakening QC;
- bypassing debt authorization;
- hiding cases or corrections;
- reducing required consent;
- using an employee punishment policy;
- changing multiple major workflows at once;
- external AI access to real data without approved boundary;
- automatic price or margin changes;
- irreversible data migration;
- deploying a new microservice merely for the experiment;
- silently changing event definitions during measurement.

## 6. Baseline

Baseline must be complete and comparable.

It may be:

- a defined number of complete days;
- a defined number of eligible completed orders;
- alternating comparable cohorts;
- phased rollout across comparable shifts/locations when volume permits.

Baseline records:

- primary outcome;
- sample size;
- missing rate;
- case mix;
- relevant workload;
- guardrail metrics;
- recording-behavior stability;
- known external changes.

## 7. Primary outcome

Only one primary outcome determines experiment success.

Examples:

- share of waiting episodes beyond threshold;
- status inquiries per 100 active orders;
- share of eligible express repairs recorded before work start;
- material intake-correction rate;
- median part-related blocked duration;
- repeat repair rate in a defined eligible cohort.

Secondary metrics inform interpretation but cannot replace a failed primary outcome after the fact.

## 8. Material threshold

The target must be set before intervention and include:

- direction;
- absolute or relative improvement;
- minimum material effect;
- sample requirement;
- confidence/variation interpretation appropriate to volume;
- guardrail requirements.

For low-volume pilots, use a practical material threshold and repeated windows rather than pretending statistical certainty.

## 9. Guardrails

Typical guardrails:

- customer complaints;
- wrong or premature promises;
- employee handling time;
- process bypass rate;
- data-completeness rate;
- QC failures;
- consent errors;
- money/stock exceptions;
- duplicate operations;
- privacy incidents;
- workload shifted to another stage;
- broken MP-001 QR or MP-002 intake flow.

A primary improvement with a critical guardrail failure is not Victory.

## 10. Experiment states

```text
DRAFT
→ AWAITING_OWNER_DECISION
→ APPROVED_NOT_STARTED
→ BASELINE_COMPLETE
→ ACTIVE
→ PAUSED
→ MEASUREMENT_PENDING
→ CONCLUDED_SUPPORTED
  | CONCLUDED_NOT_SUPPORTED
  | CONCLUDED_INCONCLUSIVE
  | STOPPED_GUARDRAIL
  | CANCELLED
```

Every transition requires a reason and actor/authority receipt.

## 11. Owner decision

The owner or explicitly authorized manager may:

- approve;
- reject;
- request revision;
- park;
- stop;
- accept conclusion;
- authorize bounded continuation or rollback.

Pain Scanner may recommend but cannot start or scale an experiment autonomously.

## 12. Employee experience

Before start, affected employees receive:

- plain-language goal;
- exact process change;
- what is not changing;
- duration;
- how to report problems;
- assurance that the experiment is not individual performance surveillance;
- rollback path.

No secret test of employee behavior.

## 13. Contamination

The measurement contract must identify:

- concurrent product changes;
- price changes;
- staffing changes;
- unusual demand;
- holidays;
- training events;
- data-source changes;
- downtime;
- policy changes;
- customer mix changes.

Material contamination may produce `CONCLUDED_INCONCLUSIVE` rather than a forced answer.

## 14. Stop criteria

Stop immediately when:

- privacy or cross-tenant incident occurs;
- safety/QC/consent/debt guard is bypassed;
- duplicate or lost business mutation occurs;
- employee burden exceeds the approved limit;
- customer harm or serious confusion appears;
- data collection becomes unreliable;
- the intervention cannot be rolled back;
- the primary definition changes mid-experiment;
- the experiment is used for punishment.

Stop or revise when:

- no measurable movement after the minimum valid window;
- primary outcome improves below the material threshold;
- guardrail degradation offsets the benefit;
- the intervention is not followed consistently;
- the hypothesis is contradicted;
- a simpler intervention becomes available.

## 15. Decision rules

### `SUPPORTED`

Primary threshold achieved, minimum sample passed and all critical guardrails passed.

### `NOT_SUPPORTED`

Valid measurement completed but threshold not achieved or direction worsened.

### `INCONCLUSIVE`

Missing data, contamination, low sample or unstable implementation prevents conclusion.

### `STOPPED_GUARDRAIL`

A critical guardrail failed.

Success is never inferred from employee opinion alone; opinion is contextual Evidence.

## 16. Measurement receipt

A future immutable result receipt binds:

```text
experimentId
frozenContractSha256
baselineSnapshotIdentity
interventionSnapshotIdentity
populationDefinitionVersion
primaryOutcomeDefinitionVersion
baselineValue
interventionValue
absoluteChange
relativeChangeOrNull
sampleCounts
missingRates
guardrailResults
contaminationCodes
conclusion
ownerAcceptance
recordedAtTrusted
```

Money/time impact is included only when directly measured under a registered method.

## 17. Scaling

A supported first experiment does not authorize broad scaling.

Scale gate requires:

- repeated result or strong contextual justification;
- stable employee workflow;
- no critical guardrail issue;
- clear cost/benefit;
- rollback retained;
- updated documentation and Evidence Register;
- Owner Gate.

## 18. Example experiment

### Pain

`WAITING_FOR_CUSTOMER_STAGNATION_PATTERN`

### Hypothesis

Standard contact immediately after diagnosis reduces long waiting episodes.

### Intervention

One contact task is created and completed before moving to waiting state.

### Primary outcome

Share of eligible waiting episodes exceeding 24 business hours.

### Baseline

14 complete days or minimum 30 eligible episodes.

### Target

At least 20% relative reduction, subject to pilot calibration.

### Guardrails

- employee median handling time increase ≤ approved threshold;
- no increase in complaints;
- no false contact-complete state;
- missing contact timestamps ≤ approved rate.

### Rollback

Disable the experimental task requirement and retain Evidence.

This example is designed, not approved for live use.

## 19. Honest maturity

- experiment policy: designed;
- experiment registry: not implemented;
- immutable receipts: not implemented;
- experiment execution: none;
- result: none;
- scaling proof: none.