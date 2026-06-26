---
"@valko-ui/components": patch
---

## Valko-UI Components:

### Components:

- **Select:** Added a guard clause to prevent runtime errors during keyboard navigation and testing.
- **Calendar:** Removed unreachable guard logic and added `data-selection-type` for reliable view switching tests.
- **Breadcrumbs:** Updated `tabindex` logic to use `crumb disabled state`, improving accessibility and removing unreachable code.
- **Popover:** Added `data-open` attribute for more reliable test assertions.
- **Dropdown:** Removed unreachable guard clause in onItemClick.
- **Timepicker:** Fixed unmount logic to remove event listener instead of adding; removed right-icon listener (cannot be triggered on readonly input).
- **Datepicker:** Removed right-icon listener (cannot be triggered on readonly input).

### Tests:

- Significantly increased coverage for components and composables, including functions, methods, computed properties, refs, watchers, and returned values.
- Added missing tests for Calendar child components (DayView, YearView, MonthView, Header).
- Improved ARIA and accessibility test coverage.
- Refactored test structure for clarity: accurate describe blocks, modularized tests, and efficient use of beforeEach/afterEach to reduce repetition.
- Added tests for new features and previously untested behaviors.
- Enhanced test modularity and reduced code repetition.
