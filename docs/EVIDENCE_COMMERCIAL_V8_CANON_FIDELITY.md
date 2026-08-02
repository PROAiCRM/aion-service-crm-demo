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

These assets preserve the approved dark premium AION identity, metallic logo, blue neon depth, 3D module icons, working queue, card proportions and five-item Dock. They must not be creatively redrawn during the fidelity stage.

## Canon freeze rule

No developer or AI may change the following without a new explicit owner decision:

- logo form and metallic treatment;
- overall dark palette and blue neon hierarchy;
- card geometry, proportions, spacing and visual depth;
- module composition and 3D icon style;
- five-item Dock composition;
- visible texts and hierarchy inside the approved reference screens;
- the position, scale or appearance of the approved screens and modals.

Functional implementation must be built beneath the approved visual layer, not by replacing or loosely reinterpreting it.

## Implemented

- canonical entry: `app-v8-canon.html`;
- root `index.html` redirects to the canonical entry;
- removed dependency on the v7.x implementation and patch chain;
- approved screens are displayed as the visual truth instead of being approximately reconstructed with HTML/CSS;
- Safari-compatible runtime extracts the embedded WebP raster before display, avoiding direct nested SVG image rendering;
- transparent interaction hotspots switch between Home, Orders, Repair, Clients and More;
- Home opens the approved New repair, Search and QR screens;
- Orders search opens the approved Search screen;
- Repair New repair opens the approved New repair screen;
- Clients QR and Find order open the approved QR/Search screens;
- close hotspots return from each approved modal;
- viewport is constrained to the original 320:569 composition without horizontal scrolling;
- v7.x remains available only as rollback/history.

## Physical evidence received

The owner supplied screenshots from a real iPhone showing successful rendering of:

- Home;
- Orders;
- Clients;
- New repair modal;
- Preferences/settings modal.

The previous blue corrupted screen is no longer present in the verified Safari runtime.

## Maturity boundary

- visual reference: **OWNER APPROVED / FROZEN**;
- fidelity interaction design: **DESIGNED**;
- image-backed interactive web prototype: **IMPLEMENTED**;
- source/static validation: **PASSED**;
- physical rendering on owner’s iPhone: **PASSED FOR THE SUBMITTED SCREENS**;
- complete physical click-through of every hotspot and modal: **PARTIALLY VERIFIED**;
- pixel-perfect implementation with real semantic components: **NOT IMPLEMENTED**;
- real order search, QR decoding, camera recognition, supplier search, database, documents, roles and server controls: **NOT IMPLEMENTED**;
- production readiness, accessibility, shift usability and commercial result: **NOT PROVEN**.

## Architectural boundary

The image-backed layer is deliberately a fidelity and interaction reference, not the production UI architecture. It protects the frozen visual truth while semantic components, business rules and integrations are later implemented beneath the same approved presentation. It must not become the long-term implementation shortcut for the production CRM.

## Current mandatory next step

Implement the first real semantic workflow beneath the frozen visual canon without changing its appearance:

1. New repair guided intake;
2. client lookup/create;
3. device and problem capture;
4. explicit human confirmation;
5. immutable action receipt for the created demo order.

Until that workflow exists, v8 remains a physically verified interactive visual prototype, not a working CRM module.
