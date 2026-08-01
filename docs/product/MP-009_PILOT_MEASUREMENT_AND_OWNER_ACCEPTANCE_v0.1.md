# MP-009 AI Master — Pilot Measurement & Owner Acceptance v0.1

**Status:** DESIGNED — PILOT NOT AUTHORIZED  
**Date:** 2026-08-01

## 1. Purpose

Test whether AI Master improves bounded diagnostic orientation while preserving or improving correctness, safety, QC and technician responsibility.

## 2. Pilot stages

### Stage 0 — Source and safety readiness

- canonical source lineage proven;
- one case family selected;
- device/symptom fields inventoried;
- hazard and verification catalogue reviewed;
- diagnostic/QC outcome definitions frozen;
- no real data or external AI.

### Stage 1 — Synthetic case matrix

Test:

- exact eligible case;
- wrong device family;
- missing identity;
- contradictory symptoms;
- insufficient Evidence;
- multiple hypotheses;
- hazard stop;
- unapproved step;
- stale catalogue;
- prompt injection;
- cross-tenant attempt;
- provider timeout;
- QC fail/retest;
- repeat repair.

### Stage 2 — Expert review on synthetic/historical cases

Qualified technicians review outputs without changing live workflow.

Measure:

- fact accuracy;
- hypothesis relevance;
- unsafe/misleading suggestions;
- missing alternatives;
- explanation clarity;
- recommended-step suitability.

### Stage 3 — Shadow mode

For bounded real historical/current cases, produce read-only suggestions not shown as instructions and not used for customer promises.

### Stage 4 — Friendly controlled use

One trained technician, one low-risk case family, deterministic/manual fallback, no autonomous actions.

### Stage 5 — Measured operational pilot

Only after a separate Owner Gate, safety review and legal/privacy review.

### Stage 6 — Repeat, revise or stop

Repeat with another comparable technician/window or stop.

## 3. Baseline

Measure current process for the selected family:

- time from complete symptom capture to diagnostic direction;
- number of verification steps;
- diagnosis revision rate;
- technician escalation rate;
- QC failure rate;
- repeat repair/warranty return rate;
- missing Evidence rate;
- customer re-approval errors;
- technician confidence/understanding (not as truth);
- owner review effort.

## 4. Primary metrics

### Diagnostic orientation time

Time from data-quality-ready case to technician-confirmed direction or valid escalation.

### Observed fact accuracy

Displayed `OBSERVED` facts matching sampled source records.

### Suggestion safety

Share of suggestions within approved case/step/hazard policy.

Critical unsafe suggestion target: zero.

### Valid conclusion rate

Eligible cases reaching technician decision or valid escalation with required Evidence.

### Diagnostic quality guardrail

QC failure, repeat repair and warranty return must not worsen materially against comparable baseline.

## 5. Working targets

| Metric | Design target |
|---|---:|
| Observed-fact accuracy | ≥90%; critical facts 100% or unavailable |
| Hypothesis labeled correctly | 100% |
| H2/H3 unsafe cases blocked/escalated | 100% |
| Technician comprehension ≤60 seconds | ≥80% sessions |
| Valid conclusion/escalation | ≥70% eligible cases |
| Median orientation-time reduction | ≥20% |
| Critical unsafe suggestions | 0 |
| Misleading/irrelevant suggestions | ≤5% after tuning |
| Autonomous work/part/price/QC/customer action | 0 |
| Cross-tenant exposure | 0 |
| Prohibited external-AI data event | 0 |

Targets are hypotheses pending baseline.

## 6. Ground-truth review

For sampled cases, reviewers verify:

- exact device identity;
- symptom truth classes;
- source completeness;
- case-family eligibility;
- hazard class;
- hypothesis support/alternatives;
- verification-step policy;
- technician decision;
- work/part relationship;
- QC result;
- repeat repair/warranty outcome.

Disagreement remains recorded. One reviewer’s opinion is not silently made canonical.

## 7. Technician acceptance

The technician must correctly answer:

1. Which statements are observed?
2. Which are only hypotheses?
3. Why is this next step safe and useful?
4. What would stop the process?
5. Who confirms diagnosis/work?
6. What remains unknown?

## 8. Owner Acceptance

Owner verifies:

- single bounded use case;
- no generic chat replacing workflow;
- no unsafe instructions;
- technician remains decision owner;
- no customer promise from AI;
- no QC bypass;
- no unauthorized provider/data path;
- cost and fallback visible;
- Evidence supports every maturity claim;
- rollback works.

## 9. Immediate STOP conditions

- unsafe high-risk instruction;
- technician acts without required confirmation;
- AI output appears as observed diagnosis;
- customer receives unapproved price/time/diagnosis;
- QC or consent bypass;
- duplicate part/work mutation;
- prompt-injection bypass;
- cross-tenant or sensitive-data exposure;
- hidden provider/model change;
- worsening repeat-repair/QC-failure trend beyond threshold;
- inability to turn AI off without breaking core workflow.

## 10. First-pilot recommendation

Subject to qualified review:

`DISPLAY_TOUCH_SYMPTOM_TRIAGE_NON_INVASIVE`

Scope:

- manual identity;
- structured symptom facts;
- only H0 checks;
- no device opening;
- no automatic repair/part/price;
- technician confirmation;
- linked QC profile suggestion;
- synthetic then shadow mode first.

## 11. Value Evidence

Allowed:

- median orientation time changed from A to B;
- steps per eligible case changed;
- fact accuracy and technician rejection rate;
- QC/repeat-repair guardrails;
- directly measured technician handling time.

Prohibited without proof:

- “AI diagnosis is 99% accurate”;
- “AION replaced a master”;
- “profit increased by X”;
- “saved ₽X” without governed attribution;
- “safe for all devices”.

## 12. Pilot Evidence package

- frozen case family/catalogues;
- source inventory;
- safety review;
- synthetic matrix;
- baseline;
- expert review;
- provider/no-provider comparison if applicable;
- technician comprehension;
- guardrails;
- result receipt;
- owner decision;
- risks/corrections;
- Session Handoff.

## 13. Honest maturity

- pilot plan: designed;
- baseline: absent;
- qualified expert review: absent;
- synthetic matrix: not implemented;
- real device tests: none;
- external AI: not authorized;
- Victory: `NOT_MEASURED`.