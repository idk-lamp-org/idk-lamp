# Failure Cases — Why Predictability Gate Exists

> This document comes first for a reason.
> Predictability Gate was designed by learning from these failures.

This document does **not** list detailed incidents or postmortems.

It documents **failure patterns** that repeatedly appear
*before* serious accidents, quality losses, or loss of trust occur.

These cases explain **why predictability-gate exists**.

---

## Case 1 — Accuracy looked good, but responsibility was undefined

### Situation
- Numeric time-series model achieved acceptable accuracy
- Validation metrics met internal thresholds
- Deployment pressure was high

### What went wrong
- No clear owner for **stop / override**
- When predictions were wrong, escalation was delayed
- The system continued operating because “the model said so”

### Why the gate would have stopped this
- **G2 (Business tolerance)** was not satisfied  
  No safe fallback or decision deferral existed.
- **G5 (Responsibility & irreversibility)** was unclear.

### Lesson
> Accuracy without responsibility creates silent failure.

---

## Case 2 — Non-structured signals were mixed too early

### Situation
- Sound / image features were added to numeric data
- Overall model accuracy improved
- Evaluation was done with random cross-validation

### What went wrong
- Failure modes were no longer observable
- Temporal leakage was masked by mixed features
- Degradation appeared only after deployment

### Why the gate would have stopped this
- **Scope separation rule** was violated
- **G3 (Temporal consistency)** could not be validated properly

### Lesson
> Mixing domains hides failure modes before it improves performance.

---

## Case 3 — A missed prediction caused irreversible damage

### Situation
- False positives were manageable
- False negatives were considered “unlikely”
- No explicit irreversibility check was performed

### What went wrong
- A single miss led to:
  - Safety incident
  - Quality escape
  - Regulatory breach
- Rollback was not possible

### Why the gate would have stopped this
- **G5 override**  
  Missed prediction was **irreversible**.

### Lesson
> Low probability does not reduce irreversible risk.

---

## Case 4 — Pilot scope quietly expanded

### Situation
- Started as a limited pilot
- Gradually expanded “because it worked”
- No formal re-approval step existed

### What went wrong
- Conditions changed outside evaluated range
- Performance degraded silently
- No one noticed until damage occurred

### Why the gate would have stopped this
- **Limited pilot rule** would have required re-evaluation
- **Impact radius** was not explicitly defined

### Lesson
> Expansion without re-gating is uncontrolled deployment.

---

## Case 5 — The system could not be stopped

### Situation
- Automated decision was integrated into operations
- Manual override existed only on paper

### What went wrong
- Operators hesitated to intervene
- Stopping the system was socially or procedurally difficult
- Damage accumulated over time

### Why the gate would have stopped this
- **Precondition check** for stop authority would have failed

### Lesson
> A system that cannot be stopped is already unsafe.

---

## Common pattern across failures

Across all cases:

- Models were *technically valid*
- Failures were *organizational and operational*
- Responsibility boundaries were unclear

Predictability Gate exists to surface these issues
**before** model construction begins.

---

## Important note

These cases are intentionally abstract.

They are not:
- Incident reports
- Blame assignments
- Complete histories

They are **recognition patterns**.

If any case feels familiar,
the correct response is **not to optimize the model**,
but to **reconsider whether AI should decide at all**.

---

_End of failure patterns_
