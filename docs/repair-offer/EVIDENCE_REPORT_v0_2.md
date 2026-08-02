# AION Repair Offer — Evidence Report v0.2

**Date:** 2026-08-02  
**Evidence level:** local automated, browser-interaction, and GitHub source publication evidence  
**Commercial evidence:** none yet

## Automated domain checks

Passed:

1. proposal creation and validation;
2. recommended-option normalization;
3. cross-device offer envelope encode/decode;
4. customer approval and Action Receipt creation;
5. response import contract;
6. conversion to a local repair-order draft;
7. backup and restore;
8. checksum and validation guards;
9. rejection of approval without consent;
10. rejection of a response for another proposal.

## Browser interaction checks

Passed in a 390 × 844 mobile viewport using an isolated browser test harness:

1. home screen rendered;
2. demo proposal created;
3. proposal detail opened;
4. customer mode opened;
5. consent selected;
6. recommended option approved;
7. approval receipt rendered.

## Syntax checks

Passed:

- `repair-offer-core-v0-2.js`;
- `repair-offer-v0-2.js`;
- `repair-offer-sw-v0-2.js`.

## Publication evidence

Confirmed through GitHub after publication:

- the v0.2 HTML entry point exists on `main`;
- the UI module exists on `main` and imports the separate domain core;
- the complete interaction-routing tail exists on `main`;
- product documents and automated test source exist in the public repository;
- the existing v0.1 page and canonical CRM entry point were not replaced.

The expected GitHub Pages path is:

`https://proaicrm.github.io/aion-service-crm-demo/repair-offer-v0-2.html?v=20260802-1`

Direct loading of the live Pages URL could not be independently verified from the build environment because local and external page navigation was blocked by its administrator policy. Owner acceptance on a real phone remains mandatory.

## Production contract evidence

A documentation-only production integration RFC was created in the private technical source of truth on branch:

`agent/repair-offer-production-contract-v0-1`

Draft PR: `PROAiCRM/AION-Service-CRM#196`.

This RFC is proposed architecture, not implemented runtime evidence.

## Limitations of evidence

- owner two-device acceptance is not yet recorded;
- automatic server synchronization was not tested because it is not implemented;
- no real customer data or production environment was used;
- no legal review of consent language was performed;
- no commercial conversion result has been measured;
- production PostgreSQL/RLS integration is designed in RFC only and has not been implemented.
