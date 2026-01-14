---
"@valko-ui/components": patch
---

## Valko-UI Components:

### Components:

- **Select:** Added a guard clause to prevent runtime errors during keyboard navigation and testing.
- **Calendar:** Removed unreachable guard logic and added `data-selection-type` for reliable view switching tests.
- **Breadcrumbs:** Updated `tabindex` logic to use `crumb disabled state`, improving accessibility and removing unreachable code.
- **Popover:** Added `data-open` attribute for more reliable test assertions.

### Tests:
- Improved coverage for keyboard navigation, ARIA, composables, rendering, animations.
- Added missing tests for Calendar child components (DayView, YearView, MonthView, Header).
