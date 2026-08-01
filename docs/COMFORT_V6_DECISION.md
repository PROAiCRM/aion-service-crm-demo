# AION Service CRM Comfort v6 — Owner-approved regrouping

Date: 2026-08-01

Status: APPROVED PROTOTYPE DIRECTION / IMPLEMENTED AS DEMO / NOT PRODUCT-INTEGRATED

## Goal

Make the mobile workspace more operational and configurable without duplicating modules or weakening the fixed AION navigation.

## Approved changes

- replace personal greeting with a concise `Главное на сегодня` operational summary;
- keep the top shell narrow and limited to brand plus current workspace;
- move theme, notifications, profile and quick-access controls into `Ещё → Настройки`;
- remove the duplicated generic Modules block from Home;
- place QR search, Photo Search and Supplier Compare in the higher-priority Home working-tools area;
- add QR device search to the Clients workspace;
- allow working modules to move between Home, Clients and More, move up/down and be hidden;
- persist module layout locally in the standalone demo;
- keep the five-item bottom Dock fixed and non-configurable;
- preserve dark/light themes, reduced-motion support and existing safety boundaries.

## Safety boundaries

- module movement changes presentation only and must never alter roles, permissions, server rules or data state;
- QR detection may use a browser capability when available, but the demo result is not evidence of production QR reliability;
- photo and QR captures are local previews in the standalone demo and are not uploaded intentionally;
- supplier prices, stock and delivery times are demonstration data;
- price, consent, payment, QC and issuance still require explicit human confirmation and future server enforcement.

## Next gate

Physical iPhone review of Home, Clients, More/Settings, QR camera behavior, module movement and both themes. Then define the product contracts for QR lookup and configurable workspaces before React/API implementation.
