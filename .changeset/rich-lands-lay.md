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

- **Removed `container` and `content` style slots from all picker components.** Datepicker, Timepicker, and DateTimePicker no longer expose `container` or `content` keys in their `styleSlots` prop. These are now managed internally by VkPopover. Consumers using `styleSlots.container` or `styleSlots.content` on pickers must remove those entries.

### New Component
- Added `VkDateTimePicker`, a two-step date-and-time picker that combines `VkCalendar` and `VkTime` into a unified selection flow (date → time). The value is committed only when the user confirms via the OK button. A back button allows returning to date selection.

### Composables
- Added `useDateTimeAdapter` composable that manages shared model state between the calendar and time adapters, exposing `DateTimeControls` with `commitSelection()` and `resetSelection()` for staged (pending) date-time selection.

### Utilities
- Extracted `formatDateTime` utility to `src/utils/formatDateTime.ts`, consolidating date/time formatting logic previously duplicated across `useDateAdapter`, `useTimeAdapter`, and `useDateTimeAdapter`. Exported as a public API from the package.

### Components
- Refactored `VkDatepicker`, `VkTimepicker`, and `VkDateTimePicker` to use `VkPopover` internally for dropdown positioning, replacing manual click-outside detection (`mousedown` listener), lifecycle hooks (`onMounted`/`onBeforeUnmount`), transition wrappers, and absolute-positioned content divs. The consumer-facing API (`isOpen` prop, `open`/`close` emits) is unchanged.

### Types
- Added `DateTimePickerProps`, `DateTimeAdapterProps`, `DateTimeControls`, `DateTimeAdapter`, and `DateTimeAdapterResult` interfaces.
- Changed `TimepickerProps` to extend `Omit<TimeProps, 'styleSlots'>` instead of `TimeProps` directly, resolving a type incompatibility exposed by the style slot removal.

### Styles
- Added `DateTimePicker.styles.ts` with `tv()` slots: `dateSection`, `timeSection`, `backAction`, `backButton`, `actions`.
- Removed `container` and `content` slots from `Datepicker.styles.ts`, `Timepicker.styles.ts`, and `DateTimePicker.styles.ts` — positioning and background are now handled by VkPopover's panel.
- Removed `shape` variant values from picker styles (previously applied to the removed `content` slot) — shape is now delegated to VkPopover via its `shape` prop.

### Tests
- Added 31 tests for the `DateTimePicker` component covering props, two-step navigation, emit behavior, and controls integration.
- Added unit tests for the `formatDateTime` utility.
- Updated all existing adapter and picker test files (`Calendar.spec.ts`, `Time.spec.ts`, `Datepicker.spec.ts`, `Timepicker.spec.ts`, `useDateAdapter.spec.ts`, `useTimeAdapter.spec.ts`) to use the new object destructuring and renamed props.
- Updated picker test selectors from `.vk-datepicker__content` / `.vk-timepicker__content` / `.vk-datetimepicker__content` to `.vk-popover__panel`.
- Updated click-outside tests from `mousedown` to `click` events to match VkPopover's event handling.

---

## Valko-UI Docs

### Pages
- Added documentation page for the new `DateTimePicker` component with playground, examples (colors, variants, shapes, sizes), and full API reference.
- Updated `datepicker`, `timepicker`, and `datetimepicker` docs pages with new object destructuring syntax, `:display-value` prop bindings, updated code snippets, and revised API tables reflecting the new adapter result types.
- Removed `container` and `content` entries from the Style Slots Interface tables in all three picker docs pages. Removed the entire Style Slots Interface section from the datepicker docs (no style slots remain).

### Styles
- Changed `overflow-x-auto` to `overflow-x-visible` in DocSection playground container to prevent dropdown clipping.

### Layout
- Added `DateTimePicker` entry to the docs sidebar navigation.
