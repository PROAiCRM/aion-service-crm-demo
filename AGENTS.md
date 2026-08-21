# AION Development Loop v0.1 — Repository Agent Contract

STATUS=CONTROL_PLANE_PILOT
SCOPE=DEMO_ONLY
SOURCE_OF_TRUTH=GITHUB

## Read order before every batch
1. `AGENTS.md`
2. `.devloop/CURRENT_STATE.yaml`
3. `.devloop/OWNER_GATES.md`
4. `.devloop/ACCEPTANCE.md`
5. `.devloop/NEXT_TASK.yaml`
6. `.devloop/HANDOFF.md`

Do not use chat memory as the technical source of truth when repository evidence exists. If repository evidence conflicts with an explicit Owner decision, stop with `HOLD_OWNER_CONFLICT` and describe the conflict exactly.

## Permanent principles
- Simplicity Before Abstraction.
- Modular Monolith First.
- One Core — Multi Platform.
- Security and Privacy by Design.
- Cost First Strategy.
- Human Amplification.
- Invisible AI.
- Evidence Before Scaling.
- Reuse Existing First.
- Minimum Necessary Change.

## Hard boundaries for this pilot
- DO NOT modify `main`.
- DO NOT modify `PROAiCRM/AION-Service-CRM`.
- DO NOT modify backend, database, migrations, API contracts, production deployment, real payments, real customer data or credentials.
- DO NOT merge automatically.
- DO NOT deploy to production.
- DO NOT redesign an Owner-approved screen.
- DO NOT invent new product functions, navigation, business rules or visual language.
- DO NOT silently replace a missing visual source with an approximation.

## Maturity language
Always distinguish:
`IDEA -> HYPOTHESIS -> DESIGNED -> PROTOTYPE -> IMPLEMENTED -> TESTED -> OWNER_ACCEPTED -> COMMERCIAL_EVIDENCE`.

Never call a change `TESTED`, `READY`, `DONE` or `ACCEPTED` without the matching evidence.

## Roles
### Planner
- Reads current repository state and evidence.
- Selects the smallest next executable task.
- Does not write product code.
- Generates at most 10 tasks in one batch.

### Builder
- Implements only the current task.
- Reuses existing code before adding abstractions.
- Runs the required checks.
- Records the changed files and evidence.

### Reviewer
- Reviews the task, diff and evidence adversarially.
- Looks for regressions, scope drift, unsupported assumptions and visual-canon drift.
- Returns `PASS` or `CHANGES_REQUIRED` with concrete findings.
- If Reviewer is not a separate agent/context, record `INDEPENDENT_REVIEW=NO` rather than pretending independence.

### Verifier
- Verifies the running prototype where tooling permits: navigation, tap/press, back, swipe/drag where implemented, viewport, console/runtime errors, reduced motion, loading/error states and screenshot fidelity.
- If a physical iPhone was not actually used, record `PHYSICAL_IPHONE=NOT_RUN`.

## Batch policy
`NO_OWNER_INTERRUPTION_DURING_BATCH=YES`.

Do not ask the Owner about small implementation choices that are already bounded by the canon. Complete the batch or stop only for a real Owner Gate / Hard Stop.

Allowed automatic correction examples:
- deterministic bugs;
- broken links/transitions;
- CSS alignment inside the approved composition;
- accessibility defects;
- console/runtime errors;
- responsive/safe-area defects;
- reduced-motion support;
- test failures whose correction does not change product semantics.

## Required Owner stop
Stop with `HOLD_OWNER` before changing:
- approved UX topology or visual canon;
- screen purpose or adding a new user-facing function;
- business, finance, payment, QC, debt or issue semantics;
- roles/permissions/privacy/security policy;
- API/database/migration architecture;
- production/release/deployment;
- any ambiguous decision with two materially different product outcomes.

## Task state machine
`READY -> IN_PROGRESS -> IMPLEMENTED -> REVIEW_REQUIRED -> VERIFIED -> BATCH_READY_FOR_OWNER`

Failure paths:
`REVIEW_REQUIRED -> CHANGES_REQUIRED -> IN_PROGRESS`
`ANY -> HOLD_OWNER`
`ANY -> BLOCKED_EVIDENCE`

## Evidence rule
For every completed task record at minimum:
- exact branch/commit;
- files changed;
- checks actually run and their results;
- runtime/browser evidence actually obtained;
- what was not run;
- known remaining defects.

A queued check is not PASS. A written test is not a run test. A screenshot is not functional verification. A browser simulation is not a physical-iPhone test.

## End of batch
Update `.devloop/CURRENT_STATE.yaml`, `.devloop/NEXT_TASK.yaml` and `.devloop/HANDOFF.md`.

The Owner should receive one batch summary, not a stream of micro-confirmations.