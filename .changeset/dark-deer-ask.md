---
"@valko-ui/components": minor
"@valko-ui/docs": minor
---

## @valko-ui/components

### General
- Upgraded to **TailwindCSS v4**. Since the `tailwind.config.ts` file is no longer used, all theme color variants have been moved to `valkoui.css`.
- The `flat` prop has been removed across all components. Components now default to **elevation level 0**, which has no shadow. Some components (like `Button`) can now be visually elevated by setting an `elevated` prop (e.g., from 0 to 1).

### Components
- **Alert**: Removed `flat` prop.
- **Avatar**: Added `elevated` prop.
- **Badge**: Removed `flat` prop.
- **Breadcrumbs**: Removed `flat` prop.
- **Button**:
  - Replaced `flat` with `elevated`.
  - Removed unnecessary bindings for `condensed` and `block`.
  - Added `stateLayer`.
  - Removed dynamic classes for the loader.
- **Calendar**: Fixed a typo in import (was `CalendayMonthView`, now correctly `CalendarMonthView`).
- **Card**: Replaced `flat` with `elevated`.
- **Checkbox**: Added `stateLayer`.
- **Drawer**: Removed `flat` prop.
- **Dropdown**: Replaced `flat` with `elevated`.
- **Modal**: Removed `flat` prop.
- **Navbar**: Replaced `flat` with `elevated`. Now uses elevation level 1 when `elevated` and level 2 when `sticky`.
- **Pagination**: Replaced `flat` with `elevated`.
- **Popover**: Replaced `flat` with `elevated`.
- **Radio**: Added `stateLayer`.
- **Switch**: Simplified `thumb` span class by removing unnecessary template string.
- **Tooltip**: Replaced `flat` with `elevated`.
- **Notification**: Replaced `flat` with `elevated`.

### Styles
- All style files were updated to use the new color variable names.
- Removed all references to `flat` and replaced them with `elevated` where applicable.

### Types
- Removed `flat` prop from: `Alert`, `Badge`, `Breadcrumbs`, `Checkbox`, `Datepicker`, `Drawer`, `Modal`, `Notification`, `Switch`, `Timepicker`.
- Replaced `flat` with `elevated` in: `Avatar`, `Button`, `Card`, `Dropdown`, `Navbar`, `Pagination`, `Popover`, `Tooltip`.
- Updated `common.ts` to rename color variables:
  - `neutral` → `secondary`
  - `info` → `accent`
  - `success` → `positive`
  - `error` → `negative`

---

## @valko-ui/docs

### General
- Updated all documentation pages to reflect the changes introduced in TailwindCSS v4 and component updates.

### Assets
- Updated `styles.css` to use new color variable names.

### Components
- **CodeBlock**, **SiteLinks**, **ThemeSwitch**: Updated color variables.
- **DocSection**, **ExampleSection**: Updated styles.

### Layouts
- **Docs**: Moved `Dropdown` from the `Data` group to the `UI` group. Updated color variables.
- **Templates**: Updated color variables.

### Templates
- Removed all remaining instances of the `flat` prop.

### Utils
- Renamed colors to match new variable naming conventions.
