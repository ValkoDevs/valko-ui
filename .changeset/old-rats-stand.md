---
"@valko-ui/components": minor
---

## Valko-UI Components

### Composables

- Added `useListKeyboardNav` composable for list-based navigation with looping, Home/End, and Enter/Space selection support.
- Added `useGridKeyboardNav` composable for 2D row/column navigation with disabled-cell skipping.
- Added `useRangeKeyboardNav` composable for increment/decrement navigation with min/max clamping.

### Components

- **Menu, Select, Dropdown:** Replaced inline keyboard navigation logic with the `useListKeyboardNav` composable and simplified component implementations.
- **Dropdown:** Added keyboard navigation for menu items (arrow keys, Home/End, Enter/Space) and trigger arrow key support to open the menu and focus the first or last item.
- **Pagination:** Added keyboard navigation with `useRangeKeyboardNav` for page increment/decrement.
- **CalendarDayView, CalendarMonthView, CalendarYearView:** Added grid-based keyboard navigation with `useGridKeyboardNav`, roving tabindex, focus synchronization, and `data-kb-index` attributes.
- **Range:** Replaced inline keyboard navigation logic with the `useRangeKeyboardNav` composable and simplified thumb event handling through a shared factory.

### Types

- Added `keyboardNavigation` types containing:
  - `NavigationKey`
  - `KeyMap`
  - `ListNavigationConfig`
  - `GridNavigationConfig`
  - `RangeNavigationConfig`
- **Range:**
  - Added `Thumb` union type.
  - Added `ThumbHandlers` interface.

### Tests

- Added dedicated test suites for:
  - `useListKeyboardNav`
  - `useGridKeyboardNav`
  - `useRangeKeyboardNav`
- Added coverage for boundary conditions, looping, disabled items/cells, and reactive state handling.
- Refactored `Menu`, `Select`, `Dropdown`, `Range`, `Pagination`, and `Calendar` tests to mock the keyboard navigation composables and verify component integration instead of duplicating navigation behavior.

### Build & Module Config

- Exported `useListKeyboardNav`, `useGridKeyboardNav`, `useRangeKeyboardNav`, and keyboard navigation types from the package entry point.
