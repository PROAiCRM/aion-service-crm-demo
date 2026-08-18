# MP-008 Smart Warehouse — Overstock, Ageing & Working-Capital Semantics v0.1

**Status:** DESIGNED — NOT IMPLEMENTED  
**Date:** 2026-08-01

## 1. Purpose

Identify stock that may be excessive or ageing without claiming loss, margin or recoverable cash before the evidence exists.

## 2. Core distinctions

```text
stock on hand != excess stock
slow movement != obsolete
purchase cost != recoverable cash
potential gross value != margin
margin != profit
```

## 3. Age basis

An ageing statement requires a reliable origin such as:

- received-at timestamp;
- lot/batch receipt;
- approved opening-balance date;
- last inward movement when policy explicitly allows approximation.

Unknown age remains `UNKNOWN`. It cannot be silently set to the migration/import date.

## 4. Candidate ageing bands

Bands are owner-approved policy, for example:

- current;
- attention;
- slow-moving;
- long-held;
- review-required.

No universal day thresholds are assumed. Category differences matter.

## 5. Overstock candidate

A SKU is an overstock candidate only when:

- trusted available quantity exceeds an approved demand/buffer basis;
- data window and SKU identity are stable;
- active reservations and confirmed demand are excluded correctly;
- compatibility/substitution is not double counted;
- inbound quantities are separated;
- cost and disposition options are disclosed as known/unknown.

Overstock is a hypothesis for review, not an automatic write-down.

## 6. Working-capital exposure

Allowed components:

- quantity under review;
- known purchase/landed cost where governed;
- valuation method/version;
- directly measured holding period;
- confirmed resale/return/write-off outcome.

Allowed wording:

> “₽X of known recorded purchase cost is tied to stock older than the approved threshold.”

Not allowed:

> “AION found ₽X lost profit.”

## 7. Unknown cost

When cost is incomplete:

- show affected quantity and age;
- display `COST_UNKNOWN`;
- do not substitute current sales price;
- do not calculate margin/profit;
- recommend source verification if material.

## 8. Disposition options

Human-reviewed candidates may include:

- keep due to confirmed demand;
- reduce future reorder;
- return to supplier if contractually possible;
- transfer location;
- use approved compatible substitution;
- sell through a separately governed channel;
- quarantine/write-off under authority;
- monitor.

MP-008 does not execute these automatically.

## 9. Double-counting protection

The same units cannot simultaneously be counted as:

- active reservation and excess stock;
- confirmed inbound and on-hand;
- returned to supplier and available;
- quarantined and saleable;
- released working capital and realized cash without actual outcome.

## 10. Outcome semantics

- `IDENTIFIED_EXPOSURE` — candidate quantity/cost under review;
- `ACTION_APPROVED` — human decision exists;
- `QUANTITY_REDUCED` — reconciled stock quantity changed;
- `PURCHASE_AVOIDED_CANDIDATE` — planned reorder reduced, not yet realized cash;
- `CASH_REALIZED` — actual reconciled proceeds/refund;
- `WRITE_OFF_CONFIRMED` — governed loss recognized;
- `NO_ACTION_JUSTIFIED` — retained for documented demand reason.

## 11. Pilot metrics

- ageing inventory share under approved definition;
- count/value with unknown cost;
- expired reservation quantity;
- stock reduced through governed action;
- emergency purchase and shortage guardrails;
- false overstock recommendation rate;
- actual supplier return/refund or sale outcome where reconciled.

## 12. Stop criteria

Stop ageing/working-capital recommendations when:

- receipt dates are unreliable;
- cost data is too incomplete;
- recommendations increase shortages;
- category-specific thresholds are ignored;
- users treat exposure as confirmed loss;
- the same units are counted in multiple outcomes.

## 13. Honest maturity

- semantics: designed;
- ageing source coverage: unknown;
- cost governance: not established;
- disposition automation: prohibited;
- realized working-capital result: not measured.