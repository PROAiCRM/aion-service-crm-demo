# MP-006 Opportunity Engine — Consent, Contact & Channel Policy v0.1

**Status:** DESIGNED — NOT IMPLEMENTED  
**Date:** 2026-08-01

## 1. Purpose

Ensure every customer-facing opportunity action has a lawful, relevant and respectful contact basis, channel eligibility, frequency limit and human approval.

This policy is a product boundary, not jurisdiction-specific legal advice. Local legal review is required before live outreach.

## 2. Contact states

- `CONTACT_ALLOWED_SERVICE_CONTEXT` — necessary or reasonably expected communication directly connected to an active/completed service under approved policy;
- `CONTACT_ALLOWED_EXPLICIT_REQUEST` — customer explicitly requested notification/follow-up;
- `CONTACT_ALLOWED_MARKETING_CONSENT` — separately recorded valid marketing permission;
- `CONTACT_ALLOWED_OTHER_APPROVED_BASIS` — separately documented legal/product basis;
- `CONTACT_NOT_NEEDED` — opportunity is an internal operational action;
- `CONTACT_PERMISSION_UNKNOWN`;
- `CONTACT_OPTED_OUT`;
- `CONTACT_PROHIBITED`;
- `CONTACT_REVIEW_REQUIRED`.

Unknown is not consent.

## 3. Purpose limitation

Service-context communication may include:

- ready-order collection;
- required approval follow-up;
- warranty/repair information;
- customer-requested waitlist notification;
- directly relevant safety/care information.

It may not be silently reused for unrelated promotional campaigns.

Marketing-oriented repeat service, cross-sell or reputation requests require their approved basis and local legal review.

## 4. Consent evidence

Where consent is required, record:

```text
consentId
subjectSafeRef
purposeCode
allowedChannelCodes[]
consentVersion
sourceDocument/version
capturedAtTrusted
capturedByActor/flow
status
withdrawnAtOrNull
expiryOrReviewAtOrNull
evidenceRef
```

Raw signature images or unrestricted text are not required in the opportunity projection.

## 5. Channel policy

Every channel has explicit state:

- SMS;
- phone call;
- messaging app;
- email;
- in-app/QR status page;
- manual staff conversation;
- no-contact operational action.

A valid phone number does not imply permission for every channel.

Channel selection considers:

- customer preference;
- purpose;
- urgency;
- delivery reliability;
- cost;
- accessibility;
- quiet hours;
- prior failures;
- local policy.

## 6. Frequency and suppression

Required controls:

- per-purpose cooldown;
- per-channel cooldown;
- total contact cap;
- duplicate-candidate suppression;
- active-conversation suppression;
- completed-outcome suppression;
- opt-out immediately blocks future governed contact;
- complaint/dispute suppression;
- no escalation through several channels merely because the first message was unanswered.

Exact limits require pilot/legal approval.

## 7. Human approval

The MVP cannot send autonomously.

Before action, authorized human sees:

- recipient safe identity;
- purpose;
- relevance facts;
- permission state;
- channel;
- last contact and frequency state;
- proposed wording;
- expected/unknown value;
- opt-out path;
- consequence preview.

Human may approve, edit within policy, change to a permitted channel, reject or park.

## 8. Message content boundary

Every message must be:

- truthful;
- specific to the verified context;
- clear about sender;
- clear about optional versus required action;
- free from false scarcity or threat;
- free from hidden price/condition changes;
- easy to decline or stop when applicable;
- minimized to necessary personal data.

Forbidden:

- fabricated urgency;
- “последний шанс” without actual policy deadline;
- fear-based claims about device safety without Evidence;
- implying warranty loss incorrectly;
- promising savings or profit;
- pretending a human wrote an AI message;
- review gating or asking only happy customers while suppressing unresolved complaints through manipulation.

## 9. Review-request rules

A review request must:

- be neutral;
- not require a positive rating;
- not reward only positive reviews;
- not hide the review path after negative feedback;
- exclude unresolved complaint, dispute or return under approved policy;
- obey frequency limits;
- preserve customer choice.

MP-007 may later own the full reputation workflow.

## 10. Opt-out and preference correction

Customers need a practical path to:

- stop marketing communication;
- correct channel preference;
- report wrong recipient;
- request human contact;
- distinguish service-essential notifications from optional promotions where policy permits.

Preference changes create auditable events and apply before the next candidate evaluation.

## 11. Wrong recipient and shared device risk

Before sensitive service communication, the product must minimize exposed content.

Do not include by default:

- full device identifiers;
- detailed diagnosis;
- passwords/passcodes;
- full debt/payment details;
- customer name when not necessary;
- sensitive free text.

A bounced, wrong-recipient or disputed channel is suppressed pending review.

## 12. Delivery state

- `NOT_SENT`;
- `HUMAN_APPROVED`;
- `QUEUED`;
- `SENT_TO_PROVIDER`;
- `DELIVERED`;
- `FAILED`;
- `BOUNCED`;
- `UNKNOWN_RESULT`;
- `CUSTOMER_REPLIED`;
- `OPTED_OUT`.

`SENT_TO_PROVIDER` is not `DELIVERED`; `DELIVERED` is not customer acceptance.

Unknown send result requires reconciliation, not blind resend.

## 13. AI drafting boundary

Optional future AI draft requires:

- approved template intent;
- allowlisted facts;
- no sensitive free text;
- no autonomous recipient/channel selection;
- human preview;
- deterministic content checks;
- safe fallback template;
- provider/data boundary approval.

## 14. Evidence and logs

Safe Evidence includes:

- purpose code;
- permission state;
- template/version;
- channel;
- human approver;
- action identity;
- bounded delivery outcome;
- opt-out result;
- timestamps.

Logs exclude full message content, raw phone/email, tokens, signatures and customer notes unless a separate protected policy explicitly requires them.

## 15. Immediate Stop Conditions

- unauthorized contact;
- contact after opt-out;
- wrong-recipient disclosure;
- duplicate message due to timeout retry;
- misleading urgency/price/warranty statement;
- contact frequency breach;
- external AI receives prohibited data;
- inability to stop a campaign/action;
- customer complaint trend exceeds approved threshold.

## 16. Honest maturity

- policy: designed;
- jurisdictional review: not performed;
- consent schema/runtime: not proven;
- channel integration: not implemented;
- autonomous send: prohibited;
- real customer contact: not authorized.