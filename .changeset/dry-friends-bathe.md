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

- Added `useEventCalendarAdapter` composable to handle timezone offset calculations, hour-range display generation, event placement math and position-to-time conversion.
- Added `useEventCalendarDrag` composable to handle drag-and-drop of events across day and week time grids and month cells, with ghost preview and snapping to quarter-hour increments.
- Added `useEventCalendarResize` composable to handle top/bottom edge resizing of events with ghost preview, minimum duration constraints and quarter-hour snapping.

### Types

- Added `EventCalendar` types including `CalendarEvent`, `Timezone`, `ViewMode`, `EventAdapterResult` and all view/component prop interfaces.
- Added `DragContext`, `ResizeContext`, `EventDropPayload` and `EventResizePayload` types for drag-and-drop and resize interactions.

### Styles

- Added `EventCalendar.styles.ts` with tailwind-variants slots for all calendar elements.
- Supports `variant` (filled, outlined, ghost), `color`, `size` (xs, sm, md, lg) and `shape` (rounded, soft, square) variants.

### Features

- Column-based layout for overlapping events in day and week views, dividing available width equally among concurrent events.
- Stacked event layout mode with z-index layering for overlapping events.
- Drag-and-drop support for moving events across time slots and days, with real-time ghost preview.
- Edge resizing support for changing event start/end times by dragging top or bottom handles.
- Out-of-range event filtering to prevent rendering events outside the configured `hourRange`.
- Card-from-deck hover effect on events with `translateY` lift and shadow increase.
- Abbreviated timezone labels with tooltip showing the full timezone name on hover.
- Interactive "+N more" indicator in month view using `VkPopover` to display hidden events on click.
- Current time marker with colored dot and line in day and week views.
- Full keyboard accessibility across all interactive elements.
- Internal state management with `v-model` support for both `modelValue` (date) and `currentView`.

### Tests

- Added comprehensive test suite with 1440 tests covering all composables and components.
- Added tests for `useEventCalendarAdapter`, `useEventCalendarDrag`, `useEventCalendarResize`, `EventCalendar`, `EventCalendarHeader`, `EventDayView`, `EventWeekView` and `EventMonthView`.

---

## Valko-UI Docs

### Pages

- Added `event-calendar` documentation page with playground and example sections.
- Added Event Calendar entry to the docs sidebar navigation menu.

### Templates

- Added Event Calendar template page with full CRUD operations (create, edit, delete events).
- Template includes left sidebar menu, header with "New Event" button, week view calendar, event detail/edit modal, delete confirmation modal and new event creation modal.
- Registered Event Calendar template in the templates gallery and sidebar menu.
