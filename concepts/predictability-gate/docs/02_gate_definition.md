# Gate Definition

Predictability Gate consists of six evaluation items (G1–G6).

## G1 — Information Content
Do the numeric time-series contain sufficient predictive signal?

Typical indicators:
- Target entropy
- Sum of mutual information (top features)

---

## G2 — Business Tolerance
Is there an operational escape route when predictions are wrong?

Examples:
- Safe-side fallback
- Decision deferral
- Human confirmation

---

## G3 — Temporal Consistency
Are results valid under time-aware validation?

Checks include:
- Time-series cross validation
- Shuffle degradation
- Leakage suspicion

---

## G4 — Proxy Feature Potential
Is there room for improvement using proxy features?

Examples:
- Lag features
- Dwell time
- Ratios
- Rollups

---

## G5 — Operational Dependency & Irreversibility (Override)
Would a **miss** cause irreversible damage?

If yes:
> **This case must not be handled by numeric time-series AI.**

G5 overrides all other items.

---

## G6 — Rough ROI
Does expected benefit justify operational cost?

This is a coarse check, not financial approval.
