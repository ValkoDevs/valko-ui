---
'@valko-ui/components': minor
---

Radio: migrated `VkRadio` to Reka UI's `RadioGroupRoot`/`RadioGroupItem`. Each radio now renders a real `radiogroup`/`radio` pair with Reka-owned click, focus, and keyboard behavior, and correct `aria-checked`/`data-state` wiring. Manual keydown handling, decorative hidden input, and the `data-checked` attribute were removed; styles now use `group-data-[state=checked]:` variants. Public props and events are unchanged.

Added `VkRadioGroup` (`RadioGroup.vue`): a wrapper owning a single `RadioGroupRoot`. Use it when several `VkRadio` components share a `name`, so the group model is submitted once per form instead of once per radio; `VkRadio` continues to work standalone with its own root. `aria-label`/`aria-labelledby` are now only rendered when set, letting Reka derive the accessible name from the radio label otherwise.
