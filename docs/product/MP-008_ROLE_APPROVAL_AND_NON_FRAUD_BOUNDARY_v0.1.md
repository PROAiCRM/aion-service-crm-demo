# MP-008 Smart Warehouse — Role, Approval & Non-Fraud Boundary v0.1

**Status:** DESIGNED — NOT IMPLEMENTED  
**Date:** 2026-08-01

## 1. Purpose

Protect inventory actions through explicit authority while preventing Smart Warehouse from becoming an employee-surveillance or accusation system.

## 2. Authority model

A consequential inventory action requires:

```text
Principal
+ active session
+ tenant/workspace membership
+ current grant
+ source-state/version
+ action policy
+ step-up/PIN when required
+ intent confirmation
+ idempotency identity
```

Role label alone is insufficient.

## 3. Suggested role boundary

### Employee

May, within an approved order flow:

- request/reserve permitted parts;
- consume reserved part when action preconditions pass;
- release unused reservation where policy permits;
- report physical discrepancy or damaged part;
- view only operational stock needed for work.

### Manager

May:

- review shortages and expired reservations;
- approve bounded adjustments/returns under policy;
- initiate physical count;
- review contradictions and MP-004 cases;
- see approved working-capital aggregates.

### Owner

May:

- approve high-impact adjustment/write-off;
- approve buffer and purchasing policy;
- approve supplier/purchase in a future boundary;
- resolve material reconciliation decisions;
- stop product/pilot.

### AI observer

Read-only explanation and candidate suggestion under explicit grant. No mutation authority.

## 4. Sensitive commands

Candidates for step-up and stronger review:

- manual quantity adjustment;
- write-off;
- return-to-supplier completion;
- high-value release/consumption reversal;
- buffer-policy change;
- purchase approval;
- cross-location transfer;
- reconciliation override.

Exact thresholds require owner policy.

## 5. Non-fraud principle

Inventory discrepancy is not proof of theft or misconduct.

Allowed language:

- “system and physical count differ”;
- “movement receipt is missing”;
- “reservation and consumption conflict”;
- “requires reconciliation”.

Forbidden:

- “employee stole part”;
- fraud probability;
- honesty score;
- suspicious-worker ranking;
- automatic sanction;
- public comparison by discrepancy count.

Suspected misconduct requires a separate lawful human investigation outside MP-008.

## 6. Employee attribution

Actor identity may be retained in secure audit Evidence when necessary, but primary product analytics focus on process and command receipts.

Employee-level drill-down requires:

- explicit purpose;
- authorized role;
- correction/context route;
- no automatic guilt inference;
- retention policy.

## 7. Approval receipt

Every sensitive action records:

- action ID/type;
- actor and authority class;
- source version;
- reason code;
- quantity/cost consequence preview;
- approval/step-up result;
- idempotency identity hash;
- resulting movement/receipt refs;
- reversibility;
- timestamp.

No raw PIN/token is stored.

## 8. Separation of duties direction

High-impact changes may require two-person or owner review when volume/value justifies it. This is a future policy, not mandatory complexity for the first pilot.

## 9. Privacy and logging

Logs exclude:

- customer PII;
- raw authorization headers/cookies;
- PINs;
- supplier secrets;
- unrestricted payloads;
- accusatory labels.

Safe Evidence uses IDs/hashes, rule codes, quantities, result codes and timestamps.

## 10. Correction rights

Authorized staff can report:

- wrong SKU/location;
- movement entered late;
- physical count context;
- damaged/defective condition;
- duplicate technical event;
- incorrect recommendation.

Correction creates new Evidence; history is not silently erased.

## 11. Stop conditions

Stop when:

- employee surveillance becomes primary use;
- discrepancy is presented as guilt;
- high-impact adjustment lacks authority/receipt;
- shared PIN or client-supplied role is trusted;
- employee cannot challenge an obvious classification error;
- audit data leaks across tenant/role boundary.

## 12. Honest maturity

- role/approval policy: designed;
- exact grants/thresholds: pending canonical review;
- step-up implementation: source fragments exist but not proven for MP-008;
- misconduct workflow: out of scope.