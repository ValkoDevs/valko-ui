---
"@valko-ui/components": minor
"@valko-ui/docs": patch
---

### Components

**Popover:**
  - Removed headlessUI as it was not being used.
  - Removed `placement` prop. Popover now automatically places itself based on available space.
  - Added `condensed` prop to allow users to disable the default padding in the content panel.

**Dropdown:**
  - Replaced headlessUI with the new `VkPopover`. Dropdown now uses Popover for positioning and still manages its own state.
