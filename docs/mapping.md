# Conceptual Mapping: idk-lamp and Global AI Frameworks

This document provides a **non-normative conceptual mapping** between  
**idk-lamp** and major global AI governance frameworks.

⚠️ **Important notice**

- This document does **not** claim legal, regulatory, or standard compliance.
- idk-lamp is **not** a governance framework.
- idk-lamp is a **design signal** that visualizes abstention and responsibility boundaries.

The purpose of this mapping is **translation**, not certification.

---

## Why this mapping exists

Different communities discuss the same problems using different languages:

- Regulators talk about *oversight* and *accountability*
- Engineers talk about *failure modes* and *uncertainty*
- Designers talk about *signals* and *boundaries*

idk-lamp sits at the intersection of these discussions.

This document helps readers recognize that idk-lamp addresses  
**already-recognized global concerns**, using a deliberately minimal UI signal.

---

## High-level correspondence

| idk-lamp concept | Description | Related framework concept |
|------------------|-------------|---------------------------|
| Abstention / Refusal | AI explicitly does not decide | NIST AI RMF – Measure / Manage |
| Human fallback | Responsibility returns to humans | EU AI Act – Human Oversight |
| Boundary of applicability | System explicitly signals scope limits | ISO/IEC 42001 – AI system scope |
| Non-decision visibility | Refusal is observable and auditable | Accountability / auditability |

---

## NIST AI Risk Management Framework (AI RMF)

**Relevant idea:**  
AI systems should measure and manage uncertainty, risk, and limitations.

**Conceptual alignment:**

- idk-lamp visualizes the *Manage* phase
- Abstention acts as a risk-control mechanism
- Refusal is treated as a valid operational outcome

**Key distinction:**

- NIST AI RMF defines *processes*
- idk-lamp defines a *signal*

idk-lamp does not perform risk assessment —  
it makes the result of uncertainty visible.

---

## EU AI Act (Human Oversight)

**Relevant idea:**  
High-risk AI systems must enable effective human oversight.

**Conceptual alignment:**

- idk-lamp provides a clear handoff point
- The lamp indicates when automated judgment stops
- Humans are explicitly reinserted into the decision loop

**Key distinction:**

- The EU AI Act is a legal requirement
- idk-lamp is a design pattern

idk-lamp does not enforce oversight —  
it signals when oversight becomes necessary.

---

## ISO/IEC 42001 (AI Management Systems)

**Relevant idea:**  
AI systems must clearly define their scope, purpose, and limitations.

**Conceptual alignment:**

- idk-lamp marks the boundary of applicability
- The signal indicates “outside designed scope”
- Non-decision is treated as intentional, not failure

**Key distinction:**

- ISO/IEC 42001 governs organizational systems
- idk-lamp operates at the interface level

---

## What idk-lamp intentionally does NOT do

To avoid misunderstanding, idk-lamp explicitly does **not**:

- Claim compliance with any standard or regulation
- Decide when abstention should occur
- Replace governance, audits, or risk management
- Guarantee safety or correctness

It only answers one question:

> **“Is the AI deciding right now — or not?”**

---

## Design implication

By externalizing non-decision as a visible signal:

- Silence is no longer mistaken for confidence
- Output absence is no longer treated as failure
- Responsibility boundaries become explicit

This is the smallest possible intervention  
that still changes how systems are interpreted.

---

## Relation to implementation patterns

idk-lamp itself is implementation-agnostic.

Decision-stopping is implemented in **BOA** (Boundary-Oriented Architecture)
as **RCA / RP**.

One possible implementation direction —  
where determinability and predictability are explicitly gated — can be found here:

https://github.com/hironobu-arakawa/predictability-gate

This link is illustrative, not normative.

---

## Summary

idk-lamp does not introduce a new governance requirement.

It introduces a **new visual primitive**  
that makes existing governance concerns observable  
at the human–AI interface.

That is its entire role.
