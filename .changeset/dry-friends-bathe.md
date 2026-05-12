---
"@valko-ui/components": minor
"@valko-ui/docs": minor
---

## Valko-UI Components

### New Component: EventCalendar

- Added `VkEventCalendar` component with support for day, week and month views.
- Added `VkEventCalendarHeader` sub-component with navigation arrows, today button, date label and view switcher dropdown.
- Added `VkEventDayView`, `VkEventWeekView` and `VkEventMonthView` sub-components for each view mode.

### Composables

- Added `useEventCalendarAdapter` composable to handle timezone offset calculations and hour-range display generation.

### Types

- Added `EventCalendar` types including `CalendarEvent`, `Timezone`, `ViewMode`, `EventAdapterResult` and all view/component prop interfaces.

### Styles

- Added `EventCalendar.styles.ts` with tailwind-variants slots for all calendar elements.
- Supports `variant` (filled, outlined, ghost), `color`, `size` (xs, sm, md, lg) and `shape` (rounded, soft, square) variants.

### Features

- Column-based layout for overlapping events in day and week views, dividing available width equally among concurrent events.
- Card-from-deck hover effect on events with `translateY` lift and shadow increase.
- Abbreviated timezone labels with tooltip showing the full timezone name on hover.
- Interactive "+N more" indicator in month view using `VkPopover` to display hidden events on click.
- Current time marker with colored dot and line in day and week views.
- Full keyboard accessibility across all interactive elements.
- Internal state management with `v-model` support for both `modelValue` (date) and `currentView`.

---

## Valko-UI Docs

### Pages

- Added `event-calendar` documentation page with playground and example sections.
- Added Event Calendar entry to the docs sidebar navigation menu.
