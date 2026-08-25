# MP-008 Smart Warehouse — Product Package Index v0.1

**Package status:** COMPLETE PRODUCT DESIGN PACKAGE — DRAFT REVIEW  
**Date:** 2026-08-01  
**Product ID:** `MP-008`  
**Victory:** `NOT_MEASURED`  
**Engineering:** NOT STARTED  
**Tracking:** Issue #21

## 1. Package purpose

Define Smart Warehouse as a truthful inventory-control product that connects stock, reservations, repair demand and governed movement outcomes without creating a second ledger or autonomous purchasing system.

## 2. Documents

1. `MP-008_PRODUCT_PASSPORT_AND_VICTORY_CONTRACT_v0.1.md`
2. `MP-008_INVENTORY_TRUTH_AND_QUANTITY_SEMANTICS_v0.1.md`
3. `MP-008_RESERVATION_CONSUMPTION_RELEASE_RETURN_LIFECYCLE_v0.1.md`
4. `MP-008_DEMAND_SHORTAGE_AND_SERVICE_LEVEL_POLICY_v0.1.md`
5. `MP-008_OVERSTOCK_AGEING_AND_WORKING_CAPITAL_SEMANTICS_v0.1.md`
6. `MP-008_PRIORITY_SELECTION_AND_ONE_WAREHOUSE_ACTION_UX_v0.1.md`
7. `MP-008_ROLE_APPROVAL_AND_NON_FRAUD_BOUNDARY_v0.1.md`
8. `MP-008_PILOT_MEASUREMENT_AND_OWNER_ACCEPTANCE_v0.1.md`
9. `MP-008_CURRENT_STATE_SOURCE_MAP_v0.1.md`
10. `MP-008_DELIVERY_GATES_AND_EVIDENCE_PLAN_v0.1.md`
11. `MP-008_PRODUCT_PACKAGE_INDEX_v0.1.md`

## 3. Product invariants

1. Available is not on-hand when reservations/holds exist.
2. Missing is not zero.
3. Negative/impossible quantity is visible contradiction.
4. One logical movement has one committed effect.
5. Lost response requires reconciliation, never blind retry.
6. Reservation is not consumption.
7. Return request is not physical return.
8. Physical return is not automatically available stock.
9. Movement history is append-only.
10. Purchase candidate is not purchase order.
11. Inbound is not on-hand.
12. Cost, price, margin and profit are separate.
13. Old stock is not automatically obsolete.
14. Discrepancy is not employee fraud.
15. One primary warehouse action is shown.
16. AI cannot mutate stock or purchase.
17. No second inventory ledger/microservice in v0.1.
18. MP-001 remains the only active engineering mini-product.

## 4. Relationship map

```text
MP-002 repair demand
→ Core inventory movements/reservations
→ MP-008 trusted quantity + one action
→ MP-003 Owner Pulse

MP-008 contradictions
→ MP-004 governed cases

recurring shortage/reservation patterns
→ MP-005 Pain Scanner

confirmed availability + explicit demand
→ MP-006 Opportunity Engine
```

## 5. Recommended first slice

Subject to canonical source review:

> Expired reservation and shortage truth for a bounded set of common display/battery SKUs in one location.

Includes:

- exact quantity projection;
- active/expired reservation review;
- shortage blocker;
- release after human review;
- lost-response reconciliation;
- one owner action;
- no supplier integration or autonomous purchase.

## 6. Open decisions

1. What is the exact canonical movement source?
2. Is current projection pure read?
3. Which SKU/location/lot identity is required?
4. Are physical count and adjustment sources present?
5. What reservation expiry rules are valid?
6. Which roles can adjust/write off and at what thresholds?
7. Is cost/receipt date coverage sufficient for ageing?
8. Which first SKU family has enough volume?
9. Is inbound/purchasing data reliable enough to include?
10. What physical count tolerance/policy is allowed?

## 7. Dependencies/blockers

- canonical V10.2 source recovery;
- migration/source inventory;
- MP-001 WIP disposition;
- tenant/RLS and Principal boundaries;
- exact movement and receipt semantics;
- backup/restore proof;
- Owner Gate for real stock;
- future legal/accounting review for valuation/purchasing where needed.

## 8. Current maturity

| Object | Status |
|---|---|
| Product direction | approved for design |
| Full package | designed |
| Quantity semantics | designed |
| Movement lifecycle | designed |
| Shortage/service policy | designed |
| Ageing/value semantics | designed |
| One-action UX | designed |
| Role/non-fraud boundary | designed |
| Pilot/gates | designed |
| Source anchors | identified |
| Canonical source inventory | not complete |
| Unified implementation | not present |
| Physical count/runtime tests | none |
| Purchasing | not authorized |
| Real pilot | not authorized |
| Victory | `NOT_MEASURED` |
| Commercial result | not proven |

## 9. Risks

- false available quantity blocks/harms repairs;
- migration/opening balance may be unreliable;
- units/compatibility may be conflated;
- duplicate movement under poor network;
- ageing/cost coverage may be too weak;
- automated purchase pressure may appear prematurely;
- employee discrepancy may be misused as accusation;
- warehouse UI may become an ERP grid;
- separate ledger may duplicate Core truth;
- staff burden may exceed benefit.

## 10. Session completion

### Done

- full MP-008 Product Factory package;
- source anchors reviewed;
- quantity/lifecycle/demand/value boundaries separated;
- pilot and DG8 gates defined;
- engineering not started.

### Decisions

- one Core inventory truth;
- no auto-purchase;
- unknown/contradiction visible;
- one logical movement once;
- recovery/reconciliation before retry;
- one warehouse action;
- no fraud scoring;
- no profit claims without costs/outcomes.

### Future synchronization after owner review

- Product Catalog maturity;
- Decision Log;
- Risk Register;
- Evidence Register;
- File Registry;
- Current State;
- Session Handoff.

### Stop point

`MP-008_PRODUCT_PACKAGE_COMPLETE_FOR_DRAFT_REVIEW`.

### Next mandatory product-design step

Prepare `MP-009 AI Master — Product Passport & Victory Contract v0.1`, preserving the boundary:

- MP-008 provides trusted parts and inventory context;
- MP-009 assists diagnosis/work guidance only from approved evidence and never replaces technician judgment or safety/quality gates.

Engineering remains single-WIP.