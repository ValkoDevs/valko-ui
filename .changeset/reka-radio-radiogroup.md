---
'@valko-ui/components': minor
---

Radio: migrated `VkRadio` to Reka UI's `RadioGroupRoot`/`RadioGroupItem`. Each radio now renders a real `radiogroup`/`radio` pair with Reka-owned click, focus, and keyboard behavior, and correct `aria-checked`/`data-state` wiring. Manual keydown handling, decorative hidden input, and the `data-checked` attribute were removed; styles now use `group-data-[state=checked]:` variants. Form submission (the `name` prop) is handled by Reka's hidden input inside form contexts. Public props and events are unchanged.
