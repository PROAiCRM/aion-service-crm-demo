# MP-006 Opportunity Engine — Opportunity Taxonomy & Eligibility Contract v0.1

**Status:** DESIGNED — NOT IMPLEMENTED  
**Date:** 2026-08-01

## 1. Core distinctions

```text
source signal != eligible opportunity
eligible opportunity != permitted contact
permitted contact != customer acceptance
customer acceptance != realized value
realized turnover != profit
```

## 2. Minimum opportunity candidate contract

Every candidate requires:

```text
opportunityId
familyCode
familyDefinitionVersion
organizationId
workspaceId
subjectType
subjectSafeRef
sourceFactRefs[]
observationWindow
eligibilityState
exclusionCodes[]
relevanceReasonCode
customerBenefitCode
contactPermissionState
allowedChannels[]
frequencyState
expectedValueClass
expectedValueRangeOrNull
costRangeOrNull
priorityClass
freshnessState
truthClass
createdAtTrusted
```

Rules:

- same facts and definition create stable candidate identity;
- missing mandatory facts block eligibility;
- one customer/order need cannot appear as several counted opportunities;
- tenant scope is exact;
- historical correction creates reevaluation, not silent overwrite;
- free-form AI output cannot create canonical eligibility.

## 3. Candidate families

### 3.1 Ready-order collection

`READY_ORDER_COLLECTION_OPPORTUNITY`

Requires:

- order genuinely ready under approved state rules;
- QC and required business gates passed;
- collection not completed;
- reminder threshold reached;
- no active dispute, stop condition or prohibited contact state;
- valid contact permission/channel or non-contact owner action.

Customer benefit: timely return of repaired device and clear collection information.

### 3.2 Pending approval completion

`PENDING_APPROVAL_COMPLETION_OPPORTUNITY`

Requires:

- explicit customer decision requested;
- complete quote/diagnostic information;
- no later decision recorded;
- approved follow-up threshold;
- no expired or materially changed offer.

It cannot pressure a customer or conceal that approval is optional.

### 3.3 Permitted service-care follow-up

`PERMITTED_STATUS_OR_CARE_FOLLOWUP_OPPORTUNITY`

A useful post-service instruction, care reminder or check-in tied to the actual completed repair.

It must not become unrelated promotion.

### 3.4 Review request

`REVIEW_REQUEST_OPPORTUNITY`

Requires:

- completed eligible service;
- no unresolved complaint/dispute/return;
- permitted channel;
- frequency cap;
- neutral request without reward for positive sentiment.

Review content and rating are never fabricated.

### 3.5 Repeat-service relevance

`REPEAT_SERVICE_RELEVANCE_OPPORTUNITY`

Requires a real relevance mechanism such as an approved maintenance need or prior customer request. Mere passage of time or customer value score is insufficient.

### 3.6 Waitlist/unavailable-service recovery

`WAITLIST_OR_UNAVAILABLE_SERVICE_RECOVERY_OPPORTUNITY`

Requires:

- recorded prior unmet request;
- customer allowed follow-up or explicitly requested notification;
- service/part now genuinely available;
- current terms disclosed.

### 3.7 Part-available demand match

`PART_AVAILABLE_DEMAND_MATCH_OPPORTUNITY`

Requires a recorded unresolved need linked to the part/service. Overstock alone does not justify customer contact.

### 3.8 Warranty or maintenance reminder

`WARRANTY_OR_MAINTENANCE_REMINDER_OPPORTUNITY`

Requires an approved policy and accurate dates. It cannot create false urgency or misrepresent warranty rights.

### 3.9 Capacity-fill opportunity

`CAPACITY_FILL_OPPORTUNITY`

May propose a bounded owner action when verified capacity exists and an eligible demand population is available. It cannot automatically discount prices or broadcast to all customers.

### 3.10 Proven-pain-reduction expansion

`PROVEN_PAIN_REDUCTION_EXPANSION_OPPORTUNITY`

Requires a supported MP-005 experiment and a comparable eligible context. A single positive result does not justify automatic scale.

## 4. Eligibility states

- `ELIGIBLE_FOR_REVIEW`;
- `ELIGIBLE_NO_CONTACT_ACTION`;
- `NEEDS_PERMISSION_EVIDENCE`;
- `NEEDS_RELEVANCE_REVIEW`;
- `NEEDS_VALUE_REVIEW`;
- `EXCLUDED`;
- `STALE`;
- `CONTRADICTED`;
- `ALREADY_ACTIONED`;
- `ACTIVE_EXPERIMENT`.

## 5. Required exclusions

Examples:

- active complaint or dispute;
- opt-out or channel prohibition;
- legal/policy hold;
- wrong or unverified recipient;
- duplicate recent contact;
- order/payment/status contradiction;
- synthetic/training record;
- customer-requested no follow-up;
- unresolved warranty return;
- offer no longer available;
- contact outside permitted hours;
- insufficient source freshness;
- already completed outcome;
- small-group/privacy suppression where applicable.

## 6. Relevance gate

Every opportunity must answer:

1. What verified need or benefit exists for the customer?
2. Which facts support relevance?
3. Why is action timely now?
4. What could make the action irrelevant or harmful?
5. Is a no-contact operational action preferable?

A business desire to sell is not customer relevance.

## 7. Population and denominator

Every opportunity family declares:

- eligible population;
- included/excluded subjects;
- window;
- source coverage;
- deduplication;
- permission coverage;
- actioned population;
- realized-outcome population.

Counts without a denominator are workload, not conversion opportunity rate.

## 8. Deduplication

One underlying need may generate several technical signals. Deduplicate by registered key, e.g.:

- one ready order with several reminder checks;
- one pending approval with repeated status events;
- one waitlist request matched by multiple inventory updates;
- one review-eligible order shown across several screens.

## 9. Freshness

- `CURRENT` — usable for action;
- `DELAYED` — review required;
- `STALE` — action blocked;
- `UNAVAILABLE` — no opportunity conclusion.

A stale address, phone, price, stock state or order status blocks customer contact.

## 10. Anti-gaming

The product must not encourage:

- delaying order completion to inflate opportunity count;
- suppressing complaints to enable review requests;
- creating artificial discounts;
- duplicating waitlist entries;
- reclassifying marketing consent;
- counting organic purchases as product-created;
- contacting the same customer through multiple channels to raise conversion.

## 11. Honest maturity

- taxonomy: designed;
- exact thresholds: not calibrated;
- source adapters: not implemented;
- eligibility engine: not implemented;
- live eligible population: unknown.