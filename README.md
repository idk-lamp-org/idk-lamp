# idk-lamp

A design signal that allows AI to **explicitly stop deciding**.

**idk-lamp** is a deliberately minimal signal that makes it visible
when an AI system abstains from making a decision
due to uncertainty, missing context, or undefined responsibility.

This is not a product.  
This is not a decision system.  

**This is a boundary marker.**

---

## What it does

- Allows AI systems to explicitly **abstain**
- Signals when automated decisions are **intentionally paused**
- Makes the return of responsibility to humans visible

---

## Why this matters

Modern AI systems are optimized to always produce answers.

As a result, decisions can silently shift
from humans to systems
without a clear handoff of responsibility.

idk-lamp exists to make **non-decision** visible.

See: [`docs/why-now.md`](docs/why-now.md)

---

## Repository structure (Monorepo)

```text
packages/
  idk-lamp/               Core implementation / UI signal
  predictability-gate/    Conditions for predictability
  decision-closure/       Responsibility handoff rules
  ai-human-boundary/      Human–AI boundary notes

docs/
  why-now.md
  mapping.md

Context
This project is designed as a practical signal that marks
the boundary where AI systems must stop deciding
and defer responsibility to humans.

idk-lamp (official site)
https://idk-lamp.org/

This work originates from ongoing exploration of
design, responsibility, and boundaries
in AI-assisted systems.

VCDesign
https://vcdesign.org/

This repository can be used and understood independently.
No prior knowledge is required.