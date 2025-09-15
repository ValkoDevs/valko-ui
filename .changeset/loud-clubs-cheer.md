---
"@valko-ui/components": patch
"@valko-ui/docs": patch
---

## Valko-UI Components:

- Refactored style management: removed the custom `useStyle` composable and now use the tv function from tailwind-variants directly in all components.
- Removed `useStyle` composable including all related test and types.
- Added a new `styleSlots` prop to every component, typed with the corresponding `ComponentNameSlots` type exported from each styles file. This enables users to customize classes for any slot in a component.
- Updated `tailwind-variants` dependency to the latest version (v3.1.1).
- Installed `tailwind-merge`, a required peer dependency for tailwind-variants v3.x.

## Valko-UI Docs:

- Updated all component API documentation to include the new `styleSlots interface`, listing available slot names for customization.
- Refactored custom doc components to use the tv function instead of the deprecated useStyle hook.
- Installed `tailwind-variants` in the docs package to support these changes.
