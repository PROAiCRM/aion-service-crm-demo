# AION Repair Offer

AION Repair Offer helps a service center turn a price message into a clear, versioned repair proposal with several options and a recorded customer decision.

## Current maturity

- **Idea:** validated as a relevant service-center pain.
- **Designed solution:** yes.
- **Interactive prototype v0.1:** completed.
- **Pilot product v0.2:** implemented and locally tested.
- **Production database/authentication:** not implemented in this public demo.
- **Commercial result:** not yet proven.

## Pilot flow

1. The service creates 1–5 repair options.
2. A public offer is encoded into a shareable link.
3. The customer opens the link on another phone and chooses approve, question, or decline.
4. The customer shares a response link back to the service.
5. The service opens that response link and imports the decision.
6. An approved offer can become a local repair-order draft.

The v0.2 flow works without a shared server. It is designed for fast hypothesis testing, not for production-scale operation.

## Open the product

`repair-offer-v0-2.html`

## Safety boundary

Do not put customer phone numbers, surnames, addresses, device serial numbers, passwords, or other personal/sensitive data into the pilot. Offer and response payloads are encoded, not encrypted.
