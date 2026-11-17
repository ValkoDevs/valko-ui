---
'@valko-ui/components': minor
---

Render `VkDivider` through Reka UI's `Separator` (`as="hr"`): `role="separator"` and `aria-orientation` are now owned by Reka from the `orientation` prop, with `decorative: false` preserving the `aria-label`/`aria-labelledby` wiring. Public props, events, and slots are unchanged.
