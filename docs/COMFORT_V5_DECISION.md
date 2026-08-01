# AION Service CRM Comfort v5 — Owner-approved direction

Date: 2026-08-01

Status: APPROVED PROTOTYPE DIRECTION / IMPLEMENTED AS DEMO / NOT PRODUCT-INTEGRATED

## Owner feedback incorporated

- Replace the Home-screen QR/signature area with higher-value work tools.
- Add device search by photo.
- Add parts comparison across suppliers.
- Increase text size and readability.
- Preserve the established AION Commercial UI visual language and dark/light themes.

## Implemented in the demo

- `Photo Search`: explicit camera action, local object-URL preview, demo model suggestions, mandatory employee confirmation.
- `Supplier Compare`: local demo catalog, comparison by recommendation, price and delivery time.
- Larger type scale for queue, current order, modules, navigation and supporting labels.
- QR and customer signature remain conceptually inside intake/order flows, not as permanent Home-screen blocks.

## Safety and truth boundaries

- Photo recognition is simulated; no real computer-vision model is connected.
- The selected image is not intentionally uploaded or sent over the network in this demo.
- Supplier names, prices, inventory and delivery times are fictional demo data.
- No supplier API, reservation, payment, authentication, database or production order integration exists.
- Employee confirmation remains required for the device model and supplier choice.

## Next gate

Physical iPhone Safari review in dark and light themes, followed by evidence-based refinement of Photo Search, Supplier Compare and Express Intake.
