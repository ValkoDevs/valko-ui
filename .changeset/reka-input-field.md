---
'@valko-ui/components': minor
---

Migrate `VkInput` label/control/description wiring to Reka UI's `Field` parts (`FieldRoot`/`FieldLabel`/`FieldControl`/`FieldDescription`): the control id, `aria-labelledby`, and helpertext `aria-describedby` ids are now Reka-generated instead of hand-rolled `useId`s, and focusing the label focuses the control. Icon slots, `clearable`, and number-increment behavior are unchanged; public props, events, and slots are unchanged.
