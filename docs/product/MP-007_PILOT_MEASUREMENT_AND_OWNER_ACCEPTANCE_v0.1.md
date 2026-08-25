# MP-007 Reputation Booster — Pilot Measurement & Owner Acceptance v0.1

**Status:** DESIGNED — PILOT NOT AUTHORIZED  
**Date:** 2026-08-01

## 1. Purpose

Test whether MP-007 improves honest feedback coverage and service recovery while preserving customer autonomy, contact compliance and non-gating behavior.

## 2. Pilot research questions

1. Are unresolved issues detected and routed reliably?
2. Can the owner understand recovery and review eligibility within 60 seconds?
3. Are public-review requests neutral, permitted and non-duplicated?
4. Do recovery cases reach valid outcomes within SLA?
5. Does the process improve verified feedback/review outcomes without increasing complaints or opt-outs?
6. Is the product more valuable than a simple manual checklist?

## 3. Pilot stages

### Stage 0 — policy/source readiness

- canonical source recovered;
- completion/QC/warranty/return/contact fields inventoried;
- consent/channel/legal/platform rules reviewed;
- no real contact.

### Stage 1 — synthetic matrix

Test:

- completed eligible repair;
- unresolved repair issue;
- safety/privacy concern;
- opt-out;
- unknown permission;
- wrong recipient;
- frequency limit;
- duplicate send;
- unknown delivery result;
- recovery reopened;
- positive/negative/neutral feedback;
- public-review declared versus verified;
- cross-tenant attempt.

### Stage 2 — historical shadow mode

Assess completed historical orders without contacting customers.

Measure:

- eligibility accuracy;
- recovery blockers;
- data gaps;
- potential anti-gating bias;
- owner relevance;
- source completeness.

### Stage 3 — owner comprehension

Owner answers:

1. Which customers need recovery first?
2. Why is public-review prompting paused or allowed?
3. What permission/channel exists?
4. What is the next human action?
5. Which outcomes are verified versus declared?
6. What would stop the pilot?

### Stage 4 — staff-only/friendly rehearsal

Use synthetic or explicitly friendly test recipients with no public posting requirement.

### Stage 5 — limited real pilot

Only after separate Owner Gate, legal/platform review and safe provider setup.

Suggested first scope:

- one service location;
- one completed-repair cohort;
- one neutral feedback template;
- recovery routing;
- manual review-request approval;
- no automated public response;
- no incentives.

### Stage 6 — repeat/revise/stop

Repeat in comparable window, revise, park or stop.

## 4. Baseline

Measure current process:

- share of completed orders asked for feedback;
- current public-review request method;
- unresolved complaints discovered late;
- time to first recovery response;
- recovery outcome rate;
- public review count/rating snapshots;
- opt-outs/complaints;
- staff time;
- known selective review-request behavior.

Baseline must not rely only on memory.

## 5. Primary product metrics

### Recovery detection accuracy

Share of sampled material unresolved signals correctly routed to recovery or explicit review-required state.

Working target: 100% for P0/P1 synthetic/sample cases.

### Recovery SLA review rate

High-priority cases reviewed within approved SLA.

Working target: at least 90%.

### Valid recovery outcome rate

Cases reaching one approved outcome with Evidence.

Working target: at least 80%.

### Review-request compliance rate

Requests passing eligibility, permission, frequency and anti-gating checks.

Target: 100% or explicit block.

### Owner comprehension

Correct answers to six fixed questions within 60 seconds.

Working target: at least 80% sessions.

### Verified review conversion

Verified public reviews divided by confirmed delivered eligible requests, where platform-safe verification exists.

No universal target before baseline.

## 6. Guardrail metrics

- opt-out rate;
- wrong-recipient incidents;
- duplicate sends;
- contact complaints;
- review-gating incidents;
- incentive/fake-review incidents;
- open P0/P1 cases receiving promotional request;
- customer-confirmed still-unresolved rate;
- staff handling time;
- platform-policy breaches;
- privacy incidents;
- employee disputes about unfair attribution.

## 7. Misleading claim rate

A recommendation/metric is misleading when it:

- treats no feedback as satisfaction;
- treats sent as delivered;
- treats declared review as verified;
- attributes organic reviews automatically;
- claims rating/revenue uplift without valid comparison;
- hides unresolved recovery;
- implies negative feedback is employee fault;
- omits opt-out/platform limitations.

Working target: at most 10% after tuning; critical ethical deception is immediate STOP.

## 8. Ground-truth review

Sample review checks:

- order genuinely complete;
- QC/warranty/recovery status;
- recipient identity validity;
- contact permission snapshot;
- template version;
- idempotency/send receipt;
- feedback classification;
- recovery lifecycle/outcome;
- review declaration/verification source;
- aggregate attribution level.

## 9. Owner Acceptance checklist

### Trust

- unresolved problems are visible first;
- no review gating;
- no incentives/fake reviews;
- no public-review pressure;
- customer can opt out;
- recovery does not depend on review changes.

### Clarity

- one next action;
- eligibility/blockers understandable;
- declared/verified outcomes separated;
- rating/value limitations visible;
- aggregate/drill-down consistent.

### Operations

- case owner clear;
- SLA practical;
- staff workload acceptable;
- templates understandable;
- rollback available.

### Safety

- no cross-tenant/wrong-recipient exposure;
- no PII in logs/Evidence;
- no autonomous external send/post;
- legal/platform review current.

## 10. Owner decision outcomes

- `APPROVE_SHADOW_MODE`;
- `REQUEST_POLICY_REVISION`;
- `APPROVE_LIMITED_PILOT`;
- `PAUSE_FOR_LEGAL_OR_PLATFORM_REVIEW`;
- `STOP_CONTACT_RISK`;
- `ACCEPT_RECOVERY_RESULT`;
- `ACCEPT_REPUTATION_RESULT_WITH_LIMITATIONS`;
- `REPEAT_COMPARABLE_WINDOW`;
- `STOP_PRODUCT_DIRECTION`.

## 11. Immediate STOP conditions

- review gating;
- bought/incentivized/fake reviews;
- wrong recipient;
- opt-out ignored;
- duplicate request;
- unresolved high-priority problem receives pressure for praise;
- autonomous public post/response;
- platform-policy violation;
- sensitive data leak;
- employee punishment from review outcome;
- result criteria changed after outcome.

## 12. Victory interpretation

A pilot can be successful even if public rating does not rise, when:

- unresolved issues are detected earlier;
- recovery SLA/outcomes improve;
- compliant feedback coverage improves;
- guardrails pass.

Rating growth alone cannot create Victory when recovery or ethics fail.

## 13. Evidence package

- frozen policy versions;
- source inventory;
- synthetic matrix;
- historical shadow review;
- legal/platform approval record;
- permission/provider setup Evidence;
- owner comprehension result;
- contact/recovery receipts;
- aggregate measurement receipt;
- guardrails/incidents;
- owner decision;
- Session Handoff.

## 14. Honest maturity

- pilot plan: designed;
- baseline: not measured;
- legal/platform approval: not obtained;
- provider/contact runtime: absent;
- owner acceptance: not performed;
- real pilot: not authorized;
- Victory: `NOT_MEASURED`.