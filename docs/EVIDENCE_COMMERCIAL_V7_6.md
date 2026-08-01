# Evidence — AION Service CRM Commercial v7.6

Date: 2026-08-02

## Trigger

Physical iPhone screenshots of Commercial v7.5 confirmed:

- the fixed Dock no longer covered the final visible cards in the tested views;
- Clients, More and New Repair opened correctly;
- the visual canon remained consistent across the tested dark-theme screens.

The same screenshots exposed an iPhone keyboard/viewport defect:

- focusing the Orders search field caused the Safari visual viewport to zoom or shift;
- the header and right-side monetary values moved outside the visible width;
- the Dock remained visually present while the keyboard was active;
- the main Orders and Clients search fields were not yet proven as working local filters.

## Implemented in v7.6

- reversible `app-v7-6.html` entry over the stable v7.2 base;
- dedicated `app-v7-6.css` and `app-v7-6.js` patches;
- all text inputs, textareas and selects use an iPhone-safe minimum 16 px font size;
- horizontal overflow is blocked at the document and workspace boundaries;
- the Dock hides while an input is focused or the software keyboard is detected;
- Visual Viewport height and offset are tracked;
- focused fields are kept inside the visible keyboard-safe area;
- the main Orders search filters the local demo list by order, customer or device text;
- the main Clients search filters the local demo list by customer or device text;
- explicit no-result states were added;
- v7.5 and earlier versions remain available for rollback;
- root `index.html` points to v7.6.

## Source validation

- `app-v7-6.js`: JavaScript syntax PASS via `node --check` before publication;
- v7.6 loader boundary and asset references checked before publication;
- HTML, CSS and JavaScript committed to `main`;
- no CRM API, database, authentication, real QR decoding, supplier integration or real customer data added.

## Not yet proven

- successful loading of v7.6 in physical iPhone Safari;
- removal of Safari focus zoom/shift on the owner’s device;
- correct Orders and Clients filtering on the owner’s device;
- correct Dock hide/restore behavior for every Safari toolbar state;
- behavior on every supported iPhone size and orientation;
- accessibility, real-shift usability, performance or commercial result;
- production readiness.

Commercial v7.6 remains an interactive demo prototype.
