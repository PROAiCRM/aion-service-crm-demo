# MP-007 Reputation Booster — Feedback & Recovery Taxonomy v0.1

**Status:** DESIGNED — NOT IMPLEMENTED  
**Date:** 2026-08-01

## 1. Purpose

Define bounded customer-feedback states and service-recovery triggers without using an unrestricted sentiment score or treating every negative response as public-reputation risk.

## 2. Core distinctions

```text
feedback signal != verified service problem
negative feeling != employee fault
service problem != public complaint
resolved recovery != positive review
review request != review outcome
```

## 3. Minimum feedback record

A future feedback record should bind:

```text
feedbackId
organizationId
workspaceId
serviceOrderSafeRef
customerContactSafeRef
feedbackDefinitionVersion
channel
receivedAtTrusted
responseMode
boundedResponseCodes[]
optionalFreeTextPresent
freeTextAccessClass
truthClass
sourceMessageReceiptRef
contactPermissionSnapshotRef
privacyClass
```

Rules:

- tenant/workspace scope is mandatory;
- the customer can submit feedback without a public review;
- bounded response codes are preferred for MVP;
- free text is optional and separately protected;
- no employee blame field exists;
- corrections append a new evaluation, not silent overwrite.

## 4. Feedback states

### `NO_FEEDBACK`

No response has been received. This is not satisfaction.

### `EXPERIENCE_OK`

Customer reports that the experience is satisfactory or no issue remains.

This does not guarantee a five-star review and must not be converted into one.

### `QUESTION_OR_CLARIFICATION`

Customer needs information but does not report a service failure.

### `MINOR_FRICTION`

Customer reports a bounded inconvenience that may need follow-up but does not indicate safety, device-function or warranty failure.

### `UNRESOLVED_SERVICE_ISSUE`

Customer reports that the repair outcome, device condition, agreed work, completeness or communication remains unresolved.

### `SAFETY_OR_DATA_CONCERN`

Potential device safety, data exposure, privacy or prohibited-data incident. Highest-priority human review.

### `WARRANTY_OR_REWORK_REQUEST`

Customer requests warranty review, repeat diagnosis or correction.

### `COMPLAINT_ABOUT_COMMUNICATION`

Problem relates to promise, delay, explanation, accessibility or staff communication.

### `CONTACT_OR_IDENTITY_ERROR`

Wrong recipient, wrong order, outdated contact or identity mismatch. Contact must stop until reconciled.

### `OPT_OUT`

Customer declines further non-essential contact. Durable suppression is required.

### `PUBLIC_REVIEW_SHARED`

Customer voluntarily reports that a public review was posted. This remains a declaration until platform or link Evidence confirms it.

## 5. Recovery-priority classes

### P0 — safety, privacy or wrong-recipient risk

Immediate stop and authorized review.

### P1 — unresolved repair, warranty, device condition or missing item

Human review within strict SLA.

### P2 — material communication/service experience failure

Human follow-up and outcome.

### P3 — minor friction or clarification

Bounded response without escalation when policy permits.

### P4 — positive/neutral experience

May become review-request eligible only after all independent checks pass.

## 6. Recovery eligibility

A recovery case is created when:

- P0/P1/P2 feedback is recorded;
- an existing order/warranty/QC contradiction is detected;
- a public complaint is imported through an approved source and matched safely;
- customer explicitly requests human contact;
- unresolved prior recovery remains open.

One underlying experience should create one recovery case, with subsequent messages appended.

## 7. Feedback collection wording

The first question must be neutral, for example:

> “Всё ли решено по вашему ремонту?”

Allowed bounded choices:

- “Да, всё хорошо”;
- “Есть вопрос”;
- “Проблема не решена”;
- “Не хочу получать сообщения”.

Forbidden first question:

> “Поставите нам 5 звёзд?”

## 8. Free-text boundary

Free text may contain sensitive data, accusations, device credentials or personal information.

MVP rules:

- not required;
- length bounded;
- warning not to include passwords/codes;
- excluded from ordinary logs and aggregate Evidence;
- access controlled;
- no external AI by default;
- retention policy required;
- staff may create bounded classification codes after review.

## 9. Public-review relationship

Feedback states do not determine whether the customer is allowed to leave a public review. The business must not hide public-review access based on sentiment.

The system may pause an automated promotional request while a material unresolved issue is being actively recovered, but it must not:

- tell dissatisfied customers that public reviews are unavailable;
- redirect only positive customers to public platforms;
- offer compensation for changing/removing a review;
- condition recovery on review removal.

## 10. Resolution states

A recovery can conclude as:

- `RESOLVED_CONFIRMED_BY_CUSTOMER`;
- `RESOLVED_OPERATIONALLY`;
- `PARTIAL_RESOLUTION_ACCEPTED`;
- `NO_SERVICE_FAILURE_CONFIRMED`;
- `CUSTOMER_UNREACHABLE_AFTER_ALLOWED_ATTEMPTS`;
- `CUSTOMER_DECLINED_FURTHER_CONTACT`;
- `ESCALATED_WARRANTY`;
- `ESCALATED_LEGAL_OR_SAFETY`;
- `UNRESOLVED_STOP_REQUIRED`.

A positive review is never a resolution code.

## 11. Aggregate metrics

Allowed:

- feedback response rate;
- unresolved-problem rate;
- recovery review SLA;
- valid recovery outcome rate;
- opt-out rate;
- wrong-recipient rate;
- customer-confirmed resolution rate;
- neutral review-request eligibility rate.

Not allowed without evidence:

- “customer happiness score”;
- employee reputation score;
- predicted star rating;
- exact future rating uplift.

## 12. Anti-gaming controls

The business must not improve metrics by:

- excluding dissatisfied customers from invitations;
- reclassifying unresolved feedback as clarification;
- closing recovery without outcome Evidence;
- deleting negative free text;
- avoiding feedback requests on difficult repairs;
- pressuring employees to solicit only positive responses;
- using private discounts to buy review edits.

## 13. Privacy boundary

Aggregate views use counts and safe references. Individual drill-down requires current authorization.

Never expose in aggregate Evidence:

- full customer identity;
- phone/email;
- IMEI/serial;
- message content;
- medical/financial/sensitive personal data;
- staff accusation text;
- platform account identifiers.

## 14. Honest maturity

- taxonomy: designed;
- bounded forms/templates: not implemented;
- recovery-case normalizer: not implemented;
- free-text legal/retention review: pending;
- runtime Evidence: none.