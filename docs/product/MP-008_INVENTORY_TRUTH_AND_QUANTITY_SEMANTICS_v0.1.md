# MP-008 Smart Warehouse — Inventory Truth & Quantity Semantics v0.1

**Status:** DESIGNED — NOT IMPLEMENTED  
**Date:** 2026-08-01

## 1. Purpose

Define exact warehouse quantities and prevent the interface from presenting uncertain, reserved or contradictory stock as freely available.

## 2. Canonical quantity components

For one SKU, location and lot/identity scope where applicable:

- `ON_HAND_OBSERVED` — quantity supported by committed inventory movements and approved opening/count evidence;
- `RESERVED_ACTIVE` — quantity held for active demand;
- `AVAILABLE_CALCULATED` — on-hand less valid active reservations and other approved holds;
- `CONSUMED_COMMITTED` — quantity committed to a repair or other approved use;
- `RETURN_PENDING_PHYSICAL` — reversal requested but physical return not yet confirmed;
- `RETURNED_CONFIRMED` — physically returned and accepted under policy;
- `DAMAGED_OR_QUARANTINED` — present but unavailable for normal use;
- `IN_TRANSIT_CONFIRMED` — governed inbound movement, not on-hand;
- `UNCERTAIN` — source gaps or conflicts prevent a trusted quantity;
- `COUNT_VARIANCE` — approved physical count differs from system projection.

## 3. Core equations

Conceptual only; exact implementation depends on source inventory:

```text
available = on_hand
          - active_reservations
          - quarantine
          - other_governed_holds
```

Inbound and pending return are not included in available until their completion rules pass.

## 4. Truth classes

- `OBSERVED` — committed movement/count/receipt;
- `DERIVED` — arithmetic projection from observed inputs;
- `DECLARED` — authorized human declaration awaiting verification;
- `UNKNOWN` — required source unavailable;
- `CONTRADICTION` — sources disagree materially;
- `SIMULATED` — what-if purchase or demand scenario.

A simulated reorder never changes current availability.

## 5. Required quantity identity

Every quantity projection is scoped by:

```text
organizationId
workspaceId
locationId
skuId
variant/compatibility identity
lot/serial/batch when required
unitOfMeasure
projectionVersion
sourceCutoff
```

Cross-location or compatible-but-not-identical parts cannot be merged silently.

## 6. Unit policy

Each SKU has one canonical unit of measure. Conversion requires an approved versioned rule.

Forbidden:

- mixing pieces and packs without conversion;
- rounding fractional quantities silently;
- treating compatible models as the same SKU;
- using display label as identity.

## 7. Negative and impossible states

Negative availability, consumed greater than committed supply, simultaneous consumed/released state, or duplicate active reservation identity results in:

- `CONTRADICTION`;
- blocked strong recommendation;
- MP-004 case when governed exposure exists;
- explicit reconciliation action.

The UI must not clamp negative quantity to zero.

## 8. Missing data behavior

Missing opening balance, location, movement source, unit or reservation identity cannot become zero.

Allowed display:

> “Доступный остаток нельзя подтвердить: отсутствует исходный баланс.”

## 9. Cost boundary

Quantity truth is independent from valuation.

Separate fields/states:

- purchase cost known/unknown;
- landed cost known/unknown;
- replacement cost estimate;
- sales price;
- write-down;
- tax/accounting value.

No margin/profit claim is derived from quantity alone.

## 10. Physical count

A physical count is an observed declaration only after:

- location and SKU identity confirmed;
- counter identity/authority recorded;
- count timestamp trusted;
- duplicate count policy applied;
- discrepancy reviewed;
- adjustment command separately approved.

Count does not silently rewrite movement history.

## 11. Freshness

Quantity projection states:

- `LIVE`;
- `DELAYED`;
- `STALE`;
- `OFFLINE_SNAPSHOT`;
- `UNAVAILABLE`.

Stale stock cannot be used for a strong availability promise without a recheck.

## 12. Projection receipt proposal

A future receipt binds:

```text
projectionId
scope identity
source event digest
onHand
reserved
available
quarantined
uncertain
contradiction codes
freshness
formulaVersion
createdAtTrusted
```

No customer PII or supplier secrets are required.

## 13. Honest maturity

- quantity semantics: designed;
- canonical source mapping: pending;
- projection implementation: absent;
- physical count workflow: not implemented;
- valuation accuracy: not proven.