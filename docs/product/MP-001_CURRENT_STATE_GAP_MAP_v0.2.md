# MP-001 Smart QR Status — Current-State Gap Map v0.2

**Date:** 2026-08-01  
**Public status:** AUDIT UPDATED — NOT DEPLOYED / NOT PILOT-PROVEN  
**Private source reviewed:** `PROAiCRM/AION-Service-CRM`  
**Primary existing source package:** Draft PR `#78`, head `9a7f43e6af066b024c7b9ebc6cc7cbf839b1625a`

## 1. Executive finding

MP-001 does not start from zero. A substantial public-status and QR source package already exists in the private repository. It includes a public route, customer-safe projection, token-hash boundary, QR URL hydration, RLS-oriented database design, environment continuity rules, static tests and documentation.

This is **source implemented in an isolated Draft branch**, not a deployed or tested pilot module.

The package is blocked by a canonical source-lineage break: Draft PR #78 registers migrations only through `0040_public_status_token_hash_boundary.sql`, while the confirmed V10.2 last-known-good runtime expects migration `0044_device_identity_assist_phase1.sql`. The missing V10.2 source and migrations `0041–0044` must be recovered before the public-status work can be replayed onto the canonical line.

## 2. Evidence boundary

### Confirmed

- Draft PR #78 is open and remains Draft.
- Exact reviewed head: `9a7f43e6af066b024c7b9ebc6cc7cbf839b1625a`.
- Static local gate was reported PASS at that head for server typecheck, targeted public-status tests, web checks/build, migration lint and source-safety checks.
- PR #78 changes 36 files covering migrations, schema, commands, public routes, page rendering, security, URL resolution, print payload hydration, tests, environment generation and documentation.
- Separate hardening packages are referenced for revoked/expired/stale printed QR and safe public origin.

### Not confirmed

- canonical continuation of the real-pilot V10.2 source;
- migrations `0041–0044` in GitHub;
- disposable PostgreSQL application of the reconciled lineage;
- executable RLS and cross-tenant denial Evidence;
- actual Windows renderer consumption of the QR payload;
- printed QR scan from iPhone;
- A4 and XP-58 physical regression;
- deployment to the real pilot;
- commercial outcome.

## 3. Capability map

| Required capability | Existing evidence | Gap / risk | Smallest reversible next change |
|---|---|---|---|
| Public customer route | `src/http/routes/public-status.ts`, `src/http/public-status-page.ts`, `src/http/app.ts` in PR #78 | Not runtime-tested on reconciled source | Replay unchanged behavior onto recovered canonical line, then run synthetic HTTP tests |
| Customer-safe projection | `src/application/queries/get-public-service-order-status.ts`, `src/public-status/payload.ts` | Exact exposed fields require final policy review; current design includes price/payment/ETA/history | Compare against MP-001 approved public field allowlist and remove any unnecessary field before pilot |
| Token secrecy | `src/public-status/security.ts`, migration `0040_public_status_token_hash_boundary.sql` | Database and logs not executable-tested; HMAC key backup/restore not proven | Run disposable DB and secret-redaction gates after source recovery |
| QR URL generation | `src/public-status/url.ts`, `src/application/commands/print-agent.ts` | Physical renderer and real QR not proven | Validate hydrated `payload.publicStatus.qrValue` using synthetic print artifact |
| Public origin safety | `PUBLIC_APP_BASE_URL`, guarded LAN discovery in PR #78; hardening PRs #85/#86 referenced | Wrong origin or localhost could create unusable QR | Integrate exact reviewed origin guards and test LAN/non-LAN cases |
| Revocation/rotation | token versioning in PR #78; hardening PRs #84/#87 referenced | Owner-facing revoke/reissue UI unfinished; queued print races need proof | First prove server-side revoke/version behavior with synthetic tokens; UI later |
| Tenant isolation | `service_order_public_links`, RLS policy and organization/order integrity in migrations 0039/0040 | Main branch/canonical DB lineage missing; FORCE RLS and grants need executable proof | Apply on disposable PostgreSQL based on recovered canonical migrations |
| Public route privacy | route before ordinary access logging; no-cache/no-index; HTML escaping reported | Ordinary logs, errors, caches and page source need runtime inspection | Run synthetic token log/cache/source scan |
| PWA cache boundary | Draft PR #147 prevents query/token URL caching | PR #147 is isolated and unexecuted; integration ordering required | Keep public status network-only and include it in Q5 browser/cache gate |
| Printed receipt integration | print claim hydrates public status path/url/qrValue | Renderer, media profile and physical scan not proven | Create one synthetic document snapshot and print artifact gate after Q7 |
| Public status vocabulary | Current query appears to expose internal status code and catalog label | Client-safe mapping may still leak internal vocabulary or too much history | Add a dedicated internal-to-public status mapping contract before pilot |
| Access code | MP-001 v0.1 proposed token plus separate short code | Existing PR #78 appears to use a bearer token only | Security/product decision required: retain high-entropy bearer-only link or add a second factor; do not add complexity without threat/pilot evidence |
| Audit events | last access timestamp and delivery-time hydration appear in design | Complete create/view/revoke/regenerate audit trail not confirmed | Map current events and add only missing security-relevant receipts |
| Client usage metrics | Not found as proven implementation | Cannot measure call reduction or open rate yet | Define privacy-minimal events after functional/security gate, before pilot |

## 4. Important product discrepancy

The approved MP-001 specification proposed a random public token plus a separate short access code. The existing source package is designed around a high-entropy bearer URL with a hash-only/HMAC boundary.

This is not automatically a defect. A second code may improve protection when printed documents are exposed, but it also adds client friction, support calls and brute-force handling complexity.

**Decision status:** unresolved product/security choice. Do not add a short code until a focused threat review compares:

1. high-entropy revocable bearer link;
2. bearer link plus short code;
3. time-limited or pickup-only policies.

## 5. Recommended delivery path

1. Recover canonical V10.2 source and migrations through `0044` under private Issue #83.
2. Replay PR #78 public-status changes onto that canonical line using forward-only migration IDs after the confirmed maximum.
3. Integrate origin and stale/revoked print protections from PRs #84–#87.
4. Run source/unit/static gates.
5. Run disposable PostgreSQL RLS/grant/token tests with synthetic tenants.
6. Run HTTP/privacy/cache tests.
7. Run synthetic print artifact and QR payload test.
8. Run physical A4/XP-58/iPhone scan Evidence.
9. Pilot with baseline and metrics.

## 6. Stop criteria

Stop immediately if:

- canonical migrations `0041–0044` cannot be recovered;
- replay requires editing already-applied migrations;
- raw bearer tokens appear in DB tables, immutable snapshots, logs or Evidence;
- a revoked/expired/old-version token remains usable or printable;
- cross-tenant access succeeds;
- a QR resolves to localhost, loopback or an unauthorized origin;
- public responses expose customer identity, complaint, internal notes, status reasons, credentials or device secrets;
- browser/PWA cache stores token-bearing URLs;
- physical QR cannot be scanned reliably;
- any Draft source is described as deployed or pilot-proven without Evidence.

## 7. Maturity

- product concept: **approved**;
- MVP specification: **designed**;
- private source package: **source implemented in Draft PR #78**;
- static source gate: **reported passed at exact Draft head**;
- canonical integration: **blocked**;
- disposable DB/browser/physical tests: **pending**;
- real-pilot deployment: **not authorized**;
- commercial result: **not proven**.

## 8. Next mandatory step

Do not create a new MP-001 implementation branch. First recover the canonical V10.2 source lineage through migration `0044`, then replay and harden the existing PR #78 package instead of duplicating it.
