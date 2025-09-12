---
"@valko-ui/components": patch
"@valko-ui/docs": patch
---

## Valko-UI Components:

- Refactored all component style management to use tailwind-variants (tv) instead of the custom useStyle hook.
- Exported the tv instance and corresponding slot type from each style file for type safety and autocompletion.
- Updated each component’s types to include a styleSlots prop, typed with the exported slot type, allowing fine-grained style customization for every slot.

## Valko-UI Docs:

- Updated all documentation API pages to showcase the new styleSlots interface for each component.
- Added detailed slot tables to docs, listing all available style slots and their usage.
