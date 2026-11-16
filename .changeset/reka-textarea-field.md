---
'@valko-ui/components': minor
---

Migrate `VkTextarea` label/control/description wiring to Reka UI's `Field` parts (`FieldRoot`/`FieldLabel`/`FieldControl`/`FieldDescription`): the control id, `aria-labelledby`, and helpertext `aria-describedby` ids are now Reka-generated instead of hand-rolled `useId`s. Public props, events, and slots are unchanged.
