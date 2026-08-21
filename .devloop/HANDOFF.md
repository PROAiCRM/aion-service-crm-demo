# AION Development Loop v0.1 — Worker Handoff

## Current truth
- Repository: `PROAiCRM/aion-service-crm-demo`
- Source prototype: PR `#27`
- Exact source branch: `prototype/aion-service-mobile-v1.0-exact`
- Exact source head: `c93f52d381d3180e65694f145c85e97b500ba20f`
- Development-loop branch: `automation/aion-development-loop-v0.1`
- Main/product repository mutation: `NO`
- Backend/DB/API/production: `OUT_OF_SCOPE`
- Autonomous runner/orchestrator executable: `NOT_IMPLEMENTED`
- Repository control contract: `BOOTSTRAPPED`

## What the next working chat / Codex must do
1. Open the exact repository and switch to `automation/aion-development-loop-v0.1`.
2. Read `AGENTS.md` and all files under `.devloop/` before changing code.
3. Execute `.devloop/NEXT_TASK.yaml` exactly.
4. Do not ask the Owner for micro-confirmations during the batch.
5. Stop only for a real `HOLD_OWNER`, `HARD_STOP` or evidence blocker defined in the repository contract.
6. After the batch, update `CURRENT_STATE.yaml`, `NEXT_TASK.yaml` and this handoff with actual evidence.
7. Return one compact batch report to the Owner.

## Important visual-source boundary
The latest Owner-approved visual image from the originating chat is not currently materialized in this repository branch.

Therefore:
- if the working chat already has that exact image in its own context, it may use it only after recording the exact source/reference;
- if it does not have the image, it must not recreate it from memory;
- it may continue source audit, task decomposition, deterministic interaction/runtime fixes and verification work that do not require guessing the missing visual source.

## Owner communication target
The desired operating model is:

`OWNER GOAL -> PLANNER -> BUILDER -> REVIEWER -> VERIFIER -> CORRECTION LOOP -> ONE OWNER BATCH REVIEW`

Not:

`OWNER -> micro-question -> micro-answer -> next micro-question`.

## Stop point
`CONTROL_PLANE_BOOTSTRAP_COMPLETE`

## Next mandatory step
`DEVLOOP-PILOT-001` from `.devloop/NEXT_TASK.yaml`.

## One-line instruction for another chat
`Read PROAiCRM/aion-service-crm-demo branch automation/aion-development-loop-v0.1 starting from AGENTS.md, then execute .devloop/NEXT_TASK.yaml. Do not modify main or the product repository. Do not interrupt Owner during the batch unless HOLD_OWNER/HARD_STOP.`