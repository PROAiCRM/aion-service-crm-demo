# Session Handoff — AION Service CRM Comfort v6

Date: 2026-08-01

## Done

- published `app-v6.html`, `app-v6.css` and `app-v6.js`;
- switched GitHub Pages entry point from v5 to v6;
- replaced personal greeting with `Главное на сегодня`;
- compacted the global top shell;
- removed the duplicated Home Modules block;
- added dynamic Home working tools for QR, Photo and Suppliers;
- added QR device lookup to Clients;
- moved theme, notifications, profile, quick access, language and AION Basic entry points into More/Settings;
- added touch-friendly module assignment, ordering, visibility and reset with local persistence;
- documented decision and limited evidence;
- updated the main private-project PR with maturity and safety boundaries.

## Decisions

- bottom navigation remains fixed;
- configurable modules change presentation only;
- critical workflow, authorization and server rules are not configurable through UI layout;
- QR/photo/supplier capabilities remain demonstration boundaries until product contracts and integration evidence exist.

## Unfinished

- physical iPhone Safari review;
- real QR decoding contract and cross-browser support;
- product-grade workspace configuration model;
- React/API/PostgreSQL implementation;
- accessibility and old-device performance testing;
- real supplier integrations;
- real user-comfort metrics.

## Risks

- browser QR capability is not consistently available;
- unlimited module movement could create clutter, so fixed navigation and core workflow remain protected;
- local demo persistence is not a multi-user or server-authoritative configuration model;
- public demo must remain free of production data and secrets.

## Stop point

Comfort v6 source and documentation are committed to the public demo `main` branch, and `index.html` points to v6.

## Next mandatory step

Review v6 on physical iPhone in Dark and Light themes, test Clients QR entry and module reordering, then record concrete corrections before designing React/API contracts.
