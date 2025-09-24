---
"@valko-ui/components": patch
"@valko-ui/docs": patch
---

## Valko-UI Components

### Style System
- Refactored style management: removed the custom `useStyle` composable and now use the `tv` function from `tailwind-variants` directly in all components.
- Added a new `styleSlots` prop to every component, typed with the corresponding `ComponentNameSlots` type exported from each styles file. This enables users to customize classes for any slot in a component.
- Renamed several style slots to be more self-explanatory and consistent across components.

### Composables
- Removed `useStyle` composable, including all related tests and types.

### Dependencies
- Updated `tailwind-variants` dependency to the latest version (v3.1.1).
- Installed `tailwind-merge`, a required peer dependency for `tailwind-variants` v3.x.

### Tests
- Fixed test issues related to the migration from the custom `useStyle` hook to the `tv` function from `tailwind-variants`.

### Components & Templates
- Updated template code to avoid naming collisions between props and style slot variables (e.g., using `props.title` instead of `title`).

---

## Valko-UI Docs

### API & Documentation
- Updated all component API documentation to include the new `styleSlots` interface, listing available slot names for customization.
- Updated all documentation pages to use the new `style-slots` prop instead of `class` for customizing example sections.

### Components
- Refactored custom doc components to use the `tv` function instead of the deprecated `useStyle` hook.

### Utilities
- Added a utility function to reduce repetition when applying `style-slots` in example sections.

### Dependencies
- Installed `tailwind-variants` in the docs package to support these changes.
