# MP-006 Opportunity Engine — Action Experiment & Measurement Policy v0.1

**Status:** DESIGNED — NOT IMPLEMENTED  
**Date:** 2026-08-01

## 1. Purpose

Turn one selected opportunity into one bounded human-approved action and a valid measurement, without campaign sprawl, blind retries or retrospective success criteria.

## 2. Action principle

```text
one opportunity population
→ one approved action
→ one primary realized outcome
→ customer/consent/cost guardrails
→ reconciled result
```

## 3. Experiment contract

Every test requires:

```text
experimentId
opportunityFamilyCode
opportunityDefinitionVersion
populationSnapshotId
eligibilityMethodVersion
permissionPolicyVersion
baselineOrControlMethod
actionCode
actionTemplateVersion
channelCodeOrNoContact
actionOwnerRole
primaryOutcomeDefinition
targetThreshold
guardrails[]
frequencyLimits
observationWindow
attributionMethod
stopCriteria
rollbackProcedure
ownerDecision
```

Frozen before action begins.

## 4. Eligible first actions

- one ready-order collection reminder;
- one pending-approval follow-up;
- one explicit waitlist availability notice;
- one neutral review request;
- one directly relevant post-service care reminder;
- one internal staff task to review eligible demand;
- one capacity/availability notice to an explicitly permitted cohort.

All require current policy and human approval.

## 5. Prohibited actions

- automatic send;
- bulk “send all”;
- automatic discount/price change;
- fabricated deadline or scarcity;
- contacting opted-out/unknown-permission customers;
- multi-channel escalation without customer request;
- using complaint or sensitive data for sales targeting;
- changing several offer variables simultaneously;
- external AI personalization from unrestricted data;
- automatic booking/payment/contract acceptance.

## 6. Action states

```text
DRAFT
→ AWAITING_OWNER_DECISION
→ APPROVED_NOT_EXECUTED
→ HUMAN_EXECUTION_PENDING
→ EXECUTED_OR_QUEUED
→ DELIVERY_RECONCILIATION
→ OUTCOME_OBSERVATION
→ CONCLUDED_SUPPORTED
  | CONCLUDED_NOT_SUPPORTED
  | CONCLUDED_INCONCLUSIVE
  | STOPPED_GUARDRAIL
  | CANCELLED
```

Every consequential transition has actor, authority, intent and receipt.

## 7. Idempotency and unknown result

For messages/tasks/commands:

- stable action identity created before execution;
- repeated tap/reload uses same identity;
- timeout never triggers blind duplicate send;
- UI shows “result unknown—reconciling”;
- provider/server receipt reconciled before resend;
- one intended customer action creates one action receipt.

## 8. Primary outcomes

Examples:

- collection completed within approved window;
- customer approval received;
- booking created;
- service completed;
- waitlist demand converted;
- neutral review submitted;
- payment reconciled;
- customer explicitly declined;
- no response.

One primary outcome determines the test result. Secondary metrics cannot replace failure after the fact.

## 9. Baseline/control methods

Allowed methods:

- comparable prior complete window;
- randomized/alternating eligible cohort when practical and ethical;
- phased location/shift rollout;
- customer-requested population compared with historical handling;
- pre/post with disclosed contamination limits.

For low volumes, use bounded practical thresholds and repeat observations rather than false statistical certainty.

## 10. Guardrails

- unauthorized-contact count = 0;
- opt-out breach = 0;
- wrong-recipient disclosure = 0;
- duplicate actions = 0;
- complaint rate;
- unsubscribe rate;
- irrelevant-action rate;
- employee handling time;
- direct communication/action cost;
- margin/discount integrity;
- customer confusion;
- unresolved disputes incorrectly included;
- delivery failure/unknown result;
- organic outcome attribution risk.

Critical guardrail failure overrides favorable conversion.

## 11. Measurement

Core funnel remains separated:

```text
eligible
→ reviewed
→ approved
→ action executed
→ delivered/applicable
→ customer responded
→ realized outcome
→ value reconciled
→ attributed increment assessed
```

Never collapse the funnel into “opportunity won”.

## 12. Valid conclusion

### `SUPPORTED`

Predeclared outcome threshold achieved and all critical guardrails pass.

### `NOT_SUPPORTED`

Valid test completed but threshold not achieved or costs/harm outweigh result.

### `INCONCLUSIVE`

Insufficient sample, contamination, unknown delivery, source drift or missing reconciliation.

### `STOPPED_GUARDRAIL`

Privacy, consent, customer harm, duplicate, cost or policy threshold failed.

## 13. Attribution

Every result states:

- whether outcome could be organic;
- baseline/control method;
- timing;
- concurrent campaigns/changes;
- confidence class, not arbitrary AI number;
- gross versus incremental value;
- unresolved attribution limitations.

## 14. Result receipt

Future receipt binds:

```text
experimentId
frozenContractSha256
populationSnapshotDigest
eligible/reviewed/approved/executed/delivered counts
response/outcome counts
baseline/control values
realizedGrossValueOrNull
directCostOrNull
attributedIncrementOrNull
guardrailResults
contaminationCodes
conclusion
ownerAcceptance
recordedAtTrusted
```

No raw message, phone, email or unrestricted customer record in aggregate Evidence.

## 15. Stop criteria

Immediate stop:

- unauthorized contact;
- opt-out violation;
- duplicate send;
- wrong recipient;
- misleading price/warranty/urgency;
- inability to stop;
- critical complaint trend;
- cross-tenant exposure;
- autonomous execution path.

Revise/stop when:

- irrelevant recommendations > approved threshold;
- action cost exceeds realized contribution/customer value;
- employee burden is too high;
- outcome is mostly organic/unattributable;
- simple manual workflow performs equally well;
- experiment requires manipulation or unsafe segmentation.

## 16. Scaling

One supported test does not authorize bulk automation.

Scale requires:

- repeat comparable result;
- verified permission operations;
- stable low complaint/opt-out rates;
- clear unit economics or customer-value case;
- reliable idempotency/reconciliation;
- rollback;
- Owner Gate;
- updated Evidence/Risk/Decision registers.

## 17. Honest maturity

- policy: designed;
- action registry: not implemented;
- send/task adapters: not implemented;
- measurement receipt: not implemented;
- experiment: none;
- attribution: not proven.