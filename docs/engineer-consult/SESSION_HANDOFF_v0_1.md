# AION Session Handoff — EVE Техконсультант v0.1

## Completed

- approved product direction translated into a hidden contextual CRM capability;
- interactive public prototype created;
- product specification, pilot guide, evidence report and risk register published;
- production contract created in private source of truth;
- draft PR `PROAiCRM/AION-Service-CRM#200` opened;
- no canonical CRM screen, production runtime, database or real data changed.

## Product decision

EVE Engineer Consult is not a standalone chatbot and not a permanent top-level CRM module. It appears inside the repair workflow when an engineer needs technical help.

The answer must provide evidence-backed diagnostic structure, uncertainty, risks, missing information and escalation. It must not present an unsupported confident diagnosis.

## Current maturity

- idea: owner-approved direction;
- product design: completed v0.1;
- interactive demo: implemented;
- safety and production architecture: proposed RFC;
- real AI retrieval: not implemented;
- production module: not implemented;
- real technical accuracy and commercial value: not proven.

## Next safe slice

1. owner mobile acceptance of the interaction model;
2. select three narrow, low-hazard consultation scenarios;
3. build deterministic structured-answer contracts and tests in the private repo;
4. connect only curated synthetic knowledge;
5. validate with an experienced service engineer;
6. review security, provider and cost gates before any external AI connection.

## Owner gates

Required before external AI, internet retrieval, real order context, manuals ingestion, production migrations or real staff pilot.
