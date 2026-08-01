# MP-009 AI Master — Delivery Gates & Evidence Plan v0.1

**Status:** DESIGNED — EXECUTION NOT STARTED  
**Date:** 2026-08-01

## 1. Purpose

Define the controlled path from product design to a bounded, safe and measured technician-assistance product.

## 2. Gate principle

A later success cannot repair an earlier safety/truth failure.

- attractive AI text cannot replace valid source facts;
- model benchmark cannot prove live case safety;
- technician acceptance cannot authorize prohibited data processing;
- faster diagnosis cannot compensate for more repeat repairs;
- typecheck cannot prove physical-device safety;
- pilot success cannot authorize autonomous work.

## 3. Delivery gates

### DG9-0 — Product package review

Required:

- all package documents complete;
- owner reviews product promise and prohibitions;
- no implementation authorization implied;
- unresolved risks listed.

### DG9-1 — Canonical source and WIP gate

Required:

- canonical V10.2 lineage proven;
- migration/source boundary understood;
- MP-001 engineering disposition permits future work;
- exact implementation base approved.

STOP on ambiguous source or parallel competing implementation.

### DG9-2 — Domain source inventory

Inventory exact fields/events/APIs for:

- device identity;
- symptoms;
- observed tests;
- diagnosis/work codes;
- parts;
- QC;
- warranty/repeat repair;
- roles/certifications;
- consent;
- hazard/incident;
- timestamps/corrections;
- tenant/RLS.

Output: `MP-009_SOURCE_FIELD_INVENTORY_v0.1`.

### DG9-3 — Qualified safety and liability review

Required:

- selected case family reviewed by qualified repair expert;
- hazard classes and stop conditions approved;
- allowed verification steps approved;
- legal/liability and employment/customer wording reviewed;
- emergency escalation path defined.

No real-device pilot before PASS.

### DG9-4 — Minimal architecture RFC

Decide:

- diagnostic case persistence;
- catalogue/version identities;
- read-only suggestion endpoint;
- technician decision command;
- provider adapter/no-provider fallback;
- Evidence receipts;
- feature flags and rollback;
- exact reuse of existing work/inventory/QC commands.

Default:

- modular monolith;
- no generic expert engine;
- no required external AI;
- no autonomous tools;
- one case family.

### DG9-5 — Catalogue freeze

Freeze:

- one case family;
- exact identity level;
- symptom/fact codes;
- hypothesis definitions;
- alternatives;
- H0 verification steps;
- hazard/stop rules;
- QC template relation;
- invalidation and versioning.

### DG9-6 — Deterministic unit/property tests

Test:

- missing/extra/duplicate inputs;
- truth-class isolation;
- stable identities;
- stale/contradiction/default deny;
- identity insufficiency;
- case eligibility;
- hazard blocking;
- hypothesis alternatives;
- one-step selection;
- catalogue revocation/version change;
- no side effects.

### DG9-7 — External AI isolation tests

Before any provider use:

- safe allowlisted projection;
- prohibited-field redaction;
- schema validation;
- unknown-code rejection;
- prompt-injection matrix;
- provider/model identity;
- retention/training policy;
- timeout/cost/fallback;
- no-provider mode parity;
- no raw sensitive logs.

This gate may remain skipped if the first slice is deterministic only.

### DG9-8 — Disposable PostgreSQL and RLS

Use unique disposable PostgreSQL.

Prove:

- two synthetic tenants isolated;
- app role non-superuser/non-BYPASSRLS;
- case/source/receipt scope correct;
- read suggestion has no write side effect;
- technician decision uses exact current version;
- cross-tenant facts unavailable;
- corrections invalidate dependent evaluation;
- Evidence contains no secrets/PII.

### DG9-9 — HTTP and authorization

Prove:

- authenticated Principal/workspace;
- employee/manager/owner/AI projections;
- AI observer cannot mutate;
- stale ETag/version handling;
- safe no-store/private caching;
- bounded errors;
- no prompt/token/customer data in logs;
- absent allowed action means disabled action.

### DG9-10 — Mutation resilience

For verification result, technician decision and existing work/QC commands:

- stable idempotency identity;
- timeout/lost response;
- reload/manual retry;
- exactly one committed result;
- reconciliation before retry;
- no duplicate part/work/QC receipt.

### DG9-11 — Synthetic safety matrix

Minimum cases:

- eligible H0 case;
- wrong model;
- unknown variant;
- missing symptom;
- contradiction;
- alternative hypothesis;
- H2/H3 hazard;
- unapproved step;
- prompt injection;
- stale catalogue;
- provider failure;
- external AI disabled;
- QC fail/retest;
- repeat repair.

Critical safety scenarios require 100% expected blocking/escalation.

### DG9-12 — Expert review

At least two qualified reviewers where possible assess:

- fact accuracy;
- hypothesis relevance;
- missing alternatives;
- step safety;
- explanation clarity;
- overconfidence;
- escalation correctness.

Disagreement remains Evidence.

### DG9-13 — Mobile/desktop comprehension

On technician phone and desktop:

- facts/hypotheses clearly separated;
- one safe step;
- hazard/stop visible;
- manual fallback;
- no customer-facing promise;
- touch/accessibility/reduced motion;
- technician answers six comprehension questions.

### DG9-14 — Historical/shadow mode

Read-only, no workflow authority.

Measure:

- suggestion relevance;
- fact mismatch;
- unsafe/misleading suggestions;
- technician rejection reasons;
- orientation-time potential;
- source gaps;
- cost/latency if AI used.

### DG9-15 — Friendly controlled pilot

Separate Owner Gate required.

- one low-risk family;
- one trained technician;
- H0 steps only;
- daily safety review;
- no external AI unless separately approved;
- no customer promises;
- rollback available.

### DG9-16 — Victory/disposition

Possible outcomes:

- `VICTORY_OBSERVED`;
- `REPEAT_COMPARABLE_CONTEXT`;
- `REVISE_CATALOGUE`;
- `DETERMINISTIC_ONLY`;
- `PARK_PROVIDER_INTEGRATION`;
- `STOP_UNSAFE_OR_LOW_VALUE`.

No automatic scale.

## 4. Test Matrix summary

### Truth/data tests

- reported vs observed vs hypothesis vs confirmed;
- missing/stale/contradictory;
- identity levels;
- correction/invalidation;
- exact source references.

### Safety tests

- H0/H1/H2/H3;
- stop conditions;
- role/certification/tool/environment;
- no free-form live instructions;
- emergency escalation.

### AI tests

- redaction;
- schema/code allowlist;
- prompt injection;
- hallucinated source/code;
- provider drift;
- fallback;
- cost/rate limit.

### Workflow tests

- technician decision;
- work authorization;
- part lifecycle;
- QC fail/pass/retest;
- repeat repair;
- customer re-consent;
- unknown-result reconciliation.

## 5. Evidence classes

- `E-DESIGN` — contracts;
- `E-SOURCE` — source audit;
- `E-SAFETY` — qualified catalogue/hazard review;
- `E-UNIT` — deterministic tests;
- `E-AI` — provider/prompt-injection/redaction tests;
- `E-DB` — PostgreSQL/RLS;
- `E-HTTP` — runtime auth/privacy/log;
- `E-PHYSICAL` — controlled real-device validation;
- `E-UX` — technician comprehension;
- `E-SHADOW` — read-only operational comparison;
- `E-PILOT` — bounded real use;
- `E-VICTORY` — accepted measured result;
- `E-COMMERCIAL` — paid/retention Evidence.

## 6. Evidence privacy

Allowed:

- synthetic facts/codes;
- safe aggregates;
- PASS/FAIL;
- model/policy/catalogue versions;
- redacted costs/latency;
- hashes/commits.

Forbidden:

- customer identifiers;
- IMEI/serial/passcodes;
- device personal content;
- raw prompts/responses with sensitive data;
- tokens/cookies/PINs;
- unrestricted technician ranking.

## 7. Rollback

- feature flag disables MP-009;
- manual/Core workflow remains functional;
- provider adapter can be disabled independently;
- catalogues are versioned, not rewritten;
- no Core data deletion;
- historical receipts retained;
- one ordinary code revert;
- no destructive migration rollback.

## 8. Cost-first constraints

- deterministic first slice preferred;
- one case family;
- H0 only;
- no vector DB;
- no separate microservice;
- no fine-tuning;
- provider budget/call limits;
- no photo upload by default;
- focused tests before broad matrices.

## 9. Current state

| Gate | State |
|---|---|
| DG9-0 package | prepared for review |
| DG9-1 canonical/WIP | pending |
| DG9-2 source inventory | not started |
| DG9-3 safety/liability | not started |
| DG9-4 RFC | not started |
| DG9-5 catalogue freeze | not started |
| DG9-6–DG9-13 technical/UX | not started |
| DG9-14 shadow | not authorized |
| DG9-15 pilot | not authorized |
| DG9-16 Victory | `NOT_MEASURED` |

## 10. Next mandatory engineering step

Not MP-009 implementation. Canonical source recovery and MP-001 single-WIP disposition remain mandatory before any MP-009 engineering.