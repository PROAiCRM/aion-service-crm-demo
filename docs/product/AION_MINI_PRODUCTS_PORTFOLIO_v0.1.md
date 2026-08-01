# AION Mini Products Portfolio v0.1

**Status:** PRODUCT HYPOTHESES — NOT IMPLEMENTED  
**Date:** 2026-08-01  
**Product line:** AION Service Business OS  
**Source of truth:** GitHub

## 1. Purpose

Define a controlled portfolio of small products that solve specific, measurable pains of smartphone service centers. No item in this document is considered implemented, tested, or commercially proven until supported by code, tests, pilot evidence, and commercial results.

## 2. Portfolio principles

- One mini-product solves one dominant customer pain.
- Modular Monolith First: no premature microservices.
- One Core — Multi Platform: shared business logic, role-specific interfaces.
- Security and Privacy by Design.
- Cost First Strategy.
- Evidence Before Scaling.
- AI must explain recommendations and must not silently make irreversible decisions.

## 3. Prioritized portfolio

### MP-001 — Smart QR Status

**Customer pain:** clients repeatedly call the service center to ask about repair status; employees lose time answering routine questions.

**Proposed outcome:** a client opens a QR/link and sees the current repair status, expected next step, and service contact details.

**MVP boundary:**
- unique public status link with access code;
- safe status text without internal notes;
- repair stage and last update time;
- contact button;
- printable QR on receipt.

**Not in MVP:** chat, online payment, detailed technician notes, automatic repair forecasts.

**Success metrics:**
- reduction in status calls;
- share of clients opening the link;
- employee time saved;
- absence of unauthorized data disclosure.

**Stop criteria:** low client usage, no measurable reduction in calls, security risks not economically removable.

**Current maturity:** Product hypothesis.

---

### MP-002 — Mobile Express Intake

**Customer pain:** short repairs are not registered because formal intake is too slow.

**Proposed outcome:** an employee creates a complete repair order from a smartphone in under two minutes.

**MVP boundary:**
- minimal client and device data;
- camera-assisted local model search without saving the photo;
- problem selection;
- preliminary price and deadline;
- electronic consent/signature;
- QR order receipt sent to the client.

**Not in MVP:** autonomous diagnosis, facial recognition, permanent storage of camera images.

**Success metrics:**
- median intake time;
- share of express repairs registered;
- reduction in missing orders;
- employee completion rate.

**Stop criteria:** intake remains slower than the existing process or employees bypass it.

**Current maturity:** Designed concept based on approved mobile flow; implementation requires repository evidence.

---

### MP-003 — Owner Pulse

**Customer pain:** the owner cannot understand the state of the business quickly from a phone.

**Proposed outcome:** one mobile screen answers: what happened, where money is at risk, and what requires attention now.

**MVP boundary:**
- revenue received today;
- unpaid balance;
- overdue orders;
- orders waiting for approval;
- one explainable priority action.

**Not in MVP:** employee scoring, predictive analytics, automatic management decisions.

**Success metrics:**
- daily owner usage;
- time to identify the main issue;
- number of overdue or unpaid orders resolved;
- trust in displayed numbers.

**Stop criteria:** owners continue using spreadsheets/messages because data is late, unclear, or untrusted.

**Current maturity:** Product hypothesis.

---

### MP-004 — Cash Leakage Guard

**Customer pain:** repairs may be performed outside the system; suspicious discounts, cancellations, debt releases, and stock movements are difficult to control.

**Proposed outcome:** the owner receives explainable alerts about abnormal operations, with evidence and no automatic accusation of an employee.

**MVP boundary:**
- issue with unpaid balance;
- manual discount above threshold;
- repeated cancellation after work started;
- stock write-off without linked order;
- protected audit receipt: who, what, when, reason.

**Not in MVP:** surveillance, employee guilt scoring, automatic sanctions, opaque AI risk scores.

**Success metrics:**
- amount of prevented or recovered leakage;
- false-positive rate;
- share of alerts reviewed;
- completeness of audit evidence.

**Stop criteria:** excessive false alerts, employee harm, unreliable source data, or privacy risk.

**Current maturity:** Product hypothesis; individual control rules may already exist elsewhere but require code and test verification.

---

### MP-005 — AION Pain Scanner

**Customer pain:** CRM systems show many numbers but do not explain the single biggest obstacle to earning more today.

**Proposed outcome:** the system identifies one highest-impact operational pain, explains the evidence, estimates the potential financial effect as a range, and proposes a reversible next action.

**MVP boundary:**
- deterministic rules before machine learning;
- maximum one primary pain per day;
- evidence links to orders, payments, deadlines, or stock facts;
- confidence and data-quality warning;
- recommended action requiring human confirmation.

**Initial pain patterns:**
- delayed customer approvals;
- overdue repairs;
- unpaid completed orders;
- shortage of frequently used parts;
- unregistered express repairs.

**Not in MVP:** autonomous business management, exact profit-loss claims without evidence, cross-client data learning, opaque predictions.

**Success metrics:**
- percentage of recommendations acted on;
- measurable recovered revenue or time;
- recommendation accuracy confirmed by owner;
- low rate of misleading conclusions.

**Stop criteria:** recommendations are not trusted, effects cannot be measured, or required data quality is unavailable.

**Current maturity:** Product hypothesis and candidate signature capability of AION.

## 4. Recommended delivery order

1. MP-001 Smart QR Status — visible client value and low architectural risk.
2. MP-002 Mobile Express Intake — closes the main operational data gap.
3. MP-003 Owner Pulse — creates daily owner value.
4. MP-004 Cash Leakage Guard — protects revenue after reliable data capture exists.
5. MP-005 AION Pain Scanner — intelligence layer built only on proven data and rules.

## 5. Dependencies

- authenticated employee and owner sessions;
- tenant isolation and PostgreSQL RLS;
- reliable service order state machine;
- audit log and action receipts;
- role and permission model;
- data classification and public-link boundary;
- measurable event collection.

## 6. Main risks

- building AI before reliable operational data exists;
- exposing client or internal repair data through public links;
- duplicate functionality across CRM screens;
- employee resistance to a slow intake flow;
- false accusations from leakage detection;
- estimating financial losses with unjustified precision;
- expanding five mini-products simultaneously.

## 7. Mandatory next step

Prepare **MP-001 Smart QR Status — Outcome Contract and MVP Specification v0.1**, then verify which parts already exist in the actual CRM code before any implementation claim or architectural expansion.

## 8. Decision record

The owner approved moving from ideation to controlled product design on 2026-08-01. This approval does not authorize irreversible production changes, access changes, client-data processing, or claims of implementation/commercial proof.
