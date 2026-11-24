---
'@valko-ui/components': minor
---

Migrate `VkTimepicker` to Reka UI's `TimeField`. The input is now an editable, keyboard-navigable segmented time field: typing a time directly is supported, 12/24-hour behavior is still driven by `format`, and `minTime`/`maxTime` surface Reka's `data-invalid` state. The public API is unchanged (`modelValue`, `adapter`, `parsedModel`, `isOpen`, `open`/`close`/`onSelect`) and the clock popover is preserved; segment edits emit `update:modelValue`. Adds `@internationalized/date` as a direct dependency (re-exported by Reka's TimeField contract) and to the Nuxt module transpile list.
