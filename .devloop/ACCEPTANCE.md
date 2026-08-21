# AION Development Loop v0.1 — Acceptance Contract

This file defines what may be called `VERIFIED` for the controlled mobile prototype loop.

## Product scope
- Demo/mobile prototype only.
- Primary target viewport: `393x852`.
- Day Cashmere first; Night Graphite must preserve the same interaction grammar when touched.
- No redesign, no new features, no old-style contamination.

## Visual acceptance
For any visual task:
- composition and hierarchy remain consistent with the exact approved source;
- floating surfaces preserve the intended material/depth hierarchy;
- iconography remains clear, consistent and deliberately drawn rather than generic/accidental;
- no unsupported glow, ripple or decorative animation;
- typography remains legible and consistent;
- safe areas, clipping and overflow are checked at the target viewport;
- if the exact newest Owner visual reference is absent, pixel-exact visual replacement is `BLOCKED_EVIDENCE`, not guessed.

## Interaction acceptance
For touched interactive elements verify, where applicable:
- idle;
- press/down state;
- release/selected state;
- navigation result;
- Back/context restore;
- disabled/error/loading state when the flow can reach it;
- keyboard/focus behavior for inputs;
- reduced-motion fallback.

Frozen interaction direction for active-surface travel when that pattern is used:
- press feedback: approximately `70-90ms`;
- active-surface travel: approximately `180-220ms`;
- pressed scale: approximately `0.985`;
- no ripple;
- no bounce;
- no permanent glow;
- reduced motion: instant state swap with only a short restrained transition when needed.

## Runtime acceptance
A task is not `VERIFIED` unless all applicable checks that are available in the repository/tooling were actually run and results recorded.

Minimum evidence target for a runnable UI batch:
- source syntax/type/build checks applicable to the prototype;
- no known console/runtime error on the touched path;
- touched navigation path exercised;
- target viewport checked;
- screenshot or equivalent visual evidence when available;
- changed files reviewed against task scope;
- `git diff --check` or equivalent whitespace/integrity check when available.

## Truth labels
Use exact labels:
- `PASS` — check actually ran and passed;
- `FAIL` — check ran and failed;
- `NOT_RUN` — check was not run;
- `NOT_AVAILABLE` — tooling/environment does not provide it;
- `BLOCKED_EVIDENCE` — required source/evidence is missing.

Never convert `NOT_RUN`, queued CI, authored tests, static screenshots or assumptions into `PASS`.

## Physical device truth
Browser/device emulation is useful but is not a physical-iPhone test.

Record separately:
- `BROWSER_QA`;
- `MOBILE_VIEWPORT_QA`;
- `PHYSICAL_IPHONE_QA`;
- `OWNER_ACCEPTANCE`.

## Batch acceptance
A batch may be reported `BATCH_READY_FOR_OWNER` when:
1. every included task is `VERIFIED` or explicitly excluded with a recorded blocker;
2. no unresolved P0/P1 regression was introduced;
3. no Owner Gate was crossed;
4. one compact handoff has been written;
5. the next task/batch has been prepared but not falsely marked started.

Owner acceptance remains a separate state and is never automatic.