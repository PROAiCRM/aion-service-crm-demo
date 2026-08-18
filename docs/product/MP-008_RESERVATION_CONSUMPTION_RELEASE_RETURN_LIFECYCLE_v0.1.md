# MP-008 Smart Warehouse — Reservation, Consumption, Release & Return Lifecycle v0.1

**Status:** DESIGNED — NOT IMPLEMENTED  
**Date:** 2026-08-01

## 1. Purpose

Define one safe lifecycle from repair demand to final inventory outcome and protect against double reservation, double consumption, invalid release and ambiguous network results.

## 2. Reservation lifecycle

```text
REQUESTED
→ RESERVED_ACTIVE
→ CONSUMED
  | RELEASED_UNUSED
  | CANCELLED_BEFORE_RESERVE
  | EXPIRED_REVIEW_REQUIRED
```

A reservation is linked to:

- tenant/workspace;
- location;
- SKU/variant;
- demand subject, normally service order;
- requested quantity;
- reservation identity/version;
- actor and authority;
- created/expires timestamps;
- idempotency identity;
- source rule and receipt.

## 3. Reservation rules

- one active logical reservation per demand/SKU identity unless explicit split policy exists;
- reservation quantity cannot exceed trusted available quantity unless governed backorder is approved;
- reservation does not mean consumption;
- cancellation of an order does not silently release without a committed release event;
- expiry creates review eligibility, not automatic release in v0.1;
- changing quantity creates a versioned adjustment, not hidden edit.

## 4. Consumption lifecycle

Consumption requires:

- active reservation or approved direct-consumption exception;
- order/action state allowing part use;
- actor/authority;
- exact quantity;
- idempotency identity;
- committed transaction boundary;
- Action Receipt.

One logical consumption can commit once.

Retry after timeout returns the existing result or reconciles `UNKNOWN`; it does not consume again.

## 5. Release lifecycle

Release is permitted when:

- reservation is active;
- quantity remains unconsumed;
- demand was cancelled, changed or completed without the part;
- authority and reason are present;
- no conflicting consumption exists.

Release result:

```text
RESERVED_ACTIVE → RELEASED_UNUSED
```

A consumed part cannot be released as unused.

## 6. Return and reversal

Separate facts:

1. business decision to reverse/cancel use;
2. physical part returned;
3. quality/condition accepted;
4. inventory quantity restored or quarantined;
5. financial/accounting consequence recorded elsewhere.

Possible states:

```text
RETURN_REQUESTED
→ PHYSICAL_RETURN_CONFIRMED
→ ACCEPTED_TO_STOCK
  | QUARANTINED
  | REJECTED_NOT_STOCKABLE
```

The system must not restore available quantity from a request alone.

## 7. Damaged/defective parts

Defective or uncertain-condition parts go to quarantine. They are not available for repairs until a governed disposition passes.

No automatic supplier claim or write-off in v0.1.

## 8. Transfers

A future location transfer requires paired states:

```text
TRANSFER_PREPARED
→ DISPATCHED_FROM_SOURCE
→ IN_TRANSIT
→ RECEIVED_AT_DESTINATION
```

Source deduction and destination availability cannot both occur before their approved events. Transfer is outside first slice unless canonical sources already support it safely.

## 9. Unknown result

When network response is lost:

> “Result unknown. The movement may already be committed. Checking — do not repeat.”

Required behavior:

- preserve same idempotency identity;
- query receipt/status;
- block new identity until reconciliation or authorized resolution;
- retain safe pending journal without raw sensitive payload;
- never automatic blind retry.

## 10. Transaction boundary

Where a business action requires an inventory effect and receipt, the critical state change must be atomic or explicitly recoverable.

Examples:

- consume part + advance approved repair action;
- release reservation + cancel demand link;
- accept return + create movement receipt.

Partial success must become a visible contradiction/case.

## 11. Adjustment boundary

Manual adjustment is not an ordinary edit. It requires:

- reason code;
- old/new quantity consequence preview;
- count or supporting Evidence;
- authorized role and step-up when required;
- idempotency;
- immutable receipt;
- optional second review above threshold.

## 12. Audit and correction

Movement history is append-only. Corrections use reversal/adjustment events; no silent deletion or rewriting.

## 13. Role direction

- employee: reserve/consume/release only within approved order workflow;
- manager: review exceptions and bounded adjustments;
- owner: high-impact adjustment, write-off/purchase policy and reconciliation decisions;
- AI: read-only explanation/candidate suggestion only.

Exact grants require source/authorization review.

## 14. Failure states

- insufficient available quantity;
- stale order/reservation version;
- duplicate logical movement;
- conflicting consumed/released state;
- physical return missing;
- location mismatch;
- unit mismatch;
- unknown result;
- source unavailable;
- cross-tenant attempt.

Every failure has bounded code and safe remediation path.

## 15. Honest maturity

- lifecycle: designed;
- historical reservation/release E2E anchors exist in PR #13;
- unified current source: unverified;
- return/quarantine implementation: not proven;
- transfer: not in first MVP;
- runtime Evidence: pending.