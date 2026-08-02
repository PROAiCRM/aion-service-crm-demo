# AION Repair Offer — Product Spec v0.2

**Status:** implemented pilot candidate  
**Date:** 2026-08-02  
**Owner:** AION  
**Product family:** AION Service Business OS

## 1. Problem

Service employees often answer “How much will the repair cost?” with one number in a messenger. The customer cannot compare quality, time, warranty, or scope. Different employees may quote different conditions, and the owner cannot measure how many quotes became repairs.

## 2. Outcome contract

A service employee can create a clear repair proposal in under three minutes. A customer can understand the available options and return an explicit decision from a phone without registration.

## 3. Primary users

- smartphone service-center employee;
- service owner or manager;
- customer deciding whether to approve a repair.

## 4. Implemented pilot capabilities

- service profile and default terms;
- guided three-step proposal creation;
- one to five repair options;
- one recommended option;
- reusable repair templates;
- customer-facing mobile page;
- approve, question, and decline decisions;
- Action Receipt identifiers;
- cross-device response via a return link;
- local offer list, status history, search, and metrics;
- local conversion to a repair-order draft;
- JSON backup and restore;
- print/PDF support;
- installable PWA shell and offline cache;
- payload integrity checksum.

## 5. Explicit non-capabilities

The pilot does not provide:

- automatic cross-device synchronization;
- production PostgreSQL persistence;
- tenant isolation or RLS enforcement;
- real employee authentication;
- legally qualified electronic signature;
- automated WhatsApp/SMS delivery;
- payment collection;
- production CRM order creation;
- encrypted public links.

## 6. State model

`draft → sent → viewed_local → approved | question | declined → converted`

A non-final offer can also become `expired`.

`viewed_local` is only evidence of opening on the same device. The pilot must not claim remote “viewed” tracking.

## 7. Pilot success metrics

Minimum evidence target over 20 genuine proposals:

- at least 70% of links successfully opened by customers;
- at least 40% of proposals receive a structured decision;
- median employee creation time below three minutes;
- no material price/condition dispute caused by the product;
- at least two employees can use the flow without developer help;
- the service owner confirms that follow-up visibility is useful.

These are pilot thresholds, not proven results.

## 8. Stop criteria

Stop or redesign the pilot when:

- employees continue sending plain-text prices instead of links;
- customers frequently fail to return the response link;
- the three-option structure confuses customers;
- staff enter personal or sensitive data despite warnings;
- proposal creation takes longer than the existing workflow;
- users interpret the pilot consent as a legal electronic signature.

## 9. Production admission gate

Production development starts only after pilot evidence supports the core behavior. The next architecture step is a private CRM module with PostgreSQL/RLS, expiring public tokens, immutable proposal versions, authenticated staff actions, rate limiting, audit events, and server-side Action Receipts.
