# MP-001 Smart QR Status — Outcome Contract & MVP Specification v0.1

**Status:** DESIGNED — NOT IMPLEMENTED  
**Date:** 2026-08-01  
**Parent portfolio:** AION Mini Products Portfolio v0.1

## 1. Customer problem

Clients repeatedly contact the service center to ask whether a device is ready. Employees spend time answering routine questions, while clients receive inconsistent information.

## 2. Outcome Contract

### Intended user outcome

A client can check the current repair status from a phone in under 15 seconds without installing an application or contacting an employee.

### Intended business outcome

Reduce routine status inquiries while improving client transparency without exposing internal or personal data.

### Non-goals

- replace direct communication for complex cases;
- expose technician notes, margins, part suppliers, internal risks, or employee identities;
- promise an exact completion date unless confirmed by an authorized employee;
- support payment, chat, or account registration in the first release.

## 3. Primary flow

1. Employee creates or updates a repair order.
2. System generates a random public status token and a separate short access code.
3. Receipt contains QR and human-readable fallback URL/code.
4. Client opens the link.
5. Client enters the access code when required by policy.
6. System displays only the approved public projection of the order.
7. Every public view is logged without storing unnecessary device/browser fingerprints.

## 4. Public information boundary

### Allowed in MVP

- service center public name and contacts;
- public order number;
- generic device label, for example “iPhone 13”, if approved by policy;
- current public status;
- last update date and time;
- next expected action;
- confirmed ready-for-pickup indicator;
- confirmed amount due, only if explicitly approved for public display.

### Forbidden in MVP

- client full name, phone, email, address;
- IMEI, serial number, passwords, passcodes;
- internal comments and diagnostic notes;
- part cost, supplier, margin;
- employee identity or performance data;
- uploaded photos by default;
- audit events and security information.

## 5. Public status model

Internal states must be mapped to a small client-safe vocabulary:

- `received` — Device received
- `diagnosing` — Diagnosis in progress
- `awaiting_client` — Waiting for your confirmation
- `repairing` — Repair in progress
- `quality_check` — Quality check
- `ready` — Ready for pickup
- `issued` — Issued to client
- `cancelled` — Order closed without repair

Internal technical states may be more detailed, but they must never be exposed directly.

## 6. Security requirements

- token generated from cryptographically secure randomness;
- token stored hashed where practical;
- token must not contain order ID, phone number, or sequential identifiers;
- rate limiting for token/code attempts;
- no indexing by search engines;
- no sensitive data in URL query parameters;
- revocation and regeneration by authorized staff;
- tenant isolation enforced server-side;
- public endpoint uses a dedicated least-privilege data projection;
- access events written to the audit log;
- expired/closed links follow a documented retention policy.

## 7. Functional MVP requirements

### Employee side

- generate QR/status access;
- print QR on receipt;
- copy or send client-safe link;
- update public status through the normal order workflow;
- revoke and regenerate access;
- preview exactly what the client will see.

### Client side

- mobile-first page;
- no installation and no account registration;
- open QR/link;
- enter access code when requested;
- see current status and last update;
- tap to call or message the service center;
- clear fallback when link is invalid, revoked, or expired.

## 8. Acceptance criteria

- client page loads on a common smartphone browser;
- status can be checked in no more than three user actions after opening the link;
- no forbidden field appears in API response, HTML, logs, analytics, or page source;
- status reflects the latest committed order state;
- QR remains readable on the approved receipt printer and A4 print profile;
- revoked access stops working immediately;
- cross-tenant token access is denied;
- rate limit and invalid-code behavior are tested;
- employee preview matches the public page.

## 9. Test matrix

### Functional

- valid token and code;
- invalid token;
- invalid code;
- revoked token;
- expired token;
- each public status;
- order status changed while page is open;
- print and scan QR from receipt.

### Security

- sequential token guessing;
- brute-force code attempts;
- cross-tenant access;
- direct internal order ID access;
- forbidden fields in response payload;
- cache leakage on shared devices;
- search-engine indexing headers;
- token exposure in logs and error messages.

### Usability

- iPhone Safari;
- Android Chrome;
- weak mobile connection;
- large text/accessibility mode;
- client unfamiliar with QR codes.

## 10. Evidence required before maturity changes

### To mark “implemented”

- code paths identified in repository;
- database migration and rollback;
- public API projection;
- employee preview and client page;
- QR generation and receipt integration.

### To mark “tested”

- automated tests pass;
- manual mobile-browser test evidence;
- printed QR scan evidence;
- security boundary review;
- tenant-isolation test.

### To mark “commercially proven”

- pilot baseline for status inquiries;
- at least one defined pilot period;
- measured client usage;
- measured reduction in routine calls/messages;
- no material privacy incident;
- owner confirms operational value.

## 11. Metrics

- status inquiries per 100 active orders before/after;
- QR page open rate;
- median time from open to status view;
- percentage of invalid/failed access attempts;
- employee time saved;
- number of privacy/security incidents;
- client satisfaction after pickup, when measurable without dark patterns.

## 12. Key risks and controls

- **Data leak:** dedicated public projection and forbidden-field tests.
- **Guessable access:** random token, access code, rate limiting.
- **Wrong status:** state mapping and transactional updates.
- **Employee bypass:** QR created automatically during intake/printing.
- **Client confusion:** small status vocabulary and explicit next action.
- **Scope expansion:** payment, chat, photos, and forecasts remain out of MVP.

## 13. Dependencies

- ADR-001 Tenant Isolation and PostgreSQL RLS;
- ADR-002 Authentication, Sessions and Identity Model for employee actions;
- service order state machine;
- audit/action receipt mechanism;
- print profile and QR library decision;
- notification/send boundary, if link sending is included later.

## 14. Mandatory next engineering step

Inspect the actual CRM source and create a **Current-State Gap Map** covering:

- existing order statuses;
- existing QR/status page behavior;
- receipt printing;
- tenant boundary;
- authentication and permissions;
- audit logging;
- database schema.

No implementation estimate should be accepted before this inspection.
