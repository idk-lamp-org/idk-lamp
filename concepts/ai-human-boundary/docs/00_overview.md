# 00_overview — Overall Picture of the Boundary Between AI and Humans

This document summarizes the overall picture of the "boundary" that **ai-human-boundary** deals with.

While the README serves as the minimum guide at the "entrance,"
here we organize the **structure** behind it.

---

# 1. Overall Structure (Map of Layered Structure)

When AI and humans choose value together,
the relationship becomes a multi-layered structure as follows:

Value (VCDesign)
↓
Human Decision-Making Layer (Handling Uncertainty)
├─ Human-side idk-lamp (Signal that decision cannot be closed)
└─ Metacognition of Uncertainty (AI omits uncertainty)
↓
AI + Human → Action (Operation Layer)
├─ Known / Unknown
├─ Proposal as is / Human decided
└─ Human also gave up
↓
Decision Closure (Whether AI can close the judgment)
├─ 5 Steps (Responsibility / Cancellation / Reversibility / Chain / Social Context)
└─ Transition (Midway Reversal)
↓
BOA (Boundary-Oriented Architecture)
↓
Implementation / System Structure

What this repository covers is:
**The layers above Decision Closure (Human Decision-Making Layer to Value)**.

---

# 2. Areas Covered by This Repository

## ◆ 2.1 Human Decision-Making Layer
When AI and humans think together,
the following two structures are required on the human side.

### ● Human-side idk-lamp
- Cannot judge right now
- Cannot decide right now
- Uncertainty is too large right now

A signal to convey this to the surroundings.

Just as AI needed an idk-lamp,
humans need the same thing.

### ● Metacognition of Uncertainty
AI's answers are smooth and polished, but
**uncertainty is omitted**.

Therefore, when necessary, humans need to recall the fact that:

> "AI cannot share uncertainty"

---

## ◆ 2.2 Action Layer (AI + Human → Action)

Responsibility for action always lies with humans.
Its structure can be represented by the following 3 axes:

1. **Known / Unknown**
2. **Acted on proposal as is / Human made a judgment**
3. **Human themselves gave up**

These 3 axes are
the "minimum structure" when AI and humans cooperate to act.

---

# 3. Relationship with Decision Closure

Decision Closure (Judgment Circuit Structure) is
a structure to decide **whether AI can close the judgment**.

- Is the responsible entity a single person?
- Does it not depend on psychological cancellation?
- Is it physically cancellable?
- Does the action not chain?
- Does it not carry social context?

If these conditions collapse,
AI does not close the judgment and it becomes **Human-Closed**.

This repository deals with
**the boundary of human decision-making**
that lies "outside" Decision Closure.

---

# 4. Relationship with BOA (Boundary-Oriented Architecture)

BOA is a methodology that translates boundary decisions
into system structure, and sits **between decision and implementation**.

BOA does not define the boundaries themselves.
It preserves already-made boundary decisions
(responsibility, meaning, judgment) and turns them into structure.

Decision Closure determines whether AI can close a judgment,
and in BOA it is **realized in implementation** as RCA / RP.

ai-human-boundary covers the **human decision boundary**
that lies outside of that.

---

# 5. Purpose of This Repository

- Organize the "boundary" for AI and humans to choose value together
- Leave a guide for understanding so that humans do not break in the AI era
- Clarify "human roles" outside of Decision Closure

This is neither design nor specification,
but a **guide for humans**.

---

# 6. Recommended Reading Order

1. README
2. 00_overview (this document)
3. human-idk-lamp
4. uncertainty
5. action-layer
6. relationship-with-decision-closure

---

# 7. Finally

As AI becomes smarter,
the "reasons for humans not to decide" will increase.

However,

> **Choosing value is always the human's role**

This repository exists so as not to forget this boundary.
