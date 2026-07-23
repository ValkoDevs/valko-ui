---
"@valko-ui/components": minor
"@valko-ui/docs": minor
---

## Valko-UI Components

### Breaking Changes

- **Popover**
  - Renamed the default slot to `trigger`.
  - Renamed the `popover-content` slot to `panel`.
  - Replaced the `open` and `close` emits with `update:isOpen`.

- **Dropdown**
  - Renamed the `dropdown-trigger` slot to `trigger`.
  - Updated the trigger slot API to expose:
    - `isOpen`
    - `setOpen`
    - `disabled`
  - Removed the previous trigger slot props (`props`, `open`, and `toggle`) in favor of the new standardized API.

### Components

- Centralized popover state management inside `VkPopover`, removing duplicated open/close and click-outside logic across components.

- **Popover**
  - Added support for controlled and uncontrolled state management.
  - Trigger and panel slots now expose `isOpen` and `setOpen` for easier state synchronization.

- **Dropdown**
  - Updated to use the new Popover API.
  - Added support for controlled and uncontrolled state management.

- **Datepicker & Timepicker**
  - Refactored both components to use the shared `VkPopover` component.
  - Added support for controlled and uncontrolled open state through `v-model:isOpen`.
  - Removed duplicated popover implementation and click-outside handling.

- **DataTable**
  - Updated internal Popover usage to match the new slot API.
  - Improved client-side filtering initialization to prevent unnecessary reactive loops.
  - Updated drag and drop handling to support disabled states without affecting the data pipeline.
  - Fixed cases where disabled drag and drop could cause empty datasets and prevent table records from rendering.

- **Tooltip**
  - Updated internal Popover usage to match the new slot API.

### Composables

- **useClientSideDragAndDrop**
  - Added support for an `enabled` parameter to control drag and drop behavior.
  - Improved disabled state handling by preserving the original data flow when drag and drop is not enabled.

- **useClientSideFilter**
  - Improved filter state initialization and filtering behavior.
  - Fixed unnecessary reactive updates caused by filter watchers.

- **useClientSideDataTable**
  - Simplified the data processing pipeline by delegating drag and drop enable/disable logic to `useClientSideDragAndDrop`.
  - Maintained a consistent composable flow while avoiding unnecessary drag and drop processing.

### Tests

- Updated component test suites to cover the new controlled/uncontrolled behavior and standardized APIs.

---

## Valko-UI Docs

### Pages

- Updated the Popover, Dropdown, Datepicker, and Timepicker documentation to reflect the new APIs.
- Added examples demonstrating controlled state management using `v-model:isOpen`.
- Updated API tables to document the new props, events, slot names, and slot APIs.
- Updated documentation examples to use the new Popover API.
