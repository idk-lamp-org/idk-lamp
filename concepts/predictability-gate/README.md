# predictability-gate

**Operational boundary for deciding _when not to let AI decide_.**

This repository documents one concrete way to decide  
**whether an AI system should be allowed to make predictions at all**,  
*before* model building begins.

It is not a product.  
It is not a framework.  
It is not a best practice.

It is an **operational gate** for stopping AI decisions  
when responsibility, safety, or predictability cannot be guaranteed.

---

## What this is

`predictability-gate` defines a **pre-model decision gate** used in real operations to answer a single question:

> **Should this decision be delegated to AI, or not?**

The gate exists to prevent situations where:
- a model is technically feasible,
- accuracy looks acceptable,
- but **a wrong prediction would cause irreversible damage**.

This repository focuses on **stopping decisions**, not optimizing models.

---

## What this is NOT

- ❌ A machine learning framework  
- ❌ An AI governance standard  
- ❌ A compliance checklist  
- ❌ A guarantee of safety or correctness  

This repository does **not** claim completeness or universality.

It presents **one concrete operational structure**  
for organizations that must carry real-world responsibility.

---

## Core principles

The Predictability Gate is based on four non-negotiable principles:

1. **Responsibility comes before accuracy**  
2. **“What happens if we are wrong?” matters more than “Can we predict?”**  
3. **Irreversible misses must never be delegated to AI**  
4. **The final decision to proceed or stop is always made by a human operator**

If these principles cannot be satisfied, the correct outcome is **not to proceed**.

---

## Scope

This gate is designed primarily for **numeric time-series AI use cases**.

Cases that rely on:
- sound,
- smell,
- images,
- or human sensory judgment

are intentionally **separated into different projects**  
with dedicated safety design and evaluation methods.

Mixing these domains prematurely is explicitly avoided.

Before defining the gate, this repository starts by documenting failure patterns
that made this boundary necessary.

---

## Structure of the gate

The gate is executed within **48–72 hours**, before any serious modeling work.

### Gate components

- **G1 – Information content**  
  Do the numeric time-series contain sufficient predictive signal?

- **G2 – Business tolerance**  
  Is there an operational “escape route” when predictions are wrong  
  (safe-side fallback or decision deferral)?

- **G3 – Temporal consistency**  
  Are results valid under time-aware validation (no leakage)?

- **G4 – Proxy feature potential**  
  Do lag, dwell time, ratios, or rollups meaningfully improve predictability?

- **G5 – Operational dependency & irreversibility (override gate)**  
  Would a *miss* cause irreversible harm  
  (safety, quality, regulatory, or asset damage)?

- **G6 – Rough ROI**  
  Does the expected benefit justify operational cost?

> **G5 overrides all other scores.**  
> If a missed prediction is irreversible, the case is rejected.

---

## Outcomes

The gate produces one of four outcomes:

- **Proceed**  
  → Controlled A/B or shadow deployment

- **Limited pilot**  
  → Restricted scope with data improvement

- **Stop**  
  → Predictability or value not sufficient

- **Separate project**  
  → Non-structured data or human-judgment–centric case

---

## Responsibility

This gate does **not** automate acceptance.

The final decision is always made by an **explicitly named operational owner**.

This is intentional.

> **AI does not carry responsibility.  
> People do.**

---

## Relationship to other concepts

This repository is part of a broader line of thinking about boundaries and responsibility:

- **idk-lamp** — a symbolic indicator that AI should stop and defer  
- **VCDesign / BOA / RP** — design philosophies for responsibility boundaries  

`predictability-gate` is where those ideas become **operational reality**.

Decision stopping is implemented in BOA (RCA / RP),
while this repository defines the **operational gate** before model building.

---

## Usage philosophy

You are free to:
- read,
- adapt,
- reference,
- or ignore this repository.

If you use these ideas,  
**you also accept full responsibility for how they are applied**.

No warranty.  
No support obligation.  
No enforcement.

---

## Why this is public

This repository exists because:

> **Deciding not to use AI is harder than building AI —  
> and almost nobody documents how to do it.**

This is one attempt to make that decision explicit, repeatable, and defensible.

---

## Status

This repository is intentionally minimal.

It may evolve, or it may remain unchanged.  
Both outcomes are acceptable.

---

### Author’s note（日本語）

これはノウハウ集でも、提案書でもありません。  
**AIを「使わない」と判断するための境界を、  
実務で壊れない形に固定した記録**です。

合わなければ使わなくて構いません。  
それでも「ここに線がある」こと自体に意味があります。

See README_ja.md for Japanese version.

---

## Context

This project is designed as a practical signal that marks
the boundary where AI systems must stop deciding
and defer responsibility to humans.

- idk-lamp (official site)  
  https://idk-lamp.org/

This work originates from ongoing exploration of
design, responsibility, and boundaries
in AI-assisted systems.

- VCDesign  
  https://vcdesign.org/

This repository can be used and understood independently.  
No prior knowledge is required.
