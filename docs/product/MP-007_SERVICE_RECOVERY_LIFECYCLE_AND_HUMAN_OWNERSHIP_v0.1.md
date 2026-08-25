# MP-007 Reputation Booster — Service-Recovery Lifecycle & Human Ownership v0.1

**Status:** DESIGNED — NOT IMPLEMENTED  
**Date:** 2026-08-01

## 1. Purpose

Define a durable recovery case that turns unresolved customer feedback into accountable human action and a verified outcome.

## 2. Core rule

> Feedback may be automated; recovery responsibility may not be anonymous.

Every material recovery case requires one named responsible role, SLA, next action and outcome receipt.

## 3. Recovery case contract

```text
recoveryCaseId
organizationId
workspaceId
serviceOrderSafeRef
customerSafeRef
sourceFeedbackRefs[]
priorityClass
issueCodes[]
openedAtTrusted
ownerPrincipalOrRole
reviewDueAt
customerContactPermissionSnapshot
currentState
nextActionCode
blockerCodes[]
resolutionCodeOrNull
resolutionEvidenceRefs[]
closedAtOrNull
```

The case stores safe references. Raw customer messages remain under their own protected policy.

## 4. Lifecycle

```text
CANDIDATE
→ OPEN
→ TRIAGED
→ CUSTOMER_CONTACT_PENDING
→ UNDER_REVIEW
→ CORRECTIVE_ACTION_PENDING
→ CUSTOMER_CONFIRMATION_PENDING
→ RESOLVED
  | PARTIALLY_RESOLVED
  | ESCALATED
  | UNREACHABLE_AFTER_POLICY
  | CLOSED_NO_SERVICE_FAILURE
  | STOPPED_SAFETY_OR_LEGAL
```

A case cannot jump directly from `OPEN` to `RESOLVED` without triage and outcome Evidence.

## 5. Priority and SLA direction

### P0

Safety, privacy, wrong recipient, data loss or serious device risk.

- immediate stop;
- owner/authorized incident role;
- public-review prompting paused;
- separate incident policy may supersede normal recovery.

### P1

Unresolved repair, warranty, missing item, device condition or failed promised outcome.

- urgent human review;
- bounded customer response SLA.

### P2

Material delay, communication failure, unexplained price/process issue.

- normal recovery SLA.

### P3

Minor friction/question.

- bounded clarification path.

Exact SLA values require operational calibration.

## 6. Human ownership

The owner of a recovery case is accountable for:

- reviewing source facts;
- confirming customer/contact scope;
- selecting permitted next action;
- coordinating technician/manager/owner authority;
- documenting outcome;
- requesting customer confirmation when appropriate;
- escalating rather than hiding uncertainty.

The system may remind and prioritize but cannot declare resolution autonomously.

## 7. Allowed corrective actions

Examples:

- clarify status/terms;
- schedule warranty inspection;
- inspect device/completeness;
- repeat QC;
- repair/rework under approved policy;
- manager or owner decision;
- refund/reversal through protected Money Core;
- apology and process correction;
- privacy/safety incident escalation.

Every consequential action uses existing authorization, intent, PIN/AAL and idempotency boundaries where applicable.

## 8. Compensation boundary

MP-007 may record an approved compensation outcome but does not create price/refund authority.

Forbidden:

- automatic refund;
- compensation conditional on positive review/removal;
- unapproved discount;
- free service promised by AI;
- hiding compensation from Money/Audit Core.

## 9. Customer confirmation

Resolution confidence states:

- `OPERATIONAL_ACTION_COMPLETED`;
- `CUSTOMER_CONFIRMATION_REQUESTED`;
- `CUSTOMER_CONFIRMED_RESOLVED`;
- `CUSTOMER_REPORTS_STILL_UNRESOLVED`;
- `CUSTOMER_DECLINED_FURTHER_CONTACT`;
- `CONFIRMATION_UNAVAILABLE`.

Operational completion is not the same as customer-confirmed resolution.

## 10. Review-request relationship

While P0/P1 recovery is open:

- automated promotional review request is paused;
- independent customer right to review is not restricted;
- no request to change/remove public review;
- recovery remains available regardless of review content;
- after resolution, any later neutral request follows the same eligibility rules as all other customers.

## 11. Append-only Evidence

Required receipts:

- case opened;
- triage decision;
- owner assigned/reassigned;
- contact attempt/outcome;
- corrective action command/receipt;
- customer confirmation;
- escalation;
- closure.

Corrections append; they do not erase earlier states.

## 12. Duplicate and merge policy

Multiple messages about one underlying issue should attach to one case.

Merge requires:

- same tenant/workspace;
- same service order/customer experience;
- human review;
- preserved source references;
- no loss of priority/history.

Cross-order issues remain separate unless an approved recurring pattern is handled by MP-005.

## 13. Escalation

Escalate when:

- SLA breached;
- authority missing;
- customer reports safety/data issue;
- repeated recovery fails;
- legal threat/chargeback/platform dispute appears;
- source contradiction blocks fair decision;
- employee conflict requires independent review.

## 14. Non-blame boundary

The case records process facts and actor authority needed for audit. It does not generate:

- employee guilt score;
- public/internal leaderboard;
- automatic discipline;
- fraud allegation;
- causal claim from one complaint.

## 15. Recovery metrics

Allowed:

- cases by priority;
- time to first review;
- time to valid outcome;
- customer-confirmed resolution rate;
- reopened rate;
- SLA breach rate;
- escalation rate;
- unresolved case age;
- duplicate/merge rate.

These are process metrics, not employee rankings.

## 16. Stop criteria

Stop or redesign when:

- cases are closed without Evidence;
- recovery becomes a way to suppress public reviews;
- employees are punished automatically;
- customer contact permission is ignored;
- real corrective actions bypass existing commands;
- workload creates long unowned queues;
- customer-confirmed unresolved cases disappear from view.

## 17. Honest maturity

- lifecycle: designed;
- case persistence: not implemented;
- SLA calibration: pending;
- command integration: not implemented;
- live recovery: not authorized;
- outcome Evidence: none.