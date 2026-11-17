---
'@valko-ui/components': minor
---

Pagination: migrated `VkPagination` to Reka UI's `Pagination` primitives. Reka now owns the page-window calculation (same ellipsis windows as before), item/arrow interactions, disabled state, and accessibility (`aria-label="Page N"` plus `aria-current="page"` on items, and arrow `aria-label`s replacing the `sr-only` spans). Public props, events, style slots, and the rendered `VkButton` styling are unchanged; clicking the current page or an ellipsis no longer emits `update:modelValue`.
