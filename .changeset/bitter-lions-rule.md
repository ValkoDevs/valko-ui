---
"@valko-ui/components": minor
"@valko-ui/docs": patch
---

## Valko-UI Components:

### Components

- **Input:** 
  - Added `disableIconClickFocus` prop to `Input` (default: false), allowing users to control whether icon clicks focus the input field.
  - Added `forceClearable` prop to `Input` (default: false), allowing the clear icon to work even when the input is readonly.
  - Fixed guard clauses in `clearInput` and `handleIconClick` to allow the expected events to be emitted.
- **Select:** 
  - Fixed forwarding of the `left-icon` slot and `leftIconClick` event.
  - Forwarded the `disableIconClickFocus` prop to the underlying `Input`.

### Tests

- **Input:**
  - Added tests for the `forceClearable` prop.
- **Select:**
  - Added tests for the `left-icon` slot and `leftIconClick` event.

---

## Valko-UI Docs:

### Pages
- **Input:**
  - Added the `disableIconClickFocus` prop to the API documentation.
  - Added missing `clearable` prop to the API documentation.
  - Removed stale `rounded` prop from API docs (replaced by `shape`).
  - Fixed `cursor` values from `cursor | text` to `pointer, text`.
  - Fixed incorrect default values for `modelValue`, `label`, and `helpertext`.
- **Select:**
  - Documented the `SelectOption` interface in the API section.
  - Added documentation for the `leftIconClick` event in the API section.
  - Added documentation for the `left-icon` slot in the API section.
  - Removed stale `rounded`, `iconLeft`, and `iconRight` props from API docs.
  - Fixed `shape` description from "Button" to "Select".
  - Fixed incorrect default values for `modelValue`, `label`, and `helpertext`.
  - Added the `disableIconClickFocus` prop to the API documentation.
