---
"@valko-ui/components": minor
"@valko-ui/docs": minor
---

## Valko-UI Components

### Breaking Changes

- **Adapter composable return types changed from tuples to named objects.** All three adapter composables now return self-documenting objects instead of positional arrays:
  - `useDateAdapter`: `[model, parsedModel, adapter]` → `{ model, displayValue, adapter }`
  - `useTimeAdapter`: `[model, parsedModel, adapter]` → `{ model, displayValue, adapter }`
  - `useDateTimeAdapter`: `[model, parsedModel, calendarAdapter, timeAdapter, controls]` → `{ model, displayValue, adapter: { date, time }, controls }`

- **Renamed `parsedModel` prop to `displayValue`** across `DatepickerProps`, `TimepickerProps`, and `DateTimePickerProps`. Template bindings change from `:parsed-model` to `:display-value`.

- **Result type interfaces renamed from tuples to object interfaces**: `AdapterResult`, `TimeAdapterResult`, and `DateTimeAdapterResult` are now named interfaces with `model`, `displayValue`, and `adapter` properties instead of positional tuple types.

### New Component
- Added `VkDateTimePicker`, a two-step date-and-time picker that combines `VkCalendar` and `VkTime` into a unified selection flow (date → time). The value is committed only when the user confirms via the OK button. A back button allows returning to date selection.

### Composables
- Added `useDateTimeAdapter` composable that manages shared model state between the calendar and time adapters, exposing `DateTimeControls` with `commitSelection()` and `resetSelection()` for staged (pending) date-time selection.

### Utilities
- Extracted `formatDateTime` utility to `src/utils/formatDateTime.ts`, consolidating date/time formatting logic previously duplicated across `useDateAdapter`, `useTimeAdapter`, and `useDateTimeAdapter`. Exported as a public API from the package.

### Types
- Added `DateTimePickerProps`, `DateTimeAdapterProps`, `DateTimeControls`, `DateTimeAdapter`, and `DateTimeAdapterResult` interfaces.

### Styles
- Added `DateTimePicker.styles.ts` with `tv()` slots: `container`, `content`, `dateSection`, `timeSection`, `backAction`, `backButton`, `actions`.
- Fixed z-index from `z-10` to `z-50` in `Datepicker.styles.ts` and `Timepicker.styles.ts` to prevent dropdown clipping.
- Added `bg-inherit` to datepicker and timepicker container styles for proper background inheritance.

### Tests
- Added 31 tests for the `DateTimePicker` component covering props, two-step navigation, emit behavior, and controls integration.
- Added unit tests for the `formatDateTime` utility.
- Updated all existing adapter and picker test files (`Calendar.spec.ts`, `Time.spec.ts`, `Datepicker.spec.ts`, `Timepicker.spec.ts`, `useDateAdapter.spec.ts`, `useTimeAdapter.spec.ts`) to use the new object destructuring and renamed props.

---

## Valko-UI Docs

### Pages
- Added documentation page for the new `DateTimePicker` component with playground, examples (colors, variants, shapes, sizes), and full API reference.
- Updated `datepicker`, `timepicker`, and `datetimepicker` docs pages with new object destructuring syntax, `:display-value` prop bindings, updated code snippets, and revised API tables reflecting the new adapter result types.

### Styles
- Changed `overflow-x-auto` to `overflow-x-visible` in DocSection playground container to prevent dropdown clipping.

### Layout
- Added `DateTimePicker` entry to the docs sidebar navigation.
