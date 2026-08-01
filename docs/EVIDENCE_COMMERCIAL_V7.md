# Evidence — AION Service CRM Commercial v7

Date: 2026-08-02

Evidence scope: local source validation and headless Chromium interaction smoke before publication.

## Passed

- JavaScript syntax: PASS (`node --check`).
- HTML IDs: 18 total, 18 unique, duplicates: 0.
- Six Home action cards: PASS.
- Five consistent workspaces and five bottom navigation items: PASS.
- Rear-device queue cards: PASS.
- Two explicit camera inputs for QR and model photo: PASS.
- No external runtime libraries or remote image dependencies: PASS.
- Headless Chromium at 430 px viewport: runtime page errors 0.
- Home, Clients and More rendered; navigation changed the active workspace correctly.
- Dark to Light theme switch: PASS.
- RU/EN logic, sheets, queue, order search, client search and primary demo actions are present.

## Not proven

- physical iPhone Safari behavior;
- production browser support for the bundled prototype loader;
- real QR decoding;
- real device model recognition;
- real supplier price, stock or ETA;
- React/API/PostgreSQL integration;
- authorization and server-side business rules;
- usability improvement in a real service shift;
- accessibility and old-device performance;
- commercial result.

This evidence does not establish product or production readiness.
