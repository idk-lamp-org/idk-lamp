# Handover Boundary — Non-Structured Data Cases

This document defines the **handover boundary** for cases that were intentionally excluded
from `predictability-gate` due to reliance on non-structured data
(sound, smell, images, or human sensory judgment).

This is **not an implementation guide**.
It exists to prevent irreversible failures
when responsibility shifts across teams.

---

## Why this handover exists

The case was excluded **not because it is difficult**, but because:

- A missed prediction could cause **irreversible harm**
- The decision cannot be safely reduced to numeric time-series alone
- Responsibility cannot be clearly enforced within the original gate

This handover is a **risk-aware transfer**, not a rejection.

---

## What was confirmed before handover

Before separating this case, the following were explicitly identified:

- ❌ Numeric time-series alone cannot prevent irreversible misses
- ❌ Logs alone cannot guarantee safe rollback
- ❌ Mixing structured and non-structured data would hide failure modes

The decision to separate was made **before model construction**.

---

## Identified irreversible risks

The following categories were flagged as potentially irreversible if missed:

### Safety
- Entrapment, burns, leaks, runaway conditions

### Quality
- Market leakage, recalls, brand damage

### Regulation
- Environmental limits, labor safety, medical / food compliance

### Assets
- Equipment destruction, long downtime

If any of these risks cannot be mitigated by logs or alarms alone,
the case must not return to numeric-only handling.

---

## Preconditions for any non-structured approach

Before any modeling or data collection begins,
the following **must be explicitly defined**:

### Authority & Control
- Who has the **authority to stop the system**
- How and when manual override is triggered

### Rollback
- Whether rollback is possible
- What the rollback target state is
- How long rollback takes

### Redundancy
- Whether **double detection** is required
- What happens when detectors disagree

### Scope limitation
- Initial deployment **must be limited**
  - Shadow mode
  - Restricted line
  - Restricted time window

> **Full-scale deployment as the first step is prohibited.**

---

## Minimum evaluation requirements

Any non-structured approach must pass **all** of the following
before being considered for expansion:

- **Condition degradation rate ≤ 15%**
- **Feature reproducibility ≥ 60%**
- **Impact radius clearly identified**
  - Which line
  - Which shift
  - Which operational unit

If these cannot be demonstrated,
the system must remain limited or stopped.

---

## What is intentionally NOT provided

This handover does **not** include:

- Model architectures
- Feature extraction methods
- Performance targets
- Implementation timelines

Those belong to the receiving team’s responsibility.

This document transfers **risk context**, not solutions.

---

## Responsibility statement

From this point forward:

- The original `predictability-gate` scope ends here
- The receiving team becomes the **primary risk owner**
- All further decisions must explicitly name a responsible operator

This handover does **not** absolve responsibility.
It **reassigns it clearly**.

---

## Final note

Avoidance is not abandonment.

This boundary exists so that
non-structured data can be handled **deliberately, safely, and honestly**.

If at any point responsibility or irreversibility becomes unclear,
the correct action is to **stop and reassess**.

---

_End of handover boundary_
