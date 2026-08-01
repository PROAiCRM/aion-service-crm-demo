# MP-008 Smart Warehouse — Product Passport & Victory Contract v0.1

**Product ID:** `MP-008`  
**Status:** DESIGNED — NOT IMPLEMENTED  
**Victory:** `NOT_MEASURED`  
**Date:** 2026-08-01  
**Canonical tracking:** public Issue #21

## 1. Product statement

Smart Warehouse gives the owner and authorized staff one trustworthy view of:

- what is physically expected to exist;
- what is reserved for repairs;
- what is available for new work;
- what was consumed, released, returned or adjusted;
- which repairs are blocked by parts;
- which stock is ageing or excessive;
- what single warehouse action should be reviewed next.

It is a read-and-govern product over existing Core inventory truth. It is not a second inventory ledger or an autonomous purchasing system.

## 2. Customer pain

Service centres often experience:

- a part appears available but is already reserved;
- a repair is promised before availability is proven;
- unused reservations remain locked;
- the same part is consumed twice after retry or lost response;
- returned parts are not reconciled;
- physical stock and system stock diverge;
- commonly needed parts are absent;
- slow-moving stock freezes working capital;
- cost data is incomplete but reports still invent margin;
- employees keep important stock truth in memory or messages.

## 3. Product victory

### Operational victory

For a sampled set of critical SKUs and linked repairs:

- system quantity semantics match approved source events;
- reservation, consumption, release and return cannot be double-applied;
- shortage and contradiction are visible before unsafe completion or promise;
- one evidence-backed action reaches a valid human-reviewed outcome.

### Owner victory

Within 60 seconds the owner can correctly answer:

1. what inventory issue requires attention first;
2. which quantity is on-hand, reserved, available and uncertain;
3. which repairs or demand signals are affected;
4. what source Evidence supports the conclusion;
5. what one action is recommended;
6. what approval, cost or uncertainty remains.

## 4. First-Value Moment

Example:

> **Главное складское действие:** release 2 expired reservations for display modules after reviewing the linked cancelled orders. Current observed stock is 5, reserved 4, available 1. Two reservations exceed the approved hold rule and have no active repair demand.

The card also shows:

- SKU and safe label;
- location;
- quantity components;
- affected orders;
- freshness and contradiction state;
- action authority;
- consequence preview;
- expected receipt.

## 5. MVP scope

The first MVP may include:

- on-hand/reserved/available/uncertain quantity projection;
- reservation lifecycle tied to a service order;
- consumption on approved repair action;
- release of unused reservation;
- return/reversal flow with physical confirmation where required;
- shortage blocker for an order;
- stock contradiction case;
- limited reorder candidate or expired-reservation action;
- ageing visibility when receipt dates are reliable;
- one prioritized warehouse action;
- immutable Action Receipt and reconciliation state.

## 6. Explicit non-goals

MP-008 v0.1 does not include:

- autonomous purchasing;
- supplier marketplace;
- dynamic pricing;
- automated discounting;
- full ERP/accounting valuation;
- tax or customs accounting;
- generic warehouse management platform;
- barcode hardware dependency;
- RFID or computer vision counting;
- multi-echelon optimization;
- demand forecasting by external AI;
- a new inventory microservice;
- a duplicate inventory movement table disconnected from Core;
- profit or margin claims without complete governed costs.

## 7. Core invariants

1. `available != on_hand` when reservations exist.
2. Missing quantity is not zero.
3. Negative availability is a contradiction or governed backorder state, never hidden.
4. One logical movement produces one committed effect and one receipt.
5. Lost response triggers reconciliation, not blind retry.
6. Reservation belongs to one explicit demand subject and lifecycle.
7. Consumption requires an approved business event.
8. Release cannot occur after valid consumption unless through a separate reversal/return flow.
9. Physical return and accounting/system reversal are distinct facts.
10. Cost, price, margin and profit remain separate.
11. Suggested purchase is not an order.
12. AI cannot commit stock, purchase or adjustment.

## 8. Relationship to other products

- **MP-002 Express Intake** creates trustworthy repair demand and selected parts.
- **MP-004 Cash Leakage Guard** governs concrete stock/money exceptions.
- **MP-005 Pain Scanner** detects recurring shortage, reservation and correction patterns.
- **MP-006 Opportunity Engine** may use confirmed available capacity/parts only after warehouse truth passes.
- **MP-003 Owner Pulse** displays one warehouse action but does not recalculate stock.

## 9. Human and AI boundary

### Deterministic system

- calculates registered quantities;
- validates lifecycle transitions;
- deduplicates logical movements;
- detects contradictions and shortages;
- ranks one action through versioned rules;
- produces consequence preview and receipts.

### Human

- confirms physical facts when required;
- approves adjustments, returns or purchases;
- selects supplier and commercial terms;
- reviews damage/defect context;
- accepts, rejects or parks recommendations.

### Optional future AI

May summarize demand patterns or propose bounded candidates from approved facts. It may not:

- invent quantity or cost;
- alter source movements;
- select a supplier autonomously;
- place an order;
- classify employee fraud;
- upgrade uncertain data to observed truth.

MVP works without external AI.

## 10. Victory Contract

### Working pilot targets

- 100% arithmetic agreement for sampled quantity projections or explicit `UNKNOWN/CONTRADICTION`;
- zero double consumption, release or return for one logical identity;
- 100% of critical stock contradictions routed to review;
- at least 90% of selected warehouse actions reviewed within SLA;
- at least 80% of reviewed actions reach a valid outcome receipt;
- at least one targeted shortage/reservation/ageing metric improves by its predeclared material threshold;
- zero cross-tenant exposure;
- zero autonomous purchases or inventory adjustments;
- zero unsupported margin/profit claims.

These are pilot hypotheses, not proven performance.

### Guardrails

- no unsafe promise based on uncertain stock;
- no hidden negative quantity;
- no staff punishment from exploratory data;
- no extra data entry exceeding approved limit;
- no critical repair blocked by false release;
- no deletion of movement history;
- no supplier/price manipulation;
- no use of real stock before canonical source and Owner Gate.

### `VICTORY_OBSERVED`

Requires:

1. frozen quantity and action definitions;
2. valid baseline/reconciliation sample;
3. source and RLS gates pass;
4. selected action reaches verified outcome;
5. target metric materially improves;
6. critical guardrails pass;
7. owner accepts Evidence;
8. receipts are registered.

### `VICTORY_REPEATED`

Requires a second comparable inventory window, SKU family or service location.

### `COMMERCIAL_VICTORY`

Requires paid adoption, renewal, expansion or retained customer value attributable to verified Smart Warehouse results.

## 11. Provisional Value Score

| Criterion | Score | Reason |
|---|---:|---|
| Pain strength | 9/10 | stock errors directly block repairs and cash |
| Time to value | 8/10 | quantity truth and expired reservations can show value quickly |
| Frequency | 9/10 | inventory affects daily operations |
| Money/time potential | 9/10 | reduces blocked work and frozen capital; exact effect must be measured |
| Defensibility | 9/10 | compounds through receipts, demand linkage and evidence history |
| **Total** | **44/50** | design score only |

## 12. Commercial hypothesis

Potential packaging:

- core inventory control in Service Business OS;
- paid Warehouse & Purchasing add-on;
- owner-control bundle with MP-003 and MP-004;
- value pilot tied to measured stock accuracy, blocked time or released working capital.

Pricing and willingness to pay are untested.

## 13. Stop criteria

Stop, narrow or park when:

- canonical source cannot produce reliable quantity components;
- physical counts remain too poor for useful reconciliation;
- staff burden exceeds measured benefit;
- recommendations repeatedly create false shortages or unsafe releases;
- cost data is demanded as profit analytics before governance exists;
- a simpler reservation checklist solves the pilot pain;
- autonomous purchasing becomes the primary request before data maturity;
- the product duplicates existing Core screens without measurable improvement.

## 14. Honest maturity

| Layer | Status |
|---|---|
| Product direction | approved for design |
| Product Passport | designed |
| Quantity semantics | designed separately |
| Inventory lifecycle | designed separately |
| Source anchors | identified |
| Unified Smart Warehouse implementation | not present |
| Physical count integration | not implemented |
| Purchasing | not implemented or authorized |
| Runtime/PostgreSQL Evidence | none for MP-008 package |
| Pilot | not authorized |
| Victory | `NOT_MEASURED` |
| Commercial result | not proven |

## 15. Next mandatory gate

Complete the remaining MP-008 package, review exact definitions and keep engineering blocked behind canonical source recovery, MP-001 single-WIP disposition and a separate Owner Gate.