---
"@valko-ui/components": minor
"@valko-ui/docs": minor
---

## Valko-UI Components

### Components

- Added `VkDateTimePicker`, a two-step date-and-time picker that combines `VkCalendar` and `VkTime` into a unified selection flow (date → time → confirm).

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

### Styles

- Added `DateTimePicker.styles.ts` with slots: `dateSection`, `timeSection`, `backAction`, `backButton`, `actions`.

### Tests

- Added 31 tests for `VkDateTimePicker` covering props, navigation, emits, and controls.
- Added unit tests for `formatDateTime`.
- Updated all adapter and picker tests to use new object destructuring, renamed props, updated selectors, and `click` events.

---

## Valko-UI Docs

### Pages

- Added documentation page for `VkDateTimePicker` with playground, examples, and API reference.
- Updated `datepicker`, `timepicker`, and `datetimepicker` docs with new destructuring syntax, `:display-value` bindings, and revised API tables.

### Layout

- Added `DateTimePicker` entry to the docs sidebar navigation.
