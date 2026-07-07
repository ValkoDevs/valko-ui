---
"@valko-ui/components": minor
---

## Valko-UI Components

### Composables

- Added `useListKeyboardNav` composable for list-based navigation with looping, Home/End, and Enter/Space selection support.
- Added `useGridKeyboardNav` composable for 2D row/column navigation with disabled-cell skipping.
- Added `useRangeKeyboardNav` composable for increment/decrement navigation with min/max clamping.

### Components

- **Menu, Select, Dropdown:** Replaced inline keyboard handlers with the `useListKeyboardNav` composable.
- **Dropdown:** Added keyboard navigation for menu items (arrow keys, Home/End, Enter/Space) and trigger arrow key support to open and focus.
- **Pagination:** Added keyboard navigation with `useRangeKeyboardNav` for page increment/decrement.
- **CalendarDayView, CalendarMonthView, CalendarYearView:** Added grid-based keyboard navigation with `useGridKeyboardNav`, roving tabindex, focus sync to selected value, and `data-kb-index` attributes.
- **Range:** Replaced inline keyboard handlers with the `useRangeKeyboardNav` composable. Replaced magic strings with a `buildThumbHandlers` factory and `thumbHandlers` record.

### Types

- Added `keyboardNavigation` types file containing:
  - `NavigationKey` union type to restrict key maps to valid keyboard keys.
  - `KeyMap`, `ListNavigationConfig`, `GridNavigationConfig`, and `RangeNavigationConfig` interfaces.
- **Range:**
  - Added `Thumb` union type to replace magic strings.
  - Added `ThumbHandlers` interface.

### Tests

- Added dedicated test suites covering boundary conditions, disabled cells, looping, and reactive values for:
  - `useListKeyboardNav`
  - `useGridKeyboardNav`
  - `useRangeKeyboardNav`
- Refactored `Menu`, `Select`, `Range`, `Dropdown`, `Pagination`, and `Calendar` component tests to mock their respective composables and verify integration instead of duplicating navigation behavior tests.

### Build & Module Config

- Exported `useListKeyboardNav`, `useGridKeyboardNav`, `useRangeKeyboardNav`, and keyboard navigation types from the package entry point.
