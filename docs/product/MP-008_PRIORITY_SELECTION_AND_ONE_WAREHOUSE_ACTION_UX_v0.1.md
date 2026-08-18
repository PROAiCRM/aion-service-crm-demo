# MP-008 Smart Warehouse — Priority Selection & One-Warehouse-Action UX v0.1

**Status:** DESIGNED — NOT IMPLEMENTED  
**Date:** 2026-08-01

## 1. Purpose

Present one warehouse action that protects service continuity or inventory truth without overwhelming the owner with a generic stock dashboard.

## 2. Primary action rule

The first view shows:

- one selected inventory issue;
- exact quantity components;
- affected repairs/demand;
- Evidence and freshness;
- why it ranks first;
- one allowed next action;
- authority and consequence preview;
- expected receipt.

Other candidates appear in a bounded queue.

## 3. Priority classes

### `P0_TRUTH_OR_SAFETY`

Cross-tenant risk, impossible quantity, duplicate movement, critical contradiction or unsafe part state.

### `P1_ACTIVE_REPAIR_BLOCKER`

Confirmed repairs are blocked or at risk due to shortage/reservation truth.

### `P2_WORKING_CAPITAL`

Expired reservations, ageing or excess stock with credible actionability.

### `P3_POLICY_MAINTENANCE`

Buffer review, source cleanup or low-urgency count.

### `NO_RELIABLE_ACTION`

No candidate passes source and authority gates.

## 4. Selection precedence

1. trust/security/physical safety contradiction;
2. confirmed customer repair blocker;
3. duplicate/unknown movement requiring reconciliation;
4. expired reservation restricting active demand;
5. shortage candidate with bounded human purchase decision;
6. ageing/overstock action with reliable cost and no shortage harm;
7. data-quality improvement.

Tie-breakers:

- stronger Evidence;
- more affected confirmed orders;
- shorter deadline;
- lower-risk reversible action;
- lower cost/dependency;
- oldest unresolved candidate;
- deterministic code order.

## 5. Primary card

Contains:

- title in process language;
- SKU/location;
- `on_hand / reserved / available / uncertain`;
- affected-order count and safe drill-down;
- truth/freshness state;
- reason selected;
- one CTA such as `Проверить`, `Освободить резерв`, `Подтвердить возврат`, `Согласовать закупку`;
- blockers and required role;
- quantity/money consequence preview;
- rollback/reversal direction.

## 6. Forbidden UX

- green “in stock” when quantity is uncertain;
- clamping negative values to zero;
- one-click purchase;
- hidden supplier selection;
- “saved ₽X” before outcome;
- employee blame or theft language;
- more than one primary action;
- unreadable ERP grid as the first screen;
- AI confidence percentage without calibration.

## 7. Secondary queue

Maximum five items with states:

- `REVIEW_NOW`;
- `BLOCKED_BY_DATA`;
- `AWAITING_AUTHORITY`;
- `ACTION_IN_PROGRESS`;
- `MONITOR`;
- `PARKED`.

Each shows why it was not selected.

## 8. Stability

The primary action should not churn due to small movement noise.

Future implementation includes:

- complete source cutoff;
- material-change threshold;
- active-action lock;
- P0 override;
- reason code for selection change;
- immutable recommendation history.

## 9. Owner controls

Owner/authorized manager may:

- approve/reject action;
- request physical count;
- park until date;
- change governed buffer policy through separate command;
- choose supplier only in a future purchasing boundary;
- mark recommendation not meaningful with reason;
- inspect source movements.

Observed quantity cannot be edited from the card.

## 10. 60-second objective

The owner correctly answers:

1. what is wrong or at risk;
2. which quantity is actually available;
3. which repairs are affected;
4. what Evidence is uncertain;
5. what action is allowed;
6. what happens if approved.

## 11. Device and accessibility

- mobile-first summary;
- desktop adds movements/drill-down;
- 44px targets;
- no color-only meaning;
- reduced motion;
- Basic/Living modes use one semantic projection;
- no heavy chart dependency.

## 12. Honest maturity

- priority/UX policy: designed;
- calibrated rules: not tested;
- UI prototype: not implemented;
- owner comprehension: not measured.