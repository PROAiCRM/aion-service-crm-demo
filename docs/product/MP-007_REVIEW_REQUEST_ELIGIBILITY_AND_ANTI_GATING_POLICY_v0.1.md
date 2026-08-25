# MP-007 Reputation Booster — Review-Request Eligibility & Anti-Gating Policy v0.1

**Status:** DESIGNED — NOT IMPLEMENTED  
**Date:** 2026-08-01

## 1. Purpose

Define when a neutral public-review request may be offered without review gating, coercion, selective routing or platform-policy abuse.

## 2. Core rule

> Eligibility is based on completed service, contact permission and safe timing—not on whether the customer is expected to leave a positive review.

## 3. Eligibility contract

Every candidate review request requires:

```text
candidateId
organizationId
workspaceId
serviceOrderSafeRef
eligibilityRuleVersion
serviceCompletionEvidence
customerRecipientValidity
contactPermissionState
channelPermissionState
quietHoursState
frequencyState
optOutState
openRecoveryState
safetyOrPrivacyBlockerState
platformPolicyState
requestTemplateVersion
idempotencyIdentity
eligibilityResult
blockerCodes[]
createdAtTrusted
```

Missing required input blocks eligibility.

## 4. Minimum positive conditions

A request may be eligible only when:

- service order is genuinely completed or issued under approved policy;
- recipient is matched to the correct customer/order;
- approved contact purpose and channel exist;
- no opt-out applies;
- frequency and quiet-hours rules pass;
- no wrong-recipient or privacy incident is open;
- no P0/P1 unresolved recovery blocker exists;
- request wording is neutral and current;
- public platform/link is approved and available;
- one logical request has not already been completed for the same eligible event/window.

## 5. Anti-gating invariant

The system must not:

- ask for satisfaction privately and show a public-review link only to positive respondents;
- route negative respondents exclusively into a private form while hiding the public route;
- use predicted sentiment, customer value or employee choice to determine public-review access;
- ask employees to select only “happy-looking” customers;
- make the link conditional on a high score;
- suppress or delay public-review access as punishment for negative feedback.

If a neutral feedback step precedes the public request, its outcome must not secretly determine whether the public route is available, except for narrowly defined safety/recovery timing that does not remove the customer’s independent right to review.

## 6. Recovery-first timing

An active material service problem may pause automated promotional prompting because asking for praise during unresolved harm is inappropriate.

This pause:

- is based on explicit P0/P1 recovery state, not sentiment;
- has a bounded review date;
- does not require the customer to change/remove a review;
- does not hide how to contact the business or public platform;
- ends after resolution/closure policy or customer choice;
- is visible in audit Evidence.

## 7. Neutral request wording

Allowed direction:

> “Спасибо, что обратились в сервис. Если хотите, поделитесь честным опытом — это помогает другим клиентам и нам улучшать работу.”

Required properties:

- “если хотите” / voluntary;
- “честным опытом” / not positive-only;
- no star target;
- no reward;
- no urgency manipulation;
- no employee pressure;
- easy opt-out.

Forbidden:

- “Поставьте 5 звёзд”;
- “Помогите сотруднику получить премию”;
- “Покажите отзыв и получите скидку”;
- “Если всё понравилось — оставьте отзыв; если нет — напишите только нам”;
- “Удалите отзыв, и мы решим проблему”.

## 8. Platform policy boundary

Before any external review-platform integration, record:

- platform name and region;
- approved link/integration method;
- current terms/policies reviewed date;
- prohibited incentives/gating rules;
- API or deep-link permissions;
- data sharing and retention;
- account authority;
- rollback/disable path.

Because platform policies can change, operational approval expires and requires periodic review.

## 9. Frequency rules

Default direction for pilot:

- one request per completed eligible repair event;
- no repeated request after customer opt-out;
- no repeated request after confirmed public-review outcome;
- bounded retry only for proven delivery failure, not non-response;
- organization-level cap per customer/time window;
- all related campaigns share a frequency ledger.

Exact limits require legal/channel and pilot calibration.

## 10. Idempotency and unknown result

A send command has a stable logical identity before submission.

When network result is unknown:

```text
request may have been sent
→ do not create a new identity
→ reconcile provider/internal receipt
→ show UNKNOWN_RESULT
→ retry only under the same idempotency policy if proven safe
```

Blind resend is prohibited.

## 11. Eligibility blockers

Examples:

- `ORDER_NOT_COMPLETED`;
- `RECIPIENT_UNVERIFIED`;
- `CONTACT_PERMISSION_UNKNOWN`;
- `CHANNEL_NOT_ALLOWED`;
- `CUSTOMER_OPTED_OUT`;
- `FREQUENCY_LIMIT`;
- `QUIET_HOURS`;
- `OPEN_HIGH_PRIORITY_RECOVERY`;
- `WRONG_RECIPIENT_INCIDENT`;
- `PLATFORM_POLICY_EXPIRED`;
- `REQUEST_ALREADY_COMPLETED`;
- `DELIVERY_RESULT_UNKNOWN`;
- `TEMPLATE_NOT_APPROVED`;
- `TENANT_SCOPE_INVALID`.

Blockers are shown without blaming staff.

## 12. Employee boundary

Employee may:

- see that a request is eligible or blocked;
- confirm safe context when policy requires;
- trigger an approved request through a protected command if granted;
- report wrong recipient/problem.

Employee may not:

- override opt-out;
- edit wording freely in MVP;
- choose customers by expected rating;
- promise reward;
- bypass frequency;
- post a review for a customer.

## 13. Outcome states

- `ELIGIBLE_NOT_REQUESTED`;
- `REQUEST_APPROVED`;
- `REQUEST_SENT_CONFIRMED`;
- `REQUEST_DELIVERY_FAILED`;
- `REQUEST_RESULT_UNKNOWN`;
- `CUSTOMER_OPTED_OUT`;
- `CUSTOMER_DECLINED`;
- `PUBLIC_REVIEW_DECLARED`;
- `PUBLIC_REVIEW_VERIFIED` where approved Evidence exists;
- `NO_RESPONSE`.

`NO_RESPONSE` is not failure or dissatisfaction.

## 14. Audit receipt

Future request receipt should bind:

```text
candidateId
eligibilityRuleVersion
permissionSnapshotRef
recoverySnapshotRef
platformPolicyVersion
templateVersion
actor/authority
idempotencyIdentityHash
sendOutcome
providerReceiptSafeRef
recordedAtTrusted
```

No message body, phone, platform credentials or token is included in general Evidence.

## 15. Stop criteria

Stop review requests immediately when:

- gating behavior is discovered;
- platform policy becomes unknown/expired;
- opt-outs are not honored;
- wrong-recipient message occurs;
- duplicates appear;
- employees are incentivized by positive-rating count;
- complaint pressure increases;
- the business refuses to recover unresolved issues.

## 16. Honest maturity

- eligibility policy: designed;
- platform policy inventory: not performed;
- consent/frequency ledger: not implemented;
- request adapter: not implemented;
- live requests: not authorized;
- compliance Evidence: none.