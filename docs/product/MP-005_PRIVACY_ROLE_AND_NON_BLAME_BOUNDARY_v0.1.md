# MP-005 AION Pain Scanner — Privacy, Role & Non-Blame Boundary v0.1

**Status:** DESIGNED — NOT IMPLEMENTED  
**Date:** 2026-08-01

## 1. Purpose

Ensure Pain Scanner improves processes without becoming employee surveillance, customer profiling or an unauthorized disclosure layer.

## 2. Product stance

Pain Scanner analyzes **process patterns**, not personal worth.

Preferred statement:

> “The diagnosis-to-contact process repeatedly exceeds the approved threshold.”

Forbidden statement:

> “Employee X causes delays.”

A process pattern may include actor/authority Evidence for audit and drill-down, but the primary product projection must not rank or shame individuals.

## 3. Role model

### Owner

May view organization-level pain assessment, source quality, experiment decision, governed aggregates and authorized drill-down.

### Manager

May view operational pains and experiments within an explicit grant. Financial or owner-only data requires separate policy.

### Employee

May view:

- the process change relevant to their work;
- safe team-level explanation;
- their permitted tasks and feedback route;
- no owner-only money, cross-team ranking or hidden surveillance data.

### AI observer

May receive only an approved privacy-minimized claim projection under explicit capability grant. It has no authority to view unrestricted raw data, choose sanctions or execute changes.

## 4. Authorization rule

Visibility is determined by:

```text
Principal
+ active session
+ tenant/workspace membership
+ current read grant
+ field policy
+ purpose limitation
+ data freshness
```

A role label alone is insufficient.

## 5. Aggregate-first policy

The default view uses:

- counts;
- shares;
- durations;
- approved segments;
- data-quality indicators;
- safe source references.

Individual order drill-down is secondary and requires current authorization.

Employee identity is excluded from primary segmentation by default.

## 6. Privacy-minimized data

The aggregate pain projection should not require:

- customer name;
- full phone number;
- email;
- address;
- IMEI or serial number;
- signature image;
- passwords or device passcodes;
- free-text internal notes;
- raw call/message content;
- session tokens, cookies or PIN material.

Use safe object references and derived classification events where possible.

## 7. Free-text boundary

Free-text complaints, notes and messages may contain sensitive data and subjective statements.

They are excluded from v0.1 deterministic pain detection unless a separate policy defines:

- legal purpose;
- minimization;
- access scope;
- retention;
- redaction;
- AI-provider boundary;
- human review;
- false-positive handling.

Keyword scanning of employee/customer text is not part of v0.1.

## 8. Employee-data boundary

The scanner must not collect or infer:

- keystrokes;
- screen activity;
- GPS location;
- microphone/camera monitoring;
- private communication content;
- biometric data;
- mood or personality;
- “honesty” or “loyalty” score;
- generalized productivity score;
- fraud probability.

## 9. Non-blame language

Allowed:

- “process step was not recorded”;
- “handoff remained incomplete”;
- “source data is contradictory”;
- “the intervention was followed in 68% of eligible cases”;
- “additional training or simpler flow may be needed”.

Forbidden:

- “lazy employee”;
- “weak master”;
- “responsible for lost profit” without formal investigation and proof;
- “suspicious behavior”;
- “worst worker”;
- automatic disciplinary recommendation.

## 10. Review and correction rights

Authorized employees/managers need a bounded mechanism to report:

- incorrect episode classification;
- customer-requested exception;
- missing context;
- wrong source link;
- experiment burden;
- unintended consequence;
- privacy concern.

A correction creates new Evidence and reevaluation. It does not silently erase history.

## 11. Small-group privacy

Segments below an approved minimum population must be suppressed or merged.

No aggregate should make an individual obvious through:

- one-person shifts;
- rare repair type;
- exact timestamp;
- exact amount;
- unique device model;
- narrow location/time combination.

## 12. Experiment transparency

Affected staff must know:

- that an experiment is active;
- the process change;
- the outcome being measured;
- what personal data is not collected;
- how feedback is used;
- who can see drill-down;
- when the experiment ends;
- how it can be stopped.

Covert experimentation on employee behavior is prohibited.

## 13. Retention direction

Future implementation must define separate retention for:

- source facts — owned by their Core policies;
- normalized episodes;
- pain assessments;
- hypotheses;
- experiment contracts;
- result receipts;
- user feedback and corrections.

Aggregate historical Evidence should avoid duplicating raw customer records.

## 14. External AI boundary

No real operational data is sent to an external AI provider until:

- data classification is complete;
- approved purpose and provider exist;
- prohibited fields are removed;
- tenant/workspace scope is enforced;
- retention/training policy is reviewed;
- owner approval is recorded;
- fallback without AI works.

The deterministic MVP requires no external AI.

## 15. Security and logging

Logs and Evidence must exclude:

- raw payloads;
- customer identifiers;
- tokenized URLs;
- cookies/authorization headers;
- free-text notes;
- PINs;
- signature images;
- unrestricted episode drill-down.

Safe logs may include:

- rule code/version;
- aggregate counts;
- PASS/FAIL state;
- bounded failure code;
- timing;
- privacy suppression applied;
- tenant-isolation boolean in synthetic gates.

## 16. Non-accusation escalation

Pain Scanner can surface a process contradiction that warrants review. It cannot declare misconduct.

Any real suspected abuse requires a separate governed human investigation process with:

- lawful basis;
- access limitation;
- preserved Evidence;
- right to correction;
- explicit authority;
- no automatic sanction.

That investigation process is outside MP-005.

## 17. Stop criteria

Stop the product or experiment when:

- employee surveillance becomes a requested primary use case;
- a pain card identifies an individual through small-group data;
- external AI receives data outside policy;
- staff cannot correct obvious classification errors;
- the owner uses exploratory results as disciplinary proof;
- privacy burden exceeds product value;
- role projections leak owner-only or cross-tenant information.

## 18. Honest maturity

- privacy/role policy: designed;
- field-level implementation: not built;
- small-group suppression thresholds: not calibrated;
- legal/employment review: not performed;
- external AI: not authorized;
- live data processing: none.