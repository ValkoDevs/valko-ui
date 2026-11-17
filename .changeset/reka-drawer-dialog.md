---
'@valko-ui/components': minor
---

Rebuild `VkDrawer` on Reka UI's `Dialog` (`DialogRoot`/`DialogPortal`/`DialogOverlay`/`DialogContent` + `Presence`), reusing the Dialog/Presence pattern from the Modal migration: overlay content renders teleported to `body`, Esc/outside-click close and the focus trap are Reka-owned and remain gated by `closable`, and per-`placement` (top/bottom/left/right) slides use the new `vk-slide-in-*`/`vk-slide-out-*` keyframes driven by Reka's `data-state` attributes. Public props/events API (including `placement`) and `styleSlots` are unchanged.
