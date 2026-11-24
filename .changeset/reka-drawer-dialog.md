---
'@valko-ui/components': minor
---

Rebuild `VkDrawer` on Reka UI's `Dialog` (`DialogRoot`/`DialogPortal`/`DialogOverlay`/`DialogContent` + `Presence`), reusing the Dialog/Presence pattern from the Modal migration: overlay content renders teleported to `body`, and `DialogContent` itself carries the per-`placement` panel geometry (fixed, edge anchors, size) so the scrim sits outside the content subtree and Reka-owned Esc/outside-click close — gated by `closable` — works again; the focus trap is Reka-owned and always active, and on open focus moves to the panel root (`tabindex="-1"`) instead of the first focusable part. Per-`placement` (top/bottom/left/right) slides use the new `vk-slide-in-*`/`vk-slide-out-*` keyframes driven by Reka's `data-state` attributes. Public props/events API (including `placement`) is unchanged, and all `styleSlots` keys are preserved (`container` and `content` now render on the dialog panel element).
