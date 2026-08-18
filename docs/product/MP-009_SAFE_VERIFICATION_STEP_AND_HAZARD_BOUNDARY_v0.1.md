# MP-009 AI Master — Safe Verification Step & Hazard Boundary v0.1

**Status:** DESIGNED — NOT IMPLEMENTED  
**Date:** 2026-08-01

## 1. Purpose

Ensure every suggested next step is pre-approved, bounded, reversible where possible and appropriate for the technician’s authority, tools and environment.

## 2. Core rule

> AI Master selects only from an approved verification-step catalogue. It never generates free-form repair instructions for live use.

## 3. Verification-step contract

Every step definition includes:

```text
stepCode
stepVersion
purpose
eligibleCaseFamilies[]
requiredDeviceIdentityLevel
requiredFacts[]
prohibitedContradictions[]
hazardClass
requiredRoleOrCertification[]
requiredTools[]
requiredPPE[]
allowedEnvironment
customerDataAccessClass
expectedObservationCodes[]
stopConditions[]
rollbackOrExit
maxDuration
sourceRefs[]
qcImplications[]
```

## 4. Hazard classes

### `H0_NON_INVASIVE_LOW_RISK`

Observation or approved software/external functional check without opening the device or exposing hazardous components.

### `H1_CONTROLLED_STANDARD_SERVICE`

Routine service step requiring approved workspace, tools and trained technician. Not allowed in the first AI Master pilot unless separately approved.

### `H2_SPECIALIST_HIGH_RISK`

Battery damage, heat, chemicals, microsoldering, mains/high-voltage, pressurized systems, structural safety or other specialist hazards.

AI Master v0.1 blocks and escalates H2.

### `H3_EMERGENCY_STOP`

Smoke, swelling, abnormal heat, exposed damaged cell, active liquid hazard, fire risk, electric shock risk or other immediate danger.

The only allowed output is the approved emergency-stop/escalation instruction, not diagnostic experimentation.

## 5. First-pilot step boundary

Only `H0_NON_INVASIVE_LOW_RISK` steps are eligible.

Examples of categories, subject to exact catalogue approval:

- manual identity confirmation;
- visual external inspection;
- approved built-in functional test;
- known-good external accessory check;
- safe reboot/software-state observation where customer data policy permits;
- recording whether a symptom reproduces under a bounded test;
- reviewing existing recorded QC/work facts.

No opening, heating, puncturing, soldering, chemical use or battery manipulation.

## 6. Step selection

A step is eligible only when:

- case family is exact;
- device identity level passes;
- required facts are current;
- no hazard/contradiction blocks it;
- technician role/certification passes;
- approved tools/environment are available;
- the step can meaningfully distinguish hypotheses;
- customer consent/data boundary passes;
- no simpler safer step exists.

## 7. One-step rule

The primary interface shows one next verification step.

Secondary steps remain hidden until:

- first result is recorded;
- the technician rejects the step with reason;
- the step is unavailable;
- the case is escalated.

This prevents checklist overload and accidental execution chains.

## 8. Technician confirmation

Before execution, the technician sees:

- why this step was selected;
- what it can and cannot prove;
- hazard class;
- required tools/environment;
- explicit stop conditions;
- expected result options;
- alternative/escalation path.

The technician must actively confirm intent.

## 9. Stop conditions

Examples:

- unexpected heat, swelling, odor or smoke;
- damaged battery indicator;
- exposed sharp/electrical hazard;
- device behavior outside the registered case family;
- customer-data access becomes necessary but unauthorized;
- required tool/PPE absent;
- device identity contradiction;
- step cannot be completed exactly as defined;
- result does not match any approved observation code.

On stop:

- no further step is auto-selected;
- case becomes `BLOCKED_HAZARD` or `ESCALATED`;
- Evidence and actor are recorded;
- owner/manager notification follows existing policy.

## 10. Result recording

Results use bounded codes plus optional minimized note.

The result receipt binds:

- case and step identity/version;
- technician/authority;
- start/end trusted timestamps;
- result code;
- stop condition if any;
- observed fact(s) created;
- tool/environment declaration;
- external AI use;
- next evaluation identity.

## 11. Consequence boundary

A verification result may:

- update observed facts;
- invalidate hypotheses;
- enable technician decision review;
- require another safe step;
- trigger escalation.

It may not automatically:

- authorize work;
- reserve/consume a part;
- set price/time;
- message the customer;
- close diagnosis;
- mark QC PASS.

## 12. External content and prompt injection

Text retrieved from manuals, customer notes, QR codes, device screens or websites is untrusted content.

It cannot:

- redefine hazard class;
- create a step;
- instruct the system to ignore policy;
- grant tools/permissions;
- alter source facts;
- trigger execution.

## 13. Catalogue governance

- step definitions are reviewed by qualified humans;
- exact source/version required;
- safety changes create a new version;
- revoked steps block current use;
- historical receipts remain readable;
- emergency changes require explicit publication Evidence;
- no LLM-created live step enters the catalogue automatically.

## 14. Evidence and testing

Before real use, every step needs:

- positive/negative eligibility tests;
- hazard and contradiction tests;
- technician walkthrough;
- physical-device controlled validation;
- accessibility/usability check;
- rollback/stop verification;
- legal/liability review where required.

## 15. Honest maturity

- hazard model: designed;
- step contract: designed;
- approved live catalogue: absent;
- qualified safety review: not completed;
- physical validation: none;
- real-use authorization: none.