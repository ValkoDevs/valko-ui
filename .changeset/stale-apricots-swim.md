---
"@valko-ui/components": minor
"@valko-ui/docs": patch
---

### Components

**Popover:**
  - Removed headlessUI as it was not being used.
  - Reintroduced `placement` prop to allow positioning customization.
  - Added `alignment` prop to control the alignment within the placement.
  - Added `condensed` prop to allow users to disable the default padding in the content panel.
  - `placement` defaults to `auto`, meaning the Popover will automatically adjust its position based on available space. If a different placement is set, it will be used instead.

**Dropdown:**
  - Replaced headlessUI with the new `VkPopover`. 
  - Now supports `placement` and `alignment` props for more flexible positioning.

**Tooltip:**
  - Replaced headlessUI with the new `VkPopover`. 
  - Now supports `placement` and `alignment` props for more precise positioning.

## Types
 **Common:**
  - Added `Alignment` and `PlacementWithAuto` types.
  - Added `Alignments`, `Placements` and `PlacementsWithAuto` interfaces.

  **Components:**
    - Updated `Popover`, `Dropdown`, and `Tooltip` to extend `Alignments` and `PlacementsWithAuto`.
    - Updated `Drawer` to extend `Placements` for consistent placement handling.

## Test
  - Updated test for `Tooltip` to match recent changes.

## Styles
  - Updated styles for `Tooltip`, `Popover` and `Dropdown` to match recent changes.

### Docs
  - Updated doc pages for `Tooltip`, `Popover` and `Dropdown` to match recent changes.
