---
'@valko-ui/components': minor
---

Migrate `VkTooltip` to Reka UI's `Tooltip`: instant show, closes on pointer leave, and now also opens on keyboard focus (previously hover-only). The tooltip element is now the trigger itself with `aria-describedby` wired by Reka, and content renders in a portal on `body` instead of inline (breaking DOM-location change).
