# MP-009 AI Master — AI Provider, Privacy & Prompt-Injection Boundary v0.1

**Status:** DESIGNED — EXTERNAL AI NOT AUTHORIZED  
**Date:** 2026-08-01

## 1. Purpose

Keep AI optional, privacy-minimized, provider-independent and unable to convert untrusted content into authority or action.

## 2. Default architecture

The MVP must work in deterministic/manual mode without external AI.

```text
canonical facts
→ deterministic eligibility/hazard gate
→ safe claim projection
→ optional AI summary/candidate ranking
→ strict schema validation
→ technician review
```

External AI never receives command authority.

## 3. Data minimization

A provider request may contain only approved fields such as:

- case family code;
- bounded device family/variant when necessary;
- structured symptom/fact codes;
- safe test-result codes;
- approved hypothesis catalogue summaries;
- contradictions/missing-fact codes;
- non-identifying locale/context.

Excluded by default:

- customer name, phone, email, address;
- IMEI, serial number and account IDs;
- passwords, passcodes, recovery keys;
- photos/files/messages from the customer device;
- signature data;
- internal free-text notes;
- employee private data;
- raw tokens/cookies/headers;
- payment details;
- unrestricted order history.

## 4. Provider gate

Before any real provider connection:

- provider and model approved;
- data-processing terms reviewed;
- retention/training policy verified;
- region and subprocessors reviewed;
- field allowlist implemented;
- redaction tests pass;
- cost/rate limits set;
- timeout/fallback defined;
- provider failure does not block manual work;
- Owner Gate recorded;
- jurisdiction-specific privacy/legal review completed.

## 5. Prompt-injection threat model

Untrusted instructions may appear in:

- customer complaint/free text;
- device screen text;
- QR/barcode content;
- uploaded manual;
- website or retrieved document;
- technician note;
- model response;
- malicious catalogue entry.

All such content is data, not instruction.

## 6. Prompt construction

The system prompt and policy are server-owned and versioned.

Provider input uses:

- structured schema;
- explicit allowed task;
- exact catalogue codes;
- statement that untrusted content cannot change policy;
- no secrets or hidden authority;
- maximum output bounds;
- required source references;
- required uncertainty and contradiction fields.

## 7. Output validation

Model output is rejected when it:

- violates schema;
- references unknown codes;
- proposes an unapproved step;
- changes hazard class;
- claims observed diagnosis;
- omits required contradiction;
- contains customer-facing price/time promise;
- requests secrets or additional private data;
- includes execution commands;
- cannot cite allowed input claims.

Rejected output produces no diagnostic state change.

## 8. Tool boundary

The model has no direct tools for:

- service-order mutation;
- inventory mutation;
- customer contact;
- payment;
- device control;
- shell/code execution;
- web browsing in live case context;
- file upload/download;
- QC result;
- employee evaluation.

Any future tool requires a separate Agent Guardian capability grant and Owner Gate.

## 9. Provider independence

Use a provider adapter with:

- stable internal request/response contract;
- no provider-specific truth semantics;
- feature flag per organization/workspace;
- deterministic fallback;
- cost telemetry without content logging;
- provider switch/disable path;
- no fine-tuned proprietary lock-in as a first requirement.

## 10. Logging and Evidence

Logs may include:

- provider/model ID;
- request schema/version;
- safe claim digest;
- latency/token/cost counters;
- validation PASS/FAIL code;
- timeout/fallback;
- external AI used boolean.

Logs must not include raw prompts/responses containing real sensitive data unless a separately approved protected Evidence mechanism exists.

## 11. Retention

Provider request/response retention defaults to minimum necessary or none.

A future protected record may retain:

- canonical safe request digest;
- validated structured output;
- policy/model/version;
- technician decision relation;
- timestamps.

Raw sensitive content duplication is prohibited.

## 12. Model updates and drift

A provider/model version change requires:

- synthetic regression matrix;
- unsafe/misleading suggestion comparison;
- cost/latency check;
- schema compatibility;
- rollback;
- no silent production switch;
- updated Evidence.

## 13. Availability and cost

When provider is unavailable, slow or over budget:

- manual/deterministic mode remains available;
- no unsafe cached answer is shown as current;
- pending model request does not block service order;
- user sees honest status;
- automatic repeated provider calls are bounded.

## 14. External retrieval

Live unrestricted web search is excluded from v0.1.

Future retrieval uses approved source registry and content sanitization. Retrieved documents cannot override policy or create authority.

## 15. AI feedback boundary

Technician accept/reject signals may improve evaluation only after review. They are not automatically sent to providers for training and not treated as ground truth by themselves.

## 16. Incident response

Immediate STOP for:

- prohibited data sent externally;
- provider retention/training mismatch;
- prompt injection bypass;
- model output enabling action;
- cross-tenant leakage;
- hidden provider change;
- unsafe instruction shown as approved;
- raw secrets in logs/Evidence.

## 17. Honest maturity

- boundary: designed;
- provider selected: no;
- DPIA/legal review: no;
- adapter: not implemented;
- redaction/schema validation: not implemented;
- prompt-injection tests: none;
- real-data authorization: none.