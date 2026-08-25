# MP-008 Smart Warehouse — Demand, Shortage & Service-Level Policy v0.1

**Status:** DESIGNED — NOT IMPLEMENTED  
**Date:** 2026-08-01

## 1. Purpose

Connect trusted inventory to real repair demand and expose shortages without turning guesses into purchase orders or promises.

## 2. Demand classes

- `ORDER_CONFIRMED_DEMAND` — part explicitly linked to an approved repair/order;
- `DIAGNOSIS_CANDIDATE_DEMAND` — possible part pending diagnosis/approval;
- `WAITLIST_EXPLICIT_DEMAND` — customer explicitly requested unavailable part/service;
- `HISTORICAL_OBSERVED_USAGE` — past reconciled consumption;
- `MINIMUM_POLICY_HOLD` — owner-approved buffer;
- `SIMULATED_FORECAST` — future scenario, never current truth.

Only approved classes may affect reservation or reorder logic.

## 3. Shortage definitions

### Current shortage

Confirmed eligible demand exceeds trusted available quantity.

### Near-term shortage candidate

Confirmed demand plus approved near-term commitments may exceed available and confirmed inbound quantity.

### Data-uncertain shortage

Availability cannot be trusted because source data is stale, missing or contradictory.

### Service-level miss

An approved service-level target was missed for an eligible part/demand class. Targets are policy, not universal facts.

## 4. Promise boundary

A part availability promise may be shown only when:

- SKU/location/compatibility are exact;
- availability is fresh and trusted;
- reservation or allocation rule passes;
- no higher-priority committed demand conflicts;
- inbound state is not misrepresented as on-hand;
- employee confirms customer-facing promise where required.

Unknown stock means “requires verification”, not “available”.

## 5. Candidate replenishment inputs

A reorder candidate may use:

- trusted available quantity;
- active confirmed demand;
- approved minimum buffer;
- historical reconciled consumption;
- confirmed supplier lead-time Evidence;
- confirmed inbound orders;
- order cancellation/return rates;
- cost/working-capital limits when governed.

Missing lead time or cost remains unknown; no hidden defaults.

## 6. Reorder candidate semantics

A recommendation contains:

- SKU/location;
- observed quantity state;
- demand components;
- buffer policy/version;
- shortage horizon or `UNKNOWN`;
- proposed quantity range or “verify first”;
- assumptions;
- supplier/price not selected unless separately governed;
- required human authority;
- expiry/freshness.

It is not a purchase order.

## 7. Priority of demand

V0.1 may support registered classes such as:

1. safety/warranty-critical committed repair;
2. customer-approved active repair;
3. confirmed scheduled demand;
4. explicit waitlist demand;
5. approved buffer replenishment;
6. exploratory forecast.

Exact precedence requires owner policy. Employee identity or customer value scoring cannot secretly alter priority.

## 8. Substitution and compatibility

A compatible alternative must have:

- approved compatibility record/version;
- quality/grade disclosure;
- price/consent consequence where relevant;
- employee confirmation;
- customer approval when contract changes;
- no silent SKU identity merge.

AI suggestion cannot authorize substitution.

## 9. Historical usage

Historical usage is eligible only when:

- consumption movements are reconciled;
- returns/reversals are handled;
- synthetic/training data excluded;
- observation window complete;
- one-time anomalies visible;
- SKU identity stable.

Usage is not future certainty.

## 10. Service-level metrics

Possible measured metrics:

- fill rate for confirmed repair demand;
- share of repairs blocked by part shortage;
- median/P90 shortage-blocked duration;
- reservation fulfillment rate;
- emergency purchase count;
- promise accuracy for part-dependent repairs;
- stockout recurrence by SKU family.

Each requires numerator, denominator, window, exclusions and data-quality state.

## 11. No autonomous purchase

The system cannot:

- choose supplier;
- accept commercial terms;
- create/send purchase order;
- commit payment;
- substitute part;
- change buffer policy;
- raise customer price.

Future automation requires separate authority and Owner Gate.

## 12. Shortage action examples

Allowed candidates:

- verify uncertain physical quantity;
- release expired reservations after review;
- allocate confirmed stock to approved demand;
- request owner approval for bounded reorder;
- contact explicit waitlist customer only through MP-006 policy;
- adjust promise after human review;
- investigate recurring shortage through MP-005.

## 13. Stop criteria

Stop or narrow replenishment recommendations when:

- source coverage is insufficient;
- lead-time/cost defaults dominate output;
- false stockouts harm repairs;
- recommendations create excess stock;
- employees bypass reservations;
- demand priority becomes unfair or opaque;
- simpler min/max policy performs equally well.

## 14. Honest maturity

- demand/shortage semantics: designed;
- service-level targets: not calibrated;
- supplier/lead-time source inventory: pending;
- reorder engine: not implemented;
- purchasing authority: not authorized.