---
'@valko-ui/components': minor
---

Rebuild `VkModal` on Reka UI's `Dialog` (`DialogRoot`/`DialogPortal`/`DialogOverlay`/`DialogContent`/`DialogTitle`/`DialogDescription` + `Presence`): overlay content renders teleported to `body`, Esc/outside-click close and the focus trap are Reka-owned and remain gated by `closable`, and enter/leave animations use `vk-`-prefixed keyframes driven by Reka's `data-state` attributes. Public props/events API and `styleSlots` are unchanged.
