---
"@valko-ui/components": minor
---

## Valko-UI Components

### Keyboard Navigation Module

- Introduced a new `keyboard-navigation` module that extracts and centralizes keyboard navigation logic previously duplicated across components.
- Components now configure navigation through a single `handleKeyboardNavigation` function using a strategy-based discriminated union (`indexed`, `value`, `grid`).
- Added `indexed` adapter for list-based navigation with looping and selection support.
- Added `value` adapter for increment/decrement navigation with min/max clamping.
- Added `grid` adapter with 2D row/column navigation and disabled-cell skipping.
- Defined a `NavigationKey` union type to restrict key maps to valid keyboard keys, preventing arbitrary string access.

### Components

- **Menu, Select:** Migrated inline keyboard handlers to the new `handleKeyboardNavigation` API.
- **Dropdown:** Added full keyboard navigation for menu items (arrow keys, Home/End, Enter/Space) and trigger arrow key support to open and focus.
- **Pagination:** Added keyboard navigation with value adapter for page increment/decrement.
- **CalendarDayView, CalendarMonthView, CalendarYearView:** Added grid-based keyboard navigation with roving tabindex, focus sync to selected value, and `data-kb-index` attributes.
- **Range:** Added `Thumb` union type and `ThumbHandlers` interface, replacing magic strings with a `buildThumbHandlers` factory and `thumbHandlers` record.

### Build & Module Config

- Updated Nuxt module to register the `keyboard-navigation` directory via `addImportsDir`.
- Updated Vite config to include `keyboard-navigation` source files in `rollup-plugin-copy` targets and `rollup-plugin-typescript2` include patterns.
- Exported `handleKeyboardNavigation` and strategy config types from the package entry point.
