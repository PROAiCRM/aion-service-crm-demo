# MP-005 AION Pain Scanner — Priority Selection & One-Pain UX Policy v0.1

**Status:** DESIGNED — NOT IMPLEMENTED  
**Date:** 2026-08-01

## 1. Purpose

Select and present one highest-value recurring pain without creating an opaque score, overwhelming dashboard or manipulative red-alert interface.

## 2. One-pain rule

The primary Pain Scanner view shows:

- one selected pain;
- why it was selected;
- what was observed;
- what remains unknown;
- one causal hypothesis or `NO_CAUSAL_CLAIM`;
- one proposed experiment or one missing-Evidence step;
- one next owner decision.

Other eligible pains appear only in a bounded secondary queue with selection reasons.

## 3. Eligibility before priority

A pain cannot enter selection unless:

- its family is enabled;
- definition version is active;
- source scope is authorized;
- observation window is complete;
- minimum sample and coverage pass;
- deduplication passes;
- data freshness is acceptable;
- no critical contradiction blocks the pattern;
- it is not already being measured by an active experiment;
- it is not a duplicate representation of an MP-004 case or MP-003 card.

## 4. Deterministic priority dimensions

Priority uses transparent dimensions, displayed separately:

### A. Verified burden

Examples:

- affected-order share;
- total directly observed waiting time;
- repeated contact count;
- rework count;
- blocked-action count;
- governed monetary exposure from MP-004.

### B. Recurrence

How consistently the pain appears across complete subwindows or comparable groups.

### C. Actionability

Whether one reversible, safe and measurable intervention exists.

### D. Evidence strength

Whether source quality supports observation, priority and experiment.

### E. Urgency

Whether delay would materially worsen service, trust, money, safety or operational continuity.

### F. Experiment cost

Estimated staff effort, implementation cost, data burden and dependency complexity.

These dimensions are not collapsed into a user-facing “health score”.

## 5. Priority classes

### `P0_TRUST_OR_SAFETY`

Data contradiction, privacy incident, cross-tenant risk or unsafe process prevents reliable analysis. The main action is to restore trust, not optimize operations.

### `P1_ACTIVE_MATERIAL_PAIN`

A recurring pain with strong Evidence, material burden and a safe actionable experiment.

### `P2_MEANINGFUL_BUT_NOT_READY`

The pain appears meaningful but lacks sufficient causal or experiment readiness.

### `P3_MONITOR`

Eligible pattern with limited burden, weak recurrence or low urgency.

### `NO_RELIABLE_PAIN`

No candidate passes the gates.

## 6. Selection precedence

Recommended v0.1 precedence:

1. `P0_TRUST_OR_SAFETY` blockers;
2. active pain causing governed safety/QC or money risk;
3. pain affecting fulfilled customer promises or completed-order flow;
4. pain with highest verified burden and a low-cost reversible experiment;
5. pain with a missing-Evidence step that unlocks higher-value analysis;
6. monitor-only pain.

Tie-breakers:

1. stronger Evidence;
2. lower experiment cost;
3. fewer dependencies;
4. shorter valid measurement window;
5. older unresolved selection;
6. stable lexical pain-family code for deterministic output.

## 7. No hidden weights

If internal normalized calculations are later required, every weight must be:

- versioned;
- approved;
- visible in developer Evidence;
- calibrated on pilot outcomes;
- removable without historical rewrite.

The user-facing decision must still explain dimensions and precedence, not merely display a number.

## 8. Primary card contract

The primary card contains:

### Title

Plain-language recurring pain, not an accusation.

### Observed statement

Example:

> “10 of 61 eligible orders remained waiting for customer action beyond the approved threshold in the last 14 complete days.”

### Why this pain

- material burden;
- recurrence;
- Evidence state;
- why competing pain ranked lower.

### Evidence

- date window;
- numerator/denominator;
- missing rate;
- freshness;
- source families;
- exclusions;
- drill-down count.

### Cause boundary

- `NO_CAUSAL_CLAIM`; or
- bounded `INFERRED_CAUSE` with alternatives.

### Next step

One of:

- collect missing Evidence;
- approve experiment;
- reject/park with reason;
- review contradiction;
- open safe drill-down.

## 9. Secondary queue

Maximum five visible secondary candidates.

Each shows:

- pain name;
- priority class;
- one-line burden;
- why not selected;
- state: `READY`, `NEEDS_EVIDENCE`, `ACTIVE_EXPERIMENT`, `MONITOR`, `PARKED`.

No infinite alert feed.

## 10. Explanation of non-selection

Examples:

- “Part delays affected more hours, but source coverage is only 42%.”
- “Status inquiries recur, but the current baseline is incomplete.”
- “MP-004 cash cases are higher urgency, but they are already under governed review and are not duplicated here.”
- “Rework count is small and does not pass the minimum sample.”

## 11. UX timing objective

Within 60 seconds the owner should answer:

1. what the main pain is;
2. how large it is;
3. why it was selected;
4. whether cause is observed or inferred;
5. what to do next;
6. how the result will be judged.

The screen fails the UX contract if the owner must:

- configure a dashboard before first value;
- interpret more than one primary recommendation;
- decode a composite score;
- open multiple unrelated pages to verify numerator/denominator;
- guess whether a statement is fact or hypothesis;
- compare employee rankings.

## 12. Language policy

Preferred:

- “повторяющаяся боль”;
- “наблюдаемый паттерн”;
- “возможная причина”;
- “не хватает данных”;
- “проверим одним экспериментом”.

Forbidden:

- “ваш бизнес болен на 78%”;
- “сотрудник создаёт потери”;
- “AI доказал причину”;
- “вы потеряли 120 000 ₽” without reconciled Evidence;
- “срочно исправьте” for low-priority exploratory findings.

## 13. Owner controls

The owner may:

- approve experiment;
- reject the recommendation;
- park until a date;
- mark “not operationally meaningful”;
- request more Evidence;
- choose an approved alternative hypothesis;
- disable a pain family through feature policy;
- view decision history.

The owner cannot rewrite observed metrics directly.

## 14. Degraded states

### No data

Show the smallest data-capture improvement needed.

### Stale data

Show last valid snapshot time and block current recommendation.

### Contradiction

Prioritize truth reconciliation.

### Active experiment

Keep the experiment visible; do not replace it daily with another pain unless a P0 issue appears.

### Low volume

Show monitor state without strong priority claim.

## 15. Stability and recommendation churn

The primary pain should not change due to small daily fluctuations.

Future implementation should include:

- complete windows;
- minimum persistence rule;
- material-change threshold;
- active-experiment lock;
- reason code for every selection change.

Every change is recorded in a recommendation history receipt.

## 16. Accessibility and device boundary

- mobile-first summary;
- desktop adds drill-down, not new meaning;
- target size at least 44px;
- no meaning conveyed by color alone;
- reduced-motion support;
- AION Living and Basic presentations share the same semantic projection;
- no external font or heavy visualization dependency required.

## 17. Honest maturity

- selection policy: designed;
- calibrated precedence: not tested;
- UX prototype: not created in this package;
- churn control: not implemented;
- owner comprehension: not measured.