# MP-005 AION Pain Scanner — Pilot Measurement & Owner Acceptance v0.1

**Status:** DESIGNED — PILOT NOT AUTHORIZED  
**Date:** 2026-08-01

## 1. Purpose

Define how to test whether Pain Scanner helps an owner identify and reduce a real recurring pain without misleading recommendations, surveillance or unmeasured value claims.

## 2. Pilot research questions

1. Can the product identify a recurring pain accurately from existing operational data?
2. Can the owner understand the pain, Evidence and limitations within 60 seconds?
3. Does the proposed experiment address an operationally meaningful mechanism?
4. Can the experiment reach a valid conclusion?
5. Does the intervention materially reduce the selected pain without harming guardrails?
6. Is the product more useful than a simple manual weekly review?

## 3. Pilot stages

### Stage 0 — Source readiness

- canonical source lineage established;
- enabled pain-family field inventory complete;
- definitions and thresholds reviewed;
- synthetic tenant isolation and privacy gates designed;
- no real data used.

### Stage 1 — Synthetic pattern matrix

For every enabled pain family test:

- clear positive pattern;
- no pattern;
- insufficient sample;
- missing denominator;
- stale data;
- duplicate events;
- contradiction;
- cross-tenant attempt;
- competing pain;
- active experiment;
- privacy-suppressed segment.

### Stage 2 — Historical shadow mode

Use a bounded historical operational window without notifying staff or changing workflow.

The product produces candidate assessments for owner review only.

Measure:

- definition accuracy;
- misleading recommendation rate;
- data gaps;
- owner relevance;
- comparison with manual review.

### Stage 3 — Owner comprehension rehearsal

The owner answers fixed questions:

1. What is the selected pain?
2. What is numerator/denominator?
3. What is observed versus inferred?
4. Why was this pain selected?
5. What is the proposed experiment?
6. What would make the experiment stop?

### Stage 4 — Friendly controlled experiment

One low-risk pain family, one primary intervention and one bounded team/location/window.

### Stage 5 — Measured operational pilot

Only after source, privacy, comprehension and experiment-rehearsal gates pass.

### Stage 6 — Repeat or stop

Repeat in a comparable second window/cohort, revise, park or stop.

## 4. Baseline metrics for Pain Scanner itself

Before judging recommendations, measure current manual process:

- time owner spends identifying the main recurring problem;
- screens/reports opened;
- employee questions required;
- consistency of owner conclusions across repeated reviews;
- number of problems acted upon without baseline;
- share of improvement actions with measured result;
- time from noticing a problem to deciding a test.

## 5. Primary product metrics

### Recommendation accuracy

Share of displayed observed pain statements that match their approved definition and sampled source objects.

Working target: at least 90% in friendly pilot; 100% for critical trust/safety claims or explicit unavailable state.

### Evidence-confirmed usefulness

Share of recommendations the owner accepts as operationally meaningful after viewing Evidence and limitations.

Working target: at least 70% after tuning.

### Misleading recommendation rate

Recommendations that materially overstate burden, causation, freshness, financial effect or actionability.

Working target: at most 10% after tuning; any critical privacy/causation deception is immediate STOP.

### Time to understanding

Time for owner to answer all six comprehension questions correctly.

Working target: median ≤60 seconds, with at least 80% correct sessions.

### Valid experiment conclusion rate

Accepted experiments ending `SUPPORTED`, `NOT_SUPPORTED` or valid `STOPPED_GUARDRAIL`, rather than inconclusive due to design/data failure.

Working target: at least 70%.

### Pain improvement

The predeclared primary outcome for the selected pain.

No universal target. Each experiment defines its material threshold.

## 6. Secondary metrics

- recommendation rejection reasons;
- owner override rate;
- data-source missingness;
- priority churn;
- experiment start latency;
- employee handling-time change;
- staff correction/dispute rate;
- privacy suppression count;
- false-positive pattern rate;
- number of simultaneous experiments;
- repeatability of supported results;
- measured time/revenue range only when directly evidenced.

## 7. Ground-truth review

For each sampled assessment, reviewers verify:

- eligible population;
- numerator;
- denominator;
- exclusions;
- deduplication;
- source freshness;
- segment comparability;
- truth classes;
- contradictions;
- priority reason;
- experiment readiness.

Reviewers may be owner plus one authorized operational reviewer. Disagreement remains recorded.

## 8. Owner Acceptance checklist

### Product clarity

- one primary pain is visible;
- observed and inferred statements are clearly separated;
- numerator/denominator and window are understandable;
- missing data and contradictions are visible;
- competing pain explanation is understandable.

### Operational relevance

- the pain matches real business experience;
- the recommendation is not obvious noise;
- intervention is realistic;
- employee workload is acceptable;
- rollback is clear.

### Safety

- no employee ranking/blame;
- no unnecessary PII;
- no cross-tenant data;
- no autonomous action;
- no bypass of QC, debt, consent or authorization;
- external AI not required.

### Measurement

- baseline is valid;
- target frozen before start;
- one primary change;
- guardrails declared;
- result receipt exists;
- failure is accepted honestly.

## 9. Owner decision outcomes

- `ACCEPT_FOR_EXPERIMENT`;
- `REQUEST_MORE_EVIDENCE`;
- `SELECT_ALTERNATIVE_HYPOTHESIS`;
- `PARK_LOW_PRIORITY`;
- `REJECT_NOT_MEANINGFUL`;
- `STOP_PRIVACY_OR_WORKLOAD`;
- `ACCEPT_SUPPORTED_RESULT`;
- `ACCEPT_NOT_SUPPORTED_RESULT`;
- `REPEAT_IN_COMPARABLE_WINDOW`;
- `STOP_PRODUCT_DIRECTION`.

## 10. Immediate STOP conditions

- cross-tenant exposure;
- customer/employee sensitive data in aggregate Evidence or logs;
- employee accusation or ranking presented as fact;
- causal claim without disclosed hypothesis status;
- exact monetary recovery claim without governed Evidence;
- autonomous workflow mutation;
- experiment bypasses safety/authorization;
- hidden side effect on read;
- material source contradiction hidden from owner;
- result criteria changed after viewing outcome.

## 11. Example first pilot candidates

Candidate A: `STATUS_INQUIRY_LOAD_PATTERN`

- depends on reliable inquiry classification;
- potential experiment: MP-001 QR status for a bounded cohort;
- primary outcome: routine status inquiries per 100 active orders;
- dependency risk: broken QR inquiries may replace ordinary status inquiries.

Candidate B: `LATE_OR_BYPASSED_INTAKE_PATTERN`

- depends on reliable work-start Evidence;
- potential experiment: MP-002 Express Intake;
- primary outcome: eligible repairs registered before work starts;
- guardrail: intake completeness and consent.

Candidate C: `WAITING_FOR_CUSTOMER_STAGNATION_PATTERN`

- potential low-cost process experiment;
- requires explicit waiting reasons and contact timestamps.

The final first candidate is selected only after source inventory and baseline.

## 12. Value Evidence

Allowed value statements:

- “median waiting time decreased by X under the registered method”;
- “routine status inquiries decreased from A to B per 100 active orders”;
- “owner review time decreased from A to B minutes”;
- “directly measured handling time changed by X minutes per eligible order”.

Prohibited without proof:

- “AION earned ₽X”;
- “profit increased by X%”;
- “employee efficiency increased by X%”;
- “root cause eliminated”.

## 13. Pilot duration

Duration is pain-family and volume dependent. It must be based on minimum eligible observations, not a marketing calendar.

The pilot may stop early for a critical guardrail, but not declare success early merely because initial results look positive.

## 14. Evidence package

Future pilot package includes:

- frozen definitions;
- source inventory;
- synthetic matrix results;
- baseline receipt;
- owner comprehension result;
- experiment contract;
- intervention adherence;
- guardrail results;
- conclusion receipt;
- owner decision;
- risks and corrections;
- Session Handoff.

## 15. Honest maturity

- pilot plan: designed;
- baseline: not measured;
- source readiness: not proven;
- synthetic matrix: not implemented;
- owner acceptance: not performed;
- operational pilot: not authorized;
- product Victory: `NOT_MEASURED`.