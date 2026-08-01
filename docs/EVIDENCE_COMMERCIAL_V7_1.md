# Evidence — AION Service CRM Commercial v7.1

Date: 2026-08-02

Evidence scope: local source validation and headless Chromium smoke of the assembled prototype before publication.

## Passed

- v7.1 loader reconstructs the existing v7 prototype and injects only the canon-alignment style layer;
- JavaScript syntax of the underlying v7 prototype: PASS (`node --check`);
- HTML IDs in the assembled interface remain unique;
- initial Home workspace renders;
- three queue cards render in the compact iPhone layout;
- Home → Clients → More → Home navigation: PASS;
- Dark → Light theme switch: PASS;
- Light-theme text and metric contrast repair: PASS;
- no runtime page errors captured in the tested Chromium scenario;
- Commercial v7 remains unchanged as a rollback point.

## Not proven

- physical iPhone Safari fidelity of v7.1;
- production support for every browser rendering detail;
- real QR decoding;
- real device recognition;
- real supplier pricing, stock or delivery estimates;
- React/API/PostgreSQL integration;
- authorization and server-side business rules;
- accessibility and old-device performance;
- real employee usability improvement;
- commercial result.

This evidence does not establish production readiness.
