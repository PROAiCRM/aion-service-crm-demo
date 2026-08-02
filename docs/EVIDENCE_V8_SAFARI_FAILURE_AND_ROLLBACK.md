# Evidence — v8 Safari Rendering Failure and Rollback

Date: 2026-08-02

## Physical evidence

The owner opened `app-v8-canon.html` on a real iPhone. Safari displayed a large blurred blue placeholder instead of the AION Service CRM interface.

Result: **FAIL**.

## Proven failure boundary

The v8 page referenced SVG wrapper files. Each wrapper contained a WebP image as an embedded data URI. Source validation confirmed that the SVG and embedded payload existed, but this did not prove that iPhone Safari would render the nested image construction correctly.

The physical result proves that this publication method is incompatible with the tested iPhone/Safari path. The visual canon itself is not rejected; the delivery container failed.

## Immediate containment

- root `index.html` was rolled back to the previously opening `app-v7-8-1.html`;
- the failed v8 files remain only as evidence/history;
- v8 is no longer represented as physically verified;
- production or private CRM code was not changed.

## Corrective candidate

A separate `app-v8-safari-test.html` was added. It fetches each same-origin SVG as text, extracts the embedded `data:image/webp` value and assigns that WebP directly to the `<img>` element. Safari is no longer asked to render an SVG containing a nested raster image.

This is a **corrective test candidate**, not a passed release.

## Maturity correction

- visual canon: OWNER APPROVED / FROZEN;
- v8 SVG-backed implementation: IMPLEMENTED / PHYSICAL TEST FAILED;
- root rollback: IMPLEMENTED;
- Safari direct-WebP candidate: IMPLEMENTED / NOT YET PHYSICALLY VERIFIED;
- v8 release status: BLOCKED until physical iPhone PASS;
- production and commercial readiness: NOT PROVEN.

## Mandatory next gate

Open the cache-busted Safari test URL on the owner’s iPhone. Only after the Home screen and navigation are physically confirmed may the root link be moved from v7.8.1 to the corrected v8 candidate.
