# Evidence — AION Service CRM v8 Canon Fidelity

Date: 2026-08-02

## Trigger

Physical iPhone review and owner feedback proved that the v7.x HTML/CSS reconstructions repeatedly departed from the explicitly approved 9.8/10 reference design. The deviations included geometry, typography, icons, logo treatment, Dock proportions, spacing and overall visual depth.

The owner issued a binding instruction: continue strictly from the approved reference screens without improvisation, reinterpretation or visual deviation.

## Binding visual canon

The following owner-approved screens are the immutable visual source for this fidelity prototype:

- `assets/v8/home.svg` — Home;
- `assets/v8/orders.svg` — Orders;
- `assets/v8/repair.svg` — Repair;
- `assets/v8/clients.svg` — Clients;
- `assets/v8/more.svg` — More;
- `assets/v8/new-repair.svg` — New repair modal;
- `assets/v8/qr.svg` — QR modal;
- `assets/v8/search.svg` — Search modal.

These assets preserve the approved dark premium AION identity, metallic logo, blue neon depth, 3D module icons, working queue, card proportions and five-item Dock. They are not to be creatively redrawn during the fidelity stage.

## Implemented

- published a new direct static entry: `app-v8-canon.html`;
- removed dependency on the v7.x implementation and patch chain;
- no runtime `fetch()`, `DOMParser`, `document.write()` or intermediate loading boundary;
- displays the approved reference screen as the visual layer rather than attempting a similar CSS reconstruction;
- transparent interaction hotspots switch between Home, Orders, Repair, Clients and More;
- Home opens the approved New repair, Search and QR screens;
- Orders search opens the approved Search screen;
- Repair New repair opens the approved New repair screen;
- Clients QR and Find order open the approved QR/Search screens;
- close hotspots return from each approved modal;
- viewport is constrained to the original 320:569 composition without horizontal scrolling;
- root `index.html` redirects to the v8 Canon Fidelity entry;
- all v7.x files remain available as rollback/history and are not represented as the current canon.

## Source validation completed

- standalone HTML source created and committed;
- JavaScript syntax passed `node --check` before publication;
- duplicate HTML IDs: 0;
- external network dependencies: 0;
- runtime page fetch/HTML replacement: 0;
- five page targets and three modal targets are present;
- eight referenced canon assets exist in the repository;
- no API credentials, customer records, database, authentication, supplier account or private CRM code were added.

## Maturity boundary

- visual reference: **OWNER APPROVED / FROZEN**;
- fidelity interaction design: **DESIGNED**;
- image-backed interactive web prototype: **IMPLEMENTED**;
- source/static validation: **PASSED**;
- physical v8 verification on the owner’s iPhone: **NOT YET CONFIRMED**;
- pixel-perfect implementation with real semantic components: **NOT IMPLEMENTED**;
- real order search, QR decoding, camera recognition, supplier search, database, documents, roles and server controls: **NOT IMPLEMENTED**;
- production readiness, accessibility, shift usability and commercial result: **NOT PROVEN**.

## Architectural boundary

The image-backed layer is deliberately a fidelity and interaction reference, not the production UI architecture. It protects the frozen visual truth while semantic components, business rules and integrations are later implemented beneath the same approved presentation. It must not become the long-term implementation shortcut for the production CRM.

## Mandatory next check

Open `app-v8-canon.html?v=20260802-1` on the owner’s iPhone and verify:

1. Home appears fully without crop or blank area;
2. all five Dock tabs open the exact approved screens;
3. Home New repair, Search and QR open the approved modal screens;
4. Orders search, Repair New repair and Clients QR/Search open correctly;
5. each modal closes through its visible X control;
6. no v7 visual elements, loader screens or Safari default button styling are present.
