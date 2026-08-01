# AION Service CRM — Public Demo Overview

## Purpose

This document explains what a reviewer can safely evaluate in the public AION Service CRM demo and what remains outside its evidence boundary.

## Open the browser demo

Public demo URL:

https://proaicrm.github.io/aion-service-crm-demo/

The URL is intended for visual and interaction review only. Availability of the page does not prove production readiness.

## What to review

A reviewer can assess:

1. the mobile-first visual direction;
2. the clarity of repair-order states;
3. the navigation model;
4. the density and hierarchy of information;
5. the suitability of the interface for fast service-center work;
6. the overall AION design direction.

## What must not be inferred

The public demo is not evidence of:

- a production CRM backend;
- database persistence;
- tenant isolation;
- real authentication or sessions;
- legally valid electronic consent or signature;
- production QR access control;
- real customer notifications;
- verified inventory or accounting logic;
- external AI integration;
- production security testing;
- pilot readiness;
- commercial effectiveness.

## Demonstrated user journey

```text
Open demo
   ↓
Understand current service state
   ↓
Review repair-order presentation
   ↓
Explore demonstration navigation
   ↓
Evaluate the visual and interaction direction
```

This is a presentation flow, not a verified operational workflow.

## Maturity vocabulary

| Term | Meaning in this repository |
|---|---|
| Concept | An idea or intended product direction |
| Designed direction | A described or visually specified solution |
| Demonstrated prototype | A browser-visible interaction using demonstration data |
| Implemented module | Not established by this public repository alone |
| Tested module | Requires explicit test evidence from the technical source of truth |
| Proven commercial result | Requires real pilot and business evidence |

## Source-of-truth boundary

This public repository is the source of truth only for the public demonstration files it contains.

The private `PROAiCRM/AION-Service-CRM` repository remains the technical source of truth for product implementation, tests and production evidence.

## Public review checklist

- [ ] Demo opens on a smartphone browser
- [ ] No real customer or employee information is visible
- [ ] No credentials or private endpoints are exposed
- [ ] Interface remains readable on a narrow screen
- [ ] Navigation does not lead to misleading production claims
- [ ] README and demo describe the same maturity level
- [ ] Screenshots are added only after visual verification

## Current status

**Document status:** designed and committed for review  
**Demo maturity:** demonstrated prototype  
**Production readiness:** not established  
**Commercial validation:** not established
