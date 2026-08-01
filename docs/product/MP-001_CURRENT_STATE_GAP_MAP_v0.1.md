# MP-001 Smart QR Status — Current-State Gap Map v0.1

**Status:** INITIAL EVIDENCE MAP — SOURCE IDENTIFIED, IMPLEMENTATION NOT YET VERIFIED  
**Date:** 2026-08-01  
**Public documentation repository:** `PROAiCRM/aion-service-crm-demo`  
**Private canonical source candidate:** `PROAiCRM/AION-Service-CRM`  
**Canonical branch inspected:** `main`  
**Latest observed commit:** `3449f817dc3a8dd9622ee20110863f47f29f2181`

## 1. Source-of-truth decision

The private repository `PROAiCRM/AION-Service-CRM` is the current technical source candidate for MP-001 inspection because it contains the actual Service CRM application, build scripts, tests, pilot gates and Windows pilot tooling.

The public repository `PROAiCRM/aion-service-crm-demo` remains a public-safe product documentation and demo boundary. Private source, production configuration, credentials and client data must not be copied into it.

This decision identifies the inspection source only. It does not prove that MP-001 is implemented.

## 2. Verified repository evidence

- package name: `@aion/service-crm-five-point-pilot-test-hotfix`;
- package version: `0.39.4`;
- Node.js requirement: `>=22`;
- backend runtime: Express 5, TypeScript, PostgreSQL, Drizzle ORM, Zod, Pino;
- frontend runtime: React 19 and Vite;
- authentication-related tests and owner bootstrap scripts exist;
- workflow, express intake, inventory, money control and close-loop test groups exist;
- database provision, migration, grants, seed, DB and HTTP gates exist;
- print spool, document readiness, backup/restore and runtime bootstrap gates exist;
- Windows five-point pilot tooling exists;
- README identifies the line as AION Service CRM Five-Point Pilot Test and includes printer-queue evidence for receipt, label and A4 profiles.

These facts prove that a substantial pilot codebase exists. They do not by themselves prove that each capability is correct, deployed or commercially validated.

## 3. Gap map

| Required capability | Existing evidence and repository path | Gap / risk | Smallest reversible next change |
|---|---|---|---|
| Canonical CRM source | Private repo `PROAiCRM/AION-Service-CRM`, branch `main`; package version `0.39.4`; recent commit history through 2026-07-31 | Need owner-level confirmation that this branch is the intended continuation line, not only a pilot/hotfix snapshot | Record repository, branch and accepted baseline SHA in the project Current State and Session Handoff |
| Service-order state machine | Workflow and close-loop test scripts are declared in `package.json` | Exact internal states, transition rules and client-safe mappings are not yet inspected | Locate state definitions and produce an internal-to-public status mapping without changing runtime behavior |
| Existing QR/status capability | No direct evidence yet from inspected files | Risk of duplicating an existing implementation or assuming a demo QR is production-safe | Locate QR generation, public status routes/pages and tests; mark absent only after source inspection |
| Receipt QR integration | Print spool/document readiness/five-point pilot gates and receipt printer queue evidence exist | QR content, print size, scan reliability and public-data boundary are unknown | Inspect receipt template and print profile; add a non-production QR scan test fixture if absent |
| Public client page | React/Vite web application exists | No verified public least-privilege projection or mobile status page | Locate current client status UI/API; otherwise design one dedicated read-only projection behind a feature flag |
| Authentication and permissions | Auth tests, password/recovery tests and owner bootstrap scripts exist | Public-link boundary and employee permission to generate/revoke links remain unverified | Map actor permissions and keep public access separate from authenticated employee sessions |
| Tenant isolation / PostgreSQL RLS | Database grants and DB gates exist; ADR-001 is accepted at project level | Actual RLS policies and cross-tenant tests for the current source are not yet cited | Locate migrations/policies and add an MP-001 cross-tenant test before implementation status can change |
| Audit logging | Pino/Pino HTTP and several gate/report mechanisms exist | Business audit/action receipt for QR generation, revocation and public access is not proven | Locate audit model; define minimum events without tokens, passcodes or personal data |
| Database schema and migrations | Drizzle ORM, Drizzle Kit, migration and provision gates exist | Exact service-order/public-token tables are unknown | Identify schema paths and migration history; propose additive, rollback-safe schema only if required |
| Security controls | Helmet, Zod, secret scanning gate and supply-chain gates exist | Token entropy, hashing, rate limiting, cache policy and log redaction for public QR are unverified | Create a security checklist and automated forbidden-field/token-leak tests before enabling the feature |
| Test and release commands | Unit/integration/web tests, build/typecheck and extensive gates are declared in `package.json` | Current pass/fail state has not been executed in this session | Run read-only baseline checks on a controlled checkout before changing code |
| Pilot measurement | Five-point pilot and Evidence-oriented tooling exist | Baseline for status calls and QR usage is not defined | Add pilot metrics only after the event model and privacy boundary are inspected |

## 4. Initial conclusion

The foundation is materially stronger than the public demo repository suggested. There is an actual private CRM codebase with testing, printing, database and pilot infrastructure.

However, MP-001 remains **designed, not verified as implemented**. The next work is source inspection, not greenfield coding.

## 5. Risk controls

- Do not copy private source into the public demo repository.
- Do not expose production configuration, secrets, database dumps or client data.
- Do not modify `main` or production runtime during inspection.
- Do not claim QR status, RLS or audit coverage until exact source paths and tests are cited.
- Prefer feature flags, additive migrations and rollback paths.

## 6. Next mandatory inspection slice

Locate and cite the exact private-source paths for:

1. service-order schema and state transitions;
2. receipt and label templates;
3. QR generation or QR dependencies;
4. public/client routes and web pages;
5. authentication/authorization middleware;
6. tenant/RLS migrations and tests;
7. audit events and redaction rules.

After this slice, update this file to v0.2 with evidence paths and a bounded implementation plan.
