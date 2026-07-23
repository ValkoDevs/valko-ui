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

### Tests

- Updated component test suites to cover the new controlled/uncontrolled behavior and standardized APIs.

---

## Valko-UI Docs

### Pages

- Updated the Popover, Dropdown, Datepicker, and Timepicker documentation to reflect the new APIs.
- Added examples demonstrating controlled state management using `v-model:isOpen`.
- Updated API tables to document the new props, events, slot names, and slot APIs.
- Updated documentation examples to use the new Popover API.
