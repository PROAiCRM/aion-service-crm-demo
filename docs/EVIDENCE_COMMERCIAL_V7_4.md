# Evidence — AION Service CRM Commercial v7.4

Date: 2026-08-02

## Trigger

Physical iPhone screenshots of Commercial v7.3 confirmed that the wide service feedback banner labelled `Тема` could still remain visible in the Light theme. The screenshots also showed that:

- the Home Dock remained close to lower content;
- Orders device thumbnails remained insufficiently differentiated.

## Implemented

- added reversible `app-v7-4.html` entry over the stable v7.2 base;
- retained v7.3 canon-alignment CSS and JavaScript;
- added `app-v7-4.css` and `app-v7-4.js`;
- theme feedback suppression now uses text, geometry, viewport position and floating/status semantics rather than relying only on toast class names;
- suppression is repeated after theme-related interaction and DOM mutations;
- additional bottom content clearance was added above the fixed Dock;
- Orders thumbnail detection was broadened and model variants receive distinct rear-device silhouettes;
- v7.3 and earlier versions remain available for rollback;
- root `index.html` now points to v7.4.

## Source validation

- `app-v7-4.js`: JavaScript syntax PASS via `node --check` before publication;
- v7.4 HTML, CSS and JavaScript files committed to `main`;
- no CRM API, database, authentication, real supplier integration or customer data added.

## Not yet proven

- successful loading of v7.4 in physical iPhone Safari;
- actual removal of the `Тема` banner on the owner's device;
- model differentiation across all Orders rows in physical Safari;
- no overlap across every iPhone size and Safari toolbar state;
- accessibility, real-shift usability, performance or commercial result;
- production readiness.

Commercial v7.4 remains an interactive demo prototype.
