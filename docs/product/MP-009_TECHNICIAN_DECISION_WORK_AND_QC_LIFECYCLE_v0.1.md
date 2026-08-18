# MP-009 AI Master — Technician Decision, Work & QC Lifecycle v0.1

**Status:** DESIGNED — NOT IMPLEMENTED  
**Date:** 2026-08-01

## 1. Purpose

Keep AI assistance separate from technician responsibility, work authorization, inventory movement, customer agreement and independent QC.

## 2. Canonical lifecycle

```text
verified facts
→ hypotheses
→ safe verification
→ technician decision
→ customer/work authorization where required
→ work execution
→ parts movement
→ technician completion
→ independent QC
→ Evidence-backed closure
```

No earlier phase implies completion of a later phase.

## 3. Technician decision outcomes

- `ACCEPT_HYPOTHESIS_AS_DIAGNOSTIC_DIRECTION`;
- `REJECT_HYPOTHESIS`;
- `REQUEST_ANOTHER_APPROVED_CHECK`;
- `NEEDS_SPECIALIST_ESCALATION`;
- `INSUFFICIENT_EVIDENCE`;
- `DEVICE_IDENTITY_UNRESOLVED`;
- `HAZARD_STOP`;
- `CUSTOMER_DECISION_REQUIRED`.

A technician may accept a direction without asserting absolute root cause.

## 4. Decision receipt

The immutable receipt binds:

- exact case/hypothesis/evaluation IDs;
- decisive observed facts;
- technician identity/authority;
- uncertainty statement;
- chosen diagnosis/direction code;
- rejected alternatives where relevant;
- next required authorization;
- timestamp;
- external AI use;
- source catalogue versions.

## 5. Work authorization boundary

AI Master cannot authorize work.

A work command uses existing Core controls for:

- technician role/grant;
- customer approval/consent;
- agreed price mode and material changes;
- part availability/reservation;
- order version/idempotency;
- hazard/workspace requirements;
- owner/manager approval when required.

## 6. Work template suggestion

After technician decision, AI Master may suggest an approved template containing:

- work code;
- required tools/skills;
- expected part family;
- required customer re-consent triggers;
- mandatory QC profile;
- safety prerequisites;
- documentation requirements.

The technician selects/edits within permission. The system does not silently finalize terms.

## 7. Inventory boundary

MP-008/Core owns:

- availability;
- reservation;
- consumption;
- release;
- physical return;
- quarantine;
- reconciliation.

AI Master may reference inventory facts but cannot mutate them without an explicit existing command and authorized human action.

## 8. Work execution Evidence

The work record may include:

- work started/completed timestamps;
- technician;
- approved work code/version;
- part movement receipts;
- deviations;
- unexpected findings;
- hazard/escalation events;
- customer re-approval receipts;
- completion declaration.

Completion declaration is not QC PASS.

## 9. QC lifecycle

```text
QC_REQUIRED
→ QC_IN_PROGRESS
→ QC_PASS
  | QC_FAIL
  | QC_BLOCKED
```

Rules:

- QC profile is derived from device/work/part context;
- required checks cannot be hidden by AI;
- `not applicable` requires approved reason where protected;
- prior failures remain in history;
- failed QC blocks issue;
- retest creates new Evidence;
- AI may explain a failed check but cannot mark PASS.

## 10. Separation of duties

Where team size permits, protected repairs should support an independent QC actor.

For a small two-person service where separation is impossible:

- self-QC remains explicit;
- owner sees reduced assurance level;
- protected check evidence is required;
- the system does not pretend independence.

## 11. Reopen and repeat repair

A repeat symptom or warranty return:

- links to the original case/work/QC;
- does not silently erase the first conclusion;
- creates a new case with relationship code;
- contributes to diagnostic quality metrics only after classification;
- may invalidate/promote hypothesis catalogue Evidence through review, never automatic self-training.

## 12. Customer communication boundary

AI Master cannot directly promise:

- diagnosis certainty;
- final price;
- finish time;
- warranty acceptance;
- data preservation;
- successful outcome.

Customer-facing wording uses a separately approved human-reviewed projection and consent/communication policy.

## 13. Unknown-result behavior

For any work, part or QC mutation with lost response:

- preserve the same idempotency identity;
- show ambiguous result;
- reconcile before retry;
- never duplicate part consumption, work completion or QC receipt.

## 14. Learning feedback

After closure, future learning input may include:

- technician-confirmed direction;
- work performed;
- QC outcome;
- repeat repair/warranty classification;
- technician disagreement with suggestion;
- time and step count;
- safety stops.

Feedback is reviewed and scoped. Click acceptance alone is not proof of correctness.

## 15. Stop criteria

Stop integration when:

- AI suggestion directly triggers work;
- technician confirmation becomes a meaningless click;
- QC can be bypassed;
- customer terms change silently;
- part movements duplicate;
- unresolved uncertainty is hidden;
- employee ranking pressures fast unsafe decisions;
- repeat-repair rate worsens.

## 16. Honest maturity

- lifecycle: designed;
- work/QC template integration: not implemented;
- separation-of-duties policy: not tested;
- receipts: not implemented;
- runtime/physical Evidence: none.