---
'@valko-ui/components': minor
---

Migrate `VkMenu` item keyboard navigation to Reka UI's `RovingFocusGroup`: the group holds a single tab stop until focus enters it, and entry focus follows the `active` item. The global `document.querySelectorAll('[role=menuitem]')` focus lookup is gone, and the docs layout's active-menu-item lookup retargets to the new state attribute. Public API unchanged.
