# Evidence — AION Service CRM Comfort v6

Date: 2026-08-01

Evidence scope: local static-source validation, JavaScript syntax validation and a headless Chromium interaction smoke against the assembled local prototype assets.

## Static checks

Result: 11/11 PASS

1. Comfort v6 title and version references are present.
2. Personal greeting is removed.
3. `Главное на сегодня` operational summary is present.
4. The old duplicated Home Modules block is absent.
5. Home has a dynamic working-tools host.
6. Clients has QR device search.
7. Theme, notifications, profile and quick access are in More/Settings.
8. A module manager can change tab, order and visibility with local persistence.
9. QR camera input uses `accept="image/*"` and `capture="environment"`.
10. QR logic attempts the browser `BarcodeDetector` capability when available and labels fallback results as demo.
11. No intentional `fetch`, `XMLHttpRequest` or `WebSocket` calls are present.

JavaScript syntax: PASS (`node --check`).

HTML inspection:

- no duplicate element IDs;
- four workspaces present: Home, Orders, Clients, More;
- three tool sheets present: QR, Photo, Suppliers;
- one CSS and one JavaScript entry point for v6.

## Browser interaction smoke

Environment: local source assembled with the existing v5 base styles and v6 override assets, rendered in headless Chromium at a 430 × 1200 mobile viewport.

Result: PASS

- initial workspace: Home;
- default Home modules: 3;
- navigation Home → Clients: PASS;
- Clients QR sheet opens: PASS;
- navigation Clients → More: PASS;
- module manager rows: 6;
- moving the QR module from Home to Clients updates the rendered module count: PASS;
- Dark → Light theme switch: PASS;
- reset to the standard module layout: PASS;
- runtime page errors captured during the scenario: 0.

## Not proven

- runtime behavior on physical iPhone Safari;
- real QR decoding reliability;
- real image recognition accuracy;
- privacy behavior after future product integration;
- real supplier connectivity, prices, stock, delivery, reservation or payment;
- usability improvement for service employees;
- accessibility with assistive technologies;
- performance on old devices;
- React/API/PostgreSQL integration;
- commercial result.

This evidence does not establish production readiness.