# MP-006 Opportunity Engine — Expected Value & Realized Outcome Semantics v0.1

**Status:** DESIGNED — NOT IMPLEMENTED  
**Date:** 2026-08-01

## 1. Purpose

Prevent Opportunity Engine from presenting hypothetical turnover, uncertain conversion, open debt or gross payment as proven profit or value created by AION.

## 2. Value classes

### `OBSERVED_ELIGIBLE_BASE`

The count or amount already present in trusted source facts.

Example: six ready orders with a combined confirmed outstanding balance.

This is not value created by MP-006.

### `POTENTIAL_GROSS_VALUE`

The maximum gross amount associated with an eligible population if all intended outcomes occur.

It is a ceiling, not a forecast and not profit.

### `EXPECTED_VALUE_RANGE`

A bounded estimate based on an approved method, explicit assumptions and historical evidence.

It must show:

- method/version;
- population;
- range, not false precision;
- assumptions;
- missing costs;
- attribution limitation.

### `REALIZED_GROSS_VALUE`

A reconciled payment or booked value after the approved action and outcome.

It may include demand that would have occurred without MP-006; attribution remains separate.

### `REALIZED_CONTRIBUTION_VALUE`

Realized gross value minus governed directly attributable variable costs, only when those costs are complete and policy-approved.

It is not accounting profit.

### `ATTRIBUTED_INCREMENTAL_VALUE`

The measured difference versus a valid baseline/control attributable to the intervention under the registered method.

This is the strongest v0.1 economic result but remains scoped to the experiment.

### `CUSTOMER_VALUE_OUTCOME`

A non-financial customer benefit such as faster collection, restored access, useful care information or reduced uncertainty.

### `UNKNOWN`

Value cannot be estimated or reconciled safely.

## 3. Prohibited equivalences

```text
outstanding balance != lost money
potential gross value != expected revenue
expected revenue != realized revenue
realized revenue != incremental revenue
incremental revenue != contribution margin
contribution margin != profit
message sent != opportunity realized
customer click != completed service
```

## 4. Expected-value contract

A future estimate binds:

```text
estimateId
opportunityFamilyCode
populationSnapshotId
methodId/methodVersion
observedEligibleCount
observedGrossBaseOrNull
historicalComparableWindowIds[]
assumptions[]
conversionRangeOrNull
averageValueRangeOrNull
costRangeOrNull
expectedGrossRangeOrNull
expectedContributionRangeOrNull
uncertaintyCodes[]
truthClass = SIMULATED_EFFECT
createdAtTrusted
```

No estimate may be displayed without method and limitations.

## 5. Realized-outcome contract

A reconciled result binds:

```text
opportunityId
approvedActionId
actionReceiptId
outcomeCode
outcomeOccurredAt
sourcePayment/order/review/bookingRefs[]
realizedGrossValueOrNull
directCostValueOrNull
realizedContributionValueOrNull
attributionState
baselineOrControlRefOrNull
guardrailResult
reconciliationState
```

## 6. Outcome codes

Examples:

- `ORDER_COLLECTED`;
- `PAYMENT_COMPLETED`;
- `REPAIR_APPROVED`;
- `SERVICE_BOOKED`;
- `SERVICE_COMPLETED`;
- `REVIEW_SUBMITTED`;
- `CUSTOMER_DECLINED`;
- `CONTACT_UNDELIVERED`;
- `NO_RESPONSE`;
- `INELIGIBLE_AFTER_REVIEW`;
- `DUPLICATE_ORGANIC_OUTCOME`;
- `STOPPED_GUARDRAIL`;
- `UNKNOWN_RESULT`.

## 7. Attribution states

- `NOT_ASSESSED`;
- `ORGANIC_POSSIBLE`;
- `TEMPORALLY_ASSOCIATED`;
- `SUPPORTED_BY_BASELINE`;
- `SUPPORTED_BY_CONTROL_GROUP`;
- `CONTRADICTED`;
- `UNATTRIBUTABLE`.

A timestamp after a message is not sufficient for causal attribution.

## 8. Double-count prevention

The same realized event cannot be counted in several products or opportunity families without explicit allocation.

Examples:

- collection payment counted once even if both reminder and Owner Pulse showed it;
- one repeat repair cannot count as waitlist recovery and repeat-service conversion unless separate outcomes exist;
- MP-004 recovered amount is not added again as MP-006 value;
- MP-005 pain reduction and MP-006 growth value remain distinct.

Use stable outcome identity and deduplication.

## 9. Price, discount and margin boundary

MP-006 cannot:

- create or approve a price;
- change a quote;
- calculate margin from incomplete part costs;
- recommend discount merely to improve conversion;
- hide tax, warranty or fulfillment cost;
- treat list price as realizable value.

Discount experiments require a separate approved Price & Margin Policy, authority, limits and margin guardrails.

## 10. Display policy

Preferred:

- “eligible base: 8 orders”;
- “potential gross balance: ₽X”;
- “expected outcome is not yet estimated”;
- “estimated range based on prior comparable cohort”;
- “realized payment after action: ₽X; incremental attribution not proven”.

Forbidden:

- “AION will earn ₽X today”;
- “guaranteed revenue”;
- “profit opportunity ₽X” without complete governed model;
- exact single-number forecast from a tiny sample.

## 11. Victory economics

Economic Victory requires:

- valid realized outcome;
- action cost measured or bounded;
- customer harm/complaint guardrails passed;
- attribution method declared;
- no double count;
- owner accepts the interpretation.

A useful customer outcome may still be a product Victory even when direct money is not measurable.

## 12. Honest maturity

- semantics: designed;
- estimate methods: not calibrated;
- cost model: not approved;
- reconciliation engine: not implemented;
- attribution experiments: none;
- economic result: not proven.