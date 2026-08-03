# MP-007 Reputation Booster — Contact, Consent & Channel Policy v0.1

**Status:** DESIGNED — NOT IMPLEMENTED  
**Date:** 2026-08-01

## 1. Purpose

Define when MP-007 may contact a customer for feedback, service recovery or a public-review request without turning operational contact into unrestricted marketing.

## 2. Purpose separation

Contact purposes are separate:

- `SERVICE_RECOVERY` — respond to an unresolved problem or customer request;
- `TRANSACTIONAL_FEEDBACK` — ask whether the completed service is resolved;
- `PUBLIC_REVIEW_REQUEST` — invite an optional honest public review;
- `REFERRAL_REQUEST` — future separate purpose, not included automatically;
- `MARKETING` — outside MP-007 v0.1.

Permission for one purpose does not automatically authorize another.

## 3. Permission states

- `ALLOWED_EXPLICIT`;
- `ALLOWED_TRANSACTIONAL_POLICY`;
- `ALLOWED_CUSTOMER_REQUESTED`;
- `DENIED_OPT_OUT`;
- `DENIED_CHANNEL`;
- `UNKNOWN`;
- `EXPIRED`;
- `LEGAL_REVIEW_REQUIRED`.

`UNKNOWN`, `EXPIRED` and `LEGAL_REVIEW_REQUIRED` block non-essential contact.

## 4. Channel states

For each channel—SMS, email, messenger, phone, in-app/QR—the system records:

- recipient validity;
- ownership/match confidence based on approved Evidence;
- purpose permission;
- quiet hours;
- frequency state;
- last contact outcome;
- opt-out state;
- provider availability;
- legal/platform policy version.

A valid phone number is not permission.

## 5. Contact precedence

1. P0 safety/privacy recovery under approved emergency/service policy.
2. Customer-requested recovery contact.
3. Transactional feedback where legally/policy permitted.
4. Optional public-review request.
5. No marketing escalation from MP-007.

## 6. Quiet hours and frequency

Exact rules depend on country/channel and require legal review.

Pilot direction:

- no non-essential requests during quiet hours;
- organization-wide customer frequency cap;
- one logical feedback/review sequence per eligible repair;
- opt-out suppresses all non-essential MP-007 contact;
- non-response does not justify repeated pressure;
- recovery attempts are bounded and documented.

## 7. Consent and opt-out evidence

Future consent/permission snapshot should include:

```text
permissionId
customerSafeRef
purposeCode
channel
state
sourceType
sourceReceiptRef
capturedAtTrusted
expiresAtOrNull
policyVersion
revokedAtOrNull
```

Rules:

- no client-side role or checkbox alone is authoritative without server receipt;
- revocation takes precedence;
- historical sends retain the exact permission snapshot used;
- opt-out is not deleted after a new order without explicit policy.

## 8. Message templates

Templates are versioned and approved per purpose/channel.

### Neutral feedback example

> “Здравствуйте. Всё ли решено по ремонту заказа [safe number]? Можно ответить одним вариантом: всё хорошо / есть вопрос / проблема не решена / не писать больше.”

### Recovery example

> “Мы получили сообщение, что вопрос по ремонту не решён. Ответственный сотрудник свяжется с вами в рамках указанного срока.”

### Review request example

> “Если хотите, поделитесь честным опытом по ссылке. Отзыв добровольный и не влияет на гарантию или обслуживание.”

## 9. Prohibited message content

- requested star count;
- reward for positive review;
- threat to warranty/service;
- artificial urgency;
- shame or emotional pressure;
- employee compensation dependence;
- request to remove/change a negative review as condition for help;
- hidden marketing offer;
- sensitive order/device details beyond minimum necessary;
- passwords, codes, IMEI or internal notes.

## 10. Wrong-recipient handling

If wrong recipient is suspected or reported:

- stop all contact;
- mark permission/identity as blocked;
- create privacy/control incident under approved policy;
- do not reveal more order details;
- require authorized reconciliation;
- preserve safe Evidence;
- no automatic resend to another number.

## 11. Delivery outcomes

- `NOT_ATTEMPTED`;
- `SENT_CONFIRMED`;
- `DELIVERED_CONFIRMED` where provider supports it;
- `FAILED_CONFIRMED`;
- `UNKNOWN_RESULT`;
- `RECIPIENT_REJECTED`;
- `OPT_OUT_RECEIVED`;
- `WRONG_RECIPIENT_REPORTED`.

Sent is not delivered; delivered is not read; read is not customer satisfaction.

## 12. Idempotency

Each logical contact command has a stable idempotency identity.

On timeout/lost response:

- preserve the same identity;
- reconcile before retry;
- show unknown result;
- never blind resend;
- record one durable action receipt.

## 13. Human approval

MVP recommended modes:

- recovery response: human-owned;
- feedback invitation: bounded batch or per-order human confirmation during pilot;
- review request: human-approved template/action;
- public reply: draft only, human approval mandatory.

No autonomous external send is authorized by this document.

## 14. Data minimization

Messages include only:

- safe service identity;
- safe order number if needed;
- purpose;
- approved response route;
- opt-out.

Avoid device model/problem details where not necessary.

## 15. Legal/platform gate

Before live use, review:

- local electronic communications rules;
- consumer/service communication basis;
- consent/opt-out requirements;
- channel/provider terms;
- review-platform rules;
- record retention;
- cross-border data processing.

This document is product design, not legal advice or authorization.

## 16. Stop criteria

Stop contact when:

- permission resolution is unreliable;
- opt-out latency is unacceptable;
- wrong-recipient incident occurs;
- duplicate sends occur;
- customer complaints about pressure exceed threshold;
- templates drift outside approved versions;
- provider/platform policy expires;
- real-data AI use is introduced without approval.

## 17. Honest maturity

- policy: designed;
- legal review: pending;
- permission ledger: not implemented;
- provider adapters: not implemented;
- live contact: not authorized.