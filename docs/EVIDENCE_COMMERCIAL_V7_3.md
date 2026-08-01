# Evidence — AION Service CRM Commercial v7.3

Date: 2026-08-02

## Trigger

Physical iPhone screenshots of Commercial v7.2 exposed the following prototype defects:

- a theme feedback banner could remain above the workspace;
- some inner workspaces approached or overlapped the iOS status area;
- the fixed Dock could visually compete with or cover lower content;
- Clients QR/order entry cards were too large;
- Orders used generic device thumbnails;
- Repair and More used more vertical space than necessary;
- Light theme remained less controlled than the dark commercial canon.

## Implemented in v7.3

- separate reversible `app-v7-3.html` loader over v7.2;
- dedicated `app-v7-3.css` and `app-v7-3.js` patches;
- adaptive iPhone top safe-space handling;
- compact header on inner workspaces while retaining the full Home identity;
- smaller Dock plus increased bottom content clearance;
- removal of blocking Theme feedback overlays;
- compact symmetric QR / Find order entry cards in Clients;
- model-like rear-device thumbnails in Orders;
- tighter Repair and More cards;
- increased queue text readability;
- denser, more metallic Light-theme contrast;
- v7.2 remains available as rollback.

## Source validation completed

- loader JavaScript syntax: PASS;
- patch JavaScript syntax: PASS;
- v7.3 entry, CSS and JavaScript files committed to `main`;
- root `index.html` points to `app-v7-3.html?v=20260802-1`;
- no CRM API, database, authentication, supplier integration or real customer data added.

## Not yet proven

- successful loading of v7.3 in physical iPhone Safari;
- actual removal of the blocking Theme banner on the owner's device;
- safe-area behavior in all Safari toolbar states;
- no content overlap across every iPhone size and orientation;
- usability improvement during a real service shift;
- accessibility, low-power-device performance or commercial result;
- production readiness.

Commercial v7.3 remains an interactive demo prototype, not a completed CRM product.
