---
"@valko-ui/components": minor
"@valko-ui/docs": patch
---

## Valko-UI Components:

### Components

- **Input:** 
  - Added `disableIconClickFocus` prop to `Input` (default: false), allowing users to control whether icon clicks focus the input field.
  - Added `suffix-icon` slot, this is commonly used as a complement icon, for (eg. Select component uses it for the chevron.)
  - Added `suffixIconClick` emit allowing user to trigger custom behavior on icon click.
- **Select:** 
  - Improved event forwarding in `Select` by forwarding both left and right icon slots and their respective emits from `Input`.
  - Chevron icon in `Select` has now its own dedicated slot and no longer occupies the right icon slot of `Input`.
  - Added `disableIconClickFocus` prop to `Select` (default: true), allowing users to control wheter icon clicks focus the input field.
  - Added `suffix-icon` slot, this defaults to the chevron icon, we're forwarding `is-open` and `toggleDropdown` allowing it to be customizable and dynamic.

### Styles

- **Input:**
  - Replaced individual icon positioning (`right-N` with data-attribute compound variants) with a flex-based `rightIconsContainer` that manages spacing via `gap`.
  - Replaced per-icon boolean data attributes (`data-right-icon`, `data-clear-icon`, `data-suffix-icon`, `data-chevron-icons`) on the `<input>` element with a single numeric `data-right-icon-count` attribute for padding calculation.
  - Added `rightIconsContainer` style slot for the right-side icons wrapper.
  - All right-side icons (clear, right, suffix, chevrons) are now rendered inside a single flex container with consistent gap-based spacing per size.

### Tests

- **Select:**
  - Added tests for `left-icon`, `right-icon`, and `suffix-icon` slot rendering and forwarding.
  - Added tests for `suffix-icon` scoped slot props (`is-open`, `toggle-dropdown`).
  - Added tests for `leftIconClick`, `rightIconClick`, and `suffixIconClick` event forwarding.

---

## Valko-UI Docs:

### Pages
- **Input:**
  - Added the `disableIconClickFocus` prop to the API documentation.
  - Added missing `clearable` prop to the API documentation.
  - Removed stale `rounded` prop from API docs (replaced by `shape`).
  - Fixed `cursor` values from `cursor | text` to `pointer, text`.
  - Fixed incorrect default values for `modelValue`, `label`, and `helpertext`.
  - Added `@suffix-icon-click` listener to playground.
- **Select:**
  - Documented the `SelectOption` interface in the API section.
  - Added documentation for left, right, suffix icon emits in the API section.
  - Included documentation for left, right, and suffix icon slots in the API section.
  - Added the `disableIconClickFocus` prop to the API documentation.
  - Added the `suffixIcon` style slot to the API documentation.
  - Removed stale `rounded`, `iconLeft`, and `iconRight` props from API docs.
  - Fixed `shape` description from "Button" to "Select".
  - Fixed incorrect default values for `modelValue`, `label`, and `helpertext`.
