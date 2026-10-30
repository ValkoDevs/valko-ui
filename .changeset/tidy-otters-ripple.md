---
"@valko-ui/components": minor
---

## Valko-UI Components

### Components

- **Dropdown:**
  - Added ripple feedback when an item is activated with pointer input (`mousedown`/`touchstart`).
  - Disabled items do not trigger the ripple effect.

- **Menu:**
  - Added ripple feedback when an item is activated with pointer input (`mousedown`/`touchstart`).
  - Disabled items do not trigger the ripple effect.

### Composables

- **useRipple:**
  - The element reference parameter is now optional; when omitted, the ripple is attached to the element that received the interaction.
