# Evidence — AION Service CRM Commercial v7.8.1 Standalone Fix

Date: 2026-08-02

## Trigger

Physical iPhone verification showed Commercial v7.8 remaining on the intermediate “Открываем AION Commercial v7.8…” screen. The interface itself was not reached.

## Root cause boundary

The failure was in the publication/loading method, not in the approved visual canon and not proven to be an iPhone hardware issue. The v7.8 entry depended on runtime `fetch()`, HTML parsing and document replacement before the interface could render.

## Implemented

- replaced `app-v7-8-1.html` with a complete standalone HTML document;
- removed runtime page fetch, DOMParser, document.write and loading-state dependency;
- the browser now receives the full interface in the initial HTML response;
- retained the v7.6 clean interaction foundation;
- retained the v7.7 owner-approved canon restoration styles;
- retained the v7.8 Safari interaction fixes;
- retained `app-v7-8.js` direct interaction logic;
- updated the root entry cache key to `app-v7-8-1.html?v=20260802-2`;
- previous versions remain available for rollback.

## Source validation

- standalone file begins with the full AION application document;
- no runtime `fetch()` loader is present in `app-v7-8-1.html`;
- no DOMParser or document replacement boundary is required;
- CSS and JavaScript are loaded through normal static resource links;
- no CRM API, database, real supplier connection, authentication, QR decoding or model recognition was added.

## Maturity

- visual canon: owner-approved and frozen;
- standalone demo source: implemented;
- repository publication: completed;
- physical iPhone opening of the corrected standalone file: not yet confirmed;
- production readiness and commercial outcome: not proven.

## Mandatory next check

Open the cache-busted v7.8.1 link on the owner’s iPhone and verify that the Home interface appears immediately without the intermediate loading screen. Then verify Search → 12543, Repair, QR and the persistent Dock.
