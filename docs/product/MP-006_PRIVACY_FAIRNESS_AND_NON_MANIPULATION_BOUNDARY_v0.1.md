# MP-006 Opportunity Engine — Privacy, Fairness & Non-Manipulation Boundary v0.1

**Status:** DESIGNED — NOT IMPLEMENTED  
**Date:** 2026-08-01

## 1. Purpose

Ensure growth recommendations do not become customer surveillance, discriminatory targeting, hidden persuasion or employee sales pressure.

## 2. Product stance

Opportunity Engine acts on verified service relevance and permission, not on inferred vulnerability or willingness to be manipulated.

Allowed:

> “Customer requested notification when this part becomes available.”

Forbidden:

> “Customer appears likely to accept a high price.”

## 3. Data minimization

Default opportunity discovery may use only fields required by an approved family, such as:

- service/order state;
- approved contact purpose/channel;
- customer-requested notification;
- product/service category;
- relevant dates;
- availability;
- payment/collection outcome where required;
- prior action/result state.

Excluded by default:

- raw message/call content;
- free-text notes;
- device photos;
- passwords/passcodes;
- precise location;
- social-media data;
- browsing behavior;
- private communications;
- biometric, health, political, religious or other sensitive traits;
- inferred financial vulnerability;
- personality/mood scores.

## 4. Sensitive targeting prohibition

MP-006 must not target or change terms based on:

- protected/sensitive traits;
- perceived desperation;
- debt vulnerability;
- age-related assumptions;
- disability or health inference;
- ethnicity/nationality;
- religion/politics;
- private family circumstances;
- device data unrelated to requested service.

## 5. Fair offer boundary

The engine cannot:

- silently show different prices to similar customers;
- recommend charging more due to predicted willingness to pay;
- hide standard options;
- create personalized scarcity;
- make warranty/consumer rights conditional on optional purchase;
- use a customer complaint to pressure an upsell.

Any future segmentation of price/offer requires a separate approved pricing, fairness and legal policy.

## 6. Customer autonomy

Every optional action preserves:

- clear choice;
- accurate information;
- no default acceptance;
- no disguised advertising;
- no repeated pressure after decline;
- practical opt-out;
- human contact path;
- no penalty for refusing optional offer.

## 7. Employee boundary

MP-006 does not create:

- sales leaderboard;
- conversion score per employee;
- quota enforcement;
- automatic commission calculation;
- pressure to contact ineligible customers;
- disciplinary recommendation for low conversion.

Employee feedback may identify workflow burden without ranking individuals.

## 8. Role projection

### Owner

May see aggregate opportunity, value semantics, permission coverage, costs, guardrails and authorized drill-down.

### Manager

May see operational opportunity within explicit grants. Owner-only financial detail requires separate policy.

### Employee

May see only approved customer action, necessary context, permitted wording and result entry. No hidden estimated customer value or sensitive segmentation.

### AI

Receives only allowlisted, minimized claims under explicit grant. No unrestricted customer profile or autonomous action authority.

## 9. Small-group and identity protection

Aggregate views suppress groups below an approved threshold where identity could be inferred. Drill-down requires current authorization and purpose.

Evidence receipts use safe references/digests, not customer names, phones, emails, device IDs or message bodies.

## 10. Explainability and correction

Owner/authorized staff can see:

- exact family and definition version;
- eligibility facts;
- exclusions;
- permission state;
- priority reason;
- expected-value limitations;
- action history;
- outcome attribution.

They can report:

- wrong eligibility;
- wrong recipient/channel;
- irrelevant recommendation;
- missing opt-out;
- unfair treatment;
- hidden cost;
- source contradiction.

Corrections create new Evidence and reevaluation.

## 11. Model boundary

External AI is not required for v0.1.

Future AI cannot:

- invent eligibility or consent;
- infer sensitive traits;
- create personalized price/discount;
- manipulate tone through fear or pressure;
- select recipient autonomously;
- conceal uncertainty;
- send messages;
- upgrade estimated value to fact.

## 12. Transparency to customer

Where appropriate, communication identifies:

- the service/business;
- why the customer is contacted;
- the relevant order/request;
- whether action is optional;
- current terms;
- how to decline/stop;
- how to reach a human.

## 13. Retention

Future policy separates retention for:

- canonical source facts;
- opportunity assessments;
- permission evidence;
- approved actions;
- delivery receipts;
- outcomes;
- aggregate experiment results.

MP-006 does not duplicate full customer profiles.

## 14. Logging/security

Logs exclude:

- raw recipient identifiers;
- full message text;
- consent documents/signatures;
- tokens/cookies/PINs;
- unrestricted source payloads;
- sensitive segments.

Safe logs may contain family/rule version, bounded state/reason code, timing, counts and synthetic PASS/FAIL.

## 15. Immediate Stop Conditions

- sensitive/protected-trait targeting;
- unauthorized contact;
- deceptive price/urgency/warranty claim;
- discrimination across comparable customers;
- opt-out ignored;
- employee quota/sanction misuse;
- external AI data-policy breach;
- identity exposed through aggregate;
- inability to explain eligibility;
- customer harm exceeds approved threshold.

## 16. Honest maturity

- policy: designed;
- legal/fairness review: not performed;
- small-group threshold: not calibrated;
- field projections: not implemented;
- external AI: not authorized;
- live targeting: none.