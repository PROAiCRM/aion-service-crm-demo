# MP-009 AI Master — Hypothesis Generation & Evidence Sufficiency Policy v0.1

**Status:** DESIGNED — NOT IMPLEMENTED  
**Date:** 2026-08-01

## 1. Purpose

Define how bounded diagnostic hypotheses may be generated, ranked and withdrawn without presenting model confidence as truth.

## 2. Core rule

> AI Master may propose possible explanations. Only verified Evidence and technician judgment may create a technician-confirmed diagnosis.

## 3. Hypothesis sources

Allowed sources:

- registered deterministic rules;
- approved diagnostic catalogue;
- exact device compatibility catalogue;
- verified symptom/test facts;
- approved service bulletins or manufacturer documentation;
- technician-entered candidate with explicit authorship;
- optional external AI summary over an allowlisted claim package.

Unrestricted internet prose, customer free text and model memory are not canonical sources.

## 4. Exact hypothesis inputs

Each hypothesis definition declares:

- case family and version;
- minimum device identity level;
- required observed/reported fact codes;
- prohibited contradictions;
- freshness requirements;
- hazard class;
- alternative hypotheses;
- allowed verification steps;
- invalidation conditions;
- supporting source references.

Missing input is never false and never receives a hidden default.

## 5. Evidence sufficiency states

### `INSUFFICIENT_FOR_HYPOTHESIS`

Do not show a technical hypothesis. Show the missing safe data step.

### `SUFFICIENT_FOR_CANDIDATES`

One or more hypotheses may be shown without ranking as a diagnosis.

### `SUFFICIENT_FOR_VERIFICATION_STEP`

A safe approved check can discriminate between candidates.

### `SUFFICIENT_FOR_TECHNICIAN_DECISION`

Recorded verification Evidence supports a technician decision.

### `SUFFICIENT_FOR_WORK_TEMPLATE`

Technician-confirmed diagnosis plus required authorization allows a work/QC template suggestion.

### `INSUFFICIENT_DUE_TO_HAZARD`

Stop and escalate.

## 6. Candidate ordering

Ordering may use transparent bounded factors:

- match with observed facts;
- contradiction count;
- device applicability;
- discriminating safe test availability;
- prevalence from approved local Evidence when sample quality is valid;
- cost/risks of the next check;
- urgency/safety.

The UI must not show an opaque “93% diagnosis confidence” in v0.1.

## 7. Alternative hypotheses

At least one alternative is retained whenever multiple plausible explanations exist.

The primary card must show:

- leading candidate;
- why it is only a hypothesis;
- key alternative;
- decisive missing Evidence;
- next safe test;
- hazard boundary.

## 8. Contradiction behavior

A material contradiction:

- blocks strong ordering;
- remains visible;
- may create `NEEDS_EVIDENCE`;
- cannot be removed by AI summary;
- requires technician reconciliation or escalation.

## 9. External AI output

A model may return only structured candidate output from an allowlisted schema:

```text
candidateCode
summary
supportingClaimRefs[]
contradictingClaimRefs[]
missingClaimCodes[]
alternativeCandidateCodes[]
proposedApprovedVerificationStepCodeOrNull
```

The server validates every code against the active catalogue. Unknown codes are rejected.

## 10. No model-created authority

A model cannot:

- create a new canonical diagnosis/work code;
- change hazard class;
- declare a test safe;
- authorize work/disassembly/part use;
- set price or completion time;
- choose a customer message;
- mark QC PASS;
- upgrade `HYPOTHESIS` to `TECHNICIAN_CONFIRMED`;
- suppress contradiction or missing Evidence.

## 11. Catalogue lifecycle

Hypothesis definitions are immutable and versioned.

- corrections create a new version;
- historical case receipts retain old identity;
- expired/revoked definitions cannot be used for current decisions;
- stale source bulletin invalidates dependent evaluation;
- one hypothesis code has one owner definition per catalogue version.

## 12. Local learning boundary

Technician outcomes may improve future ranking only through a reviewed Evidence pipeline:

- de-identified/tenant-scoped aggregate where appropriate;
- confirmed diagnosis and QC outcome;
- repeat-repair/warranty outcome;
- correction/dispute history;
- minimum sample;
- no silent self-training from clicks;
- no promotion of one technician’s habit into universal truth.

## 13. Retrieval boundary

Future retrieval-augmented assistance may use only approved documents with:

- source authority;
- version/date;
- device applicability;
- jurisdiction/safety scope;
- retention and access policy;
- citation to exact section;
- revocation/invalidation.

Retrieved text is evidence context, not a command.

## 14. Stop criteria

Stop hypothesis assistance when:

- unsupported suggestions exceed threshold;
- technicians cannot see why candidates were shown;
- model output introduces unknown codes;
- source catalogue is stale;
- contradictions are hidden;
- safe discriminating step is unavailable;
- case requires high-risk specialist process;
- simple deterministic rules outperform external AI.

## 15. Honest maturity

- policy: designed;
- hypothesis catalogue: not built;
- ranking: not implemented;
- external model schema: not implemented;
- calibration: none;
- diagnostic accuracy Evidence: none.