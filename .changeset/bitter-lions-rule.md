---
"@valko-ui/components": patch
"@valko-ui/docs": patch
---

## Valko-UI Components

### Components

- Added `iconClickFocus` prop to `Input` (default: true), allowing users to control whether icon clicks focus the input field.
- Improved event forwarding in `Select` by forwarding both left and right icon slots and their respective emits from `Input`.
- Chevron icon in `Select` is now rendered independently and no longer occupies the right icon slot of `Input`.

### Styles

- Introduced `rightIcon` and `clearIcon` style slots in `Select.styles.ts` to enable custom padding and spacing for icons.
- Renamed the `icon` slot to `chevronIcon` in `Select.styles.ts` for clarity and consistency.

---

## Valko-UI Docs

### Components
- Documented the `SelectOption` interface in the Select API section.
- Added documentation for left and right icon emits in the Select API section.
- Included documentation for left and right icon slots in the Select API section.
- Added the `iconClickFocus` prop to the Input API documentation.
