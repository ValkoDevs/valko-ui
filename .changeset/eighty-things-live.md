---
"@valko-ui/components": patch
"@valko-ui/docs": patch
---

### Components

- **Badge**
  - Updated `placement` prop to use `Placement` type instead of `Corner` type.
  - Added `alignment` prop for more flexible badge positioning.

### Docs

- Introduced shared `alignment` and `placement` options in utils to reduce repetition across pages.
- Refactored all doc pages to use the new shared options.
