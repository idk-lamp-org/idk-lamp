# Why now? — Why idk-lamp exists

This document explains **why idk-lamp is needed now**,  
not as a reaction to hype, but as a response to structural changes  
in how AI systems are used.

---

## AI no longer supports decisions — it *makes* them

AI systems are increasingly embedded directly into decision loops.  
**AI systems increasingly act as de facto decision-makers.**

They do not merely provide suggestions.  
They rank, filter, approve, reject, and trigger actions.

In many systems, **output already equals decision**.

---

## AI does not naturally say “I don’t know”

Most modern AI systems are optimized for:

- Producing an output
- Maximizing confidence scores
- Minimizing user friction

They are **not optimized for abstention**.

As a result:
- Uncertainty is hidden
- Missing context is ignored
- Silence is interpreted as confidence

---

## Overconfidence and poor calibration remain unsolved problems

Hallucination, overgeneralization, and misplaced confidence  
are widely recognized issues.

Overconfidence and **poor calibration** remain unsolved problems,  
especially in open-ended or context-sensitive tasks.

Yet most systems still lack a **first-class concept of non-decision**.

Errors are detected *after* the fact,  
rather than signaled *before* responsibility shifts.

---

## Safety-critical and socio-technical domains are expanding

AI is now used in domains where:

- Decisions have irreversible consequences
- Context changes faster than models update
- Human responsibility cannot be automated away

In such domains, **knowing when not to decide**  
is as important as knowing when to decide.

---

## Governance focuses on accountability — not interface signals

Regulations and standards increasingly emphasize:

- Human oversight
- Accountability
- Scope definition
- Risk management

However, they rarely specify  
how these requirements should appear as **interface primitives**  
at the point where humans and AI systems interact.

idk-lamp addresses this gap with a deliberately minimal signal.

---

## Why abstention must be visible

Without a visible signal:

- Non-decision looks like failure
- Silence looks like confidence
- Responsibility shifts implicitly

With a visible signal:

- Abstention becomes intentional
- Responsibility handoff is explicit
- System behavior is interpretable

---

## idk-lamp is deliberately small

idk-lamp does not solve AI safety.

It does not:
- Assess risk
- Enforce policy
- Decide outcomes

It only makes one thing visible:

> **The moment an AI system stops deciding.**

That is enough to change how systems are understood.

Implementation of decision-stopping is handled in **BOA**
(Boundary-Oriented Architecture), realized as **RCA / RP**.

---

## Summary

idk-lamp exists because:

- AI systems decide more than we admit
- They rarely know when to stop
- Responsibility shifts silently
- Governance lacks interface primitives

idk-lamp introduces a **visual primitive for abstention** —  
**a design attitude for modern AI systems.**
