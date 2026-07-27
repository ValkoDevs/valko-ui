---
"@valko-ui/components": minor
"@valko-ui/docs": minor
---

## Valko-UI Components

### Breaking Changes

- Changed existing adapter composable return types from tuples to named objects:
  - `useDateAdapter`: `[model, parsedModel, adapter]` → `{ model, displayValue, adapter }`
  - `useTimeAdapter`: `[model, parsedModel, adapter]` → `{ model, displayValue, adapter }`

- Renamed `parsedModel` prop to `displayValue` in existing picker APIs:
  - `DatepickerProps`
  - `TimepickerProps`

### Components

- Added `VkDateTimePicker`, a two-step date-and-time picker that combines `VkCalendar` and `VkTime` into a unified selection flow (date → time → confirm).

### Composables

- Added `useDateTimeAdapter` composable for shared model state between calendar and time adapters.
- Added date-time selection controls through `commitSelection()` and `resetSelection()`.
- Standardized adapter results around named object structures:
  - `useDateAdapter`: `{ model, displayValue, adapter }`
  - `useTimeAdapter`: `{ model, displayValue, adapter }`
  - `useDateTimeAdapter`: `{ model, displayValue, adapter: { date, time }, controls }`

### Utilities

- Extracted `formatDateTime` to `src/utils/formatDateTime.ts`, consolidating duplicated formatting logic from date, time, and datetime adapters.
- Exported `formatDateTime` as part of the public API.

### Types

- Added:
  - `DateTimePickerProps`
  - `DateTimeAdapterProps`
  - `DateTimeControls`
  - `DateTimeAdapter`
  - `DateTimeAdapterResult`

### Styles

- Added `DateTimePicker.styles.ts` with slots:
  - `dateSection`
  - `timeSection`
  - `backAction`
  - `backButton`
  - `actions`

- Updated input autofill handling in `valkoui.css` to preserve input variant styling when browser autofill styles are applied.

### Tests

- Added 31 tests for `VkDateTimePicker` covering props, navigation, emits, and controls.
- Added unit tests for `formatDateTime`.
- Updated adapter and picker tests to use named object destructuring, renamed props, updated selectors, and `click` events.

---

## Valko-UI Docs

### Pages

- Added documentation page for `VkDateTimePicker` with playground, examples, and API reference.
- Updated `datepicker` and `timepicker` documentation with:
  - new adapter destructuring syntax
  - `:display-value` bindings
  - revised API tables

### Layout

- Added `DateTimePicker` entry to the docs sidebar navigation.
