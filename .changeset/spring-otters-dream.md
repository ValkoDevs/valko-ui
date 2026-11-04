---
"@valko-ui/components": minor
---

## Valko-UI Components:

- Added the new `stackable` prop to the `Modal` component, allowing multiple instances to stay open at the same time (e.g. a modal opened on top of another one). Defaults to `false`, which keeps the previous single-active behavior: opening a new Modal closes the open one.
- Modal and Drawer dismissals are now coordinated through a shared overlay stack: outside clicks and `Escape` only close the topmost overlay, and interacting with a stacked modal no longer dismisses the one underneath.
