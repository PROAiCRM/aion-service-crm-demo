# Evidence — AION Service CRM Commercial v7.6 Consolidated

Date: 2026-08-02

## Trigger

Physical iPhone screenshots proved that the layered v7.2 → v7.3 → v7.4 → v7.5 → earlier v7.6 patch chain remained unreliable:

- order search could display all orders after entering `12543`;
- QR sheet styling could remain on the older large layout;
- fixed Dock and keyboard behavior remained sensitive to Safari viewport states;
- later patches depended on detecting generated DOM from an older compressed prototype.

## Decision

Stop adding patch layers. Replace `app-v7-6.html`, `app-v7-6.css`, and `app-v7-6.js` with a clean standalone prototype that does not fetch or execute any earlier prototype version.

## Implemented

- one standalone HTML structure with five workspaces;
- one consolidated CSS canon;
- one JavaScript data and interaction layer;
- direct order filtering by number, customer, device and status;
- direct client filtering;
- compact Search, QR, model-photo, price/ETA, release, intake and settings sheets;
- local iPhone image capture and preview for QR/model-photo demo flows;
- truthful notice that decoding and model recognition are not connected;
- sticky Dock that remains in document flow;
- Dock suppression while the iPhone keyboard reduces the visual viewport;
- RU/EN navigation state and Dark/Light theme;
- root `index.html` points to consolidated v7.6 with a new cache key.

## Source validation

- JavaScript syntax: PASS via `node --check` before publication;
- duplicate HTML ids: 0;
- pages: 5;
- modal workspaces: 7;
- all `data-action` targets resolve to an existing modal;
- no dependency on `app-v7-2.html` or v7.3–v7.5 patch files;
- no CRM API, database, authentication, supplier API, QR decoding, AI recognition or real customer data added.

## Not yet proven

- physical rendering and interactions of the consolidated build in owner iPhone Safari;
- correct filtering of `12543` on the physical device;
- local image capture and preview on the physical device;
- Dock behavior across all Safari toolbar/keyboard states;
- accessibility, production performance, real-shift usability or commercial result.

Commercial v7.6 remains an interactive demo prototype, not a completed CRM product.
