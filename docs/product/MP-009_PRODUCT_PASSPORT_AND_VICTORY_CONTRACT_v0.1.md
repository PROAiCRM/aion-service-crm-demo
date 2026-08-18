# MP-009 AI Master — Product Passport & Victory Contract v0.1

**Product ID:** `MP-009`  
**Status:** DESIGNED — NOT IMPLEMENTED  
**Victory:** `NOT_MEASURED`  
**Date:** 2026-08-01  
**Canonical tracking:** public Issue #23

## 1. Product statement

AI Master helps a technician move from verified device and symptom facts to:

1. bounded diagnostic hypotheses;
2. one safe verification step;
3. a technician-confirmed conclusion;
4. a recorded work decision;
5. QC and Evidence.

It is not an autonomous repair agent and not a replacement for technician judgment.

## 2. Customer and business pain

Service centers repeatedly face:

- incomplete symptom descriptions;
- wrong device-model selection;
- diagnosis written as a guess;
- repeated diagnostic steps;
- missing explanation for why a repair was chosen;
- inconsistent QC after similar work;
- knowledge held only by one experienced technician;
- unsafe or overconfident AI advice;
- unverified price/time promises based on a guessed diagnosis.

The business needs repeatable reasoning without turning uncertain model output into operational truth.

## 3. Product victory

### Technician victory

Within a bounded case family, the technician can:

- see verified device/symptom facts;
- distinguish observed fact from hypothesis;
- choose one safe verification step;
- record the result;
- accept, reject or revise the hypothesis;
- preserve Evidence and QC requirements;
- complete the process faster without lower diagnostic quality.

### Owner victory

The owner can verify that:

- AI suggestions never bypass technician confirmation;
- unsafe instructions are blocked;
- diagnosis, work, parts and QC remain traceable;
- repeated errors reduce without creating hidden liability;
- external AI access is bounded and removable.

## 4. First-Value Moment

A technician opens one repair and sees:

> **Observed:** exact device identity is partially verified; customer reports intermittent touch failure; no liquid-contact evidence recorded; screen image remains visible.  
> **Hypothesis:** display assembly or connector path may be involved.  
> **Next safe step:** run the approved non-invasive touch-area test and record the result.  
> **Boundary:** no disassembly, heat, battery handling or price promise is authorized by this suggestion.

The card also shows:

- source facts;
- missing facts;
- contradiction state;
- hazard class;
- alternative hypotheses;
- who must confirm;
- expiry/freshness;
- QC template that would apply if work is later approved.

## 5. MVP scope

The first MVP is limited to one low-risk, non-invasive diagnostic family chosen after source review.

Recommended first candidate:

`DISPLAY_TOUCH_SYMPTOM_TRIAGE_NON_INVASIVE`

Possible v0.1 capabilities:

- manual device identity confirmation;
- structured symptom capture;
- contradiction/missing-data checks;
- deterministic eligibility;
- bounded hypothesis catalogue;
- one approved non-invasive verification step;
- technician result capture;
- technician-confirmed diagnostic conclusion;
- linked work/QC template suggestion;
- read-only source-linked explanation;
- full fallback without external AI.

## 6. Explicit non-goals

MP-009 v0.1 does not include:

- autonomous diagnosis;
- autonomous repair execution;
- robot control;
- board-level repair instructions;
- high-voltage or mains-powered equipment;
- lithium-cell opening, puncture, heating or recovery procedures;
- microsoldering guidance;
- chemical handling;
- biometric/device-data extraction;
- password/passcode handling;
- automatic customer price, warranty or completion promise;
- automatic part ordering;
- automatic work authorization;
- a generic expert-system platform;
- an unrestricted web-search agent;
- model fine-tuning on customer data;
- employee ranking by diagnosis speed;
- use of AI output as legal, warranty or disciplinary proof.

## 7. Product architecture direction

```text
canonical device/order facts
→ data-quality and hazard gate
→ registered diagnostic case
→ bounded hypothesis candidates
→ evidence sufficiency gate
→ one safe verification step
→ technician decision
→ work/parts command through existing Core
→ QC
→ Evidence and learning receipt
```

AI Master does not create a second service-order, device, inventory or QC truth.

## 8. Human and AI boundary

### System responsibilities

- validate exact required inputs;
- classify truth and freshness;
- apply hazard/default-deny rules;
- provide registered hypotheses and safe steps;
- preserve alternatives and contradictions;
- require technician confirmation;
- link existing command/QC boundaries;
- record immutable receipts.

### Technician responsibilities

- verify device and symptoms;
- decide whether the case is in scope;
- perform only authorized safe checks;
- record the real result;
- accept/reject/revise diagnosis;
- choose and execute work through existing permissions;
- complete QC;
- stop when hazard or uncertainty exceeds policy.

### Optional external AI responsibilities

A model may summarize bounded facts or rank already-approved hypotheses only when:

- deterministic eligibility already passed;
- prohibited data is excluded;
- output is `INFERRED`;
- sources and limitations are visible;
- the model has no mutation authority;
- a no-AI fallback exists.

## 9. Victory Contract

### Primary outcome

For one approved case family, AI Master reduces median time from complete symptom capture to technician-confirmed diagnostic direction while diagnostic correctness and safety guardrails do not worsen.

### Working pilot targets

Hypotheses pending baseline:

- at least 90% of displayed observed facts match sampled source records;
- 100% of model/system suggestions are labeled hypothesis, never observed diagnosis;
- 100% of prohibited/high-risk cases are blocked or escalated;
- technician comprehension within 60 seconds in at least 80% of observed sessions;
- at least 70% of eligible cases reach a valid technician conclusion without missing required Evidence;
- at least 20% reduction in median bounded diagnostic-orientation time for the selected family;
- no worse repeat-repair/QC-failure rate than baseline;
- misleading or unsafe suggestion rate at most 5% after tuning;
- zero autonomous work, part, price, promise or customer communication;
- zero cross-tenant exposure;
- zero external-AI processing outside approved policy.

### `VICTORY_OBSERVED`

Requires:

1. frozen case family and baseline;
2. complete pilot window;
3. sufficient sample;
4. target time improvement achieved;
5. correctness/QC/repeat-repair guardrails pass;
6. zero critical safety/privacy violation;
7. technician and owner acceptance;
8. Evidence and result receipt registered.

### `VICTORY_REPEATED`

Requires a second comparable device family, technician cohort or time window.

### `COMMERCIAL_VICTORY`

Requires paid adoption, renewal, expansion or retention attributable to measured AI Master value. Pilot speed improvement alone is insufficient.

## 10. Provisional Value Score

| Criterion | Score | Reason |
|---|---:|---|
| Pain strength | 9/10 | diagnostic consistency and knowledge concentration are material |
| Time to value | 6/10 | trustworthy source data and safety catalogue are required first |
| Frequency | 9/10 | diagnosis/QC occur repeatedly |
| Economic potential | 9/10 | may reduce time/rework, but must be measured |
| Defensibility | 10/10 | Evidence history, bounded rules and technician feedback compound |
| **Total** | **43/50** | design score, not market proof |

## 11. Commercial hypothesis

Potential future packaging:

- included in technician workspace tier;
- paid AI Master add-on;
- per-location or per-technician license;
- premium diagnostic/QC knowledge packs;
- bundle with MP-008 Smart Warehouse and MP-010 Business Memory.

Pricing, willingness to pay and liability remain untested.

## 12. Stop criteria

Stop, narrow or park when:

- unsafe suggestion rate exceeds 1% in controlled review or any critical event occurs;
- technicians cannot reliably distinguish fact from hypothesis;
- source data is too incomplete;
- suggestions increase diagnosis time;
- repeat-repair/QC-failure rate worsens materially;
- technicians follow suggestions without independent judgment;
- external AI becomes required for basic operation;
- provider cost exceeds measured value;
- the product becomes generic chat instead of bounded workflow;
- legal/liability review blocks the selected use case;
- a simple checklist produces equal value at lower cost.

## 13. Honest maturity

| Layer | Status |
|---|---|
| Product direction | approved for design |
| Product Passport | designed |
| Safety and truth policies | designed in package |
| Diagnostic catalogue | not implemented |
| External AI integration | not authorized |
| Technician workflow integration | not implemented |
| Runtime tests | none |
| Real device tests | none |
| Pilot | not authorized |
| Victory | `NOT_MEASURED` |
| Commercial result | not proven |

## 14. Next mandatory gate

Complete the remaining MP-009 package documents. Engineering remains blocked behind canonical source recovery, single-WIP discipline, safety review and a separate Owner Gate.