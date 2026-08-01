# AION Product Catalog v0.1

**Status:** APPROVED CATALOG DESIGN — IMPLEMENTATION VARIES BY PRODUCT  
**Date:** 2026-08-01  
**Source of truth:** GitHub

## 1. Catalog rule

Product IDs are stable. Existing IDs must not be reassigned when the portfolio evolves.

The earlier public portfolio already assigned:

- MP-001 — Smart QR Status;
- MP-002 — Mobile Express Intake;
- MP-003 — Owner Pulse;
- MP-004 — Cash Leakage Guard;
- MP-005 — AION Pain Scanner.

Therefore new products continue from MP-006. This preserves decision history, issues, evidence and code traceability.

## 2. Experience entry layer

### MP-000 — AION Today

**Role:** unified owner-facing entry surface for the product ecosystem. It is an experience layer, not a duplicate domain module.

**Dominant pain:** the owner must search across many screens to understand what matters now.

**Victory:** the owner identifies the single next important action, the main risk and the main opportunity in under 30 seconds.

**Proof:** timed owner task, daily usage, action completion, trust rating and absence of contradictory numbers.

**Dependencies:** Owner Pulse, tasks/obligations, explainable recommendations, shared identity and permissions.

**Maturity:** approved product concept; prior experience prototypes exist, but implementation in the current canonical Service CRM line is not established by this catalog.

**Commercial role:** platform home and adoption layer; initially bundled rather than sold as an isolated data product.

---

## 3. Instant Value products

### MP-001 — Smart QR Status

**Pain:** clients repeatedly contact the service center for repair updates.

**Victory:** a measurable share of clients checks status without calling, while no private or internal data is disclosed.

**First value:** client scans a printed QR and immediately sees a safe repair status without employee login.

**Proof:** QR opens, iPhone acceptance, status-call baseline versus pilot, public-field allowlist, cross-tenant denial and token safety evidence.

**Dependencies:** reliable service-order statuses, print payload, public projection, revocable access boundary, tenant isolation.

**Maturity:** designed; source implementation exists in private Draft PR #78 but canonical lineage, database, physical print and iPhone evidence remain incomplete.

**Next unlocks:** customer communication signals, Owner Pulse data quality and Reputation Booster timing.

---

### MP-002 — Mobile Express Intake

**Pain:** fast repairs are skipped or recorded late because intake is slower than the repair itself.

**Victory:** express repairs are registered in under two minutes without increasing missing information or invalid consent.

**First value:** employee creates a valid repair order from a phone and hands the client a QR receipt.

**Proof:** median intake time, registration completion rate, bypass rate, duplicate-order rate and consent evidence.

**Dependencies:** customer/device/order core, mobile UI, identity, signature/consent boundary, printing or digital handoff.

**Maturity:** approved and designed concept; some related CRM capabilities may exist but require canonical code and test verification.

**Next unlocks:** trustworthy Owner Pulse, Leakage Guard, Pain Scanner and service history.

---

## 4. Daily Value products

### MP-003 — Owner Pulse

**Pain:** the owner cannot quickly understand money, workload, risks and the next decision from a phone.

**Victory:** the owner understands the current business state and chooses the next action in under 30 seconds using trusted numbers.

**First value:** one screen shows money received, unpaid completed orders, overdue work, waiting approvals and one explainable action.

**Proof:** task-completion time, daily usage, data reconciliation and percentage of prompted risks resolved.

**Dependencies:** accurate intake, payments, state machine, deadlines, audit and role-safe aggregation.

**Maturity:** product hypothesis with approved direction; no canonical implementation evidence recorded here.

**Next unlocks:** Pain Scanner, Opportunity Engine and AION Today.

---

### MP-004 — Cash Leakage Guard

**Pain:** discounts, cancellations, debt releases, stock movements and off-system work can hide revenue leakage.

**Victory:** the owner detects and resolves evidence-backed anomalies without false accusations or employee surveillance.

**First value:** one reviewed alert links to the exact operation, actor, time and reason.

**Proof:** reviewed-alert rate, confirmed-value recovered or protected, false-positive rate and audit completeness.

**Dependencies:** complete event history, role model, payments, inventory links, reason capture and trustworthy audit receipts.

**Maturity:** product hypothesis; individual controls may exist in CRM but require source and test verification.

**Next unlocks:** stronger Pain Scanner evidence and owner trust.

---

### MP-005 — AION Pain Scanner

**Pain:** dashboards show many numbers but do not identify the single constraint that most needs action now.

**Victory:** the owner receives one evidence-backed problem and takes a reversible action that measurably improves time, cash or throughput.

**First value:** one pain statement, evidence chain, confidence/data-quality warning and one proposed action.

**Proof:** recommendation acceptance, owner accuracy confirmation, measured outcome and misleading-conclusion rate.

**Dependencies:** Owner Pulse facts, reliable events, Leakage Guard evidence, baseline metrics and deterministic rule library.

**Maturity:** signature-product hypothesis; blocked from trustworthy implementation until source data and operational events are proven.

**Next unlocks:** Opportunity Engine, AION Today and later decision support.

---

## 5. Growth Value products

### MP-006 — AION Opportunity Engine

**Pain:** owners focus on urgent problems and overlook reachable revenue opportunities in existing customers, stock and capacity.

**Victory:** one evidence-backed opportunity produces measurable additional gross profit or capacity utilization without misleading precision.

**First value:** the owner sees one reachable opportunity, eligible customer/order/stock basis, expected range and reversible campaign/action.

**Proof:** action conversion, incremental revenue or margin, control/baseline comparison where feasible, contact opt-out and complaint rate.

**Dependencies:** customer consent/contact rules, service history, price and margin data, inventory, capacity and measurement attribution.

**Maturity:** approved product hypothesis; not implemented.

**Stop boundary:** no automated outreach or exact earnings promise without consent, reliable attribution and owner approval.

---

### MP-007 — Reputation Booster

**Pain:** satisfied clients often leave no review, while feedback arrives inconsistently and too late.

**Victory:** the service receives more authentic feedback and reviews without pressure, manipulation or platform-policy violations.

**First value:** after a verified completed repair, the client receives a simple feedback path and an optional review invitation.

**Proof:** feedback response rate, review conversion, rating distribution, complaint rate and opt-out compliance.

**Dependencies:** verified issue completion, client communication permission, notification adapter and platform-safe links.

**Maturity:** product hypothesis; not implemented.

**Next unlocks:** repeat-client learning and reputation signals for AION Today.

---

### MP-008 — Smart Warehouse

**Pain:** cash is frozen in slow stock while profitable parts unexpectedly run out.

**Victory:** fewer stockouts and less dead inventory without increasing emergency purchases or excess working capital.

**First value:** one recommended reorder, delay or transfer supported by usage, lead time and current stock evidence.

**Proof:** stockout frequency, inventory days, dead-stock value, emergency purchase rate and recommendation accuracy.

**Dependencies:** reliable inventory movements, linked orders, supplier lead times, cost data and reservation rules.

**Maturity:** product hypothesis; warehouse functions may exist but recommendation capability is not proven.

**AI boundary:** deterministic reorder rules first; AI may explain, not fabricate demand.

---

### MP-009 — AI Master

**Pain:** technicians spend time searching fragmented diagnostic knowledge and repeating avoidable mistakes.

**Victory:** technicians resolve selected cases faster or with fewer repeat repairs while retaining human responsibility for diagnosis and repair.

**First value:** an evidence-linked suggestion of likely causes, checks and required parts for a bounded device/problem class.

**Proof:** diagnostic time, first-time-fix rate, repeat-repair rate, technician acceptance and unsafe-suggestion rate.

**Dependencies:** structured repair history, device identity, parts catalog, technician feedback and strict data/privacy boundary.

**Maturity:** product hypothesis; not implemented as a validated AI capability.

**Stop boundary:** no autonomous repair decision, safety-critical instruction or unsupported confidence claim.

---

## 6. Strategic Value products

### MP-010 — Business Memory

**Pain:** decisions, reasons and operational learning disappear across chats, employee turnover and time.

**Victory:** the owner can retrieve why an important decision was made, what evidence supported it and what happened afterward.

**First value:** a decision receipt with context, owner, date, alternatives, expected result and review date.

**Proof:** retrieval accuracy, decision-context completeness, reuse rate and reduced repeated analysis.

**Dependencies:** Decision Log, evidence links, identity, access control, retention rules and search.

**Maturity:** concept strongly aligned with existing AION knowledge documents; unified product implementation is not proven.

**Next unlocks:** explainable recommendations, continuity and Business Twin assumptions.

---

### MP-011 — Business Twin

**Pain:** strategic choices are made without a coherent model of capacity, demand, cash and operational constraints.

**Victory:** the owner compares bounded scenarios and makes a better-informed decision while assumptions and uncertainty remain visible.

**First value:** one scenario comparison such as price, staffing or opening-hours change with ranges, assumptions and break-even conditions.

**Proof:** forecast error over time, decision usefulness, assumption traceability and absence of misleading certainty.

**Dependencies:** mature operational data, Business Memory, pricing, costs, capacity, demand history and validated models.

**Maturity:** long-term strategic hypothesis; not ready for engineering implementation.

**Stop boundary:** no autonomous strategic action and no presentation of simulation as guaranteed future fact.

## 7. Portfolio progression

### Layer A — capture and transparency

- MP-002 Mobile Express Intake
- MP-001 Smart QR Status

### Layer B — daily control

- MP-003 Owner Pulse
- MP-004 Cash Leakage Guard
- MP-005 Pain Scanner
- MP-000 AION Today

### Layer C — growth

- MP-006 Opportunity Engine
- MP-007 Reputation Booster
- MP-008 Smart Warehouse
- MP-009 AI Master

### Layer D — strategic intelligence

- MP-010 Business Memory
- MP-011 Business Twin

Layer order expresses dependencies, not a promise that every client needs every product.

## 8. Current engineering WIP

**Only active engineering candidate:** MP-001 Smart QR Status.

Current blocker:
- canonical V10.2 source lineage through migration 0044 must be recovered;
- public-status work must be replayed using forward-only migration IDs;
- database, RLS, physical print and iPhone evidence must pass.

All other catalog entries remain product design or hypotheses. Catalog approval does not authorize parallel implementation.

## 9. Mandatory next product-design step

Prepare complete Product Passports and Victory Contracts for:

1. MP-001 Smart QR Status — align the contract with existing Draft PR evidence and remaining blockers.
2. MP-002 Mobile Express Intake — define the under-two-minute victory and anti-bypass metrics.
3. MP-003 Owner Pulse — define the exact trusted daily facts and 30-second owner test.

Other products remain concise catalog entries until these three establish the reusable passport pattern.
