# AION Repair Offer — Evidence Report v0.2

**Date:** 2026-08-02  
**Evidence level:** local automated and browser-interaction evidence  
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

## Limitations of evidence

- GitHub Pages deployment was not yet verified at the time this report was generated.
- Automatic server synchronization was not tested because it is not implemented.
- No real customer data or production environment was used.
- No legal review of consent language was performed.
- No commercial conversion result has been measured.
