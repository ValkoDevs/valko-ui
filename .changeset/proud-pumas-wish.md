---
"@valko-ui/components": patch
---

## Valko-UI Components:

- Menu keyboard navigation now follows the rendered item order, keeping focus and activation aligned with the DOM.
- Replaced global DOM queries with per-item template refs and scrolls the focused item into view only when needed.
- Fixed ungrouped items not rendering under the default group.
- Added regression tests for interleaved groups, scrolling into view, group reactivity and ungrouped items.
