# AION Development Loop v0.1 — Owner Gates

## AUTO — agent may proceed without interrupting Owner
Only when the intended result is unambiguous and remains inside approved scope:
- fix deterministic bugs;
- repair broken navigation/links;
- correct console/runtime errors;
- fix responsive, safe-area and overflow defects;
- improve accessibility without changing UX intent;
- implement reduced-motion fallback;
- correct CSS spacing/alignment inside the frozen composition;
- fix tests and verification code without changing product semantics;
- refactor narrowly when externally observable behavior remains unchanged and tests/evidence cover it.

## HOLD_OWNER — mandatory stop
Owner approval is required before:
- redesigning or recomposing a frozen screen;
- changing visual language, icon meaning or navigation topology;
- adding/removing a user-facing function or screen;
- changing business semantics or workflow authority;
- changing payment, debt, cash, QC, issue/handoff or refund behavior;
- changing roles, permissions, privacy or security policy;
- changing backend/API/database/migrations;
- introducing a new external provider or material dependency;
- merging to main or another protected/canonical branch;
- deploying/releasing to production;
- using real customer/business data;
- resolving a conflict between two Owner-approved sources where precedence is not explicit.

## HARD_STOP
Stop immediately and preserve evidence if any of these occurs:
- source identity cannot be proven;
- requested base branch/head changed unexpectedly;
- destructive or irreversible action would be required;
- secrets or private data appear in source/logs/artifacts;
- tests reveal a privacy/security boundary failure;
- a visual task requires an exact reference that is missing;
- implementation would require invented business semantics;
- the agent cannot distinguish a defect from a product decision.

## Owner communication policy
`NO_OWNER_INTERRUPTION_DURING_BATCH=YES`.

During a batch, do not send micro-questions. Accumulate non-blocking observations in the handoff. Interrupt only for `HOLD_OWNER` or `HARD_STOP`.

At batch end present one compact report:
- tasks completed;
- evidence PASS/FAIL/NOT_RUN;
- visible changes;
- known defects;
- one Owner decision if required;
- next recommended batch.