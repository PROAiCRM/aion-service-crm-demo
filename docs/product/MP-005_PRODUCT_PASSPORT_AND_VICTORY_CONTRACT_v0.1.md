# MP-005 AION Pain Scanner — Product Passport & Victory Contract v0.1

**Product ID:** `MP-005`  
**Status:** DESIGNED — NOT IMPLEMENTED  
**Victory:** `NOT_MEASURED`  
**Date:** 2026-08-01  
**Canonical tracking:** public Issue #15

## 1. Product statement

AION Pain Scanner identifies **one recurring, evidence-backed operational pain**, explains what is observed and what is only a causal hypothesis, and proposes **one reversible improvement experiment**.

It does not produce a generic analytics dashboard. It answers:

> What repeatable problem is currently creating the largest verified operational burden, what Evidence supports it, and what smallest change should we test next?

## 2. Customer pain

A service owner usually sees symptoms separately:

- several overdue promises;
- repeated calls asking for status;
- repairs waiting for customer approval;
- repeated intake corrections;
- recurring lack of common parts;
- repeat repairs or warranty returns;
- orders entered after work already began;
- document or print interruptions;
- recurring cash or stock exception cases.

The owner can see individual incidents but may not see the repeating system pattern, its scale, or whether a proposed correction actually helped.

## 3. Product victory

### Owner victory

Within 60 seconds the owner can correctly state:

1. the single highest-priority recurring pain;
2. the exact observation window and affected population;
3. what is directly observed;
4. what cause is only hypothesized;
5. what Evidence is missing or contradictory;
6. the one reversible experiment recommended next;
7. how success or failure will be measured.

### Business victory

A selected pain is reduced through a measured experiment without:

- creating a new material problem elsewhere;
- increasing employee work excessively;
- using employee blame or rankings;
- misstating correlation as causation;
- inventing recovered money or time;
- collecting unnecessary personal data.

## 4. First-Value Moment

The owner opens Pain Scanner and sees one statement such as:

> **Главная повторяющаяся боль:** 31% completed repairs waited for customer contact longer than the approved service threshold during the last 14 complete days. This is an observed pattern. The likely cause “late first contact” is a hypothesis. Test one standard contact step for seven days.

The screen must also show:

- numerator and denominator;
- date range and timezone;
- included and excluded orders;
- freshness and data-quality state;
- source object count;
- competing pain considered;
- causal confidence expressed as epistemic status, not a numeric AI score;
- experiment and stop criteria.

## 5. MVP scope

The first MVP may evaluate only registered pain families with explicit definitions:

1. `CONFIRMED_PROMISE_OVERDUE_PATTERN`;
2. `WAITING_FOR_CUSTOMER_STAGNATION_PATTERN`;
3. `LATE_OR_BYPASSED_INTAKE_PATTERN`;
4. `INTAKE_CORRECTION_PATTERN`;
5. `PART_AVAILABILITY_DELAY_PATTERN`;
6. `STATUS_INQUIRY_LOAD_PATTERN`;
7. `REPAIR_REWORK_OR_RETURN_PATTERN`;
8. `DOCUMENT_OR_PRINT_INTERRUPTION_PATTERN`;
9. `UNKNOWN_MUTATION_RESULT_PATTERN`;
10. `RECURRING_GOVERNED_EXCEPTION_PATTERN` based on deduplicated MP-004 cases.

Not every family must be enabled in the first pilot. A family is enabled only after its exact source fields, denominator, exclusions and data-quality gate are approved.

## 6. Explicit non-goals

MP-005 v0.1 does not include:

- a generic anomaly-detection platform;
- an LLM-generated root-cause engine;
- employee productivity ranking;
- fraud detection;
- sentiment monitoring;
- surveillance, keystroke tracking or camera monitoring;
- an abstract “business health score”;
- automatic workflow changes;
- automatic task assignment or sanctions;
- predictive revenue or profit claims;
- exact money impact without reconciled Evidence;
- a separate event store, customer table, order table or analytics microservice;
- a generic rule DSL, knowledge graph or vector database;
- simultaneous multi-change optimization.

## 7. Relationship to MP-004

`MP-004 Cash Leakage Guard` manages individual evidence-backed money or stock exception cases.

`MP-005 Pain Scanner` may use **deduplicated, privacy-minimized and outcome-classified aggregates** from MP-004 to identify a repeating process pattern.

It must not:

- recreate or alter an MP-004 case;
- call an open exception a confirmed loss;
- count one case multiple times through related events;
- expose employee accusation language;
- close or act on cases.

## 8. Product architecture direction

Use one read-only derived product projection over existing Core facts:

```text
canonical operational facts
→ source quality and eligibility gates
→ normalized pain episodes
→ deterministic pattern aggregation
→ evidence sufficiency gate
→ priority selection
→ causal hypothesis boundary
→ one experiment proposal
→ measurement receipt
```

The projection is read-only. Experiments are approved and executed through existing product/command boundaries, not by the scanner itself.

## 9. Human and AI boundary

### Deterministic system responsibilities

- define windows, denominators and exclusions;
- normalize eligible episodes;
- deduplicate;
- calculate recurrence and burden;
- apply data-quality gates;
- select one pain through registered rules;
- preserve source references;
- compare baseline and result;
- block unsupported claims.

### Human responsibilities

- confirm whether the selected pain is operationally meaningful;
- review causal hypotheses;
- approve or reject the experiment;
- choose owner and duration;
- report side effects and context not represented in data;
- decide continue, revise, stop or scale.

### Optional future AI responsibilities

AI may summarize registered facts or propose candidate hypotheses only when:

- all source facts are already selected by the deterministic layer;
- every statement is labeled `INFERRED`;
- sources and contradictions are preserved;
- the AI cannot change priority, authorize an experiment or write business data;
- customer data follows the approved Data Classification & AI Boundary Policy.

The MVP must remain fully usable without external AI.

## 10. Victory Contract

### Primary Outcome

The selected recurring pain is reduced by a predeclared material amount during a valid experiment, while guardrails remain within limits.

### Working pilot targets

These are hypotheses pending baseline:

- owner identifies the selected pain, Evidence and experiment correctly within 60 seconds in at least 80% of observed sessions;
- at least 90% of displayed pain statements match the approved definition and underlying sample;
- 100% of unsupported causation, financial effect or employee-blame claims are blocked;
- at least 70% of accepted experiments reach a valid measured conclusion rather than ending with missing data;
- at least one enabled pain family achieves its predeclared improvement threshold in the first controlled pilot;
- misleading recommendation rate is at most 10% after initial tuning;
- zero cross-tenant exposure;
- zero autonomous consequential actions.

### Guardrails

- no business-health score;
- no employee ranking;
- no hidden write side effects;
- no stale value shown as current;
- no missing denominator;
- no exact recovered time or money without direct measurement;
- no experiment with more than one primary change in v0.1;
- no experiment that bypasses safety, QC, debt, consent, RLS or authorization controls.

### `VICTORY_OBSERVED`

May be declared only when:

1. baseline is valid;
2. pain definition and target were frozen before intervention;
3. intervention and observation windows are complete;
4. source quality passes;
5. the material improvement threshold is achieved;
6. guardrails pass;
7. owner accepts the result;
8. Evidence and measurement receipt are registered.

### `VICTORY_REPEATED`

Requires a second valid observation in another comparable window, cohort or service location.

### `COMMERCIAL_VICTORY`

Requires evidence that a customer paid, renewed, expanded or retained the product because of measured Pain Scanner value. Technical or pilot success alone is insufficient.

## 11. Value Score — provisional

| Criterion | Score | Reason |
|---|---:|---|
| Pain strength | 9/10 | owners often see incidents but not the repeating constraint |
| Time to value | 7/10 | useful only after sufficient trustworthy operational data exists |
| Frequency | 9/10 | can support weekly or daily management depending on volume |
| Money/time potential | 9/10 | may reduce delays, rework and wasted attention, but effect must be measured |
| Defensibility | 9/10 | compounds through exact definitions, Evidence history and experiment outcomes |
| **Total** | **43/50** | provisional design score, not market proof |

## 12. Commercial hypothesis

Pain Scanner may become the first product that makes AION feel materially more intelligent than ordinary CRM analytics:

- not more charts;
- not generic AI advice;
- one evidenced pain;
- one testable change;
- one measured result.

Possible future packaging:

- included in Owner Control tier;
- paid Growth add-on;
- value-based pilot linked to verified time or process improvement;
- bundle with MP-003 Owner Pulse and MP-006 Opportunity Engine.

Pricing and willingness to pay remain untested.

## 13. Stop criteria

Stop, narrow or park MP-005 when:

- source completeness is too low to form reliable denominators;
- the same pain is repeatedly rejected by the owner as operationally meaningless;
- misleading recommendation rate remains above 20% after two tuning cycles;
- experiments cannot isolate one primary change;
- employee-blame or surveillance pressure becomes a dominant use case;
- extra data entry exceeds measured benefit;
- effect cannot be distinguished from normal variation;
- the product merely repeats MP-003 cards or MP-004 cases;
- a simpler report or checklist produces the same outcome at lower cost.

## 14. Honest maturity

| Layer | Status |
|---|---|
| Product concept | approved direction |
| Product Passport | designed |
| Victory Contract | designed |
| Pain definitions | designed in separate policy; not implemented |
| Source adapters | not inventoried on canonical runtime |
| Aggregation engine | not implemented |
| Causal hypothesis engine | not implemented |
| Experiment ledger | not implemented |
| Live CRM integration | not implemented |
| Pilot | not authorized |
| Victory | `NOT_MEASURED` |
| Commercial result | not proven |

## 15. Next mandatory gate

Complete the remaining MP-005 package documents, review them against private source anchors, and keep engineering blocked behind canonical source recovery, single-WIP discipline and a separate Owner Gate.