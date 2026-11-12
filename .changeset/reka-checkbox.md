---
'@valko-ui/components': minor
---

Migrate `VkCheckbox` to Reka UI's `CheckboxRoot`, which now owns the checkbox semantics (`role="checkbox"`, `aria-checked` incl. `mixed` for indeterminate), keyboard toggling, and focus behavior. The hidden native input is gone; when `name` is set, Reka renders its own hidden form input. The `input` styleSlot was removed with the element it styled. Public props (`modelValue` still accepts `boolean | null`, `null` = indeterminate), events, and remaining styleSlots are unchanged; the custom `readonly` behavior is preserved by gating `update:modelValue`.
