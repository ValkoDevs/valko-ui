---
"@valko-ui/components": minor
"@valko-ui/docs": minor
---

## Valko-UI Components

### New Component
- Added `VkDateTimePicker`, a unified date-and-time picker that combines `VkCalendar` and `VkTime` into a two-step selection flow (date → time), committing the value only when the user confirms via the OK button.

### Composables
- Added `useDateTimeAdapter` composable that manages shared model state between the calendar and time adapters, exposing `DateTimeControls` with `commitSelection()` and `resetSelection()` for staged (pending) date-time selection.

### Types
- Added `DateTimePickerProps` interface with support for all date/time constraint props, `calendarAdapter`, `timeAdapter`, and `controls`.

### Styles
- Added `DateTimePicker.styles.ts` with `tv()` slots: `container`, `content`, `dateSection`, `timeSection`, `backAction`, `backButton`, `actions`.

### Tests
- Added 31 tests for the DateTimePicker component covering props, two-step navigation, emit behavior, and controls integration.

---

## Valko-UI Docs

### Pages
- Added documentation page for the new DateTimePicker component.
