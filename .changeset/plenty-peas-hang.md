---
"@valko-ui/components": patch
"@valko-ui/docs": patch
---

### Components

**Dropdown:**
  - Vue no longer allows slots to inherit default event handlers, so we removed the `open` prop from the slot context. Instead, we now provide a `toggle` function, allowing you to control the dropdown’s open/close state programmatically.

### Docs
  - Updated the Dropdown doc page to reflect this change.
