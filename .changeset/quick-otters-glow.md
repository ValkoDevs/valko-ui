---
"@valko-ui/components": patch
---

## Valko-UI Components:

- Fixed the Select multi-select display so unknown values no longer produce leading commas or extra whitespace.
- Fixed Select item reference handling so stale ref callbacks from re-renders no longer clear tracked option elements.
- Added regression tests for unknown multi-select display values and scrolling into view after re-renders.
