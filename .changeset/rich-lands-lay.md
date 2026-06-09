---
"@valko-ui/components": minor
"@valko-ui/docs": minor
---

## Valko-UI Components

### Components

- Added `VkDateTimePicker`, a two-step date-and-time picker that combines `VkCalendar` and `VkTime` into a unified selection flow (date → time → confirm).
- Refactored `VkDatepicker`, `VkTimepicker`, and `VkDateTimePicker` to use `VkPopover` internally for dropdown positioning, replacing manual click-outside detection, lifecycle hooks, transition wrappers, and absolute-positioned content divs.
- Added uncontrolled (internal) open/close state to `VkPopover`, `VkDatepicker`, `VkTimepicker`, and `VkDateTimePicker`. When `isOpen` is omitted, each component manages its own state internally. When `isOpen` is provided, controlled behavior is preserved.
- Added `'open'` emit to `VkPopover`.

### Composables

- Added `useDateTimeAdapter` composable for shared model state between calendar and time adapters, with `commitSelection()` and `resetSelection()` controls.
- **BREAKING:** Changed adapter composable return types from tuples to named objects:
  - `useDateAdapter`: `[model, parsedModel, adapter]` → `{ model, displayValue, adapter }`
  - `useTimeAdapter`: `[model, parsedModel, adapter]` → `{ model, displayValue, adapter }`
  - `useDateTimeAdapter`: `[model, parsedModel, calendarAdapter, timeAdapter, controls]` → `{ model, displayValue, adapter: { date, time }, controls }`

### Utilities

- Extracted `formatDateTime` to `src/utils/formatDateTime.ts`, consolidating duplicated formatting logic from all three adapters. Exported as public API.

### Types

- Added `DateTimePickerProps`, `DateTimeAdapterProps`, `DateTimeControls`, `DateTimeAdapter`, and `DateTimeAdapterResult` interfaces.
- **BREAKING:** Renamed `parsedModel` prop to `displayValue` across `DatepickerProps`, `TimepickerProps`, and `DateTimePickerProps`.
- **BREAKING:** Changed `AdapterResult`, `TimeAdapterResult`, and `DateTimeAdapterResult` from tuple types to named object interfaces.
- Changed `isOpen` from required to optional in `DatepickerProps`, `TimepickerProps`, and `DateTimePickerProps`.
- Changed `TimepickerProps` to extend `Omit<TimeProps, 'styleSlots'>` instead of `TimeProps` directly.

### Styles

- Added `DateTimePicker.styles.ts` with slots: `dateSection`, `timeSection`, `backAction`, `backButton`, `actions`.
- **BREAKING:** Removed `container` and `content` style slots from `Datepicker.styles.ts`, `Timepicker.styles.ts`, and `DateTimePicker.styles.ts` — now handled by VkPopover.
- Removed `shape` variant values from picker styles — shape is now delegated to VkPopover.

### Tests

- Added 31 tests for `VkDateTimePicker` covering props, navigation, emits, and controls.
- Added unit tests for `formatDateTime`.
- Added uncontrolled mode tests for `VkPopover`, `VkDatepicker`, `VkTimepicker`, and `VkDateTimePicker`.
- Updated all adapter and picker tests to use new object destructuring, renamed props, updated selectors, and `click` events.

---

## Valko-UI Docs

### Pages

- Added documentation page for `VkDateTimePicker` with playground, examples, and API reference.
- Updated `datepicker`, `timepicker`, and `datetimepicker` docs with new destructuring syntax, `:display-value` bindings, and revised API tables.
- Simplified picker example sections by removing per-instance open/close state management — examples now use uncontrolled mode.
- Added `'open'` emit documentation to Popover docs.
- Updated `isOpen` prop documentation across all picker and popover docs to reflect optional/uncontrolled behavior.

### Styles

- Changed `overflow-x-auto` to `overflow-x-visible` in DocSection playground container to prevent dropdown clipping.

### Layout

- Added `DateTimePicker` entry to the docs sidebar navigation.
