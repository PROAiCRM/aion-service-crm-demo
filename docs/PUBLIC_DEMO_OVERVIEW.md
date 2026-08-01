# AION Service CRM — Public Demo Overview

## Purpose

This document explains what a reviewer can safely evaluate in the public AION Service CRM demos and what remains outside their evidence boundary.

## Open the browser demos

- Current public demo: https://proaicrm.github.io/aion-service-crm-demo/
- Employee-first concept: https://proaicrm.github.io/aion-service-crm-demo/app-employee-concept.html

The URLs are intended for visual and interaction review only. Availability of a page does not prove production readiness.

## Employee-first concept

This separate experimental workspace is designed from the daily perspective of a service employee. It is organised around three practical questions:

1. What should I do next?
2. Which customer promise is at risk?
3. What can I complete quickly without searching through the whole CRM?

The concept includes one primary next action, express intake, a personal work queue, deadline-risk signals, supplier-parts search direction, daily operational totals and an explainable EVE recommendation.

## What to review

A reviewer can assess:

1. the mobile-first visual direction;
2. the clarity of the next action;
3. the speed of understanding the personal work queue;
4. the usefulness of deadline-risk warnings;
5. one-handed mobile use;
6. whether express intake and spare-parts search belong on the first screen;
7. whether EVE guidance is understandable and non-intrusive;
8. the overall AION design direction.

## What must not be inferred

The public demos are not evidence of:

- a production CRM backend;
- database persistence;
- tenant isolation;
- real authentication or sessions;
- legally valid electronic consent or signature;
- production QR access control;
- camera-based device recognition;
- live supplier integrations;
- real customer notifications;
- verified inventory or accounting logic;
- payment processing;
- real analytics;
- autonomous EVE decision-making;
- production security testing;
- pilot readiness;
- commercial effectiveness.

## Maturity vocabulary

| Term | Meaning in this repository |
|---|---|
| Concept | An idea or intended product direction |
| Designed direction | A described or visually specified solution |
| Concept prototype | An experimental browser-visible interface used for learning |
| Demonstrated prototype | A browser-visible interaction using demonstration data |
| Implemented module | Not established by this public repository alone |
| Tested module | Requires explicit test evidence from the technical source of truth |
| Proven commercial result | Requires real pilot and business evidence |

The employee-first workspace is currently a **concept prototype**.

## Source-of-truth boundary

This public repository is the source of truth only for the public demonstration files it contains.

The private `PROAiCRM/AION-Service-CRM` repository remains the technical source of truth for product implementation, tests and production evidence.

## Public review checklist

- [ ] Both demos open on a smartphone browser
- [ ] No real customer or employee information is visible
- [ ] No credentials or private endpoints are exposed
- [ ] Interface remains readable on a narrow screen
- [ ] Primary actions are reachable with one hand
- [ ] Navigation does not lead to misleading production claims
- [ ] README and demos describe the same maturity level
- [ ] Screenshots are added only after visual verification
- [ ] Useful ideas are evaluated before being added to the product architecture

## Current status

**Document status:** designed and committed for review  
**Current demo maturity:** demonstrated prototype  
**Employee workspace maturity:** concept prototype  
**Production readiness:** not established  
**Commercial validation:** not established
