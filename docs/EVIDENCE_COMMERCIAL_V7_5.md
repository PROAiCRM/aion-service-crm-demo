# Evidence — AION Service CRM Commercial v7.5

Date: 2026-08-02

## Trigger

Physical iPhone screenshots of Commercial v7.4 confirmed:

- the Theme feedback banner was removed;
- Orders device thumbnails became model-distinct;
- QR and Find order sheets opened;
- top safe-area handling and workspace navigation worked.

The same screenshots exposed remaining prototype gaps:

- entering `12543` in Find order still displayed all orders;
- the fixed Dock could visually cover lower content while scrolling;
- the QR sheet used a large placeholder and did not connect the camera input to visible local preview;
- search and QR sheets needed more compact mobile behavior.

## Implemented in v7.5

- reversible `app-v7-5.html` entry over the stable v7.2 base;
- dedicated `app-v7-5.css` and `app-v7-5.js` patches;
- local demo filtering by order number, customer or device text;
- result count and explicit no-result state;
- compact Search and QR sheets;
- explicit iPhone-compatible local image input for QR capture;
- local preview after image selection;
- truthful message that QR decoding is not connected;
- increased bottom content clearance and slightly smaller Dock items;
- v7.4 and earlier versions remain available for rollback;
- root `index.html` points to v7.5.

## Source validation

- `app-v7-5.js`: JavaScript syntax PASS via `node --check` before publication;
- v7.5 loader script: JavaScript syntax PASS before publication;
- HTML, CSS and JavaScript committed to `main`;
- no CRM API, database, authentication, real QR decoding, supplier integration or real customer data added.

## Not yet proven

- successful loading of v7.5 in physical iPhone Safari;
- correct physical filtering of order results on the owner’s device;
- successful local camera/file capture on the owner’s iPhone;
- Dock clearance in every Safari toolbar state and iPhone size;
- accessibility, real-shift usability, performance or commercial result;
- production readiness.

Commercial v7.5 remains an interactive demo prototype.
