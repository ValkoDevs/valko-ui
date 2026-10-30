---
"@valko-ui/components": patch
---

## Valko-UI Components

### Components

- **Time:**
  - Time columns now render as an equal-width grid based on the units visible in the format (hours, minutes, seconds) instead of a fixed three-column layout.
  - Columns share the available space consistently and shrink evenly; the grid no longer shrinks below its content, preventing incorrect shrinking and horizontal scrolling inside the `TimePicker` popover.
  - The footer now spans all rendered columns.
