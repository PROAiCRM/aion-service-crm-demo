# Evidence — AION Service CRM Commercial v7.8 Canon Interaction Fix

Date: 2026-08-02

## Trigger

Physical iPhone screenshots of v7.7 confirmed that the approved visual direction was largely restored, while four implementation defects remained:

- the Search sheet displayed `12543` as a placeholder while showing all four orders, which visually resembled a failed search;
- the Repair entry button received Safari's default white button appearance;
- the sticky Dock was not permanently visible on the long Home screen;
- the AION mark remained too close to the left viewport edge and search result buttons did not use the canonical text treatment.

## Boundary

v7.8 is not a redesign and does not supersede the owner-approved visual canon. It is a browser-behavior and interaction correction over the v7.7 canon-restoration layer.

## Implemented

- dedicated v7.8 interaction script using the same single order and client data source;
- Search sheet now opens empty with the explicit hint `Например, 12543`;
- no results are shown until the user types;
- entering `12543` filters directly to order №12543;
- theme switching no longer destroys the contents of the Theme card;
- Safari default styling removed from the Repair entry button;
- Dock restored as a permanently visible fixed canonical control;
- page bottom clearance added so the Dock does not cover the final record;
- Dock remains hidden while the iPhone keyboard is open;
- search result cards use left-aligned canonical text and panel styling;
- QR and Search sheets compacted without changing their meaning;
- small safe inset added around the AION mark;
- v7.7 and earlier versions remain available for rollback;
- root `index.html` points to v7.8.

## Source verification

- published files: `app-v7-8.html`, `app-v7-8.css`, `app-v7-8.js`;
- the v7.8 script contains direct filtering against the order data array;
- no real database, authentication, QR decoding, supplier integration or customer data was added.

## Not yet proven

- physical filtering result on the owner's iPhone;
- permanent Dock visibility through all Safari toolbar states;
- Repair button appearance on the physical device;
- final header inset on the physical device;
- Light-theme fidelity, accessibility, real-shift usability or production readiness.

Commercial v7.8 remains an interactive demo prototype under the frozen owner-approved visual canon.
