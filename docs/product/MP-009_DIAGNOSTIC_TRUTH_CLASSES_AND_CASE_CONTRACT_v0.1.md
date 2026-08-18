# MP-009 AI Master — Diagnostic Truth Classes & Case Contract v0.1

**Status:** DESIGNED — NOT IMPLEMENTED  
**Date:** 2026-08-01

## 1. Purpose

Prevent symptoms, customer wording, technician assumptions, model suggestions and completed diagnosis from collapsing into one ambiguous “diagnosis” field.

## 2. Canonical distinctions

```text
customer report != observed test result
observed fact != hypothesis
hypothesis != technician-confirmed diagnosis
confirmed diagnosis != authorized work
authorized work != completed work
completed work != QC PASS
```

## 3. Truth classes

### `REPORTED`

A statement declared by the customer or employee but not independently verified.

Examples:

- “Touch sometimes stops working.”
- “The phone was never exposed to liquid.”

### `OBSERVED`

A directly recorded fact from an approved inspection, test, device state or system source.

Examples:

- display image is present;
- touch test failed in a defined area;
- model identifier was manually confirmed;
- required QC check passed.

### `DERIVED`

A deterministic conclusion from exact approved observed inputs.

Example:

- case is eligible for the registered non-invasive display/touch triage path.

### `HYPOTHESIS`

A bounded possible explanation requiring verification.

### `CONTRADICTION`

Material sources disagree.

### `UNKNOWN`

A required fact is missing, stale, inaccessible or not safely testable.

### `TECHNICIAN_CONFIRMED`

A technician records a diagnostic conclusion after reviewing Evidence. This remains scoped to the case and does not prove universal causation.

### `SIMULATED`

A what-if result or expected consequence under assumptions. It never authorizes work.

## 4. Diagnostic case contract

A future case must bind:

```text
caseId
caseSchemaVersion
organizationId
workspaceId
serviceOrderId
deviceIdentityVersion
caseFamilyCode
caseFamilyVersion
scopeStatus
hazardClass
reportedSymptoms[]
observedFacts[]
missingFacts[]
contradictions[]
hypothesisCandidates[]
selectedVerificationStepOrNull
verificationResultOrNull
technicianDecisionOrNull
workAuthorizationRefs[]
partsMovementRefs[]
qcProfileRefOrNull
qcResultRefs[]
evidenceRefs[]
sourceFreshness
createdAtTrusted
updatedAtTrusted
```

## 5. Case states

```text
DRAFT
→ INPUT_REVIEW
→ OUT_OF_SCOPE
  | BLOCKED_HAZARD
  | NEEDS_EVIDENCE
  | HYPOTHESES_READY
→ VERIFICATION_SELECTED
→ VERIFICATION_RECORDED
→ TECHNICIAN_DECISION_REQUIRED
→ DIAGNOSIS_CONFIRMED
  | DIAGNOSIS_REJECTED
  | ESCALATED
→ WORK_AUTHORIZATION_REQUIRED
→ WORK_IN_PROGRESS
→ WORK_COMPLETED
→ QC_REQUIRED
→ QC_PASS
  | QC_FAIL
→ CLOSED_WITH_EVIDENCE
```

No state implies a permission by itself. Existing server authorization remains authoritative.

## 6. Source binding

Every observed fact includes:

- fact code and definition version;
- value and unit where applicable;
- collection method;
- actor/authority;
- timestamp;
- device/order scope;
- source object or receipt;
- freshness;
- correction/revocation state.

Free-form prose cannot be the only source for a consequential observed fact.

## 7. Hypothesis contract

Each hypothesis includes:

```text
hypothesisCode
hypothesisVersion
statement
truthClass = HYPOTHESIS
supportingFactRefs[]
contradictingFactRefs[]
alternativeHypothesisCodes[]
requiredMissingFacts[]
hazardClass
allowedVerificationStepCodes[]
prohibitedActionCodes[]
sourceCatalogueRef
externalAIUsed
expiresAtOrInvalidationRule
```

## 8. Technician decision contract

The technician decision records:

- accepted/rejected/escalated;
- selected diagnosis code;
- reviewed hypotheses;
- decisive Evidence;
- unresolved uncertainty;
- actor and authority;
- timestamp;
- whether customer communication/price requires a separate approval;
- linked immutable receipt.

The decision must not overwrite prior hypotheses or test results.

## 9. Corrections

A correction creates:

- a new fact version or correction event;
- invalidation of dependent current evaluations;
- a new diagnostic case evaluation;
- preserved historical receipts.

Silent editing of completed diagnostic Evidence is prohibited.

## 10. Failure behavior

When the case is stale, contradictory or unsupported:

- do not force a hypothesis;
- show the exact blocker;
- disable AI-assisted next step;
- allow safe manual escalation;
- preserve current service-order safety controls;
- do not infer a diagnosis from customer text alone.

## 11. Relationship to work and QC

Diagnostic case output may propose a work/QC template, but:

- work remains a separate existing command;
- part reservation/consumption remains MP-008/Core-owned;
- price/terms remain order/consent-owned;
- QC remains an independent gate;
- failed QC reopens review without rewriting the original diagnostic history.

## 12. Honest maturity

- truth classes: designed;
- case schema: designed;
- persistence: not decided;
- state machine: not implemented;
- diagnostic receipts: not implemented;
- runtime Evidence: none.