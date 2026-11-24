---
'@valko-ui/components': minor
---

Migrate `VkDropdown` to Reka UI's `DropdownMenu`: item keyboard navigation, typeahead, and dismissal are Reka-owned, and content renders in a portal on `body` instead of inline (breaking DOM-location change). The `dropdown-trigger` slot contract (`{ open, toggle }`) is preserved; public props and slots are otherwise unchanged, except for a new `update:isOpen` event that enables `v-model:isOpen`.
