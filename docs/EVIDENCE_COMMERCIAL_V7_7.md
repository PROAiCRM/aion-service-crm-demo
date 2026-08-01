# Evidence — AION Service CRM Commercial v7.7 Canon Restore

Date: 2026-08-02

## Trigger

Physical iPhone screenshots of Commercial v7.6 confirmed that its cleaner interaction foundation visually departed from the owner-approved commercial canon:

- the AION mark could be clipped at the left edge;
- header controls and inner-page typography became oversized;
- action cards became too tall and lost the approved compact proportions;
- Dock icons used emoji or unrelated system glyphs instead of the unified 3D icon language;
- Repair, Clients, Orders and More no longer matched the approved Home visual density;
- some content expanded horizontally or approached the viewport edge;
- the visual change had not been approved as a new canon.

The owner explicitly restated that the fixed reference design and interface must not be changed or reinterpreted.

## Binding decision

Commercial v7.7 is a canon-restoration pass, not a new design direction.

The approved visual boundary remains:

- dark premium AION shell;
- compact complete AION identity in the header;
- RU / EN, theme and settings in one controlled top contour;
- Working zone + EvE;
- four compact metrics;
- six rectangular 3D action cards;
- strong but bounded New repair emphasis;
- rear-device working queue;
- compact five-item 3D Dock;
- identical geometry and visual language across all tabs;
- Light theme is secondary and must preserve the same structure;
- no emoji, unrelated pictograms or creative reinterpretation.

## Implemented in v7.7

- separate reversible `app-v7-7.html` entry over the clean v7.6 interaction foundation;
- dedicated `app-v7-7.css` canon-restoration layer;
- mobile header width and sizing constraints;
- prevention of horizontal layout expansion;
- compact Home hero, metric, action and queue proportions;
- compact Orders, Repair, Clients and More typography and cards;
- CSS-drawn unified 3D Dock icons replacing emoji/system glyphs;
- CSS-drawn theme and settings controls;
- restored 3D Price and QR action treatment;
- keyboard still hides the Dock through the v7.6 interaction foundation;
- root `index.html` points to v7.7;
- v7.6 and earlier versions remain available for rollback.

## Source validation

- v7.7 stylesheet braces balanced;
- CSS parsed with zero stylesheet errors before publication;
- v7.7 entry and stylesheet committed to `main`;
- no CRM API, database, authentication, supplier integration, real QR decoding or customer data added.

## Not yet proven

- physical iPhone match against the owner-approved visual reference;
- complete header visibility on the owner's device;
- no horizontal overflow on every tab;
- correct compact proportions across Home, Orders, Repair, Clients and More;
- Light-theme visual fidelity;
- accessibility, real-shift usability, performance or commercial result;
- production readiness.

Commercial v7.7 remains an interactive demo prototype. The owner-approved visual canon remains frozen and is not superseded by this implementation pass.
